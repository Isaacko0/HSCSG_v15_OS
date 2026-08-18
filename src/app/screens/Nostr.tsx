import { useState } from 'react'
import { Radio, Link2, ShieldCheck } from 'lucide-react'
import { useAppStore } from '@core/state/store'
import { Card, Stat, Btn, Badge } from '@components/ui'
import { buildEvent, verifyEventShape } from '@core/lib/nostrRelay'

export function Nostr() {
  const relay = useAppStore((s) => s.nostrRelay)
  const publishNostr = useAppStore((s) => s.publishNostr)
  const setRelayCfg = useAppStore((s) => s.setRelayCfg)
  const connectRelay = useAppStore((s) => s.connectRelay)
  const disconnectRelay = useAppStore((s) => s.disconnectRelay)
  const [content, setContent] = useState('')
  const [pubkey, setPubkey] = useState('npub_cosateca')

  const publish = () => {
    const ev = buildEvent(pubkey, 1, content)
    publishNostr(ev)
    setContent('')
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Radio className="w-7 h-7 text-emerald-400" />
        <div>
          <h1 className="text-xl font-semibold text-white">Transporte Nostr · Buzz</h1>
          <p className="text-sm text-slate-400">Capa de transporte del nodo (block/buzz asimilado) — anfibia: local RAO ↔ relay.</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Stat label="Modo" value={relay.config.localOnly ? 'Offline (RAO local)' : 'Conectado'} />
        <Stat label="Comunidad" value={relay.config.community} />
        <Stat label="Eventos en log" value={String(relay.events.length)} />
      </div>
      <Card>
        <h2 className="text-sm font-semibold text-white mb-3">Configurar relay</h2>
        <div className="flex gap-2 flex-wrap items-center">
          <input className="bg-slate-800 text-white rounded px-2 py-1 text-sm" placeholder="comunidad" value={relay.config.community} onChange={(e) => setRelayCfg({ community: e.target.value })} />
          <input className="bg-slate-800 text-white rounded px-2 py-1 text-sm flex-1" placeholder="wss://relay…" value={relay.config.url} onChange={(e) => setRelayCfg({ url: e.target.value })} />
          {relay.connected
            ? <Btn onClick={disconnectRelay}><Link2 className="w-4 h-4" /> Desconectar</Btn>
            : <Btn onClick={() => connectRelay(relay.config.url)}><ShieldCheck className="w-4 h-4" /> Conectar</Btn>}
        </div>
        <p className="text-xs text-slate-500 mt-2">En modo offline el log se guarda localmente (RAO). Al conectar, el mismo evento firmado viaja a tu relay Nostr.</p>
      </Card>
      <Card>
        <h2 className="text-sm font-semibold text-white mb-3">Publicar evento firmado</h2>
        <div className="flex gap-2 flex-wrap">
          <input className="bg-slate-800 text-white rounded px-2 py-1 text-sm" placeholder="pubkey" value={pubkey} onChange={(e) => setPubkey(e.target.value)} />
          <input className="bg-slate-800 text-white rounded px-2 py-1 text-sm flex-1" placeholder="contenido del evento" value={content} onChange={(e) => setContent(e.target.value)} />
          <Btn onClick={publish}>Firmar y publicar</Btn>
        </div>
        <div className="mt-3 space-y-1">
          {relay.events.slice().reverse().map((e) => (
            <div key={e.id} className="text-xs bg-slate-900 rounded p-2 flex items-center gap-2">
              <Badge color={verifyEventShape(e) ? 'border-emerald-500 text-emerald-400' : 'border-red-500 text-red-400'}>kind {e.kind}</Badge>
              <span className="text-slate-400">{e.content}</span>
            </div>
          ))}
          {relay.events.length === 0 && <p className="text-xs text-slate-500">Sin eventos aún.</p>}
        </div>
      </Card>
    </div>
  )
}
