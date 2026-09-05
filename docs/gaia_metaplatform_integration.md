# Gaia Meta-Plataforma → HSCSG v15 OS — Integración Operativa

**Fecha:** 2026-09-04  
**Fuente:** `docs/gaia_metaplatform_backup.md` (Documento Maestro MetaPlataforma Gaia completo en español)  
**Objetivo:** Mapear isomorfismos, decidir Take/Adapt/Discard, crear módulos vivos, definir plan de implementación

---

## 🔄 TABLA MAESTRA DE ISOMORFISMOS (35+ conceptos × 2 sistemas)

| # | Concepto Gaia Meta-Plataforma | Concepto HSCSG v15 OS | Tipo | Acción | Notas |
|---|------------------------------|----------------------|------|--------|-------|
| 1 | **MetaPlataforma interoperable (federación apps)** | HSCSG v15 OS + navteka (SPA offline + social layer) | **Take** | ✅ Directo | Misma arquitectura: núcleo soberano + capa social federada |
| 2 | **Sistema Nervioso Planetario (matching recursos)** | Autómata SOUL + E²R + CoachFAB + Vasos Comunicantes | **Take** | ✅ Directo | Matching IA + confianza + gobernanza = sistema nervioso |
| 3 | **Gaia Unión (sustrato constitucional)** | Cuaternidad Soberana Ampliada + 5 Planos + Leyes MJ | **Adapt** | 🔄 Expandido | Constitución Gaia → Cuaternidad (4 pilares) + Leyes MJ (veto ético) |
| 4 | **Gaia OS & Hub (directorio + GPS matching)** | `coworkers.ts` + `federation.ts` + `valueDual.ts` + matching | **Take** | ✅ Directo | Directorio nodos + matching expertise ↔ necesidades |
| 5 | **Mercado Gaia + Escuela de la Vida (motor económico)** | CaaS-BM + ZNU + ValueDual + Skills Hermes + CoachFAB | **Adapt** | 🔄 Fusionado | Commonomics 50/30/10/5 → distribution logic en `valueDual.ts` |
| 6 | **Fondo Impacto Gaia (orquestación capital)** | Fondo Solarpunk (25% excedentes) + DSI + priceParity | **Adapt** | 🔄 Fusionado | Fondo Madre Gaia = Fondo Solarpunk + Gaia Impact Fund |
| 7 | **Hub Impacto (incubación + diagnostics)** | Autómata + CDS-Jurados + CoachFAB + brief-detector | **Take** | ✅ Directo | Diagnóstico org = autodiagnóstico HSCSG + autómata |
| 8 | **Programa Regeneración Integral (virtual/híbrido/presencial)** | Encuentros tribales (4/año) + Feria Conuquera + onboarding | **Adapt** | 🔄 Expandido | 16 Facultades → 13 Pilares + 3 extras; formatos híbridos |
| 9 | **Certificación Confianza (4 niveles: Self/Community/Ambassador/Third-Party)** | CDS + RAO + MJ Gate + Kleros + Verificación Triaxial | **Adapt** | 🔄 Evolucionado | 4 niveles → tiers verificación triaxial (RAO + MJ + Cross-check) |
| 10 | **Pasaporte Gaia + Visas Descentralizadas (DID/VC)** | ERC-8004 RAO + DID:hsccsg + cultural_profiles + visas | **Adapt** | 🔄 Offline-first | DID/VC W3C → ERC-8004 + DID soberana + cultural profiles como visas |
| 11 | **Programa CoRe (9 Capitales + Tokens Multi-activo)** | NetBenefit 8 escalas + ZNU + Copiosis NBR + valueDual | **Adapt** | 🔄 Mapeo 9↔8 | 9 Capitales Gaia → 8 escalas NetBenefit + 1 espiritual |
| 12 | **Commonomics (filosofía económica)** | Modo anfibio ZNU/USD + priceParity + CaaS-BM | **Take** | ✅ Directo | Idéntico: éxito individual construye infraestructura común |
| 13 | **Distribución Ingresos 50/30/10/5 + facilitador** | `valueDual.ts` distribution logic + referral split | **Take** | ✅ Directo | Implementar en `distribution_engine.ts` |
| 14 | **Reglas Excedentes → Fondo Madre** | Fondo Solarpunk (25% excedentes) + reinversión automática | **Take** | ✅ Directo | Ya implementado: `solarpunk.ts` surplus rules |
| 15 | **Tokenómica CoRe (5 niveles + especializados)** | CORE-G→CDS voting, CORE-U→ZNU, CORE-C→NetBenefit, CORE-I→Impact | **Adapt** | 🔄 Mapeo semántico | No tokens especulativos; ZNU demurrage + NetBenefit + Copiosis |
| 16 | **Confederación Gaia + GEN (BioHábitats/BioRegiones)** | Tribu fractal + Nodos soberanos federados + Vasos Comunicantes | **Take** | ✅ Directo | BioHábitat = Nodo HSCSG; BioRegión = Cluster de tribus |
| 17 | **Fideicomiso Datos (community-governed)** | RAO-governed ValueFlows commons + Vasos Comunicantes | **Adapt** | 🔄 Offline-first | Data Trust legal → RAO append-only log + gobernanza distribuida |
| 18 | **Metaplataforma = federación apps diversas (no monolito)** | HSCSG core + navteka + skills Hermes anfibias + plugins | **Take** | ✅ Directo | Idéntico: arquitectura abierta, federada, no monolítica |
| 19 | **SynchroLabs + Project Weave (exploración hipotética)** | **Discovery Layer** (ya purgado SynchroLabs) + Boundaries CEL | **Discard** | ❌ No integrar | SynchroLabs purgado; Project Weave → Boundaries CEL adapter |
| 20 | **Apps Interoperables vs No Interoperables = Sistema Nervioso** | Vasos Comunicantes (8) + Boundaries (allowlist/deny) | **Take** | ✅ Directo | Interoperables = Vasos abiertos; No interoperables = Bridges manuales |
| 21 | **IA Auditable > Inferencia LLM (Datos→Pipelines→Protocolos→IA)** | Modo Lucidez (raw blocks) + RAO + MJ Gate + Autómata E²R | **Take** | ✅ Directo | **Idéntico principio**: "IA no inventa evidencia" = Lucidez Mode |
| 22 | **Paneles Regeneración Individual (7 áreas vida, 0-10, multianual)** | Autodiagnóstico 14 dimensiones + CAC v12 + métricas loop | **Adapt** | 🔄 Expandido | 7 áreas Gaia → 14 dimensiones HSCSG + métricas longitudinales |
| 23 | **Paneles Organizacionales (RRHH + Calidad Procesos)** | `coworkers.ts` standing roles + `metrics.ts` CAC/PGS + `svd.ts` | **Take** | ✅ Directo | Mapeo directo: áreas vida → pilares base material |
| 24 | **16 Facultades UniDiversidad** | 13 Pilares Cuaternidad + 3 pilares meta (Síntesis, Meta-sistémico, Transdisciplinar) | **Adapt** | 🔄 Mapeo 16↔13+3 | Ver tabla detallada abajo |
| 25 | **4 Ejes Alianzas (UCI, Mycelium, Vision Erde, Krauck, METTA, Vita Vista)** | Proyectos amigos en `meta_crisis_projects.ts` + `meta_crisis_maps.ts` | **Take** | ✅ Directo | Integrar como nodos aliados en red HSCSG |
| 26 | **Programa Juvenil 13-39 años** | `tribal_gatherings.ts` youth track + `cultural_profiles.ts` | **Take** | ✅ Directo | Rituales estacionales + track juventud |
| 27 | **7 Sistemas Integrales (alcance Fondo)** | 7/13 Pilares Base Material (mapeo directo) | **Take** | ✅ Directo | Ver mapeo sistemas→pilares abajo |
| 28 | **Wiki Charities 2.1M ONGs** | `meta_crisis_communities.ts` + `meta_crisis_maps.ts` dataset | **Take** | ✅ Directo | Dataset fundacional para mapeo ecosistema |
| 29 | **Meta Organización (Gaia Unión = federación sociocrática)** | Tribu fractal + Vasos Comunicantes + CDS distribuido | **Take** | ✅ Directo | No entidad central; red nodos soberanos |
| 30 | **BMC + FODA estratégico** | `brief-detector-recommender` + `orchestrator-next-steps` | **Take** | ✅ Directo | Herramientas operativas ya existen |
| 31 | **Hoja Ruta 2027+ (3 fases)** | Orchestrator workstreams + critical path 33 días | **Adapt** | 🔄 Comprimido | Timeline Gaia 2027+ → HSCSG critical path semanas |
| 32 | **Eje I: Agua/Infra/Construcción (Krauck, DesertGreener, Aqua4D)** | Pilar 7 (Hábitat/Infra) + Pilar 4 (Energía) + `energy_metric.ts` | **Take** | ✅ Directo | Aliados → proyectos amigos en `meta_crisis_projects.ts` |
| 33 | **Eje II: Agrotech/Suelo/IA (METTA Green Deep Tech)** | Pilar 12 (Alimentación) + Pilar 10 (Tecnología) + `netbenefit.ts` | **Take** | ✅ Directo | IoT campo + BPE → sensores + simulación en NetBenefit |
| 34 | **Eje III: Longevidad/Salud (Vita Vista, METTA)** | Pilar 6 (Salud) + Pilar 9 (Bienestar) + `automaton.ts` preventivo | **Take** | ✅ Directo | Reducción edad biológica → métricas preventivas autómata |
| 35 | **Eje IV: Ciencias Sociales/Economía (Nuestra Academia, Mycelium, UCI)** | Pilar 3 (Gobernanza) + Pilar 5 (Economía) + `cds.ts` + `caas.ts` | **Take** | ✅ Directo | Legal tech DAOs → CDS + CaaS-BM |

