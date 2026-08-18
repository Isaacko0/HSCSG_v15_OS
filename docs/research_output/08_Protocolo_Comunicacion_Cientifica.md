# PROTOCOLO DE COMUNICACIÓN CIENTÍFICA
## ADSOA-HSCSG: Estándares para Divulgación, Publicación y Colaboración Abierta

**Referencia:** PCC-ADSOA-HSCSG-2026-001 | **Fecha:** 2026-08-18 | **Versión:** 1.0  
**Clasificación:** PÚBLICO — Estándar de Comunidad | **Estado:** VIGENTE

---

### 1. PROPÓSITO Y ALCANCE

Este protocolo establece los **estándares obligatorios** para toda comunicación científica derivada del proyecto ADSOA-HSCSG, garantizando:
- **Rigor metodológico** consistente con Evidence-Based Design (Documento 04)
- **Reproducibilidad** total de experimentos y benchmarks
- **Atribución correcta** de fuentes (ADSOA papers, HSCSG docs, integraciones)
- **Acceso abierto** a datos, código y resultados (Open Science)
- **Trazabilidad** desde evidencia → decisión → validación → publicación

**Aplica a:** Papers académicos, technical reports, blog posts, presentaciones, issues/PRs, documentación técnica, datasets, benchmarks.

---

### 2. PRINCIPIOS FUNDAMENTALES

| Principio | Regla Operativa | Excepción |
|---|---|---|
| **Evidencia Primaria** | Citar papers ADSOA (IEEE 2017, IEICE 2016) como fuente arquitectónica | Ninguna |
| **Trazabilidad EBD** | Cada claim → decisión EBD (D1-D8) → test KPI | Claims de opinión explícitamente marcados |
| **Reproducibilidad** | Código + datos + entorno = replicable por tercero | Secretos operativos (claves) → hash + procedimiento |
| **Atribución Justa** | ADSOA → Banco de México / Pérez-Leguizamo et al.; HSCSG → Isaac Ko / Isaacko0 | Ninguna |
| **Acceso Abierto** | Todo output en repositorio público (GitHub) + Zenodo (datos) | Claves privadas, seeds de red |
| **Versionado Semántico** | Documentos: vX.Y; Código: semver; Datos: fecha + hash | Drafts internos (marcar WIP) |

---

### 3. ESTÁNDARES POR TIPO DE OUTPUT

#### 3.1 Papers Académicos (IEEE ISADS, IEICE, ArXiv)

| Elemento | Estándar | Herramienta |
|---|---|---|
| **Formato** | LaTeX (IEEE template) / Markdown → Pandoc | Overleaf / VS Code |
| **Referencias** | BibTeX (DOI obligatorio si existe) | Zotero → .bib |
| **Citación ADSOA** | Pérez-Leguizamo & Godínez-Borja 2017 (IEEE ISADS) + 2016 (IEICE) | DOI: 10.1109/ISADS.2017.27 |
| **Citación HSCSG** | Ko, I. "HSCSG v15 OS Documentation" (2024-2026) + GitHub repo | URL + commit hash |
| **Datos Abiertos** | Zenodo deposit al submission (DOI en paper) | Zenodo API |
| **Código** | GitHub release tag (vX.Y.Z) + DOI Zenodo | GitHub Releases |
| **Ethics Statement** | Incluir: "No human subjects; open source; no external funding" | Plantilla estándar |

**Checklist Pre-Submission:**
- [ ] Todas las claims cuantitativas tienen KPI + test en repo
- [ ] Figuras generadas desde código (no manuales) → script en `scripts/figures/`
- [ ] Tablas con fuentes citadas (EBD Decision Matrix ref)
- [ ] Acknowledgements: ADSOA authors, HSCSG community, stakeholders
- [ ] Conflict of Interest: "None declared. Self-funded. Open source."

#### 3.2 Technical Reports / White Papers (Documentos 03, 04, 07)

| Elemento | Estándar |
|---|---|
| **Formato** | Markdown + Mermaid diagrams → PDF via Pandoc/WeasyPrint |
| **Versionado** | vX.Y en header + Git tag `docs/vX.Y` |
| **Changelog** | Sección "Document Control" al final |
| **Diagramas** | Mermaid (`.mmd` en `docs/diagrams/`) → render en CI |
| **Tablas** | Markdown nativo + CSV source en `data/tables/` |
| **Referencias** | Estilo IEEE numérico [1], [2]... + DOIs |

