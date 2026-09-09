# BreadchainCoop — Crowdstake.fun (Backup 2026-09-10)

**Fecha de asimilación:** 2026-09-10  
**Repositorio original:** https://github.com/BreadchainCoop/crowdstake.fun  
**Commit HEAD:** e5e208b (2026-07-12)  
**Estado:** Público, 410 commits, 114 ramas, 3 tags, 4 forks, 6 estrellas

---

## 📋 Resumen Ejecutivo

**crowdstake.fun** es el **protocolo base** de crowdstaking comunitario: convierte cualquier pool de dinero en un motor generador de intereses para objetivos compartidos del grupo. Los fondos depositados permanecen stakeados y totalmente retiraderos — solo el rendimiento (yield) se distribuye.

Es un **monorepo** con tres componentes:
1. **Frontend Next.js** (root) — Landing + dapp (App Router, React 19, Tailwind v4, `@breadcoop/ui`)
2. **Contracts Foundry** (`contracts/`) — Protocolo on-chain (distribución, votación, automatización, registros)
3. **Telegram Mini App** (`telegram/`) — Bot + launcher para correr la dapp dentro de Telegram

Desplegado en **Gnosis Chain (100)** con instancia live en `/app`.

---

## 🏗️ Arquitectura Técnica

### Monorepo Structure
```
crowdstake.fun/
├── contracts/              # Foundry project (Solidity)
│   ├── src/                # Contratos principales
│   ├── script/             # Deploy scripts (DeployGnosis.s.sol)
│   ├── test/               # 297 tests pass
│   ├── deployments/        # gnosis.json, sepolia.json addresses
│   └── foundry.toml
├── src/                    # Next.js frontend (App Router)
│   ├── app/                # Pages: /, /app, /deploy, /docs
│   ├── components/         # UI components (wired to @breadcoop/ui)
│   ├── lib/                # Constants, hooks, utils
│   └── hooks/              # use-tx, cross-chain voting hooks
├── telegram/               # Telegram Mini App
│   ├── bot/                # @crowdstake_bot scripts
│   └── README.md           # BotFather/Privy setup guide
├── e2e/                    # 70/70 tests (4 journeys + pool journey)
├── public/                 # Static assets, recorded GIFs
└── Config: package.json, pnpm-workspace.yaml, tsconfig, next.config
```

### Stack
| Capa | Tech |
|------|------|
| Frontend | Next.js 15 App Router, React 19, TypeScript strict |
| Styling | Tailwind CSS v4 (CSS-first), `@breadcoop/ui` design system |
| Contracts | Foundry (Forge, Cast, Anvil), Solidity ^0.8.24 |
| Wallet/Auth | Privy (embedded wallets, gasless "App pays" EIP-7702) |
| Cross-chain | EIP-712 signatures, familyId, sign-once-count-everywhere |
| Deploy | Netlify (static export), GitHub Actions CI |
| Testing | Forge (contracts), custom e2e harness (anvil fork) |

### Contratos Core (Gnosis Mainnet)
| Contrato | Dirección | Función |
|----------|-----------|---------|
| Token (`CSTAKE`) | `0x7E94a840143E3D5C78f367bBe45e6fB6e55098ec` | ERC20 del pool |
| Distribution Manager | `0xB38B15ad418202D3FdC1A139cEc51A8c13f59CB6` | Orquesta distribución yield |
| Cycle Module | `0xDfBDa0C7061276C3B8a08aC38fEdeE63c0B63827` | Ciclos de votación/distribución |
| Voting Module | `0xf921AF0C0fCd4A9dE0F6C58b34b05DBCCf0aAc42` | Votación on-chain (1p1v, weighted) |
| Recipient Registry | `0x8e61175AbBC31A07237367e356833C83204945C2` | Registro de receptores elegibles |

---

## 🔄 Flujo Principal: Crowdstaking

```
1. DEPLOY
   ├─ Wizard: elige chains (Gnosis, Arbitrum, Optimism, Ethereum)
   ├─ familyId determinístico liga instancias cross-chain
   └─ Deployer: un solo tx deploya todo (DistributionManager + modules)

2. DEPOSIT
   ├─ Usuario deposita (WXDAI, USDC, etc.) → mint shares (ERC4626)
   ├─ Principal va a yield strategy (sDAI, SexyDaiYield, etc.)
   └─ Shares = claim sobre principal (retiradero 1:1 siempre)

3. YIELD GENERATION
   ├─ Strategy genera yield (sDAI ≈ 7-8% APY)
   ├─ Yield acumula en DistributionManager
   └─ Solo yield es distribuible; principal intocable

4. VOTING (per cycle)
   ├─ Miembros votan: 1 persona = 1 voto (100 puntos分配)
   ├─ Cross-chain: una firma EIP-712, válida en todas las chains
   ├─ Gasless: Privy "App pays" (EIP-7702), browser submitea
   └─ Tally on-chain: top-N projects funded each cycle

5. DISTRIBUTION
   ├─ DistributionManager paga a receptores votados
   ├─ Strategies: Proportional / Equal / Split (half & half)
   └─ Recipient Registry: governance democrática (propose/approve/deny)

6. WITHDRAW
   ├─ Burn shares → receive principal (1:1)
   ├─ No lockup, no penalty
   └─ Yield ya distribuido no se recupera
```