---

## 📐 MAPEO DETALLADO: 16 FACULTADES GAIA ↔ 13+3 PILARES HSCSG

| # | Facultad Gaia | Pilar HSCSG Principal | Pilares Secundarios | Notas |
|---|---------------|----------------------|---------------------|-------|
| 1 | **Gobernanza y Justicia Comunitaria** | **Pilar 3: Gobernanza** | Pilar 1 (Soberanía), Pilar 2 (Reciprocidad) | Sociocracia, holocracia, mediación, DAOs |
| 2 | **Bio-Educación y Pedagogías** | **Pilar 8: Educación** | Pilar 9 (Bienestar), Pilar 13 (Cultura) | Waldorf, Montessori, Reggio, proyecto |
| 3 | **Infraestructura y Energía Regenerativa** | **Pilar 7: Hábitat/Infra** | **Pilar 4: Energía**, Pilar 10 (Tecnología) | Construcción natural, renovables, urbanismo |
| 4 | **Producción y Gestión Recursos** | **Pilar 11: Producción** | Pilar 6 (Circularidad), Pilar 4 (Energía) | Circular, biomímesis, zero waste |
| 5 | **Economía y Comercio Regenerativo** | **Pilar 5: Economía** | Pilar 2 (Reciprocidad), Pilar 1 (Soberanía) | Solidaria, circular, ética, Web3, comercio justo |
| 6 | **Desarrollo Personal y Psicología Transpersonal** | **Pilar 9: Bienestar** | Pilar 13 (Cultura), Pilar 12 (Espiritualidad) | Humanista, consciente, emocional, coaching |
| 7 | **Comunicación, Medios y Tecnología** | **Pilar 10: Tecnología** | Pilar 8 (Educación), Pilar 13 (Cultura) | Medios regenerativos, descentralización, conciencia |
| 8 | **Turismo y Experiencias Holísticas** | **Pilar 12: Turismo** | Pilar 7 (Hábitat), Pilar 9 (Bienestar) | Ecoturismo, conexión naturaleza, retiros |
| 9 | **Deportes y Prácticas Movimiento** | **Pilar 9: Bienestar** | Pilar 13 (Cultura) | Funcional, consciente (Yoga/TaiChi/Qigong), danza |
| 10 | **Salud y Bienestar Integral** | **Pilar 6: Salud** | Pilar 9 (Bienestar), Pilar 12 (Espiritualidad) | Holística, natural, nutrición, preventiva, salutogénesis |
| 11 | **Medio Ambiente, Ecología, Recursos** | **Pilar 11: Producción** | Pilar 7 (Hábitat), Pilar 4 (Energía) | Conservación, regeneración suelo/agua, adaptación |
| 12 | **Artes y Expresión Cultural** | **Pilar 13: Cultura** | Pilar 8 (Educación), Pilar 3 (Gobernanza) | Música, visual, escénica, ancestral |
| 13 | **Ciencias Espirituales y Ancestralidad** | **Pilar 12: Espiritualidad** | Pilar 13 (Cultura), Pilar 9 (Bienestar) | Cosmovisiones indígenas, conciencia expandida, ceremonia |
| 14 | **Desarrollo PsicoEmocional, Familia, Maternidad** | **Pilar 9: Bienestar** | Pilar 8 (Educación), Pilar 3 (Gobernanza) | Relaciones, primera infancia, dinámicas familiares |
| 15 | **Agricultura, Materias Primas, Soberanía Alimentaria** | **Pilar 12: Alimentación** | Pilar 11 (Producción), Pilar 4 (Energía) | Agroecología, bosques alimentos, semillas, IoT/BPE |
| 16 | **Innovación Planetaria Sistémica (Síntesis)** | **PILAR META 14: Síntesis** | **PILAR META 15: Meta-sistémico**, **PILAR META 16: Transdisciplinar** | Data science, IA, monitoreo planetario, Living Labs |

