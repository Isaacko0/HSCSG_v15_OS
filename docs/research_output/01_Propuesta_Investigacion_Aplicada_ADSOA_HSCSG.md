# PROPUESTA DE INVESTIGACIÓN APLICADA
## HSCSG v15 OS + ADSOA: Arquitectura Descentralizada Autónoma para Sistemas de Soberanía Operacional Postmonetaria

---

### 1. TÍTULO Y DATOS GENERALES

**Título:** *Integración del modelo ADSOA (Autonomous Decentralized Service Oriented Architecture) en HSCSG v15 OS para garantizar alta confiabilidad, tolerancia a fallos y operación no-detention en nodos de soberanía operacional postmonetaria*

**Investigador Principal:** Isaac Ko (Isaacko0)  
**Institución:** HSCSG v15 OS / Cosateca OS  
**Fecha:** 2026-08-18  
**Duración estimada:** 6 meses (Fase 1: 2 meses, Fase 2: 2 meses, Fase 3: 2 meses)  
**Presupuesto estimado:** Autofinanciado (recursos computacionales propios, sin dependencia externa)

---

### 2. PLANTEAMIENTO DEL PROBLEMA

#### 2.1 Contexto
HSCSG v15 OS (Cosateca OS) es un **nodo offline-first de soberanía operacional postmonetaria** que implementa:
- Crédito por convicción (Credibilidad Soberana / ZNU / CaaS)
- Voto por mérito (Symbiosky commit-reveal)
- Evidencia verificable (Integral / Lucidez / RAO append-only)
- Delegación líquida (Delegación de poder revocable)
- Jardín cerrado / privado por diseño (sin servidores centrales)

**Gap identificado:** La arquitectura actual (React + Zustand + Vite, P2P via Nostr/Buzz) **no garantiza** los requisitos de **misión crítica** definidos por ADSOA:
- Alta confiabilidad (high reliability)
- Operación no-detención (non-stop operation)
- Alta flexibilidad (on-line expansion/maintenance)
- Tolerancia a fallos intrínseca (failure as normal situation)
- Consistencia de datos bajo partición de red

#### 2.2 Problema técnico central
> *"Conventional SOA technologies offer mechanisms for disaster recovery that offer acceptable time response for certain type of systems. However, when a service presents high demand, the solution requires to raise computing resources which demand stop system operation. In this sense, this type of solutions is not acceptable for mission critical systems which require high reliability, non-stop operation, high flexibility, high performance, etc."*  
> — Pérez-Leguizamo & Godínez-Borja, IEEE 2017 / IEICE 2016

HSCSG v15 OS hereda las limitaciones de SOA convencional al usar Nostr como bus de mensajería sin la capa ADS (Autonomous Decentralized System) que proporciona:
- **ACP (Autonomous Control Processor)** por entidad
- **Data Field (DF)** como medio de comunicación resiliente
- **Content Code (CC)** como protocolo de enrutamiento semántico
- **Autonomous controllability** + **Autonomous coordinability**

---

### 3. OBJETIVOS

#### 3.1 Objetivo General
Diseñar, implementar y validar la **capa ADSOA** como infraestructura base de HSCSG v15 OS, sustituyendo la mensajería Nostr cruda por un **bus ADS nativo** que garantice propiedades de misión crítica.

#### 3.2 Objetivos Específicos
| # | Objetivo | Métrica de Éxito |
|---|----------|------------------|
| OE1 | Implementar **ACP + DF + CC** como módulos TypeScript en `src/core/state/ads/` | Build 0 errores, 100% tipado |
| OE2 | Migrar `NostrRelay` + `AgentMesh` + `ProofOfResponse` a entidades ADS | 100% de mensajes vía DF/CC |
| OE3 | Implementar **UV-PKI** (Unique Verifying PKI) para identidad soberana | Autenticación mutua RSA + challenge-response |
| OE4 | Validar **tolerancia a fallos**: matar 30% entidades → sistema continúa | 0 downtime, 0 pérdida de datos |
| OE5 | Validar **on-line expansion**: añadir entidad en caliente → 0 reinicio | < 500ms integración |
| OE6 | Documentar arquitectura en **ADSOA_HSCSG.md** + diagramas Mermaid | Documento completo v1.0 |

---

### 4. MARCO TEÓRICO Y ESTADO DEL ARTE

