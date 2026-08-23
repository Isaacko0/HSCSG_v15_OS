# cyfyifanchen/one-person-company — Integración Operativa con HSCSG v15 OS

**Objetivo:** Integrar la curación validada de herramientas IA (LLM rankings, TTS matrix, code/design/website builders, productivity tools) como **catálogos de datos puros TypeScript** en HSCSG v15 OS, enriqueciendo: Autómata (model selection), CoachFAB (voice layer), CaaS-BM (tooling stack), navteka (rapid prototyping), y briefs de perfiles.

---

## Resumen Ejecutivo

cyfyifanchen/one-person-company es una **curación práctica "review-based"** (2.7k★) de herramientas IA para one-person companies. No es código ejecutable ni arquitectura: es **datos puros curados** con:
- Rankings reales (WebDev Arena, Chatbot Arena / LMArena)
- Pricing real verificado (30+ TTS services, 15+ website builders)
- Categorización por caso de uso (LLM, TTS, Code, Design, Website, Productivity)
- Reviews honestas: "algunos son tesoros, algunos son trampas"

**Valor para HSCSG:** Datos puros → TypeScript constants → consumidos por Autómata, CoachFAB, CaaS-BM, navteka, briefs de perfiles.

---

## Decisiones Take / Adapt / Discard

### ✅ TAKE (Integrar Directamente como Datos Puros)

| # | Dato Puro | Destino HSCSG | Archivo Objetivo |
|---|-----------|---------------|------------------|
| 1 | **LLM Rankings WebDev Arena / Chatbot Arena** | `LLMRankings` constant | `lib/llm_rankings.ts` |
| 2 | **TTS Services Matrix (30+ servicios)** | `TTSMatrix` constant | `lib/tts_matrix.ts` |
| 3 | **Code Tools Catalog (50+ herramientas)** | `CodeToolsCatalog` constant | `lib/code_tools_catalog.ts` |
| 4 | **Design Tools Catalog (25+ herramientas)** | `DesignToolsCatalog` constant | `lib/design_tools_catalog.ts` |
| 5 | **Website Builders Comparison (15+)** | `WebsiteBuilders` constant | `lib/website_builders.ts` |
| 6 | **Productivity Tools (30+)** | `ProductivityTools` constant | `lib/productivity_tools.ts` |
| 7 | **Pricing Data Real (verificado)** | `CAASPricing` reference | `lib/caas_pricing.ts` |
| 8 | **Learning Resources URLs** | `LearningResources` constant | `docs/learning_resources_catalog.md` |
| 9 | **Website Builders TOP 3 (v0, Lovable, Bolt)** | `RapidPrototypingTools` | `lib/rapid_prototyping.ts` |
| 10 | **LLM Rankings WebDev Arena + Chatbot Arena** | `ModelSelectionLogic` | `lib/model_selection.ts` |

### 🔄 ADAPT (Transformar para HSCSG)

| # | Dato Original | Adaptación Requerida | Destino HSCSG |
|---|---------------|---------------------|---------------|
| 1 | **Markdown tables en README** | Parsear a TypeScript typed constants + Zod schemas | `lib/*_catalog.ts` |
| 2 | **Precios en USD/CNY** | Conversión a ZNU via `priceParity` oracle | `lib/caas_pricing.ts` |
| 3 | **Categorías en chino** | Traducir claves a inglés + mantener labels CN/EN | TypeScript enums con i18n |
| 4 | **Rankings LLM (WebDev Arena)** | Convertir a `ModelSelectionStrategy` para Autómata | `lib/model_selection.ts` |
| 5 | **TTS Matrix (30+ servicios)** | Convertir a `VoiceProvider` type para CoachFAB | `lib/voice_stack.ts` |
| 6 | **Website Builders (v0, Lovable, Bolt)** | Convertir a `RapidPrototypingTool` para navteka | `lib/rapid_prototyping.ts` |
| 7 | **Code Tools (IDE, Terminal, Docs, Full-stack)** | Convertir a `ToolingStack` para CaaS-BM | `lib/tooling_stack.ts` |
| 8 | **Design Tools (Recraft, Canva, Finisher)** | Convertir a `DesignProvider` para CoachFAB assets | `lib/design_stack.ts` |
| 9 | **Pricing USD/CNY** | Función `usdToZNU(usd)` usando `priceParity` | `lib/caas_pricing.ts` |
| 10 | **Learning Resources** | Convertir a `LearningPath` para `BRIEF_ONBOARDING_CONSTRUCTOR` | `docs/learning_resources_catalog.md` |

