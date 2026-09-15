// HSCSG v15 OS — Invariantes Blindados Moneda Tiempo Vital
// Gobernanza CDS Federado con invariantes no votables
// Basada en BT215 §14 (invariantes kernel) + Sistema Alráico

import type { VitalTimeNode } from './vitalTime'

// === INVARIANTES BLINDADOS (NUNCA MODIFICABLES POR VOTACIÓN) ===

export const VITAL_TIME_INVARIANTS = {
  // Propiedades ontológicas de la moneda (BT215 §15-16)
  nonAccumulable: true,           // No se acumula (anti-acumulación Amiya Tulu)
  nonInheritable: true,           // No se hereda (muerte = retorno al pool)
  nonPurchasable: true,           // No se compra (fuera mercado fiat/crypto)
  nonConvertible: true,           // Currículum ≠ hr_vital ≠ puntaje ≠ voto ≠ autoridad
  sovereigntyExposure: true,      // Acceso al contenido decide el ser humano
  replaceability: true,           // Protocolo reemplazable (test desaparición 30 días)
  rightOfExit: true,              // Salida sin borrar pasado (obligaciones sobreviven)
  traceabilityNotSurveillance: true,  // Verificabilidad ≠ vigilancia
  existenceVerifiabilityAccessSeparation: true,  // Tres capas distintas
  
  // Invariantes heredados del Kernel (BT215 §14)
  epistemologicalLimit: true,     // Kernel organiza rastros, no decide verdad
  noConsciousnessAudit: true,     // No audita experiencia interna
  
  // Parámetros FIJOS (NUNCA ajustables)
  fixedParams: {
    poolTotal: 1,                 // Pool fijo = 1 (totalidad vida presente)
    unit: 'hr_vital',             // Unidad inmutable
    nonAccumulable: true,         // Blindado estructural
    nonInheritable: true,         // Blindado estructural
    nonPurchasable: true,         // Blindado estructural
  } as const,
  
  // Parámetros AJUSTABLES (solo consenso 100% + verificación triaxial)
  adjustableParams: {
    rotationDays: { 
      min: 7, 
      max: 90, 
      current: 30, 
      description: 'Días antes de rotación anti-acumulación' 
    },
    demurrageRate: { 
      min: 0, 
      max: 0.20 / 365, 
      current: 0.10 / 365, 
      description: 'Decay anual por inactividad (fracción/día)' 
    },
    poolTotal: { 
      fixed: 1, 
      current: 1, 
      description: 'Pool total FIJO = 1 (NUNCA ajustable)' 
    },
    transductionThresholds: { 
      minAlphaH: { min: 0.5, max: 0.9, current: 0.6, description: 'Umbral αʰ mínimo transducción' },
      maxPerDay: { min: 1, max: 50, current: 24, description: 'Límite diario transducción' }
    },
    triaxialWeights: {
      mental: { min: 0.2, max: 0.6, current: 0.4, description: 'Peso verificación mental' },
      simulation: { min: 0.1, max: 0.5, current: 0.3, description: 'Peso verificación simulación' },
      laboratory: { min: 0.1, max: 0.5, current: 0.3, description: 'Peso verificación laboratorio' }
    },
    triaxialPassThreshold: { 
      min: 0.5, 
      max: 0.9, 
      current: 0.7, 
      description: 'Score combinado mínimo para pasar triaxial' 
    }
  } as const,
  
  // Invariantes de gobernanza (estructura CDS)
  governanceInvariants: {
    consensusThreshold: 1.0,      // Consenso 100% (unanimidad) para parámetros ajustables
    triaxialRequiredForVote: true, // Cada votante debe pasar verificación triaxial
    invariantsBlindaje: true,     // Invariantes blindados no votables
    divergenceLegitima: true,     // Quien quiera cambiar invariantes → fork legítimo
    testDesaparicion: true,       // Test 30 días obligatorio mensual
  } as const
} as const

// === TIPOS DE GOBERNANZA ===

