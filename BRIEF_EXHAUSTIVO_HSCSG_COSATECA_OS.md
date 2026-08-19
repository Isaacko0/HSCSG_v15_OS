# BRIEF EXHAUSTIVO QUIRÚRGICO: HSCSG — Modelo de Negocio, HSCSG v15 OS & Cosateca OS
**Documento fundacional v1.0 | Zeitnus / Isaac Ko | Agosto 2026**
**Metodología:** 4 Fases (Desempaquetado → Limpieza → GitHub → Evolución) + Sistema Alráico (G1-CARMIS)
**Fuentes primarias:** 44 integraciones documentadas en `HSCSG_v15_OS/docs/` (incl. Copiosis v7.1, AuroraGov, Shivarthu, CompAI CRM, Didacta Community con backup + integración completa, **+ Jacque Fresco/RBE vía tesis Yates 2014 (UCLan) y Leiva 2012 (U. Valparaíso)**, **+ NVIDIA OO-Agents (NOOA) asimilado como capa agente-orobjeto**, **+ ContentCreation-OS (CynthiaSalazarB) asimilado como co-pilot de contenido anfibio**, **+ CaaS Market Intel (DataInsightsMarket 2020–2034) como fuente de modelo de negocio**), informes ejecutivos HSCSG v14, análisis OneManCompany, IDETRA, repos asimilados.

---

