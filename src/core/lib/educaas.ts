// HSCSG v15 OS — Lógica Educaas (anfibia)
import type { EducaasState } from '@core/state/educaas'

export { makeEducaasState } from '@core/state/educaas'
export { setEducaasMode, subscribe, cancelSubscription } from '@core/state/educaas'

/** label que el render usa según modo (anfibio): ZNU offline vs EUR/USDC conectado */
export function priceLabel(st: EducaasState, planId: string): string {
  const p = st.plans.find((x) => x.id === planId)
  if (!p) return '—'
  return `${p.priceNative} ${p.currency} / ${p.months} meses`
}

export function isActive(st: EducaasState, memberId: string): boolean {
  return Boolean(st.active[memberId])
}
