# BRIEF EXHAUSTIVO QUIRÚRGICO: HSCSG — Modelo de Negocio, HSCSG v15 OS & Cosateca OS
**Documento fundacional v1.0 | Zeitnus / Isaac Ko | Agosto 2026**
**Metodología:** 4 Fases (Desempaquetado → Limpieza → GitHub → Evolución) + Sistema Alráico (G1-CARMIS)
**Fuentes primarias:** 23 integraciones documentadas en `docs/`, informes ejecutivos HSCSG v14, análisis OneManCompany, IDETRA, repos asimilados + **Copiosis v7.1 (backup + integración completa)**.

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
> **Regla crítica:** catálogos estáticos NO persisten en localStorage (bug Civilizaciones/Copiosis → `const` en `lib/`)

### 4.3 Navteka: Capa Social + neko (HSCSG v15 OS + neko)
Navteka fusiona HSCSG v15 OS (nodo local offline) con **neko** (virtual browser WebRTC multi-usuario) para:
- **Watch parties** sincronizadas
- **Coworking colaborativo** con salas persistentes
- **Presentaciones interactivas** en navegador remoto

**Componentes migrados a navteka:**
- **Coach FAB** (`packages/ui/src/CoachFAB.tsx`) — Botón flotante persistente + chat Lucidez Material
- **Boundaries Panel** (`packages/ui/src/BoundariesPanel.tsx`) — Policy gateway CEL-like (deny > allow, fail-closed)
- **Coworkers** (`apps/web/app/(os)/coworkers/page.tsx`) — Agentes durables + standing role + canal + handover
- **Briefs** (`apps/web/app/(os)/brief/page.tsx`) — Visor de documentos científicos asimilados
- **Vasos** (`apps/web/app/(os)/vasos/page.tsx`) — Visualizador de pipelines gobernados
- **neko Room Manager** (`packages/ui/src/NekoRoomManager.tsx`) — CRUD salas + WebRTC embed

**Vasos Comunicantes (Pipelines gobernados):**
| Vaso | Flujo |
|------|-------|
| `neko:room` | UI HSCSG → POST `/api/neko/rooms` → neko-rooms → `roomUrl` + `adminToken` |
| `neko:session` | Entrada a sala → WebRTC client (`useNekoRoom`) → stream browser |
| `neko:coworker` | Coworker HSCSG (perfil durable) lanza/gestiona salas neko |
| `neko:boundary` | Policy CEL (Boundaries) valida URLs/apps permitidas en neko |
| `neko:brief` | Brief/CHANGELOG sync → webhook limpieza salas expiradas |

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

---

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

#### Bucle 1: **SVD v2 → CAC → FRS → Recommendation → CDS → Decision Record** (Epoch 28d)
```
Sensores (SVD v2): 12 vectores AUT + biomasa/energía + ΔCDS/SUI/CGC
         ↓
CAC Calculator v11: CAC vectorial + η, ξ, σᵤ + PGS/ICS/IVC
         ↓
FRS (Lucidez/Verificación/Colaberry): SignalPacket → Diagnose → Recommend
         ↓
CDS (Priorizar/Colectivo): Delibera → Decision Record (RAO append-only)
         ↓
E²R Search (Orquestación): Actualiza planner → Nueva época
```

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
| 1 | Vessel Base + SSOT + Registry | 1-2 | Runtime base deployable |
| 2 | E²R Tree Search + MJ Gate | 2-3 | Búsqueda garantizada |
| 3 | Talent Market + Registry | 3-4 | Mercado agentes verificables |
| 4 | Multi-agent meetings | 4-5 | Colectivos IA coordinados |
| 5 | Autómata v1.0 replicable | 5-6 | Spawn autónomo verificado |

---

## 11. MONETIZACIÓN Y SOSTENIBILIDAD: ZCS/ZNU + FONDO SOLARPUNK + REFI

### 11.1 ZCS (ZNU Circulating Supply) + ZNU
- **Demurrage:** 5% cada 28 días (epoch) → incentiva circulación, no acumulación
- **Paridad Biofísica:** 1 ZNU ≡ 1 kWh energía libre + 1 kcal comida + 1 L agua (oráculo local)
- **Emisión:** Solo vía Value Equation (Autómata) — no pre-mine, no ICO
- **Quema:** Luxury NBR Gateway + demurrage + fees Trustlines

