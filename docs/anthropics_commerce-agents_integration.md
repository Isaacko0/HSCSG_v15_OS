# Anthropic Commerce Agents — Integración HSCSG v15 OS

**Fecha:** 2026-09-10  
**Fuente:** `anthropics_commerce-agents_backup.md`  
**Metodología:** hscsg-repo-assimilation (Fase 2: Integración + mapeo isomórfico)  
**Autor:** Isaac Ko (Isaacko0)  

---

## 1. Resumen Ejecutivo

**Anthropic Commerce Agents** es una **reference implementation** production-grade para agentes de comercio dual (shopping + merchant) sobre Claude. Su arquitectura modular, safety enforzado en runtime, y patrón "definición única → 3 runtimes" es **altamente isomórfico** a la visión HSCSG v15 OS de **agentes soberanos, auditable y desplegables en infraestructura propia**.

**14 isomorfismos estructurales** detectados + **12 módulos extraíbles** de alto valor.

---

## 2. Mapeo Isomórfico Detallado

| # | Anthropic Commerce Agents | HSCSG v15 OS | Tipo Isomorfismo | Valor Estratégico |
|---|---------------------------|--------------|------------------|-------------------|
| 1 | **SkillRegistry** (`skills.py`) | Orchestrator + Skills Registry | **Estructural** | Patrón canónico para registry de skills auto-cargables desde `SKILL.md` |
| 2 | **MemoryStore + validate_fact** | RAO Verification + MemoryRuntime | **Funcional** | Backend de memoria con validación triaxial (RAO + MJ Gate + Cross-check) |
| 3 | **GroundingRule + first_forced_tool** | CEL Policy + MJ Gate | **Gobernanza** | Motor de grounding enforceado en tool call, no en prompt |
| 4 | **PresentationExtension** | Aside.tsx + i18n + Lucide + PresentationComponents | **UI/UX** | Modelo de componentes presentacionales desacoplados del loop |
| 5 | **Fence (chip hygiene)** | Fencing coworkers + sanitización input | **Seguridad** | Higiene de chips/tokens que el modelo lee como data |
| 6 | **Managed Agents Manifest** | MCP Server + AG-UI Protocol | **Integración** | Manifest declarativo para agentes hospedados con MCP |
| 7 | **Merchant Approval Gate** | CDS Jurados + Triple Veto (MJ Gate + Commonomics + FRNE) | **Gobernanza** | Staged writes → aprobación humana/certificada |
| 8 | **Backend Interface** | Packages (`identity`, `value`, `vasos`, `priceParity`) | **Arquitectura** | Contrato backend agnóstico a plataforma |
| 9 | **Verticales (4)** | Workstreams (11) | **Organización** | Vertical = workstream con demo end-to-end |
| 10 | **Switch Off (enable_*)** | NodeMode / PriceParity (postmonetario ↔ conectado) | **Configuración** | Feature flags que remueven tools/prompt/grounding |
| 11 | **Plugin commerce-builder** | Hermes Skills + hscsg-repo-assimilation | **Tooling** | Scaffold CLI para generar agents desde spec |
| 12 | **3 Runtimes** | 3 Capas IA (Autómata / Lucidez / Background Extractor) | **Runtime** | Separación: loop referencia / SDK / Managed |
| 13 | **Turn Helpers (compaction, eager dispatch)** | SOUL Tiers + E²R + Heartbeat | **Memoria** | Gestión de contexto y dispatch eager |
| 14 | **DelegationExtension** | Coworkers (6 roles standing) | **Delegación** | Tareas modelo aisladas detrás de tool contract |

---

## 3. Análisis por Capas HSCSG

### Capa 1: Identidad Soberana (`packages/identity/`)
- **Isomorfismo:** `BaseAgentConfig` (identity, models, budgets, capabilities) ↔ DID:hsccsg + Pasaporte Gaia
- **Extraíble:** `config.py` → base para `IdentityConfig` HSCSG con `nodeMode`, `priceParity`, `brandVoice`

### Capa 2: Nodos de Servicio (`packages/value/`, `lib/global_pool.ts`)
- **Isomorfismo:** `StorefrontBackend` / `MerchantBackend` ↔ Package interfaces
- **Extraíble:** Backend interfaces → contratos TypeScript para `packages/value` (cart, orders, analytics, inventory)

### Capa 3: Nexo IA (`lib/automaton.ts`, `lib/lucidez_toggle.ts`)
- **Isomorfismo:** 3 Runtimes ↔ 3 Capas IA
  - Messages API Runtime → **Autómata** (SOUL, E²R, MJ Gate, heartbeat)
  - Agent SDK Runtime → **Lucidez Toggle** (Full/Semantic/Raw, coach integration)
  - Managed Agents → **Background Extractor** (post-response extraction, RAO seeding)
- **Extraíble:** `execution.py` (`BaseToolExecutor`) → `AutomatonExecutor` con failure ladder, skills, presentation, delegates, memory

