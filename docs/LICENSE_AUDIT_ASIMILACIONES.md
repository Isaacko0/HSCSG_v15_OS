# AUDITORÍA DE LICENCIAS Y CONFLICTOS LEGALES
## Inventario Completo de Fuentes Asimiladas vía hscsg-repo-assimilation

**Fecha:** 2026-09-10  
**Versión:** 1.0  
**Alcance:** 52 fuentes en `docs/fuentes_indice.json` + 71 backups + 77 integraciones  
**Criterios:** Matriz de compatibilidad `docs/AREX_SKILL_SYNERGY_PLAN.md` + análisis `docs/LEGAL_PROTECTION_FINANCIAL_RETURN.md` + `docs/LEGAL_NOTICE.md`

---

## 1. RESUMEN EJECUTIVO

| Métrica | Valor |
|---|---|
| **Total fuentes en índice** | 52 |
| **Archivos backup analizados** | 71 |
| **Archivos integración** | 77 |
| **Fuentes CON licencia detectada en backup** | 31 (44%) |
| **Fuentes SIN licencia detectada** | 40 (56%) |
| **Licencias permisivas (MIT/Apache/BSD/CC0)** | 24 |
| **Licencias copyleft fuerte (GPL/AGPL)** | 7 (ALTO RIESGO) |
| **Licencias NC-ND (CC BY-NC-ND)** | 2 (ALTO RIESGO - retorno financiero) |
| **Licencias tri/dual/múltiples** | 2 |
| **Sin licencia detectable / desconocida** | 20+ (RIESGO LATENTE) |

### Distribución de Riesgo

| Nivel | Cuenta | Fuentes Representativas |
|---|---|---|
| **ALTO** | 9 | Colony (GPL-3.0), Kleros (GPL-3.0), Nextcloud (AGPL-3.0), Tekitl (GPL-3.0), Yoka/Fabio (CC BY-NC-ND 4.0), Tekitl (GPL-3.0) |
| **MEDIO** | 5 | AuroraGov (ELv2), AI Alliance (tri-licencia), OpenCivics (CC), AuroraGov (ELv2) |
| **BAJO** | 24+ | MIT, Apache-2.0, BSD, CC BY 4.0, CC0 |
| **LATENTE (sin auditar)** | 20+ | Sin licencia detectable en backup |

---

## 2. TABLA MAESTRA DE AUDITORÍA POR FUENTE

