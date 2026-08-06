// HSCSG v15 OS — Tipos del módulo Life (asimilado de GuiFV/life, Django)
// Organizador de vida personal del nodo. "cost" reinterpretado en ZNU (postmonetario).

export type GoalType = 'trip' | 'project' | 'buy' | 'do'
export type Effort = 'hi' | 'lo'
export type Area = 'pe' | 'pr'

export interface Goal {
  id: string
  name: string
  description?: string
  type: GoalType
  effort: Effort
  area: Area
  important: number // 1-9
  urgent: number // 1-9
  znu?: number // contribución ZNU proyectada (era "cost" en dinero)
  start?: string
  end?: string
  next: boolean
  completed: boolean
  createdAt: string
}

export interface LifeState {
  goals: Goal[]
  notes: string
}

export const GOAL_TYPES: { key: GoalType; label: string }[] = [
  { key: 'trip', label: 'Viaje' },
  { key: 'project', label: 'Proyecto' },
  { key: 'buy', label: 'Comprar' },
  { key: 'do', label: 'Hacer' },
]
