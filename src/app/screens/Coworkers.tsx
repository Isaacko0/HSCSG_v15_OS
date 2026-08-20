import { useState } from 'react'
import { Users, EyeOff, Hand, HandMetal, MessageSquarePlus, Send } from 'lucide-react'
import { useAppStore } from '@core/state/store'
import { Card, Badge, Btn, Stat } from '@components/ui'
import { standingRoleMessage } from '@core/state/coworkers'

export function Coworkers() {
  const coworkers = useAppStore((s) => s.coworkers)
  const addCoworker = useAppStore((s) => s.addCoworker)
  const toggleCoworkerHidden = useAppStore((s) => s.toggleCoworkerHidden)
  const setCoworkerControl = useAppStore((s) => s.setCoworkerControl)
  const startChannel = useAppStore((s) => s.startChannel)
  const postToChannel = useAppStore((s) => s.postToChannel)

  const [name, setName] = useState('')
  const [title, setTitle] = useState('')
  const [role, setRole] = useState('')
  const [activeChannel, setActiveChannel] = useState<string | null>(null)
  const [draft, setDraft] = useState('')

  const visible = coworkers.coworkers.filter((c) => !c.hidden)
  const ch = activeChannel ? coworkers.channels.find((c) => c.id === activeChannel) : null
  const chCoworker = ch ? coworkers.coworkers.find((c) => c.id === ch.coworkerId) : null

  const takeControl = (id: string) =>
    setCoworkerControl(id, { by: 'admin', since: Date.now(), reason: 'intervención manual' })
  const releaseControl = (id: string) => setCoworkerControl(id, null)

  const send = () => {
    if (!ch || !draft.trim()) return
    postToChannel(ch.id, 'human', draft.trim())
    // respuesta simulada del Bot (anfibio: local, sin LLM externa)
    const cw = coworkers.coworkers.find((c) => c.id === ch.coworkerId)
    const reply = cw
      ? `[${cw.name}] recibido. Rol permanente: ${cw.title}. (respuesta simulada local — sin LLM externa)`
      : 'ok'
    setTimeout(() => postToChannel(ch.id, 'bot', reply), 300)
    setDraft('')
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Users className="w-6 h-6 text-sky-400" />
        <h1 className="text-xl font-semibold">Coworkers</h1>
        <Badge color="bg-sky-500/20 text-sky-300">agentes con rol permanente · OpenBot</Badge>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <Stat label="Coworkers" value={`${coworkers.coworkers.length}`} sub="perfiles" />
        <Stat label="Visibles" value={`${visible.length}`} sub="en lista" />
        <Stat label="Canales" value={`${coworkers.channels.length}`} sub="abiertos" />
        <Stat label="Con control humano" value={`${coworkers.coworkers.filter((c) => c.control).length}`} sub="handover" />
      </div>

      <Card title="Crear coworker">
        <div className="grid md:grid-cols-3 gap-2 mb-2">
          <input className="bg-black/30 rounded px-2 py-1 text-sm outline-none" placeholder="nombre" value={name} onChange={(e) => setName(e.target.value)} />
          <input className="bg-black/30 rounded px-2 py-1 text-sm outline-none" placeholder="título" value={title} onChange={(e) => setTitle(e.target.value)} />
          <input className="bg-black/30 rounded px-2 py-1 text-sm outline-none" placeholder="rol permanente" value={role} onChange={(e) => setRole(e.target.value)} />
        </div>
        <Btn onClick={() => { if (name && title && role) { addCoworker({ name, title, role }); setName(''); setTitle(''); setRole('') } }}>Crear</Btn>
      </Card>

      <div className="grid md:grid-cols-2 gap-4">
        <Card title="Roster">
          <div className="space-y-2">
            {visible.map((c) => (
              <div key={c.id} className="p-3 rounded-lg border border-white/10 bg-white/5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{c.name}</p>
                    <p className="text-xs text-white/50">{c.title} · {c.visibility}</p>
                  </div>
                  <div className="flex gap-1">
                    <button onClick={() => toggleCoworkerHidden(c.id)} className="text-white/40 hover:text-white" title="ocultar"><EyeOff className="w-4 h-4" /></button>
                    <button onClick={() => { const id = startChannel(c.id); setActiveChannel(id) }} className="text-sky-300 hover:text-sky-100" title="abrir canal"><MessageSquarePlus className="w-4 h-4" /></button>
                  </div>
                </div>
                <p className="text-xs text-white/60 mt-1">{c.role}</p>
                {c.control ? (
                  <div className="flex items-center justify-between mt-2 bg-amber-500/10 px-2 py-1 rounded">
                    <span className="text-xs text-amber-300 flex items-center gap-1"><HandMetal className="w-4 h-4" /> control humano: {c.control.by}</span>
                    <Btn onClick={() => releaseControl(c.id)}>Liberar</Btn>
                  </div>
                ) : (
                  <button onClick={() => takeControl(c.id)} className="mt-2 text-xs text-amber-300 hover:text-amber-100 flex items-center gap-1"><Hand className="w-4 h-4" /> tomar control</button>
                )}
                <p className="text-[10px] text-white/30 mt-1 font-mono">standing: {standingRoleMessage(c).split('\n')[0]}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card title="Canal">
          {!ch ? (
            <p className="text-white/40 text-sm">Abre un canal desde el roster.</p>
          ) : (
            <div className="flex flex-col h-80">
              <p className="text-sm text-white/60 mb-2">Canal con {chCoworker?.name}</p>
              <div className="flex-1 overflow-y-auto space-y-2 mb-2">
                {ch.messages.length === 0 && <p className="text-white/30 text-xs">sin mensajes</p>}
                {ch.messages.map((m) => (
                  <div key={m.id} className={`text-sm p-2 rounded max-w-[85%] ${m.from === 'human' ? 'bg-sky-500/20 ml-auto' : 'bg-white/5'}`}>
                    {m.text}
                  </div>
                ))}
              </div>
              <div className="flex gap-2">
                <input className="flex-1 bg-black/30 rounded px-2 py-1 text-sm outline-none" placeholder="mensaje…" value={draft} onChange={(e) => setDraft(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && send()} />
                <Btn onClick={send}><Send className="w-4 h-4" /></Btn>
              </div>
            </div>
          )}
        </Card>
      </div>
    </div>
  )
}