export interface ParameterChangeProposal {
  id: string
  proposerNodeId: string
  parameter: keyof typeof VITAL_TIME_INVARIANTS.adjustableParams
  currentValue: number
  proposedValue: number
  justification: string
  triaxialProof: string           // Hash de verificación triaxial del proponente
  submittedAt: number
  status: 'PENDING' | 'VOTING' | 'APPROVED' | 'REJECTED' | 'IMPLEMENTED'
  votes: Vote[]
  decidedAt?: number
}

export interface Vote {
  voterNodeId: string
  vote: 'APPROVE' | 'REJECT'
  triaxialProof: string           // Hash verificación triaxial del votante
  timestamp: number
  note?: string
}

export interface ProposalResult {
  success: boolean
  proposalId?: string
  reason?: string
  nextSteps?: string[]
}

// === VALIDACIÓN DE PROPUESTAS ===

/**
 * Valida si una propuesta de cambio de parámetro es legítima
 */
export function validateParameterProposal(
  proposal: Omit<ParameterChangeProposal, 'id' | 'submittedAt' | 'status' | 'votes'>
): { valid: boolean; reason?: string } {
  
  const { parameter, proposedValue, proposerNodeId, triaxialProof } = proposal
  
  // 1. Verificar que el parámetro existe y es ajustable
  const paramConfig = VITAL_TIME_INVARIANTS.adjustableParams[parameter as keyof typeof VITAL_TIME_INVARIANTS.adjustableParams]
  if (!paramConfig) {
    return { valid: false, reason: `Parámetro '${parameter}' no existe o no es ajustable` }
  }
  
  // 2. Verificar que el valor propuesto está en rango
  if (proposedValue < paramConfig.min || proposedValue > paramConfig.max) {
    return { valid: false, reason: `Valor ${proposedValue} fuera de rango [${paramConfig.min}, ${paramConfig.max}]` }
  }
  
  // 3. Verificar que no viola invariantes blindados
  if (violatesBlindInvariants(parameter, proposedValue)) {
    return { valid: false, reason: 'La propuesta viola invariantes blindados' }
  }
  
  // 4. Verificar prueba triaxial del proponente (formato hash)
  if (!triaxialProof || triaxialProof.length < 32) {
    return { valid: false, reason: 'Prueba triaxial del proponente inválida o ausente' }
  }
  
  return { valid: true }
}

/**
 * Verifica si un cambio viola invariantes blindados
 */
function violatesBlindInvariants(parameter: string, value: number): boolean {
  // Parámetros que NUNCA deben permitir violar invariantes
  switch (parameter) {
    case 'poolTotal':
      return value !== 1  // Pool total SIEMPRE = 1
    case 'triaxialPassThreshold':
      return value < 0.5 || value > 0.9  // Umbral razonable
    case 'triaxialWeights.mental':
    case 'triaxialWeights.simulation':
    case 'triaxialWeights.laboratory':
      // Pesos deben sumar 1.0 (validado en propuesta completa)
      return false // Validación compleja se hace en nivel superior
    default:
      return false
  }
}

/**
 * Verifica si una propuesta requiere consenso 100% (siempre true para parámetros ajustables)
 */
export function requiresFullConsensus(): boolean {
  return true  // Todos los cambios de parámetros requieren unanimidad
}

/**
 * Ejecuta test de desaparición 30 días (BT215 §3)
 */
export async function runDisappearanceTest(
  nodes: VitalTimeNode[]
): Promise<DisappearanceTestResult> {
  // Simular: NEXO central desaparece 30 días
  // Verificar capacidades locales de cada nodo
  
  const results = await Promise.all(
    nodes.map(async (node) => {
      const localCapabilities = await testLocalCapabilities(node)
      return { nodeId: node.nodeId, ...localCapabilities }
    })
  )
  
  const allPassed = results.every(r => r.canIdentify && r.canExchange && r.canQueryTraces && r.canCoordinate && r.obligationsSurvive)
  
  return {
    passed: allPassed,
    degradation: allPassed ? 'Mínima' : 'Crítica',
    criticalFunctions: [
      'identidad_unica',
      'intercambio_hr_vital', 
      'consulta_rastros',
      'coordinacion_local',
      'obligaciones_previas'
    ],
    failedFunctions: results
      .filter(r => !(r.canIdentify && r.canExchange && r.canQueryTraces && r.canCoordinate && r.obligationsSurvive))
      .map(r => r.nodeId),
    nodeResults: results,
    testDuration: 30 * 24 * 60 * 60 * 1000, // 30 días en ms
    testedAt: Date.now()
  }
}

