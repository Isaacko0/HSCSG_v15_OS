import { useMemo, useState } from 'react'
import { Card, Stat, Badge, EmptyState, Btn } from '@components/ui'
import {
  computeCapabilities, collectNeeds, matchmaker, pipelineHealth, routeFeedback,
  type FrsTarget, type Match,
} from '@core/lib/pipeline'
import { useAppStore } from '@core/state/store'

export function Pipeline() {
  const { integral, gaia, symbiosky, democracia, aprender, pipeDispatch, pipeAdvisory, pipeApply } = useAppStore()
  const [dispatched, setDispatched] = useState<Match[]>([])
  const [advisoryLog, setAdvisoryLog] = useState<string[]>([])

  // Capacidades y necesidades se recomputan en vivo (sub-loop del pipeline)
  const caps = useMemo(() => computeCapabilities({ integral, credibility: symbiosky, democracia, aprender }), [integral, symbiosky, democracia, aprender])
  const needs = useMemo(() => collectNeeds({ integral, gaia, aprender }), [integral, gaia, aprender])
  const matches = useMemo(() => matchmaker(needs, caps), [needs, caps])
  const health = useMemo(() => pipelineHealth(needs, matches, integral), [needs, matches, integral])

  const [finding, setFinding] = useState('')
  const [severity, setSeverity] = useState<'info' | 'warning' | 'critical'>('warning')
  const routes = useMemo(() => (finding.trim() ? routeFeedback(finding, severity) : []), [finding, severity])

  // ACTUATOR: el matchmaker deja de ser foto
  const dispatch = (m: Match) => {
    pipeDispatch(m.need.title, m.participant)
    setDispatched((d) => d.concat(m))
  }
  // ACTUATOR: el feedback FRS se ejecuta (issue advisory + rotación ZNU si aplica)
  const runAdvisory = () => {
    if (!finding.trim()) return
    pipeAdvisory(finding, severity)
    setAdvisoryLog((l) => l.concat(`[${severity}] ${finding} → ${routes.map((r) => r.target).join(',')}`))
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Pipeline Anidado (Orquestador Vivo)</h1>
        <Badge color="bg-cyan-500/20 text-cyan-300">Integral · alook · automaton · ponytail</Badge>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <Stat label="Necesidades" value={`${health.needsOpen}`} sub="activas" />
        <Stat label="Capacidades" value={`${caps.length}`} sub="participantes" />
        <Stat label="Matched" value={`${health.matched}`} sub="por matchmaker" />
        <Stat label="Loop Score" value={`${health.loopScore}`} sub="0-100" />
      </div>

      {health.alerts.length > 0 && (
        <Card title="Alertas (degradación graceful)">
          <ul className="list-disc pl-5 text-sm space-y-1">
            {health.alerts.map((a, i) => <li key={i} className="text-amber-300">{a}</li>)}
          </ul>
        </Card>
      )}

      <div className="grid md:grid-cols-2 gap-4">
        <Card title="CAPA 1 · Matchmaker (alook-style) — ACTUADOR">
          {needs.length === 0 ? (
            <EmptyState>No hay necesidades activas. Crea un Issue, Bounty o Reto.</EmptyState>
          ) : (
            <div className="space-y-2">
              {matches.map((m, i) => {
                const done = dispatched.some((d) => d.need.id === m.need.id && d.participant === m.participant)
                return (
                  <div key={i} className="border border-white/10 rounded p-2 text-sm">
                    <div className="font-medium">[{m.need.source}] {m.need.title}</div>
                    <div className="text-xs text-white/50">
                      → <b>{m.participant}</b> · afinidad {m.score} · {m.reason}
                    </div>
                    <Btn onClick={() => dispatch(m)} disabled={done}>
                      {done ? 'Despachado ✓' : 'Despachar (CDS)'}
                    </Btn>
                  </div>
                )
              })}
            </div>
          )}
        </Card>

        <Card title="CAPA 2 · Capacidades (peso de match)">
          {caps.length === 0 ? (
            <EmptyState>Aún no hay participantes con contribución registrada.</EmptyState>
          ) : (
            <div className="space-y-1 text-sm">
              {caps.slice(0, 8).map((c) => (
                <div key={c.participant} className="flex justify-between border-b border-white/5 py-1">
                  <span>{c.participant}</span>
                  <span className="text-cyan-300">peso {c.weight}</span>
                </div>
              ))}
            </div>
          )}
        </Card>
      </div>

      <Card title="CAPA 1.5 · Decisiones ratificadas (CDS→OAD/COS) — ACTUADOR P1">
        {integral.decisions.length === 0 ? (
          <EmptyState>Aún no hay decisiones. Despacha un match o ejecuta un advisory FRS.</EmptyState>
        ) : (
          <div className="space-y-2">
            {integral.decisions.map((d) => {
              const applied = integral.designs.some((x) => x.title === d.decision) || integral.labor.some((x) => x.projectId === d.id)
              return (
                <div key={d.id} className="border border-white/10 rounded p-2 text-sm">
                  <div className="font-medium">{d.decision}</div>
                  <div className="text-xs text-white/50">{d.context} · {d.date ? new Date(d.date).toLocaleDateString('es') : ''}</div>
                  <Btn onClick={() => pipeApply(d.id)} disabled={applied}>{applied ? 'Aplicada ✓' : 'Aplicar (OAD/COS)'}</Btn>
                </div>
              )
            })}
          </div>
        )}
      </Card>

      <Card title="CAPA 0 · Routing de Feedback FRS (automaton-style) — ACTUADOR">
        <div className="flex flex-wrap gap-2 items-end">
          <div className="flex flex-col">
            <label className="text-xs text-white/60">Hallazgo</label>
            <input className="bg-black/30 border border-white/10 rounded px-2 py-1 text-sm w-64" value={finding}
              onChange={(e) => setFinding(e.target.value)} placeholder="ej. concentración de créditos" />
          </div>
          <div className="flex flex-col">
            <label className="text-xs text-white/60">Severidad</label>
            <select className="bg-black/30 border border-white/10 rounded px-2 py-1 text-sm" value={severity}
              onChange={(e) => setSeverity(e.target.value as 'info' | 'warning' | 'critical')}>
              <option value="info">info</option>
              <option value="warning">warning</option>
              <option value="critical">critical</option>
            </select>
          </div>
          <Btn onClick={runAdvisory}>Ejecutar routing FRS</Btn>
        </div>
        {routes.length > 0 && (
          <div className="mt-2 space-y-1 text-sm">
            {routes.map((r, i) => (
              <div key={i} className="flex items-center gap-2">
                <Badge color="bg-emerald-500/20 text-emerald-300">{r.target as FrsTarget}</Badge>
                <span>{r.action}</span>
              </div>
            ))}
          </div>
        )}
        {advisoryLog.length > 0 && (
          <div className="mt-2 text-xs text-amber-300/80">
            Ejecutado: {advisoryLog.slice(-3).map((l, i) => <div key={i}>• {l}</div>)}
          </div>
        )}
      </Card>

      <p className="text-xs text-white/40">Pipeline anidado: FRS observa → CDS+Matchmaker decide → OAD/COS/ITC ejecuta.
        ACTUADOR: "Despachar" crea un Issue CDS ratificado; "Ejecutar routing FRS" crea advisory + rota ZNU si hay concentración.
        Degradación graceful: si un órgano falla, escala a Círculo Gaia. Editable por el dueño del nodo.</p>
    </div>
  )
}
