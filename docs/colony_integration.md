# Integración Colony (JoinColony) — Perspectiva Triple (Usuario · LLM · HSCSG)

**Repos fuente:**
- `colonyNetwork` (contratos Solidity, rama `develop`) — protocolo DAO
- `colonyJS` (monorepo TS: sdk, colony-js, core, events, tokens)
- `colonySDK` (mirror de `colonyJS/packages/sdk`)
- `colony-gql` (GraphQL + `colony-neue` Vue 3 frontend)
- `ColonyFrontEndLivingStandard` (guía de estándares frontend)

**Mapeo canónico HSCSG:** Colony = protocolo de **organización soberana por reputación + tesorería programable**. Se asimila al módulo **Colectivo / CDS** y alimenta **CaaS-BM**, **Vesting ZNU** y **Autómata Soberano**.

---

## 1. Perspectiva USUARIO (qué quiere lograr en su Nodo Cosateca)

El usuario del nodo quiere:
- **Gobernar su colectivo sin jerarquía**: decisiones por consentimiento ponderado por contribución real (no por dinero).
- **Tesorería transparente**: ver de dónde vienen y a dónde van los recursos del nodo (Fondo Solarpunk, CaaS repartos).
- **Sub-células**: dividir el nodo en circunscripciones (Life Radius 15km) con su propio presupuesto.
- **Reconocimiento por trabajo**: que su esfuerzo (AUT) se traduzca en voz/gobernanza y en ZNU.
- **Vesting justo**: liberación de recursos/beneficios por hitos alcanzados, no por tiempo.

Colony resuelve exactamente esto vía dominios, pots, reputación y voting — HSCSG lo re-implementa offline-first con ZNU + CDS.

---

## 2. Perspectiva LLM (qué asimilar / qué extirpar)

### Asimilar (lógica pura → `lib/colony.ts`)
- **Tipos de dominio** (`@colony/core`): `Colony`, `Domain` (árbol), `Pot` (tesorería), `Reputation`, `Token`, `Role`.
- **Estructura en árbol de dominios** → `lib/colony.ts` `DomainNode` recursivo.
- **Patrón de API fluida** (SDK: `network → colony → domain → funding/reputation`): inspira la API del store de Colectivo.
- **Eventos append-only** (`@colony/events`) → modelo de RAO (registro inmutable).
- **Dashboard de gobernanza** (`colony-neue` Vue 3) → layout de pantalla `/colectivo` + `/integral`.

### Extirpar (infra ajena)
- Solidity / EVM / Gnosis Chain / gas / MetaMask.
- Ethers.js provider, GraphQL server, Apollo Client, indexador on-chain.
- Vue 3 (HSCSG usa React).
- Codegen de contratos (`@colony/contractor`).
- Sistema de disputas/arbitraje externo de Colony.

### Módulos HSCSG afectados
| Módulo HSCSG | Aporte Colony |
|--------------|---------------|
| `/colectivo` (Colectivo) | Dominios en árbol, roles, reputación por contribución |
| CDS (gobernanza) | Voting por reputación (peso ≠ capital) |
| CaaS-BM | Funding pots → reparto por AUT×CDS |
| Vesting ZNU | Vesting por hitos (confirma patrón berry-vesting) |
| Autómata Soberano | ArbitraryTransaction → ejecuta acciones por MJ Gate |
| RAO | Eventos append-only → Decision Records |

---

## 3. Perspectiva HSCSG + CaaS (isomorfismo con Leyes MJ)

### Ley I — No dañar base material/personas
- Colony: permisos por dominio + multisig limitan daño a la tesorería.
- HSCSG: **MJ Gate** (`evaluateMJGate`) bloquea cualquier acción que degrade AUT vectorial antes de ejecutarla.

### Ley II — Ganarse la vida soberanizando (AUT × CDS)
- Colony: **reputación se gana por trabajo real** en dominios; no se compra.
- HSCSG: **ZNU se emite por Value Equation** (AUT×CDS); voz/gobernanza ∝ contribución verificada (no tokens-especulativos). Vesting por hitos AUT.

### Ley III — Lucidez (nunca engañar)
- Colony: todas las transacciones son públicas en blockchain (append-only).
- HSCSG: **RAO inmutable** + **Modo Lucidez** (toggle que revela datos crudos + provenance).

### CaaS (acceso por contribución, no dinero)
- Colony: la membresía y voz se basan en reputación ganada, no en stake de capital.
- HSCSG: **CaaS-BM** = acceso al nodo por contribución a base material (ValueFlows), no por pago USDC.

---

## 4. Confluencia Arquitectónica (alineación directa)

