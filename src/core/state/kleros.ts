// Kleros / Proof-of-Humanity — Justicia como servicio + Identidad soberana (offline-first)
export type DisputeStatus = 'abierta' | 'en_juicio' | 'resuelta' | 'apelada'
export type JurorVerdict = 'a_favor' | 'en_contra' | 'abstención'

// Evidence Model (CompAI CRM): cada evidencia lleva kind + band calculado.
export type EvidenceKind =
  | 'profile.email-match'
  | 'linkedin.employer-and-name'
  | 'crm.thread-reply'
  | 'crm.signature-block'
  | 'github.account-identity'
  | 'crm.meeting-attendance'
  | 'aut.observation'
  | 'cds.consensus'
  | 'web.cited-claim'
  | 'handle.name-form'
  | 'search.cites-profile'
  | 'employer-only'
  | 'contradiction'

export type FactBand = 'VERIFIED' | 'PROBABLE' | 'POSSIBLE' | null

export interface EvidenceRecord {
  id: string
  disputeId: string
  author: string
  text: string
  ts: number
  // NUEVO (Evidence Model): kind + band calculado al adjuntar
  kind?: EvidenceKind
  band?: FactBand
  score?: number
  detail?: string // por qué se clasificó así (rationale)
  sourceUrl?: string
}

export interface Juror {
  id: string
  name: string
  // Reputación de jurado (penalizada si vota con minoría)
  reputation: number
  // true si ya fue sorteado en la disputa activa
  seated: boolean
}

export interface Dispute {
  id: string
  title: string
  description: string
  status: DisputeStatus
  openedBy: string
  openedAt: number
  evidence: EvidenceRecord[]
  // votos: jurorId -> veredicto
  votes: Record<string, JurorVerdict>
  // decisión final (texto RAO)
  resolution: string | null
  appealed: boolean
}

export interface KlerosState {
  jurors: Juror[]
  disputes: Dispute[]
  // Registro de identidad soberana (Proof of Humanity): humano -> atestado por N miembros
  identities: { id: string; name: string; attestedBy: string[]; registeredAt: number }[]
}
