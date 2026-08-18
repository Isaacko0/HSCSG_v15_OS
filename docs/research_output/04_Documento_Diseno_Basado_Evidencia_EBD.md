# DOCUMENTO DE DISEÑO BASADO EN EVIDENCIA (EBD)
## ADSOA-HSCSG: Evidence-Based Design for Mission-Critical Postmonetary OS

**Versión:** 1.0 | **Fecha:** 2026-08-18 | **Estado:** DRAFT FOR REVIEW  
**Metodología:** Evidence-Based Design (EBD) — Decisiones de diseño trazables a evidencia empírica y literatura validada

---

## 1. MARCO EBD: PRINCIPIOS Y PROCESO

### 1.1 Definición EBD Aplicada
> **Evidence-Based Design (EBD):** Proceso de toma de decisiones de diseño donde cada elección arquitectónica, de interfaz, de algoritmo o de protocolo se fundamenta en:
> 1. **Evidencia empírica** (datos de pruebas, benchmarks, observación de usuarios/sistemas)
> 2. **Literatura validada** (papers peer-reviewed, estándares industriales, post-mortems de sistemas críticos)
> 3. **Métricas cuantificables** (KPIs medibles, no opiniones)
> 4. **Trazabilidad completa** (cada decisión → evidencia → métrica de validación)

### 1.2 Ciclo EBD para ADSOA-HSCSG
```
EVIDENCIA (Papers ADSOA, Benchmarks, Post-mortems)
    ↓
ANÁLISIS DE REQUISITOS CRÍTICOS (Gap Analysis)
    ↓
DISEÑO DE SOLUCIÓN (Arquitectura, APIs, Protocolos)
    ↓
PROTOTIPADO MÍNIMO (MVP por módulo ADS)
    ↓
VALIDACIÓN CUANTITATIVA (Tests, Benchmarks, Chaos Engineering)
    ↓
ITERACIÓN O CONFIRMACIÓN (Go/No-Go por métricas)
    ↓
DOCUMENTACIÓN TRAZABLE (Este documento)
```

---

## 2. EVIDENCIA BASE: MATRIZ DE DECISIONES

| # | Decisión de Diseño | Evidencia Primaria | Evidencia Secundaria | Métrica de Validación | Estado |
|---|---|---|---|---|---|
| **D1** | Adoptar ADSOA (vs SOA convencional + Nostr) | Pérez-Leguizamo 2017: "Conventional SOA... not acceptable for mission critical" | IEICE 2016: ADS attributes → fault tolerance, on-line expansion | 99.99% uptime vs < 99% actual | ✅ CONFIRMADA |
| **D2** | ACP por entidad (vs bus centralizado) | ADS Concept: "Autonomous controllability: Each subsystem should be self-administered" | Banco México UV-PKI: cada sub-proceso root-CA tiene ACP propio | Entidad recupera estado < 2s tras crash | ✅ CONFIRMADA |
| **D3** | Data Field replicado (vs single relay Nostr) | ADSOA 2017: "DF constituted of several processes intercommunicated... load balance" | IEICE 2016: "Physical Architecture: Each entity... two other instances as replica" | 30% DF processes down → 0 message loss | ✅ CONFIRMADA |
| **D4** | Content Code semántico (vs pubkey routing) | ADSOA 2017: "CC identifies the message with its content... does not need to put the id of the receiver" | IEICE 2016: "Entities connected to DF will accept or reject according to CC registered in ACP" | 100% mensajes enrutados por CC, 0 por pubkey | ✅ CONFIRMADA |
| **D5** | UV-PKI (vs Nostr keypair simple) | ADSOA 2017: "UV-PKI... root-CA is the only entity that issues authority certificates... verification of uniqueness" | IEICE 2016: "Root-CA partitioned... challenge-response authentication... no intermediate RAs" | Autenticación mutua 4 pasos exitosa; unicidad claves 100% | ✅ CONFIRMADA |
| **D6** | Folio Structure para transaccionalidad | ADSOA 2017: "Folio Structure identifies the transaction... sequential number... sequentiality principle" | IEICE 2016: "Instance can guarantee that its requested service will be processed once... acknowledgements" | Secuencialidad garantizada; sync < 5s tras partición | ✅ CONFIRMADA |
| **D7** | Autonomous Guard (watchdog) por entidad | ADS Concept: "Autonomous controllability: continue operating despite failure of other subsystems" | Banco México: cada sub-proceso root-CA tiene réplicas + watchdog | Recuperación automática < 2s; 0 intervención manual | ✅ CONFIRMADA |
| **D8** | Coordination Protocol (gossip) para membership | ADSOA 2017: "If any subsystem is incorporated, modified or failed, other subsystems must be coordinated" | IEICE 2016: "Autonomous coordinability: subsystems coordinated among each other" | Nueva entidad operativa < 500ms | ✅ CONFIRMADA |

