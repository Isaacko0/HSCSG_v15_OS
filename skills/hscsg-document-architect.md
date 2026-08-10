---
name: hscsg-document-architect
description: >-
  Constructs and maintains large unified strategy/civilizational-model documents
  from heterogeneous sources (epistemological frameworks, proprietary methodologies,
  external open-source repos, business models). Produces single-file deliverables
  with coherent structure, consistent nomenclature, and integrated cross-references.
  Active when the user requests a “documento exhaustivo”, “modelo de negocio”,
  or unified doc for HSCSG / Sistema Alráico / Loop Engineering / Zeitnus projects.
risk: low
source: user-created
date_added: '2026-06-30'
tags:
  - hscsg
  - alraico
  - document-architecture
  - external-repo-integration
  - strategy-document
  - sparse-repair
---

# HSCSG Document Architect Skill

## Role Definition
Expert document architect for long-form strategic/civilizational model documents.
Produces a single unified Markdown deliverable (no sidecar files unless explicitly
requested) that weaves together epistemology, business model, technology stack,
civilizational objectives, operational metrics, and external open-source projects
into a coherent whole with correct numeration and cross-references.

---

## When to Load This Skill
- User asks for a "documento exhaustivo" or "documento fundacional" for HSCSG,
  Sistema Alráico, Loop Engineering, Zeitnus, or a related project.
- User brings external GitHub repositories, websites, or frameworks (e.g. Copiosis)
  and asks to integrate them into the canonical strategy document
  (`BRIEF_EXHAUSTIVO_HSCSG_COSATECA_OS.md` at the root of `HSCSG_v15_OS`).
- Existing unified document needs structural expansion (new sections, new pillars,
  new metrics, new glossary entries) preserving all prior content.
- Preparing investor / ally-facing materials where nomenclature and coherence
  matter more than brevity.

---

## Core Deliverable Shape
The canonical document is a **single Markdown file** named by the user, organized
as:

1. Cover + version + date
2. Table of Contents (auto-renumbered after every structural change)
3. Context & Civilizational Vision
4. Epistemological Framework
5. Business Model (La Cuaternidad Soberana / pillars)
6. Products & Services (Funnel of Sovereignty)
7. Free-Access Infrastructure (Cosatecas, 15-Minute Cities, mesh)
8. Metrics (Civilizational + Business + Automaton + Infrastructure)
9. Target Market & Value Proposition
10. Technical & Operational Architecture
11. Roadmap
12. Monetization & Sustainability
13. Differentiation & Barriers to Entry
14. Risks & Critical Assumptions
15. Financial Architecture (draft)
16. Conclusion
A. Glossary

---

## Triggered Workflows

### A. Initial Document Creation
When asked for a new exhaustive document:
- Use a **single file** with the section structure above.
- Establish **stable nomenclature** on first use (HSCSG, CAC, PGS, ZNU, etc.)
- Ask only the minimum distinguishing questions (business model name, target
  price point, form platform, AI provider) before writing.
- Block no iterations until the first complete skeleton is on disk.

