# Integración Copiosis.net → HSCSG v15 OS
# Tres perspectivas: Usuario · LLM · Proyecto HSCSG_v15_OS / CaaS

> Backup del original en `docs/copiosis_backup.md`. Aquí se asimila el diseño socioeconómico post-dinero de Copiosis al marco HSCSG v15 (Materialismo Jerárquico + Alráico + CaaS-BM) y se implementa como referente arquitectónico en módulos existentes y nuevos.

---

## 0. Síntesis

**Copiosis** = **diseño socioeconómico post-dinero completo** (v7.1, 2024+) que resuelve en papel los fallos estructurales del capitalismo (deuda, escasez, externalidades, desigualdad de origen) sin caer en los del socialismo (planificación central, igualdad forzada, incentivos rotos) ni en los de la UBI (dinero sin anclaje productivo, inflación, estado tributario).

**Componentes centrales asimilables:**
1. **NBR** — Unidad de recompensa no transferible, creada ex nihilo por Beneficio Neto, quemada al uso
2. **Beneficio Neto (BN)** — Métrica multi-escala: BN = Σ(Beneficios) - Σ(Daños); 8 escalas ponderadas por Jurados Ciudadanos
3. **Tres tipos de bienes** — Necesidades (gratis), Lujos (precio NBR), Bienes de Capital (gratis para creadores)
4. **Gobernanza estigmergica** — 3 capas: Coordinadores emergentes, Jurados Ciudadanos (pesos algorítmicos), Desarrolladores (open source)
5. **Transición voluntaria** — 3 fases, MVP desplegable en semanas, sin confiscación

**Madurez real (auto-declarada):** "Copiosis hoy es una idea, no un sistema operativo. No hay proyectos activos manejando un pueblo o una economía con este modelo."

---

## 1. PERSPECTIVA USUARIO (miembro de nodo Cosateca / colectivo Zeitnus)

Como miembro de un nodo Cosateca quiero que el sistema:
- **Cubra mis necesidades básicas sin costo** (comida, energía, vivienda, salud, educación) — como Promesa 1 de Copiosis
- **Me recompense por beneficio real que genero** (no por horas, no por especulación) — NBR por Beneficio Neto medido en 8 escalas
- **Me permita acceder a lujos/extras vía NBR** — precio NBR puesto por productor, yo decido si pago
- **Me dé bienes de capital gratis para producir** — tierra, herramientas, infraestructura libre para creadores verificados
- **Sea gobernado por mis pares, no por burócratas** — Jurados Ciudadanos sorteados asignan pesos al algoritmo; coordinadores emergen por reputación
- **No me obligue a "ganarme la vida"** — supervivencia desacoplada de contribución económica (Promesa 1)
- **Sea transparente y auditable** — algoritmo abierto v7.1, pesos de Jurados públicos, trazabilidad completa acción → BN → NBR

> **Dolor actual:** En HSCSG v15 OS, ZNU se emite por Value Equation (cl, cm, ce, ca, cξ) pero no hay métrica multi-escala de Beneficio Neto con daño restando, ni clasificación tripartita de bienes, ni Jurados Ciudadanos para pesos, ni distinción explícita Necesidades/Lujos/Capital en el flujo de ValueFlows.

---

## 2. PERSPECTIVA LLM (cómo lo razona y construye el asistente)

### 2.1 Mapeo Copiosis → HSCSG v15 OS

