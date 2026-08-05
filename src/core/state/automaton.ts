// HSCSG v15 OS — Tipos del Automaton (asimilado de Conway Research / automaton)
// Agente soberano que paga su existencia con BASE MATERIAL (AUT), no con USDC de nube.
// Constitución isomorfa a las 3 Leyes MJ.

export type SurvivalTier = 'high' | 'normal' | 'low_material' | 'critical' | 'dormant'

export interface SoulState {
  id: string
  name: string
  purpose: string // genesis prompt anclado a base material
  drift: 'anclada' | 'flotante' // Ley III: la SOUL debe reflejar AUT real
  updatedAt: number
}

export interface BotAction {
  id: string
  label: string
  description: string
  proposedBy: 'agent' | 'human' | 'heartbeat'
  // resultado del gate MJ
  pass: boolean
  law?: 'I' | 'II' | 'III'
  reason: string
  status: 'pending' | 'approved' | 'executed' | 'denied'
  ts: number
}

export interface HeartbeatTask {
  id: string
  name: string
  cron: string // 'min:N'
  lastRun: number | null
  purpose: string // qué base material sostiene
}

export interface BotChild {
  id: string
  name: string
  baseMaterialTarget: string // p.ej. '3ha tierra + 5kWh'
  parentId: string
  constitutionMJ: boolean // siemprevía las 3 leyes MJ
  spawnedAt: number
}

export interface BotAuditEntry {
  id: string
  ts: number
  action: string
  detail: string
  tone: 'neutral' | 'info' | 'success' | 'warning' | 'danger'
  lawRef?: 'I' | 'II' | 'III'
}