#### 4.1 Fundamentación ADSOA (Pérez-Leguizamo et al., 2016/2017)
| Componente ADS | Función | Mapeo HSCSG v15 |
|---|---|---|
| **Entity** | Parte independiente con ACP + funcionalidad | Módulo HSCSG (Lucidez, CAAS, Symbiosky, etc.) |
| **ACP** | Filtra mensajes por Content Code | `ads/ACP.ts` — router semántico |
| **Data Field (DF)** | Medio de mensajería resiliente, replicado | `ads/DataField.ts` — bus P2P replicado |
| **Content Code (CC)** | Identifica servicio/contenido (no destinatario) | `ads/ContentCode.ts` — enrutamiento semántico |
| **Autonomous Controllability** | Auto-administración ante fallos | `ads/AutonomyGuard.ts` — watchdog local |
| **Autonomous Coordinability** | Coordinación ante cambios | `ads/CoordinationProtocol.ts` — consenso ligero |

#### 4.2 UV-PKI (Unique Verifying PKI)
- **Root-CA** particionado en sub-procesos con réplicas
- **Unicidad de claves públicas** verificada por root-CA
- **Autenticación mutua** challenge-response (RSA, 4 pasos)
- **Sin RA intermedios** — root-CA directo a usuarios

#### 4.3 Sinergia con HSCSG v15 OS
| HSCSG Concepto | Equivalente ADSOA | Ganancia |
|---|---|---|
| **NostrRelay** (transporte) | Entity + DF + CC | Enrutamiento semántico, no por pubkey |
| **AgentMesh** (cómputo) | Entities con ACP | Autonomous controllability nativa |
| **ProofOfResponse** (verificación) | Content Code + DF ack | Secuencialidad + sincronización transaccional |
| **Lucidez / RAO** (evidencia) | Content Code + Folio Structure | Trazabilidad transaccional completa |
| **Soberanía / ZNU** (crédito) | UV-PKI identity | Identidad soberana verificable |

---

### 5. METODOLOGÍA

#### 5.1 Enfoque: Investigación-Acción (Action Research)
Ciclos iterativos: **Diagnóstico → Planificación → Acción → Evaluación → Reflexión**

#### 5.2 Fases y Entregables

| Fase | Duración | Actividades | Entregable |
|---|---|---|---|
| **Fase 1: Fundación ADS** (Meses 1-2) | 8 semanas | 1. Implementar `ACP.ts`, `DataField.ts`, `ContentCode.ts`<br>2. Definir esquemas CC para módulos HSCSG<br>3. Implementar `AutonomyGuard.ts` (watchdog) | `src/core/state/ads/` + tests unitarios |
| **Fase 2: Integración UV-PKI** (Meses 3-4) | 8 semanas | 1. Implementar `UV-PKI.ts` (root-CA particionado, challenge-response)<br>2. Migrar `NostrRelay` → `ADSEntity`<br>3. Migrar `AgentMesh` → `ADSEntity`<br>4. Implementar `CoordinationProtocol.ts` | Identidad soberana + bus ADS operativo |
| **Fase 3: Validación Misión Crítica** (Meses 5-6) | 8 semanas | 1. Test suite: fault injection (30% entities down)<br>2. Test suite: on-line expansion (add/remove entities)<br>3. Test suite: data consistency bajo partición<br>4. Benchmark: latencia, throughput vs Nostr crudo | Informe de validación + benchmark comparativo |

#### 5.3 Herramientas y Tecnologías
- **Lenguaje:** TypeScript (estricto), Rust (opcional para ACP crítico)
- **Runtime:** Node.js 24 / Vite / Zustand (existente)
- **Criptografía:** WebCrypto API (RSA-OAEP, ECDSA P-256)
- **Testing:** Vitest (unitario), custom fault-injection framework
- **Métricas:** Prometheus + Grafana (local), benchmark scripts

---

### 6. PLAN DE TRABAJO DETALLADO

#### 6.1 Fase 1: Fundación ADS (Semanas 1-8)

| Semana | Tarea | Responsable | Criterio de Aceptación |
|---|---|---|---|
| 1-2 | `ContentCode.ts`: taxonomía CC para 12 módulos HSCSG | PI | 12 CC definidos, tests de enrutamiento |
| 2-3 | `DataField.ts`: bus replicado, WebRTC/WebSocket fallback | PI | 3+ procesos DF intercambiando mensajes |
| 3-4 | `ACP.ts`: filtro por CC, registro dinámico | PI | Entidad recibe solo sus CC registrados |
| 4-5 | `AutonomyGuard.ts`: heartbeat, auto-restart, state sync | PI | Entidad recupera estado tras crash < 2s |
| 5-6 | `CoordinationProtocol.ts`: gossip ligero para membership | PI | Nueva entidad visible en < 500ms |
| 6-7 | Integración `ProofOfResponse` → Content Code + Folio | PI | Request/Response vía DF con ack secuencial |
| 7-8 | Tests unitarios + integración Fase 1 | PI | 100% cobertura módulos ADS |

