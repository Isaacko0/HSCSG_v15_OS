import { useState } from 'react'
import { Card, Stat, Badge, Btn, EmptyState } from '@components/ui'
import { consensusStrength } from '@core/lib/oracle'
import { useAppStore } from '@core/state/store'

export function Oraculo() {
  const { oraculo, askOracle, castOracleVote, resolveOracleQuery } = useAppStore()
  const [q, setQ] = useState('')
  const [outcomes, setOutcomes] = useState('Sí,No')
  const [juror, setJuror] = useState('nodo')
  const [vote, setVote] = useState('Sí')
  const [stake, setStake] = useState(10)

  const active = oraculo.queries.filter((x) => !x.resolved)
  const resolved = oraculo.queries.filter((x) => x.resolved)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Oráculo de Hechos (Realitio / Kleros)</h1>
        <Badge color="bg-amber-500/20 text-amber-300">resuelve disputas de hecho</Badge>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        <Stat label="Consultas" value={`${oraculo.queries.length}`} sub="totales" />
        <Stat label="Abiertas" value={`${active.length}`} sub="por votar" />
        <Stat label="Resueltas" value={`${resolved.length}`} sub="consenso" />
      </div>

      <Card title="Nueva consulta de hecho">
        <div className="flex flex-wrap gap-2 items-end">
          <div className="flex flex-col">
            <label className="text-xs text-white/60">Pregunta</label>
            <input className="bg-black/30 border border-white/10 rounded px-2 py-1 text-sm w-64" value={q}
              onChange={(e) => setQ(e.target.value)} placeholder="¿El contrato X fue cumplido?" />
          </div>
          <div className="flex flex-col">
            <label className="text-xs text-white/60">Opciones (coma)</label>
            <input className="bg-black/30 border border-white/10 rounded px-2 py-1 text-sm w-32" value={outcomes}
              onChange={(e) => setOutcomes(e.target.value)} />
          </div>
          <Btn disabled={!q.trim()} onClick={() => { askOracle(q.trim(), outcomes.split(',').map((s) => s.trim())); setQ('') }}>
            Preguntar
          </Btn>
        </div>
      </Card>

      <Card title="Votar como jurado (rational price discoverer)">
        <div className="flex flex-wrap gap-2 items-end">
          <div className="flex flex-col">
            <label className="text-xs text-white/60">Jurado</label>
            <input className="bg-black/30 border border-white/10 rounded px-2 py-1 text-sm w-24" value={juror}
              onChange={(e) => setJuror(e.target.value)} />
          </div>
          <div className="flex flex-col">
            <label className="text-xs text-white/60">Outcome</label>
            <input className="bg-black/30 border border-white/10 rounded px-2 py-1 text-sm w-24" value={vote}
              onChange={(e) => setVote(e.target.value)} />
          </div>
          <div className="flex flex-col">
            <label className="text-xs text-white/60">Stake ZNU</label>
            <input type="number" className="bg-black/30 border border-white/10 rounded px-2 py-1 text-sm w-24"
              value={stake} onChange={(e) => setStake(Number(e.target.value))} />
          </div>
          <Btn disabled={!active[0]} onClick={() => active[0] && castOracleVote(active[0].id, juror.trim(), vote.trim(), stake)}>
            Votar consulta abierta
          </Btn>
        </div>
      </Card>

      {oraculo.queries.length === 0 ? (
        <EmptyState>No hay consultas. Crea una arriba para resolver hechos por consenso de jurados.</EmptyState>
      ) : (
        <div className="space-y-3">
          {oraculo.queries.map((x) => (
            <Card key={x.id} title={x.question}>
              <div className="text-sm space-y-1">
                <div>Opciones: {x.outcomes.join(' / ')}</div>
                <div>Votos: {Object.keys(x.votes).length}</div>
                {x.resolved ? (
                  <div className="mt-1">
                    <Badge color="bg-emerald-500/20 text-emerald-300">
                      Resultado: {x.finalOutcome} · consenso {consensusStrength(x)}%
                    </Badge>
                  </div>
                ) : (
                  <Btn className="mt-2" onClick={() => resolveOracleQuery(x.id)}>Resolver por consenso</Btn>
                )}
              </div>
            </Card>
          ))}
        </div>
      )}
      <p className="text-xs text-white/40">Editable por el dueño del nodo. Se guarda localmente.
        Disidentes pierden stake (reputationDecay).</p>
    </div>
  )
}
