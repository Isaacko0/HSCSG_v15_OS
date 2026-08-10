# Integración Kleros (kleros + Proof-of-Humanity) — Perspectiva Triple (Usuario · LLM · HSCSG)

**Repos fuente (27):** kleros (Protocol V1), kleros-interaction, court, xdai-kleros-liquid, court-notifications-bot, arbitrable-proxy-contracts, dispute-resolver, dispute-resolver-interface-contract, corobot, governor-script, governor-snapshot, zodiac-bots, stake-curate, tag-registry-rewards, scout, scout-snap, kleros-moderate, realitio-reporting-bot, realitio-proxy, realitio-script, action-callback-bots, event-service, escrow-contracts, simple-escrow, Proof-Of-Humanity (V1), proof-of-humanity-v2-contracts.

**Mapeo canónico HSCSG:** Kleros = **justicia como servicio / arbitraje descentralizado + oráculos de hechos + identidad sybil-resistant**. Se asimila a **CDS_Jurados (resolución de disputas)**, **Autómata Soberano (corobot/governor)**, **RAO (event-service/evidence)**, **Registro de Identidad Soberana (Proof of Humanity)** y **Sistema de Escrow + Moderación del nodo**.

---

## 1. Perspectiva USUARIO (qué quiere en su Nodo Cosateca)

El usuario del nodo quiere:
- **Resolver conflictos sin juez ni Estado**: si un intercambio Solarpunk falla o hay desacuerdo, un grupo de pares (jurados) lo resuelve por evidencia.
- **Identidad real, 1 humano = 1 nodo**: que nadie farmed AUT×CDS con bots (sybil-resistance comunitario).
- **Verdad verificable**: que las contribuciones/hevchos sean comprobables (oráculo), no palabra de uno.
- **Garantía de intercambio**: escrow que libera solo si ambas partes cumplen; si no, jurados deciden.
- **Gobernanza ejecutable**: que las decisiones del nodo se ejecuten solas (Autómata) tras consentimiento.
- **Moderación comunitaria**: contenido abusivo resuelto por pares, no por un admin central.

Kleros resuelve todo esto vía jurados anónimos + staking + evidencia pública; HSCSG lo re-implementa offline-first con CDS_Jurados + RAO + Autómata.

---

## 2. Perspectiva LLM (qué asimilar / qué extirpar)

### Asimilar (lógica pura → `lib/kleros.ts`, `lib/cds.ts`, `lib/automaton.ts`)
- **Estructura de jurados** (sorteo + anonimato + rotación + penalización por voto minoritario) → `CDS_Jurados` (ya de Copiosis) + `reputationDecay` por desacuerdo.
- **Estándar de evidencia ERC-1497** → `EvidenceRecord` en RAO (registro inmutable de pruebas).
- **Appeals** (recurso a subcortes) → `appealDecision()` en CDS.
- **Dispute Resolver (oráculo)** → `lib/automaton.ts` ejecuta acción tras deliberación.
- **corobot / governor** → patrón de **agente ejecutor de gobernanza** (Autómata Soberano).
- **Realitio (oráculo de hechos)** → `lib/oracle.ts` (fuente de verdad para Value Equation / BN).
- **event-service** → índice append-only = RAO.
- **TCR (stake-curate)** → catálogos curados por comunidad (registro de células/recursos) gobernados por CDS.
- **Escrow + arbitraje** → `lib/solarpunk.ts` escrow resuelto por CDS_Jurados.
- **Proof of Humanity** → `lib/identity.ts` (registro de identidad soberana: atestación comunitaria, no KYC estatal).
- **scout** → agente buscador de tareas (antecedente de Conway Agent).

### Extirpar (infra ajena)
- Solidity / EVM / Gnosis Chain / gas / MetaMask.
- Staking de PNK (token especulativo ERC-20).
- Safe / Snapshot API / Zodiac modules on-chain.
- Vídeo-KYC on-chain (PoH V1).
- Bots de notificación Telegram/Discord (sustituir por eventos RAO locales).

