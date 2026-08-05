import { X, Send, Loader2, Mountain, MessageSquare } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'
import { useAppStore } from '@core/state/store'
import { clsx } from 'clsx'

const CHIP_QUESTIONS = [
  '¿Cuál es mi posición jerárquica real?',
  '¿Cómo monto la base material mínima?',
  '¿Qué métricas de CAC necesito medir?',
  '¿Cómo convoco el colectivo ancla?',
  '¿Cuáles son las Leyes MJ del Autómata?',
  '¿Cómo funciona el ZNU v2?',
]

const RESPONSES: Record<string, string> = {
  posicion:
    'MJ dice: eres PRE-INFRAESTRUCTURAL. Sin tierra, sin energía ni producción propias. Tu única tracción real es el código editable (este OS). Empieza en Nivel 0: asegura tierra 3-5 ha con agua + sol. Todo lo demás es estética flotante hasta que la base exista.',
  base:
    'Base mínima (Ciclo 1): tierra 3-5 ha + microgrid 2kW/10kWh (~3k USDC) + FABSHIP (impresora 3D + láser + CNC + soldadora, ~4k) + contenedor (~5k) + 200m² huerta. ~12k USDC. El crédito de supervivencia = base material, NO USDC.',
  cac:
    'CAC v12 solo mide vectores CON SENSOR: ALIM (kcal local/día), ENER (kWh local/total), SALU (casos resueltos local), HABI (m² FABSHIP/total), PROD (componentes FABSHIP/total). Umbral soberano 0.8. Sin sensor = descartado. PGS = media de esos 5.',
  colectivo:
    'Convocatoria vinculante: 5 personas, 6 meses presenciales, 20h/sem, firma Social DNA + 500 ZNU. Perfiles: agrónomo, técnico energía, maker FABSHIP, facilitador CDS, generalista. CDS = 2 decisiones reales; ValueFlows = 50+ eventos.',
  leyes:
    'Ley I MJ: NUNCA dañes la base material (tierra, agua, energía, comida, herramientas, cuerpos, semillas). Ley II: gánate la vida soberanizando la base (ROI = ΔAUT/coste). Ley III: lucidez material obligatoria — auditar con sensores reales.',
  znu:
    'ZNU v2 = acceso a base material. Emisión 100 ZNU/mes por miembro SOLO si AUT_ALIM≥0.5, AUT_ENER≥0.5, AUT_HABI≥0.4. Demurrage 5%/mes sobre exceso de 300 ZNU → Fondo de Acceso Común (tierra/agua/energía/herramientas/semillas).',
}

