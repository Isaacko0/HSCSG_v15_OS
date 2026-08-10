# BRIEF EXHAUSTIVO QUIRÚRGICO: HSCSG — Modelo de Negocio, HSCSG v15 OS & Cosateca OS
**Documento fundacional v1.0 | Zeitnus / Isaac Ko | Agosto 2026**
**Metodología:** 4 Fases (Desempaquetado → Limpieza → GitHub → Evolución) + Sistema Alráico (G1-CARMIS)
**Fuentes primarias:** 23 integraciones documentadas en `HSCSG_v15_OS/docs/`, informes ejecutivos HSCSG v14, análisis OneManCompany, IDETRA, repos asimilados + **Copiosis v7.1 (backup + integración completa)**.

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
| **Copiosis** | §2.17, §3.0, §3.5, §5.6, §6.1, §14.1, §14.3-14.4, §16 | NBR, Beneficio Neto 8 escalas, 3 tipos bienes, Jurados Ciudadanos, Estigmergia, Transición voluntaria |

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
| **Nivel 2: Dividendo Soberano + Recompensa BN (ZNU/NBR)** | Ingreso base garantizado + recompensa por Beneficio Neto | DSI (100 ZNU/mes) + NetBenefitFlow (NBR→ZNU via claimVesting) + Value Equation | CDS + CDS_Jurados (pesos BN) | CaaS Tier 1 (necesidades gratis) + Vesting por hitos AUT + NBR Gateways (lujos) |
| **Nivel 3: Puente ReFi + Capital Institucional (USDC/€)** | Conversión a moneda fiduciaria para comercio externo y deuda heredada | Oráculo Paridad Local + ZCS/ZNU + ReFi Bridge (Toucan, Regen, Plan Vivo) | CGC + Autómata auditoría | 1 tCO₂e = 500 ZNU; ESRS/CSRD/TCFD/TNFD/SBTi auto-generados vía dMRV |

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

HSCSG v15 OS + Hylo-Cosateca + integración Copiosis constituye el **primer sistema operativo civilizatorio completo** que une:

1. **Base material verificada** (SVD v2 + AUT 12 vectores + FABSHIP)
2. **Gobernanza cibernética autónoma** (CDS + CDS_Jurados + RAO + FRS + Estigmergia)
3. **Economía postmonetaria híbrida** (NBR-ZNU-ReFi, 3 tipos bienes, 3 niveles financieros, demurrage, paridad biofísica)
4. **Autómata soberano** (Conway Agent + MJ Gate + NetBenefitEngine + E²R Search + Vessel/Talent)
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
*Fuentes: 23 integraciones `HSCSG_v15_OS/docs/` + informes HSCSG v14 + OneManCompany + IDETRA + **Copiosis v7.1 (backup + integración completa)***  
*Backup Copiosis: `docs/copiosis_backup.md` | Integración: `docs/copiosis_integration.md`
