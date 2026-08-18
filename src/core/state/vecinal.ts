// HSCSG v15 OS — Vecinal: gobernanza vecinal E5M (Gobernanza_Vecinal_E5M + Web3GovernanceForum asimilado)
// Reusa patrón commit-reveal de Symbiosky (hash FNV-1a offline). Barrio = dominio de delegación.
export type VecinalPhase = 'commit' | 'reveal' | 'closed'

export interface Barrio {
  id: string
  name: string
  delegates: string[]
}

export interface PropuestaVecinal {
  id: string
  barrioId: string
  title: string
  phase: VecinalPhase
  commits: Record<string, string> // voter -> hash
  votes: Record<string, 'si' | 'no'>
}

export interface VecinalState {
  barrios: Barrio[]
  propuestas: PropuestaVecinal[]
}

export function makeVecinalState(): VecinalState {
  return {
    barrios: [{ id: 'b-centro', name: 'Barrio Centro', delegates: [] }],
    propuestas: [],
  }
}

function hash(s: string): string {
  let h = 2166136261
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619) }
  return (h >>> 0).toString(16)
}

export function raisePropuesta(st: VecinalState, barrioId: string, title: string): VecinalState {
  const p: PropuestaVecinal = { id: 'pv' + Date.now().toString(36), barrioId, title, phase: 'commit', commits: {}, votes: {} }
  return { ...st, propuestas: [...st.propuestas, p] }
}

export function castCommit(st: VecinalState, propId: string, voter: string, choice: 'si' | 'no'): VecinalState {
  return {
    ...st,
    propuestas: st.propuestas.map((p) =>
      p.id === propId && p.phase === 'commit' ? { ...p, commits: { ...p.commits, [voter]: hash(voter + choice) } } : p,
    ),
  }
}

export function openReveal(st: VecinalState, propId: string): VecinalState {
  return {
    ...st,
    propuestas: st.propuestas.map((p) => (p.id === propId && p.phase === 'commit' ? { ...p, phase: 'reveal' } : p)),
  }
}

export function revealVote(st: VecinalState, propId: string, voter: string, choice: 'si' | 'no'): VecinalState {
  return {
    ...st,
    propuestas: st.propuestas.map((p) =>
      p.id === propId && p.phase === 'reveal'
        ? { ...p, votes: { ...p.votes, [voter]: choice }, phase: 'closed' }
        : p,
    ),
  }
}

export function tally(st: VecinalState, propId: string): { si: number; no: number; approved: boolean } {
  const p = st.propuestas.find((x) => x.id === propId)
  if (!p) return { si: 0, no: 0, approved: false }
  const vals = Object.values(p.votes)
  const si = vals.filter((v) => v === 'si').length
  const no = vals.filter((v) => v === 'no').length
  return { si, no, approved: si > no }
}