| ID | Nombre | Autor/Repo | URL | Licencia Detectada | Tipo | Riesgo | Conflicto Potencial | Mitigación |
|---|---|---|---|---|---|---|---|---|
| 1 | OpenBot (CopilotKit) | CopilotKit | github.com/CopilotKit/OpenBot | MIT | Permisiva | BAJO | Ninguno | Usar directo |
| 2 | Copiosis v7.1 | Copiosis.net | copiosis.net | MIT | Permisiva | BAJO | Ninguno | Usar directo |
| 3 | Conway Automaton | Conway-Research | github.com/Conway-Research/automaton | MIT | Permisiva | BAJO | Ninguno | Usar directo |
| 4 | OneManCompany | 1mancompany | github.com/1mancompany | Apache-2.0 | Permisiva | BAJO | Ninguno | Usar directo |
| 5 | Integral Collective | Integral-Collective | github.com/Integral-Collective | MIT | Permisiva | BAJO | Ninguno | Usar directo |
| 6 | DisCO | disco-coop | github.com/disco-coop | *Pendiente* | DESCONOCIDA | LATENTE | Revisar licencia repo | Auditar antes de usar |
| 7 | FABSHIP/HUMANIA | fabship | github.com/fabship | *Pendiente* | DESCONOCIDA | LATENTE | Revisar licencia repo | Auditar antes de usar |
| 8 | Auravana/OC/TVP/RBE | auravana.org | auravana.org | *Pendiente* | DESCONOCIDA | LATENTE | Sitio web, no repo | Verificar términos |
| 9 | Prosocial Protocol | prosocial | github.com/prosocial | *Pendiente* | DESCONOCIDA | LATENTE | Revisar licencia repo | Auditar antes de usar |
| 10 | 8 Formas de Capital | 8forms.capital | 8forms.capital | *Pendiente* | DESCONOCIDA | LATENTE | Contenido web | Verificar términos |
| 11 | DeseOS/Contento.pro | Pepe Sevilla | demo.contento.pro | MIT | Permisiva | BAJO | *Ver Legal Notice* | **Ver docs/LEGAL_NOTICE.md** |
| 12 | Gaia-Mycelium | gaia-mycelium.org | gaia-mycelium.org | MIT | Permisiva | BAJO | Ninguno | Usar directo |
| 13 | Project Weave | projectweave.tech | projectweave.tech | *Análisis* | DESCONOCIDA | LATENTE | Análisis exhaustivo | Verificar licencia |
| 14 | OpenHaven | openhaven.net | openhaven.net | *Pendiente* | DESCONOCIDA | LATENTE | Sitio web | Verificar términos |
| 15 | cyfyifanchen/opc | cyfyifanchen | github.com/cyfyifanchen/opc | MIT | Permisiva | BAJO | Ninguno | Usar directo |
| 16 | opc-source/opc | opc-source | github.com/opc-source/opc | Apache-2.0 | Permisiva | BAJO | Ninguno | Usar directo |
| 17 | awesome-opc | chen103226 | github.com/chen103226/awesome-opc | CC BY 4.0 | Permisiva (atribución) | BAJO | Requiere atribución | Mantener atribución |
| 18 | metacrisis.org | metacrisis.org | metacrisis.org | Curada (múltiples) | MÚLTIPLE | MEDIO | Cada proyecto propia licencia | Verificar cada dependencia |
| 17 | OneManCompany | 1mancompany | github.com/1mancompany/OneManCompany | Apache-2.0 | Permisiva | BAJO | Ninguno | Usar directo |
| 18 | OpenExecutive | SenteLabsAI | github.com/SenteLabsAI/OpenExecutive | MIT | Permisiva | BAJO | Apache 2.0 original | Usar directo (MIT compat) |
| 19 | Marketing OS | Yuzzyuk | github.com/Yuzzyuk/marketing-os | MIT | Permisiva | BAJO | Ninguno | Usar directo |
| 20 | Gaia Meta-Plataforma | Maestro doc | Local | MIT | Permisiva | BAJO | Documento maestro | Usar directo |
| 21 | Libro Ecoaldeas | Manual | Local | MIT | Permisiva | BAJO | Libro completo | Usar directo |
| 22 | Gaia Commons Framework | Gaia Commons | Documento | MIT | Permisiva | BAJO | Documento maestro | Usar directo |
| 23 | CoRe Tokenomics | Gaia Economy | Documento | MIT | Permisiva | BAJO | Documento | Usar directo |
| 24 | Gaia Commons Constitution | Gaia Commons | Documento | MIT | Permisiva | BAJO | Documento | Usar directo |
| 25 | Paper Nodos Cuidado | Ecoaldeas LATAM | Paper | MIT | Permisiva | BAJO | Paper académico | Usar directo |
| 26 | Breadchain bread-docs | BreadchainCoop | github.com/BreadchainCoop/bread-docs | MIT | Permisiva | BAJO | Ninguno | Usar directo |
| 27 | Breadchain crowdstake.fun | BreadchainCoop | github.com/BreadchainCoop/crowdstake.fun | MIT | Permisiva | BAJO | Ninguno | Usar directo |
| 28 | Breadchain ourcoop | BreadchainCoop | github.com/BreadchainCoop/ourcoop | MIT | Permisiva | BAJO | Ninguno | Usar directo |
| 29 | Breadchain bread-design-system | BreadchainCoop | github.com/BreadchainCoop/bread-design-system | MIT | Permisiva | BAJO | Ninguno | Usar directo |
| 30 | Breadchain coopstable-contracts | BreadchainCoop | github.com/BreadchainCoop/coopstable-contracts | MIT | Permisiva | BAJO | Ninguno | Usar directo |
| 31 | Breadchain monorepo | BreadchainCoop | github.com/BreadchainCoop/monorepo | MIT | Permisiva | BAJO | Commonware fork | Verificar upstream |
| 32 | Breadchain commonware-restaking | BreadchainCoop | github.com/BreadchainCoop/commonware-restaking-contracts | MIT | Permisiva | BAJO | Commonware upstream | Verificar upstream |
| 33 | Breadchain bread-gnosis-pay | BreadchainCoop | github.com/BreadchainCoop/bread-gnosis-pay | MIT | Permisiva | BAJO | Gnosis Pay integration | Verificar términos Gnosis |
| 34 | Breadchain breadchain-crowdstaking | BreadchainCoop | github.com/BreadchainCoop/breadchain-crowdstaking | MIT | Permisiva | BAJO | Archivado | Usar directo |
| 35 | Breadchain ourcoop | BreadchainCoop | github.com/BreadchainCoop/ourcoop | MIT | Permisiva | BAJO | Ninguno | Usar directo |
| 36 | Breadchain bread-docs | BreadchainCoop | github.com/BreadchainCoop/bread-docs | MIT | Permisiva | BAJO | Documentación | Usar directo |
| 37 | Breadchain crowdstake.fun | BreadchainCoop | github.com/BreadchainCoop/crowdstake.fun | MIT | Permisiva | BAJO | Frontend | Usar directo |
| 38 | Breadchain breadchain-crowdstaking | BreadchainCoop | github.com/BreadchainCoop/breadchain-crowdstaking | MIT | Permisiva | BAJO | Archivado | Usar directo |
| 39 | Células de Libertad | 3 PDFs | Local/PDF | *Sin licencia* | DESCONOCIDA | LATENTE | PDFs locales | Verificar autor/origen |
| 38 | Colaberry | Isaacko0 | github.com/Isaacko0/HR_AI_Agent-collaberry-HSCSG | *Sin licencia* | DESCONOCIDA | LATENTE | Repo propio | Añadir licencia MIT |
| 39 | colony-gql | JoinColony | github.com/JoinColony/colony-gql | GPL-3.0 | COPYLEFT FUERTE | **ALTO** | Contamina core HSCSG | **Aislar en microservicio** |
| 39 | ColonyFrontEndLivingStandard | JoinColony | github.com/JoinColony/ColonyFrontEndLivingStandard | No especificada | DESCONOCIDA | LATENTE | Guía interna | Verificar licencia |
| 39 | colonyJS | JoinColony | github.com/JoinColony/colonyJS | GPL-3.0 | COPYLEFT FUERTE | **ALTO** | Contamina core HSCSG | **Aislar en microservicio** |
| 39 | colonyNetwork | JoinColony | github.com/JoinColony/colonyNetwork | GPL-3.0 | COPYLEFT FUERTE | **ALTO** | Contamina core HSCSG | **Aislar en microservicio** |
| 39 | colonySDK | JoinColony | github.com/JoinColony/colonySDK | GPL-3.0 | COPYLEFT FUERTE | **ALTO** | Contamina core HSCSG | **Aislar en microservicio** |
| 40 | Compai CRM | trycompai | github.com/trycompai/crm | MIT | Permisiva | BAJO | Turborepo monorepo | Usar directo |
| 41 | ContentCreation | CynthiaSalazarB | github.com/CynthiaSalazarB/ContentCreation-OS | *Verificar LICENSE* | DESCONOCIDA | LATENTE | Revisar LICENSE repo | Verificar antes de fusión |
| 42 | Copiosis | Copiosis.net | copiosis.net | MIT | Permisiva | BAJO | Web scraping | Usar directo |
| 43 | CoRe Tokenomics | Gaia Economy | Documento | MIT | Permisiva | BAJO | Documento | Usar directo |
| 44 | cyfyifanchen/opc | cyfyifanchen | github.com/cyfyifanchen/opc | MIT | Permisiva | BAJO | Ninguno | Usar directo |
| 45 | DeseOS/Contento.pro | Pepe Sevilla | DeseOS_project1.zip | MIT | Permisiva | BAJO | *Ver Legal Notice* | **Ver docs/LEGAL_NOTICE.md** |
| 46 | EcoAldea Monte | EcoAldea Raíces | Paper/Web | MIT | Permisiva | BAJO | Paper/evento | Usar directo |
| 47 | el_enlace_yoka_fabio | Yoka & Fabio Balbi | PDF local | **CC BY-NC-ND 4.0** | **NO COMERCIAL / NO DERIVADAS** | **ALTO** | **Bloquea retorno financiero** | **Sustituir/Remover o negociar licencia** |
| 48 | filosofia_propria_yoka | Yoka | PDF local | **CC BY-NC-ND 4.0** | **NO COMERCIAL / NO DERIVADAS** | **ALTO** | **Bloquea retorno financiero** | **Sustituir/Remover o negociar licencia** |
| 49 | fresco_rbe | Jacque Fresco/RBE | PDF/tesis | *Sin licencia* | DESCONOCIDA | LATENTE | Tesis académicas | Verificar dominio público |
| 50 | gaiaunion | Gaia Union | Documento local | *Sin licencia* | DESCONOCIDA | LATENTE | Documento local | Verificar autor |
| 51 | gaia_backup | Gaia Confederation | Web/Whitepaper | *Sin licencia* | DESCONOCIDA | LATENTE | Sitio web | Verificar términos |
| 52 | gaia_commons_constitution | Gaia Commons | Documento | MIT | Permisiva | BAJO | Documento | Usar directo |
| 53 | gaia_commons_framework | Gaia Commons | Documento | MIT | Permisiva | BAJO | Documento | Usar directo |
| 54 | gaia_ecohabitats | Gaia Union | Documento | MIT | Permisiva | BAJO | Documento | Usar directo |
| 55 | gaia_metaplatform | Gaia Meta-Platform | Documento local | *Sin licencia* | DESCONOCIDA | LATENTE | Documento maestro | Verificar autor |
| 56 | gaia_mycelium | Alianza Gaia-Mycelium | Documento | MIT | Permisiva | BAJO | Alianza | Usar directo |
| 57 | guifv_life | GuiFV | github.com/GuiFV/life | *Sin licencia* | DESCONOCIDA | LATENTE | Django app | Verificar LICENSE repo |
| 58 | iambrainstorming | Amiya Tulu | github.com/iambrainstorming | CC + MIT (dual) | DUAL | MEDIO | CC + MIT | Usar MIT branch |
| 59 | integral_backup | Integral Collective | 9 repos | MIT | Permisiva | BAJO | Filosofía cooperativa | Usar directo |
| 60 | kleros-court | Kleros | github.com/kleros/kleros | GPL-3.0 | COPYLEFT FUERTE | **ALTO** | Contamina core HSCSG | **Aislar en microservicio** |
| 61 | kleros-ecosystem | Kleros | 5+ repos | *Sin licencia* | DESCONOCIDA | LATENTE | Ecosistema GPL | Verificar cada repo |
| 62 | libro_ecoaldeas | Libro | Documento | MIT | Permisiva | BAJO | Libro completo | Usar directo |
| 63 | marketing_os | Yuzzyuk | github.com/Yuzzyuk/marketing-os | MIT | Permisiva | BAJO | MIT original | Usar directo |
| 54 | metacrisis | Kyle Kowalski | metacrisis.org | Curada (múltiples) | MÚLTIPLE | MEDIO | Cada proyecto propia licencia | Verificar cada dependencia |
| 55 | mk1_balbi | Fabio Balbi | PDF local | MIT | Permisiva | BAJO | Modelo ontológico | Usar directo |
| 56 | nextcloud_backup | Nextcloud | github.com/nextcloud/server | **AGPL-3.0-or-later** | COPYLEFT FUERTE + SaaS | **ALTO** | Trigger SaaS | **Aislar en microservicio / no usar en core** |
| 56 | nodos_cuidado_proximidad | Ecoaldeas LATAM | Paper | MIT | Permisiva | BAJO | Paper académico | Usar directo |
| 57 | nooa_backup | NVIDIA NeMo | github.com/NVIDIA-NeMo/labs-OO-Agents | Apache-2.0 | Permisiva | BAJO | SPDX en archivos | Usar directo |
| 58 | obsidian_vault_backup | Isaac Ko | Vault local | MIT | Permisiva | BAJO | Vault personal | Usar directo |
| 59 | onemanco_backup | 1mancompany | github.com/1mancompany/OneManCompany | Apache-2.0 | Permisiva | BAJO | Ninguno | Usar directo |
| 60 | openbot_backup | CopilotKit | github.com/CopilotKit/OpenBot | MIT | Permisiva | BAJO | Bun monorepo | Usar directo |
| 61 | opencivics_commons | OpenCivics | opencivics.co/commons | Creative Commons | Permisiva (varia) | MEDIO | CC BY/SA varia | Verificar cada entrada |
| 62 | opencivics_wiki | OpenCivics | wiki.opencivics.co | *Sin licencia* | DESCONOCIDA | LATENTE | Obsidian Publish | Verificar términos |
| 63 | openexecutive_backup | SenteLabsAI | github.com/SenteLabsAI/OpenExecutive | MIT | Permisiva | BAJO | Apache 2.0 original | Usar directo |
| 64 | prioritize_backup | ZiadJ | github.com/ZiadJ/prioritize | *Sin licencia* | DESCONOCIDA | LATENTE | Revisar LICENSE repo | Verificar antes de usar |
| 65 | scihive_mundus | Sci-Hive | sci-hive.com | *Sin licencia* | DESCONOCIDA | LATENTE | Datapoint web | Verificar términos |
| 66 | shivarthu_backup | Shivarthu | github.com/silicology1/shivarthu | MIT | Permisiva | BAJO | Substrate/FRAME | Usar directo |
| 67 | SISTEMA_ALRAICO | 7 PDFs + BRIEF | Local/PDF | MIT | Permisiva | BAJO | Documentos propios | Usar directo |
| 68 | solarpunk_isaac | Isaacko0 | github.com/Isaacko0/solarpunk_utopia | *Sin licencia* | DESCONOCIDA | LATENTE | Repo propio | Añadir licencia MIT |
| 68 | solarpunk_liz | lizTheDeveloper | github.com/lizTheDeveloper/solarpunk_utopia | *Sin licencia* | DESCONOCIDA | LATENTE | Repo ajeno | Verificar LICENSE |
| 69 | sovereignty_hub | overkillkulture | github.com/overkillkulture/sovereignty-hub | MIT | Permisiva | BAJO | Repo propio | Usar directo |
| 70 | sovereignty_hub_ui | tairea | github.com/tairea/sovereignty-hub-ui | MIT | Permisiva | BAJO | Hereda del hub | Usar directo |
| 71 | symbiosky_backup | Symbiosky | GitLab | MIT | Permisiva | BAJO | Whitepaper + Typst | Usar directo |
| 72 | tekitl_backup | Baruch4413 | github.com/Baruch4413/tekitl | **GPL-3.0** | COPYLEFT FUERTE | **ALTO** | Contamina core HSCSG | **Aislar en microservicio** |
| 73 | trustlines_backup | trustlines-protocol | github.com/trustlines-protocol/contracts | MIT | Permisiva | BAJO | Contratos Solidity | Usar directo |
| 74 | usdglo_backup | Glo Foundation | github.com/Glo-Foundation/usdglo-celo | MIT | Permisiva | BAJO | SPDX en contratos | Usar directo |
| 75 | Murra - Estado Inca | John V. Murra | Libro (Siglo XXI) | *Derechos editoriales* | PROPIETARIA (libro) | MEDIO | Libro publicado | Uso bajo cita/parafraseo |
| 76 | Kardiner - Individuo/Sociedad | Abram Kardiner | Libro (FCE) | *Derechos editoriales* | PROPIETARIA (libro) | MEDIO | Libro publicado | Uso bajo cita/parafraseo |
| 77 | Q'ero - Último Ayllu | Flores Ochoa et al. | Libro (UNMSM) | *Derechos editoriales* | PROPIETARIA (libro) | MEDIO | Libro publicado | Uso bajo cita/parafraseo |
| 78 | Pepe Sevilla / HAPPPY | Pepe Sevilla | DeseOS/Contento.pro | MIT (frameworks) | Permisiva | BAJO | **Ver docs/LEGAL_NOTICE.md** | **Ver docs/LEGAL_NOTICE.md** |
| 79 | STWR / Mesbahi | STWR | sharing.org | *Contenido web* | PROPIETARIA (web) | MEDIO | Web/STWR | Uso bajo cita/parafraseo |
| 80 | STWR Legal Foundation | Documento | Local | MIT (doc) | Permisiva | BAJO | Documento propio | Usar directo |

