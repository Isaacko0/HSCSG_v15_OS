// Colony (JoinColony) — lógica pura de dominios/pots (sin infra EVM).
import type { ColonyState, DomainNode, DomainKind } from '@core/state/colony'

const uid = () => Math.random().toString(36).slice(2, 9)

// Catálogo fijo (NO va al store persistido — ver Pitfalls §datos estáticos)
export const DOMAIN_KINDS: { key: DomainKind; label: string }[] = [
  { key: 'root', label: 'Raíz (Nodo)' },
  { key: 'célula', label: 'Célula (Life Radius)' },
  { key: 'proyecto', label: 'Proyecto' },
  { key: 'fondo', label: 'Fondo común' },
]

export function makeColonyState(): ColonyState {
  const root: DomainNode = {
    id: 'root',
    name: 'Nodo Cosateca',
    kind: 'root',
    parentId: null,
    reputation: 0,
    pot: 0,
    createdAt: Date.now(),
  }
  return { domains: [root], transfers: [] }
}

// Crea un dominio hijo (célula/proyecto/fondo) bajo un padre
export function addDomain(
  st: ColonyState,
  input: { name: string; kind: DomainKind; parentId: string },
): ColonyState {
  const node: DomainNode = {
    id: uid(),
    name: input.name,
    kind: input.kind,
    parentId: input.parentId,
    reputation: 0,
    pot: 0,
    createdAt: Date.now(),
  }
  return { ...st, domains: [...st.domains, node] }
}

// Suma reputación por contribución verificada (AUT×CDS) a un dominio
export function addReputation(st: ColonyState, id: string, amount: number): ColonyState {
  return {
    ...st,
    domains: st.domains.map((d) => (d.id === id ? { ...d, reputation: d.reputation + amount } : d)),
  }
}

// Mueve fondos (pot) entre dominios por gobernanza CDS (Colony funding)
export function movePot(
  st: ColonyState,
  fromId: string,
  toId: string,
  amount: number,
  by: string,
): ColonyState {
  const from = st.domains.find((d) => d.id === fromId)
  const to = st.domains.find((d) => d.id === toId)
  if (!from || !to || from.pot < amount) return st
  return {
    ...st,
    domains: st.domains.map((d) => {
      if (d.id === fromId) return { ...d, pot: d.pot - amount }
      if (d.id === toId) return { ...d, pot: d.pot + amount }
      return d
    }),
    transfers: [...st.transfers, { id: uid(), fromId, toId, amount, by, ts: Date.now() }],
  }
}

// Devuelve el árbol de dominios como lista jerárquica para render
export function domainChildren(st: ColonyState, parentId: string | null): DomainNode[] {
  return st.domains.filter((d) => d.parentId === parentId)
}
