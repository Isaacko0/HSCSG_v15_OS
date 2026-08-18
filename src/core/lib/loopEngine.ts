// HSCSG v15 OS — loopEngine: Orquestador nativo del Sistema Alráico (compatible con estado real)
// Kernel de orquestación: ejecuta loops, detecta resonancia, dispara γ-CARMIS, spawnea skills/agentes.
// Anfibio: offline (RAO local) ↔ conectado (Nostr/NEAR).
import type { AppState } from '@core/state/store'
import { proveFailure as porProve } from '@core/lib/proofOfResponse'

export interface LoopResult {
  loop: string
  executed: boolean
  delta: Partial<AppState>
  resonance?: { c1: string; c2: string; alphaH: number }
}

export interface LoopEngineConfig {
  tickIntervalMs: number
  maxTicks: number
  resonanceThreshold: number
  enableAgentSpawn: boolean
  enableSkillExecution: boolean
}

export const DEFAULT_LOOP_CONFIG: LoopEngineConfig = {
  tickIntervalMs: 1000,
  maxTicks: 1000,
  resonanceThreshold: 0.8,
  enableAgentSpawn: true,
  enableSkillExecution: true,
}

/** Detecta sobrecargas ΣPᵢ > κ en cada 𝕮 (módulo) - heurística compatible con tipos reales */
export function detectOverloads(st: AppState): Array<{ module: string; kappa: number; alphaH: number }> {
  const overloads: Array<{ module: string; kappa: number; alphaH: number }> = []

  // Lucidez: debe estar encendida (transparencia Ley III)
  if (!st.lucidez) overloads.push({ module: 'lucidez', kappa: 0.3, alphaH: 0.1 })

  // Symbiosky: propuestas sin resultados
  const pendingSymbio = st.symbiosky.proposals.filter((p) => !st.symbiosky.results[p.id])
  if (pendingSymbio.length > 5) overloads.push({ module: 'symbiosky', kappa: 5, alphaH: pendingSymbio.length })

  // AgentMesh: agentes con reputación 0 (inactivos)
  const idleAgents = st.agentMesh.agents.filter((a) => a.reputation === 0)
  if (idleAgents.length > 3) overloads.push({ module: 'agentMesh', kappa: 3, alphaH: idleAgents.length })

  // ProofOfResponse: requests expirados sin respuesta
  const now = Date.now()
  const expiredPor = st.proofOfResponse.requests.filter(
    (r) => !st.proofOfResponse.responses.some((x) => x.requestId === r.id) && now > r.deadlineB,
  )
  if (expiredPor.length > 0) overloads.push({ module: 'proofOfResponse', kappa: 0, alphaH: -expiredPor.length })

  // Regen: ecotecs sin sistemas bioclimáticos asociados
  if (st.regen.ecotech.length > st.regen.systems.length * 2) {
    overloads.push({ module: 'regen', kappa: st.regen.systems.length, alphaH: st.regen.ecotech.length })
  }

  return overloads
}

/** Simula reconfiguración γ-CARMIS para sobrecargas detectadas */
export function simulateReconfig(overloads: ReturnType<typeof detectOverloads>, st: AppState): Partial<AppState> {
  const delta: Partial<AppState> = {}
  for (const o of overloads) {
    switch (o.module) {
      case 'lucidez':
        delta.lucidez = true
        break
      case 'symbiosky': {
        const pending = st.symbiosky.proposals.filter((p) => !st.symbiosky.results[p.id])
        if (pending.length > 0) {
          const newResults = { ...st.symbiosky.results }
          for (const p of pending) newResults[p.id] = { meanScore: 0, reward: 0, funded: false }
          delta.symbiosky = { ...st.symbiosky, results: newResults }
        }
        break
      }
      case 'agentMesh':
        delta.agentMesh = {
          ...st.agentMesh,
          agents: st.agentMesh.agents.map((a) => (a.reputation === 0 ? { ...a, reputation: -1 } : a)),
        }
        break
      case 'proofOfResponse': {
        const now = Date.now()
        let porSt = st.proofOfResponse
        for (const r of st.proofOfResponse.requests.filter(
          (r) => !st.proofOfResponse.responses.some((x) => x.requestId === r.id) && now > r.deadlineB,
        )) {
          porSt = porProve(porSt, r.id, 'timeout auto γ-CARMIS')
        }
        delta.proofOfResponse = porSt
        break
      }
      case 'regen': {
        const needed = st.regen.ecotech.length - st.regen.systems.length * 2
        if (needed > 0) {
          delta.regen = {
            ...st.regen,
            systems: [
              ...st.regen.systems,
              { id: `sys_${Date.now()}`, name: 'Sistema generado', savingPct: 50, description: 'Generado por γ-CARMIS' },
            ],
          }
        }
        break
      }
    }
  }
  return delta
}

