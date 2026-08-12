# Comp AI CRM — Backup Quirúrgico

**Fuente:** repo `https://github.com/trycompai/crm` — "Comp AI CRM is an open source, CRM designed for AI agents. Agentic-first CRM." Turborepo monorepo (Bun + Vercel). Licencia **MIT**. Stack: Next.js App Router + shadcn/ui + NestJS API (tRPC) + Prisma/Postgres (Neon) + Better Auth + eve (Vercel filesystem-first durable agents) + Vercel Sandbox.

**Tagline / Filosofía central:** *"The agent is not a feature of the CRM; the CRM is where the agent keeps its notes."* El agente corre en su propio deployment, en su propio schedule, contra su propia work queue (`lib/tasks.ts`). No es request-response: cerrás el browser y sigue trabajando.

## Arquitectura General (Turborepo Monorepo)

```
apps/
├── agent/           # eve app: herramientas, skills, schedules, sandbox (PUERTO :2000)
│   ├── agent/
│   │   ├── tools/           # 18 herramientas authored (record_fact, identify_contact, schedule_recheck...)
│   │   ├── subagents/       # agent_builder + agent_runner (deny-all sandbox)
│   │   ├── skills/          # evidence.md, identity-matching.md, data-boundaries.md, writing-a-brief.md
│   │   ├── lib/             # evidence.ts, facts.ts, tasks.ts, focus.ts, capabilities.ts, session-purpose.ts...
│   │   └── schedules/       # dispatch.ts (única schedule, no decide nada)
├── app/             # Next.js frontend :3000
└── api/             # NestJS API :3001 (HTTP, auth, tRPC, mailbox sync)
packages/
├── db/              # Prisma schema, migrations, FactBand enum, agent-tasks
├── auth/            # Better Auth config + allow-list
├── ui/              # shadcn/ui components
└── env/             # carga .env root
```

## Conceptos Centrales (README + docs/agent.md + código)

### 1. Evidence Model (NO Confidence Scores)
**Principio rector:** *"No tool accepts a confidence score, because a model asked to grade its own certainty will, and it will be wrong in the direction that makes it look useful."*

Tools reportan lo que **observaron** (`crm.signature-block`, `github.account-identity`), y un ledger (`lib/evidence.ts`) **precia la evidencia**.

**`lib/evidence.ts` — WEIGHTS:**
```typescript
type EvidenceKind =
  | "profile.email-match"         // 0.95 primary - email on profile
  | "linkedin.employer-and-name"  // 0.85 primary - LinkedIn employer+name match
  | "crm.thread-reply"            // 0.85 primary - replied on thread we have
  | "crm.signature-block"         // 0.80 primary - own email signature says so
  | "github.account-identity"     // 0.80 primary - GitHub names them/employer
  | "crm.meeting-attendance"      // 0.70 primary - attended our calendar meeting
  | "web.cited-claim"             // 0.40 secondary - cited web source states it
  | "handle.name-form"            // 0.35 secondary - handle is form of name
  | "search.cites-profile"        // 0.35 secondary - search for them cites profile
  | "employer-only"               // 0.20 secondary - employer matches, name doesn't
  | "contradiction";              // 0.00 - another source disagrees

// Scoring: combined = Π(1 - weight); score = min(0.99, 1 - combined)
// contradicted → score = min(score, 0.45)
// BAND_FLOOR = { VERIFIED: 0.85, PROBABLE: 0.55, POSSIBLE: 0.3 }
// bandFor: VERIFIED requiere hasPrimary + score>=0.85
```

### 2. Fact Bands (VERIFIED / PROBABLE / POSSIBLE / null)
- **VERIFIED** (score ≥ 0.85 + primary source) → **escrito al record automáticamente**
- **PROBABLE/POSSIBLE** → **stored como sugerencia** para un rep humano
- **null** (below floor) → no se guarda
- **contradiction** → held (nadie ve un guess)

