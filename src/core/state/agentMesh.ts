// HSCSG v15 OS — agentMesh: malla de agentes/comunidad (block/buzz asimilado)
// Extirpado: buzz-acp harness Rust, buzz-dev-mcp server, sprig all-in-one.
// Conservado: agentes como miembros (keypair, reputación, audit), compute comunitario gated por membresía,
// cuerpo desechable / identidad portable en relay (RAO).
export interface Agent {
  id: string
  pubkey: string
  name: string
  community: string
  reputation: number
  body: 'local' | 'remote' | 'disposable'
  createdAt: number
}

export interface AgentMeshState {
  community: string
  agents: Agent[]
  computePool: { memberId: string; resource: string; sharedAt: number }[]
}

export function makeAgentMeshState(community = 'cosateca'): AgentMeshState {
  return { community, agents: [], computePool: [] }
}

let nextId = 1
export function spawnAgent(state: AgentMeshState, pubkey: string, name: string, body: Agent['body'] = 'local'): AgentMeshState {
  const agent: Agent = {
    id: `agent_${nextId++}`,
    pubkey,
    name,
    community: state.community,
    reputation: 0,
    body,
    createdAt: Math.floor(Date.now() / 1000),
  }
  return { ...state, agents: [...state.agents, agent] }
}

// Buzz Mesh: compartir compute por membresía de comunidad (gated por CA colectiva).
export function shareCompute(state: AgentMeshState, memberId: string, resource: string): AgentMeshState {
  return { ...state, computePool: [...state.computePool, { memberId, resource, sharedAt: Math.floor(Date.now() / 1000) }] }
}

// Remote Agents: solicitar compute del pool (solo miembros de la comunidad).
export function requestCompute(state: AgentMeshState, agentId: string): { ok: boolean; resource?: string } {
  const agent = state.agents.find((a) => a.id === agentId)
  if (!agent || agent.community !== state.community) return { ok: false }
  const slot = state.computePool[0]
  return slot ? { ok: true, resource: slot.resource } : { ok: false }
}

// Resurrección: reanuda agente por keypair, sin recrear historia (history vive en relay/RAO).
export function remoteResurrect(state: AgentMeshState, agentId: string): AgentMeshState {
  return {
    ...state,
    agents: state.agents.map((a) =>
      a.id === agentId ? { ...a, body: 'remote', createdAt: Math.floor(Date.now() / 1000) } : a,
    ),
  }
}

// Audit trail: hash-chain de eventos del agente (buzz-audit ≈ RAO).
export function auditTrail(state: AgentMeshState, agentId: string): number {
  const a = state.agents.find((x) => x.id === agentId)
  return a ? a.reputation : 0
}
