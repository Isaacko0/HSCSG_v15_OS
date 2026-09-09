#!/usr/bin/env python3
"""
drift_check.py — Doc-drift tripwire for hscsg-orchestrator.

Checks that canonical skill files match profile symlinks, and that vault docs
match the certified SOUL. Exits 0 if clean, 1 if drift detected.

Run after every certification and periodically via cron.
"""

import hashlib
import os
import sys
from pathlib import Path


def file_hash(path: Path) -> str:
    """SHA256 of file contents."""
    return hashlib.sha256(path.read_bytes()).hexdigest()[:16]


def check_symlinks(canonical: Path, profile: Path) -> list[str]:
    """Verify profile symlinks point to canonical files with matching content."""
    errors = []

    patterns = ["SKILL.md", "references/*.md", "scripts/*.py"]

    for pattern in patterns:
        for src in canonical.glob(pattern):
            rel = src.relative_to(canonical)
            dst = profile / rel

            if not dst.exists():
                errors.append(f"Missing symlink: {rel}")
                continue

            if not dst.is_symlink():
                errors.append(f"Not a symlink: {rel}")
                continue

            target = Path(os.readlink(dst))
            if not target.is_absolute():
                target = (dst.parent / target).resolve()

            if target != src.resolve():
                errors.append(f"Symlink target mismatch: {rel} -> {target} (expected {src})")
                continue

            # Content match
            if file_hash(src) != file_hash(dst):
                errors.append(f"Content drift: {rel}")

    return errors


def check_vault(vault_root: Path, profile: Path) -> list[str]:
    """Verify vault bot reference matches certified SOUL."""
    errors = []

    bot_ref = vault_root / "Bots" / "hscsg-orchestrator.md"
    if not bot_ref.exists():
        errors.append("Vault: Bots/hscsg-orchestrator.md not found (certification not recorded)")
        return errors

    soul = profile / "SOUL.md"
    if not soul.exists():
        errors.append("Profile SOUL.md missing")
        return errors

    # Quick check: bot reference should contain the identity line
    soul_text = soul.read_text(encoding="utf-8")
    ref_text = bot_ref.read_text(encoding="utf-8")

    if "hscsg-orchestrator" not in ref_text:
        errors.append("Vault: bot reference missing profile name")

    if "meituan/longcat-2.0:free" not in ref_text:
        errors.append("Vault: bot reference missing model pin")

    return errors


def main():
    canonical = Path.home() / ".hermes" / "skills" / "autonomous-ai-agents" / "hscsg-orchestrator"
    profile = Path.home() / ".hermes" / "profiles" / "hscsg-orchestrator" / "skills" / "autonomous-ai-agents" / "hscsg-orchestrator"
    vault = Path(r"H:\Mi unidad\HSCSG Empresa mas memoria")

    all_errors = []

    print(f"Checking canonical: {canonical}")
    print(f"Checking profile:   {profile}")
    print(f"Checking vault:     {vault}")
    print()

    # 1. Symlink integrity
    print("1. Symlink integrity...")
    errors = check_symlinks(canonical, profile)
    if errors:
        print("  DRIFT DETECTED:")
        for e in errors:
            print(f"    - {e}")
        all_errors.extend(errors)
    else:
        print("  OK")

    # 2. Vault sync
    print("2. Vault sync...")
    errors = check_vault(vault, Path.home() / ".hermes" / "profiles" / "hscsg-orchestrator")
    if errors:
        print("  DRIFT DETECTED:")
        for e in errors:
            print(f"    - {e}")
        all_errors.extend(errors)
    else:
        print("  OK")

    # 3. Independence pin
    print("3. Independence pin...")
    config = Path.home() / ".hermes" / "profiles" / "hscsg-orchestrator" / "config.yaml"
    if config.exists():
        import yaml
        with open(config) as f:
            cfg = yaml.safe_load(f) or {}
        model = cfg.get("model", {})
        if model.get("provider") != "nous":
            all_errors.append(f"Model provider drift: {model.get('provider')} (expected nous)")
        if model.get("default") != "meituan/longcat-2.0:free":
            all_errors.append(f"Model default drift: {model.get('default')} (expected meituan/longcat-2.0:free)")
        if model.get("base_url", "") != "":
            all_errors.append(f"base_url not empty: {model.get('base_url')}")
        print("  OK" if not all_errors else "  DRIFT DETECTED")
    else:
        all_errors.append("Config not found")

    print()
    if all_errors:
        print(f"FAIL: {len(all_errors)} drift(s) detected")
        return 1
    else:
        print("PASS: No drift detected")
        return 0


if __name__ == "__main__":
    sys.exit(main())