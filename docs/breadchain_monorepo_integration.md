# BreadchainCoop — Monorepo (Commonware Fork) (Integración HSCSG v15 OS)

**Fecha:** 2026-09-10  
**Fuente:** `breadchain_monorepo_backup.md`  
**Metodología:** hscsg-repo-assimilation (Fase 2: Integración — Triple Perspectiva)

---

## 👁️ Perspectiva 1: Usuario (Desarrollador Bread / Infra Engineer)

### Qué ve el usuario
Un fork de Commonware con 68 commits propios sobre 1912 commits de upstream. Sirve como dependencia Rust para `commonware-restaking-contracts` (AVS/restaking). No es código de aplicación user-facing — es infra de bajo nivel.

### Dolores resueltos
- **Primitivas probadas**: Consensus, broadcast, p2p, crypto, runtime, storage, stream — battle-tested en adversarial environments
- **Sepolia integration**: Config para testnet Ethereum (VotingContract bindings)
- **Cherry-pick upstream**: Mantiene paridad selectiva con commonwarexyz
- **Dual licensing**: Apache-2.0 / MIT — flexible para uso comercial

### Gaps desde vista usuario
- 1912 commits behind upstream — debt técnico significativo
- Solo 1 contributor activo en fork (BreadchainCoop)
- No AGENTS.md/CLAUDE.md — no agent-friendly
- Documentación en `docs/` apunta a commonware.xyz (upstream)
- Ejemplos (bridge, chat, log, vrf) son reference apps, no production Bread

---

## 🤖 Perspectiva 2: LLM / Agente (Claude Code, OpenCode, Hermes)

### Qué ve el agente
- **Cargo workspace** bien estructurado (7 crates + examples + macros + utils)
- **README exhaustivo**: Primitivas, ejemplos, licensing, contributing, security
- **CONTRIBUTING.md** + **SECURITY.md** — governance patterns
- **CI/GitHub Actions**: Test, bench, lint, release automation
- **Examples**: 4 reference apps con READMEs propios
- **No agent instructions** — gap para Hermes/Claude Code

### Patrones explotables para HSCSG
| Patrón Commonware | Aplicación HSCSG |
|-------------------|------------------|
| `runtime` (Spawner + Metrics + Context) | `AlraicRuntime` — orchestrator + loops γ-CARMIS |
| `consensus` (Byzantine ordering) | `GovernanceConsensus` — Kappa/VIA-25 vote ordering |
| `broadcast` (dissemination) | `FederatedNodes` — Vaso `infra:connect` + `governance:sync` |
| `p2p` (Noise protocol, authenticated peers) | `NodeIdentity` + `AuthenticatedChannel` — nodos federados |
| `storage` (MetadataStore, generic Key) | `OfflinePersistence` — IndexedDB/localStorage abstraction |
| `stream` (framing, multiplexing) | `InterNodeProtocol` — comunicación inter-nodo |
| `cryptography` (Ed25519, BLS, threshold) | `SovereignIdentity` — Capa 1 Núcleo/Contenedor |
| `vrf` (bias-resistant randomness) | `GovernanceSortition` — sorteo κ-governance |
| `bridge` (consensus certs) | `CrossNodeBridge` — Vaso `infra:connect` cross-chain |
| Cargo workspace | HSCSG monorepo structure (skills + libs + apps) |

### Fortalezas para agentes
- Rust tipado = contratos verificables, patterns claros
- Workspace modular = separation of concerns
- Examples = reference implementations
- Security policy = responsible disclosure pattern

### Debilidades para agentes
- Rust = no TypeScript nativo (extracción manual)
- 1912 commits behind = upstream drift risk
- No AGENTS.md = no agent onboarding
- Fork maintenance burden = BreadchainCoop overhead

---

## 🌐 Perspectiva 3: HSCSG v15 OS + CaaS (Sistema Operativo Nodo)