**3 Pilares Meta Nuevos (emergentes de Facultad 16):**
- **Pilar 14: Síntesis** — Integración transversal, ciencia de datos, monitoreo salud planetaria
- **Pilar 15: Meta-sistémico** — Gobernanza de la gobernanza, loop engineering, autopoiesis
- **Pilar 16: Transdisciplinar** — Puentes epistemológicos, síntesis ancestral+moderna, holismo

---

## 📐 MAPEO: 7 SISTEMAS INTEGRALES GAIA ↔ 13 PILARES HSCSG

| Sistema Integral Gaia | Pilares HSCSG Primarios | Pilares Secundarios |
|----------------------|------------------------|---------------------|
| 1. Cultura y Significado | 13 (Cultura), 12 (Espiritualidad), 8 (Educación) | 3 (Gobernanza), 9 (Bienestar) |
| 2. Información y Conocimiento | 10 (Tecnología), 8 (Educación), 14 (Síntesis) | 5 (Economía), 11 (Producción) |
| 3. Gobernanza y Relaciones Humanas | 3 (Gobernanza), 1 (Soberanía), 2 (Reciprocidad) | 9 (Bienestar), 13 (Cultura) |
| 4. Bienestar Social | 9 (Bienestar), 6 (Salud), 12 (Espiritualidad) | 8 (Educación), 14 (Maternidad/Familia) |
| 5. Diseño Económico e Intercambio | 5 (Economía), 2 (Reciprocidad), 11 (Producción) | 4 (Energía), 7 (Hábitat) |
| 6. Producción y Circularidad | 11 (Producción), 6 (Circularidad), 12 (Alimentación) | 4 (Energía), 10 (Tecnología) |
| 7. Diseño Hábitat e Infraestructura | 7 (Hábitat/Infra), 4 (Energía), 10 (Tecnología) | 11 (Producción), 12 (Alimentación) |

---

## ✅ DECISIONES: TAKE (14 conceptos — adopción directa)

| # | Concepto Gaia | Implementación HSCSG |
|---|---------------|---------------------|
| 1 | MetaPlataforma federada apps | `navteka` monorepo + skills Hermes + plugins |
| 2 | Sistema Nervioso Planetario | Autómata SOUL + E²R + CoachFAB + Vasos Comunicantes |
| 4 | Gaia OS & Hub (directorio + matching) | `federation.ts` + `coworkers.ts` + matching engine |
| 7 | Hub Impacto (incubación) | Autómata + CDS-Jurados + CoachFAB + brief-detector |
| 12 | Commonomics | `valueDual.ts` + `caas.ts` + `solarpunk.ts` (ya implementado) |
| 13 | Distribución 50/30/10/5 | `distribution_engine.ts` (nuevo módulo) |
| 14 | Excedentes → Fondo Madre | `solarpunk.ts` surplus rules (ya implementado) |
| 16 | Confederación + GEN | Tribu fractal + Vasos Comunicantes + nodos soberanos |
| 18 | Arquitectura abierta federada | HSCSG core + navteka + skills + plugins (idéntico) |
| 20 | Apps Interoperables = Sistema Nervioso | Vasos Comunicantes 8 + Boundaries CEL allowlist |
| 21 | IA Auditable > LLM | Modo Lucidez + RAO + MJ Gate + Autómata E²R (idéntico) |
| 24 | 16 Facultades | Mapeo a 13+3 pilares (tabla arriba) |
| 25 | 4 Ejes Alianzas | `meta_crisis_projects.ts` + `meta_crisis_maps.ts` |
| 27 | 7 Sistemas Integrales | Mapeo a 7/13 pilares (tabla arriba) |
| 28 | Wiki Charities 2.1M ONGs | `meta_crisis_communities.ts` + `meta_crisis_maps.ts` |
| 29 | Meta Organización federada | Tribu fractal + CDS distribuido + Vasos Comunicantes |
| 30 | BMC + FODA herramientas | `brief-detector-recommender` + `orchestrator-next-steps` |