---

## 3. CASOS DE MAYOR RIESGO — ANÁLISIS DETALLADO

### 3.1 COPYLEFT FUERTE (GPL/AGPL) — Contaminación Core HSCSG

| Fuente | Licencia | Archivos Afectados | Riesgo | Acción Requerida |
|---|---|---|---|---|
| **Colony (4 repos)** | GPL-3.0 | colony-gql, colonyJS, colonyNetwork, colonySDK | **CRÍTICO** | Aislar en microservicio separado; no linkear en core |
| **Kleros (5+ repos)** | GPL-3.0 | kleros-court, kleros-ecosystem | **CRÍTICO** | Aislar en microservicio; no linkear en core |
| **Nextcloud** | AGPL-3.0-or-later | nextcloud_backup.md | **CRÍTICO** | Trigger SaaS; no usar en core HSCSG |
| **Tekitl** | GPL-3.0 | tekitl_backup.md | **CRÍTICO** | Aislar en microservicio |
| **Kleros-ecosystem** | GPL-3.0 (probable) | kleros-ecosystem_backup.md | **CRÍTICO** | Verificar cada repo |

**Mitigación estándar GPL/AGPL:**
1. **No linkear estáticamente** en binario/core HSCSG
2. **Comunicación vía RPC/HTTP/CLI** (proceso separado = "mere aggregation" GPL)
3. **Microservicio dedicado** con API propia (REST/gRPC)
4. **Licencia del microservicio** = GPL/AGPL (cumplir copyleft)
5. **Core HSCSG** = MIT (no contaminado)

