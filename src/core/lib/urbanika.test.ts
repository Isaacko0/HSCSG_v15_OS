import { describe, it, expect } from 'vitest'
import { makeSovereignCreditState, addAttestation, scoreOf, setMode } from '@core/lib/sovereignCredit'
import { makeRegenState, addEcoTech, catalogByCategory, avgSaving } from '@core/lib/regen'
import { makeVecinalState, raisePropuesta, castCommit, openReveal, revealVote, tally } from '@core/lib/vecinal'

describe('SovereignCredit (Urbanika DeFi IRL)', () => {
  it('attestation pondera el score con outlier removal', () => {
    let st = makeSovereignCreditState()
    st = addAttestation(st, 'Isaac', 'VecinoA', 'puntual', 0.9)
    st = addAttestation(st, 'Isaac', 'VecinoB', 'aporta', 0.8)
    expect(scoreOf(st, 'Isaac')).toBeGreaterThan(75)
    const before = scoreOf(st, 'Isaac')
    st = addAttestation(st, 'Isaac', 'Troll', 'spam', 0.01) // outlier
    const after = scoreOf(st, 'Isaac')
    // con pocas muestras el outlier atenúa pero no desaparece: debe bajar respecto a 'before'
    expect(after).toBeLessThan(before)
    expect(after).toBeGreaterThan(0)
  })
  it('modo conectado exporta portable', () => {
    let st = makeSovereignCreditState()
    st = addAttestation(st, 'Isaac', 'A', 'x', 0.8)
    st = setMode(st, 'conectado')
    const score = scoreOf(st, 'Isaac')
    const exported = { memberId: 'Isaac', score, portable: st.mode === 'conectado' }
    expect(exported.portable).toBe(true)
  })
})

describe('Regen (Urbanika Nidori + Directorio)', () => {
  it('seed Nidori tiene 10 sistemas y ahorro promedio > 50%', () => {
    const st = makeRegenState()
    expect(st.systems.length).toBe(10)
    expect(avgSaving(st)).toBeGreaterThan(50)
  })
  it('añadir ecotech y catalogar por categoría', () => {
    let st = makeRegenState()
    st = addEcoTech(st, 'Biofiltro', 'Agua', 'Colectivo', 'desc')
    const cat = catalogByCategory(st)
    expect(cat['Agua'].length).toBe(1)
  })
})

describe('Vecinal (Urbanika E5M) commit-reveal', () => {
  it('flujo commit → reveal → tally', () => {
    let st = makeVecinalState()
    st = raisePropuesta(st, 'b-centro', 'Mural')
    const pid = st.propuestas[0].id
    st = castCommit(st, pid, 'Isaac', 'si')
    expect(st.propuestas[0].commits['Isaac']).toBeTruthy()
    st = openReveal(st, pid)
    st = revealVote(st, pid, 'Isaac', 'si')
    const t = tally(st, pid)
    expect(t.si).toBe(1)
    expect(t.approved).toBe(true)
  })
})
