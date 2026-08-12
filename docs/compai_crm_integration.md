# Integración Comp AI CRM — Perspectiva Triple (Usuario · LLM · HSCSG)

**Fuente:** `https://github.com/trycompai/crm` — Agentic-first CRM. El agente corre en su propio deployment (eve/durable agents), en su propio schedule, contra su propia work queue. Stack: Next.js + NestJS + Prisma/Postgres + Better Auth + Vercel Sandbox. MIT.

---

## 0. Síntesis
Comp AI CRM es la **encarnación más rigurosa de "agente soberano que no inventa"** que HSCSG ha asimilado. Su innovación central no es el LLM — es el **Evidence Model**: las herramientas reportan *observaciones* (`crm.signature-block`, `github.account-identity`), y un ledger (`lib/evidence.ts`) **precia cada evidencia por peso** para producir un `score` + `band` (VERIFIED/PROBABLE/POSSIBLE). El agente NUNCA gradea su propia certeza (un modelo preguntado por su confianza miente en la dirección útil). Esto es exactamente el **antídoto al LLM-hallucination-as-truth** que HSCSG necesita en su CDS: las decisiones del nodo deben basarse en evidencia observada, no en probabilidades del modelo.

Además aporta: **work queue con leasing PostgreSQL** (`FOR UPDATE SKIP LOCKED`), **budget por session**, **schedule_recheck con reason mostrado a humano**, **sandbox deny-all egress**, **capabilities optional by default**, **data boundaries (egress rules)**, **identity matching fail-closed**.

---

## 1. Perspectiva del Usuario
Un equipo de ventas (o cualquier organización con "contactos") quiere:
- Que el CRM **se llene solo** con hechos verificados (no un formulario que alguien debe llenar).
- Que el agente **nunca invente** un hecho sobre un cliente (mejor campo vacío que una mentira confiable).
- Que las decisiones del agente sean **auditables**: qué vio, de qué fuente, con qué peso.
- Que el agente **corra solo** (cierra el browser y sigue trabajando).
- Que la **privacidad** esté garantizada por arquitectura (sandbox sin red, sin DB).

**Dolor resuelto:** CRMs que son bases de datos con formulario; agentes que "alucinan" hechos sobre clientes; falta de trazabilidad de de dónde vino un dato.

---

## 2. Perspectiva del LLM (Asimilo / Extirpo)

### Asimilo (Conceptos → HSCSG)

| Concepto CompAI CRM | Traducción Soberana HSCSG | Módulo / Componente |
|---------------------|---------------------------|---------------------|
| **Evidence Model (no confidence)** | CDS basa decisiones en evidencia observada, no en probabilidad del modelo | `lib/cds_jurados.ts` + `lib/evidence.ts` (nuevo) |
| **Fact Bands (VERIFIED/PROBABLE/POSSIBLE)** | Decisiones CDS con banding: ejecuta automático vs requiere ratificación humana | `lib/cds.ts` `bandFor` + `lib/automaton.ts` |
| **Write Path Único (3 reglas)** | MJ Gate + Autonomía: humano manda, no re-ofrecer dismissal, requiere primary source | `lib/automaton.ts` + `lib/pipeline.ts` |
| **Work Queue + Leasing (SKIP LOCKED)** | Autómata Soberano con cola de tareas + lease por session | `lib/automaton.ts` `claimDue` + `lib/store.ts` |
| **Budget por session + schedule_recheck(reason)** | FRS/ITC signals + stigmergy: agente agenda trabajo con razón mostrada | `lib/pipeline.ts` + `lib/cds.ts` `ingestFrsSignal` |
| **Sandbox deny-all egress + no DB** | HSCSG offline-first: sin egress por defecto, solo local | `lib/trustlines.ts` + arquitectura anfibia |
| **Capabilities optional by default** | Arquitectura Anfibia: modo offline default, conectado opcional | `lib/connector.ts` `nodeMode` |
| **Data Boundaries (egress rules)** | Ley I (No Dañar) + Privacy SUGEVAL/GDPR | `lib/trustlines.ts` + `lib/identity.ts` |
| **Identity Matching (fail closed)** | KYCE/Proof-of-Humanity local: verifica, no adivina | `lib/identity.ts` `verifyPerson` |
| **Intelligence never lives in API** | CDS decide en nodo, no en backend | `lib/cds.ts` (edge decision) |
| **No organizations (single tenant)** | HSCSG célula única (CaaS) | `lib/caas.ts` |

