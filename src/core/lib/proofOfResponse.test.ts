import { describe, it, expect } from 'vitest'
import { makeProofOfResponseState, issueRequest, respond, proveFailure, isSatisfied } from '@core/lib/proofOfResponse'

describe('ProofOfResponse (NEAR AI)', () => {
  it('respuesta firmada antes de deadline b satisface', () => {
    let st = makeProofOfResponseState()
    st = issueRequest(st, 'Alice', 'Bob', 'dar datos', 5000)
    const id = st.requests[0].id
    st = respond(st, id, 'Bob', 'datos entregados')
    expect(isSatisfied(st, id)).toBe(true)
    expect(st.responses.length).toBe(1)
  })
  it('sin respuesta tras deadline b → prueba de fallo + penalización', () => {
    let st = makeProofOfResponseState()
    // deadline en el pasado para forzar fallo
    st = issueRequest(st, 'Alice', 'Bob', 'x', -1000)
    const id = st.requests[0].id
    st = proveFailure(st, id, 'sin respuesta')
    expect(isSatisfied(st, id)).toBe(false)
    expect(st.failures.length).toBe(1)
    expect(st.penalties.length).toBe(1)
    expect(st.penalties[0].nodeId).toBe('Bob')
  })
  it('responder fuera de tiempo no cuenta', () => {
    let st = makeProofOfResponseState()
    st = issueRequest(st, 'Alice', 'Bob', 'x', -1000)
    const id = st.requests[0].id
    st = respond(st, id, 'Bob', 'tarde')
    expect(isSatisfied(st, id)).toBe(false)
  })
  it('modo anfibio offline por defecto', () => {
    const st = makeProofOfResponseState()
    expect(st.mode).toBe('offline')
  })
})