#### 3.3 Blog Posts / Divulgación Técnica

| Elemento | Estándar |
|---|---|
| **Plataforma** | GitHub Discussions / HackMD / Mirror.xyz (Web3) |
| **Longitud** | 1500-3000 palabras + 3-5 figuras |
| **Estructura** | Problema → Evidencia → Solución → Validación → Próximos pasos |
| **Código** | Snippets embebidos + link a repo (líneas exactas) |
| **Datos** | Gráficos interactivos (Observable/Plotly) + link a datos crudos |
| **Call to Action** | Link a issue/PR/discussion para feedback |

#### 3.4 Presentaciones (Conferencias, Workshops, Demos)

| Elemento | Estándar |
|---|---|
| **Formato** | Markdown → Reveal.js (HTML) o PDF |
| **Slides** | Máx 20 slides / 20 min (1 min/slide) |
| **Contenido Mínimo** | 1. Problema + Evidencia 2. Solución ADSOA 3. Validación (KPIs) 4. Demo/Code 5. Próximos pasos |
| **Demo** | Grabada (asciinema) + link live si posible |
| **Handout** | 1-pager PDF con QR a repo + paper + contact |

#### 3.5 Datasets y Benchmarks (Zenodo + GitHub)

| Elemento | Estándar |
|---|---|
| **Formato** | CSV/JSONL + schema (JSON Schema) + README.md |
| **Metadatos** | DataCite (title, creators, description, license, version, DOI) |
| **Licencia** | CC0 (datos) / MIT (scripts) |
| **Versionado** | `vYYYYMMDD-hash` (ej: `v20260818-a1b2c3d`) |
| **Estructura** | `/data/raw/`, `/data/processed/`, `/scripts/`, `/results/` |
| **Reproducibilidad** | `run_benchmark.sh` + `environment.yml` (conda) / `package-lock.json` |

---

### 4. FLUJO DE PUBLICACIÓN (WORKFLOW)

```mermaid
graph TD
    A[Hallazgo / Resultado Validado] --> B{Tipo Output}
    B -->|Paper Académico| C[Draft LaTeX/MD + BibTeX]
    B -->|Tech Report| D[Markdown + Mermaid]
    B -->|Blog Post| E[HackMD + Snippets]
    B -->|Dataset| F[CSV + Schema + run.sh]
    
    C --> G[Internal Review<br/>(PI + 1 Stakeholder)]
    D --> G
    E --> G
    F --> G
    
    G --> H{Aprobado?}
    H -->|No| I[Revisión + Re-submit]
    H -->|Sí| J[Versionado + Tag Git]
    
    J --> K[Deposit Zenodo<br/>(DOI + Metadatos)]
    K --> L[Submit / Publish]
    L --> M[Announce: GH Discussions<br/>+ Twitter/LinkedIn + Mailing]
    M --> N[Track Metrics<br/>(Views, Citations, Downloads)]
```

**Tiempos Mínimos:**
- Internal Review: **5 días hábiles**
- Zenodo Deposit: **Inmediato al tag**
- Announce: **Mismo día de publicación**

---

### 5. ESTÁNDARES DE CITACIÓN Y ATRIBUCIÓN

#### 5.1 Fuentes Primarias (Obligatorias)

| Fuente | Cita Canónica | DOI/URL |
|---|---|---|
| ADSOA IEEE 2017 | Pérez-Leguizamo & Godínez-Borja, "Autonomous Decentralized Service Oriented Architecture...", IEEE ISADS 2017, pp. 47-54 | 10.1109/ISADS.2017.27 |
| ADSOA IEICE 2016 | Pérez-Leguizamo et al., "ADSOA Concept and Application for Mission Critical Information Systems", IEICE Trans. Commun., Vol.E99-B No.4, pp. 803-812 | https://doi.org/10.1587/transcom.2015EBP3307 |
| HSCSG v15 OS | Ko, I., "HSCSG v15 OS Documentation", 2024-2026, GitHub: Isaacko0/HSCSG_v15_OS | https://github.com/Isaacko0/HSCSG_v15_OS |
| NEAR AI Papers | NEAR AI, "IronClaw 1.0 / Proof of Response / Decentralized Confidential ML", 2026 | https://near.ai/blog |
| Buzz/Nostr | Block, "Buzz: Nostr client for sovereign relays & agent mesh", 2024, GitHub: block/buzz | https://github.com/block/buzz |

