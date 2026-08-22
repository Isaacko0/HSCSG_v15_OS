# Alianza Gaia-Mycelium — Integración Operativa con HSCSG v15 OS

**Objetivo:** Integrar la arquitectura de la Alianza Gaia-Mycelium (Meta Plataforma AI+Trust+Governance) con HSCSG v15 OS (nodo soberano offline-first + navteka social layer), usando principios IPD (Integrated Project Delivery) y arquitectura Trust-First.

---

## Resumen Ejecutivo

La Alianza Gaia-Mycelium aporta la **capa de interoperabilidad, confianza verificable y gobernanza distribuida** que HSCSG v15 OS necesita para federar nodos soberanos. HSCSG aporta la **base material, métricas cuantitativas (CAC/PGS), autómata soberano y economía postmonetaria (ZNU/CaaS-BM)** que Gaia-Mycelium necesita para operacionalizar su visión.

**Resultado:** Nodos HSCSG que son **holones tecnológicos** en la Meta Plataforma Gaia-Mycelium — autonomía local + interdependencia federada.

---

## Mapeo Concepto a Concepto (Isomorfismo Detallado)

| # | Concepto Gaia-Mycelium | Sección Doc | Equivalente HSCSG v15 OS | Módulo/Archivo | Gap / Acción |
|---|------------------------|-------------|--------------------------|----------------|--------------|
| 1 | **Meta Plataforma interoperable** | 1, 17 | HSCSG v15 OS + navteka | `navteka` monorepo | Federación DTN/AP + neko rooms |
| 2 | **Conectar → Comprender → Verificar → Colaborar → Intercambiar → Regenerar** | 1 | G1-CARMIS Loop (Sistema Alráico) | `lib/alraico.ts` | ✅ Ya implementado |
| 3 | **Capa Gobernanza: Gaia DAO / estructuras comunitarias** | 2, 17 | CDS-SUI-CGC-FRS-RAO + Autómata (Leyes MJ) | `lib/cds.ts`, `lib/automaton.ts` | `GAIA-gov-sync` task |
| 4 | **Capa Datos & Trust: Data Trust + DIDs + VCs + Trust Registries** | 2, 6 | ValueFlows + RAO + ERC-8004 + ZNU/Vesting | `lib/valueflows.ts`, `lib/rao.ts` | `GAIA-trust-bridge` task |
| 5 | **Capa Infraestructura: SynchroLabs + Project Weave** | 4, 5, 17 | neko-rooms + Boundaries (CEL) + Vasos neko:* | `packages/neko-client`, `lib/boundaries.ts` | `GAIA-infra-connect` task |
| 6 | **Capa Inteligencia: AI Matching + Recommendation Engine** | 4, 17 | Autómata E²R + 10 Agentes Solarpunk + CoachFAB | `lib/automaton.ts`, `packages/ui/CoachFAB.tsx` | `GAIA-intel-match` task |
| 7 | **Capa Aplicaciones: Market, PHI, Map, Passport** | 13, 17 | 21 módulos HSCSG + navteka screens | `src/app/(os)/*`, `apps/web/app/(os)/*` | `GAIA-app-federate` task |
| 8 | **Capa Ecosistema Vivo: Personas, territorios, proyectos** | 17 | Base Material (13 Pilares) + Colectivo + Tekitl | `lib/base-material.ts`, `lib/tekitl.ts` | `GAIA-eco-sync` task |
| 9 | **4 Niveles Confianza → VCs interoperables** | 7 | CDS + Proof-of-Humanity + Kleros | `lib/cds.ts`, `lib/kleros.ts` | Mapear niveles a VC types |
| 10 | **AI-First + Trust-First** | 11 | Lucidez Mode + RAO + MJ Gate + Autómata E²R | `packages/ui/CoachFAB.tsx`, `lib/lucidez.ts` | ✅ Arquitectura compatible |
| 11 | **Regla: "La IA no inventa su propia evidencia"** | 9 | Modo Lucidez (raw blocks) + RAO append-only | `.lucidez-raw`, `lib/rao.ts` | `LucidezVerifier` service |
| 12 | **Commonomics + Market Commission personalizada** | 4, 6 | CaaS-BM + ZNU + Fondo Solarpunk + Commonomics | `lib/caas.ts`, `lib/solarpunk.ts` | `GAIA-app-federate` task |
| 12 | **No Founder Equity Extraction** | 10 | Autómata soberano (Ley II MJ: gana existencia) | `lib/automaton.ts` | ✅ Alineado |
| 14 | **Holón tecnológico / Arquitectura abierta** | 18 | Vasos Comunicantes + Nodos Soberanos Federados | `apps/web/app/(os)/vasos/` | ✅ Arquitectura compatible |
| 15 | **Medición Multidimensional Impacto** | 12 | CAC/PGS/IVC + SVD v2 + AUT 12 vectores | `lib/metrics.ts`, `lib/svd.ts` | `GAIA-eco-sync` task |
| 16 | **Ecosystem Mapping (gobernado por comunidades)** | 8 | Colectivo + Tekitl + Priorizar Colectivo | `lib/colectivo.ts`, `lib/priorizar.ts` | `GAIA-eco-sync` task |
| 17 | **Gaia 3 Niveles (Presence/Activation/Business+AI)** | 1 | CoachFAB (free) + CaaS-BM tiers + Autómata | `packages/ui/CoachFAB.tsx`, `lib/caas.ts` | Mapear tiers |
| 18 | **Gaia AI Agent (Level 3) ↔ CoachFAB (Happpy)** | 3 | Unified agent interface | `packages/ui/CoachFAB.tsx` | `GAIA-marketplace-level3` task |
| 19 | **Referral Economy (30/70)** | 7 | ValueFlows peer-to-peer + affiliate revenue | `lib/valueflows.ts` | Extender referral type |
| 20 | **Gaia Common Fund → Impact & Innovation Fund** | 8, 11 | Fondo Solarpunk (25% excedentes) + DSI | `lib/solarpunk.ts` | Fusionar fondos |