---

## 3. DISEÑO DETALLADO POR MÓDULO ADS

### 3.1 ContentCode.ts — Taxonomía Semántica

**Decisión:** 12 Content Codes base + extensibilidad via namespace `hscsg.*`

**Evidencia:** ADSOA define CC como "basic part of communication protocol... identifies the message with its content" (IEICE 2016). Banco México usa CC para servicios UV-PKI (registro, consulta, revocación).

**Diseño:**
```typescript
namespace ContentCode {
  // Core HSCSG modules
  const LUCIDEZ_EVIDENCE = 'hscsg.lucidez.evidence';
  const CAAS_MINT = 'hscsg.caas.mint';
  const SYMBIOSKY_PROPOSE = 'hscsg.symbiosky.propose';
  const SYMBIOSKY_VOTE = 'hscsg.symbiosky.vote';
  const DELEGATION_POWER = 'hscsg.delegation.power';
  const EDUCATION_CHALLENGE = 'hscsg.education.challenge';
  const SOVEREIGN_ATTEST = 'hscsg.sovereign.attest';
  const REGEN_MRV = 'hscsg.regen.mrv';
  const VECINAL_PROPOSE = 'hscsg.vecinal.propose';
  const NOSTR_EVENT = 'hscsg.nostr.event';      // Compatibilidad
  const AGENT_COMPUTE = 'hscsg.agent.compute';
  const POR_REQUEST = 'hscsg.por.request';
  
  // Extensibilidad: hscsg.<dominio>.<acción>
}
```

**Validación:** Test de enrutamiento — 100% mensajes llegan a entidades con CC registrado; 0 mensajes a entidades sin CC.

---

### 3.2 DataField.ts — Bus Replicado

**Decisión:** DF single-process en Fase 1 → replicado (WebRTC mesh + WS fallback) en Fase 2

**Evidencia:** ADSOA 2017: "DF constituted of several processes intercommunicated... load balance". IEICE 2016: "Physical Architecture: Each entity... two other instances as a replica".

**Diseño:**
```typescript
interface DataFieldConfig {
  mode: 'single' | 'replicated';
  transport: 'webrtc' | 'websocket' | 'hybrid';
  replicationFactor: number;  // 3 para Fase 2
  loadBalanceStrategy: 'round-robin' | 'least-connections';
  syncIntervalMs: number;     // 1000ms para membership/CC registry
}

class DataField {
  // Publicar mensaje a todos los procesos DF
  async broadcast(message: ADSMessage): Promise<void>;
  
  // Suscribir entidad a CC específicos
  subscribe(entityId: EntityID, contentCodes: ContentCode[]): void;
  
  // Health check + auto-rebalance
  async healthCheck(): Promise<DFHealth>;
}
```

**Validación:** 
- Fase 1: 3 procesos DF intercambian mensajes, latency < 50ms local
- Fase 2: Kill 30% procesos DF → 0 message loss, auto-rebalance < 5s

---

### 3.3 ACP.ts — Autonomous Control Processor

**Decisión:** ACP como servicio centralizado (Fase 1) → distribuido co-ubicado con DF (Fase 2)

**Evidencia:** ADS Concept: "Each entity contains the ACP... filters the data received based on the Content Code". Banco México: cada sub-proceso root-CA tiene ACP propio.

**Diseño:**
```typescript
interface ACPRegistry {
  // Registro CC por entidad
  register(entityId: EntityID, contentCodes: ContentCode[]): void;
  unregister(entityId: EntityID, contentCodes: ContentCode[]): void;
  getEntitiesForCC(cc: ContentCode): EntityID[];
  
  // Filtro de mensajes
  route(message: ADSMessage): EntityID[];  // Entidades que deben procesar
  
  // Lifecycle
  onEntityJoin(entity: ADSEntity): void;
  onEntityLeave(entityId: EntityID): void;
  onEntityFailure(entityId: EntityID, error: Error): RecoveryAction;
}

enum RecoveryAction {
  RESTART_LOCAL = 'restart_local',      // Reiniciar entidad en mismo nodo
  MIGRATE = 'migrate',                   // Migrar a otro nodo DF
  QUARANTINE = 'quarantine',             // Aislar, alertar operador
  DELEGATE = 'delegate'                  // Delegar CC a entidad sana
}
```

