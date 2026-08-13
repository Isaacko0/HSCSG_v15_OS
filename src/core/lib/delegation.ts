// HSCSG v15 OS — Lógica de Power Delegation (AuroraGov + Symbiosky)
import type { DelegationState, DelegationEdge, DomainKey } from '@core/state/delegation'

const uid = () => Math.random().toString(36).slice(2, 9)

// Delegar poder en un dominio: from delega su voto de convicción a `to`.
// Si ya existe un edge previo de `from`→domain, se reemplaza (una sola delegación por dominio).
export function delegatePower(
  st: DelegationState,
  from: string,
  to: string,
  domain: DomainKey,
  weight = 1,
): DelegationState {
  if (from === to) return st
  const filtered = st.edges.filter((e) => !(e.from === from && e.domain === domain))
  const edge: DelegationEdge = { id: uid(), from, to, domain, ts: Date.now(), weight }
  return { ...st, edges: [...filtered, edge] }
}

// Revocar delegación de un dominio.
export function revokeDelegation(st: DelegationState, from: string, domain: DomainKey): DelegationState {
  return { ...st, edges: st.edges.filter((e) => !(e.from === from && e.domain === domain)) }
}

// Árbol de delegación: para cada dominio, quién delega a quién (liquid democracy local).
export function delegationTree(st: DelegationState): Record<DomainKey, { from: string; to: string; weight: number }[]> {
  const tree = {} as Record<DomainKey, { from: string; to: string; weight: number }[]>
  for (const e of st.edges) {
    if (!tree[e.domain]) tree[e.domain] = []
    tree[e.domain].push({ from: e.from, to: e.to, weight: e.weight })
  }
  return tree
}

// Peso total delegado a un experto (su influencia agregada por dominio).
export function expertInfluence(st: DelegationState, expert: string): Record<DomainKey, number> {
  const inf = {} as Record<DomainKey, number>
  for (const e of st.edges.filter((x) => x.to === expert)) {
    inf[e.domain] = (inf[e.domain] ?? 0) + e.weight
  }
  return inf
}