---

## Decisiones Take / Discard / Adapt

### ✅ TAKE (Integrar directamente)
1. **Arquitectura 6 capas** → Mapea 1:1 a capas HSCSG (ver tabla arriba)
2. **AI-First + Trust-First** → Ya implementado como Lucidez Mode + MJ Gate
3. **4 Niveles Confianza → VCs** → Extender CDS + Kleros con VC types
4. **Commonomics** → Fusionar con CaaS-BM + ZNU economics
5. **Holón / Arquitectura abierta** → Vasos Comunicantes ya son holones
6. **No Founder Equity** → Ley II MJ del Autómata (gana existencia soberanizando)
6. **Progresión UX: Belong → Connect → Create → Exchange → Regenerate** → CoachFAB + CaaS-BM tiers + Autómata
7. **Referral Economy 30/70** → Extender ValueFlows con `referralSplit`
7. **Surplus → Impact Fund** → Fondo Solarpunk + Gaia Impact Fund = merged
8. **Governance: Consenso modificado + subsidiariedad** → CDS (voto por competencia) + subsidiaridad fractal

### 🔄 ADAPT (Modificar para HSCSG)
1. **DIDs / VCs / Trust Registries (W3C standards)** → Adaptar a **ERC-8004 + RAO + ValueFlows** (offline-first, no W3C DID resolution)
2. **SynchroLabs (discovery centralizado)** → Adaptar a **neko-rooms discovery descentralizado** + Boundaries CEL allowlist
3. **Project Weave (protocolos W3C DIDComm)** → Adaptar a **Boundaries CEL + custom protocol translation layer**
4. **Data Trust (entidad legal)** → Adaptar a **RAO-governed ValueFlows commons** (no entidad legal, append-only log)
5. **Gaia DAO (on-chain voting)** → Adaptar a **CDS off-chain + Autómata MJ Gate veto** (no blockchain)
6. **Global South/North pricing** → Adaptar a **ZNU stake tiers + priceParity oracle** (anfibio postmonetario/conectado)
7. **Gaia AI Agent (cloud LLM)** → Adaptar a **CoachFAB + Autómata local + optional cloud fallback** (privacy-first)
8. **Marketplace transaccional (Stripe/crypto)** → Adaptar a **CaaS-BM offers/needs + ZNU settlement + optional USDC bridge**

### ❌ DISCARD (No integrar - incompatibles con HSCSG principles)
1. **Blockchain/DLT/EVM/smart contracts** → HSCSG es offline-first sin EVM (regla: extirpar infra ajena, conservar lógica)
2. **IPFS/SSI criptográfico centralizado** → Reemplazar por federación DTN/AP + credenciales locales ERC-8004
3. **Cripto-regenerativas / tokens especulativos** → Reemplazar por ZNU (demurrage + paridad biofísica)
4. **Confederación como entidad central** → HSCSG es red de nodos soberanos federados (no macro-organismo)
5. **DAO on-chain voting** → CDS off-chain + Autómata veto (verificable sin blockchain)
6. **Centralized identity provider** → ERC-8004 self-sovereign + Social DNA + Web of Trust