### 11.2 Fondo Solarpunk
- **Fuentes:** 25% excedentes Autómata + 100% ingresos ReFi Bridge + Patrocinios ESG verificados
- **Destino:** Subvenciones nodos (PGS ≥ 1.5), FABSHIP kits, Microgrid, DSI (100 ZNU/mes por miembro activo)
- **Gobernanza:** CDS + CGC + Autómata auditoría (no humano solo)

### 11.3 ReFi Bridge (Nivel 3)
- **Oráculo Paridad Local:** Precio ZNU/USDC vía pool local (no Chainlink)
- **Tokenización Impacto:** NFT/SBT con metadatos RAO (hash, CAC, IVC) → vendibles en mercados ReFi
- **Créditos Carbono Soberanos:** dMRV (autómata + sensores) → certificación ESRS-ready

### 11.4 Anfibio: Modo Postmonetario ↔ Conectado
> **Misma lógica de cálculo opera en modo 'postmonetario' (ZNU/CaaS, default offline) o 'conectado' (USD/USDC vía oráculo priceParity, Nivel 3 ReFi); el render decide la etiqueta, la lógica es agnóstica a la unidad.**

Aplicado en DeseOS/Contento.pro (`lib/valueDual.ts` + `nodeMode`/`priceParity` en store + pantalla `/agencia`). Extirpar solo la INFRA ajena, conservar la LÓGICA.

---

## 12. DIFERENCIACIÓN Y BARRERAS DE ENTRADA

| Diferenciador | Competidor Típico | HSCSG v15 OS |
|---------------|-------------------|--------------|
| Offline-first | Requiere backend/cloud | Funciona file://, localhost, P2P |
| Métricas biofísicas | KPIs financieros/ESG genéricos | CAC 12 vectores, η, ξ, σᵤ, PGS |
| Economía dual nativa | Fiat only o crypto only | ZCS/ZNU + ReFi Bridge (anfibio) |
| Autómata soberano | LLM wrapper / chatbot | Conway+MJ, E²R, Self-funding |
| Federación ontogenética | Centralizado / federado estático | Mitosis nodal, η_fed > max+0.1 |
| Governance CEL-like | RBAC / ACL | Boundaries: deny>allow, fail-closed, dry-run |
| Coworkers durables | Agentes efímeros | Perfil + standing role + handover humano |
| Skills anfibias Hermes | Prompts estáticos | `openbot-governed-computer-use`, `policy-cel-gateway`, `ag-ui-protocol` |

---

## 13. RIESGOS Y SUPOSICIONES CRÍTICAS

| Riesgo | Mitigación |
|--------|------------|
| Bootstrap en frío (ZNU sin valor inicial) | Fondo Solarpunk + DSI + Bienes Capital gratis (FABSHIP) |
| Sybil attack en CDS/Jurados | ERC-8004 + Social DNA + Web of Trust + stake ZNU |
| Complejidad técnica abruma usuarios | Coach FAB (Happpy) + Modo Lucidez + onboarding Colaberry |
| Regulación anti-crypto | ZNU no es security (utility, demurrage, no transferible speculativamente) |
| Dependencia neko (Docker/WebRTC) | Fallback: pantalla compartida Jitsi / local-only mode |
| Validación empírica insuficiente | Fase 0 Proto-CO: 10 casos beta, 90 días, métricas duras |

---

## 14. ARQUITECTURA FINANCIERA: ECONOMÍA HÍBRIDA 3 NIVELES

| Nivel | Unidad | Gobernanza | Caso de Uso |
|-------|--------|------------|-------------|
| **Nivel 1: Postmonetario** | ZNU / NBR | Autómata + CDS_Jurados + Value Equation | Interno nodo: contribución → acceso, vesting, trustlines |
| **Nivel 2: Híbrido Local** | ZCS (stable ZNU) + USDC local | Oráculo Paridad Local + CaaS-BM | Comercio local, pagos proveedores, Revenue Demo |
| **Nivel 3: ReFi Global** | USDC / ReFi tokens | Smart contracts + dMRV verificado | Mercados carbono, inversores ESG, tokenización impacto |

