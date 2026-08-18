import { useState } from 'react'
import { BadgeCheck, ShieldCheck } from 'lucide-react'
import { useAppStore } from '@core/state/store'
import { Card, Stat, Btn, Badge } from '@components/ui'

export function SoberaniaCredito() {
  const { sovereignCredit, members, addAttestation, setSovereignMode, exportSovereignAttestation, sovereignScore } = useAppStore()
  const [subject, setSubject] = useState(members[0]?.name ?? 'Isaac Ko')
  const [issuer, setIssuer] = useState(members[1]?.name ?? 'Vecino')
  const [claim, setClaim] = useState('Pagó cuota común a tiempo')
  const [weight, setWeight] = useState(80)

  const scores = members.map((m) => ({ name: m.name, score: sovereignScore(m.name) }))

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Soberanía de Crédito (Urbanika DeFi IRL)</h1>
        <Badge color={sovereignCredit.mode === 'postmonetario' ? 'bg-emerald-500/20 text-emerald-300' : 'bg-sky-500/20 text-sky-300'}>
          {sovereignCredit.mode === 'postmonetario' ? 'ZNU local' : 'Conectado / portable'}
        </Badge>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <Stat label="Attestations" value={`${Object.values(sovereignCredit.scores).reduce((s, x) => s + x.attestations.length, 0)}`} sub="verificables" />
        <Stat label="Miembros con score" value={`${scores.filter((s) => s.score > 0).length}`} sub="evaluados" />
        <Stat label="Modo" value={sovereignCredit.mode === 'postmonetario' ? 'Local' : 'DeFi'} sub="anfibio" />
        <Stat label="Rango" value="0-100" sub="score ponderado" />
      </div>

      <Card title="Emitir attestation (trust score gamificado)">
        <div className="flex flex-wrap gap-2 items-end">
          <div className="flex flex-col"><label className="text-xs text-white/60">Sujeto</label>
            <select className="bg-black/30 border border-white/10 rounded px-2 py-1 text-sm" value={subject} onChange={(e) => setSubject(e.target.value)}>
              {members.map((m) => <option key={m.name} value={m.name}>{m.name}</option>)}</select></div>
          <div className="flex flex-col"><label className="text-xs text-white/60">Emisor</label>
            <select className="bg-black/30 border border-white/10 rounded px-2 py-1 text-sm" value={issuer} onChange={(e) => setIssuer(e.target.value)}>
              {members.map((m) => <option key={m.name} value={m.name}>{m.name}</option>)}</select></div>
          <input className="bg-black/30 border border-white/10 rounded px-2 py-1 text-sm w-56" value={claim} onChange={(e) => setClaim(e.target.value)} />
          <input type="number" className="w-16 px-1 py-1 bg-black/30 border border-white/10 rounded text-sm" value={weight} onChange={(e) => setWeight(Number(e.target.value))} />
          <Btn onClick={() => addAttestation(subject, issuer, claim, weight / 100)}>Emitir</Btn>
        </div>
        <p className="text-xs text-white/50 mt-2">Peso 0-100 → normalizado 0-1. El score usa promedio con outlier removal (Score Schelling). En modo conectado, exportable como attestation DeFi/NEAR.</p>
      </Card>

      <Card title="Scores soberanos">
        {scores.map((s) => (
          <div key={s.name} className="flex items-center justify-between text-sm p-2 rounded border border-white/10">
            <span><ShieldCheck className="w-4 h-4 inline text-emerald-400" /> {s.name}</span>
            <span className="font-mono">{s.score}</span>
          </div>
        ))}
        <Btn variant="ghost" className="mt-2" onClick={() => setSovereignMode(sovereignCredit.mode === 'postmonetario' ? 'conectado' : 'postmonetario')}>
          Cambiar modo {sovereignCredit.mode === 'postmonetario' ? '→ conectado' : '→ local'}
        </Btn>
        {sovereignCredit.mode === 'conectado' && subject && (
          <p className="text-xs text-sky-300 mt-1"><BadgeCheck className="w-3 h-3 inline" /> Export: {JSON.stringify(exportSovereignAttestation(subject))}</p>
        )}
      </Card>

      <p className="text-xs text-white/40">Asimilado de Urbanika/DeFi-Adoption-IRL (deCredit Score). Extirpado: smart wallet Candide, Aave, contratos DeFi. Conservado: attestations verificables + trust score ponderado + gamificación.</p>
    </div>
  )
}