#### 5.2 Reglas de Citación en Documentos Internos

| Contexto | Formato |
|---|---|
| **Decisión EBD** | `[EBD-D1]` → link a `04_Documento_Diseno_Basado_Evidencia_EBD.md#2` |
| **Test KPI** | `[KPI-Availability]` → link a test file + CI run |
| **Código** | `[src/core/state/ads/ACP.ts:L45-L60]` → permalink GitHub |
| **Dato Bruto** | `[data/benchmark/latency_v20260818.csv]` → Zenodo DOI |

---

### 6. GESTIÓN DE DATOS ABIERTOS (OPEN DATA)

#### 6.1 Principios FAIR Aplicados

| Principio | Implementación |
|---|---|
| **Findable** | Zenodo DOI + metadatos DataCite + tags: `adsoa`, `hscsg`, `postmonetary`, `mission-critical` |
| **Accessible** | Descarga directa HTTPS (Zenodo) + clone Git (datos en repo si < 100MB) |
| **Interoperable** | CSV/JSONL + JSON Schema + documentación de campos en README |
| **Reusable** | Licencia CC0 + metodología documentada + scripts de reproducción |

#### 6.2 Categorías de Datos y Retención

| Categoría | Ejemplos | Retención | Ubicación |
|---|---|---|---|
| **Raw Benchmarks** | Latency, throughput, chaos logs | Permanente (Zenodo) | `data/raw/benchmarks/` |
| **Processed Results** | Aggregated stats, plots data | Permanente (Zenodo) | `data/processed/` |
| **Simulation Data** | Monte Carlo runs, parameter sweeps | 5 años (Zenodo) | `data/simulations/` |
| **Code Artifacts** | Compiled binaries, WASM | GitHub Releases | GitHub Releases |
| **Secrets/Keys** | **NUNCA** publicar | N/A | Local HSM / .env (gitignored) |

---

### 7. COMUNICACIÓN DE RESULTADOS NEGATIVOS / LIMITACIONES

**Regla de Oro:** *Publicar lo que no funcionó es tan valioso como lo que sí.*

| Situación | Acción Requerida |
|---|---|
| **Test KPI falla** | Documentar en `docs/negative_results/` + issue GitHub + análisis causa raíz |
| **Supuesto invalidado** | Actualizar EBD Decision Matrix (Documento 04) + comunicar en PR |
| **Riesgo materializado** | Post-mortem en `docs/postmortems/` + lecciones aprendidas |
| **Scope change** | Memorándum de cambio (template Documento 06) + Go/No-Go review |

**Formato Estándar Resultado Negativo:**
```markdown
# Negative Result: [Título]
**Fecha:** YYYY-MM-DD
**Hipótesis:** [Qué se esperaba]
**Resultado:** [Qué ocurrió + datos]
**Análisis:** [Causa raíz + evidencia]
**Impacto:** [En roadmap / decisiones]
**Próximos Pasos:** [Pivot / fix / document]
**Referencias:** [Tests, logs, commits]
```

---

### 8. COLABORACIÓN EXTERNA Y PEER REVIEW

#### 8.1 Protocolo para Colaboradores Externos

| Paso | Acción | Responsable |
|---|---|---|
| 1. **Onboarding** | Firmar CLA (Contributor License Agreement) + leer este protocolo | PI |
| 2. **Asignación** | Issue GitHub con label `good-first-issue` / `help-wanted` + milestones | PI |
| 3. **Desarrollo** | Branch `feat/xxx` + commits convencionales + tests obligatorios | Colaborador |
| 4. **Review** | 2 approvals (PI + 1) + CI pass + coverage ≥ 80% | PI + Reviewer |
| 3. **Merge** | Squash + merge a `main` + tag si release | PI |
| 4. **Crédito** | Añadir a `AUTHORS.md` + Zenodo metadata + release notes | PI |

