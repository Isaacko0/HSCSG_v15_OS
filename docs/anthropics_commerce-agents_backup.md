# Anthropic Commerce Agents — Backup 2026-09-10

**Fecha de asimilación:** 2026-09-10  
**Repositorio original:** https://github.com/anthropics/commerce-agents  
**Commit HEAD:** fd4d59224ab96b43c6dc6888207c67b3bd5a24cf (2026-08-31)  
**Licencia:** Apache-2.0  
**Estrellas:** 2.5k | **Forks:** 440  

---

## 1. Visión General

**Claude Commerce Agents** es un blueprint de referencia (reference implementation) para construir **dos agentes de comercio** sobre Claude:
- **Shopping Agent** — embebido en apps de negocio para clientes (búsqueda, comparación, carrito, memoria, customer care)
- **Merchant Agent** — usado por staff para back-office (analytics, listings, inventario, pricing, campañas)

Cada agente se define **una vez** (prompt, skills, tool contracts, gates) y corre en tres runtimes:
1. **Messages API** — loop de referencia
2. **Agent SDK** — SDK de Claude Agent
3. **Managed Agents** — agente hospedado llamando MCP server

**4 verticales runnable** demuestran ambos agentes sobre las mismas librerías:
- Retail (ACME)
- Travel (ACME Travel)
- Telecom (ACME Mobile)
- Entertainment (ACME Tickets)

---

## 2. Arquitectura del Repositorio

```
commerce-agents/
├── .claude-plugin/           # Plugin para Claude Code
├── .github/workflows/        # CI/CD
├── commerce-common/          # Paquete compartido (pip: commerce_common)
├── shopping-agent/
│   ├── core/                 # shopping_agent (tipos, backend, prompt, gates)
│   ├── runtime-messages-api/ # shopping_agent_runtime (Messages API)
│   ├── runtime-agent-sdk/    # shopping_agent_sdk (Agent SDK)
│   ├── managed-agents/       # Managed Agents manifest + MCP server
│   └── skills/               # 5 flows: search-discovery, purchase-research, 
│                              # planning-goals, customer-care, memory-personalization
├── merchant-agent/
│   ├── core/                 # merchant_agent (tipos, backend, prompt, gates)
│   ├── runtime-messages-api/ # merchant_agent_runtime (Messages API)
│   ├── runtime-agent-sdk/    # merchant_agent_sdk (Agent SDK)
│   ├── managed-agents/       # Managed Agents manifest + MCP server
│   └── skills/               # 5 flows: catalog-listings, inventory-operations,
│                              # pricing-promotions, marketing-campaigns, performance-insights
├── examples/                 # 4 verticales + demo_common + web-shared
├── plugins/commerce-builder/ # Claude Code plugin (scaffold, add-flow, author-evals, review)
├── docs/                     # safety.md, backends.md, deployment.md
├── tests/                    # Cross-package suites
├── scripts/                  # install.sh, run_demo.py, smoke_chat.py, deploy_managed_agent.sh
└── requirements*.txt         # 7 paquetes pinned + deps
```

---

## 3. commerce-common — Núcleo Compartido (14 módulos)

| Módulo | Responsabilidad |
|--------|-----------------|
| `config.py` | `BaseAgentConfig`: identity, models, budgets, capabilities, memory, caps |
| `fencing.py` | `Fence`: sanitizado/fencing de texto que lee el modelo; chip hygiene |
| `memory.py` | `MemoryStore` contract, write filter, `validate_fact`, extraction, `MemoryRuntime` |
| `skills.py` | `SkillRegistry`: carga directorios `SKILL.md` y renderiza prompt index |
| `prompt_assembly.py` | Cache breakpoints: system block estático, tool array, mensaje persistido más nuevo, contexto por-request + clock |
| `grounding.py` | `GroundingRule` + matchers; `first_forced_tool` |
| `presentation.py` | `PresentationComponent`, `PresentationExtension`, `run_presentation`; `enrich_partial` para `ui_partial` |
| `delegation.py` | `DelegateExtension`: tarea aislada de modelo detrás de tool |
| `execution.py` | `BaseToolExecutor`: dispatch, failure ladder, skills, presentation, delegates, memory; `split_status` |
| `streaming.py` | `AgentEvent`, `ToolOutcome`, `to_sse` |
| `turn.py` | Helpers Messages API: user text, history compaction, eager tool dispatch, `StreamedRound`, `round_closes_turn` |
| `agent_sdk.py` | Plomería compartida SDK runtimes + `round_closes_turn` hook |
| `mcp_server.py` | MCP servers plumbing: `registrar` (excluye tools apagados y arg `status`), loopback bind guard |
| `manifest.py` | Resuelve manifest Managed Agents; usado por `scripts/deploy_managed_agent.sh` |

