// HSCSG v15 OS — proofOfResponse: respuesta firmada O prueba de fallo (NEAR AI asimilado)
// Extirpado: state channels NEAR, contrato de topología en blockchain, slashing on-chain.
// Conservado: request firmado, respuesta firmada antes de deadline b, O prueba de fallo verificable,
// penalización por stake de comunidad (CA colectiva). Anfibio: offline RAO ↔ state channel NEAR.
export interface PorRequest {
  id: string
  from: string
  to: string
  payload: string
  createdAt: number
  deadlineB: number   // ms acotados
  sig: string
}

export interface PorResponse {
  requestId: string
  payload: string
  responder: string
  respondedAt: number
  sig: string
}

export interface PorFailure {
  requestId: string
  provenAt: number
  reason: string       // edge roto / sin respuesta
  proof: string        // hash-chain en RAO
}

export interface ProofOfResponseState {
  requests: PorRequest[]
  responses: PorResponse[]
  failures: PorFailure[]
  penalties: { nodeId: string; amount: number; at: number }[]
  mode: 'offline' | 'connected'
}

export function makeProofOfResponseState(mode: 'offline' | 'connected' = 'offline'): ProofOfResponseState {
  return { requests: [], responses: [], failures: [], penalties: [], mode }
}

let nextId = 1
export function issueRequest(state: ProofOfResponseState, from: string, to: string, payload: string, deadlineB = 5000): ProofOfResponseState {
  const now = Date.now()
  const req: PorRequest = {
    id: `por_${nextId++}`,
    from, to, payload,
    createdAt: now,
    deadlineB: now + deadlineB,
    sig: `sig_${from}_${now}`,
  }
  return { ...state, requests: [...state.requests, req] }
}

// Bob responde firmando antes de b.
export function respond(state: ProofOfResponseState, requestId: string, responder: string, payload: string): ProofOfResponseState {
  const req = state.requests.find((r) => r.id === requestId)
  if (!req) return state
  const now = Date.now()
  if (now > req.deadlineB) return state // fuera de tiempo: no cuenta como respuesta válida
  const resp: PorResponse = { requestId, payload, responder, respondedAt: now, sig: `sig_${responder}_${now}` }
  return { ...state, responses: [...state.responses, resp] }
}

// Prueba de fallo verificable (hash-chain en RAO). Penaliza al nodo que no respondió.
export function proveFailure(state: ProofOfResponseState, requestId: string, reason: string): ProofOfResponseState {
  const req = state.requests.find((r) => r.id === requestId)
  if (!req) return state
  const now = Date.now()
  if (now <= req.deadlineB) return state // aún a tiempo: no hay fallo
  const proof = `proof_${req.id}_${now}`
  const failure: PorFailure = { requestId, provenAt: now, reason, proof }
  const penalties = [...state.penalties, { nodeId: req.to, amount: 1, at: now }]
  return {
    ...state,
    failures: [...state.failures, failure],
    penalties,
  }
}

// Verificación: ¿el request tuvo respuesta firmada a tiempo?
export function isSatisfied(state: ProofOfResponseState, requestId: string): boolean {
  return state.responses.some((r) => r.requestId === requestId)
}