#### 8.2 Peer Review Externo (Pre-Publicación)

| Target | Proceso | Timeline |
|---|---|---|
| **Paper IEEE/IEICE** | Submit → Review (2-3 reviewers) → Rebuttal → Camera-ready | 3-6 meses |
| **ArXiv Pre-print** | Submit → Auto-moderation (24h) → Public | 1 día |
| **Technical Report** | Internal review (PI + 1) → Public GitHub | 1 semana |
| **Dataset** | Zenodo curation (metadata check) → DOI | 1-2 días |

---

### 9. MÉTRICAS DE IMPACTO Y SEGUIMIENTO

| Métrica | Herramienta | Frecuencia | Target Año 1 |
|---|---|---|---|
| **Paper Citations** | Google Scholar / Semantic Scholar | Mensual | ≥ 5 |
| **GitHub Stars/Forks** | GitHub Insights | Semanal | ≥ 100 / ≥ 20 |
| **Zenodo Downloads** | Zenodo Stats | Mensual | ≥ 500 |
| **Blog Views** | Plausible / GoatCounter | Semanal | ≥ 1000 |
| **Community PRs** | GitHub Insights | Mensual | ≥ 5 |
| **Testnet Operators** | Custom dashboard | Semanal | ≥ 10 |

**Reporte Trimestral:** `docs/impact_report_QX_YYYY.md` — publicado en GitHub Discussions.

---

### 10. GOBERNANZA DEL PROTOCOLO

| Acción | Autoridad | Proceso |
|---|---|---|
| **Enmienda Menor** (typos, clarificaciones) | PI | Commit directo + tag `protocol/vX.Y+1` |
| **Enmienda Mayor** (nuevos estándares, cambios flujo) | PI + Stakeholder | Issue + Discussion (14 días) → Approve → Tag `protocol/vX+1.0` |
| **Excepción Justificada** | PI | Documentar en `EXCEPTIONS.md` con justificación + expiración |
| **Deprecación** | PI + Stakeholder | Anuncio 30 días + migración guiada |

**Versión Actual:** 1.0 | **Próxima Revisión Programada:** 2026-11-18 (Trimestral)

---

### 11. PLANTILLAS DE REFERENCIA RÁPIDA

#### 10.1 Header Estándar Documento
```markdown
# TÍTULO
**Referencia:** [CÓDIGO-YYYY-NNN] | **Fecha:** YYYY-MM-DD | **Versión:** X.Y  
**Autores:** [Nombres] | **Clasificación:** [PÚBLICO/ESTRATÉGICO/INTERNO] | **Estado:** [DRAFT/REVIEW/APPROVED/PUBLISHED]  
**DOI (si aplica):** 10.5281/zenodo.XXXXXX | **Git Tag:** `docs/vX.Y`
```

#### 10.2 Commit Message Convencional
```
type(scope): brief description

- Detailed bullet 1
- Detailed bullet 2

Refs: #issue-number
EBD: [EBD-D#]
KPI: [KPI-Name]
```

#### 10.3 Issue Template (GitHub)
```markdown
## Contexto / Evidencia
[Link a EBD decision / paper / benchmark]

## Objetivo
[Qué se quiere lograr + KPI target]

## Plan
- [ ] Paso 1
- [ ] Paso 2

## Validación
- [ ] Test unitario
- [ ] Test integración
- [ ] Benchmark (si aplica)

## Riesgos
- [Riesgo 1]: Mitigación
```

---

### 12. CONTACTO Y ESCALACIÓN

| Rol | Nombre | Contacto | Disponibilidad |
|---|---|---|---|
| **PI / Protocol Owner** | Isaac Ko (Isaacko0) | isaacko@protonmail.com / GitHub @Isaacko0 | L-V 9-18h UTC-6 |
| **Stakeholder Review** | [Nombre] | [Email] | Bi-semanal 30min |
| **Technical Reviewer** | [Nombre] | [Email] | Según necesidad |
| **Emergencia Seguridad** | PI | isaacko@protonmail.com (PGP: 0x...) | 24/7 |

---

**Document Control:** Version 1.0 | 2026-08-18 | Author: Isaac Ko | Classification: PUBLIC — COMMUNITY STANDARD | Status: ACTIVE