---

## 🔄 DECISIONES: ADAPT (12 conceptos — evolución/expansión)

| # | Concepto Gaia | Adaptación HSCSG | Detalle |
|---|---------------|------------------|---------|
| 3 | Gaia Unión (constitucional) | **Cuaternidad + 5 Planos + Leyes MJ** | Constitución → Cuaternidad (4 pilares soberanos) + Leyes MJ (veto ético inviolable) |
| 5 | Mercado + Escuela Vida | **CaaS-BM + ZNU + Skills + CoachFAB** | Commonomics 50/30/10/5 → `distribution_engine.ts`; Escuela → Skills + CoachFAB + tribal gatherings |
| 6 | Fondo Impacto Gaia | **Fondo Solarpunk + DSI + priceParity** | Fondo Madre = Fondo Solarpunk (25% excedentes) + Gaia Impact Fund fusionado |
| 9 | Certificación 4 Niveles | **Verificación Triaxial (RAO + MJ + Cross-check)** | Self→RAO baseline; Community→Cross-check; Ambassador→MJ Gate; Third-Party→Kleros/RAO audit |
| 10 | Pasaporte Gaia + Visas (DID/VC W3C) | **ERC-8004 RAO + DID:hsccsg + Cultural Profiles** | Offline-first: DID soberana HSCSG + cultural profiles como visas + RAO inmutable |
| 11 | CoRe 9 Capitales + Tokens | **NetBenefit 8 escalas + ZNU + Copiosis NBR + valueDual** | 9→8+1 mapeo; no tokens especulativos; ZNU demurrage + priceParity anfibio |
| 15 | Tokenómica CoRe 5 niveles | **Mapeo semántico sin especulación** | CORE-G→CDS voting weight; CORE-U→ZNU utility; CORE-C→NetBenefit; CORE-I→Impact metrics; Especializados→valueDual modes |
| 17 | Fideicomiso Datos (legal entity) | **RAO-governed ValueFlows Commons** | No entidad legal; append-only log + gobernanza distribuida via Vasos Comunicantes |
| 19 | SynchroLabs + Project Weave | **Discovery Layer (purgado) + Boundaries CEL adapter** | SynchroLabs → Discovery Layer (purgado repo público); Project Weave → Boundaries CEL translation layer |
| 22 | Paneles 7 áreas 0-10 | **Autodiagnóstico 14 dim + CAC v12 + Loop metrics** | Expandir 7→14 dimensiones; añadir verificación + longitudinal tracking |
| 23 | Paneles Organizacionales | **Coworkers standing roles + CAC/PGS + SVD v2** | Mapeo áreas vida → pilares base material; métricas cuantitativas |
| 31 | Hoja Ruta 2027+ (3 fases) | **Critical Path 33 días + Orchestrator workstreams** | Comprimir timeline: Fase 1→Semanas 1-6; Fase 2→Semanas 7-12; Fase 3→Semanas 13-18 |

---

## ❌ DECISIONES: DISCARD (9 conceptos — incompatibles con principios HSCSG)

| # | Concepto | Por qué no / Alternativa HSCSG |
|---|----------|--------------------------------|
| 1 | **Blockchain/DLT/EVM/Smart Contracts** | HSCSG offline-first sin EVM (regla: extirpar infra ajena, conservar lógica) |
| 2 | **IPFS/SSI criptográfico centralizado** | Reemplazar por federación DTN/AP + credenciales locales ERC-8004 + RAO |
| 3 | **Cripto-regenerativas / tokens especulativos** | Reemplazar por ZNU (demurrage + paridad biofísica 1 TQ=1kWh) + NetBenefit |
| 4 | **Confederación como entidad central** | HSCSG = red nodos soberanos federados (no macro-organismo centralizado) |
| 5 | **DAO on-chain voting** | CDS off-chain + Autómata MJ Gate veto (verificable sin blockchain) |
| 6 | **Centralized identity provider** | ERC-8004 self-sovereign + Social DNA + Web of Trust (descentralizado) |
| 7 | **SynchroLabs (Discovery Layer)** | **Ya purgado del repo público** — mantenido solo en `.local_backups/synchrolabs/` |
| 8 | **Project Weave (W3C DIDComm)** | Adaptar solo capa protocolo → Boundaries CEL translation layer |
| 9 | **Global South/North pricing diferenciado** | **Modo anfibio nativo**: ZNU stake tiers + priceParity oracle (unificada) |

---

## 🏗️ MÓDULOS NUEVOS A CREAR EN HSCSG v15 OS