| Subsistema Copiosis | Asimilación HSCSG v15 OS | Módulo / Archivo |
|---------------------|--------------------------|------------------|
| **NBR** (intransferible, ex nihilo, quemable) | **ZNU-Vesting** + **Trustlines** + nuevo tipo `NetBenefitFlow` | `lib/znu.ts`, `lib/vesting.ts`, `lib/trustlines.ts`, `lib/copiosis.ts` (nuevo) |
| **Beneficio Neto (BN)** multi-escala (8 escalas) | **CAC Calculator v12** + **NetBenefitEngine** (nuevo) | `lib/metrics.ts` → `lib/netbenefit.ts` (nuevo) |
| **8 Escalas BN** | **10 Vectores CAC** + **2 escalas nuevas** (Bienestar Psicológico, Belleza/Estética) | `lib/metrics.ts` — extender `CACVector` |
| **Jurados Ciudadanos** (pesos W_i) | **CDS-Jurados** (nuevo sub-módulo) | `lib/cds.ts` → `lib/cds_jurados.ts` (nuevo) |
| **Tres Tipos de Bienes** | **Clasificación ValueFlows** (needs/luxury/capital) | `lib/valueflows.ts` — nuevos campos `goodType` |
| **NBR Gateways** (lujos con precio NBR) | **Solarpunk/Trustlines** — `luxuryPriceNBR` en ofertas | `lib/solarpunk.ts`, `lib/trustlines.ts` |
| **Bienes de Capital gratis para creadores** | **CaaS-BM / FABSHIP** — `capitalAccessTier` | `lib/caas.ts`, `lib/fabship.ts` |
| **Estigmergia** (orden emergente por señales BN/NBR) | **Autómata FRS** + **Colaberry** — señales de gradiente BN | `lib/automaton.ts`, `lib/colaberry.ts` |
| **Transición voluntaria 3 fases** | **Hoja de Ruta HSCSG** — Fases 0-D mapeadas | `docs/roadmap.md` (actualizar) |

### 2.2 Decisiones de Diseño (LLM)

1. **NO copio el algoritmo v7.1 tal cual** — HSCSG ya tiene CAC (10 vectores), Value Equation, ZNU, Vesting, Trustlines. **Extiendo y alineo**, no reemplazo.
2. **8 Escalas BN → 10 Vectores CAC + 2 nuevas:**
   - Copiosis Escala 2 (Bienestar Psicológico) → **nuevo vector `AUT_PSIC`** (autonomía psicológica/comunitaria)
   - Copiosis Escala 8 (Belleza/Estética) → **nuevo vector `AUT_ESTE`** (autonomía estética/cultural)
   - Las otras 6 se mapean a CAC existentes (ver tabla homologación)
3. **NBR ≠ ZNU** — NBR es *recompensa post-facto por BN*, intransferible, quemable. ZNU es *unidad de cuenta con demurrage, transferible vía Trustlines*. **Coexisten:** ZNU = medio de cuenta/circulación; NBR = recompensa final no transferible que se convierte en ZNU-liquido al reclamarse (Vesting).
4. **Jurados Ciudadanos** — Nueva capa en CDS: sorteados, anónimos, rotativos, solo ajustan pesos `W_i` de escalas BN (no deciden casos). Isomorfo a **Ley III MJ** (Lucidez: poder acotado, transparencia radical).
5. **Tres Tipos de Bienes** — Se implementa como **metadato obligatorio** en todo `ValueFlow` event: `goodType: 'need' | 'luxury' | 'capital'`. Afecta: pricing, acceso, recompensa, contabilidad.
6. **Estigmergia** — Ya existe en HSCSG como **FRS (Feedback Loop)** + **Colaberry matchmaking**. Se refuerza: señales de "gradiente BN" atraen coordinadores/autómatas.

---

## 3. PERSPECTIVA PROYECTO HSCSG_v15_OS / CaaS (monetario → postmonetario)

### 3.1 Isomorfismo con Materialismo Jerárquico (Leyes I/II/III)

| Ley MJ | Principio Copiosis | Confluencia |
|--------|-------------------|-------------|
| **I. No dañar base material** | "Daño resta en BN → NBR cero/negativa" | **Algoritmo antifrágil**: daño = costo de oportunidad directo. Internaliza externalidades por diseño. |
| **II. Ganarse la vida soberanizando (AUT × CDS)** | "Supervivencia desacoplada de contribución; recompensa por beneficio real" | **CaaS-BM + NBR**: necesidades gratis (Promesa 1) + recompensa por BN verificado (Promesa 2). AUT mide base material; CDS gobierna Jurados. |
| **III. Lucidez: nunca engañar** | "Algoritmo abierto, pesos de Jurados públicos, trazabilidad completa, fork siempre posible" | **Modo Lucidez + RAO + CDS-Jurados**: transparencia radical, poder acotado, exit option (fork). |

