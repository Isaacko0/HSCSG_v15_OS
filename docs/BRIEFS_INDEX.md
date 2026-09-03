# ÍNDICE DE BRIEFS — Documentos Informativos Operacionales
**HSCSG v15 OS / Cosateca OS / navteka**  
**Versión:** 1.3 | **Fecha:** 2026-09-02 | **Autor:** Isaac Ko (Isaacko0)  
**Repo:** `https://github.com/Isaacko0/HSCSG_v15_OS` | **Deploy:** `https://hscsg-v15-os.vercel.app` (OS) + `navteka.vercel.app` (social)

---

## Propósito
Este índice centraliza **todos los briefs/documentos informativos operacionales** del ecosistema HSCSG, clasificados por dominio, con trazabilidad a fuentes primarias, estado de asimilación y términos equivalentes entre proyectos. Sirve como mapa de navegación para agentes, desarrolladores y stakeholders.

---

## Clasificación por Dominio

### 🏗️ ARQUITECTURA FUNDACIONAL
| # | Documento | Ubicación | Estado | Descripción |
|---|-----------|-----------|--------|-------------|
| **BF-001** | **BRIEF_EXHAUSTIVO_HSCSG_COSATECA_OS.md** | `docs/` | ✅ **ACTUAL** (v1.0) | Documento fundacional completo: visión, epistemología, modelo negocio, arquitectura técnica, métricas, hoja ruta, financiero, doble capa, glosario, mapeo intersecciones |
| **BF-002** | **HSCSG_MJ_SYNTHESIS_v15.md** | `docs/` | ⏳ Pendiente | Síntesis Materialismo Jerárquico + Sistema Alráico (G1-CARMIS) + 3 Leyes MJ ↔ Conway Automaton |
| **BF-003** | **modelo-negocio-objetivos-civilizatorios-hscsg.md** | `docs/` | ⏳ Pendiente | Modelo de negocio v1.8 (Cuaternidad Soberana Ampliada) |
| **BF-004** | **integracion-esg-hscsg.md** | `docs/` | ⏳ Pendiente | Integración ESG/ReFi + dMRV + tokenización impacto |
| **BF-005** | **ALRAICO_8_CARAS.md** | `docs/` | ✅ Asimilado | 8 caras del Sistema Alráico (G1-CARMIS) |