### ❌ DISCARD (No Integrar)

| # | Componente | Razón |
|---|------------|-------|
| 1 | Assets (gif, jpg, png) | Solo visuales README |
| 2 | README.md / README-EN.md | Documentación del repo fuente |
| 3 | LICENSE | Licencia del repo fuente (MIT) |
| 4 | Estructura assets/ | Solo organización del repo fuente |
| 5 | Malicious/parody series (NaaS) | Solo humor, sin valor operativo |
| 6 | Estructura de navegación HTML del README | Específica del repo fuente |

---

## Archivos a Crear en HSCSG (Nuevos Módulos de Datos)

| Archivo | Descripción | Basado en cyfyifanchen |
|---------|-------------|------------------------|
| `src/core/lib/llm_rankings.ts` | `LLMRankings` interface + WebDev/Chatbot Arena data | LLM rankings tables |
| `src/core/lib/tts_matrix.ts` | `TTSProvider` interface + 30+ services matrix | TTS matrix table |
| `src/core/lib/code_tools_catalog.ts` | `CodeTool` enum + 50+ tools categorized | Code tools sections |
| `src/core/lib/design_tools_catalog.ts` | `DesignTool` enum + 25+ tools | Design tools sections |
| `src/core/lib/website_builders.ts` | `WebsiteBuilder` interface + 15+ builders | Website builders section |
| `src/core/lib/productivity_tools.ts` | `ProductivityTool` enum + 30+ tools | Productivity section |
| `src/core/lib/rapid_prototyping.ts` | `RapidPrototypingTool` (v0, Lovable, Bolt, etc.) | Website builders TOP 3 |
| `src/core/lib/model_selection.ts` | `ModelSelectionStrategy` using WebDev Arena | LLM rankings |
| `src/core/lib/voice_stack.ts` | `VoiceProvider` interface for CoachFAB | TTS matrix |
| `src/core/lib/design_stack.ts` | `DesignProvider` for CoachFAB assets | Design tools |
| `src/core/lib/tooling_stack.ts` | `ToolingStack` for CaaS-BM Talent Market | Code tools catalog |
| `src/core/lib/caas_pricing.ts` | `priceParity` + USD/CNY → ZNU conversion | Pricing tables |
| `src/core/lib/learning_resources.ts` | `LearningResource` for onboarding | Learning resources section |
| `docs/learning_resources_catalog.md` | Curated markdown for onboarding brief | Learning resources |

---

## Archivos a Extender/Modificar (Existentes)

| Archivo | Extensión | Referencia cyfyifanchen |
|---------|-----------|------------------------|
| `src/core/lib/automaton.ts` | Añadir: `modelSelectionStrategy` usando `LLMRankings` | LLM rankings WebDev Arena |
| `packages/ui/src/CoachFAB.tsx` | Añadir: `voiceProvider` selector usando `TTSMatrix` | TTS matrix 30+ services |
| `packages/ui/src/CoachFAB.tsx` | Añadir: `designAssetGenerator` usando `DesignToolsCatalog` | Design tools (Recraft, Canva, Finisher) |
| `src/core/lib/caas_bm.ts` | Añadir: `toolingStack` para Talent Market offers | Code tools catalog |
| `src/core/lib/caas_pricing.ts` | Añadir: `usdToZNU()`, `cnyToZNU()` usando priceParity | Pricing tables USD/CNY |
| `src/app/(os)/coach/page.tsx` | Integrar: voice selector, design asset buttons | CoachFAB enhancements |
| `src/app/(os)/talent-market/page.tsx` | Añadir: tooling stack filter para talents | Code tools catalog |
| `src/app/(os)/rapid-prototyping/page.tsx` | Nueva pantalla: v0/Lovable/Bolt integration | Website builders TOP 3 |
| `docs/BRIEF_ONBOARDING_CONSTRUCTOR.md` | Enriquecer: learning resources curados | Learning resources section |
| `docs/BRIEF_PERFIL_PROFESIONALES.md` | Añadir: tooling stack recomendado por especialidad | Code/Design/Website tools |
| `docs/BRIEF_PERFIL_AUTODIDACTAS.md` | Añadir: learning path con recursos curados | Learning resources |
| `docs/BRIEF_PERFIL_PROFESIONALES.md` | Añadir: pricing real para budget planning | Pricing data |

