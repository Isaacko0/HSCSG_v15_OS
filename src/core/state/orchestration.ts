// HSCSG v15 OS — Tipos de Orquestación asimilados de Paperclip (control plane de agentes)
// Mapeo conceptual:
//   Paperclip Agent      → HSCSG Talent como AGENTE operativo (rol, estado, cadena de mando, presupuesto, heartbeat)
//   Paperclip Goal       → Meta de ontogénesis con ancestro (company=Nodo → team=Colectivo → agent=Talent → task=γ-CARMIS)
//   Paperclip Issue/Task → Tarea del Plan 90d como issue con estados y aprobación
//   Paperclip Approval   → Gates MJ (Ley I/II/III) como approval workflow
//   Paperclip Activity   → Audit Log inmutable (cada mutación trazada a actor + Ley)

import type { TalentVector } from '@core/state/types'

export type AgentStatus =
  | 'active' | 'paused' | 'idle' | 'running' | 'error' | 'pending_approval' | 'terminated'

export type AgentRole =
  | 'ceo' | 'cto' | 'cmo' | 'cfo' | 'security' | 'engineer' | 'designer'
  | 'pm' | 'qa' | 'devops' | 'researcher' | 'general'

export const AGENT_ROLE_LABELS: Record<AgentRole, string> = {
  ceo: 'Coordinador Ontogénico',
  cto: 'Arquitecto Técnico',
  cmo: 'Difusión / Revenue Demo',
  cfo: 'Soberanía ZNU',
  security: 'Guardian Ético (Ley III)',
  engineer: 'Maker FABSHIP',
  designer: 'Diseño Regenerativo',
  pm: 'Plan γ-CARMIS',
  qa: 'Verificación Triaxial',
  devops: 'Infraestructura / Microgrid',
  researcher: 'Investigación Material',
  general: 'General',
}

export interface AgentNode {
  id: string
  name: string
  role: AgentRole
  title: string | null
  status: AgentStatus
  reportsTo: string | null // cadena de mando (Oakland: agente padre)
  vector: TalentVector
  budgetZNU: number // presupuesto mensual en ZNU
  spentZNU: number // gastado
  lastHeartbeatAt: number | null
  pauseReason: string | null
  heartbeatCron: string // ej: '0 6 * * *' (cada 6h)
  notes?: string
}

export type GoalLevel = 'company' | 'team' | 'agent' | 'task'
export type GoalStatus = 'planned' | 'active' | 'achieved' | 'cancelled'

export interface GoalNode {
  id: string
  level: GoalLevel
  title: string
  status: GoalStatus
  parentId: string | null // ancestro de meta (goal ancestry)
  ownerAgentId: string | null
}

export type TaskStatus =
  | 'backlog' | 'todo' | 'in_progress' | 'in_review' | 'done' | 'blocked' | 'cancelled'

export interface TaskNode {
  id: string
  title: string
  status: TaskStatus
  priority: 'critical' | 'high' | 'medium' | 'low'
  assigneeAgentId: string | null
  goalId: string | null
  needsApproval: boolean // gate MJ antes de ejecutar
  approved: boolean
  blockedBy: string[] // ids de tareas que deben estar done
  createdAt: number
  updatedAt: number
}

export type AuditActor = 'human' | 'agent' | 'system' | 'ley'
export type AuditTone = 'neutral' | 'info' | 'success' | 'warning' | 'danger'

export interface AuditEntry {
  id: string
  ts: number
  actor: AuditActor
  actorId: string | null
  action: string
  detail: string
  tone: AuditTone
  lawRef?: 'I' | 'II' | 'III' // Ley MJ disparada o aplicada
}
