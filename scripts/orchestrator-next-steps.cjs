#!/usr/bin/env node
/**
 * HSCSG Next Steps Orchestrator CLI
 * Implementa la skill hscsg-next-steps-orchestrator v0.2.0
 * Uso: node scripts/orchestrator-next-steps.js [comando] [args]
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const STATE_FILE = path.join(__dirname, '..', 'orchestrator-state.json');
const NAVTEKA_ROOT = path.join(__dirname, '..');

// ============ STATE MANAGEMENT ============

function loadState() {
  if (fs.existsSync(STATE_FILE)) {
    return JSON.parse(fs.readFileSync(STATE_FILE, 'utf-8'));
  }
  return initializeState();
}

function saveState(state) {
  state.lastInteraction = new Date().toISOString();
  fs.writeFileSync(STATE_FILE, JSON.stringify(state, null, 2));
}

function initializeState() {
  const baseTasks = {
    "P0_SPECS": [
      {"id": "P0-netbenefit", "title": "Crear lib/netbenefit.ts", "deps": [], "effort": 3, "value": 95, "workstream": "P0_SPECS", "source": "agent", "priority": 90, "blocks": ["P0-cds_jurados", "P0-copiosis"], "status": "pending", "notes": "Motor NetBenefit 8 escalas + CDS_Jurados weights"},
      {"id": "P0-cds_jurados", "title": "Crear lib/cds_jurados.ts", "deps": ["P0-netbenefit"], "effort": 3, "value": 90, "workstream": "P0_SPECS", "source": "agent", "priority": 88, "blocks": [], "status": "pending", "notes": "Jury summon, weights, actas RAO, rotation"},
      {"id": "P0-copiosis", "title": "Crear lib/copiosis.ts", "deps": ["P0-netbenefit"], "effort": 2, "value": 88, "workstream": "P0_SPECS", "source": "agent", "priority": 86, "blocks": ["P0-valueflows", "COACH-automaton"], "status": "pending", "notes": "NetBenefitFlow, GoodType, LuxuryPriceNBR, CapitalAccessTier, BNGradient"},
      {"id": "P0-valueflows", "title": "Extender ValueFlows types", "deps": ["P0-copiosis"], "effort": 1, "value": 85, "workstream": "P0_SPECS", "source": "agent", "priority": 84, "blocks": [], "status": "pending", "notes": "Extended EconomicEvent con goodType, luxuryPriceNBR, capitalAccessTier, netBenefitFlow"}
    ],
    "MIGRATION": [
      {"id": "MIG-P1-BranDNA", "title": "Migrar P1 BranDNA + store", "deps": [], "effort": 5, "value": 92, "workstream": "MIGRATION", "source": "agent", "priority": 92, "blocks": ["MIG-P2-Products", "MIG-P3-Personas", "MIG-P5-Produce", "COACH-integration"], "status": "pending", "notes": "Base para P5 auto-llenado"},
      {"id": "MIG-P2-Products", "title": "Migrar P2 Products", "deps": ["MIG-P1-BranDNA"], "effort": 4, "value": 88, "workstream": "MIGRATION", "source": "agent", "priority": 88, "blocks": ["MIG-P4-Plan", "MIG-P8-Pagos"], "status": "pending", "notes": ""},
      {"id": "MIG-P3-Personas", "title": "Migrar P3 Personas/CRM", "deps": ["MIG-P1-BranDNA"], "effort": 5, "value": 85, "workstream": "MIGRATION", "source": "agent", "priority": 85, "blocks": ["MIG-P4-Plan", "MIG-P11-Prospecta"], "status": "pending", "notes": ""},
      {"id": "MIG-P4-Plan", "title": "Migrar P4 StrategicBrain", "deps": ["MIG-P2-Products", "MIG-P3-Personas"], "effort": 4, "value": 90, "workstream": "MIGRATION", "source": "agent", "priority": 90, "blocks": ["MIG-P5-Produce", "MIG-P7-Pauta"], "status": "pending", "notes": ""},
      {"id": "MIG-P5-Produce", "title": "Migrar P5 VITCH + auto-llenado P1→P5", "deps": ["MIG-P1-BranDNA", "MIG-P4-Plan"], "effort": 5, "value": 95, "workstream": "MIGRATION", "source": "agent", "priority": 95, "blocks": ["MIG-P9-Perfecciona", "MIG-P10-Publica", "COACH-integration"], "status": "pending", "notes": "Auto-llenado BranDNA→VITCH"},
      {"id": "MIG-P6-Persuade", "title": "Migrar P6 CloserAI", "deps": ["MIG-P1-BranDNA"], "effort": 4, "value": 82, "workstream": "MIGRATION", "source": "agent", "priority": 82, "blocks": [], "status": "pending", "notes": ""},
      {"id": "MIG-P7-Pauta", "title": "Migrar P7 MediaBuyer", "deps": ["MIG-P4-Plan"], "effort": 4, "value": 85, "workstream": "MIGRATION", "source": "agent", "priority": 85, "blocks": [], "status": "pending", "notes": ""},
      {"id": "MIG-P8-Pagos", "title": "Migrar P8 RevenueThermometer", "deps": ["MIG-P2-Products"], "effort": 3, "value": 80, "workstream": "MIGRATION", "source": "agent", "priority": 80, "blocks": [], "status": "pending", "notes": ""},
      {"id": "MIG-P9-Perfecciona", "title": "Migrar P9 QA/Iteration", "deps": ["MIG-P5-Produce"], "effort": 3, "value": 78, "workstream": "MIGRATION", "source": "agent", "priority": 78, "blocks": [], "status": "pending", "notes": ""},
      {"id": "MIG-P10-Publica", "title": "Migrar P10 Publica/Radar", "deps": ["MIG-P5-Produce"], "effort": 3, "value": 75, "workstream": "MIGRATION", "source": "agent", "priority": 75, "blocks": [], "status": "pending", "notes": ""},
      {"id": "MIG-P11-Prospecta", "title": "Migrar P11 Scout/LeadGen", "deps": ["MIG-P3-Personas"], "effort": 3, "value": 77, "workstream": "MIGRATION", "source": "agent", "priority": 77, "blocks": [], "status": "pending", "notes": ""}
    ],
    "COACH": [
      {"id": "COACH-automaton", "title": "Crear lib/automaton.ts (SOUL, E²R, MJ Gate)", "deps": ["P0-netbenefit", "P0-copiosis"], "effort": 5, "value": 90, "workstream": "COACH", "source": "agent", "priority": 90, "blocks": ["COACH-hook"], "status": "pending", "notes": "SOUL, tiers, heartbeat, E²R, MJ Gate, spawn"},
      {"id": "COACH-hook", "title": "Crear hook useAutomaton()", "deps": ["COACH-automaton"], "effort": 2, "value": 88, "workstream": "COACH", "source": "agent", "priority": 88, "blocks": ["COACH-integration"], "status": "pending", "notes": "Zustand integration"},
      {"id": "COACH-integration", "title": "Refactor CoachFAB → useAutomaton + BranDNA context", "deps": ["COACH-hook", "MIG-P1-BranDNA"], "effort": 3, "value": 92, "workstream": "COACH", "source": "agent", "priority": 92, "blocks": ["COACH-lucidez"], "status": "pending", "notes": "askAutomaton + BranDNA context + Lucidez toggle"},
      {"id": "COACH-lucidez", "title": "Modo Lucidez Material toggle en CoachFAB", "deps": ["COACH-integration"], "effort": 2, "value": 85, "workstream": "COACH", "source": "agent", "priority": 85, "blocks": [], "status": "pending", "notes": "Botón luna/sol, .lucidez-raw blocks"}
    ],
    "ROLES": [
      {"id": "ROLES-mapping", "title": "Definir mapping DeseOS→Coworkers en coworkerRoles.ts", "deps": [], "effort": 1, "value": 80, "workstream": "ROLES", "source": "agent", "priority": 80, "blocks": ["ROLES-state"], "status": "pending", "notes": "6 roles: Strategist, Creative Director, Closer, Media Buyer, Scout, QA Lead"},
      {"id": "ROLES-state", "title": "Actualizar coworkers.ts con deseosRole + seeds", "deps": ["ROLES-mapping"], "effort": 2, "value": 82, "workstream": "ROLES", "source": "agent", "priority": 82, "blocks": ["ROLES-ui"], "status": "pending", "notes": ""},
      {"id": "ROLES-ui", "title": "UI Coworkers: badges Creative/Operator, filtros", "deps": ["ROLES-state"], "effort": 2, "value": 78, "workstream": "ROLES", "source": "agent", "priority": 78, "blocks": [], "status": "pending", "notes": "Chips color-coded, filtro sidebar"}
    ],
    "DEPLOY": [
      {"id": "DEPLOY-link", "title": "Vercel link + env vars + deploy prod", "deps": [], "effort": 2, "value": 95, "workstream": "DEPLOY", "source": "agent", "priority": 95, "blocks": ["DEPLOY-verify"], "status": "pending", "notes": "Fix 404 DEPLOYMENT_NOT_FOUND"},
      {"id": "DEPLOY-verify", "title": "Verificar rutas 200 + CoachFAB visible", "deps": ["DEPLOY-link"], "effort": 1, "value": 90, "workstream": "DEPLOY", "source": "agent", "priority": 90, "blocks": ["DEPLOY-auto"], "status": "pending", "notes": "/, /coach, /boundaries, /coworkers"},
      {"id": "DEPLOY-auto", "title": "Configurar auto-deploy on push", "deps": ["DEPLOY-verify"], "effort": 1, "value": 85, "workstream": "DEPLOY", "source": "agent", "priority": 85, "blocks": [], "status": "pending", "notes": "Vercel dashboard Settings → Git"}
    ],
    "GAIA_INTEGRATION": [
      {"id": "GAIA-gov-sync", "title": "Implementar governance:sync CDS↔Gaia DAO", "deps": ["P0-copiosis", "COACH-automaton"], "effort": 5, "value": 95, "workstream": "GAIA_INTEGRATION", "source": "agent", "priority": 95, "blocks": ["GAIA-trust-bridge", "GAIA-app-federate"], "status": "pending", "notes": "VC-signed Decision Records, MJ Gate veto, RAO anchor"},
      {"id": "GAIA-trust-bridge", "title": "Implementar trust:bridge NetBenefitFlow↔VC", "deps": ["GAIA-gov-sync", "P0-valueflows"], "effort": 5, "value": 93, "workstream": "GAIA_INTEGRATION", "source": "agent", "priority": 93, "blocks": ["GAIA-app-federate"], "status": "pending", "notes": "DIDComm, Project Weave, Trust Registry ↔ RAO"},
      {"id": "GAIA-infra-connect", "title": "Implementar infra:connect neko↔**Discovery Layer**", "deps": ["MIG-P10-Publica", "DEPLOY-link"], "effort": 4, "value": 90, "workstream": "GAIA_INTEGRATION", "source": "agent", "priority": 90, "blocks": ["GAIA-intel-match"], "status": "pending", "notes": "WebRTC discovery, Boundaries CEL allowlist"},
      {"id": "GAIA-intel-match", "title": "Implementar intel:match Autómata↔AI Matching", "deps": ["GAIA-infra-connect", "COACH-integration"], "effort": 4, "value": 92, "workstream": "GAIA_INTEGRATION", "source": "agent", "priority": 92, "blocks": ["GAIA-eco-sync"], "status": "pending", "notes": "E²R ↔ Recommendation Engine, verifiable inference"},
      {"id": "GAIA-app-federate", "title": "Implementar app:federate Marketplace↔CaaS-BM", "deps": ["GAIA-trust-bridge", "MIG-P5-Produce"], "effort": 5, "value": 94, "workstream": "GAIA_INTEGRATION", "source": "agent", "priority": 94, "blocks": ["GAIA-eco-sync"], "status": "pending", "notes": "Custom commission, Commonomics, ZNU settlement"},
      {"id": "GAIA-eco-sync", "title": "Implementar eco:sync Base Material↔Gaia Impact", "deps": ["GAIA-app-federate", "GAIA-intel-match"], "effort": 3, "value": 88, "workstream": "GAIA_INTEGRATION", "source": "agent", "priority": 88, "blocks": [], "status": "pending", "notes": "CAC/PGS ↔ Gaia Score, multidimensional pipelines"},
      {"id": "GAIA-funding-proposal", "title": "Propuesta financiación conjunta (Sección 15)", "deps": ["GAIA-gov-sync", "GAIA-trust-bridge"], "effort": 2, "value": 90, "workstream": "GAIA_INTEGRATION", "source": "agent", "priority": 90, "blocks": [], "status": "pending", "notes": "Arquitectura común: datos+confianza+IA+educación+proyectos+territorios+economía+regeneración"},
      {"id": "GAIA-marketplace-level3", "title": "Integrar Gaia AI Agent (Level 3) con CoachFAB", "deps": ["COACH-integration", "GAIA-infra-connect"], "effort": 3, "value": 85, "workstream": "GAIA_INTEGRATION", "source": "agent", "priority": 85, "blocks": [], "status": "pending", "notes": "Business+Personal assistance, Gaia ecosystem matchmaking"}
    ],
    "ECOALDEA_INTEGRATION": [
      {"id": "ECO-global-pool", "title": "Crear lib/global_pool.ts — Piscina global multilateral", "deps": [], "effort": 3, "value": 95, "workstream": "ECOALDEA_INTEGRATION", "source": "agent", "priority": 95, "blocks": ["ECO-bilateral-pool", "ECO-reconciliation"], "status": "pending", "notes": "Pool compartido real entre tribus, pool_type global/bilateral, sin filtrar counterpart"},
      {"id": "ECO-bilateral-pool", "title": "Crear lib/bilateral_pool.ts — Piscinas bilaterales", "deps": ["ECO-global-pool"], "effort": 2, "value": 90, "workstream": "ECOALDEA_INTEGRATION", "source": "agent", "priority": 90, "blocks": [], "status": "pending", "notes": "Acuerdos pares, no afectan pool global, límites negociados"},
      {"id": "ECO-basket", "title": "Crear lib/basket.ts — Canasta básica federada (consenso 100%)", "deps": [], "effort": 3, "value": 93, "workstream": "ECOALDEA_INTEGRATION", "source": "agent", "priority": 93, "blocks": ["ECO-energy-metric"], "status": "pending", "notes": "500 TQ base, items energéticos, propuesta federada, approvalThreshold 100"},
      {"id": "ECO-energy-metric", "title": "Crear lib/energy_metric.ts — Métrica TQ=1kWh + ICE Database", "deps": ["ECO-basket"], "effort": 3, "value": 92, "workstream": "ECOALDEA_INTEGRATION", "source": "agent", "priority": 92, "blocks": [], "status": "pending", "notes": "Constante física inmutable, subset ICE materials, TQ↔kWh↔moneda local via priceParity"},
      {"id": "ECO-reconciliation", "title": "Crear lib/reconciliation.ts — Reconexión off-grid + hash chain", "deps": ["ECO-global-pool"], "effort": 3, "value": 94, "workstream": "ECOALDEA_INTEGRATION", "source": "agent", "priority": 94, "blocks": [], "status": "pending", "notes": "Comparar last_hash, intercambiar divergencias, verificar firmas duales + hashes"},
      {"id": "ECO-modules", "title": "Crear lib/modules.ts — AssemblyOwnedModule (auto-suscripción)", "deps": [], "effort": 2, "value": 88, "workstream": "ECOALDEA_INTEGRATION", "source": "agent", "priority": 88, "blocks": [], "status": "pending", "notes": "is_assembly_owned=true, servicios obligatorios: energía, agua, comms, gobernanza"},
      {"id": "ECO-frne", "title": "Crear lib/frne.ts — Fórmula Restitución No Especulativa (FRNE)", "deps": [], "effort": 2, "value": 90, "workstream": "ECOALDEA_INTEGRATION", "source": "agent", "priority": 90, "blocks": [], "status": "pending", "notes": "R_neto = I_ini - D_desgaste - C_restauracion +/- B_TQ - T_salida, pago 12-24 meses"},
      {"id": "ECO-land-trust", "title": "Crear lib/land_trust.ts — Fideicomiso comunitario inalienable", "deps": [], "effort": 2, "value": 88, "workstream": "ECOALDEA_INTEGRATION", "source": "agent", "priority": 88, "blocks": [], "status": "pending", "notes": "Tierra colectiva/indivisible/inalienable, usufructo membresía activa, no venta mercado abierto"},
      {"id": "ECO-cultural-profiles", "title": "Crear lib/cultural_profiles.ts — Cultura anidada (8 perfiles + custom)", "deps": [], "effort": 3, "value": 91, "workstream": "ECOALDEA_INTEGRATION", "source": "agent", "priority": 91, "blocks": ["ECO-norm-gossip"], "status": "pending", "notes": "Adventista, ISKCON, Plum Village, Halal, Kosher, Jain, Vegano, Ital Rastafari + crear custom"},
      {"id": "ECO-norm-gossip", "title": "Crear lib/norm_gossip.ts — Flujo normas descentralizado (CRDT)", "deps": ["ECO-cultural-profiles"], "effort": 3, "value": 89, "workstream": "ECOALDEA_INTEGRATION", "source": "agent", "priority": 89, "blocks": [], "status": "pending", "notes": "Gossip 60s, sharing prohibiciones, auto-aprobación opcional, independencia local"},
      {"id": "ECO-skill-runtime", "title": "Crear lib/skill_runtime.ts — Runtime WASM/QuickJS (evolución .nfcpkg)", "deps": [], "effort": 4, "value": 93, "workstream": "ECOALDEA_INTEGRATION", "source": "agent", "priority": 93, "blocks": ["ECO-skill-marketplace"], "status": "pending", "notes": "Sandbox QuickJS/WASM, timeout configurable, capacidades declarativas, firmado tribu"},
      {"id": "ECO-skill-marketplace", "title": "Crear lib/skill_marketplace.ts + CLI hermes skill install/publish", "deps": ["ECO-skill-runtime"], "effort": 3, "value": 90, "workstream": "ECOALDEA_INTEGRATION", "source": "agent", "priority": 90, "blocks": [], "status": "pending", "notes": "Marketplace local, registry git, semver, hermes skill install <url>"},
      {"id": "ECO-tribal-gatherings", "title": "Crear lib/tribal_gatherings.ts — Encuentros estacionales (4/año)", "deps": [], "effort": 2, "value": 85, "workstream": "ECOALDEA_INTEGRATION", "source": "agent", "priority": 85, "blocks": [], "status": "pending", "notes": "Solsticios/equinoccios, sincronización pools, intercambio semillas, rituales, actas"},
      {"id": "ECO-screens", "title": "Crear 11 pantallas Ecoaldea: /global-pool, /bilateral-pools, /basket-governance, /energy-metric, /reconciliation, /cultural-profiles, /norm-gossip, /frne-calculator, /land-trust, /tribal-gatherings, /skill-marketplace", "deps": ["ECO-global-pool", "ECO-basket", "ECO-energy-metric", "ECO-reconciliation", "ECO-cultural-profiles", "ECO-norm-gossip", "ECO-frne", "ECO-land-trust", "ECO-skill-runtime", "ECO-tribal-gatherings"], "effort": 5, "value": 95, "workstream": "ECOALDEA_INTEGRATION", "source": "agent", "priority": 95, "blocks": [], "status": "pending", "notes": "Icon Leaf/Users, routing, i18n, store integration, sidebar items"}
    ],
    "OPENEXECUTIVE_INTEGRATION": [
      {"id": "OE-local-models", "title": "Crear lib/local_models.ts — Abstracción OpenAI-compatible (Ollama/LM Studio/vLLM)", "deps": [], "effort": 3, "value": 95, "workstream": "OPENEXECUTIVE_INTEGRATION", "source": "agent", "priority": 95, "blocks": ["OE-knowledge-seed", "OE-background-extractor"], "status": "pending", "notes": "Interface unificada, hybrid routing per-coworker, test connection + model pull"},
      {"id": "OE-knowledge-seed", "title": "Crear lib/knowledge_seed.ts — Knowledge Seeding (Markdown → Vector Store)", "deps": ["OE-local-models"], "effort": 3, "value": 93, "workstream": "OPENEXECUTIVE_INTEGRATION", "source": "agent", "priority": 93, "blocks": ["OE-background-extractor"], "status": "pending", "notes": "Lee knowledge/builtin/*.md al boot, chunks + embeddings (transformers.js) → IndexedDB, separado de tribe knowledge"},
      {"id": "OE-background-extractor", "title": "Crear lib/background_extractor.ts — Background Memory Extraction", "deps": ["OE-knowledge-seed"], "effort": 3, "value": 92, "workstream": "OPENEXECUTIVE_INTEGRATION", "source": "agent", "priority": 92, "blocks": ["OE-rao-verification"], "status": "pending", "notes": "Post-response Web Worker: extrae decisiones/iniciativas/consejos → RAO entries + Lucidez blocks"},
      {"id": "OE-rao-verification", "title": "Crear lib/rao_verification.ts — RAO Verification Triaxial", "deps": ["OE-background-extractor"], "effort": 3, "value": 94, "workstream": "OPENEXECUTIVE_INTEGRATION", "source": "agent", "priority": 94, "blocks": ["OE-lucidez-toggle"], "status": "pending", "notes": "3 ejes: RAO (ERC-8004+IPFS) + MJ Gate (veto ético) + Cross-check (coworkers+autómata)"},
      {"id": "OE-lucidez-toggle", "title": "Crear lib/lucidez_toggle.ts — Modo Lucidez Toggle (3 niveles) + CoachFAB integration", "deps": ["OE-rao-verification"], "effort": 2, "value": 91, "workstream": "OPENEXECUTIVE_INTEGRATION", "source": "agent", "priority": 91, "blocks": ["OE-coworker-roles"], "status": "pending", "notes": "Full/Semantic/Raw (.lucidez-raw), toggle sol/luna en CoachFAB header, cache strategy per block"},
      {"id": "OE-coworker-roles", "title": "Extender coworkers.ts con 8 standing roles OpenExecutive + Discord adapter", "deps": ["OE-lucidez-toggle"], "effort": 3, "value": 93, "workstream": "OPENEXECUTIVE_INTEGRATION", "source": "agent", "priority": 93, "blocks": ["OE-domain-pillar-map"], "status": "pending", "notes": "CSO/CFO/CHRO/GC/COO/CMO/CPO/Board + discordAdapter config, channel per coworker"},
      {"id": "OE-domain-pillar-map", "title": "Crear lib/domain_pillar_map.ts — Dominios (8) → Pilares Base Material (13×7)", "deps": ["OE-coworker-roles"], "effort": 2, "value": 88, "workstream": "OPENEXECUTIVE_INTEGRATION", "source": "agent", "priority": 88, "blocks": ["OE-screens"], "status": "pending", "notes": "Mapping table strategy/finance/hr/legal/ops/marketing/product/governance → 13 pillars"},
      {"id": "OE-screens", "title": "Crear 6 pantallas OpenExecutive: /local-models, /knowledge, /rao, /lucidez-toggle, /coworkers/discord, /domain-pillar-map", "deps": ["OE-domain-pillar-map"], "effort": 4, "value": 95, "workstream": "OPENEXECUTIVE_INTEGRATION", "source": "agent", "priority": 95, "blocks": [], "status": "pending", "notes": "Icon Briefcase/Users, routing, i18n, store integration, sidebar items"}
    ],
    "MARKETING_OS_INTEGRATION": [
      {"id": "MO-brand-context", "title": "Crear lib/brand_context.ts — Brand Context obligatorio (per-tribe)", "deps": [], "effort": 2, "value": 92, "workstream": "MARKETING_OS_INTEGRATION", "source": "agent", "priority": 92, "blocks": ["MO-marketing-audit", "MO-hooks-engine", "MO-copy-grader"], "status": "pending", "notes": "Mismo principio que Marketing OS: sin brand context no se generan outputs. Mapea a Pilar 13 (Cultura) + Tribu perfil"},
      {"id": "MO-marketing-audit", "title": "Crear lib/marketing_audit.ts — Auditoría inicial (antes de generar contenido)", "deps": ["MO-brand-context"], "effort": 2, "value": 90, "workstream": "MARKETING_OS_INTEGRATION", "source": "agent", "priority": 90, "blocks": ["MO-hooks-engine"], "status": "pending", "notes": "Diagnóstico: brand pillars, voice/tone, audience, positioning. Equivale a NetBenefit aplicado a marketing"},
      {"id": "MO-hooks-engine", "title": "Crear lib/hooks_engine.ts — Hook Engine (18 tácticas)", "deps": ["MO-marketing-audit"], "effort": 3, "value": 88, "workstream": "MARKETING_OS_INTEGRATION", "source": "agent", "priority": 88, "blocks": ["MO-copy-grader"], "status": "pending", "notes": "Tactical hooks para tribus (curiosity, contrarian, story, pattern interrupt, etc.)"},
      {"id": "MO-copy-grader", "title": "Crear lib/copy_grader.ts — Copy Grader (calidad de contenido)", "deps": ["MO-hooks-engine"], "effort": 2, "value": 87, "workstream": "MARKETING_OS_INTEGRATION", "source": "agent", "priority": 87, "blocks": ["MO-launch-playbook"], "status": "pending", "notes": "Evalúa claridad, persuasión, alineación brand, NetBenefit score (no solo vanity metrics)"},
      {"id": "MO-ad-diagnosis", "title": "Crear lib/ad_diagnosis.ts — Diagnóstico de anuncios (qué falla)", "deps": ["MO-copy-grader"], "effort": 2, "value": 85, "workstream": "MARKETING_OS_INTEGRATION", "source": "agent", "priority": 85, "blocks": [], "status": "pending", "notes": "Análisis de anuncios existentes: hook rate, CTR, conversion, alineación NetBenefit"},
      {"id": "MO-launch-playbook", "title": "Crear lib/launch_playbook.ts — Playbook de lanzamiento (secuencia coordinada)", "deps": ["MO-copy-grader"], "effort": 3, "value": 89, "workstream": "MARKETING_OS_INTEGRATION", "source": "agent", "priority": 89, "blocks": [], "status": "pending", "notes": "Secuencia: pre-launch (expectativa) → launch (impacto) → post-launch (sostenimiento). Compatible con Encuentro Tribal Mayor"}
    ],
    "TRIPARTITE_INTEGRATION": [
      {"id": "TRI-001", "title": "Firmar memorando tripartito + constituir equipo núcleo (3 personas, 1 por proyecto)", "deps": [], "effort": 1, "value": 95, "workstream": "TRIPARTITE_INTEGRATION", "source": "agent", "priority": 95, "blocks": ["TRI-002", "TRI-010"], "status": "pending", "notes": "Documento MEMORANDUM_TRIPARTITA.md firmado por 3 líderes. Ver COLABORACION_TRIPARTITA §14"},
      {"id": "TRI-002", "title": "Crear monorepo tripartite-core + configurar pnpm workspaces + CI/CD", "deps": ["TRI-001"], "effort": 1, "value": 90, "workstream": "TRIPARTITE_INTEGRATION", "source": "agent", "priority": 90, "blocks": ["TRI-003", "TRI-004"], "status": "pending", "notes": "Estructura: apps/{hscsg,gaia,ecoldea} + packages/{core,vasos,priceParity,identity}. GitHub org: tripartite-core"},
      {"id": "TRI-003", "title": "Implementar packages/identity/identity_tripartite.ts (DID:hsccsg + Pasaporte Gaia + Ed25519 puente)", "deps": ["TRI-002"], "effort": 2, "value": 92, "workstream": "TRIPARTITE_INTEGRATION", "source": "agent", "priority": 92, "blocks": ["TRI-005", "TRI-006"], "status": "pending", "notes": "Mapeo: DID:hsccsg ↔ Pasaporte Gaia (VC W3C) ↔ Ed25519 nodo. Bridge con verificación cruzada"},
      {"id": "TRI-004", "title": "Implementar packages/priceParity/index.ts — Oracle multi-oracle 2/3 consenso", "deps": ["TRI-002"], "effort": 3, "value": 91, "workstream": "TRIPARTITE_INTEGRATION", "source": "agent", "priority": 91, "blocks": ["TRI-006", "TRI-008"], "status": "pending", "notes": "Oracles: Chainlink + Pyth + custom HSCSG. Consenso 2/3. Fallback modo postmonetario si oracle falla. 1 TQ=1kWh invariante"},
      {"id": "TRI-005", "title": "Implementar packages/vasos/sync_protocol.ts + 3 adaptadores (HSCSG, Gaia, Ecoaldea)", "deps": ["TRI-003"], "effort": 2, "value": 90, "workstream": "TRIPARTITE_INTEGRATION", "source": "agent", "priority": 90, "blocks": ["TRI-006"], "status": "pending", "notes": "10 Vasos Comunicantes: gov-sync, trust-bridge, infra-connect, intel-match, app-federate, eco-sync, impact-bridge, ritual-sync, capital-flow, sabiduria-synthesis"},
      {"id": "TRI-006", "title": "Desplegar piloto nodo único (1 Ecoaldea + 1 Tribu HSCSG + 1 Hub Gaia sincronizados)", "deps": ["TRI-003", "TRI-004", "TRI-005"], "effort": 4, "value": 95, "workstream": "TRIPARTITE_INTEGRATION", "source": "agent", "priority": 95, "blocks": ["TRI-007", "TRI-009"], "status": "pending", "notes": "Piloto end-to-end: trueque TQ ↔ ZNU ↔ CoRe, identidad DID, sync Vasos, gobernanza CEL. Métricas baseline $10k valor circular, 20 miembros"},
      {"id": "TRI-007", "title": "Implementar packages/governance/governance_tripartite.ts (CEL tripartito 3 scopes)", "deps": ["TRI-006"], "effort": 2, "value": 88, "workstream": "TRIPARTITE_INTEGRATION", "source": "agent", "priority": 88, "blocks": ["TRI-009"], "status": "pending", "notes": "CEL con 3 scopes: hscsg_scope, gaia_scope, ecoldea_scope. Triple veto: MJ Gate + Commonomics + FRNE"},
      {"id": "TRI-008", "title": "Implementar packages/value/value_tripartite.ts (TQ↔ZNU↔CoRe↔USD + reglas flujo)", "deps": ["TRI-004"], "effort": 2, "value": 87, "workstream": "TRIPARTITE_INTEGRATION", "source": "agent", "priority": 87, "blocks": ["TRI-009"], "status": "pending", "notes": "4 unidades: TQ (1=kWh), ZNU (demurrage), CoRe (5 niveles), USD (oracle). Reglas: 50% nodos + 30% fondo tierra + 10% educación + 5% infra + 5% reserva"},
      {"id": "TRI-009", "title": "Implementar packages/certification/certification_tripartite.ts (4 niveles unificados)", "deps": ["TRI-006", "TRI-007", "TRI-008"], "effort": 1, "value": 85, "workstream": "TRIPARTITE_INTEGRATION", "source": "agent", "priority": 85, "blocks": ["TRI-010"], "status": "pending", "notes": "Niveles: Self / Community / Ambassador / Third-Party. Mapeo: HSCSG CDS ↔ Gaia Certificación ↔ Ecoaldea Padrino/Mentor"},
      {"id": "TRI-010", "title": "Documentar TRIPARTITE_CONSTITUTION.md v0.1 (carta fundacional)", "deps": ["TRI-001", "TRI-009"], "effort": 1, "value": 92, "workstream": "TRIPARTITE_INTEGRATION", "source": "agent", "priority": 92, "blocks": [], "status": "pending", "notes": "Documento constitucional: Cuaternidad Soberana + 5 Planos + Leyes MJ + Commonomics + FRNE. Firmado por 3 proyectos. Próxima v0.2 → v1.0 con BioRegión piloto"}
    ],
    "GAIA_DEEP_INTEGRATION": [
      {"id": "GDI-001", "title": "Documentar 4 nuevas fuentes en BRIEFS_INDEX + actualizar BRIEF_EXHAUSTIVO v1.8", "deps": [], "effort": 1, "value": 90, "workstream": "GAIA_DEEP_INTEGRATION", "source": "agent", "priority": 90, "blocks": ["GDI-002", "GDI-003", "GDI-004", "GDI-005"], "status": "pending", "notes": "Ya completado en commit 2026-09-05: 5 backups + 2 integraciones + BRIEFS_INDEX v1.4 + BRIEF_EXHAUSTIVO v1.8"},
      {"id": "GDI-002", "title": "Implementar lib/tokens.ts con Gaia Token types (CONTRIBUTION, IMPACT, UTILITY, GOVERNANCE)", "deps": ["GDI-001"], "effort": 2, "value": 88, "workstream": "GAIA_DEEP_INTEGRATION", "source": "agent", "priority": 88, "blocks": ["GDI-003"], "status": "pending", "notes": "Mapeo 1:1 con CoRe Tokenomics: 4 tipos + Gaia Tokens multi-tipo (GAIAUSD, TERRA, GAIAWTS, KAKAO, SPIRALS, KHRONOS, HREGEN, etc.)"},
      {"id": "GDI-003", "title": "Integrar Mutual Credit con ZNU con demurrage", "deps": ["GDI-002"], "effort": 2, "value": 87, "workstream": "GAIA_DEEP_INTEGRATION", "source": "agent", "priority": 87, "blocks": ["GDI-004"], "status": "pending", "notes": "Solidarity Credit Bank + Mutual Funds Savings → extender Fondo Solarpunk con mutual credit"},
      {"id": "GDI-004", "title": "Adoptar 77.7% threshold para cambios constitucionales en HSCSG", "deps": ["GDI-001"], "effort": 1, "value": 85, "workstream": "GAIA_DEEP_INTEGRATION", "source": "agent", "priority": 85, "blocks": ["GDI-005"], "status": "pending", "notes": "Para modificar Cuaternidad Soberana, Pilares Base Material, Planos, Leyes MJ — adoptar 77.7% threshold de Gaia Constitution"},
      {"id": "GDI-005", "title": "Implementar sistema de flags (10y/5o/1r) en boundaries.ts", "deps": ["GDI-004"], "effort": 2, "value": 84, "workstream": "GAIA_DEEP_INTEGRATION", "source": "agent", "priority": 84, "blocks": ["GDI-006"], "status": "pending", "notes": "Yellow flag = advertencia menor, Orange flag = falta significativa, Red flag = violation seria. 10/5/1 thresholds"},
      {"id": "GDI-006", "title": "Crear skill hscsg-nfc-wallet (basado en Ecoaldeas Raíces pattern)", "deps": ["GDI-001"], "effort": 2, "value": 86, "workstream": "GAIA_DEEP_INTEGRATION", "source": "agent", "priority": 86, "blocks": ["GDI-007"], "status": "pending", "notes": "Ya creado: skills/hscsg-nfc-wallet/SKILL.md (18KB). ESP32 + PN532 + 4 modos (Keypad/Web/Touch/Community), NTAG424 DNA"},
      {"id": "GDI-007", "title": "Implementar mTLS específico + Gossip protocol en federation.ts", "deps": ["GDI-002"], "effort": 3, "value": 83, "workstream": "GAIA_DEEP_INTEGRATION", "source": "agent", "priority": 83, "blocks": [], "status": "pending", "notes": "mTLS mutuo + Gossip protocol para BioRegions. Compatible con Ecoaldeas (mTLS, Gossip, hash chain, reconciliación off-grid)"},
      {"id": "GDI-008", "title": "Implementar 3 esferas de gobernanza mapeadas a Cuaternidad + 5 Planos", "deps": ["GDI-004"], "effort": 2, "value": 82, "workstream": "GAIA_DEEP_INTEGRATION", "source": "agent", "priority": 82, "blocks": [], "status": "pending", "notes": "Stewardship/Operative/Community Council → Cuaternidad Soberana + 5 Planos + Sorteo + MJ Gate"}
    ],
    "NODOS_CUIDADO": [
      {"id": "NC-001", "title": "Documentar 16 isomorfismos en BRIEFS_INDEX + actualizar BRIEF_EXHAUSTIVO v1.8", "deps": [], "effort": 1, "value": 88, "workstream": "NODOS_CUIDADO", "source": "agent", "priority": 88, "blocks": ["NC-002", "NC-003", "NC-004", "NC-005"], "status": "pending", "notes": "Ya completado en commit 2026-09-05: backup + integración + BRIEFS_INDEX v1.4 + BRIEF_EXHAUSTIVO v1.8"},
      {"id": "NC-002", "title": "Implementar state machine de cuidado (8 estados: ACOMPAÑAR→CONTINUAR)", "deps": ["NC-001"], "effort": 3, "value": 86, "workstream": "NODOS_CUIDADO", "source": "agent", "priority": 86, "blocks": ["NC-003"], "status": "pending", "notes": "src/core/state/care_flow.ts. Mapea Pilar 6 (Salud) + Pilar 9 (Bienestar). Compatible con RAO + MJ Gate"},
      {"id": "NC-003", "title": "Añadir 4 exclusiones CEL (vacunación, parto, certificación, internación) a boundaries.ts", "deps": ["NC-001"], "effort": 2, "value": 84, "workstream": "NODOS_CUIDADO", "source": "agent", "priority": 84, "blocks": ["NC-004"], "status": "pending", "notes": "CareBoundary type. No-Vacunación, No-Parto-Programado, No-Certificación-Nacimiento, No-Internación-Obstétrica"},
      {"id": "NC-004", "title": "Extender indicators.ts con 12 nuevos indicadores de salud", "deps": ["NC-001"], "effort": 2, "value": 82, "workstream": "NODOS_CUIDADO", "source": "agent", "priority": 82, "blocks": ["NC-005"], "status": "pending", "notes": "Captación prenatal, acceso efectivo, continuidad puerperal, derivaciones, satisfacción, equidad, costos, eventos adversos"},
      {"id": "NC-005", "title": "Añadir 5 standing roles profesionales a coworkers.ts (medicina, obstetricia, enfermería, nutrición, psicología)", "deps": ["NC-001"], "effort": 2, "value": 81, "workstream": "NODOS_CUIDADO", "source": "agent", "priority": 81, "blocks": [], "status": "pending", "notes": "Compatible con Pilar 6 (Salud) + Pilar 9 (Bienestar). Cada role con protocolos de cuidado específicos"},
      {"id": "NC-006", "title": "Crear pantalla /nodos-cuidado con modelo modular 4 niveles", "deps": ["NC-002", "NC-003", "NC-004"], "effort": 4, "value": 80, "workstream": "NODOS_CUIDADO", "source": "agent", "priority": 80, "blocks": [], "status": "pending", "notes": "CUIDADO 1000 → CUIDADO FAMILIAR → CENTRO DE DÍA → NODO INTEGRAL. UI con state machine visual"}
          ],
          "ONECOMMUNITY_INTEGRATION": [
            {"id": "OC-001", "title": "Documentar 25 isomorfismos One Community ↔ HSCSG en BRIEFS_INDEX + actualizar BRIEF_EXHAUSTIVO v1.9", "deps": [], "effort": 1, "value": 90, "workstream": "ONECOMMUNITY_INTEGRATION", "source": "agent", "priority": 90, "blocks": ["OC-002", "OC-003", "OC-004", "OC-005", "OC-006", "OC-007", "OC-008", "OC-009", "OC-010"], "status": "pending", "notes": "Ya completado en commit 2026-09-05: backup EN/ES + BRIEFS_INDEX v1.4 + fuentes_indice.json + BRIEF_EXHAUSTIVO v1.9"},
            {"id": "OC-002", "title": "Importar planos arquitectónicos 7 aldeas a VillageDesigner.tsx + lib/bioconstruction.ts", "deps": ["OC-001"], "effort": 4, "value": 88, "workstream": "ONECOMMUNITY_INTEGRATION", "source": "agent", "priority": 88, "blocks": ["OC-003"], "status": "pending", "notes": "Earthbag, Straw Bale, Cob, CEB, Shipping Container, Recycled Materials, Tree House. Planos en Superadobe, PDF, SketchUp, AutoCAD"},
            {"id": "OC-003", "title": "Integrar sistema energético off-grid a energySystem.ts + state/energy.ts", "deps": ["OC-001"], "effort": 3, "value": 87, "workstream": "ONECOMMUNITY_INTEGRATION", "source": "agent", "priority": 87, "blocks": ["OC-004"], "status": "pending", "notes": "Solar PV 150-200kW, eólica 2-3x10-20kW, microgrid AC/DC, baterías 500-1000kWh LiFePO4, hydronic heating/cooling, thermal storage 10k+ gal"},
            {"id": "OC-004", "title": "Mapear permacultura/bosques alimentarios/acuaponía a foodSystem.ts + state/foodForest.ts", "deps": ["OC-001"], "effort": 3, "value": 86, "workstream": "ONECOMMUNITY_INTEGRATION", "source": "agent", "priority": 86, "blocks": ["OC-005"], "status": "pending", "notes": "7 capas bosque alimentario, biointensivo, acuaponía tilapia+vegetales, ganadería regenerativa rotación holística, banco semillas 500+ variedades"},
            {"id": "OC-005", "title": "Adaptar currículo educación holística a educationCurriculum.ts + pantalla /educacion", "deps": ["OC-001"], "effort": 3, "value": 85, "workstream": "ONECOMMUNITY_INTEGRATION", "source": "agent", "priority": 85, "blocks": ["OC-006"], "status": "pending", "notes": "Ultimate Classroom, módulos por pilar, proyectos integrados, competencias sistémicas, evaluación por portfolio, teacher training"},
            {"id": "OC-006", "title": "Extender valueDual.ts con elementos Economy for Common Good + CaaS-BM", "deps": ["OC-001"], "effort": 2, "value": 84, "workstream": "ONECOMMUNITY_INTEGRATION", "source": "agent", "priority": 84, "blocks": ["OC-007"], "status": "pending", "notes": "Resource-based accounting, local currency/time banking, profit-sharing, open source business model, regenerative investment metrics"},
            {"id": "OC-007", "title": "Mapear gobernanza sociocracia a CDS + Círculos + MJ Gate + Sorteo", "deps": ["OC-001"], "effort": 2, "value": 83, "workstream": "ONECOMMUNITY_INTEGRATION", "source": "agent", "priority": 83, "blocks": ["OC-008"], "status": "pending", "notes": "Círculos, consentimiento, roles explícitos, rotación mandatos, resolución conflictos 4 pasos, justicia restaurativa"},
            {"id": "OC-008", "title": "Crear pantalla /onecommunity-hub con resumen navegable de 7 aldeas + DCC + 7 pilares", "deps": ["OC-002", "OC-003", "OC-004", "OC-005", "OC-006", "OC-007"], "effort": 4, "value": 82, "workstream": "ONECOMMUNITY_INTEGRATION", "source": "agent", "priority": 82, "blocks": ["OC-009"], "status": "pending", "notes": "UI interactiva: selector aldea, detalles técnicos, planos, sistemas, métricas, código abierto descargable"},
            {"id": "OC-009", "title": "Añadir One Community como fuente #29 en fuentes_indice.json + 10 briefs BF-152→BF-161", "deps": ["OC-001"], "effort": 1, "value": 81, "workstream": "ONECOMMUNITY_INTEGRATION", "source": "agent", "priority": 81, "blocks": ["OC-010"], "status": "pending", "notes": "Ya completado en commit 2026-09-05: fuente #29 añadida con 10 briefs"},
            {"id": "OC-010", "title": "Crear skill hscsg-onecommunity-integration (auto-ejecutable, asimila blueprints)", "deps": ["OC-001"], "effort": 2, "value": 80, "workstream": "ONECOMMUNITY_INTEGRATION", "source": "agent", "priority": 80, "blocks": [], "status": "pending", "notes": "Skill que detecta cambios en onecommunityglobal.org, extrae nuevos blueprints, genera diff vs HSCSG, recomienda integración"}
                      ],
                      "MK1_INTEGRATION": [
                        {"id": "MK-001", "title": "Crear src/core/state/neutro.ts — Neutro computacional (RAO + FactBand + Triaxial)", "deps": [], "effort": 2, "value": 95, "workstream": "MK1_INTEGRATION", "source": "agent", "priority": 95, "blocks": ["MK-002", "MK-003", "MK-004", "MK-005", "MK-007"], "status": "pending", "notes": "Implementación computacional del Neutro MK-1: RAO append-only + FactBand (convicción 0-100) + Verificación Triaxial (Mental/Sim/Lab)"},
                        {"id": "MK-002", "title": "Extender RAOEntry con entryType + coherenceType", "deps": ["MK-001"], "effort": 1, "value": 93, "workstream": "MK1_INTEGRATION", "source": "agent", "priority": 93, "blocks": ["MK-004"], "status": "pending", "notes": "entryType: 'pattern' | 'intent' | 'identity'; coherenceType: 'structural' | 'functional' | 'phenomenological'"},
                        {"id": "MK-003", "title": "Crear src/core/lib/fibonacciHeuristic.ts — Firma homeostasis", "deps": ["MK-001"], "effort": 2, "value": 90, "workstream": "MK1_INTEGRATION", "source": "agent", "priority": 90, "blocks": ["MK-007"], "status": "pending", "notes": "Detectar ratios áureos (1.618) en αʰ(t) growth como firma de homeostasis eficiente — heurística Fibonacci MK-1"},
                        {"id": "MK-004", "title": "Crear src/core/lib/meditationEngine.ts — 5 meditaciones → 5 ejes", "deps": ["MK-001"], "effort": 3, "value": 92, "workstream": "MK1_INTEGRATION", "source": "agent", "priority": 92, "blocks": ["MK-005"], "status": "pending", "notes": "Corporal→Mental base, Introspectiva→Mental deep, Activa→Laboratorio, Elevación→Simulador, Convergencia→Homeostasis (γ-CARMIS monitoring)"},
                        {"id": "MK-005", "title": "Crear src/core/lib/sensoryMarkers.ts — NFC, sonidos, rituales", "deps": ["MK-001", "MK-004"], "effort": 2, "value": 88, "workstream": "MK1_INTEGRATION", "source": "agent", "priority": 88, "blocks": ["MK-006"], "status": "pending", "notes": "Unificar sahumerios, piedras, sonidos, terminales NFC, rituales Vaso 8 → coherenceImpact medible pre/post via FactBand"},
                        {"id": "MK-006", "title": "Crear src/core/lib/energeticFlows.ts — Flujos diarios medibles", "deps": ["MK-001", "MK-003"], "effort": 2, "value": 85, "workstream": "MK1_INTEGRATION", "source": "agent", "priority": 85, "blocks": [], "status": "pending", "notes": "Traducir flujos simbólicos (maya/num/astro) a priceParity(t), αʰ(t), nodeMode(t), κ(t) — recomendación meditación óptima por día"},
                        {"id": "MK-007", "title": "Completar /simulador — Eje Simulación Triaxial", "deps": ["MK-001", "MK-003"], "effort": 3, "value": 94, "workstream": "MK1_INTEGRATION", "source": "agent", "priority": 94, "blocks": [], "status": "pending", "notes": "Pantalla /simulador: sliders Ω, s, κ → proyección αʰ(t) + botón 'Disparar γ-CARMIS' + visualización Fibonacci homeostasis"},
                        {"id": "MK-008", "title": "Crear src/core/lib/neutro.ts — Neutro computacional (RAO + FactBand + Triaxial)", "deps": ["MK-001"], "effort": 2, "value": 95, "workstream": "MK1_INTEGRATION", "source": "agent", "priority": 95, "blocks": [], "status": "pending", "notes": "Implementación computacional del Neutro MK-1: RAO append-only + FactBand (convicción 0-100) + Verificación Triaxial (Mental/Sim/Lab) - archivo principal"},
                        {"id": "MK-009", "title": "Actualizar índices: BRIEFS_INDEX + fuentes_indice + BRIEF_EXHAUSTIVO v1.11", "deps": [], "effort": 1, "value": 87, "workstream": "MK1_INTEGRATION", "source": "agent", "priority": 87, "blocks": [], "status": "pending", "notes": "Fuente #31 MK-1, 7 briefs BF-164→BF-170, historial v1.11"},
                        {"id": "MK-010", "title": "Documento síntesis: 'MK-1 como especificación filosófica del Sistema Alráico'", "deps": ["MK-001", "MK-007"], "effort": 2, "value": 86, "workstream": "MK1_INTEGRATION", "source": "agent", "priority": 86, "blocks": [], "status": "pending", "notes": "Documento puente: MK-1 (filosofía) ↔ Sistema Alráico (epistemología) ↔ HSCSG v15 OS (implementación)"}
                      ]
                                            },
                          "BREADCHAIN_INTEGRATION": [
                            {"id": "BC-001", "title": "Extraer crowdstaking-model.ts (lógica pura)", "deps": [], "effort": 3, "value": 90, "workstream": "BREADCHAIN_INTEGRATION", "source": "agent", "priority": 90, "blocks": ["BC-011", "BC-021"], "status": "pending", "notes": "Pool → stake → yield → vote(distribute) → withdraw(principal)"},
                            {"id": "BC-002", "title": "Crear hscsg_constitution.md desde Bread Constitution", "deps": [], "effort": 2, "value": 88, "workstream": "BREADCHAIN_INTEGRATION", "source": "agent", "priority": 88, "blocks": ["BC-012"], "status": "pending", "notes": "Enriquecer hscsg_definition.md existente"},
                            {"id": "BC-003", "title": "Implementar brief-cms skill (Keystatic pattern)", "deps": [], "effort": 4, "value": 85, "workstream": "BREADCHAIN_INTEGRATION", "source": "agent", "priority": 85, "blocks": ["BC-013"], "status": "pending", "notes": "Collections, fields, validation, git-based"},
                            {"id": "BC-004", "title": "Sincronizar design-tokens → MATEMAS_GRIMORIO + DESIGN.md", "deps": [], "effort": 3, "value": 87, "workstream": "BREADCHAIN_INTEGRATION", "source": "agent", "priority": 87, "blocks": ["BC-014"], "status": "pending", "notes": "Skill design-md, Pogaca fonts → Matema Typography"},
                            {"id": "BC-005", "title": "Mapear Operational Annex → Vasos Comunicantes spec", "deps": [], "effort": 2, "value": 82, "workstream": "BREADCHAIN_INTEGRATION", "source": "agent", "priority": 82, "blocks": ["BC-015"], "status": "pending", "notes": "6 vasos existentes"},
                            {"id": "BC-006", "title": "Alinear ZNU tokenomics con BREAD (demurrage, no especulativo)", "deps": [], "effort": 2, "value": 80, "workstream": "BREADCHAIN_INTEGRATION", "source": "agent", "priority": 80, "blocks": ["BC-016"], "status": "pending", "notes": "ZNU implementado"},
                            {"id": "BC-007", "title": "Integrar 100-point voting → Kappa Governance (VIA-25)", "deps": [], "effort": 3, "value": 92, "workstream": "BREADCHAIN_INTEGRATION", "source": "agent", "priority": 92, "blocks": ["BC-017"], "status": "pending", "notes": "kappaGovernance.ts en skill"},
                            {"id": "BC-008", "title": "Formalizar Angel Minters → Semilla Base Material (Pilar 1)", "deps": [], "effort": 2, "value": 78, "workstream": "BREADCHAIN_INTEGRATION", "source": "agent", "priority": 78, "blocks": ["BC-018"], "status": "pending", "notes": "Base Material 13 Pilares"},
                            {"id": "BC-009", "title": "Mapear Stacks → Estrategias Base Material (13 Pilares × 7 Capas)", "deps": [], "effort": 3, "value": 85, "workstream": "BREADCHAIN_INTEGRATION", "source": "agent", "priority": 85, "blocks": ["BC-019"], "status": "pending", "notes": "Soberanía spec"},
                            {"id": "BC-010", "title": "Documentar isomorfismos en BRIEF_EXHAUSTIVO + BRIEFS_INDEX", "deps": [], "effort": 1, "value": 75, "workstream": "BREADCHAIN_INTEGRATION", "source": "agent", "priority": 75, "blocks": ["BC-020"], "status": "pending", "notes": "Docs existentes"},
                            {"id": "BC-011", "title": "Extraer crowdstaking-protocol.ts (lógica pura)", "deps": ["BC-001"], "effort": 3, "value": 90, "workstream": "BREADCHAIN_INTEGRATION", "source": "agent", "priority": 90, "blocks": ["BC-021"], "status": "pending", "notes": "DistributionManager, CycleModule, VotingModule, RecipientRegistry, Strategies"},
                            {"id": "BC-012", "title": "Implementar gasless-crosschain.ts (sin Privy)", "deps": ["BC-002"], "effort": 4, "value": 88, "workstream": "BREADCHAIN_INTEGRATION", "source": "agent", "priority": 88, "blocks": ["BC-022"], "status": "pending", "notes": "Sign once, submit everywhere — soberanía computacional"},
                            {"id": "BC-013", "title": "Implementar static-instance-resolver.ts", "deps": ["BC-003"], "effort": 3, "value": 85, "workstream": "BREADCHAIN_INTEGRATION", "source": "agent", "priority": 85, "blocks": ["BC-023"], "status": "pending", "notes": "Una build, resuelve client-side"},
                            {"id": "BC-014", "title": "Crear telegram-miniapp.ts (adapter pattern)", "deps": ["BC-004"], "effort": 3, "value": 80, "workstream": "BREADCHAIN_INTEGRATION", "source": "agent", "priority": 80, "blocks": ["BC-024"], "status": "pending", "notes": "PWA/Capacitor/Tauri futuro"},
                            {"id": "BC-015", "title": "Crear deploy-wizard.cjs task en orchestrator", "deps": ["BC-005"], "effort": 2, "value": 82, "workstream": "BREADCHAIN_INTEGRATION", "source": "agent", "priority": 82, "blocks": ["BC-025"], "status": "pending", "notes": "1 comando deploya nodo completo"},
                            {"id": "BC-016", "title": "Mapear yield strategies → Base Material Pilares", "deps": ["BC-006"], "effort": 2, "value": 78, "workstream": "BREADCHAIN_INTEGRATION", "source": "agent", "priority": 78, "blocks": ["BC-026"], "status": "pending", "notes": "sDAI → Energía, SexyDai → Alimentos"},
                            {"id": "BC-017", "title": "Integrar 100-point voting → Kappa Governance (VIA-25)", "deps": ["BC-007"], "effort": 3, "value": 92, "workstream": "BREADCHAIN_INTEGRATION", "source": "agent", "priority": 92, "blocks": ["BC-027"], "status": "pending", "notes": "100 pts = attention budget κ"},
                            {"id": "BC-018", "title": "Mapear RecipientRegistry → Vaso trust:bridge", "deps": ["BC-008"], "effort": 2, "value": 80, "workstream": "BREADCHAIN_INTEGRATION", "source": "agent", "priority": 80, "blocks": ["BC-028"], "status": "pending", "notes": "Democratic propose/approve/deny"},
                            {"id": "BC-019", "title": "Implementar NodoFederadoId (familyId equivalent)", "deps": ["BC-009"], "effort": 3, "value": 85, "workstream": "BREADCHAIN_INTEGRATION", "source": "agent", "priority": 85, "blocks": ["BC-029"], "status": "pending", "notes": "Vaso infra:connect + governance:sync"},
                            {"id": "BC-020", "title": "Documentar isomorfismos crowdstake en BRIEF_EXHAUSTIVO", "deps": ["BC-010"], "effort": 1, "value": 75, "workstream": "BREADCHAIN_INTEGRATION", "source": "agent", "priority": 75, "blocks": ["BC-030"], "status": "pending", "notes": "Docs existentes"},
                            {"id": "BC-021", "title": "Extraer cova-modules.ts (4 módulos COVA)", "deps": ["BC-011"], "effort": 4, "value": 90, "workstream": "BREADCHAIN_INTEGRATION", "source": "agent", "priority": 90, "blocks": ["BC-031"], "status": "pending", "notes": "cUSD, project registry, 100pt voting, top-N strategy, membership power, 4-fund withdrawals"},
                            {"id": "BC-022", "title": "Implementar coop-app-pattern.ts", "deps": ["BC-012"], "effort": 3, "value": 85, "workstream": "BREADCHAIN_INTEGRATION", "source": "agent", "priority": 85, "blocks": ["BC-032"], "status": "pending", "notes": "Read-only public + sovereign write"},
                            {"id": "BC-023", "title": "Crear cooperative-theme.md (Matema generativo)", "deps": ["BC-013"], "effort": 2, "value": 82, "workstream": "BREADCHAIN_INTEGRATION", "source": "agent", "priority": 82, "blocks": ["BC-033"], "status": "pending", "notes": "Token repointing → harmonic palette"},
                            {"id": "BC-024", "title": "Crear coop-runbook.cjs task en orchestrator", "deps": ["BC-014"], "effort": 2, "value": 80, "workstream": "BREADCHAIN_INTEGRATION", "source": "agent", "priority": 80, "blocks": ["BC-034"], "status": "pending", "notes": "Procedural knowledge executable"},
                            {"id": "BC-025", "title": "Mapear dual budget → Proyectos Nodo", "deps": ["BC-015"], "effort": 2, "value": 78, "workstream": "BREADCHAIN_INTEGRATION", "source": "agent", "priority": 78, "blocks": ["BC-035"], "status": "pending", "notes": "Full (Pilar 13) + Min-viable (Pilar 1)"},
                            {"id": "BC-026", "title": "Integrar 100pt voting → Kappa Governance (VIA-25)", "deps": ["BC-016"], "effort": 3, "value": 92, "workstream": "BREADCHAIN_INTEGRATION", "source": "agent", "priority": 92, "blocks": ["BC-036"], "status": "pending", "notes": "kappaGovernance.ts"},
                            {"id": "BC-027", "title": "Mapear 4-fund withdrawals → Vaso trust:bridge", "deps": ["BC-017"], "effort": 2, "value": 80, "workstream": "BREADCHAIN_INTEGRATION", "source": "agent", "priority": 80, "blocks": ["BC-037"], "status": "pending", "notes": "Reserve, Education, Solidarity, Production"},
                            {"id": "BC-028", "title": "Formalizar Membership Power → Identidad Soberana", "deps": ["BC-018"], "effort": 2, "value": 78, "workstream": "BREADCHAIN_INTEGRATION", "source": "agent", "priority": 78, "blocks": ["BC-038"], "status": "pending", "notes": "Capa 1 Núcleo/Contenedor"},
                            {"id": "BC-029", "title": "Mapear Shared Visions → Base Material Semilla (Pilar 1)", "deps": ["BC-019"], "effort": 2, "value": 75, "workstream": "BREADCHAIN_INTEGRATION", "source": "agent", "priority": 75, "blocks": ["BC-039"], "status": "pending", "notes": "EU funding = capital semilla"},
                            {"id": "BC-030", "title": "Documentar isomorfismos COVA en BRIEF_EXHAUSTIVO", "deps": ["BC-020"], "effort": 1, "value": 70, "workstream": "BREADCHAIN_INTEGRATION", "source": "agent", "priority": 70, "blocks": ["BC-040"], "status": "pending", "notes": "Docs existentes"},
                            {"id": "BC-031", "title": "Extraer coopstable-protocol.ts (4 interfaces core)", "deps": ["BC-021"], "effort": 3, "value": 88, "workstream": "BREADCHAIN_INTEGRATION", "source": "agent", "priority": 88, "blocks": ["BC-041"], "status": "pending", "notes": "cUSDManager, YieldController, AdapterRegistry, YieldDistributor"},
                            {"id": "BC-032", "title": "Implementar yield-adapter-pattern.ts (13 Pilares)", "deps": ["BC-022"], "effort": 4, "value": 90, "workstream": "BREADCHAIN_INTEGRATION", "source": "agent", "priority": 90, "blocks": ["BC-042"], "status": "pending", "notes": "LendingAdapter trait → BaseMaterialAdapter per pilar"},
                            {"id": "BC-033", "title": "Crear coopstable-deploy-automation.cjs (orchestrator)", "deps": ["BC-023"], "effort": 3, "value": 85, "workstream": "BREADCHAIN_INTEGRATION", "source": "agent", "priority": 85, "blocks": ["BC-043"], "status": "pending", "notes": "Replicar Makefile 50+ targets → tasks"},
                            {"id": "BC-034", "title": "Implementar bindings-generator.ts (brief schema → TS)", "deps": ["BC-024"], "effort": 3, "value": 82, "workstream": "BREADCHAIN_INTEGRATION", "source": "agent", "priority": 82, "blocks": ["BC-044"], "status": "pending", "notes": "Skill design-md, brief-detector integration"},
                            {"id": "BC-035", "title": "Mapear Blend Capital → Pilar 2/3 Strategies", "deps": ["BC-025"], "effort": 2, "value": 78, "workstream": "BREADCHAIN_INTEGRATION", "source": "agent", "priority": 78, "blocks": ["BC-045"], "status": "pending", "notes": "Energía solar / Agricultura regenerativa"},
                            {"id": "BC-036", "title": "Alinear Epoch Distributor → Sistema Alráico Loops", "deps": ["BC-026"], "effort": 2, "value": 80, "workstream": "BREADCHAIN_INTEGRATION", "source": "agent", "priority": 80, "blocks": ["BC-046"], "status": "pending", "notes": "Epochs 24h = γ-CARMIS cycles"},
                            {"id": "BC-037", "title": "Integrar Member Management → Identidad Soberana", "deps": ["BC-027"], "effort": 2, "value": 78, "workstream": "BREADCHAIN_INTEGRATION", "source": "agent", "priority": 78, "blocks": ["BC-047"], "status": "pending", "notes": "Capa 1, equal distribution = 1p1v"},
                            {"id": "BC-038", "title": "Parametrizar Treasury/Member Split (10/90 → config)", "deps": ["BC-028"], "effort": 1, "value": 75, "workstream": "BREADCHAIN_INTEGRATION", "source": "agent", "priority": 75, "blocks": ["BC-048"], "status": "pending", "notes": "CaaS + Autómata config"},
                            {"id": "BC-039", "title": "Replicar Makefile targets → Orchestrator Tasks", "deps": ["BC-029"], "effort": 2, "value": 72, "workstream": "BREADCHAIN_INTEGRATION", "source": "agent", "priority": 72, "blocks": ["BC-049"], "status": "pending", "notes": "Automation patterns"},
                            {"id": "BC-040", "title": "Documentar isomorfismos Coopstable en BRIEF_EXHAUSTIVO", "deps": ["BC-030"], "effort": 1, "value": 70, "workstream": "BREADCHAIN_INTEGRATION", "source": "agent", "priority": 70, "blocks": ["BC-050"], "status": "pending", "notes": "Docs existentes"},
                            {"id": "BC-041", "title": "Extraer alraic-runtime.ts (Spawner, Metrics, Context, LoopEngine)", "deps": ["BC-031"], "effort": 3, "value": 88, "workstream": "BREADCHAIN_INTEGRATION", "source": "agent", "priority": 88, "blocks": ["BC-051"], "status": "pending", "notes": "Commonware runtime → Alráico engine"},
                            {"id": "BC-042", "title": "Implementar governance-consensus.ts (view-based, threshold)", "deps": ["BC-032"], "effort": 3, "value": 90, "workstream": "BREADCHAIN_INTEGRATION", "source": "agent", "priority": 90, "blocks": ["BC-052"], "status": "pending", "notes": "Byzantine ordering → Kappa governance"},
                            {"id": "BC-043", "title": "Implementar federated-nodes.ts (Identity, Channel, Broadcaster)", "deps": ["BC-033"], "effort": 4, "value": 92, "workstream": "BREADCHAIN_INTEGRATION", "source": "agent", "priority": 92, "blocks": ["BC-053"], "status": "pending", "notes": "P2P + Broadcast → Nodos federados HSCSG"},
                            {"id": "BC-044", "title": "Implementar offline-persistence.ts (MetadataStore, backends)", "deps": ["BC-034"], "effort": 3, "value": 85, "workstream": "BREADCHAIN_INTEGRATION", "source": "agent", "priority": 85, "blocks": ["BC-054"], "status": "pending", "notes": "IndexedDB/localStorage + native (sled/rocksdb)"},
                            {"id": "BC-045", "title": "Mapear VRF → Sorteo Gobernanza + κ-seed", "deps": ["BC-035"], "effort": 2, "value": 78, "workstream": "BREADCHAIN_INTEGRATION", "source": "agent", "priority": 78, "blocks": ["BC-055"], "status": "pending", "notes": "Bias-resistant randomness"},
                            {"id": "BC-046", "title": "Mapear Bridge → Cross-Node Bridge (Vaso infra:connect)", "deps": ["BC-036"], "effort": 2, "value": 80, "workstream": "BREADCHAIN_INTEGRATION", "source": "agent", "priority": 80, "blocks": ["BC-056"], "status": "pending", "notes": "Succinct certs = light client"},
                            {"id": "BC-047", "title": "Integrar Threshold Signatures (BLS) → κ-Quorum VIA-25", "deps": ["BC-037"], "effort": 3, "value": 88, "workstream": "BREADCHAIN_INTEGRATION", "source": "agent", "priority": 88, "blocks": ["BC-057"], "status": "pending", "notes": "Commonware cryptography"},
                            {"id": "BC-048", "title": "Definir Wire Protocol (Stream) → Inter-Node Envelope", "deps": ["BC-038"], "effort": 2, "value": 75, "workstream": "BREADCHAIN_INTEGRATION", "source": "agent", "priority": 75, "blocks": ["BC-058"], "status": "pending", "notes": "Framing, multiplexing, flow control"},
                            {"id": "BC-049", "title": "Replicar Cargo Workspace → HSCSG Monorepo Structure", "deps": ["BC-039"], "effort": 2, "value": 72, "workstream": "BREADCHAIN_INTEGRATION", "source": "agent", "priority": 72, "blocks": ["BC-059"], "status": "pending", "notes": "Skills + libs + apps modulares"},
                            {"id": "BC-050", "title": "Documentar isomorfismos Commonware en BRIEF_EXHAUSTIVO", "deps": ["BC-040"], "effort": 1, "value": 70, "workstream": "BREADCHAIN_INTEGRATION", "source": "agent", "priority": 70, "blocks": ["BC-060"], "status": "pending", "notes": "Docs existentes"},
                            {"id": "BC-051", "title": "Implementar DESIGN.md spec completa (skill design-md)", "deps": ["BC-041"], "effort": 4, "value": 88, "workstream": "BREADCHAIN_INTEGRATION", "source": "agent", "priority": 88, "blocks": ["BC-061"], "status": "pending", "notes": "Foundations, shared components, golden rules"},
                            {"id": "BC-052", "title": "Crear 6 vaso-*.md standards", "deps": ["BC-042"], "effort": 3, "value": 85, "workstream": "BREADCHAIN_INTEGRATION", "source": "agent", "priority": 85, "blocks": ["BC-062"], "status": "pending", "notes": "governance, trust, infra, intel, app, eco"},
                            {"id": "BC-053", "title": "Implementar MatemaRegistry (generative components)", "deps": ["BC-043"], "effort": 4, "value": 90, "workstream": "BREADCHAIN_INTEGRATION", "source": "agent", "priority": 90, "blocks": ["BC-063"], "status": "pending", "notes": "Component keys, variants, generators"},
                            {"id": "BC-054", "title": "Documentar design-ai-workflow skill", "deps": ["BC-044"], "effort": 2, "value": 80, "workstream": "BREADCHAIN_INTEGRATION", "source": "agent", "priority": 80, "blocks": ["BC-064"], "status": "pending", "notes": "Hermes Agent + p5js/manim/excalidraw"},
                            {"id": "BC-055", "title": "Implementar generative token algorithm (harmonic palette)", "deps": ["BC-045"], "effort": 3, "value": 85, "workstream": "BREADCHAIN_INTEGRATION", "source": "agent", "priority": 85, "blocks": ["BC-065"], "status": "pending", "notes": "Seed = identity hash → palette"},
                            {"id": "BC-056", "title": "Implementar generative iconography (p5js/manim)", "deps": ["BC-046"], "effort": 3, "value": 82, "workstream": "BREADCHAIN_INTEGRATION", "source": "agent", "priority": 82, "blocks": ["BC-066"], "status": "pending", "notes": "Zero external deps"},
                            {"id": "BC-057", "title": "Alinear Golden Rules → HSCSG Principles", "deps": ["BC-047"], "effort": 1, "value": 75, "workstream": "BREADCHAIN_INTEGRATION", "source": "agent", "priority": 75, "blocks": ["BC-067"], "status": "pending", "notes": "Principios HSCSG existentes"},
                            {"id": "BC-058", "title": "Migrar Purple Overlay → Matema Temático (ourcoop)", "deps": ["BC-048"], "effort": 2, "value": 80, "workstream": "BREADCHAIN_INTEGRATION", "source": "agent", "priority": 80, "blocks": ["BC-068"], "status": "pending", "notes": "Hardcoded → generative"},
                            {"id": "BC-059", "title": "Integrar brief-detector → design gaps", "deps": ["BC-049"], "effort": 2, "value": 78, "workstream": "BREADCHAIN_INTEGRATION", "source": "agent", "priority": 78, "blocks": ["BC-069"], "status": "pending", "notes": "brief-detector-recommender skill"},
                            {"id": "BC-060", "title": "Documentar isomorfismos Design System en BRIEF_EXHAUSTIVO", "deps": ["BC-050"], "effort": 1, "value": 70, "workstream": "BREADCHAIN_INTEGRATION", "source": "agent", "priority": 70, "blocks": ["BC-070"], "status": "pending", "notes": "Docs existentes"},
                            {"id": "BC-061", "title": "Extraer sovereign-wrapper.ts (staticcall safety)", "deps": ["BC-051"], "effort": 3, "value": 88, "workstream": "BREADCHAIN_INTEGRATION", "source": "agent", "priority": 88, "blocks": ["BC-071"], "status": "pending", "notes": "Capa 1 read-only default, write requiere auth"},
                            {"id": "BC-062", "title": "Implementar bls-threshold.ts (κ-governance)", "deps": ["BC-052"], "effort": 3, "value": 90, "workstream": "BREADCHAIN_INTEGRATION", "source": "agent", "priority": 90, "blocks": ["BC-072"], "status": "pending", "notes": "Threshold sigs = κ-quorum VIA-25"},
                            {"id": "BC-063", "title": "Implementar avs-service-pattern.ts (Autómata service)", "deps": ["BC-053"], "effort": 3, "value": 85, "workstream": "BREADCHAIN_INTEGRATION", "source": "agent", "priority": 85, "blocks": ["BC-073"], "status": "pending", "notes": "Initialize/process/state minimal service"},
                            {"id": "BC-064", "title": "Crear avs-deploy-automation.cjs (orchestrator tasks)", "deps": ["BC-054"], "effort": 2, "value": 80, "workstream": "BREADCHAIN_INTEGRATION", "source": "agent", "priority": 80, "blocks": ["BC-074"], "status": "pending", "notes": "Forge scripts → orchestrator"},
                            {"id": "BC-065", "title": "Mapear EigenLayer Restaking → CaaS/ZNU Restaking", "deps": ["BC-055"], "effort": 3, "value": 85, "workstream": "BREADCHAIN_INTEGRATION", "source": "agent", "priority": 85, "blocks": ["BC-075"], "status": "pending", "notes": "Stake = contribución AUT, reward = yield, slash = Ley I"},
                            {"id": "BC-066", "title": "Integrar Operator Registry → Identidad Soberana", "deps": ["BC-056"], "effort": 2, "value": 78, "workstream": "BREADCHAIN_INTEGRATION", "source": "agent", "priority": 78, "blocks": ["BC-076"], "status": "pending", "notes": "Capa 1 registry"},
                            {"id": "BC-067", "title": "Implementar Slash Conditions → Ley I Violations", "deps": ["BC-057"], "effort": 2, "value": 80, "workstream": "BREADCHAIN_INTEGRATION", "source": "agent", "priority": 80, "blocks": ["BC-077"], "status": "pending", "notes": "Base material damage, lucidez violation, unauthorized write"},
                            {"id": "BC-068", "title": "Diseñar Upgrade Authority → κ-Governance Proxy", "deps": ["BC-058"], "effort": 2, "value": 78, "workstream": "BREADCHAIN_INTEGRATION", "source": "agent", "priority": 78, "blocks": ["BC-078"], "status": "pending", "notes": "OpenZeppelin upgradeable → module proxy"},
                            {"id": "BC-069", "title": "Mapear Commonware Primitives → HSCSG Core Libs", "deps": ["BC-059"], "effort": 2, "value": 75, "workstream": "BREADCHAIN_INTEGRATION", "source": "agent", "priority": 75, "blocks": ["BC-079"], "status": "pending", "notes": "Runtime→AlraicRuntime, Consensus→GovConsensus, etc."},
                            {"id": "BC-070", "title": "Documentar isomorfismos Commonware-restaking en BRIEF_EXHAUSTIVO", "deps": ["BC-060"], "effort": 1, "value": 70, "workstream": "BREADCHAIN_INTEGRATION", "source": "agent", "priority": 70, "blocks": ["BC-080"], "status": "pending", "notes": "Docs existentes"},
                            {"id": "BC-071", "title": "Extraer bridge-pattern.ts → vaso infra:connect", "deps": ["BC-061"], "effort": 2, "value": 75, "workstream": "BREADCHAIN_INTEGRATION", "source": "agent", "priority": 75, "blocks": [], "status": "pending", "notes": "Legacy bridge pattern"},
                            {"id": "BC-072", "title": "Extraer yield-disburser.ts → autómata distribution", "deps": ["BC-062"], "effort": 2, "value": 78, "workstream": "BREADCHAIN_INTEGRATION", "source": "agent", "priority": 78, "blocks": [], "status": "pending", "notes": "Yield disbursement pattern"},
                            {"id": "BC-073", "title": "Extraer deployment-manifest.ts → orchestrator", "deps": ["BC-063"], "effort": 1, "value": 72, "workstream": "BREADCHAIN_INTEGRATION", "source": "agent", "priority": 72, "blocks": [], "status": "pending", "notes": "Deployment tracking JSON"},
                            {"id": "BC-074", "title": "Extraer legacy-evolution-mapping.ts", "deps": ["BC-064"], "effort": 2, "value": 70, "workstream": "BREADCHAIN_INTEGRATION", "source": "agent", "priority": 70, "blocks": [], "status": "pending", "notes": "Vite→Next.js, Hardhat→Foundry, MetaMask→Privy, etc."},
                            {"id": "BC-075", "title": "Extraer archaeology-patterns.ts (para asimilación futura)", "deps": ["BC-065"], "effort": 2, "value": 68, "workstream": "BREADCHAIN_INTEGRATION", "source": "agent", "priority": 68, "blocks": [], "status": "pending", "notes": "Legacy detector patterns para repos futuros"}
                          ],
                          "MK1_INTEGRATION": [
  const taskRegistry = {};
  Object.values(baseTasks).forEach(arr => arr.forEach(t => taskRegistry[t.id] = t));

  return {
    cycle: 1,
    version: "0.2.0",
    taskRegistry,
    currentWorkstream: "P0_SPECS",
    currentTask: null,
    completedTasks: [],
    userPriorities: [],
    sessionLog: []
  };
}

function getAllTasks(state) {
  return Object.values(state.taskRegistry);
}

function getTask(state, id) {
  return state.taskRegistry[id];
}

function getAvailableTasks(state) {
  return getAllTasks(state).filter(t =>
    t.status === 'pending' &&
    (t.dependencies || []).every(depId => getTask(state, depId)?.status === 'done')
  );
}

function calculateScore(task, state) {
  const unblocks = (task.blocks || []).filter(b => getTask(state, b)?.status === 'pending').length;
  return (task.value * 0.5) + ((6 - task.effort) * 10 * 0.3) + (unblocks * 15 * 0.2);
}

function sortByPriority(tasks, state) {
  return tasks.map(t => ({ ...t, score: calculateScore(t, state) }))
    .sort((a, b) => b.score - a.score);
}

// ============ COMMANDS ============

function cmdStatus(state) {
  const available = getAvailableTasks(state);
  const sorted = sortByPriority(available, state);
  const completed = getAllTasks(state).filter(t => t.status === 'done').length;
  const total = Object.keys(state.taskRegistry).length;

  console.log('\n╔═══════════════════════════════════════════════════════════════════╗');
  console.log(`║  HSCSG NEXT STEPS ORCHESTRATOR — Ciclo ${state.cycle}                          ║`);
  console.log(`║  Estado: ${completed}/${total} tareas completadas | Workstream: ${state.currentWorkstream}    ║`);
  console.log('╠═══════════════════════════════════════════════════════════════════╣');
  console.log('║  PRÓXIMAS ACCIONES RECOMENDADAS (orden topológico + score):      ║');
  console.log('║                                                                  ║');

  sorted.slice(0, 8).forEach((t, i) => {
    const depCount = (t.dependencies || []).length;
    const effortBar = '●'.repeat(t.effort) + '○'.repeat(5 - t.effort);
    console.log(`║  ${i+1}. [${t.id.padEnd(20)}] ${t.workstream.padEnd(12)} ${effortBar} Esf:${t.effort} Val:${t.value} Dep:${depCount}  ║`);
    console.log(`║       └─> ${t.notes || t.title}                                       ║`);
  });

  const userTasks = getAllTasks(state).filter(t => t.source === 'user' && t.status === 'pending');
  if (userTasks.length > 0) {
    console.log('║                                                                  ║');
    console.log('║  TAREAS USUARIO PENDIENTES:                                      ║');
    userTasks.forEach(t => {
      console.log(`║  ${t.id}: "${t.title}"  (${t.workstream})                          ║`);
    });
  }

  console.log('║                                                                  ║');
  console.log('║  ACCIONES: [1-8] Ejecutar  |  [a] Añadir tarea  |  [r] Repriorizar║');
  console.log('║            [g] Ver grafo  |  [n] Próxima óptima |  [q] Salir     ║');
  console.log('╚═══════════════════════════════════════════════════════════════════╝\n');

  return sorted;
}

function cmdGraph(state) {
  console.log('\n📊 GRAFO DE DEPENDENCIAS (Critical Path resaltado):\n');
  console.log(`P0-netbenefit ──► P0-cds_jurados ──► P0-copiosis ──► P0-valueflows`);
  console.log(`     │                                    │`);
  console.log(`     └──────────────────► COACH-automaton ◄─┘`);
  console.log(`                                           │`);
  console.log(`MIG-P1-BranDNA ──────────────────────────►│`);
  console.log(`     │                                    │`);
  console.log(`     ├────► MIG-P2-Products ─────────────►│`);
  console.log(`     │         │                           │`);
  console.log(`     │         └────► MIG-P8-Pagos         │`);
  console.log(`     │                                     │`);
  console.log(`     └────► MIG-P3-Personas ──────────────►│`);
  console.log(`               │                           │`);
  console.log(`               └────► MIG-P11-Prospecta    │`);
  console.log(`                                           │`);
  console.log(`     MIG-P4-Plan ◄─────────────────────────┘`);
  console.log(`          │`);
  console.log(`          ├────► MIG-P7-Pauta`);
  console.log(`          │`);
  console.log(`          └────► MIG-P5-Produce ──► MIG-P9-Perfecciona`);
  console.log(`                       │`);
  console.log(`                       └────► MIG-P10-Publica`);
  console.log(`                       │`);
  console.log(`                       └────► COACH-integration (requiere BranDNA context)`);
  console.log(`                                    │`);
  console.log(`                                    ▼`);
  console.log(`                            COACH-lucidez`);
  console.log(`                                    │`);
  console.log(`GAIA-gov-sync ◄───────────────────────┘`);
  console.log(`     │`);
  console.log(`     ├────► GAIA-trust-bridge ────────►│`);
  console.log(`     │         │                        │`);
  console.log(`     │         └────► GAIA-app-federate ► GAIA-eco-sync`);
  console.log(`     │                                    │`);
  console.log(`     └────► GAIA-funding-proposal        │`);
  console.log(`                                           │`);
  console.log(`GAIA-infra-connect ──────────────────────►│`);
  console.log(`     │                                    │`);
  console.log(`     └────► GAIA-intel-match ────────────►│`);
  console.log(`                                          │`);
  console.log(`                            GAIA-marketplace-level3`);
  console.log(`                                    │`);
  console.log(`ROLES-mapping ──► ROLES-state ──► ROLES-ui`);
  console.log(`                                    │`);
  console.log(`DEPLOY-link ──► DEPLOY-verify ──► DEPLOY-auto\n`);

  console.log('🔴 Critical Path HSCSG: P0-netbenefit → P0-copiosis → COACH-automaton → COACH-integration → MIG-P5-Produce → MIG-P9/MIG-P10 (18 días mínimos)');
  console.log('🔴 Critical Path GAIA: P0-copiosis → COACH-automaton → GAIA-gov-sync → GAIA-trust-bridge → GAIA-app-federate → GAIA-eco-sync (15 días adicionales)');
  console.log('🔴 Critical Path Integrado: 18 + 15 = 33 días mínimos\n');
}

function cmdNext(state) {
  const available = getAvailableTasks(state);
  if (available.length === 0) {
    console.log('✅ No hay tareas disponibles (todas completadas o bloqueadas)');
    return;
  }
  const sorted = sortByPriority(available, state);
  const best = sorted[0];
  console.log(`\n🎯 PRÓXIMA ÓPTIMA: [${best.id}] ${best.title}`);
  console.log(`   Workstream: ${best.workstream} | Score: ${best.score.toFixed(1)} | Esfuerzo: ${best.effort}/5 | Valor: ${best.value}/100`);
  console.log(`   Desbloquea: ${(best.blocks || []).join(', ') || 'nada'}`);
  console.log(`   Dependencias: ${(best.dependencies || []).join(', ') || 'ninguna'} (${(best.dependencies || []).every(d => getTask(state, d)?.status === 'done') ? '✅ OK' : '❌ PENDIENTES'})`);
}

async function cmdAddTask(state) {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

  const ask = (q) => new Promise(resolve => rl.question(q, resolve));

  console.log('\n➕ AÑADIR TAREA PERSONALIZADA\n');

  const title = await ask('Título: ');
  if (!title.trim()) { console.log('❌ Título requerido'); rl.close(); return state; }

  const workstream = await ask('Workstream [P0_SPECS/MIGRATION/COACH/ROLES/DEPLOY/NEW]: ') || 'NEW';
  const depsInput = await ask('Dependencias (IDs separadas por coma, vacío=ninguna): ');
  const deps = depsInput.split(',').map(s => s.trim()).filter(Boolean);
  const effort = parseInt(await ask('Esfuerzo 1-5 [3]: ') || '3');
  const value = parseInt(await ask('Valor 1-100 [70]: ') || '70');
  const priority = parseInt(await ask('Prioridad 0-100 [80]: ') || '80');
  const notes = await ask('Notas: ');

  // Generate ID
  const prefix = workstream === 'NEW' ? 'U' : workstream.substring(0,3).toUpperCase();
  const existing = Object.keys(state.taskRegistry).filter(k => k.startsWith(prefix + '-')).length;
  const id = `${prefix}-${String(existing + 1).padStart(3, '0')}`;

  const newTask = {
    id, title, workstream, source: 'user', priority, effort, value,
    dependencies: deps, blocks: [], status: 'pending',
    notes, created: new Date().toISOString(), updated: new Date().toISOString()
  };

  state.taskRegistry[id] = newTask;
  state.userPriorities.unshift(id);
  state.sessionLog.push({ timestamp: new Date().toISOString(), action: 'add-task', task: id, user: 'Isaacko0' });

  saveState(state);
  console.log(`\n✅ Tarea ${id} registrada. Aparecerá en próximo menú.`);
  rl.close();
  return state;
}

async function cmdReprioritize(state) {
  const available = getAvailableTasks(state);
  const sorted = sortByPriority(available, state);

  console.log('\n🔄 REPRIORIZAR - Marca prioridad 0-100 (Enter=mantener):\n');
  sorted.slice(0, 10).forEach((t, i) => {
    console.log(`${i+1}. [${t.id}] ${t.title} (actual: ${t.priority})`);
  });

  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  const ask = (q) => new Promise(resolve => rl.question(q, resolve));

  for (let i = 0; i < Math.min(10, sorted.length); i++) {
    const input = await ask(`Prioridad para ${sorted[i].id} [${sorted[i].priority}]: `);
    if (input.trim()) {
      const newP = parseInt(input);
      if (!isNaN(newP)) {
        sorted[i].priority = newP;
        state.taskRegistry[sorted[i].id].priority = newP;
        console.log(`  → Actualizado a ${newP}`);
      }
    }
  }

  saveState(state);
  console.log('\n✅ Prioridades actualizadas.');
  rl.close();
  return state;
}

async function cmdRun(state, taskId) {
  const task = getTask(state, taskId);
  if (!task) { console.log(`❌ Tarea ${taskId} no encontrada`); return state; }
  if (task.status === 'done') { console.log(`✅ ${taskId} ya completada`); return state; }

  // Check dependencies
  const blocked = (task.dependencies || []).filter(depId => getTask(state, depId)?.status !== 'done');
  if (blocked.length > 0) {
    console.log(`❌ ${taskId} bloqueada por: ${blocked.join(', ')}`);
    return state;
  }

  task.status = 'in_progress';
  state.currentTask = taskId;
  state.currentWorkstream = task.workstream;
  state.sessionLog.push({ timestamp: new Date().toISOString(), action: 'run-start', task: taskId });
  saveState(state);

  console.log(`\n🚀 EJECUTANDO: [${taskId}] ${task.title}`);
  console.log(`   Workstream: ${task.workstream}`);
  console.log(`   Esfuerzo estimado: ${task.effort} días`);
  console.log(`   Notas: ${task.notes || '—'}`);

  // Simulate work (in real impl, this would call actual build/migration commands)
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  const ask = (q) => new Promise(resolve => rl.question(q, resolve));

  console.log('\n   Pasos sugeridos (marca cada uno):');
  const steps = [
    'Crear archivos core (.ts)',
    'Adaptar a ESM + Zustand store',
    'Crear componentes React + hooks',
    'Crear screen page + routing',
    'Verificar build (pnpm build)',
    'Test manual en navegador'
  ];

  for (const step of steps) {
    const done = await ask(`   ☐ ${step} [s/n]: `);
    if (done.toLowerCase() !== 's') {
      console.log(`   ⏸️ Pausado en: ${step}`);
      task.status = 'pending';
      saveState(state);
      rl.close();
      return state;
    }
  }

  task.status = 'done';
  task.updated = new Date().toISOString();
  state.completedTasks.push(taskId);
  state.sessionLog.push({ timestamp: new Date().toISOString(), action: 'run-complete', task: taskId, result: 'done' });
  saveState(state);

  console.log(`\n✅ ${taskId} COMPLETADA`);
  rl.close();
  return state;
}

// ============ MAIN ============

async function main() {
  const args = process.argv.slice(2);
  const command = args[0] || 'status';
  const arg = args[1];

  let state = loadState();

  switch (command) {
    case 'status':
      cmdStatus(state);
      break;
    case 'graph':
      cmdGraph(state);
      break;
    case 'next':
      cmdNext(state);
      break;
    case 'add-task':
      state = await cmdAddTask(state);
      break;
    case 'reprioritize':
      state = await cmdReprioritize(state);
      break;
    case 'run':
      if (!arg) { console.log('Uso: orchestrator run <task-id>'); process.exit(1); }
      state = await cmdRun(state, arg);
      break;
    case 'init':
      // Force re-initialize
      try {
        fs.unlinkSync(STATE_FILE);
      } catch (e) {
        // File doesn't exist, ignore
      }
      state = initializeState();
      saveState(state);
      console.log('✅ Estado reinicializado con tareas base');
      break;
    default:
      console.log(`Comando desconocido: ${command}`);
      console.log('Comandos: status, graph, next, add-task, reprioritize, run <id>, init');
      process.exit(1);
  }
}

main().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});