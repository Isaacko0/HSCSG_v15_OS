# Marketing OS (Yuzzyuk) → HSCSG v15 OS — Integración Operativa

**Fecha:** 2026-09-02  
**Fuente:** `docs/marketing_os_backup.md` (README + arquitectura skill)  
**Objetivo:** Mapear isomorfismos, decidir Take/Adapt/Discard, crear módulos vivos, definir plan de implementación

---

## 🔄 Tabla Maestra de Isomorfismos (18 conceptos × 2 sistemas)

| # | Concepto Marketing OS | Concepto HSCSG v15 OS | Tipo | Acción | Notas |
|---|------------------------|----------------------|------|--------|-------|
| 1 | Progressive Disclosure (Router ~2k tokens → módulos a demanda) | Orchestrator CLI + Lazy Loading Skills | **Take** | ✅ Directo | Patrón idéntico: router ligero, carga perezosa |
| 2 | Subagent-Native (paralelización multi-dimensional) | `delegate_task` + multi-agent workflows | **Take** | ✅ Directo | Ya implementado en Hermes |
| 3 | No Executable Code (Pure Markdown Skills) | Hermes Skills (SKILL.md + markdown) | **Take** | ✅ Directo | `hermes-agent-skill-authoring` ya lo hace |
| 4 | Honesty Spine (Scores como heurísticas, gaps explícitos) | Lucidez Audit + Brief Detector gaps | **Take** | ✅ Directo | `brief-detector-recommender` detecta gaps explícitos |
| 5 | Brand Context Required (brand-context.md obligatorio) | Perfil Tribu / Cuaternidad Soberana | **Adapt** | 🔄 Mapeado | Brand context → Perfil tribu (identidad, tierra, economía, gobernanza) |
| 6 | Artifacts > Advice (Outputs usables, no consejos) | Briefs operativos + Módulos TypeScript | **Take** | ✅ Directo | Briefs = artefactos ejecutables, no docs pasivos |
| 7 | 14 Módulos Especializados | Coworkers Standing Roles + Skills | **Adapt** | 🔄 Expandido | 14 módulos marketing → 8 roles OpenExecutive + 6 skills marketing |
| 8 | Audit Module (Score 0-100 + fixes priorizados) | Boundaries Score + CAC Calculator | **Adapt** | 🟡 Evolucionado | Score 0-100 → CAC 12 vectores + η, ξ, σᵤ |
| 9 | Hooks Engine (18 tácticas → matriz + funnel) | CoachFAB + Autómata MJ Gate | **Adapt** | 🟡 Evolucionado | 18 hooks → Leyes MJ (No harm / Earn existence / No deceive) |
| 10 | GEO Module (AI-search citability) | AEO Foundations + Agentic Search Optimizer | **Take** | ✅ Directo | GEO ≡ AEO (AI Engine Optimization) |
| 11 | Copy Module (15-20 variants + expert panel score) | CoachFAB Generation + Lucidez Scoring | **Adapt** | 🔄 Evolucionado | Variantes → generaciones; panel experto → triaxial verification |
| 12 | Paid Ads (Fatigue diagnosis → production brief) | Analytics + NetBenefit Flow | **Adapt** | 🟡 Mapeado | Fatigue diagnosis → métricas engagement; brief → NetBenefitFlow |
| 13 | Positioning/Offer Design/Pricing | Cuaternidad Soberana + ValueDual + priceParity | **Take** | ✅ Directo | Positioning = identidad; Offer = economía; Pricing = priceParity |
| 14 | Competitive Teardowns | Meta-Crisis Integration + Project Analysis | **Take** | ✅ Directo | Teardowns públicos = análisis exhaustivo OpenHaven/Weave |
| 15 | Launch Playbook (incl. Product Hunt) | BRIEF_ONBOARDING_CONSTRUCTOR + Deploy | **Adapt** | 🟡 Mapeado | Launch playbook → onboarding 4 fases + deploy Vercel |
| 16 | App Store (ASO + metadata + screenshots) | Navteka Deploy + PWA Manifest | **Adapt** | 🟡 Mapeado | ASO → PWA manifest + Vercel deployment config |
| 17 | Analytics (Honest reads + test design) | Lucidez Audit + RAO Verification | **Take** | ✅ Directo | Honest data reads = auditoría triaxial |
| 18 | Slop Patterns (AI-tell catalogue) | Lucidez Raw Blocks + Slop Detection | **Take** | ✅ Directo | .lucidez-raw blocks = detección patrones IA |

