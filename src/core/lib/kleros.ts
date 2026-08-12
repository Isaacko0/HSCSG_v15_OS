// Kleros (justicia) — lógica pura: jurados, disputas, evidencia, penalización, identidad.
import type { KlerosState, Dispute, EvidenceRecord, JurorVerdict, Juror } from '@core/state/kleros'
import { scoreEvidence, type EvidenceKind } from '@core/lib/evidence'

const uid = () => Math.random().toString(36).slice(2, 9)

// Catálogo fijo de estados/veredictos (NO store persistido)
export const DISPUTE_STATUSES = ['abierta', 'en_juicio', 'resuelta', 'apelada'] as const
export const VERDICTS: { key: JurorVerdict; label: string }[] = [
  { key: 'a_favor', label: 'A favor' },
  { key: 'en_contra', label: 'En contra' },
  { key: 'abstención', label: 'Abstención' },
]

export function makeKlerosState(): KlerosState {
  const seedJuror: Juror = {
    id: 'j1',
    name: 'Jurado Rotativo',
    reputation: 100,
    seated: false,
  }
  return { jurors: [seedJuror], disputes: [], identities: [] }
}

export function seatJuror(st: KlerosState, name: string): KlerosState {
  const j: Juror = { id: uid(), name, reputation: 100, seated: false }
  return { ...st, jurors: [...st.jurors, j] }
}

export function openDispute(
  st: KlerosState,
  input: { title: string; description: string; openedBy: string },
): KlerosState {
  const d: Dispute = {
    id: uid(),
    title: input.title,
    description: input.description,
    status: 'abierta',
    openedBy: input.openedBy,
    openedAt: Date.now(),
    evidence: [],
    votes: {},
    resolution: null,
    appealed: false,
  }
  return { ...st, disputes: [...st.disputes, d] }
}

export function addEvidence(
  st: KlerosState,
  disputeId: string,
  author: string,
  text: string,
  kind?: EvidenceKind,
  sourceUrl?: string,
): KlerosState {
  // Evidence Model (CompAI CRM): calcular band automáticamente si se da kind.
  let band: EvidenceRecord['band'] = undefined
  let score: number | undefined
  let detail: string | undefined
  if (kind) {
    const scored = scoreEvidence([{ kind, detail: text, sourceUrl }])
    band = scored.band
    score = Number(scored.score.toFixed(2))
    detail = scored.rationale
  }
  const ev: EvidenceRecord = { id: uid(), disputeId, author, text, ts: Date.now(), kind, band, score, detail, sourceUrl }
  return {
    ...st,
    disputes: st.disputes.map((d) =>
      d.id === disputeId ? { ...d, evidence: [...d.evidence, ev], status: 'en_juicio' } : d,
    ),
  }
}

// Voto de jurado. Si vota con la minoría (tras cerrar), su reputación DECAE (reputationDecay).
export function castVote(st: KlerosState, disputeId: string, jurorId: string, verdict: JurorVerdict): KlerosState {
  return {
    ...st,
    disputes: st.disputes.map((d) =>
      d.id === disputeId ? { ...d, votes: { ...d.votes, [jurorId]: verdict } } : d,
    ),
  }
}

// Resuelve la dispute por mayoría simple; penaliza a quienes votaron en minoría (reputationDecay)
export function resolveDispute(st: KlerosState, disputeId: string, resolution: string): KlerosState {
  const d = st.disputes.find((x) => x.id === disputeId)
  if (!d) return st
  const votes = Object.values(d.votes)
  if (votes.length === 0) return st
  const tally = { a_favor: 0, en_contra: 0, abstención: 0 }
  votes.forEach((v) => (tally[v] += 1))
  const winner: JurorVerdict = tally.a_favor >= tally.en_contra ? 'a_favor' : 'en_contra'

  // Penalizar jurados en minoría (reputationDecay por desacuerdo)
  const jurorsDecayed = st.jurors.map((j) => {
    const v = d.votes[j.id]
    if (v && v !== 'abstención' && v !== winner) {
      return { ...j, reputation: Math.max(0, j.reputation - 10) }
    }
    return j
  })

  return {
    ...st,
    jurors: jurorsDecayed,
    disputes: st.disputes.map((x) =>
      x.id === disputeId ? { ...x, status: 'resuelta', resolution } : x,
    ),
  }
}

export function appealDispute(st: KlerosState, disputeId: string): KlerosState {
  return {
    ...st,
    disputes: st.disputes.map((d) =>
      d.id === disputeId && d.status === 'resuelta'
        ? { ...d, status: 'apelada', appealed: true }
        : d,
    ),
  }
}

// Registro soberano de identidad (Proof of Humanity): 1 humano = 1 nodo vía atestación
export function attestIdentity(st: KlerosState, name: string, attestedBy: string): KlerosState {
  const existing = st.identities.find((i) => i.name === name)
  if (existing) {
    if (existing.attestedBy.includes(attestedBy)) return st
    return {
      ...st,
      identities: st.identities.map((i) =>
        i.name === name ? { ...i, attestedBy: [...i.attestedBy, attestedBy] } : i,
      ),
    }
  }
  return {
    ...st,
    identities: [...st.identities, { id: uid(), name, attestedBy: [attestedBy], registeredAt: Date.now() }],
  }
}

// ============ JURADO COMO RATIONAL PRICE DISCOVERER (Symbiosky + iambrainstorming) ============
// Isomorfo a "Score Schelling game" (Amiya): los jurados estiman el precio/utilidad
// de un bien por CONSENSO (no oferta/demanda). Quien acierta la mediana recibe bonus;
// quien se desvía pierde stake (reputationDecay). Esto es exactamente el mecanismo
// de "discovery of positive externality through score Schelling game".

export interface PriceEstimate {
  juror: string
  value: number // utilidad/precio estimado
  stake: number
}

/** mediana de las estimaciones (resistente a manipulación) */
export function medianEstimate(estimates: PriceEstimate[]): number {
  if (estimates.length === 0) return 0
  const vals = estimates.map((e) => e.value).sort((a, b) => a - b)
  const mid = Math.floor(vals.length / 2)
  return vals.length % 2 ? vals[mid] : (vals[mid - 1] + vals[mid]) / 2
}

/**
 * Bono para quienes aciertan cerca de la mediana (dentro de tol%).
 * Penalización (reputationDecay) para los disidentes lejanos.
 */
export function priceDiscovery(
  estimates: PriceEstimate[],
  tolerancePct = 10,
): { median: number; rewarded: string[]; penalized: string[] } {
  const median = medianEstimate(estimates)
  const rewarded: string[] = []
  const penalized: string[] = []
  for (const e of estimates) {
    const dev = median === 0 ? 0 : Math.abs(e.value - median) / median * 100
    if (dev <= tolerancePct) rewarded.push(e.juror)
    else penalized.push(e.juror)
  }
  return { median, rewarded, penalized }
}