#### 6.2 Fase 2: UV-PKI + Migración (Semanas 9-16)

| Semana | Tarea | Responsable | Criterio de Aceptación |
|---|---|---|---|
| 9-10 | `UV-PKI.ts`: root-CA particionado, RSA keygen, challenge-response | PI | Autenticación mutua 4 pasos funcional |
| 11-11 | `ADSEntity.ts`: clase base para entidades HSCSG | PI | `NostrRelay`, `AgentMesh` heredan de `ADSEntity` |
| 12-13 | Migración `NostrRelay` → `ADSEntity` + `ContentCode.NOSTR` | PI | 100% eventos Nostr vía DF |
| 13-14 | Migración `AgentMesh` → `ADSEntity` + `ContentCode.COMPUTE` | PI | 100% compute requests vía DF |
| 14-15 | `CoordinationProtocol`: membership + CC registry sync | PI | Entidad nueva operativa en < 500ms |
| 15-16 | Tests de integración Fase 2 + migración completa | PI | 0 rutas Nostr directas restantes |

#### 6.3 Fase 3: Validación Misión Crítica (Semanas 17-24)

| Semana | Tarea | Responsable | Criterio de Aceptación |
|---|---|---|---|
| 17-18 | Fault injection framework: kill/restart/partition entities | PI | 30% entities down → 0 data loss |
| 19-20 | On-line expansion test suite: add/remove 50 entities | PI | < 500ms integración, 0 restart |
| 21-22 | Data consistency bajo partición de red (split-brain) | PI | Eventual consistency verificada |
| 22-23 | Benchmark comparativo: ADSOA vs Nostr crudo (latencia, throughput) | PI | ADSOA ≤ 1.5x latencia, ≥ 2x reliability |
| 23-24 | Documentación final `ADSOA_HSCSG.md` + diagramas Mermaid | PI | Documento v1.0 completo |

---

### 7. RIESGOS Y MITIGACIÓN

| Riesgo | Probabilidad | Impacto | Mitigación |
|---|---|---|---|
| Complejidad DF replicado > esperado | Alta | Alto | Empezar con DF simple (single process), escalar a replicado |
| WebCrypto API inconsistente entre navegadores | Media | Medio | Polyfill + fallback a librería `noble-crypto` |
| Migración `AgentMesh` rompe `ProofOfResponse` | Media | Alto | Tests de regresión por cada migración, feature flags |
| Performance DF < Nostr crudo | Baja | Medio | Benchmark temprano (semana 4), optimizar serialización |
| Falta de expertise ADS en equipo | Media | Medio | Estudiar papers ADSOA + código referencia (Banco México) |

---

### 8. EVALUACIÓN Y CRITERIOS DE ÉXITO

| KPI | Target | Método de Medición |
|---|---|---|
| **Disponibilidad** | 99.99% (four nines) | Uptime monitor 30 días continuo |
| **Tolerancia a fallos** | 30% entities down → 0 downtime | Fault injection suite |
| **On-line expansion** | < 500ms entidad nueva | Expansion test suite |
| **Consistencia datos** | Eventual consistency < 5s | Partición de red controlada |
| **Latencia ADSOA vs Nostr** | ≤ 1.5x | Benchmark 10k msg/sec |
| **Throughput** | ≥ 10k msg/sec | Load test 60 min |
| **Cobertura tests** | ≥ 90% módulos ADS | Vitest coverage report |

---

### 9. PRESUPUESTO Y RECURSOS

| Recurso | Cantidad | Costo | Nota |
|---|---|---|---|
| **Computación local** | 1 workstation (Ryzen 9, 64GB RAM, 2TB NVMe) | $0 (existente) | Nodos DF locales |
| **Software** | TypeScript, Node, Vitest, WebCrypto | $0 (open source) | Sin licencias |
| **Tiempo investigador** | 6 meses × 20h/sem = 480h | $0 (autofinanciado) | Dedicación parcial |
| **Documentación** | Mermaid, Markdown, Git | $0 | En repositorio |
| **Total** | — | **$0** | **Costo marginal cero** |

---

### 10. IMPACTO ESPERADO