### 3. Write Path Único (`lib/facts.ts recordFact`)
Reglas que un prompt NO puede forzar:
- **Nunca sobreescribir un humano** (`humanOwns` check)
- **Nunca re-ofrecer un dismissal** (mismo valor ya descartado)
- **Nunca escribir sin primary source**
- **A band decides only when there is something to lose**: campo vacío se llena con lo que pasó el floor; campo YA lleno requiere VERIFIED para reemplazar
- **`sameValue`** normaliza URLs (twitter.com→x.com, lowercase, sin www/trailing slash/query) para comparar por dirección, no por string

### 4. Work Queue / Leasing (`lib/tasks.ts claimDue`)
```sql
UPDATE "agentTask" SET "leasedUntil" = $until, "attempts" = attempts + 1
FROM (SELECT id FROM "agentTask"
      WHERE "finishedAt" IS NULL AND "dueAt" <= $now
      AND ("leasedUntil" IS NULL OR "leasedUntil" < $now)
      AND "attempts" < MAX_ATTEMPTS
      ORDER BY "priority" DESC, "dueAt" ASC
      LIMIT $limit
      FOR UPDATE SKIP LOCKED) AS due
RETURNING ...
```
- `FOR UPDATE SKIP LOCKED` → dos dispatchers toman trabajo disjunto
- Run que muere libera su row cuando expira el lease
- Priority: brand 900, portrait 800, workspace 500, requested 300, meeting 200, identify 100, sweep 50, companyProfile 40, recheck 0

### 5. Budget & Focus (`lib/focus.ts`, `lib/tasks.ts`)
- `defineState` per-session budget; quedarse sin presupuesto es finalización normal
- `schedule_recheck` dice CUÁNDO revisar y POR QUÉ (mostrado al rep): "a job change here would move the Acme deal" no "scheduled recheck"
- `MIN_DAYS=1, MAX_DAYS=730`, budget 1-20 vendor calls

### 6. Sandbox (deny-all egress)
- `bash`, `grep`, `glob`, `/workspace` con **`deny-all` egress** en backend factory
- **Nunca se da `DATABASE_URL` al sandbox**: shell con credenciales + network = exfiltration-shaped; con ninguno = text processor
- `web_fetch` en app runtime, `web_search` en model provider

### 7. Capabilities (`lib/capabilities.ts`)
- **Optional by default**: cada API key abre UN lugar más para buscar
- Sin keys → todavía funciona con `read_crm_history` (threads/meetings/signature blocks propios = mejor evidencia)
- Imprime al boot qué tiene; tools dan resultado "not configured, retrying won't help" (NUNCA error/throw)
- `capabilities()` async (Context key es row); `capabilitiesFrom()`/`markdownFor()` pure halves

### 8. Data Boundaries (`skills/data-boundaries.md`)
1. No customer text en third-party query (derived questions only)
2. Nada de mailbox a `/workspace` (diferente lifetime)
3. Nada sensible se loggea (reading ≠ logging)
- Solo business context en record (name, title, employer, tenure, seniority, public profile, public news)
- **Nada personal** (health, politics, religion, sexuality, ethnicity, union) sin importar qué diga la fuente

### 9. Identity Matching (`skills/identity-matching.md`)
- **Guess where to look, never what you will find** (decomposición: `pmarchetti` → buscar `marchetti` + company → LinkedIn candidate)
- Procedure falla closed: `employerMatches` + `nameMatches` BOTH o no es ellos
- No re-run si URL ya en record (`fetch_contact_photo` 1 call)
- Cosas que PARECEN evidencia y NO SON: search result, matching first name, Perplexity's view, plausible expansion

### 10. Three Rules (Codebase Holds To)
- **Intelligence never lives in the API** (docs/api.md): Nest reporta que pasó; agent decide qué significa
- **`packages/ui` is the only source of UI**: no overriding styles at call site
- **There are no organizations**: single tenant, deliberately (organizationId siempre mismo valor = columna inútil)

