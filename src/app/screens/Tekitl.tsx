import { useState } from 'react'
import {
  Briefcase, Hammer, ArrowRight, Zap,
} from 'lucide-react'
import { useAppStore } from '@core/state/store'
import { getPortfolio } from '@core/lib/tekitl'
import { Card, Stat, Btn, Badge, EmptyState } from '@components/ui'

const STAGE_LABEL: Record<string, string> = { planning: 'Planificación', execution: 'En ejecución', completed: 'Completado', aborted: 'Abortado' }
const STAGE_COLOR: Record<string, string> = { planning: 'text-sky-400', execution: 'text-amber-400', completed: 'text-emerald-400', aborted: 'text-rose-400' }
const VOL_STATUS_LABEL: Record<string, string> = { applied: 'Postulado', active: 'Activo', completed: 'Completado', bailed: 'Abandonado' }
const VOL_STATUS_COLOR: Record<string, string> = { applied: 'text-sky-400', active: 'text-amber-400', completed: 'text-emerald-400', bailed: 'text-rose-400' }

export function Tekitl() {
  const { tekitl, createProject, transitionProjectStage, addProjectRole, acceptVolunteer, logVolunteerHours, completeVolunteer, potenciarProject, appendProjectNote, declareTalent } = useAppStore()
  const [view, setView] = useState<'feed' | 'project' | 'profile'>('feed')
  const [selectedProject, setSelectedProject] = useState<string | null>(null)
  const [newProject, setNewProject] = useState({ title: '', goal: '', ownerId: 'Isaac Ko', coinsGoal: 1000 })
  const [newRole, setNewRole] = useState({ projectId: '', occupation: '', hoursEstimated: 20 })
  const [newTalent, setNewTalent] = useState({ userId: 'Isaac Ko', occupation: '', confidence: 3, yearsExp: 0 })
  const [note, setNote] = useState('')
  const [potenciar, setPotenciar] = useState({ fromUserId: 'Tobías', toUserId: 'Isaac Ko', amount: 50 })

  const myPortfolio = getPortfolio(tekitl.projects, tekitl.roles, tekitl.volunteers, 'Isaac Ko')

  const handleCreateProject = () => {
    if (newProject.title && newProject.goal) {
      createProject(newProject.title, newProject.goal, newProject.ownerId, newProject.coinsGoal)
      setNewProject({...newProject, title: '', goal: ''})
    }
  }

  const handleAddRole = () => {
    if (newRole.occupation && selectedProject) {
      addProjectRole(selectedProject, newRole.occupation, newRole.hoursEstimated)
      setNewRole({...newRole, occupation: ''})
    }
  }

  const handlePublishNote = () => {
    if (note.trim() && selectedProject) {
      appendProjectNote(selectedProject, 'Isaac Ko', note)
      setNote('')
    }
  }

  const handleDeclareTalent = () => {
    if (newTalent.occupation) {
      declareTalent(newTalent.userId, newTalent.occupation, newTalent.confidence, newTalent.yearsExp)
      setNewTalent({...newTalent, occupation: ''})
    }
  }

  if (view === 'project' && selectedProject) {
    const proj = tekitl.projects.find(p => p.id === selectedProject)!
    const projRoles = tekitl.roles.filter(r => r.projectId === proj.id)
    const projVolunteers = tekitl.volunteers.filter(v => projRoles.some(r => r.id === v.roleId))
    const projTimeline = tekitl.timeline.filter(t => t.projectId === proj.id).sort((a, b) => a.ts - b.ts)

    return (
      <div className="space-y-6 max-w-4xl">
        <Btn variant="ghost" onClick={() => { setView('feed'); setSelectedProject(null) }}><ArrowRight className="w-4 h-4 mr-1" /> Volver al feed</Btn>
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <h1 className="font-jost text-2xl md:text-3xl font-semibold">{proj.title}</h1>
            <p className="text-[var(--dim)] mt-1">{proj.goal}</p>
            <div className="flex items-center gap-4 mt-2 text-sm">
              <Badge color={STAGE_COLOR[proj.stage]}>{STAGE_LABEL[proj.stage]}</Badge>
              <span>Coins: {proj.coinsReceived} / {proj.coinsGoal}</span>
              <span>Dueño: {proj.ownerId}</span>
            </div>
          </div>
          {proj.stage !== 'completed' && proj.stage !== 'aborted' && (
            <select
              value={proj.stage}
              onChange={(e) => transitionProjectStage(proj.id, e.target.value as 'planning' | 'execution' | 'completed' | 'aborted')}
              className="w-40 px-3 py-2 bg-[var(--surf2)] border border-[var(--line)] rounded-xl text-[var(--ink)] text-sm"
            >
              <option value="planning">Planificación</option>
              <option value="execution">En ejecución</option>
              <option value="completed">Completado</option>
              <option value="aborted">Abortado</option>
            </select>
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <Card title="Roles y voluntarios">
            {projRoles.length === 0 ? <EmptyState>Sin roles. Añade uno abajo.</EmptyState> : projRoles.map(role => {
              const vols = projVolunteers.filter(v => v.roleId === role.id)
              return (
                <div key={role.id} className="p-2 rounded-lg border border-[var(--line)] mb-2">
                  <div className="font-manrope">{role.occupation} · {role.hoursEstimated}h estimadas</div>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {vols.map(v => (
                      <Badge key={v.id} color={VOL_STATUS_COLOR[v.status]}>
                        {v.userId} · {VOL_STATUS_LABEL[v.status]} · {v.hoursLogged}h
                      </Badge>
                    ))}
                  </div>
                  {vols.map(v => v.status === 'applied' && (
                    <Btn key={`accept-${v.id}`} variant="ghost" onClick={() => acceptVolunteer(v.id)} className="mt-1">Aceptar</Btn>
                  ))}
                  {vols.map(v => v.status === 'active' && (
                    <div key={`hours-${v.id}`} className="flex gap-1 mt-1">
                      <input
                        type="number"
                        placeholder="h"
                        data-vol={v.id}
                        onChange={e => logVolunteerHours(v.id, Number(e.target.value))}
                        className="w-16 px-2 py-1 bg-[var(--surf2)] border border-[var(--line)] rounded-xl text-[var(--ink)] text-sm"
                      />
                      <Btn onClick={() => logVolunteerHours(v.id, Number((document.querySelector(`[data-vol="${v.id}"]`) as HTMLInputElement)?.value || 0))}>Registrar</Btn>
                      <Btn variant="ghost" onClick={() => completeVolunteer(v.id)}>Completar</Btn>
                    </div>
                  ))}
                </div>
              )
            })}
            <div className="mt-3 p-2 rounded-lg border border-dashed border-[var(--line)]">
              <h4 className="font-manrope text-sm mb-2">Añadir rol</h4>
              <div className="flex gap-2 flex-wrap">
                <input
                  placeholder="Ocupación"
                  value={newRole.occupation}
                  onChange={e => setNewRole({...newRole, occupation: e.target.value})}
                  className="flex-1 min-w-[140px] px-3 py-2 bg-[var(--surf2)] border border-[var(--line)] rounded-xl text-[var(--ink)] placeholder-[var(--dim)] focus:outline-none focus:border-chispa focus:ring-1 focus:ring-chispa text-sm"
                />
                <input
                  type="number"
                  placeholder="Horas"
                  value={newRole.hoursEstimated}
                  onChange={e => setNewRole({...newRole, hoursEstimated: Number(e.target.value)})}
                  className="w-24 px-3 py-2 bg-[var(--surf2)] border border-[var(--line)] rounded-xl text-[var(--ink)] placeholder-[var(--dim)] focus:outline-none focus:border-chispa focus:ring-1 focus:ring-chispa text-sm"
                />
                <Btn onClick={handleAddRole}>Añadir</Btn>
              </div>
            </div>
          </Card>

          <Card title="Timeline (append-only)">
            {projTimeline.length === 0 ? <EmptyState>Sin eventos aún.</EmptyState> : (
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {projTimeline.map(e => (
                  <div key={e.id} className="text-xs p-2 rounded border border-[var(--line)]">
                    <div className="flex justify-between">
                      <span className="font-mono text-[var(--mut)]">{new Date(e.ts).toLocaleString()}</span>
                      <Badge color="text-sky-400">{e.type.replace('_', ' ')}</Badge>
                    </div>
                    <div className="text-[var(--dim)]">{e.actorId}: {JSON.stringify(e.payload)}</div>
                  </div>
                ))}
              </div>
            )}
            <div className="mt-3">
              <h4 className="font-manrope text-sm mb-2">Publicar nota / hito</h4>
              <textarea
                value={note}
                onChange={e => setNote(e.target.value)}
                placeholder="Avance, bloqueo, decisión..."
                rows={2}
                className="w-full px-3 py-2 bg-[var(--surf2)] border border-[var(--line)] rounded-xl text-[var(--ink)] placeholder-[var(--dim)] focus:outline-none focus:border-chispa focus:ring-1 focus:ring-chispa text-sm mb-2"
              />
              <Btn onClick={handlePublishNote}>Publicar</Btn>
            </div>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <Card title="Potenciar (coins sociales)">
            <p className="text-xs text-[var(--dim)] mb-2">Endoso comunitario: genera coins para el dueño. No es dinero.</p>
            <div className="flex gap-2 flex-wrap">
              <input
                placeholder="De (quien da)"
                value={potenciar.fromUserId}
                onChange={e => setPotenciar({...potenciar, fromUserId: e.target.value})}
                className="flex-1 min-w-[120px] px-3 py-2 bg-[var(--surf2)] border border-[var(--line)] rounded-xl text-[var(--ink)] placeholder-[var(--dim)] focus:outline-none focus:border-chispa focus:ring-1 focus:ring-chispa text-sm"
              />
              <input
                placeholder="A (dueño)"
                value={potenciar.toUserId}
                onChange={e => setPotenciar({...potenciar, toUserId: e.target.value})}
                className="flex-1 min-w-[120px] px-3 py-2 bg-[var(--surf2)] border border-[var(--line)] rounded-xl text-[var(--ink)] placeholder-[var(--dim)] focus:outline-none focus:border-chispa focus:ring-1 focus:ring-chispa text-sm"
              />
              <input
                type="number"
                placeholder="Coins"
                value={potenciar.amount}
                onChange={e => setPotenciar({...potenciar, amount: Number(e.target.value)})}
                className="w-24 px-3 py-2 bg-[var(--surf2)] border border-[var(--line)] rounded-xl text-[var(--ink)] placeholder-[var(--dim)] focus:outline-none focus:border-chispa focus:ring-1 focus:ring-chispa text-sm"
              />
              <Btn onClick={() => { potenciarProject(proj.id, potenciar.fromUserId, potenciar.toUserId, potenciar.amount) }}>Potenciar</Btn>
            </div>
            <div className="mt-2 text-xs text-[var(--dim)]">
              Coins totales del proyecto: {proj.coinsReceived} / {proj.coinsGoal} · Tu balance: {tekitl.coins.filter(c => c.toUserId === 'Isaac Ko').reduce((a,c)=>a+c.amount,0)}
            </div>
          </Card>

          <Card title="Declarar talento (portafolio)">
            <p className="text-xs text-[var(--dim)] mb-2">Tus talentos + proyectos completados = tu portafolio público.</p>
            <div className="flex gap-2 flex-wrap">
              <input
                placeholder="Ocupación"
                value={newTalent.occupation}
                onChange={e => setNewTalent({...newTalent, occupation: e.target.value})}
                className="flex-1 min-w-[140px] px-3 py-2 bg-[var(--surf2)] border border-[var(--line)] rounded-xl text-[var(--ink)] placeholder-[var(--dim)] focus:outline-none focus:border-chispa focus:ring-1 focus:ring-chispa text-sm"
              />
              <select
                value={newTalent.confidence}
                onChange={e => setNewTalent({...newTalent, confidence: Number(e.target.value)})}
                className="w-24 px-3 py-2 bg-[var(--surf2)] border border-[var(--line)] rounded-xl text-[var(--ink)] focus:outline-none focus:border-chispa focus:ring-1 focus:ring-chispa text-sm"
              >
                {[1,2,3,4,5].map(n => <option key={n} value={n}>{n}</option>)}
              </select>
              <input
                type="number"
                placeholder="Años exp."
                value={newTalent.yearsExp}
                onChange={e => setNewTalent({...newTalent, yearsExp: Number(e.target.value)})}
                className="w-24 px-3 py-2 bg-[var(--surf2)] border border-[var(--line)] rounded-xl text-[var(--ink)] placeholder-[var(--dim)] focus:outline-none focus:border-chispa focus:ring-1 focus:ring-chispa text-sm"
              />
              <Btn onClick={handleDeclareTalent}>Declarar</Btn>
            </div>
          </Card>
        </div>
      </div>
    )
  }

  if (view === 'profile') {
    const myTalents = tekitl.talents.filter(t => t.userId === 'Isaac Ko')
    return (
      <div className="space-y-6 max-w-4xl">
        <Btn variant="ghost" onClick={() => setView('feed')}><ArrowRight className="w-4 h-4 mr-1" /> Volver al feed</Btn>
        <h1 className="font-jost text-2xl font-semibold">Perfil · Isaac Ko</h1>
        <Card title="Talentos declarados">
          {myTalents.length === 0 ? <EmptyState>Sin talentos declarados.</EmptyState> : (
            <div className="flex flex-wrap gap-2">
              {myTalents.map(t => (
                <Badge key={t.id} color="text-emerald-400">{t.occupation} (conf {t.confidence}, {t.yearsExp}a)</Badge>
              ))}
            </div>
          )}
        </Card>
        <Card title="Portafolio (proyectos participados)">
          <div className="space-y-2">
            <h4 className="font-manrope text-sm">Como dueño ({myPortfolio.owned.length})</h4>
            {myPortfolio.owned.map(p => <Badge key={p.id} color="text-sky-400">{p.title} · {STAGE_LABEL[p.stage]}</Badge>)}
            <h4 className="font-manrope text-sm mt-2">Como voluntario completado ({myPortfolio.volunteered.length})</h4>
            {myPortfolio.volunteered.map(p => <Badge key={p.id} color="text-emerald-400">{p.title}</Badge>)}
            <h4 className="font-manrope text-sm mt-2">Completados totales ({myPortfolio.completed.length})</h4>
            {myPortfolio.completed.map(p => <Badge key={p.id} color="text-amber-400">{p.title}</Badge>)}
          </div>
        </Card>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="font-jost text-2xl md:text-3xl font-semibold flex items-center gap-2">
            <Briefcase className="w-7 h-7 text-sky-400" /> Tekitl · Proyectos colaborativos
          </h1>
          <p className="text-[var(--dim)] mt-1">Asimilado de Baruch4413/tekitl. Post → Proyecto (ciclo de vida) + Roles/Voluntarios + Coins sociales + Talentos/Portafolio. Sin Laravel/MySQL.</p>
        </div>
        <div className="flex gap-2">
          <Btn variant="ghost" onClick={() => setView('profile')}>Mi portafolio</Btn>
          <Btn onClick={() => setView('feed')}>Nuevo proyecto</Btn>
        </div>
      </div>

      <Card title="Nuevo proyecto (post → elevar)">
        <div className="flex flex-col gap-2 md:flex-row">
          <input
            placeholder="Título del proyecto"
            value={newProject.title}
            onChange={e => setNewProject({...newProject, title: e.target.value})}
            className="flex-1 min-w-[200px] px-3 py-2 bg-[var(--surf2)] border border-[var(--line)] rounded-xl text-[var(--ink)] placeholder-[var(--dim)] focus:outline-none focus:border-chispa focus:ring-1 focus:ring-chispa text-sm"
          />
          <input
            placeholder="Meta / objetivo"
            value={newProject.goal}
            onChange={e => setNewProject({...newProject, goal: e.target.value})}
            className="flex-1 min-w-[200px] px-3 py-2 bg-[var(--surf2)] border border-[var(--line)] rounded-xl text-[var(--ink)] placeholder-[var(--dim)] focus:outline-none focus:border-chispa focus:ring-1 focus:ring-chispa text-sm"
          />
          <input
            type="number"
            placeholder="Meta coins"
            value={newProject.coinsGoal}
            onChange={e => setNewProject({...newProject, coinsGoal: Number(e.target.value)})}
            className="w-32 px-3 py-2 bg-[var(--surf2)] border border-[var(--line)] rounded-xl text-[var(--ink)] placeholder-[var(--dim)] focus:outline-none focus:border-chispa focus:ring-1 focus:ring-chispa text-sm"
          />
          <Btn onClick={handleCreateProject}>Crear</Btn>
        </div>
      </Card>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {tekitl.projects.map(p => (
          <div
            key={p.id}
            role="button"
            tabIndex={0}
            onClick={() => { setSelectedProject(p.id); setView('project') }}
            onKeyDown={(e) => { if (e.key === 'Enter') { setSelectedProject(p.id); setView('project') } }}
            className="bg-[var(--surf)] border border-[var(--line)] rounded-2xl p-5 flex flex-col cursor-pointer hover:border-chispa transition-colors"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-jost font-semibold">{p.title}</h3>
                <p className="text-sm text-[var(--dim)] line-clamp-2">{p.goal}</p>
              </div>
              <Badge color={STAGE_COLOR[p.stage]}>{STAGE_LABEL[p.stage]}</Badge>
            </div>
            <div className="flex items-center gap-4 mt-3 text-sm">
              <Stat label="Coins" value={`${p.coinsReceived}/${p.coinsGoal}`} color="text-amber-400" />
              <Stat label="Dueño" value={p.ownerId} color="text-sky-400" />
            </div>
            <div className="mt-auto pt-3 flex items-center justify-between">
              <span className="text-xs text-[var(--dim)]">Click para ver detalle</span>
              <Zap className="w-4 h-4 text-[var(--mut)]" />
            </div>
          </div>
        ))}
        {tekitl.projects.length === 0 && (
          <Card className="md:col-span-2 lg:col-span-3">
            <EmptyState>No hay proyectos aún. Crea el primero arriba.</EmptyState>
          </Card>
        )}
      </div>

      <div className="flex items-center gap-2">
        <Hammer className="w-4 h-4 text-emerald-400" />
        <span className="text-xs text-[var(--dim)]">Isomorfo MJ: proyecto = unidad de AUT · coins = endoso post-facto · timeline inmutable = Ley III · portafolio = prueba de trabajo real.</span>
      </div>
    </div>
  )
}