// HSCSG v15 OS — Tipos del módulo Priorizar (asimilado de ZiadJ/prioritize)
// Priorización comunitaria postmonetaria: necesidades → planes → pasos → costos de base material.

export type MeasurementType =
  | 'None' | 'Units' | 'Time' | 'Weight' | 'Volume' | 'Area' | 'Length' | 'Energy'

export interface CommunityResource {
  id: string
  title: string
  measurementType: MeasurementType
  quantityAvailable: number // stock actual (espejo de base material)
  monthlyCapacity: number
}

export interface StepCost {
  id: string
  title: string
  communityResourceId: string
  quantity: number // negativo = producción
  monetaryValue: number // solo si no hay stock comunitario
}

export interface Step {
  id: string
  title: string
  duration: number
  riskFactor: number
  costs: StepCost[]
}

export interface Proposal {
  id: string
  title: string
  requestId: string
  steps: Step[]
  netBenefit: number
  netFeasibility: number
  priority: number
  riskFactor: number
}

export interface CollectiveRequest {
  id: string
  title: string
  description: string
  isBasicNeed: boolean // urgencia Ley I
  priority: number // por Social DNA / necesidad, NO precio
  quantity: number
  proposalIds: string[]
}

export interface Feedback {
  id: string
  proposalId: string
  rating: number
  confidence: number
  comment: string
}

export interface PrioritizeState {
  requests: CollectiveRequest[]
  proposals: Proposal[]
  communityResources: CommunityResource[]
  feedbacks: Feedback[]
}
