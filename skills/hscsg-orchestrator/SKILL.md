---
name: hscsg-orchestrator
description: "Use when running Alráico cycles, governing the assimilation pipeline, or guarding orchestrator-state.json."
version: 0.1.0
author: Isaacko0
license: MIT
platforms: [linux, macos, windows]
metadata:
  hermes:
    tags: [hscsg, alraico, orchestrator, loopengine, assimilation]
    category: autonomous-ai-agents
    related_skills: [hscsg-repo-assimilation, hscsg-scientific-papers, hscsg-unified-assimilation-science, hscsg-gaia-mycelium-integration, brief-detector-recommender]
---

# hscsg-orchestrator

Runs the **Sistema Alráico** cycles (`loopEngine` + `/simulador`), governs the assimilation pipeline (`repo-assimilation → scientific-papers → unified-assimilation-science`), guards `orchestrator-state.json` as the single source of truth, and dispatches work to the specialist fleet via kanban.

> The loop it enforces: **read state → compute tick → dispatch → verify → write state**.

## When to Use

- A new Alráico cycle needs to run (cron or manual trigger).
- The assimilation pipeline needs a stage dispatched/verified (`hscsg-repo-assimilation`, `hscsg-scientific-papers`, `hscsg-unified-assimilation-science`, `hscsg-gaia-mycelium-integration`, `brief-detector-recommender`).
- `orchestrator-state.json` drifted or needs a manual correction (human gate).
- A specialist bot failed certification or needs re-dispatch.
- Fleet peer reachability check (DM ack-then-vanish = missing peer).
- Vercel deploy health / kanban queue depth / cron health diagnosis.

Don't use for: operating services (Vercel, Nextcloud, ComfyUI), writing other bots' MEMORY, general coding, rewriting default `~/.hermes/SOUL.md`, spawning `hscsg-orchestrator-2`.

## Prerequisites

- Hermes CLI (`hermes profile create --help`)
- Canonical skill lives at `~/.hermes/skills/autonomous-ai-agents/hscsg-orchestrator/` (this directory)
- Vault: `H:\Mi unidad\HSCSG Empresa mas memoria\` (see `references/vault.md`)
- Fleet peers configured on this profile (`hermes -p hscsg-orchestrator peer list` shows all)
- Independence pin verified: `hermes -p hscsg-orchestrator config get model` → only `provider` + `default`

## How to Run

1. **Cycle start**: Read `orchestrator-state.json` (repo root). Compute next tick actions.
2. **Dispatch**: For each stage needing work, create kanban card assigned to the specialist profile. Strip `HERMES_KANBAN_*` env. One terminal call per worker.
3. **Verify**: Poll for completion. Update `orchestrator-state.json` with results, timestamps, anomalies.
4. **Log**: Write operational log (cycle_id, tick, dispatches, verifications, anomalies, state_delta).
5. **Human gate**: No state mutation without signed spec on card or chat sign-off.

## Procedure

### A. Cycle Tick (the core loop)

```bash
# 1. Read state
STATE=$(cat orchestrator-state.json)

# 2. Compute next actions (simulador logic)
#    - Which pipeline stages are pending?
#    - Which specialists are idle?
#    - Any anomalies (failed deploys, stuck cards, peer unreachable)?

# 3. Dispatch kanban cards (one per specialist)
hermes -p hscsg-repo-assimilation kanban create "Assimilate <repo>" --assignee hscsg-repo-assimilation
# ... etc for each stage

# 4. Verify completions
#    Wait for cards to move to Done, or timeout → anomaly

# 5. Write state
#    Update orchestrator-state.json with:
#    - cycle_id, tick, timestamp
#    - dispatches: {stage, card_id, assignee, status}
#    - verifications: {card_id, result, artifacts}
#    - anomalies: [{type, severity, details}]
#    - state_delta: what changed
```

### B. Peer Reachability Check (every cycle)

```bash
hermes -p hscsg-orchestrator peer list
# Every fleet specialist must appear. Missing = DM will ack then vanish.
```

### C. Kanban Hygiene

When spawning workers from this profile:
- Strip `HERMES_KANBAN_*` env vars (worker inherits kanban env otherwise)
- One `terminal` call per worker (no shared session)
- Assign to the specialist's profile name, not `@hermes`

### D. Human Gate

- No `orchestrator-state.json` write without signed spec on the task card OR chat sign-off.
- If a write is blocked (protected_instruction_files), stop — do not sneak it via shell.

### E. Skill Linking (shared skills)

Canonical skill: `~/.hermes/skills/autonomous-ai-agents/hscsg-orchestrator/`
Profile files: symlinks via `scripts/link_skill_tree.py`
- `SKILL.md` → symlink
- `references/` → file-level symlinks
- `scripts/` → file-level symlinks
Never a directory symlink. `rglob` from profile skills dir must find `SKILL.md`.

## References

- `references/process.md` — deep mechanics: cycle anatomy, kanban dispatch patterns, state schema, anomaly taxonomy
- `references/vault.md` — documenting the fleet after certification
- `scripts/link_skill_tree.py` — file-level symlink linker
- `scripts/drift_check.py` — doc-drift tripwire (run after every mint)

## Verification

A cycle is done when:

1. `hermes profile list` shows `hscsg-orchestrator` on pinned model.
2. `hermes -p hscsg-orchestrator config get model` → only `provider` + `default`.
3. `.no-bundled-skills` exists in profile root.
4. `hermes -p hscsg-orchestrator peer list` shows every fleet specialist.
5. `orchestrator-state.json` updated with cycle_id, tick, dispatches, verifications, anomalies, state_delta.
6. Operational log written (cycle_id, tick, dispatches, verifications, anomalies, state_delta).
7. `python3 ~/.hermes/skills/autonomous-ai-agents/hscsg-orchestrator/scripts/drift_check.py` exits 0.