/** Detecta resonancia entre 𝕮ᵢ y 𝕮ⱼ: αʰ_oda > αʰ₁ + αʰ₂ (factor 3.0) */
export function detectResonances(st: AppState): Array<{ c1: string; c2: string; alphaH: number }> {
  const resonances: Array<{ c1: string; c2: string; alphaH: number }> = []

  const metrics: Record<string, number> = {
    base: 0.5,
    lucidez: st.lucidez ? 0.8 : 0.2,
    caas: st.caasMembers.length > 0 ? 0.7 : 0.3,
    symbiosky: st.symbiosky.proposals.length > 0 ? 0.6 : 0.2,
    delegation: 0.5,
    education: st.education.courses.length > 0 ? 0.6 : 0.2,
    sovereignCredit: 0.5,
    regen: st.regen.systems.length > 0 ? 0.7 : 0.3,
    vecinal: st.vecinal.propuestas.length > 0 ? 0.6 : 0.3,
    nostrRelay: st.nostrRelay.connected ? 0.8 : 0.3,
    agentMesh: st.agentMesh.agents.length > 0 ? 0.7 : 0.3,
    proofOfResponse: st.proofOfResponse.responses.length > 0 ? 0.7 : 0.3,
  }

  const modules = Object.entries(metrics)
  for (let i = 0; i < modules.length; i++) {
    for (let j = i + 1; j < modules.length; j++) {
      const [id1, a1] = modules[i]
      const [id2, a2] = modules[j]
      const combined = a1 * a2 * 3.0
      if (combined > a1 + a2) resonances.push({ c1: id1, c2: id2, alphaH: combined })
    }
  }
  return resonances.sort((a, b) => b.alphaH - a.alphaH)
}

/** Acopla resonancias detectadas (placeholder RAO — store no tiene RAO hoy) */
export function coupleResonances(_st: AppState, _resonances: ReturnType<typeof detectResonances>): Partial<AppState> {
  return {}
}

/** Loop: CDS / Lucidez recovery */
function cdsDecayLoop(st: AppState): Partial<AppState> {
  if (!st.lucidez) return { lucidez: true }
  return {}
}

/** Loop: Merit Mint - cierra propuestas Symbiosky elegibles */
function meritMintLoop(st: AppState): Partial<AppState> {
  const approvable = st.symbiosky.proposals.filter((p) => {
    if (st.symbiosky.results[p.id]) return false
    return Object.keys(p.votes).length > 0 && Object.values(p.votes).some((v) => v.conviction > 0)
  })
  if (approvable.length > 0) {
    const newResults = { ...st.symbiosky.results }
    for (const p of approvable) {
      let sw = 0
      let lw = 0
      for (const v of Object.values(p.votes)) {
        sw += v.score * v.conviction
        lw += v.conviction
      }
      const meanScore = lw > 0 ? sw / lw : 0
      newResults[p.id] = { meanScore, reward: Math.min(1000, Math.round(meanScore * 100)), funded: meanScore >= 5 }
    }
    return { symbiosky: { ...st.symbiosky, results: newResults } }
  }
  return {}
}

/** Loop: Agent Compute + Proof of Response */
function agentComputeLoop(st: AppState): Partial<AppState> {
  const delta: Partial<AppState> = {}

  for (const agent of st.agentMesh.agents) {
    if (agent.reputation > 0 && !st.proofOfResponse.requests.some((p) => p.payload.includes(agent.id))) {
      delta.proofOfResponse = {
        ...st.proofOfResponse,
        requests: [
          ...st.proofOfResponse.requests,
          {
            id: `por_${agent.id}`,
            from: 'system',
            to: agent.id,
            payload: 'compute',
            createdAt: Date.now(),
            deadlineB: Date.now() + 10000,
            sig: 'auto',
          },
        ],
      }
    }
  }

  const now = Date.now()
  const expired = st.proofOfResponse.requests.filter(
    (r) => now > r.deadlineB && !st.proofOfResponse.responses.some((x) => x.requestId === r.id),
  )
  if (expired.length > 0) {
    let porSt = st.proofOfResponse
    for (const r of expired) porSt = porProve(porSt, r.id, 'timeout agentComputeLoop')
    delta.proofOfResponse = porSt
  }
  return delta
}