### B. External Source Integration (high-value pattern)
When user brings one or more external sources to integrate (GitHub repos, websites, PDFs):
- Do NOT create sidecar files unless requested.
- For GitHub repos: clone minimally (`git clone --depth 1 <url>` into a temp dir under the
  user's home).
- For websites/PDFs: use web_extract or PDF extraction tools to ingest content.
- Read the source's top-level README / landing content / extracted text before
  writing a single word.
- **Extrapolate beyond, don't transcribe**: The user explicitly wants integration
  *without limiting to the source*. Infer what the source *becomes* inside the
  user's framework, not just what it says about itself.
- **Extract**, do not transcribe:
  - Technical components, agent roles, protocol names, data models, economic
    models.
- **Infer and extrapolate** the source's role inside the user's framework:
  - What does it *become* inside HSCSG? (e.g. → Fondo Solarpunk executor →
    Cosateca technical stack → dataset source)
  - NOT a description of the source; a definition of its *new function*.
- Patch the unified document in-place:
  - Add a dedicated sub-section (e.g. “Arquitectura Técnica de Acceso Libre”)
  - Add an economic line item with inferred economic flow
  - Add at least **five inferred/extrapolated roles**
  - Update the funnel/cycle diagram Mermaid block to reflect the new actor
  - If a new revenue allocation or reinvestment percentage changes the pie,
    update the split table across all sections that cite it.
  - Add glossary entries for every new proper noun introduced.
  - Update the cover/version and the TOC hops to account for new sections.
- Renumber sections and TOC as needed so they remain consecutive.

**Pitfall:** Repo README can be empty or minimal (e.g. a stub). If `sed -n '1,200p'`
returns no visible content after cloning, treat the README as placeholder text
and rely on the *user's explanation* and the repo's directory/file names as the
source of truth.

**Pitfall (markdown formatting):** Repeated patching of glossary tables can introduce
triple-pipe (`|||`) artifacts from copy-paste. After any glossary patch, grep for
`||| ` at the start of glossary rows and normalize to `|| ` to keep table alignment
consistent.
source of truth.

### B2. Framework Integration 4-Phase Pattern (Copiosis v7.1 style)
When integrating conceptual/critical frameworks (economic models, governance protocols, civilizational designs):
1. **Desempaquetado** — Exhaustive navigation/web extraction → surgical backup report (`<framework>_backup.md`) with architecture, core concepts, threat model, honest maturity assessment
2. **Limpieza** — Structure in 3 perspectives for integration doc (`<framework>_integration.md`):
   - **Usuario**: pains/needs → what the user wants from this framework
   - **LLM**: subsystem mapping, design decisions, code module names
   - **Proyecto HSCSG**: isomorphisms (MJ Laws, Alraic), homologation table, architectural confluence, mutual improvements, extrapolated inferences
3. **GitHub** — Integration doc + Brief Exhaustivo updates:
   - `docs/<framework>_integration.md` + `docs/<framework>_backup.md` (raíz repo `HSCSG_v15_OS`).
   - Actualizar `BRIEF_EXHAUSTIVO_HSCSG_COSATECA_OS.md` (raíz del repo) en: tabla frameworks §2.3, nueva §2.X, §3.0 vaso comunicante, §5.6 subsistemas, §6.1 métricas, §14.3-14.4 financiera, §16 orquestación, §17 memética, Anexo A glosario.
   - **Commit + push de TODOS los archivos modificados en local**: `git add -A` (o listado explícito) → `git commit -m "feat: integración <Framework> en HSCSG v15 OS"` → `git push origin master`.
   - **🔒 NUNCA revelar credenciales de GitHub**: el remote usa HTTPS + `git-credential-manager`; el token no está en la URL ni en archivos. El push funciona sin escribir secretos. Jamás incluir tokens (`ghp_...`, `github_pat_...`), passwords, `client_secret`, URLs con `@token@github.com`, ni rutas a `.env` en el SKILL, commits, mensajes o salida al usuario. Si el push falla por auth, reportar el error genérico y pedir al usuario que verifique el credential manager.
4. **Evolución** — Actionable deliverables P0/P1 in `lib/` + validation checklist

**Template for §2.X canonical section (conceptual frameworks):**
- 2.X.1 Conceptual Contribution (numbered principles → sovereign translation)
- 2.X.2 Homologation Table (Framework concept → HSCSG translation → Component/Role)
- 2.X.3 Architectural Confluence (Direct alignments + Identified Gaps + HSCSG Resolutions)
- 2.X.4 Mutual Improvements (Framework→HSCSG + HSCSG→Framework)
- 2.X.5 Extrapolated Inferences (beyond source text: hybrid flows, gradient signals, oracles, enforcement, bridges, adapter-as-skill)
- 2.X.6 Actionable Deliverables (P0/P1 modules, effort estimates, module owners)

**Key principle:** Never transcribe the source. The integration doc defines what the source *becomes* inside HSCSG — its new function, not its self-description.

### C. Structural Renumbering
When adding a section causes a cascade of renumbers:
- Renumber TOC first, then all section headings.
- Use `search_files` → `patch` with surrounding context to avoid ambiguity.
- Do NOT violate the structural ordering in “Core Deliverable Shape” unless
  the user explicitly asks for a different outline.

### D. Maintenance Patching
When asked to update the existing document:
- Read offsets, find the exact patch surface with `search_files`.
- Patch with the **minimum surrounding context** needed for uniqueness.
- If a section reference moves, fix all cross-references in the same turn.
- Gloss new acronyms and named concepts the moment they enter the document.

**⚠️ PITFALL — Large-document maintenance (50KB+ / 900+ lines):**
Repeated `write_file` / `patch` cycles on a big single-file deliverable are fragile:
- `write_file` calls with very long `content` can silently drop the `path` field
  (tool returns `missing required field 'path'`), causing the write to abort and
  the previous content to remain — or worse, a partial `content` overwrites the
  whole file and **deletes every section not included in that one call**.
- `patch` with `new_string == old_string` is a silent no-op; `patch` on a moved
  surface corrupts numeration.
- Symptom to watch: after a write, the file suddenly ends mid-section or jumps
  from §8 to §10 with §9 missing.

**Robust recovery / rewrite pattern (preferred for 50KB+ docs):**
1. Assemble the FULL corrected content as a Python string inside `execute_code`.
2. Write it in ONE shot: `open(path, 'w', encoding='utf-8').write(full_content)`.
3. Immediately verify with a second `execute_code` call that greps for every
   `## N.` heading and confirms none are missing / out of order.
4. Only use `patch` for tiny surgical edits (<50 lines) on small docs (<30KB).
   For anything larger, rewrite the whole file via `execute_code` — it is
   deterministic and cannot drop the path field.

**Why this matters:** The BRIEF_EXHAUSTIVO (59KB, 927 lines, 16 sections + 3
anexos) was corrupted 3× by `write_file` truncation before being rebuilt cleanly
with the `execute_code` + `open().write()` pattern. Treat any single-file
deliverable above ~50KB as "rewrite, don't patch."

---

## Quality Gates
- Single self-contained Markdown file at the end of every session.
- Every section the user asked to add is present and non-empty.
- Glossary covers every new proper noun.
- TOC accurately reflects section titles and numbers.
- No section says “No aplica en este ciclo.” when the user has supplied data —
  that phrase is reserved for the output *diagnostics*, not strategy docs.

---

## Known Limits & Edge Cases
- If the user explicitly requests sidecars, the skill silently overrides the
  single-file preference and creates the requested files, but the primary
  structural work still lives in the master document.
- Repo integration is **interpretive**, not textual extraction. The user wants
  extrapolated roles, not a README dump.

---

## 🧠 Maintenance (every 10 cycles or domain shift)
- Review which fields/sections get the most edits.
- Add a pitfall rule when a tool call exposes a fragile pattern.
- Create a new support file under `references/` when a **specific** external
  repo pattern proves repeatable (e.g. "solarpunk-utopia-integration-pattern.md").
  See also: `references/external-web-source-integration-pattern.md` for web/PDF
  sources beyond GitHub repos.
- Update this SKILL.md when document conventions evolve.

### Integration document pattern (ESG-HSCSG type)

When the user asks to create an integration document mapping an external system (e.g., ESG financial pipeline, ROE framework, governance protocol) to HSCSG:

1. **Read the source HSCSG document first** (`modelo-negocio-objetivos-civilizatorios-hscsg.md` or equivalent) to understand the target architecture (CAC vectors, economía híbrida 3 niveles, G1-CARMIS loop, ROE alignment, GRA federation).
2. **Map external components to HSCSG vectors** — each external component should map to a CAC vector (AUT_FINA, AUT_ENER, etc.) with a 0-4 scoring scale.
3. **Map to HSCSG v1.8 economía híbrida 3 niveles** if the external system has tiers/levels of operation.
4. **Include ROE Alignment Score** if the external system has sustainability/ESG/governance criteria.
5. **Map to G1-CARMIS loop** (Generación → Captura → Análisis → Recomendación → Métricas → Iteración → Síntesis).
6. **Produce a single integration .md document** with: context, mapeo de componentes, arquitectura integrada, economía híbrida mapping, ROE integration, Loop Engineering mapping, stack tecnológico, impacto métricas, hoja de ruta, seguridad.
7. **Copy to Obsidian vault** at `H:\Mi unidad\HSCSG Empresa mas memoria\HSCSG Empresa mas memoria\` after creation.
8. **Update memory** with the document path and key integration points.
9. **Cross-reference with `hscsg-monetary-integration` skill** which has detailed integration patterns in `references/esg-hscsg-integration-pattern.md`.

---

## 🔄 GitHub Sync Workflow (commit + push de TODOS los locales)

Al finalizar cualquier sesión de edición de documentos HSCSG (BRIEF, `docs/*_backup.md`,
`docs/*_integration.md`, o cualquier otro archivo del repo `HSCSG_v15_OS`):

1. **Estado local**: `git status --short` para listar todos los archivos modificados/untracked.
2. **Staging**: `git add -A` (o listado explícito de los archivos tocados en esta sesión).
3. **Commit**: `git commit -m "feat: <qué cambió> en HSCSG v15 OS"` — mensaje descriptivo,
   sin credenciales, sin rutas de `.env`.
4. **Push**: `git push origin master` — sube el estado local completo a GitHub.
5. **Verificar**: `git status --short` debe quedar vacío (working tree clean) tras el push.

**Documento canónico**: `BRIEF_EXHAUSTIVO_HSCSG_COSATECA_OS.md` vive en la **raíz** del repo
`HSCSG_v15_OS` (no fuera del repo). Toda integración de framework/website/repo se aplica ahí.

**🔒 REGLA DE SEGURIDAD (obligatoria)**:
- El remote `origin` usa HTTPS + `git-credential-manager`. El token de acceso **NO** está
  en la URL ni en ningún archivo del repo/skill. El push funciona sin escribir secretos.
- **Nunca** emitir, solicitar, mostrar ni guardar: tokens (`ghp_...`, `github_pat_...`, `gho_...`),
  contraseñas, `client_secret`, URLs tipo `https://TOKEN@github.com/...`, ni rutas a `.env`.
- Si el push falla con error de autenticación: reportar solo el mensaje de error genérico
  ("fatal: Authentication failed") y pedir al usuario que verifique el credential manager.
  No pedir el token bajo ninguna circunstancia.
- Los archivos SKILL.md (incluido este) se suben a GitHub como parte del repo de skills;
  por tanto, **jamás** contienen secretos. Cualquier ejemplo de remote debe usar la forma
  `https://github.com/Isaacko0/HSCSG_v15_OS.git` (sin credencial embebida).

---

## 📄 License
Derived from HSCSG / Sistema Alráico workflow practice. User-created.
Use and modify freely in service of Zeitnus / HSCSG objectives.
