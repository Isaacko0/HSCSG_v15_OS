// Pipeline anidado robusto (orquestador vivo del loop Integral + agentes).
// Lógica pura y de LECTURA: consume el AppState y produce sugerencias de matchmaker,
// salud del loop y routing de feedback. NO muta estados (para no romper el flujo existente).
//
// Inspirado en: Integral (CDS·OAD·COS·ITC·FRS), alook (matchmaker de roles),
// automaton (agente soberano self-funding), ponytail (una-línea/hooks), Symbiosky
// (credibility como peso), Gaia (bounties/círculos), iambrainstorming (aprender/democracia).

import type { CredibilityState } from '@core/state/symbiosky'
import type { DemocracyState } from '@core/state/democracia'
import type { LearningState } from '@core/state/learning'
import type { IntegralState } from '@core/state/integral'
import type { GaiaState } from '@core/state/gaia'
import { systemHealth as systemHealthImport } from '@core/lib/integral'

// ---- Tipos del pipeline ----

export type NeedKind = 'issue' | 'bounty' | 'challenge'
export interface Need {
  id: string
  kind: NeedKind
  title: string
  source: string // sistema de origen
  requiredSkill?: string
}

export interface Capability {
  participant: string
  aut: number // créditos ITC (integral)
  credibility: number // score medio de Symbiosky (0-10)
  expertise: number // delegaciones en democracia
  learned: number // retos completados
  /** peso total de matchmaking 0-100 */
  weight: number
}

export interface Match {
  need: Need
  participant: string
  score: number // 0-100 afinidad
  reason: string
}

export interface PipelineHealth {
  needsOpen: number
  capacities: number
  matched: number
  unmatched: number
  loopScore: number // 0-100 (isomorfo a systemHealth integral)
  alerts: string[]
}

// ---- Cálculo de capacidades ----

const W_AUT = 0.35
const W_CRED = 0.30
const W_EXP = 0.20
const W_LEARN = 0.15

export function computeCapabilities(args: {
  integral?: IntegralState
  credibility?: CredibilityState
  democracia?: DemocracyState
  aprender?: LearningState
}): Capability[] {
  const { integral, credibility, democracia, aprender } = args
  // reunir participantes únicos de todas las fuentes
  const parts = new Set<string>()
  integral?.credits.forEach((c) => parts.add(c.participant))
  integral?.labor.forEach((l) => parts.add(l.participant))
  credibility?.proposals.forEach((p) => parts.add(p.author))
  credibility?.locks.forEach((l) => parts.add(l.voter))
  democracia?.delegations && Object.keys(democracia.delegations).forEach((v) => parts.add(v))
  aprender?.challenges.forEach((c) => { if (c.done) parts.add('nodo') })

  const caps: Capability[] = []
  for (const p of parts) {
    const aut = integral?.credits.filter((c) => c.participant === p).reduce((s, c) => s + c.credits, 0) ?? 0
    const credProps = credibility?.proposals.filter((x) => x.author === p) ?? []
    const credibilityScore = credProps.length
      ? credProps.reduce((s, x) => {
          const votes = Object.values(x.votes)
          const mean = votes.length ? votes.reduce((a, v) => a + v.score, 0) / votes.length : 0
          return s + mean
        }, 0) / credProps.length
      : 0
    const expertise = democracia ? Object.values(democracia.delegations).filter((d) => d !== '').length : 0
    const learned = aprender?.challenges.filter((c) => c.done).length ?? 0
    const weight = Math.min(100, Math.round(
      (Math.min(aut, 100) * W_AUT) +
      (credibilityScore * 10 * W_CRED) +
      (Math.min(expertise, 10) * 10 * W_EXP) +
      (Math.min(learned, 10) * 10 * W_LEARN),
    ))
    caps.push({ participant: p, aut, credibility: credibilityScore, expertise, learned, weight })
  }
  return caps.sort((a, b) => b.weight - a.weight)
}

// ---- Recolección de necesidades activas ----

