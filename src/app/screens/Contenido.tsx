import { useState } from 'react'
import { PenLine, CheckCircle2, XCircle } from 'lucide-react'
import { useAppStore } from '@core/state/store'
import { Card, Stat, Btn, Badge } from '@components/ui'
import { pendingIdeas, approvedIdeas, needsAngles } from '@core/lib/content'

export function Contenido() {
  const content = useAppStore((s) => s.content)
  const captureIdea = useAppStore((s) => s.captureIdea)
  const scoreIdea = useAppStore((s) => s.scoreIdea)
  const decideIdea = useAppStore((s) => s.decideIdea)
  const ingestNews = useAppStore((s) => s.ingestNews)
  const [text, setText] = useState('')
  const [fit, setFit] = useState('')
  const [angles, setAngles] = useState('')
  const [newsUrl, setNewsUrl] = useState('')

  const pending = pendingIdeas(content)
  const approved = approvedIdeas(content)
  const needs = needsAngles(content)

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <PenLine className="w-6 h-6 text-emerald-400" />
        <h1 className="text-xl font-semibold">Co-Pilot de Contenido</h1>
        <Badge color="text-emerald-400">ContentCreation-OS asimilado · anfibio</Badge>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <Stat label="Ideas" value={String(content.ideas.length)} />
        <Stat label="Pendientes (gate humano)" value={String(pending.length)} />
        <Stat label="Aprobadas" value={String(approved.length)} />
      </div>

      <Card title="Capturar idea (multi-puerta: cli / nostr / telegram / rss)">
        <div className="flex gap-2">
          <input className="flex-1 bg-black/30 rounded px-2 py-1 text-sm outline-none" placeholder="Idea cruda" value={text} onChange={(e) => setText(e.target.value)} />
          <Btn onClick={() => { if (text) { captureIdea(text, { source: 'cli' }); setText('') } }}>Capturar</Btn>
        </div>
      </Card>

      <Card title="Score contra marca (IA asiste, advisory — no decide)">
        <div className="flex gap-2">
          <input className="w-24 bg-black/30 rounded px-2 py-1 text-sm outline-none" placeholder="id idea" value={fit} onChange={(e) => setFit(e.target.value)} />
          <input className="flex-1 bg-black/30 rounded px-2 py-1 text-sm outline-none" placeholder="brand-fit %" value={angles} onChange={(e) => setAngles(e.target.value)} />
          <Btn onClick={() => { if (fit) { scoreIdea(fit, Number(angles) || 0, []); setFit(''); setAngles('') } }}>Score</Btn>
        </div>
      </Card>

      <Card title="Ingestar noticias (RSS/dedup/filter, rolling 30d)">
        <div className="flex gap-2">
          <input className="flex-1 bg-black/30 rounded px-2 py-1 text-sm outline-none" placeholder="URL noticia" value={newsUrl} onChange={(e) => setNewsUrl(e.target.value)} />
          <Btn onClick={() => { if (newsUrl) { ingestNews([{ title: newsUrl.split('/').pop() || 'news', url: newsUrl, keyword: 'general', date: new Date().toISOString().slice(0, 10) }]); setNewsUrl('') } }}>Ingestar</Btn>
        </div>
      </Card>

      <Card title="Idea Bank (gate humano = Ley III MJ: la IA nunca aprueba)">
        {content.ideas.length === 0 ? (
          <p className="text-sm text-[var(--dim)]">Sin ideas. Captura una; la IA la asiste, tú decides.</p>
        ) : (
          <div className="space-y-2">
            {content.ideas.map((i) => (
              <div key={i.id} className="border border-white/10 rounded px-3 py-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">{i.text} <span className="text-[var(--dim)] text-xs">{i.source}</span></p>
                  <Badge color={i.status === 'approved' ? 'text-emerald-400' : i.status === 'rejected' ? 'text-red-400' : 'text-zinc-500'}>
                    {i.status === 'approved' ? <CheckCircle2 className="w-3 h-3" /> : i.status === 'rejected' ? <XCircle className="w-3 h-3" /> : 'pending'}
                  </Badge>
                </div>
                <p className="text-xs text-[var(--dim)]">brand-fit: {i.brandFit}% · ángulos: {i.angles.length} · lane: {i.lane}</p>
                {i.status === 'pending' && (
                  <div className="flex gap-2 mt-2">
                    <Btn onClick={() => decideIdea(i.id, 'approved')}>Aprobar (humano)</Btn>
                    <Btn variant="ghost" onClick={() => decideIdea(i.id, 'rejected')}>Rechazar</Btn>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </Card>

      {needs.length > 0 && (
        <Card title="γ-CARMIS: ideas con brand-fit alto sin ángulos">
          <p className="text-sm text-amber-400">Sugerir ángulos para: {needs.join(', ')} (la IA asiste, tú decides).</p>
        </Card>
      )}

      <p className="text-xs text-[var(--dim)] mt-2">
        ContentCreation-OS asimilado como co-pilot anfibio. Notion/Telegram/Gemini extirpados; conservado
        capture→score→ángulos→gate humano. Ver <span className="text-emerald-400">docs/contentcreation_backup.md</span> +
        <span className="text-emerald-400"> docs/contentcreation_integration.md</span>.
      </p>
    </div>
  )
}
