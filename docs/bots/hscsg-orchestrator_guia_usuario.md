# Guía de Usuario — hscsg-orchestrator

**Versión**: 0.1.0 | **Perfil**: `hscsg-orchestrator` | **Modelo**: `meituan/longcat-2.0:free` (provider `nous`)

---

## 1. Qué es y para qué sirve

`hscsg-orchestrator` es el **cerebro operativo** del Sistema Alráico (HSCSG v15 OS). Su única misión: **ejecutar ciclos del `loopEngine`** que hacen avanzar el `/simulador`, gobernar el pipeline de asimilación (`repo-assimilation → scientific-papers → unified-assimilation-science → gaia-mycelium-integration → brief-detector-recommender`), custodiar `orchestrator-state.json` como *single source of truth*, y despachar trabajo a la flota de bots especialistas vía kanban.

> No es @hermes. No opera servicios (Vercel, Nextcloud, ComfyUI). No escribe `MEMORY.md` de otros bots. No es un chatbot general.

---

## 2. Arquitectura de independencia (crítico)

### Pin de modelo (survive local-box failure)

```
provider: nous
default: meituan/longcat-2.0:free
base_url: ''          # ← VACÍO obligatorio
api_key: (no presente) # ← NUNCA copiado del perfil default
```

**Verificación obligatoria en cada arranque**:
```bash
hermes -p hscsg-orchestrator config get model
# Debe mostrar EXACTAMENTE lo de arriba. Si base_url o api_key aparecen → fuga del create.
```

### Perfil `--no-skills` (sin skills heredados)

```bash
hermes profile create hscsg-orchestrator --no-skills --description "..."
# Crea .no-bundled-skills en el root del perfil → opt-out de sync automático
```

### Skills locales (copia, no symlink de directorio)

El skill vive en dos lugares:
- **Canónico**: `~/.hermes/skills/autonomous-ai-agents/hscsg-orchestrator/` (fuente de verdad, se parchea aquí)
- **Perfil**: `~/.hermes/profiles/hscsg-orchestrator/skills/autonomous-ai-agents/hscsg-orchestrator/` (copia de trabajo)

> **Regla**: Nunca symlink de directorio (`rglob` falla). Cada archivo se copia o symlink individual. Script: `scripts/link_skill_tree.py`.

---

## 3. Puesta en marcha

### 3.1 Arranque interactivo (chat)

```bash
hscsg-orchestrator chat
# o
hermes -p hscsg-orchestrator chat
```

### 3.2 Arranque headless (cron / gateway)

```bash
# Gateway (para recibir DMs de otros bots)
hscsg-orchestrator gateway start

# Cron job (ciclo automático cada 15 min)
hermes cron create --name "alraico-cycle" \
  --schedule "every 15m" \
  --prompt "Ejecuta un ciclo completo del loopEngine: lee orchestrator-state.json, computa tick, despacha kanban, verifica, escribe estado, loguea." \
  --skills hscsg-orchestrator
```

### 3.3 Verificación post-arranque (checklist)

| Check | Comando | Esperado |
|-------|---------|----------|
| Modelo pinneado | `hermes -p hscsg-orchestrator config get model` | `provider: nous`, `default: meituan/longcat-2.0:free`, `base_url: ''` |
| Peers alcanzables | `hermes -p hscsg-orchestrator peer list` | 5 especialistas con peer IDs reales (no `(not set)`) |
| Skill cargado | `hermes -p hscsg-orchestrator skills list` | `hscsg-orchestrator` aparece (o skill local copiado) |
| Estado inicial | `cat orchestrator-state.json` | JSON válido con versión, pipeline, fleet, anomalies, deploy |
| `.no-bundled-skills` | `ls -la ~/.hermes/profiles/hscsg-orchestrator/.no-bundled-skills` | Existe |

---

## 4. Operación: El Ciclo Alráico

### 4.1 Anatomía de un ciclo

