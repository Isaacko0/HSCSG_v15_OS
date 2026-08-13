import { describe, it, expect } from 'vitest'
import { commitHash, castCommit, openReveal, revealVote, makeCredibilityState } from '@core/lib/symbiosky'
import { validateProposalScore } from '@core/lib/integral'

describe('commit-reveal (Shivarthu en Symbiosky)', () => {
  it('commit genera hash y NO cuenta el voto aún', () => {
    let st = makeCredibilityState()
    // simulamos una propuesta con fase commit
    st = { ...st, proposals: [{ id: 'p1', title: 't', author: 'a', votes: {}, createdAt: 0, phase: 'commit', commits: {} }] }
    const salt = 'xyz'
    st = castCommit(st, 'p1', 'voter1', 9, 4, salt)
    const p = st.proposals[0]
    expect(p.commits['voter1']).toBeDefined()
    expect(p.commits['voter1'].salt).toBe(salt)
    expect(Object.keys(p.votes).length).toBe(0) // aún no cuenta
  })

  it('reveal con salt correcto cuenta el voto', () => {
    let st = makeCredibilityState()
    st = { ...st, proposals: [{ id: 'p1', title: 't', author: 'a', votes: {}, createdAt: 0, phase: 'commit', commits: {} }] }
    const salt = 'secret123'
    st = castCommit(st, 'p1', 'voter1', 9, 4, salt)
    st = openReveal(st, 'p1')
    st = revealVote(st, 'p1', 'voter1', 9, 4, salt)
    const v = st.proposals[0].votes['voter1']
    expect(v).toBeDefined()
    expect(v.score).toBe(9)
    expect(v.conviction).toBe(4)
  })

  it('reveal con hash incorrecto (tamper) rechaza el voto', () => {
    let st = makeCredibilityState()
    st = { ...st, proposals: [{ id: 'p1', title: 't', author: 'a', votes: {}, createdAt: 0, phase: 'commit', commits: {} }] }
    st = castCommit(st, 'p1', 'voter1', 9, 4, 'saltA')
    st = openReveal(st, 'p1')
    // intenta revelar con score distinto pero mismo salt → hash no coincide
    st = revealVote(st, 'p1', 'voter1', 3, 1, 'saltA')
    expect(Object.keys(st.proposals[0].votes).length).toBe(0)
  })

  it('commitHash es determinista', () => {
    expect(commitHash(9, 4, 'salt')).toBe(commitHash(9, 4, 'salt'))
  })
})

describe('validateProposalScore (Voto por Mérito, Shivarthu)', () => {
  it('mérito = rep × exp × ext normalizados 0-1', () => {
    const r = validateProposalScore(100, 50, 100)
    expect(r.weight).toBeCloseTo(1, 3) // todos max → 1
    expect(r.breakdown).toEqual({ rep: 1, exp: 1, ext: 1 })
  })

  it('mérito parcial se multiplica', () => {
    const r = validateProposalScore(50, 25, 50)
    expect(r.weight).toBeCloseTo(0.125, 3) // 0.5 × 0.5 × 0.5
  })

  it('clampa valores fuera de rango', () => {
    const r = validateProposalScore(200, -10, 300)
    expect(r.weight).toBe(0) // exp negativo → 0
  })
})
