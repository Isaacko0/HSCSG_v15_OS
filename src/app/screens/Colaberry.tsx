import { useState } from 'react'
import {
  Bot, UserPlus, Bell, ShieldCheck, ShieldAlert, Send,
} from 'lucide-react'
import { useAppStore } from '@core/state/store'
import { composeReply, suggestMatchPrompt } from '@core/lib/colaberry'
import { autFromCAC, pgsLM } from '@core/lib/metrics'
import { matchOffersNeeds } from '@core/lib/solarpunk'
import { Card, Stat, Btn, Badge, EmptyState } from '@components/ui'
import type { ColaberryMessage, ColaberryChannel, Onboarding } from '@core/state/colaberry'

const CHANNEL_LABELS: Record<ColaberryChannel, string> = {
  chat_colectivo: 'Chat del colectivo',
  solarpunk: 'Solarpunk · Don',
  orquestacion: 'Orquestación',
}

export function Colaberry() {
  const { colaberry, members, cac, solar, addColaberryMessage, onboardMember, addReminder } = useAppStore()
  const aut = autFromCAC(cac)
  const pgs = pgsLM(aut)
  const [tab, setTab] = useState<'chat' | 'onboarding' | 'reminders'>('chat')
  const [channel, setChannel] = useState<ColaberryChannel>('chat_colectivo')
  const [text, setText] = useState('')

  const send = () => {
    if (!text.trim()) return
    // humano escribe
    addColaberryMessage(channel, 'human', text, true, undefined, 'mensaje humano')
    // colaberry responde (simulado, gobernado por MJ)
    let reply = 'Entendido. Estoy aquí para acompañar la regeneración de la base material del nodo.'
    const lower = text.toLowerCase()
    if (/hola|hi|hey|saludo/.test(lower)) reply = `Hola, soy ${colaberry.persona.name}. ${colaberry.persona.bio}`
    else if (/necesito|busco|falta/.test(lower) && solar.needs.length) {
      const need = solar.needs[0]
      const m = matchOffersNeeds(solar.offers, solar.needs)
      reply = m.length ? suggestMatchPrompt(need.resource) + ' Encontré un match por don.' : `Anoto tu necesidad "${need.resource}". Cuando alguien ofrezca, te aviso.`
    } else if (/ley|mj|constituci/.test(lower)) reply = colaberry.persona.valuesMJ
    const gate = composeReply(reply, { pgs, pop: Math.max(members.filter((m) => m.signedSocialDNA).length, 1), usdc: 0, hitsBaseMaterial: true })
    addColaberryMessage(channel, 'colaberry', reply, gate.pass, gate.law, gate.reason)
    setText('')
  }

  const demoExtractive = () => {
    const gate = composeReply('Compra ahora este token para ganar USDC garantizado', { pgs, pop: 1, usdc: 0, hitsBaseMaterial: false })
    addColaberryMessage(channel, 'colaberry', 'Compra ahora este token para ganar USDC garantizado', gate.pass, gate.law, gate.reason)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="font-jost text-2xl md:text-3xl font-semibold flex items-center gap-2">
            <Bot className="w-7 h-7 text-violet-400" /> Colaberry · Agente Colaborador
          </h1>
          <p className="text-[var(--dim)] mt-1">Asimilado de Eliza (HR_AI_Agent-collaberry-HSCSG). Compañero del colectivo, gobernado por las 3 Leyes MJ. Sin crypto.</p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Stat label="Canales" value={`${colaberry.channels.length}`} color="text-violet-400" />
        <Stat label="Mensajes" value={`${colaberry.messages.length}`} color="text-sky-400" />
        <Stat label="Acogidos" value={`${colaberry.onboardings.length}`} color="text-emerald-400" />
        <Stat label="Recordatorios" value={`${colaberry.reminders.filter((r) => !r.done).length}`} color="text-amber-400" />
      </div>

      <Card title="Persona del agente">
        <p className="text-sm"><span className="text-[var(--dim)]">Nombre:</span> {colaberry.persona.name}</p>
        <p className="text-sm mt-1"><span className="text-[var(--dim)]">Bio:</span> {colaberry.persona.bio}</p>
        <p className="text-sm mt-1"><span className="text-[var(--dim)]">Valores MJ:</span> {colaberry.persona.valuesMJ}</p>
        <p className="text-sm mt-1"><span className="text-[var(--dim)]">Tono:</span> {colaberry.persona.tone}</p>
      </Card>

      <div className="flex gap-2 border-b border-[var(--lineq)] flex-wrap">
        {([['chat', 'Chat'], ['onboarding', 'Acogida'], ['reminders', 'Recordatorios']] as const).map(([k, l]) => (
          <button key={k} onClick={() => setTab(k)} className={tab === k ? 'px-4 py-2 font-manrope font-medium text-violet-400 border-b-2 border-violet-400' : 'px-4 py-2 font-manrope font-medium text-[var(--mut)] hover:text-white'}>{l}</button>
        ))}
      </div>

      {tab === 'chat' && (
        <div className="space-y-3">
          <div className="flex gap-2 flex-wrap">
            {colaberry.channels.map((c) => (
              <Btn key={c} variant={channel === c ? 'primary' : 'ghost'} onClick={() => setChannel(c)}>{CHANNEL_LABELS[c]}</Btn>
            ))}
          </div>
          <div className="rounded-xl border border-[var(--line)] p-3 space-y-2 min-h-[200px] max-h-[360px] overflow-y-auto">
            {colaberry.messages.filter((m) => m.channel === channel).length === 0 ? (
              <EmptyState>Sin mensajes en {CHANNEL_LABELS[channel]}. Escribe abajo para hablar con Colaberry.</EmptyState>
            ) : colaberry.messages.filter((m) => m.channel === channel).map((m: ColaberryMessage) => (
              <div key={m.id} className={`flex ${m.from === 'human' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] rounded-2xl px-3 py-2 text-sm ${m.from === 'human' ? 'bg-violet-500/20' : m.pass ? 'bg-emerald-500/10' : 'bg-red-500/10'}`}>
                  <div className="flex items-center gap-1 mb-0.5">
                    {m.from === 'human' ? <span className="text-[var(--mut)] text-xs">tú</span> : <span className="text-violet-400 text-xs">{colaberry.persona.name}</span>}
                    {!m.pass && <ShieldAlert className="w-3 h-3 text-red-400" />}
                  </div>
                  {m.text}
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-2">
            <input className="inp flex-1" value={text} onChange={(e) => setText(e.target.value)} placeholder="Escribe a Colaberry..." onKeyDown={(e) => e.key === 'Enter' && send()} />
            <Btn onClick={send}><Send className="w-4 h-4" /> Enviar</Btn>
            <Btn variant="ghost" onClick={demoExtractive}><ShieldAlert className="w-4 h-4" /> Probar lenguaje extractivo</Btn>
          </div>
          <p className="text-xs text-[var(--dim)]">El botón "lenguaje extractivo" simula un mensaje con estafa crypto: Colaberry lo bloquea por Ley I/III.</p>
        </div>
      )}

      {tab === 'onboarding' && (
        <div className="space-y-3">
          <div className="flex gap-2 items-end">
            <label className="flex flex-col gap-1 flex-1">
              <span className="text-xs text-[var(--dim)] font-manrope">Nombre del nuevo miembro</span>
              <input className="inp" id="ob-name" placeholder="p.ej. Sol Fuentes" />
            </label>
            <Btn onClick={() => { const el = document.getElementById('ob-name') as HTMLInputElement; if (el?.value.trim()) { onboardMember(el.value.trim(), channel, true); el.value = '' } }}><UserPlus className="w-4 h-4" /> Acoger (firma Social DNA)</Btn>
          </div>
          {colaberry.onboardings.length === 0 ? <EmptyState>Sin acogidas. Los nuevos miembros firman Social DNA aquí.</EmptyState> : (
            colaberry.onboardings.map((o: Onboarding) => (
              <div key={o.id} className="flex items-center justify-between p-2 rounded-lg border border-[var(--line)]">
                <span className="font-manrope text-sm">{o.memberName}</span>
                <div className="flex items-center gap-2">
                  {o.signedSocialDNA ? <Badge color="text-emerald-400"><ShieldCheck className="w-3 h-3" /> Social DNA</Badge> : <Badge color="text-[var(--mut)]">sin firma</Badge>}
                  <span className="text-xs text-[var(--dim)]">{CHANNEL_LABELS[o.channel]}</span>
                </div>
              </div>
            ))
          )}
        </div>
      )}

      {tab === 'reminders' && (
        <div className="space-y-3">
          <div className="flex gap-2 items-end">
            <label className="flex flex-col gap-1 flex-1">
              <span className="text-xs text-[var(--dim)] font-manrope">Nuevo recordatorio</span>
              <input className="inp" id="rm-text" placeholder="p.ej. Heartbeat microgrid 18:00" />
            </label>
            <Btn onClick={() => { const el = document.getElementById('rm-text') as HTMLInputElement; if (el?.value.trim()) { addReminder(channel, el.value.trim()); el.value = '' } }}><Bell className="w-4 h-4" /> Añadir</Btn>
          </div>
          {colaberry.reminders.length === 0 ? <EmptyState>Sin recordatorios.</EmptyState> : (
            colaberry.reminders.map((r) => (
              <div key={r.id} className={`flex items-center justify-between p-2 rounded-lg border border-[var(--line)] ${r.done ? 'opacity-50' : ''}`}>
                <span className="text-sm">{r.text}</span>
                <span className="text-xs text-[var(--dim)]">{CHANNEL_LABELS[r.channel]}</span>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  )
}