### 🔄 ASIMILACIONES DE REPOS EXTERNOS (Backup + Integration) — 41 Pares = 82 Documentos
| # | Documento | Ubicación | Estado | Repo Origen | Descripción |
|---|-----------|-----------|--------|-------------|-------------|
| **BI-001** | **openbot_backup.md** | `docs/` | ✅ Completo | OpenBot (CopilotKit) | Arquitectura fiel: gateway, policy CEL, coworkers, aislamiento, secretos |
| **BI-002** | **openbot_integration.md** | `docs/` | ✅ Completo | OpenBot (CopilotKit) | Mapeo isomórfico HSCSG↔OpenBot + decisiones take/discard |
| **BI-003** | **copiosis_backup.md** | `docs/` | ✅ Completo | Copiosis v7.1 | Diseño socioeconómico post-dinero (NBR, BN, Jurados, 3 bienes, Estigmergia) |
| **BI-004** | **copiosis_integration.md** | `docs/` | ✅ Completo | Copiosis v7.1 | Homologación NBR→ZNU, BN→NetBenefit, Jurados→CDS_Jurados, 3 bienes→goodType |
| **BI-005** | **conway_automaton_backup.md** | `docs/` | ⏳ Pendiente | Conway Research | Automaton: Never harm / Earn existence / Never deceive + Vessel+Talent + E²R |
| **BI-006** | **conway_automaton_integration.md** | `docs/` | ⏳ Pendiente | Conway Research | Isomorfismo Leyes MJ ↔ Automaton + arquitectura Vessel |
| **BI-007** | **onemanco_backup.md** | `docs/` | ✅ **Completo** | OneManCompany (1mancompany) | Vessel, Talent, E²R Tree Search, SSOT, Registry, Talent Market, Multi-agent meetings |
| **BI-008** | **onemanco_integration.md** | `docs/` | ✅ **Completo** | OneManCompany (1mancompany) | Runtime empresarial soberano + coaching 1:1 + PIP rotación + VESSEL/TALENT/E²R |
| **BI-009** | **integral_collective_backup.md** | `docs/` | ⏳ Pendiente | Integral Collective | Loop CDS→OAD→COS→ITC→FRS = arquitectura celular |
| **BI-010** | **integral_collective_integration.md** | `docs/` | ⏳ Pendiente | Integral Collective | Mapeo loop integral → HSCSG bucle 3 |
| **BI-011** | **disco_backup.md** | `docs/` | ⏳ Pendiente | DisCO | 3 flujos ValueFlows, gobernanza consentimiento, transparencia radical |
| **BI-012** | **disco_integration.md** | `docs/` | ⏳ Pendiente | DisCO | Mapeo ValueFlows → HSCSG + gobernanza por consentimiento |
| **BI-013** | **fabs_hip_backup.md** | `docs/` | ⏳ Pendiente | FABSHIP/HUMANIA | Earthship 6 vectores → AUT_*, FabLab, ValueFlows productivos, RBP |
| **BI-014** | **fabs_hip_integration.md** | `docs/` | ⏳ Pendiente | FABSHIP/HUMANIA | Mapeo AUT_* → 12 vectores CAC + RBP → Fondo Solarpunk |
| **BI-015** | **auravana_backup.md** | `docs/` | ⏳ Pendiente | Auravana/OC/TVP/RBE | Horizontes postmonetarios, diseños modulares, bioconstrucción |
| **BI-016** | **auravana_integration.md** | `docs/` | ⏳ Pendiente | Auravana/OC/TVP/RBE | Mapeo diseños modulares → Base Material + Tekitl |
| **BI-017** | **prososocial_backup.md** | `docs/` | ⏳ Pendiente | Prosocial Protocol | Food Web, Needs-Driven Economy, Resource Ecology, PBA |
| **BI-018** | **prososocial_integration.md** | `docs/` | ⏳ Pendiente | Prosocial Protocol | Mapeo Food Web → Base Material + ValueFlows |
| **BI-019** | **8capital_backup.md** | `docs/` | ⏳ Pendiente | 8 Formas de Capital | MCI ponderado: Material, Vivo, Social, Intelectual, Experiencial, Cultural, Espiritual, Financiero |
| **BI-020** | **8capital_integration.md** | `docs/` | ⏳ Pendiente | 8 Formas de Capital | MCI → 12 vectores CAC + PGS/ICS/IVC |
| **BI-021** | **deseos_backup.md** | `docs/` | ✅ Extraído | DeseOS/Contento.pro | Bundle 11 módulos P1-P11, auto-llenado BranDNA→VITCH |
| **BI-022** | **deseos_integration.md** | `docs/` | ✅ Extraído | DeseOS/Contento.pro | Mapa módulos + arquitectura + patrones UX |
| **BI-023** | **automaton_backup_original.md** | `docs/` | ⏳ Pendiente | Conway Automaton (original) | Automaton base: Never harm / Earn existence / Never deceive |
| **BI-024** | **automaton_alook_ponytail_backup.md** | `docs/` | ⏳ Pendiente | Alook/Ponytail | Extensiones Automaton para identidad + gobernanza |
| **BI-025** | **automaton_alook_ponytail_integration.md** | `docs/` | ⏳ Pendiente | Alook/Ponytail | Mapeo identidad soberana + gobernanza distribuida |
| **BI-026** | **automaton_integration.md** | `docs/` | ⏳ Pendiente | Conway Automaton | Isomorfismo Leyes MJ + arquitectura SOUL |
| **BI-027** | **berryvesting_backup.md** | `docs/` | ✅ Completo | Berry-vesting | Vesting inmutable ZNU + colabberry integration |
| **BI-028** | **berryvesting_integration.md** | `docs/` | ✅ Completo | Berry-vesting | Mapeo vesting → ZNU + ValueFlows |
| **BI-029** | **CaaS_backup_original.md** | `docs/` | ✅ Completo | CaaS (C2C) | Contribution-as-a-Service: acceso por contribución |
| **BI-030** | **CaaS_integration.md** | `docs/` | ✅ Completo | CaaS (C2C) | AUT × CDS → acceso + CaaS-BM mercado |
| **BI-031** | **caas_market.md** | `docs/` | ✅ Completo | CaaS Market | Mercado de ofertas/demandas ValueFlows |
| **BI-032** | **celulas_backup.md** | `docs/` | ✅ Completo | Células Base | 13 Pilares × 7 Capas × 4 Fases = 364 celdas |
| **BI-033** | **celulas_integration.md** | `docs/` | ✅ Completo | Células Base | Base Material operativa en HSCSG |
| **BI-034** | **colaberry_backup.md** | `docs/` | ✅ Completo | Colaberry | Agente HR + colaborativo |
| **BI-035** | **colaberry_integration.md** | `docs/` | ✅ Completo | Colaberry | Mapeo HR Agent → Coworkers + CoachFAB |
| **BI-036** | **colony_integration.md** | `docs/` | ✅ Completo | Colony | DAO framework → CDS + Autómata |
| **BI-037** | **ColonyFrontEndLivingStandard_backup.md** | `docs/` | ✅ Completo | Colony Frontend | Living Standard UI → CoachFAB patterns |
| **BI-038** | **colony-gql_backup.md** | `docs/` | ✅ Completo | Colony GraphQL | Schema GQL → ValueFlows types |
| **BI-039** | **colonyJS_backup.md** | `docs/` | ✅ Completo | Colony JS | SDK JS → neko-client patterns |
| **BI-040** | **colonyNetwork_backup.md** | `docs/` | ✅ Completo | Colony Network | Red DAOs → neko-rooms federation |
| **BI-041** | **colonySDK_backup.md** | `docs/` | ✅ Completo | Colony SDK | SDK → Vasos Comunicantes patterns |
| **BI-042** | **compai_crm_backup.md** | `docs/` | ✅ Completo | CompAI CRM | CRM autónomo → Autómata E²R + CoachFAB |
| **BI-043** | **compai_crm_integration.md** | `docs/` | ✅ Completo | CompAI CRM | Pipeline ventas → P1-P11 DeseOS mapping |
| **BI-044** | **contentcreation_backup.md** | `docs/` | ✅ Completo | ContentCreation OS | Generación contenido → CoachFAB + P6 Persuade |
| **BI-045** | **contentcreation_integration.md** | `docs/` | ✅ Completo | ContentCreation OS | Pipeline contenido → auto-llenado BranDNA→VITCH |
| **BI-046** | **fresco_rbe_backup.md** | `docs/` | ✅ Completo | Fresco/RBE | Resource-Based Economy → ZNU + Base Material |
| **BI-047** | **fresco_rbe_integration.md** | `docs/` | ✅ Completo | Fresco/RBE | Mapeo RBE → CaaS-BM postmonetario |
| **BI-048** | **gaia_backup.md** | `docs/` | ✅ Completo | Gaia Platform | Meta Plataforma 6 capas + 3 niveles |
| **BI-049** | **gaia_integration.md** | `docs/` | ✅ Completo | Gaia Platform | Mapeo capas → HSCSG 4 capas + vasos |
| **BI-050** | **gaia_ecohabitats_backup.md** | `docs/` | ✅ Completo | Gaia Ecohabitats | Biorregiones + nodos terrestres → Base Material |
| **BI-051** | **gaia_ecohabitats_integration.md** | `docs/` | ✅ Completo | Gaia Ecohabitats | Mapeo territorios → 13 Pilares + Tekitl |
| **BI-052** | **gaia_mycelium_backup.md** | `docs/` | ✅ Completo | Alianza Gaia-Mycelium | Arquitectura 6 capas + Commonomics + 3 niveles |
| **BI-053** | **gaia_mycelium_integration.md** | `docs/` | ✅ Completo | Alianza Gaia-Mycelium | Integración operativa HSCSG ↔ Gaia-Mycelium |
| **BI-054** | **gaiaunion_backup.md** | `docs/` | ✅ Completo | Gaia Union | Confederación → CDS federado + vasos |
| **BI-055** | **gaiaunion_integration.md** | `docs/` | ✅ Completo | Gaia Union | Mapeo confederación → neko federation |
| **BI-056** | **guifv_life_backup.md** | `docs/` | ✅ Completo | GuifV Life | Life OS → Base Material + CoachFAB |
| **BI-057** | **guifv_life_integration.md** | `docs/` | ✅ Completo | GuifV Life | Mapeo Life OS → HSCSG módulos |
| **BI-058** | **iambrainstorming_backup.md** | `docs/` | ✅ Completo | IAM Brainstorming | Libros + brainstorming → conocimiento vetted |
| **BI-059** | **iambrainstorming_integration.md** | `docs/` | ✅ Completo | IAM Brainstorming | Mapeo libros → SCI + FRS + ValueFlows |
| **BI-060** | **idetra_sinergia.md** | `docs/` | ✅ Completo | IDETRA | Sinergia identidades → ERC-8004 + Social DNA |
| **BI-061** | **integracion_dMRV_PMRTE_sistema_alraico.md** | `docs/` | ✅ Completo | dMRV/PMRTE | MRV digital → RAO + FRS + métricas |
| **BI-062** | **integral_backup.md** | `docs/` | ✅ Completo | Integral (base) | Loop celular → CDS/OAD/COS/ITC/FRS |
| **BI-063** | **integral_integration.md** | `docs/` | ✅ Completo | Integral (base) | Arquitectura loop → Autómata G1-CARMIS |
| **BI-064** | **kleros_integration.md** | `docs/` | ✅ Completo | Kleros Court | Resolución disputas → CDS jurados + RAO |
| **BI-065** | **kleros-court_backup.md** | `docs/` | ✅ Completo | Kleros Court | Court descentralizada → CDS_Jurados |
| **BI-066** | **kleros-ecosystem_backup.md** | `docs/` | ✅ Completo | Kleros Ecosystem | Ecosistema arbitraje → trust:bridge |
| **BI-067** | **nooa_backup.md** | `docs/` | ✅ Completo | NOOA | Ocean accounting → Base Material agua |
| **BI-068** | **nooa_integration.md** | `docs/` | ✅ Completo | NOOA | Mapeo océanos → 13 Pilares + métricas |
| **BI-069** | **pipeline_anidado.md** | `docs/` | ✅ Completo | Pipeline Anidado | P1-P11 anidados → E²R tree search |
| **BI-070** | **pipeline_loop_cierre.md** | `docs/` | ✅ Completo | Pipeline Loop Cierre | Cierre bucles → γ-CARMIS reconfig |
| **BI-071** | **prioritize_backup.md** | `docs/` | ✅ Completo | Prioritize (ZiadJ) | Priorización colectiva → CDS + Autómata |
| **BI-072** | **prioritize_integration.md** | `docs/` | ✅ Completo | Prioritize (ZiadJ) | Mapeo → Autómata E²R + talent market |
| **BI-073** | **percon_flow_patch_prosocial.md** | `docs/` | ✅ Completo | PerCon Flow | Patch prosocial → governance patterns |
| **BI-074** | **percon_flow_potentialism_integration.md** | `docs/` | ✅ Completo | PerCon Potentialism | Potentialism → Autómata Ley II MJ |
| **BI-075** | **percon_flow_potentialism_integration_2.md** | `docs/` | ✅ Completo | PerCon Potentialism v2 | Extensión → SOUL + E²R |
| **BI-076** | **scihive_mundus_backup.md** | `docs/` | ✅ Completo | SciHive Mundus | Conocimiento vetted → SCI + Lucidez |
| **BI-077** | **scihive_mundus_integration.md** | `docs/` | ✅ Completo | SciHive Mundus | Mapeo papers → FRS + RAO |
| **BI-078** | **shivarthu_backup.md** | `docs/` | ✅ Completo | Shivarthu | Civilization design → Base Material + Tekitl |
| **BI-079** | **shivarthu_integration.md** | `docs/` | ✅ Completo | Shivarthu | Mapeo civilización → 13 Pilares + Fases |
| **BI-080** | **solarpunk_backup.md** | `docs/` | ⏳ Pendiente | Solarpunk Don | Donations → Fondo Solarpunk + DSI |
| **BI-081** | **solarpunk_integration.md** | `docs/` | ✅ Completo | Solarpunk | 25% excedentes → Fondo Impacto |
| **BI-082** | **solarpunk_isaac_backup.md** | `docs/` | ⏳ Pendiente | Solarpunk Isaac | Variante personal → ZNU demurrage |
| **BI-083** | **solarpunk_liz_backup.md** | `docs/` | ⏳ Pendiente | Solarpunk Liz | Variante Liz → CoachFAB patterns |
| **BI-084** | **sovereignty_hub_backup.md** | `docs/` | ✅ Completo | Sovereignty Hub | Hub soberanía → CDS + Autómata |
| **BI-085** | **sovereignty_hub_ui_backup.md** | `docs/` | ✅ Completo | Sovereignty Hub UI | UI soberanía → CoachFAB + Boundaries |
| **BI-086** | **sovereignty_integration.md** | `docs/` | ✅ Completo | Sovereignty | Mapeo → CDS-SUI-CGC-FRS-RAO loop |
| **BI-087** | **State_of_Communities_2026_integration.md** | `docs/` | ✅ Completo | State of Communities 2026 | Métricas comunidades → CAC/PGS |
| **BI-088** | **symbiosky_backup.md** | `docs/` | ✅ Completo | Symbiosky | Symbiotic AI → Autómata + CoachFAB |
| **BI-089** | **symbiosky_integration.md** | `docs/` | ✅ Completo | Symbiosky | Mapeo IA simbiótica → E²R + Lucidez |
| **BI-090** | **tekitl_backup.md** | `docs/` | ✅ Completo | Tekitl | Proyectos + coins + portfolio → HSCSG módulos |
| **BI-091** | **tekitl_integration.md** | `docs/` | ✅ Completo | Tekitl | Mapeo → Base Material + CaaS-BM + ValueFlows |
| **BI-092** | **towards_open_civics_backup.txt** | `docs/` | ✅ Completo | Towards Open Civics | Open Civics → OpenHaven + governance |
| **BI-093** | **towards_open_civics_integration.md** | `docs/` | ✅ Completo | Towards Open Civics | Mapeo → OpenHaven Matrix + CDS |
| **BI-094** | **trustlines_backup.md** | `docs/` | ✅ Completo | Trustlines Protocol | Crédito mutuo → ZNU + ValueFlows |
| **BI-095** | **trustlines_integration.md** | `docs/` | ✅ Completo | Trustlines | Mapeo → CaaS-BM + ZNU demurrage |
| **BI-096** | **usdglo_backup.md** | `docs/` | ✅ Completo | USDGLO | Stablecoin global → priceParity oracle |
| **BI-097** | **usdglo_integration.md** | `docs/` | ✅ Completo | USDGLO | Mapeo → ReFi Bridge Nivel 3 |
| **BI-098** | **opc_source_opc_backup.md** | `docs/` | ✅ **Completo** | `opc-source/one-person-company` | Arquitectura Cloud Native: CNCF Landscape + Alibaba (KubeVela, OCM, Sealer, OpenKruise, Istio, Dapr, OpenTelemetry, Prometheus, Grafana, K8s, Nacos, Sentinel, Seata, RocketMQ) |
| **BI-099** | **opc_source_opc_integration.md** | `docs/` | ✅ **Completo** | `opc-source/one-person-company` | Integración infra: 11 módulos core, multi-cluster, service mesh, observabilidad, CNCF Landscape, neko-federation, 6 tasks orchestrator |
| **BI-100** | **awesome_opc_backup.md** | `docs/` | ✅ **Completo** | `chen103226/awesome-one-person-company` | Awesome list bilingüe: casos estudio verificados (Levels $2.1M/año, Lou $1.03M, Yongfook $600K ARR, Barry $29M ARR, 小熊猫C++ ¥5万+/mes), stacks 2026, Mom Test, 30-day launch |
| **BI-101** | **awesome_opc_integration.md** | `docs/` | ✅ **Completo** | `chen103226/awesome-one-person-company` | Integración datos: case_studies, stacks_recommendations, mom_test_methodology, 30_day_launch_checklist, learning_paths, enrichment de 3 briefs |
| **BI-102** | **metacrisis_backup.md** | `docs/` | ✅ **Completo** | `metacrisis.org` | Meta-recurso: 50+ proyectos, 100+ personas, 75+ libros, 15+ comunidades, 15+ mapas, 250+ hashtags meta-crisis |
| **BI-103** | **metacrisis_integration.md** | `docs/` | ✅ **Completo** | `metacrisis.org` | Integración operativa: 18 isomorfismos meta-crisis ↔ HSCSG, 7 módulos datos, Game B, Meaning Crisis, Sensemaking, Conexión Holosociocibersimbiogenesis |
| **BI-104** | **hscsg_definition.md** | `docs/` | ✅ **Completo** | Documentos del usuario (Isaac Ko) | Definición oficial Holosociocibersimbiogenesis: Cuaternidad Soberana Ampliada, 5 planos, Leyes MJ, Funnel transición, Autodiagnóstico |
| **BI-105** | **obsidian_vault_backup.md** | `docs/` | ✅ **Completo** | `H:\\Mi unidad\\HSCSG Empresa mas memoria\\` (Vault Obsidian) | Backup quirúrgico: HSCSG_MJ_SYNTHESIS_v15 (38KB), Autovividasis, URBION, Karatani, Plan 90 días, Fases 0→E |
| **BI-106** | **obsidian_vault_integration.md** | `docs/` | ✅ **Completo** | `H:\\Mi unidad\\HSCSG Empresa mas memoria\\` (Vault Obsidian) | Integración operativa: 11 isomorfismos vault ↔ código, 7 módulos nuevos, CAC v12, ZNU v2, Autómata v2 MJ, Talents v2, Autovividasis |
| **BI-107** | **ecoaldea_monte_backup.md** | `docs/` | ✅ **Completo** | Ecoaldea del Monte / Feria Conuquera | Backup quirúrgico: 43 docs técnicos + página pública, 19 fases completadas, 152 migraciones, pool global, padrino, FRNE, fideicomiso, perfiles, .nfcpkg, nodo satélite |
| **BI-108** | **ecoaldea_monte_integration.md** | `docs/` | ✅ **Completo** | Ecoaldea del Monte / Feria Conuquera | Integración operativa: 28 isomorfismos, 13 Take / 10 Adapt / 5 Discard, 12 módulos nuevos, 11 pantallas, plan 6 semanas, 12 briefs operativos |