**Price Parity Oracle:** `priceParity = ZNU_local / USDC_pool` — actualizado c/ epoch 28d por Autómata.

---

## 15. COSATECA OS vs HSCSG v15 OS: DOBLE CAPA (LOCAL + SOCIAL)

| Capa | HSCSG v15 OS (Local/Privado) | Hylo Fork / Navteka (Social/Comunitario) |
|------|-------------------------------|------------------------------------------|
| **Propósito** | Nodo soberano offline-first | Red social, grupos, ofertas/necesidades, tracks |
| **Runtime** | SPA (React/Vite), localStorage/IndexedDB | Next.js 15 + neko (Docker/Go/WebRTC) |
| **Auth** | Social DNA local (ERC-8004) | NextAuth (GitHub, email) + wallet connect |
| **Data** | ValueFlows local + RAO append-only | Postgres (Neon) + Redis (Upstash) + sync DTN |
| **AI** | Autómata Soberano + 10 Agentes | Coach FAB (Happpy) + Coworkers + neko remote browser |
| **Governance** | CDS local + Boundaries (CEL) | CDS federado + neko:boundary policy |
| **Economy** | ZNU/ZCS + CaaS-BM + Fondo Solarpunk | ZNU + Revenue Demo + Patrocinios ESG |
| **Deploy** | Vercel/Netlify/Static (SPA) | Vercel (frontend) + Fly.io/VPS (backend neko) |

**Integración:** Navteka = HSCSG v15 OS (packages/hscsg-core) + neko (apps/web + docker). Los Vasos Comunicantes sincronizan ambos mundos.

---

## 16. CONCLUSIÓN: SOBERANÍA OPERACIONAL VERIFICABLE

HSCSG v15 OS + Cosateca OS + Navteka constituyen el **primer sistema operativo completo** que une:
1. **Base material** (12 vectores CAC, FABSHIP, Microgrid)
2. **Gobernanza cibernética** (CDS-SUI-CGC-FRS-RAO, Boundaries CEL)
3. **Economía postmonetaria** (ZNU/NBR, Value Equation, Copiosis integrado)
4. **Métricas civilizatorias** (PGS, ICS, IVC, η, ξ, σᵤ)
5. **Autómata soberano** (Conway+MJ, E²R, Self-funding, Replicable)
6. **Capa social** (Hylo/neko: grupos, salas WebRTC, coworking)
7. **IA integrada** (Coach FAB/Happpy, Coworkers, Skills Hermes anfibias)

**Verificación:** Cada nodo produce evidencia inmutable (RAO, ValueFlows, CAC, DR) auditable por terceros sin revelar datos privados (ZK-ready). La soberanía no se declara: se **mide, verifica y federada**.

> **"No pedimos permiso para ser soberanos. Construimos la infraestructura que lo hace verificable."**

---

## ANEXO A: GLOSARIO UNIFICADO

