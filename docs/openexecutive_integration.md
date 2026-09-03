# OpenExecutive (SenteLabsAI) → HSCSG v15 OS — Integración Operativa

**Fecha:** 2026-09-02  
**Fuente:** `docs/openexecutive_backup.md` (README completo + arquitectura)  
**Objetivo:** Mapear isomorfismos, decidir Take/Adapt/Discard, crear módulos vivos, definir plan de implementación

---

## 🔄 Tabla Maestra de Isomorfismos (22 conceptos × 2 sistemas)

| # | Concepto OpenExecutive | Concepto HSCSG v15 OS | Tipo | Acción | Notas |
|---|------------------------|----------------------|------|--------|-------|
| 1 | Executive Orchestrator (claude-sonnet-4-6) | Autómata Soberano (Orquestador + MJ Gate + SOUL) | **Adapt** | 🔄 Expandido | Orchestrator → Autómata completo con tiers, heartbeat, E²R, MJ Gate veto |
| 2 | 8 Specialist Agents (CSO/CFO/CHRO/GC/COO/CMO/CPO/Board) | Coworkers (standing roles) | **Take** | ✅ Directo | Mapear 8 roles → standing roles + channel + durable profile |
| 3 | RAG Dual Layer (MBA Built-in + Company Docs) | Lucidez Material (Contexto universal + Contexto personal/tribu) | **Take** | ✅ Directo | Separación idéntica: conocimiento base git-tracked + contexto privado |
| 4 | Episodic Memory (SQLite + Haiku extraction) | Proof of Response / RAO (Registro inmutable decisiones) | **Adapt** | 🔄 Evolucionado | SQLite → append-only RAO (ERC-8004 + IPFS), Haiku → Lucidez audit |
| 5 | Scheduler Proactivo (UPDATE…RETURNING) | Loop Engineering Canvas (Bucle automático checkpoints) | **Take** | ✅ Directo | Patrón anti-race conditions idéntico |
| 6 | Prompt Caching (85% hit rate, persona/profile/index separados) | Modo Lucidez Toggle (Cache semántico vs .lucidez-raw) | **Adapt** | 🔄 Evolucionado | Cache blocks → bloques .lucidez-raw, toggle UI |
| 7 | Single-instance Scheduler Enforcement | Boundaries Fail-closed (Deny>allow, no race conditions) | **Take** | ✅ Directo | Mismo principio: deny-by-default, audit-before-act |
| 8 | Onboarding Wizard (State machine + profile builder) | BRIEF_ONBOARDING_CONSTRUCTOR (4 fases asimilación) | **Take** | ✅ Directo | Wizard steps ≡ fases Desempaquetado→Limpieza→GitHub→Evolución |
| 9 | Multi-interface (Slack/Email/Telegram/Discord/Google Chat/CLI/Web) | Vasos Comunicantes (6 vasos) | **Adapt** | 🔄 Mapeado | 7 interfaces → 6 vasos (governance:sync, trust:bridge, infra:connect, intel:match, app:federate, eco:sync) |
| 10 | Company Profile YAML | Perfil Tribu / Cuaternidad Soberana Ampliada | **Adapt** | 🟡 Expandido | YAML → Structured types (Cuaternidad: identidad, tierra, economía, gobernanza) |
| 11 | Document Upload (domains: strategy/finance/hr/legal/ops/marketing/product/governance) | Base Material Pillars (13 pilares × 7 capas) | **Adapt** | 🟡 Mapeado | 8 dominios → 13 pilares, domain → pillar mapping |
| 12 | Local Models Support (Ollama/LM Studio/vLLM/llama.cpp) | Modo Off-grid / SPA offline-first | **Take** | ✅ Directo | Abstracción OpenAI-compatible ≡ modo anfibio local |
| 13 | OpenRouter Hybrid Routing | Modo Anfibio (ZNU/CaaS ↔ USD/USDC via priceParity) | **Take** | ✅ Directo | **Idéntico**: routing per-agent entre proveedores |
| 14 | Honcho Per-person Memory | Identidad Soberana ERC-8004 + Social DNA | **Adapt** | 🔄 Evolucionado | Peer card → ERC-8004 + Social DNA + Vasos Comunicantes |
| 15 | Evaluation Suite (29 scenarios, 5 dims, LLM-as-judge) | Lucidez Audit + RAO Verification | **Adapt** | 🔄 Evolucionado | Eval dims → auditoría triaxial (RAO, MJ Gate, Verificación Triaxial) |
| 16 | Fly.io Dev/QA Deployment | Vercel Deploy + Preview URLs | **Adapt** | 🔄 Mapeado | Dev/QA branches ≡ preview/production deployments |
| 17 | Access Control (Google sign-in + shared-secret header) | Boundaries + Policy CEL Gateway | **Take** | ✅ Directo | Shared-secret ≡ policy CEL allowlist, Google OAuth ≡ identity verification |
| 18 | Discord Bot (embedded in API lifespan) | Coworker Discord Integration | **Adapt** | 🔄 Nuevo | Bot integrado ≡ coworker con canal Discord dedicado |
| 19 | Knowledge Built-in (Markdown git-tracked → ChromaDB seed) | Base Material / 12 Vectores CAC / ZNU v2 | **Take** | ✅ Directo | Markdown source → seed vector store al boot |
| 20 | Background Haiku Pass (post-response extraction) | Lucidez Material Background Processing | **Take** | ✅ Directo | Haiku → background worker local (sin external LLM) |
| 21 | Click CLI (`openexecutive chat`) | Hermes CLI / Orchestrator CLI | **Take** | ✅ Directo | CLI patterns idénticos |
| 22 | Apache 2.0 License | Apache 2.0 (HSCSG) / Apache 2.0 (Hylo fork) | **Take** | ✅ Directo | Licencias compatibles |