### Módulos HSCSG afectados
| Módulo HSCSG | Aporte Kleros |
|--------------|---------------|
| CDS_Jurados | Jurados: sorteo, anonimato, rotación, penalización |
| RAO | Evidence (ERC-1497), event-service |
| Autómata Soberano | corobot, governor, dispute-resolver |
| `lib/identity.ts` | Proof of Humanity (1 humano = 1 nodo) |
| `lib/oracle.ts` | Realitio (oráculo de hechos) |
| Solarpunk (escrow) | escrow-contracts + arbitraje |
| Moderación del nodo | kleros-moderate |
| CaaS-BM | TCR (stake-curate) curado por comunidad |

---

## 3. Perspectiva HSCSG + CaaS (isomorfismo con Leyes MJ)

### Ley I — No dañar base material/personas
- Kleros: el jurado deshonesto pierde PNK; escrow protege a la parte cumplidora.
- HSCSG: MJ Gate bloquea acción que degrade AUT; CDS_Jurados resuelve disputa protegiendo a la parte honesta; `reputationDecay` pena al saboteador.

### Ley II — Ganarse la vida soberanizando (AUT × CDS)
- Kleros: jurar bien / curaduría / scout = trabajo recompensado (no se compra voz con PNK).
- HSCSG: AUT×CDS premia contribución honesta; CDS_Jurados otorga voz por mérito; identidad soberana evita farmeo.

### Ley III — Lucidez (nunca engañar)
- Kleros: evidencia + votos públicos (append-only); oráculo de hechos (Realitio).
- HSCSG: RAO inmutable + Modo Lucidez + `lib/oracle.ts` (verdad verificable para BN).

### CaaS (acceso por contribución, no dinero)
- Kleros: jurados por staking (aproximación económica); PoH da 1-humanidad.
- HSCSG: CDS_Jurados por AUT×CDS (sin staking especulativo); identidad soberana por atestación comunitaria (sin KYC estatal).

---

## 4. Confluencia Arquitectónica (alineación directa)

| Kleros / PoH | HSCSG v15 OS | Estado |
|--------------|--------------|--------|
| KlerosLiquid (court) | CDS_Jurados (órgano de resolución) | `lib/cds.ts` |
| Jurado (sorteo+anon+rotación) | Miembro sorteado CDS_Jurados | ya asimilado Copiosis |
| Penalización voto minoritario | `reputationDecay` (AUT×CDS) | `lib/metrics.ts` |
| Evidence (ERC-1497) | `EvidenceRecord` en RAO | `lib/store.ts` |
| Appeal | `appealDecision()` CDS | `lib/cds.ts` |
| Dispute Resolver (oráculo) | Autómata ejecuta tras CDS | `lib/automaton.ts` |
| corobot / governor | Autómata Soberano (ejecutor) | `lib/automaton.ts` |
| Realitio (oráculo hechos) | `lib/oracle.ts` (verdad BN) | nuevo |
| event-service | RAO (append-only) | `lib/store.ts` |
| TCR (stake-curate) | Registro curado por CDS | `lib/caas.ts` |
| scout | Conway Agent (buscador tareas) | `lib/automaton.ts` |
| escrow + arbitraje | Escrow Solarpunk resuelto por CDS | `lib/solarpunk.ts` |
| kleros-moderate | Moderación del nodo (CDS) | nuevo |
| Proof of Humanity V1/V2 | Identidad Soberana (1 humano=1 nodo) | `lib/identity.ts` |

---

## 5. Mejoras Mutuas

