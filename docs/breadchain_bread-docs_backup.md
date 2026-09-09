# BreadchainCoop — Bread-docs (Backup 2026-09-10)

**Fecha de asimilación:** 2026-09-10  
**Repositorio original:** https://github.com/BreadchainCoop/bread-docs  
**Commit HEAD:** 6a7a10b (2026-09-02)  
**Estado:** Público, 111 commits, 3 ramas, 1 fork, 0 estrellas

---

## 📋 Resumen Ejecutivo

**bread-docs** es el sitio de documentación oficial de **Bread Cooperative** (bread.coop), construido con **Astro Starlight** + **Keystatic CMS**. Es la "capa de documentación" que explica, gobierna y hace navegable todo el ecosistema Bread (Solidarity Fund, Stacks, Safety Net, BREAD token, gobernanza, member projects).

> No es código de protocolo, no es contrato, no es frontend de usuario final. Es **la capa semántica y de onboarding** del ecosistema.

---

## 🏗️ Arquitectura Técnica

| Capa | Tecnología | Propósito |
|------|------------|-----------|
| Framework | Astro 6 + Starlight | SSG docs, sidebar auto, MDX |
| CMS | Keystatic | Edición visual GitHub-based, branches protegidas |
| Estilos | Tailwind CSS v4 + CSS custom properties | Design system Bread (fuentes Pogaca, dark mode) |
| Despliegue | Netlify | Build `npm run build` → `dist/` |
| Node | 24.14.0+ (`.nvmrc`) | |

**Estructura de contenido (`src/content/docs/`):**
```
about/                    # Getting Started
  ├── index.md            # Landing (redirige a /about/token/)
  ├── bread-token/        # BREAD Community Currency
  │   ├── index.md        # Overview
  │   └── marketplace.md  # Marketplace
  └── bread-cooperative.md # About Bread Cooperative
tools/                    # Tools and Mechanisms
  ├── solidarity-primitives/
  │   └── crowdstaking/   # Crowdstaking protocol docs
  │       ├── index.md    # Overview
  │       ├── angel-minters.md
  │       └── member-projects.md
  └── stacks/
      └── index.md        # Stacks Overview
organization/             # Bread Cooperative (How We Work)
  ├── bread-constitution.md
  ├── operational-annex.md
  └── bread-garden.md
```

**Redirects legacy mantenidos:**
- `/token` → `/about/bread-token`
- `/marketplace` → `/about/bread-token/marketplace`
- `/solidarity-fund` → `/solidarity-primitives/crowdstaking`
- `/angel-minters` → `/solidarity-primitives/crowdstaking/angel-minters`
- `/member-projects` → `/solidarity-primitives/crowdstaking/member-projects`

---

## 🎨 Design System (Referenciado desde bread-design-system)

- **Fuentes**: Pogaca (Bread Display & Bread Body) — WOFF2 en `public/fonts/`
- **Colores**: CSS custom properties en `src/styles/global.css`
- **Dark mode**: `[data-theme='dark']` selectors
- **Regla de oro**: Nunca construir desde cero — importar de Figma DS file (`OYtf96ROFhou9nHezG5SOD`)

---

## 🤖 AGENTS.md / CLAUDE.md — Instrucciones para Agentes

El repo incluye:
- **AGENTS.md**: Lifecycle completo (clone → verify → branch → dev → edit → checks → PR → cleanup), PR instructions, security considerations, referencia a GOVERNANCE.md
- **CLAUDE.md**: Apunta a AGENTS.md, config para Claude Code + OpenCode + OpenRouter + Astro docs MCP
- **opencode.json**: Provider OpenRouter, MCP Astro docs

**Flujo de contribución:**
1. `git checkout -b keystatic/<user>/<desc>`
2. `npm run dev` → `http://localhost:4321/keystatic`
3. Editar en Keystatic → commit auto a branch
4. `gh pr create --base main --head keystatic/<branch>`

---

## 📜 Gobernanza (GOVERNANCE.md)

- **Maintainers**: Lista en GOVERNANCE.md
- **Merge policy**: Tabla por tipo de cambio (content vs code vs config)
- **Branch protection**: `main` protegida, todo via PR
- **Decisiones**: Consenso de maintainers, issues para discusión

---

## 🔗 Integración con Ecosistema Bread

| Repo | Relación |
|------|----------|
| `crowdstake.fun` | Protocolo base documentado aquí (Solidarity Primitives) |
| `ourcoop` | Fork cooperativo (COVA) — docs en `/coop/` del frontend, runbook aquí |
| `bread-design-system` | Design system referenciado (fonts, colors, components) |
| `coopstable-contracts` | cUSD stablecoin — referenciado en tokenomics |
| `bread-gnosis-pay` | Bridge Gnosis — legacy, archivado conceptualmente |
| `commonware-restaking-contracts` | AVS/restaking — infra separada |

---

## 📦 Archivos Clave para Asimilación HSCSG

