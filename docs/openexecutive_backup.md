# OpenExecutive (SenteLabsAI) — Backup Quirúrgico Completo

**Fuente original:** `https://github.com/SenteLabsAI/OpenExecutive` (3.6k★, 47 commits, Apache 2.0)  
**Fecha de asimilación:** 2026-09-02  
**Demo live:** `https://openexec-ui-dev.fly.dev/`

---

## 📋 Resumen Ejecutivo

**OpenExecutive** es un sistema multi-agente de IA que actúa como **equipo ejecutivo virtual de una empresa** — una única persona ejecutiva coherente respaldada por **8 agentes especialistas de Claude** (CSO, CFO, CHRO, GC, COO, CMO, CPO, Board Communications Director).

**Arquitectura:** Python/FastAPI backend + Next.js 15 UI, con conocimiento MBA integrado (RAG sobre ChromaDB), memoria episódica, scheduler proactivo, e integraciones Slack, Email, Telegram, Discord, Google Chat.

---

## 🏗️ Arquitectura Detallada

### Flujo Principal
```
User message
    ↓
Executive Orchestrator (claude-sonnet-4-6)
    ↓ tool use → parallel specialist calls
CSO / CFO / CHRO / GC / COO / CMO / CPO / Board
    ↓ each specialist retrieves relevant context from ChromaDB
Built-in MBA knowledge + Your company documents
    ↓
Synthesized executive response
```

### Capas de Conocimiento (RAG Dual)
1. **MBA Built-in** — Markdown en `knowledge/builtin/`, git-tracked, seed en ChromaDB al inicio
2. **Company Docs** — Documentos subidos por usuario, chunked en colección `company_docs` separada
3. **RAG Context** — Inyectado en user turn, **nunca** en system prompt cacheado

### Memoria Episódica
- Post-response: `claude-haiku-4-5` extrae decisiones/initiativas/consejos → SQLite
- Next session: abre con bloque `<past_decisions>` → Executive recuerda recomendaciones previas

### Scheduler Proactivo
- Job runner con `UPDATE … RETURNING` para prevenir double-firing
- **Single-instance only** — API no escala horizontalmente sin gating del scheduler

### Prompt Caching (Anthropic)
- Persona, company profile, knowledge index cacheados por separado
- **85% cache hit rate** tras primeras turns
- Zero dynamic content en bloques cacheados

---

## 🧠 8 Agentes Especialistas

| Agente | Modelo | Dominio | Deep Reasoning |
|--------|--------|---------|----------------|
| **CSO** — Chief Strategy Officer | `claude-opus-4-7` | Competitive analysis, M&A, market positioning, OKRs | ✅ Extended thinking |
| **CFO** — Chief Financial Officer | `claude-opus-4-7` | Financial modeling, fundraising, unit economics, cash flow | ✅ Extended thinking |
| **CHRO** — Chief HR/People Officer | `claude-sonnet-4-6` | Hiring, compensation, performance, culture | — |
| **GC** — General Counsel | `claude-opus-4-7` | Contracts, IP, employment law basics, compliance | ✅ Extended thinking |
| **COO** — Chief Operating Officer | `claude-sonnet-4-6` | Process design, vendor management, operational scaling | — |
| **CMO** — Chief Marketing Officer | `claude-sonnet-4-6` | GTM strategy, brand, communications, PR | — |
| **CPO** — Chief Product Officer | `claude-sonnet-4-6` | Roadmap, prioritization, product strategy | — |
| **Board** — Board Communications Director | `claude-opus-4-7` | Board decks, investor relations, governance | ✅ Extended thinking |

**Nota:** Routing model `claude-haiku-4-5` decide qué especialistas invocar. Executive persona usa `claude-sonnet-4-6`.

---

## 🛠️ Tech Stack

| Capa | Tecnología |
|------|------------|
| LLM Backbone | Anthropic Claude API |
| Default Model | `claude-sonnet-4-6` |
| Deep Reasoning | `claude-opus-4-7` |
| Backend | Python 3.11 + FastAPI |
| Package Manager | `uv` |
| Vector Store | ChromaDB (local, embedded) |
| Episodic Memory | SQLite |
| Web UI | Next.js 15 (App Router) + Tailwind |
| License | Apache 2.0 |

---

