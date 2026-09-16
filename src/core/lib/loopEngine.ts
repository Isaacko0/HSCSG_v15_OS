// HSCSG v15 OS — loopEngine: Orquestador nativo del Sistema Alráico
// Kernel de orquestación: ejecuta loops, detecta resonancia, dispara γ-CARMIS, spawnea skills/agentes.
// Anfibio: offline (RAO local) ↔ conectado (Nostr/NEAR).
// Integración Cosmotechnics: Buzhou Shan Monitor (glitch cósmico) + γ-CARMIS reconfiguración
// ACTUALIZADO: Loop 7 VitalTimeMint + BT213 límites kernel + BT214 humano artífice

import type { AppState } from '@core/state/store'
import { proveFailure as porProve } from '@core/lib/proofOfResponse'
import { monitorCosmicGlitch, reconfigureForGlitch, type CosmicGlitch } from '@core/lib/chinese-cosmotechnics'
import { vitalTimeRotate, vitalTimeDecay } from './valueDual'

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

/** Detecta sobrecargas ΣPᵢ > κ en cada 𝕮 (módulo) */
export function detectOverloads(st: AppState): Array<{ module: string; kappa: number; alphaH: number }> {
  const overloads: Array<{ module: string; kappa: number; alphaH: number }> = []

  if (!st.lucidez) overloads.push({ module: 'lucidez', kappa: 0.3, alphaH: 0.1 })

  const pendingSymbio = st.symbiosky.proposals.filter((p) => !st.symbiosky.results[p.id])
  if (pendingSymbio.length > 5) overloads.push({ module: 'symbiosky', kappa: 5, alphaH: pendingSymbio.length })

  const idleAgents = st.agentMesh.agents.filter((a) => a.reputation === 0)
  if (idleAgents.length > 3) overloads.push({ module: 'agentMesh', kappa: 3, alphaH: idleAgents.length })

  const now = Date.now()
  const expiredPor = st.proofOfResponse.requests.filter(
    (r) => !st.proofOfResponse.responses.some((x) => x.requestId === r.id) && now > r.deadlineB,
  )
  if (expiredPor.length > 0) overloads.push({ module: 'proofOfResponse', kappa: 0, alphaH: -expiredPor.length })

  if (st.regen.ecotech.length > st.regen.systems.length * 2) {
    overloads.push({ module: 'regen', kappa: st.regen.systems.length, alphaH: st.regen.ecotech.length })
  }

  if (st.vitalTime?.nodes) {
    const staleNodes = Object.values(st.vitalTime.nodes).filter(
      (n: any) => now - n.lastActivity > (n.rotationDays || 30) * 24 * 60 * 60 * 1000
    )
    if (staleNodes.length > 0) overloads.push({ module: 'vitalTime', kappa: 0, alphaH: staleNodes.length })
  }

  return overloads
}

/** Simula reconfiguración γ-CARMIS para sobrecargas detectadas */
export function simulateReconfig(overloads: ReturnType<typeof detectOverloads>, st: AppState): Partial<AppState> {
  const delta: Partial<AppState> = {}
  const now = Date.now()
  
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
      case 'vitalTime': {
        const staleNodes = Object.values(st.vitalTime?.nodes || {}).filter(
          (n: any) => now - n.lastActivity > (n.rotationDays || 30) * 24 * 60 * 60 * 1000
        )
        delta.vitalTime = {
          ...st.vitalTime,
          staleAlerts: [...(st.vitalTime?.staleAlerts || []), ...staleNodes.map((n: any) => n.nodeId)]
        }
        break
      }
    }
  }
  return delta
}

/** Detecta resonancia: αʰ_oda > αʰ₁ + αʰ₂ (factor 3.0) */
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
    vitalTime: st.vitalTime?.nodes && Object.keys(st.vitalTime.nodes).length > 0 ? 0.7 : 0.2,
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

/** Acopla resonancias detectadas */
export function coupleResonances(_st: AppState, _resonances: ReturnType<typeof detectResonances>): Partial<AppState> {
  return {}
}

/** Loop: CDS / Lucidez recovery */
function cdsDecayLoop(st: AppState): Partial<AppState> {
  if (!st.lucidez) return { lucidez: true }
  return {}
}

/** Loop: Merit Mint */
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

/** Loop: Regen MRV */
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

/** Loop: Nostr Audit */
function nostrAuditLoop(st: AppState): Partial<AppState> {
  if (st.nostrRelay.connected && st.nostrRelay.events.length > 0) {
    return {}
  }
  return {}
}

/** Loop: Vecinal Accountability */
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