---

## ✅ DECISIONES: TAKE (9 conceptos — adopción directa)

| # | Concepto | Implementación HSCSG |
|---|----------|---------------------|
| 2 | 8 Specialist Agents | Extender `coworkers.ts` con 8 standing roles predefinidos |
| 3 | RAG Dual Layer | Ya existe: `LucidezMaterialContext` universal + `TribeContext` personal |
| 5 | Scheduler Safety Pattern | Ya en `boundaries.ts`: `governAction` con `dryRun` + `RepeatDetector` |
| 7 | Single-instance / Fail-closed | Ya en `boundaries.ts`: `deny>allow`, `fail-closed`, `audit-before-act` |
| 8 | Onboarding Wizard | Ya existe: `BRIEF_ONBOARDING_CONSTRUCTOR` 4 fases |
| 12 | Local Models Abstraction | **NUEVO**: `lib/local_models.ts` — OpenAI-compatible interface |
| 13 | Hybrid Routing (OpenRouter) | **YA EXISTE**: `valueDual.ts` + `nodeMode` + `priceParity` (modo anfibio) |
| 17 | Access Control Pattern | Ya en `boundaries.ts` + `policy-cel-gateway` skill |
| 19 | Knowledge Built-in Seeding | **NUEVO**: `lib/knowledge_seed.ts` — Markdown → ChromaDB/IndexedDB al boot |
| 20 | Background Extraction Pass | **NUEVO**: `lib/background_extractor.ts` — Post-response → structured memory |
| 21 | CLI Patterns | Ya existe: `orchestrator-next-steps.cjs` + `brief-detector-recommender.cjs` |

---

## 🔄 DECISIONES: ADAPT (10 conceptos — evolución/expansión)