---

## ✅ DECISIONES: TAKE (8 conceptos — adopción directa)

| # | Concepto | Implementación HSCSG |
|---|----------|---------------------|
| 1 | Progressive Disclosure | Ya existe: Orchestrator CLI carga workstreams a demanda |
| 2 | Subagent-Native | Ya existe: `delegate_task` para trabajo paralelo |
| 3 | No Executable Code | Ya existe: Skills = SKILL.md + markdown puro |
| 4 | Honesty Spine | Ya existe: `brief-detector-recommender` etiqueta gaps/heurísticas |
| 6 | Artifacts > Advice | Ya existe: Briefs operativos + módulos TypeScript ejecutables |
| 10 | GEO/AEO | Ya existe: `agency-aeo-foundations-architect` + `agency-agentic-search-optimizer` skills |
| 14 | Competitive Teardowns | Ya existe: `ANALISIS_EXHAUSTIVO_OPENHAVEN_WEAVE_HSCSG_GAIA.md` |
| 17 | Analytics Honest Reads | Ya existe: Lucidez Audit triaxial + RAO verification |
| 18 | Slop Patterns | Ya existe: `.lucidez-raw` blocks + modo Lucidez toggle |

---

## 🔄 DECISIONES: ADAPT (7 conceptos — evolución/expansión)

| # | Concepto Marketing OS | Adaptación HSCSG | Detalle |
|---|------------------------|------------------|---------|
| 5 | Brand Context Required | **Perfil Tribu / Cuaternidad Soberana** | `brand-context.md` → `tribe-profile.yaml` con 4 dimensiones: Identidad (ERC-8004), Tierra (Fideicomiso), Economía (ZNU/CaaS), Gobernanza (CDS-SUI-CGC-FRS-RAO) |
| 7 | 14 Módulos Marketing | **Coworkers Marketing + Skills Especializados** | 8 roles base (CSO/CFO/CHRO/GC/COO/CMO/CPO/Board) + 6 skills marketing: audit, hooks, copy, geo, positioning, launch |
| 8 | Audit Score 0-100 | **CAC Calculator v12 + η, ξ, σᵤ** | Score simple → 12 vectores AUT + eficiencia (η), resiliencia (ξ), soberanía (σᵤ) |
| 9 | Hooks Engine (18 tácticas) | **Leyes MJ + MJ Gate** | 18 hooks → 3 Leyes MJ (No harm, Earn existence, No deceive) + veto MJ Gate en `governAction` |
| 11 | Copy Variants + Expert Panel | **CoachFAB Generation + Triaxial Verification** | 15-20 variantes → generaciones paralelas; panel experto → RAO + MJ Gate + Cross-check |
| 12 | Paid Ads Fatigue Diagnosis | **NetBenefit Flow + Engagement Metrics** | Fatigue → métricas engagement decay; production brief → NetBenefitFlow con goodType |
| 15 | Launch Playbook | **Onboarding 4 Fases + Deploy Pipeline** | Product Hunt launch → onboarding tribe + deploy Vercel auto |

---

## ❌ DECISIONES: DISCARD (3 conceptos — no aplicar)

| # | Concepto | Por qué no / Alternativa HSCSG |
|---|----------|--------------------------------|
| - | Arcads MCP para generación ads | HSCSG: **Offline-first**, no MCP externos. Generación local via skills |
| - | Plugin marketplace Claude Code | HSCSG: **Hermes Skills** (propio marketplace, `hermes skill install`) |
| - | MIT License only | HSCSG: **Apache 2.0** (compatibilidad Hylo/navteka) |

---

## 🏗️ MÓDULOS NUEVOS A CREAR EN HSCSG v15 OS

### 1. `src/core/lib/brand_context.ts` — Contexto Marca/Tribu (brand-context.md → tribe-profile)
```typescript
// Brand context obligatorio para outputs relevantes
interface TribeBrandContext {
  identity: {
    name: string;
    tagline: string;
    erc8004: ERC8004Identity; // DID, Social DNA, reputation
  };
  territory: {
    landTrust: LandTrustRecord;
    bioregion: string;
    resources: ResourceMap;
  };
  economy: {
    mode: 'postmonetary' | 'connected' | 'hybrid';
    znuConfig: ZNUConfig;
    priceParity: PriceParityOracle;
    caasMarket: CaaSMarketConfig;
  };
  governance: {
    cdsLoop: CDSLoopConfig;
    mjGate: MJGateConfig;
    rao: RAOConfig;
    boundaries: BoundariesConfig;
  };
  marketing: {
    positioning: PositioningStatement;
    offerDesign: OfferDesign;
    pricingStrategy: PricingStrategy;
    hooks: HookStrategy[]; // 18 tácticas → 3 Leyes MJ
  };
}
```

