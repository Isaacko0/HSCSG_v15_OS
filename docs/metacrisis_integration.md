# Metacrisis.org — Integración Operativa con HSCSG v15 OS

**Objetivo:** Integrar el mapa del ecosistema meta-crisis (proyectos, personas, libros, comunidades, conceptos) como **datos puros TypeScript + enriquecimiento de HSCSG** en HSCSG v15 OS, estableciendo isomorfismos operativos entre la meta-crisis (diagnóstico) y HSCSG (solución).

---

## Resumen Ejecutivo

Metacrisis.org es un **meta-recurso curado** por Kyle Kowalski (Sloww) que mapea el ecosistema de la "meta-crisis" (wisdom web, liminal web, sensemaking web). Incluye 50+ proyectos, 100+ personas, 75+ libros, 15+ comunidades, 15+ mapas/síntesis, y 250+ hashtags.

**Valor para HSCSG:** La meta-crisis es el **contexto diagnóstico** de HSCSG. HSCSG es la **propuesta de solución** a la meta-crisis. Esta integración establece los isomorfismos operativos entre ambos marcos.

---

## Isomorfismos Clave Meta-Crisis ↔ HSCSG

| Concepto Meta-Crisis | Concepto HSCSG | Isomorfismo |
|---------------------|----------------|-------------|
| **Meta-Crisis** | Crisis de civilización (HSCSG §1) | Interlocking existential risks = dependencia estructurada |
| **Meaning Crisis** | Crisis de sentido (Ley III MJ) | Wisdom cultivation = Lucidez cultivation |
| **Game A → Game B** | Extractivo → Regenerativo (HSCSG §1) | Post-monetary transition |
| **Sensemaking** | Autómata E²R + Lucidez | Relevance realization = E²R tree search |
| **Liminal Web** | Vasos Comunicantes | Network of networks |
| **Wisdom Web** | CoachFAB + Coworkers | Wisdom cultivation tools |
| **Emergentsia** | Civilizaciones (HSCSG §17) | Post-monetary communities |
| **Metamodernity** | Sistema Alráico (G1-CARMIS) | Developmental, integrative |
| **Collective Intelligence** | CDS + Autómata | Collaborative decision-making |
| **Anti-fragile Civilization** | CaaS-BM + ZNU | Resilient economic systems |
| **Existential Risk** | Ley I MJ (no dañar) | Harm prevention, fail-closed |
| **Governance Design** | CDS + MJ Laws | Sovereign governance |
| **Cultural Transformation** | Fondo Solarpunk + Cosatecas | Regenerative culture |
| **Indigenous Thinking** | Base Material + Tekitl | Territorial knowledge |
| **Gift Economy** | ZNU + ValueFlows | Post-monetary exchange |
| **Vertical Development** | 13 Pilares × 7 Capas | Developmental matrix |
| **Integral Theory** | Sistema Alráico (8 caras) | Holistic framework |
| **Complexity Science** | loopEngine (6 loops) | Systems dynamics |

---

## Decisiones Take / Adapt / Discard

### ✅ TAKE (Integrar Directamente como Datos Puros)

| # | Dato | Destino HSCSG |
|---|------|---------------|
| 1 | **Proyectos meta-crisis** (50+) | `lib/meta_crisis_projects.ts` |
| 2 | **Personas meta-crisis** (100+) | `lib/meta_crisis_people.ts` |
| 3 | **Libros/papers** (75+) | `lib/meta_crisis_books.ts` |
| 4 | **Comunidades** (15+) | `lib/meta_crisis_communities.ts` |
| 5 | **Mapas/síntesis** (15+) | `lib/meta_crisis_maps.ts` |
| 6 | **Isomorfismos** | `lib/meta_crisis_isomorphisms.ts` |
| 7 | **Conceptos clave** (Game B, Meaning Crisis, etc.) | `lib/meta_crisis_concepts.ts` |
| 8 | **HSCSG Holosociocibersimbiogenesis definición** | `docs/hscsg_definition.md` |

### 🔄 ADAPT (Transformar)

| # | Original | Adaptación |
|---|----------|------------|
| 1 | Markdown tables | → TypeScript typed interfaces |
| 2 | URLs externas | → `ExternalLink` type con tracking |
| 3 | Hashtags | → `MetaCrisisTag` enum |
| 4 | Community platforms | → `CommunityPlatform` type |

### ❌ DISCARD

| Componente | Razón |
|------------|-------|
| Contenido de terceros (libros, podcasts, videos) | Derechos de autor; solo referencias |
| Comunidades externas (Discord, Circle, etc.) | Son espacios externos; solo enlaces |
| Twitter List | Son cuentas externas; solo referencias |
| Subreddits | Son espacios externos; solo enlaces |

---

## Archivos a Crear en HSCSG (Nuevos Módulos de Datos)