## 📁 Repo Layout

```
openexecutive/
├── packages/
│   ├── core/
│   │   └── openexecutive/
│   │       ├── orchestrator/     # Executive persona + routing loop
│   │       ├── agents/           # 8 specialist agents
│   │       ├── knowledge/        # ChromaDB store + RAG pipeline
│   │       ├── memory/           # Company profile + episodic memory
│   │       ├── onboarding/       # Wizard state machine + profile builder
│   │       ├── prompts/          # Persona + domain prompts + cache manager
│   │       ├── api/              # FastAPI app + routes
│   │       ├── integrations/     # Slack, Email, Telegram, Google Chat, Discord
│   │       ├── scheduler/        # Background job runner (single-instance)
│   │       ├── alerts/           # Proactive alert system
│   │       ├── audit/            # Audit logging
│   │       ├── architecture/     # Internal architecture utilities
│   │       ├── workflows/        # Multi-step workflow definitions
│   │       └── cli.py            # Click CLI
│   └── ui/                       # Next.js 15 web UI
├── evals/                        # Eval scenarios + LLM-as-judge runner
├── fixtures/                     # Demo company fixtures (profiles, docs, rosters)
├── scripts/                      # Operator scripts (Fly secrets, Google auth)
├── docker/                       # Dockerfile(s) + docker-compose.yml
├── fly.api.toml / fly.ui.toml    # Fly.io configs — dev API + UI apps
├── fly.api.qa.toml / fly.ui.qa.toml  # Fly.io configs — QA API + UI apps
├── fly.honcho.toml               # Fly.io config — Honcho memory app (optional)
└── docs/                         # Architecture + deployment docs
```

---

## ⚙️ Configuración (Environment Variables)

### Requerido Mínimo
- `ANTHROPIC_API_KEY` — **Obligatorio** salvo `LOCAL_MODELS_ENABLED=true` o `OPENROUTER_ENABLED=true`

### Modelos
| Variable | Default | Descripción |
|----------|---------|-------------|
| `DEFAULT_MODEL` | `claude-sonnet-4-6` | Executive + most specialists |
| `DEEP_REASONING_MODEL` | `claude-opus-4-7` | CSO, CFO, GC, Board |
| `ROUTING_MODEL` | `claude-haiku-4-5-20251001` | Intent routing |

### Almacenamiento
| Variable | Default | Descripción |
|----------|---------|-------------|
| `VECTOR_STORE_PATH` | `./chroma_db` | ChromaDB directory |
| `EPISODIC_DB_PATH` | `./episodic_memory.db` | SQLite episodic memory |
| `COMPANY_PROFILE_PATH` | `./company/profile.yaml` | Company profile |

### Features
| Variable | Default | Descripción |
|----------|---------|-------------|
| `ENABLE_CACHING` | `true` | Anthropic prompt caching |
| `HONCHO_ENABLED` | `false` | Per-person memory layer (honcho.dev) |

### Integraciones (Opcional)
- `SLACK_BOT_TOKEN`, `SLACK_APP_TOKEN`
- `EXEC_EMAIL_ADDRESS`, `EMAIL_POLL_INTERVAL_SECONDS` (default 60)
- `TELEGRAM_BOT_TOKEN`, `TELEGRAM_WEBHOOK_SECRET`
- `DISCORD_BOT_TOKEN`, `DISCORD_APP_ID`, `DISCORD_GUILD_IDS`, `DISCORD_NOTIFY_CHANNEL_ID`
- `GOOGLE_CHAT_PROJECT_NUMBER`, `GOOGLE_CHAT_SERVICE_ACCOUNT_FILE`
- `GOOGLE_OAUTH_CLIENT_ID`, `GOOGLE_OAUTH_CLIENT_SECRET` (Gmail MCP)

### Local Models / OpenRouter
| Variable | Default | Descripción |
|----------|---------|-------------|
| `OPENROUTER_ENABLED` | `false` | Route through OpenRouter |
| `OPENROUTER_API_KEY` | — | Required when enabled |
| `LOCAL_MODELS_ENABLED` | `false` | OpenAI-compatible local server |
| `LOCAL_BASE_URL` | — | e.g. `http://localhost:11434/v1` (Ollama) |
| `LOCAL_MODELS` | — | Comma-separated slugs (e.g. `llama3.3,qwen2.5`) |
| `LOCAL_TIMEOUT_S` | `300` | Per-call timeout |
| `LOCAL_API_KEY` | — | Optional bearer token |