### 🎨 FRONTEND / UX / PATRONES DE INTERFAZ
| # | Documento | Ubicación | Estado | Fuente | Descripción |
|---|-----------|-----------|--------|--------|-------------|
| **BF-030** | **contento_deseOS_analysis.md** | `docs/` | ✅ **NUEVO** | `contento contentOS extraccion profecional.html` + `DeseOS_project1.zip` | Análisis UX: Happy CMO (Happpy), Creative/Campaign Operator, Pipeline P1→P11, Auto-llenado BranDNA→VITCH, Flow integration |
| **BF-031** | **contento_architecture.md** | `docs/` | ✅ Extraído | `DeseOS_project1/docs/ARCHITECTURE.md` | Arquitectura bundle single-file: 39 assets, 11 módulos P1-P11, loader, CSS vars, localStorage |
| **BF-032** | **deseOS_modules_map.md** | `docs/` | ✅ Extraído | `DeseOS_extracted/src/modules/` | Mapa 11 módulos: P1 BranDNA, P2 Products, P3 CRM/ICP, P4 Plan, P5 VITCH, P6 Persuade, P7 Pauta, P8 Pagos, P9 Perfecciona, P10 Publica, P11 Prospecta |

### 🛠️ TOOLING Y DATOS CURADOS (AI Tools Curados)
| # | Documento | Ubicación | Estado | Fuente | Descripción |
|---|-----------|-----------|--------|--------|-------------|
| **BF-083** | **cyfyifanchen_opc_backup.md** | `docs/` | ✅ **NUEVO** | `cyfyifanchen/one-person-company` | Curación IA tools: LLM rankings (WebDev Arena), TTS matrix (30+), Code tools (50+), Design tools (25+), Website builders (15+), Productivity (30+) |
| **BF-084** | **cyfyifanchen_opc_integration.md** | `docs/` | ✅ **NUEVO** | `cyfyifanchen/one-person-company` | Integración datos puros: 14 data constants TypeScript, integración Automaton/CoachFAB/CaaS-BM/navteka, 6 tasks orchestrator |

