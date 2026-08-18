// HSCSG v15 OS — loopEngine: Orquestador nativo del Sistema Alráico
// Kernel de orquestación: ejecuta loops, detecta resonancia, dispara γ-CARMIS, spawnea skills/agentes.
// Anfibio: offline (RAO local) ↔ conectado (Nostr/NEAR).
import type { AppState } from '@core/state/store'
import { proveFailure as porProve } from '@core/lib/proofOfResponse'
import { auditTrail } from '@core/lib/agentMesh'

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
  // CDS decay: solo si CDS > 0 y bajo threshold (CDS=0 es homeostasis, no sobrecarga)
  if (st.lucidez.cds > 0 && st.lucidez.cds < 0.3) overloads.push({ module: 'lucidez', kappa: 0.3, alphaH: st.lucidez.cds })
  // Symbiosky quorum
  if (st.symbiosky.proposals.some((p: { votes?: unknown[]; tally?: { approved?: boolean } }) => (p.votes?.length ?? 0) > 0 && p.tally && p.tally.approved === false)) {
    overloads.push({ module: 'symbiosky', kappa: 0.5, alphaH: 0.4 })
  }
  // AgentMesh: requests sin respuesta
  const pendingRequests = st.agentMesh.requests.filter((r: { id: string }) => !st.agentMesh.responses.some((x: { requestId: string }) => x.requestId === r.id))
  if (pendingRequests.length > 5) overloads.push({ module: 'agentMesh', kappa: 5, alphaH: pendingRequests.length })
  // ProofOfResponse: fallos pendientes
  const pendingFailures = st.proofOfResponse.requests.filter((r: { deadlineB: number; id: string }) => 
    !st.proofOfResponse.responses.some((x: { requestId: string }) => x.requestId === r.id) &&
    Date.now() > r.deadlineB
  )
  if (pendingFailures.length > 0) overloads.push({ module: 'proofOfResponse', kappa: 0, alphaH: -pendingFailures.length })
  return overloads
}

/** Simula reconfiguración γ-CARMIS para sobrecargas detectadas */
export function simulateReconfig(overloads: ReturnType<typeof detectOverloads>, st: AppState): Partial<AppState> {
  const delta: Partial<HSCSGState> = {}
  for (const o of overloads) {
    switch (o.module) {
      case 'lucidez':
        // γ-CARMIS: reinicio vesting + alerta
        delta.lucidez = { ...st.lucidez, cds: Math.min(1, st.lucidez.cds + 0.1) }
        break
      case 'symbiosky':
        // γ-CARMIS: nueva propuesta de reorganización
        delta.symbiosky = { ...st.symbiosky, proposals: [...st.symbiosky.proposals, { id: `reconfig_${Date.now()}`, type: 'reconfig', status: 'pending' }] }
        break
      case 'agentMesh':
        // γ-CARMIS: penalizar agentes no responsivos + reassign
        const pendingRequests = st.agentMesh.requests.filter((r: { id: string }) => !st.agentMesh.responses.some((x: { requestId: string }) => x.requestId === r.id))
        delta.agentMesh = { ...st.agentMesh, penalties: [...st.agentMesh.penalties, { agentId: 'system', amount: pendingRequests.length, at: Date.now() }] }
        break
      case 'proofOfResponse':
        // γ-CARMIS: ejecutar proveFailure automático
        const pendingFailures = st.proofOfResponse.requests.filter((r: { deadlineB: number; id: string }) => 
          !st.proofOfResponse.responses.some((x: { requestId: string }) => x.requestId === r.id) &&
          Date.now() > r.deadlineB
        )
        for (const r of pendingFailures) {
          const porSt = { ...st.proofOfResponse }
          porProve(porSt, r.id, 'timeout auto γ-CARMIS')
          delta.proofOfResponse = porSt
        }
        break
    }
  }
  return delta
}

/** Detecta resonancia entre 𝕮ᵢ y 𝕮ⱼ: αʰ_oda > αʰ₁ + αʰ₂ */
export function detectResonances(st: AppState): Array<{ c1: string; c2: string; alphaH: number }> {
  const resonances: Array<{ c1: string; c2: string; alphaH: number }> = []
  const modules = [
    { id: 'base', alphaH: st.base.harmony ?? 0.5 },
    { id: 'lucidez', alphaH: st.lucidez.cds },
    { id: 'caas', alphaH: st.caas.priceParity ?? 0.5 },
    { id: 'symbiosky', alphaH: st.symbiosky.meritAvg ?? 0.5 },
    { id: 'delegation', alphaH: st.delegation.trustAvg ?? 0.5 },
    { id: 'education', alphaH: st.education.progressAvg ?? 0.5 },
    { id: 'sovereignCredit', alphaH: st.sovereignCredit.attestationRate ?? 0.5 },
    { id: 'regen', alphaH: st.regen.mrvVerifiedRate ?? 0.5 },
    { id: 'vecinal', alphaH: st.vecinal.participationRate ?? 0.5 },
    { id: 'nostrRelay', alphaH: st.nostrRelay.connectionHealth ?? 0.5 },
    { id: 'agentMesh', alphaH: st.agentMesh.computeUtilization ?? 0.5 },
    { id: 'proofOfResponse', alphaH: st.proofOfResponse.satisfactionRate ?? 0.5 },
  ]
  for (let i = 0; i < modules.length; i++) {
    for (let j = i + 1; j < modules.length; j++) {
      const combined = modules[i].alphaH * modules[j].alphaH * 3.0 // factor sinérgico ≥ 3 para resonancia real
      if (combined > modules[i].alphaH + modules[j].alphaH) {
        resonances.push({ c1: modules[i].id, c2: modules[j].id, alphaH: combined })
      }
    }
  }
  return resonances.sort((a, b) => b.alphaH - a.alphaH)
}