### Extirpo (No Se Asimila)
| Extirpado | Sustituto HSCSG |
|-----------|-----------------|
| Turborepo/Bun/Vercel/Next.js/NestJS | React/Vite/Zustand + localStorage |
| eve framework (durable agents) | Autómata Soberano + Pipeline anidado (patrón similar) |
| Better Auth / OAuth Google/Microsoft | Identidad soberana local (KYCE/PoH) |
| Vercel Sandbox / Docker | Sandbox local (sin Vercel) |
| tRPC / NestJS routers | Store Zustand directo |
| CRM business (contacts/deals/companies) | No es CRM; es gobernanza/economía (pero patrón evidencia SÍ aplica) |

---

## 3. Perspectiva HSCSG + CaaS (Postmonetario)

### Ley I (No Dañar)
- **Evidence Model** evita que decisiones se basen en "confianza del modelo" → solo evidencia observada pesada.
- **Fact Bands**: VERIFIED escribe; PROBABLE/POSSIBLE sugiere a humano → no daña con hechos no verificados.
- **Write Path 3 reglas**: nunca sobreescribir humano, nunca re-ofrecer dismissal, nunca sin primary → protege integridad del record.
- **Data Boundaries**: no customer text en query de terceros, solo business context → privacy por diseño.

### Ley II (Ganarse la Vida Soberanizando)
- **Budget por session + schedule_recheck**: agente gasta presupuesto de investigación, decide CUÁNDO revisar → autonomía soberana real.
- **Capabilities optional**: funciona offline con evidencia propia → CaaS célula no depende de infra externa.
- **Identity Matching fail-closed**: verifica quién es, no adivina → soberanía de identidad.

### Ley III (Lucidez / Nunca Engañar)
- **Evidence ledger transparente**: cada hecho tiene `kind`, `detail`, `sourceUrl`, `score`, `band`, `rationale`.
- **Modo Lucidez HSCSG** revela: evidencias raw, pesos, score calculado, band, quién aplicó (human/agent).
- **Contradiction held**: fuentes que discrepan se muestran como "unresolved", no como 60% true.

---

## 4. Interrelaciones / Correlaciones con Arquitectura HSCSG Actual

### 4.1 Mapeo Directo a Módulos Existentes

```
CompAI CRM                    HSCSG v15 OS (Actual + Planeado)
─────────────────────────────────────────────────────────────────────
Evidence Model (weights)      →  lib/evidence.ts (NUEVO) + lib/cds_jurados.ts aggregateScores
Fact Bands                    →  lib/cds.ts bandFor + lib/automaton.ts (auto vs human)
Write Path (3 reglas)        →  lib/automaton.ts MJ Gate + lib/pipeline.ts
Work Queue + Leasing         →  lib/automaton.ts claimDue + lib/store.ts
Budget + schedule_recheck    →  lib/pipeline.ts FRS + lib/cds.ts ingestFrsSignal
Sandbox deny-all             →  Arquitectura anfibia (offline default)
Capabilities optional        →  lib/connector.ts nodeMode (offline/connected)
Data Boundaries              →  lib/trustlines.ts + lib/identity.ts
Identity Matching            →  lib/identity.ts verifyPerson (KYCE)
Intelligence in node         →  lib/cds.ts (edge decision)
No organizations             →  lib/caas.ts (célula única)
```

### 4.2 Gap Analysis: Qué Falta en HSCSG Hoy

| Capacidad CompAI CRM | Estado HSCSG | Acción Requerida |
|---------------------|--------------|------------------|
| **Evidence Model (weighted observations)** | **FALTA** (CDS solo promedia W_i) | `lib/evidence.ts` nuevo: `EvidenceKind` + `WEIGHTS` + `scoreEvidence` |
| **Fact Bands (VERIFIED/PROBABLE/POSSIBLE)** | **FALTA** (CDS todo-o-nada) | `lib/cds.ts` `bandFor` + automatomata aplica/sugiere |
| **Write Path único con 3 reglas** | Parcial (MJ Gate) | `lib/automaton.ts` `recordDecision` con humanOwns/neverReoffer/requiresPrimary |
| **Work Queue + Leasing PostgreSQL** | **FALTA** (Autómata usa store local) | `lib/automaton.ts` `claimDue` (en RAM, SKIP LOCKED simulado) |
| **Budget por session + reason** | Parcial (FRS signals) | `lib/pipeline.ts` `scheduleStigmergy` con reason mostrado |
| **Sandbox deny-all egress** | Parcial (offline-first) | `lib/trustlines.ts` egress rules explícitas |
| **Capabilities optional by default** | Parcial (anfibia) | `lib/connector.ts` nodeMode ya hace esto |
| **Data Boundaries (egress rules)** | **FALTA** (solo Ley I genérica) | `lib/trustlines.ts` `dataBoundaries` skill |
| **Identity Matching fail-closed** | Parcial (KYCE) | `lib/identity.ts` `matchIdentity` (guess where, not what) |