---

## 4. Shopping Agent — 5 Skills (Flows)

| Skill | Directorio | Descripción |
|-------|------------|-------------|
| **search-discovery** | `shopping-agent/skills/search-discovery/` | Búsqueda semántica, filtros, comparación, recomendaciones |
| **purchase-research** | `shopping-agent/skills/purchase-research/` | Investigación profunda: specs, reviews, alternativas, trade-offs |
| **planning-goals** | `shopping-agent/skills/planning-goals/` | Planificación multi-paso: wishlists, presupuestos, timing |
| **customer-care** | `shopping-agent/skills/customer-care/` | Preguntas de política, orders, returns, soporte post-venta |
| **memory-personalization** | `shopping-agent/skills/memory-personalization/` | Memoria a largo plazo: preferencias, historial, personalización |

**Backend interface:** `StorefrontBackend` (catalog, cart, order, policy systems)

---

## 5. Merchant Agent — 5 Skills (Flows)

| Skill | Directorio | Descripción |
|-------|------------|-------------|
| **catalog-listings** | `merchant-agent/skills/catalog-listings/` | CRUD listings, variants, media, SEO |
| **inventory-operations** | `merchant-agent/skills/inventory-operations/` | Stock, restocks, alerts, warehouse sync |
| **pricing-promotions** | `merchant-agent/skills/pricing-promotions/` | Price moves, promo rules, discount ladders, protected fees |
| **marketing-campaigns** | `merchant-agent/skills/marketing-campaigns/` | Campaign drafts, scheduling, audience targeting, creative |
| **performance-insights** | `merchant-agent/skills/performance-insights/` | Analytics delegate, SQL views, digests, occupancy calendars |

**Backend interface:** `MerchantBackend` (analytics, catalog, inventory, pricing, campaign systems)

**Gate crítico:** Todo write es *staged change* → approval surface humana aplica.

---

## 6. Tres Runtimes — Misma Definición

| Runtime | Punto de Entrada | Características |
|---------|------------------|-----------------|
| **Messages API** | `ShoppingAgent` / `MerchantAgent` | Loop de referencia; host apps en examples; SSE events |
| **Agent SDK** | `shopping-agent/runtime-agent-sdk/main.py` | SDK loop; host prefetchea grounding reads; no post-turn |
| **Managed Agents** | `scripts/deploy_managed_agent.sh` | Hospedado; llama MCP server del negocio; manifest monta junto a role server |

---

## 7. Safety — Reglas Enforced (docs/safety.md)

| Capa | Mecanismo | Dónde Corre |
|------|-----------|-------------|
| **Fencing** | Sanitiza texto que modelo lee como data | `fencing.py` → tool call |
| **Provenance Gates** | Valida origen de datos antes de write | `execution.py` → tool call |
| **Caps** | Límites de tokens, tools, turns, memory | `config.py` budgets |
| **Memory Validation** | `validate_fact` antes de persistir | `memory.py` |
| **Merchant Approval Gate** | Todo write staged → aprobación humana | `merchant-agent` executor |
| **Grounding** | `GroundingRule` + matchers forzados | `grounding.py` |
| **Analysis Budgets** | Límites delegate tasks | `delegation.py` |
| **MCP Loopback Bind** | MCP servers solo localhost | `mcp_server.py` |

---

## 8. Verticales — 4 Ejemplos Completos

