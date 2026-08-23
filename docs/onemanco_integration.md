# OneManCompany — Integración Operativa con HSCSG v15 OS

**Objetivo:** Integrar el runtime completo OneManCompany (Vessel, Talent, E²R, SSOT, Talent Market, CEO Executor, Heartbeat, Onboarding) como módulos vivos en HSCSG v15 OS, extirpando infraestructura ajena (Supabase, FastAPI, Python) y conservando lógica pura en TypeScript.

---

## Resumen Ejecutivo

OneManCompany es la **implementación de referencia** de lo que HSCSG v15 OS llama "Autómata Soberano + Runtime Empresarial". Mapea 1:1 a:

- **VESSEL** → Autómata Soberano (Leyes MJ + Conway)
- **TALENT** → Coworkers + Talent Market
- **E²R** → Autómata E²R Search
- **SSOT** → Base Material + RAO
- **Talent Market** → CaaS-BM + navteka marketplace
- **CEO Executor** → Autómata delegando a Coworkers
- **Heartbeat** → Heartbeat Autómata + γ-CARMIS
- **Onboarding Wizard** → BRIEF_ONBOARDING_CONSTRUCTOR

---

## Decisiones Take / Adapt / Discard

### ✅ TAKE (Integrar Directamente)

| # | Concepto OMC | Destino HSCSG | Archivo Objetivo |
|---|--------------|---------------|------------------|
| 1 | **VESSEL class** (config YAML, SSOT, heartbeat, talents) | `Automaton` class | `lib/automaton.ts` |
| 2 | **Routine/AutomationEngine** (triggers, product triggers) | `AutomationEngine` | `lib/automation.ts` |
| 3 | **TaskTree + E²R Search** | `E2RTreeSearch` | `lib/e2r_tree.ts` |
| 4 | **Talent Market** (profiles, marketplace, discovery) | `TalentMarket` + `CaaS-BM` | `lib/talent_market.ts` + `lib/caas_bm.ts` |
| 4 | **CEO Executor** (delegación a talents) | `CEOExecutor` | `lib/ceo_executor.ts` |
| 5 | **Heartbeat + SystemCron** | `HeartbeatMonitor` + `GammaCARMIS` | `lib/heartbeat.ts` + `lib/loopEngine.ts` |
| 6 | **VesselConfig (YAML declarativo)** | `AutomatonConfig` | `lib/automaton_config.ts` |
| 7 | **Skill/Plugin/Tool Registry** | `Registry` | `lib/registry.ts` |
| 8 | **CEO Delegation Pattern** | `CEOExecutor.delegar()` | `lib/ceo_executor.ts` |
| 9 | **Product/Workspace** (CaaS-BM) | `CaaS-BM Ofertas/Demandas` | `lib/caas_bm.ts` |
| 10 | **Onboarding Wizard (5 pasos)** | `BRIEF_ONBOARDING_CONSTRUCTOR` | `docs/BRIEF_ONBOARDING_CONSTRUCTOR.md` |
| 11 | **Company Culture YAML** | `AutomatonCulture` | `lib/automaton_culture.ts` |
| 12 | **Task Verification (Kleros-like)** | `TaskVerification` | `lib/task_verification.ts` |

### 🔄 ADAPT (Modificar para HSCSG)

| # | Concepto OMC | Adaptación Requerida | Destino HSCSG |
|---|--------------|---------------------|---------------|
| 1 | **Python → TypeScript** | Reescritura completa, tipos estrictos, async/await nativo | Todos los `lib/*.ts` |
| 2 | **Supabase (auth, DB, realtime)** | ❌ Extirpar → Reemplazar por `localStorage`/`IndexedDB` + `neko-rooms` (WebRTC) | `lib/store.ts` + `packages/neko-client` |
| 3 | **FastAPI / uvicorn** | ❌ Extirpar → HSCSG es estático, API vía `neko-rooms` + `Boundaries CEL` | `packages/neko-client` + `lib/boundaries.ts` |
| 4 | **uv / pyproject.toml** | ❌ Extirpar → `package.json` + `pnpm` + `tsc` | `package.json` |
| 5 | **Supabase Auth** | ❌ Extirpar → `ERC-8004` + `Boundaries CEL` (allow/deny) | `lib/identity.ts` + `lib/boundaries.ts` |
| 6 | **MkDocs / React frontend separado** | ❌ Extirpar → Integrar en `src/app/(os)/` + `packages/ui` | `src/app/(os)/*` + `packages/ui` |
| 7 | **WeChat QR/Community** | ⚠️ Adaptar → `navteka` neko-rooms + `Coworkers` | `packages/neko-client` + `src/core/state/coworkers.ts` |
| 8 | **pytest → vitest** | Migrar tests, mismo coverage | `*.test.ts` |
| 9 | **uv lock → pnpm lock** | `pnpm-lock.yaml` | `pnpm-lock.yaml` |
| 10 | **WeChat community** | → `navteka` neko-room "OneManCompany Community" | `packages/neko-client` |