#### 10.1 Impacto Técnico
- **HSCSG v15 OS** se convierte en **primer OS postmonetario con arquitectura ADSOA nativa**
- **Misión crítica real**: tolerancia a fallos, no-detención, on-line expansion
- **Identidad soberana verificable**: UV-PKI integrado, sin depender de CA externas
- **Escalabilidad probada**: on-line expansion hasta 1000+ entidades

#### 10.2 Impacto Científico
- **Publicación**: "ADSOA for Postmonetary Sovereignty OS" (target: IEEE ISADS / IEICE Transactions)
- **Código abierto**: `src/core/state/ads/` + docs → referencia para comunidad ADS/SOA
- **Metodología**: Validación empírica de propiedades ADS en contexto postmonetario

#### 10.3 Impacto Social/Económico
- **Soberanía operacional real**: comunidades pueden operar infraestructura crítica sin servidores centrales
- **Resiliencia sistémica**: modelo replicable para redes locales, cooperativas, municipios
- **Privacidad por diseño**: sin metadatos centralizados, enrutamiento semántico

---

### 11. CRONOGRAMA RESUMIDO

```
Mes 1-2: ████████████████████████████  Fase 1: Fundación ADS
Mes 3-4: ████████████████████████████  Fase 2: UV-PKI + Migración
Mes 5-6: ████████████████████████████  Fase 3: Validación Misión Crítica
         │    │    │    │    │    │
        S1   S2   S3   S4   S5   S6   (Semanas)
```

---

### 12. REFERENCIAS

1. **Pérez-Leguizamo, C. & Godínez-Borja, J.S.G.** (2017). *Autonomous Decentralized Service Oriented Architecture: Concept, Technologies and Application*. IEEE 13th International Symposium on Autonomous Decentralized Systems (ISADS), pp. 47-54.

2. **Pérez-Leguizamo, C., Hernández-Torres, P.J., Godínez-Borja, J.S.G. & Tapia-Tec, V.** (2016). *Autonomous Decentralized Service Oriented Architecture Concept and Application for Mission Critical Information Systems*. IEICE Transactions on Communications, Vol.E99-B, No.4, pp. 803-812.

3. **HSCSG v15 OS Documentation** (2024-2026). *BRIEF_EXHAUSTIVO_HSCSG_COSATECA_OS.md*, `docs/ALRAICO_8_CARAS.md`, `docs/near/near_integration.md`, `docs/buzz/buzz_integration.md`.

4. **Buzz / Nostr Protocol** (2024). *block/buzz* - Nostr client for sovereign relays & agent mesh.

5. **NEAR AI** (2026). *IronClaw 1.0, Proof of Response, Decentralized Confidential ML* - NEAR AI papers.

---

### 13. ANEXOS

#### Anexo A: Taxonomía Content Code Preliminar (12 módulos HSCSG)
| CC Code | Módulo | Descripción |
|---|---|---|
| `hscsg.lucidez.evidence` | Integral/Lucidez | Envío/validación de evidencias |
| `hscsg.caas.mint` | CAAS/ZNU | Solicitud de acuñación por mérito |
| `hscsg.symbiosky.propose` | Symbiosky | Propuesta commit-reveal |
| `hscsg.symbiosky.vote` | Symbiosky | Voto commit/reveal |
| `hscsg.delegation.power` | Delegación | Delegación/revocación de poder |
| `hscsg.education.challenge` | Educación | Reto/evidencia de aprendizaje |
| `hscsg.sovereign.attest` | Soberanía Crédito | Atestación de activos |
| `hscsg.regen.mrv` | Regen | Solicitud/resultado MRV |
| `hscsg.vecinal.propose` | Vecinal | Propuesta E5M |
| `hscsg.nostr.event` | NostrRelay | Evento Nostr genérico |
| `hscsg.agent.compute` | AgentMesh | Solicitud/resultado cómputo |
| `hscsg.por.request` | ProofOfResponse | Request/Response/Failure |

#### Anexo B: Estructura Folio (ADSOA) para HSCSG
```
Folio = {
  requester_id: EntityID,           // EntityID = business_id.subsystem_id.entity_id
  task_id: ContentCode,             // CC del servicio solicitado
  sequence_number: uint64,          // Secuencialidad por requester
  event_id: uint64,                 // Referencia a evento original (RAO)
  instance_print: string            // Hash único de instancia (identity)
}
```

---

**Firma del Investigador Principal:** _________________________  
**Fecha:** 2026-08-18  
**Versión:** 1.0  
**Estado:** APROBADA PARA EJECUCIÓN INMEDIATA