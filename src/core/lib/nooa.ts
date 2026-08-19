// HSCSG v15 OS — nooa (lib): lógica pura del agente-orobjeto (asimilado de NVIDIA OO-Agents)
// No importa infra NOOA original. Conserva el MODELO: estado tipado, visibilidad, estrategias,
// contexto/eventos, self-extending — isomorfo a agentMesh + Leyes MJ.
import type { NooaState, NooaAgent, Strategy } from '@core/state/nooa'

/** Cuenta métodos visibles al LLM (Ley III: solo lo visible se audita) */
export function visibleMethods(a: NooaAgent): number {
  return a.methods.filter((m) => m.visibility === 'visible').length
}

/** Detecta agente "ciego" (sin contexto ni eventos visibles) → sobrecarga lucidez */
export function detectBlindAgents(st: NooaState): string[] {
  return st.agents
    .filter((a) => !a.contextVisible && !a.eventsVisible && visibleMethods(a) > 0)
    .map((a) => a.id)
}

/** Selecciona estrategia por tipo de retorno (Predict para extracción, CodeAct default) */
export function selectStrategy(m: { returns: string; kind: 'tool' | 'generative' }, def: Strategy): Strategy {
  if (m.kind === 'tool') return 'codeact' // herramienta ejecuta código
  // generativo: si retorna modelo estructurado y no ejecuta → predict
  return def
}

/**
 * γ-CARMIS para agentes: si un agente es "ciego" (sin lucidez), se reconfigura
 * exponiendo contexto/eventos (opt-in) — análogo a simulateReconfig en loopEngine.
 */
export function reconfigBlindAgents(st: NooaState): NooaState {
  const blind = detectBlindAgents(st)
  if (blind.length === 0) return st
  return {
    ...st,
    agents: st.agents.map((a) =>
      blind.includes(a.id) ? { ...a, contextVisible: true, eventsVisible: true } : a,
    ),
  }
}

/** Autonomía agregada de la malla (Ley II MJ: base propia vs nube) */
export function meshAutonomy(st: NooaState): number {
  if (st.agents.length === 0) return 0
  return st.agents.reduce((s, a) => s + a.autonomy, 0) / st.agents.length
}