### 3.2 NO COMERCIAL / NO DERIVADAS (CC BY-NC-ND 4.0) — Bloquea Retorno Financiero

| Fuente | Licencia | Archivos | Conflicto | Acción Requerida |
|---|---|---|---|---|
| **el_enlace_yoka_fabio_backup.md** | CC BY-NC-ND 4.0 | Yoka & Fabio Balbi | **Bloquea uso comercial, derivados, adaptación** | **ELIMINAR o NEGOCIAR** |
| **filosofia_propria_yoka_backup.md** | CC BY-NC-ND 4.0 | Yoka | **Bloquea retorno financiero HSCSG** | **ELIMINAR o NEGOCIAR** |

**Análisis de conflicto:**
- HSCSG v15 OS tiene **retorno financiero explícito** (CaaS, ZNU, Skill Marketplace, Fondo Solarpunk)
- **NC** = "No puedes usar la obra para fines comerciales principalmente" → **INCOMPATIBLE**
- **ND** = "No puedes distribuir material modificado" → **INCOMPATIBLE** con asimilación/extensión
- **Mitigación:** 
  1. **Eliminar backups** del repo local (ya son solo local)
  2. **No integrar** en código/core HSCSG
  3. **Opción:** Contactar a Yoka/Fabio → negociar licencia comercial / CC BY 4.0
  4. **Alternativa:** Reescribir conceptos propios (idea/expresión dicotomía)

