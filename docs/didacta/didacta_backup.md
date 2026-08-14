# BACKUP — Didacta Community (va360labs/didacta-io)

> Fuente: https://github.com/va360labs/didacta-io (clonado 2026-08-14 a ./didacta_io, ignorado en .gitignore)
> Metodología HSCSG: Fase 1 (Desempaquetado) ✓ · Fase 2 (Limpieza) ✓ · Fase 3 (GitHub) ✓ · Fase 4 (Evolución) pendiente en BRIEF/integración

## 1. Qué es (texto real del README)

- **LMS de nueva generación. Fair-code, modular y listo para Fundae.** Creado/mantenido por VA360 LABS S.L.
- **Estado:** Alpha. Maduró mayo–julio 2026 en producción real; desde 31-jul-2026 el repo es el producto whitelabel y prepara primera versión pública.
- **Imagen oficial:** `ghcr.io/va360labs/didacta-community` (pública, sin `docker login`, única fuente al día). Docker Hub (`didactaio/community`) desactualizado en `0.0.1-alpha.86` — no usar.
- **Web:** didacta.io · **Docs:** docs.didacta.io · **Licencia:** Didacta Sustainable Use License v1.0 (fair-code, adaptada de n8n SUL).

## 2. Arquitectura (real)

Monorepo **pnpm + turbo**. Tres formas de desplegar: install.sh (1 comando, Docker), paneles autoalojados (Coolify/Dokploy/Easypanel en `deploy/`), o Docker run manual.

**Apps (`apps/`):**
- `api` — API (puerto 4000, `/healthz`)
- `web` — Web (puerto 3000, reescribe `/api/*`)
- `e2e` — tests end-to-end

**Packages core (`packages/`):**
- `@didacta/core-kernel` — Contrato de módulo y primitivas del core.
- `@didacta/core-registry` — Module Registry: discovery, validación, resolución de dependencias y lifecycle de módulos.
- `@didacta/database` — Cliente Prisma compartido, schema v1 del core y migraciones.
- `@didacta/license-sdk` — Verifica JWT firmados (ES256) para capabilities Enterprise; integra con registry opt-in.
- `@didacta/module-package-spec` — Contrato versionado del layout ZIP de módulo (fuente única para backend validator y packagers). Zero runtime deps.

**Módulos (`modules/` — 24):**
access-groups · ai-content · ai-grader · ai-tutor · assessments · billing · certificates · community · courses · fundae · gamification · hello-world · learning · member-registration · messaging · migrator-learndash · payment-connections · referrals · resources · subscriptions · surveys · theming · wp-sso · zoom-live

## 3. Modelo de módulo (real — modules/courses/module.json)

```json
{
  "name": "courses",
  "version": "1.0.0",
  "edition": "community",
  "coreVersionRequired": "^0.0.1",
  "displayName": "Cursos y catálogo",
  "category": "core",
  "tablePrefix": "mod_courses_",
  "permissions": ["courses.course.read","courses.course.write","courses.course.publish","courses.course.archive"],
  "events": ["courses.course.created","courses.course.updated","courses.course.published", ...]
}
```

Patrón: cada módulo = `module.json` + `package.json` + `src/` + `tests/` + `vitest.config.ts` + `tsconfig*.json`. `tablePrefix` aísla el schema por módulo; `events` habilita reactividad inter-módulo vía core-registry.

## 4. Variables obligatorias (3)

| Variable | Para qué |
|----------|----------|
| `DATABASE_URL` | Postgres 16 + `pgvector`. `postgresql://<USUARIO>:***@<HOST>:5432/didacta?schema=public` |
| `REDIS_URL` | Redis 7. `redis://redis:6379` |
| `AUTH_SECRET` | Firma sesiones/cookies. Mín 32 chars. `openssl rand -base64 32` |

Opcionales: `S3_*` (storage), `SMTP_*`, `DIDACTA_LICENSE_KEY` (JWT Enterprise), `METRICS_TOKEN` (Prometheus).

## 5. Por qué Didacta (diferenciadores del README)

- **Modular de verdad:** instala solo lo que necesitas; cada función es un módulo limpio.
- **Fair-code:** código fuente disponible, uso interno libre, sin licencias por usuario. Distribución comercial/SaaS/white-label requiere acuerdo.
- **Cumplimiento serio:** Fundae, RGPD y WCAG 2.2 AA integrados en el núcleo (no plugins de terceros). Trazabilidad/auditoría/exportación desde día uno.
- **IA discreta:** crea contenido, sugiere itinerarios, resume actividad.

## 6. Tres ediciones

| Edición | Para quién | Incluye |
|---------|-----------|---------|
| Community (este repo) | Equipos que despliegan/operan ellos | Todo el código fuente + comunidad |
| Cloud | Arrancar en minutos sin infra | Hosting gestionado por VA360 (en preparación) |
| Enterprise | SLA + integraciones a medida | Account manager + partner certificado |

## 7. Tres formas de llenar el academia de alumnos

1. **Alta manual:** invita uno a uno o por lotes; eligen grupo de acceso; email para crear contraseña.
2. **Vender cursos sueltos:** catálogo público `/catalogo`, pago Stripe sin registro previo, cuenta se autocrea.
3. **Membresías:** planes 1–12 meses, página `/unete`, acceso automático por grupo; revocación al dejar de pagar.

Registro con solicitud: verificadores (email/Telegram/ninguno), aprueba/rechaza con un clic.

## 8. Licencias

- **Repo + módulos:** Didacta Sustainable Use License v1.0 (fair-code, adaptada de n8n SUL). Uso interno empresarial libre; distribución comercial/SaaS/white-label requiere acuerdo VA360 LABS.
- **Capabilities Enterprise** (`*.ee.*` en CORE): Didacta Enterprise License — requiere licencia firmada activa.
- **Cloud:** SaaS gestionado (en preparación).

## 9. Infra / deploy relevante para HSCSG

- Stack: API + web + Postgres(pgvector) + Redis + Mailpit(SMTP) + storage local o S3-compatible.
- Cifrado at-rest: clave autogenerada en primer arranque, en volumen Docker (`didacta_data`). Sin volumen, se borra.
- Telemetría: opt-in, `/metrics` protegido con `METRICS_TOKEN`.
- Setup token de un solo uso en `/setup?token=...` (logs del contenedor).

## 10. Alineación con HSCSG v15 OS (notas para integración)

- **Sistema de módulos ↔ módulos HSCSG:** el `core-registry` de Didacta (discovery, validación, lifecycle, `events`) es análogo al `core/lib` + `state` modular de HSCSG. `tablePrefix` ↔ aislamiento de schema por módulo.
- **Cumplimiento ↔ Ley III / soberanía:** Fundae/RGPD/WCAG integrados en núcleo ↔ principio de soberanía operacional verificable de HSCSG.
- **IA discreta ↔ Lucidez:** ai-tutor/ai-grader/ai-content ↔ Modo Lucidez (ayuda sin interrumpir, evidencia).
- **Gamification/assessments/certificates ↔ meritocracia Shivarthu:** votar por mérito y certificados de aprendizaje postmonetario.
- **Fundae/billing/subscriptions ↔ CaaS/ZNU anfibio:** monetización modular que HSCSG hace anfibia (postmonetario ↔ conectado vía priceParity).
- **Fair-code ↔ white-label HSCSG:** ambos source-available, despliegue propio.

---
*Backup generado por extracción de texto REAL del repo clonado (README.md, packages/*/package.json, modules/courses/module.json, .env.example). No se inventó contenido.*
