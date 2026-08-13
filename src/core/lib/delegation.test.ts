import { describe, it, expect } from 'vitest'
import { delegatePower, revokeDelegation, delegationTree, expertInfluence } from '@core/lib/delegation'
import { makeDelegationState } from '@core/state/delegation'

describe('delegatePower (AuroraGov + Symbiosky)', () => {
  it('delega poder en un dominio', () => {
    const st = makeDelegationState(['Isaac', 'Luz'])
    const next = delegatePower(st, 'Isaac', 'Luz', 'ALIM', 2)
    expect(next.edges.length).toBe(1)
    expect(next.edges[0]).toMatchObject({ from: 'Isaac', to: 'Luz', domain: 'ALIM', weight: 2 })
  })

  it('no permite auto-delegación', () => {
    const st = makeDelegationState(['Isaac', 'Luz'])
    const next = delegatePower(st, 'Isaac', 'Isaac', 'ALIM')
    expect(next.edges.length).toBe(0)
  })

  it('reemplaza delegación previa del mismo from+domain (una sola por dominio)', () => {
    let st = makeDelegationState(['Isaac', 'Luz', 'Tobías'])
    st = delegatePower(st, 'Isaac', 'Luz', 'ALIM')
    st = delegatePower(st, 'Isaac', 'Tobías', 'ALIM')
    expect(st.edges.length).toBe(1)
    expect(st.edges[0].to).toBe('Tobías')
  })

  it('revoca delegación', () => {
    let st = makeDelegationState(['Isaac', 'Luz'])
    st = delegatePower(st, 'Isaac', 'Luz', 'ALIM')
    st = revokeDelegation(st, 'Isaac', 'ALIM')
    expect(st.edges.length).toBe(0)
  })
})

describe('delegationTree + expertInfluence', () => {
  it('agrupa por dominio y acumula influencia del experto', () => {
    let st = makeDelegationState(['A', 'B', 'C'])
    st = delegatePower(st, 'A', 'B', 'ALIM', 1)
    st = delegatePower(st, 'C', 'B', 'ALIM', 3)
    st = delegatePower(st, 'A', 'B', 'ENER', 2)

    const tree = delegationTree(st)
    expect(tree['ALIM'].length).toBe(2)
    expect(tree['ENER'].length).toBe(1)

    const inf = expertInfluence(st, 'B')
    expect(inf['ALIM']).toBe(4) // 1 + 3
    expect(inf['ENER']).toBe(2)
  })
})
