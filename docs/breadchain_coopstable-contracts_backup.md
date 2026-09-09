# BreadchainCoop — Coopstable-contracts (Backup 2026-09-10)

**Fecha de asimilación:** 2026-09-10  
**Repositorio original:** https://github.com/BreadchainCoop/coopstable-contracts  
**Commit HEAD:** 9bb9ce3 (2026-04-07)  
**Estado:** Público, 105 commits, 5 ramas, 1 tag, 0 forks, 1 estrella, 1 watcher

---

## 📋 Resumen Ejecutivo

**Coopstable** es un **protocolo de stablecoin cooperativa descentralizado** construido en **Stellar/Soroban** (Rust/WASM). Implementa un modelo novedoso de **"donación sin pérdida" (lossless donation)**: usuarios mintean cUSD depositando colateral (USDC) en protocolos DeFi generadores de rendimiento (actualmente Blend Capital), el rendimiento generado se distribuye a miembros cooperativos y tesorería, mientras los usuarios retienen su principal.

> **Diferencia clave vs crowdstake.fun**: crowdstake = EVM (Gnosis/Arbitrum), Coopstable = Stellar/Soroban. Mismo patrón cooperativo, distinta cadena.

---

## 🏗️ Arquitectura Técnica

### Stack
| Capa | Tech |
|------|------|
| Contratos | Rust + Soroban (WASM32v1-none) |
| Build/Deploy | Makefile comprehensivo + Stellar CLI |
| Yield Source | Blend Capital (protocol adapter pattern) |
| Bindings | TypeScript (generado via `stellar contract bindings`) |
| Testing | Cargo test + Makefile test targets |
| Red | Stellar (testnet/mainnet configurable) |

### Estructura del Proyecto
```
coopstable-contracts/
├── contracts/                    # Core smart contracts (Soroban)
│   ├── cusd_manager/             # cUSD token management & minting
│   ├── yield_adapter_registry/   # Registry for yield protocol adapters
│   ├── yield_distributor/        # Yield distribution with epochs
│   └── lending_yield_controller/ # Main system orchestrator
├── packages/                     # Shared libraries & adapters
│   ├── yield_adapter/            # Common adapter interfaces (LendingAdapter trait)
│   └── blend_capital_adapter/    # Blend Capital protocol integration
├── ts/                          # TypeScript bindings (generated)
├── target/wasm32v1-none/release/ # Compiled WASM contracts
├── Cargo.toml                   # Workspace configuration
├── Makefile                     # Comprehensive build/deploy automation
├── mainnet.contracts.json       # Deployed addresses mainnet
├── testnet.contracts.json       # Deployed addresses testnet
└── README.md
```

### Contratos Core

| Contrato | Descripción | Funciones Clave |
|----------|-------------|-----------------|
| **cUSD Manager** | Autoridad central para lifecycle cUSD | `issue_cusd()`, `burn_cusd()`, `cusd_total_supply()` |
| **Lending Yield Controller** | Orquestador principal + user interface | `deposit_collateral()`, `withdraw_collateral()`, `claim_yield()` |
| **Yield Distributor** | Distribución yield con epochs | `distribute_yield()`, `add_member()`, `is_distribution_available()` |
| **Yield Adapter Registry** | Registry para yield protocol adapters | `register_adapter()`, `get_adapter()`, `is_supported_asset()` |

### Adapter Packages

| Package | Descripción | Funciones Clave |
|---------|-------------|-----------------|
| **yield_adapter** | Interfaces comunes (trait `LendingAdapter`) | Events, types, adapter interface |
| **blend_capital_adapter** | Integración Blend Capital | `deposit()`, `withdraw()`, `get_yield()`, `claim_emissions()` |

---

## 🔄 Flujo del Sistema

```
1. User deposits collateral (USDC) → Lending Yield Controller
2. Controller routes to adapter → Blend Capital Adapter
3. Adapter deposits to protocol → Blend Capital Pool
4. Controller mints cUSD 1:1 → cUSD Manager
5. Yield accumulates → Claimed periodically via controller
6. Yield distributed → Treasury (10%) + Members (90% equally) via Yield Distributor
```