### Mapeo Directo a Módulos HSCSG

| Componente Commonware | Módulo HSCSG | Estado | Acción |
|----------------------|--------------|--------|--------|
| `runtime` (Spawner, Metrics, Context) | **Sistema Alráico + Orchestrator** | ✅ Existente | Extraer patterns |
| `consensus` (Byzantine ordering) | **Kappa Governance (VIA-25)** | ✅ Código en skill | Enriquecer con view-based |
| `broadcast` (dissemination) | **Vasos: infra:connect + governance:sync** | ✅ 6 vasos | Implementar gossip-sub |
| `p2p` (Noise, identity, channels) | **Nodos Federados** | 🟡 Parcial | Implementar NodeIdentity |
| `storage` (MetadataStore, sled/rocksdb) | **Offline Persistence** | ✅ localStorage/IndexedDB | Abstract backend |
| `stream` (framing, multiplexing) | **Inter-Node Protocol** | 🟡 Concepto | Definir wire format |
| `cryptography` (Ed25519, BLS) | **Identidad Soberana (Capa 1)** | ✅ Núcleo/Contenedor | Integrar threshold sigs |
| `vrf` (bias-resistant randomness) | **Sorteo Gobernanza / κ-seed** | 🟡 Concepto | Implementar VRF |
| `bridge` (consensus certs) | **Cross-Node Bridge** | 🟡 Concepto | Vaso infra:connect |
| Cargo workspace | **HSCSG Monorepo** | ✅ Skills + libs | Estructura paralela |

### Isomorfismos Profundos (10 detectados — total acumulado 50)

1. **Runtime = Sistema Alráico Engine**
   - `Spawner` + `Metrics` + `Context` = Orchestrator + Loop Engine + Observabilidad
   - `spawn`/`spawnBlocking` = Task scheduling (sync/async)
   - Cancellation/deadline = Loop control (γ-CARMIS resonance)

2. **Consensus = Kappa Governance View-Based**
   - View changes = Cycle transitions (Alráico loops)
   - Quorum = κ-threshold (VIA-25 triaxial verification)
   - Proposals + VoteSets = Ballots + Tally

3. **Broadcast = Vaso Gossip-Sub**
   - Dissemination = `governance:sync` (propagate votes/results)
   - `broadcast::linked` = Ordered delivery (causal consistency)
   - Topics = Governance channels (proposals, votes, results)

4. **P2P = Nodos Federados Autenticados**
   - Noise protocol = Encrypted authenticated channels
   - Identity = `SovereignIdentity` (Capa 1) + Node capabilities
   - Channels = `AuthenticatedChannel` per Vaso

5. **Storage = Offline-First Abstraction**
   - `MetadataStore<Key, Value>` = `localStorage/IndexedDB` con metadata
   - Generic Key = `NodeId` / `BriefId` / `ProjectId` typed
   - Backends (sled/rocksdb) = Native (Tauri) vs Web (IndexedDB)

6. **Stream = Inter-Node Wire Protocol**
   - Framing = Message envelope (type, payload, signature)
   - Multiplexing = Multiple Vasos over single connection
   - Flow control = Rate limiting per Vaso

7. **Cryptography = Identidad Soberana Primitivas**
   - Ed25519 = Firmas soberanas (Capa 1)
   - BLS = Threshold signatures (κ-quorum, VIA-25)
   - Deterministic verification = Lucidez (Ley III)

8. **VRF = Sorteo + κ-Seed**
   - Bias-resistant randomness = Sortition justa (gobernanza)
   - Untrusted contributors = Nodos no confiables
   - VRF output = κ-resonance seed (Alráico)

9. **Bridge = Cross-Node Consensus Certs**
   - Succinct certs = Light client verification
   - Two networks = Two HSCSG nodos federados
   - Vaso `infra:connect` = Bridge primitive

