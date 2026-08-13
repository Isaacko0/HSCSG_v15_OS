import { useState } from 'react'
import {
  RefreshCw, Vote, PencilRuler, Clock, Hammer, Activity, FileCheck2,
} from 'lucide-react'
import { useAppStore } from '@core/state/store'
import { systemHealth, diagnose } from '@core/lib/integral'
import type { IntegralSystem } from '@core/state/integral'
import { Card, Stat, Btn, Badge, FactBandBadge } from '@components/ui'
import { type Evidence, type EvidenceKind } from '@core/lib/evidence'
import { NextStageBanner } from '@components/NextStageBanner'
import { t } from '@core/lib/i18n'

const SYS: { key: IntegralSystem; labelKey: string; icon: any; color: string; descKey: string }[] = [
  { key: 'CDS', labelKey: 'integ.cds', icon: Vote, color: 'text-violet-400', descKey: 'integ.cds.desc' },
  { key: 'OAD', labelKey: 'integ.oad', icon: PencilRuler, color: 'text-sky-400', descKey: 'integ.oad.desc' },
  { key: 'COS', labelKey: 'integ.cos', icon: Hammer, color: 'text-amber-400', descKey: 'integ.cos.desc' },
  { key: 'ITC', labelKey: 'integ.itc', icon: Clock, color: 'text-emerald-400', descKey: 'integ.itc.desc' },
  { key: 'FRS', labelKey: 'integ.frs', icon: Activity, color: 'text-rose-400', descKey: 'integ.frs.desc' },
]

