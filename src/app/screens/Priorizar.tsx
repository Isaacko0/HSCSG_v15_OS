import { useState } from 'react'
import {
  ListChecks, AlertTriangle, CheckCircle2, Trophy, PlusCircle, ThumbsUp,
} from 'lucide-react'
import { useAppStore } from '@core/state/store'
import { prioritizeRequests, rankProposals, planFeasibility } from '@core/lib/prioritize'
import { Card, Stat, Btn, Badge, EmptyState } from '@components/ui'
import type { Proposal } from '@core/state/prioritize'

export function Priorizar() {
  const { prio, addRequest } = useAppStore()
  const [tab, setTab] = useState<'needs' | 'plans' | 'feedback'>('needs')

  const rankedNeeds = prioritizeRequests(prio.requests)
  const rankedProposals = rankProposals(prio.proposals, prio.feedbacks)

  const overallFeasibility = prio.proposals.length
    ? prio.proposals.reduce((a, p) => a * planFeasibility(p.steps, prio.communityResources).feasibility, 1)
    : 1

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="font-jost text-2xl md:text-3xl font-semibold flex items-center gap-2">
            <ListChecks className="w-7 h-7 text-orange-400" /> Priorizar · Colectivo
          </h1>
          <p className="text-[var(--dim)] mt-1">Asimilado de ZiadJ/prioritize. Necesidades priorizadas por Social DNA (no precio) + factibilidad de la base material real.</p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Stat label="Necesidades" value={`${prio.requests.length}`} color="text-orange-400" />
        <Stat label="Planes" value={`${prio.proposals.length}`} color="text-sky-400" />
        <Stat label="Recursos" value={`${prio.communityResources.length}`} color="text-emerald-400" />
        <Stat label="Factibilidad global" value={`${(overallFeasibility * 100).toFixed(0)}%`} color="text-violet-400" />
      </div>

      <div className="flex gap-2 border-b border-[var(--lineq)] flex-wrap">
        {([['needs', 'Necesidades'], ['plans', 'Planes'], ['feedback', 'Retroalimentación']] as const).map(([k, l]) => (
          <button key={k} onClick={() => setTab(k)} className={tab === k ? 'px-4 py-2 font-manrope font-medium text-orange-400 border-b-2 border-orange-400' : 'px-4 py-2 font-manrope font-medium text-[var(--mut)] hover:text-white'}>{l}</button>
        ))}
      </div>

      {tab === 'needs' && (
        <div className="space-y-3">
          <div className="flex gap-2 items-end">
            <label className="flex flex-col gap-1 flex-1">
              <span className="text-xs text-[var(--dim)] font-manrope">Nueva necesidad del colectivo</span>
              <input className="inp" id="req-title" placeholder="p.ej. Compostaje comunitario" />
            </label>
            <label className="flex flex-col gap-1 w-32">
              <span className="text-xs text-[var(--dim)] font-manrope">Prioridad (0-100)</span>
              <input className="inp" id="req-prio" type="number" defaultValue={50} />
            </label>
            <Btn variant="ghost" onClick={() => {
              const t = (document.getElementById('req-title') as HTMLInputElement)?.value.trim()
              const p = Number((document.getElementById('req-prio') as HTMLInputElement)?.value || 50)
              if (t) { addRequest(t, '', false, p, 1); (document.getElementById('req-title') as HTMLInputElement).value = '' }
            }}><PlusCircle className="w-4 h-4" /> Añadir</Btn>
          </div>
          {rankedNeeds.length === 0 ? <EmptyState>Sin necesidades. El colectivo declara aquí lo que necesita.</EmptyState> : rankedNeeds.map((r) => (
            <Card key={r.id} title={r.title}>
              <div className="flex items-center gap-2 flex-wrap">
                {r.isBasicNeed ? <Badge color="text-red-400"><AlertTriangle className="w-3 h-3" /> Necesidad básica</Badge> : <Badge color="text-[var(--mut)]">No básica</Badge>}
                <Badge color="text-orange-400">Prioridad {r.priority}</Badge>
                <span className="text-xs text-[var(--dim)]">Propuestas: {r.proposalIds.length}</span>
              </div>
            </Card>
          ))}
        </div>
      )}

      {tab === 'plans' && (
        <div className="space-y-3">
          {rankedProposals.length === 0 ? <EmptyState>Sin planes. Crea propuestas que resuelvan necesidades.</EmptyState> : rankedProposals.map((p: Proposal) => {
            const pf = planFeasibility(p.steps, prio.communityResources)
            const req = prio.requests.find((r) => r.id === p.requestId)
            return (
              <Card key={p.id} title={p.title}>
                <div className="flex items-center gap-2 flex-wrap mb-2">
                  <Badge color="text-[var(--mut)]">Resuelve: {req?.title ?? p.requestId}</Badge>
                  <Badge color="text-emerald-400"><CheckCircle2 className="w-3 h-3" /> Factibilidad {(pf.feasibility * 100).toFixed(0)}%</Badge>
                  <Badge color="text-violet-400"><Trophy className="w-3 h-3" /> Beneficio {p.netBenefit}</Badge>
                  <Badge color="text-amber-400">Riesgo {p.riskFactor}</Badge>
                </div>
                <div className="space-y-1">
                  {p.steps.map((s) => {
                    const sf = pf.perStep.find((x) => x.stepId === s.id)
                    return (
                      <div key={s.id} className="text-sm pl-2 border-l border-[var(--line)]">
                        <span className="font-manrope">{s.title}</span> <span className="text-[var(--dim)]">(riesgo {s.riskFactor})</span>
                        {sf && <span className={sf.feasibility > 0.5 ? 'text-emerald-400' : 'text-red-400'}> — factibilidad {(sf.feasibility * 100).toFixed(0)}%</span>}
                        <div className="text-xs text-[var(--dim)]">
                          {s.costs.map((c) => `${c.title}: ${c.quantity}`).join(' · ')}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </Card>
            )
          })}
        </div>
      )}

      {tab === 'feedback' && (
        <div className="space-y-3">
          {prio.feedbacks.length === 0 ? <EmptyState>Sin retroalimentación. El colectivo vota las propuestas (Ley III: lucidez).</EmptyState> : prio.feedbacks.map((f) => {
            const p = prio.proposals.find((x) => x.id === f.proposalId)
            return (
              <div key={f.id} className="flex items-center justify-between p-2 rounded-lg border border-[var(--line)]">
                <div>
                  <span className="font-manrope text-sm">{p?.title ?? f.proposalId}</span>
                  <p className="text-xs text-[var(--dim)]">{f.comment}</p>
                </div>
                <Badge color="text-sky-400"><ThumbsUp className="w-3 h-3" /> {f.rating}/5 · conf {f.confidence}</Badge>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
