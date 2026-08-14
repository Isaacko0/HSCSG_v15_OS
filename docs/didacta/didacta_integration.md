# INTEGRACIÓN — Didacta Community → HSCSG v15 OS

> Baseline: docs/didacta/didacta_backup.md (texto real del repo va360labs/didacta-io, 24 módulos + 5 paquetes core).
> Principio HSCSG (corrección 2026-08-10): NO ser conservador. Si Didacta trae conceptos que HSCSG no tiene, IMPLEMENTAR módulo nuevo real, no dejar en P2 alegando "ya cubierto".

## 1. Mapeo de dominios Didacta → HSCSG

| Dominio Didacta | Equivalente HSCSG actual | Acción |
|-----------------|--------------------------|--------|
| `core-registry` (discovery/lifecycle/events) | `core/lib` + `core/state` + `store.ts` | EXTENDER: registrar módulos como `ModuleRecord` con `events` y `tablePrefix` |
| `courses` (catálogo, módulos, lecciones) | `Aprender` (challenges) | FUSIONAR: cursos como árbol de aprendizaje postmonetario |
| `assessments` | `Aprender` | NUEVO: rúbricas + evaluación por mérito |
| `certificates` | `Integral` (certifyDesign) | AMPLIAR: certificados verificables firmados (análogo license-sdk ES256) |
| `gamification` | `Symbiosky` (credibilidad) | FUSIONAR: puntos/logros ↔ convicción ZNU |
| `ai-tutor` / `ai-grader` / `ai-content` | `Modo Lucidez` / `coach` | EXTENDER: IA discreta con evidencia |
| `fundae` / `billing` / `subscriptions` | `CaaS` / `ValueFlows` / `ZNU` anfibio | NUEVO: módulo `EducacionCaaS` (anfibio postmonetario↔conectado) |
| `community` / `member-registration` / `referrals` | `Colectivo` / `Delegación` | FUSIONAR: registro con verificadores (email/Telegram) |
| `learning` | `Aprender` | FUSIONAR |
| `surveys` / `messaging` | `Integral` (signals) | EXTENDER |
| `theming` | white-label HSCSG | YA CUBIERTO (AccountMenu white-label) |
| `wp-sso` / `zoom-live` | — | OPCIONAL: integraciones externas (extirpar infra ajena, conservar lógica) |
| `migrator-learndash` | — | N/A (migración desde WP) |
| `access-groups` | `Delegación` (dominios) | FUSIONAR: grupos de acceso ↔ dominios de delegación |
| `resources` | `Integral` (designs) | FUSIONAR |

## 2. Módulos NUEVOS a crear en HSCSG (no placeholder)

### 2.1 `src/core/state/education.ts` + `src/core/lib/education.ts`
Estado de educación postmonetaria del nodo:
- `Course { id, title, moduleIds[], level, evidenceRequired: boolean }`
- `Enrollment { courseId, memberId, progress, certifiedBy }`
- `Certificate { id, courseId, memberId, signedJwt, issuedAt }` (firma ES256 local, análogo license-sdk)
- `Assessment { id, courseId, rubric[], meritWeight }` (evalúa por mérito, no por nota binaria)

Funciones:
- `createCourse`, `enroll`, `recordProgress`, `issueCertificate` (firma local), `gradeByMerit` (usa `validateProposalScore` de Integral para peso).

### 2.2 `src/core/state/educaas.ts` + `src/core/lib/educaas.ts` (anfibio)
Monetización educativa al estilo HSCSG anfibio (principio de diseño):
- Modo `postmonetario` (default offline): cursos se pagan en ZNU / tiempo-crédito, sin Stripe.
- Modo `conectado`: vía `priceParity` + oráculo, acepta EUR/USDC para suscripciones (equiv. billing/subscriptions de Didacta).
- `tablePrefix: mod_educaas_` (patrón Didacta).

### 2.3 Registro modular (`src/core/state/modules.ts`)
`ModuleRecord { name, version, edition, category, tablePrefix, permissions[], events[] }` — replica el contrato `module.json` de Didacta para que HSCSG pueda cargar módulos con el mismo aislamiento (schema prefix + events).

## 3. UI a extender

| Pantalla HSCSG | Cambio |
|----------------|--------|
| `/aprender` | Añadir árbol de cursos (catálogo) + progreso + certificados firmados |
| `/integral` | Añadir sección "Certificados verificables" usando `issueCertificate` |
| `/colectivo` | Registro con verificadores (email/Telegram) estilo Didacta member-registration |
| NUEVA `/educacion` | Panel Educación CaaS: cursos, matrículas, suscripciones anfibias, certificados |

## 4. Lo que se EXTIRPA (infra ajena, conservando lógica)

- `DATABASE_URL` Postgres/pgvector → HSCSG usa estado local Zustand (offline-first). Conservar el *patrón* de `tablePrefix` para aislamiento.
- `REDIS_URL` → no aplica (nodo local).
- `AUTH_SECRET` → sesión local del nodo.
- `DIDACTA_LICENSE_KEY` (JWT Enterprise) → equivalente: firma de certificados local ES256 (license-sdk ports to `education.ts`).
- Stripe/S3/SMTP → extirpar; modo anfibio usa ZNU/offline y solo conecta si el nodo elige `conectado`.

## 5. Conteo de conceptos nuevos

Didacta aporta ~18 conceptos nacidos para HSCSG:
1. module.json contract (name/version/edition/category/tablePrefix)
2. core-registry (discovery/validation/lifecycle/events)
3. permissions granulares por módulo
4. events inter-módulo (reactividad)
5. tablePrefix aislamiento schema
6. fair-code SUL (adaptada n8n)
7. Didacta Enterprise License (EE, *.ee.*)
8. Fundae compliance integrado en core
9. RGPD integrado en core
10. WCAG 2.2 AA integrado
11. IA discreta (no interrumpe)
12. catálogo público /catalogo
13. membresías 1–12 meses
14. registro con verificadores (email/Telegram)
15. setup token one-shot /setup?token=
16. cifrado at-rest autogenerado en volumen
17. METRICS_TOKEN Prometheus opt-in
18. migrator-learndash (interop WP)

Total acumulado HSCSG: 78 + 18 = **96 conceptos nacidos**.

## 6. Estado

- [x] Fase 1 Desempaquetado (clone)
- [x] Fase 2 Limpieza (gitignore + backup)
- [x] Fase 3 GitHub (backup + integration commiteados)
- [ ] Fase 4 Evolución: implementar módulos 2.1–2.3 + UI (P0/P1 de Didacta)
- [ ] Actualizar BRIEF_EXHAUSTIVO (Sección 17 + fuentes)

---
*Integración derivada de backup de texto real. Módulos 2.1–2.3 son implementables (no placeholders) según corrección de método HSCSG.*