export function Integral() {
  const { integral, raiseIntegralIssue, raiseIntegralIssueWithEvidence, certifyIntegralDesign, logIntegralLabor, awardIntegralCredits, ingestIntegralSignal, recommendIntegral, promoteRecommendation, lucidez, lang } = useAppStore()
  const [newIssue, setNewIssue] = useState('')
  const [newEvidence, setNewEvidence] = useState('')
  const [newEvidenceKind, setNewEvidenceKind] = useState<EvidenceKind>('cds.consensus')
  const [evidenceDraft, setEvidenceDraft] = useState<Evidence[]>([])
  const [newDesign, setNewDesign] = useState({ title: '', eco: 80 })
  const [newSignal, setNewSignal] = useState({ from: 'COS' as IntegralSystem, sev: 'warning' as 'info' | 'warning' | 'critical', finding: '' })
  const [newLabor, setNewLabor] = useState({ projectId: 'p1', participant: 'Isaac Ko', hours: 4 })

  const health = systemHealth(integral)
  const sortedSignals = diagnose(integral.signals)

  return (
    <div className="space-y-6">
      <NextStageBanner stage="integral" />
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="font-jost text-2xl md:text-3xl font-semibold flex items-center gap-2">
            <RefreshCw className="w-7 h-7 text-emerald-400" /> Integral · Loop postmonetario
          </h1>
          <p className="text-[var(--dim)] mt-1">{t('integ.subtitle', lang)}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Stat label={t('integ.health', lang)} value={`${health}/100`} color="text-emerald-400" />
        <Stat label={t('integ.openIssues', lang)} value={`${integral.issues.filter(i => i.status === 'open' || i.status === 'deliberating').length}`} color="text-violet-400" />
        <Stat label={t('integ.dr', lang)} value={`${integral.decisions.length}`} color="text-sky-400" />
        <Stat label={t('integ.critSignals', lang)} value={`${integral.signals.filter(s => s.severity === 'critical').length}`} color="text-rose-400" />
      </div>

      <Card title={t('integ.map', lang)}>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
          {SYS.map((s) => {
            const Icon = s.icon
            const count = s.key === 'CDS' ? integral.issues.length
              : s.key === 'OAD' ? integral.designs.length
              : s.key === 'COS' ? integral.labor.length
              : s.key === 'ITC' ? integral.credits.length
              : integral.signals.length
            return (
              <div key={s.key} className="p-2 rounded-lg border border-[var(--line)] text-center">
                <Icon className="w-5 h-5 mx-auto" style={{ color: s.color.replace('text-', '') }} />
                <div className="font-manrope text-sm mt-1">{t(s.labelKey, lang)}</div>
                <div className="text-xs text-[var(--dim)]">{count} {t('integ.regs', lang)}</div>
              </div>
            )
          })}
        </div>
        <p className="text-xs text-[var(--dim)] mt-2">{t('integ.map.note', lang)}</p>
      </Card>

      <div className="grid md:grid-cols-2 gap-4">
        <Card title={t('integ.cdsCard', lang)}>
          <div className="space-y-1 mb-2">
            {integral.issues.map((i) => (
              <div key={i.id} className="flex items-center justify-between text-sm flex-wrap gap-1">
                <span>{i.title} <Badge color="text-violet-400">{i.status}</Badge></span>
                {i.band && <FactBandBadge band={i.band} score={i.score} />}
                {i.band === 'VERIFIED' && <Badge color="bg-emerald-500/20 text-emerald-300">auto-ejecutada</Badge>}
              </div>
            ))}
          </div>
          {/* Draft de evidencia (Evidence Model) */}
          <div className="mb-2 p-2 rounded border border-[var(--line)] space-y-1">
            <div className="text-xs text-[var(--dim)]">Evidencia del issue (Fact Bands — CompAI CRM)</div>
            {evidenceDraft.map((e, idx) => (
              <div key={idx} className="flex items-center gap-1 text-xs">
                <Badge color="border-[var(--line)] text-[var(--mut)]">{e.kind}</Badge>
                <span>{e.detail}</span>
              </div>
            ))}
            <div className="flex gap-1">
              <select
                value={newEvidenceKind}
                onChange={e => setNewEvidenceKind(e.target.value as EvidenceKind)}
                className="px-2 py-1 bg-[var(--surf2)] border border-[var(--line)] rounded-xl text-[var(--ink)] text-xs"
              >
                <option value="cds.consensus">cds.consensus (0.80)</option>
                <option value="aut.observation">aut.observation (0.85)</option>
                <option value="crm.signature-block">crm.signature-block (0.80)</option>
                <option value="web.cited-claim">web.cited-claim (0.40)</option>
                <option value="employer-only">employer-only (0.20)</option>
                <option value="contradiction">contradiction (0.00)</option>
              </select>
              <input
                placeholder="texto de observación"
                value={newEvidence}
                onChange={e => setNewEvidence(e.target.value)}
                className="flex-1 px-2 py-1 bg-[var(--surf2)] border border-[var(--line)] rounded-xl text-[var(--ink)] text-xs"
              />
              <Btn variant="ghost" onClick={() => { if (newEvidence.trim()) { setEvidenceDraft([...evidenceDraft, { kind: newEvidenceKind, detail: newEvidence }]); setNewEvidence('') } }}>＋</Btn>
            </div>
          </div>
          <div className="flex gap-2">
            <input
              placeholder={t('integ.newIssue', lang)}
              value={newIssue}
              onChange={e => setNewIssue(e.target.value)}
              className="flex-1 px-3 py-2 bg-[var(--surf2)] border border-[var(--line)] rounded-xl text-[var(--ink)] text-sm"
            />
            <Btn
              onClick={() => {
                if (newIssue.trim()) {
                  if (evidenceDraft.length > 0) raiseIntegralIssueWithEvidence(newIssue, 'Isaac Ko', evidenceDraft)
                  else raiseIntegralIssue(newIssue, 'Isaac Ko')
                  setNewIssue(''); setEvidenceDraft([])
                }
              }}
            >{t('integ.raise', lang)}</Btn>
          </div>
          <p className="text-xs text-[var(--dim)] mt-2">Con evidencia: VERIFIED auto-ejecuta · PROBABLE/POSSIBLE quedan para ratificar. Sin evidencia: issue abierto normal.</p>
          {integral.decisions.map((d) => (
            <div key={d.id} className="mt-2 p-2 rounded border border-[var(--line)] text-xs">
              <Badge color="text-sky-400">{d.id}</Badge> {d.decision}
            </div>
          ))}
        </Card>

        <Card title={t('integ.oadCard', lang)}>
          {integral.designs.map((d) => (
            <div key={d.id} className="flex items-center justify-between text-sm p-1">
              <span>{d.title}</span>
              <Badge color={d.ecoScore > 75 ? 'text-emerald-400' : 'text-amber-400'}>eco {d.ecoScore}</Badge>
            </div>
          ))}
          <div className="flex gap-2 mt-2">
            <input
              placeholder={t('integ.designTitle', lang)}
              value={newDesign.title}
              onChange={e => setNewDesign({ ...newDesign, title: e.target.value })}
              className="flex-1 px-3 py-2 bg-[var(--surf2)] border border-[var(--line)] rounded-xl text-[var(--ink)] text-sm"
            />
            <input
              type="number"
              placeholder="eco"
              value={newDesign.eco}
              onChange={e => setNewDesign({ ...newDesign, eco: Number(e.target.value) })}
              className="w-16 px-2 py-2 bg-[var(--surf2)] border border-[var(--line)] rounded-xl text-[var(--ink)] text-sm"
            />
            <Btn onClick={() => { if (newDesign.title.trim()) { certifyIntegralDesign(newDesign.title, newDesign.eco); setNewDesign({ title: '', eco: 80 }) } }}>{t('integ.certify', lang)}</Btn>
          </div>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <Card title={t('integ.cosCard', lang)}>
          <p className="text-sm text-[var(--dim)] mb-1">{t('integ.laborNote', lang)}</p>
          {integral.labor.map((l) => (
            <div key={l.id} className="text-sm">{l.participant}: {l.hours}h {l.certified ? '✓' : '·'}</div>
          ))}
          <div className="flex gap-2 mt-2">
            <input
              placeholder={t('integ.participant', lang)}
              value={newLabor.participant}
              onChange={e => setNewLabor({ ...newLabor, participant: e.target.value })}
              className="flex-1 px-3 py-2 bg-[var(--surf2)] border border-[var(--line)] rounded-xl text-[var(--ink)] text-sm"
            />
            <input
              type="number"
              placeholder="h"
              value={newLabor.hours}
              onChange={e => setNewLabor({ ...newLabor, hours: Number(e.target.value) })}
              className="w-16 px-2 py-2 bg-[var(--surf2)] border border-[var(--line)] rounded-xl text-[var(--ink)] text-sm"
            />
            <Btn onClick={() => { logIntegralLabor(newLabor.projectId, newLabor.participant, newLabor.hours); awardIntegralCredits(newLabor.participant, newLabor.hours) }}>{t('integ.register', lang)}</Btn>
          </div>
          <p className="text-sm text-[var(--dim)] mt-3 mb-1">{t('integ.tcNote', lang)}</p>
          {integral.credits.map((c) => (
            <div key={c.id} className="text-sm">{c.participant}: {c.credits} (raw {c.raw}, decayed {c.decayed})</div>
          ))}
        </Card>

        <Card title={t('integ.frsCard', lang)}>
          <p className="text-sm text-[var(--dim)] mb-1">{t('integ.signalsNote', lang)}</p>
          {sortedSignals.map((s) => (
            <div key={s.id} className="text-xs p-1 rounded border border-[var(--line)]">
              <Badge color={s.severity === 'critical' ? 'text-rose-400' : s.severity === 'warning' ? 'text-amber-400' : 'text-sky-400'}>{s.fromSystem} · {s.severity}</Badge> {s.finding}
            </div>
          ))}
          <div className="flex gap-2 mt-2">
            <select
              value={newSignal.from}
              onChange={e => setNewSignal({ ...newSignal, from: e.target.value as IntegralSystem })}
              className="px-2 py-2 bg-[var(--surf2)] border border-[var(--line)] rounded-xl text-[var(--ink)] text-sm"
            >
              {SYS.map(s => <option key={s.key} value={s.key}>{s.key}</option>)}
            </select>
            <select
              value={newSignal.sev}
              onChange={e => setNewSignal({ ...newSignal, sev: e.target.value as any })}
              className="px-2 py-2 bg-[var(--surf2)] border border-[var(--line)] rounded-xl text-[var(--ink)] text-sm"
            >
              <option value="info">info</option><option value="warning">warning</option><option value="critical">critical</option>
            </select>
            <input
              placeholder="finding"
              value={newSignal.finding}
              onChange={e => setNewSignal({ ...newSignal, finding: e.target.value })}
              className="flex-1 px-2 py-2 bg-[var(--surf2)] border border-[var(--line)] rounded-xl text-[var(--ink)] text-sm"
            />
          </div>
          <Btn className="mt-2" onClick={() => { if (newSignal.finding.trim()) { ingestIntegralSignal(newSignal.from, newSignal.sev, newSignal.finding); setNewSignal({ ...newSignal, finding: '' }) } }}>{t('integ.ingest', lang)}</Btn>
          <p className="text-sm text-[var(--dim)] mt-3 mb-1">{t('integ.recNote', lang)}</p>
          {integral.recommendations.map((r) => (
            <div key={r.id} className="flex items-center justify-between text-xs p-1 rounded border border-[var(--line)]">
              <span>{r.finding} → {r.target}</span>
              {!r.promotedToIssue
                ? <Btn variant="ghost" onClick={() => promoteRecommendation(r.id)}>{t('integ.promote', lang)}</Btn>
                : <Badge color="text-violet-400">{t('integ.promoted', lang)}</Badge>}
            </div>
          ))}
          <Btn className="mt-2" variant="ghost" onClick={() => recommendIntegral('Revisar fase del pilar más débil', 'OAD')}>{t('integ.recommend', lang)}</Btn>
        </Card>
      </div>

      <div className="flex items-center gap-2">
        <FileCheck2 className="w-4 h-4 text-sky-400" />
        <span className="text-xs text-[var(--dim)]">{t('integ.footer', lang)}</span>
      </div>

      {/* Modo Lucidez: datos crudos / provenance (visible SOLO si Modo Lucidez ON — Ley III) */}
      {lucidez && (
      <div className="lucidez-raw mt-4 p-4 rounded-xl border border-chispa/40 bg-[var(--surf2)] text-sm space-y-2">
        <p className="font-manrope font-semibold text-chispa">{t('integ.rawTitle', lang)}</p>
        <p className="text-[var(--dim)]">{t('integ.raw1', lang)} <strong className="text-[var(--ink)]">{health}</strong>/100.</p>
        <p className="text-[var(--dim)]">{t('integ.raw2', lang)} CDS issues={integral.issues.length} · DR={integral.decisions.length} · OAD diseños={integral.designs.length} · COS labor={integral.labor.length} · ITC credits={integral.credits.length} · FRS señales={integral.signals.length}.</p>
        <p className="text-[var(--dim)]">{t('integ.rawProv', lang)}</p>
        <ul className="list-disc list-inside text-[var(--dim)] text-xs space-y-1">
          {integral.signals.map((s) => (
            <li key={s.id}>{s.fromSystem} → {s.severity}: {s.finding} (ts {new Date(s.ts).toISOString()})</li>
          ))}
        </ul>
        {/* Lucidez 2.0 (Ley III + Evidence Model): por qué el nodo decidió cada issue */}
        <p className="font-manrope font-semibold text-chispa mt-3">Lucidez 2.0 · Por qué el nodo decidió (Evidence Model)</p>
        <ul className="list-disc list-inside text-[var(--dim)] text-xs space-y-1">
          {integral.issues.filter((i) => i.band).map((i) => (
            <li key={i.id}>
              <strong className="text-[var(--ink)]">{i.title}</strong> → band {i.band} (score {i.score}).
              Evidencias: {i.evidence?.map((e) => `${e.kind}: ${e.text}`).join(' · ') || 'ninguna'}
            </li>
          ))}
          {integral.issues.filter((i) => i.band).length === 0 && <li>Sin issues con evidencia aún. Adjunta observaciones para ver el razonamiento del nodo.</li>}
        </ul>
        <p className="text-[var(--dim)] text-xs">{t('integ.rawNote', lang)}</p>
      </div>
      )}
    </div>
  )
}
