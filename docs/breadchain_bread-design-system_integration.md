# BreadchainCoop — Bread-design-system (Integración HSCSG v15 OS)

**Fecha:** 2026-09-10  
**Fuente:** `breadchain_bread-design-system_backup.md`  
**Metodología:** hscsg-repo-assimilation (Fase 2: Integración — Triple Perspectiva)

---

## 👁️ Perspectiva 1: Usuario (Diseñador / Desarrollador Bread)

### Qué ve el usuario
Un repo de docs que documenta el design system completo de Bread Cooperative: foundations (tipografía Pogaca, colores CSS custom properties, dark mode), shared components (buttons, nav, cards, modals), golden rules (never build from scratch, import from Figma), y app-specific standards para Solidarity Fund, Stacks, Safety Net. Incluye setup guide para Claude Code + Figma MCP.

### Dolores resueltos
- **Consistencia visual**: Single source of truth en Figma + docs sincronizados
- **AI-assisted design**: Claude Code genera diseños on-brand via Figma MCP
- **App-specificity**: Cada app (Solidarity Fund, Stacks) tiene sus propios standards
- **Token management**: CSS custom properties = design tokens centralizados
- **Icon discipline**: Phosphor Icons direct from community file

### Gaps desde vista usuario
- Solo 3 commits — docs incompletas (safety-net.md TBD)
- Figma = source of truth visual, docs = reflejo (sync manual obligatorio)
- No component code — solo specs para implementación manual
- Purple overlay en ourcoop = hardcoded token repointing (no generativo)
- No versioning de design tokens (Figma no versiona bien)

---

## 🤖 Perspectiva 2: LLM / Agente (Claude Code, OpenCode, Hermes)