### ☁️ INFRAESTRUCTURA CLOUD NATIVE (CNCF + Alibaba)
| # | Documento | Ubicación | Estado | Fuente | Descripción |
|---|-----------|-----------|--------|--------|-------------|
| **BF-085** | **opc_source_opc_backup.md** | `docs/` | ✅ **NUEVO** | `opc-source/one-person-company` | Arquitectura Cloud Native: CNCF Landscape + Alibaba (KubeVela, OCM, Sealer, OpenKruise, Istio, Dapr, OpenTelemetry, Prometheus, Grafana, K8s, Nacos, Sentinel, Seata, RocketMQ) |
| **BF-086** | **opc_source_opc_integration.md** | `docs/` | ✅ **NUEVO** | `opc-source/one-person-company` | Integración infra: 11 módulos core, multi-cluster, service mesh, observabilidad, CNCF Landscape, neko-federation, 6 tasks orchestrator |

### 📋 AWESOME LISTS Y CASOS DE ESTUDIO
| # | Documento | Ubicación | Estado | Fuente | Descripción |
|---|-----------|-----------|--------|--------|-------------|
| **BF-087** | **awesome_opc_backup.md** | `docs/` | ✅ **NUEVO** | `chen103226/awesome-one-person-company` | Awesome list bilingüe: casos estudio verificados (Levels $2.1M/año, Lou $1.03M, Yongfook $600K ARR, Barry $29M ARR, 小熊猫C++ ¥5万+/mes), stacks 2026, Mom Test, 30-day launch |
| **BF-088** | **awesome_opc_integration.md** | `docs/` | ✅ **NUEVO** | `chen103226/awesome-one-person-company` | Integración datos: case_studies, stacks_recommendations, mom_test_methodology, 30_day_launch_checklist, learning_paths, enrichment de 3 briefs |

### 🌐 META-CRISIS ECOSYSTEM
| # | Documento | Ubicación | Estado | Fuente | Descripción |
|---|-----------|-----------|--------|--------|-------------|
| **BF-089** | **metacrisis_backup.md** | `docs/` | ✅ **NUEVO** | `metacrisis.org` (Kyle Kowalski) | Meta-recurso: 50+ proyectos, 100+ personas, 75+ libros, 15+ comunidades, 15+ mapas, 250+ hashtags de la meta-crisis (wisdom web, liminal web, sensemaking web) |
| **BF-090** | **metacrisis_integration.md** | `docs/` | ✅ **NUEVO** | `metacrisis.org` | Integración operativa: 18 isomorfismos meta-crisis ↔ HSCSG, 7 módulos datos, Game B, Meaning Crisis, Sensemaking, Conexión Holosociocibersimbiogenesis |
| **BF-091** | **hscsg_definition.md** | `docs/` | ✅ **NUEVO** | Documentos del usuario (Isaac Ko) | Definición oficial Holosociocibersimbiogenesis: Cuaternidad Soberana Ampliada, 5 planos, Leyes MJ, Funnel transición, Autodiagnóstico personal |