export function collectNeeds(args: {
  integral?: IntegralState
  gaia?: GaiaState
  aprender?: LearningState
}): Need[] {
  const { integral, gaia, aprender } = args
  const needs: Need[] = []
  integral?.issues.filter((i) => i.status !== 'dispatched' && i.status !== 'decided')
    .forEach((i) => needs.push({ id: i.id, kind: 'issue', title: i.title, source: 'CDS' }))
  gaia?.bounties.filter((b) => !b.done).forEach((b) => needs.push({ id: b.id, kind: 'bounty', title: b.title, source: 'Gaia', requiredSkill: b.need }))
  aprender?.challenges.filter((c) => !c.done).forEach((c) => needs.push({ id: c.id, kind: 'challenge', title: c.title, source: 'Aprender', requiredSkill: c.topic }))
  return needs
}

// ---- Matchmaker (alook-style) ----

export function matchmaker(needs: Need[], caps: Capability[]): Match[] {
  const matches: Match[] = []
  for (const n of needs) {
    let best: Capability | null = null
    let bestScore = -1
    for (const c of caps) {
      // afinidad base = peso de capacidad
      let score = c.weight
      // bonus si el skill requerido coincide con algo que aprendió/domina
      if (n.requiredSkill && (c.learned > 0 || c.expertise > 0)) score += 10
      if (score > bestScore) { bestScore = score; best = c }
    }
    if (best) {
      matches.push({
        need: n,
        participant: best.participant,
        score: Math.min(100, bestScore),
        reason: `peso ${best.weight} (AUT ${best.aut}, cred ${best.credibility.toFixed(1)}, exp ${best.expertise}, retos ${best.learned})`,
      })
    }
  }
  return matches
}

// ---- Salud del loop anidado (con degradación graceful) ----

export function pipelineHealth(needs: Need[], matches: Match[], integral?: IntegralState): PipelineHealth {
  const matched = matches.length
  const unmatched = Math.max(0, needs.length - matched)
  const alerts: string[] = []
  if (unmatched > 0) alerts.push(`${unmatched} necesidad(es) sin capacidad → escalar a Círculo Gaia (Wisdom Council)`)
  // loopScore: combina systemHealth integral + cobertura de matches
  const base = integral ? systemHealthSafe(integral) : 70
  const coverage = needs.length ? (matched / needs.length) * 100 : 100
  const loopScore = Math.round((base * 0.6) + (coverage * 0.4))
  if (loopScore < 50) alerts.push('Loop degradado (<50): revisar FRS y regenerar base material')
  return { needsOpen: needs.length, capacities: matches.length, matched, unmatched, loopScore, alerts }
}

function systemHealthSafe(s: IntegralState): number {
  try {
    return systemHealthImport(s)
  } catch {
    return 70
  }
}

// ---- Routing de feedback FRS (automaton-style) ----

export type FrsTarget = 'CDS' | 'OAD' | 'COS' | 'ITC' | 'FRS'
export interface FrsRoute { target: FrsTarget; action: string }

export function routeFeedback(finding: string, severity: 'info' | 'warning' | 'critical'): FrsRoute[] {
  const routes: FrsRoute[] = []
  const f = finding.toLowerCase()
  if (f.includes('concentr') || f.includes('acumul')) routes.push({ target: 'ITC', action: 'aplicar znuRotate / decay' })
  if (f.includes('ecoscore') || f.includes('diseño')) routes.push({ target: 'OAD', action: 're-certificar diseño' })
  if (f.includes('labor') || f.includes('sobredim')) routes.push({ target: 'COS', action: 're-balancear labor' })
  if (f.includes('decis') || f.includes('necesidad')) routes.push({ target: 'CDS', action: 'raiseIssue advisory' })
  if (f.includes('manipul') || f.includes('lucidez')) routes.push({ target: 'FRS', action: severity === 'critical' ? 'auditar YA / throttle' : 'observar' })
  if (routes.length === 0) routes.push({ target: 'FRS', action: 'observar' })
  return routes
}