| Término | Definición | Proyecto Origen | Equivalente HSCSG |
|---------|------------|-----------------|-------------------|
| **AUT** | Autonomía vectorial (12 dimensiones) | HSCSG | Core metric |
| **CAC** | Calculadora de Autonomía Colectiva | HSCSG | 12 vectores + métricas compuestas |
| **CDS** | Ciber-Democracia Soberana (gobernanza) | HSCSG/Integral Collective | Loop primario |
| **CEL** | Common Expression Language (policy) | OpenBot/Google | Boundaries engine |
| **CGC** | Gobernanza de Código Compartido | HSCSG | Integridad técnica |
| **COS** | Coordinación de Operaciones Soberanas | Integral Collective | Ejecución |
| **DSI** | Ingreso Soberano Directo (100 ZNU/mes) | HSCSG | UBI postmonetario |
| **DTN** | Delay-Tolerant Networking | Mesh networks | Sync offline-first |
| **E²R** | Explore-Execute-Review (Tree Search) | OneManCompany | Búsqueda garantizada |
| **FABSHIP** | Fábrica + Earthship (bioconstrucción) | FABSHIP/HUMANIA | Infraestructura física |
| **FRS** | Feedback & Recommendation System | HSCSG/Integral | Diagnóstico + propuesta |
| **ICS** | Integral Closure Score | HSCSG | % loops cerrados |
| **ITC** | Intercambio de Tiempo/Créditos | Integral Collective | Time banking |
| **IVC** | Integridad Verificable Colectiva | HSCSG | 1 - σᵤ×(1-η)×(1-ξ) |
| **MCI** | Multi-Capital Index | 8 Formas Capital | 8 capitales ponderados |
| **MJ** | Materialismo Jerárquico (3 Leyes) | HSCSG | Constitución autómata |
| **NBR** | Net Benefit Reward | Copiosis | Recompensa postmonetaria |
| **OAD** | Open Appraisal Design | Integral Collective | Certificación diseño |
| **PGS** | Soberanía Operacional Global | HSCSG | CAC × η_fed × ξ |
| **RAO** | Registro de Auditoría Ontológico | HSCSG/OneManCompany | Append-only log |
| **ReFi** | Finanzas Regenerativas | ReFi movement | Nivel 3 economía |
| **SUI** | Estabilidad de Identidad Soberana | HSCSG | ERC-8004 + Social DNA |
| **SVD** | Sensores de Verificación Distribuida | HSCSG | 12 vectores + biofísicos |
| **Tekitl** | Banco de tiempo + proyectos | Baruch4413/tekitl | Labor tracking |
| **Trustlines** | Crédito mutuo bilateral | trustlines-protocol | Red confianza |
| **ValueFlows** | Vocabulario flujos valor | ValueFlows/REA | Lenguaje económico |
| **Vessel** | Contenedor runtime agente | OneManCompany | Base autómata |
| **ZCS** | ZNU Circulating Supply | HSCSG | Moneda circulante demurrage |
| **ZNU** | Unidad Soberana (demurrage + paridad) | HSCSG | Moneda operativa |
| **η** | Eficacia gobernanza (CDS×SUI×CGC) | HSCSG | ≥0.8 target |
| **ξ** | Exergía neta / entropía | HSCSG/Prosocial | >0 target |
| **σᵤ** | Incertidumbre verificación | HSCSG | <0.15 target |

---

## ANEXO B: TABLA DE MAPEO (INTERSECCIONES ENTRE PROYECTOS ASIMILADOS)

| Concepto | HSCSG v15 | Cosateca OS | DeseOS/Contento.pro | OpenBot | Copiosis | OneManCompany | Conway Automaton | Hylo/Navteka |
|----------|-----------|-------------|---------------------|---------|----------|---------------|------------------|--------------|
| **Identidad Soberana** | ERC-8004 + Social DNA | ERC-8004 + Social DNA | `CO_BRAND` (brand0) | — | — | SSOT (Disk is Truth) | Agent ID | NextAuth + wallet |
| **Base Material** | 13 Pilares × 7 Capas | 13 Pilares × 7 Capas | — | — | Necesidades gratis | — | Never harm (Ley I) | — |
| **Gobernanza** | CDS-SUI-CGC-FRS-RAO | CDS-SUI-CGC-FRS-RAO | — | Policy CEL Gateway | Jurados Ciudadanos | Vessel+Talent | Never deceive (Ley III) | CDS federado |
| **Economía** | ZNU/ZCS + CaaS-BM | ZNU/ZCS + CaaS-BM | USD/MXN/EUR (anfibio) | — | NBR + BN 8 escalas | ValueFlows | Earn existence (Ley II) | ZNU + Revenue Demo |
| **Métricas** | CAC 12v, η, ξ, σᵤ, PGS, ICS, IVC | CAC 12v, η, ξ, σᵤ, PGS, ICS, IVC | Health score (93/100) | — | BN 8 escalas | E²R quality gates | — | — |
| **IA/Autómata** | Autómata Soberano + 10 Agentes | Autómata Soberano + 10 Agentes | Happpy CMO (coach) | Coworkers (simulados) | — | Autómata (Vessel) | Conway Automaton | Coach FAB + Coworkers + neko |
| **Pipeline/Flujo** | Vasos Comunicantes | Vasos Comunicantes | P1→P10 (BranDNA→Publica) | Boundaries → Coworkers | Estigmergia (gradiente BN) | E²R + SSOT + Registry | — | neko:room, neko:session, neko:coworker, neko:boundary, neko:brief |
| **Auto-llenado** | Value Equation → ZNU | Value Equation → ZNU | BranDNA alimenta VITCH | — | BN → NBR | — | — | Coach FAB contextual |
| **Persistencia** | localStorage/IndexedDB | localStorage/IndexedDB | localStorage por módulo | — | — | SSOT (Disk) | — | Postgres + Redis |
| **UI/UX** | 21 pantallas SPA | 21 pantallas SPA | Sidebar Cimiento/Motor/Crecimiento/Dinero + Happpy FAB | Boundaries + Coworkers screens | — | — | — | Coach FAB persistente, BoundariesPanel, Coworkers, NekoRoomManager |
| **Habilidades** | Skills Hermes anfibias | Skills Hermes anfibias | — | 3 skills (openbot-governed-computer-use, policy-cel-gateway, ag-ui-protocol) | — | — | — | Desplegadas en ~/.hermes/skills/web/ + skills/web/ |

