# AUDITORÍA DE LICENCIAS Y CONFLICTOS LEGALES — FUENTES ASIMILADAS
## Inventario legal completo de las asimilaciones vía `hscsg-repo-assimilation`

**Fecha:** 2026-09-10
**Versión:** 1.0
**Clasificación:** INTERNO — Insumo obligatorio para toda decisión de uso comercial
**Alcance:** 112 fuentes (50 entradas de `docs/fuentes_indice.json` + 62 fuentes asimiladas presentes en `docs/*_backup.md` / `docs/*_integration.md` sin entrada en el índice)
**Criterios aplicados:** matriz de compatibilidad de `AREX_SKILL_SYNERGY_PLAN.md` §1.3 + análisis de `LEGAL_PROTECTION_FINANCIAL_RETURN.md` + doctrinas de `LEGAL_NOTICE.md`
**Sustituye a:** el análisis parcial de `LEGAL_PROTECTION_FINANCIAL_RETURN.md` §1.1 (solo `brendanhogan/loophole` y `open-legal-products/mike`)

---

## 1. RESUMEN EJECUTIVO

### 1.1 Conteo por nivel de riesgo

| Nivel | Fuentes | % | Significado |
|-------|---------|---|-------------|
| **ALTO** | 30 | 27% | Copyleft fuerte, No-Comercial/No-Derivadas, source-available con cláusula SaaS, u obra de tercero reproducida literalmente. **Bloquea o condiciona el retorno financiero.** |
| **MEDIO** | 58 | 52% | Licencia no declarada o no verificada (riesgo latente): por defecto, todos los derechos reservados. |
| **BAJO** | 24 | 21% | Permisiva (MIT / Apache-2.0 / BSD), CC BY, CC0 o IP propia. Uso comercial libre con atribución. |
| **TOTAL** | **112** | 100% | |

### 1.2 Conteo por tipo de licencia

| Tipo | Fuentes |
|------|---------|
| Desconocida | 59 |
| Permisiva | 24 |
| Source-available / Propietaria | 15 |
| Copyleft fuerte | 8 |
| No-comercial / No-derivadas | 3 |
| Contenido abierto (CC) | 2 |
| Dominio público (CC0) | 1 |

**Cobertura de auditoría:** 59 de 112 fuentes (53%) NO declaran licencia verificable en su `_backup.md`. Solo 22 de los 83 archivos `_backup.md` presentes en el repositorio incluyen un campo `**Licencia:**`.

### 1.3 Lista priorizada de acciones de mitigación

| # | Prioridad | Acción | Fuentes afectadas | Criterio |
|---|-----------|--------|-------------------|----------|
| 1 | **P0 — Bloqueante** | **Retirar del repo público los backups que reproducen obras completas de terceros** | `F-27` (libro íntegro de Amiya Tulu), `F-33` (tesis Towards an Open Civics), `24` (Libro Ecoaldeas Federadas), `F-20`/`F-21` (corpus NC-ND de Yoka & Balbi) | `LEGAL_NOTICE.md` §5: el material literal de terceros debe permanecer SOLO LOCAL |
| 2 | **P0 — Bloqueante** | **Resolver el conflicto NC-ND (Yoka & Fabio Balbi)**: obtener licencia comercial escrita o dual-licensing; si no se obtiene, sustituir el material por síntesis propia no derivada | `F-15`, `F-20`, `F-21`, `F-22` | CC BY-NC-ND 4.0 prohíbe uso comercial Y obras derivadas |
| 3 | **P0 — Bloqueante** | **Aislar todo copyleft fuerte en microservicios separados** con repo propio bajo la misma licencia y adapter abstracto; cero imports en `src/core/` | `F-02`…`F-05` (Colony, GPL-3.0), `F-28` (Kleros, GPL-3.0), `F-43` (tekitl, GPL-3.0), `F-29` (Nextcloud, AGPL-3.0), `F-61` (Mike, AGPL-3.0) | `LEGAL_PROTECTION` §2 Capa 1 + `AREX_SKILL_SYNERGY_PLAN` §1.3 |
| 4 | **P1 — Alta** | **No integrar código source-available con cláusula anti-SaaS**; reimplementar o negociar licencia comercial | `F-11` (Aurora ELv2), `F-47` (Didacta SUL) | Ambas licencias prohíben explícitamente el servicio gestionado de pago |
| 5 | **P1 — Alta** | **Mantener los backups de obras publicadas (libros) fuera del repo** y limitar su uso a cita breve + análisis transformativo | `115`–`125` | Doctrinas de `LEGAL_NOTICE.md` §2 (idea-expresión, uso transformativo) |
| 6 | **P1 — Alta** | **Cumplimiento continuo del marco Pepe Sevilla / Happy** (DeseOS/ContenOS): CI `validate:terminology`, documento original solo local | `11`, `126`, `F-62` | `LEGAL_NOTICE.md` + `HOMOLOGACION_TERMINOS_PEPE_SEVILLA_HSCSG.md` |
| 7 | **P2 — Media** | **Campaña de auditoría de las 59 fuentes sin licencia declarada**: añadir el campo `**Licencia:**` a cada `_backup.md` y rellenar `licencia`/`riesgo_legal` en el índice | todas las marcadas `DESCONOCIDA / NO AUDITADA` | Sin licencia declarada ⇒ todos los derechos reservados por defecto |
| 8 | **P2 — Media** | **Verificación pre-merge automatizada**: gate de CI que rechace un `_backup.md` nuevo sin campo `**Licencia:**` y bloquee imports de paquetes copyleft en `src/core/` | proceso | `LEGAL_PROTECTION` §7 (auditoría `grep` pre-deploy) |
| 9 | **P2 — Media** | **Formalizar acuerdos de colaboración recíproca** con los colectivos identificados (Gaia, Ecoaldea Raíces del Monte, Urbanika, Sci-Hive) incluyendo cláusula de licencia explícita | `12`, `20`, `23`–`28`, `F-24`…`F-26`, `F-36`, `F-49`…`F-58` | Riesgo relacional, no solo legal |
| 10 | **P3 — Baja** | **Atribución y NOTICE** en todos los derivados de fuentes permisivas | todas las de riesgo BAJO | MIT/Apache-2.0 exigen preservar avisos |

---

## 2. CASOS DE MÁXIMO RIESGO (DESTACADOS)

### 2.1 Copyleft fuerte — contaminación del core HSCSG

El core HSCSG está licenciado MIT/Apache-2.0 (`LEGAL_PROTECTION` §2.2). Cualquier enlace desde el core a estas fuentes obliga a relicenciar el core:

| Fuente | Licencia | Trigger |
|--------|----------|---------|
| `open-legal-products/mike` (`F-61`) | AGPL-3.0 | Modificación + exposición por red (§13) |
| `nextcloud/server` (`F-29`) | AGPL-3.0-or-later | Modificación + exposición por red (§13) |
| `JoinColony/*` (`F-02`…`F-05`) | GPL-3.0 | Distribución de obra derivada |
| `Kleros` (`F-28`) | GPL-3.0 | Distribución de obra derivada |
| `Baruch4413/tekitl` (`F-43`) | GPL-3.0 | Distribución de obra derivada |

**Mitigación única aceptada:** microservicio aislado + repo separado bajo la licencia copyleft + adapter abstracto propio en el core (patrón `hscsg-mike-wrapper`). Regla de oro: **cero `import` de estos paquetes en `src/core/`**.

### 2.2 No-Comercial / No-Derivadas — conflicto directo con el retorno financiero

**Sin mitigación documentada hasta esta auditoría.**