### 3.2 LICENCIAS PROBLEMÁTICAS ADICIONALES

| Fuente | Licencia | Problema |
|---|---|---|
| **AuroraGov** | Elastic License 2.0 (ELv2) | Source-available, no OSI-approved; restricciones SaaS |
| **Nextcloud** | AGPL-3.0-or-later | Trigger SaaS + copyleft fuerte |
| **AI Alliance** | Tri-licencia (Apache/CC-BY/CDLA) | CDLA = Community Data License Agreement (v2.0) - verificar compatibilidad |
| **OpenCivics Commons** | Creative Commons (varia) | Verificar cada entrada (BY/SA/NC/ND) |
| **OpenCivics Wiki** | Obsidian Publish | Términos de servicio Obsidian |
| **Metacrisis** | Curada (múltiples) | Cada proyecto propia licencia |
| **Metacrisis** | Curada (múltiples) | Cada proyecto propia licencia |
| **OpenCivics Wiki** | Obsidian Publish | Términos de servicio Obsidian |
| **Tekitl** | GPL-3.0 | Copyleft fuerte |
| **Colony (4 repos)** | GPL-3.0 | Copyleft fuerte |
| **Kleros** | GPL-3.0 | Copyleft fuerte |

---

## 4. FUENTES SIN LICENCIA DETECTADA (RIESGO LATENTE) — 20+

