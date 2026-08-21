---
name: hscsg-percon-flow-scan
description: >-
  Escanea un "dump" de hilo/export (WhatsApp, Telegram, Discord, LinkedIn, Facebook) o un
  lote de URLs de comunidades tipo "New Paradigm / PerCon Flow / Potentialism / capitalism
  upgrades" y lo asimila al ecosistema HSCSG v15 OS vía el pipeline de 3 fases (reutiliza
  hscsg-pdf-to-framework con Fase 1 = parseo de hilo en vez de OCR). Detecta enlaces de
  invitación a grupos, extrae la red de plataformas aliadas, genera Brief Científico y doc
  de integración, actualiza fuentes_indice.json (F##), BRIEF maestra (§18.5) y CHANGELOG, y
  hace push a origin/main. Es el flujo invocado por hscsg-orquestador-skills cuando la fuente
  es un hilo/export de chat o un cluster de URLs de movimientos sociales (no un PDF).
license: MIT
author: HSCSG + Hermes Agent
metadata:
  hermes:
    tags: [hscsg, percon-flow, potentialism, new-paradigm, scan, asimilacion, vasos-comunicantes, hilos]
    related_skills:
      - hscsg-pdf-to-framework
      - hscsg-scientific-papers
      - hscsg-orquestador-skills
      - external-framework-integration
---

# HSCSG v15 OS — PerCon Flow / New Paradigm Scan (Pipeline de 3 Fases para hilos/URLs)

Convierte cualquier **dump de hilo de chat** (export de WhatsApp/Telegram/Discord/FB/LinkedIn)
o **lote de URLs** de comunidades "new paradigm" (PerCon Flow, Potentialism, cooperativismo,
commons, ReFi, compasión, paz, etc.) en **evidencia primaria viva** del ecosistema HSCSG
mediante 3 fases encadenadas. Reutiliza la mecánica de `hscsg-pdf-to-framework` pero con
**Fase 1 = parseo de hilo / fetch de URLs** en vez de OCR de PDF.

> **Regla de oro:** un hilo de chat o un cluster de links NUNCA se queda como "nota flotante".
> Sale del pipeline como (1) texto estructurado, (2) Brief Científico trazable,
> (3) integración asimilada + push.

> **Soberanía / seguridad:** los enlaces de invitación a grupos de terceros (WhatsApp
> `chat.whatsapp.com/...`, Telegram `t.me/...`, Discord `discord.gg/...`) se registran
> SOLO como metadatos de **procedencia** en el Brief. NO te unes a los servidores, NO
> sigues los enlaces automáticamente, NO ejecutas acciones en esas comunidades. El escaneo
> es de lectura/extracción, nunca de participación.

---

## Fase 0 — Detección y ruta

- Fuente = export de hilo (texto pegado o `.txt`/`.json`) o lote de URLs → **este pipeline**.
- Fuente = PDF local/binario → delega a `hscsg-pdf-to-framework`.
- Señales de entrada típicas:
  - "invite links to the new groups to discuss capitalism upgrades or PerCon Flow/Potentialism"
  - bloques con `ThomasPoetter [LABS]`, `Marcus Packard founder`, `t.me/`, `discord.gg/`,
    `chat.whatsapp.com/`, `facebook.com/groups/`, `linkedin.com/groups/`.
  - lote de URLs tipo `compris.com`, `catalist.network`, `giveth.io`, `commonsstack.org`,
    `solaris-france.org`, `globalpeoplepower.org`, `charterforcompassion.org`,
    `commonerscatalog.org`, doc Google de "Clustering Platforms".
- Skills hermanas que se cargan en el camino (vía `skill_view`):
  - `hscsg/hscsg-scientific-papers` (Fase 2 — Brief Científico, Doc 5)
  - `documentation/external-framework-integration` (Fase 3)
  - `hscsg/hscsg-pdf-to-framework` (mismo contrato de vasos / push)

---

## Fase 1 — Parseo de hilo / Fetch de URLs

### A) Hilo pegado o export `.txt`/`.json`
Limpia y estructura el dump en `docs/research_output/raw_<Slug>.txt`:
- Separa mensajes por autor/fecha (patrón `Nombre — fecha, hora` o `DD/MM/YY, HH:MM`).
- Extrae **todas las URLs** con regex `https?://[^\s)>\]]+`.
- Clasifica URLs:
  - **Invitaciones a grupos** (`chat.whatsapp.com`, `t.me/`, `discord.gg`, `facebook.com/groups`, `linkedin.com/groups`) → sección `INVITACIONES` (solo procedencia).
  - **Plataformas/recursos** (el resto) → sección `RECURSOS`.
- Conserva el texto íntegro del hilo en el raw (no lo resumas todavía).

### B) Lote de URLs
Si te dan solo URLs (sin hilo), usa `web_extract` (hasta 5 por llamada) para traer el texto
de cada plataforma y vuelca todo a `docs/research_output/raw_<Slug>.txt`.

**Verificación Fase 1:** `raw_<Slug>.txt` existe, `chars > 0`, y la lista de URLs invitación
está aislada de la de recursos.

---

## Fase 2 — Brief Científico (`hscsg-scientific-papers`, Doc 5)

Lee el raw y genera `docs/research_output/10_Brief_Cientifico_<Slug>.md` con la estructura
mínima del Doc 5:

1. **Header:** `[BRIEF-XXX-YYYY-NNN]` · fecha · versión · clasificación · fuente primaria
   (hilo/export + nº de mensajes + nº de URLs).
2. **H₁ / H₀** — la tesis del hilo (p.ej. "PerCon Flow es un SEM anfibio compatible con
   ZNU/CaaS") traducida al lenguaje SoV.
3. **Tabla R1..Rn** — datos duros del hilo (nº de miembros de cada grupo, fechas, autores,
   plataformas citadas) + columna "Implicación HSCSG".
4. **Análisis HSCSG** — vasos: cada hallazgo → `[EBD-D#]` / `[mj:Ley#]` / `[aut:CDS]` /
   `[mon:ZNU]` / `[SoV:C1]`.
5. **Conclusión** — ¿H₁ se sostiene con esta evidencia?
6. **Limitaciones** — muestra autoseleccionada, sesgo del fundador, reciclado de links,
   fechas dispersas.
7. **Trazabilidad** — citas a `hscsg-pdf-to-framework` (mismo contrato) y al doc de
   integración (Fase 3).

Slug sugerido: `percon_flow_potentialism` (o el del cluster escaneado).

---

## Fase 3 — Asimilación (`external-framework-integration`)

Genera `docs/<Slug>_integration.md` con:

- Resumen ejecutivo del hilo / cluster.
- **Tabla de homologación** plataforma-externa → componente HSCSG
  (p.ej. Giveth → ZNU Nivel 3 ReFi; Commons Stack → Alráico on-chain; Solaris → SoV-C1
  celular; Charter for Compassion → Ley II Lucidez; etc.).
- **Grafo de vasos comunicantes**: lista de F## que este escaneo aporta al índice.
- **Extrapolaciones** (memetics del "new paradigm", soberanía, scaling vía Catalist).
- **Actionables** aplicables al SoV.
- **Glosario** (`| Término | Definición |`).
- **§16** fila de compatibilidad.
- **Referencias** + vaso al Brief Científico (`[doc:BRIEF-XXX]`).

Luego actualiza:

1. **`docs/fuentes_indice.json`** — añade F## (F51..F60 ya usados en la tanda
   PerCon Flow; siguientes libres) por cada plataforma relevante del hilo, con
   `repo_doc` apuntando a `<Slug>_integration.md` y `fuente_oficial` a la URL.
   Sube el `total`.
2. **BRIEF maestra** (`BRIEF_EXHAUSTIVO_HSCSG_COSATECA_OS.md`) — vaso en header
   (N fuentes) + párrafo en **§18.5** (tanda fecha) citando el escaneo.
3. **CHANGELOG.md** — entrada `v15.XX — YYYY-MM-DD · Scan PerCon Flow / New Paradigm`.

Finalmente:

```bash
git add -A
git commit -m "docs(scan): <Slug> → Brief Científico + integración HSCSG [EBD-D1, mj:LeyII] [perconflow:<slug>]"
git push origin main
```

---

## Vasos Comunicantes Obligatorios

| Fase | Formato de cita | Hacia |
|---|---|---|
| Fase 2 → 3 | `[doc:BRIEF-XXX]` | integration.md cita al Brief |
| Fase 3 → orquestador | `[perconflow:<slug>]` | la orquestadora registra el escaneo ejecutado |
| Fase 3 → pdf2fw | `[pdf2fw:<slug>]` | si el escaneo deriva en un PDF a procesar |
| Cualquier fase | `[EBD-D#]` / `[mj:Ley#]` | scientific-papers / coeficiente-autonomia |

---

## Checklist de calidad (pre-push)

- [ ] Fase 1: `raw_<Slug>.txt` existe, `chars>0`, invitaciones aisladas de recursos.
- [ ] Fase 2: Brief tiene H₁/H₀, tabla R1..Rn, vasos `[EBD-D#]`/`[mj:Ley#]`, limitaciones.
- [ ] Fase 3: integration.md tiene homologación + grafo de vasos + glosario + §16 + vaso al Brief.
- [ ] `fuentes_indice.json` actualizado (F## + `total`).
- [ ] BRIEF maestra (header + §18.5) y CHANGELOG actualizados.
- [ ] `git push origin main` exitoso (verificar con `git log -1`).

---

## Anti-patrones

- Unirse a los grupos de invitación o interactuar en ellos → viola soberanía/seguridad.
- Tratar el hilo como "literatura flotante" sin Brief → prohibido.
- Brief sin limitaciones → incumple rigor de `hscsg-scientific-papers`.
- Push sin actualizar `fuentes_indice.json` / BRIEF maestra → rompe vasos de la orquestadora.
- Mezclar URLs de invitación con URLs de recurso en la misma tabla → pérdida de trazabilidad.

---

## Referencias

- `hscsg/hscsg-pdf-to-framework` — pipeline hermano (PDF); mismo contrato de vasos/push.
- `hscsg/hscsg-scientific-papers` — Doc 5 Brief Científico.
- `documentation/external-framework-integration` — asimilación de marcos.
- `hscsg/hscsg-orquestador-skills` — router que invoca este pipeline para hilos/URLs.
- Tanda fundacional de ejemplo: `docs/percon_flow_potentialism_integration.md` +
  `docs/research_output/10_Brief_Cientifico_PerConFlow_Potentialism.md` (F51–F60).