| Vertical | Storefront | Portal (Merchant) |
|----------|------------|-------------------|
| **Retail** | Search, compare, plans, cart, checkout, memory | Digest, staged restocks, listing fixes, analysis delegate SQL |
| **Travel** | Date-bound inventory, `present_itinerary` extension | Occupancy calendar, date-window rate moves |
| **Telecom** | Account context, plan matrix, fee disclosures | Plan mix, price moves con lines affected, regulated fees |
| **Entertainment** | Timed holds, waitlists, transfers, venue map, all-in fees | Event pacing, hold releases, fee-preserving price moves |

Cada vertical tiene README con sección `Try` (prompts de prueba para `scripts/smoke_chat.py`).

---

## 9. MCP Connectors — No Shippean Conectores

> "None ship; both agents reach your systems through the backend interfaces."

Integraciones objetivo (oficiales = source of record):
- **Analytics:** Snowflake, BigQuery, Databricks, Amplitude
- **Finance:** Stripe, Square, PayPal, QuickBooks
- **Delivery:** Slack, Google Drive, Gmail
- **Commerce Platform MCP:** catalog, cart, checkout → llamado desde backend server-side

En Managed Agents: manifest monta MCP server junto a role server; provenance gates delante de cada write.

---

## 10. Personalización — "Making it yours"

1. **Backend Methods** — Cada método llama tu servicio server-side con credencial de sesión; modelo solo lee resultado. Flujos con orden fijo → orden enforced en backend.
2. **Backend Guide** — `docs/backends.md`: identity/credentials, ordered flows, checkout, products with options, figuras que tu plataforma no provee.
3. **Marketplace shape** — Seller = search dimension; merchant agent actúa por operator que sesión nombra.
4. **Account/Contract Pricing** — Price quoted = session account's price.
5. **No Checkout Propio** — Apaga cart o manos a quote, PO, hosted checkout URL.
6. **Checkout Hands Off** — Checkout card linkea a tu route o platform hosted checkout (one per seller en marketplace). Backend retorna URL; host renderiza; modelo nunca la ve.
7. **Start Small** — Shopping pilot: search + product details + stub resto. Merchant pilot: 8 read methods + writes refuse.
8. **Switch Off** — Sistema que negocio no tiene = `enable_*` off → remueve tools, prompt lines, grounding rules. Park flows en `skills/_staged/`.
9. **Add Your Own** — Flow = directorio con `SKILL.md` bajo `skills/`. Domain UI = `PresentationExtension` (verticales shipean 7). `brand_name`, `assistant_name`, `brand_voice` en config.

---

## 11. Verificación

```bash
ruff check . && ruff format --check . && pytest && python scripts/check.py
python scripts/verify_all.py        # + deploy dry runs + web builds
python scripts/smoke_chat.py --vertical travel  # live conversation (needs key)
```

CI: 2 Python versions, build 8 web apps, check package names unregistered on public index (pin files instalan desde directorios, nunca index). Cache: `cache_read_input_tokens` en `turn_complete` o logger model call → 0 en segundo turn = prefix cambió.

---

## 12. Deploy Elsewhere

Runtimes toman cualquier `anthropic` client como `client=`; SDK runtimes toman platform de CLI env. `docs/deployment.md` cubre:
- GCP Vertex AI
- AWS Bedrock
- Microsoft Foundry
- Gateways

---

## 13. Licencia y Nota

**Apache-2.0** — Copyright 2026 Anthropic PBC.  
**Reference implementation; not maintained; does not accept contributions.**

---

## 14. Isomorfismos Detectados con HSCSG v15 OS

