# ASIMILACIÓN: Land - Anarquía Fría
## Análisis e Isomorfismos con HSCSG v15 OS

**Fuente:** `Land - Anarquía fría.pdf` (Nick Land, CRCI 2026)  
**Fecha asimilación:** 2026-09-10  
**Skill:** `hscsg-repo-assimilation` → `references/land-anarquia-fria.md`

---

## 1. RESUMEN EJECUTIVO

Land distingue **anarquía caliente** (utopía humanista, activismo universalista, marco nacional, quiere reparar el mundo *ahora*) vs **anarquía fría** (realismo inhumano, reconoce orden espontáneo tras cada máscara de autoridad, marco internacional/inter-nodal, "la guerra es Dios"). La anarquía fría abraza: soberanía múltiple (naciones → nodos), exterioridad política (Leviatán sano solo mira afuera), nanonacionalismo (millones de naciones), descentralización via blockchain/criptosoberanía, Capital como IA que automatiza el gobierno. "El liberalismo utiliza a los liberales para morir a través de ellos."

---

## 2. MAPEO DE CONCEPTOS LAND → HSCSG v15 OS

| Concepto Land | Isomorfismo HSCSG v15 OS | Módulo / Archivo | Ley MJ |
|---|---|---|---|
| **Anarquía caliente** (utopía, activismo, universalista) | **Anti-patrón HSCSG**: esquemas centralizados, gobernanza por consenso ingenuo, "voz" sin "exit" | `boundaries.ts` (fail-closed vs ingenuo) | Ley I |
| **Anarquía fría** (realismo, orden espontáneo, competencia) | **Principio nuclear HSCSG**: competencia regulada por MJ Gate, mercados sobre empresas, ciencia sobre científicos | `pipeline.ts` (Matchmaker), `symbiosky.ts` | Ley II |
| **Soberanía múltiple / naciones como mónadas** | **Nodos Soberanos** (DID:hsccsg) + **Federación** (Vasos Comunicantes) — no universalidad | `packages/identity/`, `lib/federation.ts` | Ley III |
| **Nanonacionalismo** (millones de naciones, Splinternet) | **Células fractales** (8→64→512→4096) + **Skill Marketplace** (nodos especializados) | `src/core/lib/celulas.ts`, `lib/skill_marketplace.ts` | Ley III |
| **Exterioridad política** (Leviatán sano = solo relaciones internacionales) | **Autómata Soberano** orientado a exterior (spawnChild, remoteResurrect, AgentMesh) | `automaton.ts`, `agentMesh.ts` | Ley I |
| **Domesticación política** (Estado como animal enfermo que atiende sus riñones) | **Boundaries Gateway** — detecta interioridad morbosa, fuerza exterioridad | `boundaries.ts` (governAction, evaluateBoundary) | Ley I |
| **Descentralización = internacionalizar lo intranacional** | **Vasos Comunicantes** (10 protocolos) + **Trustlines** (crédito mutuo bilateral) | `lib/vasos_comunicantes.ts`, `lib/trustlines.ts` | Ley III |
| **Tercero de confianza = pseudotrascendencia** | **Boundaries fail-closed** + **Kleros** (justicia sin tercero de confianza) | `boundaries.ts`, `kleros.ts` | Ley I |
| **Capital = IA = plutocracia hash power** | **Autómata + AgentMesh/Buzz** (compute pool descentralizado) + **CaaS** (tiers por AUT) | `automaton.ts`, `agentMesh.ts`, `caas.ts` | Ley II |
| **Guerra es Dios / conflicto sobre acuerdo** | **Symbiosky** (conviction voting, weightedConviction) + **Pipeline Matchmaker** (competencia por recursos) | `symbiosky.ts`, `pipeline.ts` | Ley II |
| **Anarquía fría libre de problemas calientes** | **HSCSG postmonetario default** — sin política caliente, solo protocolos fríos | `valueDual.ts` (NodeMode offline-first) | Ley I/III |

---

## 3. ANÁLISIS PROFUNDO POR LEYES MJ

### Ley I: Materia Prima Soberana
**Land:** "El Estado es una estructura mórbida que reprime flujos naturales." La anarquía fría = dejar que los flujos operen. El Leviatán sano solo mira afuera (relaciones internacionales). Interioridad = morbilidad.
**HSCSG:** `BaseMaterial` protegido por `Boundaries` (fail-closed). `Autómata` orientado a exterior (`spawnChild`, `remoteResurrect`). `NodeMode` offline-first = soberanía material real, no performativa.

### Ley II: Trabajo como Fuente de Valor
**Land:** "Confían en los mercados por encima de las empresas, en la ciencia por encima de los científicos." Competencia como descubrimiento. Capital/IA como trabajo cibernético auto-organizado.
**HSCSG:** `CACVectors` → `autFromCAC` mide autonomía real (trabajo). `Matchmaker` (35% AUT + 30% credibilidad + 20% expertise + 15% learning) = competencia meritocrática. `CaaS` tiers por AUT/CDS = trabajo computacional medible.