### 📚 OBSIDIAN VAULT (Teoría y Síntesis del Proyecto)
| # | Documento | Ubicación | Estado | Fuente | Descripción |
|---|-----------|-----------|--------|--------|-------------|
| **BF-092** | **obsidian_vault_backup.md** | `docs/` | ✅ **NUEVO** | `H:\\Mi unidad\\HSCSG Empresa mas memoria\\` (Vault Obsidian) | Backup quirúrgico: HSCSG_MJ_SYNTHESIS_v15 (38KB), Autovividasis, URBION Ontogénesis Urbana, Karatani Modos de Intercambio, Plan 90 días, Fases 0→E |
| **BF-093** | **obsidian_vault_integration.md** | `docs/` | ✅ **NUEVO** | `H:\\Mi unidad\\HSCSG Empresa mas memoria\\` (Vault Obsidian) | Integración operativa: 11 isomorfismos vault ↔ código, 7 módulos nuevos, CAC v12, ZNU v2, Autómata v2 MJ, Talents v2, Autovividasis |

|### 🌱 ECOALDEA DEL MONTE / FERIA CONUQUERA (Federación Ecoaldeas)
|| # | Documento | Ubicación | Estado | Fuente | Descripción |
||---|-----------|-----------|--------|--------|-------------|
|| **BF-094** | **ecoaldea_monte_backup.md** | `docs/` | ✅ **NUEVO** | Ecoaldea del Monte / Feria Conuquera | Backup quirúrgico: 43 docs técnicos + página pública, 19 fases completadas, 152 migraciones, pool global, padrino, FRNE, fideicomiso, perfiles, .nfcpkg, nodo satélite |
|| **BF-095** | **ecoaldea_monte_integration.md** | `docs/` | ✅ **NUEVO** | Ecoaldea del Monte / Feria Conuquera | Integración operativa: 28 isomorfismos, 13 Take / 10 Adapt / 5 Discard, 12 módulos nuevos, 11 pantallas, plan 6 semanas, 12 briefs operativos |

### 🤖 OPENEXECUTIVE (SenteLabsAI) — Equipo Ejecutivo Multi-Agente
|| # | Documento | Ubicación | Estado | Fuente | Descripción |
||---|-----------|-----------|--------|--------|-------------|
|| **BF-106** | **openexecutive_backup.md** | `docs/` | ✅ **NUEVO** | OpenExecutive (SenteLabsAI) | Backup quirúrgico: 8 agentes especialistas (CSO/CFO/CHRO/GC/COO/CMO/CPO/Board), RAG dual, memoria episódica, scheduler, multi-interfaz |
|| **BF-107** | **openexecutive_integration.md** | `docs/` | ✅ **NUEVO** | OpenExecutive (SenteLabsAI) | Integración operativa: 22 isomorfismos, 9 Take / 10 Adapt / 3 Discard, 7 módulos nuevos, 6 pantallas, plan 5 semanas, 10 briefs operativos |

### ⚙️ MÓDULOS TÉCNICOS HSCSG v15 OS (Core)
| # | Documento | Ubicación | Estado | Módulo | Descripción |
|---|-----------|-----------|--------|--------|-------------|
| **BF-040** | **boundaries_spec.md** | `docs/` | ✅ Implementado | `src/core/lib/boundaries.ts` | Policy engine: evaluateBoundary (deny>allow, fail-closed, dry-run), governAction, RepeatDetector, CEL-like subset |
| **BF-041** | **coworkers_spec.md** | `docs/` | ✅ Implementado | `src/core/state/coworkers.ts` | Durable profile, standing role, channel, human handover, take/release control |
| **BF-042** | **coach_fab_spec.md** | `docs/` | ✅ Implementado | `packages/ui/src/CoachFAB.tsx` | FAB persistente + chat Lucidez Material (Happpy CMO style) |
| **BF-043** | **vasos_comunicantes_spec.md** | `docs/` | ✅ Implementado | `apps/web/app/(os)/vasos/page.tsx` | 6 vasos: governance:sync, trust:bridge, infra:connect, intel:match, app:federate, eco:sync |
| **BF-044** | **netbenefit_spec.md** | `docs/` | 🔴 **P0 Pendiente** | `lib/netbenefit.ts` (nuevo) | Motor Beneficio Neto 8 escalas + pesos CDS_Jurados (Copiosis) |
| **BF-045** | **cds_jurados_spec.md** | `docs/` | 🔴 **P0 Pendiente** | `lib/cds_jurados.ts` (nuevo) | Sorteo, anonimato, rotación, W_i ∈ [min,max], actas RAO |
| **BF-046** | **copiosis_spec.md** | `docs/` | 🔴 **P0 Pendiente** | `lib/copiosis.ts` (nuevo) | Tipo NetBenefitFlow, luxuryPriceNBR, capitalAccessTier, BN_Gradient_Signal |

### 🤖 SKILLS HERMES ANFIBIAS (Desplegadas)
| # | Documento | Ubicación | Skill | Descripción |
|---|-----------|-----------|-------|-------------|
| **BF-050** | **skill_openbot_governed_computer_use.md** | `skills/web/openbot-governed-computer-use/` | `openbot-governed-computer-use` | Computer use gobernado por policy CEL (Boundaries) + OpenBot pattern |
| **BF-051** | **skill_policy_cel_gateway.md** | `skills/web/policy-cel-gateway/` | `policy-cel-gateway` | Policy gateway fail-closed inspirado en OpenBot |
| **BF-052** | **skill_ag_ui_protocol.md** | `skills/web/ag-ui-protocol/` | `ag-ui-protocol` | Protocolo AG-UI (CopilotKit) agent-to-user |
| **BF-053** | **skill_pitch_oferta_irresistible.md** | `skills/pitch-oferta-irresistible/` | `pitch-oferta-irresistible` | Genera pitch M-A-G-I-C + Anderson (Nemotron+NouS fallback) |
| **BF-054** | **skill_ted_hablar_en_publico.md** | `skills/ted-hablar-en-publico/` | `ted-hablar-en-publico` | Guión hablado 5 min basado en TED Guide (Anderson) |
| **BF-055** | **skill_hscsg_next_steps_orchestrator.md** | `skills/hscsg-next-steps-orchestrator/` | `hscsg-next-steps-orchestrator` | Orquesta próximos pasos: P0 specs, migración DeseOS, CoachFAB-Autómata, roles Coworkers, deploy Vercel |
| **BF-056** | **skill_hscsg_gaia_mycelium_integration.md** | `skills/hscsg-gaia-mycelium-integration/` | `hscsg-gaia-mycelium-integration` | Integra HSCSG v15 OS con Alianza Gaia-Mycelium: mapeo capas, vasos comunicantes, IPD/Trust-first |
| **BF-057** | **skill_brief_detector_recommender.md** | `skills/brief-detector-recommender/` | `brief-detector-recommender` | Detecta gaps, recomienda briefs, proyecta necesidades, extrapola patrones; invocable por orchestrator |