| # | Concepto OpenExecutive | Adaptación HSCSG | Detalle |
|---|------------------------|------------------|---------|
| 1 | Executive Orchestrator | **Autómata Soberano Completo** | Orchestrator (routing) → Autómata: SOUL (State Of Universal Life) + Tiers (0-5) + Heartbeat + E²R Tree Search + MJ Gate veto + Spawn capability |
| 4 | Episodic Memory | **RAO + Proof of Response** | SQLite → Append-only RAO (ERC-8004 + IPFS). Haiku extraction → Lucidez Audit (triaxial verification). Background worker local. |
| 6 | Prompt Caching | **Modo Lucidez Toggle** | Cache blocks → `.lucidez-raw` blocks en UI. Toggle sol/luna. 3 niveles: Full cache / Semantic only / Raw (no cache). |
| 9 | Multi-interface | **Vasos Comunicantes** | 7 interfaces → 6 vasos. Mapping: Slack→governance:sync, Email→trust:bridge, Telegram→infra:connect, Discord→intel:match, Google Chat→app:federate, CLI→eco:sync, Web→all |
| 10 | Company Profile YAML | **Cuaternidad Soberana Ampliada** | YAML flat → Structured: Identidad (ERC-8004), Tierra (Fideicomiso), Economía (ZNU/CaaS), Gobernanza (CDS-SUI-CGC-FRS-RAO) |
| 11 | Document Upload Domains | **Base Material 13 Pilares** | 8 domains → 13 pillars × 7 layers. Mapping table en `lib/domain_pillar_map.ts` |
| 14 | Honcho Memory | **Identidad Soberana + Social DNA** | Peer card → ERC-8004 DID + Social DNA (relaciones, reputación, historia) + compartido via Vasos Comunicantes |
| 15 | Evaluation Suite | **Lucidez Audit Triaxial** | 5 dims → 3 ejes: RAO (registro inmutable), MJ Gate (veto ético), Verificación Triaxial (cross-check). LLM-as-judge → Autómata auto-evaluación. |
| 16 | Fly.io Dev/QA | **Vercel Preview/Production** | Dev branch → preview URLs. QA branch → production alias. Auto-deploy on push. |
| 18 | Discord Bot Embedded | **Coworker Discord Adapter** | Bot lifecycle en API → Coworker con `channel: 'discord'`, `integration: DiscordAdapter`, lifecycle managed by Coworker store. |
| 22 | License Compatibility | **Dual License Strategy** | Apache 2.0 core + skills. Compatible con Hylo (Apache 2.0) y navteka. |

---

## ❌ DECISIONES: DISCARD (3 conceptos — no aplicar o ya resuelto distinto)

| # | Concepto | Por qué no / Alternativa HSCSG |
|---|----------|--------------------------------|
| - | ChromaDB + sentence-transformers/PyTorch (90MB embedding model) | HSCSG: **Offline-first SPA**, IndexedDB + local embeddings (transformers.js) o sin embeddings (keyword-based). No heavy ML deps. |
| - | Anthropic API dependency (Claude Sonnet/Opus/Haiku) | HSCSG: **Provider-agnostic**. `hermes-proxy-llm-bridge` pattern. Local models default. External LLM = opcional. |
| - | Python/FastAPI Backend | HSCSG: **TypeScript/React SPA** (Vite). No backend server. Toda lógica en cliente + IndexedDB + sync manual. |

---

## 🏗️ MÓDULOS NUEVOS A CREAR EN HSCSG v15 OS

### 1. `src/core/lib/local_models.ts` — Abstracción Modelos Locales (OpenAI-compatible)
```typescript
// Interface unificada para Ollama, LM Studio, vLLM, llama.cpp
// Hybrid routing per-agent (Coworker)
interface LocalModelConfig {
  enabled: boolean;
  baseUrl: string; // e.g. "http://localhost:11434/v1"
  apiKey?: string; // optional bearer
  models: string[]; // slugs: "llama3.3", "qwen2.5"
  timeoutMs: number; // default 300000
}

interface ModelRouter {
  route(agentId: string, task: Task): ModelTarget; // local | anthropic | openrouter
  getAvailableModels(): ModelInfo[];
}
```

### 2. `src/core/lib/knowledge_seed.ts` — Knowledge Seeding (Markdown → Vector Store)
```typescript
// Lee knowledge/builtin/*.md (git-tracked) al boot
// Chunks + embeddings (transformers.js local) → IndexedDB vector store
// Separado de tribe knowledge (privado)
interface KnowledgeSeed {
  seedBuiltinKnowledge(): Promise<void>;
  seedTribeKnowledge(tribeId: string): Promise<void>;
  search(query: string, scope: 'builtin' | 'tribe' | 'both'): SearchResult[];
}
```

### 3. `src/core/lib/background_extractor.ts` — Background Memory Extraction
```typescript
// Post-response: extrae decisiones, iniciativas, consejos → structured memory
// Local worker (Web Worker o setTimeout idle)
// Output: RAO entries + Lucidez blocks
interface BackgroundExtractor {
  extract(response: ExecutiveResponse): ExtractedMemory[];
  scheduleExtraction(responseId: string): void;
}
```

