import { useState } from 'react'
import {
  Network, ScrollText, Plus, Play, Pause, ShieldCheck, ShieldAlert,
} from 'lucide-react'
import { useAppStore } from '@core/state/store'
import { AGENT_ROLE_LABELS } from '@core/state/orchestration'
import {
  budgetStatus, evaluateMJGate, isHeartbeatDue, makeAudit,
  orchestrationStats, statusColor, statusLabel,
} from '@core/lib/orchestration'
import { autFromCAC, pgsLM, population } from '@core/lib/metrics'
import { Card, SectionTitle, Stat, Bar, Btn, Badge, EmptyState } from '@components/ui'
import type { AgentNode, TaskNode } from '@core/state/orchestration'

const VECTOR_BY_ROLE: Record<string, any> = {
  ceo: 'PROD', cto: 'PROD', cmo: 'PROD', cfo: 'PROD', security: 'PROD',
  engineer: 'PROD', designer: 'PROD', pm: 'PROD', qa: 'PROD',
  devops: 'ENER', researcher: 'ALIM', general: 'PROD',
}

export function Orquestacion() {
  const {
    agents, goals, tasks, audit, base, cac, members,
    addAgent, setAgentStatus, heartbeatAgent, addGoal, addTask, approveTask, logAudit,
  } = useAppStore()
  const aut = autFromCAC(cac)
  const pgs = pgsLM(aut)
  const pop = population(members)
  const stats = orchestrationStats(agents, tasks, goals)
  const [tab, setTab] = useState<'agents' | 'goals' | 'tasks' | 'audit'>('agents')
  const [name, setName] = useState('')
  const [role, setRole] = useState<any>('engineer')
  const [goalTitle, setGoalTitle] = useState('')
  const [taskTitle, setTaskTitle] = useState('')

  const tryHeartbeat = (a: AgentNode) => {
    const gate = evaluateMJGate('heartbeat', { pgs, pop, usdc: base.usdc_reserva, hitsBaseMaterial: false })
    heartbeatAgent(a.id)
    logAudit(makeAudit('agent', a.id, 'heartbeat', `Latido de ${a.name} (PGS ${pgs.toFixed(2)})`, gate.pass ? 'success' : 'warning', gate.pass ? undefined : 'III'))
  }

  const togglePause = (a: AgentNode) => {
    if (a.status === 'paused') {
      setAgentStatus(a.id, 'active')
      logAudit(makeAudit('human', null, 'agent.resume', `Reanudado ${a.name}`, 'info'))
    } else {
      setAgentStatus(a.id, 'paused', 'Pausa manual')
      logAudit(makeAudit('human', null, 'agent.pause', `Pausado ${a.name}`, 'warning'))
    }
  }

  const hire = () => {
    if (!name.trim()) return
    addAgent({
      name: name.trim(), role, title: AGENT_ROLE_LABELS[role as keyof typeof AGENT_ROLE_LABELS],
      status: 'pending_approval', reportsTo: null, vector: VECTOR_BY_ROLE[role] ?? 'PROD',
      budgetZNU: 50, spentZNU: 0, heartbeatCron: 'min:360', pauseReason: null, notes: '',
    })
    logAudit(makeAudit('human', null, 'agent.hire', `Contratado ${name.trim()} como ${AGENT_ROLE_LABELS[role as keyof typeof AGENT_ROLE_LABELS]}`, 'info'))
    setName('')
  }

  const createGoal = () => {
    if (!goalTitle.trim()) return
    addGoal({ level: 'team', title: goalTitle.trim(), status: 'active', parentId: null, ownerAgentId: agents[0]?.id ?? null })
    logAudit(makeAudit('human', null, 'goal.create', `Meta: ${goalTitle.trim()}`, 'success'))
    setGoalTitle('')
  }

  const createTask = () => {
    if (!taskTitle.trim()) return
    addTask({ title: taskTitle.trim(), status: 'todo', priority: 'medium', assigneeAgentId: agents[0]?.id ?? null, goalId: goals[0]?.id ?? null, needsApproval: true, approved: false, blockedBy: [] })
    logAudit(makeAudit('human', null, 'task.create', `Tarea creada: ${taskTitle.trim()} (requiere aprobación MJ)`, 'neutral'))
    setTaskTitle('')
  }

  const approve = (t: TaskNode) => {
    const gate = evaluateMJGate(`approve:${t.title}`, { pgs, pop, usdc: base.usdc_reserva, hitsBaseMaterial: false })
    if (!gate.pass) {
      logAudit(makeAudit('ley', null, 'task.denied', `DENEGADA por Ley ${gate.law}: ${t.title} — ${gate.reason}`, 'danger', gate.law!))
      setAgentStatus(t.assigneeAgentId!, 'paused', `Ley ${gate.law} MJ`)
      return
    }
    approveTask(t.id)
    logAudit(makeAudit('human', null, 'task.approve', `APROBADA: ${t.title}`, 'success'))
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="font-jost text-2xl md:text-3xl font-semibold flex items-center gap-2">
            <Network className="w-7 h-7 text-chispa" /> Orquestación · Control Plane
          </h1>
          <p className="text-[var(--dim)] mt-1">Asimilado de Paperclip: agentes, metas con ancestro, tareas-gobernadas y audit log bajo las 3 Leyes MJ.</p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <Stat label="Agentes activos" value={`${stats.active}`} color="text-emerald-400" />
        <Stat label="Pausados" value={`${stats.paused}`} color="text-yellow-400" />
        <Stat label="Over-budget" value={`${stats.overBudget}`} color="text-red-400" />
        <Stat label="Tareas (abiertas/done)" value={`${stats.tasksOpen}/${stats.tasksDone}`} />
        <Stat label="Metas activas" value={`${stats.goalsActive}`} color="text-chispa" />
      </div>

      <div className="flex gap-2 border-b border-[var(--lineq)]">
        {([['agents', 'Agentes'], ['goals', 'Metas'], ['tasks', 'Tareas'], ['audit', 'Audit Log']] as const).map(([k, l]) => (
          <button key={k} onClick={() => setTab(k)} className={tab === k ? 'px-4 py-2 font-manrope font-medium text-chispa border-b-2 border-chispa' : 'px-4 py-2 font-manrope font-medium text-[var(--mut)] hover:text-white'}>
            {l}
          </button>
        ))}
      </div>

      {tab === 'agents' && (
        <div className="space-y-4">
          <Card title="Contratar agente (Talent como operador)">
            <div className="flex flex-wrap gap-3 items-end">
              <Field label="Nombre"><input className="inp" value={name} onChange={(e) => setName(e.target.value)} placeholder="p.ej. FABSHIP-01" /></Field>
              <Field label="Rol">
                <select className="inp" value={role} onChange={(e) => setRole(e.target.value)}>
                  {Object.entries(AGENT_ROLE_LABELS).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
                </select>
              </Field>
              <Btn onClick={hire}><Plus className="w-4 h-4" /> Contratar</Btn>
            </div>
          </Card>

          {agents.length === 0 ? <EmptyState>Aún no hay agentes. Contrata el primero para iniciar la ontogénesis coordinada.</EmptyState> : (
            <div className="grid md:grid-cols-2 gap-4">
              {agents.map((a) => {
                const bs = budgetStatus(a)
                const due = isHeartbeatDue(a)
                return (
                  <Card key={a.id} title={a.name}>
                    <div className="flex items-center justify-between">
                      <Badge color={statusColor(a.status)}>{statusLabel(a.status)}</Badge>
                      <span className="text-xs text-[var(--dim)]">{AGENT_ROLE_LABELS[a.role]}</span>
                    </div>
                    <div className="mt-3 space-y-2 text-sm">
                      <Row k="Vector" v={a.vector} />
                      <Row k="Presupuesto ZNU" v={`${a.spentZNU}/${a.budgetZNU}`} />
                      <Bar value={a.budgetZNU ? a.spentZNU / a.budgetZNU : 0} max={1} color={bs === 'over' ? 'bg-red-400' : bs === 'warn' ? 'bg-yellow-400' : 'bg-emerald-400'} />
                      <Row k="Heartbeat" v={a.lastHeartbeatAt ? new Date(a.lastHeartbeatAt).toLocaleString() : 'nunca'} />
                      {due && a.status !== 'paused' && <Badge color="text-cyan-400">latido pendiente</Badge>}
                      {a.pauseReason && <Badge color="text-yellow-400">motivo: {a.pauseReason}</Badge>}
                    </div>
                    <div className="flex gap-2 mt-3">
                      <Btn variant="ghost" onClick={() => tryHeartbeat(a)}><Play className="w-4 h-4" /> Latido</Btn>
                      <Btn variant="ghost" onClick={() => togglePause(a)}>
                        {a.status === 'paused' ? <><Play className="w-4 h-4" /> Reanudar</> : <><Pause className="w-4 h-4" /> Pausar</>}
                      </Btn>
                    </div>
                  </Card>
                )
              })}
            </div>
          )}
        </div>
      )}

      {tab === 'goals' && (
        <div className="space-y-4">
          <Card title="Nueva meta de ontogénesis">
            <div className="flex gap-3 items-end">
              <Field label="Título"><input className="inp" value={goalTitle} onChange={(e) => setGoalTitle(e.target.value)} placeholder="p.ej. Soberanizar microgrid Ciclo 1" /></Field>
              <Btn onClick={createGoal}><Plus className="w-4 h-4" /> Crear meta</Btn>
            </div>
          </Card>
          {goals.length === 0 ? <EmptyState>Sin metas. Las metas siguen el ancestro Paperclip: Nodo → Colectivo → Agente → Tarea.</EmptyState> : (
            <div className="space-y-2">
              {goals.map((g) => (
                <Card key={g.id} title={g.title}>
                  <div className="flex items-center justify-between text-sm">
                    <Badge color="text-purple-400">nivel: {g.level}</Badge>
                    <Badge color={g.status === 'active' ? 'text-emerald-400' : 'text-[var(--dim)]'}>{g.status}</Badge>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      )}

      {tab === 'tasks' && (
        <div className="space-y-4">
          <Card title="Nueva tarea (issue gobernada por MJ)">
            <div className="flex gap-3 items-end">
              <Field label="Título"><input className="inp" value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)} placeholder="p.ej. Desplegar FABSHIP v0.1" /></Field>
              <Btn onClick={createTask}><Plus className="w-4 h-4" /> Crear tarea</Btn>
            </div>
          </Card>
          {tasks.length === 0 ? <EmptyState>Sin tareas. Cada tarea del Plan 90d es un issue con approval gate MJ.</EmptyState> : (
            <div className="space-y-2">
              {tasks.map((t) => (
                <Card key={t.id} title={t.title}>
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <div className="flex gap-2">
                      <Badge color="text-cyan-400">{t.status}</Badge>
                      {t.needsApproval && !t.approved && <Badge color="text-orange-400"><ShieldAlert className="w-3 h-3" /> requiere MJ</Badge>}
                      {t.approved && <Badge color="text-emerald-400"><ShieldCheck className="w-3 h-3" /> aprobada</Badge>}
                    </div>
                    {t.needsApproval && !t.approved && (
                      <Btn variant="ghost" onClick={() => approve(t)}>Aprobar (Leyes MJ)</Btn>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      )}

      {tab === 'audit' && (
        <div className="space-y-2">
          <SectionTitle>Audit Log inmutable · Ley III MJ (trazabilidad)</SectionTitle>
          {audit.length === 0 ? <EmptyState>Sin eventos. Cada acción genera una entrada con actor y Ley aplicada.</EmptyState> : (
            audit.map((e) => (
              <div key={e.id} className="flex items-start gap-3 p-3 rounded-xl border border-[var(--line)] text-sm">
                <ScrollText className={`w-4 h-4 mt-0.5 ${e.tone === 'danger' ? 'text-red-400' : e.tone === 'success' ? 'text-emerald-400' : e.tone === 'warning' ? 'text-yellow-400' : 'text-[var(--mut)]'}`} />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-manrope font-medium">{e.action}</span>
                    {e.lawRef && <Badge color="text-red-400">Ley {e.lawRef} MJ</Badge>}
                    <span className="text-xs text-[var(--dim)]">{new Date(e.ts).toLocaleString()}</span>
                  </div>
                  <p className="text-[var(--dim)]">{e.detail}</p>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  )
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-1">
      <span className="text-xs text-[var(--dim)] font-manrope">{label}</span>
      {children}
    </label>
  )
}
function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex justify-between">
      <span className="text-[var(--dim)]">{k}</span>
      <span className="font-mono text-[var(--mut)]">{v}</span>
    </div>
  )
}
