# Session Learnings — brief-detector-recommender

**Session:** 2026-08-22 | **Context:** HSCSG v15 OS + Gaia-Mycelium + OpenHaven + Project Weave integration

---

## Key Patterns Discovered

### 1. Gap Detection Sources (Priority Order)
| Source | Signal | Gap Type | Example |
|--------|--------|----------|---------|
| `fuentes_indice.json` | `estado: "⏳ Pendiente"` | `backup_missing` / `integration_missing` | Copiosis, Conway, OneManCompany |
| `BRIEFS_INDEX.md` tables | `🔴 P0 Pendiente` / `🟡 Parcial` | `spec_missing` | `netbenefit_spec.md`, `cds_jurados_spec.md` |
| `src/core/lib/` scan | Module without spec doc | `spec_missing` | New modules added during migration |
| `skills/` scan | Skill without `BF-05x` doc | `skill_missing` | `brief-detector-recommender` itself |
| `orchestrator-state.json` | Tasks without brief | `doc_missing` | Workstream tasks needing briefs |

### 2. Recommendation Scoring Formula (Validated)
```javascript
score = (strategicValue * 0.4) + (unblockFactor * 0.3) + (effortInverse * 0.2) + (dependencyCount * 0.1)

// strategicValue: 10 (GAIA_INTEGRATION/P0_SPECS/COACH/MIGRATION), 9 (P0), 7 (P1), 5 (base)
// unblockFactor: tasks blocked * 2 (max 10)
// effortInverse: 1/estimated_days
// dependencyCount: downstream tasks depending on this
```

### 3. Projection Horizons (Calibrated)
| Horizon | Criteria | Typical Tasks |
|---------|----------|---------------|
| **30d** | Effort ≤ 3 days, P0 priority, unblocks active workstreams | P0 specs, GAIA-gov-sync, trust-bridge |
| **60d** | Effort 3-5 days, P1, depends on 30d completion | MIG-P1 through P5, COACH-automaton |
| **90d** | Effort 5+ days, strategic, depends on 60d | Full DeseOS migration, skills for all modules |

### 4. Extrapolation Patterns (from 10 assimilations)
```javascript
{
  frequency: "1 repo / 2 weeks",
  repoTypes: { "Identidad/Gobernanza": 30, "Economía": 20, "Infra/Comms": 20, "IA": 15, "Social": 15 },
  briefsPerRepo: { backup: 2, integration: 2, specs: "1-3", skills: "0-1" },
  nextRepos: ["Copiosis", "Conway Automaton", "OneManCompany", "Integral Collective"],
  briefsNext60Days: 23
}
```

---

## Integration with Orchestrator (Verified Working)

### Trigger Points (Auto-invocation)
1. **Post-asimilación**: After each repo `*_backup.md` + `*_integration.md` created
2. **Semanal**: Cron job `BRIEF-detector-cycle` (recurring weekly)
3. **On-demand**: User asks "¿qué briefs faltan?" or "recomienda próximos briefs"
4. **Pre-planning**: Before starting new workstream

### Output Consumption by Orchestrator
```bash
# Orchestrator runs:
node scripts/brief-detector-recommender.cjs full-cycle

# Parses outputs:
- brief-detection-report.json → new tasks added to orchestrator-state.json
- brief-recommendations.md → presented in interactive menu
- brief-projection-30-60-90.md → horizon planning
- brief-extrapolation.md → strategic planning
```

### Task Integration Pattern
```json
// Auto-added to orchestrator-state.json
{
  "id": "BRIEF-create-BI-005",
  "title": "Crear conway_automaton_backup.md + integration.md",
  "workstream": "DOCUMENTATION",
  "source": "agent",
  "priority": 90,
  "effort": 3,
  "value": 95,
  "deps": [],
  "blocks": ["COACH-automaton", "BF-044"],
  "recurring": false,
  "notes": "Detectado por brief-detector-recommender: Conway pendiente, desbloquea Autómata Soberano"
}
```

---

## Pitfalls Encountered & Fixes

| Pitfall | Fix Applied |
|---------|-------------|
| **ES Module error** (`require` not defined) | Renamed script to `.cjs` extension |
| **fuentes_indice.json structure** (array vs object) | Added `this.fuentesArray = this.fuentes.fuentes \|\| this.fuentes` |
| **Orchestrator script missing** | Copied from navteka repo to HSCSG_v15_OS/scripts/ |
| **BRIEF_EXHAUSTIVO missing** | Copied from navteka repo |
| **Parsing markdown tables** | Regex `/\|[\s\S]*?\|/g` + skip header rows |
| **Git log parsing** | Try-catch with empty string fallback |

---

## Template for New Gap Detection Rules

```javascript
// Add to detectGaps() in brief-detector-recommender.cjs
// Gap type N: [Description]
this.<source>.forEach(item => {
  if (<condition>) {
    gaps.push({
      id: `<PREFIX>-${String(counter).padStart(3,'0')}`,
      type: '<gap_type>',
      source: item.nombre || item.module || item.capability,
      priority: 'P0' | 'P1' | 'P2',
      related_briefs: [...],
      workstream: this.inferWorkstream(item)
    });
  }
});
```

---

## Support Files Created This Session

| File | Purpose |
|------|---------|
| `scripts/brief-detector-recommender.cjs` | Main executable (CommonJS for Node ESM compat) |
| `skills/brief-detector-recommender/SKILL.md` | Full specification |
| `docs/brief-detection-report.json` | Auto-generated gaps (72 detected) |
| `docs/brief-recommendations.md` | Prioritized briefs (P0/P1/P2) |
| `docs/brief-projection-30-60-90.md` | Temporal planning |
| `docs/brief-extrapolation.md` | Pattern extrapolation + predictions |

---

## Next Session: Suggested Enhancements

1. **Add BRIEF_PERFIL_* briefs as gap sources** - The 6 new profile briefs (BF-077 to BF-082) should be checked for completeness
2. **Integrate with brief-detector-recommender skill** - Add `references/profile-briefs.md` mapping
3. **Enhance projection** - Use orchestrator workstream status for more accurate horizons
4. **Add brief quality scoring** - Check if existing briefs have required sections (backup, integration, specs, verification)
5. **Auto-update BRIEFS_INDEX.md** - Implement the `updateBriefsIndex()` method properly

---

## Quick Reference for Future Agents

```bash
# Run full cycle (detect → recommend → project → extrapolate → outputs)
node scripts/brief-detector-recommender.cjs full-cycle

# Individual commands
node scripts/brief-detector-recommender.cjs detect
node scripts/brief-detector-recommender.cjs recommend
node scripts/brief-detector-recommender.cjs project
node scripts/brief-detector-recommender.cjs extrapolate

# Check outputs
cat docs/brief-detection-report.json | jq '.gaps | length'
cat docs/brief-recommendations.md | head -30
cat docs/brief-projection-30-60-90.md
cat docs/brief-extrapolation.md
```

---

*Generated: 2026-08-22 | Skill: brief-detector-recommender v0.1.0 | Session: HSCSG v15 OS comprehensive brief ecosystem creation*