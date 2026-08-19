# INTEGRACIÓN — ContentCreation-OS en HSCSG v15 OS

**Metodología:** `hscsg-repo-assimilation` (Fase 2) + vasos comunicantes (`hscsg-unified-assimilation-science`).
**Fuente:** `docs/contentcreation_backup.md` · **Autora:** CynthiaSalazarB.

---

## Triple Perspectiva

### 👤 Usuario (nodo HSCSG)
Quiere un **co-pilot de contenido anfibio** que:
- Capture ideas desde cualquier puerta (CLI local, y en conectado: Telegram/Nostr).
- Las puntúe contra su **marca personal** (brandDNA) sin que la IA decida por él.
- Genere **ángulos de guion** sugeridos (IA asiste, humano elige).
- Mantenga un **gate humano** (Ley III MJ): la IA nunca publica ni aprueba; el humano `Status` es la única puerta.

### 🤖 LLM (qué asimilar)
**CONSERVAR (lógica isomórfica a Leyes MJ + Agencia + CaaS):**
- Capture → score → ángulos → revisión humana (flujo canónico de creación de contenido).
- `idea` / `news_item` models → tipos HSCSG (Idea, NewsItem).
- Registry de módulos idempotentes `run(ctx) -> RunResult` → isomorfo a `loopEngine` (loops).
- Brand-fit scoring contra `personal_brand.md` → isomorfo a `brandDNA` en `Agencia.tsx`.
- Human gate (`Status` Approve/Reject) → isomorfo a MJ Gate (bloquea ventas/publicación ciegas).

**EXTIRPAR (infra ajena — principio anfibio):**
- **Notion** (sync_agent) → reemplazar por store HSCSG local (Zustand + localStorage).
- **Telegram + GCP VM** → captura remota; conservar modelo multi-puerta (solo CLI local en offline).
- **Gemini** → `LLMConfig` agnóstico HSCSG (offline RAO ↔ conectado Nostr/NEAR).
- **GitHub Action** → automatización externa; conservar lógica news_scraper (RSS/dedup/filter).

### 🔗 HSCSG + CaaS (isomorfismo)
| ContentCreation-OS | HSCSG equivalente | Ley MJ |
|---|---|---|
| `capture_agent` (CLI/Telegram) | Captura de idea en `contentState` | II: base propia |
| `script_angles_agent` + `personal_brand.md` | `brandDNA` (Agencia.tsx) + `loopEngine` generativo | III: lucidez |
| Brand-fit % (advisory) | Score de alineación con `brandDNA` | III |
| `Status` humano (Approve/Reject) | MJ Gate (humano decide, IA no publica) | III |
| `news_scraper` (RSS/dedup/filter) | Feed de noticias local (sin LLM) | I: no ruido |
| Registry `run(ctx)->RunResult` | `loopEngine` loops idempotentes | γ-CARMIS |
| SQLite local canónico | `useAppStore` (Zustand + localStorage) | II |

---

## Vasos Comunicantes (trazabilidad)

- `[EBD-D1]` ADSOA nativo → `docs/research_output/04_Documento_Diseno_Basado_Evidencia_EBD.md`
- `[DV-01]` validación estratégica → `docs/research_output/06_Memorandum_Validacion_Estrategica.md`
- `[repo:contentcreation]` → `docs/contentcreation_backup.md` + `docs/contentcreation_integration.md`
- `[aut:LeyIII]` → `skills/hscsg-coeficiente-autonomia` (gate humano = lucidez)
- `[alraico:loopEngine]` → `skills/hscsg-sistema-alraico`
- Código: `src/core/state/content.ts` + `src/core/lib/content.ts` (nuevo módulo mínimo)

---

## Decisión de Asimilación
- **Alcance:** Documentada (backup + integration + módulo mínimo tipado). NO se volcan los 66 archivos.
- **Módulo HSCSG:** `src/core/state/content.ts` + `src/core/lib/content.ts` — tipos Idea/NewsItem,
  captura multi-puerta, brand-fit scoring contra `brandDNA`, y gate humano (Approve/Reject = MJ Gate).
- **Pantalla:** extender `Agencia.tsx` o nueva `/contenido` para mostrar Idea Bank con ángulos + gate.
- **Principio anfibio:** offline (RAO local) por defecto; en conectado, la captura multi-puerta
  puede drenar desde Nostr/Telegram, pero el gate humano siempre local (Ley III).
