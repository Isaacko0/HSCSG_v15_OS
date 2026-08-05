import { useState } from 'react'
import {
  RefreshCw, Vote, PencilRuler, Clock, Hammer, Activity, FileCheck2,
} from 'lucide-react'
import { useAppStore } from '@core/state/store'
import { systemHealth, diagnose } from '@core/lib/integral'
import type { IntegralSystem } from '@core/state/integral'
import { Card, Stat, Btn, Badge } from '@components/ui'

const SYS: { key: IntegralSystem; label: string; icon: any; color: string; desc: string }[] = [
  { key: 'CDS', label: 'CDS · Decisiones', icon: Vote, color: 'text-violet-400', desc: 'Gobernanza: decide el nodo' },
  { key: 'OAD', label: 'OAD · Diseño', icon: PencilRuler, color: 'text-sky-400', desc: 'Diseños certificados (eco)' },
  { key: 'COS', label: 'COS · Trabajo', icon: Hammer, color: 'text-amber-400', desc: 'Producción organizada' },
  { key: 'ITC', label: 'ITC · Time Credits', icon: Clock, color: 'text-emerald-400', desc: 'Contribución (decay, no-transferible)' },
  { key: 'FRS', label: 'FRS · Feedback', icon: Activity, color: 'text-rose-400', desc: 'Nervous system (advisory)' },
]

