# BreadchainCoop — Commonware-restaking-contracts (Integración HSCSG v15 OS)

**Fecha:** 2026-09-10  
**Fuente:** `breadchain_commonware-restaking-contracts_backup.md`  
**Metodología:** hscsg-repo-assimilation (Fase 2: Integración — Triple Perspectiva)

---

## 👁️ Perspectiva 1: Usuario (AVS Operator / Developer)

### Qué ve el usuario
Un set de contratos Foundry para desplegar servicios AVS (Actively Validated Services) sobre EigenLayer/restaking. Incluye: wrapper seguro para ServiceManager (staticcall fallback), verificación BLS signatures, contador AVS-compatible, y scripts de deploy automatizados.

### Dolores resueltos
- **Seguridad**: Wrapper previene privilege escalation via staticcall fallback
- **BLS Verification**: Retriever para verificación threshold signatures
- **Minimal AVS**: Counter = ejemplo mínimo para empezar
- **Deploy reproducible**: Forge scripts + env vars
- **Commonware integration**: Usa librería commonware-restaking (Rust)

### Gaps desde vista usuario
- Solo 3 contratos — scope limitado
- 24 commits, 5 meses sin updates — maintenance bajo
- Solo 1 watcher — comunidad mínima
- Requiere commonware-restaking library (Rust) + EigenLayer infra
- No AGENTS.md/CLAUDE.md — no agent-friendly

---

## 🤖 Perspectiva 2: LLM / Agente (Claude Code, OpenCode, Hermes)

### Qué ve el agente
- **README técnico**: Architecture, usage, deploy, environment variables
- **Foundry project**: forge build/test/format/snapshot/anvil/deploy
- **Contracts**: 3 Solidity contracts bien tipados
- **Scripts**: Deploy scripts con env vars documentadas
- **Dependencies**: git submodules (eigenlayer-middleware, openzeppelin)
- **No agent instructions** — gap para Hermes

### Patrones explotables para HSCSG
| Patrón Commonware-restaking | Aplicación HSCSG |
|----------------------------|------------------|
| `AvsServiceManagerWrapper` (staticcall safety) | `SovereignWrapper` — límites de soberanía Capa 1 |
| `BLSSigCheckOperatorStateRetriever` | `BLSThreshold` — κ-governance threshold sigs (VIA-25) |
| `Counter` (AVS-compatible) | `AVSServicePattern` — Autómata Soberano minimal service |
| Forge deploy scripts | `OrchestratorDeployTasks` — automation reproducible |
| Commonware primitives (Rust) | `HSCSG Core Libs` — TypeScript equivalent |
| OpenZeppelin Upgradeable | `UpgradableModules` — proxy pattern para módulos HSCSG |

### Fortalezas para agentes
- Foundry = standard tooling, well-documented
- Solidity tipado = verificación estática
- Deploy scripts = automation patterns
- Submodules = dependency management

### Debilidades para agentes
- Solidity/EVM = no TypeScript nativo
- EigenLayer dependency = external infra
- Rust submodule = polyglot complexity
- No agent onboarding docs

---

## 🌐 Perspectiva 3: HSCSG v15 OS + CaaS (Sistema Operativo Nodo)

### Mapeo Directo a Módulos HSCSG

| Componente Commonware-restaking | Módulo HSCSG | Estado | Acción |
|--------------------------------|--------------|--------|--------|
| AVS ServiceManager Wrapper | **Soberanía Límites (Capa 1)** | ✅ Núcleo/Contenedor | Extraer wrapper pattern |
| BLS Signature Verification | **κ-Governance Threshold Sigs** | ✅ VIA-25 código | Integrar BLS |
| AVS-compatible Counter | **Autómata Soberano Service** | ✅ Existente | Patrones mínimos |
| Deploy Scripts (Forge) | **Orchestrator Deploy Tasks** | ✅ Orchestrator | Replicar patterns |
| Commonware Primitives | **HSCSG Core Libs** | ✅ Skills/libs | Mapear primitivas |
| Operator State Retriever | **Identidad Soberana State** | ✅ Capa 1 | Extender registry |
| EigenLayer Restaking | **CaaS + ZNU Restaking** | 🟡 Concepto | Diseñar modelo |
| OpenZeppelin Upgradeable | **Upgradable Modules** | 🟡 Concepto | Proxy pattern |
| Upstream Dependency | **Skills Dependency** | ✅ Skills | Documentar grafo |

