# HSCSG v15 OS — Documentación Técnica Centralizada

**Versión:** 2.0  
**Fecha:** Septiembre 2026  
**Estado:** Documentación viva — actualizada con cada assimilación

---

## 📋 Índice de Navegación

Esta documentación organiza el conocimiento técnico de **HSCSG v15 OS** (Holosociocibersimbiogénesis) en una estructura jerárquica navegable. Cada página enlaza a su archivo `.md` correspondiente en `/docs`.

---

## 1. VISIÓN GENERAL

| Página | Archivo | Descripción |
|--------|---------|-------------|
| **Overview: HSCSG v15 OS** | [`hscsg_definition.md`](hscsg_definition.md) | Introducción de alto nivel: qué es, misión civilizacional, Materialismo Jerárquico (MJ), Tres Leyes, organización del sistema |
| **Filosofía y Marco Civilizacional** | [`hscsg_mj_synthesis.md`](hscsg_mj_synthesis.md) | Materialismo Jerárquico profundo, Ley I/II/III, Cuaternidad Soberana, Principio Anfibio, GaiaUnion meta-arquitectura biológica |
| **Primeros Pasos: Setup, Build, Deploy** | [`README.md`](../README.md) | Instalación, Vite dev server, build producción, deploy Vercel/Netlify, package.json scripts, Node.js, SPA routing, vitest |

---

## 2. ARQUITECTURA NÚCLEO

| Página | Archivo | Descripción |
|--------|---------|-------------|
| **Core Architecture** | *Ver sub-secciones* | React/TypeScript SPA, Zustand store, patrón módulo, offline-first, relación lib/state/screens |
| **Global State Store (useAppStore)** | *En código: `src/core/state/store.ts`* | AppState interface, slices (BaseMaterial, CACVectors, ZNUState, IntegralState), actions (setLucidez, updateBase, runCaasPayout, proposeAction), persist/partialize localStorage, seed initialization |
| **UI Shell: Layout, Navigation, i18n** | *En código: `src/app/`* | App.tsx 46+ rutas, Layout/Aside/Header, NAV_ITEMS, Lucidez Mode (data-lucidez), CSS design system, componentes compartidos (Card, Stat, Bar, Badge), i18n ES/EN/PT |
| **Patrón de Assimilation de Módulos** | [`hscsg-repo-assimilation`](skills/hscsg/hscsg-repo-assimilation/) | Pipeline 4 fases (identify→filter→map→index), scaffold canónico (screen/lib/state/docs), mapeo isomorfismo Leyes MJ, `fuentes_indice.json` (114 fuentes) |
| **Métricas y Librería de Cálculo** | *En código: `src/core/lib/metrics.ts`* | autFromCAC, pgsLM, survivalCredit, znuEligible/znuEmission, demurrage, ics, population — alimentan store actions y loopEngine |
| **Sistema Alráico y loopEngine** | [`SISTEMA_ALRAICO_BACKUP.md`](SISTEMA_ALRAICO_BACKUP.md) | Kernel tick-based (G1-CARMIS), 6 loops, γ-CARMIS reconfiguración, detección resonancias, Simulador screen |
| **loopEngine: Tick Execution y γ-CARMIS** | *En código: `src/core/lib/loopEngine.ts`* | runAlraicoTick, runAlraicoSimulation, detectOverloads (lucidez/symbiosky/agentMesh/proofOfResponse/regen), simulateReconfig, 6 maintenance loops, detectResonances, LoopEngineConfig, Simulador.tsx triaxial (Ω, s, κ) |
| **Skills Framework y Orquestador** | [`hscsg-orquestador-skills`](skills/hscsg/hscsg-orquestador-skills/) | Master router, skill loading, vasos comunicantes cross-citation, sync_docs.sh, hscsg-sistema-alraico, hscsg-coeficiente-autonomia, CSV taxonomías, canvas scripts |

---

## 3. GOBERNANZA Y TOMA DE DECISIONES