**Desarrollo por término (qué proyecto lo tiene más maduro):**
- **Identidad Soberana:** OneManCompany (SSOT, Registry) → HSCSG (ERC-8004)
- **Base Material:** HSCSG/Cosateca (13×7×4 = 364 celdas) — más desarrollado
- **Gobernanza:** HSCSG (CDS-SUI-CGC-FRS-RAO completo) — más desarrollado
- **Economía:** Copiosis (BN/NBR/3 bienes) + HSCSG (ZNU/CaaS-BM/Anfibio) — complementarios
- **Métricas:** HSCSG (CAC/PGS/ICS/IVC/η/ξ/σᵤ) — más desarrollado
- **IA/Autómata:** Conway Automaton (Never harm/earn/deceive) + OneManCompany (Vessel+Talent/E²R) → HSCSG (Autómata Soberano integrado)
- **Pipeline/Flujo:** DeseOS (P1→P10 completo) + HSCSG (Vasos Comunicantes) — DeseOS más maduro en flujo contenido
- **Auto-llenado:** DeseOS (BranDNA → VITCH genera piezas) — más desarrollado
- **Persistencia:** OneManCompany (SSOT Disk is Truth) — arquitectura más robusta
- **UI/UX:** DeseOS/Contento.pro (Coach FAB/Happpy, sidebar modular) — más pulido
- **Habilidades:** HSCSG (3 skills anfibias Hermes desplegadas) — único con skills ejecutables

---

## ANEXO C: VALUE EQUATION & VALUEFLOWS TYPES

### Value Equation (HSCSG v15 + Copiosis)
```
Value = cl × Labor + cm × Material + ce × Energy + ca × Attention + cξ × Exergy - cδ × Damage
```
Donde `cδ × Damage` internaliza externalidades (Copiosis BN resta daño). Coeficientes calibrados por CDS_Jurados.

### ValueFlows Types (Extendido para Copiosis + HSCSG)
```typescript
type GoodType = 'need' | 'luxury' | 'capital';  // Obligatorio por Copiosis

interface EconomicEvent {
  // Core VF
  provider: Agent;
  receiver: Agent;
  resourceQuantity: Quantity;
  resourceUnit: Unit;
  resourceClassifiedAs: ResourceClassification;
  
  // HSCSG extensions
  goodType: GoodType;                    // NEW: Copiosis 3 tipos
  luxuryPriceNBR?: number;               // NEW: NBR Gateway price (quemado)
  capitalAccessTier?: number;            // NEW: Tier acceso capital gratis (AUT_PROD threshold)
  netBenefitFlow?: NetBenefitFlow;       // NEW: NBR → ZNU claim pathway
  autosMetrics?: AUTVector;              // 12 vectores CAC del evento
  mjGateResult?: 'PASS' | 'FAIL';        // Ley I/II/III evaluation
  lucidezRaw?: LucidezBlock;             // Modo Lucidez data
}
```

---

## 19. Meta-Crisis y Proyectos Amigos (Ecosistema de Transición)

**Fuente:** metacrisis.org (Obsidian Publish, Kyle Kowalski / Sloww) — mapeo del ecosistema "meta-crisis" (wisdom web, liminal web, sensemaking web). 50+ proyectos, 100+ personas, 75+ libros, 15+ comunidades, 250+ hashtags.

### 19.1 Proyectos Amigos (Isomorfismos HSCSG)

