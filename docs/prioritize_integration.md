# Integración ZiadJ/prioritize → HSCSG v15 OS (+ CaaS)
# Tres perspectivas: Usuario · LLM · Proyecto HSCSG_v15_OS / CaaS

> Backup en `docs/prioritize_backup.md`.

---

## 0. Síntesis del repo

Plataforma Nuxt 4 + Prisma/Postgres de **priorización comunitaria de necesidades**. El colectivo
emite `Request` (necesidades), cada usuario asigna `priority` (tokens mensuales que se eliminan al
entregar). Cada Request se resuelve con `Proposal → Step → StepCost`, y los costos consumen
`CommunityResource` compartidos. El motor `evaluateStepCostFeasibilities` calcula la factibilidad
[0,1] de cada paso contra el stock decreciente de recursos comunitarios. Feedback vía ratings.

---

## 1. PERSPECTIVA USUARIO (miembro del colectivo HSCSG)

Como miembro quiero:
- **Declarar necesidades** del colectivo (comida, energía, cuidado) y que se **prioricen sin dinero**:
  por necesidad básica + Social DNA (no por quién paga más).
- Ver **qué pasos** requiere cada necesidad y si la **base material actual las soporta** (factibilidad).
- Que el Plan 90d no sea papel: que cada paso tenga **costo de recursos reales** (agua, kWh, horas,
  semillas) y una **factibilidad medible**, no una promesa vaga.
- **Votar/retroalimentar** propuestas (feedback de comunidad) — gobernanza, no decreto de arriba.

---

## 2. PERSPECTIVA LLM (asimilación)

| Prioritize | Asimilación HSCSG v15 OS |
|------------|--------------------------|
| Request / RequestNode (árbol) | Necesidades del colectivo (árbol isomorfo a Metas/Tareas Orquestación) |
| UserRequest.priority (tokens) | Prioridad postmonetaria (Social DNA + necesidad básica, NO precio) |
| Proposal → Step → StepCost | Plan 90d / PVSO: paso que consume base material |
| CommunityResource stock | Base Material del OS (agua/kWh/comida/herramientas) |
| evaluateStepCostFeasibilities | **Reutilizable tal cual** para validar Plan 90d vs stock real |
| Feedback ratings | Retroalimentación del colectivo (gobernanza) |
| auth/JWT/bcrypt/Postgres | **EXTIRPADO**: HSCSG usa store local + Zustand persist, sin auth central |

**Decisión**: NO instalo Nuxt/Postgres/Supabase (pesado, extractivo, centralizado). Asimilo el
**modelo + el motor de factibilidad** como módulo `Priorizar` local. El motor de factibilidad es
código puro (TS) → se importa directo.

---

## 3. PERSPECTIVA PROYECTO HSCSG / CaaS (monetario → postmonetario)

Prioritize aporta el **motor de planificación soberana del colectivo**. Su producto:

### 3a. CaaS MONETARIO
- El OS se vende con "tu nodo planea su base material con factibilidad real" (diferenciador vs
  hojas de cálculo). Onboarding de miembros CaaS incluye declarar necesidades priorizadas.

### 3b. POSTMONETARIO
- La prioridad NO es precio ni tokens de escasez: es **necesidad básica + AUT colectivo**.
  `priority` se reescribe como `urgency` (isBasicNeed) ponderado por Social DNA.
- El éxito se mide por **factibilidad del Plan 90d** y **AUT**, no por suscripciones.

### 3c. Isomorfismo con MJ
```
PRIORITIZE (priorización)        HSCSG v15 (MJ)
necesidad básica (isBasicNeed) ≈  Ley I: proteger la vida/base material
propuesta factible (netFeasibility) ≈ Ley II: ganarse la vida con lo real, no ficción
feedback de comunidad           ≈  Ley III: lucidez colectiva, decisiones visibles
```

---

## 4. Implementación (módulo `/priorizar`)

Estado (`PrioritizeState`):
- `requests`: necesidades del colectivo (title, isBasicNeed, priority por Social DNA, quantity).
- `proposals`: planes que resuelven un request (steps[]).
- `steps`: acción con stepCosts[] (cada uno consume un recurso de base material).
- `communityResources`: stock actual de base material (espejo de `base` del OS).
- `feedbacks`: ratings del colectivo por propuesta.

Cálculos (`lib/prioritize.ts`):
- Reusa `evaluateStepCostFeasibilities` y `getStepCostsFeasibility` (copiados del repo, puros).
- `prioritizeRequests(requests, members)`: ordena por urgencia = isBasicNeed ? 1 : SocialDNA.
- `planFeasibility(steps, baseMaterial)`: factibilidad [0,1] del plan vs stock real.
- `rankProposals(proposals, feedbacks)`: netBenefit/netFeasibility + ratings.

> Prioritize "corre en Nuxt con Postgres en Supabase". Priorizar HSCSG **corre en el nodo**, con
> base material real y sin servidores centralizados. Misma lógica de factibilidad, sustrato soberano.
