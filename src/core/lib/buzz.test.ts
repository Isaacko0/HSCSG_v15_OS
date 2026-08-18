import { describe, it, expect } from 'vitest'
import { makeNostrRelayState, publishLocal, connect, disconnect } from '@core/lib/nostrRelay'
import { buildEvent, verifyEventShape, queryLocal } from '@core/lib/nostrRelay'
import { makeAgentMeshState, spawnAgent, shareCompute, requestCompute, remoteResurrect, auditTrail } from '@core/lib/agentMesh'

describe('NostrRelay (block/buzz)', () => {
  it('publica evento en log local (RAO append-only)', () => {
    let st = makeNostrRelayState()
    const ev = buildEvent('npub_a', 1, 'hola')
    st = publishLocal(st, ev)
    expect(st.events.length).toBe(1)
    expect(verifyEventShape(ev)).toBe(true)
  })
  it('modo anfibio: localOnly ↔ conectado', () => {
    let st = makeNostrRelayState()
    expect(st.config.localOnly).toBe(true)
    st = connect(st, 'wss://relay.example')
    expect(st.connected).toBe(true)
    expect(st.config.localOnly).toBe(false)
    st = disconnect(st)
    expect(st.config.localOnly).toBe(true)
  })
  it('queryLocal filtra por kind', () => {
    let st = makeNostrRelayState()
    st = publishLocal(st, buildEvent('k', 1, 'a'))
    st = publishLocal(st, buildEvent('k', 7, 'b'))
    expect(queryLocal(st, 1).length).toBe(1)
  })
})

describe('AgentMesh (block/buzz Buzz Mesh + Remote Agents)', () => {
  it('spawn agent y shared compute gated por comunidad', () => {
    let st = makeAgentMeshState('cosateca')
    st = spawnAgent(st, 'npub_x', 'Alpha')
    st = shareCompute(st, 'vecino1', 'GPU idle')
    expect(st.agents.length).toBe(1)
    expect(st.computePool.length).toBe(1)
    const r = requestCompute(st, st.agents[0].id)
    expect(r.ok).toBe(true)
    expect(r.resource).toBe('GPU idle')
  })
  it('requestCompute falla fuera de comunidad', () => {
    let st = makeAgentMeshState('cosateca')
    st = spawnAgent(st, 'npub_y', 'Beta')
    st = { ...st, agents: st.agents.map((a) => ({ ...a, community: 'otra' })) }
    expect(requestCompute(st, st.agents[0].id).ok).toBe(false)
  })
  it('remoteResurrect cambia body a remote sin perder identidad', () => {
    let st = makeAgentMeshState()
    st = spawnAgent(st, 'npub_z', 'Gamma', 'local')
    const id = st.agents[0].id
    const pub0 = st.agents[0].pubkey
    st = remoteResurrect(st, id)
    expect(st.agents[0].body).toBe('remote')
    expect(st.agents[0].pubkey).toBe(pub0) // identidad portable
    expect(auditTrail(st, id)).toBe(0)
  })
})
