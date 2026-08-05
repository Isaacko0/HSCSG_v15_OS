// HSCSG v15 OS — Lógica CaaS-BM (Community-as-a-Service de Base Material)
// Todas las funciones PURAS. Cada decisión pasa por las 3 Leyes MJ.

import type {
  CaaSTier, CaaSMembership, CaaSRevenueStream, CaaSPayout,
} from '@core/state/caas'
import type { CACVectors, Member, ValueFlow } from '@core/state/types'
import { autFromCAC, pgsLM, population, ics, demurrage } from '@core/lib/metrics'

const uid = () => Math.random().toString(36).slice(2, 9)

export const CAAS_TIERS: CaaSTier[] = [
  { key: 'visitante', name: 'Visitante', stakeZNU: 0, minAUT: 0, minCDS: 0, benefit: 'Lectura de dashboard público' },
  { key: 'aprendiz', name: 'Aprendiz', stakeZNU: 20, minAUT: 0.2, minCDS: 0.2, benefit: 'Acceso a talleres + ValueFlows básicos' },
  { key: 'contribuyente', name: 'Contribuyente', stakeZNU: 60, minAUT: 0.4, minCDS: 0.4, benefit: 'Voz en decisiones + reparto B2B' },
  { key: 'ancla', name: 'Ancla', stakeZNU: 150, minAUT: 0.6, minCDS: 0.6, benefit: 'Co-gobernanza + revenue share' },
  { key: 'custodio', name: 'Custodio', stakeZNU: 400, minAUT: 0.8, minCDS: 0.8, benefit: 'Custodia de semillas/herramientas + veto Ley I' },
]

// ¿Puede el miembro sostener el tier dado su AUT/CDS real?
export function tierEligible(
  tier: CaaSTier,
  aut: { ALIM: number; ENER: number; SALU: number; HABI: number; PROD: number },
  cds: number,
): boolean {
  const avgAut = (aut.ALIM + aut.ENER + aut.SALU + aut.HABI + aut.PROD) / 5
  return avgAut >= tier.minAUT && cds >= tier.minCDS
}

// Estado MJ de un stream de ingresos (verde/ámbar/rojo)
export function streamMJStatus(
  stream: CaaSRevenueStream,
  ctx: { pgs: number; pop: number; aut: number; cds: number },
): { status: 'ok' | 'warn' | 'blocked'; law?: 'I' | 'II' | 'III'; reason: string } {
  if (stream.touchesBaseMaterial) {
    return { status: 'blocked', law: 'I', reason: 'Ley I MJ: el stream toca base material sin regeneración verificada' }
  }
  // Ley II: ROI del colectivo >= 1 (valor generado / USDC entrante)
  const roi = ctx.aut * ctx.pop / Math.max(stream.usdcIn, 1e-6)
  if (roi < 1 && stream.usdcIn > 0) {
    return { status: 'blocked', law: 'II', reason: `Ley II MJ: ROI ${roi.toFixed(2)} < 1 — no soberaniza base` }
  }
  // Ley III: requiere PGS real (datos de laboratorio)
  if (ctx.pgs <= 0) {
    return { status: 'blocked', law: 'III', reason: 'Ley III MJ: sin PGS real no hay lucidez material' }
  }
  return { status: stream.enabled ? 'ok' : 'warn', reason: 'Pasa las 3 Leyes MJ' }
}

// Reparto equitativo de excedente por AUT+CDS con demurrage anti-acumulación.
export function revenueShare(
  payoutBaseZNU: number,
  members: CaaSMembership[],
  aut: { ALIM: number; ENER: number; SALU: number; HABI: number; PROD: number },
  cds: number,
  demurrageThreshold = 300,
  demurrageRate = 0.05,
): CaaSPayout[] {
  const avgAut = (aut.ALIM + aut.ENER + aut.SALU + aut.HABI + aut.PROD) / 5
  // peso = contribución (flows) * AUT * CDS
  const weight = (m: CaaSMembership) => Math.max(m.contributedFlows, 1) * (0.5 + avgAut) * (0.5 + cds)
  const totalW = members.reduce((a, m) => a + weight(m), 0) || 1
  return members.map((m) => {
    const gross = (payoutBaseZNU * weight(m)) / totalW
    const dm = demurrage(gross, demurrageThreshold, demurrageRate)
    return {
      id: uid(),
      ts: Date.now(),
      memberName: m.memberName,
      amountZNU: +(gross - dm).toFixed(2),
      basis: `flows ${m.contributedFlows} × AUT ${avgAut.toFixed(2)} × CDS ${cds.toFixed(2)}`,
      demurrageApplied: +dm.toFixed(2),
    }
  })
}

// Salud del colectivo CaaS (dashboard)
export function caasStats(
  members: CaaSMembership[],
  streams: CaaSRevenueStream[],
  cac: CACVectors,
  coopMembers: Member[],
  flows: ValueFlow[],
) {
  const aut = autFromCAC(cac)
  const pgs = pgsLM(aut)
  const pop = population(coopMembers)
  const cds = ics(coopMembers, flows)
  const eligible = members.filter((m) => tierEligible(CAAS_TIERS.find((t) => t.key === m.tier)!, aut, cds)).length
  const activeStreams = streams.filter((s) => s.enabled).length
  const blockedStreams = streams.filter((s) => streamMJStatus(s, { pgs, pop, aut: avgAut(aut), cds }).status === 'blocked').length
  return { pgs, pop, cds, eligibleMembers: eligible, totalMembers: members.length, activeStreams, blockedStreams }
}

function avgAut(aut: { ALIM: number; ENER: number; SALU: number; HABI: number; PROD: number }) {
  return (aut.ALIM + aut.ENER + aut.SALU + aut.HABI + aut.PROD) / 5
}
