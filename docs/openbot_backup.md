# OpenBot (CopilotKit) — Backup de arquitectura

**Fuente:** https://github.com/CopilotKit/openbot · clonado en `Documents/openbot` (depth 1, main @93ff1b1, 12 commits, alpha).
**Fecha asimilación:** 2026-08-19 · **License:** MIT · **Stack:** Bun monorepo + Docker + Postgres(pgvector) + Hono + React/Vite + AG-UI.

---

## Qué es
Plataforma de **AI coworkers** que corren en tu propia infra. Cada Bot recibe "una computadora propia" (un contenedor con Chromium, logins y `/workspace` aislados), y **toda acción pasa por un gateway que la decide y audita ANTES de ejecutar**. Soporta handover humano (tomar el control del browser). Es agnóstico al framework del agente vía **AG-UI** (protocolo abierto agent→user).

## Componentes (monorepo)
| Servicio | Puerto | Rol |
|---|---|---|
| `app` (React/Vite) | 3010 | UI: channels, chat de Bot, live screen, `/admin/*` |
| `server` (Hono) | 3001 | API, auth, roles, coworkers, channels, **policy, audit, credentials, components, connectors** |
| `agent-computer` | 4100 | Chromium + `/workspace` + perfil + screenshots + file tools (un container por Bot) |
| `agent-bot` | 4200 | Bot AG-UI proof-of-concept (OpenAI) |
| `agent-langgraph` | 4201 | Bot AG-UI LangGraph (OpenAI/Anthropic/Google) |
| `supervisor` | 4500/4300 | Crea/detiene/resetea containers por Bot (tiene el Docker socket) |
| PostgreSQL+pgvector | 5432 | producto, audit rows, creds, policy, grants, channels, components |
| CopilotKit Intelligence | externo | threads duraderos, memoria, realtime gateway |

## Gateway de acciones (el núcleo, `server/src/computer/gateway.ts`)
Toda acción de browser/file/MCP va por UNA puerta. Orden:
1. **Resolve ref**: el server resuelve el `ref` contra el snapshot QUE EL SERVER FETCHÓ (nunca el label que manda el modelo). Evita evasiones tipo "no clicar Submit" renombrando el botón.
2. **Pregunta la policy**: deny > allow; policy ausente = denegar; regla rota = denegar (fail-closed).
3. **Escribe la fila de audit ANTES de actuar** (allowed o refused). Una acción no registrada no ocurrió.
4. Solo entonces ejecuta; si falla, escribe fila de fallo aparte.

## Policy engine (`server/src/computer/policy.ts`)
- **CEL expressions** (`cel-js`) + helpers `contains()`/`matches()` case-insensitive.
- `ActionPolicy = { mode: "dry-run"|"enforce", deny: string[], allow: string[] }`.
- **Deny > allow**. `mode: dry-run` decide y registra pero deja pasar (para probar contra tráfico real antes de enforce).
- **Fail-closed**: policy ausente deniega; allow roto no permite; deny roto sí deniega.
- Contexto inspeccionable: `tool.name`, `intent` (activate/type/navigate/read/read_file/write_file/list_files/read_tool/write_tool), `bot.id`, `actor.id`, `page.url/host`, `element.ref/role/name/type`, `key`, `file.path/name/extension`, `mcp.server/tool/effect`, `repeat.count`.
- `repeat.count`: detector de bucles (ventana `COMPUTER_REPEAT_WINDOW_MS`, default 3 min); umbrales 3/10/25; regla `repeat.count >= 10` frena al Bot en círculos.
- Default de arranque: `deny: []`, `allow: ["true"]` (o `AGENT_COMPUTER_POLICY` del admin). Policy malformada detiene el server.

## Coworkers (`docs/coworkers.md`)
- Bot = endpoint AG-UI + perfil durable (nombre, título, rol, owner, visibilidad, soft-delete).
- `agents` (runtime+key), `agent_profiles`, `agent_preferences` (roster por usuario), `channels`, `intelligence_channel_mappings`.
- **Standing role**: system message derivado de título+rol, enviado en cada run. Visibilidad `private`/`public`.
- Channels: cada uno crea thread nuevo; proxy channel-local → runtime id.
- 3 coworkers de ejemplo (config, no código): General Assistant, Knowledge, Risk Analyst. Se añaden editando `agents.yaml` o desde `/agents`.

## Human control & secrets
- Handovers auditados: `computer.help_requested`, `computer.control_taken`, `computer.control_released`. Mientras humano conduce, acciones del Bot se rechazan (no se encolan).
- Secrets: el audit registra que se pidió/suplyó y el char count, NUNCA el valor.

## Computers / aislamiento
- `COMPUTER_SUPERVISOR_URL` → un container por Bot (workspace volume + browser profile aislados). Sin él, todos comparten `AGENT_COMPUTER_URL`.
- `COMPUTER_RUNTIME=runsc` → gVisor (sandbox kernel). Supervisor expone solo ensure/stop/reset/list y tiene el Docker socket (no exponer fuera de la red de deploy).

## Diferencias clave vs HSCSG v15 OS
- OpenBot requiere **Docker + Postgres + CopilotKit Intelligence (cloud opcional)** → no es 100% offline-soberano como HSCSG (que es SPA local sin backend).
- Usa **AG-UI** (protocolo estándar) vs Vasos comunicantes (propio de HSCSG).
- Tiene **computer-use real aislado por contenedor** (Chromium por Bot) que HSCSG no tiene.
- Tiene **policy gateway CEL fail-closed + audit** centralizado; HSCSG tiene guardas (gate MJ, Leyes MJ, loopEngine) pero dispersas.

## Valor para HSCSG (ver integration.md)
El patrón de **gateway que decide+audita antes de actuar, fail-closed, con resolve-from-server-snapshot y repeat detector** es exactamente la capa de gobernanza de acciones de agente que HSCSG tiene dispersa. OpenBot es la referencia de implementación más limpia y bien documentada de ese patrón.
