// HSCSG v15 OS — SovereignCredit: credit score soberano local (DeFi-Adoption-IRL + deCreditScore asimilado)
// Extirpado: smart wallet Candide, Aave credit delegation, contratos DeFi (infra ajena).
// Conservado: attestations verificables, trust score ponderado, gamificación.
// Anfibio: postmonetario (ZNU/crédito local) ↔ conectado (export attestation DeFi vía priceParity).
export interface Attestation {
  id: string
  subject: string // memberId evaluado
  claim: string // ej. "pagó a tiempo", "aportó recurso"
  issuer: string // memberId que emite
  weight: number // 0-1 (definido colectivamente)
  timestamp: number
}

export interface SovereignScore {
  memberId: string
  attestations: Attestation[]
}

export interface SovereignCreditState {
  scores: Record<string, SovereignScore>
  mode: 'postmonetario' | 'conectado'
}

export function makeSovereignCreditState(): SovereignCreditState {
  return { scores: {}, mode: 'postmonetario' }
}

export function scoreOf(state: SovereignCreditState, memberId: string): number {
  const sc = state.scores[memberId]
  if (!sc || sc.attestations.length === 0) return 0
  const ws = sc.attestations.map((a) => a.weight)
  const mean = ws.reduce((s, w) => s + w, 0) / ws.length
  // outlier removal (Score Schelling style): descarta >1 SD
  const sd = Math.sqrt(ws.reduce((s, w) => s + (w - mean) ** 2, 0) / ws.length)
  const kept = ws.filter((w) => Math.abs(w - mean) <= sd)
  const final = kept.length ? kept.reduce((s, w) => s + w, 0) / kept.length : mean
  return Number((final * 100).toFixed(1)) // 0-100
}
