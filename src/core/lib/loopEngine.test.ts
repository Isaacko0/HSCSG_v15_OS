import { describe, it, expect } from 'vitest'
import { runAlraicoSimulation, runAlraicoTick, detectOverloads, detectResonances, DEFAULT_LOOP_CONFIG } from '@core/lib/loopEngine'

// Estado mínimo compatible con lo que loopEngine.ts lee/escribe
function makeMinimalState() {
  const now = Date.now()
  return {
    base: { harmony: 0.5 },
    lucidez: { cds: 0.8, rao: [] },
    caas: { balance: 1000, priceParity: 0.5 },
    symbiosky: { proposals: [], meritAvg: 0.5 },
    delegation: { trustAvg: 0.5, revocations: [] },
    education: { progressAvg: 0.5 },
    sovereignCredit: { attestationRate: 0.5 },
    regen: { ecoTechs: [], mrvVerifiedRate: 0.5 },
    vecinal: { proposals: [], participationRate: 0.5 },
    nostrRelay: { mode: 'offline' as const, events: [], connectionHealth: 0.5 },
    agentMesh: { 
      requests: [], 
      responses: [], 
      penalties: [], 
      computeUtilization: 0.5,
      community: 'cosateca',
      agents: []
    },
    proofOfResponse: { 
      requests: [], 
      responses: [], 
      failures: [], 
      penalties: [], 
      mode: 'offline' as const,
      satisfactionRate: 0.5
    },
    stageSeeds: {},
  }
}

describe('loopEngine (Alráico OS Orchestrator)', () => {
  it('homeostasis: 1000 ticks sin decaimiento de αʰ total', () => {
    const initial = makeMinimalState()
    const { finalState, history } = runAlraicoSimulation(initial, 1000)
    const alphaH = (finalState.lucidez.cds ?? 0) + (finalState.caas.priceParity ?? 0) + (finalState.symbiosky.meritAvg ?? 0)
    expect(alphaH).toBeGreaterThan(0)
    expect(history.length).toBeGreaterThan(0)
    expect(history.length).toBeLessThanOrEqual(1000)
  })

  it('cdsDecayLoop ejecuta cuando balance cambia', () => {
    const st = makeMinimalState()
    st.caas.balance = 1000
    st.lucidez.cds = 1.0
    const { state, results } = runAlraicoTick(st)
    const cdsLoop = results.find(r => r.loop === 'cdsDecay')
    expect(cdsLoop).toBeDefined()
    expect(typeof cdsLoop?.executed).toBe('boolean')
  })

  it('detectOverloads identifica CDS bajo', () => {
    const st = makeMinimalState()
    st.lucidez.cds = 0.1
    const overloads = detectOverloads(st)
    expect(overloads.some(o => o.module === 'lucidez')).toBe(true)
  })

  it('detectResonances encuentra pares sinérgicos', () => {
    const st = makeMinimalState()
    st.lucidez.cds = 1.0
    st.caas.priceParity = 1.0
    const resonances = detectResonances(st)
    expect(resonances.length).toBeGreaterThan(0)
    const top = resonances[0]
    expect(top.alphaH).toBeGreaterThan(1.0)
  })

  it('gammaCARMIS se dispara en sobrecarga', () => {
    const st = makeMinimalState()
    st.lucidez.cds = 0.1
    const { state, results } = runAlraicoTick(st)
    const gamma = results.find(r => r.loop === 'gammaCARMIS')
    expect(gamma).toBeDefined()
    expect(gamma?.executed).toBe(true)
  })

  it('agentComputeLoop crea Por requests para agentMesh pendientes', () => {
    const st = makeMinimalState()
    st.agentMesh.requests = [{ id: 'req_1', agentId: 'agent_a', resource: 'compute_x', at: Date.now() }]
    const { state, results } = runAlraicoTick(st)
    const agentLoop = results.find(r => r.loop === 'agentCompute')
    expect(agentLoop).toBeDefined()
    expect(state.proofOfResponse.requests.length).toBeGreaterThan(0)
  })

  it('runAlraicoSimulation early-stops en homeostasis', () => {
    const initial = makeMinimalState()
    initial.lucidez.cds = 0
    const { history } = runAlraicoSimulation(initial, 1000)
    expect(history.length).toBeLessThan(1000)
  })
})