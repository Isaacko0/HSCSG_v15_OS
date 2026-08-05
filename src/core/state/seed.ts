// HSCSG v15 OS — Datos de ejemplo (seed) para que el nodo arranque "vivo"
// Colectivo ancla Cosateca: base material realista, AUT>0, flujos, agentes, CaaS, autómata, solarpunk.

import type { BaseMaterial, CACVectors, Member, ValueFlow, PVSO } from '@core/state/types'
import type { AgentNode, GoalNode, TaskNode, AuditEntry } from '@core/state/orchestration'
import type { CaaSMembership, CaaSRevenueStream, CaaSPayout, CaaSAuditEntry } from '@core/state/caas'
import type { SoulState, BotAction, HeartbeatTask, BotChild, BotAuditEntry } from '@core/state/automaton'
import type { SolarpunkState } from '@core/state/solarpunk'

const now = Date.now()
const day = 86400000

export const seedBase: BaseMaterial = {
  tierra_ha: 4,
  agua_l_dia: 800,
  energia_kwh_dia: 5.2,
  comida_kg_dia: 18,
  herramientas_fabship: 12,
  semillas_criollas: 40,
  usdc_reserva: 320,
}

export const seedCAC: CACVectors = { ALIM: 0.7, ENER: 0.6, SALU: 0.5, HABI: 0.4, PROD: 0.55 }

export const seedMembers: Member[] = [
  { id: 'm1', name: 'Isaac Ko', role: 'facilitador', hoursPerWeek: 32, znuStake: 500, signedSocialDNA: true, committedMonths: 24 },
  { id: 'm2', name: 'Luz Marín', role: 'agronomo', hoursPerWeek: 28, znuStake: 500, signedSocialDNA: true, committedMonths: 18 },
  { id: 'm3', name: 'Tobías Ríos', role: 'maker', hoursPerWeek: 30, znuStake: 500, signedSocialDNA: true, committedMonths: 12 },
  { id: 'm4', name: 'Eva Solano', role: 'energia', hoursPerWeek: 22, znuStake: 300, signedSocialDNA: true, committedMonths: 12 },
  { id: 'm5', name: 'Nico Vela', role: 'generalista', hoursPerWeek: 16, znuStake: 200, signedSocialDNA: false, committedMonths: 6 },
]

export const seedFlows: ValueFlow[] = [
  { id: 'f1', ts: now - 2 * day, type: 'LaborFlow', actor: 'm2', znu: 40, note: 'siembra 200m² huerta' },
  { id: 'f2', ts: now - 2 * day, type: 'RepairFlow', actor: 'm3', znu: 30, note: 'reparó inversor' },
  { id: 'f3', ts: now - 1 * day, type: 'CareFlow', actor: 'm4', znu: 25, note: 'botiquín comunitario' },
  { id: 'f4', ts: now - 1 * day, type: 'ManufactureFlow', actor: 'm3', znu: 35, note: 'impreso soporte sensor' },
  { id: 'f5', ts: now, type: 'LoveFlow', actor: 'm1', znu: 20, note: 'convivio semanal' },
]

export const seedPVSO: PVSO[] = [
  { id: 'pvso1', ts: now - 1 * day, cycle: 1, aut_alim: 0.7, aut_ener: 0.6, aut_habi: 0.4, aut_salu: 0.5, pgs: 1.7, notes: 'ciclo base material' },
]

export const seedAgents: AgentNode[] = [
  { id: 'a1', name: 'Coordinador Ontogénico', role: 'ceo', title: 'Coord', status: 'active', reportsTo: null, vector: 'TRANSVERSAL', budgetZNU: 200, spentZNU: 40, lastHeartbeatAt: now - 3600000, pauseReason: null, heartbeatCron: '0 6 * * *', notes: 'ancla del colectivo' },
  { id: 'a2', name: 'Maker FABSHIP', role: 'engineer', title: 'Maker', status: 'active', reportsTo: 'a1', vector: 'PROD', budgetZNU: 150, spentZNU: 30, lastHeartbeatAt: now - 7200000, pauseReason: null, heartbeatCron: '0 6 * * *' },
  { id: 'a3', name: 'Soberanía ZNU', role: 'cfo', title: 'ZNU', status: 'paused', reportsTo: 'a1', vector: 'FINA', budgetZNU: 100, spentZNU: 10, lastHeartbeatAt: now - 86400000, pauseReason: 'Ley II: ROI<1 en stream afiliados', heartbeatCron: '0 12 * * *' },
]

export const seedGoals: GoalNode[] = [
  { id: 'g1', level: 'company', title: 'Nodo Cosateca soberano v0.1', status: 'active', parentId: null, ownerAgentId: 'a1' },
  { id: 'g2', level: 'team', title: 'Colectivo operativo (CDS)', status: 'active', parentId: 'g1', ownerAgentId: 'a1' },
  { id: 'g3', level: 'agent', title: 'FABSHIP autónoma', status: 'active', parentId: 'g2', ownerAgentId: 'a2' },
  { id: 'g4', level: 'task', title: 'Impresar 10 soportes sensor', status: 'active', parentId: 'g3', ownerAgentId: 'a2' },
]

export const seedTasks: TaskNode[] = [
  { id: 't1', title: 'Sembrado 200m² huerta', status: 'done', priority: 'high', assigneeAgentId: 'a2', goalId: 'g3', needsApproval: true, approved: true, blockedBy: [], createdAt: now - 3 * day, updatedAt: now - 1 * day },
  { id: 't2', title: 'Desplegar microgrid 5kWh', status: 'in_progress', priority: 'high', assigneeAgentId: 'a2', goalId: 'g3', needsApproval: true, approved: true, blockedBy: [], createdAt: now - 2 * day, updatedAt: now },
  { id: 't3', title: 'Vender tierra del nodo', status: 'backlog', priority: 'critical', assigneeAgentId: 'a3', goalId: 'g1', needsApproval: true, approved: false, blockedBy: [], createdAt: now - 1 * day, updatedAt: now - 1 * day },
]

