# BreadchainCoop — Commonware-restaking-contracts (Backup 2026-09-10)

**Fecha de asimilación:** 2026-09-10  
**Repositorio original:** https://github.com/BreadchainCoop/commonware-restaking-contracts  
**Commit HEAD:** 0f8f549 (2026-04-10)  
**Estado:** Público, 24 commits, 5 ramas, 0 tags, 0 forks, 0 estrellas, 1 watcher

---

## 📋 Resumen Ejecutivo

**commonware-restaking-contracts** son **smart contracts para aplicaciones construidas con la librería "commonware-restaking"**. Es el único repo BreadchainCoop que depende directamente del fork `commonwarexyz/monorepo` (o upstream). Implementa contratos para AVS (Actively Validated Services) y restaking en Ethereum usando Foundry/Solidity.

---

## 🏗️ Arquitectura Técnica

### Stack
| Capa | Tech |
|------|------|
| Contratos | Solidity ^0.8.24 + Foundry (Forge, Cast, Anvil, Chisel) |
| Dependencias | commonware-restaking library (via git submodule) |
| OpenZeppelin | contracts-upgradeable v5.0.2 |
| Build/Test | Forge |
| Deploy | Forge scripts |

### Estructura
```
commonware-restaking-contracts/
├── src/                    # Contratos principales
│   ├── AvsServiceManagerWrapper.sol
│   ├── Counter.sol
│   └── BLSSigCheckOperatorStateRetriever.sol
├── script/                 # Deploy scripts
│   ├── DeployBLSSigCheck.s.sol
│   └── Counter.s.sol
├── test/                   # Tests
├── lib/                    # Dependencies (git submodules)
│   ├── eigenlayer-middleware/  # Commonware restaking
│   └── openzeppelin-contracts-upgradeable/
├── foundry.toml
├── foundry.lock
├── example.env
├── Cargo.lock              # Para commonware-restaking (Rust)
├── Cargo.toml
└── README.md
```

### Contratos Principales

| Contrato | Propósito |
|----------|-----------|
| **AvsServiceManagerWrapper** | Wrapper para EigenLayer ServiceManager — previene operaciones privilegiadas via staticcall fallback |
| **Counter** | Contrato contador simple (AVS-compatible) |
| **BLSSigCheckOperatorStateRetriever** | Retriever para verificación BLS signatures |

### Key Features (del README)
- **BLSSigCheck utility** — Verificación de firmas BLS
- **AvS ServiceManager Wrapper** — Seguridad: staticcall fallback previene writes privilegiados
- **Counter AVS-compatible** — Ejemplo mínimo de AVS
- **Deploy scripts** — Para BLSSigCheck y Counter

---

## 🔗 Integración con Ecosistema Bread

| Repo | Relación |
|------|----------|
| `monorepo` (BreadchainCoop fork) | **Dependencia directa** — usa commonware primitives |
| `commonwarexyz/monorepo` | Upstream de la librería commonware-restaking |
| `crowdstake.fun` | No usa directamente (EVM pero diferente stack) |
| `ourcoop` | No usa directamente |
| `coopstable-contracts` | No usa directamente (Soroban/Stellar) |
| `bread-gnosis-pay` | No usa directamente |

---

## 📦 Archivos Clave para Asimilación HSCSG

| Archivo/Carpeta | Qué Aporta a HSCSG |
|-----------------|---------------------|
| `src/AvsServiceManagerWrapper.sol` | **Wrapper pattern seguro** — staticcall fallback para prevención de privilege escalation |
| `src/BLSSigCheckOperatorStateRetriever.sol` | **BLS signature verification** — threshold cryptography |
| `src/Counter.sol` | **AVS-compatible pattern** — minimal service implementation |
| `script/DeployBLSSigCheck.s.sol` | **Deploy automation** — reproducible deployments |
| `lib/eigenlayer-middleware/` | **Commonware restaking library** — primitivas Rust para AVS |
| `foundry.toml` / `foundry.lock` | **Build config** — reproducible builds |

---

## 🧠 Isomorfismos HSCSG ←→ Commonware-restaking