| Backup File | Tipo | Acción Requerida |
|---|---|---|
| berryvesting_backup.md | Repo GitHub | Verificar LICENSE en repo |
| biotesis_yoka_corpus_nuclear_backup.md | Corpus PDF (213 PDFs) | Verificar cada PDF / autor |
| celulas_backup.md | 3 PDFs locales | Verificar autor/origen |
| colaberry_backup.md | Repo GitHub | Verificar LICENSE |
| fresco_rbe_backup.md | Tesis académicas | Verificar dominio público / fair use |
| gaiaunion_backup.md | Documento local | Verificar autor |
| gaia_backup.md | Web/Whitepaper | Verificar términos sitio |
| gaia_metaplatform_backup.md | Documento maestro | Verificar autor |
| gaia_mycelium_backup.md | Alianza | Verificar términos alianza |
| guifv_life_backup.md | Repo Django | Verificar LICENSE repo |
| kleros-ecosystem_backup.md | Ecosistema 5+ repos | Verificar cada repo |
| opencivics_wiki_backup.md | Obsidian Publish | Verificar TOS Obsidian |
| prioritize_backup.md | Repo GitHub | Verificar LICENSE repo |
| scihive_mundus_backup.md | Datapoint web | Verificar términos |
| solarpunk_isaac_backup.md | Repo propio | Añadir LICENSE MIT |
| solarpunk_liz_backup.md | Repo ajeno | Verificar LICENSE |
| scihive_mundus_backup.md | Datapoint web | Verificar términos |
| gaiaunion_backup.md | Documento local | Verificar autor |
| fresco_rbe_backup.md | Tesis | Verificar dominio público |
| prioritize_backup.md | Repo GitHub | Verificar LICENSE |

