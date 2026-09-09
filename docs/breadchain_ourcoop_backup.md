# BreadchainCoop — ourcoop (Backup 2026-09-10)

**Fecha de asimilación:** 2026-09-10  
**Repositorio original:** https://github.com/BreadchainCoop/ourcoop  
**Commit HEAD:** df4ca92 (2026-07-11)  
**Estado:** Público, 339 commits, 1 rama, 0 tags, 0 forks, 0 estrellas

---

## 📋 Resumen Ejecutivo

**ourcoop (O.U.R.COOP)** es una **cooperativa internacional de artistas** con sede en la ex-Yugoslavia, construida a través del programa "Shared Visions" (Kulturni sklop, Belgrado; co-financiada por la UE). La cooperativa financia proyectos artísticos desde rendimiento compartido: miembros stakean juntos, el principal permanece suyo, y boletas de 100 puntos deciden qué proyectos financia el interés.

Es un **fork "purple"** de `crowdstake.fun` que:
- Rastrea el protocolo crowdstake open-source
- Añade brand cooperativo (tema púrpura, tipografía Archivo, marca ✳)
- Añade **módulos on-chain propios** en `contracts/src/examples/cova`

Mismo stack monorepo que crowdstake.fun: Next.js frontend + Foundry contracts.

---

## 🏗️ Arquitectura Técnica

### Monorepo Layout (idéntico a crowdstake.fun)
```
ourcoop/
├── contracts/              # Foundry project
│   ├── src/
│   │   ├── examples/cova/  # 🎨 MÓDULOS COOPERATIVOS PROPIOS
│   │   └── ...             # Protocolo base (heredado)
│   ├── script/             # Deploy scripts
│   ├── test/
│   └── deployments/        # sepolia.json, gnosis.json
├── src/                    # Next.js frontend (App Router)
│   ├── app/
│   │   ├── coop/           # 🎨 APP COOPERATIVA (/coop/)
│   │   ├── demo/           # Demo interactiva gobernanza
│   │   └── ...
│   ├── lib/coop.ts         # Lógica cooperativa (faucet, mint, registry)
│   └── components/
├── public/
│   ├── coop/               # Static cooperative app
│   ├── demo/               # Interactive demo
│   ├── docs/runbook.html   # Runbook Gnosis integration
│   └── brand/              # Cooperative poster imagery
├── e2e/onchain-journey/    # 9 coop steps recorded on Sepolia fork
└── Config: pnpm, Next.js, Tailwind v4, @breadcoop/ui
```

### Módulos Cooperativos COVA (`contracts/src/examples/cova`)

| Módulo | Función | Innovación |
|--------|---------|------------|
| **cUSD yield token** | Deposita WXDAI → rutea a sDAI → principal earns, redeemable 1:1 | Yield-bearing stablecoin cooperativa |
| **Project registry** | Proyectos artísticos con presupuesto full + minimum-viable | Dual budget (aspiracional / viable) |
| **100-point voting** | 1 persona = 1 voto: 100 puntos exactos por ciclo | Sum-capped ballots, no plutocracia |
| **Top-N art-fund strategy** | Yield acumulado financia top-voted projects cada ciclo | Strategy paramétrica (N configurable) |
| **Membership voting power** | Peso de voto = membresía, NO stake size | Soberanía identitaria, no financiera |
| **Withdrawals** | 4 fondos cooperativos (Reserve, Education, Solidarity, Production) con propuestas 1m1v | Multi-treasury democratic governance |

### App Cooperativa (`/coop/`)
- **Live en Sepolia**: funds, project proposals, 100-point ballots, funding rounds, withdrawal votes, activity log
- **Read-only público**: cualquiera navega sin wallet
- **Actuar = member wallet** (MetaMask Sepolia), página nunca guarda keys
- **Custom modules** vía deploy wizard "Custom modules (advanced)"
- **Runbook**: `docs/runbook.html` (click-by-click Gnosis integration)

---

## 🔄 Flujo Cooperativo Completo (9 Steps E2E)

1. **Browse** — Navega read-only estado live
2. **Connect** — MetaMask Sepolia
3. **Deposit** — Faucet test USD → approve + mint cUSD 1:1
4. **Register Project** — Coordinator form (title/summary/payout/full/min-viable) → queued
5. **Process Queue** — Permissionless process → project active
6. **Ballot** — 100 puntos分配 across projects (sum-capped)
7. **Funding Round** — Cycle-gated claim & distribute (top-5, caps, min-viable redistribution)
8. **Withdrawal** — 1m1v proposals on 4 funds (Reserve/Education/Solidarity/Production)
9. **Activity** — On-chain log (MemberAdded/Removed, deposits, votes, distributions)

