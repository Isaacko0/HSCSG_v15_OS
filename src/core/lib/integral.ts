// HSCSG v15 OS — Lógica del módulo Integral (asimilado de Integral Collective: 9 repos)
// Loop cerrado postmonetario: CDS→OAD→COS→ITC→FRS→CDS. Sin GitHub como infra.

import type {
  IntegralState, Issue, DecisionRecord, CertifiedDesign, LaborEvent, TimeCredit,
  SignalPacket, Recommendation, IntegralSystem,
} from '@core/state/integral'
import { scoreEvidence, type Evidence } from '@core/lib/evidence'

const uid = () => Math.random().toString(36).slice(2, 10)
const now = () => Date.now()
let drSeq = 1

// ---- CDS: Collaborative Decision System ----
export function raiseIssue(title: string, raisedBy: string): Issue {
  return { id: uid(), title, raisedBy, status: 'open', createdAt: now() }
}

// Evidence Model (CompAI CRM): abrir issue CON evidencias → band calculada
// automáticamente. VERIFIED auto-ejecuta; PROBABLE/POSSIBLE requiere ratificar.
export function raiseIssueWithEvidence(
  title: string,
  raisedBy: string,
  evidence: Evidence[],
): Issue {
  const scored = scoreEvidence(evidence)
  return {
    id: uid(),
    title,
    raisedBy,
    status: scored.band === 'VERIFIED' ? 'decided' : 'open',
    createdAt: now(),
    evidence: evidence.map((e) => ({ kind: e.kind, text: e.detail, sourceUrl: e.sourceUrl })),
    band: scored.band,
    score: Number(scored.score.toFixed(2)),
  }
}

export function ratifyDecision(
  issues: Issue[],
  issueId: string,
  decision: string,
  context: string,
  reasoning: string,
  supersedes?: string,
): { issue?: Issue; dr: DecisionRecord } {
  const dr: DecisionRecord = {
    id: `DR-${String(drSeq++).padStart(3, '0')}`,
    decision, context, reasoning, date: now(), supersedes,
  }
  const issue = issues.find((i) => i.id === issueId)
  const updated: Issue | undefined = issue ? { ...issue, status: 'decided' } : undefined
  return { issue: updated, dr }
}

// ---- OAD: Open Access Design ----
export function certifyDesign(title: string, ecoScore: number, version = 1): CertifiedDesign {
  return { id: uid(), title, ecoScore: Math.max(0, Math.min(100, ecoScore)), version }
}

// ---- COS: Cooperative Organization System ----
export function logLabor(projectId: string, participant: string, hours: number, certified = true): LaborEvent {
  return { id: uid(), projectId, participant, hours, certified }
}

// ---- ITC: Integral Time Credits (decay, no-transferible) ----
// raw = créditos ganados; decay aplica por tiempo transcurrido desde el evento.
export function awardCredits(participant: string, raw: number, ageDays = 0, decayPerDay = 0.01): TimeCredit {
  const decayed = Math.round(raw * Math.pow(1 - decayPerDay, ageDays))
  return { id: uid(), participant, credits: decayed, raw, decayed: raw - decayed }
}

// ---- FRS: Feedback & Review System (advisory only) ----
export function ingestSignal(fromSystem: IntegralSystem, severity: 'info' | 'warning' | 'critical', finding: string): SignalPacket {
  return { id: uid(), fromSystem, severity, finding, ts: now() }
}

export function diagnose(signals: SignalPacket[]): SignalPacket[] {
  // stub: severidad critical primero. El motor real vive en Verificación/Lucidez.
  return [...signals].sort((a, b) => rank(b.severity) - rank(a.severity))
}

function rank(s: 'info' | 'warning' | 'critical'): number {
  return s === 'critical' ? 2 : s === 'warning' ? 1 : 0
}

export function recommend(finding: string, target: IntegralSystem): Recommendation {
  return { id: uid(), finding, target, promotedToIssue: false }
}

export function promoteRecommendation(rec: Recommendation): { rec: Recommendation; issue: Issue } {
  return {
    rec: { ...rec, promotedToIssue: true },
    issue: raiseIssue(`[FRS→CDS] ${rec.finding}`, 'FRS'),
  }
}

