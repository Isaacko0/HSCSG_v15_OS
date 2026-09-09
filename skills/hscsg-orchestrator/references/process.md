# hscsg-orchestrator — Deep Mechanics

## Cycle Anatomy

A cycle = one turn of the `loopEngine` advancing the `/simulador`.

```
cycle_id: "ALR-20260908-001"
tick: 42
started_at: "2026-09-08T14:30:00Z"
ended_at: "2026-09-08T14:35:12Z"
dispatched:
  - stage: "repo-assimilation"
    card_id: "KAN-20260908-001"
    assignee: "hscsg-repo-assimilation"
    repo: "https://github.com/.../tekitl"
    status: "completed"
  - stage: "scientific-papers"
    card_id: "KAN-20260908-002"
    assignee: "hscsg-scientific-papers"
    paper: "EBD-003"
    status: "completed"
verified:
  - card_id: "KAN-20260908-001"
    result: "assimilated"
    artifacts: ["skills/tekitl/", "docs/tekitl_backup.md", "docs/tekitl_integration.md"]
  - card_id: "KAN-20260908-002"
    result: "paper_generated"
    artifacts: ["docs/papers/EBD-003.md"]
anomalies:
  - type: "peer_unreachable"
    severity: "high"
    specialist: "hscsg-gaia-mycelium-integration"
    detail: "DM ack then vanish"
state_delta:
  assimilated_repos: +1
  papers_generated: +1
  pending_stages: ["unified-assimilation-science", "gaia-mycelium-integration"]
```

## Kanban Dispatch Patterns

**From orchestrator (this profile) → specialist:**

```bash
# Strip kanban env so worker gets clean slate
HERMES_KANBAN_BOARD="" HERMES_KANBAN_COLUMN="" \
hermes -p hscsg-repo-assimilation kanban create "Assimilate tekitl" \
  --assignee hscsg-repo-assimilation \
  --label "assimilation" \
  --description "Repo: https://github.com/.../tekitl. Phase 1-4 per hscsg-repo-assimilation skill."
```

**One terminal call per worker** — no shared session, no env leakage.

## State Schema (`orchestrator-state.json`)

```json
{
  "version": "0.1.0",
  "last_cycle_id": "ALR-20260908-001",
  "last_tick": 42,
  "updated_at": "2026-09-08T14:35:12Z",
  "pipeline": {
    "repo-assimilation": { "status": "idle", "queue": [], "last_completed": "KAN-20260908-001" },
    "scientific-papers": { "status": "idle", "queue": [], "last_completed": "KAN-20260908-002" },
    "unified-assimilation-science": { "status": "pending", "queue": ["EBD-003"], "last_completed": null },
    "gaia-mycelium-integration": { "status": "blocked", "queue": [], "last_completed": null, "blocker": "peer_unreachable" },
    "brief-detector-recommender": { "status": "idle", "queue": [], "last_completed": null }
  },
  "fleet": {
    "hscsg-repo-assimilation": { "peer": "reachable", "last_heartbeat": "2026-09-08T14:30:00Z" },
    "hscsg-scientific-papers": { "peer": "reachable", "last_heartbeat": "2026-09-08T14:30:00Z" },
    "hscsg-unified-assimilation-science": { "peer": "reachable", "last_heartbeat": "2026-09-08T14:30:00Z" },
    "hscsg-gaia-mycelium-integration": { "peer": "unreachable", "last_heartbeat": "2026-09-08T14:00:00Z" },
    "brief-detector-recommender": { "peer": "reachable", "last_heartbeat": "2026-09-08T14:30:00Z" }
  },
  "anomalies": [
    { "cycle_id": "ALR-20260908-001", "type": "peer_unreachable", "severity": "high", "specialist": "hscsg-gaia-mycelium-integration" }
  ],
  "deploy": {
    "vercel": { "status": "ready", "last_deploy": "2026-09-08T12:00:00Z", "url": "https://hscsg-v15-os.vercel.app" }
  }
}
```

## Anomaly Taxonomy

| Type | Severity | Action |
|------|----------|--------|
| `peer_unreachable` | high | Re-check peer config; re-establish DM channel; if persistent, escalate to human |
| `card_timeout` | medium | Re-dispatch with longer timeout; if repeats, check specialist health |
| `deploy_failed` | critical | Rollback Vercel; diagnose build logs; dispatch fix card |
| `state_drift` | high | Compare `orchestrator-state.json` with git history; manual correction with human gate |
| `kanban_stuck` | medium | Move card manually; investigate specialist blockage |

## Independence Pin (re-verify every boot)

```bash
hermes -p hscsg-orchestrator config get model
# Must show ONLY:
# provider: nous
# default: meituan/longcat-2.0:free
# base_url: '' (empty)
# api_key: (not present)
```

If `base_url` or `api_key` appear → `config set model.base_url ''` and unset `api_key` (they leaked from default profile on `create`).

## Peer Checklist (every cycle)

```bash
hermes -p hscsg-orchestrator peer list
# All 5 fleet specialists must appear with real peer IDs (not "(not set)")
```

Missing peer = DM will ack then vanish. Fix before next dispatch.