export function Coach() {
  const { coach, setCoach, addCoachMessage, setCoachDraft, setCoachBusy } = useAppStore()
  const [inputHeight, setInputHeight] = useState(44)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => { messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' }) }, [coach.messages])

  const ask = async (question: string) => {
    if (!question.trim() || coach.busy) return
    setCoachBusy(true)
    addCoachMessage({ role: 'user', content: question, timestamp: Date.now() })
    setCoachDraft('')
    setTimeout(() => {
      const lower = question.toLowerCase()
      let response = 'Desde Lucidez Material: dime qué nivel necesitas. Nivel 0 (tierra) antes que cualquier discurso. ¿Empezamos por la base material?'
      if (lower.includes('posición') || lower.includes('jerarqu') || lower.includes('real')) response = RESPONSES.posicion
      else if (lower.includes('base') || lower.includes('tierra') || lower.includes('microgrid') || lower.includes('fabship')) response = RESPONSES.base
      else if (lower.includes('cac') || lower.includes('métrica') || lower.includes('medir')) response = RESPONSES.cac
      else if (lower.includes('colectivo') || lower.includes('convocar') || lower.includes('miembro')) response = RESPONSES.colectivo
      else if (lower.includes('ley') || lower.includes('autómata') || lower.includes('automata')) response = RESPONSES.leyes
      else if (lower.includes('znu') || lower.includes('soberan') || lower.includes('demurrage')) response = RESPONSES.znu
      addCoachMessage({ role: 'assistant', content: response, timestamp: Date.now() })
      setCoachBusy(false)
    }, 700 + Math.random() * 900)
  }

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); ask(coach.draft) }
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); ask(coach.draft) }
  }

  if (!coach.open) return null

  return (
    <div className="fixed bottom-4 right-4 z-50 w-full max-w-md md:max-w-lg" role="dialog" aria-label="Lucidez - Asistente">
      <div className="bg-[var(--surf)] border border-[var(--line)] rounded-2xl shadow-2xl overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b border-[var(--lineq)] bg-[var(--surf2)]/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[var(--grad-wish)] flex items-center justify-center">
              <Mountain className="w-5 h-5 text-[var(--vacio)]" aria-hidden="true" />
            </div>
            <div>
              <p className="font-jost font-semibold">Lucidez</p>
              <p className="text-[var(--dim)] text-xs">Guía Materialismo Jerárquico</p>
            </div>
          </div>
          <button onClick={() => setCoach({ open: false })} className="w-8 h-8 flex items-center justify-center rounded-lg text-[var(--mut)] hover:text-white hover:bg-[var(--surf3)] transition-colors" aria-label="Cerrar">
            <X className="w-4 h-4" />
          </button>
        </div>
        <div className="max-h-[400px] overflow-y-auto p-4 space-y-4">
          {coach.messages.length === 0 && (
            <div className="text-center py-8 text-[var(--dim)]">
              <MessageSquare className="w-12 h-12 mx-auto mb-3 opacity-30" aria-hidden="true" />
              <p className="font-manrope mb-2">¿En qué te ayudo con Lucidez Material?</p>
              <p className="text-xs">Posición jerárquica, base material, CAC, colectivo, Autómata, ZNU…</p>
            </div>
          )}
          {coach.messages.map((msg, i) => (
            <div key={i} className={clsx('flex gap-3', msg.role === 'user' && 'flex-row-reverse')}>
              <div className={clsx('w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0', msg.role === 'user' ? 'bg-[var(--grad-cosmos)]' : 'bg-[var(--grad-wish)]')}>
                {msg.role === 'user'
                  ? <MessageSquare className="w-4 h-4 text-white" aria-hidden="true" />
                  : <Mountain className="w-4 h-4 text-[var(--vacio)]" aria-hidden="true" />}
              </div>
              <div className={clsx('max-w-[80%] rounded-2xl px-4 py-3', msg.role === 'user' ? 'bg-[var(--surf2)] rounded-tr-sm' : 'bg-[var(--grad-wish)]/10 border border-[var(--lineq)] rounded-tl-sm')}>
                <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
              </div>
            </div>
          ))}
          {coach.busy && (
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-xl bg-[var(--grad-wish)] flex items-center justify-center">
                <Loader2 className="w-4 h-4 text-[var(--vacio)] animate-spin" aria-hidden="true" />
              </div>
              <div className="bg-[var(--surf2)] rounded-2xl rounded-tl-sm px-4 py-3">
                <div className="flex gap-1">
                  <span className="w-2 h-2 bg-[var(--mut)] rounded-full animate-bounce" />
                  <span className="w-2 h-2 bg-[var(--mut)] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-2 h-2 bg-[var(--mut)] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        <div className="px-4 py-2 border-t border-[var(--lineq)] flex flex-wrap gap-2 max-h-32 overflow-y-auto">
          {CHIP_QUESTIONS.map((q) => (
            <button key={q} onClick={() => ask(q)} disabled={coach.busy} className="px-3 py-1.5 text-xs font-manrope rounded-full border border-[var(--line)] text-[var(--mut)] hover:text-white hover:border-chispa hover:bg-[var(--surf2)] transition-colors whitespace-nowrap disabled:opacity-50">
              {q}
            </button>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="p-4 border-t border-[var(--lineq)] bg-[var(--surf2)]/50">
          <div className="flex items-end gap-2">
            <textarea
              value={coach.draft}
              onChange={(e) => setCoachDraft(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={coach.busy ? 'Lucidez está pensando…' : 'Pregúntale a Lucidez…'}
              rows={1}
              className="flex-1 min-h-[44px] max-h-32 px-4 py-3 bg-[var(--surf)] border border-[var(--line)] rounded-xl text-[var(--ink)] placeholder-[var(--dim)] focus:outline-none focus:border-chispa focus:ring-1 focus:ring-chispa resize-none text-sm font-manrope"
              style={{ height: inputHeight }}
              disabled={coach.busy}
              aria-label="Mensaje para Lucidez"
              onInput={(e) => {
                const ta = e.target as HTMLTextAreaElement
                ta.style.height = 'auto'
                ta.style.height = Math.min(ta.scrollHeight, 128) + 'px'
                setInputHeight(ta.scrollHeight)
              }}
            />
            <button type="submit" disabled={!coach.draft.trim() || coach.busy} className={clsx('w-10 h-10 flex items-center justify-center rounded-xl transition-colors flex-shrink-0', coach.draft.trim() && !coach.busy ? 'bg-[var(--grad-wish)] text-[var(--vacio)] hover:opacity-90' : 'bg-[var(--surf2)] text-[var(--dim)] cursor-not-allowed')} aria-label="Enviar">
              {coach.busy ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