/** Acopla resonancias detectadas (crea ligaduras γ entre módulos) */
export function coupleResonances(st: AppState, resonances: ReturnType<typeof detectResonances>): Partial<AppState> {
  // Por ahora: registra en RAO para trazabilidad
  const newRao = [...(st.lucidez.rao || []), ...resonances.map(r => ({
    type: 'resonance',
    modules: [r.c1, r.c2],
    alphaH: r.alphaH,
    at: Date.now(),
  }))]
  return { lucidez: { ...st.lucidez, rao: newRao } }
}

/** Loop principal: CDS Decay */
function cdsDecayLoop(st: AppState): Partial<AppState> {
  // znuDecayOnBalance requiere IntegralState; usamos CDS directamente
  // Solo decay si CDS > 0 (homeostasis = CDS en 0)
  if (st.lucidez.cds <= 0) return {}
  const newCds = Math.max(0, st.lucidez.cds - 0.001)
  return newCds !== st.lucidez.cds ? { lucidez: { ...st.lucidez, cds: newCds } } : {}
}

/** Loop: Merit Mint */
function meritMintLoop(st: AppState): Partial<AppState> {
  const approved = st.symbiosky.proposals.filter((p: { tally?: { approved?: boolean } }) => p.tally?.approved)
  if (approved.length > 0) {
    const mintAmount = approved.reduce((s: number, p: { meritReward?: number }) => s + (p.meritReward ?? 10), 0)
    return { caas: { ...st.caas, balance: st.caas.balance + mintAmount } }
  }
  return {}
}

/** Loop: Agent Compute + Proof of Response */
function agentComputeLoop(st: AppState): Partial<AppState> {
  const delta: Partial<AppState> = {}
  // Auto-issue Por para requests pendientes de agentMesh
  for (const req of st.agentMesh.requests) {
    if (!st.proofOfResponse.requests.some((p: { payload: string }) => p.payload.includes(req.id))) {
      // issueRequest no muta, retorna nuevo estado
      // Simplificación: solo marcamos que hay request pendiente
      delta.proofOfResponse = { ...st.proofOfResponse, requests: [...st.proofOfResponse.requests, { 
        id: `por_${req.id}`, from: 'system', to: req.agentId, payload: req.resource, createdAt: Date.now(), deadlineB: Date.now() + 10000, sig: 'auto' 
      }] }
    }
  }
  // Auto-proveFailure para Por expirados
  const expired = st.proofOfResponse.requests.filter((r: { deadlineB: number; id: string }) => Date.now() > r.deadlineB && !st.proofOfResponse.responses.some((x: { requestId: string }) => x.requestId === r.id))
  if (expired.length > 0) {
    let porSt = st.proofOfResponse
    for (const r of expired) porSt = porProve(porSt, r.id, 'timeout agentComputeLoop')
    delta.proofOfResponse = porSt
  }
  return delta
}

/** Loop: Regen MRV */
function regenMrvLoop(st: AppState): Partial<AppState> {
  const pending = st.regen.ecoTechs.filter((t: { mrvStatus?: string }) => t.mrvStatus === 'pending')
  if (pending.length > 0) {
    // Auto-request verificación via Proof of Response
    let porSt = st.proofOfResponse
    for (const t of pending) {
      porSt = { ...porSt, requests: [...porSt.requests, { id: `mrv_${t.id}`, from: 'regen', to: 'oracle', payload: t.id, createdAt: Date.now(), deadlineB: Date.now() + 86400000, sig: 'auto' }] }
    }
    return { proofOfResponse: porSt }
  }
  return {}
}

/** Loop: Nostr Audit */
function nostrAuditLoop(st: AppState): Partial<AppState> {
  if (st.nostrRelay.mode === 'connected' && st.nostrRelay.events.length > 0) {
    const audited = auditTrail(st.agentMesh, st.nostrRelay.events.map((e: { id: string }) => e.id))
    return { agentMesh: audited }
  }
  return {}
}

/** Loop: Vecinal Accountability */
function vecinalAccountabilityLoop(st: AppState): Partial<AppState> {
  const failed = st.vecinal.proposals.filter((p: { tally?: { approved?: boolean }; executor?: string }) => p.tally && !p.tally.approved && p.executor)
  if (failed.length > 0) {
    return { delegation: { ...st.delegation, revocations: [...(st.delegation.revocations || []), ...failed.map((p: { executor?: string }) => p.executor || '')] } }
  }
  return {}
}

/** EJECUTA UN TICK COMPLETO DEL MOTOR ALRÁICO */
export function runAlraicoTick(st: AppState, _config: LoopEngineConfig = DEFAULT_LOOP_CONFIG): { state: AppState; results: LoopResult[] } {
  let current = st
  const results: LoopResult[] = []

  // 1. Loops base
  const loops = [
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

  // 2. γ-CARMIS: detectar sobrecargas y reconfigurar
  const overloads = detectOverloads(current)
  if (overloads.length > 0) {
    const reconfig = simulateReconfig(overloads, current)
    current = { ...current, ...reconfig }
    results.push({ loop: 'gammaCARMIS', executed: true, delta: reconfig })
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
export function runAlraicoSimulation(initialState: AppState, ticks: number, config: LoopEngineConfig = DEFAULT_LOOP_CONFIG): { finalState: AppState; history: LoopResult[][] } {
  let current = initialState
  const history: LoopResult[][] = []
  for (let i = 0; i < ticks; i++) {
    const { state, results } = runAlraicoTick(current, config)
    current = state
    history.push(results)
    // Early stop si homeostasis alcanzada (sin cambios en 10 ticks)
    if (i > 10 && history.slice(-10).every(h => h.every(r => !r.executed))) break
  }
  return { finalState: current, history }
}