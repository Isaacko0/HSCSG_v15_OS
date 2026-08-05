// HSCSG v15 OS — Tipos del módulo Solarpunk (asimilado de lizTheDeveloper + Isaacko0)
// Economía del don offline-first + ValueFlows + Web of Trust. Post/monetario.

export type ExchangeMedium = 'don' | 'znu'

export interface Offer {
  id: string
  resource: string // p.ej. '20kg tomate', 'taladro', '4h cuidado'
  kind: 'bien' | 'servicio' | 'tiempo'
  from: string // member id
  createdAt: number
}

export interface Need {
  id: string
  resource: string
  kind: 'bien' | 'servicio' | 'tiempo'
  by: string // member id
  createdAt: number
}

export interface Exchange {
  id: string
  offerId: string
  needId: string
  medium: ExchangeMedium
  znuAmount?: number
  ts: number
}

export interface Vouch {
  id: string
  from: string // member id
  to: string // member id
  weight: number // 0..1
  ts: number
}

export interface MeshStatus {
  online: boolean
  peers: number
  lastSync: number | null
}

export interface SanctuaryEvent {
  id: string
  reason: string
  activatedAt: number
  by: string
}

export interface SolarpunkState {
  offers: Offer[]
  needs: Need[]
  exchanges: Exchange[]
  vouches: Vouch[]
  mesh: MeshStatus
  sanctuary: SanctuaryEvent[]
}