### 4. `src/core/lib/domain_pillar_map.ts` — Dominios OpenExecutive → Pilares Base Material
```typescript
// Mapping 8 domains → 13 pillars × 7 layers
const DOMAIN_PILLAR_MAP: Record<string, PillarRef[]> = {
  strategy:   [{pillar: 'Governance', layer: 'Strategy'}, {pillar: 'Economy', layer: 'Planning'}],
  finance:    [{pillar: 'Economy', layer: 'Capital'}, {pillar: 'Governance', layer: 'Treasury'}],
  hr:         [{pillar: 'People', layer: 'Culture'}, {pillar: 'Governance', layer: 'Roles'}],
  legal:      [{pillar: 'Governance', layer: 'Compliance'}, {pillar: 'Land', layer: 'Trust'}],
  operations: [{pillar: 'Infrastructure', layer: 'Processes'}, {pillar: 'Economy', layer: 'Production'}],
  marketing:  [{pillar: 'Culture', layer: 'Communication'}, {pillar: 'Economy', layer: 'Exchange'}],
  product:    [{pillar: 'Technology', layer: 'Products'}, {pillar: 'Economy', layer: 'Value'}],
  governance: [{pillar: 'Governance', layer: 'DecisionMaking'}, {pillar: 'Culture', layer: 'Rituals'}],
};
```

### 5. `src/core/lib/coworker_discord_adapter.ts` — Coworker Discord Integration
```typescript
// Coworker con canal Discord dedicado
// Lifecycle managed by Coworker store (no API lifespan)
interface DiscordCoworkerConfig {
  botToken: string;
  appId: string;
  guildIds: string[];
  notifyChannelId?: string;
  coworkerId: string; // linked coworker
}
```

### 6. `src/core/lib/lucidez_toggle.ts` — Modo Lucidez Toggle (3 niveles)
```typescript
// Cache strategy per block
type LucidezMode = 'full' | 'semantic' | 'raw';

interface LucidezBlock {
  content: string;
  mode: LucidezMode;
  cached: boolean;
  hash: string; // para invalidación
}

// UI: Toggle sol/luna en CoachFAB header
// raw mode = .lucidez-raw blocks (no cache, full context)
```

### 7. `src/core/lib/rao_verification.ts` — RAO Verification (Triaxial)
```typescript
// Evolución de Episodic Memory + Evaluation Suite
// 3 ejes verificación:
interface TriaxialVerification {
  rao: RAOEntry;           // Registro inmutable (ERC-8004 + IPFS)
  mjGate: MJGateVerdict;   // Veto ético (Leyes MJ: No harm / Earn existence / No deceive)
  crossCheck: CrossCheckResult; // Verificación cruzada entre coworkers + autómata
}
```

---

## 📦 PANTALLAS NUEVAS / EXTENSIONES

| Pantalla | Ruta | Descripción | Base |
|----------|------|-------------|------|
| **LocalModelsConfig** | `/local-models` | Configurar Ollama/LM Studio/vLLM, test connection, model pull | `local_models.ts` |
| **KnowledgeManager** | `/knowledge` | Ver/editar builtin knowledge (git-tracked), tribe knowledge, seeding status | `knowledge_seed.ts` |
| **LucidezToggle** | (Componente CoachFAB header) | Toggle 3 modos: Full / Semantic / Raw (.lucidez-raw) | `lucidez_toggle.ts` |
| **RAODashboard** | `/rao` | Ver entradas RAO, verificación triaxial, export IPFS | `rao_verification.ts` |
| **CoworkerDiscord** | `/coworkers/discord` | Configurar bot Discord por coworker, slash commands, notifications | `coworker_discord_adapter.ts` |
| **DomainPillarMapper** | `/domain-pillar-map` | Visualizar/editar mapping dominios → pilares Base Material | `domain_pillar_map.ts` |

---

## 🔗 INTEGRACIÓN CON MÓDULOS EXISTENTES HSCSG

