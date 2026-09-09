# BreadchainCoop — Bread-docs (Integración HSCSG v15 OS)

**Fecha:** 2026-09-10  
**Fuente:** `breadchain_bread-docs_backup.md`  
**Metodología:** hscsg-repo-assimilation (Fase 2: Integración — Triple Perspectiva)

---

## 👁️ Perspectiva 1: Usuario (Comunidad Bread / Contribuyente)

### Qué ve el usuario
Un sitio de docs limpio, navegable, con sidebar auto-organizada, búsqueda, dark mode, y edición via Keystatic (GitHub login). No hay fricción técnica: "quiero corregir un typo" → click "Edit" → Keystatic → PR automático.

### Dolores resueltos
- **Onboarding**: "¿Qué es Bread?" → Getting Started explica en 3 min
- **Gobernanza**: "¿Cómo deciden?" → Constitution + Operational Annex
- **Participación**: "¿Cómo aporto?" → Contributing.md (2 paths: content vs code)
- **Diseño consistente**: Design system documentado + Figma sync

### Gaps desde vista usuario
- No hay "quick start" técnico para devs (solo content editors)
- Keystatic requiere secrets (barrera entrada)
- Netlify deploy no es reproducible local sin config
- Falta API/programmatic access a contenido (solo HTML estático)

---

## 🤖 Perspectiva 2: LLM / Agente (Claude Code, OpenCode, Hermes)

### Qué ve el agente
- **AGENTS.md**: Lifecycle recipe completo, PR instructions, security, governance ref
- **CLAUDE.md**: Auto-read, tool config (OpenRouter, Astro MCP), apunta a AGENTS.md
- **opencode.json**: Provider config, MCP server
- **keystatic.config.tsx**: Schema tipado (collections, fields, validaciones)
- **astro.config.mjs**: Starlight config, plugins, sidebar, redirects
- **content.config.ts**: Content collections schema (Zod/TS)