/** Loop: Regen MRV - solicita verificación para ecotecs sin sistema */
function regenMrvLoop(st: AppState): Partial<AppState> {
  if (st.regen.ecotech.length > st.regen.systems.length) {
    let porSt = st.proofOfResponse
    for (const t of st.regen.ecotech.slice(0, st.regen.systems.length)) {
      porSt = {
        ...porSt,
        requests: [
          ...porSt.requests,
          {
            id: `mrv_${t.id}`,
            from: 'regen',
            to: 'oracle',
            payload: t.id,
            createdAt: Date.now(),
            deadlineB: Date.now() + 86400000,
            sig: 'auto',
          },
        ],
      }
    }
    return { proofOfResponse: porSt }
  }
  return {}
}

/** Loop: Nostr Audit (placeholder — sin auditTrail para evitar acoplamiento de firma) */
function nostrAuditLoop(st: AppState): Partial<AppState> {
  if (st.nostrRelay.connected && st.nostrRelay.events.length > 0) {
    // placeholder: en implementación completa registraría en RAO
    return {}
  }
  return {}
}

/** Loop: Vecinal Accountability (placeholder) */
function vecinalAccountabilityLoop(st: AppState): Partial<AppState> {
  const failed = st.vecinal.propuestas.filter(
    (p) =>
      p.phase === 'closed' &&
      p.votes &&
      Object.values(p.votes).filter((v) => v === 'no').length > Object.values(p.votes).filter((v) => v === 'si').length &&
      p.barrioId,
  )
  if (failed.length > 0) return { delegation: { ...st.delegation } }
  return {}
}

/** EJECUTA UN TICK COMPLETO DEL MOTOR ALRÁICO */
export function runAlraicoTick(
  st: AppState,
  _config: LoopEngineConfig = DEFAULT_LOOP_CONFIG,
): { state: AppState; results: LoopResult[] } {
  let current = st
  const results: LoopResult[] = []

  // 1. γ-CARMIS: detectar sobrecargas en el estado de entrada (antes de reparar)
  const initialOverloads = detectOverloads(current)
  if (initialOverloads.length > 0) {
    const reconfig = simulateReconfig(initialOverloads, current)
    current = { ...current, ...reconfig }
    results.push({ loop: 'gammaCARMIS', executed: true, delta: reconfig })
  }

  // 2. Loops de reparación/mantenimiento
  const loops: Array<{ name: string; fn: (s: AppState) => Partial<AppState> }> = [
    { name: 'cdsDecay', fn: cdsDecayLoop },
    { name: 'meritMint', fn: meritMintLoop },
    { name: 'agentCompute', fn: agentComputeLoop },
    { name: 'regenMrv', fn: regenMrvLoop },
    { name: 'nostrAudit', fn: nostrAuditLoop },
    { name: 'vecinalAccountability', fn: vecinalAccountabilityLoop },
  ]

  for (const loop of loops) {
    const delta = loop.fn(current)
    const executed = Object.keys(delta).length > 0
    if (executed) current = { ...current, ...delta }
    results.push({ loop: loop.name, executed, delta })
  }

  // 3. Resonancia: detectar y acoplar
  const resonances = detectResonances(current)
  if (resonances.length > 0) {
    const coupled = coupleResonances(current, resonances)
    current = { ...current, ...coupled }
    results.push({ loop: 'resonance', executed: true, delta: coupled, resonance: resonances[0] })
  }

  return { state: current, results }
}

/** EJECUTA MÚLTIPLES TICKS (simulación / homeostasis test) */
export function runAlraicoSimulation(
  initialState: AppState,
  ticks: number,
  config: LoopEngineConfig = DEFAULT_LOOP_CONFIG,
): { finalState: AppState; history: LoopResult[][] } {
  let current = initialState
  const history: LoopResult[][] = []
  for (let i = 0; i < ticks; i++) {
    const { state, results } = runAlraicoTick(current, config)
    current = state
    history.push(results)
    if (i > 10 && history.slice(-10).every((h) => h.every((r) => !r.executed))) break
  }
  return { finalState: current, history }
}