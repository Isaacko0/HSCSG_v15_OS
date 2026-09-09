#!/usr/bin/env python3
"""
link_skill_tree.py — File-level symlink linker for shared skills.

Canonical skill: ~/.hermes/skills/<category>/<name>/
Profile skill dir: <HERMES_HOME>/profiles/<profile>/skills/<category>/<name>/

Usage:
  python3 link_skill_tree.py --canonical ~/.hermes/skills/autonomous-ai-agents/hscsg-orchestrator \
    --profile ~/.hermes/profiles/hscsg-orchestrator/skills/autonomous-ai-agents/hscsg-orchestrator

Creates symlinks for:
  - SKILL.md
  - references/*.md
  - scripts/*.py

Never creates a directory symlink. Each file is symlinked individually.
"""

import argparse
import os
import shutil
from pathlib import Path


def link_file(canonical: Path, profile: Path, rel: Path) -> bool:
    """Link a single file. Returns True if linked, False if skipped."""
    src = canonical / rel
    dst = profile / rel

    if not src.exists():
        print(f"  [skip] {rel} — not in canonical")
        return False

    dst.parent.mkdir(parents=True, exist_ok=True)

    if dst.exists() or dst.is_symlink():
        if dst.is_symlink() and os.readlink(dst) == str(src):
            print(f"  [ok]   {rel} — already linked")
            return True
        # Different file or wrong symlink — replace
        dst.unlink()
        print(f"  [replace] {rel}")

    try:
        dst.symlink_to(src)
        print(f"  [link] {rel} -> {src}")
        return True
    except OSError as e:
        print(f"  [error] {rel}: {e}")
        return False


def main():
    parser = argparse.ArgumentParser(description="File-level skill symlinker")
    parser.add_argument("--canonical", required=True, help="Canonical skill directory")
    parser.add_argument("--profile", required=True, help="Profile skill directory")
    args = parser.parse_args()

    canonical = Path(args.canonical).resolve()
    profile = Path(args.profile).resolve()

    if not canonical.exists():
        print(f"Canonical not found: {canonical}")
        return 1

    print(f"Linking {canonical.name} -> {profile}")

    # Files to link (relative to skill root)
    patterns = [
        "SKILL.md",
        "references/*.md",
        "scripts/*.py",
    ]

    linked = 0
    for pattern in patterns:
        for src in canonical.glob(pattern):
            rel = src.relative_to(canonical)
            if link_file(canonical, profile, rel):
                linked += 1

    print(f"Done. {linked} files linked.")
    return 0


if __name__ == "__main__":
    exit(main())