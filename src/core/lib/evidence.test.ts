import { describe, it, expect } from 'vitest'
import { scoreEvidence, bandFor, scoreSchelling } from '@core/lib/evidence'
import type { Evidence } from '@core/lib/evidence'

describe('scoreEvidence (CompAI CRM Evidence Model)', () => {
  it('sin evidencia → band null, score 0', () => {
    const r = scoreEvidence([])
    expect(r.score).toBe(0)
    expect(r.band).toBeNull()
    expect(r.hasPrimary).toBe(false)
  })

  it('primary débil → POSSIBLE (score bajo el piso de PROBABLE)', () => {
    const ev: Evidence[] = [{ kind: 'web.cited-claim', detail: 'fuente web' }]
    const r = scoreEvidence(ev)
    expect(r.score).toBeGreaterThan(0)
    expect(r.hasPrimary).toBe(false)
    expect(r.band).toBe('POSSIBLE')
  })

  it('combinación de débiles sin primary fuerte → PROBABLE', () => {
    const ev: Evidence[] = [
      { kind: 'web.cited-claim', detail: 'fuente web' },
      { kind: 'handle.name-form', detail: 'handle forma de nombre' },
    ]
    const r = scoreEvidence(ev)
    expect(r.hasPrimary).toBe(false)
    expect(r.band).toBe('PROBABLE')
  })

  it('primary fuerte → VERIFIED', () => {
    const ev: Evidence[] = [
      { kind: 'aut.observation', detail: 'nodo observó' },
      { kind: 'cds.consensus', detail: 'el colectivo coincide' },
    ]
    const r = scoreEvidence(ev)
    expect(r.hasPrimary).toBe(true)
    expect(r.band).toBe('VERIFIED')
    expect(r.score).toBeGreaterThanOrEqual(0.85)
  })

  it('contradiction atenúa el score bajo el techo', () => {
    const strong: Evidence[] = [
      { kind: 'aut.observation', detail: 'a' },
      { kind: 'cds.consensus', detail: 'b' },
    ]
    const contradicted: Evidence[] = [
      ...strong,
      { kind: 'contradiction', detail: 'otra fuente discrepa' },
    ]
    const a = scoreEvidence(strong)
    const b = scoreEvidence(contradicted)
    expect(b.score).toBeLessThanOrEqual(0.45)
    expect(b.score).toBeLessThan(a.score)
  })

  it('bandFor respeta pisos y requisito de primary', () => {
    expect(bandFor(0.9, true)).toBe('VERIFIED')
    expect(bandFor(0.9, false)).toBe('PROBABLE')
    expect(bandFor(0.6, false)).toBe('PROBABLE')
    expect(bandFor(0.3, false)).toBe('POSSIBLE')
    expect(bandFor(0.1, false)).toBeNull()
  })
})

describe('scoreSchelling (Shivarthu outlier removal)', () => {
  it('descarta outlier >1 SD y computa mean honesta de 68.27%', () => {
    const values = [0.5, 0.51, 0.52, 0.5, 0.49, 0.99]
    const r = scoreSchelling(values)
    expect(r.removed.length).toBeGreaterThan(0)
    expect(r.kept.length).toBe(values.length - r.removed.length)
    // la media honesta debe estar cerca del cluster bajo, no del outlier
    expect(r.newMean).toBeLessThan(0.7)
    expect(r.winners.length).toBeGreaterThan(0)
  })

  it('sin outliers → removed vacío, newMean ≈ mean', () => {
    const values = [0.5, 0.5, 0.5, 0.5]
    const r = scoreSchelling(values)
    expect(r.removed.length).toBe(0)
    expect(r.newMean).toBeCloseTo(0.5, 2)
  })

  it('vacío → todo cero', () => {
    const r = scoreSchelling([])
    expect(r.mean).toBe(0)
    expect(r.newMean).toBe(0)
    expect(r.winners.length).toBe(0)
  })
})
