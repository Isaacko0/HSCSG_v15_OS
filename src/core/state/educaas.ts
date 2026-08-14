// HSCSG v15 OS — Educaas: monetización educativa ANfibia (Didacta billing/subscriptions asimilado)
// Principio de diseño HSCSG: NO extirpar el dinero de la fuente; hacer módulo ANFIBIO.
// Misma lógica opera en modo 'postmonetario' (ZNU/tiempo-crédito, default offline) o
// 'conectado' (EUR/USDC vía priceParity + oráculo). El render decide la etiqueta; la lógica es agnóstica.
export type EducaasMode = 'postmonetario' | 'conectado'

export interface SubscriptionPlan {
  id: string
  name: string
  months: number // 1-12 (equiv. Didacta membresías)
  /** precio en unidad nativa del modo activo */
  priceNative: number
  currency: 'ZNU' | 'EUR' | 'USDC'
}

export interface EducaasState {
  mode: EducaasMode
  plans: SubscriptionPlan[]
  /** suscripciones activas por miembro (equiv. subscriptions de Didacta) */
  active: Record<string, string> // memberId -> planId
}

export function makeEducaasState(): EducaasState {
  return {
    mode: 'postmonetario',
    plans: [
      { id: 'p1', name: 'Trimestral', months: 3, priceNative: 300, currency: 'ZNU' },
      { id: 'p2', name: 'Anual', months: 12, priceNative: 1000, currency: 'ZNU' },
    ],
    active: {},
  }
}

/** cambia modo; al pasar a 'conectado' convierte precios ZNU→EUR/USDC vía priceParity (oráculo local) */
export function setEducaasMode(st: EducaasState, mode: EducaasMode, parityZnuToEur = 0.01): EducaasState {
  if (mode === st.mode) return st
  const plans = st.plans.map((p) => {
    if (mode === 'conectado') {
      // ZNU → EUR (oráculo priceParity). USDC 1:1 con EUR para simplificar.
      const eur = Number((p.priceNative * parityZnuToEur).toFixed(2))
      return { ...p, priceNative: eur, currency: 'EUR' as const }
    }
    // conectado → postmonetario: revertir EUR→ZNU
    const znu = Number((p.priceNative / parityZnuToEur).toFixed(0))
    return { ...p, priceNative: znu, currency: 'ZNU' as const }
  })
  return { ...st, mode, plans }
}

export function subscribe(st: EducaasState, memberId: string, planId: string): EducaasState {
  if (!st.plans.some((p) => p.id === planId)) return st
  return { ...st, active: { ...st.active, [memberId]: planId } }
}

export function cancelSubscription(st: EducaasState, memberId: string): EducaasState {
  const next = { ...st.active }
  delete next[memberId]
  return { ...st, active: next }
}