| Fuente | Autor(es) | Licencia | Por qué bloquea |
|--------|-----------|----------|-----------------|
| `el_enlace_yoka_fabio_backup.md` (`F-20`) | Yoka (ex-Diego) + Fabio F. Balbi | CC BY-NC-ND 4.0 | **NC**: la integración en un nodo de pago es uso comercial. **ND**: la asimilación conceptual produce obra derivada |
| `filosofia_propria_yoka_backup.md` (`F-21`) | Yoka (ex-Diego) | CC BY-NC-ND 4.0 | Igual que el anterior |
| `biotesis_yoka_corpus_nuclear_backup.md` (`F-15`) | Yoka (ex-Diego) | No declarada; el resto del corpus del autor es CC BY-NC-ND 4.0 | Presunción de NC-ND por coherencia de autor |
| `mk1_balbi_backup.md` (`F-22`) | Fabio F. Balbi | No declarada; mismo autor que `F-20` | MK-1 está integrado operativamente en el Sistema Alráico |

**Acción requerida (P0):** autorización escrita de Yoka y de Fabio F. Balbi (licencia comercial o dual-licensing) o retirada del material del producto. Los cuatro archivos están actualmente **versionados en el repositorio público**.

### 2.3 Frameworks Pepe Sevilla / Happy (DeseOS / ContenOS)

Cubiertos por `LEGAL_NOTICE.md`: transformación creativa documentada, tabla de homologación de 33 términos, `tribal_vocab.ts` y CI `validate:terminology`. **El marco existe y es correcto**; la acción pendiente es su cumplimiento continuo y verificar que el documento original con términos propietarios sigue fuera del repo (`investigacion_pepe_sevilla_happy_thiel.md` — confirmado ausente del repo; en `docs/` solo está la versión sanitizada).

### 2.4 Source-available con cláusula anti-SaaS (nuevo hallazgo)

| Fuente | Licencia | Restricción |
|--------|----------|-------------|
| `aurora-ong/aurora_gov` (`F-11`) | Elastic License 2.0 | Prohibido ofrecerlo como servicio gestionado a terceros |
| `va360labs/didacta-io` (`F-47`) | Didacta Sustainable Use License v1.0 (fair-code) | Uso interno libre; SaaS / white-label / distribución comercial requieren acuerdo con VA360 LABS |

Estas licencias **no son open source** y no aparecen en la matriz de `AREX_SKILL_SYNERGY_PLAN.md` §1.3; deben añadirse como categoría explícitamente incompatible con el modelo CaaS de pago.

### 2.5 Obras de terceros reproducidas literalmente en el repositorio público (nuevo hallazgo)

`LEGAL_NOTICE.md` §5 establece que el material literal de terceros debe permanecer **solo local**. La auditoría detecta lo contrario en:

| Archivo versionado | Contenido | Autor |
|--------------------|-----------|-------|
| `docs/iambrainstorming_libro_completo.md` | Libro íntegro (>16.000 líneas) | Amiya Tulu |
| `docs/towards_open_civics_backup.txt` | Tesis/publicación íntegra | OpenCivics |
| `docs/libro_ecoaldeas_federadas_backup.md` | Libro completo (22 capítulos) | Ecoaldeas Federadas |
| `docs/el_enlace_yoka_fabio_backup.md` | Documento CC BY-NC-ND íntegro | Yoka + Fabio Balbi |
| `docs/filosofia_propria_yoka_backup.md` | Documento CC BY-NC-ND íntegro | Yoka |
| `docs/gaia_commons_constitution_backup.md` | Constitución (402 KB de origen) | Gaia Commons |