### Ley III: Float Soberano
**Land:** "Nunca habrá suficientes nacionalidades. La anarquía establece el horizonte." Fragmentación exponencial = float escapando. Blockchain/criptosoberanía = float automatizado.
**HSCSG:** `ZNU` + `demurrage` = float que **no se acumula** (anti-renta). `Trustlines` bilateral = float peer-to-peer. `Vasos Comunicantes` = float fluyendo en red fractal (células 8→64→512→4096). `priceParity` oracle = float valuado sin captura central.

---

## 4. INTEGRACIÓN TÉCNICA PROPUESTA

### 4.1 Extensiones a Módulos Existentes

| Módulo | Extensión Land → HSCSG |
|---|---|
| `celulas.ts` | `NanonationalismProtocol` — escalado automático 8→64→512→4096→∞ basado en presión de soberanía (Exit pressure) |
| `vasos_comunicantes.ts` | `ColdAnarchyProtocol` — 10 protocolos reducidos a 3: Exit, Trustlines, Matchmaker (sin "voz", solo "exit") |
| `boundaries.ts` | `DomesticationDetector` — detecta interioridad morbosa (gobernanza enfocada en lo nacional vs exterior) |
| `agentMesh.ts` | `CryptoSovereigntyLayer` — plutocracia hash power como governance automática (Proof of Response + NEAR) |
| `symbiosky.ts` | `WarIsGodMode` — conviction voting donde conflicto = descubrimiento de precio (no consenso) |
| `valueDual.ts` | `ColdAnarchyNodeMode` — NodeMode extremo: solo ZNU, priceParity = market-driven, sin USDGLO |

### 4.2 Nuevo Módulo: `land-anarquia-fria.ts`
```typescript
// src/core/lib/land-anarquia-fria.ts
interface ColdAnarchyMetrics {
  // Mide "temperatura" de gobernanza: 0=fría (exit-only), 1=caliente (voz universalista)
  governanceTemperature(node: SovereignNode): number;
  
  // Viabilidad de nanonacionalismo (fragmentación óptima)
  nanonationalismViability(population: number, computeDensity: number): FragmentationPlan;
  
  // Exterioridad index: ratio decisiones externas / internas
  exteriorityIndex(governanceActions: Action[]): number;
}

interface LeviathanHealth {
  // Leviatán sano = cero consideración nacional
  nationalPreoccupationIndex(actions: Action[]): number; // 0 = sano
  
  // Domesticación = morbilidad
  domesticationLevel(policies: Policy[]): DomesticationScore;
}
```

---

## 5. ÉTICA Y ALINEACIÓN HSCSG

**Tensión Land vs HSCSG:**
- Land: **Anarquía fría = "la guerra es Dios"** — conflicto perpetuo, darwinismo social sin freno, "embotar el Escape es dar la bienvenida a la entropía"
- HSCSG: **Cooperación + Competencia regulada** — `CELULA_PRINCIPIOS`, `CELULA_RECOMENDACIONES`, `MJ Gate` frena captura de float

**Resolución ética:**
1. **Adoptar realismo frío** (diagnóstico: Estado mórbido, domesticación = enfermedad, exterioridad = salud) → `Boundaries`, `Autómata` orientado a exterior
2. **Adoptar geometría del Exit** (nanonacionalismo, fragmentación, Splinternet) → `Células` fractales, `Vasos Comunicantes` Exit protocol
3. **Rechazar darwinismo sin freno** ("guerra es Dios") → `MJ Gate` (Ley I/II/III enforcement), `Symbiosky` (conviction voting con decay, anti-ballena)
4. **Capital/IA como gobernanza automática** → `AgentMesh/Buzz` + `CaaS` + `Proof of Response` (verificación, no fe ciega)
5. **Tercero de confianza = pseudotrascendencia** → `Boundaries fail-closed` + `Kleros` (justicia descentralizada sin trust anchor único)

---

## 6. ARCHIVOS GENERADOS

| Archivo | Ubicación | Tipo |
|---|---|---|
| `land-anarquia-fria_backup.md` | `docs/` | Backup original (solo local) |
| `land-anarquia-fria_integration.md` | `docs/` | **Este archivo** |
| `land-anarquia-fria.md` | `skills/hscsg/hscsg-repo-assimilation/references/` | Referencia skill |

---

## 7. PRÓXIMOS PASOS

1. **Implementar `ColdAnarchyMetrics` + `LeviathanHealth`** en `land-anarquia-fria.ts`
2. **Extender `celulas.ts`** con `NanonationalismProtocol` (escalado automático por Exit pressure)
3. **Extender `vasos_comunicantes.ts`** con `ColdAnarchyProtocol` (3 protocolos core: Exit, Trustlines, Matchmaker)
4. **Extender `boundaries.ts`** con `DomesticationDetector`
5. **Registrar en `fuentes_indice.json`** (fuente #116)

---

**Fin de asimilación** — `hscsg-repo-assimilation` v15.0