---
name: policy-cel-gateway
description: Motor de policy gateway fail-closed inspirado en OpenBot (CopilotKit) — CEL expressions + deny>allow + dry-run + repeat detector anti-loop. Usar para gobernar acciones de agente/herramientas con auditable-before-act, en HSCSG u otro sistema donde se quiera decidir y registrar antes de ejecutar.
---

# Policy Gateway (CEL-like, fail-closed)

Extraído de `server/src/computer/policy.ts` + `gateway.ts` de CopilotKit/openbot.

## Reglas de oro
- **Deny > allow.** Una regla que quita permiso NUNCA debe ser vencida por una allow más amplia.
- **Política ausente = denegar.** El silencio se lee como "nada", no como "todo".
- **Regla rota = denegar (fail-closed).** Un `allow` roto no permite; un `deny` roto sí deniega. Ambos se loguean ruidosamente.
- **dry-run:** decide y registra pero deja pasar, para probar contra tráfico real antes de enforce. "Una gobernanza que nadie se atreve a activar no es gobernanza."
- **Audit ANTES de actuar**, no después. Filas: decisión (allowed/refused) + fallo aparte si `run()` lanza.

## Contexto inspeccionable (campos de regla)
`tool.name`, `intent` (activate/type/navigate/read/read_file/write_file/list_files/read_tool/write_tool), `bot.id`, `actor.id`, `page.url/host`, `element.ref/role/name/type`, `key`, `file.path/name/extension`, `mcp.server/tool/effect`, `repeat.count`.

## Intent vs mecanismo
Un operador piensa en EFECTO ("nada de submit"), no en mecanismo. Un botón se activa por click O Enter O Space. Una regla `computer_click` solo cubre una puerta. Por eso OpenBot usa `intent == "activate"` y además bloquea `computer_key && key == "Enter"`. Regla preset: bloquear ambas rutas de submit.

## Repeat detector (anti-loop)
- `repeat.count` se cuenta ANTES de preguntar la policy, para que la regla decida el intento que cruzó la línea (no el siguiente).
- Ventana deslizante (default 3 min). Umbrales 3/10/25. Regla `repeat.count >= 10` frena al Bot en círculos.
- Limitaciones honestas: la cuenta la tiene el proceso que sirvió el llamado (réplicas la dividen); llamadas MCP a otro server no cuentan; variar un argumento cada vuelta esquiva el conteo. Por eso probar en dry-run primero.

## Implementación HSCSG (`src/core/lib/boundaries.ts`)
- Subset CEL-like seguro en TS puro (sin cel-js): átomos `<campo> <op> <valor>` con `== != > < >= <= contains matches`, unidos por `&&`/`||`. Helpers case-insensitive.
- `evaluateBoundary(policy, ctx)` → `deny` primero (onError=true) → `allow` (onError=false) → default deny.
- `governAction(policy, ctx, audit, run)` escribe fila antes de `run()` y fila de fallo si lanza.
- Default: `mode:'enforce', deny:[], allow:['intent == "read"']`.

## Cuándo usar
- Gobernar acciones de agente/UI/herramientas con decisión+auditoría previas.
- Diseñar reglas de denegación expresivas (frase > tabla de columnas).
- Explicar fail-closed y por qué "default-allow" es inseguro.