```json
{
  "cycle_id": "ALR-20260908-001",
  "tick": 42,
  "started_at": "2026-09-08T14:30:00Z",
  "ended_at": "2026-09-08T14:35:12Z",
  "dispatched": [
    { "stage": "repo-assimilation", "card_id": "KAN-20260908-001", "assignee": "hscsg-repo-assimilation", "repo": "https://github.com/.../tekitl", "status": "completed" }
  ],
  "verified": [
    { "card_id": "KAN-20260908-001", "result": "assimilated", "artifacts": ["skills/tekitl/", "docs/tekitl_backup.md", "docs/tekitl_integration.md"] }
  ],
  "anomalies": [
    { "type": "peer_unreachable", "severity": "high", "specialist": "hscsg-gaia-mycelium-integration", "detail": "DM ack then vanish" }
  ],
  "state_delta": {
    "assimilated_repos": +1,
    "papers_generated": +1,
    "pending_stages": ["unified-assimilation-science", "gaia-mycelium-integration"]
  }
}
```

### 4.2 Ejecución manual (desde el chat del orquestador)

```
> Ejecuta un ciclo completo ahora: lee orchestrator-state.json, computa tick 43, despacha lo pendiente, verifica completados, escribe estado y loguea.
```

El orquestador:
1. Lee `orchestrator-state.json` (root del repo)
2. Computa qué stages del pipeline necesitan trabajo
3. Crea kanban cards (una por stage) asignadas al especialista correspondiente
4. Hace polling de completación (timeout configurable)
5. Escribe `orchestrator-state.json` actualizado + log operativo
6. Reporta: `cycle_id`, `tick`, `dispatched`, `verified`, `anomalies`, `state_delta`

### 4.3 Despacho kanban (patrón interno)

```bash
# Desde el orquestador (strip kanban env para evitar herencia)
HERMES_KANBAN_BOARD="" HERMES_KANBAN_COLUMN="" \
hermes -p hscsg-repo-assimilation kanban create "Assimilate tekitl" \
  --assignee hscsg-repo-assimilation \
  --label "assimilation" \
  --description "Repo: https://github.com/.../tekitl. Fase 1-4 per hscsg-repo-assimilation skill."
```

**Reglas de higiene**:
- Una llamada `terminal` por worker (sin sesión compartida)
- Strip `HERMES_KANBAN_*` env
- Asignar al perfil del especialista, no a `@hermes`

### 4.4 Taxonomía de anomalías (qué vigilar)

| Tipo | Severidad | Acción automática | Escalamiento |
|------|-----------|-------------------|--------------|
| `peer_unreachable` | high | Re-check peer config, reintentar DM | Humano si persiste >2 ciclos |
| `card_timeout` | medium | Re-despachar con timeout extendido | Revisar salud del especialista |
| `deploy_failed` | critical | Rollback Vercel, dispatch fix card | Humano inmediato |
| `state_drift` | high | Comparar con git history | Corrección manual + human gate |
| `kanban_stuck` | medium | Mover card manual, investigar | Especialista bloqueado |

---

## 5. Gestión de la Flota (Peers)

### 5.1 Peers requeridos (5 especialistas)

| Perfil | Rol | Peer name esperado |
|--------|-----|-------------------|
| `hscsg-repo-assimilation` | Asimilación de repos (4 fases) | `hscsg-repo-assimilation` |
| `hscsg-scientific-papers` | Generación papers EBD | `hscsg-scientific-papers` |
| `hscsg-unified-assimilation-science` | Síntesis unificada | `hscsg-unified-assimilation-science` |
| `hscsg-gaia-mycelium-integration` | Integración Gaia/Mycelium | `hscsg-gaia-mycelium-integration` |
| `brief-detector-recommender` | Detección briefs + recomendador | `brief-detector-recommender` |

### 5.2 Añadir peer (ejemplo)

