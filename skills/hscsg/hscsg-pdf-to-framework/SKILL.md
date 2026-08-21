---
name: hscsg-pdf-to-framework
description: >-
  Pipeline de 3 fases para convertir un PDF/binary externo en módulo vivo del ecosistema
  HSCSG v15 OS. Fase 1: extracción de texto (ocr-and-documents / pymupdf). Fase 2: Brief
  Científico HSCSG anclado a evidencia (hscsg-scientific-papers, Doc 5). Fase 3: asimilación
  al ecosistema como documento trazable (external-framework-integration). Incluye la
  actualización de la BRIEF maestra, CHANGELOG y push a origin/main. Es el flujo canónico
  invocado por hscsg-orquestador-skills cuando la fuente es un PDF local.
license: MIT
author: HSCSG + Hermes Agent
metadata:
  hermes:
    tags: [hscsg, pdf, extraccion, brief-cientifico, asimilacion, vasos-comunicantes]
    related_skills:
      - hscsg-scientific-papers
      - hscsg-orquestador-skills
      - external-framework-integration
---

# HSCSG v15 OS — PDF → Framework (Pipeline de 3 Fases)

Convierte cualquier PDF/binario externo (reporte, paper, libro) en **evidencia primaria
viva** del ecosistema HSCSG mediante 3 fases encadenadas. Cada fase abre un vaso
comunicante con la siguiente; nada queda como "literatura flotante".

> **Regla de oro:** un PDF externo NUNCA se queda solo como nota. Sale del pipeline como
> (1) texto extraído, (2) Brief Científico trazable, (3) integración asimilada + push.

---

## Fase 0 — Detección y ruta

- Fuente es PDF/local/binario → este pipeline.
- Fuente es URL remota → `web_extract` primero (más rápido, sin deps); si falla, bajar y tratar como local.
- Skills hermanas que se cargan en el camino (vía `skill_view`):
  - `productivity/ocr-and-documents` (Fase 1)
  - `hscsg/hscsg-scientific-papers` (Fase 2 — Brief Científico, Doc 5)
  - `documentation/external-framework-integration` (Fase 3)

---

## Fase 1 — Extracción (`ocr-and-documents`)

```bash
# Text-based PDF (caso común): pymupdf instantáneo
python -c "
import pymupdf
doc = pymupdf.open('<ruta.pdf>')
out = []
for i,page in enumerate(doc):
    out.append(f'\n===== PAGE {i+1} =====\n'+page.get_text())
full = '\n'.join(out)
open('<ruta>_extract.txt','w',encoding='utf-8').write(full)
print('pages:', doc.page_count, 'chars:', len(full))
"
```

- Si `get_text()` devuelve vacío (<500 chars en PDF de >5 páginas) → es escaneado → usar
  `marker-pdf` (OCR) según `ocr-and-documents` Step 2.
- **Verificación Fase 1:** `chars > 0` y `page_count` coincide con el documento. Guardar
  `_extract.txt` en la carpeta del PDF del usuario (no en el repo).

---

## Fase 2 — Brief Científico (`hscsg-scientific-papers`, Doc 5)

Leer el extracto completo (chunked si >100KB) y generar Brief Científico en
`docs/research_output/09_Brief_Cientifico_<Slug>.md` con esta estructura mínima:

1. **Header estándar:** `[BRIEF-XXX-YYYY-NNN]` · fecha · versión · clasificación · fuente primaria.
2. **H₁ / H₀** — hipótesis del reporte traducidas al lenguaje SoV.
3. **Resultados (tabla R1..Rn)** — datos duros del reporte + columna "Implicación HSCSG".
4. **Análisis HSCSG** — vasos comunicantes: cada hallazgo → `[EBD-D#]` / `[mj:Ley#]` / `[aut:CDS]` / `[mon:ZNU]`.
5. **Conclusión** — ¿H₁ se sostiene con esta evidencia?
6. **Limitaciones** — sesgos de muestra, interés comercial del autor, auto-reporte vs sensor.
7. **Trazabilidad** — citas cruzadas a las skills hermanas y al doc de integración (Fase 3).

Guardar también en `docs/research_output/` siguiendo la numeración de los 8 documentos
base (este es el Doc 9 implícito).

---

## Fase 3 — Asimilación (`external-framework-integration`)

Generar `docs/<Slug>_integration.md` con:

- Resumen ejecutivo del reporte.
- **Tabla de homologación** concepto-externo → componente HSCSG.
- **Extrapolaciones** más allá del reporte (memetics, soberanía,_scaling_).
- **Actionables** aplicables al SoV (rituales, dashboard lucidez, CAC desde onboarding).
- **Glosario** (términos nuevos en formato `| Término | Definición |`).
- **§16 / sistemas** fila de compatibilidad.
- **Referencias** + vaso al Brief Científico (`[doc:BRIEF-XXX]`).

Luego actualizar la **BRIEF maestra** (`BRIEF_EXHAUSTIVO_HSCSG_COSATECA_OS.md` o la que
corresponda) sumando la fuente al índice `fuentes_indice.json` (si aplica) y un renglón en
el CHANGELOG. Finalmente:

```bash
git add -A
git commit -m "docs(assimilation): <Slug> → Brief Científico + integración HSCSG [EBD-D1, mj:LeyIII]"
git push origin main
```

---

## Vasos Comunicantes Obligatorios

| Fase | Formato de cita | Hacia |
|---|---|---|
| Fase 2 → 3 | `[doc:BRIEF-XXX]` | integration.md cita al Brief |
| Fase 3 → orquestador | `[pdf2fw:<slug>]` | la orquestadora registra el pipeline ejecutado |
| Cualquier fase | `[EBD-D#]` / `[mj:Ley#]` | scientific-papers / coeficiente-autonomia |

---

## Checklist de calidad (pre-push)

- [ ] Fase 1: extract `_extract.txt` existe, `chars>0`, page_count correcto.
- [ ] Fase 2: Brief tiene H₁/H₀, tabla R1..Rn, vasos `[EBD-D#]`/`[mj:Ley#]`, limitaciones.
- [ ] Fase 3: integration.md tiene homologación + glosario + §16 + referencias + vaso al Brief.
- [ ] BRIEF maestra / CHANGELOG actualizados.
- [ ] `git push origin main` exitoso (verificar con `git log -1`).
- [ ] (Si aplica) deploy Vercel verificado con `curl -s -o /dev/null -w "%{http_code}"`.

---

## Anti-patrones

- Dejar el PDF solo en Downloads sin Brief → "literatura flotante" (prohibido).
- Copiar datos del reporte sin columna "Implicación HSCSG" → no es asimilación.
- Brief sin limitaciones → incumple rigor de `hscsg-scientific-papers`.
- Push sin actualizar BRIEF maestra → rompe vasos comunicantes de la orquestadora.

---

## Referencias

- `productivity/ocr-and-documents` — extracción pymupdf/marker.
- `hscsg/hscsg-scientific-papers` — Doc 5 Brief Científico.
- `documentation/external-framework-integration` — asimilación de marcos.
- `hscsg/hscsg-orquestador-skills` — router que invoca este pipeline para PDFs.
