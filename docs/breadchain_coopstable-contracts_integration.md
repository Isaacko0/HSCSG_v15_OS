# BreadchainCoop — Coopstable-contracts (Integración HSCSG v15 OS)

**Fecha:** 2026-09-10  
**Fuente:** `breadchain_coopstable-contracts_backup.md`  
**Metodología:** hscsg-repo-assimilation (Fase 2: Integración — Triple Perspectiva)

---

## 👁️ Perspectiva 1: Usuario (Miembro Cooperativa / Usuario cUSD)

### Qué ve el usuario
Un protocolo stablecoin donde deposita USDC → recibe cUSD 1:1 → su principal está seguro (siempre redimible 1:1) → el rendimiento (yield) de Blend Capital se distribuye automáticamente cada 24h: 10% a tesorería cooperativa, 90% dividido equitativamente entre miembros. Puede retirar cuando quiera. Claims de emisiones BLND por separado.

### Dolores resueltos
- **Stablecoin sin riesgo de principal**: Lossless donation model = Ley I MJ
- **Yield real, no especulativo**: Blend Capital (DeFi probado en Stellar)
- **Distribución justa**: 90% miembros equitativamente, no plutocracia
- **Governance cooperativa**: Members gestionados, treasury apartada
- **Extensible**: Adapter registry para nuevos protocolos yield
- **Operaciones simples**: Makefile = 1 comando para todo

### Gaps desde vista usuario
- Solo USDC soportado (futuro: multi-asset via adapters)
- Solo Blend Capital (single yield source)
- Requiere Rust/Stellar CLI para deploy (barrera técnica)
- Stellar-only (no cross-chain nativo como crowdstake.fun)
- 1 contributor principal (RasenGUY) — bus factor

---

## 🤖 Perspectiva 2: LLM / Agente (Claude Code, OpenCode, Hermes)

### Qué ve el agente
- **README exhaustivo**: Architecture, flow, deployment, operations, economics, troubleshooting
- **Makefile comprehensivo**: 50+ targets, dependency management, automation completa
- **Contracts Rust/Soroban**: 4 core contracts + 2 adapter packages, tipado fuerte
- **TypeScript bindings**: Auto-generated from WASM (`stellar contract bindings`)
- **Deployment manifests**: `mainnet.contracts.json`, `testnet.contracts.json` (reproducible)
- **Testing patterns**: `make test-full-cycle`, `test-deposit`, `test-claim-yield`, etc.

### Patrones explotables para HSCSG
| Patrón Coopstable | Aplicación HSCSG |
|-------------------|------------------|
| `Makefile` automation (50+ targets) | `orchestrator tasks` + `skills` — dependency graph ejecutable |
| Adapter pattern (`LendingAdapter` trait) | `BaseMaterialAdapter` trait — estrategia per Pilar |
| TypeScript bindings from WASM | `BriefSchemaGenerator` — brief schema → TS types |
| Deployment manifests (JSON) | `NodeConfig` JSON — addresses, config, reproducible |
| Epoch-based distribution | `Sistema Alráico` loops + γ-CARMIS cycles |
| Treasury/Member split (10/90) | `CaaS + Autómata Soberano` — reserva + distribución |
| Member management (add/list) | `Identidad Soberana` registry (Capa 1 Núcleo) |

### Fortalezas para agentes
- Documentación técnica completa (architecture, flow, config, troubleshooting)
- Makefile = single source of truth operacional
- Rust tipado = contratos verificables
- Bindings auto-generados = frontend type-safe
- Test targets granulares = verificación incremental

### Debilidades para agentes
- Rust/Soroban = ecosistema específico (no TypeScript nativo)
- Stellar CLI dependency para deploy
- Single contributor = knowledge concentration
- No agent instructions (AGENTS.md/CLAUDE.md ausentes)

---

## 🌐 Perspectiva 3: HSCSG v15 OS + CaaS (Sistema Operativo Nodo)

### Mapeo Directo a Módulos HSCSG

