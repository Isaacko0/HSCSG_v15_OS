import { useMemo, useState } from 'react'
import { Card, Stat, Badge, EmptyState } from '@components/ui'
import {
  computeCapabilities, collectNeeds, matchmaker, pipelineHealth, routeFeedback,
  type FrsTarget,
} from '@core/lib/pipeline'
import { useAppStore } from '@core/state/store'

export function Pipeline() {
  const { integral, gaia, symbiosky, democracia, aprender } = useAppStore()

  // Capacidades y necesidades se recomputan en vivo (sub-loop del pipeline)
  const caps = useMemo(() => computeCapabilities({ integral, credibility: symbiosky, democracia, aprender }), [integral, symbiosky, democracia, aprender])
  const needs = useMemo(() => collectNeeds({ integral, gaia, aprender }), [integral, gaia, aprender])
  const matches = useMemo(() => matchmaker(needs, caps), [needs, caps])
  const health = useMemo(() => pipelineHealth(needs, matches, integral), [needs, matches, integral])

  const [finding, setFinding] = useState('')
  const [severity, setSeverity] = useState<'info' | 'warning' | 'critical'>('warning')
  const routes = useMemo(() => (finding.trim() ? routeFeedback(finding, severity) : []), [finding, severity])

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
        <Card title="CAPA 1 · Matchmaker (alook-style)">
          {needs.length === 0 ? (
            <EmptyState>No hay necesidades activas. Crea un Issue, Bounty o Reto.</EmptyState>
          ) : (
            <div className="space-y-2">
              {matches.map((m, i) => (
                <div key={i} className="border border-white/10 rounded p-2 text-sm">
                  <div className="font-medium">[{m.need.source}] {m.need.title}</div>
                  <div className="text-xs text-white/50">
                    → <b>{m.participant}</b> · afinidad {m.score} · {m.reason}
                  </div>
                </div>
              ))}
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

      <Card title="CAPA 0 · Routing de Feedback FRS (automaton-style)">
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
      </Card>

      <p className="text-xs text-white/40">Pipeline anidado: FRS observa → CDS+Matchmaker decide → OAD/COS/ITC ejecuta.
        Degradación graceful: si un órgano falla, escala a Círculo Gaia. Editable por el dueño del nodo.</p>
    </div>
  )
}
