// HSCSG v15 OS — Lógica de Capabilities (CompAI CRM)
import type { CapabilityState, CapabilityKey } from '@core/state/capacidades'

// Toggle de capability. offline-core nunca se puede desactivar (núcleo del nodo).
// Capacities que requieren modo 'conectado' solo se habilitan si el nodo está en ese modo.
export function toggleCapability(
  st: CapabilityState,
  key: CapabilityKey,
  nodeMode: 'postmonetario' | 'conectado',
): CapabilityState {
  if (key === 'offline-core') return st // inmutable
  return {
    ...st,
    caps: st.caps.map((c) => {
      if (c.key !== key) return c
      const next = !c.enabled
      // no permitir activar capability de modo 'conectado' si el nodo está postmonetario
      if (next && c.requiredMode === 'conectado' && nodeMode === 'postmonetario') return c
      return { ...c, enabled: next }
    }),
  }
}

// Resumen de estado del nodo: jardín cerrado vs conectado.
export function nodePerimeter(st: CapabilityState): {
  externalActive: number
  closed: boolean
  activeCaps: string[]
} {
  const active = st.caps.filter((c) => c.enabled && c.key !== 'offline-core')
  return {
    externalActive: active.length,
    closed: active.length === 0,
    activeCaps: active.map((c) => c.label),
  }
}
