// Colony (JoinColony) — Gobernanza por dominios + tesorería programable (pots)
// Asimilado de colonyNetwork/colonyJS/colonySDK/colony-gql. Offline-first, sin EVM.

export type DomainKind = 'root' | 'célula' | 'proyecto' | 'fondo'

export interface DomainNode {
  id: string
  name: string
  kind: DomainKind
  parentId: string | null
  // Reputación acumulada en este dominio (por contribución verificada, no tokens)
  reputation: number
  // Pot (tesorería del dominio) en ZNU
  pot: number
  createdAt: number
}

export interface ColonyState {
  domains: DomainNode[]
  // Reparto de fondos entre dominios (CaaS-BM por célula)
  transfers: { id: string; fromId: string; toId: string; amount: number; by: string; ts: number }[]
}