10. **Cargo Workspace = HSCSG Monorepo**
    - 7 crates = Skills + libs + apps modulares
    - Examples = Reference implementations (demo nodes)
    - Dual licensing = Open source + commercial friendly

---

## 🔧 Módulos Extraíbles para HSCSG (4 — total acumulado 21)

### 1. `alraic-runtime.ts` → `src/core/lib/alraic-runtime.ts`
```typescript
// Runtime patterns para Sistema Alráico (desde Commonware runtime)
export namespace AlraicRuntime {
  // Spawner — Task scheduling
  export interface Spawner<Ctx> {
    spawn<Out>(task: Task<Ctx, Out>): JoinHandle<Out>;
    spawnBlocking<Out>(task: BlockingTask<Out>): JoinHandle<Out>;
  }
  
  export interface Task<Ctx, Out> {
    run(ctx: Ctx): Promise<Out>;
    name: string;
    priority: Priority;
  }
  
  // Metrics — Observabilidad (Commonware Metrics trait)
  export interface Metrics {
    gauge(name: string, value: number, labels: Labels): void;
    histogram(name: string, value: number, labels: Labels): void;
    counter(name: string, delta: number, labels: Labels): void;
  }
  
  // Context — Cancellation, deadline, metadata
  export interface Context {
    deadline(): Option<Timestamp>;
    cancelled(): boolean;
    cancel(): void;
    metadata(): Map<string, string>;
  }
  
  // Loop Engine — γ-CARMIS (Commonware runtime loop pattern)
  export interface LoopEngine<State> {
    step(state: State, ctx: Context): LoopResult<State>;
    continue(state: State): boolean;
    resonance(state: State): ResonanceMetric;
  }
  
  export interface LoopResult<State> {
    nextState: State;
    events: LoopEvent[];
    metrics: MetricsSnapshot;
  }
}
```

### 2. `governance-consensus.ts` → `src/core/lib/governance-consensus.ts`
```typescript
// Byzantine-resistant governance (Commonware consensus → Kappa/VIA-25)
export namespace GovernanceConsensus {
  // View-based consensus para gobernanza
  export interface GovernanceView {
    view: number;                    // Cycle number
    proposals: Proposal[];           // Active proposals
    voteSets: Map<ProposalId, VoteSet>;
    quorum: QuorumConfig;            // κ-threshold
  }
  
  // Vote set con threshold signatures
  export interface VoteSet {
    proposalId: ProposalId;
    votes: Map<SovereignIdentity, Signature>;  // Ed25519
    weights: Map<SovereignIdentity, Weight>;   // 1p1v = 1
    threshold: ThresholdConfig;                // κ-quorum
    aggregated?: AggregatedSignature;          // BLS aggregate
  }
  
  // Verification (Commonware cryptography)
  export interface Verifier {
    verify(msg: Uint8Array, sig: Signature, pk: PublicKey): boolean;
    verifyThreshold(sigs: Signature[], pks: PublicKey[], t: number): boolean;
    aggregate(sigs: Signature[]): AggregatedSignature;
    // VRF verification
    verifyVRF(output: VRFOutput, proof: VRFProof, pk: VRFPublicKey): boolean;
  }
  
  // Quorum config (parametrizable)
  export interface QuorumConfig {
    type: 'threshold' | 'weighted' | 'kappa';
    threshold: number;           // e.g., 2/3, or κ-value
    minParticipants: number;
  }
}
```

