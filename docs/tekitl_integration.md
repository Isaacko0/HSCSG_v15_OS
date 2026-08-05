# Integración Baruch4413/tekitl → HSCSG v15 OS (+ CaaS)
# Tres perspectivas: Usuario · LLM · Proyecto HSCSG_v15_OS / CaaS

> Backup en `docs/tekitl_backup.md`.

---

## 0. Síntesis del repo
**tekitl** (náhuatl: "trabajo/labor") = **plataforma social de proyectos colaborativos** con moneda social (coins), roles/voluntarios, timeline público y talentos/portafolio.
- Stack: **Laravel 12 + Inertia v2 + React 19 + TS + Tailwind v4** + MySQLite v4 + Playwright.
- Núcleo: Post → Project (máquina de estados), ProjectRole/Volunteer, ReactionType.Potenciar → Coins, ProjectTimelineEvent, UserTalent.
- Economía: **sin fines de lucro**; coins = endoso comunitario, no dinero. Arquitectura deja puerta a canje futuro.

---

## 1. Perspectiva del Usuario (¿qué quiere alguien que usa tekitl?)
- **Trabajo visible y colaborativo**: un proyecto no es una lista de tareas, es una **página pública desplazable** que crece con el trabajo.
- **Roles reales**: "necesito un carpintero 20h" → la comunidad se postula, se acepta, registra horas, queda en el registro permanente.
- **Moneda social, no plata**: reacciones "Potenciar" → coins. No son dinero; son **respaldo comunitario**. El proyecto muestra coins recibidos vs meta.
- **Portafolio automático**: cada proyecto en el que participaste aparece en tu perfil (dueño / voluntario / completado). **Ese registro ES el portafolio**.
- **Timeline inmutable**: dueño mueve etapas; voluntarios/visita ven la misma historia. Confianza por transparencia.
- **Interfaz en español**, abierto al mundo.

---

## 2. Perspectiva del LLM (¿qué asimilo y qué extirpo?)

### Asimilo (lógica pura, sin Laravel/Eloquent/MySQL/Inertia/PHP):
| Concepto tekitl | Módulo HSCSG v15 | Qué conservo |
|---|---|---|
| ProjectStage (planificación→ejecución→completado|abortado) | `TekitlProjectStage` | FSM pura, 4 estados, transiciones válidas |
| ProjectRole (ocupación + horas + voluntarios) | `TekitlRole` | Ocupación, horas estimadas, voluntarios aceptados/horas |
| ProjectVolunteer (aplicación/aceptación/horas/completado) | `TekitlVolunteer` | Estado: aplicado/activo/completado/abandonado |
| ReactionType.Potenciar → Coins | `TekitlCoins` | Acuñación por endoso, ledger por proyecto/usuario |
| ProjectTimelineEvent (tipo, actor, payload) | `TekitlTimeline` | Append-only, tipos: stage_change, role_created, volunteer_joined, coins_minted, milestone, note |
| UserTalent (ocupación + confianza + años) | `TekitlTalent` | Declarativo, visible en perfil, porta a proyectos |

### Extirpo (infra Laravel):
- Eloquent, Migraciones, Seeders, Policies, Observers, Fortify, Reverb, S3, Wayfinder, Pest/Vitest, Blade, Composer, artisan, .env, queue/worker.
- Auth (email/pass, Google, 2FA) → **no hace falta**: HSCSG ya tiene `Colaberry` + `CaaS` + `Trustlines` para identidad/reputación.
- Inertia/React pages → **re-implemento** como pantalla React nativa en HSCSG (`/tekitl`).

---

## 3. Perspectiva HSCSG v15 OS + CaaS (monetario → postmonetario)

### Isomorfismo con Materialismo Jerárquico (Leyes I/II/III):
- **Ley I (no dañar base material)**: coins no son dinero fiduciario ni especulativo; son **endoso de trabajo real** (horas, roles, resultados). No hay usura ni emisión central.
- **Ley II (ganarse la vida soberanizando)**: el proyecto **emerge de la base material** (roles + horas + talento). No hay "financiación" previa; la moneda nace *después* del aporte (potenciar = reconocimiento post-facto).
- **Ley III (lucidez, nunca engañar)**: timeline **append-only**, visible para todos. Dueño no puede borrar eventos; solo añadir. Transparencia radical = confianza.

