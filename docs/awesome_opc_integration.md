# chen103226/awesome-one-person-company — Integración Operativa con HSCSG v15 OS

**Objetivo:** Integrar la awesome list curada (casos de estudio verificados, stacks recomendados, metodología Mom Test, 30-day launch) como **datos puros TypeScript + enriquecimiento de briefs** en HSCSG v15 OS.

---

## Resumen Ejecutivo

chen103226/awesome-one-person-company es una awesome list **high-signal** (279★) de one-person companies con foco en casos reales con datos financieros verificados, stacks tecnológicos recomendados, y metodología de validación (The Mom Test).

**Valor para HSCSG:**
- Benchmarks reales para CaaS-BM pricing
- Guía de stacks para briefs de perfiles
- 30-day launch checklist para ONBOARDING
- Metodología Mom Test para validación en Autómata
- Casos de estudio para briefs de perfiles

---

## Decisiones Take / Adapt / Discard

### ✅ TAKE (Integrar Directamente)

| # | Dato | Destino HSCSG |
|---|------|---------------|
| 1 | **Casos de estudio internacionales** (Levels, Lou, Yongfook, Vassallo, Barry) | `lib/case_studies.ts` |
| 2 | **Casos de estudio chinos** (小熊猫C++) | `lib/case_studies.ts` |
| 3 | **Stacks tecnológicos 2026** (Vercel, Laravel, Pieter Levels) | `lib/stacks_recommendations.ts` |
| 4 | **Metodología Mom Test** | `lib/mom_test_methodology.ts` |
| 5 | **30-day launch checklist** | `docs/30_day_launch_checklist.md` |
| 6 | **Learning paths** (novice, tech, product) | `docs/learning_paths.md` |
| 7 | **Herramientas recomendadas** (Figma, Framer, Carrd, Notion, etc.) | Enriquecer `lib/tooling_stack.ts` |
| 8 | **Citas textuales creadores** | `docs/creator_quotes.md` |
| 9 | **Failory (casos fracaso)** | `BRIEF_ONBOARDING_CONSTRUCTOR.md` lessons |

### 🔄 ADAPT (Transformar)

| # | Original | Adaptación |
|---|----------|------------|
| 1 | Markdown tables | → TypeScript typed interfaces |
| 2 | Citas en chino/inglés | → i18n keys |
| 3 | URLs externas | → `ExternalLink` type con tracking |
| 4 | Income en USD/CNY | → USD base + conversion helpers |

### ❌ DISCARD

| Componente | Razón |
|------------|-------|
| Assets (imágenes, banners) | Solo visuales |
| WeChat QR codes | China-specific |
| Twitter handles directos | Solo relevantes seleccionados |
| README.md / README_EN.md / README_CN.md | Docs del repo fuente |

---

## Archivos a Crear

| Archivo | Descripción |
|---------|-------------|
| `src/core/lib/case_studies.ts` | Casos de estudio typed (ingresos, stack, puntos clave) |
| `src/core/lib/stacks_recommendations.ts` | Stacks 2026 typed (Vercel, Laravel, Pieter Levels) |
| `src/core/lib/mom_test_methodology.ts` | Funciones validación Mom Test |
| `docs/30_day_launch_checklist.md` | Checklist curado |
| `docs/learning_paths.md` | Rutas aprendizaje |
| `docs/creator_quotes.md` | Citas textuales |

---

## Archivos a Extender

| Archivo | Extensión |
|---------|-----------|
| `src/core/lib/caas_pricing.ts` | + Benchmarks de ingresos reales |
| `src/core/lib/tooling_stack.ts` | + Herramientas curadas (Figma, Framer, etc.) |
| `src/core/lib/automaton.ts` | + Validación Mom Test en lifecycle |
| `src/core/state/automaton.ts` | + Mom Test state (entrevistas, validación) |
| `packages/ui/src/CoachFAB.tsx` | + Chips "Launch Check", "Mom Test", "Case Studies" |
| `src/app/(os)/coach/page.tsx` | + Integración chips |
| `src/app/(os)/case-studies/page.tsx` | Nueva pantalla: casos navegables |
| `docs/BRIEF_PERFIL_AUTODIDACTAS.md` | + Stacks + learning paths + 30-day checklist |
| `docs/BRIEF_PERFIL_PROFESIONALES.md` | + Casos de estudio por especialidad |
| `docs/BRIEF_ONBOARDING_CONSTRUCTOR.md` | + 30-day checklist + Mom Test + lessons learned |

---

## Vasos Comunicantes Afectados

| Vaso | Impacto |
|------|---------|
| **intel:match** | Mom Test validación en Autómata |
| **app:federate** | Casos de estudio → pricing benchmarks CaaS-BM |
| **eco:sync** | Métricas de launch → CAC vectors (execution, delivery) |
| **governance:sync** | Mom Test validation en CDS proposals |

---

## Plan Implementación

### Fase 1: Data Constants (Día 1)
- `src/core/lib/case_studies.ts`
- `src/core/lib/stacks_recommendations.ts`
- `src/core/lib/mom_test_methodology.ts`

### Fase 2: Docs (Día 1)
- `docs/30_day_launch_checklist.md`
- `docs/learning_paths.md`
- `docs/creator_quotes.md`

### Fase 3: Core Integration (Día 2)
- `src/core/lib/caas_pricing.ts` + benchmarks
- `src/core/lib/automaton.ts` + Mom Test validation
- `src/core/state/automaton.ts` + Mom Test state

### Fase 4: UI + Briefs (Día 2)
- `packages/ui/src/CoachFAB.tsx` + chips
- `src/app/(os)/case-studies/page.tsx`
- Briefs enrichment (AUTODIDACTAS, PROFESIONALES, ONBOARDING)

---

## Tasks Orchestrator

```javascript
{
  "id": "AWESOME-OPC-data",
  "title": "Data constants: case_studies, stacks_recommendations, mom_test",
  "deps": [],
  "effort": 2,
  "value": 80,
  "workstream": "AWESOME_OPC"
},
{
  "id": "AWESOME-OPC-docs",
  "title": "Docs: 30_day_launch_checklist, learning_paths, creator_quotes",
  "deps": [],
  "effort": 1,
  "value": 70,
  "workstream": "AWESOME_OPC"
},
{
  "id": "AWESOME-OPC-integration",
  "title": "Integrate: pricing benchmarks, Automaton Mom Test, CoachFAB chips",
  "deps": ["AWESOME-OPC-data"],
  "effort": 2,
  "value": 75,
  "workstream": "AWESOME_OPC"
},
{
  "id": "AWESOME-OPC-briefs",
  "title": "Enrich briefs: AUTODIDACTAS, PROFESIONALES, ONBOARDING",
  "deps": ["AWESOME-OPC-docs"],
  "effort": 1,
  "value": 65,
  "workstream": "AWESOME_OPC"
}
```

---

## Verification Checklist

- [ ] `npm run typecheck` pasa
- [ ] `npm run build` pasa
- [ ] `npm run test` pasa
- [ ] `npm run preview` → `/case-studies` accesible
- [ ] CoachFAB chips "Launch Check", "Mom Test", "Case Studies" funcionando
- [ ] Briefs enriquecidos con stacks + learning paths + 30-day checklist
- [ ] `docs/awesome_opc_integration.md` creado
- [ ] `docs/awesome_opc_backup.md` creado
- [ ] `BRIEFS_INDEX.md` actualizado (BF-087, BF-088)
- [ ] `fuentes_indice.json` actualizado

---

*Integración generada: 2026-08-22 | Metodología HSCSG 4 fases | Repo: chen103226/awesome-one-person-company*