| Página | Archivo | Descripción |
|--------|---------|-------------|
| **Governance Overview** | *Ver sub-secciones* | Cómo se deciden, ratifican, ejecutan decisiones: Integral Loop, AuroraGov, Symbiosky, Kleros, democracia líquida |
| **The Integral Loop (CDS→OAD→COS→ITC→FRS)** | *En código: `src/core/lib/integral.ts`* | Ciclo 5 etapas: raiseIssue, validateProposalScore (Shivarthu), ratifyDecision, certifyDesign (ecoScore), logLabor, awardCredits+decay, ingestSignal/recommend, systemHealth, applyDecision, Integral.tsx |
| **Symbiosky: Conviction Voting y Credibilidad** | *En código: `src/core/lib/symbiosky.ts`* | Commit-reveal voting (castCommit/revealVote), weightedConviction, computeReward, ConvictionLock, inactivity decay, anti-whale illiquidity, Credibilidad.tsx |
| **Justicia, Delegación y Democracia** | *En código: `src/core/lib/kleros.ts`, `delegation.ts`* | Kleros (openDispute, addEvidence, castVote, resolveDispute, Fact Bands), AuroraGov (delegatePower, revokeDelegation, liquid democracy tree), Democracia.tsx (DPoS expertise), Vecinal (gobernanza vecinal commit-reveal) |
| **Pipeline y Matchmaker** | *En código: `src/core/lib/pipeline.ts`* | Orchestrador anidado: computeCapabilities, collectNeeds, Matchmaker (35% AUT + 30% credibilidad + 20% expertise + 15% learning), dispatchMatch, autoAdvisory, routeFeedback (FRS), pipeDecay (ZNU anti-acumulación), pipelineHealth, Pipeline.tsx, connector.ts |

---

## 4. ECONOMÍA POST-MONETARIA

| Página | Archivo | Descripción |
|--------|---------|-------------|
| **Post-Monetary Economy Overview** | *Ver sub-secciones* | ZNU, CaaS tiers, Trustlines, Vesting, Copiosis Net Benefit, USDGLO oracle, arquitectura Anfibia (ZNU↔USD) |
| **ZNU Currency: Emisión, Demurrage, Vesting** | *En código: `src/core/lib/valueDual.ts`, `vesting.ts`* | znuEligible/znuEmission (umbrales AUT), demurrage 5%/28-días (znuDecayOnBalance), valueDual.ts (displayValue, NodeMode, priceParity oracle), Vesting (BerryInvestor isomorf, totalUnlocked, releasable, setBeneficiary, canRenounce), ZNU.tsx, Vesting.tsx |
| **CaaS: Tiers y Revenue** | *En código: `src/core/lib/caas.ts`* | 5 tiers (Visitante→Custodio), tierEligible (AUT/CDS), streamMJStatus (Ley compliance revenue), revenueShare/runCaasPayout, CaaS.tsx, CaaS Market Fit EBD, USDC→ZNU via priceParity → Fondo Solarpunk |
| **Trustlines, Crédito Soberano, USDGLO** | *En código: `trustlines.ts`, `sovereignCredit.ts`, `usdglo.ts`* | Trustlines bilateral (openTrustline, increaseDebt, debitTransfer, getDebt symmetry), Sovereign Credit (attestation scoring, exportAttestation DeFi/NEAR), USDGLO ReFi oracle (canMint, mintHeadroom, isSovereign), Trustlines.tsx, SoberaniaCredito.tsx |

---

## 5. AGENTES AUTÓNOMOS Y MESH DE CÓMPUTO

| Página | Archivo | Descripción |
|--------|---------|-------------|
| **Autonomous Agents Overview** | *Ver sub-secciones* | Autómata Soberano, Orquestación control plane, AgentMesh/Buzz, Nostr relay, OO-Agents, Boundaries gateway, Coworkers roster |
| **Autómata Soberano y MJ Gate** | *En código: `src/core/lib/automaton.ts`, `orchestration.ts`* | survivalTier (AUT: high/normal/low_material/critical/dormant), evaluateAction (MJ Gate → evaluateMJGate), soulDrift (Ley III float), spawnChild, runHeartbeat, evaluateMJGate (Ley I/II/III enforcement), budgetStatus, nextHeartbeat, AgentNode/TaskNode/AuditEntry, Automata.tsx, Automat.tsx |
| **AgentMesh, Nostr Relay, Proof of Response** | *En código: `agentMesh.ts`, `nostrRelay.ts`, `proofOfResponse.ts`, `nooa.ts`* | Agent struct, spawnAgent, shareCompute, requestCompute, remoteResurrect (Buzz Mesh), Nostr buildEvent/verifyEventShape/queryLocal (NIP-50), Proof of Response (issueRequest, respond, proveFailure, isSatisfied — NEAR AI), OO-Agents (visibleMethods, detectBlindAgents, reconfigBlindAgents, meshAutonomy), Nostr.tsx, Agentes.tsx, OoAgents.tsx |
| **Boundaries Policy Gateway y Coworkers** | *En código: `boundaries.ts`* | OpenBot-inspired: governAction, evaluateBoundary, fail-closed CEL-like rules, dry-run vs enforce, repeat detector, human handover, Boundaries.tsx (policy admin UI), Coworkers.tsx (agent roster, standing roles, channels), AG-UI protocol skill |