### Extender Módulos Existentes
| Módulo HSCSG | Extensión OpenExecutive |
|--------------|-------------------------|
| `coworkers.ts` | Añadir 8 standing roles predefinidos (CSO, CFO, CHRO, GC, COO, CMO, CPO, Board) + `discordAdapter` config |
| `boundaries.ts` | Añadir `localModelRouting` policy + `knowledgeAccess` boundary |
| `valueDual.ts` | Ya implementa modo anfibio — extender con `openrouter` provider |
| `orchestrator-next-steps.cjs` | Añadir workstream `OPENEXECUTIVE_INTEGRATION` (7 tareas) |
| `brief-detector-recommender` | Detectar gaps: local_models, knowledge_seed, background_extractor, rao_verification, lucidez_toggle |
| `CoachFAB.tsx` | Añadir Lucidez Toggle (sol/luna) + RAO quick-access + Coworker Discord status |

### Estado Store (Extender `src/core/state/`)
```typescript
interface OpenExecutiveState {
  localModels: LocalModelConfig;
  knowledgeSeedStatus: 'pending' | 'seeding' | 'ready' | 'error';
  lucidezMode: 'full' | 'semantic' | 'raw';
  raoEntries: RAOEntry[];
  backgroundExtractionQueue: ExtractionJob[];
  coworkerDiscordAdapters: DiscordCoworkerConfig[];
  domainPillarMap: DomainPillarMap;
}
```

---

## 📋 PLAN DE IMPLEMENTACIÓN (Critical Path: 5 semanas)

### Semana 1: Core Abstractions (Fundación)
- [ ] `local_models.ts` + UI `/local-models` + test Ollama connection
- [ ] `knowledge_seed.ts` + builtin knowledge markdowns (copiar de OpenExecutive `knowledge/builtin/`)
- [ ] `background_extractor.ts` + Web Worker implementation
- [ ] Store extensions + persistence
- **Entregable:** Local models routing, knowledge seeding al boot, background extraction funcionando

### Semana 2: Memoria + Verificación
- [ ] `rao_verification.ts` — Triaxial verification (RAO + MJ Gate + Cross-check)
- [ ] `lucidez_toggle.ts` + CoachFAB integration (toggle sol/luna + .lucidez-raw blocks)
- [ ] RAO Dashboard `/rao` + IPFS export
- [ ] Integrar con `boundaries.ts` (MJ Gate veto en `governAction`)
- **Entregable:** RAO append-only, Lucidez 3 modos, triaxial verification

### Semana 3: Coworkers + Interfaces
- [ ] Extender `coworkers.ts` con 8 standing roles OpenExecutive
- [ ] `coworker_discord_adapter.ts` + UI `/coworkers/discord`
- [ ] `domain_pillar_map.ts` + UI `/domain-pillar-map`
- [ ] Mapping Vasos Comunicantes ↔ Interfaces OpenExecutive
- **Entregable:** 8 coworkers especializados, Discord integration, domain→pillar mapping

### Semana 4: Onboarding + Evaluation
- [ ] Integrar Onboarding Wizard con `BRIEF_ONBOARDING_CONSTRUCTOR` (Company Profile → Cuaternidad)
- [ ] Evaluation scenarios adaptadas: 29 scenarios → Lucidez Audit test suite
- [ ] LLM-as-judge → Autómata self-evaluation (contexto local)
- **Entregable:** Onboarding completo, eval suite adaptada

### Semana 5: Deployment + Polish
- [ ] Vercel preview/production auto-deploy config
- [ ] Access control: Google OAuth + shared-secret header (Boundaries policy)
- [ ] E2E tests: local models → knowledge seed → background extraction → RAO → Lucidez toggle
- [ ] Documentación: `openexecutive_integration.md` actualizada + briefs operativos
- **Entregable:** Sistema completo integrado, deploy Vercel, docs actualizadas

---

## 🎯 BRIEFS OPERATIVOS A CREAR (para brief-detector-recommender)