### 3.2 Integración con Vectores HSCSG Existentes

| Copiosis | HSCSG Actual | Acción Requerida |
|----------|--------------|------------------|
| **BN = Σ(Beneficios) - Σ(Daños)** | Value Equation (cl, cm, ce, ca, cξ) | **Extender Value Equation**: añadir término `- cδ × Damage` donde `Damage` = Σ(Daños escalas 1,3,6 normalizadas) |
| **8 Escalas BN** | 10 Vectores CAC | **Añadir 2 vectores**: `AUT_PSIC` (Bienestar Psicológico), `AUT_ESTE` (Belleza/Estética). Recalibrar pesos. |
| **Jurados Ciudadanos (W_i)** | CDS (gobernanza) | **Nuevo sub-módulo `CDS_Jurados`**: sorteo, anonimato, rotación, rango acotado `W_i ∈ [min, max]`, actas públicas en RAO. |
| **Tres Tipos de Bienes** | ValueFlows (sin clasificación) | **Campo obligatorio `goodType`** en todo evento VF. Reglas: `need` → gratis (CaaS tier 1), `luxury` → precio NBR (Gateway), `capital` → gratis para creadores verificados (FABSHIP/CaaS). |
| **NBR Gateways (lujos)** | Solarpunk (ofertas/necesidades) | **Nuevo campo `luxuryPriceNBR`** en `SolarpunkOffer`. Usuario paga NBR (quemado) → productor recibe ZNU vía Value Equation. |
| **Bienes de Capital gratis** | FABSHIP / CaaS | **Nuevo tier `capitalAccess`** en CaaS: productores verificados (AUT_PROD ≥ threshold) acceden a tierra/herramientas/infra gratis. Recompensa por BN de habilitar producción ajena. |
| **Estigmergia (gradiente BN)** | FRS + Colaberry | **FRS emite `BN_Gradient_Signal`**: coordenadas (ubicación, sector, BN_potencial) → Autómata/Colaberry atraen coordinadores/productores. |

### 3.3 Nuevos Entregables (Módulos/Archivos)

| Entregable | Descripción | Módulo HSCSG | Prioridad |
|------------|-------------|--------------|-----------|
| `lib/netbenefit.ts` | Motor BN: 8 escalas, pesos Jurados, cálculo BN, detección daño | Core (nuevo) | **Alta** |
| `lib/cds_jurados.ts` | Sorteo, anonimato, rotación, pesos W_i acotados, actas RAO | CDS (nuevo sub-módulo) | **Alta** |
| `lib/copiosis.ts` | Adaptador: mapea BN → ZNU/Vesting/Trustlines; NBR Gateways; 3 tipos bienes | Integración (nuevo) | **Alta** |
| `lib/valueflows.ts` (extend) | Campo `goodType`, `luxuryPriceNBR`, `capitalAccessTier` | Core (extend) | **Alta** |
| `lib/netbenefit.ts` (extend) | Escalas 2 y 8 → `AUT_PSIC`, `AUT_ESTE` | Metrics (extend) | **Media** |
| `docs/copiosis_integration.md` | Este documento | Docs | **Alta** |
| `docs/copiosis_homologation.md` | Tabla homologación detallada + inferencias extrapoladas | Docs | **Media** |
| Glosario (Anexo A) | 15+ términos nuevos | Brief Exhaustivo | **Alta** |

---

## 4. HOMOLOGACIÓN DETALLADA: COPIOSIS ↔ HSCSG

### 4.1 Tabla de Homologación (Concepto Copiosis → Componente HSCSG)