/** Loop 7: VitalTimeMint — Minea hr_vital por presencia verificada (BT215 + BT213 + BT214) */
function vitalTimeMintLoop(st: AppState): Partial<AppState> {
  if (!st.vitalTime?.nodes) return {}

  const now = Date.now()
  const currentVitalTime = st.vitalTime
  const deltaVitalTime = {
    nodes: { ...currentVitalTime.nodes },
    staleAlerts: [...currentVitalTime.staleAlerts],
    pendingVerifications: [...currentVitalTime.pendingVerifications]
  }
  let executed = false

  for (const [nodeId, node] of Object.entries(currentVitalTime.nodes)) {
    const daysSinceActivity = (now - node.lastActivity) / (1000 * 60 * 60 * 24)
    const rotationDays = node.rotationDays || 30
    
    if (daysSinceActivity >= rotationDays) {
      if (node.triaxialVerificationCount > 0 && 
          node.presenceIntegration?.directExperienceVerified && 
          node.presenceIntegration?.sharedTracesVerified) {
        
        const rotationResult = vitalTimeRotate(
                  node.vitalTimeBalance,
                  node.protectedVitalTime || 30,
                  daysSinceActivity,
                  rotationDays
                )
                const active = typeof rotationResult.active === 'number' 
                  ? { ...node.vitalTimeBalance, amount: rotationResult.active }
                  : rotationResult.active
        
                if (rotationResult.released > 0) {
                  deltaVitalTime.nodes[nodeId] = {
                    ...node,
                    vitalTimeBalance: active,
                    lastActivity: now,
                    triaxialVerificationCount: node.triaxialVerificationCount + 1
                  }
                  executed = true
                }
      } else {
        deltaVitalTime.pendingVerifications = [...deltaVitalTime.pendingVerifications, nodeId]
      }
    }
    
    if (daysSinceActivity > 7 && node.demurrageRate) {
          const decayResult = vitalTimeDecay(node.vitalTimeBalance, node.demurrageRate, daysSinceActivity)
          const decayedAmount = typeof decayResult === 'number'
            ? { ...node.vitalTimeBalance, amount: decayResult }
            : decayResult
      
          if (decayedAmount.amount < node.vitalTimeBalance.amount) {
            deltaVitalTime.nodes[nodeId] = {
              ...node,
              vitalTimeBalance: decayedAmount,
              realMargin: {
                ...node.realMargin,
                currentMargin: node.realMargin?.currentMargin || 1,
                evasionReducesMargin: true
              }
            }
            executed = true
          }
        }
  }

  return executed ? { vitalTime: deltaVitalTime } : {}
}

/** EJECUTA UN TICK COMPLETO DEL MOTOR ALRÁICO */
export function runAlraicoTick(
  st: AppState,
  _config: LoopEngineConfig = DEFAULT_LOOP_CONFIG,
): { state: AppState; results: LoopResult[] } {
  let current = st
  const results: LoopResult[] = []

  const initialOverloads = detectOverloads(current)
  if (initialOverloads.length > 0) {
    const reconfig = simulateReconfig(initialOverloads, current)
    current = { ...current, ...reconfig }
    results.push({ loop: 'gammaCARMIS', executed: true, delta: reconfig })
  }

  const cosmicGlitch = monitorCosmicGlitch(current)
  if (cosmicGlitch) {
    const glitchReconfig = reconfigureForGlitch(cosmicGlitch)
    for (const action of glitchReconfig.actions) {
      results.push({
        loop: 'buzhouShan',
        executed: true,
        delta: {
          loopEngine: {
            ...current.loopEngine,
            lastGlitch: cosmicGlitch,
            pendingReconfig: glitchReconfig.actions,
          } as any,
        },
      })
    }
  }

  const loops: Array<{ name: string; fn: (s: AppState) => Partial<AppState> }> = [
    { name: 'cdsDecay', fn: cdsDecayLoop },
    { name: 'meritMint', fn: meritMintLoop },
    { name: 'agentCompute', fn: agentComputeLoop },
    { name: 'regenMrv', fn: regenMrvLoop },
    { name: 'nostrAudit', fn: nostrAuditLoop },
    { name: 'vecinalAccountability', fn: vecinalAccountabilityLoop },
    { name: 'vitalTimeMint', fn: vitalTimeMintLoop },
  ]

  for (const loop of loops) {
    const delta = loop.fn(current)
    const executed = Object.keys(delta).length > 0
    if (executed) current = { ...current, ...delta }
    results.push({ loop: loop.name, executed, delta })
  }

  const resonances = detectResonances(current)
  if (resonances.length > 0) {
    const coupled = coupleResonances(current, resonances)
    current = { ...current, ...coupled }
    results.push({ loop: 'resonance', executed: true, delta: coupled, resonance: resonances[0] })
  }

  return { state: current, results }
}

/** EJECUTA MÚLTIPLES TICKS */
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