| Componente Coopstable | Módulo HSCSG | Estado | Acción |
|----------------------|--------------|--------|--------|
| cUSD Manager | **ZNU + CaaS Vault** | ✅ Existente | Extraer lógica mint/burn 1:1 |
| Lending Yield Controller | **Autómata Soberano + Yield Router** | ✅ Existente | Enriquecer con adapter pattern |
| Yield Adapter Registry | **Estrategias Base Material (13 Pilares)** | 🟡 Parcial | Implementar adapter per pilar |
| Blend Capital Adapter | **Estrategia Real (Pilar 2/3)** | 🟡 Concepto | Mapear a energía/alimentos |
| Yield Distributor (epochs) | **Sistema Alráico (6 loops)** | ✅ Existente | Alinear epochs → loops |
| Treasury 10% / Members 90% | **CaaS + Autómata Soberano** | ✅ Existente | Parametrizar ratios |
| Member Management | **Identidad Soberana (Capa 1)** | ✅ Núcleo/Contenedor | Integrar registry |
| Soroban/WASM Contracts | **Lógica Pura TypeScript** | ✅ Principio | Extraer, no runtime |
| Makefile Automation | **Orchestrator + Skills** | ✅ Existente | Replicar targets como tasks |
| TypeScript Bindings | **Brief Schema → TS Types** | 🟡 Skill design-md | Implementar generador |

### Isomorfismos Profundos (10 detectados — total acumulado 40)

1. **cUSD = ZNU Vault Regenerativo**
   - Mint 1:1 = CaaS entry (contribución → acceso)
   - Burn 1:1 = Salida soberana (principal intocable = Ley I)
   - Yield = Excedente regenerativo (AUT × CDS)

2. **Lossless Donation = Ley I Materialista Jerárquico**
   - "No dañar la base material" = Principal nunca en riesgo
   - Solo excedente (yield) se redistribuye
   - Usuario = Guardián de base material, no especulador

3. **Adapter Registry = 13 Pilares × 7 Capas**
   - Cada adapter = Estrategia por Pilar
   - `LendingAdapter` trait = Interfaz genérica `BaseMaterialAdapter`
   - Registro dinámico = Activación pilares por nodo

4. **Blend Capital = Yield Real (Pilar 2 Energía / Pilar 3 Alimentos)**
   - DeFi yield → Yield productivo real (solar, agricultura regenerativa)
   - Emissions (BLND) → Incentivos protocolares (tokens Pilar)
   - Adapter pattern = Pluggable, swappable, auditable

5. **Yield Distributor = Sistema Alráico (E=V Cycles)**
   - Epochs 24h = Loops γ-CARMIS (resonancia periódica)
   - Treasury 10% = Reserva sistémica (Autómata Soberano)
   - Members 90% = Distribución κ-governance (VIA-25)
   - Minimum distribution = Umbral de resonancia (κ > 0)

6. **Member Management = Identidad Soberana (Capa 1 Núcleo/Contenedor)**
   - Add/remove members = Registro único por ser humano
   - Equal distribution = 1p1v (no stake-weighted)
   - Sovereign identity = No biometría, no token especulativo

7. **Soroban/WASM = Lógica Pura Portable**
   - Rust → TypeScript extraction (misma semántica)
   - WASM portable = Lógica agnóstica a runtime
   - HSCSG = TypeScript nativo (offline-first SPA)

8. **Makefile = Orchestrator Executable**
   - Targets = Tasks con dependencias
   - `make deploy-protocol` = `orchestrator run DEPLOY-NODE`
   - `make test-full-cycle` = `orchestrator run VERIFY-E2E`
   - Config via env vars = Config via YAML/TOML

9. **Deployment Manifests = Node Config JSON**
   - `mainnet.contracts.json` = `node-config.mainnet.json`
   - Addresses, versions, config = Estado desplegado reproducible
   - Verification = `orchestrator verify-deployment`

10. **Stellar L1 = Nodo HSCSG Federado**
    - Stellar consensus = Vaso `infra:connect` + `governance:sync`
    - Soroban contracts = Módulos nodo (lógica pura)
    - Cross-chain future = Nodos federados HSCSG (familyId equivalent)

---

## 🔧 Módulos Extraíbles para HSCSG (4 — total acumulado 17)

