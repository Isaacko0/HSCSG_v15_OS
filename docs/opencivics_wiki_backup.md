# OpenCivics Wiki — Rescate de contenido

**Fuente:** https://wiki.opencivics.co/ (Obsidian Publish)
**Rescatado:** 2026-08-19 · **Método:** navegador (JS-render) — el sitio carga contenido por JS, no por HTML estático.
**Alcance:** páginas raíz con contenido sustantivo (`About the OpenCivics Wiki` + `Quick Links`).
Las secciones del menú (`Fundamentals`, `Philosophy`, `Practice`, `Community`, `Concepts`, `Publications`, `Glossary`) son **carpetas contenedoras** sin artículo propio; sus subpáginas requieren navegación individual (ver nota al final).

---

## About the OpenCivics Wiki

> Welcome to the OpenCivics Network Wiki

This wiki is a living knowledge commons, built for transparency and shared understanding within the OpenCivics Network.

Here, you'll find information related to:

- **Movement** — OpenCivics
- **Philosophy** — Open Civics
- **Practice** — Open Civic Innovation
- **Community** — OpenCivics Network

---

## Quick Links

- **Website**
- **Commons**
- Telegram: https://t.me/+CdR0_3I4av43MzBh
- **Substack**
- **LinkedIn**: https://www.linkedin.com/company/opencivics/

---

## Nota sobre el rescate completo de la wiki

La wiki de OpenCivics (Obsidian Publish) organiza el contenido en un árbol donde las secciones del menú lateral son carpetas:

- Readme → (About the OpenCivics Wiki — rescatada arriba)
- Quick Links → (rescatada arriba)
- Fundamentals → contenedor (subpáginas no listadas en raíz)
- Philosophy → contenedor
- Practice → contenedor
- Community → contenedor
- Concepts → contenedor
- Publications → contenedor
- Glossary → contenedor

Para rescatar **todas** las subpáginas se requiere navegar el grafo de la wiki (cada página se carga por JS con un hash no predecible vía curl). El procedimiento es:
1. Abrir el **Global Graph** en el navegador para listar todos los nodos/páginas.
2. Navegar cada subpágina y extraer su `innerText`.
3. Consolidar en este `.md`.

**Si quieres el rescate completo**, confirmo y ejecuto el recorrido del grafo (serán varias navegaciones). Por ahora entrego las páginas raíz sustantivas para no saturar y confirmar el formato.

---

*Rescate parcial — OpenCivics Wiki (2026-08-19).*
