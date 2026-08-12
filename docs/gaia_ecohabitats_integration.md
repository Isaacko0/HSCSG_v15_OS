# Integración Gaia Union / Red de EcoHabitats & BioRegiones — Perspectiva Triple (Usuario · LLM · HSCSG)

**Fuente:** documento `.md` local "Gaia Union: El Plan Maestro Integrado para la Emergencia Planetaria" (título original hace referencia a "Red de EcoHabitats & BioRegiones del Mundo Unificado - Un solo Corazon"). Ontología de ecosistema vivo (organismo regenerativo).

## 0. Síntesis
Gaia Union modela un nodo/planeta como **organismo vivo** con niveles (célula→tejido→órgano→sistema→organismo) y **sistemas vitales** análogos a los biológicos. Esto es la **capa ontológica/biológica** que el `/pipeline` mecánico de HSCSG aún no tenía: no solo un loop de datos, sino un *cuerpo* con órganos especializados y un "ADN" de valores. El documento proporciona una **ontología completa de organismo vivo** que reencuadra toda la arquitectura HSCSG como fisiología.

## 1. Perspectiva del Usuario
Quiere ver su nodo no como una app, sino como un **organismo vivo** donde cada módulo es un órgano, cada persona una célula, y la gobernanza es "epigenética" (se adapta sin traicionar la esencia). El matchmaker y el feedback deben operar *dentro* de ese cuerpo. La "Red de EcoHabitats & BioRegiones" se materializa como la federación de BioHabitats (nodos territoriales) conectados por BioHubs (encuentro físico) y Gaia Hub/OS (sistema nervioso digital).

## 2. Perspectiva del LLM (asimilo / extirpo)

### Asimilo (como modelo de organismo + datos de sistemas vitales)

| Sistema Vital Gaia | Vector HSCSG | Órgano HSCSG |
|---------------------|--------------|--------------|
| Gaia Hub & OS (Nervioso) | `/pipeline` FRS + Aside/Header + `lib/connector.ts` | cerebro distribuido del nodo |
| Gaia Fund (Circulatorio) | ZNU / CaaS / ITC / Trustlines / Vesting | flujo de recursos por contribución (AUT×CDS) |
| Gaia DAO (Custodia/Homeostático) | Consejo de Dominios (CDS) + Gaia Wisdom Council + `lib/symbiosky.ts` (conviction voting) | equilibrio de bienes comunes |
| Gaia Market (Metabólico) | Solarpunk / Tekitl / Trustlines / `/flujo` (conector) | intercambio regenerativo |
| Gaia School (Aprendizaje) | `/aprender` + Colaberry + `lib/learning.ts` (retos) | memoria viva + retos = mitosis celular |
| Gaia Impact Hub (Evolutivo) | `/integral` COS + Bounty (`lib/gaia.ts`) | incubación de iniciativas |
| Gaia BioLabs (Investigación) | `/oraculo` (hechos) + `/verificacion` (CAC triaxial) + `lib/oracle.ts` | experimentación/verdad verificable |
| Gaia BioHabitats (Territorio) | `/base` (base material: AUT_ALIM/ENER/HABI/AGUA/SALU) | entorno físico/ecológico del nodo |
| Gaia BioHubs (Territorial) | nodos federados DTN/AP + `/circulos` (Dunbar) | encuentro físico entre nodos |
| Constitution = ADN | Materialismo Jerárquico (3 Leyes I-III) | código fuente inmutable del ecosistema |
| Código Genético = Valores | MJ Gate (filtro de valores: Regeneración, Cooperación, Transparencia, Diversidad, Soberanía, Interdependencia, Amor, Servicio) | cultura/comportamiento operativo |
| Epigenética = Gobernanza | CDS / MJ Gate adaptable / `lib/gaia.ts` (círculos biomiméticos) | expresión contextual sin alterar esencia |

### Extirpo (no se asimila, se reemplaza por equivalente soberano)
- **Gaia Fund como financiamiento externo** (donaciones/inversiones USD) → en HSCSG es ZNU/CaaS (postmonetario, sin EVM, emisión democrática, demurrage).
- **BioHabitats físicos reales** (ecoaldeas, fincas) → se modela como `/base` (base material local: sensores, métricas AUT, FABSHIP), no se construye infra física en el software.
- **Nombre "Gaia Union" como marca externa** → se integra como módulo `/gaiaunion` (corona la ontología del vaso, junto a Gaia Confederation en `lib/gaia.ts`).
- **Gobernanza centralizada implícita** → HSCSG usa federación DTN/AP + CDS rotativo + η_fed > max(η)+0.1.