### 4.3 Flujo Integrado: Decisión CDS con Evidence Model (CompAI → HSCSG)

```
1. NODO (célula)              →  Propone decisión (ej: financiar proyecto X)
                               ↓ lib/cds.ts proposeDecision
2. EVIDENCIA (observación)    →  Nodo reporta EVIDENCE (no confidence):
                               - "crm.thread-reply" → votaron 5 miembros (0.85)
                               - "github.account-identity" → propuesta cita código (0.80)
                               - "web.cited-claim" → paper externo (0.40)
                               ↓ lib/evidence.ts scoreEvidence
3. SCORING (ledger)          →  combined = Π(1-weight); score = min(0.99, 1-combined)
                               band = bandFor(score, hasPrimary)
                               ↓ lib/evidence.ts
4. BANDING (auto vs human)   →  VERIFIED (≥0.85+primary) → ejecuta automático
                               PROBABLE/POSSIBLE → sugiere a asamblea (ratificación)
                               null → no se guarda (campo vacío mejor que guess)
                               ↓ lib/cds.ts + lib/automaton.ts
5. WRITE PATH (3 reglas)     →  Nunca sobreescribir humano (MJ Gate)
                               Nunca re-ofrecer dismissal (mismo valor ya rechazado)
                               Nunca sin primary source (requiere evidencia directa)
                               ↓ lib/automaton.ts recordDecision
6. EJECUCIÓN (Autómata)      →  Si VERIFIED → dispatchMatch / autoAdvisory
                               Si PROBABLE → pantalla /asamblea con razón
                               ↓ lib/automaton.ts + lib/pipeline.ts
7. RAO (memoria)             →  Decision Record: proposal, evidence[], score, band, who applied
                               ↓ lib/store.ts RAO
8. STIGMERGY (schedule)      →  schedule_recheck: "revisar en 14 días porque Y"
                               ↓ lib/pipeline.ts ingestFrsSignal
9. USUARIO (retroalimentación)  →  Ve band+score+evidence en Modo Lucidez; acepta/dismiss
```

---

## 5. Entregables Accionables (Prioridad P0/P1)

| Entregable | Módulo HSCSG | Prioridad | Descripción |
|------------|--------------|-----------|-------------|
| `docs/compai_crm_backup.md` + `compai_crm_integration.md` | Docs | **P0** | Este backup + integración |
| `lib/evidence.ts` (NUEVO) | Evidence Model | **P0** | `EvidenceKind` + `WEIGHTS` + `scoreEvidence` + `bandFor` port de CompAI |
| `lib/cds.ts` extend: `bandFor` + `recordDecision` con 3 reglas | CDS | **P0** | Fact Bands (VERIFIED auto, PROBABLE sugiere) |
| `lib/automaton.ts` extend: `claimDue` (leasing RAM) | Autómata | **P0** | Work queue con lease por session (SKIP LOCKED simulado) |
| `lib/pipeline.ts` extend: `scheduleStigmergy(reason)` | Pipeline | **P0** | Budget + reason mostrado (schedule_recheck) |
| `lib/trustlines.ts` extend: `dataBoundaries` skill | Trustlines | **P1** | Egress rules (no customer text en query, solo business) |
| `lib/identity.ts` extend: `matchIdentity` (fail-closed) | Identity | **P1** | Guess where to look, never what you find (KYCE) |
| `lib/connector.ts` extend: `nodeMode` ya hace capabilities optional | Connector | **P1** | Verificar modo offline default |
| Pantalla `/justicia` extend: Evidence Ledger viz | `/justicia` | **P1** | UI evidencia raw + pesos + band + razón |
| Pantalla `/asamblea` extend: PROBABLE suggestions | `/asamblea` | **P1** | UI ratificación humana de bandas no-VERIFIED |

---

## 6. Conceptos NUEVOS NACIDOS (No Existían en HSCSG)

1. **Evidence Model (no confidence scores)** — herramientas reportan *observaciones* pesadas por ledger; modelo no gradea su certeza. Antídoto a hallucination-as-truth.

2. **Fact Bands (VERIFIED/PROBABLE/POSSIBLE)** — banding por score+primary: VERIFIED escribe auto, PROBABLE/POSSIBLE sugiere a humano, null no guarda. Decide cuándo automatizar vs pedir ratificación.

3. **Write Path Único con 3 Reglas** — nunca sobreescribir humano, nunca re-ofrecer dismissal, nunca escribir sin primary source. Forzado en código, no en prompt.

4. **Work Queue + Leasing (FOR UPDATE SKIP LOCKED)** — dispatchers toman trabajo disjunto; run muerto libera row al expirar lease. Concurrencia segura sin lock global.

