# hscsg-orchestrator — Vault Conventions

## Vault Location

`H:\Mi unidad\HSCSG Empresa mas memoria\` (Obsidian vault)

## After Certification Only

**Never before.** Uncertified profiles do not get a `Bots/<name>.md` or a roster row.

## Files to Create/Update

### 1. `Bots/hscsg-orchestrator.md`

Frontmatter:
```yaml
---
type: bot-reference
profile: hscsg-orchestrator
model: meituan/longcat-2.0:free
provider: nous
status: certified
certified_at: "2026-09-08T14:35:12Z"
certification_cycle: "ALR-20260908-001"
tags: [hscsg, alraico, orchestrator, loopengine, assimilation]
---
```

Body: one-screen summary (identity, job, hard constraints, voice, what you are not) — mirror the SOUL.

### 2. `Bots/making-bots.md` (living process log)

Append one line per certified bot:
```
- **hscsg-orchestrator** — `ALR-20260908-001` — Alráico Orchestrator. Runs loopEngine cycles, governs assimilation pipeline, guards orchestrator-state.json, dispatches to specialist fleet. Certified 2026-09-08.
```

### 3. `Home.md` (fleet roster index)

Add roster row in the "Bots certificados" section:
| Bot | Role | Model | Certified | Cycle |
|-----|------|-------|-----------|-------|
| `hscsg-orchestrator` | Alráico Orchestrator | meituan/longcat-2.0:free (nous) | 2026-09-08 | ALR-20260908-001 |

### 4. Section owners (vault convention)

Each vault section has **one owner bot**. No dual ownership.
- `Bots/` → `hscsg-orchestrator` (this bot)
- `Backups/` → `hscsg-repo-assimilation`
- `Papers/` → `hscsg-scientific-papers`
- `Integrations/` → `hscsg-unified-assimilation-science`
- `Gaia/` → `hscsg-gaia-mycelium-integration`
- `Briefs/` → `brief-detector-recommender`

Owner = writes, maintains index, runs drift_check on their section.

## Drift Check

After every certification (and periodically):

```bash
python3 ~/.hermes/skills/autonomous-ai-agents/hscsg-orchestrator/scripts/drift_check.py
```

Must exit 0. If not, the canonical skill or vault docs have drifted — patch canonical, then re-link.