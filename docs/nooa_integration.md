# INTEGRACIÓN — NVIDIA OO-Agents (NOOA) en HSCSG v15 OS

**Metodología:** `hscsg-repo-assimilation` (Fase 2) + vasos comunicantes (`hscsg-unified-assimilation-science`).
**Fuente:** `docs/nooa_backup.md` · **Paper:** arXiv:2607.20709 · **Blog:** NVIDIA six-agent-harness.

---

## Triple Perspectiva

### 👤 Usuario (nodo HSCSG)
Quiere agentes soberanos que:
- Tengan **estado tipado propio** (no dependan de nube para existir) — Ley II MJ (pagan su existencia con base).
- Expongan **capacidades visibles** al LLM con control de visibilidad (`@hidden` para secretos).
- Usen **estrategias** (CodeAct para ejecución, Predict para extracción) de forma agnóstica al modelo.
- Tengan **contexto/eventos** y **self-extending** (aprenden bibliotecas de skills).
- Operen en **malla** (`agentMesh`) con canales reactivos y middleware de guardrails.

### 🤖 LLM (qué asimilar)
**CONSERVAR (lógica isomórfica a Leyes MJ + CaaS):**
- Modelo agente-orobjeto: clase `Agent` con campos tipados = estado soberano.
- Métodos deterministas = herramientas; métodos con `...` = generativos (docstring = prompt).
- Visibilidad explícita (`@hidden`, `Annotated[T, hidden]`) → maps a `lucidez` (Ley III: auditoría).
- Estrategias CodeAct/Predict → maps a `loopEngine` (loops de ejecución/reparación).
- Contexto/Eventos opt-in → maps a `agentMesh` (compartición de estado entre agentes).
- Self-extending (`self.libs`, `@slash_command`) → maps a `agentMesh.computePool`.
- Canales (`spawn`, `race`) + Middleware (`intercept`) → maps a `agentMesh.agents` + guardrails γ-CARMIS.

**EXTIRPAR (infra ajena — principio anfibio):**
- `unifiedllm` / `nemo_relay_middleware` (acoplado NVIDIA) → reemplazar por `LLMConfig` agnóstico HSCSG.
- `nooa-cli` / trace viewer :5001 → dev-tool, no va al OS offline.
- `nooa-bench` → benchmark externo, no módulo.
- Deps pesadas (uv.lock, 38MB) → no se copian; solo la lógica de agente.

### 🔗 HSCSG + CaaS (isomorfismo)
| NOOA | HSCSG equivalente | Ley MJ |
|---|---|---|
| `Agent` (clase, estado tipado) | `agentMesh.agents[]` (interfaz) | II: base material propia |
| Método determinista = tool | `loopEngine` helper / acción | I: no dañar |
| Método `...` = LLM (docstring prompt) | `runAlraicoTick` generación | III: lucidez |
| `@hidden` / `Annotated[T, hidden]` | `lucidez` / auditoría de secretos | III |
| `CodeActStrategy` / `PredictStrategy` | loops de ejecución vs extracción | γ-CARMIS |
| `self.context` / `self.events` | `agentMesh` shared state | CDS |
| `self.libs` / `@slash_command` | `agentMesh.computePool` | AUT |
| `spawn()` / `race()` / `intercept()` | `agentMesh.agents` + guardrails | II |

---

## Vasos Comunicantes (trazabilidad)

- `[EBD-D1]` ADSOA nativo → `docs/research_output/04_Documento_Diseno_Basado_Evidencia_EBD.md`
- `[DV-01]` validación estratégica → `docs/research_output/06_Memorandum_Validacion_Estrategica.md`
- `[repo:nooa]` → `docs/nooa_backup.md` + `docs/nooa_integration.md`
- `[alraico:loopEngine]` → `skills/hscsg-sistema-alraico` + `src/core/lib/loopEngine.ts`
- `[aut:LeyII]` → `skills/hscsg-coeficiente-autonomia`
- Código: `src/core/state/agentMesh.ts` + `src/core/state/nooa.ts` (nuevo módulo mínimo)

---

## Decisión de Asimilación
- **Alcance:** Documentada (backup + integration + módulo mínimo tipado). NO se volcan los 1302 archivos.
- **Módulo HSCSG:** `src/core/state/nooa.ts` + `src/core/lib/nooa.ts` — tipos del agente-orobjeto
  isomorfos a `agentMesh`, con `LLMConfig` agnóstico (offline RAO ↔ conectado Nostr/NEAR).
- **Pantalla:** extender `Agentes.tsx` para mostrar agentes NOOA (estado tipado, visibilidad, estrategia).
- **Principio anfibio:** el agente opera offline (RAO local) por defecto; se conecta solo si el nodo
  elige oráculo de modelo externo (Nivel 3 ReFi / Stripe USD extirpado, conservada lógica).
