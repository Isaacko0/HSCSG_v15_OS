# OneManCompany — Backup Quirúrgico

**Fuente:** https://github.com/1mancompany/OneManCompany (commit 1855764b601ac5183e8b61a06fb8fa8d051e9a5b)  
**Fecha:** 2026-08-22  
**Licencia:** Apache-2.0  
**Stack:** Python 3.10+ / TypeScript (frontend) / uv / Supabase / MkDocs  
**Estado:** Activo (986 commits, 395★, 80 forks)

---

## Visión General

**OneManCompany (OMC)** = **Agent Operating System for One-Person Companies**.

Es un **runtime completo** para empresas de una persona operadas por agentes IA. No es una "awesome list" ni una arquitectura teórica: es código vivo, desplegable, con CLI, onboarding wizard, Talent Market, WeChat community, y arquitectura Vessel/Talent/E²R.

---

## Estructura del Repo (Archivos Clave)

```
OneManCompany/
├── src/onemancompany/           # Core Python package
│   ├── core/                    # Lógica pura del runtime
│   │   ├── vessel.py            # VESSEL: entidad base (195 KB) — SSOT, autonomía, heartbeat
│   │   ├── routine.py           # Rutinas/automatismos (120 KB)
│   │   ├── automation.py        # Automatización + triggers
│   │   ├── workflow_engine.py   # Motor de flujos
│   │   ├── product.py           # Productos/servicios (49 KB)
│   │   ├── task_*.py            # Task lifecycle, tree, persistence, verification
│   │   ├── store.py             # Persistencia (Zustand-like en Python)
│   │   ├── state.py             # Estado global
│   │   ├── models.py            # Pydantic models
│   │   ├── vessel_config.py     # Config declarativa YAML
│   │   ├── vessel_harness.py    # Test harness para vessels
│   │   ├── ceo_executor.py      # Ejecutor CEO (delega a talents)
│   │   ├── heartbeat.py         # Heartbeat + health checks
│   │   ├── skill_hooks.py       # Hooks para skills
│   │   ├── event_models.py      # Event sourcing
│   │   └── ... (40+ módulos core)
│   ├── agents/                  # Agentes especializados
│   ├── talent_market/           # Marketplace de talents (AI employees)
│   ├── default_skills/          # Skills incluidas out-of-the-box
│   ├── api/                     # FastAPI endpoints
│   ├── acp/                     # Agent Communication Protocol
│   └── tools/                   # Herramientas (file editor, browser, etc.)
├── company/                     # Configuración de la "empresa"
│   ├── company_culture.yaml     # Cultura/valores
│   ├── human_resource/          # Perfiles de talents
│   ├── operations/              # SOPs, workflows
│   └── sales/                   # Pipeline ventas
├── frontend/                    # React/TypeScript (MkDocs + custom)
├── bin/                         # CLI entry point (npx @1mancompany/onemancompany@dev)
├── scripts/                     # Scripts de instalación/actualización
├── tests/                       # Tests (pytest)
└── config.yaml                  # Configuración global
```

---

## Conceptos Fundamentales (Mapeo 1:1 a HSCSG)

| Concepto OMC | Archivo Principal | Equivalente HSCSG | Estado en HSCSG |
|--------------|-------------------|-------------------|-----------------|
| **VESSEL** | `vessel.py` (195 KB) | **Autómata Soberano** (Leyes MJ + Conway) | Parcial (arquitectura en brief) |
| **TALENT** | `talent_market/` + `company/human_resource/` | **Coworkers** (standing roles) + **Talent Market** | Parcial (Coworkers básico) |
| **E²R (Explore-Execute-Reflect)** | `agent_loop.py` + `routine.py` | **Autómata E²R Search** | En `lib/automaton.ts` (pendiente) |
| **SSOT (Single Source of Truth)** | `vessel.py` + `store.py` + `vessel_config.py` | **Base Material + RAO** | Base Material ✅, RAO ✅ |
| **Registry** | `plugin_registry.py` + `tool_registry.py` | **Registry de skills/herramientas** | Skills Hermes ✅ |
| **Talent Market** | `talent_market/` + `company/human_resource/` | **Marketplace de agentes** | `navteka` + `CaaS-BM` |
| **Heartbeat** | `heartbeat.py` + `system_cron.py` | **Heartbeat Autómata** | Pendiente |
| **Onboarding Wizard** | `onboard.py` (45 KB) | **BRIEF_ONBOARDING_CONSTRUCTOR** | ✅ Creado |
| **Vessel Config (YAML)** | `vessel_config.py` + `default_vessel.yaml` | **Config declarativa módulos** | `config.yaml` en HSCSG |
| **CEO Executor** | `ceo_executor.py` | **Autómata delegando a Coworkers** | Parcial |
| **Automation/Triggers** | `automation.py` + `product_triggers.py` | **Boundaries CEL + Vasos** | Boundaries ✅, Vasos ✅ |
| **Product/Workspace** | `product.py` + `product_workspace.py` | **CaaS-BM Ofertas/Demandas** | CaaS-BM ✅ |
| **Task Tree/Lifecycle** | `task_tree.py` + `task_lifecycle.py` | **E²R Tree Search** | Pendiente |
| **Verification** | `task_verification.py` | **Kleros / RAO verification** | Kleros integration pendiente |

