// HSCSG v15 OS — Lógica del módulo Priorizar (asimilado de ZiadJ/prioritize)
// Motor de factibilidad REUTILIZADO del repo original (lib/stepCostsFeasibility.ts, código puro TS).
// Priorización comunitaria postmonetaria: necesidades → planes → pasos → costos de base material.

import type {
  CollectiveRequest, Proposal, StepCost, CommunityResource, Feedback, Step,
} from '@core/state/prioritize'

// ─────────────────────────────────────────────────────────────────────────────
// MOTOR DE FACTIBILIDAD (copiado de ZiadJ/prioritize lib/stepCostsFeasibility.ts)
// Costos consumen recursos comunitarios en orden; factibilidad [0,1] por costo.
// ─────────────────────────────────────────────────────────────────────────────

export interface StepCostFeasibilityInput {
  communityResourceId?: number | null
  quantity: number
  communityResource?: { quantity: number; monetaryValuePerUnit: number } | null
}
export interface StepCostEvaluation {
  feasibility: number
  availableQuantity: number | null
}

export function evaluateStepCostFeasibilities(
  costs: StepCostFeasibilityInput[],
): StepCostEvaluation[] {
  const items = costs.map(cost => ({
    ...cost,
    communityResource: cost.communityResource != null ? { ...cost.communityResource } : null,
  }))
  const results: StepCostEvaluation[] = new Array(items.length)
  for (let i = 0; i < items.length; i++) {
    const cost = items[i]
    if (!cost) continue
    const requiredQuantity = cost.quantity
    const availableQuantity = cost.communityResource?.quantity ?? null
    let feasibility = 1
    if (availableQuantity == null || !Number.isFinite(requiredQuantity) || requiredQuantity <= 0) {
      feasibility = 1
    } else if (requiredQuantity > availableQuantity) {
      feasibility = 0
    } else {
      feasibility = 1 - requiredQuantity / availableQuantity
    }
    results[i] = { feasibility, availableQuantity }
    const communityResourceId = cost.communityResourceId
    if (communityResourceId != null && Number.isFinite(requiredQuantity) && requiredQuantity !== 0) {
      for (const other of items) {
        if (other.communityResourceId === communityResourceId && other.communityResource != null) {
          other.communityResource.quantity -= requiredQuantity
        }
      }
    }
  }
  return results
}

export function getStepCostsFeasibility(costs: StepCostFeasibilityInput[]): number {
  let product = 1
  for (const { feasibility } of evaluateStepCostFeasibilities(costs)) product *= feasibility
  return product
}

// ─────────────────────────────────────────────────────────────────────────────
// ADAPTADORES HSCSG (tipos del OS → inputs del motor)
// ─────────────────────────────────────────────────────────────────────────────

export function planFeasibility(
  steps: Step[],
  resources: CommunityResource[],
): { feasibility: number; perStep: { stepId: string; feasibility: number; stockLeft: Record<string, number> }[] } {
  // Aplanar todos los costos en orden, mapeando resource id → stock simulado
  const stock: Record<string, number> = {}
  for (const r of resources) stock[r.id] = r.quantityAvailable
  const perStep: { stepId: string; feasibility: number; stockLeft: Record<string, number> }[] = []
  let globalFeasibility = 1
  for (const step of steps) {
    const inputs: StepCostFeasibilityInput[] = step.costs.map((c: StepCost) => ({
      communityResourceId: Number(c.communityResourceId),
      quantity: c.quantity,
      communityResource: { quantity: stock[c.communityResourceId] ?? 0, monetaryValuePerUnit: 0 },
    }))
    const evals = evaluateStepCostFeasibilities(inputs)
    const stepFeas = evals.reduce((a, b) => a * (b?.feasibility ?? 1), 1)
    // aplicar consumo real al stock simulado
    for (const c of step.costs) {
      if (stock[c.communityResourceId] != null) stock[c.communityResourceId] -= c.quantity
    }
    perStep.push({ stepId: step.id, feasibility: stepFeas, stockLeft: { ...stock } })
    globalFeasibility *= stepFeas
  }
  return { feasibility: globalFeasibility, perStep }
}

// Priorizar necesidades: urgencia = necesidad básica (Ley I) ponderada por prioridad
export function prioritizeRequests(requests: CollectiveRequest[]): CollectiveRequest[] {
  return [...requests].sort((a, b) => {
    const ua = (a.isBasicNeed ? 1000 : 0) + a.priority
    const ub = (b.isBasicNeed ? 1000 : 0) + b.priority
    return ub - ua
  })
}

// Ranking de propuestas por beneficio neto + factibilidad + ratings de comunidad (Ley III)
export function rankProposals(proposals: Proposal[], feedbacks: Feedback[]): Proposal[] {
  const score = (p: Proposal) => {
    const fs = feedbacks.filter((f) => f.proposalId === p.id)
    const avgRating = fs.length ? fs.reduce((a, f) => a + f.rating, 0) / fs.length : 0
    const avgConf = fs.length ? fs.reduce((a, f) => a + f.confidence, 0) / fs.length : 0
    return p.netBenefit * p.netFeasibility * (1 + avgRating * avgConf * 0.1)
  }
  return [...proposals].sort((a, b) => score(b) - score(a))
}