| Concepto Copiosis | Traducción Soberana HSCSG | Componente / Rol HSCSG | Estado |
|-------------------|---------------------------|------------------------|--------|
| **NBR** (intransferible, ex nihilo, quemable) | **ZNU-Vesting-NetBenefitFlow** | `lib/vesting.ts` + `lib/trustlines.ts` + `lib/copiosis.ts` (nuevo tipo `NetBenefitFlow`) | **Nuevo** |
| **Beneficio Neto (BN)** | **NetBenefit (NB)** | `lib/netbenefit.ts` (motor 8 escalas + pesos Jurados) | **Nuevo** |
| **8 Escalas BN** | **10 Vectores CAC + 2 nuevos** | `lib/metrics.ts` → `CACVector` extendido | **Extendido** |
| **Escala 1: Necesidades Básicas** | `AUT_ALIM`, `AUT_ENER`, `AUT_HABI`, `AUT_AGUA`, `AUT_SALU`, `AUT_CONO` | Mapeo directo (6 vectores) | **Mapeado** |
| **Escala 2: Bienestar Psicológico** | **`AUT_PSIC` (NUEVO)** | Autonomía psicológica/comunitaria | **Nuevo vector** |
| **Escala 3: Salud Planetaria** | `AUT_ALIM` (regeneración), `AUT_ENER` (limpia), `AUT_AGUA` | Mapeo compuesto | **Mapeado** |
| **Escala 4: Conocimiento/Habilidad** | `AUT_CONO`, `AUT_PROD` | Mapeo directo | **Mapeado** |
| **Escala 5: Eficiencia Recursos** | `AUT_PROD`, `AUT_ENER` | Mapeo directo | **Mapeado** |
| **Escala 6: Resiliencia/Seguridad** | `AUT_HABI`, `AUT_AGUA`, `AUT_ENER` | Mapeo compuesto | **Mapeado** |
| **Escala 7: Equidad/Acceso** | `AUT_SOCI`, `AUT_GOBE`, `AUT_FINA` | Mapeo compuesto | **Mapeado** |
| **Escala 8: Belleza/Estética** | **`AUT_ESTE` (NUEVO)** | Autonomía estética/cultural | **Nuevo vector** |
| **Jurados Ciudadanos (W_i)** | **`CDS_Jurados` (nuevo sub-módulo)** | Sorteo, anonimato, rotación, `W_i ∈ [min, max]`, actas RAO | **Nuevo** |
| **Tres Tipos de Bienes** | **`goodType` en ValueFlows** | `need` | `luxury` | `capital` | **Nuevo campo** |
| **NBR Gateways (lujos)** | **`luxuryPriceNBR` en Solarpunk/Trustlines** | Precio NBR quemado → ZNU a productor | **Nuevo** |
| **Bienes de Capital gratis** | **`capitalAccessTier` en CaaS/FABSHIP** | Productores verificados (AUT_PROD ≥ threshold) | **Nuevo tier** |
| **Estigmergia (gradiente BN)** | **`BN_Gradient_Signal` en FRS** | Coordenadas (ubicación, sector, BN_potencial) | **Nueva señal** |
| **Transición 3 fases** | **Fases HSCSG 0-D** | Mapeo directo (ver §10.2) | **Mapeado** |
| **MVP Copiosis** | **HSCSG v15 OS + Copiosis Adapter** | Desplegable en semanas | **En curso** |

### 4.2 Confluencia Arquitectónica

**Alineación Directa:**
1. **Promesa 1 (Necesidades gratis) ≈ CaaS Tier 1 (Acceso Libre Nivel 1 ROE)** — Ambas garantizan supervivencia sin costo
2. **Promesa 2 (Recompensa por bien) ≈ Value Equation + NetBenefitFlow** — Ambas premian resultado medido, no tiempo/esfuerzo
3. **NBR intransferible ≈ ZNU-Vesting (claim pathway única, owner quemado)** — Ambas evitan captura/especulación
4. **Daño resta en BN ≈ Value Equation con término `-cδ×Damage`** — Ambas internalizan externalidades
5. **Jurados Ciudadanos ≈ CDS_Jurados** — Poder acotado, transparencia, sortición
6. **Estigmergia ≈ FRS + Autómata + Colaberry** — Orden emergente por señales de gradiente BN
6. **Tres Tipos de Bienes ≈ goodType en ValueFlows** — Clasificación operativa obligatoria
7. **Transición voluntaria ≈ Fases HSCSG 0-D** — Adopción emergente, sin coacción