### 2. `src/core/lib/marketing_audit.ts` — Auditoría Marketing (Score 0-100 → CAC v12)
```typescript
// Extiende auditoría simple a CAC 12 vectores
interface MarketingAuditResult {
  overallScore: number; // 0-100 (legacy compatibility)
  cacVectors: CACVector[]; // 12 vectores AUT
  efficiency: number; // η
  resilience: number; // ξ
  sovereignty: number; // σᵤ
  prioritizedFixes: Fix[];
  gaps: string[]; // "what I couldn't determine" explícito
}
```

### 3. `src/core/lib/hooks_engine.ts` — Motor de Hooks (18 tácticas → Leyes MJ)
```typescript
// 18 tácticas de hooks mapeadas a 3 Leyes MJ
const HOOK_TO_MJ_LAW = {
  // Ley I: Never Harm (No dañar)
  'value-first': 'never-harm',
  'education-led': 'never-harm',
  'transparency': 'never-harm',
  'community-proof': 'never-harm',
  // Ley II: Earn Existence (Ganar existencia)
  'problem-agitation': 'earn-existence',
  'outcome-visualization': 'earn-existence',
  'mechanism-reveal': 'earn-existence',
  'urgency-scarcity': 'earn-existence',
  // Ley III: Never Deceive (No engañar)
  'specificity': 'never-deceive',
  'social-proof': 'never-deceive',
  'authority': 'never-deceive',
  'risk-reversal': 'never-deceive',
  // Meta-hooks
  'pattern-interrupt': 'cross-cutting',
  'story-arc': 'cross-cutting',
  'identity-mirror': 'cross-cutting',
  'open-loop': 'cross-cutting',
} as const;

interface HookMatrix {
  tactic: keyof typeof HOOK_TO_MJ_LAW;
  mjLaw: 'never-harm' | 'earn-existence' | 'never-deceive' | 'cross-cutting';
  score: number; // 0-100
  funnelStage: 'awareness' | 'consideration' | 'decision' | 'retention';
  artifacts: HookArtifact[];
}
```

### 4. `src/core/lib/geo_aeo.ts` — GEO/AEO Module (AI Search Citability)
```typescript
// Ya existe skill `agency-aeo-foundations-architect` + `agency-agentic-search-optimizer`
// Este módulo integra con el stack HSCSG
interface GEOAudit {
  chatgptCitability: number; // 0-100
  perplexityCitability: number;
  aiOverviewsCitability: number;
  llmTxtScore: number; // presencia llms.txt / llms-full.txt
  structuredDataScore: number;
  actionPlan: GEOAction[];
}
```

### 5. `src/core/lib/positioning_offer_pricing.ts` — Positioning + Offer + Pricing
```typescript
// Integración directa con Cuaternidad Soberana + ValueDual + priceParity
interface PositioningOfferPricing {
  positioning: {
    category: string;
    differentiation: string;
    tribeValues: string[]; // valores tribu fractal
  };
  offerDesign: {
    coreValue: string;
    bonuses: Bonus[];
    guarantee: Guarantee;
    // Modo anfibio: ZNU (postmonetario) + USD/USDC (conectado via priceParity)
  };
  pricingStrategy: {
    model: 'energy-based' | 'value-based' | 'tiered' | 'dynamic';
    tqPrice?: number; // precio en TQ (1 TQ = 1 kWh)
    usdPrice?: number; // precio en USD (modo conectado)
    priceParity: number; // oracle ratio
  };
}
```

### 6. `src/core/lib/launch_playbook.ts` — Launch Playbook (Onboarding + Deploy)
```typescript
// Onboarding 4 fases + Deploy pipeline
interface LaunchPlaybook {
  phase1: 'desempaquetado'; // Clone repo → audit dependencies
  phase2: 'limpieza'; // Remove external deps → adapt to offline-first
  phase3: 'github'; // Push to origin/master → CI/CD
  phase4: 'evolucion'; // Deploy Vercel → monitor → iterate
  productHunt: {
    enabled: boolean;
    launchDate: Date;
    assets: LaunchAsset[];
  };
  deployment: {
    platform: 'vercel';
    previewUrls: boolean;
    autoDeploy: boolean;
    envVars: EnvVar[];
  };
}
```