### 1. `coopstable-protocol.ts` → `src/core/lib/coopstable-protocol.ts`
```typescript
// Lógica pura stablecoin cooperativa (sin Soroban)
export namespace CoopstableProtocol {
  // cUSD Manager — Vault 1:1
  export interface CUSDManager {
    issue(principal: ZNUAmount): CUSDShares;
    burn(shares: CUSDShares): ZNUAmount;
    totalSupply(): ZNUAmount;
    // Invariant: principal === burn(issue(principal))
  }
  
  // Lending Yield Controller — Router
  export interface YieldController {
    deposit(asset: BaseAsset, amount: ZNUAmount): CUSDShares;
    withdraw(shares: CUSDShares): BaseAsset;
    claimYield(): YieldAmount;
    // Routes to registered adapter per asset
  }
  
  // Yield Adapter Registry — Extensible Strategies
  export interface YieldAdapterRegistry {
    register<Input, Output, Yield>(adapter: BaseMaterialAdapter<Input, Output, Yield>): void;
    getAdapter(asset: BaseAsset): BaseMaterialAdapter<any, any, any>;
    isSupported(asset: BaseAsset): boolean;
  }
  
  // BaseMaterialAdapter Trait (generic)
  export interface BaseMaterialAdapter<Input, Output, Yield> {
    initialize(config: StrategyConfig): StrategyInstance;
    deposit(input: Input): StrategyInstance;
    harvest(instance: StrategyInstance): Yield;
    withdraw(instance: StrategyInstance): Input;
    claimEmissions(instance: StrategyInstance): Emissions;
    metadata: StrategyMetadata;
  }
  
  // Yield Distributor — Epoch-based (Alráico Loop)
  export interface YieldDistributor {
    distribute(): DistributionResult;           // Called per epoch
    addMember(identity: SovereignIdentity): void;
    removeMember(identity: SovereignIdentity): void;
    isAvailable(): boolean;
    nextEpoch(): Timestamp;
    // Configurable economics
    treasuryShareBps: number;    // 1000 = 10%
    memberShareBps: number;      // 9000 = 90%
    epochDuration: Duration;     // 24h default
  }
}
```

### 2. `yield-adapter-pattern.ts` → `src/core/lib/yield-adapter-pattern.ts`
```typescript
// Adapter pattern para estrategias Base Material (13 Pilares)
export namespace BaseMaterialAdapters {
  // Trait genérico (equivalente LendingAdapter)
  export interface BaseMaterialAdapter<Input, Output, Yield> {
    deploy(config: AdapterConfig): AdapterInstance;
    route(input: Input): AdapterInstance;
    harvest(instance: AdapterInstance): Yield;
    reclaim(instance: AdapterInstance): Input;
    claimRewards(instance: AdapterInstance): Rewards;
    spec: AdapterSpec;
  }
  
  // Adapter configs por Pilar
  export type PilarAdapterConfig = 
    | { pilar: 1; type: 'Land/Habitat'; adapter: LandTrustAdapter }
    | { pilar: 2; type: 'Energy'; adapter: SolarCommunityAdapter }
    | { pilar: 3; type: 'Food'; adapter: RegenerativeAgAdapter }
    | { pilar: 4; type: 'Tools'; adapter: ProductiveToolsAdapter }
    | { pilar: 5; type: 'Knowledge'; adapter: EducationHealthAdapter }
    | { pilar: 6; type: 'Health'; adapter: CommunityHealthAdapter }
    | { pilar: 7; type: 'Governance'; adapter: SovereignGovAdapter }
    | { pilar: 8; type: 'Community'; adapter: MutualCareAdapter }
    | { pilar: 9; type: 'Water'; adapter: WaterStewardshipAdapter }
    | { pilar: 10; type: 'Waste'; adapter: CircularEconomyAdapter }
    | { pilar: 11; type: 'Mobility'; adapter: SharedMobilityAdapter }
    | { pilar: 12; type: 'Comms'; adapter: MeshCommsAdapter }
    | { pilar: 13; type: 'Vision'; adapter: PurposeAlignmentAdapter };
  
  // Registry (equivalente YieldAdapterRegistry)
  export class PilarAdapterRegistry {
    private adapters = new Map<PilarNumber, BaseMaterialAdapter<any, any, any>>();
    
    register<In, Out, Yld>(pilar: PilarNumber, adapter: BaseMaterialAdapter<In, Out, Yld>): void;
    get(pilar: PilarNumber): BaseMaterialAdapter<any, any, any> | undefined;
    isActive(pilar: PilarNumber): boolean;
    activePilares(): PilarNumber[];
  }
}
```

