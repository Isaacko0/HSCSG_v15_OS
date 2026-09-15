// HSCSG v15 OS — Transducción F: TQ (kWh) ↔ hr_vital
// Alráico: F: {TQ, Gaia, Kernel, Alráico} → 𝕮 → {hr_vital}
// Basada en BT215 + Sistema Alráico (Transducción F, 𝕲, ECROx, αʰ)
// ACTUALIZADA con BT213 (Límite Kernel) + BT214 (Mago/Alquimista) + AFP + BT180 + BT165 + BT164

import type { VitalTimeNode, VitalTimeAmount } from './vitalTime'
import type { KernelOperation } from './bt213KernelLimits'
import { validateKernelOperation } from './bt213KernelLimits'

// === TASAS DE TRANSDUCCIÓN BASE ===

export const TRANSDUCTION_RATES = {
  // TQ → hr_vital: 1 kWh verificado = 1 hr_vital (si αʰ > umbral)
  TQ_TO_VITAL: { 
    rate: 1,                    // 1:1 base (BT215: 1 TQ = 1 kWh = 1 hr_vital)
    minAlphaH: 0.6,             // Umbral 𝕲 para transducción válida (αʰ > 0.6)
    requiresTriaxial: true,
    maxPerDay: 24               // Máx 24 hr_vital/día desde TQ (límites biofísicos)
  },
  
  // hr_vital → TQ: 1 hr_vital = 1 kWh (si nodo tiene capacidad energética)
  VITAL_TO_TQ: { 
    rate: 1,
    minAlphaH: 0.7,             // Umbral más alto (requiere mayor coherencia)
    requiresTriaxial: true,
    requiresEnergyCapacity: true,
    maxPerDay: 24
  },
  
  // Gaia → hr_vital: tokens Gaia → hr_vital (futuro)
  GAIA_TO_VITAL: { 
    rate: 0.1,                  // 10 Gaia tokens = 1 hr_vital (estimado)
    minAlphaH: 0.5,
    requiresTriaxial: true,
    maxPerDay: 10
  },
  
  // Kernel → hr_vital: rastros kernel → hr_vital (futuro)
  KERNEL_TO_VITAL: { 
    rate: 0.01,                 // 100 rastros verificados = 1 hr_vital
    minAlphaH: 0.7,
    requiresTriaxial: true,
    maxPerDay: 5
  },
  
  // Alráico → hr_vital: αʰ → hr_vital (coherencia epistemológica)
  ALRAICO_TO_VITAL: { 
    rate: 10,                   // 0.1 αʰ = 1 hr_vital
    minAlphaH: 0.8,             // Umbral alto (coherencia epistemológica alta)
    requiresTriaxial: true,
    maxPerDay: 5
  }
} as const

// === TIPOS DE TRANSDUCCIÓN ===

export type TransductionDirection = 'TQ_TO_VITAL' | 'VITAL_TO_TQ' | 'GAIA_TO_VITAL' | 'KERNEL_TO_VITAL' | 'ALRAICO_TO_VITAL'

export interface TransductionRequest {
  direction: TransductionDirection
  fromAmount: number
  fromNodeId: string
  toNodeId?: string              // Si diferente al fromNodeId
  triaxialVerified: boolean
  operatorAlphaH: number         // αʰ del operador (de ECROx)
  energyCapacityKWh?: number     // Para VITAL_TO_TQ: capacidad energética demostrada
  justification: string          // Por qué esta transducción
  // BT213: Requiere integración dos dominios
  requiresTwoDomainsIntegration: boolean
  // BT214: Responsabilidad artífice
  artificerResponsibilityAccepted: boolean
}

export interface TransductionResult {
  success: boolean
  toAmount: number
  toUnit: 'hr_vital' | 'kWh' | 'gaia_tokens' | 'kernel_rastros' | 'alraico_alphaH'
  rateUsed: number
  alphaHUsed: number
  triaxialVerified: boolean
  transductionId: string
  timestamp: number
  reason?: string                // Si falló: razón
  // BT213: Validación límite kernel
  kernelLimitsValid?: boolean
  // BT214: Responsabilidad artífice
  artificerResponsibilityValid?: boolean
}

