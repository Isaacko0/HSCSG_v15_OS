// HSCSG v15 OS — Tipos del modelo de datos (Materialismo Jerárquico + Alráico)
// Todo campo es editable/local. No hay backend: la "base material" es el único servidor.

export interface BaseMaterial {
  tierra_ha: number
  agua_l_dia: number
  energia_kwh_dia: number
  comida_kg_dia: number
  herramientas_fabship: number
  semillas_criollas: number
  usdc_reserva: number
}

// Vectores CAC v12 — SOLO se miden con sensor físico o evento ValueFlows (síntesis §4.1)
export interface CACVectors {
  ALIM: number // kcal local kg/día per cápita / objetivo
  ENER: number // kWh locales / total + autonomía
  SALU: number // casos resueltos local / total
  HABI: number // m2 construidos FABSHIP / total + tenencia reversible
  PROD: number // componentes críticos FABSHIP / total
}

export type VFType = 'LaborFlow' | 'LoveFlow' | 'CareFlow' | 'RepairFlow' | 'ManufactureFlow'

export interface ValueFlow {
  id: string
  ts: number
  type: VFType
  actor: string
  znu: number
  note?: string
}

export type MemberRole = 'agronomo' | 'energia' | 'maker' | 'facilitador' | 'generalista'

export interface Member {
  id: string
  name: string
  role: MemberRole
  hoursPerWeek: number
  znuStake: number
  signedSocialDNA: boolean
  committedMonths: number
}

export type TalentVector = 'ALIM' | 'ENER' | 'PROD' | 'SALU' | 'COMU' | 'REDES' | 'FINA' | 'TRANSVERSAL'

export interface Talent {
  id: string
  name: string
  vector: TalentVector
  func: string
  active: boolean
}

export interface SensorReading {
  id: string
  ts: number
  vector: keyof CACVectors
  value: number
  unit: string
  note?: string
}

export interface PlanAction {
  id: string
  week: number
  text: string
  done: boolean
  owner: string
}

export interface PlanCycle {
  id: number
  name: string
  actions: PlanAction[]
}

export interface PVSO {
  id: string
  ts: number
  cycle: number
  aut_alim: number
  aut_ener: number
  aut_habi: number
  aut_salu: number
  pgs: number
  notes?: string
}

export interface ZNUState {
  perMember: number
  demurrageThreshold: number
  demurrageRate: number
  priceParity: number // ZNU por 1 USDC
}
