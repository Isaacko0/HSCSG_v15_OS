# Pipeline Anidado Robusto — Reiteración/Extrapolación del Loop Integral (CDS·OAD·COS·ITC·FRS)

**Propósito:** convertir el loop lineal CDS→OAD→COS→ITC→FRS en un **pipeline anidado y robusto** con:
- **Matchmaker** (emparejamiento automático de necesidades↔capacidades).
- **Feedback loops** (FRS no solo observa, retroalimenta cada subsistema).
- **Flujos de trabajo** (workflows orquestados, no manuales).
- **Interrelaciones / correlaciones** (cada módulo HSCSG correlacionado al órgano del cuerpo cibernético).
- **Robustez** (falla un órgano → el loop degrade graceful, no colapsa).

Basado en las asimilaciones: Integral (loop), Conway Automaton (supervivencia/base material), Symbiosky (credibilidad/schelling), Gaia (círculos/bounty), iambrainstorming (democracia/aprendizaje), Kleros (oráculo/jurados).

---

## 1. Arquitectura de Pipeline Anidado (3 capas)

```
CAPA 0 — PERCEPCIÓN (FRS / nervous system)
  ├─ ingestSignal(fromSystem, severity, finding)  → SignalPacket[]
  ├─ diagnose()                                   → SystemHealth 0-100
  └─ recommend()  ──▶ (advisory) ──┐
                                    │ promoteRecommendationToIssue()
CAPA 1 — DECISIÓN (CDS + Matchmaker)
  ├─ raiseIssue / deliberate / ratifyDecision (append-only DR)
  ├─ MATCHMAKER: matchNeedsToCapabilities(issue, participants[])
  │     → empareja necesidad (Issue) con capacidad (AUT de participante)
  │     → usa credibility (Symbiosky) como peso de confianza del match
  └─ dispatch → OAD
CAPA 2 — EJECUCIÓN (OAD → COS → ITC)
  ├─ certifyDesign (ecoScore, versión)
  ├─ promoteToCOS → Tekitl (proyecto/roles)
  ├─ logLabor (COS) → awardCredits (ITC, decay)
  └─ extinguishOnAccess (ITC no acumulable)
```

**Anidamiento:** cada capa es un pipeline que puede anidarse (un Issue de CDS puede generar sub-Issues; un proyecto de COS puede tener sub-tareas con su propio mini-loop FRS).

---

## 2. Matchmaker (nuevo componente, de Conway/alook/ponytail)

El matchmaker empareja **necesidades** (Issues/CDS, Bounties/Gaia, Retos/Aprender) con **capacidades** (AUT de participante, expertise de Democracia, credibility de Symbiosky).

```
matchNeedsToCapabilities(need, participants) → Assignment[]
  peso(participant) = w1*AUT + w2*credibilitySymbiosky + w3*expertiseDemocracia + w4*schemesLearned
  ⇒ asignación óptima por consenso (no por quien paga, sino por quién aporta)
```

- **Conway Automaton** aporta: supervivencia del nodo si la base material se regenera → el matchmaker prioriza issues que protegen Ley I.
- **alook** (si es un "look"/mirror de estado) aporta: vista unificada de capacidades disponibles.
- **ponytail** (potenciador sugerido) → se evalúa al clonar.

---

## 3. Feedback (FRS robusto, multi-canal)

FRS no es solo "observa". Sus señales retroalimentan CADA subsistema:
- `signal → CDS`: necesidad no cubierta → raiseIssue automático (advisory).
- `signal → OAD`: diseño con ecoScore bajo → re-certificar.
- `signal → COS`: labor sobre-dimensionada → re-balancear.
- `signal → ITC`: concentración de créditos (znuConcentration) → decay/redistribuir.
- `signal → FRS`: meta-señal (el propio FRS saturando) → throttle.

**Correlaciones:** cada módulo HSCSG se correlaciona a un órgano:
| Módulo HSCSG | Órgano Integral | Señal FRS |
|---|---|---|
| Priorizar | CDS | beneficio/riesgo |
| Solarpunk/Tekitl | OAD/COS | diseño/ecoScore |
| ZNU/CaaS | ITC | concentración |
| Lucidez/Verificación | FRS | manipulación |
| Democracia | CDS (expertise) | delegación |
| Credibilidad | peso Matchmaker | conviction score |
| Oráculo | FRS (hecho) | disputa resuelta |
| Círculos/Bounty | COS (labor) | bounty completado |

---

## 4. Flujos de trabajo (workflows orquestados)

1. **Flujo Necesidad→Acción**: Issue(CDS) → Matchmaker → OAD(diseño) → COS(labor) → ITC(crédito) → FRS(score) → loop.
2. **Flujo Bounty** (Gaia): Bounty → matchmaker → participante con AUT → labor → reward ZNU → credibility+.
3. **Flujo Reto** (Aprender): Reto → aprendiz → completeChallenge → thriving ZNU → sube peso en matchmaker.
4. **Flujo Disputa** (Oráculo): señal FRS de conflicto → Oráculo(Realitio) → decisión → DR append-only.

Cada flujo es un **pipeline anidado** que puede disparar sub-flujos.

---

## 5. Robustez (graceful degradation)

- Si FRS cae: loop sigue con último SystemHealth conocido (timeout).
- Si matchmaker no encuentra capacidad: escala a Círculo Gaia (Wisdom Council).
- Si ITC se concentra: znuRotate redistribuye (anti-acumulación).
- Append-only en CDS: ninguna decisión se pierde; solo superseded.

---

## 7. Agentes autónomos (automaton · alook · ponytail) — primitivas del pipeline

Tras clonar los 3 repos sugeridos, se confirma el mapeo:
- **alook** = **Matchmaker** (orquestación de agentes/roles = "compañía AI personal").
- **automaton** = **Agente Soberano autofinanciado** (self-funding → cierra ITC por AUT×CDS; "muere" si no regenera base material = FRS evolutivo).
- **ponytail** = **Potenciador de ejecución** (una línea + hooks/MCP = flujos robustos).

Estos NO son pantallas nuevas (sería forzar el molde); son la **capa de agentes** que hace vivo el pipeline. Ver `docs/automaton_alook_ponytail_integration.md`.

## 8. Pipeline anidado final (con agentes)

```
CAPA 0  FRS (nervous system)  ── observa todo, emite señales advisory
   │                                      │
CAPA 1  CDS + alook:Matchmaker  ── empareja necesidad↔agente (peso: AUT+credibility+expertise)
   │                                      │
CAPA 2  OAD → COS(automaton:AgenteSoberano, ejecuta vía ponytail) → ITC(ZNU)
   │                                      │
   └────────────────── loop ──────────────┘
```

Cada transición es un pipeline anidado con hooks de verificación (Ley III) y degradación graceful (si un agente cae, escala a Círculo Gaia).