**Kleros → HSCSG:**
1. Jurados con **penalización por desacuerdo** → `reputationDecay` anti-sabotaje en AUT×CDS.
2. **Oráculo de hechos** (Realitio) → verdad verificable para Value Equation (¿la contribución ocurrió?).
3. **Identidad sybil-resistant** (PoH) → 1 humano = 1 nodo (anti-farmeo de ZNU).
4. **corobot/governor** → patrón de Autómata ejecutor de gobernanza.
5. **TCR** → catálogos curados por comunidad (registros de células/recursos).
6. **Escrow + arbitraje** → garantía de intercambio resuelta por pares.

**HSCSG → Kleros:**
1. **Offline-first**: Kleros requiere EVM/Gnosis; HSCSG resuelve disputas sin internet (RAO local + DTN).
2. **Anti-especulación**: voz por AUT×CDS, no staking PNK especulativo.
3. **Base material**: Kleros ignora base física; HSCSG ancla juicio a AUT (¿daña base material?).
4. **Autómata Soberano**: Kleros requiere usuarios activos; HSCSG tiene agente que sostiene el nodo.
5. **Identidad soberana sin KYC**: atestación comunitaria, no vídeo-KYC on-chain.

---

## 6. Inferencias Extrapoladas (más allá del texto original)

1. **Jurados como célula de justicia**: CDS_Jurados = célula de resolución; cada nodo tiene la suya + federación para apelaciones.
2. **reputationDecay por desacuerdo** → incentivo honestidad más fuerte que staking PNK (no requiere token).
3. **Oráculo de hechos → BN verificable**: Realitio resuelve la objeción "¿quién mide el Beneficio Neto?" → oráculo comunitario atestigua.
4. **Identidad soberana → federación anti-sybil**: PoH V2 subregistros = cada célula puede tener su registro; federación cruza atestaciones.
5. **corobot → Autómata ejecutor**: las decisiones de CDS se ejecutan solas (sin esperar usuarios) = Autómata Soberano.
6. **TCR → CaaS curado**: los recursos del nodo se catalogan por curaduría comunitaria (no por admin).

---

## 7. Entregables Accionables (P0/P1)

| Entregable | Descripción | Módulo HSCSG | Prioridad |
|------------|-------------|--------------|-----------|
| `lib/kleros.ts` | Tipos: Juror, Dispute, Evidence, Appeal | CDS_Jurados | **P0** |
| `lib/cds.ts` (extend) | `reputationDecay`, `appealDecision` | CDS_Jurados | **P0** |
| `lib/identity.ts` (nuevo) | Registro Identidad Soberana (PoH) | Identidad | **P0** |
| `lib/oracle.ts` (nuevo) | Oráculo de hechos (Realitio → BN) | Value Eq | **P1** |
| `lib/automaton.ts` (extend) | Ejecutor de gobernanza (corobot) | Autómata | **P1** |
| `lib/solarpunk.ts` (extend) | Escrow resuelto por CDS | Solarpunk | **P1** |
| Pantalla `/justicia` (nuevo) | Disputas + jurados + evidencia RAO | CDS_Jurados | **P1** |
| `docs/kleros-court_backup.md` | Backup (este) | Docs | **P0** |
| `docs/kleros-ecosystem_backup.md` | Backup ecosistema | Docs | **P0** |
| `docs/kleros_integration.md` | Este doc | Docs | **P0** |
| BRIEF §2.19, §3.0, §9.2, §16 | Inyección Kleros en BRIEF | Brief | **P0** |

---

## 8. Notas de implementación (sin romper HSCSG)

- **Catálogos fijos** (tipos de dispute, estados de evidencia) → `const` en `lib/kleros.ts`, la pantalla itera la constante.
- **Estado editable** (jurados del nodo, disputas abiertas, identidades atestiguadas) → `store.ts` con `partialize`.
- **Sin backend**: toda la resolución corre local; la federación usa DTN/RAO (no EVM).
- **MJ Gate**: toda ejecución de gobernanza (corobot) pasa `evaluateMJGate` antes de ejecutar.
- **Identidad soberana**: atestación por N miembros del nodo (no vídeo-KYC); 1 humano = 1 nodo vía hash de atestaciones.
