# BreadchainCoop — Bread-design-system (Backup 2026-09-10)

**Fecha de asimilación:** 2026-09-10  
**Repositorio original:** https://github.com/BreadchainCoop/bread-design-system  
**Commit HEAD:** 87db988 (2026-05-26)  
**Estado:** Público, 3 commits, 1 rama, 0 tags, 0 forks, 0 estrellas

---

## 📋 Resumen Ejecutivo

**Bread Design System** es el **single source of truth** para estándares de diseño across all Bread Cooperative apps: **Solidarity Fund**, **Stacks**, y **Safety Net**. Está estructurado para ser usado por diseñadores, desarrolladores, Y herramientas AI (Claude Code + Figma MCP) para generar diseños precisos y on-brand en Figma programáticamente.

> No es código de aplicación — es **documentación de design system** + **setup guide para AI tools**.

---

## 🏗️ Arquitectura del Repo

```
bread-design-system/
├── README.md                  # This file
├── CLAUDE.md                  # Machine-readable rules for Claude Code
├── setup/
│   └── getting-started.md    # How to set up Claude Code + Figma for Bread design work
├── design-system.md          # Master: foundations + shared components + golden rules
└── apps/
    ├── solidarity-fund.md    # Solidarity Fund–specific design standards
    ├── stacks.md             # Stacks–specific design standards
    └── safety-net.md         # Safety Net design standards (TBD)
```

### Figma Files (Source of Truth Visual)

