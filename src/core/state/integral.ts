// HSCSG v15 OS — Tipos del módulo Integral (asimilado de Integral Collective: 9 repos)
// Filosofía de coordinación postmonetaria en loop cerrado: CDS→OAD→COS→ITC→FRS→CDS.
// Sin GitHub Issues/PRs como infra: la app local es el medio de gobernanza.

export type IntegralSystem = 'CDS' | 'OAD' | 'ITC' | 'COS' | 'FRS'

export interface Issue {
  id: string
  title: string
  raisedBy: string
  status: 'open' | 'deliberating' | 'decided' | 'dispatched'
  createdAt: number
  // Evidence Model (CompAI CRM): cada issue lleva evidencias + band calculado
  evidence?: { kind: string; text: string; sourceUrl?: string }[]
  band?: 'VERIFIED' | 'PROBABLE' | 'POSSIBLE' | null
  score?: number
}

export interface DecisionRecord {
  id: string // DR-NNN
  decision: string
  context: string
  reasoning: string
  date: number
  supersedes?: string
}

export interface CertifiedDesign {
  id: string
  title: string
  ecoScore: number // 0-100 (eco-assessment de OAD)
  version: number
}

export interface LaborEvent {
  id: string
  projectId: string
  participant: string
  hours: number
  certified: boolean
}

export interface TimeCredit {
  id: string
  participant: string
  credits: number // tras decay
  raw: number // antes de decay
  decayed: number
}

export interface SignalPacket {
  id: string
  fromSystem: IntegralSystem
  severity: 'info' | 'warning' | 'critical'
  finding: string
  ts: number
}

export interface Recommendation {
  id: string
  finding: string
  target: IntegralSystem
  promotedToIssue: boolean
}

export interface IntegralState {
  issues: Issue[]
  decisions: DecisionRecord[]
  designs: CertifiedDesign[]
  labor: LaborEvent[]
  credits: TimeCredit[]
  signals: SignalPacket[]
  recommendations: Recommendation[]
}