**Caveats local models:** No web search, no prompt caching, no extended thinking. Multi-agent routing requiere tool use fuerte (Llama 3.3 70B, Qwen2.5).

---

## 🚀 Deployment (Fly.io)

### Topología
| App | Purpose | State |
|-----|---------|-------|
| `openexec-api-{dev,qa}` | FastAPI + scheduler | Persistent volume `executive_data` at `/data` |
| `openexec-ui-{dev,qa}` | Next.js 15 | Stateless |
| `openexec-honcho-dev` | Honcho per-person memory | Postgres-backed |

### Environments
| Environment | Trigger | Workflow | Apps |
|-------------|---------|----------|------|
| **dev** | push/merge to `main` | `.github/workflows/deploy.yml` | `openexec-api-dev`, `openexec-ui-dev` |
| **qa** | push/merge to `qa` | `.github/workflows/deploy-qa.yml` | `openexec-api-qa`, `openexec-ui-qa` |

**⚠️ Single-instance:** `max_machines_running = 1` en fly configs. Scheduler usa `UPDATE … RETURNING` — dos instancias = double-fire.

### Bootstrap Dev (One-time)
```bash
flyctl apps create openexec-api-dev
flyctl apps create openexec-ui-dev
flyctl volumes create executive_data --region iad --size 1 -a openexec-api-dev
flyctl secrets set -a openexec-api-dev ANTHROPIC_API_KEY=sk-ant-...
flyctl tokens create deploy -a openexec-api-dev -x 999999h  # → FLY_API_TOKEN_API
flyctl tokens create deploy -a openexec-ui-dev  -x 999999h  # → FLY_API_TOKEN_UI
gh workflow run "Deploy (dev)" -f target=both
```

### Access Control
- UI: Google sign-in + email allow-list
- API: Shared-secret header entre UI proxy y FastAPI backend
- Ver `docs/auth.md` para setup completo (Google Cloud Console, Fly secrets, rotation)

---

## 🔌 Interfaces de Usuario

| Interface | Acceso |
|-----------|--------|
| **Web UI** | `http://localhost:3000` (dev) / `https://openexec-ui-dev.fly.dev/` |
| **Slack** | `@OpenExecutive` mention o DM |
| **Email** | CC/email a dirección configurada (IMAP/SMTP poller) |
| **Telegram** | Message al bot configurado |
| **Google Chat** | Mention app en space |
| **Discord** | DM, `@mention` (thread reply), `/ask` `/today` slash commands |
| **CLI** | `openexecutive chat` |

---

## 📚 Document Upload

```bash
# CLI
openexecutive upload deck.pdf model.xlsx strategy.md

# API
curl -X POST http://localhost:8000/documents \
  -F "file=@deck.pdf" \
  -F "domain=strategy"
```

Dominios: `strategy`, `finance`, `hr`, `legal`, `operations`, `marketing`, `product`, `governance`

---

## 🧪 Evaluation System

- **29 scenarios** cubriendo 8 dominios
- Judge: `claude-opus-4-7` (LLM-as-judge)
- Cada scenario: query, simulated company context, expected topics, required specialist routing, domain-specific rubric
- **5 dimensiones** (1-5 c/u): persona coherence, domain accuracy, company context utilization, routing quality, actionability
- **CI Gate:** ≥ 3.5/5 promedio; cualquier dimensión >10% drop vs `main` = fail PR

---

## 🔧 Development

```bash
make dev          # Start FastAPI + Next.js
make test         # Run Python tests
make eval         # Run eval suite
make lint         # Run ruff + mypy
make docker       # Build and run Docker stack

# Unit tests only (no API calls)
pytest packages/core/tests/unit/ -v
```

---

## 🔑 Adding a New Specialist Agent (Contributor Guide)

1. Create `packages/core/openexecutive/agents/your_agent.py` extending `BaseAgent`
2. Add system prompt constant in `prompts/domain_prompts.py`
3. Register in `orchestrator/router.py` — `SPECIALIST_REGISTRY` + `SPECIALIST_TOOLS` enum
4. Add domain alias to `DOMAIN_ALIASES` in `knowledge/retriever.py`
5. Add knowledge docs to `knowledge/builtin/your_domain/`
6. Add ≥2 eval scenarios to `evals/scenarios/`
7. Submit PR — CI requires all above