### 📊 MÉTRICAS Y DASHBOARDS
| # | Documento | Ubicación | Estado | Descripción |
|---|-----------|-----------|--------|-------------|
| **BF-060** | **cac_calculator_v11.md** | `docs/` | ✅ Asimilado | 12 vectores AUT + η, ξ, σᵤ, PGS, ICS, IVC, MCI |
| **BF-061** | **lucidez_audit_spec.md** | `docs/` | ✅ Implementado | Modo Lucidez (toggle), auditoría triaxial, bloques .lucidez-raw |
| **BF-062** | **rao_spec.md** | `docs/` | ✅ Asimilado | Registro Auditoría Ontológico append-only (ERC-8004 + IPFS) |

### 🚀 DEPLOY Y OPERACIONES
| # | Documento | Ubicación | Estado | Descripción |
|---|-----------|-----------|--------|-------------|
| **BF-070** | **deploy_verification_log.md** | `docs/` | ✅ Verificado | Deploy `https://hscsg-v15-os.vercel.app` — home, /boundaries, /coworkers 200 OK |
| **BF-071** | **navteka_readme.md** | `README.md` | ✅ Actual | Arquitectura navteka, vasos, monorepo, env vars, deploy Vercel+Fly.io |
| **BF-072** | **git_workflow.md** | `docs/` | ✅ Asimilado | Git workflow: git-credential-manager, push origin/master sin tokens, cron orquestador |
| **BF-073** | **BRIEF_ONBOARDING_CONSTRUCTOR.md** | `docs/` | ✅ **NUEVO** | Guía práctica asimilación 4 fases + primera contribución |
| **BF-074** | **ANALISIS_EXHAUSTIVO_OPENHAVEN_WEAVE_HSCSG_GAIA.md** | `docs/` | ✅ **NUEVO** | Análisis 17 URLs, 4 proyectos, gaps, plan 4 semanas |
| **BF-075** | **RESPUESTA_COLABORACION_GAIA_MYCELIUM.md** | `docs/` | ✅ **NUEVO** | Respuesta ES a equipos Gaia-Mycelium |
| **BF-076** | **RESPUESTA_COLABORACION_GAIA_MYCELIUM_EN.md** | `docs/` | ✅ **NUEVO** | Respuesta EN a equipos Gaia-Mycelium |

### 👥 PERFILES COGNITIVOS Y PROFESIONALES (Guías de Integración)
| # | Documento | Ubicación | Estado | Audiencia | Descripción |
|---|-----------|-----------|--------|-----------|-------------|
| **BF-077** | **BRIEF_PERFIL_PROFESIONALES.md** | `docs/` | ✅ **NUEVO** | Especialistas, ingenieros, científicos, profesionales certificados | Punto de entrada por especialidad, flujo de trabajo, herramientas, casos de éxito |
| **BF-078** | **BRIEF_PERFIL_POLIMATAS.md** | `docs/` | ✅ **NUEVO** | Polimatas (3+ dominios expertos) | Orquestador como herramienta nativa, flujo no lineal, arquitecto de vasos comunicantes |
| **BF-079** | **BRIEF_PERFIL_GENERALISTAS.md** | `docs/` | ✅ **NUEVO** | Generalistas (navegan ancho, conectan puntos) | Mapa navegación, flujo ancho→profundo→ancho, contribución alto impacto sin ser experto |
| **BF-080** | **BRIEF_PERFIL_AUTODIDACTAS.md** | `docs/` | ✅ **NUEVO** | Autodidactas (aprenden por cuenta, sin currículo) | Cero permisos, mapa aprendizaje autodirigido, herramientas autodidactas, patrón éxito |
| **BF-081** | **BRIEF_PERFIL_INTERDISCIPLINARES.md** | `docs/` | ✅ **NUEVO** | Interdisciplinares (2-3 disciplinas, puentes metodológicos) | Vasos comunicantes como puentes, flujo puente→método→estándar, 3 puentes/semana |
| **BF-082** | **BRIEF_PERFIL_TRANSDISCIPLINARES.md** | `docs/` | ✅ **NUEVO** | Transdisciplinares (trascienden disciplinas, incluyen stakeholders no académicos) | Base Material + Autómata Soberano, flujo vida→acción→regeneración, briefs como semillas |

### 📋 REPORTES DE DETECTOR DE BRIEFS (Generados Automáticamente)
| # | Documento | Ubicación | Estado | Descripción |
|---|-----------|-----------|--------|-------------|
| **BD-001** | **brief-detection-report.json** | `docs/` | ✅ Auto-generado | 72 gaps detectados (fuentes, specs, skills, módulos) |
| **BD-002** | **brief-recommendations.md** | `docs/` | ✅ Auto-generado | Briefs recomendados ordenados por prioridad (P0/P1/P2) |
| **BD-003** | **brief-projection-30-60-90.md** | `docs/` | ✅ Auto-generado | Proyección necesidades 30/60/90 días |
| **BD-004** | **brief-extrapolation.md** | `docs/` | ✅ Auto-generado | Extrapolación patrones asimilación + predicción 23 briefs/60 días |

---

## Intersecciones Clave (Términos Equivalentes entre Proyectos)

| Concepto Canónico HSCSG | DeseOS/Contento.pro | OpenBot | Copiosis | OneManCompany | Conway Automaton | Integral Collective | Hylo/Navteka |
|-------------------------|---------------------|---------|----------|---------------|------------------|---------------------|--------------|
| **Identidad Soberana** | `CO_BRAND` (brand0) | — | — | SSOT (Disk is Truth) | Agent ID | — | NextAuth + wallet |
| **Base Material** | — | — | Necesidades gratis | — | Never harm (Ley I) | — | — |
| **Gobernanza (Loop)** | — | Policy CEL Gateway | Jurados Ciudadanos | Vessel+Talent | Never deceive (Ley III) | CDS→OAD→COS→ITC→FRS | CDS federado + neko:boundary |
| **Economía/Moneda** | USD/MXN/EUR (anfibio) | — | NBR + BN 8 escalas | ValueFlows | Earn existence (Ley II) | — | ZNU + Revenue Demo |
| **Métricas Soberanía** | Health score (93/100) | — | BN 8 escalas | E²R quality gates | — | — | — |
| **IA/Autómata** | Happpy CMO (Coach FAB) | Coworkers (simulados) | — | Autómata (Vessel) | Conway Automaton | — | Coach FAB + Coworkers + neko |
| **Pipeline/Flujo** | P1→P11 (BranDNA→Prospecta) | Boundaries → Coworkers | Estigmergia (gradiente BN) | E²R + SSOT + Registry | — | — | neko:room, :session, :coworker, :boundary, :brief |
| **Auto-llenado/Generación** | BranDNA → VITCH (genera piezas) | — | BN → NBR | — | — | — | Coach FAB contextual |
| **Persistencia** | localStorage por módulo | — | — | SSOT (Disk is Truth) | — | — | Postgres (Neon) + Redis (Upstash) |
| **UI/UX Asistente** | **Happpy FAB** (fixed bottom-right) | — | — | — | — | — | **CoachFAB.tsx** (migrado) |
| **Roles Creativos** | **Creative / Campaign Operator** | — | — | Talent Market (roles) | — | — | Coworkers (standing role) |

---

## Madurez por Término (Qué Proyecto lo Tiene Más Desarrollado)