### 3. `coopstable-deploy-automation.cjs` → `scripts/coopstable-deploy-automation.cjs`
```javascript
// Orchestrator tasks replicando Makefile automation (50+ targets → tasks)
const coopstableTasks = {
  // Build
  'COOPSTABLE-BUILD': {
    name: 'Build All Contracts (WASM)',
    cmd: 'cargo build --target wasm32v1-none --release',
    deps: ['rust-toolchain', 'wasm-target'],
    outputs: ['target/wasm32v1-none/release/*.wasm']
  },
  'COOPSTABLE-TEST': {
    name: 'Run All Tests',
    cmd: 'cargo test',
    deps: ['COOPSTABLE-BUILD']
  },
  'COOPSTABLE-FMT': {
    name: 'Format Code',
    cmd: 'cargo fmt --all',
    deps: []
  },
  
  // Deploy
  'COOPSTABLE-DEPLOY': {
    name: 'Deploy Protocol (Testnet/Mainnet)',
    params: { network: { type: 'string', enum: ['testnet', 'mainnet'] } },
    steps: [
      'COOPSTABLE-DEPLOY-CORE',      // cUSD Manager, Controller, Distributor, Registry
      'COOPSTABLE-DEPLOY-ADAPTERS',  // Blend Capital + future
      'COOPSTABLE-CONFIGURE',        // Auto-wire contracts
      'COOPSTABLE-VERIFY',           // Check deployment
      'COOPSTABLE-ADDRESSES',        // Output addresses JSON
      'COOPSTABLE-SEED-MEMBERS'      // Add initial members
    ]
  },
  'COOPSTABLE-DEPLOY-CORE': {
    name: 'Deploy Core Contracts',
    steps: ['cusd-manager', 'yield-controller', 'yield-distributor', 'adapter-registry']
  },
  
  // Operations
  'COOPSTABLE-CYCLE': {
    name: 'Operate Protocol Cycle (Epoch)',
    steps: [
      'COOPSTABLE-CLAIM-YIELD',      // Controller claims from adapters
      'COOPSTABLE-DISTRIBUTE',       // Distributor runs epoch
      'COOPSTABLE-CHECK-STATUS',     // Verify distribution
      'COOPSTABLE-NEXT-EPOCH'        // Schedule next
    ]
  },
  
  // Verification
  'COOPSTABLE-VERIFY': {
    name: 'Verify Deployment',
    checks: ['contract-addresses', 'config-wiring', 'member-list', 'yield-flow']
  }
};
```

### 4. `bindings-generator.ts` → `src/core/lib/bindings-generator.ts`
```typescript
// Pattern: Compiled artifact → TypeScript bindings (auto-generated)
// HSCSG equivalent: Brief Schema → TypeScript Types
export namespace BindingsGenerator {
  // Source: WASM contracts (Coopstable) / Brief Schema (HSCSG)
  export interface Source {
    type: 'wasm' | 'brief-schema' | 'openapi' | 'graphql';
    path: string;
    metadata: SourceMetadata;
  }
  
  // Target: TypeScript bindings
  export interface Target {
    outputDir: string;
    namespace: string;
    includeTests: boolean;
    includeDocs: boolean;
  }
  
  // Generator
  export interface Generator {
    generate(source: Source, target: Target): GenerationResult;
    // Contract-specific (Coopstable)
    generateCUSDManager(wasm: WASM): CUSDManagerBindings;
    generateYieldController(wasm: WASM): YieldControllerBindings;
    generateYieldDistributor(wasm: WASM): YieldDistributorBindings;
    generateAdapterRegistry(wasm: WASM): AdapterRegistryBindings;
    generateBlendCapitalAdapter(wasm: WASM): BlendCapitalAdapterBindings;
    // Brief-specific (HSCSG)
    generateBriefTypes(schema: BriefSchema): BriefTypeScriptTypes;
    generateBriefValidation(schema: BriefSchema): ValidationFunctions;
    generateBriefSerialization(schema: BriefSchema): SerializationFunctions;
  }
  
  // HSCSG Integration: brief-detector-recommender uses this
  export interface BriefSchemaPipeline {
    detectGaps(): GapReport;
    recommendBriefs(): BriefRecommendation[];
    generateTypes(): TypeScriptTypes;
    validateBrief(brief: Brief): ValidationResult;
  }
}
```