### Patrones explotables para HSCSG
| Patrón Bread | Aplicación HSCSG |
|--------------|------------------|
| `keystatic.config.tsx` → Collections/Fields | `brief-schema.ts` → Tipos de brief, campos, validaciones |
| `astro.config.mjs` → Sidebar auto + plugins | `orchestrator-next-steps.cjs` → Workstreams auto + skills |
| `starlight-auto-sidebar` + custom plugin | `brief-detector-recommender` → Auto-detect gaps + recommend |
| `content.config.ts` → Zod schemas | `hscsg_definition.md` → Formalización matemática + tipos |
| AGENTS.md lifecycle | `hscsg-repo-assimilation` 4 fases + BRIEF_ONBOARDING |
| Branch-per-edit (keystatic/*) | Task-per-brief (orchestrator run <ID>) |

### Fortalezas para agentes
- Schema-first (TypeScript everywhere)
- Git-based CMS (auditable, reversible)
- Protected main (quality gate)
- Plugin architecture (extensible)

### Debilidades para agentes
- Keystatic = GUI-first, API limitada
- Netlify = black box deploy
- Astro/Starlight = opinado, difícil de extraer lógica pura
- No hay "headless" mode para consumo programático

---

## 🌐 Perspectiva 3: HSCSG v15 OS + CaaS (Sistema Operativo Nodo)

### Mapeo Directo a Módulos HSCSG

| Componente Bread | Módulo HSCSG | Estado | Acción |
|------------------|--------------|--------|--------|
| Crowdstaking protocol docs | **CaaS + ZNU + Vesting** | ✅ Existente | Enriquecer con modelo crowdstaking |
| BREAD Constitution | **hscsg_definition.md** | ✅ v2.0 (294 líneas) | Incorporar cláusulas Constitución Bread |
| Operational Annex | **Vasos Comunicantes** | ✅ 6 vasos | Mapear procesos Anexo → Vasos |
| BREAD Token (community currency) | **ZNU** | ✅ Implementado | Alinear tokenomics: demurrage, no especulativo |
| Member Projects voting | **Kappa Governance (VIA-25)** | ✅ Código en skill | 100-point voting = κ-governance |
| Angel Minters | **Semilla Base Material** | 🟡 Parcial | Formalizar en Base Material 13 Pilares |
| Stacks (yield strategies) | **Estrategias Base Material** | 🟡 Parcial | Mapear a 13 Pilares × 7 Capas |
| Keystatic CMS | **Brief-Driven Dev** | ✅ Skills + Orchestrator | Formalizar brief-schema + detector |
| Design System (Figma) | **Matemas / Grimorio** | ✅ MATEMAS_GRIMORIO.md | Sincronizar tokens visuales |
| AGENTS.md/CLAUDE.md | **hscsg-repo-assimilation + document-architect** | ✅ Skills | Unificar protocolo agentes |

### Isomorfismos Profundos (10 detectados)

1. **Crowdstaking = CaaS Regenerativo**
   - Pool = Base Material (Ley I)
   - Yield = Excedente (AUT × CDS)
   - Vote = κ-governance (VIA-25)
   - Principal intacto = Soberanía recursiva

2. **Constitution = hscsg_definition.md**
   - Valores → 3 Leyes MJ
   - Membresía → Identidad Soberana (Capa 1 Núcleo/Contenedor)
   - Gobernanza → Vasos Comunicantes + Autómata Soberano

3. **Keystatic = Brief-Driven Development**
   - Collections → Brief Types
   - Fields → Brief Schema
   - Branches → Tasks (Orchestrator)
   - PR → Integration (Backup + Integration docs)

4. **Design System = Matemas**
   - Figma Components → Matemas (generativos, no estáticos)
   - Tokens → DESIGN.md spec
   - Golden Rules → Principios HSCSG (anfibio, soberano, lucidez)

5. **Static Deploy = Offline-First SPA**
   - Netlify → Vercel (igual)
   - Build estático → SPA sin servidor
   - Content collections → localStorage/IndexedDB briefs

---

## 🔧 Módulos Extraíbles para HSCSG (4)

### 1. `crowdstaking-model` → `src/core/lib/crowdstaking-model.ts`
```typescript
// Lógica pura: pool → stake → yield → vote(distribute) → withdraw(principal)
interface CrowdstakingPool {
  principal: ZNUAmount;
  yieldStrategy: YieldStrategy; // sDAI, etc.
  voting: KappaGovernance;      // 100-point, 1p1v
  distribution: DistributionStrategy; // Top-N, Equal, Split
}
```
**Integra con:** CaaS, ZNU, Vesting, Autómata Soberano, Kappa Governance

### 2. `constitution-governance` → `docs/hscsg_constitution.md` + `src/core/lib/governance/constitution.ts`
```typescript
// Constitución viva: artículos → métricas → verificación automática
interface ConstitutionArticle {
  id: string;
  ley_mj: 1|2|3;
  pilar_soberania: 1..13;
  verificable: boolean;
  métrica: MetricFn;
}
```
**Integra con:** hscsg_definition.md, Autómata Soberano, Lucidez, Verificación

### 3. `keystatic-cms-pattern` → `skills/brief-cms/` (nueva skill)
```typescript
// CMS headless para briefs: collections, fields, validation, git-based
interface BriefCMS {
  collections: BriefCollection[];
  schema: BriefSchema;        // Zod/TS
  gitBackend: GitBackend;     // commit, branch, PR
  detector: GapDetector;      // brief-detector-recommender
}
```
**Integra con:** hscsg-document-architect, brief-detector-recommender, orchestrator

### 4. `design-system-tokens` → `design-tokens/design.md` (skill design-md)
```typescript
// Tokens visuales: colors, spacing, typography, components
// Fuentes Pogaca → Matema Typography
// CSS custom properties → DESIGN.md spec
// Component keys → Component Registry (Excalidraw/Architecture)
```
**Integra con:** MATEMAS_GRIMORIO.md, p5js/manim generativo, architecture-diagram

---

## 📋 Workstream Activado: `BREADCHAIN_INTEGRATION`

| Task ID | Descripción | Dependencia | Estado |
|---------|-------------|-------------|--------|
| BC-001 | Extraer crowdstaking-model.ts (lógica pura) | — | 🟡 Pendiente |
| BC-002 | Crear hscsg_constitution.md desde Bread Constitution | hscsg_definition.md | 🟡 Pendiente |
| BC-003 | Implementar brief-cms skill (Keystatic pattern) | hscsg-document-architect | 🟡 Pendiente |
| BC-004 | Sincronizar design-tokens → MATEMAS_GRIMORIO + DESIGN.md | design-md skill | 🟡 Pendiente |
| BC-005 | Mapear Operational Annex → Vasos Comunicantes spec | Vasos spec existente | 🟡 Pendiente |
| BC-006 | Alinear ZNU tokenomics con BREAD (demurrage, no especulativo) | ZNU implementado | 🟡 Pendiente |
| BC-007 | Integrar 100-point voting → Kappa Governance (VIA-25) | kappaGovernance.ts | 🟡 Pendiente |
| BC-008 | Formalizar Angel Minters → Semilla Base Material (Pilar 1) | Base Material 13 Pilares | 🟡 Pendiente |
| BC-009 | Mapear Stacks → Estrategias Base Material (13 Pilares × 7 Capas) | Soberanía spec | 🟡 Pendiente |
| BC-010 | Documentar isomorfismos en BRIEF_EXHAUSTIVO + BRIEFS_INDEX | Docs existentes | 🟡 Pendiente |

---

## 🎯 Decisiones de Diseño (ADR)

| ADR | Decisión | Razón |
|-----|----------|-------|
| ADR-BC-001 | **NO asimilar Astro/Starlight/Keystatic como runtime** | HSCSG es offline-first SPA; extraer solo patrones (schema, CMS, governance) |
| ADR-BC-002 | **Extirpar infra Netlify/Keystatic, conservar lógica CMS** | Regla anfibia: misma lógica, distinta infra (Git local vs Netlify) |
| ADR-BC-003 | **Crowdstaking → CaaS/ZNU, no fork del contrato** | HSCSG no usa EVM; lógica pura TypeScript en lib/ |
| ADR-BC-004 | **Constitución Bread → Enriquecer hscsg_definition.md, no duplicar** | Single source of truth; hscsg_definition.md ya es "constitución" |
| ADR-BC-005 | **Design System → Matemas generativos, no Figma estático** | HSCSG usa código generativo (p5js/manim), no Figma |

---

## 📊 Métricas de Asimilación

| Métrica | Valor |
|---------|-------|
| Archivos fuente analizados | 314 líneas (README + config + estructura) |
| Isomorfismos detectados | 10 |
| Módulos extraíbles | 4 |
| Workstream tasks | 10 |
| Briefs generados | 2 (backup + integration) |
| Líneas código nuevo estimado | ~800 TS + ~500 MD |
| Tiempo estimado implementación | 2-3 semanas (1 dev) |

---

## 🔗 Enlaces Cruzados

- **Backup:** `docs/breadchain_bread-docs_backup.md`
- **Integración:** `docs/breadchain_bread-docs_integration.md` (este archivo)
- **BRIEFS_INDEX:** Entrada #29 (pendiente actualizar)
- **fuentes_indice.json:** Fuente #29 (pendiente actualizar)
- **Skills relacionadas:** `hscsg-repo-assimilation`, `hscsg-document-architect`, `brief-detector-recommender`, `hscsg-gaia-mycelium-integration`
- **Workstream:** `BREADCHAIN_INTEGRATION` (pendiente añadir a orchestrator)

---

## 🚀 Próximos Pasos Inmediatos

1. **Crear workstream `BREADCHAIN_INTEGRATION` en orchestrator** (10 tasks)
2. **Ejecutar BC-001**: Extraer `crowdstaking-model.ts` a `src/core/lib/`
3. **Ejecutar BC-002**: Crear `hscsg_constitution.md` enriqueciendo `hscsg_definition.md`
4. **Actualizar BRIEFS_INDEX.md v1.5** + `fuentes_indice.json` con fuente #29
5. **Commit + push** a GitHub

---

*Integración generada por HSCSG v15 OS — Metodología hscsg-repo-assimilation (Fase 2: Integración — Triple Perspectiva Usuario·LLM·HSCSG+CaaS)*