| Colony | HSCSG v15 OS | Estado |
|--------|--------------|--------|
| Colony (organización) | Nodo Cosateca (Colectivo) | Mapeo directo |
| Domain (árbol) | Célula / sub-colectivo (Life Radius) | `lib/colony.ts` DomainNode |
| Pot (tesorería) | Fondo Solarpunk / CaaS reparto | `lib/caas.ts` |
| Reputation (por dominio) | AUT×CDS (contribución verificada) | `lib/metrics.ts` + CDS |
| Voting (por reputación) | CDS (consentimiento ponderado) | `lib/integral.ts` |
| Token (CLNY) | ZNU (demurrage + paridad biofísica) | `lib/vesting.ts` / `lib/trustlines.ts` |
| Vesting (hitos) | Vesting ZNU (berry-vesting) | `lib/vesting.ts` (ya asimilado) |
| Events (append-only) | RAO (Decision Records) | `lib/store.ts` |
| ArbitraryTransaction | Autómata Soberano (MJ Gate) | `lib/automaton.ts` |

---

## 5. Mejoras Mutuas

**Colony mejora a HSCSG:**
1. Estructura de dominios en árbol → federación de células más formal.
2. Reputación por trabajo → refuerza AUT×CDS como base de voz (anti-plutocracia).
3. Funding pots → CaaS-BM con presupuestos por circunscripción.
4. Dashboard de gobernanza (`colony-neue`) → UX de `/colectivo` y `/integral`.
5. Estándar frontend vivo → refuerza HSCSG Technical Standards (OneManCompany).

**HSCSG mejora a Colony:**
1. **Offline-first**: Colony requiere EVM/Gnosis; HSCSG funciona sin internet (localStorage + DTN).
2. **Anti-especulación**: ZNU tiene demurrage + paridad biofísica; CLNY es token ERC-20 especulativo.
3. **Base material**: Colony ignora base material física; HSCSG ancla gobernanza a AUT (13 pilares).
4. **Autómata Soberano**: Colony requiere usuarios activos; HSCSG tiene agente que sostiene el nodo regenerando base.
5. **Modo Lucidez**: transparencia radical activable más allá del append-only.

---

## 6. Inferencias Extrapoladas (más allá del texto original)

1. **Dominios como células federadas**: el árbol de dominios de Colony → estructura de Nodos Cosateca donde cada hoja es una célula con su pot y su CDS local.
2. **Reputación → AUT computable**: la reputación de Colony (off-chain derivada de on-chain) → AUT×CDS ya computable off-chain vía SVD v2 + RAO.
3. **Pot como Fondo de Célula**: cada dominio tiene su pot → cada célula tiene su porción del Fondo Solarpunk, gobernada por su CDS.
4. **Voting por reputación → anti-plutocracia nativa**: HSCSG ya la tiene (voz ∝ contribución); Colony confirma el patrón como estándar DAO.
5. **ArbitraryTransaction → Autómata ejecutor**: las acciones on-chain de Colony → Autómata Soberano ejecuta acciones locale por MJ Gate (sin EVM).

---

## 7. Entregables Accionables (P0/P1)

| Entregable | Descripción | Módulo HSCSG | Prioridad |
|------------|-------------|--------------|-----------|
| `lib/colony.ts` | Tipos: Colony, DomainNode (árbol), Pot, Reputation, Role | Colectivo/CDS | **P0** |
| `lib/caas.ts` (extend) | `DomainPot` por célula; reparto por AUT×CDS | CaaS-BM | **P0** |
| `lib/integral.ts` (extend) | Voting por reputación → CDS weight por AUT | CDS | **P1** |
| Pantalla `/colectivo` (extend) | Árbol de dominios + pots + reputación (layout colony-neue) | Colectivo | **P1** |
| `docs/colonyNetwork_backup.md` | Backup quirúrgico (este) | Docs | **P0** |
| `docs/colonyJS_backup.md` | Backup quirúrgico | Docs | **P0** |
| `docs/colonySDK_backup.md` | Backup quirúrgico | Docs | **P0** |
| `docs/colony-gql_backup.md` | Backup quirúrgico | Docs | **P0** |
| `docs/ColonyFrontEndLivingStandard_backup.md` | Backup quirúrgico | Docs | **P0** |
| `docs/colony_integration.md` | Este doc (3 perspectivas) | Docs | **P0** |
| BRIEF §2.18, §3.0, §9.2, §14, §16 | Inyección de Colony en BRIEF | Brief | **P0** |

---

## 8. Notas de implementación (sin romper HSCSG)

- **Catálogos fijos** (nombres de roles, tipos de dominio) → `const` en `lib/colony.ts`, la pantalla itera la constante (NO del store persistido — ver Pitfalls §datos estáticos).
- **Estado editable** (miembros, pots del nodo, decisiones CDS) → `store.ts` con `partialize`.
- **Sin backend**: toda la lógica de dominios/pots/reputación corre local; la federación usa DTN/RAO (no EVM).
- **MJ Gate**: toda acción de gobernanza (mover fondos de pot, crear dominio) pasa `evaluateMJGate` antes de ejecutar.