---

## Vasos Comunicantes Afectados

| Vaso | Impacto | Acción |
|------|---------|--------|
| **intel:match** | Autómata usa `LLMRankings` para model selection | `ModelSelectionStrategy` en Autómata |
| **intel:match** | CoachFAB usa `TTSMatrix` para voice layer | Voice provider selector en CoachFAB |
| **app:federate** | CaaS-BM Talent offers incluyen `ToolingStack` | Talent offers con tooling stack |
| **infra:connect** | navteka rapid prototyping con `RapidPrototypingTools` | v0/Lovable/Bolt integration |
| **eco:sync** | Métricas de tooling adoption → CAC vectors | Tooling adoption metrics |
| **governance:sync** | CDS jurados evalúan tooling standards | Tooling standards en governance |

---

## Plan de Implementación (Orden Sugerido)

### Fase 1: Data Constants (Día 1-2)
```bash
# Crear módulos de datos puros (solo TypeScript constants + Zod validation)
src/core/lib/llm_rankings.ts
src/core/lib/tts_matrix.ts
src/core/lib/code_tools_catalog.ts
src/core/lib/design_tools_catalog.ts
src/core/lib/website_builders.ts
src/core/lib/productivity_tools.ts
src/core/lib/rapid_prototyping.ts
src/core/lib/model_selection.ts
src/core/lib/voice_stack.ts
src/core/lib/design_stack.ts
src/core/lib/tooling_stack.ts
src/core/lib/caas_pricing.ts
src/core/lib/learning_resources.ts

# Tests
src/core/lib/*.test.ts
```

### Fase 2: Integración en Módulos Core (Día 2-3)
```bash
# Extender módulos existentes
src/core/lib/automaton.ts          # + modelSelectionStrategy
src/core/lib/caas_bm.ts            # + toolingStack
src/core/lib/caas_pricing.ts       # + usdToZNU/cnyToZNU
packages/ui/src/CoachFAB.tsx       # + voiceProvider, designAssetGenerator
src/core/lib/voice_stack.ts        # CoachFAB voice layer
src/core/lib/design_stack.ts       # CoachFAB design assets
src/core/lib/tooling_stack.ts      # CaaS-BM tooling
src/core/lib/rapid_prototyping.ts  # navteka prototyping
```

### Fase 3: UI + Pantallas (Día 3-4)
```bash
# Nuevas pantallas / extensiones
src/app/(os)/coach/page.tsx              # Voice selector, design buttons
src/app/(os)/talent-market/page.tsx      # Tooling stack filter
src/app/(os)/rapid-prototyping/page.tsx  # v0/Lovable/Bolt iframe integration
docs/BRIEF_ONBOARDING_CONSTRUCTOR.md     # + learning resources
docs/BRIEF_PERFIL_PROFESIONALES.md       # + tooling stack por especialidad
docs/BRIEF_PERFIL_AUTODIDACTAS.md        # + learning path curado
docs/learning_resources_catalog.md       # Markdown curado
```

### Fase 4: Tests + Verificación (Día 4)
```bash
npm run typecheck
npm run build
npm run test
npm run preview
# Verificar: /coach voice selector, /talent-market tooling filter, /rapid-prototyping
```

---

## Tasks en Orchestrator (Actualizar `scripts/orchestrator-next-steps.js`)