---

## 🔒 Privacy

- Todo en `company/` gitignored — profile YAML, uploaded docs, ChromaDB vector store
- Nada sale de máquina local (o Fly volume en cloud) salvo prompts a Anthropic API
- **Anthropic no entrena con datos de API**

---

## 📄 Licencia

**Apache 2.0** — free to use commercially, requires attribution.

---

## 🎯 Conceptos Clave para Asimilación HSCSG v15 OS

### Isomorfismos Directos con HSCSG

| OpenExecutive | HSCSG v15 OS Equivalente |
|---------------|---------------------------|
| **Executive Orchestrator** | **Autómata Soberano** (Orquestador + MJ Gate + SOUL) |
| **8 Specialist Agents** | **Coworkers** (standing roles: General, Knowledge, Risk + 5 nuevos) |
| **RAG Dual Layer (MBA + Company)** | **Lucidez Material** (Contexto universal + Contexto personal/tribu) |
| **Episodic Memory (SQLite)** | **Proof of Response / RAO** (Registro inmutable decisiones) |
| **Scheduler Proactivo** | **Loop Engineering Canvas** (Bucle automático con checkpoints) |
| **Prompt Caching (85%)** | **Modo Lucidez Toggle** (Cache semántico vs raw) |
| **Single-instance Scheduler** | **Boundaries Fail-closed** (Deny>allow, no race conditions) |
| **Onboarding Wizard** | **BRIEF_ONBOARDING_CONSTRUCTOR** (4 fases asimilación) |
| **Multi-interface (Slack/Email/Discord/...)** | **Vasos Comunicantes** (governance:sync, trust:bridge, infra:connect, intel:match, app:federate, eco:sync) |
| **Company Profile YAML** | **Perfil Tribu / Cuaternidad Soberana** |
| **Document Upload (domains)** | **Base Material Pillars** (13 pilares × 7 capas) |
| **Local Models Support (Ollama/LM Studio)** | **Modo Off-grid / SPA offline-first** |
| **OpenRouter Hybrid** | **Modo Anfibio** (postmonetario ZNU/CaaS ↔ conectado USD/USDC via priceParity) |
| **Honcho Per-person Memory** | **Identidad Soberana ERC-8004 + Social DNA** |
| **Eval Suite (29 scenarios, LLM-as-judge)** | **Lucidez Audit + RAO Verification** |
| **Fly.io Deployment (dev/qa)** | **Vercel Deploy + Preview URLs** |

### Innovaciones Técnicas Transferibles

1. **RAG Dual Layer** — Separación limpia: conocimiento universal (git-tracked) + contexto personal (privado). Inyección en user turn, no system prompt.
2. **Episodic Memory Extraction** — Background Haiku pass post-response → structured decisions → next session context block.
3. **Prompt Caching Strategy** — Persona/profile/index cached separately, 85% hit rate, zero dynamic content in cached blocks.
4. **Scheduler Safety** — `UPDATE … RETURNING` pattern previene double-fire. Single-instance enforced en infra config.
5. **Multi-interface Architecture** — Same core, different adapters (Slack, Email, Telegram, Discord, Google Chat, CLI, Web).
6. **Local Models Abstraction** — OpenAI-compatible interface, hybrid routing per-agent, zero orchestrator changes.
7. **Onboarding State Machine** — Wizard step-by-step, profile builder, optional financial/document upload.
8. **Evaluation-Driven Development** — 29 scenarios, 5 dimensions, LLM-as-judge, CI gate ≥3.5/5.

---

## 📁 Archivos Fuente Referenciados

- GitHub: `https://github.com/SenteLabsAI/OpenExecutive`
- Demo: `https://openexec-ui-dev.fly.dev/`
- Cache local: `C:\Users\Isaacko0\AppData\Local\hermes\cache\web\github.com-cb7e4bbf99.md`

---

**Nota:** Este backup es fiel al README y arquitectura pública. Para integración operativa con HSCSG v15 OS, ver `docs/openexecutive_integration.md`.