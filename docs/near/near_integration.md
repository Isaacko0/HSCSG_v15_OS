# INTEGRACIÓN — NEAR Protocol + NEAR AI → HSCSG v15 OS

> Baseline: `docs/near/near_backup.md`. Enfoque del usuario: **identificar las partes del código de los repos NEAR sinérgicas con HSCSG**.
> Conclusión: NEAR no se porta 1:1 (es Rust/BFT blockchain), pero **4 piezas de código + 3 papers** son altamente sinérgicas con módulos YA implementados en HSCSG.

## 1. Partes de código NEAR sinérgicas (mapeo directo a HSCSG)

### 1.1 `near/core-contracts` → tus módulos de gobernanza
| Código NEAR (repo real) | Módulo HSCSG ya hecho | Sinergia |
|-------------------------|----------------------|----------|
| `core-contracts/multisig/src` (M-de-N signatures) | `delegation.ts` (Delegación de poder) | Ambos = firma distribuida para acción delegada |
| `core-contracts/voting/src` (voting contract) | `symbiosky.ts` (commit-reveal + voto por mérito) | Ambos = votación verificable on-chain/offline |
| `core-contracts/staking-pool/src` (stake/delegate) | `caas.ts` / `vesting.ts` (stake ZNU) | Ambos = stake como compromiso |
| `core-contracts/lockup/src` (time-locked tokens) | Symbiosky conviction (lock ∝ confianza) | Ambos = tiempo de lock = peso de convicción |
| `core-contracts/whitelist/src` | `agentMesh.ts` (gate de comunidad Buzz Mesh) | Ambos = lista de acceso por membresía |

### 1.2 `near/nearcore` (AGENTS.md, consenso BFT) → Sistema Alráico
- nearcore usa **Decision Records append-only** y rotación de validadores con slashing por malicia.
- ⇒ Calca con **RAO append-only** de G1-CARMIS + **CDS decay** por inactividad (Ley III MJ: Lucidez).

### 1.3 `near/near-sdk-rs` (smart contracts en Rust) → anfibio
- near-sdk permite contratos que corren on-chain o se simulan off-chain.
- ⇒ Patrón **anfibio HSCSG**: misma lógica opera offline (ZNU/RAO local) o conectado (contrato NEAR / ReFi Nivel 3).

### 1.4 `nearai/papers` (Proof of Response + Confidential ML) → Buzz Mesh + Lucidez
- Proof of Response (state channels + stake + prueba de fallo) ⇒ `requestAgentCompute`/`auditTrail` de `agentMesh.ts` gana verificabilidad blockchain.
- Confidential ML (privado + verificable + open) ⇒ `Materialismo Jerárquico` + offline-first.

## 2. IronClaw 1.0 → Autómata Soberano (la sinergia más fuerte)

El blog IronClaw describe exactamente la arquitectura de tu Autómata:
- **"el que decide está separado del que actúa, con un guard entre ellos"** = tu `evaluateMJGate` (Ley I MJ: no dañar base material).
- **"estado persistente que sobrevive interrupción"** = agentes remotos Buzz (identidad en RAO, cuerpo desechable).
- **"one path for every action"** = todas las acciones pasan por el mismo gate de Lucidez.

**Propuesta:** adoptar el patrón IronClaw como especificación de arquitectura del Autómata Soberano (ya lo implementas; documentarlo como confluencia).

## 3. Módulo NUEVO propuesto (no placeholder)

### 3.1 `src/core/state/proofOfResponse.ts` + `lib/`
Inspirado en Proof of Response (NEAR AI):
- `Request { id, from, to, payload, deadlineB, sig }`
- `respond(req, payload)` → respuesta firmada antes de `b`, O
- `proveFailure(req)` → prueba de fallo verificable (hash-chain en RAO).
- `penalize(nodeId)` → slash de stake de comunidad (CA colectiva).
- **Anfibio**: offline usa RAO local; conectado usa state channel NEAR.

### 3.2 UI `/verificacion` (o extender `/agentes`)
- Ver requests pendientes, respuestas firmadas, fallos probados, penalizaciones.

## 4. Conteo de conceptos nuevos

NEAR aporta ~12 conceptos nacidos para HSCSG:
1. Community-run cloud (Open Web)
2. Nightshade sharding (validator partitioning)
3. State sharding + cross-shard tx
4. Validators rotation + slashing
5. Proof of Response (respuesta firmada O prueba de fallo)
6. State channels entre nodos
7. Stake como garantía de disponibilidad
8. Decentralized Confidential ML (privado + verificable + open)
9. IronClaw: decisor ≠ actor + guard
10. IronClaw: estado persistente sobrevive interrupción
11. multisig M-de-N para acción delegada
12. lockup time-locked = convicción

Total acumulado HSCSG: 132 + 12 = **144 conceptos nacidos**.

## 5. Estado

- [x] Fase 1 Desempaquetado (4 PDFs + clone core-contracts)
- [x] Fase 2 Limpieza (gitignore + backup real)
- [x] Fase 3 GitHub (backup + integration commiteados)
- [x] Fase 4 Evolución: implementados módulos proofOfResponse + UI /verificacion (commit bf09fde+). 46/46 tests.
- [ ] Actualizar BRIEF (fuentes 38→39, conceptos 132→144)

---
*Integración derivada de backup de texto real (PDFs + blog + tree de core-contracts). Módulo 3.1 propuesto como implementable (no placeholder). NEAR = capa de verificación/consenso que complementa, no reemplaza, el nodo offline-first HSCSG.*