### ❌ DISCARD (No Integrar - Incompatibles)

| # | Concepto | Razón |
|---|----------|-------|
| 1 | **Supabase (PostgreSQL, Auth, Realtime)** | Backend centralizado — HSCSG offline-first |
| 2 | **FastAPI / uvicorn / Python backend** | Server-side — HSCSG 100% estático |
| 3 | **uv / pyproject.toml / Python packaging** | Ecosistema Python — HSCSG TypeScript/Node |
| 4 | **MkDocs / frontend React separado** | UI separada — HSCSG一体化 React/Vite |
| 4 | **WeChat QR/Community específica** | Plataforma china cerrada — HSCSG usa neko-rooms abierto |
| 5 | **Python asyncio event loop** | Runtime Python — HSCSG usa Node.js event loop |
| 6 | **pip/venv dependency management** | `pnpm` + `node_modules` en HSCSG |

---

## Archivos a Crear en HSCSG (Nuevos Módulos)

| Archivo | Descripción | Basado en OMC |
|---------|-------------|---------------|
| `src/core/lib/automaton.ts` | Clase principal `Automaton` (VESSEL) | `vessel.py` |
| `src/core/lib/automaton_config.ts` | Config YAML declarativa + validación | `vessel_config.py` |
| `src/core/lib/automation.ts` | `AutomationEngine` + triggers | `automation.py` + `product_triggers.py` |
| `src/core/lib/e2r_tree.ts` | `E2RTreeSearch` + task persistence | `task_tree.py` + `task_lifecycle.py` |
| `src/core/lib/talent_market.ts` | `TalentMarket` + profiles | `talent_market/` + `human_resource/` |
| `src/core/lib/ceo_executor.ts` | `CEOExecutor.delegar()` | `ceo_executor.py` |
| `src/core/lib/heartbeat.ts` | `HeartbeatMonitor` + health checks | `heartbeat.py` + `system_cron.py` |
| `src/core/lib/registry.ts` | `PluginRegistry` + `ToolRegistry` | `plugin_registry.py` + `tool_registry.py` |
| `src/core/lib/caas_bm.ts` | `Product` + `Workspace` (CaaS-BM) | `product.py` + `product_workspace.py` |
| `src/core/lib/registry.ts` | `SkillRegistry` + hooks | `skill_hooks.py` + `plugin_registry.py` |
| `src/core/lib/automaton_culture.ts` | Cultura/valores declarativos | `company_culture.yaml` |
| `src/core/lib/task_verification.ts` | Verificación Kleros-like | `task_verification.py` |

---

## Archivos a Extender/Modificar (Existentes)

| Archivo | Extensión | Referencia OMC |
|---------|-----------|----------------|
| `src/core/lib/automaton.ts` | Añadir: `VesselConfig`, `Talents[]`, `Routines[]`, `Heartbeat`, `CEOExecutor` | `vessel.py` |
| `src/core/lib/boundaries.ts` | Añadir: `CEOPolicy` (delegation rules), `TalentPolicy` | `automation.py` triggers |
| `src/core/state/automaton.ts` | Store slice: `vesselConfig`, `talents`, `routines`, `heartbeat` | `vessel.py` state |
| `src/core/state/store.ts` | Integración `automaton` slice + `talentMarket` slice | `store.py` + `state.py` |
| `src/app/(os)/automata/page.tsx` | Pantalla completa: config, talents, routines, heartbeat, CEO | `vessel.py` + `onboard.py` |
| `src/app/(os)/talent-market/page.tsx` | Marketplace talents (descubrir, instalar, reviews) | `talent_market/` |
| `src/app/(os)/onboarding/page.tsx` | Wizard 5 pasos (cultura, vessel, talents, launch) | `onboard.py` |
| `packages/ui/src/CoachFAB.tsx` | Chips: "Autómata", "Talents", "Rutinas", "CEO Mode" | `onboard.py` steps |

---

## Vasos Comunicantes Afectados

| Vaso | Impacto | Acción |
|------|---------|--------|
| **governance:sync** | CDS jurados ↔ Autómata CEO veto | `MJ Gate` + `CEOExecutor` |
| **trust:bridge** | ERC-8004 identity para Talents | `TalentProfile` + `ERC-8004` |
| **infra:connect** | neko-rooms para Talents remotos | `neko-client` + `TalentMarket` |
| **intel:match** | Autómata E²R ↔ Talent recommendation | `E2RTreeSearch` + `TalentMarket` |
| **app:federate** | CaaS-BM Talent offers | `CaaS-BM` + `TalentMarket` |
| **eco:sync** | Métricas Autómata (heartbeat, task success) ↔ CAC/PGS | `HeartbeatMonitor` → `CAC` |

---

## Plan de Implementación (Orden Sugerido)