### 3. `federated-nodes.ts` → `src/core/lib/federated-nodes.ts`
```typescript
// Nodos federados HSCSG (Commonware p2p + broadcast)
export namespace FederatedNodes {
  // Node Identity (Commonware cryptography + Capa 1)
  export interface NodeIdentity {
    // Cryptographic
    publicKey: PublicKey;           // Ed25519
    vrfPublicKey: VRFPublicKey;     // For sortition
    blsPublicKey: BLSPublicKey;     // For threshold sigs
    // Sovereign (Capa 1 Núcleo/Contenedor)
    sovereignId: SovereignIdentity; // Registro único por ser humano
    // Capabilities
    capabilities: NodeCapability[]; // [Storage, Compute, Yield, Governance, Comms]
    // Metadata
    version: ProtocolVersion;
    endpoint: Endpoint;             // Multiaddr (libp2p style)
  }
  
  // Authenticated Channel (Commonware p2p Noise pattern)
  export interface AuthenticatedChannel {
    connect(peer: NodeIdentity): Promise<Channel>;
    send(channel: Channel, msg: Envelope): Promise<Result<void>>;
    recv(channel: Channel): Promise<Result<Envelope>>;
    close(channel: Channel): Promise<void>;
  }
  
  // Broadcast / Gossip-Sub (Commonware broadcast)
  export interface Broadcaster {
    publish(topic: Topic, msg: GossipMessage): Promise<void>;
    subscribe(topic: Topic): Subscription<GossipMessage>;
    // Topics per Vaso
    topics: {
      'governance:sync': GovernanceMessage;
      'trust:bridge': TrustMessage;
      'infra:connect': InfraMessage;
      'intel:match': IntelMessage;
      'app:federate': AppMessage;
      'eco:sync': EcoMessage;
    };
  }
  
  // FederationId = familyId equivalent
  export interface FederationId {
    genesisHash: Hash;                    // Deterministic from config
    members: Map<NodeId, NodeIdentity>;   // Known members
    consensus: ConsensusConfig;           // Threshold, timeout
    vasos: VasoConfig[];                  // 6 vasos config
  }
}
```

### 4. `offline-persistence.ts` → `src/core/lib/offline-persistence.ts`
```typescript
// Abstract storage (Commonware storage) → HSCSG offline-first
export namespace OfflinePersistence {
  // MetadataStore (Commonware storage::metadata)
  export interface MetadataStore<Key, Value> {
    get(key: Key): Promise<Option<Value>>;
    set(key: Key, value: Value): Promise<Result<void>>;
    delete(key: Key): Promise<Result<void>>;
    metadata(key: Key): Promise<Option<StorageMetadata>>;
    // Iteration
    keys(prefix?: Key): AsyncIterable<Key>;
    entries(prefix?: Key): AsyncIterable<[Key, Value]>;
  }
  
  export interface StorageMetadata {
    version: SchemaVersion;
    timestamp: Timestamp;
    schema: SchemaHash;
    checksum: Hash;
  }
  
  // Backends (Commonware: sled/rocksdb → HSCSG: web/native)
  export type Backend = 
    | { type: 'indexeddb'; name: string; version: number }
    | { type: 'localstorage'; prefix: string }
    | { type: 'memory' }
    | { type: 'sled'; path: string }           // Tauri/Capacitor native
    | { type: 'rocksdb'; path: string };       // Tauri/Capacitor native
  
  // Factory
  export async function createStore<Key, Value>(
    backend: Backend,
    schema: Schema<Key, Value>
  ): Promise<MetadataStore<Key, Value>>;
  
  // Migration (Commonware utils)
  export interface Migrator<Key, Value> {
    migrate(from: Version, to: Version, store: MetadataStore<Key, Value>): Promise<Result<void>>;
  }
  
  // HSCSG Schemas
  export const Schemas = {
    Brief: schema<BriefId, Brief>(),
    Project: schema<ProjectId, Project>(),
    Node: schema<NodeId, NodeConfig>(),
    Identity: schema<SovereignIdentity, IdentityRecord>(),
    Yield: schema<YieldId, YieldRecord>(),
    Vote: schema<VoteId, VoteRecord>(),
  };
}
```

---

## 📋 Workstream `BREADCHAIN_INTEGRATION` — Tasks Adicionales (desde Monorepo)