**Epochs**: Distribución cada 24h (configurable), solo cuando hay yield disponible.

---

## 🛠️ Makefile — Automatización Completa

El Makefile es el **corazón operacional** — comandos clave:

```bash
# Build & Test
make build           # Build all contracts
make test            # Run all tests
make fmt             # Format code
make clean           # Clean artifacts
make help            # Show all targets

# Deploy
make quick-deploy           # Build + deploy entire protocol
make deploy-protocol        # Deploy with dependency management
make redeploy-protocol      # Clean redeploy
make deploy-cusd-manager-full
make deploy-controller-full
make deploy-blend-adapter-full

# Configure & Verify
make configure-all          # Auto-configure all contracts
make verify-deployment      # Check deployment status
make show-addresses         # View all deployed addresses
make check-config           # Check protocol configuration

# Operations
make test-full-cycle        # Test complete workflow
make test-deposit           # Test deposit
make test-claim-yield       # Test claim yield
make test-withdraw          # Test withdraw
make add-member MEMBER=<pk> # Add member to distribution
make list-members           # List all members
make next-distribution      # Check next distribution time

# Bindings
make bindings               # Generate all TypeScript bindings
```

---

## 📊 Protocol Economics

| Parámetro | Valor | Configurable |
|-----------|-------|--------------|
| Treasury Share | 10% (1000 bps) | ✅ `TREASURY_SHARE_BPS` |
| Distribution Period | 24h (86400s) | ✅ `DISTRIBUTION_PERIOD` |
| Supported Assets | USDC (primary) | ✅ Adapter registry |
| Yield Protocol | Blend Capital | ✅ Extensible adapters |
| Member Distribution | 90% equally | — |

**Emissions**: BLND token rewards claimed separately via adapter.

---

## 🔗 Integración con Ecosistema Bread

| Repo | Relación |
|------|----------|
| `crowdstake.fun` | **Patrón paralelo en EVM** — crowdstaking vs coopstable |
| `ourcoop` | Referencia cUSD yield token (inspiración COVA modules) |
| `bread-docs` | Documentación protocolo (no cubre Coopstable aún) |
| `commonware-restaking-contracts` | Infra separada (AVS/restaking) |
| `bread-gnosis-pay` | Bridge legacy (no relacionado directo) |

---

## 📦 Archivos Clave para Asimilación HSCSG

| Archivo/Carpeta | Qué Aporta a HSCSG |
|-----------------|---------------------|
| `contracts/` (4 core contracts) | **Lógica pura stablecoin cooperativa**: mint/burn, yield routing, distribution epochs, adapter pattern |
| `packages/yield_adapter/` | **Adapter pattern genérico** — trait `LendingAdapter` para múltiples protocolos yield |
| `packages/blend_capital_adapter/` | **Integración DeFi real** — deposit/withdraw/get_yield/claim_emissions |
| `Makefile` | **Automatización operacional completa** — 50+ targets, dependency management |
| `ts/` (bindings) | **TypeScript bindings pattern** — generated, typed, frontend-ready |
| `mainnet/testnet.contracts.json` | **Deployment manifests** — addresses, configs, reproducible deploys |
| `docs/` | **Documentación técnica** — architecture, troubleshooting, economics |

---

## 🧠 Isomorfismos HSCSG ←→ Coopstable

