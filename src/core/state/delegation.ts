// HSCSG v15 OS — Tipos de Power Delegation (asimilado de AuroraGov + Symbiosky)
// Árbol de delegación de poder por OU/dominio: quién delegó qué poder a quién.
// Isomorfo a "liquid democracy" local: delego mi voto de convicción en un dominio
// a un experto (no transferible fuera del nodo).

export type DomainKey =
  | 'ALIM' | 'ENER' | 'SALU' | 'HABI' | 'PROD'
  | 'COMU' | 'REDES' | 'FINA' | 'TRANSVERSAL'
  | 'GOV' | 'JUST' | 'CDS'

export interface DelegationEdge {
  id: string
  from: string // delegador (miembro)
  to: string // delegate (experto en el dominio)
  domain: DomainKey
  ts: number
  // pesos de convicción acumulados (Symbiosky): el delegate vota con el lock del delegador
  weight: number
}

export interface DelegationState {
  edges: DelegationEdge[]
  // miembros conocidos del nodo (para el selector)
  members: string[]
}

export function makeDelegationState(members: string[] = ['Isaac Ko', 'Luz', 'Tobías']): DelegationState {
  return { edges: [], members }
}
