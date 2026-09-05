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
    ]
  };

  // Flatten all tasks
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