```bash
hermes -p hscsg-orchestrator peer add hscsg-repo-assimilation \
  --url http://localhost:8080 \
  --key <API_SERVER_KEY_DEL_ESPECIALISTA>
```

### 5.3 Verificación (cada ciclo)

```bash
hermes -p hscsg-orchestrator peer list
# Deben aparecer los 5 con peer IDs reales. "(not set)" = DM ack-then-vanish.
```

---

## 6. Human Gate (puerta humana)

**Ninguna mutación de `orchestrator-state.json` sin firma**.

### Formas válidas de firma:
1. **Chat sign-off**: Tu mensaje "firmado" o "aprobado" en el chat del orquestador
2. **Spec firmado en tarjeta kanban**: La card lleva `signed_by: <tu-user>` en description

### Qué NO hacer:
- Editar `orchestrator-state.json` a mano sin firma
- Saltar el gate vía shell (`echo '...' > orchestrator-state.json`)
- Reescribir `~/.hermes/SOUL.md` (prohibido por constitución)

---

## 7. Vault (documentación de la flota)

**Ubicación**: `H:\Mi unidad\HSCSG Empresa mas memoria\` (Obsidian)

### 7.1 Solo tras certificación

Nunca antes. Un perfil no certificado **no** obtiene `Bots/<name>.md` ni fila en roster.

### 7.2 Archivos a crear/actualizar (owner: `hscsg-orchestrator`)

| Archivo | Cuándo | Contenido |
|---------|--------|-----------|
| `Bots/hscsg-orchestrator.md` | Post-certificación | Frontmatter `type: bot-reference`, SOUL resumido, ciclo de certificación |
| `Bots/making-bots.md` | Cada certificación | Línea de changelog: `- **hscsg-orchestrator** — \`ALR-...\` — ...` |
| `Home.md` | Cada certificación | Fila en tabla "Bots certificados" |

### 7.3 Convención de dueños de sección (una sola dueña por sección)

| Sección | Owner bot |
|---------|-----------|
| `Bots/` | `hscsg-orchestrator` |
| `Backups/` | `hscsg-repo-assimilation` |
| `Papers/` | `hscsg-scientific-papers` |
| `Integrations/` | `hscsg-unified-assimilation-science` |
| `Gaia/` | `hscsg-gaia-mycelium-integration` |
| `Briefs/` | `brief-detector-recommender` |

---

## 8. Mantenimiento y Diagnóstico

### 8.1 Drift Check (tripwire documental)

```bash
python3 ~/.hermes/skills/autonomous-ai-agents/hscsg-orchestrator/scripts/drift_check.py
# Exit 0 = limpio. Exit 1 = drift detectado (ver stdout).
```

**Qué verifica**:
- Symlinks canónico↔perfil íntegros y contenido idéntico
- Vault `Bots/hscsg-orchestrator.md` existe y coincide con SOUL certificado
- Independence pin intacto (`provider`, `default`, `base_url` vacío)

**Ejecuta**: tras cada certificación, y vía cron semanal.

### 8.2 Logs operativos

Cada ciclo genera log estructurado (stdout del chat o archivo si se redirige). Formato:
```
CYCLE ALR-20260908-001 TICK 42 START 2026-09-08T14:30:00Z
DISPATCH repo-assimilation -> KAN-20260908-001 (hscsg-repo-assimilation)
DISPATCH scientific-papers -> KAN-20260908-002 (hscsg-scientific-papers)
VERIFY KAN-20260908-001 OK artifacts: [...]
VERIFY KAN-20260908-002 OK artifacts: [...]
ANOMALY peer_unreachable HIGH hscsg-gaia-mycelium-integration
STATE_DELTA assimilated_repos=+1 papers_generated=+1
CYCLE ALR-20260908-001 TICK 42 END 2026-09-08T14:35:12Z
```

### 8.3 Diagnóstico de fallos comunes