**Nota positiva:** los backups de las obras publicadas con copyright editorial (`115`–`125`: Land, Kurzweil, Murra, Kardiner, Capella, Rojas, Q'ero, Cosmotechnics) **no están en el repositorio** — solo sus `_integration.md`. Ese es el patrón correcto y debe aplicarse a la tabla anterior.

### 2.6 Riesgo latente: backups sin campo `Licencia:`

59 de las 112 fuentes auditadas (53%) no tienen licencia declarada ni verificada. Por defecto, **todos los derechos reservados**: legalmente equivalen a material propietario mientras no se auditen.

---

## 3. TABLA DE AUDITORÍA — FUENTES DEL ÍNDICE MAESTRO

Los `ID` corresponden al campo `id` de `docs/fuentes_indice.json`.

| ID | Fuente | Autor(es) | URL / Origen | Licencia detectada | Tipo | Naturaleza | Implicación comercial | Riesgo | Conflicto potencial | Mitigación recomendada |
|----|--------|-----------|--------------|--------------------|------|------------|----------------------|--------|---------------------|------------------------|
| `1` | **OpenBot (CopilotKit)** | CopilotKit | https://github.com/CopilotKit/OpenBot | **MIT** | Permisiva | Código | Uso comercial libre con atribución | **BAJO** | Atribución omitida en derivados | Mantener LICENSE/NOTICE de upstream en el wrapper |
| `2` | **Copiosis v7.1** | Copiosis (Perry Gruber) | https://copiosis.net | **DESCONOCIDA / NO AUDITADA** | Desconocida | Corpus textual/creativo | Contenido web con copyright por defecto; sin permiso explícito de reproducción | **MEDIO** | Reproducción literal de textos del sitio en el backup | Reescribir a resumen conceptual propio; solicitar permiso o citar con enlace |
| `3` | **Conway Automaton** | Conway Research | https://github.com/Conway-Research/automaton | **DESCONOCIDA / NO AUDITADA** | Desconocida | Código | Sin licencia declarada = todos los derechos reservados por defecto | **MEDIO** | Uso de patrones/código sin permiso del autor | Verificar LICENSE del repo antes de reutilizar código; si no hay, solo asimilación conceptual |
| `4` | **OneManCompany (1mancompany)** | 1mancompany | https://github.com/1mancompany/OneManCompany | **Apache-2.0** | Permisiva | Código | Uso comercial libre; requiere NOTICE y aviso de cambios | **BAJO** | Incumplimiento de NOTICE/patent grant | Conservar NOTICE + registrar modificaciones |
| `5` | **Integral Collective (9 repos)** | Integral Collective / tairea | https://github.com/Integral-Collective | **DESCONOCIDA / NO AUDITADA** | Desconocida | Mixto (código + corpus) | 9 repos sin licencia auditada individualmente | **MEDIO** | Whitepaper y schemas reutilizados sin licencia verificada | Auditar LICENSE repo por repo antes de importar schemas o código |
| `6` | **DisCO** | DisCO.coop (Guerrilla Media Collective) | https://github.com/disco-coop | **DESCONOCIDA / NO AUDITADA (probable copyfarleft tipo Peer Production License — verificar)** | Desconocida | Corpus textual/creativo | Las licencias copyfarleft prohíben uso lucrativo a entidades no cooperativas | **MEDIO** | Retorno financiero incompatible con cláusula anti-lucro | Verificar licencia del DisCO Manifesto antes de cualquier uso comercial |
| `7` | **FABSHIP / HUMANIA** | FABSHIP | https://github.com/fabship | **DESCONOCIDA / NO AUDITADA** | Desconocida | Mixto (código + corpus) | Sin licencia verificada | **MEDIO** | Reutilización sin permiso | Auditar LICENSE antes de asimilar código |
| `8` | **Auravana / OC / TVP / RBE** | Auravana Project | https://auravana.org | **DESCONOCIDA / NO AUDITADA** | Desconocida | Corpus textual/creativo | Publicaciones extensas con condiciones propias por verificar | **MEDIO** | Uso comercial de material del proyecto sin permiso | Verificar términos de Auravana; limitar a cita y referencia |
| `9` | **Prosocial Protocol** | Prosocial | https://github.com/prosocial | **DESCONOCIDA / NO AUDITADA** | Desconocida | Mixto (código + corpus) | Sin licencia verificada | **MEDIO** | Reutilización sin permiso | Auditar LICENSE antes de asimilar |
| `10` | **8 Formas de Capital** | Ethan Roland & Gregory Landua | https://8forms.capital | **DESCONOCIDA / NO AUDITADA** | Desconocida | Corpus textual/creativo | Marco conceptual publicado con copyright de los autores | **MEDIO** | Uso del marco como producto comercial sin atribución | Atribuir a los autores; re-expresar el modelo en terminología propia (doctrina idea-expresión, LEGAL_NOTICE §2.1) |
| `11` | **DeseOS / Contento.pro** | Pepe Sevilla / equipo Contento | https://demo.contento.pro | **MIT (código, declarado en LICENSE) + marca y terminología propietarias** | Permisiva | Mixto (código + corpus) | Código reutilizable; marca/vocabulario NO | **MEDIO** | Uso de terminología propietaria del ecosistema Storyseller/Happy | Cumplir LEGAL_NOTICE.md + HOMOLOGACION_TERMINOS_PEPE_SEVILLA_HSCSG.md; validar con `npm run validate:terminology` |
| `12` | **Gaia-Mycelium** | Equipo Gaia-Mycelium (OpenHaven, Project Weave, Felipe/Mycelium) | https://gaia-mycelium.org | **DESCONOCIDA / NO AUDITADA** | Desconocida | Corpus textual/creativo | Memoria de reunión exploratoria con terceros identificados | **MEDIO** | Publicación de contenido de una conversación privada sin consentimiento | Confirmar consentimiento de los participantes o anonimizar antes de publicar |
| `13` | **Project Weave** | Project Weave | https://projectweave.tech | **DESCONOCIDA / NO AUDITADA** | Desconocida | Corpus textual/creativo | Sin licencia verificada | **MEDIO** | Descripción de arquitectura de tercero sin permiso | Limitar a análisis público y citado |
| `14` | **OpenHaven** | OpenHaven | https://openhaven.net | **DESCONOCIDA / NO AUDITADA** | Desconocida | Corpus textual/creativo | Sin licencia verificada | **MEDIO** | Descripción de arquitectura de tercero sin permiso | Limitar a análisis público y citado |
| `15` | **cyfyifanchen/one-person-company** | cyfyifanchen | https://github.com/cyfyifanchen/one-person-company | **MIT** | Permisiva | Código | Uso comercial libre con atribución | **BAJO** | Atribución omitida | Conservar LICENSE en el wrapper |
| `16` | **opc-source/one-person-company** | opc-source | https://github.com/opc-source/one-person-company | **DESCONOCIDA / NO AUDITADA** | Desconocida | Código | Backup ausente; licencia no registrada | **MEDIO** | Asimilación sin backup ni licencia verificada | Recuperar backup y auditar LICENSE |
| `17` | **chen103226/awesome-one-person-company** | chen103226 | https://github.com/chen103226/awesome-one-person-company | **CC BY 4.0** | Contenido abierto (CC) | Corpus textual/creativo | Uso comercial permitido con atribución | **BAJO** | Falta de atribución en listados derivados | Citar autor y licencia al reutilizar el listado |
| `18` | **metacrisis.org** | Kyle Kowalski (Sloww) | https://metacrisis.org | **Sin licencia unificada — contenido curado de terceros (cada proyecto con su licencia)** | Desconocida | Corpus textual/creativo | Cada recurso citado conserva su propia licencia | **MEDIO** | Reutilización agregada de material de terceros bajo licencias heterogéneas | Tratar como directorio de enlaces; no reproducir contenidos de los proyectos citados |
| `19` | **Obsidian Vault (Teoría y Síntesis HSCSG)** | Isaac Ko (Isaacko0) | local (vault personal) | **Propia (HSCSG)** | Permisiva | Corpus textual/creativo | Propiedad del PI; sin restricción externa | **BAJO** | Material de terceros mezclado dentro del vault | Separar notas propias de extractos de terceros antes de publicar |
| `20` | **Red de Intercambio Federada Ecoaldea Raíces del Monte** | Cergio Monasterio y Ecoaldea Raíces del Monte | https://feria.loanstly.com/main/p/federacion | **DESCONOCIDA / NO AUDITADA** | Desconocida | Corpus textual/creativo | 43 documentos técnicos de un colectivo identificado | **MEDIO** | Colaborador identificado puede reclamar autoría/condiciones de uso | Formalizar acuerdo de colaboración recíproca (ver COLABORACION_RECIPROCA_HSCSG_ECALDEA_RAICES.md) con cláusula de licencia explícita |
| `21` | **OpenExecutive (SenteLabsAI)** | SenteLabsAI | https://github.com/SenteLabsAI/OpenExecutive | **Apache-2.0** | Permisiva | Código | Uso comercial libre; NOTICE y aviso de cambios | **BAJO** | Incumplimiento de NOTICE | Conservar NOTICE + registrar modificaciones |
| `22` | **Marketing OS (Yuzzyuk)** | Yuzzyuk | https://github.com/Yuzzyuk/marketing-os | **MIT** | Permisiva | Código | Uso comercial libre con atribución | **BAJO** | Atribución omitida | Conservar LICENSE |
| `23` | **Gaia Meta-Plataforma (Documento Maestro)** | Equipo Gaia Union | documento local (10.556 tokens) | **DESCONOCIDA / NO AUDITADA** | Desconocida | Corpus textual/creativo | Documento maestro de tercero sin licencia | **MEDIO** | Reproducción de documento estratégico ajeno | Solicitar licencia explícita a Gaia Union o reducir a síntesis propia |
| `24` | **Libro Ecoaldeas Federadas** | Autoría Ecoaldeas Federadas (Raíces del Monte) | documento local (862 líneas) | **DESCONOCIDA / NO AUDITADA** | Desconocida | Corpus textual/creativo | Obra literaria completa de terceros reproducida en backup | **ALTO** | Reproducción sustancial de una obra → reclamación de copyright del autor | Excluir el backup del repo público; conservar solo la integración conceptual con cita |
| `25` | **Gaia Commons Framework** | Gaia Commons | documento local (62 KB) | **DESCONOCIDA / NO AUDITADA** | Desconocida | Corpus textual/creativo | Master document de tercero sin licencia | **MEDIO** | Reproducción de documento ajeno | Solicitar licencia explícita o reducir a síntesis |
| `26` | **CoRe Tokenomics** | Gaia Ecosystem Architecture | documento local (6,4 KB) | **DESCONOCIDA / NO AUDITADA** | Desconocida | Corpus textual/creativo | Especificación económica de tercero | **MEDIO** | Implementación comercial de un diseño tokenómico ajeno | Acuerdo de uso con Gaia o reimplementación desde principios propios |
| `27` | **Gaia Commons Constitution (Catalyst Phase)** | Gaia Commons | documento local (402 KB) | **DESCONOCIDA / NO AUDITADA** | Desconocida | Corpus textual/creativo | Texto constitucional de tercero | **MEDIO** | Reproducción de documento normativo ajeno | Solicitar licencia explícita; citar en vez de reproducir |
| `28` | **Paper Nodos de Cuidado de Proximidad (Ecoaldeas LATAM)** | Autores del paper institucional (2026-09) | documento local (PDF) | **DESCONOCIDA / NO AUDITADA** | Desconocida | Corpus textual/creativo | Paper académico/institucional con copyright de los autores | **MEDIO** | Uso de contenido académico sin cita formal ni permiso | Citar con referencia bibliográfica completa; no reproducir el texto íntegro |
| `29` | **One Community Global** | One Community Global | https://onecommunityglobal.org/ | **CC BY 3.0 (según footer del sitio)** | Contenido abierto (CC) | Corpus textual/creativo | Uso comercial permitido con atribución | **BAJO** | Atribución insuficiente | Incluir atribución y enlace a la licencia en cualquier derivado |
| `30` | **BreadchainCoop/bread-docs** | Breadchain Cooperative | https://github.com/BreadchainCoop/bread-docs | **DESCONOCIDA / NO AUDITADA** | Desconocida | Corpus textual/creativo | Licencia no registrada en el backup | **MEDIO** | Reutilización de documentación sin licencia verificada | Auditar LICENSE del repo y registrarlo en el índice |
| `31` | **BreadchainCoop/crowdstake.fun** | Breadchain Cooperative | https://github.com/BreadchainCoop/crowdstake.fun | **DESCONOCIDA / NO AUDITADA** | Desconocida | Código | Licencia no registrada en el backup | **MEDIO** | Importación de código sin licencia verificada | Auditar LICENSE antes de importar código |
| `32` | **BreadchainCoop/ourcoop** | Breadchain Cooperative | https://github.com/BreadchainCoop/ourcoop | **DESCONOCIDA / NO AUDITADA** | Desconocida | Código | Licencia no registrada en el backup | **MEDIO** | Importación de código sin licencia verificada | Auditar LICENSE antes de importar código |
| `33` | **BreadchainCoop/bread-design-system** | Breadchain Cooperative | https://github.com/BreadchainCoop/bread-design-system | **DESCONOCIDA / NO AUDITADA (incluye assets Figma de terceros)** | Desconocida | Mixto (código + corpus) | Los assets de diseño pueden tener términos distintos al código | **MEDIO** | Uso comercial de assets/diseño sin licencia | Auditar LICENSE + términos de los archivos Figma enlazados |
| `34` | **BreadchainCoop/coopstable-contracts** | Breadchain Cooperative | https://github.com/BreadchainCoop/coopstable-contracts | **DESCONOCIDA / NO AUDITADA** | Desconocida | Código | Licencia no registrada en el backup | **MEDIO** | Importación de contratos sin licencia verificada | Auditar LICENSE y cabeceras SPDX de los contratos |
| `35` | **BreadchainCoop/monorepo (fork Commonware)** | Breadchain Cooperative / commonwarexyz | https://github.com/BreadchainCoop/monorepo | **Dual Apache-2.0 / MIT** | Permisiva | Código | Uso comercial libre eligiendo cualquiera de las dos | **BAJO** | Atribución/NOTICE omitidos en el fork | Conservar LICENSE-APACHE y LICENSE-MIT del upstream |
| `36` | **BreadchainCoop/commonware-restaking-contracts** | Breadchain Cooperative | https://github.com/BreadchainCoop/commonware-restaking-contracts | **DESCONOCIDA / NO AUDITADA** | Desconocida | Código | Licencia no registrada en el backup | **MEDIO** | Importación de contratos sin licencia verificada | Auditar LICENSE y cabeceras SPDX |
| `37` | **BreadchainCoop/bread-gnosis-pay** | Breadchain Cooperative | https://github.com/BreadchainCoop/bread-gnosis-pay | **DESCONOCIDA / NO AUDITADA** | Desconocida | Código | Licencia no registrada en el backup | **MEDIO** | Importación de código sin licencia verificada | Auditar LICENSE antes de importar |
| `38` | **BreadchainCoop/breadchain-crowdstaking (archivado)** | Breadchain Cooperative | https://github.com/BreadchainCoop/breadchain-crowdstaking | **DESCONOCIDA / NO AUDITADA** | Desconocida | Código | Repo archivado; sin mantenimiento ni licencia registrada | **MEDIO** | Código huérfano sin licencia clara | Auditar LICENSE; preferir reimplementación |
| `115` | **Land — El Cortocircuito de la Democracia** | Nick Land | local (obra publicada) | **PROPIETARIA (obra con copyright del autor/editorial)** | Source-available / Propietaria | Corpus textual/creativo | Obra comercial protegida; sin licencia de reproducción | **ALTO** | Reproducción de texto literal de una obra comercial | Mantener el backup fuera del repo público (ya ausente); limitar a cita breve + análisis transformativo |
| `116` | **Land — Anarquía Fría** | Nick Land | local (obra publicada) | **PROPIETARIA (obra con copyright del autor/editorial)** | Source-available / Propietaria | Corpus textual/creativo | Obra comercial protegida | **ALTO** | Reproducción de texto literal | Backup solo local; cita breve + análisis transformativo |
| `117` | **Capella — Cibernética: Más Allá de la Praxeología** | Capella | local (obra publicada) | **PROPIETARIA (obra con copyright del autor)** | Source-available / Propietaria | Corpus textual/creativo | Obra protegida | **ALTO** | Reproducción de texto literal | Backup solo local; cita breve + análisis transformativo |
| `118` | **Land — Teleoplexia** | Nick Land | local (obra publicada) | **PROPIETARIA (obra con copyright del autor/editorial)** | Source-available / Propietaria | Corpus textual/creativo | Obra protegida | **ALTO** | Reproducción de texto literal | Backup solo local; cita breve + análisis transformativo |
| `119` | **Sandh — Ética Argumentativa No-Cognitivista** | Sandh | local (obra publicada) | **PROPIETARIA (obra con copyright del autor)** | Source-available / Propietaria | Corpus textual/creativo | Obra protegida | **ALTO** | Reproducción de texto literal | Backup solo local; cita breve + análisis transformativo |
| `120` | **Rojas — Free City: Orden Cooperativo y Competencia** | Rojas | local (obra publicada) | **PROPIETARIA (obra con copyright del autor)** | Source-available / Propietaria | Corpus textual/creativo | Obra protegida | **ALTO** | Reproducción de texto literal | Backup solo local; cita breve + análisis transformativo |
| `121` | **Cosmotechnics China (Machine Decision Is Not Final)** | Yuk Hui et al. (Urbanomic/Verso) | local (obra publicada) | **PROPIETARIA (obra con copyright de autores/editorial)** | Source-available / Propietaria | Corpus textual/creativo | Obra comercial protegida | **ALTO** | Reproducción de texto literal | Backup solo local; cita breve + análisis transformativo |
| `122` | **Kurzweil — La Singularidad Está Más Cerca** | Ray Kurzweil | local (obra publicada) | **PROPIETARIA (obra con copyright del autor/editorial)** | Source-available / Propietaria | Corpus textual/creativo | Obra comercial protegida | **ALTO** | Reproducción de texto literal de un bestseller con editorial activa | Backup solo local; cita breve + análisis transformativo; nunca incluir extractos extensos en el repo público |
| `123` | **Murra — La Organización Económica del Estado Inca** | John V. Murra | local (obra publicada) | **PROPIETARIA (obra con copyright de herederos/editorial)** | Source-available / Propietaria | Corpus textual/creativo | Obra protegida | **ALTO** | Reproducción de texto literal | Backup solo local; cita académica formal |
| `124` | **Kardiner — El Individuo y su Sociedad** | Abram Kardiner | local (obra publicada) | **PROPIETARIA (obra con copyright de herederos/editorial)** | Source-available / Propietaria | Corpus textual/creativo | Obra protegida | **ALTO** | Reproducción de texto literal | Backup solo local; cita académica formal |
| `125` | **Q'ero — El Último Ayllu Inca** | Autores del estudio Q'ero | local (obra publicada) | **PROPIETARIA (obra con copyright de autores/editorial)** | Source-available / Propietaria | Corpus textual/creativo | Obra protegida; además conocimiento tradicional de una comunidad indígena | **ALTO** | Copyright editorial + apropiación de conocimiento indígena (protocolos de consentimiento comunitario) | Backup solo local; cita académica; no comercializar el conocimiento tradicional sin consentimiento de la comunidad Q'ero |
| `126` | **Pepe Sevilla — HAPPPY × HSCSG** | Pepe Sevilla (ecosistema Storyseller / Happy) | local | **PROPIETARIA (frameworks y terminología de marca)** | Source-available / Propietaria | Corpus textual/creativo | Terminología y frameworks propietarios; uso comercial requiere transformación creativa documentada | **ALTO** | Reclamación por uso de vocabulario/frameworks del ecosistema Storyseller | Cumplimiento estricto de LEGAL_NOTICE.md + HOMOLOGACION_TERMINOS_PEPE_SEVILLA_HSCSG.md; CI `validate:terminology`; documento original solo local |

---

## 4. TABLA DE AUDITORÍA — FUENTES ASIMILADAS FUERA DEL ÍNDICE MAESTRO

Fuentes con `_backup.md` / `_integration.md` en `docs/` (incluidos los subdirectorios `buzz/`, `didacta/`, `near/`, `urbanika/`) que **no tienen entrada en `docs/fuentes_indice.json`**. Los `ID` `F-xx` son identificadores de esta auditoría; se propone incorporarlos al índice maestro.

| ID | Fuente | Autor(es) | URL / Origen | Licencia detectada | Tipo | Naturaleza | Implicación comercial | Riesgo | Conflicto potencial | Mitigación recomendada |
|----|--------|-----------|--------------|--------------------|------|------------|----------------------|--------|---------------------|------------------------|
| `F-01` | **CaaS — Community as a Service (modelo de negocio)** | Fuentes web diversas (no identificadas) | conversación Brave Search (2026-08-05) | **DESCONOCIDA / NO AUDITADA** | Desconocida | Corpus textual/creativo | Compilación de fuentes web de terceros sin atribución individual | **MEDIO** | Textos de terceros sin cita ni licencia | Registrar las URLs fuente y reescribir como síntesis propia |
| `F-02` | **JoinColony/colonyNetwork** | JoinColony | https://github.com/JoinColony/colonyNetwork | **GPL-3.0** | Copyleft fuerte | Código | Copyleft fuerte: todo derivado debe publicarse como GPL-3.0 | **ALTO** | Contaminación copyleft del core HSCSG (licenciado MIT) | Prohibir import directo en `src/core/`; aislar en microservicio separado con repo GPL-3.0 propio (patrón Mike Wrapper, LEGAL_PROTECTION §2) |
| `F-03` | **JoinColony/colonyJS** | JoinColony | https://github.com/JoinColony/colonyJS | **GPL-3.0** | Copyleft fuerte | Código | Copyleft fuerte | **ALTO** | Contaminación copyleft si se enlaza desde el core | Aislamiento en microservicio + adapter propio; nunca `import` en el core |
| `F-04` | **JoinColony/colonySDK** | JoinColony | https://github.com/JoinColony/colonySDK | **GPL-3.0** | Copyleft fuerte | Código | Copyleft fuerte | **ALTO** | Contaminación copyleft | Aislamiento en microservicio + adapter propio |
| `F-05` | **JoinColony/colony-gql** | JoinColony | https://github.com/JoinColony/colony-gql | **GPL-3.0 (por herencia del ecosistema Colony)** | Copyleft fuerte | Código | Copyleft fuerte | **ALTO** | Contaminación copyleft | Verificar LICENSE explícito; aislar en microservicio |
| `F-06` | **JoinColony/ColonyFrontEndLivingStandard** | JoinColony | https://github.com/JoinColony/ColonyFrontEndLivingStandard | **No especificada en el clon (guía interna)** | Desconocida | Corpus textual/creativo | Guía de estilo sin licencia = derechos reservados | **MEDIO** | Copia de convenciones documentadas sin permiso | Reescribir las convenciones en guía propia |
| `F-07` | **The State of Communities Report 2026** | Editores del informe (no identificados en el backup) | informe de terceros | **DESCONOCIDA / NO AUDITADA** | Desconocida | Corpus textual/creativo | Informe de mercado con copyright del editor | **MEDIO** | Uso de datos/gráficas del informe en material comercial | Citar fuente y año; no reproducir tablas completas |
| `F-08` | **b3alliance / community_ai-alliance** | The AI Alliance / b3alliance | https://github.com/b3alliance/community_ai-alliance | **Apache-2.0 / CC-BY-4.0 / CDLA-2.0 (tri-licencia)** | Permisiva | Corpus textual/creativo | Uso comercial libre con atribución | **BAJO** | Atribución omitida | Citar la tri-licencia al reutilizar documentos de gobernanza |
| `F-09` | **alishazal/seq2seq-transliteration-tool** | Ali Shazal, Aiza Usman (fork de CAMeL-Lab/qalb) | https://github.com/alishazal/seq2seq-transliteration-tool | **MIT (código) — dataset LDC BOLT (LDC2017T07) bajo licencia restringida** | Permisiva | Código | Código de uso comercial libre; los datos LDC requieren licencia de pago | **MEDIO** | Uso de datos LDC sin licencia institucional | Usar solo el código; no incorporar ni redistribuir el dataset LDC |
| `F-10` | **anthropics/commerce-agents** | Anthropic | https://github.com/anthropics/commerce-agents | **Apache-2.0** | Permisiva | Código | Uso comercial libre; NOTICE + patent grant | **BAJO** | Incumplimiento de NOTICE | Conservar NOTICE y avisos de cambios |
| `F-11` | **aurora-ong/aurora_gov** | Aurora ONG | https://github.com/aurora-ong/aurora_gov | **Elastic License 2.0 (ELv2)** | Source-available / Propietaria | Código | Source-available: PROHIBIDO ofrecerlo como servicio gestionado a terceros sin acuerdo | **ALTO** | Ofrecer funcionalidad derivada de aurora_gov dentro de un SaaS de pago viola ELv2 | No integrar código; reimplementar el patrón CQRS/event-sourcing desde cero, o negociar licencia comercial con Aurora ONG |
| `F-12` | **alookai/alook** | alookai | https://github.com/alookai/alook | **Apache-2.0** | Permisiva | Código | Uso comercial libre; NOTICE | **BAJO** | Incumplimiento de NOTICE | Conservar NOTICE |
| `F-13` | **DietrichGebert/ponytail** | Dietrich Gebert | https://github.com/DietrichGebert/ponytail | **DESCONOCIDA / NO AUDITADA** | Desconocida | Código | Sin licencia declarada = derechos reservados | **MEDIO** | Uso de código sin permiso del autor | Auditar LICENSE; si no existe, solo asimilación conceptual |
| `F-14` | **sepu85/collabberry-berry-vesting** | sepu85 (Collabberry) | https://github.com/sepu85/collabberry-berry-vesting | **DESCONOCIDA / NO AUDITADA** | Desconocida | Código | Contratos sin licencia verificada | **MEDIO** | Reutilización de contratos sin permiso | Auditar LICENSE y cabeceras SPDX antes de reutilizar |
| `F-15` | **BIO-TESIS Yoka — Corpus Nuclear (213 PDFs)** | Yoka (ex-Diego) | corpus local (Bio-tesis y hoguera.zip) | **DESCONOCIDA / NO AUDITADA (el resto del corpus del mismo autor está bajo CC BY-NC-ND 4.0)** | No-comercial / No-derivadas | Corpus textual/creativo | Si aplica CC BY-NC-ND: prohibido uso comercial y obras derivadas | **ALTO** | Autor identificado y activo; el retorno financiero del nodo puede considerarse uso comercial de su obra | Obtener licencia escrita de Yoka para uso comercial (o dual-licensing); mientras tanto, no derivar producto comercial del corpus |
| `F-16` | **Células de Libertad (Freedom Cells)** | FreedomCells.org / Derrick Broze | manuales PDF publicados | **DESCONOCIDA / NO AUDITADA** | Desconocida | Corpus textual/creativo | Manuales publicados con copyright del autor | **MEDIO** | Uso comercial de material del manual sin permiso | Citar autoría; verificar si el manual se distribuye bajo Creative Commons |
| `F-17` | **Isaacko0/HR_AI_Agent-collaberry-HSCSG (Eliza)** | Isaac Ko (Isaacko0), upstream elizaOS | https://github.com/Isaacko0/HR_AI_Agent-collaberry-HSCSG | **Propia + upstream Eliza (MIT — verificar versión)** | Permisiva | Código | Uso comercial libre si el upstream es MIT | **BAJO** | Licencia del upstream no registrada | Registrar la licencia exacta del framework Eliza usado |
| `F-18` | **trycompai/crm (Comp AI CRM)** | Comp AI | https://github.com/trycompai/crm | **MIT** | Permisiva | Código | Uso comercial libre con atribución | **BAJO** | Atribución omitida | Conservar LICENSE |
| `F-19` | **CynthiaSalazarB/ContentCreation-OS** | Cynthia Salazar B. | https://github.com/CynthiaSalazarB/ContentCreation-OS | **PENDIENTE DE VERIFICAR (existe LICENSE en el repo, no registrada)** | Desconocida | Código | El propio backup marca la licencia como 'a confirmar antes de fusión' | **MEDIO** | Fusión de código antes de confirmar licencia | Bloquear la fusión hasta registrar el contenido del LICENSE |
| `F-20` | **EL ENLACE (Protocolo de Cierre de Base)** | Yoka (ex-Diego) + Fabio F. Balbi | PDF local (29/12/2025) | **CC BY-NC-ND 4.0** | No-comercial / No-derivadas | Corpus textual/creativo | PROHIBIDO uso comercial y PROHIBIDAS obras derivadas; solo copia literal con atribución | **ALTO** | Conflicto directo con el retorno financiero: la integración en un producto de pago es uso comercial y la asimilación conceptual es obra derivada | Obtener autorización escrita de ambos autores (licencia comercial o dual-licensing); si no, remover el material del producto y del repo público, dejando solo referencia bibliográfica |
| `F-21` | **El Arte de la Filosofía Propia** | Yoka (ex-Diego) | PDF local (2026-09-09) | **CC BY-NC-ND 4.0** | No-comercial / No-derivadas | Corpus textual/creativo | PROHIBIDO uso comercial y obras derivadas | **ALTO** | Mismo conflicto NC-ND que EL ENLACE, con un único autor identificable | Autorización escrita del autor o sustitución del material por síntesis propia no derivada |
| `F-22` | **MK-1 Modelo Ontológico v1.7** | Fabio F. Balbi (Argentina) | PDF local (MK-1_v1.7) | **DESCONOCIDA / NO AUDITADA (mismo autor que EL ENLACE, CC BY-NC-ND 4.0)** | Desconocida | Corpus textual/creativo | Sin licencia declarada; presunción de derechos reservados o NC-ND por coherencia con el otro documento del autor | **ALTO** | Autor identificado; MK-1 es su marco propio y está integrado operativamente en el Sistema Alráico | Solicitar licencia explícita a Fabio Balbi para uso comercial; documentar atribución en la integración |
| `F-23` | **Jacque Fresco / RBE (tesis Yates 2014, tesis Leiva 2012)** | Shaun Yates; Leiva | tesis académicas (PDF local) | **DESCONOCIDA / NO AUDITADA** | Desconocida | Corpus textual/creativo | Tesis con copyright de sus autores/universidades | **MEDIO** | Uso de contenido académico sin cita formal | Cita académica completa; no redistribuir el texto extraído |
| `F-24` | **Gaia Confederation (white paper)** | Gaia Confederation / gaiaunion.com | https://gaiaunion.com/ | **DESCONOCIDA / NO AUDITADA** | Desconocida | Corpus textual/creativo | White paper sin licencia declarada | **MEDIO** | Reproducción de white paper ajeno | Solicitar licencia o reducir a síntesis con enlace |
| `F-25` | **Gaia Union / Red de EcoHabitats & BioRegiones** | Gaia Union | documento local | **DESCONOCIDA / NO AUDITADA** | Desconocida | Corpus textual/creativo | Documento maestro sin licencia | **MEDIO** | Reproducción de documento ajeno | Solicitar licencia o reducir a síntesis |
| `F-26` | **GuiFV/life** | GuiFV | https://github.com/GuiFV/life | **DESCONOCIDA / NO AUDITADA** | Desconocida | Código | Sin licencia registrada | **MEDIO** | Reutilización de modelos/código sin permiso | Auditar LICENSE del repo |
| `F-27` | **iambrainstorming (libro completo)** | Amiya Tulu | https://iambrainstorming.github.io | **LICENSE-CC (variante no verificada) + LICENSE-MIT** | Desconocida | Corpus textual/creativo | Si la variante CC es NC o ND, el uso comercial o derivado queda prohibido | **ALTO** | El repo público contiene el libro íntegro (`iambrainstorming_libro_completo.md`, >16.000 líneas) de un autor identificado | Verificar la variante exacta de la licencia CC; mientras tanto, retirar el texto íntegro del repo público y dejar solo el análisis |
| `F-28` | **Kleros (Court, Protocol V1 y ecosistema)** | Kleros Cooperative | https://github.com/kleros | **GPL-3.0** | Copyleft fuerte | Código | Copyleft fuerte en todo el ecosistema Kleros | **ALTO** | Contaminación copyleft del core si se importa código de arbitraje | No importar código; reimplementar el patrón de oráculo de resolución, o aislar en microservicio GPL-3.0 separado |
| `F-29` | **nextcloud/server** | Nextcloud GmbH y contribuidores | https://github.com/nextcloud/server | **AGPL-3.0-or-later** | Copyleft fuerte | Código | Copyleft fuerte + trigger de red (§13): exponerlo por red obliga a liberar el código completo | **ALTO** | Un nodo HSCSG que exponga Nextcloud modificado a usuarios activa la obligación AGPL sobre el servicio | Desplegar Nextcloud sin modificar y como servicio externo independiente (no derivado); nunca enlazarlo con el core; si se modifica, publicar el fork bajo AGPL-3.0 (patrón Mike Wrapper) |
| `F-30` | **NVIDIA NeMo labs-OO-Agents (NOOA)** | NVIDIA | https://github.com/NVIDIA-NeMo/labs-OO-Agents | **Apache-2.0 (SPDX por archivo)** | Permisiva | Código | Uso comercial libre; NOTICE + patent grant | **BAJO** | Incumplimiento de NOTICE | Conservar cabeceras SPDX y NOTICE |
| `F-31` | **OpenCivics Commons** | OpenCivics | https://commons.opencivics.co | **DESCONOCIDA / NO AUDITADA (probable Creative Commons — verificar)** | Desconocida | Corpus textual/creativo | Directorio de recursos de terceros, cada uno con su licencia | **MEDIO** | Reproducción del directorio completo sin permiso ni atribución | Verificar la licencia del Commons; enlazar en vez de reproducir |
| `F-32` | **OpenCivics Wiki** | OpenCivics | https://wiki.opencivics.co/ | **DESCONOCIDA / NO AUDITADA** | Desconocida | Corpus textual/creativo | Contenido wiki sin licencia registrada | **MEDIO** | Reproducción de contenido wiki | Verificar licencia; enlazar en vez de copiar |
| `F-33` | **Towards an Open Civics (tesis fundacional)** | OpenCivics | PDF/tesis | **DESCONOCIDA / NO AUDITADA** | Desconocida | Corpus textual/creativo | Obra completa de terceros reproducida en texto plano dentro del repo | **ALTO** | `towards_open_civics_backup.txt` contiene el texto íntegro de la publicación | Retirar el texto íntegro del repo público; conservar solo la integración con cita y enlace |
| `F-34` | **PerCon Flow / Potentialism** | Comunidad PerCon Flow / New Paradigm | material de terceros | **DESCONOCIDA / NO AUDITADA** | Desconocida | Corpus textual/creativo | Marco conceptual de terceros sin licencia | **MEDIO** | Uso comercial de un marco ajeno | Atribuir autoría; re-expresar en terminología propia |
| `F-35` | **ZiadJ/prioritize** | ZiadJ | https://github.com/ZiadJ/prioritize | **DESCONOCIDA / NO AUDITADA** | Desconocida | Código | Sin licencia registrada | **MEDIO** | Reutilización de esquema/código sin permiso | Auditar LICENSE del repo |
| `F-36` | **Sci-Hive — datapoint 'Mundus Live'** | Guilherme Forton Viotti (Sci-Hive / IDETRA) | https://sci-hive.com/ | **DESCONOCIDA / NO AUDITADA** | Desconocida | Corpus textual/creativo | Contenido de plataforma de terceros; manifiesto con autoría identificada | **MEDIO** | Reproducción del manifiesto y datos del nodo sin permiso | Citar autoría y enlazar; pedir permiso para reutilización comercial |
| `F-37` | **silicology1/shivarthu** | silicology1 / reaudito | https://github.com/silicology1/shivarthu | **MIT** | Permisiva | Código | Uso comercial libre con atribución | **BAJO** | Atribución omitida | Conservar LICENSE (repo archivado: fijar el commit usado) |
| `F-38` | **Isaacko0/Plataforma-solarpunk_utopia_project** | Isaac Ko (Isaacko0) | https://github.com/Isaacko0/Plataforma-solarpunk_utopia_project | **Propia (HSCSG)** | Permisiva | Código | Sin restricción externa | **BAJO** | Ninguno | Declarar licencia explícita en el repo propio |
| `F-39` | **lizTheDeveloper/solarpunk_utopia** | lizTheDeveloper | https://github.com/lizTheDeveloper/solarpunk_utopia | **DESCONOCIDA / NO AUDITADA** | Desconocida | Código | Sin licencia registrada | **MEDIO** | Reutilización de especificaciones sin permiso | Auditar LICENSE del repo |
| `F-40` | **overkillkulture/sovereignty-hub** | overkillkulture | https://github.com/overkillkulture/sovereignty-hub | **MIT** | Permisiva | Código | Uso comercial libre con atribución | **BAJO** | Atribución omitida | Conservar LICENSE |
| `F-41` | **tairea/sovereignty-hub-ui** | tairea | https://github.com/tairea/sovereignty-hub-ui | **MIT (hereda del hub)** | Permisiva | Código | Uso comercial libre con atribución | **BAJO** | Atribución omitida | Conservar LICENSE |
| `F-42` | **Symbiosky (Ecosymra)** | blockchain-projects-ecosymra / Symbiosky | GitLab: blockchain-projects-ecosymra | **MIT (contratos EVM) + whitepaper sin licencia declarada** | Permisiva | Mixto (código + corpus) | Contratos reutilizables; el whitepaper no | **MEDIO** | Reproducción del whitepaper sin licencia | Usar solo los contratos MIT; citar el whitepaper sin reproducirlo |
| `F-43` | **Baruch4413/tekitl** | Baruch4413 | https://github.com/Baruch4413/tekitl | **GPL-3.0** | Copyleft fuerte | Código | Copyleft fuerte: todo derivado debe ser GPL-3.0 | **ALTO** | Contaminación copyleft del core HSCSG | No importar en el core; aislar en microservicio GPL-3.0 o reimplementar |
| `F-44` | **trustlines-protocol/contracts** | Trustlines Foundation | https://github.com/trustlines-protocol/contracts | **DESCONOCIDA / NO AUDITADA** | Desconocida | Código | Contratos sin licencia registrada en el backup | **MEDIO** | Reutilización de contratos sin licencia verificada | Auditar LICENSE y cabeceras SPDX |
| `F-45` | **Glo-Foundation/usdglo-celo** | Glo Foundation | https://github.com/Glo-Foundation/usdglo-celo | **MIT (SPDX en contratos)** | Permisiva | Código | Uso comercial libre con atribución | **BAJO** | Atribución omitida | Conservar cabeceras SPDX |
| `F-46` | **block/buzz** | Block, Inc. | https://github.com/block/buzz | **DESCONOCIDA / NO AUDITADA (repo corporativo con DCO obligatorio)** | Desconocida | Código | La licencia no está registrada; el DCO condiciona las contribuciones | **MEDIO** | Importación de código corporativo sin licencia verificada | Auditar LICENSE del repo y registrar el DCO en el backup |
| `F-47` | **va360labs/didacta-io (Didacta Community)** | VA360 LABS | https://github.com/va360labs/didacta-io | **Didacta Sustainable Use License v1.0 (fair-code, adaptada de n8n SUL)** | Source-available / Propietaria | Código | Uso interno libre; distribución comercial, SaaS o white-label REQUIERE acuerdo con VA360 LABS | **ALTO** | Ofrecer módulos derivados de Didacta dentro de un nodo HSCSG de pago viola la SUL | No integrar código; reimplementar el modelo educativo, o negociar acuerdo comercial con VA360 LABS |
| `F-48` | **NEAR Protocol + NEAR AI** | NEAR Foundation | https://github.com/near | **MIXTA / NO AUDITADA (nearcore y core-contracts con licencias distintas; papers con copyright)** | Desconocida | Mixto (código + corpus) | Riesgo de copyleft en algún componente del stack NEAR | **MEDIO** | Importar código de un repo copyleft creyéndolo permisivo; reproducir papers con copyright | Auditar LICENSE por repo (nearcore, core-contracts, near-sdk-rs) y citar los papers sin reproducirlos |
| `F-49` | **Urbanika/.github** | Urbanika | https://github.com/Urbanika/.github | **DESCONOCIDA / NO AUDITADA** | Desconocida | Corpus textual/creativo | Sin licencia registrada | **MEDIO** | Reutilización sin permiso | Auditar LICENSE de la organización Urbanika |
| `F-50` | **Urbanika/Autogestion-Vecinal** | Urbanika | https://github.com/Urbanika/Autogestion-Vecinal | **DESCONOCIDA / NO AUDITADA** | Desconocida | Mixto (código + corpus) | Sin licencia registrada | **MEDIO** | Reutilización sin permiso | Auditar LICENSE del repo |
| `F-51` | **Urbanika/DeFi_Adoption_IRL** | Urbanika | https://github.com/Urbanika/DeFi_Adoption_IRL | **MIT + Creative Commons (declarado en el README)** | Permisiva | Mixto (código + corpus) | Uso comercial libre con atribución | **BAJO** | Variante CC no especificada | Confirmar la variante CC del contenido no-código |
| `F-52` | **Urbanika/Directorio_Regen** | Urbanika | https://github.com/Urbanika/Directorio_Regen | **DESCONOCIDA / NO AUDITADA** | Desconocida | Mixto (código + corpus) | Sin licencia registrada; además datos de proveedores (RGPD) | **MEDIO** | Reutilización de datos de terceros sin base legal | Auditar LICENSE y tratamiento de datos personales del directorio |
| `F-53` | **Urbanika/Gobernanza_Vecinal_E5M** | Urbanika | https://github.com/Urbanika/Gobernanza_Vecinal_E5M | **DESCONOCIDA / NO AUDITADA** | Desconocida | Mixto (código + corpus) | Sin licencia registrada | **MEDIO** | Reutilización sin permiso | Auditar LICENSE del repo |
| `F-54` | **Urbanika/Nidori (catálogo)** | Urbanika | https://github.com/Urbanika | **DESCONOCIDA / NO AUDITADA** | Desconocida | Mixto (código + corpus) | Sin licencia registrada | **MEDIO** | Reutilización sin permiso | Auditar LICENSE del repo |
| `F-55` | **Urbanika/PositiveClimate_Bus** | Urbanika | https://github.com/Urbanika/PositiveClimate_Bus | **CC0 1.0 Universal (planos arquitectónicos)** | Dominio público (CC0) | Corpus textual/creativo | Dominio público: uso comercial sin restricción | **BAJO** | Ninguno | Ninguna acción requerida (buena práctica: citar origen) |
| `F-56` | **Urbanika/Web3GovernanceForum** | Urbanika (Irwing Durán, Johan de Jesús) | https://github.com/Urbanika | **DESCONOCIDA / NO AUDITADA** | Desconocida | Mixto (código + corpus) | Sin licencia registrada; autores individuales identificados | **MEDIO** | Uso de trabajo atribuible a personas concretas sin licencia | Auditar LICENSE y acordar atribución nominal |
| `F-57` | **Urbanika/deCreditScore Attestation Platform** | Urbanika | https://github.com/Urbanika | **DESCONOCIDA / NO AUDITADA** | Desconocida | Código | Sin licencia registrada; además scoring crediticio (datos personales) | **MEDIO** | Reutilización sin permiso + implicaciones RGPD del scoring | Auditar LICENSE y evaluar impacto RGPD antes de integrar |
| `F-58` | **Urbanika/ticket_scan** | Urbanika | https://github.com/Urbanika | **DESCONOCIDA / NO AUDITADA** | Desconocida | Código | Sin licencia registrada | **MEDIO** | Reutilización sin permiso | Auditar LICENSE del repo |
| `F-59` | **Sistema Alráico (backup interno)** | Isaac Ko (Isaacko0) — HSCSG | propio | **Propia (HSCSG)** | Permisiva | Corpus textual/creativo | IP propia; base del retorno financiero | **BAJO** | Ninguno externo | Registrar autoría y fecha (ver LEGAL_PROTECTION §5.1) |
| `F-60` | **brendanhogan/loophole** | Brendan Hogan | https://github.com/brendanhogan/loophole | **MIT (implícita, no declarada explícitamente)** | Permisiva | Código | Uso comercial libre con atribución | **BAJO** | La licencia no está declarada explícitamente en el repo | Confirmar por escrito con el autor; mantener el wrapper como CLI local sin exposición de red |
| `F-61` | **open-legal-products/mike** | Open Legal Products | https://github.com/open-legal-products/mike | **AGPL-3.0** | Copyleft fuerte | Código | Copyleft fuerte + trigger SaaS (§13) | **ALTO** | Un SaaS que use Mike modificado obliga a liberar el código completo | Microservicio aislado en repo público `hscsg-mike-wrapper` (AGPL-3.0) + adapter propio; cero imports en el core (LEGAL_PROTECTION §3) |
| `F-62` | **Ecosistema Storyseller (Thiel/Happy) — investigación** | Pepe Sevilla / ecosistema Storyseller | material propietario | **PROPIETARIA** | Source-available / Propietaria | Corpus textual/creativo | Terminología de marca no reutilizable | **ALTO** | Uso de términos propietarios en código, UI o documentación | Documento original solo local; versión sanitizada en el repo; `tribal_vocab.ts` + CI `validate:terminology` (LEGAL_NOTICE §5-6) |

---

## 5. ESQUEMA DE AUDITORÍA EN EL ÍNDICE MAESTRO

Cada entrada de `docs/fuentes_indice.json` incorpora dos campos nuevos:

```jsonc
{
  "id": 1,
  "nombre": "OpenBot (CopilotKit)",
  "url": "https://github.com/CopilotKit/OpenBot",
  "estado": "✅ Completo",
  "licencia": "MIT",              // licencia detectada, o "DESCONOCIDA / NO AUDITADA"
  "riesgo_legal": "BAJO",         // BAJO | MEDIO | ALTO (ver §1.1)
  "backup": "openbot_backup.md",
  "integration": "openbot_integration.md",
  "briefs_relacionados": ["BF-010"],
  "seccion_ref": "2.1"
}
```

**Convención de valores:**

| Campo | Valores |
|-------|---------|
| `licencia` | Identificador SPDX cuando existe (`MIT`, `Apache-2.0`, `GPL-3.0`, `AGPL-3.0-or-later`, `CC-BY-4.0`, `CC-BY-NC-ND-4.0`, `CC0-1.0`), nombre completo cuando no es SPDX (`Elastic License 2.0`), `Propia (HSCSG)`, `PROPIETARIA`, o `DESCONOCIDA / NO AUDITADA` |
| `riesgo_legal` | `BAJO` (permisiva / CC BY / CC0 / propia) · `MEDIO` (no declarada, no verificada, o corpus de tercero de uso conceptual) · `ALTO` (copyleft fuerte, NC-ND, source-available anti-SaaS, u obra de tercero reproducida literalmente) |

**Pendiente propuesto:** dar de alta en el índice las 62 fuentes `F-xx` de §4 para que el índice maestro cubra las 112 fuentes reales asimiladas.

---

## 6. GATES DE CUMPLIMIENTO PROPUESTOS (CI)

```bash
# 1. Todo backup nuevo debe declarar licencia
grep -L '\*\*Licencia:\*\*' docs/*_backup.md   # debe estar vacío para archivos nuevos

# 2. Cero imports copyleft en el core
grep -rE "from '(mike|@colony|@kleros|nextcloud)" src/core/   # debe dar 0 resultados

# 3. Ningún backup con texto literal de terceros en el repo público
#    (lista de bloqueo en §2.5)
```

---

## 7. REVISIÓN

| Campo | Valor |
|-------|-------|
| **PI / Data Controller** | Isaac Ko (Isaacko0) — isaacko@protonmail.com |
| **Documentos vinculados** | `LEGAL_NOTICE.md`, `LEGAL_PROTECTION_FINANCIAL_RETURN.md`, `HOMOLOGACION_TERMINOS_PEPE_SEVILLA_HSCSG.md`, `AREX_SKILL_SYNERGY_PLAN.md` §1.3 |
| **Próxima revisión** | Trimestral, o ante cada nueva asimilación (`hscsg-repo-assimilation`) |
| **Limitación conocida** | Las licencias marcadas `DESCONOCIDA / NO AUDITADA` no se han verificado contra el `LICENSE` del repositorio origen: esta auditoría refleja lo declarado en los `_backup.md` / `_integration.md` del repositorio, no una inspección de los originales |