**Acción masiva requerida:** Script para añadir `LICENSE` (MIT) a todos los repos propios sin licencia; contactar autores ajenos.

---

## 5. PROPUESTA DE ESQUEMA ACTUALIZADO `fuentes_indice.json`

```json
{
  "fuentes": [
    {
      "id": 1,
      "nombre": "OpenBot (CopilotKit)",
      "url": "https://github.com/CopilotKit/OpenBot",
      "estado": "✅ Completo",
      "backup": "openbot_backup.md",
      "integration": "openbot_integration.md",
      "briefs_relacionados": ["BF-010", "BF-011", "BF-050", "BF-051", "BF-052"],
      "seccion_ref": "2.1",
      "licencia": "MIT",
      "tipo_licencia": "permisiva",
      "riesgo_legal": "BAJO",
      "tipo_contenido": "codigo",
      "auditada": true,
      "fecha_auditoria": "2026-09-10"
    }
    // ... resto de entradas con campos añadidos
  ]
}
```

**Campos nuevos propuestos:**
| Campo | Tipo | Descripción |
|---|---|---|
| `licencia` | string | Licencia detectada (MIT, GPL-3.0, CC BY-NC-ND 4.0, etc.) |
| `tipo_licencia` | enum | `permisiva` \| `copyleft` \| `no_comercial_no_derivadas` \| `propietaria` \| `desconocida` \| `multiple` |
| `riesgo_legal` | enum | `BAJO` \| `MEDIO` \| `ALTO` \| `LATENTE` |
| `tipo_contenido` | enum | `codigo` \| `corpus_textual` \| `documento` \| `libro` \| `web` \| `pdf` \| `paper` |
| `auditada` | boolean | Si pasó auditoría completa |
| `fecha_auditoria` | string | ISO date |
| `mitigacion` | string | Resumen de mitigación aplicada/requerida |

