# BreadchainCoop — ourcoop (Integración HSCSG v15 OS)

**Fecha:** 2026-09-10  
**Fuente:** `breadchain_ourcoop_backup.md`  
**Metodología:** hscsg-repo-assimilation (Fase 2: Integración — Triple Perspectiva)

---

## 👁️ Perspectiva 1: Usuario (Miembro Cooperativa / Artista / Visitante)

### Qué ve el usuario
Una app cooperativa púrpura (`/coop/`) conectada a Sepolia live: ve fondos, propone proyectos artísticos, vota con 100 puntos, ve rondas de financiación, vota retiros de 4 tesorerías, ve log de actividad. Todo read-only público; actuar requiere ser miembro (MetaMask Sepolia). Demo interactiva (`/demo/`) con faucet test USD para onboarding zero-fricción.

### Dolores resueltos
- **Financiación arte sostenible**: Yield compartido → proyectos artísticos (no especulación)
- **Gobernanza real 1p1v**: 100 puntos, no plutocracia, membership-based
- **Presupuestos duales**: Full (aspiracional) + Min-viable (realista)
- **Tesorerías especializadas**: 4 fondos con propósito claro + 1m1v
- **Onboarding zero-friction**: Demo con faucet → main app
- **Runbook procedural**: Deploy reproducible, knowledge transfer

### Gaps desde vista usuario
- Solo Sepolia testnet (mainnet Gnosis pending)
- Requiere MetaMask (no embedded wallet como crowdstake.fun)
- No mobile app (Telegram Mini App solo en upstream)
- EU funding dependency (Kulturni sklop)

---

## 🤖 Perspectiva 2: LLM / Agente (Claude Code, OpenCode, Hermes)

### Qué ve el agente
- **AGENTS.md**: Architecture, conventions, command list (feat: O.U.R.COOP rebrand)
- **CLAUDE.md**: Auto-read, tool config
- **COVA modules**: `contracts/src/examples/cova/` — Solidity tipado, patterns claros
- **src/lib/coop.ts**: Frontend logic tipada (faucet, mint, registry, power, state)
- **e2e/onchain-journey**: 9 steps recorded on Sepolia fork (real txs)
- **Design system overlay**: pnpm-lock.yaml token repointing + second @theme block
- **Runbook**: `docs/runbook.html` — procedural knowledge executable

### Patrones explotables para HSCSG
| Patrón COVA | Aplicación HSCSG |
|-------------|------------------|
| `cova/` modules → pure logic extraction | `cova-modules.ts` → ZNU + CaaS + Kappa + Vasos |
| `coop.ts` → state management pattern | `coop-app-pattern.ts` → read-only public + member write |
| Design system overlay (token repointing) | `cooperative-theme.md` → Matema temático generativo |
| Runbook HTML → procedural knowledge | `coop-runbook.cjs` → Orchestrator task |
| 9-step E2E recording | Evidence collector + verification pipeline |
| Dual budget (full/min-viable) | Project budgeting en Base Material |
| Membership power (not stake) | Identidad Soberana (Capa 1 Núcleo) |
| 4-fund withdrawals (1m1v) | Multi-treasury → Vaso trust:bridge |

### Fortalezas para agentes
- Fork limpio de upstream (tracks crowdstake.fun main)
- Módulos aislados en `examples/cova/` (fácil extracción)
- TypeScript estricto frontend + Solidity contracts
- E2E real txs en Sepolia fork (evidence-based)
- Procedural knowledge documentado (runbook)

### Debilidades para agentes
- EVM-specific (Solidity, Foundry, MetaMask)
- Sepolia-only deployment (no multi-chain como upstream)
- Purple overlay = hardcoded theme (no dynamic theming)
- EU funding context = external dependency

---

## 🌐 Perspectiva 3: HSCSG v15 OS + CaaS (Sistema Operativo Nodo)

### Mapeo Directo a Módulos HSCSG

| Componente COVA | Módulo HSCSG | Estado | Acción |
|-----------------|--------------|--------|--------|
| cUSD yield token | **ZNU + CaaS Vault** | ✅ Existente | Extraer lógica pura |
| Project registry (dual budget) | **Proyectos Nodo (Base Material)** | 🟡 Parcial | Implementar dual budget |
| 100-point voting | **Kappa Governance (VIA-25)** | ✅ Código en skill | Integrar 100pts = attention budget |
| Top-N art-fund strategy | **κ-Distribution Strategy** | ✅ VIA-25 code | Parametrizar N |
| Membership voting power | **Identidad Soberana (Capa 1)** | ✅ Núcleo/Contenedor | Peso = ser, no stake |
| 4-fund withdrawals (1m1v) | **Vaso trust:bridge + governance:sync** | ✅ 6 vasos | Multi-treasury democratic |
| Purple theme overlay | **Matema Temático (generativo)** | ✅ MATEMAS_GRIMORIO | Tema cooperativo generativo |
| Shared Visions / EU funding | **Base Material Semilla (Pilar 1)** | 🟡 Concepto | Formalizar semilla fundacional |
| Kulturni sklop | **Nodo Cultural (Vaso eco:sync)** | 🟡 Concepto | Federación cultural |
| Runbook procedural | **Orchestrator Task + Skill** | ✅ Orchestrator | Knowledge → executable |

