// HSCSG v15 OS — Lógica de Orquestación asimilada de Paperclip (control plane de agentes)
// Toda mutación pasa por las 3 Leyes MJ (gobernanza) y genera AuditEntry (trazabilidad).

import type {
  AgentNode, GoalNode, TaskNode, AuditEntry, AgentStatus, AuditActor, AuditTone,
} from '@core/state/orchestration'

const uid = () => Math.random().toString(36).slice(2, 9)

// ---- Heartbeat (Paperclip: DB-backed wakeup queue + budget checks) ----
export function nextHeartbeat(cron: string, from = Date.now()): number {
  // Soporte mínimo: intervalo en minutos codificado como "min:N" (ej 'min:360' = cada 6h)
  const m = /^min:(\d+)$/.exec(cron)
  if (m) return from + Number(m[1]) * 60_000
  // fallback: cada 6h
  return from + 360 * 60_000
}

export function isHeartbeatDue(agent: AgentNode, now = Date.now()): boolean {
  if (agent.status === 'terminated' || agent.status === 'paused') return false
  if (agent.lastHeartbeatAt == null) return true
  return now >= nextHeartbeat(agent.heartbeatCron, agent.lastHeartbeatAt)
}

// ---- Budget hard-stop (Paperclip: overspend pausa agentes, cancela cola) ----
export function budgetStatus(agent: AgentNode): 'ok' | 'warn' | 'over' {
  const ratio = agent.budgetZNU > 0 ? agent.spentZNU / agent.budgetZNU : 0
  if (ratio >= 1) return 'over'
  if (ratio >= 0.8) return 'warn'
  return 'ok'
}

// ---- Aprobación MJ (Paperclip: approval gates para acciones gobernadas) ----
// Devuelve { pass, law, reason } evaluando contra Ley I/II/III.
export function evaluateMJGate(
  _action: string,
  ctx: { pgs: number; pop: number; usdc: number; hitsBaseMaterial: boolean },
): { pass: boolean; law: 'I' | 'II' | 'III' | null; reason: string } {
  // Ley I: no dañar base material
  if (ctx.hitsBaseMaterial) {
    return { pass: false, law: 'I', reason: 'Ley I MJ: acción toca base material (tierra/agua/energía/comida/herramientas/cuerpos/semillas)' }
  }
  // Ley II: soberanizar base (ROI ≥ 1)
  const roi = (ctx.pgs * Math.max(ctx.pop, 1)) / Math.max(ctx.usdc, 1e-6)
  if (roi < 1 && ctx.usdc > 0) {
    return { pass: false, law: 'II', reason: `Ley II MJ: ROI ${roi.toFixed(2)} < 1 — no soberaniza base material` }
  }
  // Ley III: lucidez material (requiere datos de sensor, no simulación)
  if (ctx.pgs <= 0) {
    return { pass: false, law: 'III', reason: 'Ley III MJ: sin datos de laboratorio (PGS=0), no hay lucidez material' }
  }
  return { pass: true, law: null, reason: 'Pasa las 3 Leyes MJ' }
}

// ---- Audit log (Paperclip: activity logging para mutaciones) ----
export function makeAudit(
  actor: AuditActor,
  actorId: string | null,
  action: string,
  detail: string,
  tone: AuditTone = 'neutral',
  lawRef?: 'I' | 'II' | 'III',
): AuditEntry {
  return { id: uid(), ts: Date.now(), actor, actorId, action, detail, tone, lawRef }
}

// ---- Estado visual de agente (Paperclip status token set) ----
export function statusColor(s: AgentStatus): string {
  switch (s) {
    case 'active': return 'text-emerald-400'
    case 'running': return 'text-cyan-400 co-pulse'
    case 'idle': return 'text-[var(--dim)]'
    case 'paused': return 'text-yellow-400'
    case 'pending_approval': return 'text-orange-400'
    case 'error': return 'text-red-400'
    case 'terminated': return 'text-red-500'
    default: return 'text-[var(--mut)]'
  }
}

export function statusLabel(s: AgentStatus): string {
  const map: Record<AgentStatus, string> = {
    active: 'Activo', running: 'Ejecutando', idle: 'Inactivo', paused: 'Pausado',
    pending_approval: 'Pendiente aprob.', error: 'Error', terminated: 'Terminado',
  }
  return map[s]
}

// ---- Métricas de orquestación (dashboard) ----
export function orchestrationStats(agents: AgentNode[], tasks: TaskNode[], goals: GoalNode[]) {
  const active = agents.filter((a) => a.status === 'active' || a.status === 'running').length
  const paused = agents.filter((a) => a.status === 'paused').length
  const overBudget = agents.filter((a) => budgetStatus(a) === 'over').length
  const tasksDone = tasks.filter((t) => t.status === 'done').length
  const tasksOpen = tasks.filter((t) => t.status !== 'done' && t.status !== 'cancelled').length
  const goalsActive = goals.filter((g) => g.status === 'active').length
  return { active, paused, overBudget, tasksDone, tasksOpen, goalsActive }
}