---

## 📋 Workstream `BREADCHAIN_INTEGRATION` — Tasks Adicionales (desde Coopstable)

| Task ID | Descripción | Dependencia | Estado |
|---------|-------------|-------------|--------|
| BC-031 | Extraer coopstable-protocol.ts (4 interfaces core) | BC-021 | 🟡 Pendiente |
| BC-032 | Implementar yield-adapter-pattern.ts (13 Pilares) | BC-022 | 🟡 Pendiente |
| BC-033 | Crear coopstable-deploy-automation.cjs (orchestrator) | BC-024 | 🟡 Pendiente |
| BC-034 | Implementar bindings-generator.ts (brief schema → TS) | BC-023 | 🟡 Pendiente |
| BC-035 | Mapear Blend Capital → Pilar 2/3 Strategies | BC-025 | 🟡 Pendiente |
| BC-036 | Alinear Epoch Distributor → Sistema Alráico Loops | BC-026 | 🟡 Pendiente |
| BC-037 | Integrar Member Management → Identidad Soberana | BC-028 | 🟡 Pendiente |
| BC-038 | Parametrizar Treasury/Member Split (10/90 → config) | BC-026 | 🟡 Pendiente |
| BC-039 | Replicar Makefile targets → Orchestrator Tasks | BC-033 | 🟡 Pendiente |
| BC-040 | Documentar isomorfismos Coopstable en BRIEF_EXHAUSTIVO | BC-030 | 🟡 Pendiente |

**Total workstream BREADCHAIN_INTEGRATION: 40 tasks** (10+10+10+10)

---

## 🎯 Decisiones de Diseño (ADR) — Coopstable Specific

| ADR | Decisión | Razón |
|-----|----------|-------|
| ADR-BC-031 | **NO asimilar Rust/Soroban/Stellar CLI** | HSCSG post-blockchain; extraer lógica pura TypeScript |
| ADR-BC-032 | **Adapter Pattern = Base Material Strategies** | Misma arquitectura (registry + trait), dominio distinto |
| ADR-BC-033 | **Epoch Distribution = Alráico Loop Cycles** | Misma temporalidad (periódico), distinta mecánica (resonancia) |
| ADR-BC-034 | **Treasury/Member Split = CaaS + Autómata Config** | Ratios configurables, no hardcoded |
| ADR-BC-035 | **Makefile → Orchestrator Tasks** | Misma automatización, distinta infra (local vs stellar) |
| ADR-BC-036 | **Bindings Generator → Brief Schema Generator** | Mismo pattern (artifact → TS types), distinto source |

---

## 📊 Métricas de Asimilación (Coopstable)

| Métrica | Valor |
|---------|-------|
| Archivos fuente analizados | ~673 líneas README completo |
| Isomorfismos detectados | 10 (total acumulado: 40) |
| Módulos extraíbles | 4 (total acumulado: 17) |
| Workstream tasks nuevos | 10 (total acumulado: 40) |
| Briefs generados | 2 (backup + integration) |
| Líneas código nuevo estimado | ~1,500 TS + ~400 MD |
| Tiempo estimado implementación | 3-4 semanas (1 dev) |

---

## 🔗 Enlaces Cruzados

- **Backup:** `docs/breadchain_coopstable-contracts_backup.md`
- **Integración:** `docs/breadchain_coopstable-contracts_integration.md` (este archivo)
- **BRIEFS_INDEX:** Entrada #32 (pendiente actualizar)
- **fuentes_indice.json:** Fuente #32 (pendiente actualizar)
- **Workstream:** `BREADCHAIN_INTEGRATION` (40 tasks totales)
- **Paralelo EVM:** `BreadchainCoop/crowdstake.fun` (fuente #30)
- **Skills relacionadas:** `hscsg-repo-assimilation`, `hscsg-document-architect`, `hscsg-sistema-alraico`, `brief-detector-recommender`, `design-md`

---

*Integración generada por HSCSG v15 OS — Metodología hscsg-repo-assimilation (Fase 2: Integración — Triple Perspectiva Usuario·LLM·HSCSG+CaaS)*