**Brechas Identificadas:**

| Brecha Copiosis | Resolución HSCSG |
|-----------------|------------------|
| **Arranque en frío (bootstrap)**: quién provee necesidades año 1 sin NBR previo | **Fondo Solarpunk + Bienes de Capital gratis (FABSHIP) + Coordinadores voluntarios + DSI (100 ZNU/mes)** — HSCSG ya tiene mecanismo de bootstrap financiero y productivo |
| **Identidad/Sybil-resistance**: jurados, NBR, identidad global | **ERC-8004 + Social DNA + Web of Trust (Solarpunk) + ERC-8004 anclaje RAO** — HSCSG tiene pila de identidad soberana |
| **Escalabilidad Jurados globales**: sorteo anónimo a millones | **CDS_Jurados federado**: sorteo por nodo Cosateca (150 personas), coordinación inter-nodos vía η_fed | HSCSG resuelve con federación ontogenética |
| **Bienes globales (clima, océanos)**: gobernanza multinivel | **η_fed > max(η)+0.1** → Tratado Federación + CGC (Consejo Guardianes Commons) + RAO sync | HSCSG tiene capa federativa |
| **Doble contabilidad (€ + NBR sombra)**: convivencia décadas | **Oráculo Paridad Local + ZCS/ZNU + ReFi Bridge** — HSCSG ya opera dual (ZCS interno / USDC externo) | 
| **Validación empírica nula**: supuestos no testados | **Fase 0 Proto-CO (10 casos beta, 90 días)** — HSCSG tiene hoja de ruta con validación temprana |

### 4.3 Mejoras Mutuas

**Copiosis mejora a HSCSG:**
1. **Métrica BN multi-escala con daño restando** → Value Equation más robusta, ética = rentable por diseño
2. **Tres tipos de bienes (reglas duras)** → Clasificación operativa en ValueFlows, elimina ambigüedad en pricing/acceso
3. **Jurados Ciudadanos para pesos algorítmicos** → Capa humana verificable en CDS, democratiza valores sin politizar casos
4. **NBR Gateways (lujos) + Bienes de Capital gratis** → Arquitectura completa Necesidades/Lujos/Capital en CaaS/FABSHIP
5. **Estigmergia como principio organizador explícito** → Refuerza FRS/Autómata/Colaberry como "sistema nervioso" medible
6. **Honestidad intelectual radical** → Cultura HSCSG: "Sobrevivencia ≠ Propósito", Modo Lucidez, auditoría triaxial

**HSCSG mejora a Copiosis:**
1. **Bootstrap real**: Fondo Solarpunk, DSI, FABSHIP, CaaS-BM, ZCS/ZNU, Trustlines, Vesting — infraestructura financiera/productiva ya diseñada
2. **Identidad soberana**: ERC-8004 + Social DNA + Web of Trust + RAO — resuelve Sybil-resistance sin Estado
3. **Federación ontogenética**: Nodos se replican (mitosis) con constitución MJ propagada — resuelve escalabilidad Jurados y bienes globales
3. **Autómata Soberano (Conway + MJ)**: Agente que se sostiene regenerando base material — ejecuta BN, gestiona Vesting, gobierna Jurados
4. **Métricas operativas (CAC, η, ξ, σᵤ, PGS, ICS, IVC)** — KPIs verificables para medir salud del sistema, no solo diseño teórico
5. **Modo Lucidez (Ley III)**: Transparencia radical activable, datos crudos + provenance — anticaptura epistémica
6. **Hoja de ruta con validación empírica**: Fase 0 (10 casos beta, 90 días) — cierra brecha diseño→implementación

### 4.4 Inferencias Extrapoladas (Más Allá del Texto Original)