| File | Link | File Key |
|------|------|----------|
| **Bread Design System** | [Open in Figma](https://www.figma.com/design/OYtf96ROFhou9nHezG5SOD/Bread-Co-op-Design-System-V1.1) | `OYtf96ROFhou9nHezG5SOD` |
| **Solidarity Fund** | [Open in Figma](https://www.figma.com/design/B6pfKFiU3oVQRq7ACKcTmf/Bread-Solidarity-Fund) | `B6pfKFiU3oVQRq7ACKcTmf` |
| **Stacks** | [Open in Figma](https://www.figma.com/design/CsleaPTgZVQXwkYnfUnUSE/Bread-Stacks) | `CsleaPTgZVQXwkYnfUnUSE` |
| **Phosphor Icons** | [Open in Figma](https://www.figma.com/community/file/6chsKsbGWGpNhjynYv1XXZ) | `6chsKsbGWGpNhjynYv1XXZ` |

---

## 🎯 Golden Rules (Quick Reference)

1. **Never build components from scratch** — always pull from Bread Design System Figma file using `importComponentByKeyAsync`
2. **Never detach component instances** — adjust only through exposed component properties
3. **Use the right button per sub-app** — each app has its own button colour (see `design-system.md` → Section 2.1)
4. **Phosphor icons** — always import directly from Phosphor community file (`6chsKsbGWGpNhjynYv1XXZ`), never via Design System file
5. **Card/modal shells** — built ad-hoc per flow following standard spec in `design-system.md`

---

## 🤖 Using with Claude Code

- `CLAUDE.md` auto-read by Claude Code when opening project
- Contains condensed critical rules + required tool configuration
- `setup/getting-started.md` = full setup guide for Claude Code + Figma MCP
- **⚠️ Never commit Figma MCP token** — see `CLAUDE.md` for token setup

---

## 📝 Keeping Design System Docs Up to Date

**Whenever a new component is added to Figma, or existing component updated, the relevant `.md` file MUST be updated before component used in production.**

### What Triggers an Update

| Change in Figma | File to Update |
|-----------------|----------------|
| New component added to DS file (`OYtf96ROFhou9nHezG5SOD`) | `design-system.md` — add to relevant section with component key, set key, variants |
| New Stacks-specific component/pattern | `apps/stacks.md` |
| New Solidarity Fund-specific component/pattern | `apps/solidarity-fund.md` |
| New Safety Net component/pattern | `apps/safety-net.md` |
| Button variant added/renamed | `design-system.md` → Section 2.1 + `CLAUDE.md` → button table |
| New nav bar variant/withdrawal module state | `design-system.md` → Section 3 |
| New color token or Figma paint style | `design-system.md` → Section 1.2 |
| New text style | `design-system.md` → Section 1.1 |
| Known gap resolved | `design-system.md` → Section 7 (remove from Known Gaps) |
| Naming issue fixed in Figma | `design-system.md` → Section 8 (remove from Naming Issues) |

### What to Include When Adding a Component

For every new Figma component, record:
- **Component name** — exact name as it appears in Figma
- **DS Page** — which page it lives on (`1:7`, `1:10`, etc.)
- **Default variant key** — key used with `importComponentByKeyAsync`
- **Component set key** — for reference (do not use for import)
- **Number of variants and their names**
- **Usage rule** — when to use this component vs. alternatives

### How to Find Component Keys

Use Claude Code with `figma-use` skill:
```
/figma-use
List all components on the Buttons page (1:7) of the Bread Design System file (OYtf96ROFhou9nHezG5SOD) with their node IDs and component keys.
```

---

## 🔗 Integración con Ecosistema Bread

| Repo | Relación |
|------|----------|
| `crowdstake.fun` | Usa `@breadcoop/ui` (design system implementado) |
| `ourcoop` | Purple overlay sobre `@breadcoop/ui` (token repointing) |
| `bread-docs` | Referencia design system (fonts Pogaca, colors CSS custom properties) |
| `coopstable-contracts` | No usa directamente |
| `commonware-restaking-contracts` | No usa directamente |
| `bread-gnosis-pay` | Legacy, no usa |

---

## 📦 Archivos Clave para Asimilación HSCSG

| Archivo | Qué Aporta a HSCSG |
|---------|---------------------|
| `design-system.md` | **Foundations + shared components + golden rules** — master spec |
| `apps/solidarity-fund.md` | **App-specific standards** — button/nav/icon keys, card specs, withdrawal module |
| `apps/stacks.md` | **Stacks-specific standards** |
| `apps/safety-net.md` | **Safety Net standards** (TBD) |
| `setup/getting-started.md` | **AI + Figma workflow** — pattern para HSCSG AI-assisted design |
| `CLAUDE.md` | **Machine-readable rules** — pattern para agent instructions |
| `README.md` | **Documentation structure** — pattern para HSCSG docs organization |

---

## 🧠 Isomorfismos HSCSG ←→ Bread Design System

| Concepto Bread DS | Concepto HSCSG v15 OS | Tipo Mapeo |
|-------------------|----------------------|------------|
| Design System (Figma + docs) | **Matemas / Grimorio Generativo** | **Estético/Simbólico** |
| Component keys (importComponentByKeyAsync) | **Matema Registry** — generativo, no estático | **Técnico** |
| Token repointing (purple overlay) | **Matema Temático** — algoritmo armónico desde semilla | **Generativo** |
| Golden Rules (never build from scratch) | **Principio HSCSG: reutilizar módulos asimilados** | **Metodológico** |
| Phosphor Icons (external source) | **Iconografía Generativa** — p5js/manim | **Visual** |
| Card/modal shells (ad-hoc per flow) | **UI Components generativos** — per brief/vaso | **Componible** |
| Claude Code + Figma MCP | **Hermes Agent + Skills** — AI-assisted development | **Metodológico** |
| Design tokens (CSS custom properties) | **DESIGN.md spec** (skill design-md) | **Especificación** |
| App-specific standards (solidarity-fund.md) | **Vaso-specific UI patterns** — per vaso comunicante | **Arquitectural** |
| Sync docs with Figma (mandatory) | **Brief-driven: docs = source of truth** | **Procesal** |

---

## 🎯 Qué Extraer para HSCSG v15 OS

### 1. **Design System Master → `design-tokens/design.md` (skill design-md)**
```markdown
# HSCSG Design System — DESIGN.md Spec
## 1. Foundations (Generativos)
### 1.1 Typography — Matema Typography (Generativo)
- Display: `MatemaDisplay` — variable weight, algorithmic spacing
- Body: `MatemaBody` — legible, generativo line-height
- Mark: `AsteriskMark` — ✳ identitario, animated

### 1.2 Colors — Harmonic Palette Generation
```typescript
// Semilla: identidad nodo (hash soberano) → paleta completa
function generateHarmonicPalette(seed: IdentityHash): ColorPalette {
  const baseHue = hashToHue(seed);
  return {
    primary: hsl(baseHue, 70%, 45%),
    secondary: hsl(baseHue + 180, 60%, 50%),
    accent: hsl(baseHue + 60, 80%, 55%),
    // ... semantic tokens
  };
}
```

### 1.3 Spacing — Algorithmic Scale
- Base unit: 4px → Fibonacci scale (4, 8, 12, 20, 32, 52, 84...)

## 2. Shared Components (Generativos)
### 2.1 Buttons — Per Vaso/App
```typescript
// Cada vaso tiene su button variant generativo
type VasoButton = 
  | { vaso: 'governance:sync'; variant: 'primary' | 'secondary' | 'ghost' }
  | { vaso: 'trust:bridge'; variant: 'primary' | 'secondary' | 'ghost' }
  | { vaso: 'infra:connect'; variant: 'primary' | 'secondary' | 'ghost' }
  | { vaso: 'intel:match'; variant: 'primary' | 'secondary' | 'ghost' }
  | { vaso: 'app:federate'; variant: 'primary' | 'secondary' | 'ghost' }
  | { vaso: 'eco:sync'; variant: 'primary' | 'secondary' | 'ghost' };
```

### 2.2 Navigation — Generative Nav Shell
### 2.3 Cards — Generative Card Shell (per flow)
### 2.4 Modals — Generative Modal Shell

## 3. App/Vaso-Specific Standards
### 3.1 Governance Sync — `vaso-governance.md`
### 3.2 Trust Bridge — `vaso-trust.md`
### 3.3 Infra Connect — `vaso-infra.md`
### 3.4 Intel Match — `vaso-intel.md`
### 3.5 App Federate — `vaso-app.md`
### 3.6 Eco Sync — `vaso-eco.md`

## 4. Golden Rules (HSCSG Version)
1. **Never build from scratch** — pull from Matema Registry (generative)
2. **Never detach** — adjust via exposed properties (parameters)
3. **Right component per Vaso** — vaso-specific variants
4. **Icons generative** — p5js/manim, not external library
5. **Shells ad-hoc per brief** — brief-driven component generation

## 5. AI-Assisted Design Workflow
### 5.1 Hermes Agent + Skills (equivalent to Claude Code + Figma MCP)
### 5.2 Skills: `architecture-diagram`, `excalidraw`, `p5js`, `manim-video`, `design-md`
### 5.3 Brief → Visual spec → Generative component → Code

## 6. Known Gaps (to resolve)
- [ ] Matema Registry implementation
- [ ] Generative token algorithm
- [ ] Vaso-specific component variants
- [ ] Brief-to-visual pipeline

## 7. Naming Issues (to fix)
- [ ] Standardize Matema naming convention
- [ ] Align with HSCSG terminology
```

### 2. **App-Specific Standards → `design-tokens/vaso-*.md`**
```markdown
# Vaso Governance:Sync — Design Standards
## Components
- ProposalCard (generativo)
- VoteBallot (generativo, 100-point allocation UI)
- TallyDisplay (generativo, real-time)
- DelegationPanel (generativo)

## Tokens
- Primary: Governance Blue (generado desde seed)
- Success: Consensus Green
- Warning: Quorum Amber
- Error: Veto Red

## Layout
- Sidebar: Proposals list
- Main: Active ballot / Tally
- Footer: Delegation status
```

### 3. **AI Setup Guide → `skills/design-ai-workflow.md`**
```markdown
# HSCSG AI-Assisted Design Workflow
## Setup (equivalent to setup/getting-started.md)
1. Install Hermes Agent
2. Enable skills: `architecture-diagram`, `excalidraw`, `p5js`, `manim-video`, `design-md`
3. Configure `design-md` skill for DESIGN.md spec
4. Use `excalidraw` for hand-drawn wireframes
5. Use `p5js`/`manim-video` for generative components

## Workflow
1. Brief defines requirements
2. `design-md` generates DESIGN.md tokens
3. `p5js` generates component variants
4. `excalidraw` creates flow diagrams
5. `architecture-diagram` creates system diagrams
6. Code generated from visual specs
```

### 4. **Component Key Registry → `src/core/lib/matema-registry.ts`**
```typescript
// Matema Registry (equivalent to Figma component keys)
export namespace MatemaRegistry {
  // Component metadata
  export interface MatemaComponent {
    name: string;                    // Exact name
    page: string;                    // DS Page (e.g., "1:7")
    defaultVariantKey: string;       // Key for generative import
    componentSetKey: string;         // Reference only
    variants: Variant[];             // Names + parameters
    usageRule: string;               // When to use vs alternatives
    generator: ComponentGenerator;   // p5js/manim generator fn
  }
  
  // Registry
  export const registry = new Map<string, MatemaComponent>();
  
  // Lookup
  export function getComponent(name: string): MatemaComponent | undefined;
  export function getComponentsByVaso(vaso: VasoName): MatemaComponent[];
  export function generateComponent(name: string, params: Params): GeneratedComponent;
}
```

---

## 📁 Archivos de Integración Generados

- `breadchain_bread-design-system_backup.md` — Este backup completo
- `breadchain_bread-design-system_integration.md` — Análisis triple-perspectiva (siguiente)

---

## 🏷️ Tags para BRIEFS_INDEX / fuentes_indice

```json
{
  "fuente_id": 34,
  "nombre": "BreadchainCoop/bread-design-system",
  "tipo": "design-system-docs",
  "url": "https://github.com/BreadchainCoop/bread-design-system",
  "commit": "87db988",
  "fecha_asimilacion": "2026-09-10",
  "briefs_generados": ["breadchain_bread-design-system_backup", "breadchain_bread-design-system_integration"],
  "workstreams_activados": ["BREADCHAIN_INTEGRATION"],
  "isomorfismos": 10,
  "modulos_extraibles": ["design-md-spec", "vaso-specific-standards", "design-ai-workflow", "matema-registry"],
  "figma_files": 4
}
```

---

*Backup generado automáticamente por HSCSG v15 OS — Metodología hscsg-repo-assimilation (Fase 1: Backup)*