// Base module interface - all modules implement this
export interface BaseModule {
  id: string
  name: string
  icon: string
  color: string
  route: string
  enabled: boolean
}

export interface ModuleRegistry {
  modules: BaseModule[]
  register: (module: BaseModule) => void
  unregister: (id: string) => void
  getModule: (id: string) => BaseModule | undefined
  getEnabledModules: () => BaseModule[]
}

// P1 Types
export interface BranDNASection {
  key: string
  name: string
  icon: string
  role: string
  fields: BranDNAField[]
  demo?: Record<string, any>
  ai?: Record<string, any>
  q?: Array<{ field: string; prompt: string }>
}

export interface BranDNAField {
  key: string
  label: string
  type: 'text' | 'area' | 'chips'
  ph?: string
  hint?: string
}

// P2 Types
export type ProductLevel = 'Magnet' | 'Mini' | 'Core' | 'Mastermind' | 'Mentorship'

export interface Product {
  id: string
  level: ProductLevel
  name: string
  title: string
  promise: string
  desc: string
  mechanism: string
  status: 'Borrador' | 'Publicado'
  dream: number
  likelihood: number
  time: number
  effort: number
  stack: Array<{ item: string; value: number }>
  guarantee: string
  objection: string
  priceOne: number
  priceMonthly: number
  priceAnnual: number
  annualDiscount: number
  installments: number
  currency: string
  linkedContent: string[]
  campaign: string
  landing: string
  sales: number
  students: number
}

// P3 Types
export type PipelineStage = 'Lead' | 'Aplicó' | 'Diagnóstico' | 'Propuesta' | 'Cliente' | 'Graduado' | 'Perdido'

export type AwarenessLevel = 
  | 'Inconsciente del problema'
  | 'Consciente del problema'
  | 'Consciente de la solución'
  | 'Consciente del producto'
  | 'Listo para comprar'

export type ICPTag = 'Primario' | 'Secundario' | 'Exploratorio' | 'Descartado'

export interface Contact {
  id: string
  name: string
  email: string
  icp: string
  stage: PipelineStage
  product: string
  value: number
  next: string
  source: string
  last: string
  note: string
}

export interface ICP {
  id: string
  name: string
  tag: ICPTag
  share: number
  avatarLabel: string
  age: string
  place: string
  income: string
  role: string
  context: string
  day: string
  jtbd: string
  trigger: string
  aware: AwarenessLevel
  channels: string[]
  budget: string
  decides: string
  heaven: string
  hell: string
  tried: string
  objections: string
  signalsYes: string
  signalsNo: string
  product: string
  notes: string
}

// P4 Types
export interface PlanRole {
  key: 'cred' | 'share' | 'conv'
  label: string
  share: number
  hint: string
}

export interface PlanSize {
  key: 'L' | 'M' | 'S'
  label: string
  hint: string
  reach: number
  effortDays: number
}

export interface PlanMixItem {
  product: string
  icp: string
  goal: string
  share: number
  ticket: number
}

export interface PlanConfig {
  revenue: number
  deadlineLabel: string
  days: number
  closeRate: number
  contentToLead: number
  reachPerPiece: number
  paidShare: number
  cpl: number
  mix: PlanMixItem[]
  roles: Array<{ key: string; share: number }>
  sizes: Array<{ key: string; share: number }>
}

// P5 Types
export type VITCHFormat = 'V' | 'I' | 'T' | 'C' | 'H'

export interface VITCHPiece {
  id: string
  fmt: VITCHFormat
  title: string
  hook: string
  product: string
  goal: string
  role: string
  status: 'Borrador' | 'En revisión' | 'Listo' | 'Publicado'
  beats: string[]
  outputs: string[]
  content: string
  createdAt: number
  updatedAt: number
}

// P6 Types
export interface DMTemplate {
  id: string
  stage: string
  name: string
  when: string
  body: string
}

export interface ObjectionResponse {
  objection: string
  response: string
  tags: string[]
}

// P7 Types
export interface Playbook {
  id: string
  name: string
  goal: string
  steps: string[]
  when: string
  budget: number
  expect: string
}

export interface Campaign {
  id: string
  name: string
  budget: number
  spent: number
  roas: number
  cpl: number
  status: 'Activa' | 'Pausada' | 'Finalizada'
  playbook?: string
}

// P8 Types
export interface RevenueProduct {
  name: string
  sold: number
  price: number
  revenue: number
  trend: number
  organic: number
  target: number
}

export interface RevenuePiece {
  title: string
  fmt: string
  attributed: number
  sales: number
  source: 'Orgánico' | 'Pagado'
}

export interface RevenueICP {
  name: string
  revenue: number
  buyers: number
  ticket: number
}

export interface CostItem {
  name: string
  amount: number
  kind: 'Variable' | 'Fijo'
}

export interface RevenueData {
  period: string
  goal: number
  products: RevenueProduct[]
  pieces: RevenuePiece[]
  icps: RevenueICP[]
  costs: CostItem[]
}

// P10 Types
export interface Channel {
  key: string
  name: string
  handle: string
  icon: string
  on: boolean
  best: string
}

export interface QueuedPiece {
  id: string
  piece: string
  fmt: string
  channels: string[]
  when: string
  status: 'Programado' | 'En revisión' | 'Publicado'
}

export interface RadarItem {
  hook: string
  creator: string
  views: number
  mult: number
  age: string
  angle: string
  fit: 'Alto' | 'Medio' | 'Bajo'
  why: string
}

export interface Clone {
  name: string
  note: string
  kind: 'Voz' | 'Avatar'
  ready: boolean
  quality: number
}
