import { useState } from 'react'
import { Users, Vote, CheckCircle2 } from 'lucide-react'
import { useAppStore } from '@core/state/store'
import { Card, Stat, Btn, Badge } from '@components/ui'

export function Vecinal() {
  const { vecinal, members, raiseVecinal, castVecinalCommit, openVecinalReveal, revealVecinalVote, vecinalTally } = useAppStore()
  const [title, setTitle] = useState('Pintar mural del barrio')
  const voter = members[0]?.name ?? 'Isaac Ko'

  const prop = vecinal.propuestas[vecinal.propuestas.length - 1]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Gobernanza Vecinal E5M (Urbanika)</h1>
        <Badge color="bg-emerald-500/20 text-emerald-300"><Users className="w-3 h-3 inline" /> Barrio Centro</Badge>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <Stat label="Barrios" value={`${vecinal.barrios.length}`} sub="dominios" />
        <Stat label="Propuestas" value={`${vecinal.propuestas.length}`} sub="vecinales" />
        <Stat label="Fase" value={prop?.phase ?? '—'} sub="commit-reveal" />
        <Stat label="Delegados" value={`${vecinal.barrios[0]?.delegates.length ?? 0}`} sub="barrio" />
      </div>

      <Card title="Raise propuesta vecinal (commit-reveal)">
        <div className="flex flex-wrap gap-2 items-end">
          <input className="bg-black/30 border border-white/10 rounded px-2 py-1 text-sm w-72" value={title} onChange={(e) => setTitle(e.target.value)} />
          <Btn onClick={() => raiseVecinal('b-centro', title)}><Vote className="w-4 h-4 inline" /> Crear propuesta</Btn>
        </div>
        <p className="text-xs text-white/50 mt-2">Reusa el patrón commit-reveal de Symbiosky: los vecinos comprometen su voto (hash) en fase commit, luego lo revelan. Evita coerción y voto estratégico.</p>
      </Card>

      {prop && (
        <Card title={`Propuesta: ${prop.title}`}>
          <div className="text-sm mb-2">Fase: <b className="text-emerald-300">{prop.phase}</b> · Barrio: {prop.barrioId}</div>
          <div className="flex flex-wrap gap-2">
            <Btn variant="ghost" disabled={prop.phase !== 'commit'} onClick={() => castVecinalCommit(prop.id, voter, 'si')}>Comprometer (voter: {voter})</Btn>
            <Btn variant="ghost" disabled={prop.phase !== 'commit'} onClick={() => openVecinalReveal(prop.id)}>Abrir reveal</Btn>
            <Btn variant="ghost" disabled={prop.phase !== 'reveal'} onClick={() => revealVecinalVote(prop.id, voter, 'si')}>Revelar SI</Btn>
            <Btn variant="ghost" disabled={prop.phase !== 'reveal'} onClick={() => revealVecinalVote(prop.id, voter, 'no')}>Revelar NO</Btn>
          </div>
          {prop.phase === 'closed' && (
            <div className="mt-2 text-sm flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Resultado: {JSON.stringify(vecinalTally(prop.id))}
            </div>
          )}
          <p className="text-xs text-white/50 mt-2">Commits (hashes): {Object.keys(prop.commits).length} · Votos revelados: {Object.keys(prop.votes).length}</p>
        </Card>
      )}

      <p className="text-xs text-white/40">Asimilado de Urbanika/Gobernanza_Vecinal_E5M + Web3GovernanceForum (NEAR BOS). Extirpado: NEAR BOS, wallet. Conservado: foro vecinal peer-to-peer + commit-reveal para decisión sin coerción.</p>
    </div>
  )
}