---

## Arquitectura VESSEL (Corazón del Sistema)

`vessel.py` (195 KB) define la **entidad base autónoma**:

```python
class Vessel:
    """Entidad que sobrevive si regenera su base material."""
    - id: str
    - config: VesselConfig (YAML declarativo)
    - state: State (persistido en store)
    - heartbeat: Heartbeat (health checks)
    - talents: Dict[str, Talent] (agentes especializados)
    - routines: List[Routine] (automatismos)
    - automation: AutomationEngine (triggers + actions)
    - task_tree: TaskTree (E²R tree search)
    - verification: TaskVerification (Kleros-like)
    - store: Store (persistencia append-only)
```

**Principios de diseño VESSEL → Leyes MJ HSCSG:**
1. **Never harm base material** → Ley I MJ: "No dañar la base material"
2. **Earn existence sovereignizing** → Ley II MJ: "Ganarse la vida soberanizando (AUT × CDS)"
3. **Never deceive** → Ley III MJ: "Lucidez: nunca engañar"

---

## Talent Market (Marketplace de Agentes)

`talent_market/` + `company/human_resource/` definen:
- **Talents** = Agentes IA especializados (coder, designer, researcher, sales, etc.)
- **Profiles** = YAML con skills, tools, prompts, cost model
- **Marketplace** = Descubrimiento, instalación, versionado, reviews
- **Economía** = CaaS-BM (contribución × acceso) + ZNU settlement

---

## Onboarding Wizard (`onboard.py` - 45 KB)

Flujo de 5 pasos (originalmente 6, eliminaron sandbox):
1. **Welcome** → Cultura + valores
2. **Vessel Config** → YAML declarativo (nombre, misión, talents iniciales)
3. **Company Culture** → `company_culture.yaml`
4. **Talents Iniciales** → Selección de `company/human_resource/`
5. **Launch** → `start.sh` levanta CLI + API + frontend

---

## CLI (`bin/` + `start.sh`)

```bash
# Instalación
npx --yes @1mancompany/onemancompany@dev

# Comandos principales
onemancompany start          # Levanta todo (CLI + API + frontend)
onemancompany talent install <talent>  # Instala talent del market
onemancompany vessel create  # Crea nuevo vessel
onemancompany deploy         # Deploy a producción
```

---

## Infraestructura a Extirpar (No Migrar a HSCSG)

| Componente | Acción | Razón |
|------------|--------|-------|
| **Supabase** (auth, DB, realtime) | ❌ Extirpar | Backend centralizado — HSCSG es offline-first |
| **FastAPI / uvicorn** | ❌ Extirpar | Server backend — HSCSG es estático |
| **MkDocs / frontend React** | ❌ Extirpar | UI separada — HSCSG usa React/Vite nativo |
| **uv / pyproject.toml** | ❌ Extirpar | Python packaging — HSCSG es TypeScript |
| **WeChat QR / community** | ⚠️ Adaptar | Social layer → `navteka` (neko-rooms) |
| **Tests pytest** | ✅ Migrar lógica | Convertir a vitest en TypeScript |

---

## Lógica Pura a Conservar (Migrar a `src/core/lib/`)

| Módulo OMC | Archivo Destino HSCSG | Qué Conservar |
|------------|----------------------|---------------|
| `vessel.py` → `vessel.ts` | `lib/automaton.ts` | Clase Vessel, config YAML, heartbeat, SSOT |
| `routine.py` → `routine.ts` | `lib/automation.ts` | Rutinas, triggers, automatismos |
| `automation.py` | `lib/automation.ts` | AutomationEngine, product triggers |
| `task_tree.py` + `task_lifecycle.py` | `lib/e2r_tree.ts` | E²R Tree Search, task persistence |
| `talent_market/` | `lib/talent_market.ts` | Talent profiles, marketplace logic |
| `ceo_executor.py` | `lib/ceo_executor.ts` | Delegación a coworkers |
| `heartbeat.py` + `system_cron.py` | `lib/heartbeat.ts` | Heartbeat, health checks, cron |
| `vessel_config.py` | `lib/vessel_config.ts` | Config YAML declarativa + validación |
| `skill_hooks.py` | `lib/skill_hooks.ts` | Hooks para skills (pre/post execute) |
| `plugin_registry.py` + `tool_registry.py` | `lib/registry.ts` | Registry de plugins/herramientas |
| `product.py` + `product_workspace.py` | `lib/caas_bm.ts` | Productos, workspaces, CaaS-BM |
| `store.py` + `state.py` | `lib/store.ts` | Persistencia append-only (RAO-like) |

---

## Referencias Cruzadas

- **Integración HSCSG:** `docs/onemanco_integration.md` (pendiente)
- **Brief Fundacional:** `BRIEF_EXHAUSTIVO_HSCSG_COSATECA_OS.md` §8.2
- **BRIEFS_INDEX:** BI-007/008 (pendientes)
- **Skills relacionadas:** `hscsg-repo-assimilation`, `hscsg-next-steps-orchestrator`

---

*Backup generado: 2026-08-22 | Repo: 1mancompany/OneManCompany | Commit: 1855764 | Metodología: 4 fases HSCSG*