| Task ID | Descripción | Dependencia | Estado |
|---------|-------------|-------------|--------|
| BC-041 | Extraer alraic-runtime.ts (Spawner, Metrics, Context, LoopEngine) | BC-031 | 🟡 Pendiente |
| BC-042 | Implementar governance-consensus.ts (view-based, threshold) | BC-032 | 🟡 Pendiente |
| BC-043 | Implementar federated-nodes.ts (Identity, Channel, Broadcaster) | BC-033 | 🟡 Pendiente |
| BC-044 | Implementar offline-persistence.ts (MetadataStore, backends) | BC-034 | 🟡 Pendiente |
| BC-045 | Mapear VRF → Sorteo Gobernanza + κ-seed | BC-035 | 🟡 Pendiente |
| BC-046 | Mapear Bridge → Cross-Node Bridge (Vaso infra:connect) | BC-036 | 🟡 Pendiente |
| BC-047 | Integrar Threshold Signatures (BLS) → κ-Quorum VIA-25 | BC-037 | 🟡 Pendiente |
| BC-048 | Definir Wire Protocol (Stream) → Inter-Node Envelope | BC-038 | 🟡 Pendiente |
| BC-049 | Replicar Cargo Workspace → HSCSG Monorepo Structure | BC-039 | 🟡 Pendiente |
| BC-050 | Documentar isomorfismos Commonware en BRIEF_EXHAUSTIVO | BC-040 | 🟡 Pendiente |

**Total workstream BREADCHAIN_INTEGRATION: 50 tasks** (10×5 repos)

---

## 🎯 Decisiones de Diseño (ADR) — Monorepo Specific

| ADR | Decisión | Razón |
|-----|----------|-------|
| ADR-BC-041 | **NO asimilar Rust/Cargo como runtime** | HSCSG TypeScript nativo; extraer patterns, no código |
| ADR-BC-042 | **Upstream drift (1912 commits) = Monitor, no merge** | BreadchainCoop fork = subset curado; upstream = reference |
| ADR-BC-043 | **Commonware → HSCSG = Primitive mapping, no port** | Mismos patrones (scheduler, consensus, p2p), distinta capa |
| ADR-BC-044 | **Storage abstraction = Backend-agnostic** | Web (IndexedDB) + Native (sled) = misma interface |
| ADR-BC-045 | **VRF = Sortition + κ-seed dual use** | Gobernanza justa + Alráico resonance seed |

---

## 📊 Métricas de Asimilación (Monorepo)

| Métrica | Valor |
|---------|-------|
| Archivos fuente analizados | ~192 líneas README + estructura |
| Isomorfismos detectados | 10 (total acumulado: 50) |
| Módulos extraíbles | 4 (total acumulado: 21) |
| Workstream tasks nuevos | 10 (total acumulado: 50) |
| Briefs generados | 2 (backup + integration) |
| Líneas código nuevo estimado | ~1,200 TS + ~300 MD |
| Tiempo estimado implementación | 2-3 semanas (1 dev) |

---

## 🔗 Enlaces Cruzados

- **Backup:** `docs/breadchain_monorepo_backup.md`
- **Integración:** `docs/breadchain_monorepo_integration.md` (este archivo)
- **BRIEFS_INDEX:** Entrada #33 (pendiente actualizar)
- **fuentes_indice.json:** Fuente #33 (pendiente actualizar)
- **Dependiente:** `commonware-restaking-contracts` (fuente #34, siguiente)
- **Upstream:** `commonwarexyz/monorepo`
- **Workstream:** `BREADCHAIN_INTEGRATION` (50 tasks totales)
- **Skills relacionadas:** `hscsg-repo-assimilation`, `hscsg-document-architect`, `hscsg-sistema-alraico`, `brief-detector-recommender`

---

*Integración generada por HSCSG v15 OS — Metodología hscsg-repo-assimilation (Fase 2: Integración — Triple Perspectiva Usuario·LLM·HSCSG+CaaS)*