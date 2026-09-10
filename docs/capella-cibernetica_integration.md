# ASIMILACIÓN: Capella - Cibernética; Más Allá de la Praxeología
## Análisis e Isomorfismos con HSCSG v15 OS

**Fuente:** `Capella - Cibernética; Más Allá de la Praxeología.pdf` (Francisco Capella, CRCI 2026)  
**Fecha asimilación:** 2026-09-10  
**Skill:** `hscsg-repo-assimilation` → `references/capella-cibernetica.md`

---

## 1. RESUMEN EJECUTIVO

Capella argumenta que la **praxeología austriaca** (estudio de la acción humana intencional) es necesaria pero **insuficiente**: debe complementarse con **cibernética y biología**. Los organismos son agentes económicos: la vida implica acción dirigida, control, costes, coordinación. La intencionalidad emerge evolutivamente para mejorar el control. La mente es herramienta de resolución de problemas. La cooperación social requiere cognición, emociones, moral, normas, reputación. La cibernética es la ciencia del control (timón/timonel): sensores, procesadores, actuadores, memoria, comunicación. Aplicable a individuos, grupos, máquinas, organizaciones. El control es gradual: autonomía vs heteronomía. Agentes autopoyéticos (vivos) vs alopoyéticos/heteropoyéticos (artificiales).

---

## 2. MAPEO DE CONCEPTOS CAPELLA → HSCSG v15 OS

| Concepto Capella | Isomorfismo HSCSG v15 OS | Módulo / Archivo | Ley MJ |
|---|---|---|---|
| **Praxeología + Cibernética + Biología** | **Arquitectura trifásica HSCSG**: lib (lógica pura/praxeológica) + state (tipos/cibernética) + screens (UI/biología interfaz) | `src/core/lib/`, `src/core/state/`, `src/app/screens/` | Ley I/II/III |
| **Agente = máquina que consume recursos, produce trabajo** | **Autómata Soberano** (AgentNode/TaskNode) + **CaaS** (compute como servicio medible) | `automaton.ts`, `caas.ts` | Ley II |
| **Agente autónomo vs heterónomo** | **Boundaries Gateway** (fail-closed) + **MJ Gate** (evalúa autonomía real vs control externo) | `boundaries.ts`, `orchestration.ts` | Ley I |
| **Control cibernético: sensores, procesadores, actuadores, memoria, comunicación** | **LoopEngine** (tick-based: detectOverloads=sensores, simulateReconfig=procesador, actions=actuadores, state=memoria, Nostr=comunicación) | `loopEngine.ts`, `nostrRelay.ts` | Ley II |
| **Homeostasis = autorregulación dinámica** | **ZNU demurrage** (5%/28d) + **CDS decay** + **pipeDecay** (anti-acumulación) | `valueDual.ts`, `loopEngine.ts`, `pipeline.ts` | Ley III |
| **Intencionalidad = adaptación evolutiva para control** | **MJ Gate enforcement** (Ley I/II/III) — intencionalidad alineada con leyes físicas | `orchestration.ts` | Ley I/II/III |
| **Cooperación social = cognición + emociones + moral + reputación** | **Células** (CELULA_PRINCIPIOS) + **Symbiosky** (credibilidad/reputación) + **Colony** (domain tree + reputation) | `celulas.ts`, `symbiosky.ts`, `colony.ts` | Ley II |
| **Señales costosas = honestidad** | **Proof of Response** (NEAR AI) + **RAO Verification** (evidencia costosa) | `proofOfResponse.ts`, `lib/rao_verification.ts` | Ley I |
| **Empresa = agente coordinador (empresario/jefe)** | **Autómata spawnChild** + **Orchestration budgetStatus** + **Coworkers** (standing roles) | `automaton.ts`, `orchestration.ts`, `Coworkers.tsx` | Ley II |
| **Mercado libre = coordinación descentralizada via precios** | **Vasos Comunicantes** (protocolos flujo valor) + **Trustlines** (crédito bilateral) + **priceParity oracle** | `vasos_comunicantes.ts`, `trustlines.ts`, `valueDual.ts` | Ley III |
| **Agentes autopoyéticos (vivos) vs alopoyéticos/heteropoyéticos** | **Nodos Soberanos** (autopoyéticos: DID, compute, data) vs **Skills** (heteropoyéticos: creados por nodos) | `packages/identity/`, `skills/` | Ley I |

---

## 3. ANÁLISIS PROFUNDO POR LEYES MJ