1. **NBR-ZNU Hybrid Flow**: NBR (recompensa final, intransferible) → se convierte en ZNU-liquido vía `claimVesting()` → circula en ZCS (demurrage) / Trustlines (crédito mutuo) / ReFi Bridge. **NBR = "medalla"; ZNU = "dinero operativo"**.
2. **BN-Gradient as Coordination Signal**: El gradiente de BN en el territorio (Life Radius 15km) se vuelve **señal de coordinación primaria** para Autómata, Colaberry, Coordinadores. Donde BN_potencial es alto → fluyen recursos, personas, NBR.
3. **Jurados como "Oracle Humano" para Value Equation**: Los pesos `W_i` de las 8 escalas BN son **parámetros vivos de la Value Equation**. Jurados = oráculo humano descentralizado que calibra la función de recompensa.
4. **Three-Goods-Type Enforcement en Smart Contracts (offline)**: `goodType` en ValueFlows + `capitalAccessTier` en CaaS + `luxuryPriceNBR` en Solarpunk = **contrato social auto-ejecutable** sin blockchain.
5. **Transition Bridge (€ ↔ ZNU ↔ NBR)**: Oráculo Paridad Local (ya existe) + ZCS/ZNU + NetBenefitFlow = **puente contable** para fase de convivencia con dinero-deuda (doble contabilidad automática).
6. **Copiosis Adapter como "Skill" del Autómata**: El Autómata HSCSG carga `copiosis.ts` como **Talent** (arquitectura Vessel+Talent) — permite activar/desactivar modo Copiosis por nodo, forkear parámetros, auditar.

---

## 5. ENTREGABLES ACCIONABLES (PLAN DE IMPLEMENTACIÓN)

| Entregable | Descripción | Módulo HSCSG | Prioridad | Esfuerzo |
|------------|-------------|--------------|-----------|----------|
| **1. `lib/netbenefit.ts`** | Motor BN: 8 escalas, pesos `W_i` (CDS_Jurados), cálculo `BN = Σ(W_i × S_i) - cδ×Damage`, detección anomalías (vectores 1,2,4 threat model) | Core (nuevo) | **P0** | 3-4 semanas |
| **2. `lib/cds_jurados.ts`** | Sorteo criptográfico (ERC-8004), anonimato, rotación 28d, `W_i ∈ [min_i, max_i]`, actas en RAO, límites duros (solo pesos, no casos) | CDS (sub-módulo nuevo) | **P0** | 2-3 semanas |
| **3. `lib/copiosis.ts`** | Adaptador: `BN → NetBenefitFlow(ZNU)`, `NBRGateway(luxuryPriceNBR)`, `GoodTypeClassifier(need|luxury|capital)`, `CapitalAccessVerifier(AUT_PROD threshold)` | Integración (nuevo) | **P0** | 3-4 semanas |
| **4. `lib/valueflows.ts` (extend)** | Campos: `goodType: 'need'|'luxury'|'capital'`, `luxuryPriceNBR`, `capitalAccessTier`, `bnScore`, `damageScore` | Core (extend) | **P0** | 1-2 semanas |
| **5. `lib/metrics.ts` (extend)** | Vectores nuevos: `AUT_PSIC` (psicológico/comunitario), `AUT_ESTE` (estético/cultural). Preguntas scoring para cada uno. | Metrics (extend) | **P1** | 1 semana |
| **6. `lib/solarpunk.ts` (extend)** | `luxuryPriceNBR` en ofertas, `NBRGateway` quema NBR → emite ZNU a productor vía Value Equation | Solarpunk (extend) | **P1** | 1-2 semanas |
| **7. `lib/caas.ts` (extend)** | `capitalAccessTier`: verifica `AUT_PROD ≥ threshold` + `verifiedProducer` → acceso gratis a tierra/herramientas/infra (FABSHIP) | CaaS (extend) | **P1** | 1-2 semanas |
| **8. `lib/automaton.ts` (extend)** | `BN_Gradient_Signal` en FRS: emite coordenadas (lat, lon, sector, BN_potencial) → atrae coordinadores/autómatas | Autómata (extend) | **P1** | 1 semana |
| **9. `docs/copiosis_integration.md`** | Este documento (backup + integración) | Docs | **P0** | Hecho |
| **10. `docs/copiosis_homologation.md`** | Tabla homologación detallada + inferencias extrapoladas + threat model mapeado | Docs | **P1** | 1 semana |
| **11. Glosario (Anexo A Brief)** | 15+ términos: `NetBenefit`, `NetBenefitFlow`, `BN_Gradient`, `CDS_Jurados`, `NBRGateway`, `GoodType`, `CapitalAccessTier`, `AUT_PSIC`, `AUT_ESTE`, `W_i`, `cδ`, `SybilResistance`, `Estigmergia`, `BootstrapCopiosis`, `TransitionBridge` | Brief Exhaustivo | **P0** | 1 semana |