| Concepto Coopstable | Concepto HSCSG v15 OS | Tipo Mapeo |
|---------------------|----------------------|------------|
| cUSD (principal 1:1, yield distributed) | **ZNU + CaaS Vault** — principal intocable, yield = excedente regenerativo | **Estructural** |
| Lossless donation model | **Ley I MJ** — no dañar base material (principal) | **Filosófico** |
| Yield Adapter Registry | **Estrategias Base Material (13 Pilares × 7 Capas)** — adapter per pilar | **Arquitectural** |
| Blend Capital Adapter | **Estrategia Pilar 2 (Energía) / Pilar 3 (Alimentos)** — yield real | **Operativo** |
| Yield Distributor (epochs) | **Sistema Alráico (6 loops + γ-CARMIS)** — ciclos de resonancia | **Temporal** |
| Treasury 10% / Members 90% | **CaaS + Autómata Soberano** — reserva sistema + distribución miembros | **Económico** |
| Member Management (add/list) | **Identidad Soberana (Capa 1 Núcleo)** — registro miembros nodo | **Identidad** |
| Soroban/WASM (Rust) | **Lógica pura TypeScript** — extraer, no runtime | **Técnico** |
| Makefile automation | **Orchestrator + Skills** — tareas ejecutables, dependency graph | **Metodológico** |
| Stellar (L1) | **Nodo HSCSG (offline-first SPA)** — misma lógica, distinta infra | **Infraestructura** |

---

## 🎯 Qué Extraer para HSCSG v15 OS

### 1. **Coopstable Protocol Logic → `src/core/lib/coopstable-protocol.ts`**
```typescript
// Lógica pura stablecoin cooperativa (sin Soroban/Stellar)
export namespace CoopstableProtocol {
  // cUSD Manager
  export interface CUSDManager {
    issue(principal: ZNUAmount): CUSDShares;      // Mint 1:1
    burn(shares: CUSDShares): ZNUAmount;          // Burn 1:1, principal intacto
    totalSupply(): ZNUAmount;
  }
  
  // Lending Yield Controller (Orchestrator)
  export interface YieldController {
    depositCollateral(asset: Asset, amount: ZNUAmount): CUSDShares;
    withdrawCollateral(shares: CUSDShares): ZNUAmount;
    claimYield(): YieldAmount;
    routeToAdapter(asset: Asset): YieldAdapter;
  }
  
  // Yield Adapter Registry (Extensible)
  export interface YieldAdapterRegistry {
    register(adapter: YieldAdapter): void;
    getAdapter(asset: Asset): YieldAdapter;
    isSupported(asset: Asset): boolean;
    // Adapter trait (generic)
    trait LendingAdapter {
      deposit(asset: Asset, amount: Amount): YieldPosition;
      withdraw(position: YieldPosition): Asset;
      getYield(position: YieldPosition): YieldAmount;
      claimEmissions(position: YieldPosition): EmissionsAmount;
    }
  }
  
  // Yield Distributor (Epochs)
  export interface YieldDistributor {
    distributeYield(): DistributionResult;        // Called per epoch
    addMember(identity: SovereignIdentity): void;
    removeMember(identity: SovereignIdentity): void;
    isDistributionAvailable(): boolean;
    nextDistributionTime(): Timestamp;
    // Distribution model
    treasuryShare: BasisPoints;    // 1000 = 10%
    memberShare: BasisPoints;      // 9000 = 90%
    distributionPeriod: Duration;  // 24h default
  }
}
```

### 2. **Adapter Pattern → `src/core/lib/yield-adapter-pattern.ts`**
```typescript
// Adapter pattern genérico para estrategias Base Material
export interface BaseMaterialAdapter<Input, Output, Yield> {
  // Deploy/initialize strategy
  initialize(config: StrategyConfig): StrategyInstance;
  // Route input (resources) to strategy
  deposit(input: Input): StrategyInstance;
  // Generate yield
  harvest(instance: StrategyInstance): Yield;
  // Withdraw principal (intact)
  withdraw(instance: StrategyInstance): Input;
  // Claim protocol emissions (if any)
  claimEmissions(instance: StrategyInstance): Emissions;
  // Strategy metadata
  metadata: StrategyMetadata;
}

// Concrete adapters per Pilar
export type PilarAdapter = 
  | { pilar: 2; type: 'Energy'; adapter: SolarCommunityAdapter }
  | { pilar: 3; type: 'Food'; adapter: RegenerativeAgricultureAdapter }
  | { pilar: 4; type: 'Tools'; adapter: ProductiveToolsAdapter }
  | { pilar: 5; type: 'Knowledge'; adapter: EducationHealthAdapter }
  | { pilar: 6; type: 'Health'; adapter: CommunityHealthAdapter }
  | { pilar: 7; type: 'Governance'; adapter: SovereignGovernanceAdapter }
  | { pilar: 8; type: 'Community'; adapter: MutualCareAdapter };
```