| Término | Proyecto Más Maduro | Nivel en HSCSG | Gap / Acción |
|---------|---------------------|----------------|--------------|
| **Identidad Soberana (ERC-8004)** | OneManCompany (SSOT, Registry) | 🟡 Parcial (tipos definidos) | Completar `lib/identity.ts` con ERC-8004 + Social DNA |
| **Base Material (13 Pilares × 7 Capas)** | **HSCSG/Cosateca** | 🟢 Completo (364 celdas) | — |
| **Gobernanza CDS-SUI-CGC-FRS-RAO** | **HSCSG** | 🟢 Completo (loop operacional) | — |
| **Policy Gateway (CEL-like)** | OpenBot (CopilotKit runtime) | 🟢 Implementado (`boundaries.ts`) | Extender expresiones CEL más allá de subset seguro |
| **Economía Postmonetaria (NBR/BN)** | **Copiosis v7.1** | 🔴 **P0** (backup + integration completos) | Implementar `lib/netbenefit.ts`, `lib/cds_jurados.ts`, `lib/copiosis.ts` |
| **Economía Híbrida Anfibia (ZNU/USD)** | **DeseOS/Contento.pro** (`valueDual.ts`) | 🟡 Parcial (lógica en brief) | Migrar `valueDual.ts` + `nodeMode`/`priceParity` a `lib/` |
| **Métricas (CAC/PGS/ICS/IVC/η/ξ/σᵤ)** | **HSCSG** | 🟢 Completo (fórmulas + targets) | Implementar calculadoras en `lib/metrics.ts` |
| **Autómata Soberano (Conway+MJ)** | Conway Automaton + OneManCompany | 🟡 Parcial (arquitectura en briefs) | Implementar `lib/automaton.ts` con SOUL, Tiers, Heartbeat, Spawn, E²R |
| **Pipeline Contenido (P1→P11)** | **DeseOS/Contento.pro** | 🔴 No implementado | Migrar módulos P1-P11 a `src/modules/` (39 bundles) |
| **Auto-llenado (BranDNA→VITCH)** | **DeseOS/Contento.pro** | 🔴 No implementado | Implementar motor generación `P5_VITCH.ts` alimentado por `P1_BranDNA.ts` |
| **Asistente IA Integrado (Happpy)** | **DeseOS/Contento.pro** (Coach.tsx) | 🟢 **Implementado** (`CoachFAB.tsx`) | Mejorar: conectar a Autómata real + contexto BranDNA |
| **Roles Creativos (Creative/Operator)** | **DeseOS/Contento.pro** (sidebar Motor/Crecimiento) | 🟡 Parcial (Coworkers standing role) | Mapear roles DeseOS → Coworkers profiles |
| **Persistencia SSOT (Disk is Truth)** | **OneManCompany** | 🔴 No implementado | Migrar de localStorage → IndexedDB + file sync (TAURI/ Electron) |
| **Skills Hermes Ejecutables** | **HSCSG** (4 skills anfibias) | 🟢 Desplegadas (2 ubicaciones) | Añadir skills para netbenefit, cds_jurados, copiosis, automaton |

---

## Estado de Asimilación por Proyecto Fuente

| Proyecto Fuente | Backup | Integration | Módulos Creados en HSCSG | Skills Hermes | Docs en `docs/` |
|-----------------|--------|-------------|--------------------------|---------------|-----------------|
| **OpenBot (CopilotKit)** | ✅ `openbot_backup.md` | ✅ `openbot_integration.md` | `boundaries.ts`, `coworkers.ts`, screens Boundaries/Coworkers | 3 (`openbot-governed-computer-use`, `policy-cel-gateway`, `ag-ui-protocol`) | 2 |
| **Copiosis v7.1** | ✅ `copiosis_backup.md` | ✅ `copiosis_integration.md` | 0 (mapeo en BF-001 §2.17) | 0 | 2 |
| **Conway Automaton** | ⏳ Pendiente (5 docs) | ⏳ Pendiente | 0 (isomorfismo en BF-001 §2.1) | 0 | 5 (pendientes 2) |
| **OneManCompany** | ✅ `onemanco_backup.md` | ✅ `onemanco_integration.md` | `lib/automaton.ts`, `lib/automation.ts`, `lib/talent_market.ts`, `lib/ceo_executor.ts`, `lib/heartbeat.ts`, `lib/registry.ts`, `lib/e2r_tree.ts`, `lib/automaton_config.ts` | 1 (`hscsg-onemanco-assimilation` pendiente) | 2 |
| **Integral Collective** | ✅ `integral_backup.md` | ✅ `integral_integration.md` | 0 (loop mapeado en BF-001 §9.3) | 0 | 2 |
| **DisCO** | ⏳ Pendiente | ⏳ Pendiente | 0 (ValueFlows types en BF-001 Anexo C) | 0 | 0 (pendiente 2) |
| **FABSHIP/HUMANIA** | ⏳ Pendiente (2 docs) | ⏳ Pendiente | 0 (AUT_* mapeados en BF-001 §6.1) | 0 | 2 (pendientes 2) |
| **Auravana/OC/TVP/RBE** | ⏳ Pendiente | ⏳ Pendiente | 0 (referencias en BF-001 §17) | 0 | 0 (pendiente 2) |
| **Prosocial Protocol** | ⏳ Pendiente (2 docs) | ⏳ Pendiente | 0 (Food Web mapeado en BF-001 §14.1) | 0 | 2 (pendientes 2) |
| **8 Formas Capital** | ⏳ Pendiente | ⏳ Pendiente | 0 (MCI en BF-001 §6.1) | 0 | 0 (pendiente 2) |
| **DeseOS/Contento.pro** | ✅ (HTML + ZIP) | ✅ 3 docs | 0 (análisis UX completado) | 0 | 3 |
| **Gaia-Mycelium** | ✅ `gaia_mycelium_backup.md` | ✅ `gaia_mycelium_integration.md` | workstream GAIA_INTEGRATION (8 tasks) | 1 (`hscsg-gaia-mycelium-integration`) | 2 |
| **Project Weave** | N/A | ✅ Análisis exhaustivo | — | 0 | 1 (compartido) |
| **OpenHaven** | N/A | ✅ Análisis exhaustivo | — | 0 | 1 (compartido) |
| **Colony (DAOs)** | ✅ 5 docs | ✅ 1 integration | patterns → CDS + neko | 0 | 6 |
| **CaaS (C2C)** | ✅ 1 backup | ✅ 2 integration | CaaS-BM + ValueFlows | 0 | 3 |
| **Berry-vesting** | ✅ 1 backup | ✅ 1 integration | ZNU vesting | 0 | 2 |
| **Colaberry** | ✅ 1 backup | ✅ 1 integration | HR Agent → Coworkers | 0 | 2 |
| **CompAI CRM** | ✅ 1 backup | ✅ 1 integration | Pipeline ventas → P1-P11 | 0 | 2 |
| **ContentCreation OS** | ✅ 1 backup | ✅ 1 integration | Contenido → P6 Persuade | 0 | 2 |
| **Fresco/RBE** | ✅ 1 backup | ✅ 1 integration | RBE → ZNU + Base Material | 0 | 2 |
| **GuifV Life** | ✅ 1 backup | ✅ 1 integration | Life OS → Base Material | 0 | 2 |
| **IAM Brainstorming** | ✅ 1 backup | ✅ 1 integration | Libros → SCI + FRS | 0 | 2 |
| **Kleros** | ✅ 2 backups | ✅ 1 integration | Court → CDS_Jurados + RAO | 0 | 3 |
| **NOOA** | ✅ 1 backup | ✅ 1 integration | Ocean accounting → Base Material | 0 | 2 |
| **Prioritize** | ✅ 1 backup | ✅ 1 integration | Priorización → Autómata E²R | 0 | 2 |
| **PerCon Flow** | ✅ 4 docs | — | Potentialism → Autómata | 0 | 4 |
| **SciHive Mundus** | ✅ 1 backup | ✅ 1 integration | Conocimiento vetted → SCI | 0 | 2 |
| **Shivarthu** | ✅ 1 backup | ✅ 1 integration | Civilization design → Base Material | 0 | 2 |
| **Solarpunk** | ⏳ 3 pendientes | ✅ 1 integration | Donations → Fondo Solarpunk | 0 | 4 |
| **Sovereignty Hub** | ✅ 2 backups | ✅ 1 integration | Hub → CDS + Autómata | 0 | 3 |
| **State of Communities** | — | ✅ 1 integration | Métricas → CAC/PGS | 0 | 1 |
| **Symbiosky** | ✅ 1 backup | ✅ 1 integration | IA simbiótica → E²R + Lucidez | 0 | 2 |
| **Tekitl** | ✅ 1 backup | ✅ 1 integration | Proyectos/coins/portfolio → HSCSG | 0 | 2 |
| **Towards Open Civics** | ✅ 1 backup | ✅ 1 integration | Open Civics → OpenHaven + CDS | 0 | 2 |
| **Trustlines** | ✅ 1 backup | ✅ 1 integration | Crédito mutuo → ZNU + ValueFlows | 0 | 2 |
| **USDGLO** | ✅ 1 backup | ✅ 1 integration | Stablecoin → priceParity oracle | 0 | 2 |
| **opc-source/one-person-company** | ✅ `opc_source_opc_backup.md` | ✅ `opc_source_opc_integration.md` | `lib/multi_cluster.ts`, `lib/service_mesh.ts`, `lib/observability_stack.ts`, `lib/cloud_native_container.ts`, `lib/cncf_landscape.ts`, `lib/alibaba_cloud_stack.ts`, `lib/cluster_delivery.ts`, `lib/iac_manager.ts`, `lib/microservice_frameworks.ts`, `lib/os_reference.ts`, `docs/infrastructure_diagram_v010.md` | 1 (`hscsg-opc-source-assimilation` pendiente) | 2 |
| **chen103226/awesome-one-person-company** | ✅ `awesome_opc_backup.md` | ✅ `awesome_opc_integration.md` | `lib/case_studies.ts`, `lib/stacks_recommendations.ts`, `lib/mom_test_methodology.ts`, `docs/30_day_launch_checklist.md`, `docs/learning_paths.md`, `docs/creator_quotes.md` | 1 (`hscsg-awesome-opc-assimilation` pendiente) | 2 |
|| **Ecoaldea del Monte / Feria Conuquera** | ✅ `ecoaldea_monte_backup.md` | ✅ `ecoaldea_monte_integration.md` | 0 (plan 12 módulos nuevos) | 0 | 2 ||
|| **OpenExecutive (SenteLabsAI)** | ✅ `openexecutive_backup.md` | ✅ `openexecutive_integration.md` | 0 (plan 7 módulos nuevos) | 0 | 2 ||