---

## Workstreams de Integración (Tasks en Orchestrator)

| Task ID | Título | Dependencias | Esfuerzo | Valor | Workstream | Estado |
|---------|--------|--------------|----------|-------|------------|--------|
| GAIA-gov-sync | Implementar governance:sync CDS↔Gaia DAO | P0-copiosis, COACH-automaton | 5 | 95 | GAIA_INTEGRATION | pending |
| GAIA-trust-bridge | Implementar trust:bridge NetBenefitFlow↔VC | GAIA-gov-sync, P0-valueflows | 5 | 93 | GAIA_INTEGRATION | pending |
| GAIA-infra-connect | Implementar infra:connect neko↔SynchroLabs | MIG-P10-Publica, DEPLOY-link | 4 | 90 | GAIA_INTEGRATION | pending |
| GAIA-intel-match | Implementar intel:match Autómata↔AI Matching | GAIA-infra-connect, COACH-integration | 4 | 92 | GAIA_INTEGRATION | pending |
| GAIA-app-federate | Implementar app:federate Marketplace↔CaaS-BM | GAIA-trust-bridge, MIG-P5-Produce | 5 | 94 | GAIA_INTEGRATION | pending |
| GAIA-eco-sync | Implementar eco:sync Base Material↔Gaia Impact | GAIA-app-federate, GAIA-intel-match | 3 | 88 | GAIA_INTEGRATION | pending |
| GAIA-funding-proposal | Propuesta financiación conjunta (Sección 15) | GAIA-gov-sync, GAIA-trust-bridge | 2 | 90 | GAIA_INTEGRATION | pending |
| GAIA-marketplace-level3 | Integrar Gaia AI Agent (Level 3) con CoachFAB | COACH-integration, GAIA-infra-connect | 3 | 85 | GAIA_INTEGRATION | pending |

---

## Critical Path Integrado

```
HSCSG Base (18 días):
P0-netbenefit → P0-copiosis → COACH-automaton → COACH-integration → MIG-P5-Produce → MIG-P9/P10

GAIA Integration (15 días adicionales):
P0-copiosis → COACH-automaton → GAIA-gov-sync → GAIA-trust-bridge → GAIA-app-federate → GAIA-eco-sync

TOTAL: 33 días mínimos
```

---

## Nuevos Módulos / Archivos a Crear

| Archivo | Propósito | Workstream |
|---------|-----------|------------|
| `lib/gaia_sync.ts` | Governance sync: CDS Decision Records ↔ Gaia DAO proposals (VC signed) | GAIA-gov-sync |
| `lib/trust_bridge.ts` | Trust bridge: NetBenefitFlow ↔ VC, Trust Registry ↔ RAO, DIDComm | GAIA-trust-bridge |
| `lib/synchrolabs_adapter.ts` | Adapter: neko discovery ↔ SynchroLabs, Boundaries CEL ↔ Project Weave | GAIA-infra-connect |
| `lib/ai_matching_bridge.ts` | Intel match: Autómata E²R ↔ Recommendation Engine, verifiable inference | GAIA-intel-match |
| `lib/marketplace_federation.ts` | App federate: CaaS-BM offers ↔ Gaia Market, custom commission + ZNU | GAIA-app-federate |
| `lib/impact_bridge.ts` | Eco sync: CAC/PGS ↔ Gaia Score, multidimensional pipelines | GAIA-eco-sync |
| `lib/funding_proposal.md` | Documento conjunto para financiadores (Sección 15) | GAIA-funding-proposal |
| `packages/ui/GaiaAgentBridge.tsx` | CoachFAB ↔ Gaia AI Agent unified interface | GAIA-marketplace-level3 |

---

## Extensiones a Tipos Existentes

### `lib/valueflows.ts` — Añadir:
```typescript
interface EconomicEvent {
  // ... existing
  referralSplit?: { referrer: string; percentage: number }; // 30/70 Gaia
  gaiaMarketCommission?: { percentage: number; commonomics: boolean };
  trustLevel?: 'self' | 'community' | 'ambassador' | 'third-party'; // Mycelium 4 niveles
  vcCredential?: VerifiableCredential; // Gaia VC integration
}
```

### `lib/cds.ts` — Añadir:
```typescript
interface CDSProposal {
  // ... existing
  gaiaDAOProposalId?: string;
  vcSignature?: string; // VC-signed decision record
  mjGateVeto?: boolean;
}
```