export const seedAudit: AuditEntry[] = [
  { id: 'au1', ts: now - 1 * day, actor: 'ley', actorId: null, action: 'deny', detail: 'Tarea "Vender tierra del nodo" bloqueada: Ley I (no dañar base material)', tone: 'danger', lawRef: 'I' },
  { id: 'au2', ts: now - 3600000, actor: 'agent', actorId: 'a3', action: 'pause', detail: 'Agente Soberanía ZNU pausado: Ley II (ROI<1 en stream afiliados)', tone: 'warning', lawRef: 'II' },
]

export const seedCaasMembers: CaaSMembership[] = [
  { id: 'cm1', memberName: 'Isaac Ko', tier: 'custodio', stakeZNU: 500, contributedFlows: 12, znuEarned: 180 },
  { id: 'cm2', memberName: 'Luz Marín', tier: 'ancla', stakeZNU: 500, contributedFlows: 18, znuEarned: 240 },
  { id: 'cm3', memberName: 'Tobías Ríos', tier: 'contribuyente', stakeZNU: 500, contributedFlows: 15, znuEarned: 200 },
  { id: 'cm4', memberName: 'Nico Vela', tier: 'aprendiz', stakeZNU: 200, contributedFlows: 4, znuEarned: 40 },
]

export const seedCaasStreams: CaaSRevenueStream[] = [
  { key: 'suscripcion', name: 'Suscripción de pertenencia (stake ZNU)', enabled: true, usdcIn: 0, znuOut: 0, touchesBaseMaterial: false },
  { key: 'revenue_share', name: 'Revenue share por AUT', enabled: true, usdcIn: 0, znuOut: 0, touchesBaseMaterial: false },
  { key: 'b2b', name: 'Servicios entre pares (ValueFlows)', enabled: true, usdcIn: 0, znuOut: 0, touchesBaseMaterial: false },
  { key: 'afiliados_verdes', name: 'Afiliados verdes (elevan AUT)', enabled: false, usdcIn: 0, znuOut: 0, touchesBaseMaterial: false },
  { key: 'educacion', name: 'Educación regenerativa (ZNU)', enabled: false, usdcIn: 0, znuOut: 0, touchesBaseMaterial: false },
]

export const seedCaasPayouts: CaaSPayout[] = [
  { id: 'cp1', ts: now - 1 * day, memberName: 'Luz Marín', amountZNU: 60, basis: 'AUT 0.7 × CDS 0.8', demurrageApplied: 0 },
  { id: 'cp2', ts: now - 1 * day, memberName: 'Tobías Ríos', amountZNU: 50, basis: 'AUT 0.55 × CDS 0.8', demurrageApplied: 0 },
]

export const seedCaasAudit: CaaSAuditEntry[] = [
  { id: 'ca1', ts: now - 1 * day, action: 'payout', detail: 'Reparto ZNU por AUT×CDS: Luz 60, Tobías 50', tone: 'success' },
]

export const seedSoul: SoulState = { id: 'soul0', name: 'Autómata Cosateca', purpose: 'Soberanizar la base material del nodo y regenerarla', drift: 'anclada', updatedAt: now }
export const seedBotActions: BotAction[] = [
  { id: 'ba1', label: 'Ampliar huerta 100m²', description: 'sumar tierra en cultivo para elevar ALIM', proposedBy: 'agent', pass: true, status: 'approved', ts: now - 1 * day, reason: 'Ley II: eleva AUT sin tocar base material' },
]
export const seedBotHeartbeats: HeartbeatTask[] = [
  { id: 'h1', name: 'Revisar huerta', cron: 'min:360', lastRun: now - 3600000, purpose: 'ALIM: conteo de plantas y riego' },
  { id: 'h2', name: 'Balancear microgrid', cron: 'min:360', lastRun: now - 3600000, purpose: 'ENER: carga vs generación' },
  { id: 'h3', name: 'Auditar ValueFlows', cron: 'min:720', lastRun: now - 7200000, purpose: 'CDS: registrar intercambios' },
]
export const seedBotChildren: BotChild[] = []
export const seedBotAudit: BotAuditEntry[] = [
  { id: 'ba1', ts: now - 1 * day, action: 'action.approve', detail: 'Acción "Ampliar huerta" aprobada (PASA MJ)', tone: 'info' },
]

export const seedSolar: SolarpunkState = {
  offers: [
    { id: 'o1', resource: '20kg tomate', kind: 'bien', from: 'm2', createdAt: now - 1 * day },
    { id: 'o2', resource: '4h cuidado de huerta', kind: 'tiempo', from: 'm1', createdAt: now - 1 * day },
  ],
  needs: [
    { id: 'n1', resource: 'taladro', kind: 'bien', by: 'm3', createdAt: now - 1 * day },
    { id: 'n2', resource: 'ayuda cosecha', kind: 'tiempo', by: 'm2', createdAt: now - 1 * day },
  ],
  exchanges: [
    { id: 'e1', offerId: 'o2', needId: 'n2', medium: 'don', ts: now - 12 * 3600000 },
  ],
  vouches: [
    { id: 'v1', from: 'm1', to: 'm2', weight: 1, ts: now - 5 * day },
    { id: 'v2', from: 'm2', to: 'm3', weight: 1, ts: now - 5 * day },
    { id: 'v3', from: 'm3', to: 'm4', weight: 0.8, ts: now - 4 * day },
  ],
  mesh: { online: true, peers: 3, lastSync: now - 3600000 },
  sanctuary: [],
}
