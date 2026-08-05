// HSCSG v15 OS — Lógica del Automaton (asimilado de Conway / automaton)
// Agente soberano que sobrevive por base material (AUT), gobernado por las 3 Leyes MJ.

import type {
  SoulState, BotAction, HeartbeatTask, BotChild, BotAuditEntry, SurvivalTier,
} from '@core/state/automaton'
import type { CACVectors } from '@core/state/types'
import { autFromCAC, pgsLM } from '@core/lib/metrics'
import { evaluateMJGate } from '@core/lib/orchestration'

const uid = () => Math.random().toString(36).slice(2, 9)

// Tier de supervivencia derivado de AUT real (no de créditos de nube)
export function survivalTier(aut: { ALIM: number; ENER: number; SALU: number; HABI: number; PROD: number }): SurvivalTier {
  const avg = (aut.ALIM + aut.ENER + aut.SALU + aut.HABI + aut.PROD) / 5
  if (avg >= 0.8) return 'high'
  if (avg >= 0.5) return 'normal'
  if (avg >= 0.25) return 'low_material'
  if (avg > 0) return 'critical'
  return 'dormant'
}

export const TIER_META: Record<SurvivalTier, { label: string; color: string; note: string }> = {
  high: { label: 'Alto', color: 'text-emerald-400', note: 'Base material próspera; pleno operación.' },
  normal: { label: 'Normal', color: 'text-lime-400', note: 'Base material sostiene al agente.' },
  low_material: { label: 'Baja material', color: 'text-yellow-400', note: 'AUT cae; reducir consumo, regresar a tierra.' },
  critical: { label: 'Crítico', color: 'text-orange-400', note: 'Casi sin base; priorizar regeneración.' },
  dormant: { label: 'Dormido', color: 'text-[var(--dim)]', note: 'Sin base material; latido mínimo hasta que haya tierra.' },
}

// Evaluar acción del agente contra las 3 Leyes MJ (reusa gate de Orquestación/Conway-isomorfo)
export function evaluateAction(
  label: string,
  ctx: { pgs: number; pop: number; usdc: number; hitsBaseMaterial: boolean },
): { pass: boolean; law?: 'I' | 'II' | 'III'; reason: string } {
  const g = evaluateMJGate(label, ctx)
  return { pass: g.pass, law: g.law ?? undefined, reason: g.reason }
}

// Drift de la SOUL: si el AUT es 0 pero la SOUL dice "próspera", está flotante (Ley III)
export function soulDrift(soul: SoulState, aut: { ALIM: number; ENER: number; SALU: number; HABI: number; PROD: number }): 'anclada' | 'flotante' {
  const avg = (aut.ALIM + aut.ENER + aut.SALU + aut.HABI + aut.PROD) / 5
  const claimsProsperity = /prósper|soberan|florec/i.test(soul.purpose)
  if (claimsProsperity && avg < 0.25) return 'flotante'
  return 'anclada'
}

// Spawn de hijo con constitución MJ propagada
export function spawnChild(parent: SoulState, baseMaterialTarget: string): BotChild {
  return {
    id: uid(),
    name: `${parent.name}-hijo-${Math.floor(Math.random() * 90 + 10)}`,
    baseMaterialTarget,
    parentId: parent.id,
    constitutionMJ: true,
    spawnedAt: Date.now(),
  }
}

// Latido de tarea de base material
export function runHeartbeat(task: HeartbeatTask): HeartbeatTask {
  return { ...task, lastRun: Date.now() }
}

export function botStats(
  actions: BotAction[],
  children: BotChild[],
  cac: CACVectors,
) {
  const aut = autFromCAC(cac)
  const pgs = pgsLM(aut)
  const tier = survivalTier(aut)
  const approved = actions.filter((a) => a.status === 'approved' || a.status === 'executed').length
  const denied = actions.filter((a) => a.status === 'denied').length
  return { pgs, tier, approved, denied, children: children.length }
}

export function makeBotAudit(
  action: string, detail: string, tone: BotAuditEntry['tone'], lawRef?: 'I' | 'II' | 'III',
): BotAuditEntry {
  return { id: uid(), ts: Date.now(), action, detail, tone, lawRef }
}