### Isomorfismos Profundos (10 detectados — total acumulado 70)

1. **AVS = Autómata Soberano**
   - Actively Validated Service = Servicio que se auto-valida (E=V)
   - Operator = Nodo que opera el autómata
   - Stake = Contribución (AUT × CDS) no tokens especulativos
   - Slash = Violación Ley I (daño base material)

2. **ServiceManager Wrapper = Límites de Soberanía (Capa 1 Núcleo/Contenedor)**
   - Staticcall fallback = Read-only por defecto (Lucidez, Ley III)
   - Write requiere auth explícita = Soberanía responsable
   - Previene privilege escalation = No dañar base material (Ley I)

3. **BLS Threshold Signatures = κ-Governance (VIA-25)**
   - Threshold = κ-value (quorum configurado)
   - Partial sigs = Votos individuales (1p1v)
   - Aggregation = Tally automático
   - Verification = Lucidez (verificable por cualquiera)

4. **EigenLayer Restaking = CaaS + ZNU Restaking**
   - Restake ETH → Restake contribución (AUT)
   - Operator rewards → Yield distribuido (excedente regenerativo)
   - Slashing → Pérdida acceso CaaS (no pérdida financiera)
   - Delegation → Delegación soberana (Capa 1)

5. **AVS Counter = Métricas Nodo Mínimas**
   - Increment = Task completado
   - Read = Observabilidad (Metrics trait)
   - AVS-compatible = Cumple interfaz autómata
   - Deploy = Orchestrator task

6. **Operator State Retriever = Identidad Soberana Registry (Capa 1)**
   - Operator state = Identity record
   - Retriever = Query interface
   - BLS keys = Sovereign cryptographic keys
   - Registration = Registro único por ser humano

7. **Forge Deploy = Orchestrator Deploy**
   - Script = Task definition
   - Env vars = Config parameters
   - Broadcast = Execute
   - Verify = Evidence collector

8. **Commonware Primitives = HSCSG Core Libs**
   - Runtime → AlraicRuntime
   - Consensus → GovernanceConsensus
   - P2P → FederatedNodes
   - Storage → OfflinePersistence
   - Cryptography → SovereignCryptography

9. **Upgradeable Proxy = Módulos HSCSG Actualizables**
   - Proxy pattern = Module proxy
   - Admin = Sovereign governance (κ-quorum)
   - Implementation = Module logic
   - Upgrade = Governance proposal + execution

10. **Dependency Graph = Skills Graph**
    - commonware-restaking → hscsg-sistema-alraico
    - eigenlayer-middleware → hscsg-document-architect
    - openzeppelin → brief-detector-recommender
    - foundry → orchestrator-next-steps

---

## 🔧 Módulos Extraíbles para HSCSG (4 — total acumulado 29)

