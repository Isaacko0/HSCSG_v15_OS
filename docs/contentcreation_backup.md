# BACKUP — ContentCreation-OS (CynthiaSalazarB)

**Fecha:** 2026-08-18 · **Origen:** https://github.com/CynthiaSalazarB/ContentCreation-OS
**Clon:** `C:\Users\Isaacko0\Documents\ContentCreation-OS` (66 archivos)
**Backup:** `C:\Users\Isaacko0\Documents\ContentCreation-OS_BACKUP_20260818_233943` (sin .git)
**Licencia:** verificar (LICENSE presente en repo) — asumir compatible; confirmar antes de fusión.

## Qué es

**ContentCreation-OS** — "Brand Co-Pilot & Second Brain": sistema Python **local-first, modular,
human-in-the-loop** que captura ideas crudas (CLI / Telegram / RSS), las puntúa contra una
definición de marca personal, genera 2–3 ángulos de guion con LLM, y las presenta al humano en
Notion para revisión. **La IA nunca publica ni decide: el campo `Status` del humano es la única puerta.**

## Estructura (66 archivos)

```
orchestrator.py        # encadena módulos idempotentes run(ctx)->RunResult por registry
agents/
  capture_agent/       # captura ideas (CLI + Telegram bot en GCP VM)
  news_scraper/        # RSS -> fetch/dedup/filter por keywords (sin LLM) -> digest diario
  script_angles_agent/ # lee config/personal_brand.md + Gemini -> 2-3 ángulos + brand-fit %
  sync_agent/          # push ideas a Notion Idea Bank + pull decisiones Approve/Reject
core/
  llm/                 # gemini_client, brand_context, routing (LLM agnóstico por yaml)
  models/              # idea.py, news_item.py, run.py (schemas)
  storage/             # json_store, sqlite_store (local canónico)
pipelines/idea_pipeline.py
config/                # llm_routing.yaml, news_sources.yaml, personal_brand.example.md
docs/                  # VISION, ARCHITECTURE, RUNBOOK, WHATS-NEXT
tests/
```

## Conceptos clave (para integration.md)

- **Human-in-the-loop:** IA scorea, etiqueta, sugiere ángulos; nunca auto-publica/aprueba. Brand-fit % es advisory; `Status` humano es la única puerta.
- **Local-first:** Python en la máquina; SQLite/JSON local es canónico. Notion = dashboard de revisión humana, nunca fuente de verdad.
- **Modular idempotente:** cada módulo es `run(ctx) -> RunResult` en un registry; `orchestrator.py` los encadena (`--steps news,sync`).
- **Captura multi-puerta:** CLI one-shot, CLI quick-capture, Telegram bot (GCP VM, drena one-way a DB local).
- **Score contra marca:** `script_angles_agent` lee `config/personal_brand.md` y pide a Gemini ángulos + brand-fit %.
- **Rolling vs persistent:** noticias cortas (JSON hoy, Notion rolling 30d); ideas persistentes (SQLite append-only).

## Por qué es fuente primaria para HSCSG

HSCSG ya tiene `Agencia.tsx` (perfiles ICP, MJ Gate que bloquea ventas ciegas, postmonetario/conectado).
ContentCreation-OS es la **capa de creación de contenido anfibia** que HSCSG necesita: el humano decide
(Ley III MJ: lucidez/humana), la IA asiste (isomorfo a `loopEngine` generativo), y la marca personal
es el análogo al `brandDNA` de `Agencia.tsx`. Encaja con el principio HSCSG: "la IA sugiere, el humano decide".

## Infraestructura ajena a extirpar (principio anfibio HSCSG)

- **Notion** (sync_agent/notion_*) → reemplazar por almacenamiento HSCSG local (Zustand + localStorage).
- **Telegram bot + GCP VM** → captura remota; conservar solo el modelo de captura multi-puerta (CLI local).
- **Gemini** (`core/llm/gemini_client`) → reemplazar por `LLMConfig` agnóstico HSCSG (offline RAO ↔ conectado).
- **GitHub Action** (news diario) → automatización externa; conservar la lógica de news_scraper (RSS/dedup/filter).
- **Se conserva:** capture→score→ángulos→revisión humana (gate), modelos idea/news_item, registry de módulos idempotentes, brand-fit scoring.