### 1. `src/core/lib/distribution_engine.ts` — Motor Distribución Commonomics
```typescript
// Implementa regla 50/30/10/5 + facilitador + excedentes → Fondo Madre
interface DistributionRule {
  platformDevelopment: 0.50;    // 30% admin + 10% edu + 5% no-edu + 5% resto
  marketing: 0.30;
  referrals: 0.10;              // no usado → marketing
  contingency: 0.05;            // no usado → platform dev
  facilitator: number;          // acordado caso a caso
  surplusRules: {
    marketingSurplus: 'platformDevelopment';
    referralSurplus: 'platformDevelopment';
    contingencySurplus: 'platformDevelopment';
    platformSurplus: 'motherFund';  // Fondo Solarpunk / Gaia Mother Fund
  };
}

function distributeRevenue(amount: bigint, context: TransactionContext): DistributionResult;
```

### 2. `src/core/lib/gaia_passport.ts` — Pasaporte Gaia Offline-First
```typescript
// ERC-8004 RAO + DID:hsccsg + Cultural Profiles como Visas
interface GaiaPassport {
  did: `did:hsccsg:${string}`;           // DID soberana HSCSG
  raoRecord: RAORecord;                  // ERC-8004 + IPFS anchor
  culturalProfile: CulturalProfileId;    // Visa cultural (8 base + custom)
  trustTier: 'self' | 'community' | 'ambassador' | 'third-party'; // 4 niveles Gaia
  visas: Visa[];                         // Visas especializadas (cohousing, coworking, etc.)
  gaiaScore: GaiaScore;                  // Métrica multidimensional impacto
  ncCapital: NineCapitalBalance;         // 9 Capitales Gaia balance
  lucidezMode: 'full' | 'semantic' | 'raw'; // Nivel transparencia IA
}
```

### 3. `src/core/lib/nine_capitals.ts` — Matriz 9 Capitales Gaia
```typescript
// Mapeo 9 Capitales Gaia → NetBenefit 8 escalas + 1 Espiritual
const NINE_CAPITALS = [
  'financial',      // → NetBenefit: Financial
  'manufactured',   // → NetBenefit: Material
  'natural',        // → NetBenefit: Ecological
  'human',          // → NetBenefit: Human
  'intellectual',   // → NetBenefit: Intellectual
  'social',         // → NetBenefit: Social
  'cultural',       // → NetBenefit: Cultural
  'ethical',        // → NetBenefit: Ethical (NUEVO)
  'spiritual'       // → NetBenefit: Spiritual (NUEVO - 9º capital)
] as const;

interface NineCapitalBalance {
  [capital: string]: {
    quantity: bigint;
    quality: number;      // 0-10 (panel regeneración)
    verificationTier: TrustTier;
    lastUpdated: ISO8601;
  };
}
```

### 4. `src/core/lib/gaia_fund.ts` — Fondo Gaia Fusionado (Solarpunk + Impact)
```typescript
// Fondo Madre Gaia = Fondo Solarpunk (25% excedentes) + Gaia Impact Fund
interface GaiaFund {
  motherFund: FundAccount;           // Recibe excedentes plataforma + marketing + referidos + contingencia
  impactFund: FundAccount;           // Inversiones regenerativas (7 sistemas integrales)
  bioregionalFunds: Map<string, FundAccount>;  // Fondos BioRegionales (Tesoros Holón)
  philanthropicFund: FundAccount;    // Subvenciones urgentes (EcoSocial)
  regenerativeInvestmentFund: FundAccount;     // Empresas generadoras ingreso (agroforestería, renovables)
  
  // Commonomics integration
  allocationRules: {
    platformRevenue: 0.50;    // → motherFund
    marketingRevenue: 0.30;   // → motherFund (surplus)
    referralRevenue: 0.10;    // → motherFund (surplus)
    contingencyRevenue: 0.05; // → motherFund (surplus)
    motherFundSurplus: 'impactFund';  // Regla final Gaia
  };
}
```

### 5. `src/core/lib/trust_certification.ts` — Certificación Confianza 4 Niveles → Triaxial
```typescript
// Mapeo 4 niveles Gaia → Verificación Triaxial HSCSG
const TRUST_TIER_MAP = {
  'self-attested': {           // Nivel 1: Auto-Atestiguado
    rao: 'baseline',           // RAO entry básica
    mjGate: 'none',            // Sin veto MJ
    crossCheck: 'none'         // Sin cross-check
  },
  'community-attested': {      // Nivel 2: Community Attested
    rao: 'peer-verified',      // RAO con verificación pares
    mjGate: 'review',          // MJ Gate revisa
    crossCheck: 'peer'         // Cross-check por coworkers
  },
  'ambassador-verified': {     // Nivel 3: Ambassador Verified
    rao: 'ambassador-signed',  // RAO firmado por embajador
    mjGate: 'approve',         // MJ Gate aprueba
    crossCheck: 'ambassador'   // Cross-check por embajador
  },
  'third-party-certified': {   // Nivel 4: Third-Party Certified (IRIS/VERA)
    rao: 'audit-verified',     // RAO auditado tercero
    mjGate: 'certified',       // MJ Gate certifica
    crossCheck: 'external'     // Cross-check auditor externo
  }
} as const;
```

### 6. `src/core/lib/university_curriculum.ts` — Currículo 16 Facultades → 13+3 Pilares
```typescript
// Mapeo facultades → pilares + módulos de aprendizaje
interface FacultyModule {
  facultyId: 1..16;
  facultyName: string;
  primaryPillar: PillarId;      // 1-13 + 14/15/16 meta
  secondaryPillars: PillarId[];
  academicLevels: ('introductory' | 'intermediate' | 'advanced' | 'doctoral')[];
  alliedApproaches: AlliedApproach[];  // UCI, Mycelium, Vision Erde, etc.
  livingLabSites: string[];     // BioHábitats / Glücksdorf / Vision Erde
  youthTrack: boolean;          // Programa Juvenil 13-39
}
```

