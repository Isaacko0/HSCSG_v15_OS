# BACKUP — NEAR Protocol + NEAR AI (asimilación HSCSG)

> Fuentes: 4 PDFs locales (White Paper, Nightshade, Proof of Response, Decentralized Confidential ML) + blog IronClaw 1.0 + repos GitHub (near/core-contracts, near/nearcore, near/near-sdk-rs, nearai/papers).
> Metodología HSCSG: Fase 1 (Desempaquetado) ✓ · Fase 2 (Limpieza) ✓ · Fase 3 (GitHub) ✓ · Fase 4 (Evolución) propuesta abajo.
> Texto REAL extraído de los PDFs y del blog. Sin inventar.

## 1. White Paper NEAR (38 pp) — plataforma de apps descentralizadas
- NEAR = "community-run cloud" para Open Finance / Open Web. Plataforma pensada para devs y emprendedores: apps que aseguran assets (dinero, identidad) y son usables por consumidores.
- Objetivos: experiencias intuitivas para end-users, escalar capacidad en millones de dispositivos, modelos de negocio sostenibles para devs.
- Capa de contrato (AssemblyScript / Rust via near-sdk), sharding (Nightshade), consenso BFT.

## 2. Nightshade — Sharding Design 2.0 (35 pp)
- Sharding con **validator partitioning + beacon chain**.
- **Quadratic sharding**, **state sharding**, **cross-shard transactions**.
- **Validators rotation**, **state validity + data availability**.
- Resiliencia: malicious forks, invalid blocks → slashing.

## 3. Proof of Response (12 pp, NEAR AI)
- Mecanismo: Alice pide datos a Bob; Bob responde en tiempo acotado **b**, O Alice recibe prueba de que un edge en el camino a Bob se rompió dentro de b, O pago streaming proporcional al tiempo excedido.
- Red de nodos con edges; topología persistida en **smart contract en NEAR**.
- Cada edge = state channel entre 2 nodos (micro-pagos NEAR sin tocar blockchain).
- Cada nodo tiene **stake**; al desconectarse la partición menor paga penalización a la mayor.
- Garantía: por cada request firmada por Alice, Bob da respuesta firmada O prueba verificable en blockchain de su fallo → penalización.
- Downstream: **decentralized storage, decentralized AI agents**.

## 4. Decentralized Confidential Machine Learning (17 pp, NEAR AI)
- Sistema que crea/deploya LLMs y agentes AI que son: open-source Y monetizables; privados Y verificables; preservan ownership de datos/activos del usuario.
- Resuelve: usar modelos avanzados hoy obliga a ceder privacidad; open-source no tiene modelo de negocio sostenible.

## 5. IronClaw 1.0 (blog NEAR AI, 27 jul 2026)
- Agente SOTA: #1 en PinchBench (93.5%), ClawBench (140+ sitios web reales), OfficeQA.
- **Arquitectura clave**: el que decide está separado del que actúa; una sola capa de coordinación entre ellos = **the guard**.
- Estado persistente que sobrevive interrupción (no se pierde trabajo).
- "One structure instead of ten, one path for every action."
- Base model: deepseek-v4-flash (el benchmark aísla el harness).

## 6. core-contracts (near/core-contracts, clonado) — código sinérgico directo
| Contrato | Qué hace | Sinergia HSCSG |
|----------|----------|----------------|
| `multisig` / `multisig2` | firma M-de-N para acciones | **Delegación de poder** (liquid democracy) |
| `voting` | contrato de votación on-chain | **Symbiosky** (commit-reveal, voto por mérito) |
| `staking-pool` | stake/delegación de tokens | **CaaS / vesting ZNU** |
| `lockup` | tokens bloqueados por tiempo | **Conviction voting** (lock ∝ confianza) |
| `whitelist` | lista de acceso | **Membresía de comunidad** (Buzz Mesh gate) |

## 7. Alineación con HSCSG v15 OS (notas para integración)

| NEAR (real) | Ganancia HSCSG |
|-------------|----------------|
| IronClaw: decisor ≠ actor + guard única | **Autómata Soberano**: separación decisión/acción, gate `evaluateMJGate` = guard |
| IronClaw: estado persistente sobrevive interrupción | **Agentes remotos** (Buzz): identidad portable en RAO |
| Proof of Response: respuesta firmada O prueba de fallo | **auditTrail / requestAgentCompute** (Buzz Mesh) verificable |
| Proof of Response: state channels + stake | **Trustlines** (HSCSG) + CA colectiva como stake de comunidad |
| core-contracts multisig/voting/staking/lockup | **Delegación / Symbiosky / CaaS** ya implementados en HSCSG |
| Confidential ML: privado + verificable + open | **Offline-first / Lucidez / privado por diseño** |
| Nightshade: validators rotation + slashing | **Reputación / CDS** (decay por inactividad) |

---
*Backup de texto REAL (PDFs + blog + tree de core-contracts). No se inventó contenido.*
