// HSCSG v15 OS — Lógica Regen (Urbanika Directorio_Regen + Nidori asimilado)
import type { RegenState, EcoTech } from '@core/state/regen'
import { makeRegenState } from '@core/state/regen'

const uid = () => Math.random().toString(36).slice(2, 10)

export { makeRegenState }

export function addEcoTech(
  st: RegenState, name: string, category: string, provider: string, description: string,
): RegenState {
  const e: EcoTech = { id: uid(), name, category, provider, description }
  return { ...st, ecotech: [...st.ecotech, e] }
}

export function catalogByCategory(st: RegenState): Record<string, EcoTech[]> {
  return st.ecotech.reduce((acc, e) => {
    ;(acc[e.category] ||= []).push(e)
    return acc
  }, {} as Record<string, EcoTech[]>)
}

export function avgSaving(st: RegenState): number {
  if (!st.systems.length) return 0
  return Number((st.systems.reduce((s, x) => s + x.savingPct, 0) / st.systems.length).toFixed(1))
}
