# OUR_SKILLS — Manifest de Skills Propias (HSCSG v15 OS)

**Propósito:** Distinguir las skills que Isaac Ko (Isaacko0 / Zeitnus) creamos para HSCSG
de las skills de instalación de Hermes (agency-*, business-design/*, software-development/*, etc.).

**Cómo diferenciar:**
- Todas las nuestras usan prefijo `hscsg-` y `metadata.author: Zeitnus` + `license: MIT`.
- Viven en `HSCSG_v15_OS/skills/` y se espejan a `~/.hermes/skills/hscsg/`.
- El cron `sync_docs.sh` las re-copia automáticamente al índice de Hermes.

## Skills propias (creadas en conjunto)

| Skill | Tipo | Creada | Estado | Ubicación repo | Ubicación Hermes |
|---|---|---|---|---|---|
| `hscsg-repo-assimilation` | Asimilación de repos como módulos vivos (4 fases) | 2026-08-05 (base) / ampliada 2026-08-18 | ✅ Indexada | `skills/hscsg-repo-assimilation/` | `~/.hermes/skills/hscsg/hscsg-repo-assimilation/` |
| `hscsg-scientific-papers` | Protocolo de papers (EBD + vasos comunicantes) | 2026-08-18 | ✅ Indexada (copiada 2026-08-18) | `skills/hscsg-scientific-papers/` | `~/.hermes/skills/hscsg/hscsg-scientific-papers/` |
| `hscsg-unified-assimilation-science` | Skill maestra fusionada (asimilación + ciencia + vasos comunicantes totales) | 2026-08-18 | ✅ Indexada (copiada 2026-08-18, verificada `available`) | `skills/hscsg-unified-assimilation-science/` | `~/.hermes/skills/hscsg/hscsg-unified-assimilation-science/` |
| `hscsg-document-architect` | Construye documentos fundacionales unificados (BRIEF, modelo civilizatorio) | 2026-08-10 | 📄 `.md` suelto en repo (no carpeta SKILL.md) — pendiente normalizar a carpeta | `skills/hscsg-document-architect.md` | no indexada |
| `hscsg-multi-framework-integration` | Integración multi-framework en doc base HSCSG (DisCO, 8 Capitales, Integral, Auravana) | 2026-08-10 | 📄 `.md` suelto en repo + indexada en `business-design/` (versión de instalación) | `skills/hscsg-multi-framework-integration.md` | `~/.hermes/skills/business-design/hscsg-multi-framework-integration/` |

## Skills de instalación de Hermes (NO nuestras — solo referencia)

Estas NO son nuestras; las lista el sistema. No deben tocarse con el cron:
- `agency-*` (todas las de la agencia) — en `~/.hermes/skills/agency-*/`
- `business-design/hscsg-multi-framework-integration` — versión de instalación (categoría business-design)
- `hscsg/hscsg-external-integration` — instalada previamente (integración foros cerrados)
- `software-development/*`, `creative/*`, `research/*`, etc.

## Pendientes de normalización

1. `hscsg-document-architect.md` y `hscsg-multi-framework-integration.md` son `.md` sueltos en el repo.
   - Decisión sugerida: mover cada uno a carpeta `skills/<nombre>/SKILL.md` para que el cron los espeje al índice.
2. Crear skills dedicadas **Sistema Alráico** y **Coeficiente de Autonomía** (hoy viven dentro de otras skills/BRIEF, no como archivos propios).