**Total:** 41 proyectos fuente | 33 completados (66 docs backup+integration) | 8 pendientes | **137 briefs totales** | 4 skills Hermes desplegadas | 48 docs operativos en `docs/`

---

## Próximos Briefs a Generar (Prioridad P0)

1. **BF-002/003/004** — Fundacionales: `HSCSG_MJ_SYNTHESIS_v15.md`, `modelo-negocio-objetivos-civilizatorios-hscsg.md`, `integracion-esg-hscsg.md`
2. **BI-005/006** — `conway_automaton_backup.md` + `conway_automaton_integration.md` (fuente: Conway-Research/automaton)
3. **BI-007/008** — `onemanco_backup.md` + `onemanco_integration.md` (fuente: ZiadJ/onemanco fork)
4. **BI-009/010** — `integral_collective_backup.md` + `integral_collective_integration.md`
5. **BF-044/045/046** — Specs de implementación: `netbenefit_spec.md`, `cds_jurados_spec.md`, `copiosis_spec.md`
6. **BI-011/012** — `disco_backup.md` + `disco_integration.md`
7. **BI-013/014** — `fabs_hip_backup.md` + `fabs_hip_integration.md`
8. **BI-015/016** — `auravana_backup.md` + `auravana_integration.md`
9. **BI-017/018** — `prososocial_backup.md` + `prososocial_integration.md`
10. **BI-019/020** — `8capital_backup.md` + `8capital_integration.md`

---

## Convenciones de Nombrado
- **BF-XXX** — Brief Fundacional (arquitectura, modelo, estrategia)
- **BI-XXX** — Backup/Integración de repo externo (par: `_backup.md` + `_integration.md`)
- **SM-XXX** — Spec Módulo técnico (implementación en `lib/`, `state/`, `screens/`)
- **SK-XXX** — Skill Hermes (en `skills/web/` + `~/.hermes/skills/web/`)
- **DP-XXX** — Deploy/Operaciones
- **BD-XXX** — Brief Detector outputs (auto-generados)

---

## Cómo Usar Este Índice
1. **Navegación:** Busca por dominio (sección) o por término (tabla intersecciones)
2. **Trazabilidad:** Cada brief referencia su fuente primaria y estado de asimilación
3. **Actualización:** Tras cada asimilación, el cron orquestador actualiza este índice + BF-001 + CHANGELOG
4. **Gaps:** La tabla "Madurez por Término" muestra qué falta y dónde está lo mejor desarrollado
5. **Auto-detección:** Ejecuta `node scripts/brief-detector-recommender.cjs full-cycle` para detectar gaps y recomendar próximos briefs

---

## Enlaces Rápidos (GitHub)
- **Repo principal:** `https://github.com/Isaacko0/HSCSG_v15_OS`
- **Docs folder:** `https://github.com/Isaacko0/HSCSG_v15_OS/tree/main/docs`
- **Skills folder:** `https://github.com/Isaacko0/HSCSG_v15_OS/tree/main/skills`
- **OS Deploy:** `https://hscsg-v15-os.vercel.app`
- **Navteka Deploy:** `https://navteka.vercel.app` (pendiente)

---

*Última actualización: 2026-09-02 — Ciclo: Skill brief-detector-recommender + 82 docs backup/integration + 127 briefs totales + 4 skills Hermes + Análisis exhaustivo OpenHaven+Weave+Gaia + Ecoaldea del Monte asimilada*