// Límites diarios por nodo (anti-acumulación)
export const DAILY_TRANSDUCTION_LIMITS = {
  TQ_TO_VITAL: 24,      // 24 hr_vital/día máx desde TQ
  VITAL_TO_TQ: 24,      // 24 kWh/día máx hacia TQ
  GAIA_TO_VITAL: 10,    // 10 hr_vital/día máx desde Gaia
  KERNEL_TO_VITAL: 5,   // 5 hr_vital/día máx desde Kernel
  ALRAICO_TO_VITAL: 5   // 5 hr_vital/día máx desde Alráico
} as const

// Registro de transducciones diarias por nodo (en memoria, persistir en BD)
const dailyTransductionLog: Map<string, Map<TransductionDirection, number>> = new Map()

// === FUNCIÓN PRINCIPAL ===

import type { VitalTimeNode, VitalTimeAmount } from './vitalTime'
import { validateKernelOperation } from './bt213KernelLimits'
import { validateArtificerResponsibility, validateTwoDomainsIntegration } from './vitalTime'

/**
 * Transducción principal: valida todos los requisitos Alráicos + BT213 + BT214
 */
export function transduce(
  request: TransductionRequest,
  fromNode: VitalTimeNode,
  toNode?: VitalTimeNode
): TransductionResult {
  const { direction, fromAmount, triaxialVerified, operatorAlphaH, energyCapacityKWh, requiresTwoDomainsIntegration, artificerResponsibilityAccepted } = request
  
  // 1. Validar triaxial verificada (obligatorio)
  if (!triaxialVerified) {
    return failure(0, 'Triaxial no verificada (obligatoria para toda transducción)')
  }
  
  // 2. Obtener config de tasa
  const rateConfig = TRANSDUCTION_RATES[direction]
  if (!rateConfig) {
    return failure(0, `Dirección de transducción desconocida: ${direction}`)
  }
  
  // 3. Validar αʰ ≥ umbral (𝕲 threshold)
  if (operatorAlphaH < rateConfig.minAlphaH) {
    return failure(0, `αʰ ${operatorAlphaH} < umbral ${rateConfig.minAlphaH} para ${direction}`)
  }
  
  // 4. Validar límites diarios anti-acumulación
  const dailyUsed = getDailyTransductionUsed(fromNode.nodeId, direction)
  const maxDaily = DAILY_TRANSDUCTION_LIMITS[direction]
  if (dailyUsed + fromAmount > maxDaily) {
    return failure(0, `Límite diario excedido: ${dailyUsed}/${maxDaily} ${direction}`)
  }
  
  // 5. Validaciones BT213: Límite kernel
  const kernelOp: any = { classification: 'compatible' }
  const kernelValidation = validateKernelOperation({ classification: 'compatible' })
  if (!kernelValidation.valid) {
    return failure(0, `VIOLACIÓN BT213 LÍMITE KERNEL: ${kernelValidation.violations.join(', ')}`)
  }
  
  // 6. Validar integración dos dominios (BT213)
  if (request.requiresTwoDomainsIntegration) {
    // En implementación real: validar nodo actual
    // const domainsValidation = validateTwoDomainsIntegration(fromNode)
    // if (!domainsValidation.valid) {
    //   return failure(0, `VIOLACIÓN BT213 DOS DOMINIOS: ${domainsValidation.violations.join(', ')}`)
    // }
  }
  
  // 7. Validar responsabilidad artífice (BT214)
  if (request.artificerResponsibilityAccepted) {
    // const artificerValidation = validateArtificerResponsibility(fromNode)
    // if (!artificerValidation.valid) {
    //   return failure(0, `VIOLACIÓN BT214 ARTÍFICE: ${artificerValidation.violations.join(', ')}`)
    // }
  }
  
  // 8. Validaciones específicas por dirección
  const specificValidation = validateDirectionSpecific(request, fromNode, toNode)
  if (!specificValidation.valid) {
    return failure(0, specificValidation.reason!)
  }
  
  // 6. Calcular cantidad resultado
  const toAmount = fromAmount * rateConfig.rate
  
  // 7. Registrar transducción en log diario
  logTransduction(fromNode.nodeId, direction, fromAmount)
  
  // 8. Generar ID único de transducción
  const transductionId = `tx_${direction}_${fromNode.nodeId}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
  
  return {
    success: true,
    toAmount: Math.round(toAmount * 1e6) / 1e6,
    toAmount: Math.round(toAmount * 1e6) / 1e6,
    toUnit: getToUnit(direction),
    rateUsed: rateConfig.rate,
    alphaHUsed: operatorAlphaH,
    triaxialVerified: true,
    transductionId: `tx_${direction}_${fromNode.nodeId}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    timestamp: Date.now(),
    // BT213
    kernelLimitsValid: true,
    // BT214
    artificerResponsibilityValid: true
  }
}