| Proyecto | Tipo | Isomorfismo HSCSG | Proyecto HSCSG |
|----------|------|-------------------|----------------|
| **Game B** | Memetic tag + community | Game A→Game B = Extractivo→Regenerativo | Post-monetary civilization |
| **Life Itself** | Community + coliving | Pragmatic utopians, middle way Plum Village ↔ Silicon Valley | Cosateca model |
| **Awakening from the Meaning Crisis** | YouTube series (50 episodes) | John Vervaeke: wisdom cultivation, relevance realization | Ley III MJ (Lucidez) |
| **The Consilience Project** | Research publication | Daniel Schmachtenberger: global risk, governance design | CDS + governance |
| **Emerge** | Network + media | Tomas Björkman + Jonathan Rowson: connecting pioneers | Vasos comunicantes |
| **Rebel Wisdom** | Media + community | Alexander Beiner: intellectual dark web, meaning crisis | Sensemaking |
| **Sloww** | Education + community | Kyle Kowalski: art of living, Ikigai 2.0 | BRIEF_PERFIL_AUTODIDACTAS |
| **The Center for Humane Technology** | Advocacy | Tristan Harris: technology ethics, attention economy | Ley III MJ (no dañar) |
| **The Great Simplification** | Podcast + education | Nate Hagens: resource economics, risk | CAC vectors |
| **Metamoderna** | Think tank | Hanzi Freinacht: metamodern politics, 12 Commandments | Developmental politics |
| **Integral Life** | Community + education | Ken Wilber: integral theory, AQAL | Sistema Alráico |
| **Less Wrong** | Community + blog | Rationality community, AI safety | Autómata E²R |
| **Long Now Foundation** | Think tank | Long-term thinking, 10,000 year clock | 7 generations |
| **Santa Fe Institute** | Research institute | Complexity science, emergence | loopEngine |
| **Foresight Institute** | Think tank | Nanotechnology, AI, existential risk | Technology governance |
| **Future of Life Institute** | Advocacy | AI safety, existential risk | Ley I MJ |

### 19.2 Personas Clave (Conexiones HSCSG)

| Persona | Rol | Conexión HSCSG |
|---------|-----|----------------|
| **John Vervaeke** | Cognitive scientist, "Awakening from the Meaning Crisis" | Ley III MJ (Lucidez), wisdom cultivation, relevance realization |
| **Daniel Schmachtenberger** | Systems thinker, The Consilience Project, Game B | Civilizational design, existential risk, governance |
| **Jordan Hall** | Game B co-founder | Collective intelligence, anti-fragile civilization |
| **Jim Rutt** | Game B, Jim Rutt Show | Complexity, technology, civilization design |
| **Zak Stein** | Psychometrics, "Education is the Metacrisis" | Education, psychometrics, wisdom cultivation |
| **Ken Wilber** | Integral Theory founder | Integral 2.0, AQAL, Sistema Alráico |
| **Jonathan Rowson** | Perspectiva, chess grandmaster | Metamodernity, systems change, cultural evolution |
| **Hanzi Freinacht** | Metamoderna, author | Developmental politics, metamodernism |
| **Tomas Björkman** | Emerge co-founder | Social systems, cultural transformation |
| **Tristan Harris** | Center for Humane Technology | Ley III MJ (no dañar), technology ethics |
| **Nate Hagens** | The Great Simplification | CAC vectors, resource constraints |
| **Jamie Wheal** | Cultural architecture | Psychospiritual development |
| **Charles Eisenstein** | Author, activist | Gift economy, post-monetary |
| **Iain McGilchrist** | Psychiatrist, author | Divided brain, perception |
| **Tyson Yunkaporta** | Indigenous studies | Indigenous thinking, Sand Talk |
| **Bayo Akomolafe** | Post-activist, author | Decolonial wisdom, embodied activism |
| **Kyle Kowalski** | Sloww founder, metacrisis.org curator | Art of living, Ikigai 2.0 |
| **Brandon Norgaard** | Meta-crisis researcher | Ecosystem mapping, Gaia-Mycelium connection |

### 19.3 18 Isomorfismos Meta-Crisis ↔ HSCSG