### 1. `sovereign-wrapper.ts` → `src/core/lib/sovereign-wrapper.ts`
```typescript
// Wrapper pattern seguro → Límites de Soberanía (Capa 1 Núcleo/Contenedor)
export namespace SovereignWrapper {
  // Generic wrapper con staticcall safety
  export interface SovereignWrapper<T> {
    // Read-only (staticcall equivalent) — always allowed
    read<Ret>(fn: (target: T) => Ret): Ret;
    
    // Write — requires explicit sovereign authorization
    write<Ret>(fn: (target: T) => Ret, auth: SovereignAuth): Result<Ret>;
    
    // Fallback: staticcall for safety (prevents privileged writes)
    staticCall<Ret>(fn: (target: T) => Ret): Ret;
    
    // Introspection
    getTarget(): T;
    getCapabilities(): Capability[];
  }
  
  // Sovereign Authorization (Capa 1)
  export interface SovereignAuth {
    identity: SovereignIdentity;        // Registro único por ser humano
    capability: Capability;             // Qué operación permite
    signature: Signature;               // Ed25519/BLS firmado por identidad
    timestamp: Timestamp;               // Nonce temporal
    nonce: Nonce;                       // Replay protection
  }
  
  // Capability system
  export type Capability = 
    | 'base-material:read' | 'base-material:write'
    | 'caas:access' | 'caas:contribute'
    | 'governance:propose' | 'governance:vote' | 'governance:execute'
    | 'identity:register' | 'identity:update'
    | 'yield:claim' | 'yield:distribute'
    | 'node:deploy' | 'node:upgrade'
    | 'vaso:*';                         // Vaso-specific capabilities
  
  // Service Manager Interface (equivalente EigenLayer ServiceManager)
  export interface ServiceManager {
    registerOperator(operator: OperatorConfig, auth: SovereignAuth): Result<OperatorId>;
    deregisterOperator(operatorId: OperatorId, auth: SovereignAuth): Result<void>;
    getOperatorState(operatorId: OperatorId): OperatorState;
    // All mutating methods require SovereignAuth
  }
  
  // Operator Configuration
  export interface OperatorConfig {
    identity: SovereignIdentity;
    capabilities: Capability[];
    stake: ZNUAmount;                    // CaaS stake (not speculative)
    metadata: OperatorMetadata;
  }
}
```

### 2. `bls-threshold.ts` → `src/core/lib/bls-threshold.ts`
```typescript
// BLS Threshold Signatures → κ-Governance (VIA-25)
export namespace BLSThreshold {
  // BLS Key Pair per Sovereign Identity
  export interface BLSKeyPair {
    privateKey: BLSPrivateKey;          // Derived from SovereignIdentity seed
    publicKey: BLSPublicKey;
    identity: SovereignIdentity;        // Back-reference
  }
  
  // Threshold Signature Scheme (BLS)
  export interface ThresholdScheme {
    // Generate partial signature (per validator)
    signPartial(message: Bytes, privateKey: BLSPrivateKey): PartialSignature;
    
    // Aggregate partial signatures (threshold met)
    aggregate(partials: PartialSignature[]): AggregatedSignature;
    
    // Verify aggregated signature
    verify(message: Bytes, aggSig: AggregatedSignature, aggPK: BLSPublicKey): boolean;
    
    // Verify threshold met (κ-quorum)
    verifyThreshold(partials: PartialSignature[], threshold: number): boolean;
    
    // Aggregate public keys
    aggregatePK(pks: BLSPublicKey[]): BLSPublicKey;
  }
  
  // κ-Governance Integration (VIA-25)
  export interface KappaGovernanceConfig {
    // Validator set (sovereign identities operating nodes)
    validators: SovereignIdentity[];
    // Threshold (κ-value): e.g., 2/3, or dynamic based on resonance
    threshold: KappaThreshold;
    // VRF for sortition (Commonware VRF pattern)
    vrfConfig: VRFConfig;
  }
  
  export type KappaThreshold = 
    | { type: 'fixed'; value: number }           // e.g., 67%
    | { type: 'dynamic'; resonance: ResonanceMetric } // κ from Alráico
    | { type: 'weighted'; weights: Map<SovereignIdentity, Weight> }; // 1p1v = weight 1
  
  // VRF Config (sortition for validator selection)
  export interface VRFConfig {
    evaluate(input: Bytes, sk: VRFPrivateKey): VRFOutput;
    verify(output: VRFOutput, pk: VRFPublicKey, input: Bytes): boolean;
  }
  
  // Quorum Certificate (result of threshold sig)
  export interface QuorumCertificate {
    message: Bytes;                      // Proposal hash
    aggregatedSig: AggregatedSignature;  // BLS aggregate
    participants: SovereignIdentity[];   // Who signed
    threshold: number;                   // κ met
    timestamp: Timestamp;
    view: number;                        // Governance cycle
  }
}
```