---

## 6. ACTUALIZACIONES REQUERIDAS EN BRIEF_EXHAUSTIVO_HSCSG_COSATECA_OS.md

### 6.1 Tabla Frameworks Integrados (§2.3) — Añadir fila:
```markdown
| **Copiosis** | §2.17, §3.0, §5.6, §6.1, §14.1, §14.3-14.4, §16, §17 | NBR, Beneficio Neto 8 escalas, 3 tipos bienes, Jurados Ciudadanos, Estigmergia, Transición voluntaria, MVP post-dinero |
```

### 6.2 Nueva Sección §2.17 (siguiendo patrón conceptual_critical_framework_pattern.md)

### 6.3 Mapa Operativo §3.0 — Añadir párrafo "Vaso comunicante Copiosis ↔ HSCSG" + tabla homologación resumida

### 6.4 Subsistemas Integrales §5.6 — Añadir fila `CDS_Jurados` + `NetBenefitEngine` + `BN_Gradient_Signal`

### 6.5 Métricas Ampliadas §6.1 — Añadir `AUT_PSIC`, `AUT_ESTE` + preguntas scoring

### 6.6 Arquitectura Financiera §14.3-14.4 — Añadir `NBRGateway`, `NetBenefitFlow`, `GoodType`, `CapitalAccessTier`

### 6.7 Orquestación Agéntica §16 — Añadir fila `Copiosis Adapter` como Talent en registry

### 6.8 Memética §17 — Añadir bullets: "NBR como medalla no transferible", "BN-Gradient como señal de coordinación", "Jurados Ciudadanos como oráculo humano"

### 6.9 Glosario (Anexo A) — 15+ términos nuevos

---

## 7. VALIDACIÓN POST-INTEGRACIÓN (Checklist)

- [ ] Numeración: §2.17 añadida, no hay duplicados en top-level sections
- [ ] Índice: entrada §2.17 añadida después de §2.16 (OneManCompany)
- [ ] Glosario: 15 términos nuevos de Copiosis aparecen al menos 1 vez
- [ ] Anclas internas: `[2.17 Copiosis](#217-copiosis...)` coincide con título
- [ ] Cross-references: §3.0, §5.6, §6.1, §14.3, §16, §17 actualizadas
- [ ] Threat model Copiosis mapeado a §11/§13 riesgos HSCSG
- [ ] Bootstrapping: Fondo Solarpunk + FABSHIP + DSI resuelve "arranque en frío"
- [ ] Federación Jurados: CDS_Jurados por nodo + η_fed resuelve escalabilidad global

---

## 8. REFERENCIAS

- **Fuente primaria:** https://copiosis.net/es (navegación exhaustiva agosto 2025: Qué Es, Cómo Funciona, Por Qué Es Mejor, La Transición, A Fondo 4 capas 17+ artículos, FAQ, Blog, Acerca de)
- **Backup local:** `docs/copiosis_backup.md` (informe exhaustivo quirúrgico compilado)
- **HSCSG v15 OS:** `docs/*_integration.md` (23 integraciones previas), `BRIEF_EXHAUSTIVO_HSCSG_COSATECA_OS.md`
- **Skill usada:** `hscsg-multi-framework-integration` + `conceptual_critical_framework_pattern.md`

---

*Integración compilada siguiendo metodología 4 fases (Desempaquetado → Limpieza → GitHub → Evolución) y patrón `conceptual_critical_framework_pattern.md`. No se limita al texto literal: infiere arquitecturas operativas que Copiosis no desarrolló (bootstrap, identidad, federación, autómata, métricas, hoja de ruta validada).*