### Ley I: Materia Prima Soberana
**Capella:** "Los organismos son agentes autónomos autopoyéticos: se producen a sí mismos a partir de recursos limitados." La autonomía requiere sistema de control cibernético propio + intereses/valoraciones propias.
**HSCSG:** `BaseMaterial` = materia prima soberana. `Identidad Soberana` (DID:hsccsg) = autopoyesis identitaria. `Boundaries fail-closed` = protección de autonomía contra heteronomía externa. `NodeMode offline-first` = soberanía material real.

### Ley II: Trabajo como Fuente de Valor
**Capella:** "Un agente es una máquina que consume recursos y produce trabajo... El control es necesario cuando la elección entre acciones es posible." Empresario/jefe = agente coordinador. Mercado = coordinación descentralizada via precios/señales.
**HSCSG:** `CACVectors` → `autFromCAC` (AUT = coeficiente autonomía = trabajo real). `Matchmaker` = coordinación descentralizada meritocrática (35% AUT + 30% cred + 20% expertise + 15% learning). `CaaS` = trabajo computacional como servicio con tiers medibles. `Pipeline` = orquestador anidado gobernanza-ejecución.

### Ley III: Float Soberano
**Capella:** "Los agentes pueden cooperar o competir... La coordinación entre cooperadores puede ser planificada (jerarquías) o no planificada (mercado, precios)." Cooperar para competir / competir por cooperar.
**HSCSG:** `ZNU` + `demurrage` = float que no se acumula (anti-renta). `Trustlines` = float bilateral peer-to-peer. `Vasos Comunicantes` = float en red fractal (células 8→64→512→4096). `Vesting` = float liberado gradualmente (BerryInvestor isomorf).

---

## 4. INTEGRACIÓN TÉCNICA PROPUESTA

### 4.1 Validación Arquitectura Actual
La arquitectura **lib/state/screens** de HSCSG **ya implementa** la trifásica Capella:
- **lib/** = praxeología (lógica pura, funciones de cálculo: metrics.ts, integral.ts, automaton.ts)
- **state/** = cibernética (tipos, estado, sensores/actuadores: store.ts, agentMesh.ts, proofOfResponse.ts)
- **screens/** = biología interfaz (UI viva: 40+ *.tsx con i18n, Lucidez Mode)

### 4.2 Extensiones Propuestas

| Módulo | Extensión Capella → HSCSG |
|---|---|
| `metrics.ts` | Agregar `homeostasisIndex` (capacidad autorregulación dinámica), `intentionalityScore` (emergencia evolutiva control) |
| `loopEngine.ts` | Explícito mapping: sensors→detectOverloads, processor→simulateReconfig, actuators→actions, memory→state, comms→Nostr |
| `automaton.ts` | `autopoiesisLevel` (0=heteropoyético skill, 1=alopoyético servicio, 2=autopoyético nodo soberano) |
| `boundaries.ts` | `heteronomyDetector` — detecta control externo (agente heterónomo) vs autonomía real |
| `celulas.ts` | `cooperationCostSignaling` — señales costosas (Proof of Response) para cooperación honesta |
| `symbiosky.ts` | `reputationAsCostlySignal` — credibility = señal costosa difícil de falsificar |

---

## 5. ÉTICA Y ALINEACIÓN HSCSG

**Alineación natural:** Capella proporciona **fundamentación científica** (cibernética + biología) para la arquitectura HSCSG. No hay tensión ética — es **validación teórica**.

**Puntos clave:**
1. **Praxeología insuficiente sola** → HSCSG **ya integra** cibernética (loopEngine, Autómata) y biología (GaiaUnion meta-arquitectura)
2. **Control = sensibilidad + inteligencia** → `loopEngine` (γ-CARMIS reconfiguración heurística) = timón/timonel inteligente
3. **Autonomía real vs performativa** → `Boundaries fail-closed` + `MJ Gate` = test real de autonomía
4. **Señales costosas** → `Proof of Response` + `RAO` = implementación técnica de "señales difíciles de falsificar"

---

## 6. ARCHIVOS GENERADOS

| Archivo | Ubicación | Tipo |
|---|---|---|
| `capella-cibernetica_backup.md` | `docs/` | Backup original (solo local) |
| `capella-cibernetica_integration.md` | `docs/` | **Este archivo** |
| `capella-cibernetica.md` | `skills/hscsg/hscsg-repo-assimilation/references/` | Referencia skill |

---

## 7. PRÓXIMOS PASOS

1. **Documentar mapping explícito** lib/state/screens ↔ praxeología/cibernética/biología en `README.md` arquitectura
2. **Implementar `homeostasisIndex` + `intentionalityScore`** en `metrics.ts`
3. **Añadir `autopoiesisLevel`** a `AgentNode` type en `automaton.ts`
4. **Registrar en `fuentes_indice.json`** (fuente #117)

---

**Fin de asimilación** — `hscsg-repo-assimilation` v15.0