| Archivo | Descripción | Basado en metacrisis.org |
|---------|-------------|--------------------------|
| `src/core/lib/meta_crisis_projects.ts` | `MetaCrisisProject` interface + 50+ proyectos | Projects section |
| `src/core/lib/meta_crisis_people.ts` | `MetaCrisisPerson` interface + 100+ personas | People section |
| `src/core/lib/meta_crisis_books.ts` | `MetaCrisisBook` interface + 75+ libros | Books & Papers section |
| `src/core/lib/meta_crisis_communities.ts` | `MetaCrisisCommunity` interface + 15+ comunidades | Communities section |
| `src/core/lib/meta_crisis_maps.ts` | `MetaCrisisMap` interface + 15+ mapas | Maps & Syntheses section |
| `src/core/lib/meta_crisis_isomorphisms.ts` | Isomorfismos meta-crisis ↔ HSCSG | Análisis cruzado |
| `src/core/lib/meta_crisis_concepts.ts` | Conceptos clave (Game B, Meaning Crisis, etc.) | Concept extraction |
| `docs/hscsg_definition.md` | Definición Holosociocibersimbiogenesis del usuario | Archivos del usuario |

---

## Archivos a Extender/Modificar (Existentes)

| Archivo | Extensión | Referencia metacrisis |
|---------|-----------|----------------------|
| `src/core/lib/boundaries.ts` | Añadir: `MetaCrisisPolicy` (existential risk rules) | Existential risk, Ley I MJ |
| `src/core/lib/automaton.ts` | Añadir: `sensemaking` module (relevance realization) | Sensemaking, wisdom cultivation |
| `src/core/state/automaton.ts` | Añadir: `metaCrisis` slice (Game B, meaning crisis) | Game B state |
| `src/core/state/store.ts` | Integrar `metaCrisis` slice | Store integration |
| `packages/ui/src/CoachFAB.tsx` | Añadir: chips "Game B", "Meaning Crisis", "Wisdom" | CoachFAB enhancements |
| `src/app/(os)/meta-crisis/page.tsx` | Nueva pantalla: mapa meta-crisis interactivo | Meta-crisis explorer |
| `src/app/(os)/vasos/page.tsx` | Actualizar vasos con proyectos meta-crisis | Vasos update |
| `docs/BRIEF_EXHAUSTIVO_HSCSG_COSATECA_OS.md` | Añadir §18: Meta-Crisis Context | Brief update |
| `docs/BRIEF_PERFIL_PROFESIONALES.md` | Añadir: conexiones meta-crisis por especialidad | Perfil enrichment |
| `docs/BRIEF_PERFIL_INTERDISCIPLINARES.md` | Añadir: puentes meta-crisis | Perfil enrichment |
| `docs/BRIEF_PERFIL_TRANSDISCIPLINARES.md` | Añadir: transdisciplina meta-crisis | Perfil enrichment |

---

## Vasos Comunicantes Afectados

| Vaso | Impacto | Acción |
|------|---------|--------|
| **intel:match** | **Principal** — Sensemaking, wisdom cultivation, relevance realization | `MetaCrisisConcepts` + `SensemakingModule` en Autómata |
| **governance:sync** | Game B governance, collective intelligence | `GameBGovernance` en CDS |
| **trust:bridge** | Meta-crisis network as trust network | `MetaCrisisNetwork` en trust layer |
| **app:federate** | Proyectos meta-crisis como apps federadas | `MetaCrisisProjects` en CaaS-BM |
| **eco:sync** | Cultural transformation metrics | `CulturalTransformation` metrics |
| **infra:connect** | Comunidades meta-crisis como infra social | `MetaCrisisCommunities` en neko federation |

---

## Plan de Implementación (Orden Sugerido)

### Fase 1: Data Constants + Definición (Día 1)
```bash
# Data constants (datos puros)
src/core/lib/meta_crisis_projects.ts      # 50+ proyectos
src/core/lib/meta_crisis_people.ts       # 100+ personas
src/core/lib/meta_crisis_books.ts        # 75+ libros
src/core/lib/meta_crisis_communities.ts  # 15+ comunidades
src/core/lib/meta_crisis_maps.ts         # 15+ mapas
src/core/lib/meta_crisis_isomorphisms.ts # Isomorfismos
src/core/lib/meta_crisis_concepts.ts     # Conceptos clave

# Docs
docs/hscsg_definition.md                 # Definición del usuario
```

### Fase 2: Integración en Módulos Core (Día 1-2)
```bash
# Extender módulos existentes
src/core/lib/boundaries.ts               # + MetaCrisisPolicy
src/core/lib/automaton.ts                # + sensemaking module
src/core/state/automaton.ts              # + metaCrisis slice
src/core/state/store.ts                  # + metaCrisis slice integration
```

### Fase 3: UI + Pantallas (Día 2)
```bash
# Nueva pantalla
src/app/(os)/meta-crisis/page.tsx        # Meta-crisis explorer

# CoachFAB enhancements
packages/ui/src/CoachFAB.tsx             # + chips "Game B", "Meaning Crisis", "Wisdom"

# Vasos actualizados
src/app/(os)/vasos/page.tsx              # + proyectos meta-crisis
```