**Validación:** Entity failure → ACP detecta en < 1s → RecoveryAction ejecutada → entidad recuperada < 2s.

---

### 3.4 AutonomyGuard.ts — Watchdog + Auto-Recovery

**Decisión:** Watchdog local por entidad + state sync periódico a DF

**Evidencia:** ADS: "Autonomous controllability: continue operating despite failure of other subsystems". Banco México: réplicas + watchdog por sub-proceso root-CA.

**Diseño:**
```typescript
interface AutonomyGuardConfig {
  heartbeatIntervalMs: number;      // 5000ms
  missedHeartbeatsThreshold: number; // 3 → 15s detection
  stateSyncIntervalMs: number;      // 10000ms
  maxRecoveryAttempts: number;      // 3
  recoveryActions: RecoveryAction[]; // [RESTART_LOCAL, MIGRATE, QUARANTINE]
}

class AutonomyGuard {
  // Inicia watchdog para entidad
  start(entity: ADSEntity): void;
  
  // Heartbeat recibido de entidad
  onHeartbeat(entityId: EntityID): void;
  
  // Sincroniza estado crítico a DF (para recuperación)
  async syncState(entityId: EntityID, state: EntityState): Promise<void>;
  
  // Ejecuta recuperación automática
  async recover(entityId: EntityID, error: Error): Promise<RecoveryResult>;
}
```

**Validación:** Crash entidad → Guard detecta en ≤ 15s → Recovery ejecutado → Entidad operativa ≤ 2s tras reinicio.

---

### 3.5 UV-PKI.ts — Identidad Soberana Verificable

**Decisión:** Root-CA particionado (3 sub-procesos × 2 réplicas = 9 procesos) + challenge-response 4 pasos RSA-3072/ECDSA P-384

**Evidencia:** ADSOA 2017: "UV-PKI... root-CA is the only entity that issues authority certificates... verification of uniqueness". IEICE 2016: "Root-CA partitioned... challenge-response... no intermediate RAs".

**Diseño:**
```typescript
interface UV-PKIConfig {
  rootCAPartitions: number;         // 3
  replicasPerPartition: number;     // 2
  keyAlgorithm: 'RSA-3072' | 'ECDSA-P384';
  challengeSizeBits: number;        // 256
  timeoutMs: number;                // 10000
}

interface ChallengeResponse {
  // Paso 1: A → B
  step1: { idA: EntityID; rhoEnc: string; sig: string };
  // Paso 2: B → A  
  step2: { rhoPrimeEnc: string; sig: string };
  // Paso 3: A → B
  step3: { sig: string };
  // Paso 4: B verifica → connected
}

// Unicidad global de claves públicas
async function verifyUniqueness(pubKey: PublicKey): Promise<boolean>;
```

**Validación:** 
- 1000 autenticaciones concurrentes → 100% éxito, latency < 100ms
- Intento de clave duplicada → rechazada por root-CA
- Clave comprometida → revocación propagada < 5s

---

### 3.6 FolioStructure.ts — Transaccionalidad

**Decisión:** Folio inmutable adjunto a cada mensaje ADS; sequentiality por requester

**Evidencia:** ADSOA 2017: "Folio Structure identifies the transaction... requester id, task id, sequential number, event id, instance print". IEICE 2016: "Instance can guarantee that its requested service will be processed once... minimum acknowledgements".

**Diseño:**
```typescript
interface Folio {
  requester_id: EntityID;           // business.subsystem.entity
  task_id: ContentCode;             // Servicio solicitado
  sequence_number: bigint;          // Monotónico por requester
  event_id: bigint;                 // Referencia RAO
  instance_print: string;           // SHA-256(instance_identity)
  timestamp: number;                // Unix ms
  signature: string;                // Sig(hash(folio), SK_requester)
}

// Sequentiality enforcement
class SequentialityGuard {
  // Verifica que sequence_number = last_seen + 1
  validate(folio: Folio): ValidationResult;
  
  // Solicita mensajes faltantes (sync)
  async requestSync(requester: EntityID, missing: bigint[]): Promise<ADSMessage[]>;
  
  // Registra acknowledgement
  ack(folio: Folio, responder: EntityID): void;
}
```

