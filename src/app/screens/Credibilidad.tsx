import { useState } from 'react'
import { Card, Stat, Badge, Btn, EmptyState } from '@components/ui'
import {
  SYMBIOSKY_PARAMS, weightedConviction, meetsThreshold,
  protectedAmount, maxConvictionForLock, type ConvictionLevel,
} from '@core/lib/symbiosky'
import { useAppStore } from '@core/state/store'

export function Credibilidad() {
  const { symbiosky, symAddProposal, symCreateLock, symCloseProposal } = useAppStore()
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('Nodo Cosateca')
  const [score, setScore] = useState(8)
  const [conv, setConv] = useState<ConvictionLevel>(3)
  const [lockZNU, setLockZNU] = useState(100)
  const [lockDays, setLockDays] = useState(365)

  const memberIds = Object.keys(symbiosky.balances)
  const voter = memberIds[0] ?? 'nodo'

  const proposals = symbiosky.proposals
  const totalVotes = proposals.reduce((a, p) => a + Object.keys(p.votes).length, 0)
  const funded = Object.values(symbiosky.results).filter((r) => r.funded).length
  const protectedZ = protectedAmount(symbiosky.locks, voter)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Credibilidad por Convicción (Symbiosky)</h1>
        <Badge color="bg-emerald-500/20 text-emerald-300">Monetiza credibilidad, no clics</Badge>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <Stat label="Propuestas" value={`${proposals.length}`} sub="knowledge work" />
        <Stat label="Votos" value={`${totalVotes}`} sub={`umbral ${SYMBIOSKY_PARAMS.MIN_VOTES}`} />
        <Stat label="Financiadas" value={`${funded}`} sub="score ≥ 5" />
        <Stat label="Protegido" value={`${protectedZ}`} sub="ZNU anti-decay" />
      </div>

      {/* Parámetros extraídos del whitepaper */}
      <Card title="Parámetros (whitepaper + contratos)">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
          <div><b>Decay</b>: {SYMBIOSKY_PARAMS.INACTIVITY_DECAY_BPS / 100}%/año (exceso)</div>
          <div><b>Lock máx</b>: {SYMBIOSKY_PARAMS.MAX_LOCK_DURATION_DAYS / 365} años</div>
          <div><b>Min votos</b>: {SYMBIOSKY_PARAMS.MIN_VOTES}</div>
          <div><b>Min convicción</b>: {SYMBIOSKY_PARAMS.MIN_CONVICTION}</div>
          <div><b>Umbral score</b>: {SYMBIOSKY_PARAMS.SCORE_THRESHOLD}</div>
          <div><b>Multiplicador</b>: {SYMBIOSKY_PARAMS.REWARD_MULTIPLIER}</div>
          <div><b>Max reward</b>: {SYMBIOSKY_PARAMS.MAX_REWARD_PER_PROPOSAL}</div>
          <div><b>Distribución</b>: {SYMBIOSKY_PARAMS.DISTRIBUTION_DAYS} días</div>
        </div>
      </Card>

      {/* Crear propuesta */}
      <Card title="Nueva propuesta de conocimiento">
        <div className="flex flex-wrap gap-2 items-end">
          <div className="flex flex-col">
            <label className="text-xs text-white/60">Título</label>
            <input className="bg-black/30 border border-white/10 rounded px-2 py-1 text-sm" value={title}
              onChange={(e) => setTitle(e.target.value)} placeholder="ej. Investigación sobre suelos regenerativos" />
          </div>
          <div className="flex flex-col">
            <label className="text-xs text-white/60">Autor</label>
            <input className="bg-black/30 border border-white/10 rounded px-2 py-1 text-sm" value={author}
              onChange={(e) => setAuthor(e.target.value)} />
          </div>
          <Btn disabled={!title.trim()} onClick={() => { symAddProposal(title.trim(), author.trim()); setTitle('') }}>
            Crear propuesta
          </Btn>
        </div>
      </Card>

      {/* Votar con convicción */}
      <Card title="Votar con convicción (conviction voting)">
        <div className="flex flex-wrap gap-2 items-end">
          <div className="flex flex-col">
            <label className="text-xs text-white/60">Score 1-10</label>
            <input type="number" min={1} max={10} className="bg-black/30 border border-white/10 rounded px-2 py-1 text-sm w-24"
              value={score} onChange={(e) => setScore(Number(e.target.value))} />
          </div>
          <div className="flex flex-col">
            <label className="text-xs text-white/60">Nivel convicción</label>
            <select className="bg-black/30 border border-white/10 rounded px-2 py-1 text-sm"
              value={conv} onChange={(e) => setConv(Number(e.target.value) as ConvictionLevel)}>
              {[1, 2, 3, 4, 5].map((n) => <option key={n} value={n}>{n} (lock {convLockText(n)})</option>)}
            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-xs text-white/60">Lock ZNU (∝ confianza)</label>
            <input type="number" className="bg-black/30 border border-white/10 rounded px-2 py-1 text-sm w-28"
              value={lockZNU} onChange={(e) => setLockZNU(Number(e.target.value))} />
          </div>
          <div className="flex flex-col">
            <label className="text-xs text-white/60">Lock días (hasta {SYMBIOSKY_PARAMS.MAX_LOCK_DURATION_DAYS})</label>
            <input type="number" className="bg-black/30 border border-white/10 rounded px-2 py-1 text-sm w-32"
              value={lockDays} onChange={(e) => setLockDays(Number(e.target.value))} />
          </div>
          <Btn onClick={() => {
            if (proposals[0]) symCreateLock(voter, lockZNU, conv, lockDays)
          }}>Bloquear convicción</Btn>
        </div>
        <p className="text-xs text-white/50 mt-2">Anti-whale: influencia cara = iliquidez. Nivel máx de convicción por lock:
          {' '}{maxConvictionForLock(lockDays)} (lock {lockDays}d).</p>
      </Card>

      {/* Lista de propuestas con resultados */}
      {proposals.length === 0 ? (
        <EmptyState>Aún no hay propuestas. Crea una arriba para empezar a monetizar credibilidad.</EmptyState>
      ) : (
        <div className="space-y-3">
          {proposals.map((p) => {
            const { meanScore, totalConviction } = weightedConviction(p)
            const passes = meetsThreshold(p)
            const res = symbiosky.results[p.id]
            return (
              <Card key={p.id} title={p.title}>
                <div className="text-sm space-y-1">
                  <div>Autor: <b>{p.author}</b></div>
                  <div>Votos: {Object.keys(p.votes).length} · Convicción ponderada: {totalConviction}</div>
                  <div>Score medio ponderado: <b>{meanScore.toFixed(2)}</b></div>
                  <div>
                    {passes
                      ? <Badge color="bg-emerald-500/20 text-emerald-300">Cumple umbral</Badge>
                      : <Badge color="bg-rose-500/20 text-rose-300">No cumple umbral (50 votos / 10 conv)</Badge>}
                  </div>
                  {res ? (
                    <div className="mt-2">
                      {res.funded
                        ? <Badge color="bg-emerald-500/20 text-emerald-300">Financiada · reward {res.reward} ZNU</Badge>
                        : <Badge color="bg-rose-500/20 text-rose-300">No financiada (score &lt; 5 o sin umbral)</Badge>}
                    </div>
                  ) : (
                    <Btn className="mt-2" onClick={() => symCloseProposal(p.id)}>Cerrar y calcular reward</Btn>
                  )}
                </div>
              </Card>
            )
          })}
        </div>
      )}

      <p className="text-xs text-white/40">Editable por el dueño del nodo. Se guarda localmente.
        Extirpado: EVM/Solidity, SYSKY ERC20, Bluesky/Nostr remotos → ZNU + federación DTN/AP offline-first.</p>
    </div>
  )
}

function convLockText(n: number) {
  if (n >= 5) return '≥5y'
  if (n >= 4) return '≥3y'
  if (n >= 3) return '≥2y'
  if (n >= 2) return '≥1y'
  return '<1y'
}