---

## 6. MÓDULOS COMUNITARIOS Y CAPA SOCIAL

| Página | Archivo | Descripción |
|--------|---------|-------------|
| **Community Modules Overview** | *Ver sub-secciones* | Colectivo/Colony, Células, Círculos, Solarpunk gift economy, Tekitl projects, Regen/Vecinal, Educación, Civilizaciones/Mundus/Life |
| **Organización Colectiva: Colony, Células, Círculos** | *En código: `colony.ts`, `celulas.ts`* | Colony domain tree (addDomain, addReputation, movePot, DomainKind hierarchy), Freedom Cells (CELULA_PRINCIPIOS, CELULA_RECOMENDACIONES, escala fractal 8→64→512→4096), Circulos.tsx (NextStageBanner/connector.ts stage seeding), Colectivo.tsx |
| **Solarpunk Gift Economy, Tekitl, Regen** | *En código: `solarpunk.ts`, `tekitl.ts`, `regen.ts`, `vecinal.ts`* | matchOffersNeeds, trustScore Web of Trust, postMonetaryIndex, evaluateSanctuary (Ley I gate), Tekitl (createProject, FSM stages, addRole, applyToRole, logHours, mintCoins, declareTalent), EcoTech catalog (addEcoTech, avgSaving), Vecinal governance, Solarpunk.tsx, Tekitl.tsx, Regen.tsx, Vecinal.tsx |
| **Educación, Agencia, Content Creation** | *En código: `educaas.ts`, `education.ts`, `agencia.ts`, `content.ts`* | EduCaaS (priceLabel, isActive amphibious), course/enrollment/certificate lifecycle, BrandDNA 12 secciones, OFFER_LADDER 5M escalera, ICP awareness levels, reversePlan, idea capture→brandFit→human gate→angles→news rolling, Educacion.tsx, Agencia.tsx, Contenido.tsx |
| **Mundus, Life, Civilizaciones** | *En código: `mundus.ts`, `life.ts`, `civilizaciones.ts`* | Mundus (makeMundusState, MUNDUS_PILLARS→IDETRA, Blue Circle, Circular Exchange), Life personal organizer (addGoal, matrixCalculation, znuProjected, GoalType/Effort/Area), Civilizaciones (catálogo civilizaciones externas), Mundus.tsx, Life.tsx, Civilizaciones.tsx |

---

## 7. SOBERANÍA Y VERIFICACIÓN

| Página | Archivo | Descripción |
|--------|---------|-------------|
| **Sovereignty Overview** | *Ver sub-secciones* | 13 Pillars × 7 Layers matrix, Proof of Response protocol, Evidence Model, NEAR/Buzz integración verificación descentralizada |
| **13 Pillars × 7 Layers** | *En código + docs* | Matriz diagnóstico soberanía: capas (Identidad, Computo, Datos, Economía, Gobernanza, Social, Física) × pilares (Autonomía, Resiliencia, Verificabilidad, Interoperabilidad, Composibilidad, Regeneración, Soberanía) |
| **Proof of Response & Evidence Model** | *En código: `proofOfResponse.ts`, `kleros.ts`* | Verificación NEAR AI, Fact Bands (evidencia), attestation bridge, integración Buzz Mesh |

---

## 8. DOCUMENTOS ESTRATÉGICOS Y COLABORACIONES