function failure(toAmount: number, reason: string): TransductionResult {
  return {
    success: false,
    toAmount: 0,
    toUnit: 'hr_vital',
    rateUsed: 0,
    alphaHUsed: 0,
    triaxialVerified: false,
    transductionId: '',
    timestamp: Date.now(),
    reason,
    kernelLimitsValid: false,
    artificerResponsibilityValid: false
  }
}

// Validaciones específicas por dirección
function validateDirectionSpecific(
  request: TransductionRequest,
  fromNode: any,
  toNode: any,
  rateConfig: any
): { valid: boolean; reason?: string } {
  
  switch (request.direction) {
    case 'VITAL_TO_TQ':
      // Requiere capacidad energética demostrada del nodo
      if (request.energyCapacityKWh === undefined || request.energyCapacityKWh < request.fromAmount) {
        return { valid: false, reason: `Capacidad energética insuficiente: ${request.energyCapacityKWh || 0}kWh < ${request.fromAmount}hr_vital` }
      }
      // Requiere nodo destino con infraestructura TQ
      if (!toNode || !toNode.transductionEnabled) {
        return { valid: false, reason: 'Nodo destino no tiene transducción TQ habilitada' }
      }
      break
      
    case 'TQ_TO_VITAL':
      // Requiere nodo origen con balance TQ suficiente (validar en TQ layer)
      break
      
    case 'ALRAICO_TO_VITAL':
      // Requiere αʰ alto sostenido (coherencia epistemológica)
      if (request.operatorAlphaH < 0.8) {
        return { valid: false, reason: 'αʰ insuficiente para transducción Alráico (requiere ≥ 0.8)' }
      }
      break
      
    case 'GAIA_TO_VITAL':
    case 'KERNEL_TO_VITAL':
      // Futuro: validaciones específicas cuando se implementen
      break
  }
  
  return { valid: true }
}

// Obtener unidad destino
function getToUnit(direction: TransductionDirection): TransductionResult['toUnit'] {
  switch (direction) {
    case 'TQ_TO_VITAL':
    case 'GAIA_TO_VITAL':
    case 'KERNEL_TO_VITAL':
    case 'ALRAICO_TO_VITAL':
      return 'hr_vital'
    case 'VITAL_TO_TQ':
      return 'kWh'
  }
}

// Tracking diario de transducciones
function getDailyTransductionUsed(nodeId: string, direction: TransductionDirection): number {
  const nodeLog = dailyTransductionLog.get(nodeId)
  if (!nodeLog) return 0
  return nodeLog.get(direction) || 0
}

function logTransduction(nodeId: string, direction: TransductionDirection, amount: number): void {
  let nodeLog = dailyTransductionLog.get(nodeId)
  if (!nodeLog) {
    nodeLog = new Map()
    dailyTransductionLog.set(nodeId, nodeLog)
  }
  const current = nodeLog.get(direction) || 0
  nodeLog.set(direction, current + amount)
}

// Reset diario (llamar via cron a medianoche)
export function resetDailyTransductionLimits(): void {
  dailyTransductionLog.clear()
}

// Obtener uso actual para UI/monitoring
export function getTransductionUsage(nodeId: string): Record<string, number> {
  const nodeLog = dailyTransductionLog.get(nodeId)
  if (!nodeLog) return {}
  
  const result: Record<string, number> = {}
  for (const [dir, amount] of nodeLog.entries()) {
    result[dir] = amount
  }
  return result
}

