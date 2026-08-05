// HSCSG v15 OS — Tipos del módulo Tekitl (asimilado de Baruch4413/tekitl)
// Proyectos colaborativos + moneda social (coins) + talentos/portafolio. Sin Laravel/MySQL/Inertia.

export type ProjectStage = 'planning' | 'execution' | 'completed' | 'aborted'

export interface TekitlProject {
  id: string
  title: string
  goal: string
  stage: ProjectStage
  ownerId: string
  coinsReceived: number
  coinsGoal: number
  createdAt: number
}

export interface TekitlRole {
  id: string
  projectId: string
  occupation: string
  hoursEstimated: number
  volunteers: TekitlVolunteer[]
}

export interface TekitlVolunteer {
  id: string
  userId: string
  roleId: string
  status: 'applied' | 'active' | 'completed' | 'bailed'
  hoursLogged: number
}

export interface TekitlCoin {
  id: string
  projectId: string
  fromUserId: string
  toUserId: string
  amount: number
  reason: 'potenciar'
  ts: number
}

export type TimelineType =
  | 'stage_change'
  | 'role_created'
  | 'volunteer_joined'
  | 'volunteer_completed'
  | 'volunteer_bailed'
  | 'coins_minted'
  | 'milestone'
  | 'note'

export interface TekitlTimelineEvent {
  id: string
  projectId: string
  type: TimelineType
  actorId: string
  payload: Record<string, unknown>
  ts: number
}

export interface TekitlTalent {
  id: string
  userId: string
  occupation: string
  confidence: number // 1-5
  yearsExp: number
}

export interface TekitlState {
  projects: TekitlProject[]
  roles: TekitlRole[]
  volunteers: TekitlVolunteer[]
  coins: TekitlCoin[]
  timeline: TekitlTimelineEvent[]
  talents: TekitlTalent[]
}