### Isomorfismos Profundos (10 detectados — total acumulado 30)

1. **cUSD = ZNU Vault Regenerativo**
   - Principal 1:1 = Ley I (base material intocable)
   - Yield sDAI = Excedente regenerativo (AUT × CDS)
   - Redeemable siempre = Soberanía recursiva

2. **Dual Budget = Planificación Base Material**
   - Full = Visión (Pilar 13: Visión/Propósito)
   - Min-viable = Realidad (Pilar 1: Tierra/Hábitat)
   - Gap = Zona de crecimiento (κ-resonance)

3. **100-Point Voting = κ-Governance Attention Budget**
   - 100 pts = Presupuesto atención por ciclo (κ)
   - Sum-capped = No overcommit (Lucidez, Ley III)
   - 1p1v = Identidad soberana (Capa 1 Núcleo)

4. **Top-N Strategy = κ-Distribution Paramétrica**
   - N configurable = Parámetro κ
   - Caps + min-viable redistribution = VIA-25 caps
   - Direct payouts = E=V immediate

5. **Membership Power = Soberanía Identitaria**
   - Peso = 1 (ser miembro) ≠ stake
   - Mapea a: Registro único por ser humano (Capa 1)
   - No token especulativo, no biometría centralizada

6. **4-Fund Withdrawals = Multi-Treasury Vaso trust:bridge**
   - Reserve = Pilar 1 (Tierra/Hábitat - resiliencia)
   - Education = Pilar 5 (Conocimiento/Salud)
   - Solidarity = Pilar 8 (Comunidad/Cuidado)
   - Production = Pilar 4 (Herramientas/Producción)
   - 1m1v each = Governance:sync per fund

6. **Purple Overlay = Matema Temático Generativo**
   - Token repointing = DESIGN.md token override
   - Archivo Variable = Matema Typography (generativo)
   - AsteriskMark = Matema identitario (✳ = nodo)

7. **Shared Visions = Base Material Semilla**
   - EU funding = Capital semilla (no deuda, no equity)
   - Kulturni sklop = Nodo cultural ancla
   - Co-funded = Reciprocidad fundacional (Ley II)

8. **Kulturni Skop = Nodo Cultural Federado**
   - Vaso eco:sync (ecología cultural)
   - Vaso app:federate (app cooperativa federada)
   - Vaso intel:match (matching artistas-proyectos)

9. **Runbook = Orchestrator Executable Knowledge**
   - Click-by-click → Task steps
   - Addresses/commands → Config parameters
   - Verification → Evidence collector

10. **Demo Mode = Onboarding Zero-Fricción**
    - Faucet test USD = Test ZNU (modo simulación)
    - Approve+mint = CaaS onboarding flow
    - Guided tour = CoachFAB / Modo Lucidez

---

## 🔧 Módulos Extraíbles para HSCSG (4 — total acumulado 13)

### 1. `cova-modules.ts` → `src/core/lib/cova-modules.ts`
```typescript
// Módulos COVA lógica pura (sin EVM)
export namespace CovaModules {
  // cUSD Yield Token
  export interface CUSD {
    deposit(asset: BaseAsset, amount: ZNUAmount): CUSDShares;
    yield(): YieldAmount;              // Solo yield distribuible
    redeem(shares: CUSDShares): BaseAsset; // 1:1 principal intacto
  }
  
  // Project Registry (Dual Budget)
  export interface ProjectRegistry {
    register(project: ProjectDraft): ProjectId;
    // Dual budget: aspiracional + viable
    budgets: { 
      full: ZNUAmount;        // Visión completa (Pilar 13)
      minViable: ZNUAmount;   // Mínimo viable (Pilar 1)
    };
    queue(projectId: ProjectId): void;
    processQueue(): ProjectId[];
  }
  
  // 100-Point Voting → Kappa Governance
  export interface Voting100Point {
    allocate(member: MemberId, points: PointAllocation): Ballot; // Σ = 100
    tally(ballots: Ballot[]): RankedProjects; // Top-N
    strategy: TopNStrategy; // N configurable
  }
  
  // Membership Power → Identidad Soberana
  export interface MembershipPower {
    isMember(identity: SovereignIdentity): boolean;
    votingPower(identity: SovereignIdentity): 1; // Siempre 1 (1p1v)
  }
  
  // Multi-Fund Withdrawals → Vaso trust:bridge
  export interface MultiFundWithdrawals {
    funds: Fund[]; // ['Reserve', 'Education', 'Solidarity', 'Production']
    propose(fund: Fund, amount: ZNUAmount, recipient: Address): Proposal;
    vote(proposal: ProposalId, member: MemberId): Vote; // 1m1v
    execute(proposal: ProposalId): void;
  }
}
```