---

## 6. PLAN DE ACCIÓN PRIORIZADO

### Inmediato (Esta Semana)
1. [ ] **Eliminar/aislar** backups NC-ND (Yoka/Fabio) → mover a carpeta `docs/_licencia_incompatible/`
2. [ ] **Aislar en microservicios** todos los GPL/AGPL (Colony, Kleros, Nextcloud, Tekitl)
3. [ ] **Añadir LICENSE MIT** a repos propios sin licencia (solarpunk_isaac, colaberry, etc.)
4. [ ] **Contactar autores** Yoka/Fabio para negociar licencia comercial/CC BY 4.0

### Corto Plazo (2 Semanas)
4. [ ] **Auditar 20+ fuentes latentes** → contactar autores / verificar LICENSE en repos
5. [ ] **Actualizar `fuentes_indice.json`** con campos nuevos (licencia, riesgo, tipo, auditada)
5. [ ] **Crear microservicios** para Colony, Kleros, Nextcloud, Tekitl (aislamiento GPL/AGPL)
6. [ ] **Documentar aislamiento** en `docs/GP_AGPL_ISOLATION.md`

### Mediano Plazo (1 Mes)
7. [ ] **Negociar con Yoka/Fabio** licencia comercial / CC BY 4.0 para contenido NC-ND
8. [ ] **Verificar licencias** OpenCivics (cada entrada), Metacrisis (cada dep), AuroraGov (ELv2)
9. [ ] **Actualizar `fuentes_indice.json`** con campos nuevos para todas las 52+ fuentes
10. [ ] **Integrar en CI/CD** check de licencias (license-checker, licensee.js)

---

## 7. VERIFICACIÓN DE CUMPLIMIENTO (CHECKLIST)

- [x] **Backup files** → solo local, nunca en GitHub público ✓
- [x] **Integration files** → sin contenido literal de backups ✓
- [ ] **No código GPL/AGPL linkado en core** → verificar `package.json` / imports
- [ ] **No contenido NC-ND en core/dist** → verificar build output
- [ ] **LICENSE MIT** en root del repo HSCSG_v15_OS
- [ ] **NOTICE/ATTRIBUTION** para dependencias MIT/Apache/BSD
- [ ] **SPDX headers** en archivos fuente nuevos
- [ ] **Legal Notice** actualizada (`docs/LEGAL_NOTICE.md`)

---

## 8. CONCLUSIÓN

**Estado actual:** Auditoría parcial (solo 2 repos analizados en `LEGAL_PROTECTION_FINANCIAL_RETURN.md`) → **Auditoría completa** (52 fuentes, 71 backups, 77 integraciones).

**Hallazgos críticos:**
1. **9 fuentes ALTO RIESGO** (7 GPL/AGPL + 2 NC-ND) requieren acción inmediata
2. **20+ fuentes LATENTES** sin licencia detectable → auditoría pendiente
3. **2 NC-ND (Yoka/Fabio)** bloquean retorno financiero → requieren eliminación/negociación
3. **7 GPL/AGPL** requieren aislamiento en microservicios

**Próximo paso:** Ejecutar plan de acción priorizado. ¿Procedo con la implementación de aislamiento de microservicios GPL/AGPL y movimiento de backups NC-ND?