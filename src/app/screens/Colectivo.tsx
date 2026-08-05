import { useState } from 'react'
import { Plus, CheckCircle2, Circle } from 'lucide-react'
import { useAppStore } from '@core/state/store'
import { ics } from '@core/lib/metrics'
import { Card, Stat, Bar, Btn, Badge, EmptyState } from '@components/ui'
import type { Member, MemberRole, VFType } from '@core/state/types'

const ROLES: { id: MemberRole; label: string }[] = [
  { id: 'agronomo', label: 'Agrónomo' },
  { id: 'energia', label: 'Técnico energía' },
  { id: 'maker', label: 'Maker FABSHIP' },
  { id: 'facilitador', label: 'Facilitador CDS' },
  { id: 'generalista', label: 'Generalista' },
]

const VF_TYPES: VFType[] = ['LaborFlow', 'LoveFlow', 'CareFlow', 'RepairFlow', 'ManufactureFlow']

export function Colectivo() {
  const { members, flows, addMember, toggleMemberDNA, addFlow, plans, togglePlanDone } = useAppStore()
  const icsVal = ics(members, flows)
  const signed = members.filter((m) => m.signedSocialDNA).length

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-jost text-2xl md:text-3xl font-semibold">Nivel 1 · Colectivo Ontogenético</h1>
        <p className="text-[var(--dim)] mt-1">La red no se decreta, se teje. CDS + ValueFlows + Autómata v0.1.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Stat label="Miembros activos" value={`${signed}`} sub="Social DNA firmado" />
        <Stat label="Índice CDS (ICS)" value={icsVal.toFixed(2)} sub="Target ≥ 0.6" color="text-purple-400" />
        <Stat label="Eventos ValueFlow" value={`${flows.length}`} sub="Target 50+ por ciclo" />
        <Stat label="Ciclos completos" value={`${plans.filter((p) => p.actions.every((a) => a.done)).length}/3`} sub="Plan 90 días" />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <Card title="Miembros ancla">
          <AddMember onAdd={addMember} />
          {members.length === 0 ? (
            <EmptyState>Aún no hay miembros. Convocatoria vinculante: 5 personas, 6 meses, 20h/sem, Social DNA.</EmptyState>
          ) : (
            <ul className="mt-4 space-y-2">
              {members.map((m) => (
                <li key={m.id} className="flex items-center justify-between bg-[var(--surf2)] rounded-xl px-3 py-2">
                  <div>
                    <p className="font-manrope font-medium text-sm">{m.name}</p>
                    <p className="text-[var(--dim)] text-xs">{ROLES.find((r) => r.id === m.role)?.label} · {m.hoursPerWeek}h/sem · {m.committedMonths}meses</p>
                  </div>
                  <button onClick={() => toggleMemberDNA(m.id)} className="flex items-center gap-1 text-xs" aria-label="Firmar Social DNA">
                    {m.signedSocialDNA ? <CheckCircle2 className="w-5 h-5 text-emerald-400" /> : <Circle className="w-5 h-5 text-[var(--dim)]" />}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </Card>

        <Card title="ValueFlows (economía no-jerárquica)">
          <div className="flex flex-wrap gap-2 mb-3">
            {VF_TYPES.map((t) => (
              <Btn key={t} variant="ghost" onClick={() => addFlow({ type: t, actor: 'colectivo', znu: 10, note: 'evento de campo' })}>
                <Plus className="w-4 h-4 mr-1" /> {t}
              </Btn>
            ))}
          </div>
          {flows.length === 0 ? (
            <EmptyState>Registra eventos reales: LaborFlow, LoveFlow, CareFlow, RepairFlow, ManufactureFlow.</EmptyState>
          ) : (
            <ul className="space-y-2 max-h-64 overflow-y-auto">
              {[...flows].reverse().slice(0, 20).map((f) => (
                <li key={f.id} className="flex items-center justify-between text-sm bg-[var(--surf2)] rounded-xl px-3 py-2">
                  <span className="text-[var(--mut)]">{f.type} · {f.actor} · {f.znu} ZNU</span>
                  <span className="text-[var(--dim)] text-xs">{new Date(f.ts).toLocaleTimeString()}</span>
                </li>
              ))}
            </ul>
          )}
        </Card>
      </div>

      <Card title="Plan γ-CARMIS — 90 días (3 ciclos lunares)">
        <div className="space-y-6">
          {plans.map((cycle) => {
            const done = cycle.actions.filter((a) => a.done).length
            return (
              <div key={cycle.id}>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-jost font-semibold">{cycle.name}</h3>
                  <Badge color={done === cycle.actions.length ? 'text-emerald-400 border-emerald-400/50' : 'border-[var(--line)] text-[var(--mut)]'}>{done}/{cycle.actions.length}</Badge>
                </div>
                <Bar value={done} max={cycle.actions.length} color="bg-purple-400" />
                <ul className="mt-3 space-y-2">
                  {cycle.actions.map((a) => (
                    <li key={a.id}>
                      <button onClick={() => togglePlanDone(cycle.id, a.id)} className="w-full flex items-start gap-3 text-left bg-[var(--surf2)] rounded-xl px-3 py-2 hover:bg-[var(--surf3)] transition-colors">
                        {a.done ? <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /> : <Circle className="w-5 h-5 text-[var(--dim)] flex-shrink-0 mt-0.5" />}
                        <div>
                          <p className={`font-manrope text-sm ${a.done ? 'line-through text-[var(--dim)]' : ''}`}>{a.text}</p>
                          <p className="text-[var(--dim)] text-xs">Sem {a.week} · {a.owner}</p>
                        </div>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </Card>
    </div>
  )
}

function AddMember({ onAdd }: { onAdd: (m: Omit<Member, 'id'>) => void }) {
  const [name, setName] = useState('')
  const [role, setRole] = useState<MemberRole>('agronomo')
  return (
    <div className="flex flex-wrap items-end gap-2">
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nombre del miembro"
        className="px-3 py-2 bg-[var(--surf2)] border border-[var(--line)] rounded-xl text-sm w-40"
      />
      <select
        value={role}
        onChange={(e) => setRole(e.target.value as MemberRole)}
        className="px-3 py-2 bg-[var(--surf2)] border border-[var(--line)] rounded-xl text-sm"
      >
        {ROLES.map((r) => <option key={r.id} value={r.id}>{r.label}</option>)}
      </select>
      <Btn onClick={() => {
        if (name.trim()) {
          onAdd({ name: name.trim(), role, hoursPerWeek: 20, znuStake: 500, signedSocialDNA: false, committedMonths: 6 })
          setName('')
        }
      }}>Añadir</Btn>
    </div>
  )
}