| Archivo | Qué Aporta a HSCSG |
|---------|---------------------|
| `src/content/docs/tools/solidarity-primitives/crowdstaking/` | **Modelo de crowdstaking**: pool → yield → distribución votada. Mapea a: CaaS + ZNU + Vesting + Autómata Soberano |
| `src/content/docs/organization/bread-constitution.md` | **Constitución cooperativa**: gobernanza, membresía, valores. Mapea a: Base Material (Ley I) + Soberanía (13 pilares) + Lucidez (Ley III) |
| `src/content/docs/organization/operational-annex.md` | **Anexo operativo**: procesos, roles, flujos. Mapea a: Vasos Comunicantes (governance:sync, trust:bridge) |
| `src/content/docs/about/bread-token/` | **BREAD token**: community currency, marketplace. Mapea a: ZNU (moneda interna nodo) + CaaS (acceso por contribución) |
| `AGENTS.md` / `CLAUDE.md` | **Protocolo de agentes**: cómo operan LLMs en el repo. Mapea a: hscsg-repo-assimilation + hscsg-document-architect + brief-detector-recommender |
| `keystatic.config.tsx` | **CMS schema**: collections, fields, validaciones. Mapea a: Schema de briefs HSCSG (BRIEF_EXHAUSTIVO, BRIEFS_INDEX, fuentes_indice) |

---

## 🧠 Isomorfismos HSCSG ←→ Bread-docs

| Concepto Bread | Concepto HSCSG v15 OS | Tipo Mapeo |
|----------------|----------------------|------------|
| Solidarity Fund (crowdstaking) | CaaS + ZNU + Vesting + Autómata Soberano | **Estructural** |
| BREAD Community Currency | ZNU (moneda interna nodo, demurrage, no especulativa) | **Funcional** |
| Member Projects (voted funding) | Proyectos del Nodo (financiados por AUT × CDS) | **Operativo** |
| Angel Minters (bootstrap liquidity) | Semilla inicial de Base Material / Liquidez fundacional | **Económico** |
| Stacks (yield strategies) | Estrategias de rendimiento Base Material (energía, comida, herramientas) | **Técnico** |
| Bread Constitution | hscsg_definition.md + 3 Leyes MJ + 13 Pilares Soberanía | **Normativo** |
| Operational Annex | Vasos Comunicantes + Briefs operativos + Orchestrator | **Procesal** |
| Keystatic CMS (Git-based) | Brief-driven development (Git + skills + orchestration) | **Metodológico** |
| Design System (Figma → code) | Matemas (grimorio visual) + p5js/manim generativo | **Estético/Simbólico** |
| Netlify static deploy | Vercel static deploy (offline-first SPA) | **Infraestructura** |

---

## 🎯 Qué Extraer para HSCSG v15 OS

### 1. **Modelo de Crowdstaking → Módulo CaaS/ZNU**
```
Pool deposita → Stake en yield (sDAI, etc.) → Solo yield se distribuye
      ↓
Principal permanece intacto, retiradero 1:1
      ↓
Distribución: votación 1p1v (100 puntos) por ciclo
      ↓
Top-N projects funded each cycle
```
**Mapeo HSCSG:**
- Pool = Base Material del nodo (Ley I)
- Yield = Excedente regenerativo (AUT × CDS)
- Votación 1p1v = Governance:sync (Vaso Comunicante) + Kappa Governance (VIA-25)
- Principal intacto = Soberanía recursiva (no dilución)

### 2. **Constitución + Anexo Operativo → Gobernanza HSCSG**
- **Bread Constitution** → `hscsg_definition.md` (ya existe, enriquecer)
- **Operational Annex** → Vasos Comunicantes spec + Orchestrator tasks

### 3. **Keystatic CMS → Brief-Driven Development**
- Collections = Brief types (exhaustivo, perfil, onboarding, integración)
- Fields = Schema brief (metadatos, contenido, mapeos, tareas)
- Branch-per-edit = Task-per-brief (orchestrator)

### 4. **Design System → Matemas + Visual Grammar**
- Pogaca fonts → Tipografía Matema
- CSS custom properties → Tokens DESIGN.md (skill design-md)
- Component keys → Component registry (skill excalidraw/architecture-diagram)

---

## 📁 Archivos de Integración Generados

- `breadchain_bread-docs_integration.md` — Este análisis triple-perspectiva
- `breadchain_bread-docs_backup.md` — Este backup completo

---

## 🏷️ Tags para BRIEFS_INDEX / fuentes_indice

```json
{
  "fuente_id": 29,
  "nombre": "BreadchainCoop/bread-docs",
  "tipo": "documentation-site",
  "url": "https://github.com/BreadchainCoop/bread-docs",
  "commit": "6a7a10b",
  "fecha_asimilacion": "2026-09-10",
  "briefs_generados": ["breadchain_bread-docs_backup", "breadchain_bread-docs_integration"],
  "workstreams_activados": ["BREADCHAIN_INTEGRATION"],
  "isomorfismos": 10,
  "modulos_extraibles": ["crowdstaking-model", "constitution-governance", "keystatic-cms-pattern", "design-system-tokens"]
}
```

---

*Backup generado automáticamente por HSCSG v15 OS — Metodología hscsg-repo-assimilation (Fase 1: Backup)*