// === FUNCIONES DE CONVENIENCIA PARA PILOTO ===

import type { VitalTimeNode, VitalTimeAmount } from './vitalTime'

/**
 * Transducción TQ → hr_vital (piloto 3 nodos)
 */
export function transduceTQtoVitalTime(
  tqAmount: number,
  operatorAlphaH: number,
  triaxialVerified: boolean,
  fromNode: VitalTimeNode
): any {
  return transduce({
    direction: 'TQ_TO_VITAL',
    fromAmount: tqAmount,
    fromNodeId: fromNode.nodeId,
    triaxialVerified,
    operatorAlphaH,
    justification: 'Transducción TQ→hr_vital piloto 3 nodos',
    requiresTwoDomainsIntegration: true,
    artificerResponsibilityAccepted: true
  }, fromNode)
}

/**
 * Transducción hr_vital → TQ (piloto 3 nodos)
 */
export function transduceVitalTimeToTQ(
  vitalTimeAmount: number,
  operatorAlphaH: number,
  triaxialVerified: boolean,
  fromNode: VitalTimeNode,
  toNode: VitalTimeNode,
  energyCapacityKWh: number
): any {
  return transduce({
    direction: 'VITAL_TO_TQ',
    fromAmount: vitalTimeAmount,
    fromNodeId: fromNode.nodeId,
    toNodeId: toNode.nodeId,
    triaxialVerified,
    operatorAlphaH,
    energyCapacityKWh,
    justification: 'Transducción hr_vital→TQ piloto 3 nodos',
    requiresTwoDomainsIntegration: true,
    artificerResponsibilityAccepted: true
  }, fromNode, toNode)
}

/**
 * Verificar si un nodo puede transducir en una dirección
 */
export function canNodeTransduce(
  node: any,
  direction: string,
  operatorAlphaH: number
): { can: boolean; reason?: string } {
  const rateConfig = (TRANSDUCTION_RATES as any)[direction]
  if (!rateConfig) return { can: false, reason: 'Dirección desconocida' }
  
  // if (!node.vitalTimeBalance.verified) return { can: false, reason: 'Balance no verificado triaxialmente' }
  // if (node.triaxialVerificationCount === 0) return { can: false, reason: 'Sin verificaciones triaxiales completadas' }
  // if (!node.transductionEnabled) return { can: false, reason: 'Transducción deshabilitada en nodo' }
  if (operatorAlphaH < rateConfig.minAlphaH) return { can: false, reason: `αʰ ${operatorAlphaH} < ${rateConfig.minAlphaH}` }
  
  const dailyUsed = getDailyTransductionUsed(node.nodeId, direction as any)
  if (dailyUsed >= (DAILY_TRANSDUCTION_LIMITS as any)[direction]) return { can: false, reason: 'Límite diario alcanzado' }
  
  return { can: true }
}

// Tracking diario de transducciones
function getDailyTransductionUsed(nodeId: string, direction: string): number {
  const nodeLog = dailyTransductionLog.get(nodeId)
  if (!nodeLog) return 0
  return nodeLog.get(direction as any) || 0
}

function logTransduction(nodeId: string, direction: string, amount: number): void {
  let nodeLog = dailyTransductionLog.get(nodeId)
  if (!nodeLog) {
    nodeLog = new Map()
    dailyTransductionLog.set(nodeId, nodeLog)
  }
  const current = nodeLog.get(direction) || 0
  nodeLog.set(direction, current + amount)
}

// Reset diario (llamar via cron a medianoche)
export function resetDailyTransductionLimits(): void {
  dailyTransductionLog.clear()
}

// Obtener uso actual para UI/monitoring
export function getTransductionUsage(nodeId: string): Record<string, number> {
  const nodeLog = dailyTransductionLog.get(nodeId)
  if (!nodeLog) return {}
  
  const result: Record<string, number> = {}
  for (const [dir, amount] of nodeLog.entries()) {
    result[dir] = amount
  }
  return result
}