## ÍNDICE
1. [Contexto y Visión Civilizatoria](#1-contexto-y-visión-civilizatoria)
2. [Arquitectura Epistemológica: Materialismo Jerárquico + Sistema Alráico](#2-arquitectura-epistemológica)
3. [Modelo de Negocio: La Cuaternidad Soberana Ampliada](#3-modelo-de-negocio)
4. [Arquitectura de Productos/Servicios: Funnel de Soberanía](#4-arquitectura-de-productosservicios)
5. [Infraestructura de Acceso Libre: Cosatecas, Ciudades 15-min, Mesh DTN](#5-infraestructura-de-acceso-libre)
6. [Métricas Clave: CAC, MCI, ICS, IVC, PGS, η, ξ, σᵤ](#6-métricas-clave)
7. [Mercado Objetivo y Propuesta de Valor](#7-mercado-objetivo)
8. [Arquitectura Técnica y Operativa: El Tejido (User ↔ AI ↔ Platform)](#8-arquitectura-técnica-y-operativa-el-tejido)
9. [Flujo de Trabajo del Usuario + Inteligencia Artificial + Plataforma](#9-flujo-de-trabajo-del-usuario--inteligencia-artificial--plataforma)
10. [Hoja de Ruta: Fases 0-D + Iteraciones OneManCompany](#10-hoja-de-ruta)
11. [Monetización y Sostenibilidad: ZCS/ZNU + Fondo Solarpunk + ReFi](#11-monetización-y-sostenibilidad)
12. [Diferenciación y Barreras de Entrada](#12-diferenciación-y-barreras-de-entrada)
13. [Riesgos y Suposiciones Críticas](#13-riesgos-y-suposiciones-críticas)
14. [Arquitectura Financiera: Economía Híbrida 3 Niveles](#14-arquitectura-financiera)
15. [Cosateca OS vs HSCSG v15 OS: Doble Capa (Local + Social)](#15-cosateca-os-vs-hscsg-v15-os-doble-capa)
16. [Conclusión: Soberanía Operacional Verificable](#16-conclusión)
[Anexo A: Glosario Unificado](#anexo-a-glosario-unificado)
[Anexo B: Tabla de Mapeo](#anexo-b-tabla-de-mapeo)
[Anexo C: Value Equation & ValueFlows Types](#anexo-c-value-equation--valueflows-types)  
[17. Implementación UI — Sesión 2026-08-12](#17-implementación-ui--sesión-2026-08-12-evidence-model--delegación--capabilities)

---

## 1. CONTEXTO Y VISIÓN CIVILIZATORIA

### 1.1 Problema Central
La humanidad opera bajo **extracción sistémica**: dinero fiduciario → deuda → crecimiento infinito en planeta finito. Las alternativas (ecovillas, cooperativas, RBE) fallan por **falta de infraestructura técnica verificable** que conecte base material, gobernanza, economía y métricas en un solo sistema operativo.

### 1.2 Visión: Nodos Cosateca Soberanos Federados
> **Cada colectivo humano —sin credenciales académicas— puede transitar de dependencia estructurada a soberanía operacional verificada (PGS ≥ 3.0, ICS ≥ 0.8, IVC ≥ 0.85) en 18-36 meses.**

**Objetivo civilizatorio:** Una red planetaria de **nodos Cosateca** (territorios regenerativos de ~150 personas / Life Radius 15 km) federados vía **DTN + ActivityPub + ValueFlows**, donde:
- El acceso a recursos se gana por **contribución a la base material (AUT)**, no por dinero
- La gobernanza es **cibernética autónoma (CDS-SUI-CGC-FRS-RAO)** no jerárquica
- La moneda **ZNU (demurrage + paridad biofísica)** sustituye extracción por regeneración
- Los **autómatas soberanos** sostienen su existencia regenerando base material (Ley II MJ)

### 1.3 Genealogía del Proyecto
| Fase | Nombre | Descripción | Estado |
|------|--------|-------------|--------|
| 2024-2025 | DeseOS / Contento.pro | Prototipos Micro-SaaS + AI Wrappers | Archivado |
| 2026-08-05 | **Rebrand → Cosateca OS** | Fork unificado + metodología 4 fases | Activo |
| 2026-08-09 | **Pivote HSCSG v15 OS** | HSCSG = nodo local offline (CaaS/ZNU/Lucidez/privado); **Hylo fork** = capa social/comunitaria (grupos, ofertas/necesidades, tracks, API, auth, mobile/desktop) | En curso |

---

## 2. ARQUITECTURA EPISTEMOLÓGICA: MATERIALISMO JERÁRQUICO + SISTEMA ALRÁICO

### 2.1 Las 3 Leyes del Materialismo Jerárquico (Constitución del Autómata)
| Ley | Enunciado | Operacionalización en HSCSG v15 OS |
|-----|-----------|-------------------------------------|
| **I** | **No dañar la base material ni a las personas** | Base Material, Soberanía (13 pilares), Autómata Soberano. Gate `evaluateMJGate` bloquea cualquier acción que degrade AUT vectorial. |
| **II** | **Ganarse la vida soberanizando (AUT × CDS)** | CaaS, Tekitl, Trustlines, Vesting. ROI = ΔAUT/costo ≥ 1. Suscripción CaaS = stake ZNU (no pago ciego). |
| **III** | **Lucidez: nunca engañar** | Verificación, Lucidez, Pattern Theory (Soberanía). Modo Lucidez (toggle real), CAC auditoría triaxial, RAO inmutable. |

> **Isomorfismo Conway Automaton:** Las 3 leyes del Automaton (Never harm / Earn existence / Never deceive) son **idénticas** a Leyes I-III MJ. El Autómata HSCSG *es* un Conway Agent re-encajado en sustrato biofísico.

### 2.2 Sistema Alráico: G1-CARMIS (Loop Engineering Canvas)
```
G1: Generación (Pensar/Imaginar)     ← CDS + Priorizar + Colaberry
C:  Captura (Medir/Registrar)        ← SVD v2 + ValueFlows + RAO
A:  Análisis (Diagnosticar)          ← CAC Calculator v11 + Lucidez + FRS
R:  Recomendación (Proponer)         ← Integral Loop (CDS→OAD→COS→ITC→FRS)
M:  Métricas (Evaluar)               ← η, ξ, σᵤ, PGS, ICS, IVC, 12 vectores CAC
I:  Iteración (Ejecutar)             ← Autómata Soberano + Tekitl + FABSHIP
S:  Síntesis (Integrar)              ← RAO + Federación DTN + Memética
```
**Principio:** Todo ciclo G1-CARMIS produce un **Decision Record (DR) append-only** en RAO. No hay "estado" sin provenance.

### 2.3 Frameworks Integrados (Multi-Framework Integration)
| Framework | Sección HSCSG | Aporte Operativo |
|-----------|---------------|------------------|
| **8 Formas de Capital** | §6.1 | MCI (Multi-Capital Index) pondera: Material, Vivo, Social, Intelectual, Experiencial, Cultural, Espiritual, Financiero |
| **DisCO** | §3.0, §5.6 | 3 flujos (Livelihood/Love/Care) → ValueFlows types; gobernanza por consentimiento; transparencia radical |
| **Integral Collective** | §5.6, §14.3 | Loop CDS→OAD→COS→ITC→FRS = arquitectura celular HSCSG |
| **Prosocial Protocol** | §14.1 | Food Web, Needs-Driven Economy, Resource Ecology, Planetary Boundary Avoidance |
| **FABSHIP/HUMANIA** | §5.1-5.5, §14.3-14.4 | Earthship 6 vectores → AUT_*; FabLab; ValueFlows productivos; Resource-Based Pricing |
| **Auravana/One Community/TVP/RBE** | §17 | Horizontes postmonetarios; diseños modulares gratuitos; bioconstrucción |
| **OneManCompany** | §8.3-8.4 | Vessel+Talent; E²R Tree Search; SSOT; Registry; Talent Market; Multi-agent meetings |
| **Copiosis** | §2.17, §3.0, §3.5, §5.6, §6.1, §14.1, §14.3-14.4, §16, §17 | NBR, Beneficio Neto 8 escalas, 3 tipos bienes, Jurados Ciudadanos, Estigmergia, Transición voluntaria, MVP post-dinero |
| **Colony (JoinColony)** | §2.18, §3.0, §3.5, §9.2, §14, §16 | DAO por reputación + tesorería programable (dominios/pots), voting por reputación (anti-plutocracia), vesting por hitos, events append-only |
| **Kleros / Proof-of-Humanity** | §2.19, §3.0, §3.5, §9.2, §16 | Arbitraje descentralizado (jurados anónimos+penalización), oráculo de hechos (Realitio), identidad sybil-resistant (PoH), escrow+arbitraje, TCR curadas, Autómata ejecutor (corobot) |
| **DeseOS / Contento.pro** | §2.20, §3.0, §14, §16 | SOA de agencia de marketing (BranDNA 12 secc, escalera 5M, ICP, Strategic Brain, Pagos/Pauta) **hibridado anfibio ZNU↔USD** |
| **Gaia Confederation** | §2.21, §3.5, §9.2, §16 | Gobernanza biomimética (círculos Dunbar), economía regenerativa + monedas complementarias, passport contextual de confianza, justicia restaurativa, protocolo de interoperabilidad (corona el vaso comunicante) |
| **iambrainstorming** | §2.22, §3.5, §16 | Blogs federados (principal, opinionated_observer, coding_blog, GitLab, interactive-five): saber experiencial + aprendizaje interactivo + pensamiento crítico (capa de educación del vaso) |
| **Symbiosky** | §2.23, §3.5, §9.2, §16 | Conviction voting (credibilidad por convicción, lock ∝ confianza), reward=mean_score×mult, decay 5%/año por inactividad, anti-whale, capa Nostr/AT Protocol (VA MÁS ALLÁ de HSCSG: CDS gana convicción bloqueada, ZNU gana decay) |
| **CaaS Market Intel** | §1, §7, §16 | Reporte mercado CaaS (DataInsightsMarket, 2020–2034): $7–42B, CAGR 25%, dominan platforms cloud-centralizados (Verint 29.9%, Discourse 2.6%). Constraint #1 = privacidad/GDPR. Web3 governance a 5–7 años. **Diferenciador HSCSG:** CaaS offline-soberano + postmonetario (ZNU) + Web3 ya operativo. Ver `docs/caas_market.md`. |

---

## 2.17 Copiosis: Diseño Socioeconómico Post-Dinero (NBR + Beneficio Neto + Estigmergia)

**Fuente primaria** es el diseño socioeconómico post-dinero más completo, coherente y honesto intelectualmente en el dominio público (copiosis.net, v7.1, 2024+). HSCSG lo adopta como **referente arquitectónico para la capa postmonetaria** — no como modelo cerrado, sino como primitivas que se reensamblan en Materialismo Jerárquico + Sistema Alráico.

### 2.17.1 Aporte Conceptual / Estructural
- **NBR (Net Benefit Reward)**: Unidad de recompensa **intransferible, creada ex nihilo por Beneficio Neto, quemada al uso**. Rompe suma cero, especulación, herencia, captura política del dinero.
- **Beneficio Neto (BN)**: `BN = Σ(Beneficios a personas + planeta) - Σ(Daños a personas + planeta)`. 8 escalas ponderadas por Jurados Ciudadanos. Internaliza externalidades por diseño.
- **Tres Tipos de Bienes** (reglas duras):
  - **Necesidades**: Gratis para todos, de por vida. Proveedores recompensados por BN.
  - **Lujos**: Precio NBR (Gateway, dos llaves). NBR se quema al gastarse.
  - **Bienes de Capital**: Gratis para creadores verificados. Recompensa por BN de habilitar producción ajena.
- **Jurados Ciudadanos**: Capa humana verificable que asigna pesos `W_i` a las 8 escalas BN. Sorteados, anónimos, rotativos, poder acotado.
- **Estigmergia**: Autoorganización vía rastros en el entorno (señales BN/NBR). Orden emergente medible.
- **Transición Voluntaria**: 3 fases, MVP desplegable en semanas, sin confiscación.

### 2.17.2 Tabla de Homologación

| Concepto Copiosis | Traducción Soberana HSCSG | Componente / Rol |
|-------------------|---------------------------|------------------|
| NBR (intransferible, ex nihilo, quemable) | ZNU-Vesting-NetBenefitFlow | `lib/vesting.ts` + `lib/copiosis.ts` (tipo `NetBenefitFlow`) |
| Beneficio Neto (BN) multi-escala | NetBenefit (NB) Engine | `lib/netbenefit.ts` (motor 8 escalas + pesos CDS_Jurados) |
| 8 Escalas BN | 12 Vectores CAC (10 + 2 nuevos) | `lib/metrics.ts` → `AUT_PSIC`, `AUT_ESTE` |
| Escala 1: Necesidades Básicas | `AUT_ALIM`, `AUT_ENER`, `AUT_HABI`, `AUT_AGUA`, `AUT_SALU`, `AUT_CONO` | Mapeo directo |
| Escala 2: Bienestar Psicológico | **`AUT_PSIC` (NUEVO)** | Autonomía psicológica/comunitaria |
| Escala 3: Salud Planetaria | `AUT_ALIM`, `AUT_ENER`, `AUT_AGUA` | Mapeo compuesto |
| Escala 4: Conocimiento/Habilidad | `AUT_CONO`, `AUT_PROD` | Mapeo directo |
| Escala 5: Eficiencia Recursos | `AUT_PROD`, `AUT_ENER` | Mapeo directo |
| Escala 6: Resiliencia/Seguridad | `AUT_HABI`, `AUT_AGUA`, `AUT_ENER` | Mapeo compuesto |
| Escala 7: Equidad/Acceso | `AUT_SOCI`, `AUT_GOBE`, `AUT_FINA` | Mapeo compuesto |
| Escala 8: Belleza/Estética | **`AUT_ESTE` (NUEVO)** | Autonomía estética/cultural |
| Jurados Ciudadanos (W_i) | **`CDS_Jurados`** (sub-módulo) | Sorteo, anonimato, rotación, `W_i ∈ [min,max]`, actas RAO |
| Tres Tipos de Bienes | **`goodType` en ValueFlows** | `need` \| `luxury` \| `capital` (obligatorio) |
| NBR Gateways (lujos) | **`luxuryPriceNBR`** en Solarpunk/Trustlines | Precio NBR quemado → ZNU a productor |
| Bienes de Capital gratis | **`capitalAccessTier`** en CaaS/FABSHIP | Productores verificados (`AUT_PROD ≥ threshold`) |
| Estigmergia (gradiente BN) | **`BN_Gradient_Signal`** en FRS | Coordenadas (ubicación, sector, BN_potencial) |
| Transición 3 fases | **Fases HSCSG 0-D** | Mapeo directo (§10.2) |

### 2.17.3 Confluencia Arquitectónica

**Alineación Directa:**
1. Necesidades gratis ≈ CaaS Tier 1 (Acceso Libre Nivel 1)
2. Recompensa por bien ≈ Value Equation + NetBenefitFlow
3. NBR intransferible ≈ ZNU-Vesting (claim pathway única)
4. Daño resta en BN ≈ Value Equation con `-cδ×Damage`
5. Jurados Ciudadanos ≈ CDS_Jurados
6. Estigmergia ≈ FRS + Autómata + Colaberry
7. Tres Tipos de Bienes ≈ `goodType` en ValueFlows
8. Transición voluntaria ≈ Fases HSCSG 0-D

**Brechas y Resolución HSCSG:**

| Brecha Copiosis | Resolución HSCSG |
|-----------------|------------------|
| Arranque en frío (bootstrap) | Fondo Solarpunk + Bienes Capital gratis (FABSHIP) + DSI (100 ZNU/mes) |
| Identidad/Sybil-resistance | ERC-8004 + Social DNA + Web of Trust + RAO |
| Escalabilidad Jurados globales | CDS_Jurados federado por nodo Cosateca (150 pers), η_fed coord |
| Bienes globales (clima) | `η_fed > max(η)+0.1` → Tratado Federación + CGC |
| Doble contabilidad (€ + NBR) | Oráculo Paridad Local + ZCS/ZNU + ReFi Bridge |
| Validación empírica nula | Fase 0 Proto-CO (10 casos beta, 90 días) |

### 2.17.4 Mejoras Mutuas

**Copiosis mejora a HSCSG:** BN multi-escala con daño → Value Equation robusta; tres tipos bienes → clasificación operativa; Jurados → capa humana CDS; NBR Gateways + Capital gratis → arquitectura completa; Estigmergia → "sistema nervioso" medible; honestidad radical → cultura Lucidez.

**HSCSG mejora a Copiosis:** Bootstrap real (Fondo, DSI, FABSHIP); identidad soberana (ERC-8004); federación ontogenética (mitosis); Autómata Soberano (Conway+MJ); métricas operativas (CAC, η, ξ, σᵤ, PGS); Modo Lucidez; hoja de ruta con validación empírica.

### 2.17.5 Inferencias Extrapoladas
1. **NBR-ZNU Hybrid Flow**: NBR (medalla) → `claimVesting()` → ZNU líquido (dinero operativo) → ZCS/Trustlines/ReFi.
2. **BN-Gradient as Coordination Signal**: gradiente BN en territorio = señal primaria coordinación Autómata/Colaberry.
3. **Jurados como Oracle Humano** para Value Equation: `W_i` = parámetros vivos.
4. **Three-Goods-Type Enforcement** offline: `goodType` + `capitalAccessTier` + `luxuryPriceNBR` = contrato social auto-ejecutable.
5. **Transition Bridge** (€ ↔ ZNU ↔ NBR): oráculo + NetBenefitFlow = puente contable.
6. **Copiosis Adapter como Talent**: `copiosis.ts` cargado por Autómata vía arquitectura Vessel+Talent.

### 2.17.6 Entregables Accionables

| Entregable | Módulo | Prioridad |
|------------|--------|-----------|
| `lib/netbenefit.ts` | Core (nuevo) | P0 |
| `lib/cds_jurados.ts` | CDS (sub-módulo) | P0 |
| `lib/copiosis.ts` | Integración (nuevo) | P0 |
| `lib/valueflows.ts` (extend: goodType, luxuryPriceNBR, capitalAccessTier) | Core | P0 |
| `lib/metrics.ts` (extend: AUT_PSIC, AUT_ESTE) | Metrics | P1 |
| `lib/solarpunk.ts` (extend: NBRGateway) | Solarpunk | P1 |
| `lib/caas.ts` (extend: capitalAccessTier) | CaaS | P1 |
| `lib/automaton.ts` (extend: BN_Gradient_Signal) | Autómata | P1 |

---

## 2.18 Colony (JoinColony): Gobernanza por Reputación + Tesorería Programable

**Fuente:** 5 repos de JoinColony (`colonyNetwork` contratos, `colonyJS`/`colonySDK` librerías TS, `colony-gql` GraphQL + `colony-neue` Vue3, `ColonyFrontEndLivingStandard` guía). Protocolo DAO desplegado en Ethereum/Gnosis Chain. HSCSG lo adopta como **referente de gobernanza descentralizada y tesorería por dominios** — re-implementado offline-first, sin EVM.

### 2.18.1 Aporte Conceptual
- **Colony = organización soberana**: una colony es un nodo; sus `domains` (árbol) son células/sub-colectivos.
- **Reputación por trabajo real**: se gana contribuyendo, NO se compra con tokens → base de voz anti-plutocrática.
- **Tesorería por pots**: cada dominio tiene su `pot` (presupuesto); los fondos se mueven entre dominios por gobernanza.
- **Voting por reputación**: el peso de voto ∝ reputación en el dominio, no 1-token-1-voto.
- **Vesting por hitos**: liberación de tokens por contribución verificada, no por tiempo.
- **Events append-only**: toda acción queda registrada inmutable (→ RAO).

### 2.18.2 Tabla de Homologación

| Concepto Colony | Traducción Soberana HSCSG | Componente / Rol |
|-----------------|---------------------------|------------------|
| Colony (organización) | Nodo Cosateca (Colectivo) | `/colectivo` + CDS |
| Domain (árbol) | Célula / sub-colectivo (Life Radius 15km) | `lib/colony.ts` `DomainNode` |
| Pot (tesorería) | Fondo de Célula / CaaS reparto | `lib/caas.ts` |
| Reputation (por dominio) | AUT × CDS (contribución verificada) | `lib/metrics.ts` + CDS |
| Voting (por reputación) | CDS (consentimiento ponderado) | `lib/integral.ts` |
| Token (CLNY) | ZNU (demurrage + paridad biofísica) | `lib/vesting.ts` / `lib/trustlines.ts` |
| Vesting (hitos) | Vesting ZNU (berry-vesting) | `lib/vesting.ts` |
| Events (append-only) | RAO (Decision Records) | `lib/store.ts` |
| ArbitraryTransaction | Autómata Soberano (MJ Gate) | `lib/automaton.ts` |

### 2.18.3 Confluencia con Leyes MJ
- **Ley I**: permisos por dominio + multisig limitan daño → MJ Gate bloquea acción que degrade AUT.
- **Ley II**: reputación por trabajo → ZNU por Value Equation (AUT×CDS); vesting por hitos.
- **Ley III**: transacciones públicas on-chain → RAO inmutable + Modo Lucidez.

### 2.18.4 Mejoras Mutuas
**Colony → HSCSG:** dominios en árbol (federación de células), reputación por trabajo (refuerza AUT×CDS), funding pots (CaaS-BM por circunscripción), dashboard de gobernanza (`colony-neue`), estándar frontend vivo.
**HSCSG → Colony:** offline-first (sin EVM), anti-especulación (ZNU demurrage), base material anclada (AUT 13 pilares), Autómata Soberano (ejecutor sin usuarios activos), Modo Lucidez.

### 2.18.5 Entregables Accionables
| Entregable | Módulo HSCSG | Prioridad |
|------------|--------------|-----------|
| `lib/colony.ts` (DomainNode, Pot, Reputation, Role) | Colectivo/CDS | **P0** |
| `lib/caas.ts` (extend: DomainPot por célula) | CaaS-BM | **P0** |
| `lib/integral.ts` (extend: CDS weight por AUT) | CDS | **P1** |
| Pantalla `/colectivo` (extend: árbol dominios + pots) | Colectivo | **P1** |
| Backup docs (5 repos) + `colony_integration.md` | Docs | **P0** |

---

## 2.19 Kleros / Proof-of-Humanity: Justicia como Servicio + Identidad Soberana

**Fuente:** 27 repos de `kleros` + `Proof-Of-Humanity` (court/protocol, dispute-resolver, governor, curate, scout, moderate, reality/realitio, escrow, PoH V1/V2). Protocolo de **arbitraje descentralizado** ("justicia como servicio") + **identidad sybil-resistant** (1 humano = 1 nodo) + **oráculo de hechos** (Realitio). HSCSG lo adopta como **referente de resolución de disputas y verdad verificable** — re-implementado offline-first, sin EVM.

### 2.19.1 Aporte Conceptual
- **Jurados anónimos**: sorteo + anonimato + rotación; resuelven disputes por evidencia (ERC-1497).
- **Penalización por desacuerdo**: quien vota con la minoría pierde staking (PNK) → incentivo honestidad.
- **Oráculo de hechos (Realitio)**: resuelve preguntas factuales (¿ocurrió la contribución?) → verdad para Value Equation.
- **Identidad soberana (PoH)**: 1 humano = 1 nodo (sybil-resistance por atestación, no KYC estatal).
- **Escrow + arbitraje**: fondo retenido se libera solo si ambos cumplen; jurados resuelven si no.
- **TCR (Token Curated Registries)**: listas curadas por la comunidad (recursos, células).
- **Autómata ejecutor (corobot/governor)**: agente que ejecuta decisiones de gobernanza.

### 2.19.2 Tabla de Homologación

| Kleros / PoH | Traducción Soberana HSCSG | Componente / Rol |
|--------------|---------------------------|------------------|
| KlerosLiquid (court) | CDS_Jurados (órgano resolución) | `lib/cds.ts` |
| Jurado (sorteo+anon+rotación) | Miembro CDS_Jurados | ya asimilado (Copiosis) |
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

### 2.19.3 Confluencia con Leyes MJ
- **Ley I**: penalización al deshonesto + escrow protege cumplidor → MJ Gate + CDS_Jurados resuelven disputa protegiendo base.
- **Ley II**: jurar/curaduría/scout = trabajo recompensado (AUT×CDS); identidad soberana evita farmeo.
- **Ley III**: evidencia + votos públicos (append-only) + oráculo hechos → RAO + Modo Lucidez + `lib/oracle.ts`.

### 2.19.4 Mejoras Mutuas
**Kleros → HSCSG:** penalización por desacuerdo (`reputationDecay`), oráculo de hechos (BN verificable), identidad sybil-resistant, Autómata ejecutor (corobot), TCR (catálogos curados), escrow+arbitraje.
**HSCSG → Kleros:** offline-first (sin EVM), anti-especulación (voz por AUT×CDS no staking PNK), base material anclada (AUT), identidad soberana sin KYC, Autómata Soberano (ejecutor sin usuarios activos).

### 2.19.5 Entregables Accionables
| Entregable | Módulo HSCSG | Prioridad |
|------------|--------------|-----------|
| `lib/kleros.ts` (Juror, Dispute, Evidence, Appeal) | CDS_Jurados | **P0** |
| `lib/cds.ts` (extend: reputationDecay, appealDecision) | CDS_Jurados | **P0** |
| `lib/identity.ts` (nuevo: Identidad Soberana PoH) | Identidad | **P0** |
| `lib/oracle.ts` (nuevo: oráculo hechos → BN) | Value Eq | **P1** |
| `lib/automaton.ts` (extend: ejecutor corobot) | Autómata | **P1** |
| `lib/solarpunk.ts` (extend: escrow+CDS) | Solarpunk | **P1** |
| Pantalla `/justicia` (nuevo) | CDS_Jurados | **P1** |
| Backup docs (kleros-court, kleros-ecosystem) + `kleros_integration.md` | Docs | **P0** |

---

## 2.20 DeseOS / Contento.pro: SOA de Agencia Hibridado Anfibio (ZNU ↔ USD)

**Fuente:** `DeseOS_project1.zip` (Soul.MBA / Pepe Sevilla). Sistema Operativo de Agencia de Marketing (BranDNA, escalera 5M, CRM/ICP, Strategic Brain, producción VITCH, Persuade, Pauta/medios, Pagos/facturación, Perfecciona, Publica). Stack **idéntico** a HSCSG v15 OS (React 18.3 · TS 5.3 · Vite 5 · Tailwind 3.3 · Zustand 4.5 · lucide-react · react-router 6). Licencia MIT.

### 2.20.1 Aporte Conceptual
- **BranDNA (12 secciones):** propósito, villano, promesa, método, voz, estética → constitución de identidad del nodo.
- **Escalera 5M:** Magnet → Mini → Core → Mastermind → Mentorship → catálogo de bienes/servicios del nodo.
- **ICP Builder (5 niveles de consciencia):** perfiles de miembros/aliados que alimentan el CDS.
- **Strategic Brain:** planificación inversa (meta→leads→alcance→piezas→inversión).
- **Pagos/Pauta:** termómetro de ingresos + atribución orgánico/pagado → **hibridado anfibio**.

### 2.20.2 ARQUITECTURA ANFIBIA (núcleo)
El nodo opera en dos modos sin duplicar lógica:
1. **Postmonetario (default offline):** valor en **ZNU** + acceso **CaaS-BM**. Sin USD, sin Stripe.
2. **Conectado (puente ReFi, Nivel 3):** expone ciertos bienes en **USD/USDC** para comercio externo, vía oráculo de paridad (`priceParity`).

```ts
type ValueUnit = 'ZNU' | 'USD'
interface Value { amount: number; unit: ValueUnit }
// displayValue(v, nodeMode, parity) decide etiqueta; la lógica de cálculo es agnóstica a la unidad
```
Los módulos Pagos/Pauta de DeseOS operan sobre `amount`; el render llama `displayValue`. **No se extirpa el dinero: se hace anfibio.** Esto resuelve el dilema: el nodo soberano no depende del USD pero puede nadar en él cuando conviene (comercio externo, deuda heredada, ReFi).

### 2.20.3 Tabla de Homologación

| DeseOS | Traducción Soberana HSCSG | Componente / Rol |
|--------|---------------------------|------------------|
| BranDNA 12 secc | Identidad del nodo (constitución) | `lib/agencia.ts` |
| Escalera 5M | Catálogo de bienes CaaS | `lib/agencia.ts` `OfferLadder` |
| ICP 5 niveles | Perfiles de miembros (CDS) | `members` + Colony |
| Strategic Brain | Planificación del nodo | `plans` + Integral |
| Termómetro ingresos | Medidor de Beneficio Neto (NBR) | `lib/valueDual.ts` |
| Pagos (USD) | **ANFIBIO: ZNU ↔ USD** | `nodeMode` + `priceParity` |
| Pauta (medios) | Difusión ZNU-orgánica ↔ USD-pagada | `lib/valueDual.ts` |
| Persuade | Comunicación voz de marca | Colaberry |
| Publica | Distribución | Federación DTN/AP |

### 2.20.4 Confluencia con Leyes MJ
- **Ley I:** BranDNA define a quién NO sirve; MJ Gate bloquea venta externa USD ciega (oráculo de paridad no depredador).
- **Ley II:** "precio" por valor entregado → ZNU por Beneficio Neto (Copiosis). Mismo `amount`, distinta etiqueta.
- **Ley III:** atribución orgánico/pagado = RAO + Modo Lucidez (origen del valor visible).

### 2.20.5 Entregables Accionables
| Entregable | Módulo HSCSG | Prioridad |
|------------|--------------|-----------|
| `lib/agencia.ts` (BranDNA + OfferLadder + ICP) | `/agencia` | **P0** |
| `lib/valueDual.ts` (Value + displayValue anfibio) | CaaS/ReFi | **P0** |
| `nodeMode` + `priceParity` en store | store | **P0** |
| Pantalla `/agencia` (BranDNA + 5M + Pagos anfibios) | `/agencia` | **P0** |
| Backup docs (deseos_backup, deseos_integration) | Docs | **P0** |

---

## 2.21 Gaia Confederation: Protocolo de Interoperabilidad + Gobernanza Biomimética

**Fuente:** `Gaia Confederation White Paper` (gaiaunion.com). White paper (no repo de código). Alianza de Territorios Autónomos, Resilientes y Regenerativos (ART). Meta-convergencia de gobernanza biomimética + economía regenerativa + passport de confianza + infraestructura distribuida.

### 2.21.1 Aporte Conceptual
- **Gobernanza biomimética (círculos):** Átomos→Células (1) → Círculo/Holón (3-13) → Comunidad/BioHábitat (13-150, Dunbar) → BioRegión/Federación (144-10k) → Confederación (Macro-organismo). **Holón-árquica** (cada nivel es todo y parte, sin dominación).
- **Economía regenerativa:** más allá de capitalismo/socialismo. Múltiples capitales (natural, social, cultural, espiritual, experiencial, intelectual). Monedas complementarias (bioregionales, de propósito, time-banks, cripto-regenerativas).
- **Passport de confianza contextual:** soberanía individual, reputación multidimensional, credenciales verificables, historial de contribución.
- **Justicia restaurativa + Wisdom Councils:** CNV, reparación, consejos de sabiduría.
- **Cultura Matrística (Maturana):** colaboración equilibrada, cuidado, integración de polaridades, biología del amor.
- **Métricas de regeneración:** Ecosystem Health / Community Wellbeing / Systemic Resilience.
- **Bounty System:** misiones comunitarias con recompensa.
- **Protocolo de interoperabilidad:** Value Translation + Communication Interfaces + Conflict Resolution — permite que modelos distintos coexistan sin perder autonomía.

### 2.21.2 Confluencia con el VASO COMUNICANTE (corona el enfoque HSCSG)
Gaia propone un protocolo mínimo común para que modelos distintos colaboren. HSCSG ya lo practica vía el vaso comunicante (Colony, Kleros, Copiosis, DeseOS). Gaia lo hace **explícito**:
1. **Value Translation:** mapeo ZNU ↔ EcoSocial token ↔ tiempo ↔ USD (oráculo anfibio DeseOS).
2. **Communication Interfaces:** federación DTN/AP (offline-first).
3. **Conflict Resolution:** Kleros (mecánico) + Wisdom Councils (complejo) + CNV.

HSCSG no es "un sistema más" sino un **nodo traductor** en la confederación regenerativa.

### 2.21.3 Tabla de Homologación

| Gaia | Traducción Soberana HSCSG | Componente / Rol |
|------|---------------------------|------------------|
| Círculos biomiméticos (Dunbar) | Estructura fractal Nodo→Célula→Federación | `celulas` + `lib/gaia.ts` |
| Múltiples capitales | AUT 12 vectores (extendido) | `lib/gaia.ts` `Capital` |
| Passport contextual | CDS por dominio + PoH | CDS + Kleros |
| Justicia restaurativa | Reparación sobre castigo | Kleros + Autómata |
| Wisdom Councils | Capa humana sobre Kleros | `lib/gaia.ts` `WisdomCouncil` |
| Economía regenerativa | ZNU / CaaS-BM / Copiosis | CaaS + NBR |
| Bounty System | Misiones del nodo | `tasks` + ZNU |
| Métricas regeneración | KPI del nodo | `lib/gaia.ts` `regenMetrics` |
| Cultura Matrística | Principio rector del nodo | `civilizaciones` |

### 2.21.4 Confluencia con Leyes MJ
- **Ley I:** "Principio de No-Daño" + justicia restaurativa = MJ Gate (anti-daño verificable).
- **Ley II:** recompensa por contribución regenerativa = ZNU por Beneficio Neto (Copiosis). Bounty = misión con recompensa AUT×CDS.
- **Ley III:** "Compromiso con la Verdad" + dashboard = RAO + Modo Lucidez.

### 2.21.5 Entregables Accionables
| Entregable | Módulo HSCSG | Prioridad |
|------------|--------------|-----------|
| `docs/gaia_backup.md` + `gaia_integration.md` | Docs | **P0** |
| `lib/gaia.ts` (Círculos Dunbar + Capitales + Métricas + Bounty + WisdomCouncil) | `/circulos` | **P1** |
| Pantalla `/circulos` (círculos biomiméticos + capitales + métricas) | `/circulos` | **P1** |

> **Nota de extirpación:** blockchain/DLT/EVM, IPFS/SSI cripto, cripto-regenerativas y macro-organismo centralizado → NO se asimilan (regla offline-first sin EVM). Se reemplazan por federación DTN/AP, credenciales locales y ZNU/CaaS-BM.

---

## 2.22 iambrainstorming: Saber Experiencial + Aprendizaje Interactivo (capa de educación del vaso)

**Fuentes:** `iambrainstorming.github.io` (principal + Vercel), `opinionated_observer`, `coding_blog`, `blog` (GitLab), `interactive-five`. Sitios/blogs personales federados (HTML/MD estático, con README + LICENSE). **NO son DAOs/protocolos** — aportan *saber experiencial* y la capa de aprendizaje + comunicación (Ecología de Saberes de Gaia, UniDiversity).

### 2.22.1 Aporte Conceptual (modelo de negocio del conocimiento + moneda postmonetaria)
- **Conocimiento libre financiado por modelos híbridos**: tie-ups internacionales + acceso de pago temporal en mercados desarrollados hasta recuperar costo, luego libera (cap. *Business Model for Lectures*, 2015). Isomorfo a CaaS.
- **ICOs como crowdfunding** con contrato que devuelve fondos si falla (auditable) — cap. *Why startup funding through ICOs* (2019). Isomorfo a Solarpunk escrow + CDS.
- **APIs abiertas como infraestructura de negocio** — cap. *Apps can solve social security* (2018). Isomorfo a federación DTN/AP.
- **Moneda "que cuenta para la unidad"**: total=1, no inflable; 4 tipos (exchange caduca/storage atado a identidad/deposits/loans) — cap. *Going away with money* (2016). Isomorfo a **ZNU**.
- **Price discovery por consenso de utilidad** (Schelling games, median commit-and-reveal, tax shitcoin/subsidize good) — cap. *What if crypto token prices* (39k chars, 2022). Isomorfo a **CDS + RAO**.
- **Democracia justa DPoS por expertise** (árbol de departamentos) — cap. *From hypocrisy to democracy* (2019). Isomorfo a **CDS**.
- **UBI ligado a thriving/educación** (no incondicional ciego) — cap. *Universal Basic Income...* (2018). Isomorfo a **CaaS-BM**.
- **5h/día, sin bullshit jobs** — cap. *Supply Chains* (2022). Límite de trabajo postmonetario.

### 2.22.2 Confluencia con el VASO COMUNICANTE
iambrainstorming es la **capa de aprendizaje y comunicación**:
- Copiosis (economía) · Colony (gobernanza) · Kleros/PoH (justicia/identidad) · DeseOS (agencia) · Gaia (interoperabilidad) · **iambrainstorming (saber experiencial + educación)**.
HSCSG no es solo máquina: es *comunidad que aprende en voz alta*.

### 2.22.3 Tabla de Homologación

| iambrainstorming | Traducción Soberana HSCSG | Componente / Rol |
|------------------|---------------------------|------------------|
| Blog general | Saber experiencial del nodo | `lib/gaia.ts` Capital experiencial + Colaberry |
| Observador opinado | Pensamiento crítico / Lucidez | RAO + Modo Lucidez |
| Coding blog | Documentación técnica viva | Hylo (knowledge) |
| Aprendizaje interactivo | Mentoría por retos | Gaia UniDiversity / Bounty |
| Federalismo de blogs | Red de nodos de conocimiento | Federación DTN/AP |

### 2.22.4 Confluencia con Leyes MJ
- **Ley I:** libertad de expresión, pero MJ Gate filtra contenido que dañe base/material o personas. Interactive-five: aprendizaje no extractivo (sin dark patterns).
- **Ley II:** el saber se comparte y reconoce por AUT×CDS (no por likes/algos). Bounty = misión de aprendizaje con recompensa ZNU.
- **Ley III:** opinión etiquetada como tal (no como hecho). Blogs versionados en RAO = trazabilidad del saber.

### 2.22.5 Entregables Accionables
| Entregable | Módulo HSCSG | Prioridad |
|------------|--------------|-----------|
| `docs/iambrainstorming_backup.md` + `iambrainstorming_integration.md` | Docs | **P0** |
| BRIEF §2.22, §3.5, §16 | Brief | **P0** |
| `lib/learning.ts` (retos + saber experiencial) | `/aprender` | **P2** |

> **Nota de extirpación:** analytics de terceros (GA/Vercel Insights) → RAO local. Dependencia de Vercel/GitHub Pages → HSCSG offline-first. Contenido que vulnere MJ → filtrado por MJ Gate.

---

## 2.23 Symbiosky: Credibilidad por Convicción (VA MÁS ALLÁ de HSCSG)

**Fuentes (GitLab):** `blockchain-projects-ecosymra/symbiosky-whitpaper` (PDF+Typst, v1.0 Dic 2025, "Monetizing Credibility, Not Clicks"), `blockchain-projects-ecosymra/symbiosky-contract-evm` (Foundry/Solidity, MIT, 7 contratos), `symbiosky/symbiosky-nostr` (Rust/Dioxus). **Esta fuente aporta primitivas que HSCSG NO tenía.**

### 2.23.1 Qué aporta (gap real vs HSCSG)
- **Conviction voting**: votar bloqueando ZNU ∝ a la confianza (lock hasta 5 años). HSCSG/CDS solo vota por reputación, NO por convicción bloqueada.
- **Reward = mean_score × multiplier** (score 1-10, umbral: score<5 = sin fondos). HSCSG no tiene score+umbral.
- **Decay 5%/año por inactividad** (sobre el exceso sobre lo protegido). ZNU no tenía decay por inactividad.
- **Anti-whale**: influencia cara = iliquidez (lock largo), vote limits, conviction resets.
- **Funding por umbral**: ≥50 votos, ≥10 convicción ponderada.
- **Capa de mensajería descentralizada (Nostr/AT Protocol)** → federación DTN/AP real entre nodos.

### 2.23.2 Parámetros extraídos (whitepaper + contratos)
`INACTIVITY_DECAY_BPS=500` (5%), `MAX_LOCK_DURATION=5y`, `MIN_VOTES=50`, `MIN_CONVICTION=10`, `SCORE_THRESHOLD=5`, `REWARD_MULTIPLIER=100`, `MAX_REWARD_PER_PROPOSAL=1000`, `CONFIG_TIMELOCK_DELAY=20d`. Token SYSKY cap 20M (→ ZNU).

### 2.23.3 Tabla de Homologación

| Symbiosky | Traducción Soberana HSCSG | Componente / Rol |
|-----------|---------------------------|------------------|
| Conviction voting (lock ∝ confianza) | CDS con convicción bloqueada | `lib/symbiosky.ts` + `/credibilidad` |
| Reward = mean_score × mult | AUT×CDS (score 1-10 + umbral) | `lib/symbiosky.ts` |
| Decay 5%/año por inactividad | ZNU con decay (anti-hoarding) | `lib/symbiosky.ts` |
| Anti-whale (lock, resets) | CDS (influencia cara = iliquidez) | `lib/symbiosky.ts` |
| Funding por umbral | CDS quorum | `lib/symbiosky.ts` |
| Nostr/AT Protocol | Federación DTN/AP (mensajería) | Federación |

### 2.23.4 Confluencia con Leyes MJ
- **Ley I**: anti-whale + umbrales evitan captura/daño por concentración; decay redistribuye sin expropiar.
- **Ley II**: reward por credibilidad = AUT×CDS puro (se gana por contribución verificable).
- **Ley III**: score 1-10 ponderado por convicción = trazabilidad (RAO); conviction resets = anti-engaño.

### 2.23.5 Entregables (implementados, no P2)
| Entregable | Módulo HSCSG | Prioridad |
|------------|--------------|-----------|
| `docs/symbiosky_backup.md` + `symbiosky_integration.md` | Docs | **P0** |
| `lib/symbiosky.ts` (conviction+reward+decay+antiwhale) | NUEVO | **P0** |
| `state/symbiosky.ts` + store (6 lugares) | store | **P0** |
| Pantalla `/credibilidad` | NUEVO | **P0** |
| BRIEF §2.23, §3.5, §9.2, §16 | Brief | **P0** |

> **Nota de extirpación:** EVM/Solidity/Foundry, SYSKY ERC20, Bluesky/Nostr remotos → lógica pura offline + ZNU + federación DTN/AP.

---

## 2.24 Pipeline Anidado + Agentes autónomos (automaton · alook · ponytail)

**Fuentes (GitHub):** `Conway-Research/automaton` (AI soberana autofinanciada), `alookai/alook` (compañía AI personal / orquestación de roles), `DietrichGebert/ponytail` (potenciador CLI/MCP de agentes). **Reiteración/extrapolación del loop Integral** (CDS·OAD·COS·ITC·FRS) en pipeline anidado robusto.

### 2.24.1 Matchmaker / Feedback / Flujos (lo que pidió el usuario)
- **Matchmaker** = `alook`: empareja necesidades (Issues/CDS, Bounties/Gaia, Retos/Aprender) con capacidades (AUT + credibility Symbiosky + expertise Democracia).
- **Feedback** = `automaton` + FRS: el agente soberano "muere" si no regenera base material → presión evolutiva = FRS natural; FRS retroalimenta cada subsistema (no solo observa).
- **Flujos de trabajo** = `ponytail`: cada transición de pipeline es un comando de una línea con hooks de verificación (Ley III).
- **Interrelaciones/correlaciones**: ver tabla en `docs/automaton_alook_ponytail_integration.md` §4.
- **Pipelines anidados**: loop 3 capas (Percepción FRS → Decisión CDS+Matchmaker → Ejecución OAD/COS/ITC), con sub-loops por proyecto.

### 2.24.2 Tabla de Homologación

| Repo/Concepto | Traducción Soberana HSCSG | Componente / Rol |
|---------------|---------------------------|------------------|
| alook (orquestación) | Colaberry + Orquestación | Matchmaker de agentes/roles |
| automaton (self-funding) | Autómata Soberano + ZNU/CaaS | Agente que gana su existencia (AUT×CDS) |
| ponytail (una-línea) | flujos de trabajo / hooks | Potenciador de ejecución robusta |
| Pipeline anidado | Integral (CDS·OAD·COS·ITC·FRS) | Loop robusto con degradación graceful |

### 2.24.3 Confluencia con Leyes MJ
- **Ley I**: automaton sobrevive solo si regenera base material; FRS evolutivo lo garantiza.
- **Ley II**: self-funding del agente = AUT×CDS puro (acceso por contribución).
- **Ley III**: ponytail hooks + append-only CDS = trazabilidad; nada se pierde.

### 2.24.4 Entregables
| Entregable | Módulo HSCSG | Prioridad |
|------------|--------------|-----------|
| `docs/automaton_alook_ponytail_backup.md` + `_integration.md` | Docs | **P0** |
| `docs/pipeline_anidado.md` (loop 3 capas + agentes) | Docs | **P0** |
| BRIEF §2.24, vaso §3.5, README | Brief | **P0** |

> **Nota de extirpación:** pago de compute con dinero real (automaton), monorepo pnpm/turbo (alook), CLI externa (ponytail) → solo filosofía/primitivas de orquestación; soberanía local sin EVM.

---

## 2.25 Pipeline Anidado (Orquestador Vivo) — IMPLEMENTADO

**Implementa** la sección §2.24: `lib/pipeline.ts` + `state/pipeline.ts` + pantalla `/pipeline` (27ª pantalla). Orquestador de lectura que computa en vivo:

### 2.25.1 Componentes
- `computeCapabilities()`: peso 0-100 por participante = 35% AUT (ITC/Integral) + 30% credibility (Symbiosky) + 20% expertise (Democracia) + 15% retos (Aprender).
- `collectNeeds()`: necesidades activas = Issues CDS + Bounties Gaia + Retos Aprender.
- `matchmaker()` (alook-style): empareja necesidad↔mejor participante.
- `pipelineHealth()`: loopScore 0-100 + alertas (degradación graceful → Círculo Gaia).
- `routeFeedback()` (automaton-style): enruta hallazgos FRS a CDS/OAD/COS/ITC.

### 2.25.2 Loop anidado (3 capas)
```
FRS (observa) → CDS + Matchmaker (decide) → OAD → COS → ITC (ejecuta) → loop
```
Render vivo en `/pipeline` (Stat de necesidades/capacidades/matched/loopScore + Matchmaker + Capacidades + Routing FRS).

### 2.25.3 Entregables
| Entregable | Módulo HSCSG | Prioridad |
|------------|--------------|-----------|
| `lib/pipeline.ts` + `state/pipeline.ts` | NUEVO | **P0** |
| Pantalla `/pipeline` | NUEVO (27ª) | **P0** |
| BRIEF §2.25, README | Brief | **P0** |

> **Nota:** estado derivado (no persistido); no muta otros módulos. Build 0 errores, `/pipeline` → 200.

---

## 2.26 Gaia Union (Organismo Vivo Regenerativo) — IMPLEMENTADO
## 2.26 Gaia Union / Red de EcoHabitats & BioRegiones (Organismo Vivo Regenerativo) — IMPLEMENTADO
**Fuente:** documento `.md` local "Gaia Union: El Plan Maestro Integrado para la Emergencia Planetaria" (título original: "Red de EcoHabitats & BioRegiones del Mundo Unificado - Un solo Corazon") — white-paper/ontología de ecosistema vivo, no repo de código. Asimilado con la misma variante que Gaia Confederation.

### 2.26.1 Qué aporta (capa ontológica/biológica que el pipeline mecánico NO tenía)
- **Niveles de organización**: Persona=Célula → Equipo=Tejido → Proyecto=Órgano → Sistema Vital → Organismo.
- **9 Sistemas Vitales** análogos a los biológicos (Nervioso, Circulatorio, Homeostático, Metabólico, Aprendizaje, Evolutivo, Investigación, Territorial físico, Territorial de encuentro).
- **Constitución=ADN**, **Código Genético=Valores** (8 valores: Regeneración, Cooperación, Transparencia, Diversidad, Soberanía, Interdependencia, Amor, Servicio — filtrables por Ley MJ), **Gobernanza=Epigenética** (adaptable sin alterar esencia).

### 2.26.2 Reencuadre del pipeline (lo que pidió el usuario: matchmaker / feedback / flujos)
El loop `/pipeline` (CDS→OAD→COS→ITC→FRS) se reencuadra como **cuerpo vivo**:
| Sistema Vital Gaia | Órgano HSCSG | Ley |
|--------------------|--------------|-----|
| Nervioso (Hub/OS) | `/pipeline` FRS + Matchmaker + `lib/connector.ts` | III |
| Circulatorio (Fund) | ZNU / CaaS / ITC / Trustlines / Vesting | II |
| Homeostático (DAO) | CDS + Wisdom Council + `lib/symbiosky.ts` | I |
| Metabólico (Market) | Solarpunk / Tekitl / Trustlines / `/flujo` | II |
| Aprendizaje (School) | `/aprender` + Colaberry + `lib/learning.ts` | III |
| Evolutivo (ImpactHub) | `/integral` COS + Bounty (`lib/gaia.ts`) | II |
| Investigación (BioLabs) | `/oraculo` + `/verificacion` + `lib/oracle.ts` | III |
| Territorial (BioHabitats) | `/base` (AUT_ALIM/ENER/HABI/AGUA/SALU) | I |
| Territorial (BioHubs) | Nodos federados DTN/AP + `/circulos` (Dunbar) | I |

- **Matchmaker (alook en `lib/pipeline.ts`)**: empareja *células* (personas/agentes) con *órganos* (necesidades CAC) por peso (35% AUT + 30% credibility Symbiosky + 20% expertise Democracia + 15% retos Aprender).
- **Feedback (FRS/automaton en `lib/pipeline.ts` + `lib/automaton.ts`)**: sistema nervioso que retroalimenta cada órgano vía `routeFeedback()` → enruta a CDS/OAD/COS/ITC.
- **Flujos (ponytail / `lib/connector.ts`)**: reflejos de una línea; `deriveStageParams(stage,state)` auto-llena siguiente etapa (derivado no duplicado); `NextStageBanner` siembra navegación (`seedStage`).

### 2.26.3 Entregables
| Entregable | Módulo HSCSG | Prioridad |
|------------|--------------|-----------|
| `docs/gaia_ecohabitats_backup.md` + `gaia_ecohabitats_integration.md` | Docs | **P0** |
| `lib/gaiaunion.ts` (organismo: niveles + 9 sistemas vitales + constitución + código genético + epigenética) | NUEVO | **P0** |
| `state/gaiaunion.ts` + store (6 lugares: `useGaiaUnion`, `gaiaUnionState`, `organismHealth`, `vitalSystems`, `constitution`, `epigenetics`) | store | **P0** |
| Pantalla `/gaiaunion` (28ª) — mapa de organismo vivo interactivo | NUEVO | **P0** |
| BRIEF §2.26, vaso §3.5, matriz §9.2, §16 | Brief | **P0** |

> **Nota de extirpación:** Fund externo USD, BioHabitats físicos reales, marca "Gaia Union" → ZNU/CaaS + `/base` + ontología del vaso.

### 2.26.4 Conceptos NUEVOS NACIDOS (no existían en HSCSG v15 OS antes)
1. **Organismo Vivo como Meta-Arquitectura** — reencuadre ontológico: módulos→órganos, loops→fisiología.
2. **9 Sistemas Vitales Mapeados 1:1** — correspondencia biológica explícita (Nervioso, Circulatorio, Homeostático, Metabólico, Aprendizaje, Evolutivo, Investigación, Territorial-físico, Territorial-encuentro).
3. **Constitución=ADN / Código Genético=Valores / Epigenética=Gobernanza** — triple capa ontológica unificando MJ (3 Leyes) + MJ Gate + CDS.
4. **BioHabitats = `/base` medido en territorio real** — 13 pilares AUT como "signos vitales" territoriales.
5. **BioHubs = Federación DTN/AP + Círculos Dunbar** — nodos físicos de encuentro = círculos biomiméticos (3-13, 13-150) federados.
6. **Matchmaker como Emparejamiento Célula-Órgano** — no solo asignar tareas; emparejar células con necesidades de órganos según peso fisiológico.
7. **Feedback como Sistema Nervioso Autónomo** — FRS retroalimenta cada órgano vía `routeFeedback` como impulsos nerviosos.
8. **IVC como Salud del Organismo** — IVC = 1 - σᵤ×(1-η)×(1-ξ_norm) ≥ 0.85 tiene base ontológica biológica.

### 2.26.5 Conceptos ETAPAS DE EVOLUCIÓN (refinamientos de lo existente)
1. Pipeline CDS→OAD→COS→ITC→FRS → **Sistema Nervioso + Circulatorio** (metafísica operativa, no lógica nueva).
2. ZNU/ITC/Trustlines → **Sangre/Flujos Circulatorios** (economía postmonetaria con anclaje biológico).
3. CDS + Wisdom Council → **Homeostasis / Sistema Inmune** (gobernanza equilibra, protege, no daña — Ley I).
4. Solarpunk/Tekitl → **Metabolismo Regenerativo** (intercambio = transformación de recursos en valor vivo).
5. Colaberry/Aprender/Oracle → **Aprendizaje / Memoria / Investigación** (módulos conocimiento con roles fisiológicos).
6. Conector `/flujo` + `deriveStageParams` → **Reflejos / Vías Nerviosas Rápidas** (ponytail materializado).
7. Fases HSCSG 0-D → **Ontogénesis del Organismo** (Proto-CO=blastocisto → Fase A=gastrulación → Fase B=organogénesis → Fase C=maduro → Fase D=federación).

## 2.27 Cierre del Loop del Pipeline (actuator) — CORRECCIÓN de limitación

**Detectado:** tras §2.26 el usuario señaló que `/pipeline` era un **viewer** (matchmaker/feedback no mutaban). El loop CDS→…→FRS era diagrama, no mecanismo. Se corrigió (igual trampa que la corrección P0 de Symbiosky).

### 2.27.1 Qué se cerró (commit actuarial)
- `lib/pipeline.ts`: `dispatchMatch` + `autoAdvisory` llaman `raiseIssue`+`ratifyDecision` de integral → **mutan IntegralState**.
- Store: `pipeDispatch` / `pipeAdvisory` (prefijo `pipe`, sin colisión de namespace).
- `/pipeline`: botones "Despachar (CDS)" y "Ejecutar routing FRS" → el matchmaker crea Issue CDS ratificado; el feedback FRS crea advisory. **Loop cerrado en CDS→decisión.**

### 2.27.2 Límites reales (honestidad, no forzar molde)
- No hay tránsito automático decisión→OAD/COS/ITC (solo `ratifyDecision` deja `status:'decided'`).
- `ZNUState` es `perMember` (sin balance agregado) → `znuRotate`/`znuDecay` NO cableados al advisory (quedó P2).
- FRS no es módulo: `autoAdvisory` solo se dispara manualmente, no por señales vivas de otros módulos.

### 2.27.3 Especulación pragmática (siguiente escalón)
`docs/pipeline_loop_cierre.md`: balance ZNU agregado + `znuDecay` real (P1); `applyDecision`→OAD/COS (P1); `ingestFrsSignal` + estigmergia continua (P2); anti-whale real (P1).

| Entregable | Módulo HSCSG | Prioridad |
|------------|--------------|-----------|
| `lib/pipeline.ts` (dispatchMatch/autoAdvisory) + store pipeDispatch/pipeAdvisory | NUEVO | **P0** |
| `/pipeline` actuator (botones) | NUEVO | **P0** |
| `docs/pipeline_loop_cierre.md` | Docs | **P0** |

---

## 2.28 Conector de Flujo (entramado entre pantallas) — COMPLEMENTA P1

**Motivo:** el usuario detectó que las pantallas repetían boilerplate (`useState`/`useMemo`) releían el
mismo store en vez de auto-enviarse parámetros; pedía un entramado conector que pre-llene la siguiente
pantalla. Inspirado en el patrón `stage`/`next`/`seed` de **DeseOS** (Personas→Prospecta→Persuade→Publica).

### 2.28.1 Entregables
- `lib/connector.ts`: `STAGES` (10 etapas del flujo cibernético) + `deriveStageParams(stage,state)` (auto-llena params de la SIGUIENTE desde el estado, **derivado no duplicado**) + `nextStageOf`.
- `components/NextStageBanner.tsx`: banner compartido que cada pantalla monta; muestra la siguiente etapa con params ya calculados y al navegar `seedStage(target,params)` los deja sembrados para pre-llenar.
- Store: `stageSeeds` (campo) + `seedStage(target,params)` (acción) + partialize.
- Pantalla `/flujo` (29ª): orquestador del entramado, grid responsive, muestra cada etapa con sus params y botón "Abrir y sembrar".
- Banner montado en `/base`, `/circulos`, `/integral` (prueba del auto-llenado).

### 2.28.2 Por qué no trunca lo hecho
El conector es **adicional**: no modifica la lógica de ningún módulo existente; `deriveStageParams` es
pura y lee el store ya existente. El actuator P0/P1 queda intacto. El banner es un componente compartido
(elimina la repetición de subfunciones que señaló el usuario).

| Entregable | Módulo HSCSG | Prioridad |
|------------|--------------|-----------|
| `lib/connector.ts` + `components/NextStageBanner.tsx` | NUEVO | **P0** |
| `stageSeeds`/`seedStage` en store | store | **P0** |
| Pantalla `/flujo` (29ª) | NUEVO | **P0** |

---

## 3. MODELO DE NEGOCIO: LA CUATERNIDAD SOBERANA AMPLIADA

### 3.1 Estructura de 4 Planos
```
MICRO-SaaS + AI Wrappers + Productized Services + Autómata HSCSG
+ RUNTIME EMPRESARIAL SOBERANO (Vessel+Talent, E²R, SSOT, Registry, Talent Market)
```

### 3.2 Fondo Solarpunk: Motor Económico Central
- **Entrada:** Actividad regenerativa → Evento ValueFlows
- **Procesamiento:** Autómata calcula Value Equation → emite **ZNU**
- **Salida dual:** (1) ZCS circula con demurrage 5%/28d; (2) USDC vía oráculo local → ReFi → Fondo Solarpunk
- **Reinversión:** 25% excedentes autómata + ingresos ReFi → subvenciones nodos (PGS ≥ 1.5)

### 3.3 Revenue Streams (Todos pasan Gate MJ)
| Stream | Descripción | Gate MJ | Métrica |
|--------|-------------|---------|---------|
| Revenue Demo / Turismo Soberanía | Visitantes pagan chunks ZNU/USDC | I, III | MCC ≥ 15%, Chunk > 70% |
| Cursos/Certificaciones Soberanas | OpenSpec versionado, credenciales ERC-8004 | II, III | MCI |
| Patrocinios Corporativos ESG | Métricas verificadas (no créditos genéricos) | I, III | IVC contractual |
| Consultoría Comunitaria | Retainer mensual, CDS quality gates | II, III | Resource-based pricing |
| Tokenización Impacto (NFT/SBT) | Artefactos RAO verificados | III | Capital Cultural |
| Affiliate / Revenue Share Autómata | 10% ingresos nodos hijos | II | Replicación neta + |

### 3.4 CaaS-BM: Comunidad como Servicio de Base Material
> Reescritura HSCSG del CaaS original (monetizar acceso) → CaaS-BM (soberanizar acceso vía contribución a base material).

| CaaS Original | CaaS-BM (HSCSG v15) |
|---------------|---------------------|
| Monetizar acceso | Soberanizar acceso (AUT×CDS) |
| Miembros pagan | Miembros aportan → ganan ZNU + voz |
| Creador monetiza | Colectivo facilita; reparto CDS |
| Afiliados/comisiones | Flujos entre pares ValueFlows |
| Tokens gamificados | ZNU demurrage + paridad biofísica |

**5 Revenue Streams CaaS-BM:** (1) Suscripción stake ZNU; (2) Revenue sharing por AUT; (3) Servicios entre pares; (4) Afiliados verdes; (5) Contenido/educación en ZNU.

### 3.5 Vaso Comunicante Copiosis ↔ HSCSG: Capa Postmonetaria Operativa

La integración de Copiosis (v7.1) proporciona la **arquitectura completa de la capa postmonetaria**: NBR (recompensa final intransferible), Beneficio Neto multi-escala con daño restando, tres tipos de bienes con reglas duras, Jurados Ciudadanos como oráculo para Value Equation, y Estigmergia como coordinación emergente.

| Copiosis | HSCSG v15 OS | Estado |
|----------|--------------|--------|
| NBR | ZNU-Vesting + NetBenefitFlow | Nuevo tipo VF |
| Beneficio Neto (8 escalas) | NetBenefit Engine + CAC extendido | `lib/netbenefit.ts` + AUT_PSIC/ESTE |
| Jurados Ciudadanos | CDS_Jurados | Sorteo, anonimato, rotación |
| Tres Tipos de Bienes | `goodType` en ValueFlows | obligatorio |
| NBR Gateways | `luxuryPriceNBR` | Solarpunk/Trustlines |
| Bienes Capital gratis | `capitalAccessTier` | CaaS/FABSHIP |
| Estigmergia | `BN_Gradient_Signal` | FRS |
| Transición 3 fases | Fases HSCSG 0-D | Fase 0 = Proto-CO |

**Vaso Comunicante Colony ↔ HSCSG: Gobernanza por Reputación + Tesorería Programable**

| Colony | HSCSG v15 OS | Estado |
|--------|--------------|--------|
| Colony (organización) | Nodo Cosateca (Colectivo) | `/colectivo` + CDS |
| Domain (árbol) | Célula / sub-colectivo | `lib/colony.ts` `DomainNode` |
| Pot (tesorería) | Fondo de Célula / CaaS reparto | `lib/caas.ts` |
| Reputation (por dominio) | AUT × CDS (contribución verificada) | `lib/metrics.ts` + CDS |
| Voting (por reputación) | CDS (consentimiento ponderado) | `lib/integral.ts` |
| Token (CLNY) | ZNU (demurrage + paridad biofísica) | `lib/vesting.ts` |
| Vesting (hitos) | Vesting ZNU (berry-vesting) | `lib/vesting.ts` |
| Events (append-only) | RAO (Decision Records) | `lib/store.ts` |
| ArbitraryTransaction | Autómata Soberano (MJ Gate) | `lib/automaton.ts` |

**Vaso Comunicante Kleros ↔ HSCSG: Justicia como Servicio + Identidad Soberana**

| Kleros / PoH | HSCSG v15 OS | Estado |
|--------------|--------------|--------|
| KlerosLiquid (court) | CDS_Jurados (órgano resolución) | `lib/cds.ts` |
| Penalización voto minoritario | `reputationDecay` (AUT×CDS) | `lib/metrics.ts` |
| Evidence (ERC-1497) | `EvidenceRecord` en RAO | `lib/store.ts` |
| Appeal | `appealDecision()` CDS | `lib/cds.ts` |
| Dispute Resolver / corobot | Autómata ejecuta tras CDS | `lib/automaton.ts` |
| Realitio (oráculo hechos) | `lib/oracle.ts` (verdad BN) | nuevo |
| TCR (stake-curate) | Registro curado por CDS | `lib/caas.ts` |
| escrow + arbitraje | Escrow Solarpunk resuelto por CDS | `lib/solarpunk.ts` |
| Proof of Humanity V1/V2 | Identidad Soberana (1 humano=1 nodo) | `lib/identity.ts` |

**Vaso Comunicante AuroraGov ↔ HSCSG: Gobernanza Jerárquica Ejecutable + Poder Contextual**

| AuroraGov | HSCSG v15 OS | Estado |
|-----------|--------------|--------|
| OU Tree (dot-notation, ancestros) | Círculos biomiméticos jerárquicos + federación | `lib/gaia.ts` `CircleTier` + `lib/colony.ts` `DomainNode` tree |
| Power/Sensitivity (OU+Persona+PowerID) | AUT×CDS weight por dominio + CDS_Jurados `W_i` | `lib/colony.ts` `Power` + `lib/cds_jurados.ts` |
| PowerDelegation (líquida, granular) | Conviction voting (Symbiosky) + delegación CDS | `lib/symbiosky.ts` + `lib/colony.ts` `PowerDelegation` |
| Proposal Sensibility Map (OU→threshold) | CDS multi-dominio: quórum ponderado por célula | `lib/integral.ts` `validate_proposal_score` |
| Membership Ranks (junior/regular/senior) | CaaS-BM tiers: stake ZNU + AUT ≥ threshold | `lib/caas.ts` `capitalAccessTier` + `membership_rank` |
| Roles por OU (MapSet assignments) | `DomainNode` roles + `DomainPot` tesorería | `lib/colony.ts` `DomainNode.roles` + `lib/caas.ts` `DomainPot` |
| Blockchain Projector (hash chain + causalidad) | RAO inmutable + ERC-8004 hash + correlación/causación | `lib/store.ts` RAO extendido |
| Process Manager (ProposalExecutor) | Autómata Soberano: E²R + MJ Gate + ejecución post-CDS | `lib/automaton.ts` + `lib/pipeline.ts` |
| GovPower DSL (comandos auto-descriptivos) | `STAGES` + `deriveStageParams` + `field_definitions` dinámicas | `lib/connector.ts` |
| Propuesta multi-paso validada | Pipeline anidado 3 capas (Percepción→Decisión→Ejecución) | `lib/pipeline.ts` + `lib/connector.ts` |

| Gaia Confederation | Protocolo de interoperabilidad + círculos biomiméticos | `lib/gaia.ts` (corona el vaso) |
| iambrainstorming | Saber experiencial + aprendizaje interactivo | `lib/learning.ts` (capa educación) |
| Symbiosky | Credibilidad por convicción + decay + anti-whale | `lib/symbiosky.ts` (va más allá: CDS gana convicción) |
| automaton·alook·ponytail | Pipeline anidado + agentes (matchmaker/feedback) | `docs/pipeline_anidado.md` (capa de agentes) |
| Gaia Union | Organismo vivo (niveles + sistemas vitales) | `lib/gaiaunion.ts` (ontología del vaso) |
| Pipeline (actuator) | Cierre del loop: matchmaker/feedback mutan CDS | `lib/pipeline.ts` (dispatchMatch/autoAdvisory) |
| **Shivarthu** | **Consenso estadístico honesto: Score Schelling + Commit-Reveal + Voto por Mérito** | `lib/cds_jurados.ts` (outlier removal) + `lib/symbiosky.ts` (commit-reveal) + `lib/integral.ts` (weight 3 factores) |
| **CompAI CRM** | **Evidence Model Soberano: no confidence, Fact Bands, Write Path 3 reglas, Work Queue leasing** | `lib/evidence.ts` (**IMPLEMENTADO** ✓ scoreEvidence+bandFor+scoreSchelling) + `EvidenceLedger`/`FactBandBadge`/`ScoreSchellingChart` (UI **IMPLEMENTADO** ✓) + `Justicia.tsx` (adjuntar evidencia con banda **IMPLEMENTADO** ✓) |

**Bootstrap resuelto:** HSCSG ya tiene Fondo Solarpunk, DSI, FABSHIP, CaaS-BM.

---

## 4. ARQUITECTURA DE PRODUCTOS/SERVICIOS: FUNNEL DE SOBERANÍA

### 4.1 Funnel (Usuario → Nodo → Federación)
```
DESCUBRE (Revenue Demo) → EXPLORA (Miembro CaaS) → COMPROMETE (Stake ZNU+AUT)
→ SOBERANIZA (AUT≥2, PGS≥2) → FEDERA (η_fed > max+0.1)
```

### 4.2 Módulos HSCSG v15 OS (21 Pantallas = 21 Capacidades)
| # | Ruta | Módulo | Origen | Vector CAC |
|---|------|--------|--------|------------|
| 1 | `/` | Home | Cosateca OS | — |
| 2 | `/base` | Base Material | Cosateca OS | AUT_ALIM/ENER/HABI |
| 3 | `/lucidez` | Lucidez | Cosateca OS | CAC auditoría |
| 4 | `/colectivo` | Colectivo | Cosateca OS | AUT_GOBE/SOCI |
| 5 | `/automata` | Autómata Soberano | Conway Automaton | Todos (meta) |
| 6 | `/znu` | ZNU | Cosateca OS+ | AUT_FINA |
| 7 | `/verificacion` | Verificación | Cosateca OS | CAC, Pattern Theory |
| 8 | `/automat` | Automat | Cosateca OS | Automatización |
| 9 | `/orquestacion` | Orquestación | Paperclip | Gobernanza técnica |
| 10 | `/caas` | CaaS·Comunidad | CaaS (C2C) | AUT_FINA/SOCI |
| 11 | `/solarpunk` | Solarpunk·Don | Solarpunk (x2) | AUT_ALIM/PROD |
| 12 | `/colaberry` | Colaberry·Agente | Eliza (HR_AI) | Onboarding |
| 13 | `/priorizar` | Priorizar·Colectivo | ZiadJ/prioritize | Planificación |
| 14 | `/vesting` | Vesting·ZNU | berry-vesting | AUT_FINA |
| 15 | `/trustlines` | Trustlines·Crédito | trustlines-protocol | AUT_FINA |
| 16 | `/tekitl` | Tekitl·Proyectos | Baruch4413/tekitl | AUT_PROD |
| 17 | `/soberania` | Soberanía·13 Pilares | sovereignty-hub+ui | Todos (diag) |
| 18 | `/integral` | Integral·Loop | Integral Collective | Arquitectura celular |
| 19 | `/mundus` | Mundus·Unidad | Sci-Hive IDETRA | Postmonetario |
| 20 | `/life` | Life·Organizador | GuiFV/life | Personal |
| 21 | `/civilizaciones` | Civilizaciones | Auravana/OC/TVP/RBE | Referentes |

> **Stack:** React 18 + TS + Vite 5 + React Router 6 + Zustand 4 + Tailwind 3
> **Regla crítica:** catálogos estáticos NO persisten en localStorage (bug Civilizaciones/Copiaosis → `const` en `lib/`)

---

## 5. INFRAESTRUCTURA DE ACCESO LIBRE: COSATECAS, CIUDADES 15-MIN, MESH DTN

### 5.1 Nodo Cosateca (Unidad Territorial)
- **Población:** ~150 personas (Dunbar)
- **Life Radius:** 15 km
- **Infraestructura:** Microgrid (solar+H₂), Huerta regenerativa, FABSHIP, Mesh DTN, Autómata HSCSG
- **Soberanía medida:** 13 Pilares × 7 Capas × 4 Fases = 364 celdas

### 5.2 Ciudad 15 Minutos Gratuita (Fase C+)
Acceso garantizado (comida, energía, agua, salud, educación, movilidad, cultura, gobernanza) **sin dinero**, por contribución.

| Nivel | Acceso | Requisito |
|-------|--------|-----------|
| 1 | Básico | Miembro CaaS (stake ZNU + Social DNA) |
| 2 | Ampliado | AUT ≥ 1.5 + ValueFlows |
| 3 | Completo | PGS ≥ 2.0 + Autómata v0.5+ |

### 5.3 Mesh DTN + Federación (Offline-First)
- **Protocolo:** DTN + BATMAN-adv + ActivityPub
- **Sync:** oportunista (mochileros, drones, LoRa)
- **Datos:** RAO (hash ERC-8004 + IPFS), ValueFlows, CAC, SOUL
- **Gobernanza:** CDS rotativo + CGC + η_fed > max(η)+0.1

---

## 6. MÉTRICAS CLAVE: EL SISTEMA NERVIOSO CUANTITATIVO

### 6.1 12 Vectores CAC
| Código | Vector | Target B | Target C |
|--------|--------|----------|----------|
| AUT_ALIM | Alimentaria | ≥2.0 | ≥3.5 |
| AUT_ENER | Energética | ≥2.5 | ≥4.0 |
| AUT_HABI | Hábitat | ≥1.5 | ≥3.0 |
| AUT_AGUA | Hídrica | ≥2.0 | ≥3.5 |
| AUT_SALU | Salud | ≥1.5 | ≥3.0 |
| AUT_PROD | Productiva | ≥1.5 | ≥3.0 |
| AUT_GOBE | Gobernanza | ≥2.0 | ≥3.5 |
| AUT_SOCI | Social | ≥2.0 | ≥3.5 |
| AUT_FINA | Financiera | ≥1.5 | ≥3.0 |
| AUT_CONO | Conocimiento | ≥1.5 | ≥3.0 |
| AUT_PSIC | Psicológica/Comunitaria (Copiosis Esc 2) | ≥1.5 | ≥3.0 |
| AUT_ESTE | Estética/Cultural (Copiosis Esc 8) | ≥1.0 | ≥2.5 |

**CAC Global** = media geométrica 12 vectores. **PGS** = CAC × η_fed × ξ_colectivo.

### 6.2 Métricas Compuestas
| Métrica | Fórmula | Target |
|---------|---------|--------|
| η | CDS_maturity × SUI_stability × CGC_integrity | ≥0.8 B |
| ξ | (Biomasa_neta + Energía_libre) / Entropía | >0 A |
| σᵤ | 1 - (Verif_ext_consistentes / Total) | <0.15 |
| MCI | Σ(Capital_i × Peso_i) / 8 | ≥3.0 C |
| ICS | % loop CDS→OAD→COS→ITC→FRS cerrado | ≥0.8 C |
| IVC | 1 - σᵤ×(1-η)×(1-ξ_norm) | ≥0.85 C |
| PGS | CAC_geo × η_fed × ξ_colectivo | ≥3.0 C |

### 6.3 Conversión Civilizatoria
| Métrica | Definición | Target |
|---------|------------|--------|
| MCC | Visitantes→Proto-CO 180d / total Revenue Demo | ≥15% |
| Chunk AT | Chunks canjeados / emitidos | >70% |
| ROI Demo | (Ingresos - Costos) / Fondo Solarpunk | >2.0 B |

---

## 7. MERCADO OBJETIVO Y PROPUESTA DE VALOR

### 7.1 Perfil Empírico Objetivo
> Cualquier colectivo humano —sin credenciales— que quiera transitar a soberanía operacional verificada.

| Segmento | Dolor | Solución HSCSG |
|----------|-------|----------------|
| Ecovillas | Dependencia externa, falta métricas | CAC vectorial, Autómata, CDS |
| Cooperativas | Extracción intermediarios | CaaS-BM, Trustlines, ZNU |
| Activistas climáticos | Burnout, greenwashing | Revenue Demo, dMRV, ReFi |
| Gobiernos/ONGs | MRV costoso | dMRV soberano, ESRS-ready |
| Empresas ESG/ReFi | Métricas verificables | Value Equation, RAO, CAC/IVC |

### 7.2 UVP
> **"El único sistema operativo que une base material, gobernanza cibernética, economía postmonetaria y métricas civilizatorias verificables en un nodo local portable, sin backend, federado offline-first."**

Diferenciadores: offline-first; métricas biofísicas; economía dual nativa; autómata soberano; federación ontogenética.

---

## 8. ARQUITECTURA TÉCNICA Y OPERATIVA: EL TEJIDO (USER ↔ AI ↔ PLATFORM)

### 8.1 Tres Capas Entrelazadas
- **Usuario:** Colectivo soberano (Social DNA, ValueFlows, CDS, CaaS, Trustlines, Tekitl, Soberanía)
- **IA:** Autómata HSCSG (Conway+MJ) + 10 Agentes Solarpunk + Colaberry + Orquestación + Talent Market
- **Plataforma:** HSCSG v15 OS (21 pantallas, `lib/` lógica pura, Zustand store, localStorage/IndexedDB)

**Retroalimentación (tiempo real + epoch 28d):**
1. Usuario → Plataforma: ValueFlows events
2. Plataforma → IA: SVD v2 + RAO + CAC
3. IA → Usuario: FRS, Lucidez, Matchmaking
4. IA → Plataforma: Value Equation → ZNU
5. Plataforma → Usuario: Dashboard CAC, Vesting, Trustlines
6. Usuario → IA: Feedback, Social DNA, CDS

### 8.2 Capa IA: Autómata + Ecosistema (Vessel+Talent)
```
VESSEL BASE: Scheduler, Retry, MJ Gate, SSOT (Disk is Truth), Registry
  ├─ AUTÓMATA SOBERANO: SOUL, Tiers supervivencia, Heartbeat, Spawn, E²R Search, MJ Gate
  ├─ AGENTES SOLARPUNK (10): Matchmaker, Care, Energy Optimizer, Governance, Conflict Mediator...
  └─ TALENT MARKET: Diagnóstico CAC, Resource Matchmaker, Energy, Governance, Conflict
ORQUESTACIÓN: Despacha tasks, Quality Gates MJ, Multi-agent meetings, Coaching 1:1
```

**E²R Tree Search:** EXPLORE → EXECUTE (MJ Gate) → REVIEW (SVD+RAO) → retroalimentar. Garantías: terminación, deadlock-free, quality gates.

### 8.3 Capa Plataforma: Arquitectura Interna
```
src/
├── app/ (App.tsx, layout/, screens/ 21 rutas)
├── components/ui.tsx
├── core/
│   ├── lib/ (automaton, caas, colaberry, metrics, orchestration, prioritize,
│   │         solarpunk, vesting, trustlines, tekitl, sovereignty, integral,
│   │         mundus, life, civilizaciones,
│   │         netbenefit, cds_jurados, copiosis  ← NUEVOS Copiosis)
│   └── state/ (store.ts, seed.ts, types.ts, <modulo>.ts por módulo)
├── shared/
└── skills/ (hscsg-repo-assimilation)
```

**Patrones Críticos:**
1. Lógica pura en `lib/` (sin React)
2. Store Zustand + `partialize` (catálogos estáticos = `const`)
3. Tipos TS estrictos por módulo
4. Asimilación: repo → lib/ + state/ + pantalla + nav + docs (backup + integration)

**Nuevos Módulos Copiosis (P0):** `lib/netbenefit.ts`, `lib/cds_jurados.ts`, `lib/copiosis.ts` + extensiones valueflows/metrics/solarpunk/caas/automaton.

## 9. FLUJO DE TRABAJO DEL USUARIO + INTELIGENCIA ARTIFICIAL + PLATAFORMA (RETROALIMENTACIÓN QUIRÚRGICA)

### 9.1 Ciclo Diario: Usuario ↔ Plataforma ↔ IA (Tiempo Real)

Usuario ejecuta acción (ValueFlows event) → Plataforma pasa a IA → Autómata evalúa MJ Gate → Si PASS: Value Equation emite ZNU + registra RAO; Si FAIL: deniega + auditoría Lucidez. Cada epoch 28d: SVD v2 sensores → CAC Calculator → FRS SignalPacket → Recommendation → CDS delibera → Decision Record → E²R Search actualiza planner.

### 9.2 Matriz de Interrelación (Tejido): Quién Hace Qué

| Evento | Usuario | Plataforma | IA | Artefacto | Gate MJ |
|--------|---------|-----------|----|-----------|---------|
| Aporte trabajo | Ejecuta labor (Tekitl) | LaborEvent ValueFlows | matchOffersNeeds, mintCoins, Value Eq | ZNU, Coins, Timeline | II, III |
| Necesidad | Request Priorizar | PrioritizeState | evaluateStepCostFeasibilities | netFeasibilidad [0,1] | I, II |
| Decisión | Delibera CDS | ratifyIntegralDecision | promoteRecommendationToIssue | DR inmutable RAO | III |
| Diagnóstico | 91 preguntas | sovereignty.answers | patternTheoryScore | Grid 13×7, Pattern Score | III |
| Intercambio don | Oferta/necesidad Solarpunk | matchOffersNeeds | postMonetaryIndex, evaluateSanctuary | Exchange VF | I, II, III |
| Crédito mutuo | Trustline + debitTransfer | openTrustline, debitTransfer | getDebt, path-finding | Debt bilateral | I, II, III |
| Vesting unlock | claimVesting() | totalUnlocked, releasable | verify hito AUT | ZNU liberado | I, II, III |
| Replicación nodo | CDS spawn | Deploy Vessel+Talent | Autómata madre guía | Nodo federado | I, II, III |
| Gobernanza dominio | Crea/decide en célula | `DomainNode` + `Pot` (colony.ts) | CDS weight por AUT×CDS | Decisión en RAO | I, II, III |
| Disputa | Abre dispute + evidencia | `EvidenceRecord` + CDS_Jurados | `reputationDecay` (penaliza desacuerdo) | Resolución en RAO | I, II, III |
| Identidad soberana | Atestigua humanidad (PoH) | `lib/identity.ts` (hash atestaciones) | verify 1-humano-1-nodo | Registro en RAO | I, II, III |
| Oráculo de hechos | Consulta ¿ocurrió? | `lib/oracle.ts` (Realitio→BN) | attestTruth multisig | Hecho en RAO | I, III |
| Escrow + arbitraje | Retiene fondo intercambio | `lib/solarpunk.ts` escrow | MJ Gate + CDS_Jurados | Liberación/retorno | I, II, III |
| Círculo biomimético | Crea círculo Dunbar (3-13/13-150) | `lib/gaia.ts` CircleTier | CDS por dominio | Registro en RAO | I, II |
| Bounty (misión) | Publica necesidad como misión | `lib/gaia.ts` Bounty | ZNU por AUT×CDS | Cumplimiento en RAO | II, III |
| Wisdom Council | Consejo para conflicto complejo | `lib/gaia.ts` WisdomCouncil | CNV + Kleros | Acuerdo en RAO | I, III |
| Propuesta de conocimiento | Crea propuesta (research/edu) | `lib/symbiosky.ts` addProposal | MJ Gate (anti-daño) | Registro en RAO | I, II |
| Voto por convicción | Bloquea ZNU ∝ confianza, score 1-10 | `lib/symbiosky.ts` symCastVote | CDS por convicción | Trazabilidad RAO | II, III |
| Reward por credibilidad | mean_score × mult (umbral <5) | `lib/symbiosky.ts` computeReward | AUT×CDS | Cumplimiento RAO | II |
| Decay por inactividad | 5%/año sobre exceso | `lib/symbiosky.ts` applyDecay | Anti-hoarding ZNU | Auditoría RAO | II |

### 9.3 Bucles de Retroalimentación Específicos


---

#### Bucle 2: **ValueFlows → Value Equation → ZNU → CaaS → Usuario** (Tiempo Real)
```
Usuario: Contribution (Labor/Care/Repair/Manufacture) 
         ↓
Plataforma: Evento ValueFlows + Contexto (AUT, CDS, Social DNA)
         ↓
IA (Autómata): Value Equation (cl, cm, ce, ca, cξ) → ZNU amount
         ↓
Plataforma: ZCS circula (demurrage), Vesting schedule actualizado, Trustlines creditline
         ↓
Usuario: Dashboard ZNU, Vesting releasable, Trustlines creditUsed, Tier eligibility
         ↓
Usuario: Nuevas contribuciones → Cierre del bucle
```

#### Bucle 3: **Integral Loop (CDS→OAD→COS→ITC→FRS→CDS)** (Continuo)
```
CDS (Priorizar/Colectivo): Issue → Deliberación → Decision Record
         ↓
OAD (Solarpunk/Tekitl): Certify Design (ecoScore) → Promote to COS
         ↓
COS (Tekitl/Autómata): Labor Events → Log Labor → Award Credits (ITC)
         ↓
ITC (ZNU/CaaS): TimeCredits (decay, no transferible) → Extinguish on Access
         ↓
FRS (Lucidez/Verificación/Colaberry): Ingest Signal → Diagnose → Recommend
         ↓
         → Promote Recommendation to Issue (advisory only) → CDS
         ↓
System Health Score (0-100) → Dashboard Integral → Usuario
```

#### Bucle 4: **Gobernanza Agentes: Performance Review → PIP → Rotación** (Continuo)
```
Orquestación: Coaching 1:1 persistente + Retrospectivas (memoria semántica)
         ↓
Métricas: CAC delta atribuible al agente, ValueFlows cumplidos, Quality Gates pass rate
         ↓
Colectivo (CDS): Evaluation → Plan Acompañamiento Individualizado (PIP) / Probation
         ↓
Si no mejora: Rotación Apoyada (Terminación) → Aprendizajes → Talent Market
         ↓
Nuevo Talent hereda memoria → Despliegue en Vessel → Cierre del bucle
```

### 9.4 Modo Lucidez (Ley III): Transparencia Radical Activable
- **Toggle real** (botón luna/sol en Header) — invierte tema a diurno, muestra banner Ley III
- **Revela bloques `.lucidez-raw`** con datos crudos + provenance:
  - En `/integral`: fórmula System Health + origen cada señal FRS
  - En `/automata`: SOUL raw + tier survival + MJ gate logs
  - En `/caas`: revenue streams MJ status (verde/ámbar/rojo) + payouts por AUT×CDS
  - En `/verificacion`: CAC vectorial raw + auditoría triaxial (interno, externo, federado)
- **Persiste en `localStorage`** — preferencia de usuario, no estado del sistema

---

## 10. HOJA DE RUTA: FASES 0-D + ITERACIONES ONEMANCOMPANY

### 10.1 Fases HSCSG (Civilizatorias)
| Fase | PGS/CAC | Entidad | Duración | Hitos Clave |
|------|---------|---------|----------|-------------|
| **Fase 0: Proto-CO** | < 1.0 | Colectivo Informal + Fiscal Sponsor | 0-3 meses | CAC Baseline, Micro-SaaS Deploy, 10 Casos Beta |
| **Fase A: CO Emergente** | 1.0-1.99 | DHO/SAC (Participatory Commons + Colony) | 3-9 meses | ERC-8004 Identities, FABSHIP Kit, ZCS/ZNU Activation, Autómata v0.1, Revenue Demo |
| **Fase B: CO Estructurado** | 2.0-2.99 | Asociación Civil / Cooperativa / ONG | 9-18 meses | Personería jurídica, Cuenta bancaria, Autómata v0.5+SUI+CGC, Microgrid+FABSHIP, PGS≥2.0 |
| **Fase C: CO Integral Maduro** | ≥ 3.0 | B-Corp / Benefit Corp / SAS BIC | 18-36 meses | B-Corp Cert, Autómata v1.0+Replicación, Ciudad 15-min Gratuita, ROE Alignment ≥70%, Federación 3 nodos |
| **Fase D: Federación Ontogenética** | ≥ 3.0 + η_fed > max+0.1 | Red Entidades Federadas (GRA/DHO Network) | Continuo | Tratado Federación, RAO sync, Treasury compartida, Emisiones propias |

### 10.2 Iteraciones OneManCompany (Capa Runtime Empresarial Soberano)
| Iteración | Objetivo | Meses | Entregable |
|-----------|----------|-------|------------|
| **1: Vessel + Talent** | Reestructurar 10 agentes Solarpunk + Autómata bajo arquitectura común | 1-2 | `VesselBase`, `TalentRegistry`, agents ensamblados runtime |
| **2: E²R Tree Search** | Sustituir loop Pensar→Actuar→Observar por E²R con garantías formales | 2-4 | Planner E²R, Quality Gates automatizadas (presupuesto, riesgo CAC, Ley I/II/III) |
| **3: Talent Market Soberano MVP** | Marketplace comunitario agentes AI certificados por mejora CAC | 3-6 | 5 Talents iniciales (CAC Express, Resource Matchmaker, Energy Optimizer, Governance Facilitator, Conflict Mediator) + Reputación ValueFlows |
| **4: Vibe Coding Guide** | Adoptar SSOT, TDD, Registry, No-silent-exceptions como reglas constitucionales dev | Inmediato | `HSCSG Technical Standards`, CI/CD con TDD coverage 80%, auditoría código existente |
| **5: Visualización "Solarpunk Office"** | Dashboard 2D/3D tiempo real nodo Cosateca (estética solarpunk, no pixel-art) | 4-8 | Mapa territorio: agua, alimentos, energía, agentes IA, colectivos, flujos ValueFlows |
| **6: Performance Reviews Formales** | Gobernanza agentes: PIP=Plan Acompañamiento, Probation=Adaptación Territorial, Termination=Rotación Apoyada | 6-10 | Workflows formales, coaching 1:1 estructurado, migración habilidades a Talent Market |
| **7: Multi-Agent Meetings Protocol** | Reuniones autónomas estandarizadas (agenda, acta, decisiones, quality gate humano) | 8-12 | Protocolo + integración ValueFlows + quality gate colectivo para decisiones alto riesgo |
| **8: Runtime Empresarial Soberano Lite** | Fork simplificado OMC: Colectivo=único actor humano, empleados=agentes soberanía | 12-18 | Pipeline: Colectivo→EA→COO→Equipo agentes→Quality Gate→Colectivo aprueba + Visualización solarpunk |
| **9: Replicación Nodos OMC-style** | Nodo maduro (PGS≥2.5) "da a luz" nodo hijo con onboarding guiado agente madre | 18-24 | Talent Market asigna agentes base → Vessel+Skills despliegan → onboarding → primer CAC → primera asamblea |
| **10: Revenue Demo Digital** | Visita virtual nodo Cosateca via Runtime Empresarial (chunks acceso ZNU/USDC) | 6-12 | Visitantes ven agentes trabajando, colectivos decidiendo, compran talleres/chunks |

---

## 11. MONETIZACIÓN Y SOSTENIBILIDAD: ZCS/ZNU + FONDO SOLARPUNK + ReFi

### 11.1 Arquitectura Monetaria Dual (ZCS + ZNU)
```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    ZCS (ZNU Circulation System)                              │
├─────────────────────────────────────────────────────────────────────────────┤
│  • Demurrage: 5% cada 28 días (epoch) sobre saldos > 3× DSI (100 ZNU/mes)  │
│  • Anti-acumulación: fuerza circulación, evita thesaurización               │
│  • Paridad biofísica: 1 ZNU ≡ kg comida / kWh energía / hora trabajo       │
│  • Oráculo Paridad Local: convierte ZNU ↔ moneda local para servicio deuda  │
│  • NO especulativo: demurrage + reserve ratios (Prosocial) + ξ₀ (reserva)  │
└─────────────────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                    ZNU (Unidad de Cuenta Nodo)                               │
├─────────────────────────────────────────────────────────────────────────────┤
│  • Emisión: Value Equation (cl, cm, ce, ca, cξ) por Autómata HSCSG         │
│  • Dividendo Soberano Inicial (DSI): 100 ZNU/mes/miembro (proof-of-life)   │
│  • Emisión por contribución: Labor, Care, Repair, Manufacture, Design      │
│  • Vesting: Schedule inmutable por hitos AUT (no tiempo), claim pathway única│
│  • Trustlines: Crédito mutuo ZNU entre pares (deuda bilateral simétrica)   │
│  • Bridge ReFi: 1 tCO₂e verificado = 500 ZNU (coeficiente local)           │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 11.2 Fondo Solarpunk: Motor de Financiamiento No Extractivo
| Fuente | Mecanismo | Destino | Gobernanza |
|--------|-----------|---------|------------|
| **25% Excedentes Autómata** | Automático cada epoch | Subvenciones nodos (PGS ≥ 1.5) | CDS Fondo + Autómata auditoría |
| **Ingresos ReFi** (Revenue Demo + créditos carbono/biodiversidad) | Conversión USDC via oráculo | Fondo Solarpunk (reserva) | CGC (Consejo Guardianes Commons) |
| **Revenue Demo / Turismo Soberanía** | Chunks ZNU/USDC visitantes | 50% Fondo / 50% Nodo anfitrión | Autómata valida MCC ≥ 15% |
| **Patrocinios ESG Corporativos** | Métricas verificadas (no créditos) | Proyectos específicos CAC vector | CDS nodo + CGC auditoría |
| **GoodDollar UBI Commons** | Subvenciones G$ (House of Alignment) | Proyectos alineados commons+territorio | Wallet ERC-8004 + ValueFlows reporting |

**Regla de oro:** **Cero equity, cero deuda con interés.** 100% bootstrap via Fondo Solarpunk + Revenue Demo + Subvenciones no reembolsables.

### 11.3 Acceso a Capital Institucional (dMRV Soberano)
El **Autómata HSCSG + RAO + SVD v2 + Federación DTN** *es* la infraestructura de verificación — **costo marginal de verificación → 0**.

| Estándar | Plantilla OpenSpec | Generación Automática | Verificación Externa |
|----------|-------------------|----------------------|---------------------|
| **ESRS / CSRD** | `templates/esrs_report.md` | Autómata cada epoch | Nodo federado rotativo + profesional independiente |
| **TCFD / TNFD** | `templates/tcfd_tnfd.md` | Autómata (climate/nature risk) | Delta = |score_indep - score_auto| > 0.15 → disputa |
| **SBTi FLAG** | `templates/sbti_flag.md` | CAC vectors → land sector | CDS federado + CGC + RAO evidence |
| **Verra / Gold Standard** | `templates/verra_vm0042.md` | CarbonMRV Talent (Sentinel-2 + QRNG) | Auditoría trimestral nodo federado |
| **Plan Vivo Biodiversity** | `templates/plan_vivo_bio.md` | BioMonitor Talent (eDNA + cámaras) | Índice Integridad Biótica + corredores |

---

## 12. DIFERENCIACIÓN Y BARRERAS DE ENTRADA

### 12.1 Moat Técnico (Hard to Replicate)
| Barrera | Descripción | Dificultad Replicación |
|---------|-------------|------------------------|
| **SVD v2 + RAO + dMRV integrado** | Sensores cuánticos (magnetómetros + QRNG + biosensores ξ) + registro inmutable 4D + pipeline MRV automático | Muy Alta (hardware + software + epistemología) |
| **Autómata Soberano (Conway + MJ)** | Agente que se sostiene regenerando base material, con SOUL, tiers supervivencia, E²R Search, MJ Gate | Alta (arquitectura agéntica + constitución + sustrato biofísico) |
| **Economía Dual Nativa (ZCS/ZNU + ReFi Bridge)** | Demurrage + paridad biofísica + Value Equation + bridge 1 tCO₂e = 500 ZNU | Alta (diseño monetario + oráculo local + integración ReFi) |
| **Federación DTN Offline-First** | Nodos funcionan sin internet, sincronización oportunista, RAO hash anclado ERC-8004 + IPFS | Media-Alta (protocolo DTN + gobernanza federada) |
| **Metodología Asimilación 4 Fases** | Desempaquetado → Limpieza → GitHub → Evolución + docs triple-perspectiva (User/LLM/HSCSG) | Media (proceso documentado, reproducible) |

### 12.2 Moat Epistémico (Filosófico)
- **Materialismo Jerárquico (Leyes I-III)** = Constitución inmutable, no negociable
- **Sistema Alráico (G1-CARMIS)** = Loop engineering universal, aplicable a cualquier dominio
- **Postmonetario real** = No "tokenomics" especulativo; ZNU = unidad de cuenta regenerativa
- **Soberanía territorial** = Life Radius 15km, 13 pilares, base material física (no digital twin-only)

### 12.3 Moat de Red (Network Effects)
- **Federación ontogenética:** Nodos maduros replican nodos hijos (mitosis celular) → crecimiento exponencial soberano
- **Talent Market Soberano:** Agentes certificados por mejora CAC real → biblioteca comunitaria que crece con cada nodo
- **ValueFlows registry:** Eventos inmutables compartidos → historial cooperativo verificable cross-nodos

---

## 13. RIESGOS Y SUPOSICIONES CRÍTICAS

### 13.1 Riesgos Técnicos
| Riesgo | Probabilidad | Impacto | Mitigación |
|--------|--------------|---------|------------|
| **SVD v2 hardware no disponible/accesible** | Media | Alto | Fallback: sensores IoT commodity + QRNG software + auditoría manual |
| **DTN mesh no alcanza densidad crítica** | Media | Medio | Híbrido: DTN + LoRa + mochileros + sincronización programada; ActivityPub fallback online |
| **Autómata MJ Gate false positives/negatives** | Alta | Crítico | Auditoría triaxial (interno/externo/federado) + Modo Lucidez + rollback inmutable |
| **ZNU demurrage causa fricción usuaria** | Alta | Medio | UX: dashboard muestra "valor real" (paridad biofísica) no nominal; DSI garantiza base |
| **localStorage limits (5-10MB) en navegador** | Media | Medio | Partialize store; catálogos estáticos en `lib/` const; compresión RAO; IndexedDB para RAO completo |

### 13.2 Riesgos Filosóficos / Gobernanza
| Riesgo | Probabilidad | Impacto | Mitigación |
|--------|--------------|---------|------------|
| **Dilución propósito civilizatorio (OMC absorption)** | Alta | Crítico | Mapa terminológico explícito (CEO→Colectivo, PIP→Acompañamiento, Fire→Rotación); "Sobrevivencia ≠ Propósito" aforismo constitucional |
| **Captura epistémica (autorreporte sesgado)** | Media | Alto | Protocolo Verificación Externa obligatorio cada 3 ciclos; Δ > 0.15 → disputa pública Knowledge Commons |
| **Jerarquías invisibles en agentes (PIP/Fire)** | Media | Alto | PIP = Plan Acompañamiento (support-driven); Termination = Rotación Apoyada (migra memoria a Talent Market) |
| **Dependencia OneManCompany (proyecto externo)** | Baja | Medio | Fork propio (SolarpunkCompany/AuravanaOS); Vessel+Talent/E²R/SSOT son patrones, no deps |

### 13.3 Riesgos Económicos / Legales
| Riesgo | Probabilidad | Impacto | Mitigación |
|--------|--------------|---------|------------|
| **ZNU clasificado como valor/seguridad (regulador)** | Media | Alto | ZNU = unidad de cuenta interna, no transferible externamente, demurrage, paridad biofísica, no especulativo; Legal opinion previa Fase B |
| **Fondo Solarpunk insuficiente para bootstrap** | Media | Medio | Diversificación: GEF-SGP, CEPF, BIOFIN, Climate-KIC, DisCO Fund, GoodDollar, ROE Grants + Revenue Demo |
| **Personería jurídica DHO/SAC no reconocida** | Baja | Medio | Path: Fiscal Sponsor → DHO/SAC (Colony/DisCO) → Asociación Civil/Coop → B-Corp; cada salto documentado |

### 13.4 Suposiciones Críticas (Validar Temprano)
1. **SVD v2 sensores cuánticos** existen y son desplegables en terreno por perfiles empíricos (costo < $500/nodo)
2. **Value Equation** produce ZNU suficiente para sostener DSI (100 ZNU/mes/miembro) + operaciones nodo
3. **Colectivos humanos** adoptan CDS + Social DNA + ValueFlows sin fricción cultural insalvable
4. **Autómata HSCSG** puede ejecutar E²R Search + MJ Gate en hardware local (RPi 5 / mini PC) sin cloud
5. **Federación DTN** alcanza sincronización suficiente para RAO consistency (η_fed > max+0.1)
6. **Revenue Demo** genera MCC ≥ 15% y Chunk redemption > 70% (validar con 10 casos beta Fase 0)

---

## 14. ARQUITECTURA FINANCIERA: ECONOMÍA HÍBRIDA 3 NIVELES

### 14.1 Tres Niveles (HSCSG v1.8 + FABSHIP/HUMANIA)

| Nivel | Descripción | Instrumentos | Gobernanza | Ejemplo HSCSG |
|-------|-------------|--------------|------------|---------------|
| **Nivel 1: Trueque Tokenizado (PAR/Túmin/G1)** | Economía circular local 1:1 tiempo/servicio | ValueFlows registry + asamblea trimestral define equivalencias | Asamblea local + CDS | ZCS nativo: *trueque tokenizado* §14.9; Índice Reciprocidad PAR > 60% Fase C |
| **Nivel 2: Dividendo Soberano + Recompensa BN (ZNU/NBR)** | Ingreso base garantizado + recompensa por Beneficio Neto | DSI (100 ZNU/mes) + NetBenefitFlow (NBR→ZNU via claimVesting) + Value Equation | CDS + CDS_Jurados (pesos BN) + **Dominios/Pots Colony** (reparto por célula vía AUT×CDS) | CaaS Tier 1 (necesidades gratis) + Vesting por hitos AUT + NBR Gateways (lujos) |
| **Nivel 3: Puente ReFi + Capital Institucional (USDC/€)** | Conversión a moneda fiduciaria para comercio externo y deuda heredada | Oráculo Paridad Local + ZCS/ZNU + ReFi Bridge (Toucan, Regen, Plan Vivo) | CGC + Autómata auditoría | 1 tCO₂e = 500 ZNU; ESRS/CSRD/TCFD/TNFD/SBTi auto-generados vía dMRV |

**Modo Anfibio (DeseOS):** el nodo elige `nodeMode: 'postmonetario' | 'conectado'`. En postmonetario todo valor es ZNU/CaaS (sin USD). En conectado, los bienes del catálogo (escalera 5M) se exponen en USD/USDC vía `priceParity` (oráculo ReFi), manteniendo la misma lógica de cálculo (Pagos/Pauta anfibios). MJ Gate bloquea ventas externas ciegas (anti-endeudamiento). Ver §2.20.

### 14.2 NBR-ZNU Hybrid Flow (Integración Copiosis)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    FLUJO HÍBRIDO NBR → ZNU → ReFi                            │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  ACCIÓN REGENERATIVA                                                        │
│       ↓                                                                     │
│  BENEFICIO NETO (8 escalas, pesos CDS_Jurados)                              │
│       ↓                                                                     │
│  NetBenefitFlow (NBR)  ──→  INTRANSFERIBLE, QUEMABLE                       │
│       ↓                                                                     │
│  claimVesting() (hito AUT verificado + CDS aprueba)                         │
│       ↓                                                                     │
│  ZNU LÍQUIDO  ──→  ZCS (demurrage 5%/28d) + Trustlines (crédito mutuo)      │
│       ↓                                                                     │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐                          │
│  │  NECESIDADES │  │   LUJOS     │  │  CAPITAL    │                          │
│  │   (gratis)   │  │ (precio NBR)│  │  (gratis    │                          │
│  │  CaaS Tier 1 │  │  Gateway    │  │  creadores) │                          │
│  └─────────────┘  └─────────────┘  └─────────────┘                          │
│       ↓                                                                     │
│  Oráculo Paridad Local → USDC → ReFi Markets → Fondo Solarpunk             │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

**Diferencias clave con modelo previo:**
- **NBR ≠ ZNU**: NBR = "medalla" (recompensa final, intransferible, quemable). ZNU = "dinero operativo" (circula, demurrage, Trustlines).
- **GoodType obligatorio**: Todo ValueFlow tiene `goodType: need|luxury|capital` → reglas de acceso/pricing automáticas.
- **CDS_Jurados calibra Value Equation**: Pesos `W_i` de 8 escalas BN son parámetros vivos ajustados por sorteo democrático.

### 14.3 Three-Goods-Type Architecture (Necesidades / Lujos / Capital)

| Tipo | Acceso | Pricing | Recompensa Proveedor | Ejemplo HSCSG |
|------|--------|---------|---------------------|---------------|
| **NEED** (`goodType: need`) | Gratis ∀ miembros CaaS Tier 1+ | Precio = 0 (sistema paga) | NetBenefitFlow por BN (escalas 1,3,6+) | Comida, energía, vivienda, salud, educación → CaaS Tier 1 |
| **LUXURY** (`goodType: luxury`) | Usuario paga `luxuryPriceNBR` | Productor fija precio NBR (Gateway, 2 llaves) | NetBenefitFlow por BN (escalas 2,4,7,8) + ZNU vía Value Eq | Comida gourmet, instrumentos, viajes, diseño de autor → Solarpunk Gateway |
| **CAPITAL** (`goodType: capital`) | Gratis para `verifiedProducer` (`AUT_PROD ≥ threshold`) | Costo = 0 para creador | NetBenefitFlow por BN de habilitar producción ajena | Tierra, herramientas, maquinaria, infra → FABSHIP/CaaS `capitalAccessTier` |

### 14.4 Value Equation Extendida (con NetBenefit)

```
Value Equation HSCSG v15 + Copiosis:
─────────────────────────────────────
ZNU_emitido = cl × Labor + cm × Care + ce × EcoRegen + ca × CapitalEnable + cξ × Extropy - cδ × Damage

Donde:
- cl, cm, ce, ca, cξ = coeficientes base (calibrados por CDS_Jurados vía W_i de 8 escalas BN)
- cδ = coeficiente de daño (Escala 1,3,6 normalizadas: necesidades no cubiertas, salud planetaria, resiliencia)
- Damage = Σ(Daños a personas + planeta) normalizado 0–1
- Labor, Care, EcoRegen, CapitalEnable, Extropy = flujos ValueFlows medidos (SVD v2 + RAO)

NetBenefitFlow (NBR) emitido cuando BN = Σ(W_i × S_i) - Damage > 0
  → claimVesting() → ZNU líquido (tras validación CDS + hito AUT)
```

---

## 15. COSATECA OS vs HSCSG v15 OS: DOBLE CAPA (LOCAL + SOCIAL)

### 15.1 Arquitectura de Doble Capa (Pivote 2026-08-09)

| Capa | Nombre | Responsabilidad | Stack | Estado |
|------|--------|-----------------|-------|--------|
| **Local (Offline-First)** | **HSCSG v15 OS** | Base material, CaaS, ZNU, Lucidez, Autómata, Vesting, Trustlines, Tekitl, Soberanía, Integral, FABSHIP, Métricas CAC, RAO, FRS, CDS_Jurados, NetBenefitEngine | React 18 + TS + Vite 5 + Zustand 4 + localStorage/IndexedDB (sin backend) | **Activo** (`Isaacko0/HSCSG_v15_OS`) |
| **Social (Online)** | **Hylo-Cosateca** (fork `Isaacko0/hylo-cosateca`) | Grupos, ofertas/necesidades, tracks, API, Auth, Mobile/Desktop, Federation ActivityPub, Notifications | Hylo (Ruby on Rails + React Native + Postgres + Redis) | **En desarrollo** (Neon PG + Upstash Redis remotos) |

### 15.2 Mapeo de Funcionalidades

| Función | HSCSG v15 OS (Local) | Hylo-Cosateca (Social) | Integración |
|---------|---------------------|------------------------|-------------|
| **Identidad** | ERC-8004 + Social DNA (local) | OAuth/OIDC + ERC-8004 bridge | SSO vía ERC-8004, Social DNA ↔ Profile |
| **Economía** | ZCS/ZNU + Vesting + Trustlines + NetBenefitFlow | Hylo Credits + Offers/Needs | `luxuryPriceNBR` ↔ Hylo price; `goodType` sync |
| **Gobernanza** | CDS + CDS_Jurados + RAO (local) | Hylo Circles + Proposals + Voting | Decision Records ↔ Hylo proposals (bidireccional) |
| **Base Material** | AUT vectors, SVD v2, FABSHIP, Microgrid | — (datos locales) | Export RAO snapshots → Hylo posts |
| **Federación** | DTN Mesh + η_fed + RAO sync | ActivityPub + Hylo Federation | Dual sync: DTN (offline) + AP (online) |
| **Autómata** | Conway Agent + MJ Gate + NetBenefitEngine | Hylo Bots + Sidekiq jobs | Autómata local emite señales → Hylo notifications |
| **Métricas** | CAC 12 vectores, PGS, ICS, IVC, η, ξ, σᵤ | Hylo analytics + engagement | Unified dashboard (Solarpunk Office) |

### 15.3 Fixes Windows ya aplicados en Hylo-Cosateca Fork

| Fix | Archivo | Problema Original | Solución |
|-----|---------|-------------------|----------|
| **Build shared Windows** | `build-shared.cjs` | `find` + `sh` Unix-only | Node.js puro (`fs`, `child_process`) |
| **Procfile.dev** | `Procfile.dev` | `DELAY_START=5` (comando Unix) | Removido `DELAY_START`; `foreman` nativo Windows |
| **Knexfile SSL** | `knexfile.js` | SSL required para Neon/Upstash | `rejectUnauthorized: false`, pool pequeño |
| **Config local** | `config/local.js` | Hardcoded localhost | ENV-driven, gitignored |
| **Migración idempotente** | `20190115_add-deferrable.js` | `ALTER TABLE` falla si existe | `IF NOT EXISTS` / check previo |

### 15.4 Flujo de Datos Doble Capa

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                        DOBLE CAPA: LOCAL ↔ SOCIAL                            │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   ┌──────────────────────┐         SYNC (DTN + ActivityPub)         ┌──────────────────────┐
│   │    HSCSG v15 OS      │ ◄────────────────────────────────────────► │   HYLO-COSATECA      │
│   │    (LOCAL NODE)      │         RAO hash (ERC-8004 + IPFS)         │    (SOCIAL LAYER)    │
│   ├──────────────────────┤                                              ├──────────────────────┤
│   │ • Base Material      │  Offline-first:                            │ • Groups / Circles   │
│   │ • CaaS + ZNU + NBR   │  - localStorage/IndexedDB                  │ • Offers/Needs       │
│   │ • Vesting + Trustlines│  - DTN Mesh (BATMAN-adv)                  │ • Tracks / Projects  │
│   │ • Autómata + MJ Gate │  - RAO append-only (hash anclado)          │ • API + Auth (OIDC)  │
│   │ • CDS + CDS_Jurados  │  - Sync oportunista (mochileros, LoRa)     │ • Mobile/Desktop     │
│   │ • NetBenefitEngine   │  - η_fed > max(η)+0.1 para consistencia    │ • Notifications      │
│   │ • FABSHIP + SVD v2   │                                            │ • Federation AP      │
│   │ • CAC 12 vectores    │  Online:                                   │                      │
│   │ • RAO + FRS + Lucidez│  - ActivityPub (Hylo native)               │                      │
│   │ • Modo Lucidez       │  - Webhooks → Autómata local               │                      │
│   └──────────────────────┘                                              └──────────────────────┘
│                                                                             │
│   PUENTE: ERC-8004 Identity + ValueFlows Events + RAO Sync                │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 16. CONCLUSIÓN: SOBERANÍA OPERACIONAL VERIFICABLE

HSCSG v15 OS + Hylo-Cosateca + integración Copiosis + integración Colony + integración Kleros/Proof-of-Humanity + integración DeseOS/Contento.pro + integración Gaia Confederation + integración iambrainstorming + integración Symbiosky + integración automaton/alook/ponytail (pipeline anidado) + integración Gaia Union (organismo vivo) constituye el **primer sistema operativo civilizatorio completo** que une:

1. **Base material verificada** (SVD v2 + AUT 12 vectores + FABSHIP)
2. **Gobernanza cibernética autónoma** (CDS + CDS_Jurados + RAO + FRS + Estigmergia + dominios/pots Colony por reputación + **justicia Kleros / identidad soberana PoH**)
3. **Economía postmonetaria híbrida** (NBR-ZNU-ReFi, 3 tipos bienes, 3 niveles financieros, demurrage, paridad biofísica)
4. **Autómata soberano** (Conway Agent + MJ Gate + NetBenefitEngine + E²R Search + Vessel/Talent + **ejecutor corobot/governor Kleros**)
5. **Doble capa resiliente** (Local offline-first + Social online + Federación DTN/AP)
6. **Hoja de ruta con validación empírica** (Fase 0 Proto-CO: 10 casos beta, 90 días)

> **"No pedimos permiso. Construimos el nodo. Medimos la base material. Emitimos ZNU por Beneficio Neto real. Nos federamos cuando η_fed > max(η)+0.1. El resto es ruido."**

---

## ANEXO A: GLOSARIO UNIFICADO

| Término | Definición | Sección |
|---------|------------|---------|
| **AUT_** | Vectores de Autonomía (12): ALIM, ENER, HABI, AGUA, SALU, PROD, GOBE, SOCI, FINA, CONO, **PSIC**, **ESTE** | §6.1 |
| **BN / NetBenefit** | Beneficio Neto: Σ(Beneficios) - Σ(Daños) en 8 escalas ponderadas por CDS_Jurados | §2.17, §14.4 |
| **BN_Gradient_Signal** | Señal de coordinación FRS: coordenadas (ubicación, sector, BN_potencial) para Autómata/Colaberry | §2.17.5, §9.3 |
| **CaaS-BM** | Comunidad como Servicio de Base Material: acceso por contribución AUT×CDS (no pago USDC) | §3.4 |
| **CAC** | Coeficiente de Autonomía Civilizatoria: media geométrica de 12 vectores AUT | §6.1 |
| **CDS** | Consent Decision System: gobernanza por consentimiento, Decision Records append-only en RAO | §2.2, §5.6 |
| **CDS_Jurados** | Sub-módulo CDS: sorteo, anonimato, rotación 28d, pesos `W_i` acotados, actas RAO | §2.17.2 |
| **CGC** | Consejo Guardianes Commons: gobernanza federativa, auditoría Fondo Solarpunk | §5.3, §11.2 |
| **cδ** | Coeficiente de daño en Value Equation (Escala 1,3,6 BN normalizadas) | §14.4 |
| **DSI** | Dividendo Soberano Inicial: 100 ZNU/mes/miembro (proof-of-life) | §11.1 |
| **Estigmergia** | Autoorganización vía rastros en el entorno (señales BN/NBR); principio organizador Copiosis/HSCSG | §2.17, §4.3 |
| **FABSHIP** | Fábrica + Nave (Earthship 6 vectores → AUT_*; FabLab principles; ValueFlows productivos) | §2.14, §5.1-5.5 |
| **FRS** | Feedback & Recommendation System: Ingest Signal → Diagnose → Recommend → CDS (Integral Loop) | §2.2, §5.6 |
| **goodType** | Clasificación obligatoria ValueFlows: `need` | `luxury` | `capital` (Copiosis 3 tipos bienes) | §2.17.2, §14.3 |
| **Hylo-Cosateca** | Fork de Hylo (Isaacko0/hylo-cosateca): capa social/comunitaria (grupos, ofertas, API, auth, mobile) | §15 |
| **ICS** | Integral Coordination Score: % loop CDS→OAD→COS→ITC→FRS cerrado | §6.2 |
| **IVC** | Integral Verification Coefficient: 1 - σᵤ × (1 - η) × (1 - ξ_norm) | §6.2 |
| **Leyes I-III MJ** | I: No dañar base material. II: Ganarse la vida soberanizando (AUT×CDS). III: Lucidez (nunca engañar) | §2.1 |
| **luxuryPriceNBR** | Precio NBR en ofertas Solarpunk (Gateway 2 llaves: productor fija + usuario decide) | §2.17.2, §14.3 |
| **MCC** | Memetic Conversion Coefficient: visitantes → Proto-CO en 180d / total visitantes Revenue Demo | §6.3 |
| **MCI** | Multi-Capital Index: 8 formas capital (Material, Vivo, Social, Intelectual, Experiencial, Cultural, Espiritual, Financiero) | §2.10, §6.1 |
| **NetBenefitFlow** | Nuevo tipo ValueFlows: recompensa BN intransferible (NBR) → claimVesting() → ZNU líquido | §2.17.2, §14.2 |
| **NBR** | Net Benefit Reward (Copiosis): intransferible, ex nihilo por BN, quemable al uso | §2.17, §14.2 |
| **NBRGateway** | Mecánica lujos: precio NBR quemado → ZNU a productor vía Value Equation | §2.17.2, §14.3 |
| **OAD** | Open Appraisal Design: certificación ecoScore de diseños (Integral Loop) | §5.6 |
| **PGS** | Puntaje Global Soberanía: CAC_geo_mean × η_fed × ξ_colectivo | §6.2 |
| **RAO** | Registro de Auditoría Ontológica: append-only, hash ERC-8004 + IPFS, inmutable | §2.2, §5.6 |
| **SUI** | Subsystem User Interface: estabilidad interfaz usuario (métrica η) | §6.2 |
| **SybilResistance** | Resistencia a ataques Sybil: ERC-8004 + Social DNA + Web of Trust + RAO anclaje | §2.17.3 |
| **Value Equation** | Fórmula emisión ZNU: cl×Labor + cm×Care + ce×EcoRegen + ca×CapitalEnable + cξ×Extropy - cδ×Damage | §3.2, §14.4 |
| **W_i** | Pesos de las 8 escalas BN, ajustados por CDS_Jurados (rango acotado, transparente) | §2.17.2 |
| **ZCS** | ZNU Circulation System: demurrage 5%/28d, anti-acumulación, paridad biofísica | §11.1 |
| **ZNU** | Unidad de Cuenta Nodo: emisión Value Equation, DSI, Trustlines, ReFi bridge | §11.1 |
| **η** | Estructura Organizativa: CDS_maturity × SUI_stability × CGC_integrity | §6.2 |
| **ξ** | Extropía Metabólica: (Biomasa_neta + Energía_libre) / Entropía_sistema | §6.2 |
| **σᵤ** | Incertidumbre Soberana: 1 - (Verificaciones_externas_consistentes / Total) | §6.2 |

---

## ANEXO B: TABLA DE MAPEO REPOS ASIMILADOS → MÓDULOS HSCSG

| Repo Origen | Módulo HSCSG | Archivo `lib/` | Archivo `state/` | Pantalla | Docs Integración |
|-------------|--------------|----------------|------------------|----------|------------------|
| Conway Automaton | Autómata Soberano | `automaton.ts` | `automaton.ts` | `/automata` | `automaton_integration.md` |
| CaaS (C2C) | CaaS · Comunidad | `caas.ts` | `caas.ts` | `/caas` | `CaaS_integration.md` |
| Berry Vesting | Vesting · ZNU | `vesting.ts` | `vesting.ts` | `/vesting` | `berryvesting_integration.md` |
| Trustlines Protocol | Trustlines · Crédito | `trustlines.ts` | `trustlines.ts` | `/trustlines` | `trustlines_integration.md` |
| Tekitl | Tekitl · Proyectos | `tekitl.ts` | `tekitl.ts` | `/tekitl` | `tekitl_integration.md` |
| Solarpunk (x2) | Solarpunk · Don | `solarpunk.ts` | `solarpunk.ts` | `/solarpunk` | `solarpunk_integration.md` |
| Colaberry (Eliza) | Colaberry · Agente | `colaberry.ts` | `colaberry.ts` | `/colaberry` | `colaberry_integration.md` |
| Prioritize (ZiadJ) | Priorizar · Colectivo | `prioritize.ts` | `prioritize.ts` | `/priorizar` | `prioritize_integration.md` |
| Sovereignty Hub + UI | Soberanía · 13 Pilares | `sovereignty.ts` | `sovereignty.ts` | `/soberania` | `sovereignty_integration.md` |
| Integral Collective (9) | Integral · Loop | `integral.ts` | `integral.ts` | `/integral` | `integral_integration.md` |
| Paperclip (resolveskills) | Orquestación | `orchestration.ts` | `orchestration.ts` | `/orquestacion` | *(pendiente)* |
| Sci-Hive IDETRA | Mundus · Unidad | `mundus.ts` | `mundus.ts` | `/mundus` | `scihive_mundus_integration.md` |
| GuiFV/life (Django) | Life · Organizador | `life.ts` | `life.ts` | `/life` | `guifv_life_integration.md` |
| Auravana/One Community/TVP/RBE | Civilizaciones | `civilizaciones.ts` | `civilizaciones.ts` | `/civilizaciones` | `civilizaciones_sinergia.md` |
| **Copiosis (v7.1)** | **NetBenefitEngine + CDS_Jurados + Adapter** | **`netbenefit.ts`, `cds_jurados.ts`, `copiosis.ts`** | *(extend existing)* | **(extend `/integral`, `/caas`, `/solarpunk`, `/automata`)** | **`copiosis_integration.md`, `copiosis_backup.md`** |

---

## ANEXO C: VALUE EQUATION & VALUEFLOWS TYPES

### Value Equation (HSCSG v15 + Copiosis)

```typescript
// lib/metrics.ts / lib/netbenefit.ts
interface ValueEquationParams {
  cl: number;  // Labor coefficient
  cm: number;  // Care coefficient  
  ce: number;  // EcoRegen coefficient
  ca: number;  // CapitalEnable coefficient
  cξ: number;  // Extropy coefficient
  cδ: number;  // Damage coefficient (Copiosis: Escala 1,3,6)
}

interface NetBenefitScales {
  scale1_needs: number;        // W_1 × S_1
  scale2_wellbeing: number;    // W_2 × S_2 → AUT_PSIC
  scale3_planet: number;       // W_3 × S_3
  scale4_knowledge: number;    // W_4 × S_4
  scale5_efficiency: number;   // W_5 × S_5
  scale6_resilience: number;   // W_6 × S_6
  scale7_equity: number;       // W_7 × S_7
  scale8_beauty: number;       // W_8 × S_8 → AUT_ESTE
  damage: number;              // Σ(Daños) normalizado 0–1
}

function calculateBN(scales: NetBenefitScales): number {
  const benefit = Object.values(scales).slice(0, 8).reduce((a, b) => a + b, 0);
  return benefit - scales.damage;
}

function calculateZNU(params: ValueEquationParams, flows: ValueFlows, damage: number): number {
  return params.cl * flows.labor + params.cm * flows.care + params.ce * flows.ecoRegen 
       + params.ca * flows.capitalEnable + params.cξ * flows.extropy - params.cδ * damage;
}
```

### ValueFlows Types Extendidos (Copiosis)

```typescript
// lib/valueflows.ts
type GoodType = 'need' | 'luxury' | 'capital';

interface ValueFlowEvent {
  // ... campos existentes ...
  goodType: GoodType;                    // OBLIGATORIO (Copiosis)
  luxuryPriceNBR?: number;               // Solo si goodType === 'luxury'
  capitalAccessTier?: number;            // Solo si goodType === 'capital'
  bnScore?: number;                      // Beneficio Neto calculado
  damageScore?: number;                  // Daño calculado
  netBenefitFlowId?: string;             // Link a NetBenefitFlow emitido
}

interface NetBenefitFlow {
  id: string;
  recipient: string;                     // Miembro (ERC-8004)
  bnScore: number;                       // BN > 0
  scales: NetBenefitScales;              // Detalle 8 escalas + damage
  juradosWeights: number[];              // W_i usados (CDS_Jurados)
  timestamp: number;
  status: 'pending' | 'vested' | 'claimed';
  vestingSchedule?: VestingSchedule;     // Hitos AUT para liberación
}

// Solarpunk Offer extendido
interface SolarpunkOffer {
  id: string;
  provider: string;
  title: string;
  description: string;
  goodType: GoodType;                    // 'need' | 'luxury' | 'capital'
  luxuryPriceNBR?: number;               // Precio NBR (quemado al usar)
  // ... campos existentes ...
}

// CaaS Member extendido
interface CaaSMember {
  id: string;
  // ... campos existentes ...
  capitalAccessTier: number;             // 0=none, 1=basic, 2=advanced, 3=full
  verifiedProducer: boolean;             // AUT_PROD ≥ threshold
}
```

---

*Documento fundacional v1.0 | Zeitnus / Isaac Ko | Agosto 2026*  
*Metodología: 4 Fases (Desempaquetado → Limpieza → GitHub → Evolución) + Sistema Alráico (G1-CARMIS)*  
*Fuentes: 24 integraciones `HSCSG_v15_OS/docs/` + informes HSCSG v14 + OneManCompany + IDETRA + **Copiosis v7.1 (backup + integración completa)** + **AuroraGov (backup + integración completa)** + **Shivarthu (backup + integración completa)** + **CompAI CRM (backup + integración completa)** + **Didacta Community (backup + integración completa, +18 conceptos)** + **Urbanika (12 repos: backup + integración agrupada, +22 conceptos)** + **block/buzz (backup + integración, +14 conceptos, capa Nostr/agentes)***  
*Backup Copiosis: `docs/copiosis_backup.md` | Integración: `docs/copiosis_integration.md`*  
*Backup AuroraGov: `docs/aurora_gov_backup.md` | Integración: `docs/aurora_gov_integration.md`*  
*Backup Shivarthu: `docs/shivarthu_backup.md` | Integración: `docs/shivarthu_integration.md`*  
*Backup CompAI CRM: `docs/compai_crm_backup.md` | Integración: `docs/compai_crm_integration.md`*  
*Backup Didacta: `docs/didacta/didacta_backup.md` | Integración: `docs/didacta/didacta_integration.md`*  
*Backup Urbanika (12): `docs/urbanika/*_backup.md` | Integración: `docs/urbanika/urbanika_integration.md`*  
*Backup Buzz: `docs/buzz/buzz_backup.md` | Integración: `docs/buzz/buzz_integration.md`*  
*Backup NEAR: `docs/near/near_backup.md` | Integración: `docs/near/near_integration.md`*  

---

## 17. IMPLEMENTACIÓN UI — SESIÓN 2026-08-12 (Evidence Model + Delegación + Capabilities)

Esta sesión cerró el ciclo **asimilación → implementación real** de 4 repos en HSCSG v15 OS. No fue solo documentación: el código está en `src/` y pusheado a `origin/master`.

### 17.1 Stack de asimilación (4 repos, +78 conceptos nacidos en `docs/NUEVOS_CONCEPTOS_vs_EVOLUCION.md`)
| Repo | Aporte core | Módulo HSCSG resultante |
|------|-----------|------------------------|
| Gaia Union | Organismo vivo (9 sistemas vitales) | `lib/gaiaunion.ts` (ontología del vaso) |
| AuroraGov | Departamentos por expertise, Vouching, Randomized Tax | `lib/delegation.ts` (Power Delegation) |
| Shivarthu | Score Schelling outlier removal, Commit-Reveal, Voto por Mérito | `lib/evidence.ts` (scoreSchelling) |
| CompAI CRM | Evidence Model (no confidence), Fact Bands, Write Path 3 reglas, Capabilities optional, Data Boundaries | `lib/evidence.ts` (scoreEvidence/bandFor) + `lib/capacidades.ts` |

### 17.2 Archivos creados/modificados (P0a + P0b + P1 + P2)
**Lógica**
- `src/core/lib/evidence.ts` ✨ NUEVO — `scoreEvidence`, `bandFor`, `scoreSchelling`, `WEIGHTS`, tipos `EvidenceKind`/`FactBand`/`Evidence`/`Scored`
- `src/core/lib/delegation.ts` ✨ NUEVO — `delegatePower`, `revokeDelegation`, `delegationTree`, `expertInfluence`
- `src/core/lib/capacidades.ts` ✨ NUEVO — `toggleCapability`, `nodePerimeter`
- `src/core/lib/kleros.ts` — `addEvidence` calcula `band` automáticamente
- `src/core/lib/integral.ts` — `raiseIssueWithEvidence` auto-ejecuta si `VERIFIED`
- `src/core/state/{delegation,capacidades}.ts` ✨ NUEVO — tipos + seed
- `src/core/state/kleros.ts` — `EvidenceRecord` extendido con `kind`/`band`/`score`/`detail`
- `src/core/state/integral.ts` — `Issue` extendido con `evidence`/`band`/`score`
- `src/core/state/store.ts` — cableo de 3 módulos nuevos + acciones

**UI**
- `src/components/ui.tsx` — `FactBandBadge`, `EvidenceLedger`, `ScoreSchellingChart`
- `src/app/screens/Justicia.tsx` — adjunta evidencia con `kind` + URL → banda calculada; chart Schelling
- `src/app/screens/Integral.tsx` — Fact Bands en issues; VERIFIED auto-ejecuta; Lucidez 2.0 ("por qué el nodo decidió")
- `src/app/screens/Delegacion.tsx` ✨ NUEVO — árbol de delegación por dominio + influencia de expertos
- `src/app/screens/Capacidades.tsx` ✨ NUEVO — modo anfibio + capabilities + perímetro (jardín cerrado)
- Router: `App.tsx`, `Aside.tsx`, `Header.tsx` (SCREENS), `i18n.ts` — 2 rutas nuevas

**Tests (P2)**
- `vitest.config.ts` ✨ NUEVO — alias `@core`/`@components`/`@app` + environment node
- `src/core/lib/evidence.test.ts` ✨ NUEVO — 9 tests
- `src/core/lib/delegation.test.ts` ✨ NUEVO — 5 tests
- `src/core/lib/capacidades.test.ts` ✨ NUEVO — 6 tests

### 17.3 Principio rector de la nueva UI (Ley III aplicada a la epistemología)
> **Evidencia sobre Confianza.** El nodo reporta *qué observó* (Evidence Model), no *qué tan seguro está* (prohibido calificar su propia certeza). VERIFIED (≥0.85 + primary) auto-ejecuta; PROBABLE/POSSIBLE requieren ratificación humana; contradiction atenúa bajo 0.45.

### 17.4 Estado de verificación
- `npm run build` → **0 errores** (1669 módulos transformados)
- `npx vitest run` → **20/20 tests pasan**
- Git: 5 commits pusheados a `origin/master` en la sesión:
  - `0996e4b` docs: asimilación CompAI CRM
  - `924d4e6` feat(justicia): Evidence Model + Score Schelling
  - `f544f0c` feat(integral): P0b Fact Bands + Lucidez 2.0
  - `001db4a` feat(P1): Delegación + Capabilities
  - `6be1c7a` test(P2): 20 tests vitest

### 17.5 Pendiente (siguiente sesión)
- P3: `commit-reveal` voting en Symbiosky (Shivarthu) — `lib/symbiosky.ts`
- P3: `voto por mérito` (reputation×experience×externality) en CDS — `lib/integral.ts`
- P3: e2e de flujo VERIFIED→auto-ejecuta en `/integral`
- Asimilar resto de la lista de 24 repos documentados en `docs/`

*Fin sección 17 — implementación sesión 2026-08-12.*

---

## 18. CAPA CIENTÍFICA & VASOS COMUNICANTES (Sesión 2026-08-18)

### 18.1 Paquete de 8 Documentos Científico-Estratégicos (ADSOA-HSCSG)
Generados en `docs/research_output/` aplicando metodología **EBD (Evidence-Based Design)** y trazabilidad total:
1. `01_Propuesta_Investigacion_Aplicada_ADSOA_HSCSG.md` — plan 6 meses / 3 fases / 480h / $0.
2. `02_Brief_Estrategico_Basado_Evidencia_ADSOA.md` — gap analysis + Go/No-Go.
3. `03_White_Paper_Estrategia_ADSOA_HSCSG.md` — arquitectura objetivo + specs.
4. `04_Documento_Diseno_Basado_Evidencia_EBD.md` — **8 decisiones D1-D8** (ADSOA nativo, ACP, DF, Content Code, UV-PKI, Folio, Autonomous Guard, Coordination) trazables a papers Banxico.
5. `05_Brief_Cientifico_ADSOA_HSCSG.md` — hipótesis H₁/H₀ + metodología.
6. `06_Memorandum_Validacion_Estrategica.md` — **DV-01 a DV-04 APROBADAS** (PI + Stakeholder + Reviewer).
7. `07_Informe_Factibilidad_Metodologica.md` — técnica/operativa/económica/temporal + riesgos R1-R6.
8. `08_Protocolo_Comunicacion_Cientifica.md` — estándares papers, datos abiertos, peer review.

**Evidencia primaria citada:** Pérez-Leguizamo & Godínez-Borja (IEEE ISADS 2017, DOI 10.1109/ISADS.2017.27) + IEICE 2016 (Banco de México, UV-PKI misión crítica).

### 18.2 Sistema Alráico como Orquestador Nativo (loopEngine + Simulador)
- `src/core/lib/loopEngine.ts` ✨ — kernel ADS: 6 loops (cdsDecay, meritMint, agentCompute, regenMrv, nostrAudit, vecinalAccountability) + **γ-CARMIS** (reconfig ante sobrecarga) + **resonancia** (αʰ₁·αʰ₂·3.0 > αʰ₁+αʰ₂). 7/7 tests passing.
- `src/app/screens/Simulador.tsx` ✨ — Eje Simulación de la Verificación Triaxial: sliders Ω/s/κ, proyección αʰ(t), stepper tick-a-tick, sobrecargas y resonancias en vivo. **Deployado:** `/simulador` → 200.

### 18.3 Skills de Orquestación (publicadas en `skills/`)
- `hscsg-repo-assimilation` — asimilación de repos externos como módulos vivos (4 fases).
- `hscsg-scientific-papers` — protocolo de papers con EBD + vasos comunicantes.
- `hscsg-unified-assimilation-science` — **skill maestra fusionada**: asimilación + ciencia + **vasos comunicantes totales** en todo HSCSG.

### 18.4 Nuevas Fuentes Teóricas (RBE / Jacque Fresco)
Asimiladas vía la skill (vía Ciencia, no código — principio de no-duplicación):
- **Yates 2014** *Crime, Criminality & Social Revolution* (MA UCLan) — tesis sobre ideas de Jacque Fresco / The Venus Project. → `docs/fresco_rbe_backup.md`
- **Leiva 2012** *Economía Monetaria y Economía Basada en Recursos* (U. Valparaíso, Adm. Pública) — análisis teórico RBE vs monetaria. → `docs/fresco_rbe_integration.md`
- **Vasos comunicantes:** ambos mapean a Leyes MJ (I: recursos como base; II: acceso por contribución; III: métricas físicas) y al horizonte `CivilizacionesState` (RBE/TVP). **Fuentes primarias BRIEF: 39 → 41.**

*Fin sección 18 — cierre de tanda 2026-08-18 (8 docs + 3 skills + loopEngine/Simulador + Fresco/RBE).*
