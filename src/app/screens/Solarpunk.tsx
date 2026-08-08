import { useState } from 'react'
import {
  Leaf, HandHeart, Gift, ShieldAlert, CheckCircle2, Plus, Radio, Users,
} from 'lucide-react'
import { useAppStore } from '@core/state/store'
import { t } from '@core/lib/i18n'
import {
  matchOffersNeeds, trustScore, postMonetaryIndex,
} from '@core/lib/solarpunk'
import {
  Card, SectionTitle, Stat, Btn, Badge, EmptyState,
} from '@components/ui'
import type { Exchange, SanctuaryEvent } from '@core/state/solarpunk'

export function Solarpunk() {
  const {
    solar, members, addOffer, addNeed, doExchange, addVouch, setMesh, activateSanctuary,
  } = useAppStore()
  const { lang } = useAppStore()
  const [tab, setTab] = useState<'flows' | 'trust' | 'mesh' | 'sanctuary'>('flows')
  const [offerR, setOfferR] = useState('')
  const [needR, setNeedR] = useState('')
  const [sanctReason, setSanctReason] = useState('')
  const memberIds = members.map((m) => m.id)
  const senderId = memberIds[0] ?? 'nodo'

  const matches = matchOffersNeeds(solar.offers, solar.needs)
  const pmi = postMonetaryIndex(solar.exchanges)
  const avgTrust = memberIds.length ? memberIds.reduce((a, id) => a + trustScore(id, solar.vouches), 0) / memberIds.length : 0

  const memberLabel = (id: string) => members.find((m) => m.id === id)?.name ?? id.slice(0, 6)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="font-jost text-2xl md:text-3xl font-semibold flex items-center gap-2">
            <Leaf className="w-7 h-7 text-emerald-400" /> Solarpunk · Economía del Don
          </h1>
          <p className="text-[var(--dim)] mt-1">{t('solar.subtitle', lang)}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Stat label={t('solar.offers', lang)} value={`${solar.offers.length}`} color="text-emerald-400" />
        <Stat label={t('solar.needs', lang)} value={`${solar.needs.length}`} color="text-sky-400" />
        <Stat label={t('solar.pmi', lang)} value={`${pmi}%`} color="text-fuchsia-400" />
        <Stat label={t('solar.trust', lang)} value={avgTrust.toFixed(2)} color="text-lime-400" />
      </div>

      <div className="flex gap-2 border-b border-[var(--lineq)] flex-wrap">
        {([['flows', t('solar.tab.flows', lang)], ['trust', t('solar.tab.trust', lang)], ['mesh', t('solar.tab.mesh', lang)], ['sanctuary', t('solar.tab.sanctuary', lang)]] as const).map(([k, l]) => (
          <button key={k} onClick={() => setTab(k)} className={tab === k ? 'px-4 py-2 font-manrope font-medium text-emerald-400 border-b-2 border-emerald-400' : 'px-4 py-2 font-manrope font-medium text-[var(--mut)] hover:text-white'}>{l}</button>
        ))}
      </div>

      {tab === 'flows' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card title={t('solar.offer.title', lang)}>
              <div className="flex gap-2 items-end">
                <label className="flex flex-col gap-1 flex-1">
                  <span className="text-xs text-[var(--dim)] font-manrope">{t('solar.offer.resource', lang)}</span>
                  <input className="w-full h-10 px-3 rounded-xl bg-[var(--surf2)] border border-[var(--line)] text-[var(--ink)] placeholder-[var(--dim)] focus:outline-none focus:border-chispa" value={offerR} onChange={(e) => setOfferR(e.target.value)} placeholder="p.ej. 20kg tomate" />
                </label>
                <Btn variant="ghost" onClick={() => { if (offerR.trim()) { addOffer(offerR.trim(), 'bien', senderId); setOfferR('') } }}><Plus className="w-4 h-4" /> {t('solar.offer.do', lang)}</Btn>
              </div>
            </Card>
            <Card title={t('solar.need.title', lang)}>
              <div className="flex gap-2 items-end">
                <label className="flex flex-col gap-1 flex-1">
                  <span className="text-xs text-[var(--dim)] font-manrope">{t('solar.offer.resource', lang)}</span>
                  <input className="w-full h-10 px-3 rounded-xl bg-[var(--surf2)] border border-[var(--line)] text-[var(--ink)] placeholder-[var(--dim)] focus:outline-none focus:border-chispa" value={needR} onChange={(e) => setNeedR(e.target.value)} placeholder="p.ej. taladro" />
                </label>
                <Btn variant="ghost" onClick={() => { if (needR.trim()) { addNeed(needR.trim(), 'bien', senderId); setNeedR('') } }}><Plus className="w-4 h-4" /> {t('solar.need.do', lang)}</Btn>
              </div>
            </Card>
          </div>

          <SectionTitle>{t('solar.active.offers', lang)}</SectionTitle>
          {solar.offers.length === 0 ? <EmptyState>{t('solar.empty.offers', lang)}</EmptyState> : (
            <div className="space-y-2">
              {solar.offers.map((o) => (
                <div key={o.id} className="p-3 rounded-xl border border-[var(--line)] flex items-center justify-between">
                  <div>
                    <p className="font-manrope font-medium">{o.resource}</p>
                    <p className="text-xs text-[var(--dim)]">{t('solar.offered.by', lang)} {memberLabel(o.from)}</p>
                  </div>
                  <Badge color="text-emerald-400">{t('solar.badge.don', lang)}</Badge>
                </div>
              ))}
            </div>
          )}

          <SectionTitle>{t('solar.active.needs', lang)}</SectionTitle>
          {solar.needs.length === 0 ? <EmptyState>{t('solar.empty.needs', lang)}</EmptyState> : (
            <div className="space-y-2">
              {solar.needs.map((n) => (
                <div key={n.id} className="p-3 rounded-xl border border-[var(--line)] flex items-center justify-between">
                  <div>
                    <p className="font-manrope font-medium">{n.resource}</p>
                    <p className="text-xs text-[var(--dim)]">{t('solar.required.by', lang)} {memberLabel(n.by)}</p>
                  </div>
                  <Badge color="text-sky-400">{t('solar.badge.need', lang)}</Badge>
                </div>
              ))}
            </div>
          )}

          <SectionTitle>{t('solar.matchmaking', lang)}</SectionTitle>
          {matches.length === 0 ? <EmptyState>{t('solar.empty.match', lang)}</EmptyState> : (
            <div className="space-y-2">
              {matches.map((m, i) => (
                <div key={i} className="p-3 rounded-xl border border-[var(--line)] flex items-center justify-between">
                  <div>
                    <p className="font-manrope font-medium">{m.offer.resource} → {m.need.resource}</p>
                    <p className="text-xs text-[var(--dim)]">{memberLabel(m.offer.from)} → {memberLabel(m.need.by)}</p>
                  </div>
                  <div className="flex gap-2">
                    <Btn variant="ghost" onClick={() => doExchange(m.offer.id, m.need.id, 'don')}><Gift className="w-4 h-4" /> {t('solar.do.don', lang)}</Btn>
                    <Btn variant="ghost" onClick={() => doExchange(m.offer.id, m.need.id, 'znu', 10)}><HandHeart className="w-4 h-4" /> {t('solar.do.znu', lang)}</Btn>
                  </div>
                </div>
              ))}
            </div>
          )}

          <SectionTitle>{t('solar.exchanges', lang)}</SectionTitle>
          {solar.exchanges.length === 0 ? <EmptyState>{t('solar.empty.exch', lang)}</EmptyState> : (
            solar.exchanges.map((e: Exchange) => (
              <div key={e.id} className="p-2 rounded-lg border border-[var(--line)] text-sm flex items-center gap-2">
                {e.medium === 'don' ? <Gift className="w-4 h-4 text-emerald-400" /> : <HandHeart className="w-4 h-4 text-fuchsia-400" />}
                <span>{e.medium === 'don' ? t('solar.don.post', lang) : `ZNU ${e.znuAmount}`}</span>
                <span className="text-[var(--mut)]">· {new Date(e.ts).toLocaleTimeString()}</span>
              </div>
            ))
          )}
        </div>
      )}

      {tab === 'trust' && (
        <div className="space-y-3">
          <SectionTitle>{t('solar.wot', lang)}</SectionTitle>
          {memberIds.length < 2 ? <EmptyState>{t('solar.wot.min', lang)}</EmptyState> : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {memberIds.map((from) => (
                <Card key={from} title={`${memberLabel(from)} ${t('solar.vouches', lang)}`}>
                  <div className="flex flex-wrap gap-2">
                    {memberIds.filter((t) => t !== from).map((to) => (
                      <Btn key={to} variant="ghost" onClick={() => addVouch(from, to, 1)}><Users className="w-4 h-4" /> {memberLabel(to)}</Btn>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          )}
          <SectionTitle>{t('solar.trustscore', lang)}</SectionTitle>
          {memberIds.map((id) => (
            <div key={id} className="flex items-center justify-between p-2 rounded-lg border border-[var(--line)]">
              <span className="font-manrope">{memberLabel(id)}</span>
              <Badge color={trustScore(id, solar.vouches) > 0.5 ? 'text-lime-400' : 'text-[var(--mut)]'}>{trustScore(id, solar.vouches).toFixed(2)}</Badge>
            </div>
          ))}
        </div>
      )}

      {tab === 'mesh' && (
        <div className="space-y-4">
          <Card title={t('solar.mesh.title', lang)}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Radio className={solar.mesh.online ? 'w-5 h-5 text-emerald-400' : 'w-5 h-5 text-[var(--dim)]'} />
                <span className="font-manrope">{solar.mesh.online ? t('solar.online', lang) : t('solar.isolated', lang)}</span>
                <span className="text-xs text-[var(--dim)]">· {solar.mesh.peers} {t('solar.peers', lang)}</span>
              </div>
              <div className="flex gap-2">
                <Btn variant="ghost" onClick={() => setMesh(true, 3)}>{t('solar.sim.on', lang)}</Btn>
                <Btn variant="ghost" onClick={() => setMesh(false, 0)}>{t('solar.sim.off', lang)}</Btn>
              </div>
            </div>
            <p className="text-xs text-[var(--dim)] mt-2">{t('solar.mesh.note', lang)}</p>
          </Card>
        </div>
      )}

      {tab === 'sanctuary' && (
        <div className="space-y-4">
          <Card title={t('solar.sanctuary.title', lang)}>
            <div className="flex gap-2 items-end">
              <label className="flex flex-col gap-1 flex-1">
                <span className="text-xs text-[var(--dim)] font-manrope">{t('solar.sanctuary.reason', lang)}</span>
                <input className="w-full h-10 px-3 rounded-xl bg-[var(--surf2)] border border-[var(--line)] text-[var(--ink)] placeholder-[var(--dim)] focus:outline-none focus:border-chispa" value={sanctReason} onChange={(e) => setSanctReason(e.target.value)} placeholder="p.ej. compañero en riesgo, emergencia salud" />
              </label>
              <Btn onClick={() => { if (sanctReason.trim()) { activateSanctuary(sanctReason.trim(), senderId); setSanctReason('') } }}>
                <ShieldAlert className="w-4 h-4" /> {t('solar.sanctuary.activate', lang)}
              </Btn>
            </div>
            <p className="text-xs text-[var(--dim)] mt-2">{t('solar.sanctuary.note', lang)}</p>
          </Card>
          {solar.sanctuary.length === 0 ? <EmptyState>{t('solar.sanctuary.empty', lang)}</EmptyState> : (
            solar.sanctuary.map((s: SanctuaryEvent) => (
              <div key={s.id} className="p-3 rounded-xl border border-red-500/30 bg-red-500/5 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-400" />
                <div>
                  <p className="font-manrope text-sm">{s.reason}</p>
                  <p className="text-xs text-[var(--dim)]">{t('solar.activated.by', lang)} {memberLabel(s.by)} · {new Date(s.activatedAt).toLocaleString()}</p>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  )
}