### 2. `coop-app-pattern.ts` → `src/core/lib/coop-app-pattern.ts`
```typescript
// App cooperativa: read-only public + sovereign write
export interface CoopAppPattern {
  // Public read-only (anyone)
  getState(): CoopState;           // funds, projects, ballots, rounds, activity
  getProject(projectId: ProjectId): Project;
  getBallot(cycleId: CycleId): BallotState;
  getRound(roundId: RoundId): RoundResult;
  getActivityLog(): ActivityEntry[];
  
  // Sovereign write (member only)
  deposit(asset: Asset, amount: ZNUAmount): SovereignTx;
  registerProject(draft: ProjectDraft): SovereignTx;
  vote(ballot: Ballot): SovereignTx;
  proposeWithdrawal(fund: Fund, amount: ZNUAmount): SovereignTx;
  voteWithdrawal(proposal: ProposalId): SovereignTx;
  
  // Demo/Simulation mode
  demoMode(): DemoCoopApp; // Faucet + test assets + guided tour
}
```

### 3. `cooperative-theme.md` → `design-tokens/cooperative-theme.md` (skill design-md)
```markdown
# Tema Cooperativo — Matema Generativo
## Token Repointing (Generativo, no Hardcoded)
```typescript
const cooperativeTheme = {
  // Semilla: Shared Visions Purple (#7B2DFF)
  // Genera paleta completa via algoritmo armónico
  primary: generateHarmonicPalette('#7B2DFF', 'triadic'),
  secondary: generateHarmonicPalette('#7B2DFF', 'complementary'),
  // Typography: Archivo Variable → Matema Typography Generative
  typography: {
    display: 'MatemaDisplay',    // Generativo, variable weight
    body: 'MatemaBody',          // Generativo, legible
    mark: 'AsteriskMark'         // ✳ Matema identitario
  },
  // Components generativos
  components: {
    PosterStrip: 'GenerativePosterStrip',  // Hero band algorithmic
    AsteriskMark: 'GenerativeAsterisk',    // ✳ animated, resonant
    OurCoopLogo: 'GenerativeLogo'          // Logo from identity seed
  }
};
```

### 4. `coop-runbook.cjs` → `scripts/coop-runbook.cjs` (orchestrator task)
```javascript
// Procedural knowledge executable
task('DEPLOY-COOP-NODE', {
  name: 'Deploy Nodo Cooperativo (COVA Pattern)',
  description: 'Despliega nodo HSCSG con módulos cooperativos: cUSD, dual-budget projects, 100pt voting, top-N strategy, membership power, 4-fund withdrawals',
  params: {
    network: { type: 'string', enum: ['local', 'sepolia', 'gnosis', 'mainnet'] },
    seedFunding: { type: 'ZNUAmount', description: 'Capital semilla (Shared Visions equivalent)' },
    culturalAnchor: { type: 'string', description: 'Kulturni sklop equivalent — organización cultural ancla' },
    pillars: { type: 'string[]', default: ['all-13'], description: 'Pilares Base Material a activar' }
  },
  steps: [
    { id: 'init-base-material', name: 'Inicializar Base Material 13 Pilares', depends: [] },
    { id: 'init-caas-znu', name: 'Inicializar CaaS + ZNU + Vault cUSD', depends: ['init-base-material'] },
    { id: 'init-cova-modules', name: 'Desplegar Módulos COVA', depends: ['init-caas-znu'],
      modules: ['cUSD', 'ProjectRegistry', 'Voting100Point', 'TopNStrategy', 'MembershipPower', 'MultiFundWithdrawals'] },
    { id: 'wire-vasos', name: 'Conectar Vasos Comunicantes', depends: ['init-cova-modules'],
      vasos: ['governance:sync', 'trust:bridge', 'infra:connect', 'intel:match', 'app:federate', 'eco:sync'] },
    { id: 'init-alraic', name: 'Inicializar Sistema Alráico (6 loops)', depends: ['wire-vasos'] },
    { id: 'verify-e2e', name: 'Verificación E2E (9 steps)', depends: ['init-alraic'],
      steps: ['browse', 'connect', 'deposit', 'register-project', 'process-queue', 'ballot', 'funding-round', 'withdrawal', 'activity'] },
    { id: 'generate-runbook', name: 'Generar Runbook Procedural', depends: ['verify-e2e'] },
    { id: 'generate-shareable', name: 'Generar Link Compartible + QR', depends: ['generate-runbook'] }
  ]
});
```

---

## 📋 Workstream `BREADCHAIN_INTEGRATION` — Tasks Adicionales (desde ourcoop)

| Task ID | Descripción | Dependencia | Estado |
|---------|-------------|-------------|--------|
| BC-021 | Extraer cova-modules.ts (4 módulos COVA) | BC-011 | 🟡 Pendiente |
| BC-022 | Implementar coop-app-pattern.ts | BC-012 | 🟡 Pendiente |
| BC-023 | Crear cooperative-theme.md (Matema generativo) | BC-013 | 🟡 Pendiente |
| BC-024 | Crear coop-runbook.cjs task en orchestrator | BC-014 | 🟡 Pendiente |
| BC-025 | Mapear dual budget → Projectos Nodo | BC-016 | 🟡 Pendiente |
| BC-026 | Integrar 100pt voting → Kappa Governance (VIA-25) | BC-017 | 🟡 Pendiente |
| BC-027 | Mapear 4-fund withdrawals → Vaso trust:bridge | BC-018 | 🟡 Pendiente |
| BC-028 | Formalizar Membership Power → Identidad Soberana | BC-018 | 🟡 Pendiente |
| BC-029 | Mapear Shared Visions → Base Material Semilla (Pilar 1) | BC-016 | 🟡 Pendiente |
| BC-030 | Documentar isomorfismos COVA en BRIEF_EXHAUSTIVO | BC-020 | 🟡 Pendiente |

**Total workstream BREADCHAIN_INTEGRATION: 30 tasks** (10 bread-docs + 10 crowdstake.fun + 10 ourcoop)

---

## 🎯 Decisiones de Diseño (ADR) — COVA Specific

| ADR | Decisión | Razón |
|-----|----------|-------|
| ADR-BC-021 | **NO asimilar Foundry/Solidity/MetaMask** | HSCSG post-EVM; extraer lógica pura TypeScript |
| ADR-BC-022 | **Dual Budget = Aspiracional + Viable en Base Material** | Misma semántica, dominio distinto (arte → base material) |
| ADR-BC-023 | **Membership Power = Identidad Soberana (no stake)** | Alineado con Núcleo/Contenedor Capa 1 |
| ADR-BC-024 | **Purple Overlay → Matema Generativo (no theme estático)** | HSCSG usa código generativo (p5js/manim), no CSS estático |
| ADR-BC-025 | **Runbook → Orchestrator Task Executable** | Conocimiento procedural → código ejecutable |
| ADR-BC-026 | **Demo Mode → Modo Simulación / CoachFAB** | Onboarding zero-fricción alineado con UX HSCSG |

---

## 📊 Métricas de Asimilación (ourcoop)

| Métrica | Valor |
|---------|-------|
| Archivos fuente analizados | ~215 líneas README + config + estructura |
| Isomorfismos detectados | 10 (total acumulado: 30) |
| Módulos extraíbles | 4 (total acumulado: 13) |
| Workstream tasks nuevos | 10 (total acumulado: 30) |
| Briefs generados | 2 (backup + integration) |
| Líneas código nuevo estimado | ~1,000 TS + ~300 MD |
| Tiempo estimado implementación | 2-3 semanas (1 dev) |

---

## 🔗 Enlaces Cruzados

- **Backup:** `docs/breadchain_ourcoop_backup.md`
- **Integración:** `docs/breadchain_ourcoop_integration.md` (este archivo)
- **BRIEFS_INDEX:** Entrada #31 (pendiente actualizar)
- **fuentes_indice.json:** Fuente #31 (pendiente actualizar)
- **Upstream:** `BreadchainCoop/crowdstake.fun` (fuente #30)
- **Workstream:** `BREADCHAIN_INTEGRATION` (30 tasks totales)
- **Skills relacionadas:** `hscsg-repo-assimilation`, `hscsg-document-architect`, `hscsg-sistema-alraico`, `brief-detector-recommender`, `design-md`

---

*Integración generada por HSCSG v15 OS — Metodología hscsg-repo-assimilation (Fase 2: Integración — Triple Perspectiva Usuario·LLM·HSCSG+CaaS)*