## 3. Perspectiva HSCSG + CaaS (postmonetario)
- **Ley I (No dañar):** BioHabitats/base material + Homeostático (DAO/WisdomCouncil) protegen la vida; el loop no daña la base (MJ Gate bloquea acción que degrade AUT vectorial).
- **Ley II (Ganarse la vida soberanizando):** Fund Circulatorio = ZNU por AUT×CDS (acceso por contribución verificada, no por dinero). Reward = Beneficio Neto (Copiosis) → ZNU-Vesting.
- **Ley III (Lucidez/Nunca engañar):** Hub Nervioso (FRS/Verificación/Oracle) + Constitution (MJ) = transparencia radical, trazabilidad RAO, Modo Lucidez toggle real.

## 4. Interrelaciones / Correlaciones con el Pipeline Anidado (lo que pidió el usuario)

El `/pipeline` actual (CDS→OAD→COS→ITC→FRS) se **reencuadra como el sistema nervioso + circulatorio** del organismo Gaia Union:

```
ÓRGANO NERVIOSO (FRS/pipeline + connector):  observa → matchmaker (alook) decide → ejecuta
ÓRGANO CIRCULATORIO (ZNU/ITC/Trustlines):    premia la contribución del loop (Value Equation → ZNU)
ÓRGANO HOMEOSTÁTICO (CDS/WisdomCouncil):    equilibra bienes comunes (Splitter + Threshold Bucket)
ÓRGANO METABÓLICO (Solarpunk/Tekitl):       intercambio regenerativo (ValueFlows multi-tipo)
ÓRGANO DE APRENDIZAJE (Aprender/Colaberry): retos = mitosis celular (crece el tejido cognitivo)
ÓRGANO EVOLUTIVO (Integral COS/Bounty):     incuba nuevos órganos (proyectos, talentos, nodos)
ÓRGANO INVESTIGACIÓN (Oracle/Verificación): experimenta/valida (Realitio→BN, CAC triaxial)
ÓRGANO TERRITORIAL (Base):                  BioHabitat del nodo (AUT_* medidos en suelo real)
ÓRGANO ENCUENTRO (Círculos/Federación):     BioHubs = nodos DTN/AP + círculos Dunbar
```

**Matchmaker (alook en `lib/pipeline.ts`):** empareja *células* (personas/agentes) con *órganos* (necesidades CAC) según su peso computado (35% AUT + 30% credibility Symbiosky + 20% expertise Democracia + 15% retos Aprender).

**Feedback (FRS/automaton en `lib/pipeline.ts` + `lib/automaton.ts`):** es el sistema nervioso que retroalimenta cada órgano vía `routeFeedback()` — enruta hallazgos FRS a CDS/OAD/COS/ITC.

**Flujos de trabajo (ponytail / `lib/connector.ts`):** son los "reflejos" del organismo (una línea resuelve). El conector `deriveStageParams(stage,state)` auto-llena la siguiente etapa desde el estado actual (derivado no duplicado); `NextStageBanner` siembra navegación (`seedStage`).

**Novedad Gaia Union:** los 9 sistemas vitales no son módulos aislados; son **órganos interdependientes** que comparten el mismo "sangre" (ZNU/ValueFlows) y "nervios" (FRS/CDS). La salud del organismo se mide por **IVC** (Integridad Verificable Civilizatoria) = 1 - σᵤ×(1-η)×(1-ξ_norm) ≥ 0.85.

## 5. Entregables (implementados en P0 — VA MÁS ALLÁ del molde)