---

## 🎨 Brand & Design System (Purple Fork)

| Elemento | Crowdstake.fun | ourcoop (COVA) |
|----------|----------------|----------------|
| Color primario | Core Orange | **Shared Visions Purple** |
| Tipografía | Pogaca | **Archivo Variable** (latin + latin-ext) |
| Marca | Bread logo | **✳ AsteriskMark / OurCoopLogo** |
| Tono | Protocol neutro | **Cooperative poster style** (dark purple hero) |
| Componentes | @breadcoop/ui base | **Second @theme block** overlay (token repointing) |

**Token Repointing (pnpm-lock.yaml):**
```
core-orange → Shared Visions purple
jade → deep violet
paper → lavender-cast white
ink/greys → purple-cast
```

---

## 🔗 Integración con Ecosistema Bread

| Repo | Relación |
|------|----------|
| `crowdstake.fun` | **Upstream protocolo base** (fork tracks main) |
| `bread-docs` | Documenta protocolo base (no módulos COVA) |
| `bread-design-system` | Base UI (@breadcoop/ui) + purple overlay |
| `coopstable-contracts` | cUSD yield token (referenciado/inspirado) |
| `bread-gnosis-pay` | Legacy bridge (no usado en COVA) |

---

## 📦 Archivos Clave para Asimilación HSCSG

| Archivo/Carpeta | Qué Aporta a HSCSG |
|-----------------|---------------------|
| `contracts/src/examples/cova/` | **Módulos cooperativos completos**: cUSD, project registry, 100pt voting, top-N strategy, membership power, 4-fund withdrawals |
| `src/lib/coop.ts` | **Lógica frontend cooperativa**: faucet, mint/burn, registry, power, state management |
| `public/coop/` | **App cooperativa completa** (static export) — referencia UX |
| `public/demo/` | **Demo interactiva gobernanza** — onboarding pattern |
| `docs/runbook.html` | **Runbook deployment** — procedural knowledge |
| `e2e/onchain-journey/` | **9 steps E2E recorded** — evidence-based verification |
| `pnpm-lock.yaml` + `tailwind` | **Design system overlay pattern** — theme switching |
| `AGENTS.md` / `CLAUDE.md` | Agent instructions (mismo patrón ecosistema) |

---

## 🧠 Isomorfismos HSCSG ←→ ourcoop (COVA)

| Concepto COVA | Concepto HSCSG v15 OS | Tipo Mapeo |
|---------------|----------------------|------------|
| cUSD yield token (principal 1:1) | **ZNU + CaaS Vault** (principal intocable, yield distribuido) | **Estructural** |
| Project registry (full + min-viable) | **Proyectos Nodo** (presupuesto aspiracional + viable) | **Operativo** |
| 100-point voting (1p1v) | **Kappa Governance (VIA-25)** — 100 pts = attention budget | **Gobernanza** |
| Top-N art-fund strategy | **κ-Distribution Strategy** (paramétrica, top-N) | **Algorítmico** |
| Membership voting power | **Identidad Soberana (Capa 1 Núcleo)** — peso = ser, no stake | **Identidad** |
| 4-fund withdrawals (1m1v) | **Vaso trust:bridge + governance:sync** — multi-treasury | **Tesorería** |
| Purple theme overlay | **Matema Temático** — generativo, no estático | **Estético** |
| Shared Visions / EU funding | **Base Material semilla** (Pilar 1: Tierra/Hábitat) | **Económico** |
| Kulturni sklop (cultural org) | **Nodo Cultural** (Vaso eco:sync + app:federate) | **Red** |
| Runbook procedural | **Orchestrator Task + Skill** — conocimiento ejecutable | **Metodológico** |

---

## 🎯 Qué Extraer para HSCSG v15 OS

