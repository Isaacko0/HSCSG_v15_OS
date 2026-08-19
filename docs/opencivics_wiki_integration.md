# Integración: OpenCivics Wiki → HSCSG v15 OS

**Backup:** `docs/opencivics_wiki_backup.md` (rescate parcial: páginas raíz About + Quick Links; árbol de subpáginas pendiente).
**Fuente viva:** https://wiki.opencivics.co/ (Obsidian Publish)
**Fecha asimilación:** 2026-08-19 · **Skill usada:** `notion-page-scrape` (variante Obsidian Publish — carga por JS, sin HTML estático).

---

## Qué es OpenCivics Wiki
Wiki de conocimiento vivo del OpenCivics Network (Obsidian Publish). Organiza el contenido en un árbol donde las secciones del menú lateral (**Fundamentals, Philosophy, Practice, Community, Concepts, Publications, Glossary**) son **carpetas contenedoras** sin artículo propio; sus subpáginas se cargan por JS con hash no predecible vía curl.

## Rescatado hasta ahora
- **About the OpenCivics Wiki:** define el wiki como "living knowledge commons" del OpenCivics Network; mapea 4 pilares: Movement (OpenCivics), Philosophy (Open Civics), Practice (Open Civic Innovation), Community (OpenCivics Network).
- **Quick Links:** Website, Commons, Telegram, Substack, LinkedIn.

## Isomorfismo con HSCSG
| OpenCivics Wiki | HSCSG v15 OS |
|---|---|
| Movement / Philosophy / Practice / Community (4 pilares) | Análogo a los 4 horizontes de HSCSG: Manifiesto Mundus (philosophy) · Metas Life (practice) · Horizontes Civilizaciones (movement) · Estado Integral (community/node) |
| "living knowledge commons" (Obsidian Publish) | BRIEF + `docs/*` como conocimiento vivo versionado en git (mismo patrón: fuente primaria local, no en la nube) |
| Árbol de carpetas contenedoras | Estructura modular de `skills/` y `docs/` de HSCSG (modular, composable — véase System Design Principles del PDF) |

## Valor para HSCSG
- Confirma el patrón de **conocimiento vivo distribuido** (no-SaaS, local-first) que HSCSG ya practica.
- Los 4 pilares de OpenCivics son isomorfos a los horizontes de HSCSG → útil para el BRIEF (sección "Civilizaciones").

## Limitaciones / pendiente
- **Rescate parcial.** Las subpáginas de Fundamentals/Philosophy/Practice/Community/Concepts/Publications/Glossary NO están rescatadas. Para el rescate completo hay que: (1) abrir el Global Graph en el navegador, (2) listar todos los nodos, (3) navegar cada subpágina y extraer `innerText`, (4) consolidar. Son varias navegaciones — no hecho aún (pendiente del usuario).

## Acción recomendada
Incluir como fuente 48 (parcial). Si se quiere completar, ejecutar el recorrido del grafo (usar `notion-page-scrape` / navegador + Global Graph). Por ahora basta como índice de la estructura conceptual de OpenCivics.