| Entregable | Módulo HSCSG | Prioridad |
|------------|--------------|-----------|
| `docs/gaia_ecohabitats_backup.md` + `gaia_ecohabitats_integration.md` | Docs | **P0** |
| `lib/gaiaunion.ts` (organismo: niveles + 9 sistemas vitales + constitución + código genético + epigenética) | NUEVO | **P0** |
| `state/gaiaunion.ts` + store (6 lugares: `useGaiaUnion`, `gaiaUnionState`, `organismHealth`, `vitalSystems`, `constitution`, `epigenetics`) | store | **P0** |
| Pantalla `/gaiaunion` (mapa de organismo vivo interactivo: 9 órganos, salud IVC, matchmaker/feedback/flujos integrados) | NUEVO | **P0** |
| BRIEF §2.26 (actualizado), vaso §3.5, matriz §9.2, §16 | Brief | **P0** |

> **Nota de extirpación:** financiamiento externo (Fund USD), infra física (BioHabitats reales), marca "Gaia Union" → ZNU/CaaS + `/base` + ontología del vaso. El documento aporta **ontología**, no infraestructura.

## 6. Conceptos NUEVOS NACIDOS (no existían en HSCSG v15 OS antes de esta asimilación)

1. **Organismo Vivo como Meta-Arquitectura** — reencuadre ontológico de todo el stack: ya no "módulos", sino "órganos"; ya no "loops", sino "fisiología".
2. **9 Sistemas Vitales Mapeados 1:1 a Módulos HSCSG** — correspondencia biológica explícita que faltaba (Nervioso, Circulatorio, Homeostático, Metabólico, Aprendizaje, Evolutivo, Investigación, Territorial-físico, Territorial-encuentro).
3. **Constitución = ADN / Código Genético = Valores / Epigenética = Gobernanza** — triple capa ontológica que unifica Materialismo Jerárquico (3 Leyes) + MJ Gate + CDS.
4. **BioHabitats = `/base` medido en territorio real** — los 13 pilares AUT se convierten en "signos vitales" del organismo territorial.
5. **BioHubs = Federación DTN/AP + Círculos Dunbar** — los nodos físicos de encuentro se materializan como círculos biomiméticos (3-13, 13-150) federados.
6. **Matchmaker como Emparejamiento Célula-Órgano** — el matchmaker no es solo "asignar tareas"; es emparejar células (personas/agentes) con las necesidades de órganos específicos según su peso fisiológico.
7. **Feedback como Sistema Nervioso Autónomo** — FRS retroalimenta cada órgano, no solo observa; `routeFeedback` enruta señales a CDS/OAD/COS/ITC como impulsos nerviosos.
8. **IVC como Salud del Organismo** — métrica unificada de salud civilizatoria (ya en BRIEF §6.2) ahora tiene base ontológica: IVC = 1 - σᵤ×(1-η)×(1-ξ_norm).

## 7. Conceptos que son ETAPAS DE EVOLUCIÓN (refinamientos de lo ya existente)

1. **Pipeline CDS→OAD→COS→ITC→FRS → Sistema Nervioso + Circulatorio** — el loop mecánico existente se dota de fisiología; no cambia la lógica, cambia la metáfora operativa.
2. **ZNU/ITC/Trustlines → Sangre/Flujos Circulatorios** — la economía postmonetaria ya existía; ahora tiene anclaje biológico (nutrientes/energía distribuida).
3. **CDS + Wisdom Council → Homeostasis / Sistema Inmune** — la gobernanza existente gana función biológica: equilibrar, proteger, no dañar (Ley I).
4. **Solarpunk/Tekitl → Metabolismo Regenerativo** — el intercambio existente se reencuadra como transformación de recursos en valor vivo.
5. **Colaberry/Aprender/Oracle → Aprendizaje / Memoria / Investigación** — los módulos de conocimiento ganan roles fisiológicos explícitos.
6. **Conector `/flujo` + `deriveStageParams` → Reflejos / Vías Nerviosas Rápidas** — el conector de flujo entre pantallas es la materialización técnica de "reflejos de una línea" (ponytail).
7. **Fases HSCSG 0-D → Ontogénesis del Organismo** — la hoja de ruta civilizatoria se lee como desarrollo embrionario: Proto-CO (blastocisto) → Fase A (gastrulación) → Fase B (organogénesis) → Fase C (organismo maduro) → Fase D (federación = organismo social).

---

**Fecha de asimilación:** 2026-08-11  
**Versión HSCSG:** v15 OS (Cosateca OS + Hylo fork)  
**Estado:** Backup + Integration completados, listos para push a origin/master