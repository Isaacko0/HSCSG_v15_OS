// Aprendizaje por retos (iambrainstorming: interactive-five, coding_blog, education_system).
// El saber se aprende haciendo (retos), no leyendo pasivamente. Isomorfo a Bounty de Gaia + CaaS-BM.

export interface LearningChallenge {
  id: string
  title: string
  topic: string
  /** recompensa ZNU al completar */
  znuReward: number
  done: boolean
}

export interface KnowledgeEntry {
  id: string
  title: string
  source: string // 'coding_blog' | 'interactive_five' | 'observador'
  url?: string
}

export interface LearningState {
  challenges: LearningChallenge[]
  knowledge: KnowledgeEntry[]
  /** UBI ligado a thriving: quien completa retos desbloquea acceso */
  thrivingScore: number
}

export function makeLearningState(): LearningState {
  return {
    challenges: [
      { id: 'c1', title: 'Lee y explica el paper de Schelling games', topic: 'economía', znuReward: 50, done: false },
      { id: 'c2', title: 'Implementa un contrato de conviction voting', topic: 'código', znuReward: 120, done: false },
      { id: 'c3', title: 'Mapa de un círculo Dunbar en tu nodo', topic: 'gobernanza', znuReward: 80, done: false },
    ],
    knowledge: [
      { id: 'k1', title: 'Business Model for Lectures (tie-ups internacionales)', source: 'coding_blog' },
      { id: 'k2', title: 'Interactive learning by doing', source: 'interactive_five' },
      { id: 'k3', title: 'Opinionated Observer: pensamiento crítico', source: 'observador' },
    ],
    thrivingScore: 0,
  }
}

export function completeChallenge(st: LearningState, id: string): LearningState {
  const challenges = st.challenges.map((c) =>
    c.id === id ? { ...c, done: true } : c,
  )
  const reward = st.challenges.find((c) => c.id === id)?.znuReward ?? 0
  return { ...st, challenges, thrivingScore: st.thrivingScore + reward }
}

export function addChallenge(st: LearningState, title: string, topic: string, znuReward: number): LearningState {
  return {
    ...st,
    challenges: [...st.challenges, { id: `c${Date.now()}`, title, topic, znuReward, done: false }],
  }
}

/** progreso 0-100 */
export function learningProgress(st: LearningState): number {
  if (st.challenges.length === 0) return 0
  const done = st.challenges.filter((c) => c.done).length
  return Math.round((done / st.challenges.length) * 100)
}
