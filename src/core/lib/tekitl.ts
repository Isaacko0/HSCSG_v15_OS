// HSCSG v15 OS — Lógica del módulo Tekitl (asimilado de Baruch4413/tekitl)
// Proyectos colaborativos + moneda social (coins) + talentos/portafolio. Sin Laravel/MySQL/Inertia.

import type {
  TekitlProject, TekitlRole, TekitlVolunteer,
  TekitlCoin, TekitlTimelineEvent, TekitlTalent, ProjectStage
} from '@core/state/tekitl'

const uid = () => Math.random().toString(36).slice(2, 10)
const now = () => Date.now()

// FSM válida: planning → execution → completed|aborted
const VALID_TRANSITIONS: Record<ProjectStage, ProjectStage[]> = {
  planning: ['execution', 'aborted'],
  execution: ['completed', 'aborted'],
  completed: [],
  aborted: [],
}

export function canTransition(from: ProjectStage, to: ProjectStage): boolean {
  return VALID_TRANSITIONS[from]?.includes(to) ?? false
}

export function createProject(title: string, goal: string, ownerId: string, coinsGoal = 1000): TekitlProject {
  return { id: uid(), title, goal, stage: 'planning', ownerId, coinsReceived: 0, coinsGoal, createdAt: now() }
}

export function transitionStage(proj: TekitlProject, to: ProjectStage): { ok: boolean; project?: TekitlProject; event?: TekitlTimelineEvent } {
  if (!canTransition(proj.stage, to)) return { ok: false }
  const p = { ...proj, stage: to }
  const e: TekitlTimelineEvent = { id: uid(), projectId: p.id, type: 'stage_change', actorId: p.ownerId, payload: { from: proj.stage, to }, ts: now() }
  return { ok: true, project: p, event: e }
}

export function addRole(projectId: string, occupation: string, hoursEstimated: number): TekitlRole {
  return { id: uid(), projectId, occupation, hoursEstimated, volunteers: [] }
}

export function applyToRole(volunteers: TekitlVolunteer[], roleId: string, userId: string): TekitlVolunteer | null {
  if (volunteers.some(v => v.roleId === roleId && v.userId === userId && v.status !== 'bailed')) return null
  return { id: uid(), userId, roleId, status: 'applied', hoursLogged: 0 }
}

export function acceptVolunteer(v: TekitlVolunteer): TekitlVolunteer {
  return { ...v, status: 'active' }
}

export function logHours(v: TekitlVolunteer, hours: number): TekitlVolunteer {
  return { ...v, hoursLogged: v.hoursLogged + hours }
}

export function completeVolunteer(v: TekitlVolunteer): TekitlVolunteer {
  return { ...v, status: 'completed' }
}

export function mintCoins(projectId: string, fromUserId: string, toUserId: string, amount: number): TekitlCoin {
  return { id: uid(), projectId, fromUserId, toUserId, amount, reason: 'potenciar', ts: now() }
}

export function getCoinsBalance(coins: TekitlCoin[], userId: string): number {
  return coins.filter(c => c.toUserId === userId).reduce((a, c) => a + c.amount, 0)
}

export function getProjectCoins(coins: TekitlCoin[], projectId: string): number {
  return coins.filter(c => c.projectId === projectId).reduce((a, c) => a + c.amount, 0)
}

export function appendTimeline(event: Omit<TekitlTimelineEvent, 'id' | 'ts'>): TekitlTimelineEvent {
  return { ...event, id: uid(), ts: now() }
}

export function declareTalent(userId: string, occupation: string, confidence: number, yearsExp: number): TekitlTalent {
  return { id: uid(), userId, occupation, confidence: Math.max(1, Math.min(5, confidence)), yearsExp }
}

export function getPortfolio(
  projects: TekitlProject[],
  roles: TekitlRole[],
  volunteers: TekitlVolunteer[],
  userId: string
): { owned: TekitlProject[]; volunteered: TekitlProject[]; completed: TekitlProject[] } {
  const owned = projects.filter(p => p.ownerId === userId)
  const myVolunteerIds = volunteers.filter(v => v.userId === userId && v.status === 'completed').map(v => v.roleId)
  const myRoleProjects = roles.filter(r => myVolunteerIds.includes(r.id)).map(r => r.projectId)
  const volunteered = projects.filter(p => myRoleProjects.includes(p.id))
  const completed = projects.filter(p => p.stage === 'completed' && (p.ownerId === userId || myRoleProjects.includes(p.id)))
  return { owned, volunteered, completed }
}