### 7. `src/core/lib/strategic_alliances.ts` — 4 Ejes Alianzas Estratégicas
```typescript
// Ejes I-IV → Proyectos amigos + Living Labs + Hubs investigación
interface StrategicAllianceAxis {
  axisId: 'I' | 'II' | 'III' | 'IV';
  name: string;
  partners: Partner[];          // Krauck, DesertGreener, METTA, Vita Vista, etc.
  focusAreas: string[];
  hscsgPillars: PillarId[];
  livingLabs: LivingLab[];      // Glücksdorf, Vision Erde, BioHábitats
  researchOutputs: ResearchOutput[];
}
```

---

## 📦 PANTALLAS NUEVAS EN HSCSG v15 OS

| Pantalla | Ruta | Descripción | Componentes Clave |
|----------|------|-------------|-------------------|
| **GaiaPassport** | `/gaia-passport` | Identidad soberana + visas culturales + trust tier + 9 capitales | DID display, visa selector, capital balance, trust tier badge |
| **DistributionEngine** | `/distribution-engine` | Visualizar flujo Commonomics 50/30/10/5 + excedentes → Fondo Madre | Sankey diagram, real-time distribution, surplus tracker |
| **GaiaFundDashboard** | `/gaia-fund` | Fondo Madre + Impacto + Bioregionales + Filantrópico + Inversión | Multi-fund view, allocation rules, impact metrics, proposal pipeline |
| **TrustCertification** | `/trust-certification` | Proceso certificación 4 niveles → verificación triaxial | Peer review UI, ambassador workflow, third-party audit integration |
| **NineCapitals** | `/nine-capitals` | Balance 9 capitales Gaia ↔ NetBenefit 8+1 | Radar chart, longitudinal tracking, verification evidence |
| **UniversityCurriculum** | `/university` | 16 Facultades → 13+3 Pilares, 4 niveles académicos | Faculty cards, pillar mapping, level progression, living lab links |
| **StrategicAlliances** | `/alliances` | 4 Ejes + socios + living labs + outputs investigación | Axis cards, partner network, lab status, research tracker |
| **RegenerationPanels** | `/regeneration-panels` | Paneles individual (7 áreas) + organizacional (RRHH + procesos) | 7-area radar, 0-10 scoring, longitudinal charts, badge display |

---

## 🔗 INTEGRACIÓN CON MÓDULOS EXISTENTES HSCSG

### Ya Existentes (Reutilizar/Extender)
| Módulo HSCSG | Integración Gaia Meta-Plataforma |
|--------------|----------------------------------|
| `valueDual.ts` + `nodeMode` + `priceParity` | **Ya implementa modo anfibio** — extender con `distribution_engine.ts` + `nine_capitals.ts` |
| `boundaries.ts` + `governAction` | Añadir `trustTier` check, `gaiaPassport` validation, `commonomics` compliance |
| `coworkers.ts` | Añadir `GaiaAmbassador` + `GaiaCertifier` + `GaiaFacilitator` standing roles |
| `meta_crisis_projects.ts` + `meta_crisis_maps.ts` | Añadir 4 Ejes alianzas + 16 Facultades + Wiki Charities 2.1M + Living Labs |
| `orchestrator-next-steps.cjs` | Añadir workstream `GAIA_METAPLATFORM_INTEGRATION` (14 tareas) |
| `brief-detector-recommender` | Detectar gaps: distribution_engine, gaia_passport, nine_capitals, gaia_fund, trust_certification, university_curriculum, strategic_alliances |

### Estado Store (Extender `src/core/state/`)
```typescript
interface GaiaMetaplatformState {
  distributionEngine: DistributionRule;
  gaiaPassports: Map<string, GaiaPassport>;
  nineCapitals: Map<string, NineCapitalBalance>;
  gaiaFund: GaiaFund;
  trustCertifications: Map<string, TrustCertification>;
  universityCurriculum: FacultyModule[];
  strategicAlliances: StrategicAllianceAxis[];
  regenerationPanels: {
    individual: Map<string, IndividualPanel>;
    organizational: Map<string, OrganizationalPanel>;
  };
}
```

---

## 📋 PLAN DE IMPLEMENTACIÓN (Critical Path: 8 semanas)

### Semana 1-2: Core Económico + Identidad (Fundación)
- [ ] `distribution_engine.ts` + Commonomics 50/30/10/5 + tests
- [ ] `gaia_passport.ts` + ERC-8004 RAO + DID:hsccsg + cultural profiles visas
- [ ] `nine_capitals.ts` + mapeo 9↔8+1 + NetBenefit integration
- [ ] `gaia_fund.ts` + Fondo Madre + Impacto + Bioregionales + reglas excedentes
- [ ] Store extensions + persistence IndexedDB
- **Entregable:** Motor distribución funcional, pasaporte soberano, 9 capitales, fondo fusionado

### Semana 3: Certificación Confianza + Verificación Triaxial
- [ ] `trust_certification.ts` + 4 niveles → triaxial mapping
- [ ] Extender `boundaries.ts` con `trustTier` + `gaiaPassport` validation
- [ ] Extender `coworkers.ts` con `GaiaAmbassador` + `GaiaCertifier` roles
- [ ] UI: `/trust-certification`, `/gaia-passport`
- **Entregable:** Certificación operativa, verificación triaxial integrada