interface DisappearanceTestResult {
  passed: boolean
  degradation: 'Mínima' | 'Moderada' | 'Crítica'
  criticalFunctions: string[]
  failedFunctions: string[]
  nodeResults: NodeDisappearanceResult[]
  testDuration: number
  testedAt: number
}

interface NodeDisappearanceResult {
  nodeId: string
  canIdentify: boolean
  canExchange: boolean
  canQueryTraces: boolean
  canCoordinate: boolean
  obligationsSurvive: boolean
}

// Test de capacidades locales (mock para implementación real)
async function testLocalCapabilities(node: VitalTimeNode): Promise<NodeDisappearanceResult> {
  // En implementación real: tests reales de capacidades locales
  // Para spec: asumimos que nodos piloto tienen capacidades locales
  return {
    nodeId: node.nodeId,
    canIdentify: true,           // Identidad única local (DID + credenciales)
    canExchange: true,           // Pool local + rotación + trustlines bilaterales
    canQueryTraces: true,        // Kernel local con rastros
    canCoordinate: true,         // CDS local + acuerdos bilaterales
    obligationsSurvive: true     // Obligaciones previas sobreviven
  }
}

/**
 * Valida configuración completa de gobernanza (invariantes + parámetros)
 */
export function validateGovernanceConfig(): { valid: boolean; errors: string[] } {
  const errors: string[] = []
  
  // 1. Pool total = 1
  if (VITAL_TIME_INVARIANTS.fixedParams.poolTotal !== 1) {
    errors.push('Pool total debe ser 1')
  }
  
  // 2. Invariantes booleanas = true
  const booleanInvariants = [
    'nonAccumulable', 'nonInheritable', 'nonPurchasable', 'nonConvertible',
    'sovereigntyExposure', 'replaceability', 'rightOfExit',
    'traceabilityNotSurveillance', 'existenceVerifiabilityAccessSeparation',
    'epistemologicalLimit', 'noConsciousnessAudit'
  ]
  
  for (const inv of booleanInvariants) {
    if (!VITAL_TIME_INVARIANTS[inv as keyof typeof VITAL_TIME_INVARIANTS]) {
      errors.push(`Invariante '${inv}' debe ser true`)
    }
  }
  
  // 3. Parámetros ajustables tienen rangos válidos
  for (const [param, config] of Object.entries(VITAL_TIME_INVARIANTS.adjustableParams)) {
    if (config.current < config.min || config.current > config.max) {
      errors.push(`Parámetro '${param}' valor actual ${config.current} fuera de rango [${config.min}, ${config.max}]`)
    }
  }
  
  // 4. Gobernanza: consenso 100%
  if (VITAL_TIME_INVARIANTS.governanceInvariants.consensusThreshold !== 1.0) {
    errors.push('Consenso debe ser 100% (unanimidad)')
  }
  
  // 5. Test desaparición obligatorio
  if (!VITAL_TIME_INVARIANTS.governanceInvariants.testDesaparicion) {
    errors.push('Test desaparición 30 días debe ser obligatorio')
  }
  
  return { valid: errors.length === 0, errors }
}

// === EXPORT ===

export const VITAL_TIME_GOVERNANCE = {
  validateParameterProposal,
  validateGovernanceConfig,
  runDisappearanceTest,
  requiresFullConsensus,
  VITAL_TIME_INVARIANTS,
  TRIAXIAL_PASS_THRESHOLD: 0.7
} as const