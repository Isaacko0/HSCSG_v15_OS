import { useState } from 'react'
import {
  Leaf, HandHeart, Gift, ShieldAlert, CheckCircle2, Plus, Radio, Users,
} from 'lucide-react'
import { useAppStore } from '@core/state/store'
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
  const [tab, setTab] = useState<'flows' | 'trust' | 'mesh' | 'sanctuary'>('flows')
  const [offerR, setOfferR] = useState('')
  const [needR, setNeedR] = useState('')
  const [sanctReason, setSanctReason] = useState('')
  const memberIds = members.map((m) => m.id)

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
          <p className="text-[var(--dim)] mt-1">ValueFlows offline-first + Web of Trust. Puente CaaS monetario → postmonetario (asimilado de lizTheDeveloper + Isaacko0).</p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Stat label="Ofertas" value={`${solar.offers.length}`} color="text-emerald-400" />
        <Stat label="Necesidades" value={`${solar.needs.length}`} color="text-sky-400" />
        <Stat label="Índice post-monetario" value={`${pmi}%`} color="text-fuchsia-400" />
        <Stat label="Confianza media" value={avgTrust.toFixed(2)} color="text-lime-400" />
      </div>

      <div className="flex gap-2 border-b border-[var(--lineq)] flex-wrap">
        {([['flows', 'ValueFlows'], ['trust', 'Web of Trust'], ['mesh', 'Malla'], ['sanctuary', 'Santuario']] as const).map(([k, l]) => (
          <button key={k} onClick={() => setTab(k)} className={tab === k ? 'px-4 py-2 font-manrope font-medium text-emerald-400 border-b-2 border-emerald-400' : 'px-4 py-2 font-manrope font-medium text-[var(--mut)] hover:text-white'}>{l}</button>
        ))}
      </div>

      {tab === 'flows' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card title="Ofrecer (don / recurso)">
              <div className="flex gap-2 items-end">
                <label className="flex flex-col gap-1 flex-1">
                  <span className="text-xs text-[var(--dim)] font-manrope">Recurso</span>
                  <input className="inp" value={offerR} onChange={(e) => setOfferR(e.target.value)} placeholder="p.ej. 20kg tomate" />
                </label>
                <Btn variant="ghost" onClick={() => { if (offerR.trim() && memberIds[0]) { addOffer(offerR.trim(), 'bien', memberIds[0]); setOfferR('') } }}><Plus className="w-4 h-4" /> Ofrecer</Btn>
              </div>
            </Card>
            <Card title="Necesitar (demanda)">
              <div className="flex gap-2 items-end">
                <label className="flex flex-col gap-1 flex-1">
                  <span className="text-xs text-[var(--dim)] font-manrope">Recurso</span>
                  <input className="inp" value={needR} onChange={(e) => setNeedR(e.target.value)} placeholder="p.ej. taladro" />
                </label>
                <Btn variant="ghost" onClick={() => { if (needR.trim() && memberIds[0]) { addNeed(needR.trim(), 'bien', memberIds[0]); setNeedR('') } }}><Plus className="w-4 h-4" /> Necesitar</Btn>
              </div>
            </Card>
          </div>

          <SectionTitle>Matchmaking (oferta ↔ necesidad, sin precio)</SectionTitle>
          {matches.length === 0 ? <EmptyState>Sin matches. Ofrece y necesita recursos del mismo tipo para que el sistema haga match por AUT/CDS.</EmptyState> : (
            <div className="space-y-2">
              {matches.map((m, i) => (
                <div key={i} className="p-3 rounded-xl border border-[var(--line)] flex items-center justify-between">
                  <div>
                    <p className="font-manrope font-medium">{m.offer.resource} → {m.need.resource}</p>
                    <p className="text-xs text-[var(--dim)]">{memberLabel(m.offer.from)} → {memberLabel(m.need.by)}</p>
                  </div>
                  <div className="flex gap-2">
                    <Btn variant="ghost" onClick={() => doExchange(m.offer.id, m.need.id, 'don')}><Gift className="w-4 h-4" /> Don</Btn>
                    <Btn variant="ghost" onClick={() => doExchange(m.offer.id, m.need.id, 'znu', 10)}><HandHeart className="w-4 h-4" /> ZNU</Btn>
                  </div>
                </div>
              ))}
            </div>
          )}

          <SectionTitle>Intercambios (ValueFlows)</SectionTitle>
          {solar.exchanges.length === 0 ? <EmptyState>Sin intercambios. Resuelve un match para registrar el flujo.</EmptyState> : (
            solar.exchanges.map((e: Exchange) => (
              <div key={e.id} className="p-2 rounded-lg border border-[var(--line)] text-sm flex items-center gap-2">
                {e.medium === 'don' ? <Gift className="w-4 h-4 text-emerald-400" /> : <HandHeart className="w-4 h-4 text-fuchsia-400" />}
                <span>{e.medium === 'don' ? 'DON (postmonetario)' : `ZNU ${e.znuAmount}`}</span>
                <span className="text-[var(--mut)]">· {new Date(e.ts).toLocaleTimeString()}</span>
              </div>
            ))
          )}
        </div>
      )}

      {tab === 'trust' && (
        <div className="space-y-3">
          <SectionTitle>Web of Trust (avalar miembros)</SectionTitle>
          {memberIds.length < 2 ? <EmptyState>Se necesitan al menos 2 miembros en el Colectivo para avalar.</EmptyState> : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {memberIds.map((from) => (
                <Card key={from} title={`${memberLabel(from)} avala a:`}>
                  <div className="flex flex-wrap gap-2">
                    {memberIds.filter((t) => t !== from).map((to) => (
                      <Btn key={to} variant="ghost" onClick={() => addVouch(from, to, 1)}><Users className="w-4 h-4" /> {memberLabel(to)}</Btn>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          )}
          <SectionTitle>Trust score por miembro</SectionTitle>
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
          <Card title="Malla DTN (offline-first)">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Radio className={solar.mesh.online ? 'w-5 h-5 text-emerald-400' : 'w-5 h-5 text-[var(--dim)]'} />
                <span className="font-manrope">{solar.mesh.online ? 'EN LÍNEA' : 'AISLADO'}</span>
                <span className="text-xs text-[var(--dim)]">· {solar.mesh.peers} pares</span>
              </div>
              <div className="flex gap-2">
                <Btn variant="ghost" onClick={() => setMesh(true, 3)}>Simular online</Btn>
                <Btn variant="ghost" onClick={() => setMesh(false, 0)}>Simular caída</Btn>
              </div>
            </div>
            <p className="text-xs text-[var(--dim)] mt-2">Si la red cae, el nodo sigue compartiendo por malla local (BATMAN-adv / DTN). El don no depende de internet.</p>
          </Card>
        </div>
      )}

      {tab === 'sanctuary' && (
        <div className="space-y-4">
          <Card title="Red santuario (Ley I MJ: proteger personas en riesgo)">
            <div className="flex gap-2 items-end">
              <label className="flex flex-col gap-1 flex-1">
                <span className="text-xs text-[var(--dim)] font-manrope">Motivo (riesgo / emergencia)</span>
                <input className="inp" value={sanctReason} onChange={(e) => setSanctReason(e.target.value)} placeholder="p.ej. compañero en riesgo, emergencia salud" />
              </label>
              <Btn onClick={() => { if (sanctReason.trim() && memberIds[0]) { activateSanctuary(sanctReason.trim(), memberIds[0]); setSanctReason('') } }}>
                <ShieldAlert className="w-4 h-4" /> Activar
              </Btn>
            </div>
            <p className="text-xs text-[var(--dim)] mt-2">El gate MJ (Ley I) exige confianza mínima (Web of Trust ≥ 0.2) y señal de riesgo real. Sin eso, se deniega para evitar abuso.</p>
          </Card>
          {solar.sanctuary.length === 0 ? <EmptyState>Sin eventos santuario.</EmptyState> : (
            solar.sanctuary.map((s: SanctuaryEvent) => (
              <div key={s.id} className="p-3 rounded-xl border border-red-500/30 bg-red-500/5 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-400" />
                <div>
                  <p className="font-manrope text-sm">{s.reason}</p>
                  <p className="text-xs text-[var(--dim)]">activado por {memberLabel(s.by)} · {new Date(s.activatedAt).toLocaleString()}</p>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  )
}