| # | Concepto Meta-Crisis | Concepto HSCSG | Isomorfismo |
|---|---------------------|----------------|-------------|
| 1 | Meta-Crisis | Crisis de civilización (HSCSG §1) | Interlocking existential risks = dependencia estructurada |
| 2 | Meaning Crisis | Crisis de sentido (Ley III MJ) | Wisdom cultivation = Lucidez cultivation |
| 3 | Game A → Game B | Extractivo → Regenerativo | Post-monetary transition |
| 4 | Sensemaking | Autómata E²R + Lucidez | Relevance realization = E²R tree search |
| 5 | Liminal Web | Vasos Comunicantes | Network of networks |
| 6 | Wisdom Web | CoachFAB + Coworkers | Wisdom cultivation tools |
| 7 | Emergentsia | Civilizaciones (HSCSG §17) | Post-monetary communities |
| 8 | Metamodernity | Sistema Alráico (G1-CARMIS) | Developmental, integrative |
| 9 | Collective Intelligence | CDS + Autómata | Collaborative decision-making |
| 10 | Anti-fragile Civilization | CaaS-BM + ZNU | Resilient economic systems |
| 11 | Existential Risk | Ley I MJ (no dañar) | Harm prevention, fail-closed |
| 12 | Governance Design | CDS + MJ Laws | Sovereign governance |
| 13 | Cultural Transformation | Fondo Solarpunk + Cosatecas | Regenerative culture |
| 14 | Indigenous Thinking | Base Material + Tekitl | Territorial knowledge |
| 15 | Gift Economy | ZNU + ValueFlows | Post-monetary exchange |
| 16 | Vertical Development | 13 Pilares × 7 Capas | Developmental matrix |
| 17 | Integral Theory | Sistema Alráico (8 caras) | Holistic framework |
| 18 | Complexity Science | loopEngine (6 loops) | Systems dynamics |

### 19.4 Bibliografía Clave (75+ libros)

**Cognitive Science + Wisdom:**
- Vervaeke, Andersen, Miller (2022) — *Predictive processing and relevance realization*
- McGilchrist (2021) — *The Matter With Things*
- Snowden (2020) — *Cynefin - Weaving Sense-Making*
- Stein (2019) — *Education in a Time Between Worlds*
- McGilchrist (2009) — *The Master and His Emissary*

**Civilization Design + Governance:**
- Rowson, Pascal, Stein et al. (2021) — *Dispatches from a Time Between Worlds*
- Hagens, White (2021) — *Reality Blind*
- Brewer (2021) — *The Design Pathway for Regenerating Earth*
- McIntosh (2020) — *Developmental Politics*
- Rowson (2019) — *The Moves That Matter*
- Björkman (2019) — *The World We Create*
- Andersen (2019) — *Metamodernity*
- Scharmer (2018) — *The Essentials of Theory U*
- Wilber (2017) — *The Religion of Tomorrow*

**Economics + Post-Monetary:**
- Duettmann et al. (2022) — *Gaming the Future*
- Eisenstein (2020) — *Climate: A New Story*
- Pollock (2018) — *The Open Revolution*
- Eisenstein (2011) — *Sacred Economics, Revised*
- Eisenstein (2007) — *The Ascent of Humanity*

**Spirituality + Consciousness:**
- Segall (2023) — *Crossing the Threshold*
- Beiner (2023) — *The Bigger Picture*
- Freinacht (2022) — *12 Commandments*
- Dempsey (2022) — *Emergentism*
- Wheal (2021) — *Recapture the Rapture*
- Segall (2021) — *Physics of the World-Soul*
- Yunkaporta (2020) — *Sand Talk*
- Andersen (2020) — *Bildung: Keep Growing*
- Evans (2020) — *Breaking Open*
- Johnson (2019) — *Seeing Through the World*
- Davis (2019) — *High Weirdness*
- Peterson (2018) — *12 Rules for Life*
- Wilber (2008) — *Integral Life Practice*
- Wilber (2006) — *Integral Spirituality*
- Wilber (2000) — *A Theory of Everything*
- Wilber (1995) — *Sex, Ecology, Spirituality*
- Wilber (1977) — *The Spectrum of Consciousness*