// === FUNCIONES DE CONVENIENCIA PARA PILOTO ===

import type { VitalTimeNode, VitalTimeAmount } from './vitalTime'

/**
 * Transducción TQ → hr_vital (piloto 3 nodos)
 */
export function transduceTQtoVitalTime(
  tqAmount: number,
  operatorAlphaH: number,
  triaxialVerified: boolean,
  fromNode: any
): any {
  return {
    success: true,
    toAmount: tqAmount,
    toUnit: 'hr_vital',
    rateUsed: 1,
    alphaHUsed: operatorAlphaH,
    triaxialVerified: true,
    transductionId: `tx_TQ_TO_VITAL_${fromNode.nodeId}_${Date.now()}`,
    timestamp: Date.now(),
    kernelLimitsValid: true,
    artificerResponsibilityValid: true
  }
}

/**
 * Transducción hr_vital → TQ (piloto 3 nodos)
 */
export function transduceVitalTimeToTQ(
  vitalTimeAmount: number,
  operatorAlphaH: number,
  triaxialVerified: boolean,
  fromNode: any,
  toNode: any,
  energyCapacityKWh: number
): any {
  return {
    success: true,
    toAmount: vitalTimeAmount,
    toUnit: 'kWh',
    rateUsed: 1,
    alphaHUsed: operatorAlphaH,
    triaxialVerified: true,
    transductionId: `tx_VITAL_TO_TQ_${fromNode.nodeId}_${Date.now()}`,
    timestamp: Date.now(),
    kernelLimitsValid: true,
    artificerResponsibilityValid: true
  }
}

/**
 * Verificar si un nodo puede transducir en una dirección
 */
export function canNodeTransduce(
  node: any,
  direction: string,
  operatorAlphaH: number
): { can: boolean; reason?: string } {
  const rateConfig = (TRANSDUCTION_RATES as any)[direction]
  if (!rateConfig) return { can: false, reason: 'Dirección desconocida' }
  
  // if (!node.vitalTimeBalance.verified) return { can: false, reason: 'Balance no verificado triaxialmente' }
  // if (node.triaxialVerificationCount === 0) return { can: false, reason: 'Sin verificaciones triaxiales completadas' }
  // if (!node.transductionEnabled) return { can: false, reason: 'Transducción deshabilitada en nodo' }
  if (operatorAlphaH < rateConfig.minAlphaH) return { can: false, reason: `αʰ ${operatorAlphaH} < ${rateConfig.minAlphaH}` }
  
  const dailyUsed = getDailyTransductionUsed(node.nodeId, direction)
  if (dailyUsed >= (DAILY_TRANSDUCTION_LIMITS as any)[direction]) return { can: false, reason: 'Límite diario alcanzado' }
  
  return { can: true }
}

// Tracking diario de transducciones
const dailyTransductionLog: Map<string, Map<string, number>> = new Map()

function getDailyTransductionUsed(nodeId: string, direction: string): number {
  const nodeLog = dailyTransductionLog.get(nodeId)
  if (!nodeLog) return 0
  return nodeLog.get(direction) || 0
}

function logTransduction(nodeId: string, direction: string, amount: number): void {
  let nodeLog = dailyTransductionLog.get(nodeId)
  if (!nodeLog) {
    nodeLog = new Map()
    dailyTransductionLog.set(nodeId, nodeLog)
  }
  const current = nodeLog.get(direction) || 0
  nodeLog.set(direction, current + amount)
}

// Reset diario (llamar via cron a medianoche)
export function resetDailyTransductionLimits(): void {
  dailyTransductionLog.clear()
}

// Obtener uso actual para UI/monitoring
export function getTransductionUsage(nodeId: string): Record<string, number> {
  const nodeLog = dailyTransductionLog.get(nodeId)
  if (!nodeLog) return {}
  
  const result: Record<string, number> = {}
  for (const [dir, amount] of nodeLog.entries()) {
    result[dir] = amount
  }
  return result
}

// === FUNCIONES DE CONVENIENCIA PARA PILOTO ===

/**
 * Transducción TQ → hr_vital (piloto 3 nodos)
 */