### 3. **Makefile Automation → `scripts/coopstable-deploy.cjs` (orchestrator tasks)**
```javascript
// Orchestrator tasks replicando Makefile automation
tasks = {
  'COOPSTABLE-BUILD': {
    name: 'Build Coopstable Protocol (WASM)',
    cmd: 'cargo build --target wasm32v1-none --release',
    deps: ['rust-toolchain', 'wasm-target']
  },
  'COOPSTABLE-TEST': {
    name: 'Test All Contracts',
    cmd: 'cargo test',
    deps: ['COOPSTABLE-BUILD']
  },
  'COOPSTABLE-DEPLOY': {
    name: 'Deploy Protocol (Testnet/Mainnet)',
    params: { network: { enum: ['testnet', 'mainnet'] } },
    steps: [
      'deploy-core-contracts',      // cUSD Manager, Controller, Distributor, Registry
      'deploy-adapters',            // Blend Capital + future adapters
      'configure-all',              // Auto-wire contracts
      'verify-deployment',          // Check status
      'show-addresses',             # Output addresses JSON
      'add-initial-members'         // Seed membership
    ]
  },
  'COOPSTABLE-OPERATE': {
    name: 'Operate Protocol (Cycle)',
    steps: [
      'claim-yield',                // Controller claims from adapters
      'distribute-yield',           // Distributor runs epoch
      'check-distribution-status',  // Verify
      'next-distribution'           // Schedule next
    ]
  }
};
```

### 4. **TypeScript Bindings Pattern → `src/core/lib/bindings-generator.ts`**
```typescript
// Pattern: Contract WASM → TypeScript bindings auto-generated
export interface BindingsGenerator {
  // Generate from compiled WASM
  generate(wasmPath: string, outputDir: string): BindingResult;
  // Contract-specific
  generateCUSDManager(wasm: WASM): CUSDManagerBindings;
  generateYieldController(wasm: WASM): YieldControllerBindings;
  generateYieldDistributor(wasm: WASM): YieldDistributorBindings;
  generateAdapterRegistry(wasm: WASM): AdapterRegistryBindings;
  // Adapter bindings
  generateBlendCapitalAdapter(wasm: WASM): BlendCapitalAdapterBindings;
}

// HSCSG equivalent: Brief schema → TypeScript types auto-generated
export interface BriefSchemaGenerator {
  generate(briefSchema: BriefSchema): TypeScriptTypes;
  // Generates: Brief types, validation, serialization
}
```

---

## 📁 Archivos de Integración Generados

- `breadchain_coopstable-contracts_backup.md` — Este backup completo
- `breadchain_coopstable-contracts_integration.md` — Análisis triple-perspectiva (siguiente)

---

## 🏷️ Tags para BRIEFS_INDEX / fuentes_indice

```json
{
  "fuente_id": 32,
  "nombre": "BreadchainCoop/coopstable-contracts",
  "tipo": "stablecoin-protocol-soroban",
  "url": "https://github.com/BreadchainCoop/coopstable-contracts",
  "commit": "9bb9ce3",
  "fecha_asimilacion": "2026-09-10",
  "briefs_generados": ["breadchain_coopstable-contracts_backup", "breadchain_coopstable-contracts_integration"],
  "workstreams_activados": ["BREADCHAIN_INTEGRATION"],
  "isomorfismos": 10,
  "modulos_extraibles": ["coopstable-protocol", "yield-adapter-pattern", "coopstable-deploy-automation", "bindings-generator"],
  "chain": "Stellar/Soroban (paralelo a crowdstake.fun EVM)"
}
```

---

*Backup generado automáticamente por HSCSG v15 OS — Metodología hscsg-repo-assimilation (Fase 1: Backup)*