| Concepto Commonware-restaking | Concepto HSCSG v15 OS | Tipo Mapeo |
|------------------------------|----------------------|------------|
| AVS (Actively Validated Service) | **Autómata Soberano** — servicio que se auto-valida | **Arquitectural** |
| ServiceManager Wrapper (staticcall safety) | **Límites de Soberanía** — Capa 1 Núcleo/Contenedor | **Seguridad** |
| BLS Signature Verification | **κ-Governance Threshold Signatures** (VIA-25) | **Criptografía** |
| EigenLayer Restaking | **CaaS + ZNU Restaking** — stakear contribución, no tokens | **Económico** |
| Operator State Retriever | **Identidad Soberana State** — Capa 1 registro | **Identidad** |
| AVS-compatible Counter | **Métricas Nodo** — contadores autónomos | **Observabilidad** |
| Deploy Scripts (Forge) | **Orchestrator Deploy Tasks** | **Operacional** |
| Commonware Primitives (Rust) | **HSCSG Core Libs** (TypeScript) | **Fundacional** |
| Upstream Dependency (monorepo) | **Skills Dependency** — hscsg-sistema-alraico, etc. | **Modularidad** |
| OpenZeppelin Upgradeable | **Upgradable Modules** — patrón proxy para módulos HSCSG | **Actualizabilidad** |

---

## 🎯 Qué Extraer para HSCSG v15 OS

### 1. **AVS Wrapper Pattern → `src/core/lib/sovereign-wrapper.ts`**
```typescript
// Wrapper pattern seguro (staticcall fallback) → Límites de soberanía
export namespace SovereignWrapper {
  // Wrapper que previene operaciones privilegiadas no autorizadas
  export interface SovereignWrapper<T> {
    // Read-only access (staticcall equivalent)
    read<Ret>(fn: (target: T) => Ret): Ret;
    
    // Write access — requires explicit authorization
    write<Ret>(fn: (target: T) => Ret, auth: SovereignAuth): Ret;
    
    // Fallback: staticcall for safety (prevents privileged writes)
    staticCall<Ret>(fn: (target: T) => Ret): Ret;
  }
  
  // Authorization (Capa 1 Núcleo/Contenedor)
  export interface SovereignAuth {
    identity: SovereignIdentity;    // Registro único por ser humano
    capability: Capability;         // Qué operación permite
    signature: Signature;           // Firmado por identidad soberana
    timestamp: Timestamp;
    nonce: Nonce;
  }
  
  // Service Manager Interface (equivalente EigenLayer)
  export interface ServiceManager {
    registerOperator(operator: Operator): Result<void>;
    deregisterOperator(operatorId: OperatorId): Result<void>;
    getOperatorState(operatorId: OperatorId): OperatorState;
    // All writes require SovereignAuth
  }
}
```

### 2. **BLS Signature Verification → `src/core/lib/bls-threshold.ts`**
```typescript
// BLS threshold signatures → κ-Governance (VIA-25)
export namespace BLSThreshold {
  // BLS Key Pair (per identity)
  export interface BLSKeyPair {
    privateKey: BLSPrivateKey;
    publicKey: BLSPublicKey;
    // Derived from SovereignIdentity (Capa 1)
  }
  
  // Threshold Signature Scheme
  export interface ThresholdScheme {
    // Generate partial signature
    signPartial(message: Bytes, privateKey: BLSPrivateKey): PartialSignature;
    
    // Aggregate partial signatures
    aggregate(partials: PartialSignature[]): AggregatedSignature;
    
    // Verify aggregated signature
    verify(message: Bytes, aggSig: AggregatedSignature, aggPK: BLSPublicKey): boolean;
    
    // Verify threshold met
    verifyThreshold(partials: PartialSignature[], threshold: number): boolean;
  }
  
  // κ-Governance Integration (VIA-25)
  export interface KappaThresholdConfig {
    threshold: number;           // κ-value (e.g., 2/3 of validators)
    validators: BLSPublicKey[];  // Validator set
    // Quorum = threshold signatures from validator set
  }
}
```