---

## 🌐 Innovaciones Clave

### 1. **Pool Mode (Default)**
- Deploy wizard default = pool (no token issuance)
- `isPool` on-chain flag
- Resolve instance via `DM.yieldModule()` not `baseToken()`

### 2. **Serverless Gasless Cross-Chain Governance**
- **Sin relay, sin servidor**
- Privy embedded wallets + "App pays" gas sponsorship (EIP-7702)
- Browser firma **una vez** → submitea a **todas las chains** del family
- Entrypoints verifican voter/admin via `ecrecover` (signature), no `msg.sender`
- Fallback: per-chain wallet submit + copyable signed payload

### 3. **Static Export + Client-Side Resolution**
- Una sola build estática → resuelve cualquier instancia client-side
- Shareable link: `https://host/app/?i=<distributionManager>&c=<chainId>`
- White-label por instancia (banner, ticker, artwork)
- QR code en deploy-success

### 4. **Telegram Mini App Native**
- Pre-hydration boot script detecta Telegram
- `sessionStorage` flag, `<html>.tg-app`, inject `telegram-web-app.js`
- Privy Telegram auth → embedded wallet zero-click
- Bot `@crowdstake_bot` + BotFather guide en `telegram/`

### 5. **E2E Recording Pipeline Committed**
- `e2e/docs-gifs` → `npm run record` genera GIFs docs
- Clips muestran tx confirmadas en anvil Gnosis fork
- Clip sin success state = fail del run (no GIFs mintiendo)
- 9 walkthrough GIFs actualizados con UI actual

---

## 📜 AGENTS.md / CLAUDE.md

- **AGENTS.md**: Arquitectura, convenciones, command list completa
- **CLAUDE.md**: Apunta a AGENTS.md, config para Claude Code
- **opencode.json**: Provider OpenRouter + MCP
- Mismo patrón que `bread-docs`: agent-first development

---

## 🔗 Integración con Ecosistema Bread

| Repo | Relación |
|------|----------|
| `bread-docs` | Documenta este protocolo (Solidarity Primitives) |
| `ourcoop` | Fork cooperativo (COVA) con módulos custom |
| `bread-design-system` | UI components (`@breadcoop/ui`) |
| `coopstable-contracts` | cUSD yield token (referenciado en COVA modules) |
| `commonware-restaking-contracts` | AVS/restaking infra separada |

---

## 📦 Archivos Clave para Asimilación HSCSG

| Archivo/Carpeta | Qué Aporta a HSCSG |
|-----------------|---------------------|
| `contracts/src/` | **Lógica pura crowdstaking**: DistributionManager, CycleModule, VotingModule, RecipientRegistry, Strategies |
| `src/hooks/use-tx.ts` | **Patrón tx gasless cross-chain**: sign once, submit everywhere |
| `src/lib/constants.ts` | **Configuración instancias**: addresses, chain config, feature flags |
| `telegram/` | **Mini App pattern**: web app → native mobile sin rebuild |
| `e2e/` | **Testing rigoroso**: 70/70, anvil fork, GIF recording pipeline |
| `contracts/script/DeployGnosis.s.sol` | **Deploy reproducible**: un tx, multi-chain, env vars documentadas |
| `src/components/wallet/` | **Wallet abstraction**: Privy + wagmi variants, sponsored sends |

---

## 🧠 Isomorfismos HSCSG ←→ Crowdstake.fun

