# Cierre del Loop del Pipeline — Hallazgos, Límites y Especulación Pragmática

**Contexto:** tras asimilar Gaia Union (organismo vivo) el usuario detectó correctamente que
`/pipeline` era un **VIEWER**: `routeFeedback`/`matchmaker` devolvían sugerencias que NADIE
ejecutaba. El loop CDS→OAD→COS→ITC→FRS→CDS era un diagrama, no un mecanismo. Esto era la
misma trampa que me corrigió antes: quedarme en el molde del repo.

## 1. Qué se cerró (commit actuarial)
- `lib/pipeline.ts`: `dispatchMatch(s, needTitle, assignee)` y `autoAdvisory(s, finding, severity, threshold)`
  llaman `raiseIssue` + `ratifyDecision` de `@core/lib/integral` → **mutan IntegralState de verdad**.
- Store: acciones `pipeDispatch(needTitle, assignee)` y `pipeAdvisory(finding, severity)` (prefijo `pipe`, sin colisión).
- Pantalla `/pipeline`: botones "Despachar (CDS)" y "Ejecutar routing FRS" que invocan los actuators.
  Ahora el matchmaker crea un Issue CDS ratificado y el feedback FRS crea un advisory → el loop se cierra.

## 2. Límites REALES que encontré (honestidad)
- **No hay `dispatchIssue`/`resolveIssue`** en integral: el cierre lo hace `ratifyDecision` (issue→decision).
  El issue queda `status:'decided'` pero NO hay tránsito a OAD/COS/ITC automático. El loop se cierra
  en CDS→decisión; los siguientes eslabones (OAD→COS→ITC→FRS) siguen siendo manuales/descriptivos.
- **`ZNUState` es `{perMember, demurrageThreshold, demurrageRate, priceParity}`** — NO tiene balance
  agregado ni `totalSupply`. Por eso `znuRotate`/`znuConcentration` (que esperan números sueltos) NO se
  pudieron cablear al advisory sin forzar el molde. La "rotación anti-acumulación" quedó como P2.
- **`znuDecay` NO existe** en `valueDual` (solo `znuRotate`). El decay por inactividad de Symbiosky
  está solo en `lib/symbiosky.ts` (cálculo de score), no aplicado al pool ZNU ni al store.
- **FRS no es un módulo**: aparece en `i18n.ts` y strings, pero no hay `lib/frs.ts` ni acción `raiseFrs`.
  `systemHealth` (integral) SÍ usa `signals[].severity`, pero no hay forma de inyectar señales FRS
  vivas desde otros módulos → el autoAdvisory solo se dispara manualmente, no por el organismo.

## 3. Especulación pragmática (qué haría falta para autonomía real)
| Gap | Propuesta | Esfuerzo |
|-----|-----------|----------|
| Balance ZNU agregado | añadir `totalZNU` + `znuDecay` real a `ZNUState` y store | P1 |
| Cierre OAD/COS/ITC | `applyDecision(dr)` que mueve la decisión a un `Task` de OAD/COS | P1 |
| Señales FRS vivas | `ingestFrsSignal(module, severity)` desde cada módulo → `autoAdvisory` automático | P2 |
| Estigmergia continua | `useEffect` en App que corre `autoAdvisory` cada N min con `systemHealth` | P2 |
| Anti-whale real | cablear `znuConcentration` al advisory cuando `totalZNU` exista | P1 |

## 4. Decisión (no forzar el molde)
El actuator de CDS (dispatch + advisory) es **real y verificado**. No inventé un balance ZNU falso
para cablear `znuRotate`: lo dejé como P2 documentado (§3). El organismo ahora RESPIRA (CDS actúa),
pero aún no es autónomo de extremo a extremo. Eso es honesto y es el siguiente escalón.