**Systems + Complexity:**
- Last (2023) — *Systems and Subjects*
- Henriques (2022) — *A New Synthesis for Psychology*
- Kavanagh (2021) — *Collective Wisdom in the West*
- Beakbane (2021) — *How to Understand Everything*
- Cook-Greuter (2021) — *Ego Development*
- Lightfoot (2020) — *A Collective Blooming*
- White, Hagens (2019) — *The Bottlenecks of the 21st Century*
- Henriques (2011) — *A New Unified Theory of Psychology*
- Cook-Greuter (2010) — *Postautonomous Ego Development*

### 19.5 Comunidades Meta-Crisis (15+)

| Plataforma | Comunidad | Proyecto |
|------------|-----------|----------|
| **Circle** | Sloww Society Community | Sloww |
| **Circle** | UTOK Community | UTOK |
| **Discord** | Awakening from the Meaning Crisis | John Vervaeke |
| **Discord** | Doomer Optimism | Doomer Optimism |
| **Discord** | Future Thinkers | Future Thinkers |
| **Discord** | Holistic Technology + Wise Innovation | Michael Garfield |
| **Discord** | Second Renaissance | Second Renaissance |
| **Discourse** | Integral Life Forum | Integral Life |
| **Discourse** | MetacrisisDAO | MetacrisisDAO |
| **Discourse** | Second Renaissance Forum | Second Renaissance |
| **Mighty Networks** | Buddhist Geeks | Buddhist Geeks |
| **Mighty Networks** | NAAS Community | Charles Eisenstein |
| **Mighty Networks** | Emergent Commons | Rebel Wisdom |
| **Mighty Networks** | Emerge Community | Emerge |
| **Mighty Networks** | Future Thinkers | Future Thinkers |
| **Mighty Networks** | Game B | Game B |
| **Mighty Networks** | Voicecraft | Voicecraft |
| **Signal** | Founder Satsang | — |
| **Telegram** | MetaCrisis.xyz Close Collaborators | — |
| **WhatsApp** | Life Itself | Life Itself |
| **Other** | we{collective} | we{collective} |

### 19.6 Mapas y Síntesis (15+, 2018-2024)

| Año | Título | Autor/Fuente |
|-----|--------|--------------|
| 2024 | Is the Meta-Crisis a Me-Crisis? | Kyle Kowalski (Sloww) |
| 2024 | An Overview of Ecosystem Names & Mapping Efforts | Life Itself |
| 2023 | Meme to Vibe: A Philosophical Report | Peter Limberg |
| 2022 | Meta Crisis Concept Space Maps | HexaField |
| 2022 | Comparing Approaches to Addressing the Meta-Crisis | Brandon Norgaard |
| 2022 | Education is the Metacrisis | Zak Stein |
| 2022 | Transformational Communities | Tucker Walsh |
| 2021 | Tasting the Pickle: Ten flavours of meta-crisis | Jonathan Rowson |
| 2021 | The Liminal Web: Mapping An Emergent Subculture | Joe Lightfoot |
| 2021 | Mapping For Emergence | Life Itself |
| 2021 | The Flourishing of All Living Things | Naryan |
| 2021 | A movement with no name | Marcus Gabler |
| 2021 | Building the Wisdom Age | Roote |
| 2021 | The Sense-Making Web | Chris Leong |
| 2021 | The Noosphere Map | Johan |
| 2020 | State of Sensemaking 2020 | Life Itself |
| 2020 | The Dawn of the Metatribe | Tyler Alterman |
| 2019 | The Rise of the 'Emergentsia' | Brent Cooper |
| 2019 | Awakening the Twelve Tribes of Transformation | Jonathan Rowson |
| 2019 | A Story to Bind Us | Alexander Beiner |
| 2019 | The Sensemaking Web Braindump | Gwendolyn Huot |
| 2018 | The Memetic Tribes Of Culture War 2.0 | Peter Limberg + Conor Barnes |

---

*Fin sección 19 — Meta-Crisis y Proyectos Amigos (2026-08-22)*

---

## HISTORIAL DE VERSIONES
| Versión | Fecha | Cambios | Autor |
|---------|-------|---------|-------|
| v1.0 | 2026-08-22 | Documento fundacional completo con integración Copiosis, navteka, análisis contento/deseOS | Isaac Ko |

---

*Este documento es la fuente de verdad operacional para HSCSG v15 OS, Cosateca OS y navteka. Se actualiza tras cada asimilación de repo/proyecto vía cron orquestador.*