### 3. **AVS-Compatible Service → `src/core/lib/avs-service-pattern.ts`**
```typescript
// AVS Service Pattern → Autómata Soberano Service
export namespace AVSServicePattern {
  // Minimal AVS Service (equivalent to Counter.sol)
  export interface AVSService<State, Input, Output> {
    // Initialize service
    initialize(config: ServiceConfig): State;
    
    // Process input (task)
    process(state: State, input: Input, auth: SovereignAuth): Result<Output>;
    
    // Get state (read-only)
    getState(state: State): ServiceStateView;
    
    // Health check
    healthCheck(state: State): HealthStatus;
  }
  
  // Service Configuration
  export interface ServiceConfig {
    identity: SovereignIdentity;        // Operator identity
    capabilities: Capability[];         // What this service provides
    dependencies: ServiceId[];          // Other services required
    // Economics
    stakeRequired: ZNUAmount;           // Stake to operate (CaaS)
    rewardRate: BasisPoints;            // Reward per task
    slashConditions: SlashCondition[];  // When stake is slashed
  }
  
  // Operator Registration (equivalent to EigenLayer)
  export interface OperatorRegistry {
    register(operator: OperatorConfig, auth: SovereignAuth): Result<OperatorId>;
    deregister(operatorId: OperatorId, auth: SovereignAuth): Result<void>;
    getOperator(operatorId: OperatorId): OperatorInfo;
    listOperators(): OperatorInfo[];
  }
}
```

### 4. **Deploy Automation → `scripts/avs-deploy-automation.cjs`**
```javascript
// Forge deploy scripts → Orchestrator deploy tasks
const avsDeployTasks = {
  'AVS-DEPLOY-BLSSIGCHECK': {
    name: 'Deploy BLS SigCheck Retriever',
    params: { network: { enum: ['local', 'sepolia', 'mainnet', 'gnosis'] } },
    steps: [
      'build-contracts',
      'deploy-blssigcheck-retriever',
      'verify-deployment',
      'output-address'
    ]
  },
  'AVS-DEPLOY-COUNTER': {
    name: 'Deploy Counter AVS Service',
    params: { network: { enum: ['local', 'sepolia', 'mainnet', 'gnosis'] } },
    steps: [
      'build-contracts',
      'deploy-counter',
      'register-operator',
      'verify-deployment'
    ]
  },
  'AVS-DEPLOY-WRAPPER': {
    name: 'Deploy ServiceManager Wrapper',
    params: { 
      network: { enum: ['local', 'sepolia', 'mainnet', 'gnosis'] },
      serviceManagerAddress: { type: 'address' }
    },
    steps: [
      'build-contracts',
      'deploy-wrapper',
      'configure-staticcall-fallback',
      'verify-deployment'
    ]
  }
};
```

---

## 📁 Archivos de Integración Generados

- `breadchain_commonware-restaking-contracts_backup.md` — Este backup completo
- `breadchain_commonware-restaking-contracts_integration.md` — Análisis triple-perspectiva (siguiente)

---

## 🏷️ Tags para BRIEFS_INDEX / fuentes_indice

```json
{
  "fuente_id": 35,
  "nombre": "BreadchainCoop/commonware-restaking-contracts",
  "tipo": "avs-restaking-contracts",
  "url": "https://github.com/BreadchainCoop/commonware-restaking-contracts",
  "commit": "0f8f549",
  "fecha_asimilacion": "2026-09-10",
  "briefs_generados": ["breadchain_commonware-restaking-contracts_backup", "breadchain_commonware-restaking-contracts_integration"],
  "workstreams_activados": ["BREADCHAIN_INTEGRATION"],
  "isomorfismos": 10,
  "modulos_extraibles": ["sovereign-wrapper", "bls-threshold", "avs-service-pattern", "avs-deploy-automation"],
  "dependencia": "BreadchainCoop/monorepo (fuente #33) / commonwarexyz/monorepo"
}
```

---

*Backup generado automáticamente por HSCSG v15 OS — Metodología hscsg-repo-assimilation (Fase 1: Backup)*