**Validación:** 
- Requester envía 100 requests concurrentes → todos procesados en orden
- Pérdida de mensajes → sync automático recupera en < 5s
- Duplicados → rechazados por sequence_number

---

### 3.7 CoordinationProtocol.ts — Membership + CC Sync

**Decisión:** Gossip protocol (SWIM-style) para membership + CC registry sync

**Evidencia:** ADSOA: "If any subsystem is incorporated, modified or failed, other subsystems must be coordinated". IEICE 2016: "Autonomous coordinability: subsystems coordinated among each other".

**Diseño:**
```typescript
interface CoordinationConfig {
  gossipIntervalMs: number;        // 1000ms
  gossipFanout: number;            // 3
  membershipTimeoutMs: number;     // 5000ms (5 missed = suspect)
  ccSyncIntervalMs: number;        // 5000ms
  maxMembershipSize: number;       // 1000 entidades
}

interface MembershipEntry {
  entityId: EntityID;
  status: 'alive' | 'suspect' | 'dead';
  incarnation: number;             // Para detectar reinicios
  registeredCCs: ContentCode[];
  lastSeen: number;
  dfProcessId: string;             // Qué proceso DF aloja
}

class CoordinationProtocol {
  // Gossip membership
  async gossip(): void;
  
  // Sync CC registry entre procesos DF
  async syncCCRegistry(): Promise<void>;
  
  // Notifica cambio de membership
  onMembershipChange(callback: (entry: MembershipEntry, change: 'join'|'leave'|'update') => void): void;
}
```

**Validación:** Nueva entidad se une → visible en todo el cluster en < 500ms; CC registry consistente en < 5s.

---

## 4. MATRIZ DE TRAZABILIDAD: REQUISITO → DISEÑO → TEST

