// HSCSG v15 OS — Lógica del módulo Life (asimilado de GuiFV/life)
import type { LifeState, Goal, GoalType, Effort, Area } from '@core/state/life'

// Matriz Important x Urgent (del modelo Django: matrix = important * urgent)
export function matrixCalculation(g: Pick<Goal, 'important' | 'urgent'>): number {
  return g.important * g.urgent
}

export function addGoal(
  st: LifeState,
  input: { name: string; description?: string; type: GoalType; effort: Effort; area: Area; important: number; urgent: number; znu?: number; start?: string; end?: string },
): LifeState {
  const goal: Goal = {
    id: `g_${Date.now()}`,
    name: input.name,
    description: input.description,
    type: input.type,
    effort: input.effort,
    area: input.area,
    important: input.important,
    urgent: input.urgent,
    znu: input.znu,
    start: input.start,
    end: input.end,
    next: false,
    completed: false,
    createdAt: new Date().toISOString(),
  }
  return { ...st, goals: [goal, ...st.goals] }
}

export function toggleNext(st: LifeState, id: string): LifeState {
  return { ...st, goals: st.goals.map((g) => (g.id === id ? { ...g, next: !g.next } : g)) }
}

export function toggleCompleted(st: LifeState, id: string): LifeState {
  return { ...st, goals: st.goals.map((g) => (g.id === id ? { ...g, completed: !g.completed } : g)) }
}

export function removeGoal(st: LifeState, id: string): LifeState {
  return { ...st, goals: st.goals.filter((g) => g.id !== id) }
}

export function setNotes(st: LifeState, notes: string): LifeState {
  return { ...st, notes }
}

export function znuProjected(st: LifeState): number {
  return st.goals.filter((g) => !g.completed).reduce((s, g) => s + (g.znu ?? 0), 0)
}

export function makeLifeState(): LifeState {
  return {
    goals: [
      {
        id: 'g_seed1',
        name: 'Visitar el Delta Center',
        description: 'Conocer la biblioteca de cosas y el FabLab del nodo.',
        type: 'trip',
        effort: 'lo',
        area: 'pe',
        important: 7,
        urgent: 3,
        znu: 0,
        next: true,
        completed: false,
        createdAt: new Date().toISOString(),
      },
      {
        id: 'g_seed2',
        name: 'Sembrar huerta comunitaria',
        description: 'Proyecto del pilar Comida (Soberanía).',
        type: 'project',
        effort: 'hi',
        area: 'pe',
        important: 8,
        urgent: 5,
        znu: 120,
        next: false,
        completed: false,
        createdAt: new Date().toISOString(),
      },
    ],
    notes: 'Notas del nodo Cosateca — privadas y locales.',
  }
}
