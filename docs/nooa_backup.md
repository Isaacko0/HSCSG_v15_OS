# BACKUP — NVIDIA NeMo labs-OO-Agents (NOOA)

**Fecha:** 2026-08-18 · **Origen:** https://github.com/NVIDIA-NeMo/labs-OO-Agents
**Clon:** `C:\Users\Isaacko0\Documents\labs-OO-Agents` (1302 archivos, ~98MB con deps)
**Backup:** `C:\Users\Isaacko0\Documents\labs-OO-Agents_BACKUP_20260818_214934` (sin .git)
**Licencia:** Apache 2.0 (SPDX en cada archivo) — compatible con HSCSG (MIT/Apache).

## Qué es

**NOOA (NVIDIA-labs Object Oriented Agents)** es un framework Python **model-agnostic** para
construir agentes AI. La premisa: *un agente es un objeto Python* — su estado, capacidades,
prompts y interfaces tipadas viven en una sola clase `Agent`.

```python
from nooa import Agent
class SupportAgent(Agent):
    order_db: OrderDB                       # estado tipado en el objeto
    def is_refund_eligible(self, o: Order) -> bool: ...  # método determinista (tool)
    async def triage(self, msg: str, o: Order) -> Ticket:  # método generativo (LLM)
        """Create a typed support ticket."""  # docstring = prompt
```

## Estructura (1302 archivos)

```
src/nooa/            # core: agent.py, skill.py, runtime/, storage/, mcp/, strategies/, tools/
packages/
  nooa-bench/        # benchmark de agentes
  nooa-cli/          # CLI (nooa start-dev, trace viewer en :5001)
  nooa-memory/       # persistencia/memoria
skills/              # 13 SKILL.md para coding agents (authoring, codeact, context, channels, etc.)
examples/            # quickstart, arc_agi_3, cybergym, benchmarks
notebook_tutorials/  # tutorials Jupyter
tests/  conftest.py  pyproject.toml  uv.lock
```

## Conceptos clave (para integration.md)

- **Agente = objeto**: estado en campos tipados; métodos visibles al LLM vía `doc(self)`.
- **Método determinista** = herramienta (cuerpo real). **Método con `...`** = delegado a LLM (docstring = prompt). **Tipo de retorno** = contrato Pydantic (salida estructurada).
- **Visibilidad**: visible por defecto, ocultar con `@hidden` / `Annotated[T, hidden]` (ej. API_KEY).
- **Estrategias**: `CodeActStrategy` (default, REPL + tools) vs `PredictStrategy` (single-shot, extracción).
- **Contexto/Eventos**: `self.context` / `self.events` presentes en todo agente, ocultos por defecto (opt-in con `spec()`).
- **Self-extending**: `self.libs` (bibliotecas de skills persistentes), `@slash_command`, sub-llamadas `@strategy`.
- **Canales**: `Channel`/`QueueManager`, `race()`, `spawn()` (jobs en background), `monitor`/`cron`/`tail`.
- **Trazas**: auto-tracing OTLP, exporters jsonl/otlp/langfuse, trace viewer en :5001.
- **Middleware**: `intercept()` (guardrails/transforms/blocking), `on()` (event observers).

## Por qué es fuente primaria para HSCSG

HSCSG ya tiene `agentMesh` (malla de agentes soberanos en `AppState`). NOOA es la **capa de
agente-orobjeto** más madura y compatible con el principio MJ: el agente es responsable de su
propio estado tipado y no depende de infra ajena (nube/NVIDIA) para existir — solo usa el LLM
como motor de generación, análogo a cómo HSCSG usa el LLM de forma agnóstica.

## Infraestructura ajena a extirpar (principio anfibio HSCSG)

- Dependencias NVIDIA/LLM específicas (`unifiedllm`, `nemo_relay_middleware`) → reemplazar por capa agnóstica HSCSG.
- `nooa-cli` / trace viewer (servidor :5001) → herramienta de dev, no va al OS offline.
- `nooa-bench` → benchmark externo, no se asimila como módulo.
- **Se conserva:** el modelo de agente-orobjeto (clase + estado tipado + métodos visibles), estrategias, visibilidad, contexto/eventos, self-extending, canales, middleware — isomorfos a `agentMesh` + Leyes MJ.