### Qué ve el agente
- **CLAUDE.md**: Machine-readable rules, tool config, token setup instructions
- **design-system.md**: Master spec estructurada (foundations, components, rules, gaps)
- **apps/*.md**: App-specific standards con component keys, variants, usage rules
- **setup/getting-started.md**: Step-by-step AI + Figma workflow
- **Figma file keys**: Referencias directas para `importComponentByKeyAsync`

### Patrones explotables para HSCSG
| Patrón Bread DS | Aplicación HSCSG |
|-----------------|------------------|
| `design-system.md` master + apps/*.md | `DESIGN.md` master + `vaso-*.md` per vaso |
| Component keys (Figma node IDs) | `MatemaRegistry` — generative component keys |
| Token repointing (purple overlay) | Harmonic palette generation from identity seed |
| Golden Rules (mandatory) | HSCSG Principles (mandatory) |
| Claude Code + Figma MCP | Hermes Agent + Skills (`p5js`, `manim`, `excalidraw`, `design-md`) |
| Mandatory doc sync | Brief-driven: docs = source of truth |
| Phosphor Icons external | Generative icons (p5js/manim) |
| Card/modal shells ad-hoc | Brief-driven generative shells |

### Fortalezas para agentes
- Estructura clara: master + app-specific
- Machine-readable rules (CLAUDE.md)
- Component keys accionables (Figma MCP)
- Workflow documentado (setup guide)
- Gaps/naming issues tracked explicitly

### Debilidades para agentes
- Figma dependency (no headless)
- Manual sync required (Figma ↔ docs)
- No generative code (only specs)
- Static tokens (CSS custom properties)
- Safety-net.md TBD (incomplete)

---

## 🌐 Perspectiva 3: HSCSG v15 OS + CaaS (Sistema Operativo Nodo)

### Mapeo Directo a Módulos HSCSG

| Componente Bread DS | Módulo HSCSG | Estado | Acción |
|---------------------|--------------|--------|--------|
| Design System Master | **DESIGN.md Spec** (skill design-md) | 🟡 Skill existe | Implementar spec completa |
| Foundations (typography, colors, spacing) | **Matema Foundations** (generativo) | ✅ MATEMAS_GRIMORIO | Sincronizar + generar |
| Shared Components | **Matema Shared Components** | 🟡 Parcial | Generar variants per vaso |
| Golden Rules | **HSCSG Principles** | ✅ Existentes | Alinear redacción |
| App-specific standards | **Vaso-specific UI Patterns** | ✅ 6 vasos | Crear `vaso-*.md` |
| AI + Figma workflow | **Hermes Agent + Design Skills** | ✅ Skills | Documentar workflow |
| Token repointing | **Matema Temático Generativo** | 🟡 Concepto | Implementar algoritmo |
| Phosphor Icons | **Generative Iconography** | 🟡 Concepto | p5js/manim icons |
| Doc sync mandate | **Brief-driven Development** | ✅ Orchestrator | Integrar en flow |

### Isomorfismos Profundos (10 detectados — total acumulado 60)

1. **Design System = Matemas Generativos**
   - Figma components = Matemas (código generativo, no estático)
   - Component keys = Matema Registry keys (algorítmicos)
   - Variants = Parámetros generativos (no fixed variants)

2. **Foundations = Matema Foundations**
   - Pogaca fonts → Matema Typography (generativo, variable)
   - CSS custom properties → Harmonic palette algorithm (from seed)
   - Spacing scale → Fibonacci/algorithmic scale
   - Dark mode → Theme generation (light/dark from seed)

3. **Shared Components = Matema Shared Library**
   - Buttons per app → Buttons per Vaso (generativo)
   - Nav bars → Vaso navigation shells
   - Cards/modals → Brief-driven generative shells
   - Icon system → Generative icons (p5js/manim)

4. **Golden Rules = HSCSG Principles**
   - "Never build from scratch" → "Reutilizar módulos asimilados"
   - "Never detach" → "Adjust via exposed parameters"
   - "Right button per app" → "Right component per Vaso"
   - "Phosphor direct" → "Generative direct"
   - "Shells ad-hoc" → "Brief-driven shells"

5. **App-Specific = Vaso-Specific**
   - Solidarity Fund → `governance:sync` + `trust:bridge` UI
   - Stacks → `intel:match` + `infra:connect` UI
   - Safety Net → `eco:sync` + `app:federate` UI
   - Each vaso = distinct visual language from same seed

6. **Token Repointing = Matema Temático**
   - Purple overlay (hardcoded) → Harmonic palette (generativo)
   - Seed = Sovereign Identity hash → unique palette per nodo
   - Algorithm = color theory (triadic, complementary, analogous)
   - Deterministic = same seed = same palette

7. **AI + Figma = Hermes + Skills**
   - Claude Code → Hermes Agent
   - Figma MCP → Skills (`p5js`, `manim`, `excalidraw`, `architecture-diagram`, `design-md`)
   - `importComponentByKeyAsync` → `MatemaRegistry.generateComponent()`
   - Figma file keys → Matema component keys

8. **Doc Sync Mandate = Brief-Driven Truth**
   - "Update docs before production" → "Brief = source of truth"
   - Figma = visual reference only
   - Docs = executable specification
   - Code = generated from docs

9. **Component Metadata = Matema Component Spec**
   - Name, page, variant key, set key, variants, usage rule → MatemaComponent interface
   - Generator function = p5js/manim code
   - Registry = Map<name, MatemaComponent>

10. **Gaps/Naming Issues = Technical Debt Tracking**
    - Known Gaps → Brief gaps (brief-detector-recommender)
    - Naming Issues → Terminology alignment (HSCSG glossary)
    - Resolution = Task in orchestrator

---

## 🔧 Módulos Extraíbles para HSCSG (4 — total acumulado 25)

### 1. `design-md-spec.md` → `design-tokens/design.md` (skill design-md)
```markdown
# HSCSG DESIGN.md — Design System Specification
## 1. Foundations (Generativos)
### 1.1 Typography — Matema Typography
```typescript
interface MatemaTypography {
  display: GenerativeFont;    // MatemaDisplay — variable weight, algorithmic
  body: GenerativeFont;       // MatemaBody — legible, generative line-height
  mark: GenerativeFont;       // AsteriskMark — ✳ identitario, animated
  mono: GenerativeFont;       // MatemaMono — code, technical
}
```

### 1.2 Colors — Harmonic Palette Generation
```typescript
interface ColorPalette {
  // Semantic tokens (generados desde seed)
  primary: Color;      // Main brand
  secondary: Color;    // Complementary
  tertiary: Color;     // Triadic
  accent: Color;       // Highlight
  // Semantic
  success: Color;
  warning: Color;
  error: Color;
  info: Color;
  // Surface
  background: Color;
  surface: Color;
  surfaceVariant: Color;
  // Text
  onPrimary: Color;
  onSecondary: Color;
  onBackground: Color;
  onSurface: Color;
}

// Generation algorithm
function generatePalette(identitySeed: IdentityHash): ColorPalette {
  const baseHue = hashToHue(identitySeed);  // 0-360
  return {
    primary: hsl(baseHue, 70%, 45%),
    secondary: hsl((baseHue + 180) % 360, 60%, 50%),
    tertiary: hsl((baseHue + 120) % 360, 65%, 50%),
    accent: hsl((baseHue + 60) % 360, 80%, 55%),
    // ... semantic derived
  };
}
```

### 1.3 Spacing — Algorithmic Scale
```typescript
// Fibonacci-based spacing scale
const spacing = [0, 4, 8, 12, 20, 32, 52, 84, 136, 220, 356]; // px
// Or: 4 * fib(n) where fib = [0,1,1,2,3,5,8,13,21,34,55,89]
```

### 1.4 Iconography — Generative
```typescript
// p5js/manim generators per icon name
type IconGenerator = (params: IconParams) => SVGPathData;
const iconGenerators: Map<string, IconGenerator> = new Map([
  ['asterisk', generateAsterisk],
  ['node', generateNode],
  ['connection', generateConnection],
  ['yield', generateYield],
  ['governance', generateGovernance],
  // ...
]);
```

## 2. Shared Components (Generativos per Vaso)
### 2.1 Buttons — Vaso-Specific Variants
```typescript
type VasoName = 'governance:sync' | 'trust:bridge' | 'infra:connect' 
  | 'intel:match' | 'app:federate' | 'eco:sync';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'destructive';

interface VasoButtonSpec {
  vaso: VasoName;
  variant: ButtonVariant;
  generator: ButtonGenerator;  // p5js/manim
  states: ['default', 'hover', 'active', 'disabled', 'loading'];
}
```

### 2.2 Navigation — Generative Nav Shell
### 2.3 Cards — Generative Card Shell (per brief)
### 2.4 Modals — Generative Modal Shell
### 2.5 Data Display — Tables, Lists, Charts (generativos)

## 3. Vaso-Specific Standards (apps/vaso-*.md)
### 3.1 vaso-governance.md
### 3.2 vaso-trust.md
### 3.3 vaso-infra.md
### 3.4 vaso-intel.md
### 3.5 vaso-app.md
### 3.6 vaso-eco.md

## 4. Golden Rules (HSCSG)
1. **Never build from scratch** — pull from Matema Registry
2. **Never detach** — adjust via exposed parameters
3. **Right component per Vaso** — vaso-specific generative variants
4. **Icons generative** — p5js/manim, not external library
5. **Shells ad-hoc per brief** — brief-driven component generation

## 5. AI-Assisted Design Workflow
### 5.1 Hermes Agent + Design Skills
- `design-md` — DESIGN.md spec management
- `p5js` — Generative component variants
- `manim-video` — Animated components/transitions
- `excalidraw` — Hand-drawn wireframes/flows
- `architecture-diagram` — System diagrams

### 5.2 Pipeline
```
Brief → DESIGN.md (design-md) → Component Specs → p5js/manim Generators → Code
```

## 6. Known Gaps → Brief Gaps
- [ ] Matema Registry implementation → Brief: MATHEMA-REGISTRY
- [ ] Generative token algorithm → Brief: GENERATIVE-TOKENS
- [ ] Vaso-specific variants → Brief: VASO-UI-VARIANTS
- [ ] Brief-to-visual pipeline → Brief: BRIEF-TO-VISUAL

## 7. Naming Issues → HSCSG Glossary
- [ ] Standardize Matema naming → Glossary alignment
- [ ] Align with HSCSG terminology → Terminology brief
```

### 2. `vaso-specific-standards.md` → `design-tokens/vaso-*.md` (6 files)
```markdown
# Vaso Governance:Sync — Design Standards
## Purpose
UI for governance synchronization across federated nodes.
Proposals, ballots, tally, delegation.

## Components (Generativos)
### ProposalCard
- Generator: `generateProposalCard(params)`
- Variants: `compact`, `detailed`, `minimal`
- States: `draft`, `active`, `passed`, `rejected`, `executed`

### VoteBallot
- Generator: `generateVoteBallot(params)`
- 100-point allocation UI (generative visualization)
- Real-time tally display
- Delegation panel

### TallyDisplay
- Generator: `generateTallyDisplay(params)`
- Real-time updating
- Quorum visualization
- Threshold indicators

## Tokens (Generados desde seed nodo)
- Primary: Governance Blue (hue from seed)
- Success: Consensus Green
- Warning: Quorum Amber
- Error: Veto Red
- Neutral: Governance Grey

## Layout
- Sidebar: Proposals list (filterable, sortable)
- Main: Active ballot / Live tally
- Footer: Delegation status + Voting power
- Responsive: Mobile stack, Desktop split

## Accessibility
- WCAG AA minimum
- Keyboard navigation full
- Screen reader announcements for tally updates
- High contrast mode (generated)
```

### 3. `design-ai-workflow.md` → `skills/design-ai-workflow.md`
```markdown
# HSCSG AI-Assisted Design Workflow
## Skills Required
- `design-md` — DESIGN.md spec management
- `p5js` — Generative component variants (static)
- `manim-video` — Animated components/transitions
- `excalidraw` — Hand-drawn wireframes/flows
- `architecture-diagram` — System diagrams
- `baoyu-infographic` — Data visualization

## Setup
1. Install Hermes Agent
2. Enable design skills: `skill_view design-md`, `skill_view p5js`, etc.
3. Configure `design-md` for DESIGN.md spec location
4. Set up `p5js`/`manim` output directories

## Workflow: Brief → Visual Spec → Code
### Phase 1: Brief Analysis
```
User: "Necesito UI para ballot 100-puntos en vaso governance:sync"
Agent: 
  1. Read brief → extract requirements
  2. Check DESIGN.md for token palette (generative from seed)
  3. Check vaso-governance.md for component patterns
  4. Identify gaps → create brief if needed
```

### Phase 2: Visual Spec Generation
```
Agent:
  1. design-md: generate component spec in DESIGN.md
  2. excalidraw: create wireframe/flow diagram
  3. p5js: generate static variants (3-5 options)
  4. manim: generate animated transitions
  5. Present to user for selection
```

### Phase 3: Code Generation
```
Agent:
  1. Selected variant → generate React/Vue/Svelte component
  2. Integrate with vaso governance:sync logic
  3. Add to MatemaRegistry
  4. Test in Storybook/preview
  5. Document in vaso-governance.md
```

## Brief-Driven Design
- Every design decision traced to brief
- Brief ID in component metadata
- Gap detection → new brief recommendation
- Version control: DESIGN.md + vaso-*.md in git
```

### 4. `matema-registry.ts` → `src/core/lib/matema-registry.ts`
```typescript
// Matema Registry — Generative Component System
// Equivalent to Figma component keys + importComponentByKeyAsync
export namespace MatemaRegistry {
  // Component Metadata
  export interface MatemaComponent {
    // Identity
    name: string;                    // Exact name (e.g., "ProposalCard")
    category: ComponentCategory;     // button, card, nav, modal, data, icon
    vaso?: VasoName;                 // Specific vaso (optional)
    
    // Generation
    generator: ComponentGenerator;   // p5js/manim function
    defaultParams: ComponentParams;  // Default parameters
    paramSchema: ParamSchema;        // Validation schema (Zod/JSON Schema)
    
    // Variants (generative, not fixed)
    variants: GenerativeVariant[];   // Algorithmically generated
    
    // Usage
    usageRule: string;               // When to use vs alternatives
    dependencies: string[];          // Other Matema components
    
    // Traceability
    briefId: BriefId;                // Origin brief
    version: SemVer;                 // Component version
    generatedAt: Timestamp;
    generatedBy: AgentId;            // Hermes Agent session
  }
  
  // Generative Variant (algorithm + parameters)
  export interface GenerativeVariant {
    name: string;                    // e.g., "compact", "detailed"
    algorithm: VariantAlgorithm;     // Function(params) → VisualSpec
    paramOverrides: Partial<ComponentParams>;
    preview: PreviewGenerator;       // Quick preview generator
  }
  
  // Registry Instance
  export class Registry {
    private components = new Map<string, MatemaComponent>();
    
    register(component: MatemaComponent): void;
    get(name: string): MatemaComponent | undefined;
    getByVaso(vaso: VasoName): MatemaComponent[];
    getByCategory(category: ComponentCategory): MatemaComponent[];
    
    // Generation
    async generate(name: string, params: ComponentParams): Promise<GeneratedComponent>;
    async generateVariant(name: string, variant: string, params: ComponentParams): Promise<GeneratedComponent>;
    
    // Search
    search(query: SearchQuery): MatemaComponent[];
    recommendForBrief(brief: Brief): MatemaComponent[];
  }
  
  // Global instance
  export const registry = new Registry();
  
  // Built-in generators (p5js/manim)
  export const Generators = {
    button: generateButton,
    card: generateCard,
    nav: generateNav,
    modal: generateModal,
    ballot: generateBallot,
    tally: generateTally,
    asterisk: generateAsterisk,
    node: generateNode,
    // ...
  };
}
```

---

## 📋 Workstream `BREADCHAIN_INTEGRATION` — Tasks Adicionales (desde Design System)

| Task ID | Descripción | Dependencia | Estado |
|---------|-------------|-------------|--------|
| BC-051 | Implementar DESIGN.md spec completa (skill design-md) | BC-041 | 🟡 Pendiente |
| BC-052 | Crear 6 vaso-*.md standards | BC-042 | 🟡 Pendiente |
| BC-053 | Implementar MatemaRegistry (generative components) | BC-043 | 🟡 Pendiente |
| BC-054 | Documentar design-ai-workflow skill | BC-044 | 🟡 Pendiente |
| BC-055 | Implementar generative token algorithm (harmonic palette) | BC-045 | 🟡 Pendiente |
| BC-056 | Implementar generative iconography (p5js/manim) | BC-046 | 🟡 Pendiente |
| BC-057 | Alinear Golden Rules → HSCSG Principles | BC-047 | 🟡 Pendiente |
| BC-058 | Migrar Purple Overlay → Matema Temático (ourcoop) | BC-048 | 🟡 Pendiente |
| BC-059 | Integrar brief-detector → design gaps | BC-049 | 🟡 Pendiente |
| BC-060 | Documentar isomorfismos Design System en BRIEF_EXHAUSTIVO | BC-050 | 🟡 Pendiente |

**Total workstream BREADCHAIN_INTEGRATION: 60 tasks** (10×6 repos)

---

## 🎯 Decisiones de Diseño (ADR) — Design System Specific

| ADR | Decisión | Razón |
|-----|----------|-------|
| ADR-BC-051 | **NO asimilar Figma como runtime** | HSCSG generativo (código), no estático (Figma) |
| ADR-BC-052 | **Token repointing → Harmonic palette algorithm** | Determinístico desde seed, no hardcoded overlay |
| ADR-BC-053 | **Component keys → MatemaRegistry generativo** | Mismo lookup pattern, distinta implementación |
| ADR-BC-054 | **Phosphor Icons → Generative icons** | Zero external deps, on-brand, animatable |
| ADR-BC-055 | **Doc sync mandate → Brief-driven truth** | Docs = executable spec, not reflection |
| ADR-BC-056 | **App-specific → Vaso-specific** | Arquitectura HSCSG = 6 vasos, no 3 apps |

---

## 📊 Métricas de Asimilación (Design System)

| Métrica | Valor |
|---------|-------|
| Archivos fuente analizados | ~120 líneas README + estructura |
| Isomorfismos detectados | 10 (total acumulado: 60) |
| Módulos extraíbles | 4 (total acumulado: 25) |
| Workstream tasks nuevos | 10 (total acumulado: 60) |
| Briefs generados | 2 (backup + integration) |
| Líneas código nuevo estimado | ~800 TS + ~600 MD |
| Tiempo estimado implementación | 2-3 semanas (1 dev) |

---

## 🔗 Enlaces Cruzados

- **Backup:** `docs/breadchain_bread-design-system_backup.md`
- **Integración:** `docs/breadchain_bread-design-system_integration.md` (este archivo)
- **BRIEFS_INDEX:** Entrada #34 (pendiente actualizar)
- **fuentes_indice.json:** Fuente #34 (pendiente actualizar)
- **Workstream:** `BREADCHAIN_INTEGRATION` (60 tasks totales)
- **Relacionado:** `ourcoop` purple overlay (fuente #31)
- **Skills:** `design-md`, `p5js`, `manim-video`, `excalidraw`, `architecture-diagram`, `baoyu-infographic`

---

*Integración generada por HSCSG v15 OS — Metodología hscsg-repo-assimilation (Fase 2: Integración — Triple Perspectiva Usuario·LLM·HSCSG+CaaS)*