### Capa 4: Repositorio Global (`lib/rao_verification.ts`, `lib/skill_marketplace.ts`)
- **Isomorfismo:** `SkillRegistry` + `MemoryStore` + `manifest.py` ↔ Skill Marketplace + RAO Verification
- **Extraíble:** 
  - `skills.py` → `SkillMarketplace` con `hermes skill install <url>`
  - `memory.py` → `RAOVerificationStore` con `validate_fact` triaxial
  - `manifest.py` → `NodeManifest` para despliegue federado

---

## 4. Safety → Gobernanza HSCSG

| Anthropic Safety | HSCSG Equivalente | Implementación |
|------------------|-------------------|----------------|
| Fencing | Sanitización coworkers input | `Fence` class → `CoworkerInputSanitizer` |
| Provenance Gates | CEL Policy enforcement | `GroundingRule` → `CELPolicyGate` en tool call |
| Caps (tokens, tools, turns) | Budgets por coworker/autómata | `BaseAgentConfig.budgets` → `AutomatonBudget` |
| Memory Validation | RAO Verification Triaxial | `validate_fact` → `RAOValidator` (ERC-8004 + MJ Gate + Cross-check) |
| Merchant Approval Gate | CDS Jurados + Triple Veto | Staged writes → `ApprovalGate` con jurados sorteados |
| Grounding Rules | CEL + first_forced_tool | `GroundingRule.matchers` → `CELGroundingEngine` |
| Analysis Budgets | Delegate budgets (E²R) | `DelegateExtension` → `CoworkerDelegate` con budget |
| MCP Loopback Bind | Boundary CEL allowlist | `mcp_server.py` → `MCPBoundaryGuard` |

**Insight clave:** Anthropic enforza safety **dentro del tool call** (execution layer), no en prompt. HSCSG debe hacer lo mismo: **CEL policy en `BaseToolExecutor`**, no en system prompt.

---

## 5. Arquitectura "Definición Única → Múltiples Runtimes"

```python
# Anthropic: una definición → 3 runtimes
skills_dir = "shopping-agent/skills"
backend = YourStorefrontBackend()
config = ShoppingAgentConfig(brand_name="ACME")

# Messages API
agent = ShoppingAgent(backend, skills_dir, config)

# Agent SDK  
agent = ShoppingAgentSDK(backend, skills_dir, config)

# Managed Agents
deploy_managed_agent("shopping-agent/managed-agents/shopping-agent")
```

**HSCSG equivalente:**
```typescript
// Una definición de agente → 3 capas
const agentDef = {
  skills: ["search", "research", "care", "memory", "planning"],
  backend: HSCSGBackend,      // packages/value + identity
  config: HSCSGConfig,        // nodeMode, priceParity, brandVoice
  coworkers: 6 roles standing
};

// Capa 1: Autómata (Messages API style)
const automaton = new Automaton(agentDef);

// Capa 2: Lucidez Toggle (Agent SDK style)  
const lucidez = new LucidezToggle(automaton, { level: "semantic" });

// Capa 3: Background Extractor (Managed style)
const extractor = new BackgroundExtractor(automaton, { mcp: nodeMCP });
```

---

## 6. Verticales → Workstreams HSCSG

| Vertical Anthropic | Workstream HSCSG | Transferencia Directa |
|-------------------|------------------|----------------------|
| **Retail** (ACME) | `ECOALDEA_INTEGRATION` + `MARKETING_OS_INTEGRATION` | Canasta básica, pools, pricing, campaigns |
| **Travel** (ACME Travel) | `GAIA_INTEGRATION` (infra:connect, intel:match) | Date-bound inventory, occupancy calendars |
| **Telecom** (ACME Mobile) | `OPENEXECUTIVE_INTEGRATION` (domain-pillar-map) | Account context, plan matrix, regulated fees |
| **Entertainment** (ACME Tickets) | `TRIPARTITE_INTEGRATION` (certification, governance) | Timed holds, waitlists, fee-preserving moves |

---

## 7. Módulos de Alto Valor para Extracción Inmediata

| Prioridad | Módulo | Archivo Fuente | Esfuerzo | Valor |
|-----------|--------|----------------|----------|-------|
| **P0** | `BaseToolExecutor` | `commerce_common/execution.py` | 3 días | Core del autómata HSCSG |
| **P0** | `SkillRegistry` | `commerce_common/skills.py` | 2 días | Skill marketplace + loader |
| **P0** | `GroundingRule` | `commerce_common/grounding.py` | 2 días | CEL policy engine |
| **P1** | `MemoryStore + validate_fact` | `commerce_common/memory.py` | 3 días | RAO Verification backend |
| **P1** | `PresentationExtension` | `commerce_common/presentation.py` | 2 días | Aside.tsx + PresentationComponents |
| **P1** | `BaseAgentConfig` | `commerce_common/config.py` | 1 día | Config unificada HSCSG |
| **P2** | `StorefrontBackend` interface | `shopping_agent/core/backend.py` | 2 días | Package `value` contracts |
| **P2** | `MerchantBackend` interface | `merchant_agent/core/backend.py` | 2 días | Package `value` analytics |
| **P2** | `DelegateExtension` | `commerce_common/delegation.py` | 2 días | Coworker delegation pattern |
| **P3** | `commerce-builder` plugin | `plugins/commerce-builder/` | 5 días | Scaffold CLI para agents HSCSG |
| **P3** | `deploy_managed_agent.sh` | `scripts/deploy_managed_agent.sh` | 2 días | Deploy MCP para nodos |
| **P3** | Vertical examples | `examples/*/` | 3 días | Demo end-to-end por workstream |

