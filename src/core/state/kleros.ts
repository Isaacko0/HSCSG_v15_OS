// Kleros / Proof-of-Humanity — Justicia como servicio + Identidad soberana (offline-first)
export type DisputeStatus = 'abierta' | 'en_juicio' | 'resuelta' | 'apelada'
export type JurorVerdict = 'a_favor' | 'en_contra' | 'abstención'

export interface EvidenceRecord {
  id: string
  disputeId: string
  author: string
  text: string
  ts: number
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
