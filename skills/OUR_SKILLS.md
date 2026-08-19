# OUR_SKILLS — Manifest de Skills Propias (HSCSG v15 OS)

**Propósito:** Distinguir las skills que Isaac Ko (Isaacko0 / Zeitnus) creamos para HSCSG
de las skills de instalación de Hermes (agency-*, business-design/*, software-development/*, etc.).

**Cómo diferenciar:**
- Todas las nuestras usan prefijo `hscsg-` o son de Sistema Alráico, con `author: Isaacko0 / Zeitnus / HSCSG + Hermes Agent`.
- Viven en `HSCSG_v15_OS/skills/` (carpetas `SKILL.md`) y se espejan a `~/.hermes/skills/hscsg/`.
- El cron `sync_docs.sh` las re-copia automáticamente al índice de Hermes.

## Skills propias (creadas en conjunto) — 7 TOTAL

> **Ubicación:** Todas ahora en `HSCSG_v15_OS/skills/<nombre>/` (carpetas SKILL.md) y
> indexadas en `~/.hermes/skills/hscsg/<nombre>/` (verificadas `available` salvo notas).

| # | Skill (name en frontmatter) | Carpeta repo | Indexada Hermes | Origen / Evidence |
|---|---|---|---|---|
| 1 | `hscsg-repo-assimilation` | `skills/hscsg-repo-assimilation/` | ✅ `hscsg/` | Isaac Ko — asimilación repos (4 fases) |
| 2 | `hscsg-scientific-papers` | `skills/hscsg-scientific-papers/` | ✅ `hscsg/` | Isaac Ko — protocolo papers EBD |
| 3 | `hscsg-unified-assimilation-science` | `skills/hscsg-unified-assimilation-science/` | ✅ `hscsg/` (verificada `available`) | Isaac Ko — skill maestra fusionada |
| 4 | `hscsg-document-architect` | `skills/hscsg-document-architect/` | ✅ `hscsg/` | Zeitnus — doc fundacional unificado |
| 5 | `hscsg-multi-framework-integration` | `skills/hscsg-multi-framework-integration/` | ✅ `hscsg/` (+ instalada `business-design/`) | Zeitnus (MIT) — multi-framework |
| 6 | `loop-engineering-canvas` (carpeta `Sistema-Alraico-loop-engineering-skill`) | `skills/Sistema-Alraico-loop-engineering-skill/` | ✅ `hscsg/` (verificada `available`) | Isaacko0 (Amid Dabir, CC0 1.0) — Sistema Alráico |
| 7 | `hscsg-monetary-integration` | `skills/hscsg-monetary-integration/` | ✅ `hscsg/` (verificada `available`; colisión con `business-strategy/` resuelta por carpeta) | HSCSG + Hermes Agent (MIT) — sistemas monetarios alt. |

## Skills de instalación de Hermes (NO nuestras — no tocar con cron)

- `agency-*` (todas) — `~/.hermes/skills/agency-*/`
- `business-design/hscsg-multi-framework-integration` — versión de instalación (categoría)
- `business-strategy/hscsg-monetary-integration` — versión de instalación (categoría) — LA NUESTRA está en `hscsg/`
- `hscsg/hscsg-external-integration` — instalada previamente (foros cerrados)
- `software-development/*`, `creative/*`, `research/*`, etc.

## Notas de normalización (resuelto 2026-08-18)

- Las 2 skills que vivían en repos GitHub separados (`Sistema-Alraico-loop-engineering-skill`, `hscsg-monetary-integration`)
  se trajeron al repo `HSCSG_v15_OS/skills/` como carpetas y se indexaron al índice Hermes.
- Los 2 `.md` sueltos (`hscsg-document-architect`, `hscsg-multi-framework-integration`) se normalizaron a carpetas `SKILL.md`.
- `Sistema-Alraico-loop-engineering-skill` usaba `SKILL` (sin .md); se renombró a `SKILL.md` para compatibilidad Hermes.

## Pendiente

- Confirmar nombres de las **otras 2 skills de Alráico / coeficiente de autonomía** que el usuario menciona
  (no localizadas en `~/.hermes/skills` ni en repos `Isaacko0/` con filtros obvios). Posiblemente viven
  como sub-módulos dentro de `Sistema-Alraico-loop-engineering-skill` (references CSV: 20 límites, ECROx, γ-CARMIS).