| # | Concepto Anthropic | Concepto HSCSG v15 OS | Tipo |
|---|-------------------|----------------------|------|
| 1 | **SkillRegistry** (`skills.py`) | **Skill Registry** (`scripts/orchestrator-next-steps.js` + skills/) | Estructural |
| 2 | **MemoryStore** + `validate_fact` | **RAO Verification** + `MemoryRuntime` | Funcional |
| 3 | **GroundingRule** + `first_forced_tool` | **CEL Policy** + **MJ Gate** | Gobernanza |
| 4 | **PresentationExtension** | **Aside.tsx + i18n + Lucide** | UI/UX |
| 5 | **Fence** (chip hygiene) | **Fencing / Sanitización** en coworkers | Seguridad |
| 6 | **Managed Agents Manifest** | **MCP Server + AG-UI** | Integración |
| 7 | **Merchant Approval Gate** (staged writes) | **CDS Jurados** + **Triple Veto** (MJ Gate + Commonomics + FRNE) | Gobernanza |
| 8 | **Backend Interface** (StorefrontBackend/MerchantBackend) | **Packages** (`packages/identity`, `packages/value`, etc.) | Arquitectura |
| 9 | **Verticales** (retail/travel/telecom/entertainment) | **Workstreams** (ECOALDEA, GAIA, MARKETING, etc.) | Organización |
| 10 | **Switch Off** (`enable_*` flags) | **NodeMode / PriceParity** (postmonetario ↔ conectado) | Configuración |
| 11 | **Plugin commerce-builder** (Claude Code) | **Hermes Agent Skills** + **hscsg-repo-assimilation** | Tooling |
| 12 | **3 Runtimes** (Messages API / Agent SDK / Managed) | **3 Capas IA** (Autómata / Lucidez / Background Extractor) | Runtime |
| 13 | **Turn Helpers** (history compaction, eager dispatch) | **SOUL Tiers** + **E²R** + **Heartbeat** | Memoria |
| 14 | **DelegationExtension** (isolated model task) | **Coworkers** (6 roles: Strategist, Creative Director, Closer, Media Buyer, Scout, QA Lead) | Delegación |

---

## 15. Módulos Extraíbles Identificados

| Módulo | Ubicación | Valor para HSCSG |
|--------|-----------|------------------|
| `commerce_common.config.BaseAgentConfig` | `commerce-common/commerce_common/config.py` | Config base para agentes HSCSG |
| `commerce_common.memory.MemoryStore` | `commerce-common/commerce_common/memory.py` | Backend para RAO Verification |
| `commerce_common.grounding.GroundingRule` | `commerce-common/commerce_common/grounding.py` | Motor de grounding para CEL policy |
| `commerce_common.presentation.PresentationExtension` | `commerce-common/commerce_common/presentation.py` | Modelo para Aside.tsx + PresentationComponents |
| `commerce_common.delegation.DelegateExtension` | `commerce-common/commerce_common/delegation.py` | Patrón para Coworker delegation |
| `commerce_common.execution.BaseToolExecutor` | `commerce-common/commerce_common/execution.py` | Executor base para autómata HSCSG |
| `shopping_agent.core.StorefrontBackend` | `shopping-agent/core/shopping_agent/backend.py` | Interface para packages/value (cart, orders) |
| `merchant_agent.core.MerchantBackend` | `merchant-agent/core/merchant_agent/backend.py` | Interface para packages/value (analytics, inventory) |
| `shopping_agent_runtime.ShoppingAgent` | `shopping-agent/runtime-messages-api/` | Runtime Messages API para HSCSG |
| `merchant_agent_runtime.MerchantAgent` | `merchant-agent/runtime-messages-api/` | Runtime para merchant operations |
| `plugins.commerce-builder` | `plugins/commerce-builder/` | Scaffold para generar agents HSCSG |
| `scripts.deploy_managed_agent` | `scripts/deploy_managed_agent.sh` | Deploy MCP para HSCSG nodes |

---

## 16. Referencias de Archivos Clave (para asimilación profunda)

```
README.md                          → Visión general + quick starts
CLAUDE.md                          → Instrucciones para Claude Code
commerce-common/README.md          → Doc del paquete compartido (14 módulos)
docs/safety.md                     → Reglas de safety enforced
docs/backends.md                   → Guía de integración backend
docs/deployment.md                 → Deploy en Vertex/Bedrock/Foundry
shopping-agent/skills/*/SKILL.md   → 5 skills shopping (prompts, tools, contracts)
merchant-agent/skills/*/SKILL.md   → 5 skills merchant (prompts, tools, contracts)
examples/*/README.md               → 4 verticales + prompts de prueba
scripts/run_demo.py                → Orquestador demos
scripts/deploy_managed_agent.sh    → Deploy Managed Agents
requirements.txt / requirements-dev.txt → 7 paquetes + deps
```