### 11. Bridge (Agent Tab)
```
browser → /eve/v1/* (session cookie, x-crm-contact header)
  → apps/app app/eve/v1/[...path]/route.ts (checks Better Auth, strips cookie, mints 2-min HS256 token naming rep+record)
  → AGENT_URL/eve/v1/* → channels/eve.ts repFromCrm()
```
- Record viaja en token, nunca en message
- AGENT_BRIDGE_SECRET unset → skips auth entry, not opens

### 12. Team-Agent Builder/Runner (Subagents)
- `agent_builder` + `agent_runner` declarados subagents con deny-all sandboxes; inherit nothing
- Creation requiere `CREATE_AGENT` turn explícito
- Connections = executable permissions (google:gmail, google:calendar only when connected)
- Actions = structured permissions (crm.activity.create names NOTE/TASK)
- Deployment = human approval boundary (save → READY private, Deploy → pinned immutable)
- Cancelling = row, not signal (agents.cancelRun settles AgentRun to CANCELLED in 1 tx)

---

## Pallets/Herramientas Críticas (Código Real)

### `apps/agent/agent/tools/record_fact.ts`
```typescript
defineTool({
  description: "Record one claim about a contact — title, employer, a profile URL, seniority — together with the evidence for it. The evidence decides whether it is written to the record or offered to a rep as a suggestion. Never invent evidence you did not observe.",
  inputSchema: z.object({
    contactId, field: enum(FACT_FIELDS), value,
    evidence: array({ kind: enum(WEIGHTS keys), detail, sourceUrl? }).min(1),
    method, sourceUrl?
  }),
  async execute(input, ctx) {
    assertResearchPurpose(ctx);
    focusOn({ contactId });
    const result = await recordFact({...});
    return { stored, applied, band, score, rationale, reason? };
  }
})
```

### `apps/agent/agent/lib/evidence.ts` — `scoreEvidence`
```typescript
export function scoreEvidence(evidence: Evidence[]): Scored {
  const contradicted = evidence.some(e => e.kind === "contradiction");
  const hasPrimary = evidence.some(e => WEIGHTS[e.kind].primary);
  const combined = evidence.reduce((rem, item) => rem * (1 - WEIGHTS[item.kind].weight), 1);
  let score = Math.min(CEILING, 1 - combined);  // CEILING=0.99
  if (contradicted) score = Math.min(score, CONTRADICTED);  // CONTRADICTED=0.45
  return { score, band: bandFor(score, hasPrimary), hasPrimary, rationale: rationaleFor(...) };
}
```

### `apps/agent/agent/lib/facts.ts` — `recordFact` (write path)
```typescript
// 1. scoreEvidence → base
// 2. if empty value → stored:false, applied:false
// 3. if band === null → stored:false (below floor for keeping)
// 4. if contact dismissed exact value → stored:false (never re-offer)
// 5. if currentApplied same value → stored:false (already on record)
// 6. if humanOwns(field, column, contact, hasAgentFact) → stored:false (person outranks web)
// 7. applies = VERIFIED || fillsBlank (empty field + no human value)
// 8. if !applies && existing PROPOSED same value → stored:false (don't offer twice)
// 9. $transaction: mark old APPLIED/PROPOSED as SUPERSEDED; create contactFact(status: applies?APPLIED:PROPOSED)
// 10. if applies && column → update contact column; if name → splitName
```

### `apps/agent/agent/lib/tasks.ts` — `claimDue` (lease)
```typescript
// UPDATE agentTask SET leasedUntil, startedAt, attempts+1
//   FROM (SELECT id WHERE finishedAt IS NULL AND dueAt <= now
//         AND (leasedUntil IS NULL OR leasedUntil < now) AND attempts < MAX_ATTEMPTS
//         ORDER BY priority DESC, dueAt ASC LIMIT $limit FOR UPDATE SKIP LOCKED)
//   RETURNING ...
```

### `apps/agent/agent/tools/schedule_recheck.ts`
```typescript
// days: 1-730 (14 champion on open deal, 90 named no deal, 365 two attempts found nothing)
// reason: min 10 chars, shown to rep ("a job change here would move the Acme deal")
// budget: 1-20 vendor calls
// → scheduleTask({ kind: "recheck", reason, dueAt, budget, priority: PRIORITY.recheck })
```

