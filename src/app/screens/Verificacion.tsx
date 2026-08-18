import { useState } from 'react'
import { ShieldCheck, CheckCircle2, XCircle, Gauge } from 'lucide-react'
import { useAppStore } from '@core/state/store'
import { Card, Stat, Btn, Badge } from '@components/ui'

export function Verificacion() {
  const por = useAppStore((s) => s.proofOfResponse)
  const issuePor = useAppStore((s) => s.issuePor)
  const respondPor = useAppStore((s) => s.respondPor)
  const provePorFailure = useAppStore((s) => s.provePorFailure)
  const [from, setFrom] = useState('Alice')
  const [to, setTo] = useState('Bob')
  const [payload, setPayload] = useState('dar datos X')
  const [result, setResult] = useState<string | null>(null)

  const issue = () => {
    issuePor(from, to, payload, 5000)
    setResult('Request emitido. Bob debe responder en 5s o se prueba fallo.')
  }

  const respondLast = () => {
    const last = por.requests[por.requests.length - 1]
    if (!last) return
    respondPor(last.id, to, 'datos X entregados')
    setResult('Bob respondió firmado a tiempo ✓')
  }

  const proveLast = () => {
    const last = por.requests[por.requests.length - 1]
    if (!last) return
    provePorFailure(last.id, 'sin respuesta en b')
    setResult('Prueba de fallo generada + penalización de stake ✓')
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Gauge className="w-7 h-7 text-emerald-400" />
        <div>
          <h1 className="text-xl font-semibold text-white">Verificación · Proof of Response</h1>
          <p className="text-sm text-slate-400">Respuesta firmada o prueba de fallo verificable (NEAR AI asimilado) — anfibio offline/RAO.</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Stat label="Modo" value={por.mode === 'offline' ? 'Offline (RAO)' : 'Conectado'} />
        <Stat label="Requests" value={String(por.requests.length)} />
        <Stat label="Respuestas" value={String(por.responses.length)} />
        <Stat label="Penalizaciones" value={String(por.penalties.length)} />
      </div>
      <Card>
        <h2 className="text-sm font-semibold text-white mb-3">Emitir request firmado</h2>
        <div className="flex gap-2 flex-wrap items-center">
          <input className="bg-slate-800 text-white rounded px-2 py-1 text-sm" placeholder="from" value={from} onChange={(e) => setFrom(e.target.value)} />
          <input className="bg-slate-800 text-white rounded px-2 py-1 text-sm" placeholder="to" value={to} onChange={(e) => setTo(e.target.value)} />
          <input className="bg-slate-800 text-white rounded px-2 py-1 text-sm flex-1" placeholder="payload" value={payload} onChange={(e) => setPayload(e.target.value)} />
          <Btn onClick={issue}><ShieldCheck className="w-4 h-4" /> Emitir</Btn>
        </div>
        <div className="flex gap-2 mt-3">
          <Btn onClick={respondLast}><CheckCircle2 className="w-4 h-4" /> Bob responde</Btn>
          <Btn onClick={proveLast}><XCircle className="w-4 h-4" /> Probar fallo</Btn>
        </div>
      </Card>
      <Card>
        <h2 className="text-sm font-semibold text-white mb-3">Requests</h2>
        <div className="space-y-1">
          {por.requests.slice().reverse().map((r) => {
            const ok = por.responses.some((x) => x.requestId === r.id)
            const fail = por.failures.some((x) => x.requestId === r.id)
            return (
              <div key={r.id} className="text-xs bg-slate-900 rounded p-2 flex items-center gap-2">
                <Badge color={ok ? 'border-emerald-500 text-emerald-400' : fail ? 'border-red-500 text-red-400' : 'border-slate-600 text-slate-400'}>
                  {ok ? 'respondido' : fail ? 'fallo probado' : 'pendiente'}
                </Badge>
                <span className="text-slate-400">{r.from} → {r.to}: {r.payload}</span>
              </div>
            )
          })}
          {por.requests.length === 0 && <p className="text-xs text-slate-500">Sin requests.</p>}
        </div>
      </Card>
      {result && <p className="text-xs text-emerald-400">{result}</p>}
    </div>
  )
}