### 7. `src/core/skills/marketing-audit/SKILL.md` — Skill Auditoría Marketing
### 8. `src/core/skills/marketing-hooks/SKILL.md` — Skill Motor Hooks
### 9. `src/core/skills/marketing-copy/SKILL.md` — Skill Copy Generation
### 10. `src/core/skills/marketing-geo/SKILL.md` — Skill GEO/AEO
### 11. `src/core/skills/marketing-positioning/SKILL.md` — Skill Positioning
### 12. `src/core/skills/marketing-launch/SKILL.md` — Skill Launch Playbook

---

## 📦 PANTALLAS NUEVAS

| Pantalla | Ruta | Descripción |
|----------|------|-------------|
| **BrandContext** | `/brand-context` | Configurar tribe-brand-context.yaml (obligatorio) |
| **MarketingAudit** | `/marketing-audit` | Auditoría completa → CAC v12 + fixes priorizados |
| **HooksEngine** | `/hooks-engine` | Matriz 18 tácticas → Leyes MJ + funnel diagnóstico |
| **GEO/AEO** | `/geo-aeo` | Citabilidad ChatGPT/Perplexity/AI Overviews |
| **PositioningLab** | `/positioning-lab` | Positioning + Offer Design + Pricing (anfibio) |
| **LaunchPlaybook** | `/launch-playbook` | Onboarding 4 fases + Deploy pipeline |

---

## 🔗 INTEGRACIÓN CON MÓDULOS EXISTENTES

| Módulo HSCSG | Integración Marketing OS |
|--------------|-------------------------|
| `coworkers.ts` | Añadir **CMO Specialist** (Chief Marketing Officer) standing role |
| `boundaries.ts` | Añadir `marketingAudit` + `hookGeneration` boundaries |
| `valueDual.ts` | Ya implementa pricing anfibio — extender con `positioning_offer_pricing` |
| `orchestrator-next-steps.cjs` | Añadir workstream `MARKETING_OS_INTEGRATION` (6 tareas) |
| `brief-detector-recommender` | Detectar gaps: brand_context, marketing_audit, hooks_engine, geo_aeo, positioning, launch |
| `CoachFAB.tsx` | Integrar Hook Engine output + Copy variants preview |
| `LucidezToggle` | `.lucidez-raw` blocks para slop-patterns detection |

---

## 📋 PLAN DE IMPLEMENTACIÓN (Critical Path: 4 semanas)

### Semana 1: Core Marketing (Fundación)
- [ ] `brand_context.ts` + UI `/brand-context` (obligatorio para todo)
- [ ] `marketing_audit.ts` + CAC v12 integration + UI `/marketing-audit`
- [ ] `hooks_engine.ts` + 18 tactics → 3 Leyes MJ + UI `/hooks-engine`
- [ ] Store extensions + persistence
- **Entregable:** Brand context obligatorio, auditoría CAC, hooks MJ-compliant

### Semana 2: GEO + Positioning + Copy
- [ ] `geo_aeo.ts` + integración skills AEO existentes + UI `/geo-aeo`
- [ ] `positioning_offer_pricing.ts` + valueDual/priceParity + UI `/positioning-lab`
- [ ] `copy_generation.ts` → CoachFAB integration (15-20 variants + triaxial score)
- **Entregable:** GEO audit, positioning anfibio, copy generation pipeline

### Semana 3: Launch + Skills + Competitive
- [ ] `launch_playbook.ts` + onboarding integration + UI `/launch-playbook`
- [ ] 6 Skills Hermes marketing (audit, hooks, copy, geo, positioning, launch)
- [ ] Competitive teardown template → `brief-detector-recommender` integration
- **Entregable:** Launch playbook, skills deployadas, competitive analysis template

### Semana 4: Polish + Integration
- [ ] CoachFAB integration: hooks preview, copy variants, audit quick-access
- [ ] Lucidez slop-patterns detection en `.lucidez-raw` blocks
- [ ] E2E tests: brand context → audit → hooks → copy → positioning → launch
- [ ] Documentación: `marketing_os_integration.md` actualizada + briefs
- **Entregable:** Sistema completo integrado, deploy Vercel, docs actualizadas