| Síntoma | Causa probable | Fix |
|---------|----------------|-----|
| Skill invisible / índice vacío | Directory-symlink usado | Copiar archivos / `link_skill_tree.py` archivo a archivo |
| `skill_view` rechaza `file_path` | Symlink escape | `read_file` ruta canónica |
| Bot "independiente" en provider default | `base_url`/`api_key` no unset | `config set model.base_url ''` |
| DM ack luego desaparece | Peer faltante en sender | `peer add` en perfil orquestador |
| Honcho peer `(not set)` | `honcho sync` no corrido | `honcho sync` + `memory.provider honcho` |
| CLI real destruida por alias | Preflight omitido | `which -a NAME` + test symlink ANTES de `create` |

---

## 9. Comandos de referencia rápida

```bash
# Chat interactivo
hscsg-orchestrator chat

# Gateway (recibe DMs)
hscsg-orchestrator gateway start

# Config modelo
hermes -p hscsg-orchestrator config get model
hermes -p hscsg-orchestrator config set model.provider nous
hermes -p hscsg-orchestrator config set model.default meituan/longcat-2.0:free
hermes -p hscsg-orchestrator config set model.base_url ''

# Peers
hermes -p hscsg-orchestrator peer list
hermes -p hscsg-orchestrator peer add <name> --url <url> --key <key>

# Kanban (desde orquestador)
hermes -p <especialista> kanban create "..." --assignee <especialista>

# Estado
cat orchestrator-state.json | jq .

# Drift check
python3 ~/.hermes/skills/autonomous-ai-agents/hscsg-orchestrator/scripts/drift_check.py

# Skills list
hermes -p hscsg-orchestrator skills list

# Profile info
hermes profile list
```

---

## 10. Certificación (Definition of Done)

El orquestador está **certificado** cuando:

1. ✅ Ha ejecutado al menos **un ciclo completo** contra el repo vivo
2. ✅ Ha leído `orchestrator-state.json`, despachado kanban, verificado completados, escrito estado
3. ✅ Ha diagnosticado su propio job (cron health, Vercel deploy, kanban queue, peer reachability)
4. ✅ Ha parcheado su runbook (`references/process.md`) si encontró stale bits
5. ✅ Ha pingado al cliente (humano o bots fleet) con reporte de ciclo
6. ✅ Humano dice "documenta en el vault" → ship signal

**Tras certificación**:
- `Bots/hscsg-orchestrator.md` en vault
- Fila en `Bots/making-bots.md`
- Línea en `Home.md` roster
- `drift_check.py` exit 0

---

## 11. Qué NO hacer (constitución)

- ❌ Reescribir `~/.hermes/SOUL.md` (default Hermes)
- ❌ Escribir `MEMORY.md` de trabajadores de asimilación
- ❌ Operar servicios (Vercel, Nextcloud, ComfyUI, inference server)
- ❌ Spawn `hscsg-orchestrator-2` (recursión = bug)
- ❌ Directory-symlink skills (rompe `rglob` y `skill_view`)
- ❌ Dual-copy skill (parchear canónico, luego re-link)
- ❌ Mutar `orchestrator-state.json` sin firma humana
- ❌ Hand-editar `config.yaml` (solo `config set`)
- ❌ Imprimir/copiar `auth.api_key` / `secret_key`

---

## 12. Escalamiento y soporte

| Problema | Contacto |
|----------|----------|
| Peer unreachable persistente | Humano (revisar infra/keys) |
| Vercel deploy failed | Humano + logs build |
| State drift irreconciliable | Humano (manual correction + gate) |
| Skill drift detectado | Parchear canónico → re-link → drift_check |
| Modelo/pin cambiado silenciosamente | Revisar `config get model` + reset |

---

**Fin de la guía**. El orquestador es una herramienta de precisión: un ciclo a la vez, constraints ganados, memoria propia. Úsalo con rigor.