### Semana 4: Universidad + Alianzas + Paneles
- [ ] `university_curriculum.ts` + 16 facultades → 13+3 pilares + 4 niveles académicos
- [ ] `strategic_alliances.ts` + 4 ejes + socios + living labs
- [ ] `regeneration_panels.ts` + individual (7 áreas) + organizacional (RRHH + procesos)
- [ ] UI: `/university`, `/alliances`, `/regeneration-panels`, `/nine-capitals`
- **Entregable:** Currículo mapeado, alianzas operativas, paneles regeneración

### Semana 5: Marketplace Federado + App Federation
- [ ] `marketplace_federation.ts` (desde gaia_mycelium_integration) + Commonomics commission
- [ ] `lib/gaia_sync.ts` + `lib/trust_bridge.ts` + `lib/ai_matching_bridge.ts`
- [ ] Extender `valueflows.ts` con `referralSplit`, `gaiaMarketCommission`, `trustLevel`, `vcCredential`
- [ ] Extender `cds.ts` con `gaiaDAOProposalId`, `vcSignature`, `mjGateVeto`
- [ ] Extender `automaton.ts` con `trustFirstMode`, `lucidezVerifier`, `gaiaMatchingEndpoint`
- **Entregable:** Marketplace federado, trust bridge, AI matching, governance sync

### Semana 6: Infraestructura + Data Trust + Interoperabilidad
- [ ] `discovery_adapter.ts` (neko ↔ Discovery Layer purgado → Boundaries CEL)
- [ ] `impact_bridge.ts` (CAC/PGS ↔ Gaia Score multidimensional)
- [ ] `data_trust_adapter.ts` → RAO-governed ValueFlows Commons (offline-first)
- [ ] Boundaries CEL allowlist para Project Weave protocols (translation layer)
- [ ] UI: `/data-trust`, `/interoperability`
- **Entregable:** Infra conectada, data trust offline-first, protocolos interoperables

### Semana 7: Ejes Investigación + Living Labs + Juventud
- [ ] Integrar 4 Ejes (Agua/Infra, Agrotech/IA, Longevidad/Salud, Ciencias Sociales)
- [ ] `living_labs.ts` + Glücksdorf + Vision Erde + BioHábitats
- [ ] `youth_program.ts` + Programa Juvenil 13-39 + tribal gatherings track
- [ ] Wiki Charities 2.1M ONGs → `meta_crisis_communities.ts` import pipeline
- **Entregable:** Ejes operativos, living labs conectados, juventud integrada, dataset ONGs

### Semana 8: Integración Final + Tests E2E + Deploy
- [ ] Integrar todo en `/gaia` hub screen + nuevo routing
- [ ] Tests E2E: passport → distribution → fund → trust → university → alliances → panels → marketplace
- [ ] Documentación: `gaia_metaplatform_integration.md` actualizada + briefs
- [ ] Deploy Vercel + verificar `/gaia` live
- **Entregable:** Sistema completo integrado, deploy production, docs actualizadas

---

## 🎯 BRIEFS OPERATIVOS A CREAR (para brief-detector-recommender)

| Brief ID | Título | Perfil Objetivo |
|----------|--------|-----------------|
| BF-121 | `BRIEF_DISTRIBUTION_ENGINE_COMMONOMICS` | Backend/Economics |
| BF-122 | `BRIEF_GAIA_PASSPORT_OFFLINE_FIRST` | Identity/Security |
| BF-123 | `BRIEF_NINE_CAPITALS_NETBENEFIT_MAPPING` | Data/Economics |
| BF-124 | `BRIEF_GAIA_FUND_FUSION_SOLARPUNK_IMPACT` | Finance/Governance |
| BF-125 | `BRIEF_TRUST_CERTIFICATION_TRIAXIAL` | Governance/Protocol |
| BF-126 | `BRIEF_UNIVERSITY_CURRICULUM_16_TO_13_PLUS_3` | Education/Architecture |
| BF-127 | `BRIEF_STRATEGIC_ALLIANCES_4_AXES_LIVING_LABS` | Research/Partnerships |
| BF-128 | `BRIEF_REGENERATION_PANELS_INDIVIDUAL_ORG` | UX/Metrics |
| BF-129 | `BRIEF_MARKETPLACE_FEDERATION_COMMONOMICS` | Marketplace/Economics |
| BF-130 | `BRIEF_DATA_TRUST_RAO_GOVERNED_OFFLINE` | Data/Protocol |
| BF-131 | `BRIEF_LIVING_LABS_GLUCKSDORF_VISION_ERDE` | Research/Field |
| BF-132 | `BRIEF_YOUTH_PROGRAM_13_39_TRIBAL_GATHERINGS` | Community/Youth |
| BF-133 | `BRIEF_WIKI_CHARITIES_2_1M_IMPORT` | Data/Engineering |
| BF-134 | `BRIEF_GAIA_METAPLATFORM_ONBOARDING_WIZARD` | Onboarding/All |

---

## 🔗 VASOS COMUNICANTES ACTUALIZADOS (Gaia Meta-Plataforma → HSCSG)