### Fase 4: Briefs + Verificación (Día 2)
```bash
# Briefs enrichment
docs/BRIEF_EXHAUSTIVO_HSCSG_COSATECA_OS.md  # + §18 Meta-Crisis
docs/BRIEF_PERFIL_PROFESIONALES.md          # + conexiones meta-crisis
docs/BRIEF_PERFIL_INTERDISCIPLINARES.md     # + puentes meta-crisis
docs/BRIEF_PERFIL_TRANSDISCIPLINARES.md     # + transdisciplina meta-crisis

# Tests + Verificación
npm run typecheck
npm run build
npm run test
npm run preview
```

---

## Tasks en Orchestrator

```javascript
// Workstream: METACRISIS_INTEGRATION
{
  "id": "METACRISIS-data-constants",
  "title": "Crear data constants: meta_crisis_projects, people, books, communities, maps, isomorphisms, concepts",
  "deps": [],
  "effort": 3,
  "value": 95,
  "workstream": "METACRISIS_INTEGRATION",
  "source": "agent"
},
{
  "id": "METACRISIS-hscsg-definition",
  "title": "Crear docs/hscsg_definition.md con definición Holosociocibersimbiogenesis del usuario",
  "deps": [],
  "effort": 1,
  "value": 90,
  "workstream": "METACRISIS_INTEGRATION",
  "source": "agent"
},
{
  "id": "METACRISIS-integration-core",
  "title": "Integrar en core: Boundaries MetaCrisisPolicy, Automaton sensemaking, state metaCrisis slice",
  "deps": ["METACRISIS-data-constants"],
  "effort": 2,
  "value": 85,
  "workstream": "METACRISIS_INTEGRATION",
  "source": "agent"
},
{
  "id": "METACRISIS-ui",
  "title": "UI: Meta-crisis explorer page, CoachFAB chips, Vasos update",
  "deps": ["METACRISIS-integration-core"],
  "effort": 2,
  "value": 80,
  "workstream": "METACRISIS_INTEGRATION",
  "source": "agent"
},
{
  "id": "METACRISIS-briefs",
  "title": "Enrich briefs: BRIEF_EXHAUSTIVO §18, PROFESIONALES, INTERDISCIPLINARES, TRANSDISCIPLINARES",
  "deps": ["METACRISIS-hscsg-definition"],
  "effort": 1,
  "value": 75,
  "workstream": "METACRISIS_INTEGRATION",
  "source": "agent"
}
```

---

## Verification Checklist

- [ ] `npm run typecheck` pasa (TypeScript strict en todos los nuevos módulos)
- [ ] `npm run build` pasa (Vite + tsc)
- [ ] `npm run test` pasa (tests para cada módulo + integraciones)
- [ ] `npm run preview` → `/meta-crisis` pantalla accesible
- [ ] `npm run preview` → `/vasos` proyectos meta-crisis integrados
- [ ] CoachFAB chips "Game B", "Meaning Crisis", "Wisdom" funcionando
- [ ] `node scripts/orchestrator-next-steps.js run METACRISIS-data-constants` → completado
- [ ] `node scripts/orchestrator-next-steps.js run METACRISIS-ui` → completado
- [ ] Vasos: `intel:match` funcionando con sensemaking + wisdom
- [ ] `docs/metacrisis_integration.md` creado (este documento)
- [ ] `docs/metacrisis_backup.md` creado (backup quirúrgico)
- [ ] `docs/hscsg_definition.md` creado (definición del usuario)
- [ ] `BRIEFS_INDEX.md` actualizado (BF-089, BF-090 → ✅)
- [ ] `fuentes_indice.json` actualizado (fuente #18 estado ✅)

---

## Próximos Pasos (Post-Integración)

1. **Conectar con Gaia-Mycelium** — Brandon Nørgaard (Comparing Approaches to Meta-Crisis) tiene conexión directa con Gaia-Mycelium
2. **Conectar con OpenHaven** — El mapeo de proyectos meta-crisis enriquece la OpenHaven Matrix
3. **Conectar con Project Weave** — Los isomorfismos meta-crisis ↔ HSCSG pueden ser verificables via Weave protocols
4. **Conectar con OneManCompany** — Game B + Autómata Soberano = runtime de nueva civilización
5. **Conectar con Copiosis** — Gift economy (Charles Eisenstein) mapea a NBR/ZNU

---

## Referencias

- **Backup Quirúrgico:** `docs/metacrisis_backup.md`
- **HSCSG Definition:** `docs/hscsg_definition.md`
- **Fuentes Índice:** `docs/fuentes_indice.json` (fuente #18)
- **BRIEFS_INDEX:** BF-089 (`metacrisis_backup.md`), BF-090 (`metacrisis_integration.md`)
- **Skills:** `hscsg-repo-assimilation` (metodología 4 fases), `brief-detector-recommender`
- **Repo Fuente:** https://metacrisis.org (Obsidian Publish, Kyle Kowalski)

---

*Integración generada: 2026-08-22 | Metodología HSCSG 4 fases | Repo: metacrisis.org | Conexión: Holosociocibersimbiogenesis (HSCSG) del usuario*