export function Integral() {
  const { integral, raiseIntegralIssue, certifyIntegralDesign, logIntegralLabor, awardIntegralCredits, ingestIntegralSignal, recommendIntegral, promoteRecommendation } = useAppStore()
  const [newIssue, setNewIssue] = useState('')
  const [newDesign, setNewDesign] = useState({ title: '', eco: 80 })
  const [newSignal, setNewSignal] = useState({ from: 'COS' as IntegralSystem, sev: 'warning' as 'info' | 'warning' | 'critical', finding: '' })
  const [newLabor, setNewLabor] = useState({ projectId: 'p1', participant: 'Isaac Ko', hours: 4 })

  const health = systemHealth(integral)
  const sortedSignals = diagnose(integral.signals)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="font-jost text-2xl md:text-3xl font-semibold flex items-center gap-2">
            <RefreshCw className="w-7 h-7 text-emerald-400" /> Integral · Loop postmonetario
          </h1>
          <p className="text-[var(--dim)] mt-1">Asimilado de Integral Collective (9 repos). Loop cerrado: CDS→OAD→COS→ITC→FRS→CDS. Filosofía de planificación, reestructuración y retroalimentación del nodo.</p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Stat label="System Health (loop)" value={`${health}/100`} color="text-emerald-400" />
        <Stat label="Issues abiertos" value={`${integral.issues.filter(i => i.status === 'open' || i.status === 'deliberating').length}`} color="text-violet-400" />
        <Stat label="Decision Records" value={`${integral.decisions.length}`} color="text-sky-400" />
        <Stat label="Signals críticos" value={`${integral.signals.filter(s => s.severity === 'critical').length}`} color="text-rose-400" />
      </div>

      <Card title="Mapa del loop (5 sistemas en ciclo cerrado)">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
          {SYS.map((s) => {
            const Icon = s.icon
            const count = s.key === 'CDS' ? integral.issues.length
              : s.key === 'OAD' ? integral.designs.length
              : s.key === 'COS' ? integral.labor.length
              : s.key === 'ITC' ? integral.credits.length
              : integral.signals.length
            return (
              <div key={s.key} className="p-2 rounded-lg border border-[var(--line)] text-center">
                <Icon className="w-5 h-5 mx-auto" style={{ color: s.color.replace('text-', '') }} />
                <div className="font-manrope text-sm mt-1">{s.label}</div>
                <div className="text-xs text-[var(--dim)]">{count} regs</div>
              </div>
            )
          })}
        </div>
        <p className="text-xs text-[var(--dim)] mt-2">CDS decide → OAD diseña → COS produce → ITC registra → FRS observa → (solo CDS decide). FRS es advisory: no manda.</p>
      </Card>

      <div className="grid md:grid-cols-2 gap-4">
        <Card title="CDS · Issues & Decision Records">
          <div className="space-y-1 mb-2">
            {integral.issues.map((i) => (
              <div key={i.id} className="flex items-center justify-between text-sm">
                <span>{i.title} <Badge color="text-violet-400">{i.status}</Badge></span>
              </div>
            ))}
          </div>
          <div className="flex gap-2">
            <input
              placeholder="Nuevo issue"
              value={newIssue}
              onChange={e => setNewIssue(e.target.value)}
              className="flex-1 px-3 py-2 bg-[var(--surf2)] border border-[var(--line)] rounded-xl text-[var(--ink)] text-sm"
            />
            <Btn onClick={() => { if (newIssue.trim()) { raiseIntegralIssue(newIssue, 'Isaac Ko'); setNewIssue('') } }}>Alzar</Btn>
          </div>
          {integral.decisions.map((d) => (
            <div key={d.id} className="mt-2 p-2 rounded border border-[var(--line)] text-xs">
              <Badge color="text-sky-400">{d.id}</Badge> {d.decision}
            </div>
          ))}
        </Card>

        <Card title="OAD · Diseños certificados">
          {integral.designs.map((d) => (
            <div key={d.id} className="flex items-center justify-between text-sm p-1">
              <span>{d.title}</span>
              <Badge color={d.ecoScore > 75 ? 'text-emerald-400' : 'text-amber-400'}>eco {d.ecoScore}</Badge>
            </div>
          ))}
          <div className="flex gap-2 mt-2">
            <input
              placeholder="Título diseño"
              value={newDesign.title}
              onChange={e => setNewDesign({ ...newDesign, title: e.target.value })}
              className="flex-1 px-3 py-2 bg-[var(--surf2)] border border-[var(--line)] rounded-xl text-[var(--ink)] text-sm"
            />
            <input
              type="number"
              placeholder="eco"
              value={newDesign.eco}
              onChange={e => setNewDesign({ ...newDesign, eco: Number(e.target.value) })}
              className="w-16 px-2 py-2 bg-[var(--surf2)] border border-[var(--line)] rounded-xl text-[var(--ink)] text-sm"
            />
            <Btn onClick={() => { if (newDesign.title.trim()) { certifyIntegralDesign(newDesign.title, newDesign.eco); setNewDesign({ title: '', eco: 80 }) } }}>Certificar</Btn>
          </div>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <Card title="COS · Labor & ITC · Time Credits">
          <p className="text-sm text-[var(--dim)] mb-1">Labor (de Tekitl/COS):</p>
          {integral.labor.map((l) => (
            <div key={l.id} className="text-sm">{l.participant}: {l.hours}h {l.certified ? '✓' : '·'}</div>
          ))}
          <div className="flex gap-2 mt-2">
            <input
              placeholder="participante"
              value={newLabor.participant}
              onChange={e => setNewLabor({ ...newLabor, participant: e.target.value })}
              className="flex-1 px-3 py-2 bg-[var(--surf2)] border border-[var(--line)] rounded-xl text-[var(--ink)] text-sm"
            />
            <input
              type="number"
              placeholder="h"
              value={newLabor.hours}
              onChange={e => setNewLabor({ ...newLabor, hours: Number(e.target.value) })}
              className="w-16 px-2 py-2 bg-[var(--surf2)] border border-[var(--line)] rounded-xl text-[var(--ink)] text-sm"
            />
            <Btn onClick={() => { logIntegralLabor(newLabor.projectId, newLabor.participant, newLabor.hours); awardIntegralCredits(newLabor.participant, newLabor.hours) }}>Registrar</Btn>
          </div>
          <p className="text-sm text-[var(--dim)] mt-3 mb-1">Time Credits (ITC, con decay):</p>
          {integral.credits.map((c) => (
            <div key={c.id} className="text-sm">{c.participant}: {c.credits} (raw {c.raw}, decayed {c.decayed})</div>
          ))}
        </Card>

        <Card title="FRS · Signals & Recommendations (advisory)">
          <p className="text-sm text-[var(--dim)] mb-1">Signals (nervous system):</p>
          {sortedSignals.map((s) => (
            <div key={s.id} className="text-xs p-1 rounded border border-[var(--line)]">
              <Badge color={s.severity === 'critical' ? 'text-rose-400' : s.severity === 'warning' ? 'text-amber-400' : 'text-sky-400'}>{s.fromSystem} · {s.severity}</Badge> {s.finding}
            </div>
          ))}
          <div className="flex gap-2 mt-2">
            <select
              value={newSignal.from}
              onChange={e => setNewSignal({ ...newSignal, from: e.target.value as IntegralSystem })}
              className="px-2 py-2 bg-[var(--surf2)] border border-[var(--line)] rounded-xl text-[var(--ink)] text-sm"
            >
              {SYS.map(s => <option key={s.key} value={s.key}>{s.key}</option>)}
            </select>
            <select
              value={newSignal.sev}
              onChange={e => setNewSignal({ ...newSignal, sev: e.target.value as any })}
              className="px-2 py-2 bg-[var(--surf2)] border border-[var(--line)] rounded-xl text-[var(--ink)] text-sm"
            >
              <option value="info">info</option><option value="warning">warning</option><option value="critical">critical</option>
            </select>
            <input
              placeholder="finding"
              value={newSignal.finding}
              onChange={e => setNewSignal({ ...newSignal, finding: e.target.value })}
              className="flex-1 px-2 py-2 bg-[var(--surf2)] border border-[var(--line)] rounded-xl text-[var(--ink)] text-sm"
            />
          </div>
          <Btn className="mt-2" onClick={() => { if (newSignal.finding.trim()) { ingestIntegralSignal(newSignal.from, newSignal.sev, newSignal.finding); setNewSignal({ ...newSignal, finding: '' }) } }}>Ingestar señal</Btn>
          <p className="text-sm text-[var(--dim)] mt-3 mb-1">Recommendations (promover a CDS issue):</p>
          {integral.recommendations.map((r) => (
            <div key={r.id} className="flex items-center justify-between text-xs p-1 rounded border border-[var(--line)]">
              <span>{r.finding} → {r.target}</span>
              {!r.promotedToIssue
                ? <Btn variant="ghost" onClick={() => promoteRecommendation(r.id)}>Promover</Btn>
                : <Badge color="text-violet-400">promovido</Badge>}
            </div>
          ))}
          <Btn className="mt-2" variant="ghost" onClick={() => recommendIntegral('Revisar fase del pilar más débil', 'OAD')}>Recomendar</Btn>
        </Card>
      </div>

      <div className="flex items-center gap-2">
        <FileCheck2 className="w-4 h-4 text-sky-400" />
        <span className="text-xs text-[var(--dim)]">Decision Records append-only (solo superseded). FRS advisory → solo CDS decide. ITC no-transferible + decay. Isomorfo a Materialismo Jerárquico (Leyes I/II/III).</span>
      </div>

      {/* Modo Lucidez: datos crudos / provenance (ocultos por defecto) */}
      <div className="lucidez-raw mt-4 p-4 rounded-xl border border-chispa/40 bg-[var(--surf2)] text-sm space-y-2">
        <p className="font-manrope font-semibold text-chispa">◆ Datos crudos (Lucidez · Ley III)</p>
        <p className="text-[var(--dim)]">System Health = loops×5 − issues_abiertos×3 − señales_críticas×10. Valor actual: <strong className="text-[var(--ink)]">{health}</strong>/100.</p>
        <p className="text-[var(--dim)]">Desglose del loop: CDS issues={integral.issues.length} · DR={integral.decisions.length} · OAD diseños={integral.designs.length} · COS labor={integral.labor.length} · ITC credits={integral.credits.length} · FRS señales={integral.signals.length}.</p>
        <p className="text-[var(--dim)]">Provenance de señales:</p>
        <ul className="list-disc list-inside text-[var(--dim)] text-xs space-y-1">
          {integral.signals.map((s) => (
            <li key={s.id}>{s.fromSystem} → {s.severity}: {s.finding} (ts {new Date(s.ts).toISOString()})</li>
          ))}
        </ul>
        <p className="text-[var(--dim)] text-xs">Nota: ningún valor de esta pantalla es estimado por IA; todo deriva del estado persistido del nodo.</p>
      </div>
    </div>
  )
}