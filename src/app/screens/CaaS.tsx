import { useState } from 'react'
import {
  Users2, GitBranch, ShieldCheck, ShieldAlert, Send, Plus,
} from 'lucide-react'
import { useAppStore } from '@core/state/store'
import { CAAS_TIERS, tierEligible, streamMJStatus, caasStats } from '@core/lib/caas'
import { autFromCAC, pgsLM, population, ics } from '@core/lib/metrics'
import { Card, SectionTitle, Stat, Btn, Badge, EmptyState } from '@components/ui'
import type { CaaSTierKey, CaaSRevenueStream, CaaSPayout, CaaSAuditEntry } from '@core/state/caas'

export function CaaS() {
  const { caasTier, caasMembers, caasStreams, caasPayouts, caasAudit, cac, members, flows, addCaasMember, setCaasTier, toggleCaasStream, setCaasStreamCtx, runCaasPayout, logCaasAudit } = useAppStore()
  const aut = autFromCAC(cac)
  const pgs = pgsLM(aut)
  const pop = population(members)
  const cds = ics(members, flows)
  const stats = caasStats(caasMembers, caasStreams, cac, members, flows)
  const [tab, setTab] = useState<'tiers' | 'streams' | 'payouts' | 'audit'>('tiers')
  const [name, setName] = useState('')
  const [tierSel, setTierSel] = useState<CaaSTierKey>('aprendiz')
  const [stake, setStake] = useState(20)
  const [baseZNU, setBaseZNU] = useState(300)

  const hire = () => {
    if (!name.trim()) return
    addCaasMember({ memberName: name.trim(), tier: tierSel, stakeZNU: stake, contributedFlows: 0, znuEarned: 0 })
    logCaasAudit({ id: Math.random().toString(36).slice(2, 9), ts: Date.now(), action: 'caas.member', detail: `Miembro ${name.trim()} ingresó como ${tierSel} (stake ${stake} ZNU)`, tone: 'info' })
    setName('')
  }

  const doPayout = () => {
    const before = caasPayouts.length
    runCaasPayout(baseZNU)
    const eligible = tierEligible(CAAS_TIERS.find((t) => t.key === 'ancla')!, aut, cds)
    logCaasAudit({ id: Math.random().toString(36).slice(2, 9), ts: Date.now(), action: 'caas.payout', detail: `Reparto ${baseZNU} ZNU por AUT+CDS. Elegibilidad ancla: ${eligible ? 'SÍ' : 'NO'}`, tone: eligible ? 'success' : 'warning' })
    void before
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="font-jost text-2xl md:text-3xl font-semibold flex items-center gap-2">
            <Users2 className="w-7 h-7 text-rose-400" /> Comunidad como Servicio · CaaS-BM
          </h1>
          <p className="text-[var(--dim)] mt-1">Acceso ganado por contribución a la base material (ValueFlows), no comprado. Reparto por AUT+CDS con demurrage. Bajo Leyes MJ.</p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Stat label="Miembros CaaS" value={`${stats.totalMembers}`} />
        <Stat label="Elegibles (AUT+CDS)" value={`${stats.eligibleMembers}`} color="text-emerald-400" />
        <Stat label="Streams activos" value={`${stats.activeStreams}`} />
        <Stat label="Streams bloqueados MJ" value={`${stats.blockedStreams}`} color={stats.blockedStreams ? 'text-red-400' : 'text-[var(--dim)]'} />
      </div>

      <div className="flex gap-2 border-b border-[var(--lineq)]">
        {([['tiers', 'Tiers'], ['streams', 'Ingresos'], ['payouts', 'Reparto'], ['audit', 'Audit']] as const).map(([k, l]) => (
          <button key={k} onClick={() => setTab(k)} className={tab === k ? 'px-4 py-2 font-manrope font-medium text-rose-400 border-b-2 border-rose-400' : 'px-4 py-2 font-manrope font-medium text-[var(--mut)] hover:text-white'}>{l}</button>
        ))}
      </div>

      {tab === 'tiers' && (
        <div className="space-y-4">
          <Card title="Alta de miembro (stake ZNU, no pago ciego)">
            <div className="flex flex-wrap gap-3 items-end">
              <Field label="Nombre"><input className="inp" value={name} onChange={(e) => setName(e.target.value)} placeholder="p.ej. Cooperativa Sol" /></Field>
              <Field label="Tier">
                <select className="inp" value={tierSel} onChange={(e) => setTierSel(e.target.value as CaaSTierKey)}>
                  {CAAS_TIERS.filter((t) => t.key !== 'visitante').map((t) => <option key={t.key} value={t.key}>{t.name}</option>)}
                </select>
              </Field>
              <Field label="Stake ZNU"><input className="inp" type="number" value={stake} onChange={(e) => setStake(Number(e.target.value))} /></Field>
              <Btn onClick={hire}><Plus className="w-4 h-4" /> Ingresar</Btn>
            </div>
          </Card>
          <div className="grid md:grid-cols-2 gap-4">
            {CAAS_TIERS.map((t) => {
              const elig = tierEligible(t, aut, cds)
              return (
                <Card key={t.key} title={t.name}>
                  <div className="flex items-center justify-between">
                    <Badge color={t.key === caasTier ? 'text-chispa' : 'text-[var(--mut)]'}>{t.key === caasTier ? 'tu tier' : 'tier'}</Badge>
                    {elig ? <Badge color="text-emerald-400"><ShieldCheck className="w-3 h-3" /> sostenable</Badge>
                      : <Badge color="text-orange-400"><ShieldAlert className="w-3 h-3" /> requiere +AUT/CDS</Badge>}
                  </div>
                  <div className="mt-3 space-y-1 text-sm">
                    <Row k="Stake ZNU" v={`${t.stakeZNU}`} />
                    <Row k="AUT mín" v={t.minAUT.toFixed(1)} />
                    <Row k="CDS mín" v={t.minCDS.toFixed(1)} />
                    <p className="text-[var(--dim)] pt-1">{t.benefit}</p>
                  </div>
                  <Btn variant="ghost" className="mt-3" onClick={() => setCaasTier(t.key)}>Usar como mi tier</Btn>
                </Card>
              )
            })}
          </div>
        </div>
      )}

      {tab === 'streams' && (
        <div className="space-y-3">
          {caasStreams.map((s: CaaSRevenueStream) => {
            const st = streamMJStatus(s, { pgs, pop, aut: (aut.ALIM + aut.ENER + aut.SALU + aut.HABI + aut.PROD) / 5, cds })
            return (
              <Card key={s.key} title={s.name}>
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="flex gap-2">
                    <Badge color={s.enabled ? 'text-emerald-400' : 'text-[var(--dim)]'}>{s.enabled ? 'activo' : 'inactivo'}</Badge>
                    {st.status === 'blocked' ? <Badge color="text-red-400"><ShieldAlert className="w-3 h-3" /> BLOQUEADO Ley {st.law}</Badge>
                      : st.status === 'ok' ? <Badge color="text-emerald-400"><ShieldCheck className="w-3 h-3" /> pasa MJ</Badge>
                        : <Badge color="text-yellow-400">precaución</Badge>}
                  </div>
                  <div className="flex gap-2 items-center">
                    <label className="text-xs text-[var(--dim)]">USDC in <input className="inp-sm" type="number" value={s.usdcIn} onChange={(e) => setCaasStreamCtx(s.key, Number(e.target.value), s.znuOut, s.touchesBaseMaterial)} /></label>
                    <label className="text-xs text-[var(--dim)]">toca base <input type="checkbox" checked={s.touchesBaseMaterial} onChange={(e) => setCaasStreamCtx(s.key, s.usdcIn, s.znuOut, e.target.checked)} /></label>
                    <Btn variant="ghost" onClick={() => toggleCaasStream(s.key)}>{s.enabled ? 'Desactivar' : 'Activar'}</Btn>
                  </div>
                </div>
                {st.status === 'blocked' && <p className="text-red-400 text-sm mt-2">{st.reason}</p>}
              </Card>
            )
          })}
        </div>
      )}

      {tab === 'payouts' && (
        <div className="space-y-4">
          <Card title="Reparto de excedente (AUT+CDS + demurrage)">
            <div className="flex gap-3 items-end">
              <Field label="Base ZNU a repartir"><input className="inp" type="number" value={baseZNU} onChange={(e) => setBaseZNU(Number(e.target.value))} /></Field>
              <Btn onClick={doPayout}><Send className="w-4 h-4" /> Repartir</Btn>
            </div>
            <p className="text-[var(--dim)] text-xs mt-2">Peso = flows × AUT × CDS. Demurrage 5% sobre excedente de 300 ZNU por miembro.</p>
          </Card>
          {caasPayouts.length === 0 ? <EmptyState>Sin repartos. Añade miembros y ejecuta un reparto.</EmptyState> : (
            <div className="space-y-2">
              {caasPayouts.map((p: CaaSPayout) => (
                <div key={p.id} className="flex items-center justify-between p-3 rounded-xl border border-[var(--line)] text-sm">
                  <span className="font-manrope font-medium">{p.memberName}</span>
                  <div className="text-right">
                    <div className="font-mono text-emerald-400">{p.amountZNU} ZNU</div>
                    <div className="text-xs text-[var(--dim)]">{p.basis}{p.demurrageApplied > 0 ? ` · demurrage ${p.demurrageApplied}` : ''}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {tab === 'audit' && (
        <div className="space-y-2">
          <SectionTitle>Audit Log CaaS · trazabilidad MJ</SectionTitle>
          {caasAudit.length === 0 ? <EmptyState>Sin eventos CaaS. Cada alta y reparto genera una entrada.</EmptyState> : (
            caasAudit.map((e: CaaSAuditEntry) => (
              <div key={e.id} className="flex items-start gap-3 p-3 rounded-xl border border-[var(--line)] text-sm">
                <GitBranch className={`w-4 h-4 mt-0.5 ${e.tone === 'danger' ? 'text-red-400' : e.tone === 'success' ? 'text-emerald-400' : e.tone === 'warning' ? 'text-yellow-400' : 'text-[var(--mut)]'}`} />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-manrope font-medium">{e.action}</span>
                    {e.lawRef && <Badge color="text-red-400">Ley {e.lawRef} MJ</Badge>}
                  </div>
                  <p className="text-[var(--dim)]">{e.detail}</p>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  )
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (<label className="flex flex-col gap-1"><span className="text-xs text-[var(--dim)] font-manrope">{label}</span>{children}</label>)
}
function Row({ k, v }: { k: string; v: string }) {
  return (<div className="flex justify-between"><span className="text-[var(--dim)]">{k}</span><span className="font-mono text-[var(--mut)]">{v}</span></div>)
}