### `apps/agent/agent/lib/session-purpose.ts` — `assertResearchPurpose`
```typescript
export function assertResearchPurpose(ctx): void {
  if (purposeOf(ctx) !== "research") throw new Error("This CRM research tool is unavailable for this session.");
}
// purposeOf: builder | team-agent | research (default research)
```

---

## Conceptos Clave Innovadores para HSCSG

| Concepto CompAI CRM | Descripción | Paralelo HSCSG |
|---------------------|-------------|----------------|
| **Evidence Model (no confidence)** | Tools reportan observación; ledger precia evidencia por peso | CDS_Jurados `W_i` + `aggregateScores` (pero HSCSG no tiene modelo de evidencia explícito por hecho) |
| **Fact Bands (VERIFIED/PROBABLE/POSSIBLE)** | Band decide escritura automática vs sugerencia humana | RAO Decision Records (pero no banding por evidencia) |
| **Write Path Único con 3 reglas** | Nunca sobreescribir humano, nunca re-ofrecer dismissal, nunca sin primary | MJ Gate + Autonomía Soberana (similar: humano manda) |
| **Work Queue con FOR UPDATE SKIP LOCKED** | Leasing disjunto entre dispatchers; run muerto libera row | Autómata Soberano E²R (pero no leasing PostgreSQL) |
| **Budget por session + schedule_recheck con reason** | Agente decide CUÁNDO revisar y POR QUÉ (mostrado a humano) | FRS/ITC signals + stigmergy (similar: agente agenda trabajo) |
| **Sandbox deny-all egress + no DATABASE_URL** | Shell sin red ni DB = text processor, no exfiltration | HSCSG offline-first (similar: sin egress por defecto) |
| **Capabilities optional by default** | Sin keys → funciona con evidencia propia; cada key abre 1 lugar | Arquitectura Anfibia (modo offline default, conectado opcional) |
| **Data Boundaries (egress rules)** | No customer text en query; solo business context en record | Ley I (No Dañar) + Privacy (GDPR/SUGEVAL) |
| **Identity Matching (fail closed)** | Guess where to look, never what you find; both checks or not them | KYCE/Proof-of-Humanity (similar: verificación, no guess) |
| **Intelligence never lives in API** | Nest reporta; agent decide | CDS (decisión en nodo, no en backend) |
| **No organizations (single tenant)** | organizationId siempre mismo valor = columna inútil | HSCSG nodo único (CaaS célula) |

---

## Extirpación (No Se Asimila Directamente)
- **Turborepo/Bun/Vercel/Next.js/NestJS/Prisma/Postgres** → HSCSG es React/Vite/Zustand + localStorage (sin backend)
- **eve framework (durable agents)** → HSCSG Autómata Soberano + Pipeline anidado (patrón similar, sin eve)
- **Better Auth / OAuth (Google/Microsoft)** → HSCSG identidad soberana (Proof-of-Humanity/KYCE local)
- **Vercel Sandbox / Docker microsandbox** → HSCSG sandbox local (sin Vercel)
- **tRPC / NestJS routers** → HSCSG store Zustand directo (sin API server)
- **CRM business context (contacts/deals/companies)** → HSCSG no es CRM; es gobernanza/economía postmonetaria (pero patrón de evidencia SÍ aplica a CDS)

---

**Extracción:** clonación directa del repo + lectura de 12 archivos clave (`README.md`, `docs/agent.md`, `apps/agent/agent/lib/evidence.ts`, `facts.ts`, `tasks.ts`, `session-purpose.ts`, `apps/agent/agent/tools/record_fact.ts`, `identify_contact.ts`, `schedule_recheck.ts`, `skills/evidence.md`, `identity-matching.md`, `data-boundaries.md`, `writing-a-brief.md`). Texto volcado a este backup sin web_extract.