```javascript
// Workstream: CYFYIFANCHEN_INTEGRATION
{
  "id": "CYF-data-constants",
  "title": "Crear data constants TypeScript (llm_rankings, tts_matrix, code_tools, design_tools, website_builders, productivity, rapid_proto, model_selection, voice_stack, design_stack, tooling_stack, caas_pricing, learning_resources)",
  "deps": [],
  "effort": 3,
  "value": 90,
  "workstream": "CYFYIFANCHEN_INTEGRATION",
  "source": "agent"
},
{
  "id": "CYF-automaton-integration",
  "title": "Integrar LLMRankings + ModelSelection en Automaton",
  "deps": ["CYF-data-constants"],
  "effort": 2,
  "value": 85,
  "workstream": "CYFYIFANCHEN_INTEGRATION",
  "source": "agent"
},
{
  "id": "CYF-coachfab-voice-design",
  "title": "CoachFAB: Voice Provider selector (TTSMatrix) + Design Asset Generator (DesignToolsCatalog)",
  "deps": ["CYF-data-constants"],
  "effort": 2,
  "value": 80,
  "workstream": "CYFYIFANCHEN_INTEGRATION",
  "source": "agent"
},
{
  "id": "CYF-caas-tooling-pricing",
  "title": "CaaS-BM: ToolingStack para Talent Market + Pricing USD/CNY→ZNU",
  "deps": ["CYF-data-constants"],
  "effort": 2,
  "value": 85,
  "workstream": "CYFYIFANCHEN_INTEGRATION",
  "source": "agent"
},
{
  "id": "CYF-ui-pages",
  "title": "UI Pages: CoachFAB voice/design, Talent Market tooling filter, Rapid Prototyping page",
  "deps": ["CYF-coachfab-voice-design", "CYF-caas-tooling-pricing"],
  "effort": 3,
  "value": 80,
  "workstream": "CYFYIFANCHEN_INTEGRATION",
  "source": "agent"
},
{
  "id": "CYF-briefs-enrichment",
  "title": "Enriquecer briefs: ONBOARDING + PROFESIONALES + AUTODIDACTAS con tooling/learning/pricing",
  "deps": ["CYF-data-constants"],
  "effort": 1,
  "value": 75,
  "workstream": "CYFYIFANCHEN_INTEGRATION",
  "source": "agent"
}
```

---

## Verification Checklist

- [ ] `npm run typecheck` pasa (TypeScript strict en todos los nuevos módulos)
- [ ] `npm run build` pasa (Vite + tsc)
- [ ] `npm run test` pasa (tests para cada data constant + integraciones)
- [ ] `npm run preview` → `/coach` voice selector + design buttons funcionando
- [ ] `npm run preview` → `/talent-market` tooling stack filter funcionando
- [ ] `npm run preview` → `/rapid-prototyping` v0/Lovable/Bolt iframes cargando
- [ ] `node scripts/orchestrator-next-steps.js run CYF-data-constants` → completado
- [ ] `node scripts/orchestrator-next-steps.js run CYF-ui-pages` → completado
- [ ] Vasos comunicantes: intel:match, app:federate, infra:connect, eco:sync funcionando
- [ ] `docs/cyfyifanchen_opc_integration.md` creado (este documento)
- [ ] `docs/cyfyifanchen_opc_backup.md` creado (backup quirúrgico)
- [ ] `BRIEFS_INDEX.md` actualizado (BF-083, BF-084 → ✅)
- [ ] `fuentes_indice.json` actualizado (fuente #15 estado ✅)

---

## Referencias

- **Backup Quirúrgico:** `docs/cyfyifanchen_opc_backup.md`
- **Fuentes Índice:** `docs/fuentes_indice.json` (fuente #15)
- **BRIEFS_INDEX:** BF-083 (`cyfyifanchen_opc_backup.md`), BF-084 (`cyfyifanchen_opc_integration.md`)
- **Briefs de Perfiles:** `BRIEF_PERFIL_PROFESIONALES.md`, `BRIEF_PERFIL_AUTODIDACTAS.md`, `BRIEF_ONBOARDING_CONSTRUCTOR.md`
- **Skills:** `hscsg-repo-assimilation` (metodología 4 fases), `brief-detector-recommender`
- **Repo Fuente:** https://github.com/cyfyifanchen/one-person-company (commit ed91bce)

---

*Integración generada: 2026-08-22 | Metodología HSCSG 4 fases | Repo: cyfyifanchen/one-person-company*