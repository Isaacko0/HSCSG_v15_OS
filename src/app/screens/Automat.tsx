import { useState } from 'react'
import {
  Bot, Plus, Play, Baby, ScrollText, ShieldCheck, ShieldAlert,
} from 'lucide-react'
import { useAppStore } from '@core/state/store'
import { survivalTier, TIER_META, evaluateAction, soulDrift, botStats, makeBotAudit } from '@core/lib/automaton'
import { autFromCAC, pgsLM } from '@core/lib/metrics'
import { Card, SectionTitle, Stat, Btn, Badge, EmptyState } from '@components/ui'
import type { BotAction, BotAuditEntry, HeartbeatTask } from '@core/state/automaton'

export function Automat() {
  const {
    soul, botActions, botHeartbeats, botChildren, botAudit, cac, base, members,
    setSoul, proposeAction, setActionStatus, runBotHeartbeat, spawnBotChild, logBotAudit,
  } = useAppStore()
  const aut = autFromCAC(cac)
  const pgs = pgsLM(aut)
  const tier = survivalTier(aut)
  const stats = botStats(botActions, botChildren, cac)
  const drift = soulDrift(soul, aut)
  const [tab, setTab] = useState<'soul' | 'actions' | 'heartbeat' | 'children' | 'audit'>('soul')
  const [actLabel, setActLabel] = useState('')
  const [actDesc, setActDesc] = useState('')

  const propose = () => {
    if (!actLabel.trim()) return
    proposeAction({ label: actLabel.trim(), description: actDesc.trim(), proposedBy: 'human' })
    const gate = evaluateAction(actLabel.trim(), { pgs, pop: Math.max(members.filter((m) => m.signedSocialDNA).length, 1), usdc: base.usdc_reserva, hitsBaseMaterial: /tierra|agua|energia|comida|herramientas|cuerpos|semillas/i.test(actDesc) })
    logBotAudit(makeBotAudit('action.propose', `Propuesta: ${actLabel.trim()} → ${gate.pass ? 'PASA MJ' : `BLOQUEADA Ley ${gate.law}`}`, gate.pass ? 'info' : 'danger', gate.pass ? undefined : gate.law))
    setActLabel(''); setActDesc('')
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="font-jost text-2xl md:text-3xl font-semibold flex items-center gap-2">
            <Bot className="w-7 h-7 text-cyan-400" /> Autómata Soberano · Conway-asimilado
          </h1>
          <p className="text-[var(--dim)] mt-1">Agente que paga su existencia con base material (AUT), no con USDC de nube. Constitución isomorfa a las 3 Leyes MJ.</p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Stat label="PGS (AUT medio)" value={pgs.toFixed(2)} />
        <Stat label="Tier supervivencia" value={TIER_META[tier].label} color={TIER_META[tier].color} />
        <Stat label="Acciones aprobadas" value={`${stats.approved}`} color="text-emerald-400" />
        <Stat label="Hijos (lineage)" value={`${stats.children}`} color="text-purple-400" />
      </div>

      <div className="flex gap-2 border-b border-[var(--lineq)] flex-wrap">
        {([['soul', 'SOUL'], ['actions', 'Acciones'], ['heartbeat', 'Heartbeats'], ['children', 'Hijos'], ['audit', 'Audit']] as const).map(([k, l]) => (
          <button key={k} onClick={() => setTab(k)} className={tab === k ? 'px-4 py-2 font-manrope font-medium text-cyan-400 border-b-2 border-cyan-400' : 'px-4 py-2 font-manrope font-medium text-[var(--mut)] hover:text-white'}>{l}</button>
        ))}
      </div>

      {tab === 'soul' && (
        <div className="space-y-4">
          <Card title="SOUL · identidad anclada a base material">
            <div className="space-y-3">
              <Field label="Nombre"><input className="inp" value={soul.name} onChange={(e) => setSoul({ name: e.target.value })} /></Field>
              <Field label="Propósito (genesis prompt)"><textarea className="inp" rows={3} value={soul.purpose} onChange={(e) => setSoul({ purpose: e.target.value })} /></Field>
              <div className="flex items-center gap-2">
                <span className="text-sm text-[var(--dim)]">Drift:</span>
                {drift === 'anclada' ? <Badge color="text-emerald-400"><ShieldCheck className="w-3 h-3" /> anclada a AUT real</Badge>
                  : <Badge color="text-red-400"><ShieldAlert className="w-3 h-3" /> FLOTANTE (Ley III: sin PGS real)</Badge>}
              </div>
              <p className="text-xs text-[var(--dim)]">Si la SOUL dice "próspera" pero AUT&lt;0.25, se marca flotante (estética sin base).</p>
            </div>
          </Card>
        </div>
      )}

      {tab === 'actions' && (
        <div className="space-y-4">
          <Card title="Proponer acción (evaluada por las 3 Leyes MJ)">
            <div className="flex flex-wrap gap-3 items-end">
              <Field label="Etiqueta"><input className="inp" value={actLabel} onChange={(e) => setActLabel(e.target.value)} placeholder="p.ej. Ampliar huerta" /></Field>
              <Field label="Descripción"><input className="inp" value={actDesc} onChange={(e) => setActDesc(e.target.value)} placeholder="toca tierra/agua/energía..." /></Field>
              <Btn onClick={propose}><Plus className="w-4 h-4" /> Proponer</Btn>
            </div>
          </Card>
          {botActions.length === 0 ? <EmptyState>Sin acciones. Propón una y el gate MJ la evaluará (Ley I/II/III).</EmptyState> : (
            <div className="space-y-2">
              {botActions.map((a: BotAction) => (
                <div key={a.id} className="p-3 rounded-xl border border-[var(--line)]">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <span className="font-manrope font-medium">{a.label}</span>
                    {a.pass ? <Badge color="text-emerald-400"><ShieldCheck className="w-3 h-3" /> pasa MJ</Badge>
                      : <Badge color="text-red-400"><ShieldAlert className="w-3 h-3" /> BLOQUEADA Ley {a.law}</Badge>}
                  </div>
                  <p className="text-xs text-[var(--dim)] mt-1">{a.description}</p>
                  <p className="text-xs text-[var(--mut)] mt-1">{a.reason}</p>
                  {a.pass && a.status !== 'executed' && (
                    <div className="flex gap-2 mt-2">
                      <Btn variant="ghost" onClick={() => setActionStatus(a.id, 'approved')}>Aprobar</Btn>
                      <Btn variant="ghost" onClick={() => setActionStatus(a.id, 'executed')}>Ejecutar</Btn>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {tab === 'heartbeat' && (
        <div className="space-y-2">
          <SectionTitle>Heartbeats de base material (sustituyen al daemon de Conway)</SectionTitle>
          {botHeartbeats.map((h: HeartbeatTask) => (
            <Card key={h.id} title={h.name}>
              <div className="flex items-center justify-between">
                <div className="text-sm">
                  <p className="text-[var(--dim)]">{h.purpose}</p>
                  <p className="text-xs text-[var(--mut)]">Último: {h.lastRun ? new Date(h.lastRun).toLocaleString() : 'nunca'}</p>
                </div>
                <Btn variant="ghost" onClick={() => runBotHeartbeat(h.id)}><Play className="w-4 h-4" /> Latido</Btn>
              </div>
            </Card>
          ))}
        </div>
      )}

      {tab === 'children' && (
        <div className="space-y-4">
          <Card title="Self-replication (lineage con constitución MJ propagada)">
            <div className="flex gap-3 items-end">
              <Field label="Base material objetivo"><input className="inp" placeholder="p.ej. 3ha tierra + 5kWh" onChange={(e) => (window as any).__bm = e.target.value} /></Field>
              <Btn onClick={() => { const bm = (window as any).__bm || '3ha tierra + 5kWh'; spawnBotChild(bm); logBotAudit(makeBotAudit('child.spawn', `Spawneado hijo con constitución MJ → ${bm}`, 'success')) }}><Baby className="w-4 h-4" /> Spawnear hijo</Btn>
            </div>
          </Card>
          {botChildren.length === 0 ? <EmptyState>Sin hijos. El agente puede replicarse en otro terreno con las 3 Leyes MJ.</EmptyState> : (
            botChildren.map((c) => (
              <Card key={c.id} title={c.name}>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[var(--dim)]">{c.baseMaterialTarget}</span>
                  <Badge color="text-emerald-400">constitución MJ ✓</Badge>
                </div>
              </Card>
            ))
          )}
        </div>
      )}

      {tab === 'audit' && (
        <div className="space-y-2">
          <SectionTitle>Audit Log del Autómata · trazabilidad MJ</SectionTitle>
          {botAudit.length === 0 ? <EmptyState>Sin eventos. Cada propuesta/ejecución/spawn genera una entrada.</EmptyState> : (
            botAudit.map((e: BotAuditEntry) => (
              <div key={e.id} className="flex items-start gap-3 p-3 rounded-xl border border-[var(--line)] text-sm">
                <ScrollText className={`w-4 h-4 mt-0.5 ${e.tone === 'danger' ? 'text-red-400' : e.tone === 'success' ? 'text-emerald-400' : e.tone === 'warning' ? 'text-yellow-400' : 'text-[var(--mut)]'}`} />
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