5. **Budget por Session + schedule_recheck(reason)** — agente gasta presupuesto de investigación; agenda revisión con razón mostrada a humano ("job change would move deal"). Autonomía con accountability.

6. **Sandbox deny-all egress + no DATABASE_URL** — shell sin red ni DB = text processor, no exfiltration. Arquitectura de seguridad por default.

7. **Capabilities Optional by Default** — sin API keys funciona con evidencia propia; cada key abre UN lugar más. Degradación elegante, nunca error.

8. **Data Boundaries (egress rules)** — no customer text en query de terceros; solo business context en record; nada personal (health/politics/religion/etc). Privacy por diseño.

9. **Identity Matching fail-closed** — "guess where to look, never what you will find"; decomposición de email→buscar surname+company; ambos checks (employer+name) o no es ellos.

10. **Intelligence Never Lives in API** — Nest reporta que pasó; agent decide qué significa. Evita drift de lógica de decisión.

11. **No Organizations (single tenant)** — organizationId siempre mismo valor = columna inútil. Simplicidad deliberada.

12. **Contradiction Held (not averaged)** — fuentes que discrepan se hold, no se promedian a "60% true". Honestidad sobre falsa certeza.

---

## 7. Conceptos ETAPAS DE EVOLUCIÓN (Refinamientos)

| Base HSCSG | Evolución CompAI CRM | Cambio |
|------------|---------------------|--------|
| CDS (promedia W_i) | **Evidence Model + Fact Bands** | scoreEvidence pesa observaciones; bandFor decide auto vs human |
| MJ Gate (genérico) | **Write Path 3 reglas** | humanOwns + neverReoffer + requiresPrimary en recordDecision |
| Autómata (store local) | **Work Queue + Leasing** | claimDue con lease por session (SKIP LOCKED simulado) |
| FRS/ITC signals | **Budget + schedule_recheck(reason)** | stigmergy con razón mostrada a humano |
| Offline-first (genérico) | **Sandbox deny-all + Capabilities optional** | egress rules + modo offline default explícito |
| Ley I (No Dañar genérica) | **Data Boundaries** | egress rules + solo business context |
| KYCE (básico) | **Identity Matching fail-closed** | guess where, not what; both checks or not them |
| RAO (Decision Records) | **Evidence Ledger transparente** | cada decisión con evidence[], score, band, who applied |
| CDS (edge decision) | **Intelligence never in API** | ya era cierto; CompAI lo confirma como regla |

---

## 8. Roadmap de Integración (Secuencia Lógica)

```
SEMANA 1 (P0 - Evidence Model Core):
├── lib/evidence.ts (NUEVO): EvidenceKind + WEIGHTS + scoreEvidence + bandFor
├── lib/cds.ts extend: bandFor + recordDecision (3 reglas)
├── lib/automaton.ts extend: claimDue (leasing RAM)
└── lib/pipeline.ts extend: scheduleStigmergy(reason)

SEMANA 2 (P1 - Boundaries + Identity):
├── lib/trustlines.ts extend: dataBoundaries skill
├── lib/identity.ts extend: matchIdentity (fail-closed)
├── lib/connector.ts: verificar nodeMode offline default
└── lib/store.ts: RAO con evidence ledger

SEMANA 3 (P1 - UI):
├── Pantalla /justicia extend: Evidence Ledger viz
├── Pantalla /asamblea extend: PROBABLE suggestions
└── Modo Lucidez: raw evidence + weights + band + reason

SEMANA 4 (P1 - Pruebas):
├── Validación empírica: 3 nodos beta, decisiones cross-OU con evidencia mixta
└── Documentación: compai_crm_integration.md actualizado
```

---

## 9. Conclusión: CompAI CRM como "Evidence Model Soberano" de HSCSG

CompAI CRM aporta la **integridad epistémica faltante** en la toma de decisiones HSCSG:
- Kleros dio **schelling básico** (coherencia = incentivo)
- Symbiosky dio **conviction** (voto bloqueado por confianza)
- Shivarthu dio **outlier removal + commit-reveal + voto por mérito**
- **CompAI CRM da EVIDENCE MODEL + FACT BANDS + WRITE PATH 3 REGLAS**

El nodo HSCSG deja de decidir por "probabilidad del modelo" para decidir por **evidencia observada pesada**: VERIFIED ejecuta, PROBABLE sugiere, null espera. Esto es **Ley III (Lucidez) aplicada a la epistemología del nodo**.

**Próximo paso inmediato:** Crear `lib/evidence.ts` (port de `scoreEvidence` + `bandFor`) e integrar en `lib/cds.ts recordDecision`. Commit atómico P0.

---
*Fecha: 2026-08-12 | HSCSG v15 OS | Asimilación repo trycompai/crm*