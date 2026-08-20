# Integración: OpenBot (CopilotKit) → HSCSG v15 OS

**Backup:** `docs/openbot_backup.md` · **Fuente viva:** https://github.com/CopilotKit/openbot · **Clon:** `Documents/openbot`.
**Fecha:** 2026-08-19 · asimilación ampliada (no limitada a objetivos actuales de HSCSG).

---

## Isomorfismo directo
| OpenBot | HSCSG v15 OS |
|---|---|
| AG-UI (protocolo agent→user) | Vasos comunicantes / agent mesh (RAO) |
| Gateway de acciones (decide+audita, fail-closed, CEL) | Gate humano MJ + guardas loopEngine + Leyes MJ (I/II/III) |
| Computer-per-Bot aislado (container + gVisor) | Nodos aislados / soberanía offline del nodo local |
| Coworkers + standing role + channels + threads | Agentes + células + memoria del store local |
| Audit rows + boundaries (deny/allow) | Lucidez (Ley III: transparencia radical) + provenance |
| Human handover (control_taken/released) | Delegación humana / α-ρutina |
| `/skills` personales | Skills de Hermes (anfibias) |
| `OPENBOT_DEV_NO_AUTH` (un admin local) | Nodo local single-user (Isaacko0) |
| Repeat detector (anti-loop) | γ-CARMIS (detector de sobrecarga en loopEngine) |
| Policy CEL `intent` (activate/type/navigate) | Intenciones en loopEngine (efecto > mecanismo) |

## Qué HSCSG DEBE tomar de OpenBot (brechas reales)
1. **Policy gateway central fail-closed** — HSCSG tiene guardas sueltas (gate MJ, Leyes MJ) pero NO un gateway único donde toda acción de agente pasa, se evalúa contra policy CEL y se audita antes. → Implementar módulo `Boundaries` (T2).
2. **Resolve-from-server-snapshot** — OpenBot no decide sobre el label que manda el modelo, sino sobre el elemento que el server resolvió. HSCSG debe aplicar lo mismo en cualquier acción de UI/agente: decidir sobre el estado resuelto, no sobre la petición del agente.
3. **Repeat detector anti-loop** — HSCSG tiene γ-CARMIS para sobrecarga de loops de reparación, pero no un backstop de "el agente repite la misma acción N veces". → Añadir al `Boundaries`.
4. **Audit antes de actuar** (no después) — "una acción no registrada no ocurrió". HSCSG debe garantizar que el log de lucidez se escribe antes de ejecutar, no como reporte paralelo.
5. **Dry-run de policy** — poder escribir reglas contra tráfico real y leer el audit antes de enforce. Útil para el modo Lucidez.
6. **Computer-per-agent aislado** — HSCSG no tiene navegador por agente; para casos de computer-use (ej. el rescate de sitios) se podría aislar por contenedor/sandbox. Ambicioso (T3).

## Qué HSCSG NO debe copiar (principio anfibio / soberanía)
- **Dependencia de Docker+Postgres+CopilotKit cloud**: HSCSG es SPA offline-first. El gateway de `Boundaries` debe correr en el cliente (store local), no requerir Postgres ni servicio externo.
- **AG-UI como estándar**: HSCSG ya tiene Vasos comunicantes; no cambiar el protocolo, sino tomar el *patrón de gobernanza* (gateway+policy+audit), no el transporte.
- **Multitenant/roles enterprise**: HSCSG es nodo single-user; el gateway se simplifica a un admin local (como `OPENBOT_DEV_NO_AUTH`).

## Aplicación concreta en este repo (T2, T3, T4, T5)
- **T2**: módulo `Boundaries` en HSCSG — store de policy `{mode, deny[], allow[]}`, evaluator CEL-like (o subset seguro), fail-closed, audit previo, repeat detector. UI `/boundaries` para editar reglas + ver audit.
- **T3**: módulo `Coworkers` — agentes con perfil durable + standing role + canal; handover humano (tomar control). Inspirado en OpenBot pero en store local.
- **T4**: skills Hermes anfibias extraídas de OpenBot (computer-use gobernado, AG-UI, policy CEL).
- **T5**: wirear Boundaries + Coworkers en `App.tsx` + Aside, añadir fuente 50 al índice `/fuentes`, update BRIEF.

## Lecciones de implementación (del código real)
- El `govern()` escribe la fila de decisión ANTES de `run()`, y una fila de fallo aparte si `run()` lanza. El audit es el camino, no un reporte al lado.
- `deny` se evalúa primero; una regla `deny` rota (throw) trata como `true` (sigue denegando) → fail-closed ruidoso.
- `repeat.count` se cuenta ANTES de preguntar la policy, para que la regla decida el intento que cruzó la línea (no el siguiente).
- `intent` separa efecto (activate) de mecanismo (click/Enter/Space) → una regla "nada de submit" debe bloquear click Y Enter, no solo click.