| Concepto Crowdstake | Concepto HSCSG v15 OS | Tipo Mapeo |
|---------------------|----------------------|------------|
| Pool (principal intacto) | Base Material (Ley I: no dañar base) | **Estructural** |
| Yield → distribución votada | Excedente regenerativo (AUT × CDS) → Kappa Governance | **Funcional** |
| 1p1v, 100 puntos/ciclo | κ-governance (VIA-25): triaxial verification + voting | **Gobernanza** |
| Multi-chain familyId | Nodos federados (Vaso: infra:connect + governance:sync) | **Arquitectural** |
| Gasless (Privy EIP-7702) | Soberanía computacional (no depender de relay/servidor) | **Soberanía** |
| Static export + client resolve | Offline-first SPA (localStorage/IndexedDB) | **Infraestructura** |
| Telegram Mini App | Nodo móvil/nativo (PWA + Capacitor/Tauri futuro) | **Accesibilidad** |
| Deploy wizard (1 tx) | Orchestrator deploy (1 comando: `orchestrator run deploy`) | **Operacional** |
| E2E + GIF pipeline | Verificación automática + evidence-collector skill | **Calidad** |
| Design system (@breadcoop/ui) | Matemas generativos + DESIGN.md tokens | **Estético** |

---

## 🎯 Qué Extraer para HSCSG v15 OS

### 1. **Crowdstaking Protocol Logic → `src/core/lib/crowdstaking-protocol.ts`**
Lógica pura TypeScript (sin EVM):
```typescript
interface CrowdstakingPool {
  principal: ZNUAmount;              // Base Material (Ley I)
  yieldStrategy: YieldStrategy;      // sDAI, SexyDai, etc. → Estrategias Pilar 2,3,4
  voting: KappaGovernance;           // 100-point, 1p1v → VIA-25
  distribution: DistributionStrategy; // Proportional/Equal/Split
  recipients: RecipientRegistry;     // Governance democrática → Vaso trust:bridge
  crossChain: FamilyId;              // Nodos federados → Vaso infra:connect
}
```

### 2. **Gasless Cross-Chain Pattern → `src/core/lib/gasless-crosschain.ts`**
```typescript
// Sign once, submit everywhere — sin relay, sin servidor
interface GaslessCrossChain {
  sign(message: Bytes): Signature;           // EIP-712
  submit(signature: Signature, chains: ChainId[]): TxReceipt[];
  verify(signature: Signature, address: Address): boolean; // ecrecover
}
```
**Mapea a:** Vaso `infra:connect` + `governance:sync` + Soberanía computacional

### 3. **Static Export + Client Resolution → `src/core/lib/static-instance-resolver.ts`**
```typescript
// Una build, muchas instancias — resuelve client-side
interface InstanceResolver {
  resolve(instanceId: DistributionManagerAddress, chainId: ChainId): InstanceConfig;
  whitelabel(instance: InstanceConfig): UIConfig; // banner, ticker, artwork
  shareableLink(instanceId, chainId): string;
}
```
**Mapea a:** HSCSG offline-first SPA + Nodos federados

### 4. **Telegram Mini App Pattern → `src/core/lib/telegram-miniapp.ts`**
```typescript
// Web app → Native mobile sin rebuild
interface TelegramMiniApp {
  detect(): boolean;                    // pre-hydration boot
  injectWebAppJS(): void;               // telegram-web-app.js
  authZeroClick(): EmbeddedWallet;      // Privy Telegram auth
  backButtonHandler(): void;            // native back
}
```
**Mapea a:** Accesibilidad nodo / PWA futura / Capacitor/Tauri

### 5. **Deploy Wizard → `scripts/deploy-wizard.cjs` (orchestrator task)**
```typescript
// 1 comando deploya nodo completo
deployNode({
  chains: ChainId[],           // Gnosis, Arbitrum, etc.
  yieldStrategy: YieldStrategy, // sDAI, etc.
  governance: GovernanceConfig, // 1p1v, 100pts, strategies
  modules: CustomModule[]       // overrides (como COVA)
})
```
**Mapea a:** Orchestrator `deploy` task + hscsg-repo-assimilation

---

## 📁 Archivos de Integración Generados

- `breadchain_crowdstake.fun_backup.md` — Este backup completo
- `breadchain_crowdstake.fun_integration.md` — Análisis triple-perspectiva (siguiente)

---

## 🏷️ Tags para BRIEFS_INDEX / fuentes_indice

```json
{
  "fuente_id": 30,
  "nombre": "BreadchainCoop/crowdstake.fun",
  "tipo": "protocol-monorepo",
  "url": "https://github.com/BreadchainCoop/crowdstake.fun",
  "commit": "e5e208b",
  "fecha_asimilacion": "2026-09-10",
  "briefs_generados": ["breadchain_crowdstake.fun_backup", "breadchain_crowdstake.fun_integration"],
  "workstreams_activados": ["BREADCHAIN_INTEGRATION"],
  "isomorfismos": 10,
  "modulos_extraibles": ["crowdstaking-protocol", "gasless-crosschain", "static-instance-resolver", "telegram-miniapp", "deploy-wizard"]
}
```

---

*Backup generado automáticamente por HSCSG v15 OS — Metodología hscsg-repo-assimilation (Fase 1: Backup)*