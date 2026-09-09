# BreadchainCoop — Monorepo (Commonware Fork) (Backup 2026-09-10)

**Fecha de asimilación:** 2026-09-10  
**Repositorio original:** https://github.com/BreadchainCoop/monorepo  
**Commit HEAD:** 3fc3150 (2025-03-01)  
**Estado:** Público, 327 commits, 37 ramas, 0 tags, 1 fork, 1 estrella

**Fork de:** `commonwarexyz/monorepo` (68 commits ahead, 1912 commits behind upstream)

---

## 📋 Resumen Ejecutivo

**BreadchainCoop/monorepo** es un **fork de Commonware** — una biblioteca de primitivas Rust para sistemas distribuidos adversariales (consensus, broadcast, p2p, cryptography, runtime, storage, stream). BreadchainCoop mantiene este fork para sus necesidades específicas (ej. VotingContract bindings, Sepolia integration), mientras upstream (commonwarexyz) avanza independientemente.

> **No es código de aplicación Bread** — es **infraestructura de bajo nivel** (Rust) que BreadchainCoop usa como dependencia. Los repos de aplicación (crowdstake.fun, ourcoop, coopstable) están en TypeScript/Next.js/Soroban/Solidity.

---

## 🏗️ Arquitectura Técnica

### Stack
| Capa | Tech |
|------|------|
| Lenguaje | Rust (2021 edition) |
| Build | Cargo workspace |
| Primitivas | 7 crates principales |
| Ejemplos | 4 aplicaciones de referencia |
| Licensing | Dual Apache-2.0 / MIT |
| CI | GitHub Actions (linter, tests, benchmarks) |

### Estructura del Monorepo (Cargo Workspace)
```
monorepo/
├── broadcast/          # Disseminate data over wide-area network
├── consensus/          # Order opaque messages in Byzantine environment
├── cryptography/       # Keys, signatures, deterministic verification
├── p2p/                # Authenticated peers over encrypted connections
├── runtime/            # Async tasks with configurable scheduler
├── storage/            # Persist/retrieve from abstract store
├── stream/             # Exchange messages over arbitrary transport
├── macros/             # Procedural macros for primitives
├── utils/              # Common functionality across primitives
├── examples/           # Reference applications
│   ├── bridge/         # Succinct consensus certificates between networks
│   ├── chat/           # Encrypted messages to group of friends
│   ├── log/            # Commit to secret log, agree on hash
│   └── vrf/            # Bias-resistant randomness with untrusted contributors
├── docs/               # Documentation (commonware.xyz)
├── macros/             # Procedural macros
├── scripts/            # Bash scripts (linted in CI)
├── .github/workflows/  # CI: test, bench, lint, release
├── Cargo.toml          # Workspace root
├── Cargo.lock
├── LICENSE-APACHE / LICENSE-MIT
├── CONTRIBUTING.md
├── SECURITY.md
├── codecov.yml
└── README.md
```

### Primitivas (7 Crates Principales)