### Integración con vectores HSCSG existentes:
| Vector HSCSG | Conexión con tekitl |
|---|---|
| **AUT_FINA** (autonomía financiera) | Proyectos tekitl = **unidades de AUT** (aportan base material). Coins = flujo de reconocimiento interno. |
| **CaaS** (Comunidad como Servicio) | Acceso a proyectos por **contribución (AUT×CDS)**, no por pago. Roles = "servicios" que el CaaS oferta. |
| **Trustlines** (crédito mutuo) | Coins pueden **convertirse en trustlines** (línea de crédito) entre miembros que colaboraron. |
| **Vesting (ZNU)** | Aportes en tekitl (horas completadas) → **aceleran unlock de ZNU** (vesting por hitos de AUT). |
| **Colaberry** (agente soberano) | Colaberry puede **postular a roles**, registrar horas, publicar hitos en timeline. |
| **Priorizar** (colectivo) | Propuestas de Priorizar → **crean Project + Roles** en tekitl (flujo: necesidad → proyecto). |
| **Autómata Soberano** | Proyecto tekitl = **entidad que sobrevive** si genera AUT (Ley de Conway/Autómata). |

### Producto monetario → postmonetario:
- **Hoy (monetario)**: tekitl usa MySQL + Laravel + S3 + Google OAuth = costes de infra. Coins no tienen valor de cambio.
- **Mañana (postmonetario en HSCSG)**: tekitl se **ejecuta local** (SQLite + React + TS), **sin servidor central**. Coins = **unidad de cuenta interna** (ZNU-sombra). Trustlines entre colaboradores = **crédito mutuo real**. Vesting = **propiedad distribuida** del nodo. CaaS = **acceso por contribución**. El "proyecto" tekitl se vuelve **módulo vivo del nodo**.

---

## 4. Entregable: Módulo `/tekitl` en HSCSG v15 OS

### Tipos (`src/core/state/tekitl.ts`)
```ts
type ProjectStage = 'planning' | 'execution' | 'completed' | 'aborted'
interface TekitlRole { id, projectId, occupation, hoursEstimated, volunteers: TekitlVolunteer[] }
interface TekitlVolunteer { id, userId, roleId, status: 'applied'|'active'|'completed'|'bailed', hoursLogged }
interface TekitlCoin { id, projectId, fromUserId, toUserId, amount, reason: 'potenciar' }
interface TekitlTimelineEvent { id, projectId, type, actorId, payload, ts }
interface TekitlTalent { id, userId, occupation, confidence, yearsExp }
interface TekitlProject { id, title, goal, stage, ownerId, roles[], timeline[], coinsReceived, createdAt }
```

### Lógica (`src/core/lib/tekitl.ts`)
- `createProject`, `transitionStage` (validando FSM)
- `addRole`, `applyToRole`, `acceptVolunteer`, `logHours`, `completeVolunteer`
- `mintCoins` (potenciar), `getCoinsBalance`, `getProjectCoins`
- `appendTimeline` (append-only), `getTimeline`
- `declareTalent`, `getTalents`, `getPortfolio` (proyectos del user)

### Store (`store.ts`)
- Estado `tekitl: TekitlState` (projects[], roles[], volunteers[], coins[], timeline[], talents[])
- Acciones expuestas: `createProject`, `transitionStage`, `addRole`, `applyToRole`, `acceptVolunteer`, `logHours`, `completeVolunteer`, `potenciar`, `appendNote`, `declareTalent`
- Persistencia (partialize)

### Pantalla (`src/app/screens/Tekitl.tsx`)
- Feed de proyectos (cards: título, stage, coins/meta, owner)
- Detalle proyecto: timeline, roles/voluntarios, botón "Potenciar", formulario "Postular a rol", "Registrar horas"
- Perfil usuario: talentos declarados, portafolio (proyectos participados)
- "Nuevo proyecto" (post → elevar a proyecto)

### Nav + Ruta
- Aside: `Tekitl · Proyectos` (icono `Briefcase` o `Hammer`) → `/tekitl`

---

## 5. Próximos pasos (cuando el usuario confirme)
1. Crear tipos + lib + store + pantalla + nav/ruta.
2. Typecheck + build + preview (verificar 15 rutas 200).
3. Documentar en `docs/tekitl_integration.md` (este archivo sirve de base).