---

## 8. Diferencias Críticas (Take vs Discard)

| Aspecto | Anthropic | HSCSG Decision | Razón |
|---------|-----------|----------------|-------|
| **Runtime dependency** | `anthropic` SDK obligatorio | **Agnóstico** (provider-agnostic via `hermes-proxy-llm-bridge`) | Soberanía de modelo |
| **Memory** | Server-side extraction | **Local-first** (IndexedDB + WASM/QuickJS) | Privacidad + offline |
| **MCP** | Loopback bind only | **Federado** (DIDComm + Trust Registry) | Nodos soberanos |
| **Approval** | Human-in-the-loop | **CDS Jurados sorteados + Triple Veto** | Gobernanza algorítmica |
| **Pricing** | USD/Stripe | **Multi-unidad** (TQ/ZNU/CoRe/USD via priceParity) | Postmonetario + ReFi |
| **Identity** | Session-based | **DID:hsccsg + VC W3C** | Identidad soberana portátil |
| **Verticales** | Hardcoded 4 | **Workstreams dinámicos** (11 + extensibles) | Arquitectura abierta |

---

## 9. Plan de Asimilación (Tasks Orchestrator)

```javascript
// Tasks a añadir al orchestrator (workstream ANTHROPIC_INTEGRATION)
{
  "ANTHROPIC_INTEGRATION": [
    {"id": "ANT-001", "title": "Extraer BaseToolExecutor → lib/automaton_executor.ts", "deps": [], "effort": 3, "value": 95},
    {"id": "ANT-002", "title": "Extraer SkillRegistry → lib/skill_registry.ts", "deps": [], "effort": 2, "value": 90},
    {"id": "ANT-003", "title": "Extraer GroundingRule → lib/cel_grounding.ts", "deps": [], "effort": 2, "value": 92},
    {"id": "ANT-004", "title": "Extraer MemoryStore → lib/rao_verification_store.ts", "deps": ["ANT-003"], "effort": 3, "value": 94},
    {"id": "ANT-005", "title": "Extraer PresentationExtension → lib/presentation_component.ts", "deps": [], "effort": 2, "value": 88},
    {"id": "ANT-006", "title": "Extraer BaseAgentConfig → lib/hscsg_config.ts", "deps": [], "effort": 1, "value": 85},
    {"id": "ANT-007", "title": "Extraer StorefrontBackend → packages/value/storefront_backend.ts", "deps": ["ANT-001"], "effort": 2, "value": 90},
    {"id": "ANT-008", "title": "Extraer MerchantBackend → packages/value/merchant_backend.ts", "deps": ["ANT-001"], "effort": 2, "value": 88},
    {"id": "ANT-009", "title": "Extraer DelegateExtension → lib/coworker_delegate.ts", "deps": ["ANT-001"], "effort": 2, "value": 86},
    {"id": "ANT-010", "title": "Adaptar commerce-builder plugin → hermes skill scaffold", "deps": ["ANT-002"], "effort": 5, "value": 80},
    {"id": "ANT-011", "title": "Adaptar deploy_managed_agent → scripts/deploy_node_mcp.sh", "deps": ["ANT-004"], "effort": 2, "value": 85},
    {"id": "ANT-012", "title": "Crear demo vertical Retail → ECOALDEA + MARKETING", "deps": ["ANT-001","ANT-004","ANT-005"], "effort": 3, "value": 82}
  ]
}
```

---

## 10. Conclusión

**Anthropic Commerce Agents es la reference implementation más cercana a la visión HSCSG v15 OS** que he encontrado en el ecosistema Claude:

- ✅ Arquitectura modular real (no monolito)
- ✅ Safety enforzado en execution layer (no prompt engineering)
- ✅ Definición única → múltiples runtimes
- ✅ Backend interfaces agnósticas
- ✅ Skill system basado en archivos (`SKILL.md`)
- ✅ Memory con validación
- ✅ Presentation layer desacoplada
- ✅ Managed Agents = patrón MCP federado
- ✅ Verticales = demos end-to-end por dominio

**Gap principal:** Anthropic asume **infraestructura centralizada** (API key, loopback MCP, Stripe, hosted). HSCSG debe **descentralizar cada capa**: DID identity, federated MCP, multi-currency via priceParity, local-first memory, CDS governance.

**Próximo paso:** Ejecutar `ANT-001` a `ANT-006` (core modules) para tener el esqueleto del autómata HSCSG con safety nativo.