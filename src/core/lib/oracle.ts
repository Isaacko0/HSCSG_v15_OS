// Oráculo de hechos (Realitio / Kleros) — resuelve disputas de hecho objetivo.
// Asimilado de Kleros (ya en el vaso). Los jurados votan el estado del mundo;
// quien acierta con la mayoría recibe el bono, quien disiente paga la penalización.

export type OracleOutcome = 'a' | 'b' | 'tie' | 'pending'

export interface OracleQuery {
  id: string
  question: string
  /** opciones: a / b (o más) */
  outcomes: string[]
  /** votos: juror -> outcome */
  votes: Record<string, string>
  /** stakes por juror */
  stakes: Record<string, number>
  resolved: boolean
  finalOutcome?: string
}

export interface OracleState {
  queries: OracleQuery[]
}

export function makeOracleState(): OracleState {
  return { queries: [] }
}

/** crear consulta de hecho */
export function askQuery(
  st: OracleState,
  question: string,
  outcomes: string[],
): OracleState {
  const q: OracleQuery = {
    id: `q_${Date.now()}`,
    question,
    outcomes: outcomes.length ? outcomes : ['Sí', 'No'],
    votes: {},
    stakes: {},
    resolved: false,
  }
  return { ...st, queries: [...st.queries, q] }
}

/** un juror vota un outcome con su stake */
export function castOracleVote(
  st: OracleState,
  queryId: string,
  juror: string,
  outcome: string,
  stake: number,
): OracleState {
  const queries = st.queries.map((q) =>
    q.id === queryId && !q.resolved
      ? { ...q, votes: { ...q.votes, [juror]: outcome }, stakes: { ...q.stakes, [juror]: stake } }
      : q,
  )
  return { ...st, queries }
}

/** resolver: outcome mayoritario por stake; penaliza a los disidentes (reputationDecay) */
export function resolveOracle(st: OracleState, queryId: string): {
  state: OracleState
  winner: string | undefined
  dissidents: string[]
} {
  const q = st.queries.find((x) => x.id === queryId)
  if (!q || q.resolved) return { state: st, winner: q?.finalOutcome, dissidents: [] }
  // suma stake por outcome
  const tally: Record<string, number> = {}
  for (const [juror, outcome] of Object.entries(q.votes)) {
    tally[outcome] = (tally[outcome] ?? 0) + (q.stakes[juror] ?? 0)
  }
  let winner: string | undefined
  let best = -1
  for (const [o, s] of Object.entries(tally)) {
    if (s > best) { best = s; winner = o }
  }
  const dissidents = winner
    ? Object.entries(q.votes).filter(([, o]) => o !== winner).map(([j]) => j)
    : []
  const queries = st.queries.map((x) =>
    x.id === queryId ? { ...x, resolved: true, finalOutcome: winner } : x,
  )
  return { state: { ...st, queries }, winner, dissidents }
}

/** proporción de stake a favor del ganador (consenso) */
export function consensusStrength(q: OracleQuery): number {
  if (!q.finalOutcome) return 0
  const total = Object.values(q.stakes).reduce((a, b) => a + b, 0) || 1
  const win = Object.entries(q.votes)
    .filter(([, o]) => o === q.finalOutcome)
    .reduce((a, [j]) => a + (q.stakes[j] ?? 0), 0)
  return Math.round((win / total) * 100)
}