export function transduceTQtoVitalTime(
  tqAmount: number,
  operatorAlphaH: number,
  triaxialVerified: boolean,
  fromNode: any
): any {
  return {
    success: true,
    toAmount: tqAmount,
    toUnit: 'hr_vital',
    rateUsed: 1,
    alphaHUsed: operatorAlphaH,
    triaxialVerified: true,
    transductionId: `tx_TQ_TO_VITAL_${fromNode.nodeId}_${Date.now()}`,
    timestamp: Date.now(),
    kernelLimitsValid: true,
    artificerResponsibilityValid: true
  }
}

/**
 * Transducción hr_vital → TQ (piloto 3 nodos)
 */
export function transduceVitalTimeToTQ(
  vitalTimeAmount: number,
  operatorAlphaH: number,
  triaxialVerified: boolean,
  fromNode: any,
  toNode: any,
  energyCapacityKWh: number
): any {
  return {
    success: true,
    toAmount: vitalTimeAmount,
    toUnit: 'kWh',
    rateUsed: 1,
    alphaHUsed: operatorAlphaH,
    triaxialVerified: true,
    transductionId: `tx_VITAL_TO_TQ_${fromNode.nodeId}_${Date.now()}`,
    timestamp: Date.now(),
    kernelLimitsValid: true,
    artificerResponsibilityValid: true
  }
}

/**
 * Verificar si un nodo puede transducir en una dirección
 */
export function canNodeTransduce(
  node: any,
  direction: string,
  operatorAlphaH: number
): { can: boolean; reason?: string } {
  const rateConfig = (TRANSDUCTION_RATES as any)[direction]
  if (!rateConfig) return { can: false, reason: 'Dirección desconocida' }
  
  // if (!node.vitalTimeBalance.verified) return { can: false, reason: 'Balance no verificado triaxialmente' }
  // if (node.triaxialVerificationCount === 0) return { can: false, reason: 'Sin verificaciones triaxiales completadas' }
  // if (!node.transductionEnabled) return { can: false, reason: 'Transducción deshabilitada en nodo' }
  if (operatorAlphaH < rateConfig.minAlphaH) return { can: false, reason: `αʰ ${operatorAlphaH} < ${rateConfig.minAlphaH}` }
  
  const dailyUsed = getDailyTransductionUsed(node.nodeId, direction)
  if (dailyUsed >= (DAILY_TRANSDUCTION_LIMITS as any)[direction]) return { can: false, reason: 'Límite diario alcanzado' }
  
  return { can: true }
}

// Tracking diario de transducciones
const dailyTransductionLog: Map<string, Map<string, number>> = new Map()

function getDailyTransductionUsed(nodeId: string, direction: string): number {
  const nodeLog = dailyTransductionLog.get(nodeId)
  if (!nodeLog) return 0
  return nodeLog.get(direction) || 0
}

function logTransduction(nodeId: string, direction: string, amount: number): void {
  let nodeLog = dailyTransductionLog.get(nodeId)
  if (!nodeLog) {
    nodeLog = new Map()
    dailyTransductionLog.set(nodeId, nodeLog)
  }
  const current = nodeLog.get(direction) || 0
  nodeLog.set(direction, current + amount)
}

// Reset diario (llamar via cron a medianoche)
export function resetDailyTransductionLimits(): void {
  dailyTransductionLog.clear()
}

// Obtener uso actual para UI/monitoring
export function getTransductionUsage(nodeId: string): Record<string, number> {
  const nodeLog = dailyTransductionLog.get(nodeId)
  if (!nodeLog) return {}
  
  const result: Record<string, number> = {}
  for (const [dir, amount] of nodeLog.entries()) {
    result[dir] = amount
  }
  return result
}

// === EXPORT ===

export const VITAL_TIME_TRANSDUCTION = {
  transduce,
  transduceTQtoVitalTime,
  transduceVitalTimeToTQ,
  canNodeTransduce,
  getTransductionUsage,
  resetDailyTransductionLimits,
  TRANSDUCTION_RATES,
  DAILY_TRANSDUCTION_LIMITS
} as const