| Brief ID | Título | Perfil Objetivo |
|----------|--------|-----------------|
| BF-106 | `BRIEF_LOCAL_MODELS_ABSTRACTION` | Platform/Engineering |
| BF-107 | `BRIEF_KNOWLEDGE_SEEDING_RAG` | Data/Engineering |
| BF-108 | `BRIEF_BACKGROUND_MEMORY_EXTRACTION` | Platform/Architecture |
| BF-109 | `BRIEF_RAO_TRIAXIAL_VERIFICATION` | Governance/Legal |
| BF-110 | `BRIEF_LUCIDEZ_TOGGLE_3_MODES` | UX/Frontend |
| BF-111 | `BRIEF_COWORKER_8_ROLES_OPENEXECUTIVE` | Product/Operations |
| BF-112 | `BRIEF_COWORKER_DISCORD_ADAPTER` | Integration/Engineering |
| BF-113 | `BRIEF_DOMAIN_PILLAR_MAPPING` | Architecture/Strategy |
| BF-114 | `BRIEF_ONBOARDING_CUATERNIDAD` | Onboarding/All |
| BF-115 | `BRIEF_EVAL_SUITE_LUCIDEZ_AUDIT` | QA/Governance |

---

## 🔗 VASOS COMUNICANTES ACTUALIZADOS (OpenExecutive → HSCSG)

| Vaso | OpenExecutive | HSCSG v15 OS | Estado |
|------|---------------|--------------|--------|
| 1 | **Gobernanza: Sync** | Executive Orchestrator → Autómata Soberano | 🟡 Adaptar |
| 2 | **Confianza: Bridge** | Shared-secret header + Google OAuth → Boundaries + Policy CEL | ✅ Take |
| 3 | **Infra: Connect** | Local Models (Ollama) → Off-grid mode | ✅ Take |
| 4 | **Intel: Match** | RAG Dual Layer + Episodic Memory → Lucidez Material + RAO | 🟡 Adaptar |
| 5 | **App: Federate** | Multi-interface (Slack/Email/Telegram/Discord) → Vasos Comunicantes | 🟡 Mapeado |
| 6 | **Eco: Sync** | Company Profile + Document Upload → Cuaternidad + Base Material | 🟡 Adaptar |
| 7 | **Impact: Bridge** | Evaluation Suite → Lucidez Audit Triaxial | 🟡 Adaptar |
| 8 | **Funding: Proposal** | OpenRouter Hybrid → Modo Anfibio priceParity | ✅ Take |

---

## 📊 MÉTRICAS DE ÉXITO

| Métrica | Target | Medición |
|---------|--------|----------|
| Local models routing | 3+ modelos (llama3.3, qwen2.5, phi3) | Coworker usa modelo local sin Anthropic key |
| Knowledge seeding | < 30s boot time | Builtin knowledge indexed en IndexedDB |
| Background extraction | < 5s post-response | RAO entry + Lucidez blocks generados |
| Lucidez toggle | 3 modos funcionales | CoachFAB muestra .lucidez-raw blocks en raw mode |
| Triaxial verification | 100% decisions verified | RAO + MJ Gate + Cross-check en cada decisión |
| 8 Coworkers roles | Todos operativos | CSO/CFO/CHRO/GC/COO/CMO/CPO/Board respondiendo |
| Discord adapter | 1+ coworker conectado | Slash commands `/ask` `/today` funcionando |
| Domain→Pillar mapping | 8 domains → 13 pillars | Document upload categorizado automáticamente |

---

## 🚀 PRÓXIMOS PASOS INMEDIATOS

1. **Crear briefs operativos** (BF-106 a BF-115) via `brief-detector-recommender`
2. **Añadir workstream `OPENEXECUTIVE_INTEGRATION`** al orchestrator (7 tareas)
3. **Implementar Semana 1**: `local_models`, `knowledge_seed`, `background_extractor`
4. **Actualizar `BRIEFS_INDEX.md`** con 10 nuevos briefs
5. **Crear pantalla `/openexecutive`** como hub de integración (icon: `Briefcase` o `Users`)
6. **Push a GitHub** + deploy Vercel + verificar `/openexecutive` live

---

**Nota:** Esta integración respeta el principio **anfibio** de HSCSG: misma lógica opera en modo postmonetario (ZNU/CaaS, default offline) o conectado (USD/USDC vía priceParity). La abstracción de modelos locales (OpenAI-compatible) es el puente que permite ejecutar el "Executive Orchestrator" completamente offline — la verdadera soberanía computacional.