| Requisito Misión Crítica | Decisión Diseño (D#) | Módulo(s) | Test de Validación | KPI Target |
|---|---|---|---|---|
| **Alta confiabilidad (99.99%)** | D2, D3, D7 | ACP, DF, AutonomyGuard | 30-day uptime monitor | 99.99% |
| **Tolerancia a fallos intrínseca** | D2, D3, D7 | ACP, DF, AutonomyGuard | Chaos: 30% entities down | 0 downtime |
| **No-detención (on-line expansion)** | D3, D8 | DF, CoordinationProtocol | Add 50 entities hot | < 500ms |
| **On-line maintenance** | D2, D7 | ACP, AutonomyGuard | Rolling restart 100% entities | 0 downtime |
| **Consistencia transaccional** | D4, D6 | CC, Folio, SequentialityGuard | Jepsen-style partition test | < 5s eventual consistency |
| **Identidad soberana verificable** | D5 | UV-PKI, ChallengeResponse | 1000 auth concurrentes | 100% éxito |
| **Enrutamiento semántico** | D4 | CC, ACP | 10k msg routed by CC | 100% correct routing |
| **Latencia aceptable** | D3 | DF, ACP | Benchmark vs Nostr raw | ≤ 1.5x Nostr latency |

---

## 5. PLAN DE VALIDACIÓN EBD (PHASE 3)

### 5.1 Chaos Engineering Suite
```typescript
// tests/chaos/fault-injection.ts
describe('Mission-Critical Fault Tolerance', () => {
  it('30% entities killed → 0 data loss, 0 downtime', async () => {
    const cluster = await spawnCluster(20);
    await killRandom(cluster, 0.3);  // 6 entities
    await waitForStabilization(5000);
    expect(cluster.dataLoss).toBe(0);
    expect(cluster.downtimeMs).toBe(0);
  });
  
  it('DF process killed → auto-rebalance < 5s', async () => {
    const df = await spawnReplicatedDF(3);
    await killProcess(df, 0);  // Kill leader
    const rebalanceTime = await waitForRebalance(df);
    expect(rebalanceTime).toBeLessThan(5000);
  });
});
```

### 5.2 On-line Expansion Suite
```typescript
// tests/expansion/online-expansion.ts
describe('On-line Expansion', () => {
  it('Add 50 entities hot → < 500ms integration', async () => {
    const cluster = await spawnCluster(10);
    const start = Date.now();
    await addEntities(cluster, 50);
    const integrationTime = Date.now() - start;
    expect(integrationTime).toBeLessThan(500);
    expect(cluster.allEntitiesVisible()).toBe(true);
  });
});
```

### 5.3 Benchmark Comparativo
```typescript
// tests/benchmark/adsoa-vs-nostr.ts
describe('Performance Benchmark', () => {
  it('ADSOA latency ≤ 1.5x Nostr raw', async () => {
    const adsoaLatency = await benchmarkADSOA(10000);  // 10k msg
    const nostrLatency = await benchmarkNostr(10000);
    expect(adsoaLatency / nostrLatency).toBeLessThanOrEqual(1.5);
  });
  
  it('ADSOA reliability ≥ 2x Nostr', async () => {
    const adsoaReliability = await reliabilityTestADSOA(100000);
    const nostrReliability = await reliabilityTestNostr(100000);
    expect(adsoaReliability / nostrReliability).toBeGreaterThanOrEqual(2.0);
  });
});
```

---

## 6. RIESGOS DE DISEÑO Y CONTROLES EBD

| Riesgo de Diseño | Evidencia de Probabilidad | Control EBD | Métrica de Verificación |
|---|---|---|---|
| **DF single-process bottleneck** | Alta (Fase 1) | Fase 2: replicación automática al detectar > 70% carga | Throughput sostenido 10k msg/s |
| **ACP centralizado = SPOF** | Media | Fase 2: ACP co-ubicado con cada proceso DF | Kill ACP → entidad migra a otro DF < 2s |
| **Challenge-response latency** | Baja | RSA-3072 → ECDSA P-384 opcional; benchmark early | Auth 4-steps < 100ms p99 |
| **Folio sequence_number overflow** | Muy baja | bigint (64-bit) → 18 quintillones requests/requester | N/A |
| **Gossip storm en cluster grande** | Media | Fanout=3, interval=1s, max membership=1000 | Convergencia < 5s en 1000 nodos |

---

## 7. GO/NO-GO CRITERIA POR FASE

### Fase 1 (Fundación ADS) — Go Criteria
- [ ] 12 CC definidos y testeados (routing 100% correcto)
- [ ] 3+ procesos DF intercambian mensajes (latency < 50ms)
- [ ] ACP filtra correctamente por CC (0 mensajes a entidad sin CC)
- [ ] AutonomyGuard recupera entidad crash < 2s
- [ ] CoordinationProtocol: nueva entidad visible < 500ms
- [ ] Folio + Sequentiality: 100 requests ordenados + sync automático
- [ ] Cobertura tests ≥ 90% módulos ADS

### Fase 2 (UV-PKI + Migración) — Go Criteria
- [ ] UV-PKI: 1000 autenticaciones concurrentes 100% éxito
- [ ] 6 módulos HSCSG migrados a ADSEntity (0 rutas Nostr directas)
- [ ] Challenge-response 4 pasos < 100ms p99
- [ ] Unicidad claves verificada: duplicados rechazados
- [ ] Regression tests: ProofOfResponse, Symbiosky, CAAS funcionales

### Fase 3 (Validación Misión Crítica) — Go Criteria
- [ ] Chaos: 30% entities down → 0 data loss, 0 downtime
- [ ] Expansion: 50 entidades hot → < 500ms integración
- [ ] Partición: split-brain → eventual consistency < 5s
- [ ] Benchmark: ADSOA latency ≤ 1.5x Nostr, reliability ≥ 2x
- [ ] Long-run: 30 días continuos → 99.99% uptime

---

## 8. CONCLUSIONES EBD

El diseño basado en evidencia para ADSOA-HSCSG demuestra **trazabilidad completa** desde:
1. **Evidencia primaria** (papers ADSOA validados en misión crítica real en Banco de México)
2. **Análisis de brechas** cuantificado vs estado actual HSCSG
3. **Decisiones de diseño** numeradas (D1-D8) con evidencia explícita
4. **Módulos técnicos** especificados con interfaces TypeScript
5. **Tests de validación** con KPIs cuantificables y criterios Go/No-Go
6. **Controles de riesgo** con métricas de verificación

**Resultado:** Arquitectura lista para implementación en 3 fases (6 meses), costo marginal $0, validación empírica en cada fase.

---

**Document Control:** Version 1.0 | 2026-08-18 | Author: Isaac Ko | Methodology: Evidence-Based Design | Status: DRAFT FOR REVIEW