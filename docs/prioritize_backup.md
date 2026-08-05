# BACKUP ORIGINAL — ZiadJ / prioritize
# Copia de seguridad del repositorio analizado (2026-08-05) antes de asimilarlo a HSCSG v15 OS.
# Fuente: https://github.com/ZiadJ/prioritize (README.md, package.json, lib/, prisma/schema.prisma)

---

## Qué es

Plataforma **Nuxt 4 + Prisma + Postgres + tRPC + auth (JWT/bcrypt) + PrimeVue** de priorización
comunitaria de necesidades. El núcleo (`lib/`):

- `lib/tree.ts`: modelo de árbol (path/depth/numchild, mover/crear nodos, buildTreeSelectData).
- `lib/stepCostsFeasibility.ts`: **motor de factibilidad** — `evaluateStepCostFeasibilities` y
  `getStepCostsFeasibility` calculan, para cada costo de un paso, la viabilidad [0,1] según el
  consumo IN-ORDER de recursos comunitarios compartidos (stock decreciente).

## Modelo de dominio (schema.prisma, resumido)
- `Request` / `RequestNode`: necesidad priorizada por la comunidad (árbol, prioridad por tokens).
- `UserRequest`: cantidad + `priority` (tokens mensuales que se eliminan al entregar) + isBasicNeed.
- `Proposal`: plan para satisfacer un Request; `netFeasibility`, `netBenefit`, `priority`, `riskFactor`.
- `Step`: acción de una Proposal (duración, riesgo, posición).
- `StepCost`: costo de un paso que consume un `CommunityResource` (quantity; negativo = producción).
- `CommunityResource` / `Resource`: stock disponible, capacidad mensual, reserva, vida útil.
- `Feedback`: ratings de communidad (rating/confidence) para aprobar revisiones/propuestas.

## Relevancia para HSCSG v15 OS

Es el **motor de priorización del Plan 90d / PVSO**: necesidades del colectivo priorizadas por Social
DNA, descompuestas en pasos que consumen la base material, con factibilidad medida por stock real.
- Reemplaza priorizar por "precio" con priorizar por **necesidad + AUT** (postmonetario).
- El árbol de RequestNode es isomorfo a las Metas/Tareas de Orquestación (Paperclip).
- `evaluateStepCostFeasibilities` es directamente reutilizable para validar el Plan 90d contra la base.

> Nota: es app full-stack pesada (Nuxt/Postgres/Supabase). Se asimila el MODELO + el motor de
> factibilidad como módulo local React/Zustand. NO se instala Nuxt/Postgres.
