---
name: openbot-governed-computer-use
description: Patrón de computer-use gobernado extraído de CopilotKit/openbot — cada agente recibe su propia computadora aislada (browser+archivos+logins por contenedor) y TODA acción pasa por un gateway que decide y audita ANTES de ejecutar. Usar cuando el usuario quiera dar a un agente IA acceso real a navegador/herramientas sin ceder control ciego, o para diseñar aislamiento por-agente en HSCSG.
---

# OpenBot — Computer-use gobernado (patrón extraído)

Fuente: https://github.com/CopilotKit/openbot (MIT, alpha). Asimilado a HSCSG 2026-08-19.

## Principio central (del `gateway.ts` real)
> "Una acción que no fue registrada no ocurrió, porque no hay camino que actúe sin escribir la fila primero."

El gateway es el ÚNICO camino por el que una acción llega a la computadora del Bot. Tres pasos en orden:
1. **Resolve ref**: el server resuelve el `ref` contra el snapshot QUE EL SERVER FETCHÓ, nunca el label que manda el modelo. Evita evasiones ("no clicar Submit" renombrando el botón a "Continue").
2. **Pregunta la policy**: deny > allow; política ausente = denegar; regla rota = denegar (fail-closed).
3. **Escribe la fila de audit ANTES de actuar** (allowed o refused). Si falla, escribe fila de fallo aparte.

## Computadoras aisladas
- `COMPUTER_SUPERVISOR_URL` → un container por Bot (workspace volume + browser profile propios). Sin él, todos comparten un browser.
- `COMPUTER_RUNTIME=runsc` → gVisor (sandbox kernel). El supervisor tiene el Docker socket: no exponerlo fuera de la red de deploy.
- Handovers: `computer.help_requested` / `control_taken` / `control_released` se auditan; mientras humano conduce, acciones del Bot se rechazan (no se encolan).

## Secretos
- El audit registra que se pidió/suplyó y el char count, NUNCA el valor. "El valor va por un camino distinto: del teclado de una persona a la página".

## Aplicación en HSCSG (anfibio)
- HSCSG es SPA offline-first: NO requiere Docker/Postgres. El aislamiento "computer-per-agent" se modela en el store local (ver módulo `Coworkers`): cada agente = perfil durable + canal + control humano.
- El gateway de acciones se implementa en `src/core/lib/boundaries.ts` (policy CEL-like, fail-closed, audit previo, repeat detector) expuesto en la pantalla `/boundaries`.
- No copiar AG-UI ni CopilotKit Intelligence; tomar el PATRÓN de gobernanza, no el transporte.

## Cuándo usar esta skill
- Diseñar acceso de agente a browser/herramientas con gobernanza.
- Implementar aislamiento por-agente.
- Explicar por qué "auditar después" es insuficiente (el audit debe ser el camino, no un reporte al lado).