### 1. **COVA Modules → `src/core/lib/cova-modules.ts`**
Lógica pura TypeScript (sin EVM):
```typescript
// cUSD Yield Token
interface CovaCUSD {
  deposit(asset: WXDAI): CUSDShares;      // 1:1 mint
  routeToYield(shares: CUSDShares): YieldStrategy; // sDAI
  redeem(shares: CUSDShares): WXDAI;      // 1:1 burn, principal intacto
  yield(): YieldAmount;                   // Solo yield distribuible
}

// Project Registry
interface CovaProjectRegistry {
  register(project: ArtProject): ProjectId;
  queue(projectId: ProjectId): void;      // Permissionless process
  processQueue(): ProjectId[];            // Active projects
  budgets: { full: ZNUAmount; minViable: ZNUAmount };
}

// 100-Point Voting (→ Kappa Governance)
interface CovaVoting {
  allocatePoints(member: MemberId, allocation: PointAllocation): Ballot; // sum = 100
  tally(ballots: Ballot[]): RankedProjects; // Top-N
  strategy: TopNStrategy;                  // N configurable
}

// Membership Power (→ Identidad Soberana)
interface CovaMembership {
  isMember(address: Address): boolean;
  votingPower(member: MemberId): 1;        // Siempre 1 (1p1v)
  // NO stake-weighted
}

// Multi-Fund Withdrawals (→ Vaso trust:bridge)
interface CovaWithdrawals {
  funds: ['Reserve', 'Education', 'Solidarity', 'Production'];
  proposeWithdrawal(fund: Fund, amount: ZNUAmount, recipient: Address): Proposal;
  vote(proposal: ProposalId, member: MemberId): Vote; // 1m1v
  execute(proposal: ProposalId): void;
}
```

### 2. **Coop App Pattern → `src/core/lib/coop-app-pattern.ts`**
```typescript
// App cooperativa: read-only public + member write
interface CoopApp {
  // Public read-only state
  getState(): CoopState;           // funds, projects, ballots, rounds, activity
  // Member actions (require sovereign identity)
  deposit(asset: Asset, amount: Amount): Tx;
  registerProject(project: ProjectDraft): Tx;
  vote(ballot: Ballot): Tx;
  proposeWithdrawal(fund: Fund, amount: Amount): Tx;
  voteWithdrawal(proposal: ProposalId): Tx;
  // Demo mode (faucet + test assets)
  demoMode(): DemoCoopApp;
}
```

### 3. **Design System Overlay → `design-tokens/cooperative-theme.md`**
```markdown
# Tema Cooperativo (Purple Overlay)
## Token Repointing
- core-orange → #7B2DFF (Shared Visions Purple)
- jade → #4A0072 (Deep Violet)
- paper → #F5F0FF (Lavender-Cast White)
- ink → #2D1B3D (Purple-Cast Dark)
## Typography
- Display: Archivo Variable (wght 400-900)
- Body: Archivo Variable (wght 400-600)
## Components
- AsteriskMark (✳) — marca identitaria
- OurCoopLogo — logo cooperativa
- PosterStrip — hero band style
```

### 4. **Runbook → `scripts/coop-runbook.cjs` (orchestrator task)**
```javascript
// Procedural knowledge: deploy cooperative node
task('DEPLOY-COOP-NODE', {
  name: 'Deploy Nodo Cooperativo (COVA pattern)',
  steps: [
    'deploy-base-protocol',      // crowdstake base
    'deploy-cova-modules',       // cUSD, registry, voting, strategy, membership, withdrawals
    'wire-custom-modules',       // Deploy wizard custom modules section
    'verify-sepolia',            // E2E on Sepolia fork
    'generate-runbook',          // docs/runbook.html equivalent
    'record-demo-gifs'           // 9 steps e2e recording
  ]
});
```

---

## 📁 Archivos de Integración Generados

- `breadchain_ourcoop_backup.md` — Este backup completo
- `breadchain_ourcoop_integration.md` — Análisis triple-perspectiva (siguiente)

---

## 🏷️ Tags para BRIEFS_INDEX / fuentes_indice

```json
{
  "fuente_id": 31,
  "nombre": "BreadchainCoop/ourcoop",
  "tipo": "cooperative-fork",
  "url": "https://github.com/BreadchainCoop/ourcoop",
  "commit": "df4ca92",
  "fecha_asimilacion": "2026-09-10",
  "briefs_generados": ["breadchain_ourcoop_backup", "breadchain_ourcoop_integration"],
  "workstreams_activados": ["BREADCHAIN_INTEGRATION"],
  "isomorfismos": 10,
  "modulos_extraibles": ["cova-modules", "coop-app-pattern", "cooperative-theme", "coop-runbook"],
  "upstream": "BreadchainCoop/crowdstake.fun (fuente #30)"
}
```

---

*Backup generado automáticamente por HSCSG v15 OS — Metodología hscsg-repo-assimilation (Fase 1: Backup)*