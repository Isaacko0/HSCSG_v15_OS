import { useState } from 'react'
import { Card, Stat, Badge, Btn, EmptyState } from '@components/ui'
import { Scale, ShieldHalf, Users, FileText, UserCheck } from 'lucide-react'
import { useAppStore } from '@core/state/store'
import { VERDICTS } from '@core/lib/kleros'

export function Justicia() {
  const { kleros, members, openKlerosDispute, addKlerosEvidence, castKlerosVote, resolveKlerosDispute, appealKlerosDispute, seatKlerosJuror, attestKlerosIdentity } = useAppStore()
  const [tab, setTab] = useState<'disputas' | 'jurados' | 'identidad'>('disputas')
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [activeId, setActiveId] = useState<string | null>(null)
  const [evText, setEvText] = useState('')
  const [resText, setResText] = useState('')
  const [jurorName, setJurorName] = useState('')
  const [idName, setIdName] = useState('')
  const [idBy, setIdBy] = useState('')

  const senderId = members[0]?.name ?? 'nodo'

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <Scale className="w-7 h-7 text-rose-400" />
        <h1 className="font-jost text-2xl font-semibold">Justicia Soberana (Kleros)</h1>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Stat label="Disputas" value={String(kleros.disputes.length)} color="text-rose-400" />
        <Stat label="Resueltas" value={String(kleros.disputes.filter((d) => d.status === 'resuelta' || d.status === 'apelada').length)} color="text-emerald-400" />
        <Stat label="Jurados" value={String(kleros.jurors.length)} color="text-purple-400" />
        <Stat label="Identidades" value={String(kleros.identities.length)} color="text-sky-400" />
      </div>

      {/* Tabs */}
      <div className="flex gap-2 flex-wrap">
        <Btn variant={tab === 'disputas' ? 'primary' : 'ghost'} onClick={() => setTab('disputas')}><FileText className="w-4 h-4 mr-1 inline" />Disputas</Btn>
        <Btn variant={tab === 'jurados' ? 'primary' : 'ghost'} onClick={() => setTab('jurados')}><Users className="w-4 h-4 mr-1 inline" />Jurados</Btn>
        <Btn variant={tab === 'identidad' ? 'primary' : 'ghost'} onClick={() => setTab('identidad')}><UserCheck className="w-4 h-4 mr-1 inline" />Identidad</Btn>
      </div>

      {tab === 'disputas' && (
        <div className="space-y-4">
          <Card title="Abrir disputa">
            <input
              className="w-full bg-[var(--surf-2)] border border-[var(--lineq)] rounded-lg px-3 py-2 text-sm mb-2"
              placeholder="Título de la disputa"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              className="w-full bg-[var(--surf-2)] border border-[var(--lineq)] rounded-lg px-3 py-2 text-sm mb-2"
              placeholder="Descripción / contexto"
              rows={2}
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
            <Btn variant="primary" onClick={() => { if (title.trim()) { openKlerosDispute(title, desc, senderId); setTitle(''); setDesc('') } }}>
              Abrir dispute
            </Btn>
          </Card>

          {kleros.disputes.length === 0 && <EmptyState>No hay disputas abiertas. La justicia del nodo resuelve conflictos por pares.</EmptyState>}

          {kleros.disputes.map((d) => (
            <Card key={d.id}>
              <div className="flex items-center justify-between mb-2">
                <div className="font-manrope font-medium">{d.title}</div>
                <Badge color={d.status === 'resuelta' ? 'bg-emerald-500/20 text-emerald-300' : 'bg-rose-500/20 text-rose-300'}>{d.status}</Badge>
              </div>
              <p className="text-sm text-[var(--dim)] mb-2">{d.description}</p>
              <Btn variant="ghost" onClick={() => setActiveId(activeId === d.id ? null : d.id)}>
                {activeId === d.id ? 'Cerrar' : 'Ver / Votar'}
              </Btn>
              {activeId === d.id && (
                <div className="mt-3 space-y-3 border-t border-[var(--lineq)] pt-3">
                  <div>
                    <div className="text-xs text-[var(--dim)] mb-1">Evidencia ({d.evidence.length})</div>
                    {d.evidence.map((e) => (
                      <div key={e.id} className="text-sm bg-[var(--surf-2)] rounded px-2 py-1 mb-1">
                        <span className="text-[var(--dim)]">{e.author}:</span> {e.text}
                      </div>
                    ))}
                    <input
                      className="w-full bg-[var(--surf-2)] border border-[var(--lineq)] rounded-lg px-3 py-2 text-sm mt-1"
                      placeholder="Añadir evidencia"
                      value={evText}
                      onChange={(e) => setEvText(e.target.value)}
                    />
                    <Btn variant="ghost" onClick={() => { if (evText.trim()) { addKlerosEvidence(d.id, senderId, evText); setEvText('') } }}>Adjuntar</Btn>
                  </div>
                  <div>
                    <div className="text-xs text-[var(--dim)] mb-1">Votos de jurados</div>
                    {kleros.jurors.map((j) => (
                      <div key={j.id} className="flex items-center gap-2 mb-1">
                        <span className="text-sm w-32 truncate">{j.name}</span>
                        <span className="text-xs text-[var(--dim)]">rep {j.reputation}</span>
                        <select
                          className="bg-[var(--surf-2)] border border-[var(--lineq)] rounded px-2 py-1 text-sm"
                          value={d.votes[j.id] ?? ''}
                          onChange={(e) => castKlerosVote(d.id, j.id, e.target.value as any)}
                        >
                          <option value="">—</option>
                          {VERDICTS.map((v) => <option key={v.key} value={v.key}>{v.label}</option>)}
                        </select>
                      </div>
                    ))}
                  </div>
                  <div>
                    <input
                      className="w-full bg-[var(--surf-2)] border border-[var(--lineq)] rounded-lg px-3 py-2 text-sm"
                      placeholder="Resolución (RAO)"
                      value={resText}
                      onChange={(e) => setResText(e.target.value)}
                    />
                    <div className="flex gap-2 mt-2">
                      <Btn variant="primary" onClick={() => { if (resText.trim()) { resolveKlerosDispute(d.id, resText); setResText('') } }}>Resolver (penaliza minoría)</Btn>
                      {d.status === 'resuelta' && <Btn variant="ghost" onClick={() => appealKlerosDispute(d.id)}>Apelar</Btn>}
                    </div>
                  </div>
                </div>
              )}
            </Card>
          ))}
        </div>
      )}

      {tab === 'jurados' && (
        <Card title="Jurados (sorteo + anonimato + rotación)">
          <div className="flex gap-2 mb-3">
            <input
              className="flex-1 bg-[var(--surf-2)] border border-[var(--lineq)] rounded-lg px-3 py-2 text-sm"
              placeholder="Nombre del jurado"
              value={jurorName}
              onChange={(e) => setJurorName(e.target.value)}
            />
            <Btn variant="primary" onClick={() => { if (jurorName.trim()) { seatKlerosJuror(jurorName); setJurorName('') } }}>Sentar</Btn>
          </div>
          {kleros.jurors.map((j) => (
            <div key={j.id} className="flex items-center justify-between border-b border-[var(--lineq)] py-1">
              <span className="text-sm">{j.name}</span>
              <Badge color={j.reputation >= 90 ? 'bg-emerald-500/20 text-emerald-300' : 'bg-amber-500/20 text-amber-300'}>rep {j.reputation}</Badge>
            </div>
          ))}
          <p className="text-xs text-[var(--dim)] mt-2">Quien vote con la minoría pierde reputación (reputationDecay). Incentivo a la honestidad, no al staking.</p>
        </Card>
      )}

      {tab === 'identidad' && (
        <Card title="Identidad Soberana (Proof of Humanity)">
          <div className="flex gap-2 mb-3 flex-wrap">
            <input
              className="bg-[var(--surf-2)] border border-[var(--lineq)] rounded-lg px-3 py-2 text-sm"
              placeholder="Nombre humano"
              value={idName}
              onChange={(e) => setIdName(e.target.value)}
            />
            <input
              className="bg-[var(--surf-2)] border border-[var(--lineq)] rounded-lg px-3 py-2 text-sm"
              placeholder="Atestado por"
              value={idBy}
              onChange={(e) => setIdBy(e.target.value)}
            />
            <Btn variant="primary" onClick={() => { if (idName.trim() && idBy.trim()) { attestKlerosIdentity(idName, idBy); setIdName(''); setIdBy('') } }}>Atestar</Btn>
          </div>
          {kleros.identities.length === 0 && <EmptyState>Aún no hay identidades atestiguadas. 1 humano = 1 nodo (anti-sybil).</EmptyState>}
          {kleros.identities.map((i) => (
            <div key={i.id} className="flex items-center justify-between border-b border-[var(--lineq)] py-1">
              <span className="text-sm">{i.name}</span>
              <Badge color="bg-sky-500/20 text-sky-300">{i.attestedBy.length} atestaciones</Badge>
            </div>
          ))}
          <p className="text-xs text-[var(--dim)] mt-2">Atestación comunitaria (varios miembros del nodo). Sin KYC estatal, sin vídeo on-chain.</p>
        </Card>
      )}

      <div className="flex items-center gap-2 text-xs text-[var(--dim)]">
        <ShieldHalf className="w-4 h-4" /> Modo Lucidez revela el RAO crudo de decisiones y atestaciones (Ley III).
      </div>
    </div>
  )
}