| Vaso | Gaia Meta-Plataforma | HSCSG v15 OS | Estado |
|------|---------------------|--------------|--------|
| 1 | **Gobernanza: Sync** | Gaia DAO ↔ CDS + Autómata MJ Gate | 🟡 Adaptar (triaxial) |
| 2 | **Confianza: Bridge** | Trust Certification (4 niveles) + VCs ↔ RAO + MJ + Cross-check | 🟡 Adaptar |
| 3 | **Infra: Connect** | Discovery Layer + Project Weave ↔ neko-rooms + Boundaries CEL | 🟡 Adaptar (Discovery purgado) |
| 4 | **Intel: Match** | AI Matching + Recommendation Engine ↔ Autómata E²R + CoachFAB | ✅ Take |
| 5 | **App: Federate** | Mercado Gaia + Escuela Vida + Passport ↔ CaaS-BM + Skills + CoachFAB | 🟡 Adaptar (Commonomics) |
| 6 | **Eco: Sync** | Fondo Impacto + 7 Sistemas + 9 Capitales ↔ Fondo Solarpunk + Base Material | ✅ Take |
| 7 | **Impact: Bridge** | Paneles Regeneración + Certificación + CoRe ↔ CAC/PGS + AUT + NetBenefit | ✅ Take |
| 8 | **Ritual: Sync** | Programa Juvenil + Ferias + Circuitos Itinerantes ↔ Encuentros Tribales + Feria Conuquera | 🆕 Nuevo |
| 9 | **Data: Trust** | Fideicomiso Datos Comunitario ↔ RAO-governed ValueFlows Commons | 🆕 Nuevo |
| 10 | **Learning: Sync** | UniDiversidad 16 Facultades ↔ 13+3 Pilares + Currículo HSCSG | 🆕 Nuevo |

---

## 📊 MÉTRICAS DE ÉXITO

| Métrica | Target Fase 1 (8 sem) | Target Fase 2 (16 sem) | Target Fase 3 (24 sem) | Medición |
|---------|----------------------|------------------------|------------------------|----------|
| Pasaportes Gaia activos | 100+ | 1,000+ | 10,000+ | `gaia_passport.ts` registry |
| Distribución Commonomics | 100% transacciones | 100% + excedentes → Madre | Automático + auditado | `distribution_engine.ts` logs |
| 9 Capitales trackeados | 100+ individuos | 500+ organizaciones | 5,000+ nodos | `nine_capitals.ts` balances |
| Certificaciones confianza | 50 nivel 2+ | 200 nivel 3+ | 500 nivel 4 | `trust_certification.ts` registry |
| Fondos Gaia operativos | Madre + Impacto | + 5 Bioregionales | + 20 Bioregionales | `gaia_fund.ts` accounts |
| Facultades operativas | 4 facultades core | 10 facultades | 16 facultades completas | `university_curriculum.ts` |
| Alianzas estratégicas | 2 ejes activos | 4 ejes + 10 living labs | Red global living labs | `strategic_alliances.ts` |
| Paneles regeneración | 100 individuales + 10 orgs | 500 + 50 | 2,000 + 200 | `regeneration_panels.ts` |
| Wiki Charities importado | 100K ONGs limpias | 1M ONGs normalizadas | 2.1M completas | `meta_crisis_communities.ts` |
| Programa juvenil | 1 circuito piloto | 4 circuitos/año | 12 circuitos/año global | `youth_program.ts` + `tribal_gatherings.ts` |

---

## 🚀 PRÓXIMOS PASOS INMEDIATOS

1. **Crear 14 briefs operativos** (BF-121 a BF-134) via `brief-detector-recommender`
2. **Añadir workstream `GAIA_METAPLATFORM_INTEGRATION`** al orchestrator (14 tareas)
3. **Implementar Semana 1-2**: `distribution_engine`, `gaia_passport`, `nine_capitals`, `gaia_fund`
4. **Actualizar `BRIEFS_INDEX.md`** con 14 nuevos briefs + fuente #23
5. **Crear pantalla `/gaia`** como hub de integración (icon: `Globe` o `Users`)
6. **Push a GitHub** + deploy Vercel + verificar `/gaia` live
7. **Formalizar Acta RAO Bilateral** con Gaia Meta-Plataforma (paralelo a Ecoaldea Raíces)

---

## 🔗 REFERENCIAS CRUZADAS

| Documento | Sección Relevante |
|-----------|-------------------|
| `docs/gaia_metaplatform_backup.md` | Backup completo documento maestro |
| `docs/gaia_mycelium_integration.md` | Integración previa Alianza Gaia-Mycelium (20 isomorfismos) |
| `docs/gaia_mycelium_backup.md` | Backup quirúrgico documento original Alianza |
| `docs/COLABORACION_RECIPROCA_HSCSG_ECALDEA_RAICES.md` | Colaboración Ecoaldea Raíces (modelo para este doc) |
| `docs/hscsg_definition.md` | Cuaternidad, 5 planos, Leyes MJ, Autómata, Base Material |
| `docs/MATEMAS_GRIMORIO.md` | 20 Matemas + subhashitas (para rituales/actas Gaia) |
| `src/core/lib/valueDual.ts` | Lógica anfibia — **extender con Commonomics + 9 Capitales** |
| `src/core/lib/boundaries.ts` | `governAction` — **extender con trustTier + gaiaPassport** |
| `src/core/state/coworkers.ts` | Standing roles — **añadir GaiaAmbassador, GaiaCertifier, GaiaFacilitator** |
| `scripts/orchestrator-next-steps.cjs` | Workstream `GAIA_INTEGRATION` existente + **nuevo `GAIA_METAPLATFORM_INTEGRATION`** |

---

**Nota:** Esta integración **complementa y expande** la integración previa `gaia_mycelium_integration.md` (Alianza Gaia-Mycelium). El documento maestro MetaPlataforma Gaia es la versión expandida y detallada de esa alianza, incorporando: Escuela de la Vida, 16 Facultades, Commonomics, Tokenómica CoRe, Confederación Gaia/GEN, Fideicomiso Datos, y Hoja de Ruta 2027+. La integración operativa unifica ambos en un solo workstream expandido.

*Documento generado: 2026-09-04 | Ciclo: Asimilación Gaia Meta-Plataforma | Skills: hscsg-next-steps-orchestrator + brief-detector-recommender + hscsg-gaia-mycelium-integration*