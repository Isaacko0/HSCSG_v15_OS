// Democracia justa DPoS por expertise (iambrainstorming) — isomorfa a CDS de HSCSG.
// "A new fair democracy inspired by Delegated Proof of Stake" (Amiya Tulu, 2019).
// Árbol de departamentos especializados; cada departamento supervisado por reps con expertise.

export interface Department {
  id: string
  name: string
  /** subdepartamentos */
  children: string[]
  /** representante elegido (por expertise) */
  rep: string
  /** votantes que delegaron */
  delegates: number
}

export interface DemocracyState {
  departments: Department[]
  /** votante -> departamento en el que delega */
  delegations: Record<string, string>
}

export function makeDemocracyState(): DemocracyState {
  return {
    departments: [
      { id: 'd1', name: 'Salud', children: ['d1a', 'd1b'], rep: '', delegates: 0 },
      { id: 'd2', name: 'Educación', children: ['d2a', 'd2b', 'd2c'], rep: '', delegates: 0 },
      { id: 'd3', name: 'Infraestructura', children: ['d3a'], rep: '', delegates: 0 },
      { id: 'd4', name: 'Economía', children: ['d4a', 'd4b'], rep: '', delegates: 0 },
      { id: 'd5', name: 'Medio Ambiente', children: ['d5a'], rep: '', delegates: 0 },
    ],
    delegations: {},
  }
}

/** elegir representante de un departamento por expertise */
export function electRep(
  st: DemocracyState,
  deptId: string,
  rep: string,
  voter: string,
): DemocracyState {
  const departments = st.departments.map((d) =>
    d.id === deptId
      ? { ...d, rep, delegates: d.delegates + (st.delegations[voter] === deptId ? 0 : 1) }
      : d,
  )
  const delegations = { ...st.delegations, [voter]: deptId }
  return { ...st, departments, delegations }
}

/** total de delegaciones activas */
export function totalDelegations(st: DemocracyState): number {
  return Object.keys(st.delegations).length
}

/** departamento con más delegaciones (más legitimado) */
export function mostDelegated(st: DemocracyState): Department | null {
  let best: Department | null = null
  for (const d of st.departments) {
    if (!best || d.delegates > best.delegates) best = d
  }
  return best
}