### 3. `avs-service-pattern.ts` → `src/core/lib/avs-service-pattern.ts`
```typescript
// AVS Service Pattern → Autómata Soberano Minimal Service
export namespace AVSServicePattern {
  // Minimal Service Interface (equivalent to Counter.sol AVS)
  export interface AVSService<State, Input, Output> {
    // Initialize service with config
    initialize(config: ServiceConfig): State;
    
    // Process task (requires auth for writes)
    process(state: State, input: Input, auth?: SovereignAuth): Result<Output>;
    
    // Read-only state access (always allowed)
    getState(state: State): ServiceStateView;
    
    // Health check
    healthCheck(state: State): HealthStatus;
    
    // Metrics (Commonware Metrics trait equivalent)
    metrics(state: State): ServiceMetrics;
  }
  
  // Service Configuration
  export interface ServiceConfig {
    // Identity
    identity: SovereignIdentity;         // Operator identity (Capa 1)
    serviceId: ServiceId;
    // Capabilities
    capabilities: Capability[];          // What this service provides
    dependencies: ServiceId[];           // Other services required
    // Economics (CaaS/ZNU)
    stakeRequired: ZNUAmount;            // Stake to operate (contribution)
    rewardRate: BasisPoints;             // Reward per successful task
    slashConditions: SlashCondition[];   // When stake is slashed (Ley I violation)
    // Governance
    upgradeAuthority: UpgradeAuthority;  // Who can upgrade (κ-governance)
  }
  
  // Slash Conditions (Ley I violations)
  export type SlashCondition = 
    | { type: 'base-material-damage'; severity: 'minor' | 'major' | 'critical' }
    | { type: 'lucidez-violation'; detail: string }
    | { type: 'unauthorized-write'; capability: Capability }
    | { type: 'consensus-fault'; view: number; evidence: Bytes }
    | { type: 'availability'; missedCycles: number };
  
  // Upgrade Authority (κ-governance)
  export type UpgradeAuthority = 
    | { type: 'kappa-governance'; proposalId: ProposalId }
    | { type: 'sovereign-multisig'; threshold: number; signers: SovereignIdentity[] }
    | { type: 'automaton-self'; condition: SelfUpgradeCondition };
  
  // Service State View (read-only)
  export interface ServiceStateView {
    serviceId: ServiceId;
    operator: SovereignIdentity;
    status: 'initializing' | 'active' | 'paused' | 'slashed' | 'terminated';
    stake: ZNUAmount;
    rewards: ZNUAmount;
    tasksProcessed: u64;
    lastActivity: Timestamp;
    health: HealthStatus;
  }
  
  // Operator Registry (equivalent EigenLayer Operator Registry)
  export interface OperatorRegistry {
    register(config: OperatorConfig, auth: SovereignAuth): Result<OperatorId>;
    deregister(operatorId: OperatorId, auth: SovereignAuth): Result<void>;
    getOperator(operatorId: OperatorId): OperatorInfo;
    listOperators(filter?: OperatorFilter): OperatorInfo[];
    getOperatorsByCapability(capability: Capability): OperatorInfo[];
  }
  
  export interface OperatorInfo {
    operatorId: OperatorId;
    identity: SovereignIdentity;
    services: ServiceId[];
    stake: ZNUAmount;
    status: OperatorStatus;
    reputation: ReputationScore;         // Based on task history
  }
}
```