// ---- System Health (isomorfo a Lucidez / Verificación) ----
export function systemHealth(s: IntegralState): number {
  const open = s.issues.filter((i) => i.status === 'open').length
  const decided = s.decisions.length
  const critical = s.signals.filter((x) => x.severity === 'critical').length
  const designs = s.designs.length
  const loops = decided + designs + s.labor.length + s.credits.length
  // score simple: más loops cerrados y decisiones, menos issues abiertos críticos
  let score = Math.min(100, loops * 5)
  score -= open * 3
  score -= critical * 10
  return Math.max(0, Math.round(score))
}

// Estado semilla: el nodo Cosateca ya corre el loop
export function makeIntegralState(): IntegralState {
  return {
    issues: [
      { id: 'i1', title: 'Subir fase del pilar Water (soberanía)', raisedBy: 'Isaac Ko', status: 'deliberating', createdAt: now() - 86400000 },
      { id: 'i2', title: 'Certificar diseño de huerta comunitaria', raisedBy: 'Luz', status: 'open', createdAt: now() - 3600000 },
    ],
    decisions: [
      { id: 'DR-001', decision: 'El acceso al CaaS requiere contribución AUT verificable', context: 'Evitar mercantilización del nodo', reasoning: 'Isomorfo a ITC: no-transferible, decay', date: now() - 5 * 86400000 },
    ],
    designs: [
      { id: 'd1', title: 'Huerta comunitaria v1', ecoScore: 88, version: 1 },
      { id: 'd2', title: 'Taller de reparación v1', ecoScore: 72, version: 1 },
    ],
    labor: [
      { id: 'l1', projectId: 'p1', participant: 'Luz', hours: 18, certified: true },
      { id: 'l2', projectId: 'p1', participant: 'Tobías', hours: 60, certified: true },
    ],
    credits: [
      awardCredits('Isaac Ko', 40, 30),
      awardCredits('Luz', 18, 10),
      awardCredits('Tobías', 60, 45),
    ],
    signals: [
      ingestSignal('COS', 'warning', 'Pilar Water en fase build pero sin redundancia de bombeo'),
      ingestSignal('ITC', 'info', 'Créditos de Tobías con decay acumulado 12%'),
      ingestSignal('OAD', 'critical', 'Diseño taller de reparación necesita eco-assessment de baterías'),
    ],
    recommendations: [
      recommend('Certificar eco-assessment de baterías en taller de reparación', 'OAD'),
    ],
  }
}

// ============================================================================
// P1 — Autonomía de extremo a extremo (cierra OAD/COS tras CDS)
// ============================================================================

/**
 * Balance ZNU agregado DERIVADO (no persistido): evita duplicar estado y desincronizar
 * el actuator del P0. Se calcula desde los TimeCredits ya otorgados (post-decay).
 * Si no hay créditos aún, devuelve 0 (el pool es virtual hasta que se contribuye).
 */
export function znuBalanceFrom(s: IntegralState): number {
  return s.credits.reduce((a, c) => a + c.credits, 0)
}

/**
 * applyDecision: mueve una DecisionRecord ratificada en CDS hacia su órgano de ejecución
 * (OAD → CertifiedDesign, COS → LaborEvent). Función PURA: devuelve el nuevo IntegralState.
 * Cierra el eslabón CDS→OAD/COS del loop (antes solo quedaba en status:'decided').
 */
export function applyDecision(s: IntegralState, drId: string): IntegralState {
  const dr = s.decisions.find((d) => d.id === drId)
  if (!dr) return s
  const ctx = dr.context.toLowerCase()
  if (ctx.includes('oad') || ctx.includes('diseño') || ctx.includes('design')) {
    const design: CertifiedDesign = { id: uid(), title: dr.decision, ecoScore: 50, version: 1 }
    return { ...s, designs: s.designs.concat(design) }
  }
  if (ctx.includes('cos') || ctx.includes('labor') || ctx.includes('taller')) {
    const labor: LaborEvent = { id: uid(), projectId: dr.id, participant: 'nodo', hours: 1, certified: true }
    return { ...s, labor: s.labor.concat(labor) }
  }
  return s
}