---

## 🎯 BRIEFS OPERATIVOS A CREAR (para brief-detector-recommender)

| Brief ID | Título | Perfil Objetivo |
|----------|--------|-----------------|
| BF-116 | `BRIEF_BRAND_CONTEXT_TRIBE` | All / Onboarding |
| BF-117 | `BRIEF_MARKETING_AUDIT_CAC_V12` | Marketing/Growth |
| BF-118 | `BRIEF_HOOKS_ENGINE_MJ_LAWS` | Copy/Creative |
| BF-119 | `BRIEF_GEO_AEO_CITABILITY` | SEO/Growth |
| BF-120 | `BRIEF_POSITIONING_OFFER_PRICING_ANFIBIO` | Strategy/Product |
| BF-121 | `BRIEF_COPY_GENERATION_TRIAXIAL` | Copy/Creative |
| BF-122 | `BRIEF_LAUNCH_PLAYBOOK_ONBOARDING` | Operations/All |
| BF-123 | `BRIEF_COMPETITIVE_TEARDOWN_TEMPLATE` | Strategy/Research |
| BF-124 | `BRIEF_MARKETING_SKILLS_DEPLOYMENT` | Platform/Engineering |

---

## 🔗 VASOS COMUNICANTES ACTUALIZADOS (Marketing OS → HSCSG)

| Vaso | Marketing OS | HSCSG v15 OS | Estado |
|------|--------------|--------------|--------|
| 1 | **Gobernanza: Sync** | Brand Context → Cuaternidad Soberana | 🟡 Adaptar |
| 2 | **Confianza: Bridge** | Honesty Spine → Lucidez Audit + Gaps Explícitos | ✅ Take |
| 3 | **Infra: Connect** | Progressive Disclosure → Orchestrator Lazy Loading | ✅ Take |
| 4 | **Intel: Match** | Audit/GEO/Competitive → Brief Detector + Meta-Crisis | 🟡 Adaptar |
| 5 | **App: Federate** | Skills Marketing (6) → Hermes Skills Marketplace | 🟡 Adaptar |
| 6 | **Eco: Sync** | Positioning/Pricing Anfibio → ValueDual + priceParity | ✅ Take |
| 7 | **Impact: Bridge** | Analytics Honest Reads → Lucidez Triaxial | ✅ Take |
| 8 | **Funding: Proposal** | Launch Playbook → Onboarding + Deploy Pipeline | 🟡 Adaptar |

---

## 📊 MÉTRICAS DE ÉXITO

| Métrica | Target | Medición |
|---------|--------|----------|
| Brand context completion | 100% tribes | `/brand-context` completado antes de cualquier output marketing |
| Audit CAC v12 score | > 70/100 baseline | 12 vectores + η, ξ, σᵤ calculados |
| Hook MJ compliance | 100% hooks mapeados | Cada hook → Ley MJ (I/II/III/cross-cutting) |
| GEO citability | Top 3 para keywords tribu | ChatGPT/Perplexity/AI Overviews citation |
| Copy variants quality | Triaxial score > 80 | RAO + MJ Gate + Cross-check |
| Launch playbook execution | < 30 min onboarding | 4 fases automatizadas + deploy Vercel |
| Slop detection | 100% prose scanned | `.lucidez-raw` blocks flagged |

---

## 🚀 PRÓXIMOS PASOS INMEDIATOS

1. **Crear briefs operativos** (BF-116 a BF-124) via `brief-detector-recommender`
2. **Añadir workstream `MARKETING_OS_INTEGRATION`** al orchestrator (6 tareas)
3. **Implementar Semana 1**: `brand_context`, `marketing_audit`, `hooks_engine`
4. **Actualizar `BRIEFS_INDEX.md`** con 9 nuevos briefs
5. **Crear pantalla `/marketing`** como hub (icon: `Megaphone` o `TrendingUp`)
6. **Push a GitHub** + deploy Vercel + verificar `/marketing` live

---

**Nota:** Esta integración respeta el principio **anfibio** de HSCSG: misma lógica de marketing opera en modo postmonetario (ZNU/CaaS, métricas de valor real) o conectado (USD/USDC vía priceParity, métricas convencionales). El **Brand Context obligatorio** es el ancla que evita outputs genéricos/intercambiables — la soberanía de la tribu empieza por su narrativa propia.