### 4. `avs-deploy-automation.cjs` → `scripts/avs-deploy-automation.cjs`
```javascript
// Forge Deploy Scripts → Orchestrator Deploy Tasks
const avsDeployTasks = {
  // Build
  'AVS-BUILD': {
    name: 'Build All AVS Contracts',
    cmd: 'forge build',
    deps: ['foundry-toolchain'],
    outputs: ['out/**/*.json', 'out/**/*.wasm']
  },
  'AVS-TEST': {
    name: 'Test All Contracts',
    cmd: 'forge test -vv',
    deps: ['AVS-BUILD']
  },
  'AVS-FMT': {
    name: 'Format Contracts',
    cmd: 'forge fmt',
    deps: []
  },
  
  // Deploy BLS SigCheck Retriever
  'AVS-DEPLOY-BLSSIGCHECK': {
    name: 'Deploy BLS SigCheck OperatorStateRetriever',
    params: { 
      network: { type: 'string', enum: ['local', 'sepolia', 'gnosis', 'mainnet'] },
      rpcUrl: { type: 'string' },
      privateKey: { type: 'string', secret: true }
    },
    steps: [
      'AVS-BUILD',
      { cmd: 'forge script script/DeployBLSSigCheck.s.sol --rpc-url ${rpcUrl} --private-key ${privateKey} --broadcast', 
        outputs: ['BLSSigCheck_ADDRESS'] },
      'AVS-VERIFY-DEPLOYMENT'
    ]
  },
  
  // Deploy Counter AVS Service
  'AVS-DEPLOY-COUNTER': {
    name: 'Deploy Counter AVS Service',
    params: { 
      network: { type: 'string', enum: ['local', 'sepolia', 'gnosis', 'mainnet'] },
      rpcUrl: { type: 'string' },
      privateKey: { type: 'string', secret: true }
    },
    steps: [
      'AVS-BUILD',
      { cmd: 'forge script script/Counter.s.sol --rpc-url ${rpcUrl} --private-key ${privateKey} --broadcast',
        outputs: ['COUNTER_ADDRESS'] },
      'AVS-REGISTER-OPERATOR',
      'AVS-VERIFY-DEPLOYMENT'
    ]
  },
  
  // Deploy ServiceManager Wrapper
  'AVS-DEPLOY-WRAPPER': {
    name: 'Deploy ServiceManager Wrapper',
    params: { 
      network: { type: 'string', enum: ['local', 'sepolia', 'gnosis', 'mainnet'] },
      rpcUrl: { type: 'string' },
      privateKey: { type: 'string', secret: true },
      serviceManagerAddress: { type: 'address', required: true }
    },
    steps: [
      'AVS-BUILD',
      { cmd: 'forge script script/DeployWrapper.s.sol --rpc-url ${rpcUrl} --private-key ${privateKey} --broadcast',
        env: { SERVICE_MANAGER: '${serviceManagerAddress}' },
        outputs: ['WRAPPER_ADDRESS'] },
      'AVS-CONFIGURE-WRAPPER',
      'AVS-VERIFY-DEPLOYMENT'
    ]
  },
  
  // Register Operator
  'AVS-REGISTER-OPERATOR': {
    name: 'Register AVS Operator',
    params: { 
      operatorAddress: { type: 'address' },
      stakeAmount: { type: 'ZNUAmount' }
    },
    steps: [
      'call-register-operator',
      'verify-registration'
    ]
  },
  
  // Configure Wrapper (staticcall fallback)
  'AVS-CONFIGURE-WRAPPER': {
    name: 'Configure Wrapper Staticcall Fallback',
    steps: [
      'set-staticcall-fallback',
      'verify-fallback-works'
    ]
  },
  
  // Verify Deployment
  'AVS-VERIFY-DEPLOYMENT': {
    name: 'Verify Deployment',
    checks: [
      'contract-addresses-exist',
      'bytecode-matches',
      'storage-initialized',
      'operator-registered',
      'wrapper-fallback-configured'
    ]
  },
  
  // Full Deploy Pipeline
  'AVS-DEPLOY-FULL': {
    name: 'Full AVS Deployment Pipeline',
    params: { 
      network: { type: 'string', enum: ['local', 'sepolia', 'gnosis', 'mainnet'] },
      services: { type: 'string[]', default: ['blssigcheck', 'counter', 'wrapper'] }
    },
    steps: [
      'AVS-BUILD',
      'AVS-TEST',
      'AVS-DEPLOY-BLSSIGCHECK',
      'AVS-DEPLOY-COUNTER',
      'AVS-DEPLOY-WRAPPER',
      'AVS-VERIFY-DEPLOYMENT',
      'AVS-OUTPUT-ADDRESSES'
    ]
  }
};
```

---

## 📋 Workstream `BREADCHAIN_INTEGRATION` — Tasks Adicionales (desde Commonware-restaking)