### Fase 1: Core Autómata (Semana 1-2)
```bash
# 1. Crear módulos core
lib/automaton.ts           # VESSEL → Automaton
lib/automaton_config.ts    # VesselConfig YAML
lib/automation.ts          # Routines + Triggers
lib/heartbeat.ts           # Heartbeat + health checks
lib/automaton_culture.ts   # CompanyCulture

# 2. Tests
lib/automaton.test.ts
lib/automation.test.ts

# 3. Integrar en store
src/core/state/automaton.ts
src/core/state/store.ts
```

### Fase 2: Talent Market + CEO (Semana 2-3)
```bash
lib/talent_market.ts       # Talent profiles + marketplace
lib/ceo_executor.ts        # Delegación CEO → Talents
lib/registry.ts            # Skill/Tool/Plugin Registry
lib/talent_market.test.ts
```

### Fase 3: E²R + Verificación (Semana 3)
```bash
lib/e2r_tree.ts            # TaskTree + E²R Search
lib/task_verification.ts   # Kleros-like verification
lib/registry.ts            # Plugin/Tool Registry extendido
```

### Fase 4: UI + Onboarding + Integración (Semana 4)
```bash
src/app/(os)/automata/page.tsx        # Pantalla Autómata completa
src/app/(os)/talent-market/page.tsx   # Marketplace Talents
src/app/(os)/onboarding/page.tsx      # Wizard 5 pasos
packages/ui/src/CoachFAB.tsx          # Chips Autómata
src/app/(os)/vasos/page.tsx           # Actualizar vasos afectados
```

---

## Tasks en Orchestrator (Actualizar `scripts/orchestrator-next-steps.js`)

```javascript
// Workstream: ONEMANCO_INTEGRATION
{
  "id": "OMC-core-automaton",
  "title": "Implementar Automaton core (VESSEL → Automaton)",
  "deps": ["P0-copiosis", "P0-valueflows"],
  "effort": 5,
  "value": 95,
  "workstream": "ONEMANCO_INTEGRATION",
  "source": "agent"
},
{
  "id": "OMC-talent-market",
  "title": "Talent Market + CEO Executor",
  "deps": ["OMC-core-automaton"],
  "effort": 4,
  "value": 90,
  "workstream": "ONEMANCO_INTEGRATION",
  "source": "agent"
},
{
  "id": "OMC-e2r-verification",
  "title": "E²R Tree Search + Task Verification",
  "deps": ["OMC-core-automaton"],
  "effort": 4,
  "value": 85,
  "workstream": "ONEMANCO_INTEGRATION",
  "source": "agent"
},
{
  "id": "OMC-onboarding-wizard",
  "title": "Onboarding Wizard 5 pasos + UI Autómata",
  "deps": ["OMC-talent-market", "OMC-e2r-verification"],
  "effort": 3,
  "value": 80,
  "workstream": "ONEMANCO_INTEGRATION",
  "source": "agent"
},
{
  "id": "OMC-vasos-integration",
  "title": "Integrar 6 vasos con Autómata/Talents",
  "deps": ["OMC-onboarding-wizard"],
  "effort": 2,
  "value": 90,
  "workstream": "ONEMANCO_INTEGRATION",
  "source": "agent"
}
```

---

## Verification Checklist

- [ ] `npm run typecheck` pasa (TypeScript strict)
- [ ] `npm run build` pasa (Vite + tsc)
- [ ] `npm run test` pasa (7/7 tests + nuevos tests OMC)
- [ ] `npm run preview` → `/automata`, `/talent-market`, `/onboarding` accesibles
- [ ] `node scripts/orchestrator-next-steps.js run OMC-core-automaton` → completado
- [ ] `node scripts/orchestrator-next-steps.js run OMC-vasos-integration` → completado
- [ ] Vasos comunicantes: governance:sync, trust:bridge, infra:connect, intel:match, app:federate, eco:sync funcionando con Autómata
- [ ] `docs/onemanco_integration.md` creado (este documento)
- [ ] `docs/onemanco_backup.md` creado (backup quirúrgico)
- [ ] `BRIEFS_INDEX.md` actualizado (BI-007/008 → ✅ Completo)
- [ ] `fuentes_indice.json` actualizado (fuente #15: OneManCompany)

---

## Referencias

- **Backup Quirúrgico:** `docs/onemanco_backup.md`
- **Brief Fundacional:** `BRIEF_EXHAUSTIVO_HSCSG_COSATECA_OS.md` §8.2
- **BRIEFS_INDEX:** BI-007 (`onemanco_backup.md`), BI-008 (`onemanco_integration.md`)
- **Skills:** `hscsg-repo-assimilation` (metodología 4 fases), `hscsg-next-steps-orchestrator` (tasks)
- **Repo Fuente:** https://github.com/1mancompany/OneManCompany (commit 1855764)

---

*Integración generada: 2026-08-22 | Metodología HSCSG 4 fases | Repo: 1mancompany/OneManCompany*