| Crate | Propósito | Key Types |
|-------|-----------|-----------|
| **broadcast** | Disseminate data wide-area | `broadcast::linked` (impl #350) |
| **consensus** | Byzantine message ordering | Consensus engine, view changes |
| **cryptography** | Keys, sign, verify | Ed25519, BLS, threshold sigs |
| **p2p** | Authenticated encrypted peers | Noise protocol, identity, channels |
| **runtime** | Async task scheduler | `Spawner`, `Metrics` trait, `Context` |
| **storage** | Abstract persist/retrieve | `Metadata` key generic, sled/rocksdb backends |
| **stream** | Message exchange over transport | Framing, multiplexing, flow control |

### Ejemplos (Production-ready references)

| Ejemplo | Descripción |
|---------|-------------|
| **bridge** | Succinct consensus certs between two networks |
| **chat** | Encrypted group messaging |
| **log** | Secret log commitment + hash agreement |
| **vrf** | Bias-resistant randomness (untrusted contributors) |

---

## 🔄 BreadchainCoop Divergencia (68 commits ahead)

Commits específicos de BreadchainCoop sobre upstream:
- `feat: update VotingContract bindings with transition index and error handling` (Feb 2025)
- `Merge branch 'main' into sepolia` (Mar 2025) — Sepolia testnet integration
- `[broadcast] Implement broadcast::linked` (port from upstream #350)
- `[runtime] Add Metrics Trait + Refactor Spawner::spawn` (port from upstream #515)
- `[commonware-utils] move Array to utils` (port from upstream #513)
- `[docs] Fix runtime link` (port from upstream #506)

**Patrón**: BreadchainCoop cherry-picks upstream PRs relevantes + añade bindings VotingContract + Sepolia config.

---

## 🔗 Integración con Ecosistema Bread

| Repo | Relación |
|------|----------|
| `crowdstake.fun` | No usa Commonware directamente (EVM/Next.js) |
| `ourcoop` | No usa Commonware directamente |
| `coopstable-contracts` | No usa Commonware (Soroban/Rust diferente) |
| `commonware-restaking-contracts` | **Sí** — usa Commonware primitives (AVS/restaking) |
| `bread-gnosis-pay` | No usa Commonware |
| `bread-design-system` | No usa Commonware |

> **commonware-restaking-contracts** es el único repo Bread que depende directamente de este monorepo (o de upstream commonwarexyz).

---

## 📦 Archivos Clave para Asimilación HSCSG

| Archivo/Carpeta | Qué Aporta a HSCSG |
|-----------------|---------------------|
| `runtime/` | **Scheduler + Metrics** — patrón para orchestrator/Alráico loops |
| `consensus/` | **Byzantine ordering** — patrón para governance distribuida |
| `broadcast/` | **Dissemination** — patrón para Vaso `infra:connect` + `governance:sync` |
| `p2p/` | **Authenticated peers** — patrón para nodos federados HSCSG |
| `storage/` | **Abstract store** — patrón para persistencia offline-first (IndexedDB/localStorage) |
| `stream/` | **Message exchange** — patrón para comunicación inter-nodo |
| `cryptography/` | **Keys/signatures** — patrón para Identidad Soberana (Capa 1) |
| `examples/` | **Reference apps** — patrones de uso (bridge, chat, log, vrf) |
| `Makefile` / CI | **Automation patterns** — para orchestrator tasks |
| `CONTRIBUTING.md` / `SECURITY.md` | **Governance patterns** — para HSCSG contribution model |

---

## 🧠 Isomorfismos HSCSG ←→ Commonware

| Concepto Commonware | Concepto HSCSG v15 OS | Tipo Mapeo |
|---------------------|----------------------|------------|
| Runtime (scheduler + metrics) | **Sistema Alráico (6 loops + orchestrator)** | **Arquitectural** |
| Consensus (Byzantine ordering) | **Kappa Governance (VIA-25)** — ordenamiento votos | **Gobernanza** |
| Broadcast (dissemination) | **Vasos: infra:connect + governance:sync** | **Comunicación** |
| P2P (authenticated peers) | **Nodos Federados (familyId equivalent)** | **Red** |
| Storage (abstract store) | **Offline-first persistence (localStorage/IndexedDB)** | **Persistencia** |
| Stream (message exchange) | **Inter-nodo communication** | **Protocolo** |
| Cryptography (Ed25519/BLS) | **Identidad Soberana (Capa 1)** — firmas, verificación | **Identidad** |
| VRF (bias-resistant randomness) | **Sorteo gobernanza / κ-resonance seed** | **Aleatoriedad** |
| Bridge (consensus certs) | **Vaso infra:connect cross-chain** | **Puentes** |
| Cargo workspace | **HSCSG monorepo (skills + libs + apps)** | **Estructura** |

---

## 🎯 Qué Extraer para HSCSG v15 OS

### 1. **Runtime Patterns → `src/core/lib/alraic-runtime.ts`**
```typescript
// Patrones de runtime para Sistema Alráico
export namespace AlraicRuntime {
  // Spawner pattern (async task scheduling)
  export interface Spawner<Context> {
    spawn<Output>(task: Task<Context, Output>): JoinHandle<Output>;
    spawnBlocking<Output>(task: BlockingTask<Output>): JoinHandle<Output>;
  }
  
  // Metrics trait (observability)
  export interface Metrics {
    recordGauge(name: string, value: f64, labels: Labels): void;
    recordHistogram(name: string, value: f64, labels: Labels): void;
    recordCounter(name: string, delta: u64, labels: Labels): void;
  }
  
  // Context (cancellation, deadline, metadata)
  export interface Context {
    deadline(): Option<Instant>;
    isCancelled(): boolean;
    cancel(): void;
    metadata(): MetadataMap;
  }
  
  // Loop engine (γ-CARMIS)
  export interface LoopEngine<State> {
    step(state: State, ctx: Context): LoopResult<State>;
    shouldContinue(state: State): boolean;
    resonance(state: State): ResonanceMetric;
  }
}
```

### 2. **Consensus Patterns → `src/core/lib/governance-consensus.ts`**
```typescript
// Byzantine-resistant governance (Kappa + VIA-25)
export namespace GovernanceConsensus {
  // View-based consensus (simplified for governance)
  export interface GovernanceView {
    viewNumber: u64;
    proposals: Proposal[];
    votes: Map<ProposalId, VoteSet>;
    quorum: QuorumConfig;
  }
  
  // Vote set with threshold signatures
  export interface VoteSet {
    proposalId: ProposalId;
    votes: Map<Identity, Signature>;  // Ed25519/BLS
    weight: Map<Identity, Weight>;    // 1p1v = weight 1
    threshold: Threshold;             // κ-quorum
  }
  
  // Verification (cryptography crate)
  export interface Verifier {
    verifySignature(msg: Bytes, sig: Signature, pk: PublicKey): boolean;
    verifyThreshold(sigs: Signature[], pks: PublicKey[], threshold: u32): boolean;
    aggregateSignatures(sigs: Signature[]): AggregatedSignature;
  }
}
```

### 3. **P2P/Broadcast → `src/core/lib/federated-nodes.ts`**
```typescript
// Nodos federados HSCSG (pattern: p2p + broadcast)
export namespace FederatedNodes {
  // Node identity (cryptography)
  export interface NodeIdentity {
    publicKey: PublicKey;      // Ed25519
    sovereignId: SovereignIdentity; // Capa 1 Núcleo/Contenedor
    capabilities: Capability[]; // [Storage, Compute, Yield, Governance]
  }
  
  // Authenticated channel (p2p Noise pattern)
  export interface AuthenticatedChannel {
    connect(peer: NodeIdentity): Channel;
    send(channel: Channel, msg: Message): Result<()>;
    recv(channel: Channel): Result<Message>;
    close(channel: Channel): Result<()>;
  }
  
  // Broadcast dissemination (broadcast crate)
  export interface Broadcaster {
    broadcast(msg: GossipMessage): Result<()>;
    subscribe(topic: Topic): Subscription;
    // gossip-sub pattern for governance sync
  }
  
  // FamilyId equivalent (cross-chain / cross-node)
  export interface FederationId {
    id: Bytes32;                    // Deterministic from genesis config
    members: NodeIdentity[];        // Known members
    consensus: ConsensusConfig;     // Threshold, timeout
  }
}
```

### 4. **Storage Abstraction → `src/core/lib/offline-persistence.ts`**
```typescript
// Abstract storage (storage crate) → HSCSG offline-first
export namespace OfflinePersistence {
  // Key-value with metadata (storage::metadata)
  export interface MetadataStore<Key, Value> {
    get(key: Key): Option<Value>;
    set(key: Key, value: Value): Result<()>;
    delete(key: Key): Result<()>;
    // Metadata: version, timestamp, schema
    metadata(key: Key): Option<Metadata>;
  }
  
  // Backends
  export type Backend = 
    | { type: 'indexeddb'; db: IDBDatabase }
    | { type: 'localstorage'; prefix: string }
    | { type: 'memory'; map: Map<string, string> }
    | { type: 'sled'; path: Path }           // Native (Tauri/Capacitor)
    | { type: 'rocksdb'; path: Path };       // Native
  
  // Schema migration (utils)
  export interface Migrator<Key, Value> {
    migrate(from: Version, to: Version, store: MetadataStore<Key, Value>): Result<()>;
  }
}
```

---

## 📁 Archivos de Integración Generados

- `breadchain_monorepo_backup.md` — Este backup completo
- `breadchain_monorepo_integration.md` — Análisis triple-perspectiva (siguiente)

---

## 🏷️ Tags para BRIEFS_INDEX / fuentes_indice

```json
{
  "fuente_id": 33,
  "nombre": "BreadchainCoop/monorepo (Commonware fork)",
  "tipo": "distributed-systems-primitives",
  "url": "https://github.com/BreadchainCoop/monorepo",
  "commit": "3fc3150",
  "fecha_asimilacion": "2026-09-10",
  "briefs_generados": ["breadchain_monorepo_backup", "breadchain_monorepo_integration"],
  "workstreams_activados": ["BREADCHAIN_INTEGRATION"],
  "isomorfismos": 10,
  "modulos_extraibles": ["alraic-runtime", "governance-consensus", "federated-nodes", "offline-persistence"],
  "upstream": "commonwarexyz/monorepo (1912 commits ahead)",
  "dependiente": "commonware-restaking-contracts (fuente #34)"
}
```

---

*Backup generado automáticamente por HSCSG v15 OS — Metodología hscsg-repo-assimilation (Fase 1: Backup)*