| Task ID | Descripción | Dependencia | Estado |
|---------|-------------|-------------|--------|
| BC-061 | Extraer sovereign-wrapper.ts (staticcall safety) | BC-051 | 🟡 Pendiente |
| BC-062 | Implementar bls-threshold.ts (κ-governance) | BC-052 | 🟡 Pendiente |
| BC-063 | Implementar avs-service-pattern.ts (Autómata service) | BC-053 | 🟡 Pendiente |
| BC-064 | Crear avs-deploy-automation.cjs (orchestrator tasks) | BC-054 | 🟡 Pendiente |
| BC-065 | Mapear EigenLayer Restaking → CaaS/ZNU Restaking | BC-055 | 🟡 Pendiente |
| BC-066 | Integrar Operator Registry → Identidad Soberana | BC-056 | 🟡 Pendiente |
| BC-067 | Implementar Slash Conditions → Ley I Violations | BC-057 | 🟡 Pendiente |
| BC-068 | Diseñar Upgrade Authority → κ-Governance Proxy | BC-058 | 🟡 Pendiente |
| BC-069 | Mapear Commonware Primitives → HSCSG Core Libs | BC-059 | 🟡 Pendiente |
| BC-070 | Documentar isomorfismos Commonware-restaking en BRIEF_EXHAUSTIVO | BC-060 | 🟡 Pendiente |

**Total workstream BREADCHAIN_INTEGRATION: 70 tasks** (10×7 repos)

---

## 🎯 Decisiones de Diseño (ADR) — Commonware-restaking Specific

| ADR | Decisión | Razón |
|-----|----------|-------|
| ADR-BC-061 | **NO asimilar Solidity/Foundry/EigenLayer** | HSCSG post-EVM; extraer patterns, no runtime |
| ADR-BC-062 | **Staticcall Wrapper = Capa 1 Read-Only Default** | Lucidez (Ley III) = read por defecto, write requiere auth |
| ADR-BC-063 | **BLS Threshold = κ-Governance Quorum** | Mismo crypto, distinta gobernanza (soberana vs validadores) |
| ADR-BC-064 | **AVS Service = Autómata Soberano Minimal** | Mismo pattern (initialize/process/state), distinta economía |
| ADR-BC-065 | **Restaking = CaaS Contribution Staking** | Stake = contribución (AUT), reward = yield, slash = Ley I |
| ADR-BC-066 | **Forge Scripts = Orchestrator Tasks** | Misma automatización, distinta infra (EVM vs local) |

---

## 📊 Métricas de Asimilación (Commonware-restaking)

| Métrica | Valor |
|---------|-------|
| Archivos fuente analizados | ~80 líneas README + estructura |
| Isomorfismos detectados | 10 (total acumulado: 70) |
| Módulos extraíbles | 4 (total acumulado: 29) |
| Workstream tasks nuevos | 10 (total acumulado: 70) |
| Briefs generados | 2 (backup + integration) |
| Líneas código nuevo estimado | ~1,000 TS + ~300 MD |
| Tiempo estimado implementación | 2-3 semanas (1 dev) |

---

## 🔗 Enlaces Cruzados

- **Backup:** `docs/breadchain_commonware-restaking-contracts_backup.md`
- **Integración:** `docs/breadchain_commonware-restaking-contracts_integration.md` (este archivo)
- **BRIEFS_INDEX:** Entrada #35 (pendiente actualizar)
- **fuentes_indice.json:** Fuente #35 (pendiente actualizar)
- **Dependencia:** `BreadchainCoop/monorepo` (fuente #33)
- **Upstream:** `commonwarexyz/monorepo`
- **Workstream:** `BREADCHAIN_INTEGRATION` (70 tasks totales)
- **Skills relacionadas:** `hscsg-repo-assimilation`, `hscsg-document-architect`, `hscsg-sistema-alraico`, `brief-detector-recommender`

---

*Integración generada por HSCSG v15 OS — Metodología hscsg-repo-assimilation (Fase 2: Integración — Triple Perspectiva Usuario·LLM·HSCSG+CaaS)*