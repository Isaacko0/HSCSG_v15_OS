import { describe, it, expect } from 'vitest'
import { toggleCapability, nodePerimeter } from '@core/lib/capacidades'
import { makeCapabilityState } from '@core/state/capacidades'

describe('toggleCapability (CompAI CRM)', () => {
  it('offline-core es inmutable', () => {
    const st = makeCapabilityState()
    const next = toggleCapability(st, 'offline-core', 'postmonetario')
    expect(next.caps.find((c) => c.key === 'offline-core')!.enabled).toBe(true)
  })

  it('activa capability en modo conectado', () => {
    const st = makeCapabilityState()
    const next = toggleCapability(st, 'usd-refi', 'conectado')
    expect(next.caps.find((c) => c.key === 'usd-refi')!.enabled).toBe(true)
  })

  it('bloquea capability de modo conectado en postmonetario', () => {
    const st = makeCapabilityState()
    const next = toggleCapability(st, 'usd-refi', 'postmonetario')
    expect(next.caps.find((c) => c.key === 'usd-refi')!.enabled).toBe(false)
  })

  it('desactiva capability ya activa', () => {
    let st = makeCapabilityState()
    st = toggleCapability(st, 'external-mesh', 'postmonetario') // any-mode → ok
    expect(st.caps.find((c) => c.key === 'external-mesh')!.enabled).toBe(true)
    st = toggleCapability(st, 'external-mesh', 'postmonetario')
    expect(st.caps.find((c) => c.key === 'external-mesh')!.enabled).toBe(false)
  })
})

describe('nodePerimeter', () => {
  it('cerrado por defecto (solo offline-core)', () => {
    const st = makeCapabilityState()
    const p = nodePerimeter(st)
    expect(p.closed).toBe(true)
    expect(p.externalActive).toBe(0)
  })

  it('refleja capabilities externas activas', () => {
    let st = makeCapabilityState()
    st = toggleCapability(st, 'external-mesh', 'postmonetario')
    st = toggleCapability(st, 'usd-refi', 'conectado')
    const p = nodePerimeter(st)
    expect(p.closed).toBe(false)
    expect(p.externalActive).toBe(2)
    expect(p.activeCaps).toContain('Oráculo ReFi (USDC)')
  })
})