### `lib/automaton.ts` — Añadir:
```typescript
interface AutomatonConfig {
  // ... existing
  trustFirstMode: boolean; // AI-First + Trust-First
  lucidezVerifier: LucidezVerifierService;
  gaiaMatchingEndpoint?: string; // AI Matching bridge
}
```

---

## Verification Checklist (Por Vaso Comunicante)

| Vaso | Criterio de Éxito |
|------|-------------------|
| `governance:sync` | CDS Decision Records → Gaia DAO proposals (VC signed), MJ Gate veto functional |
| `trust:bridge` | NetBenefitFlow ↔ VC settlement, Trust Registry ↔ RAO sync, DIDComm working |
| `infra:connect` | neko rooms discoverable via SynchroLabs, Boundaries CEL allows Project Weave protocols |
| `intel:match` | Autómata E²R ↔ Gaia Recommendation, verifiable inference chains, CoachFAB unified |
| `app:federate` | CaaS-BM offers in Gaia Market, custom commission + Commonomics, ZNU settlement |
| `eco:sync` | CAC/PGS ↔ Gaia Score bidirectional, multidimensional pipelines operational |

---

## Próximos Pasos Inmediatos (Orquestador)

```bash
# Semana 1-2: Fundación + GAIA-gov-sync
node scripts/orchestrator-next-steps.js run P0-netbenefit
node scripts/orchestrator-next-steps.js run P0-cds_jurados
node scripts/orchestrator-next-steps.js run P0-copiosis
node scripts/orchestrator-next-steps.js run P0-valueflows
node scripts/orchestrator-next-steps.js run GAIA-gov-sync

# Semana 3-4: Trust Bridge + Infra
node scripts/orchestrator-next-steps.js run GAIA-trust-bridge
node scripts/orchestrator-next-steps.js run MIG-P1-BranDNA
node scripts/orchestrator-next-steps.js run GAIA-infra-connect

# Semana 5-6: Intel + App Federation
node scripts/orchestrator-next-steps.js run COACH-automaton
node scripts/orchestrator-next-steps.js run COACH-integration
node scripts/orchestrator-next-steps.js run GAIA-intel-match
node scripts/orchestrator-next-steps.js run GAIA-app-federate

# Semana 7: Eco Sync + Funding
node scripts/orchestrator-next-steps.js run GAIA-eco-sync
node scripts/orchestrator-next-steps.js run GAIA-funding-proposal
node scripts/orchestrator-next-steps.js run GAIA-marketplace-level3
```

---

## Riesgos y Mitigación Conjunta

| Riesgo | Mitigación HSCSG | Mitigación Gaia | Conjunta |
|--------|------------------|-----------------|----------|
| Dependencia tecnológica | Offline-first, localStorage/IndexedDB | Protocolos abiertos, DIDComm | **Hybrid: local-first + interoperable protocols** |
| Captura institucional | Autómata soberano (Leyes MJ) + CDS distribuido | Gobernanza distribuida + Data Trust | **Dual governance: CDS + Gaia DAO, veto mutuo** |
| Concentración poder | Rotación agentes (PIP) + Talent Market | Autonomías interdependientes (holón) | **Rotation + holón architecture** |
| Dependencia financiera | Fondo Solarpunk + DSI + ZNU demurrage | Diversidad fuentes + Commonomics | **Unified fund + multiple revenue streams** |
| IA no auditable | Modo Lucidez + RAO + MJ Gate | Trust-first + verifiable pipelines | **LucidezVerifier service compartido** |

---

## Referencias Cruzadas

- **Backup completo:** `docs/gaia_mycelium_backup.md`
- **Skill operativa:** `skills/hscsg-gaia-mycelium-integration/SKILL.md`
- **Orchestrator CLI:** `scripts/orchestrator-next-steps.js` (workstream GAIA_INTEGRATION)
- **Estado persistido:** `orchestrator-state.json`
- **Brief exhaustivo:** `BRIEF_EXHAUSTIVO_HSCSG_COSATECA_OS.md` (sección 15: Cosateca OS vs HSCSG v15 OS)
- **Índice briefs:** `docs/BRIEFS_INDEX.md` (BF-056)

---

*Documento generado: 2026-08-22 | Ciclo: Integración HSCSG v15 OS ↔ Alianza Gaia-Mycelium | Skills: hscsg-next-steps-orchestrator + hscsg-gaia-mycelium-integration*