| Documento | Descripción |
|-----------|-------------|
| [`Pitch_Pepe_Happpy_Sovereign_Entrepreneur_Lab.md`](Pitch_Pepe_Happpy_Sovereign_Entrepreneur_Lab.md) | Pitch 10 slides: federación Happy (Pepe Sevilla) × HSCSG v15 OS (Isaac Ko) |
| [`HAPPPY_Sovereign_Entrepreneur_Lab_Propuesta_Estrategica.md`](HAPPPY_Sovereign_Entrepreneur_Lab_Propuesta_Estrategica.md) | Propuesta completa 15 secciones: piloto 90 días, 50 personas, $75K, KPIs, modelos post-piloto |
| [`HOMOLOGACION_TERMINOS_PEPE_SEVILLA_HSCSG.md`](HOMOLOGACION_TERMINOS_PEPE_SEVILLA_HSCSG.md) | Mapeo terminología: DeseOS/ContenOS ↔ HSCSG v15 OS |
| [`LEGAL_PROTECTION_FINANCIAL_RETURN.md`](LEGAL_PROTECTION_FINANCIAL_RETURN.md) | Protección legal y retorno financiero para colaboraciones |
| [`LEGAL_NOTICE.md`](LEGAL_NOTICE.md) | Aviso legal del repositorio |
| [`AREX_SKILL_SYNERGY_PLAN.md`](AREX_SKILL_SYNERGY_PLAN.md) | Plan de sinergia con [AREX-Skill](https://github.com/VectorSpaceLab/AREX-Skill) |
| [`COLABORACION_RECIPROCA_HSCSG_ECALDEA_RAICES.md`](COLABORACION_RECIPROCA_HSCSG_ECALDEA_RAICES.md) | Colaboración tripartita HSCSG × EcAldea × Raíces |
| [`COLABORACION_TRIPARTITA_HSCSG_GAIA_ECALDEA.md`](COLABORACION_TRIPARTITA_HSCSG_GAIA_ECALDEA.md) | Colaboración tripartita HSCSG × Gaia × EcAldea |

---

## 9. ASIMILACIONES DE REPOSITORIOS EXTERNOS (skills/hscsg/hscsg-repo-assimilation/references/)

| Repositorio | Backup | Integración | Estado |
|-------------|--------|-------------|--------|
| **AREX-Skill** | - | [`arex-integration-patterns.md`](skills/hscsg/hscsg-repo-assimilation/references/arex-integration-patterns.md) | 🔄 En análisis |
| **Breadchain** | Múltiples *_backup.md | Múltiples *_integration.md | ✅ Asimilado |
| **Copiosis** | `copiosis_backup.md` | `copiosis_integration.md` | ✅ Asimilado |
| **Gaia Commons** | `gaia_*_backup.md` | `gaia_*_integration.md` | ✅ Asimilado |
| **OpenCivics** | `opencivics_*_backup.md` | `opencivics_*_integration.md` | ✅ Asimilado |
| **OpenExecutive** | `openexecutive_backup.md` | `openexecutive_integration.md` | ✅ Asimilado |
| **OneCommunity** | `onecommunity_global_backup_*.md` | - | ✅ Asimilado |
| **EcoAldea Monte** | `ecoaldea_monte_backup.md` | `ecoaldea_monte_integration.md` | ✅ Asimilado |
| **Yoka/Fabio** | `filosofia_propria_yoka_backup.md` | `el_enlace_yoka_fabio_backup.md` | ✅ Asimilado |
| **Biotesis Yoka** | `biotesis_yoka_corpus_nuclear_backup.md` | `biotesis_yoka_integration.md` | ✅ Asimilado |
| **Shivarthu** | `shivarthu_backup.md` | `shivarthu_integration.md` | ✅ Asimilado |
| **AuroraGov** | `aurora_gov_backup.md` | `aurora_gov_integration.md` | ✅ Asimilado |
| **Kleros** | `kleros-court_backup.md` | `kleros_integration.md` | ✅ Asimilado |
| **Trustlines** | `trustlines_backup.md` | `trustlines_integration.md` | ✅ Asimilado |
| **Colony** | `colony*_backup.md` | `colony_integration.md` | ✅ Asimilado |
| **Células** | `celulas_backup.md` | `celulas_integration.md` | ✅ Asimilado |
| **Solarpunk** | `solarpunk_*_backup.md` | `solarpunk_integration.md` | ✅ Asimilado |
| **Tekitl** | `tekitl_backup.md` | `tekitl_integration.md` | ✅ Asimilado |
| **Regen** | `regen_integration.md` | - | ✅ Asimilado |
| **Vecinal** | `vecinal_integration.md` | - | ✅ Asimilado |
| **DeseOS** | `deseos_backup.md` | `deseos_integration.md` | ✅ Asimilado (Pepe Sevilla) |
| **ContentCreation** | `contentcreation_backup.md` | `contentcreation_integration.md` | ✅ Asimilado |
| **Compai CRM** | `compai_crm_backup.md` | `compai_crm_integration.md` | ✅ Asimilado |
| **Automaton** | `automaton_*_backup.md` | `automaton_integration.md` | ✅ Asimilado |
| **CaaS** | `CaaS_backup_original.md` | `CaaS_integration.md` | ✅ Asimilado |
| **Awesome OPC** | `awesome_opc_backup.md` | `awesome_opc_integration.md` | ✅ Asimilado |
| **BerryVesting** | `berryvesting_backup.md` | `berryvesting_integration.md` | ✅ Asimilado |
| **GaiaUnion** | `gaiaunion_backup.md` | `gaiaunion_integration.md` | ✅ Asimilado |
| **Metacrisis** | `metacrisis_backup.md` | `metacrisis_integration.md` | ✅ Asimilado |
| **OPC Source** | `opc_source_opc_integration.md` | - | ✅ Asimilado |
| **Near** | - | - | 📁 Carpeta `/docs/near/` |
| **Buzz** | - | - | 📁 Carpeta `/docs/buzz/` |
| **Urbanika** | - | - | 📁 Carpeta `/docs/urbanika/` |
| **Didacta** | - | - | 📁 Carpeta `/docs/didacta/` |
| **Bots** | - | - | 📁 Carpeta `/docs/bots/` |
| **Conversations** | - | - | 📁 Carpeta `/docs/conversations/` |
| **Research Output** | - | - | 📁 Carpeta `/docs/research_output/` |
| **Transparencia Radical** | - | - | 📁 Carpeta `/docs/Transparencia Radical y Mayeutica/` |

---

## 10. ARCHIVOS DE ÍNDICE Y REFERENCIA

| Archivo | Propósito |
|---------|-----------|
| [`fuentes_indice.json`](fuentes_indice.json) | Registro de 114 fuentes externas asimiladas (metadatos, hash, fecha, estado) |
| [`BRIEFS_INDEX.md`](BRIEFS_INDEX.md) | Índice maestro de todos los briefs de perfiles (autodidactas, generalistas, interdisciplinares, polímatas, profesionales, transdisciplinares) |
| [`BRIEF_EXHAUSTIVO_HSCSG_COSATECA_OS.md`](BRIEF_EXHAUSTIVO_HSCSG_COSATECA_OS.md) | Brief exhaustivo del proyecto completo |
| [`BRIEF_ONBOARDING_CONSTRUCTOR.md`](BRIEF_ONBOARDING_CONSTRUCTOR.md) | Onboarding para constructores/desarrolladores |
| [`INDICE_COMPLETO_BACKUPS.md`](INDICE_COMPLETO_BACKUPS.md) | Índice de todos los archivos *_backup.md |
| [`README_BACKUP_2026-09-10.md`](README_BACKUP_2026-09-10.md) | Backup del README anterior |
| [`README.md`](../README.md) | README principal del repo |

---

## 11. NAVEGACIÓN RÁPIDA POR ARCHIVOS CLAVE DEL CÓDIGO

| Módulo | Archivo Principal | Tests | Screen |
|--------|-------------------|-------|--------|
| **Store Global** | `src/core/state/store.ts` | - | - |
| **Métricas** | `src/core/lib/metrics.ts` | `metrics.test.ts` | - |
| **LoopEngine** | `src/core/lib/loopEngine.ts` | `loopEngine.test.ts` | `Simulador.tsx` |
| **Integral Loop** | `src/core/lib/integral.ts` | - | `Integral.tsx` |
| **Symbiosky** | `src/core/lib/symbiosky.ts` | `symbiosky.test.ts` | `Credibilidad.tsx` |
| **Kleros** | `src/core/lib/kleros.ts` | - | - |
| **Delegation** | `src/core/lib/delegation.ts` | - | `Democracia.tsx` |
| **Pipeline** | `src/core/lib/pipeline.ts` | - | `Pipeline.tsx` |
| **Automaton** | `src/core/lib/automaton.ts` | - | `Automata.tsx`, `Automat.tsx` |
| **Orchestration** | `src/core/lib/orchestration.ts` | - | - |
| **AgentMesh** | `src/core/state/agentMesh.ts` | - | `Agentes.tsx` |
| **Nostr Relay** | `src/core/lib/nostrRelay.ts` | - | `Nostr.tsx` |
| **Proof of Response** | `src/core/state/proofOfResponse.ts` | - | - |
| **OO-Agents (NOOA)** | `src/core/state/nooa.ts` | - | `OoAgents.tsx` |
| **Boundaries** | `src/core/lib/boundaries.ts` | - | `Boundaries.tsx` |
| **Coworkers** | - | - | `Coworkers.tsx` |
| **Colony** | `src/core/lib/colony.ts` | - | `Colectivo.tsx` |
| **Células** | `src/core/lib/celulas.ts` | - | - |
| **Círculos** | - | - | `Circulos.tsx` |
| **Solarpunk** | `src/core/lib/solarpunk.ts` | - | `Solarpunk.tsx` |
| **Tekitl** | `src/core/lib/tekitl.ts` | - | `Tekitl.tsx` |
| **Regen** | `src/core/lib/regen.ts` | - | `Regen.tsx` |
| **Vecinal** | `src/core/lib/vecinal.ts` | - | `Vecinal.tsx` |
| **EduCaaS** | `src/core/lib/educaas.ts` | - | `Educacion.tsx` |
| **Education** | `src/core/lib/education.ts` | - | - |
| **Agencia** | `src/core/lib/agencia.ts` | - | `Agencia.tsx` |
| **Content** | `src/core/lib/content.ts` | - | `Contenido.tsx` |
| **Mundus** | `src/core/lib/mundus.ts` | - | `Mundus.tsx` |
| **Life** | `src/core/lib/life.ts` | - | `Life.tsx` |
| **Civilizaciones** | `src/core/lib/civilizaciones.ts` | - | `Civilizaciones.tsx` |
| **ZNU/Vesting** | `src/core/lib/valueDual.ts`, `vesting.ts` | - | `ZNU.tsx`, `Vesting.tsx` |
| **CaaS** | `src/core/lib/caas.ts` | - | `CaaS.tsx` |
| **Trustlines** | `src/core/lib/trustlines.ts` | - | `Trustlines.tsx` |
| **Sovereign Credit** | `src/core/lib/sovereignCredit.ts` | - | `SoberaniaCredito.tsx` |
| **USDGLO** | `src/core/lib/usdglo.ts` | - | - |

---

## 12. HERRAMIENTAS DE DESARROLLO

| Herramienta | Comando | Propósito |
|-------------|---------|-----------|
| **Dev Server** | `npm run dev` | Vite dev server (localhost:5173) |
| **Build** | `npm run build` | Build producción → `dist/` |
| **Preview** | `npm run preview` | Preview build local |
| **Test** | `npm run test` | Vitest (unit + integration) |
| **Lint** | `npm run lint` | ESLint |
| **Type Check** | `npm run typecheck` | TypeScript strict mode |
| **Deploy Vercel** | `vercel --prod` | Deploy a Vercel |
| **Deploy Netlify** | `netlify deploy --prod` | Deploy a Netlify |

---

## 13. CONVENCIONES DE DOCUMENTACIÓN

### Estructura de Archivos de Assimilation
```
/docs/
├── <repo>_backup.md          # Contenido original extraído (solo local)
├── <repo>_integration.md     # Análisis + mapeo isomorfismos + plan integración
└── referencias/              # En skills/hscsg/hscsg-repo-assimilation/references/
```

### Principios
1. **Spanish-first**: Toda documentación en español (requisito del usuario)
2. **Backup local only**: `_backup.md` y `CHANGELOG` sensibles → solo local (`~`, `~/Documents`, `~/Desktop`), **nunca a GitHub**
3. **Tipos TypeScript**: Nunca duplicar tipos entre `lib/` y `state/` — re-export desde `lib/`
4. **Pantallas nuevas**: Siempre `Aside.tsx` + `i18n` + `import lucide` en Aside
5. **hscsg_definition.md**: Debe incorporar formalismo matemático + mantras líricos + subhashitas + retórica poética (estilo Tractatus Wittgenstein)

---

## 14. ENLACES EXTERNOS CLAVE

| Recurso | URL |
|---------|-----|
| **Repo GitHub** | https://github.com/Isaacko0/HSCSG_v15_OS |
| **Demo ContenOS (Pepe Sevilla)** | https://demo.contento.pro/ |
| **AREX-Skill (VectorSpaceLab)** | https://github.com/VectorSpaceLab/AREX-Skill |
| **Hermes Agent Docs** | https://hermes-agent.nousresearch.com/docs |
| **Obsidian Vault (fuente filosófica)** | `H:\Mi unidad\HSCSG Empresa mas memoria\` |

---

---

*Documento generado y mantenido automáticamente. Última actualización: Septiembre 2026.*
*Para modificaciones: editar este archivo o los `.md` correspondientes en `/docs`.*