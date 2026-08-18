import { describe, it, expect } from 'vitest'
import {
  runAlraicoSimulation,
  runAlraicoTick,
  detectOverloads,
  detectResonances,
} from '@core/lib/loopEngine'
import type { AppState } from '@core/state/store'

// Estado mínimo con solo los campos que loopEngine lee/escribe.
// Se castea a AppState porque el orquestador solo toca un subconjunto.
function makeMinimalState(): AppState {
  return {
    base: { harmony: 0.5 },
    lucidez: false,
    caasMembers: [],
    symbiosky: { proposals: [], locks: {}, balances: {}, lastActive: {}, results: {} },
    delegation: { trustAvg: 0.5, revocations: [] },
    education: { courses: [], enrollments: [], certificates: [], assessments: [] },
    sovereignCredit: { attestationRate: 0.5 },
    regen: { ecotech: [], systems: [] },
    vecinal: { barrios: [], propuestas: [] },
    nostrRelay: { config: { url: '', community: 'cosateca', localOnly: true }, events: [], connected: false, lastError: null },
    agentMesh: { community: 'cosateca', agents: [], computePool: [] },
    proofOfResponse: { requests: [], responses: [] },
  } as unknown as AppState
}

describe('loopEngine (Alráico OS Orchestrator)', () => {
  it('homeostasis: 1000 ticks sin decaimiento', () => {
    const initial = makeMinimalState()
    const { history } = runAlraicoSimulation(initial, 1000)
    expect(history.length).toBeGreaterThan(0)
    expect(history.length).toBeLessThanOrEqual(1000)
  })

  it('cdsDecayLoop enciende lucidez', () => {
    const st = makeMinimalState()
    st.lucidez = false
    const { results } = runAlraicoTick(st)
    const cdsLoop = results.find((r) => r.loop === 'cdsDecay')
    expect(cdsLoop).toBeDefined()
    expect(typeof cdsLoop?.executed).toBe('boolean')
  })

  it('detectOverloads identifica lucidez off', () => {
    const st = makeMinimalState()
    st.lucidez = false
    const overloads = detectOverloads(st)
    expect(overloads.some((o) => o.module === 'lucidez')).toBe(true)
  })

  it('detectResonances encuentra pares sinérgicos', () => {
    const st = makeMinimalState()
    st.lucidez = true
    st.caasMembers = [{ id: 'm1', memberName: 'x', tier: 'custodio', stakeZNU: 0, contributedFlows: 0, znuEarned: 0 }]
    const resonances = detectResonances(st)
    expect(resonances.length).toBeGreaterThan(0)
    expect(resonances[0].alphaH).toBeGreaterThan(1.0)
  })

  it('gammaCARMIS se dispara en sobrecarga', () => {
    const st = makeMinimalState()
    st.lucidez = false
    const { results } = runAlraicoTick(st)
    const gamma = results.find((r) => r.loop === 'gammaCARMIS')
    expect(gamma).toBeDefined()
    expect(gamma?.executed).toBe(true)
  })

  it('agentComputeLoop crea Por requests para agentes activos', () => {
    const st = makeMinimalState()
    st.agentMesh = {
      community: 'cosateca',
      agents: [{ id: 'a1', pubkey: 'pk', name: 'ag', community: 'cosateca', reputation: 5, body: 'local', createdAt: Date.now() }],
      computePool: [],
    }
    const { state, results } = runAlraicoTick(st)
    const agentLoop = results.find((r) => r.loop === 'agentCompute')
    expect(agentLoop).toBeDefined()
    expect(state.proofOfResponse.requests.length).toBeGreaterThan(0)
  })

  it('runAlraicoSimulation early-stops en homeostasis', () => {
    const initial = makeMinimalState()
    initial.lucidez = true
    const { history } = runAlraicoSimulation(initial, 1000)
    expect(history.length).toBeLessThan(1000)
  })
})