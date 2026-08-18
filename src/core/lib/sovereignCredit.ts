// HSCSG v15 OS — Lógica SovereignCredit (Urbanika DeFi-Adoption-IRL asimilado)
import type { SovereignCreditState, Attestation } from '@core/state/sovereignCredit'
import { scoreOf, makeSovereignCreditState } from '@core/state/sovereignCredit'

const uid = () => Math.random().toString(36).slice(2, 10) + Date.now().toString(36)

export { makeSovereignCreditState, scoreOf }

export function addAttestation(
  st: SovereignCreditState, subject: string, issuer: string, claim: string, weight: number,
): SovereignCreditState {
  const a: Attestation = { id: uid(), subject, issuer, claim, weight: Math.max(0, Math.min(1, weight)), timestamp: Date.now() }
  const prev = st.scores[subject] ?? { memberId: subject, attestations: [] }
  return {
    ...st,
    scores: { ...st.scores, [subject]: { ...prev, attestations: [...prev.attestations, a] } },
  }
}

/** exporta el score como attestation portable (modo conectado → DeFi/NEAR) */
export function exportAttestation(st: SovereignCreditState, memberId: string): { memberId: string; score: number; portable: boolean } {
  return { memberId, score: scoreOf(st, memberId), portable: st.mode === 'conectado' }
}

export function setMode(st: SovereignCreditState, mode: 'postmonetario' | 'conectado'): SovereignCreditState {
  return { ...st, mode }
}
