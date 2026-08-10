# Integración automaton · alook · ponytail — Perspectiva Triple (Usuario · LLM · HSCSG)

**Fuentes:** 3 clones GitHub (agentes autónomos/orquestación/CLI). El usuario los propuso como "matchmaker, feedback, flujos" y sugirió ponytail como "potenciador".

## 0. Síntesis
Estos repos son la **capa de agentes autónomos** que HSCSG necesitaba para hacer vivo su pipeline anidado:
- **alook** = el **Matchmaker de roles/capacidades** (orquesta agentes = "compañía AI personal").
- **automaton** = el **agente soberano autofinanciado** (cierra el loop ITC: gana su existencia por contribución, isomorfo a AUT×CDS).
- **ponytail** = el **potenciador de ejecución** (una línea resuelve; hooks/MCP) → patrón de diseño para flujos de trabajo robustos.

## 1. Perspectiva del Usuario
Quiere un nodo que no dependa de él para cada decisión: agentes que se autofinancian, se replican, y resuelven con una línea. El matchmaker empareja necesidades↔capacidades sin que el usuario microgestione.

## 2. Perspectiva del LLM (asimilo / extirpo)
### Asimilo
| Repo | Vector HSCSG | Rol en pipeline anidado |
|------|--------------|--------------------------|
| alook | Colaberry + Orquestación (Paperclip) | Matchmaker de agentes/roles (capacidades↔necesidades) |
| automaton | Autómata Soberano + ZNU/CaaS | Agente que gana su existencia (self-funding → AUT×CDS) |
| ponytail | flujos de trabajo / hooks | Potenciador de ejecución (una línea, MCP) |

### Extirpo
- Infra de pago externa (automaton paga compute con dinero real) → en HSCSG es ZNU/CaaS (postmonetario).
- Monorepo pnpm/turbo de alook → solo la filosofía de orquestación.
- CLI de ponytail → patrón, no se instala en el bundle.
- Acceso de escritura al mundo real (automaton) → en HSCSG es soberanía local (sin EVM/externos).

## 3. Perspectiva HSCSG (extrapolación del loop)
El loop Integral CDS→OAD→COS→ITC→FRS se **potencia** con agentes:
```
CDS (delibera) ─▶ alook:Matchmaker(necesidad↔agente) ─▶ OAD (diseña)
                                                        │
                                          automaton:AgenteSoberano (self-funding)
                                                        │
COS (ejecuta vía ponytail:una-línea) ─▶ ITC (ZNU por AUT) ─▶ FRS (observa)
                                                        ▲
                              automaton sobrevive si regenera base material (Ley I)
```
- **Matchmaker (alook)**: empareja Issues/Bounties/Retos con agentes según AUT + credibility(Symbiosky) + expertise(Democracia).
- **Feedback (automaton)**: el agente "muere" si no regenera base material → presión evolutiva = FRS natural.
- **Flujos (ponytail)**: cada transición de pipeline es un "comando de una línea" con hooks de verificación (Ley III).

## 4. Correlaciones / Interrelaciones
| Módulo HSCSG | Agente/Repo | Correlación |
|---|---|---|
| Colaberry | alook | agente acompañante = rol en compañía AI |
| Orquestación | alook + ponytail | gates + ejecución una-línea |
| Autómata Soberano | automaton | supervivencia por base material |
| ZNU/CaaS | automaton | self-funding = AUT×CDS puro |
| Credibilidad | alook matchmaker | peso de confianza en el match |
| Oráculo | automaton/ponytail | hechos resueltos cierran el loop |

## 5. Conclusión
No se añaden pantallas (sería forzar el molde); se **extrapola el pipeline anidado** (`docs/pipeline_anidado.md`) usando estos 3 como primitivas de agentes. El "matchmaker" de HSCSG = alook; el "feedback" evolutivo = automaton; la "robustez de ejecución" = ponytail.
