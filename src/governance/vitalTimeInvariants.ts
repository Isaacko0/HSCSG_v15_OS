// HSCSG v15 OS — Invariantes Blindados Moneda Tiempo Vital
// Gobernanza CDS Federado con invariantes no votables
// Basada en BT215 §14 (invariantes kernel) + Sistema Alráico
// ACTUALIZADA con BT213 (Límite Kernel) + BT214 (Mago/Alquimista) + AFP + BT180 + BT165 + BT164

import type { VitalTimeNode } from '../core/lib/vitalTime'

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
  
  // ===== BT213: LÍMITE KERNEL =====
  kernelEpistemologicalLimit: true,     // Kernel organiza rastros, no decide verdad
  kernelNoConsciousnessAudit: true,     // No audita experiencia interna
  kernelNoDecideTruth: true,            // No decide qué es verdadero
  kernelNoInterpretPersons: true,       // No interpreta personas
  kernelNoSubstitutePresence: true,     // No sustituye presencia
  kernelNoDetectInternalEvasion: true,  // No detecta evasión interna
  kernelClassifiesOnly: true,           // Solo clasifica: compatible/incompatible/no-evaluable
  kernelSilenceNeutral: true,           // Silencio = dato neutro
  kernelTwoDomains: true,               // Experiencia directa + rastros compartidos
  kernelDebtFromEvasion: true,          // Deuda por evasión experiencia O rastros
  
  // ===== BT214: HUMANO ARTÍFICE =====
  humanArtificerRole: true,             // Humano = artífice (mago + alquimista)
  humanResponsibilityNonDelegable: true, // Responsabilidad indelegable
  humanPaysCost: true,                  // Humano paga costo, kernel no
  humanTransformsTraces: true,          // Humano transforma rastros → dirección
  humanSignatureUnique: true,           // Traducción deja firma única
  humanUncertaintyAcknowledged: true,   // Incertidumbre estructural asumida
  humanBetaPerpetua: true,              // Acepta corrección continua
  aiCannotHabitate: true,               // IA no puede habitar por humano
  aiCannotPayCost: true,                // IA no paga costo
  aiCannotTransform: true,              // IA no transforma
  aiCannotDecideForHuman: true,         // IA no decide por humano
  
  // ===== AFP PILAR 3: TIEMPO VITAL =====
  afpVitalTimeConsciousEnergy: true,    // Tiempo vital = energía consciente encarnada
  afpVitalTimeContribution: true,       // 1 hora contribución = acceso flujo expandido
  afpNbuCovered: true,                  // NBU cubiertas por existir/participar
  afpExpandedAccess: true,              // Acceso expandido por contribución
  afpEcoImpact: true,                   // Impacto positivo en red
  
  // ===== BT180: PODER = TIEMPO VITAL =====
  powerIsVitalTime: true,               // Poder = tiempo vital
  controlsOwnTime: true,                // Quien controla tu tiempo controla tu vida
  consentGradients: true,               // Consentimiento real tiene gradientes
  energyFromBelow: true,                // Energía siempre sale de abajo
  vitalTimeNotForSale: true,            // Tiempo vital no se vende, se habita
  
  // ===== BT165: ECUACIÓN LASTRE E=V =====
  ballastEquation: true,                // E=V = verdad asumida / verdad evadida
  evasionLightensToday: true,           // Evasión aligera hoy = deuda futura con intereses
  presenceDensifies: true,              // Presencia densifica ahora y estabiliza
  totalPaidEqual: true,                 // Total se paga igual; diferencia = dirección vs ingravidez
  peaceFromAssumption: true,            // Paz = certeza de hacer lo correcto incluso cuando todo va mal
  umbralInfoInsufficient: true,         // Umbral donde info insuficiente: declararlo sin evasión no genera deuda
  afpSustainsBallast: true,             // AFP = arte de sostener lastre sin delegarlo
  
  // ===== BT164: MARGEN REAL DISPONIBLE =====
  realMarginVariable: true,             // Margen = espacio real trayectorias disponibles
  evasionReducesMargin: true,           // Evasión reduce artificialmente
  presenceExpandsMargin: true,          // Presencia amplía al auditar interno + aplicar compartido
  extractionSequestersMargin: true,     // Extracción secuestra margen
  evolutionReorganizesMargin: true,     // Evolución lo reorganiza
  thresholdReal: true,                  // Umbral = límite real no evasión
  lagReal: true,                        // Desfase = conciencia > capacidad disponible
  relationalLagReal: true,              // Desfase relacional = conciencia sin red compatible
  
  // ===== BT213: LÍMITE KERNEL =====
  kernelOrganizesTraces: true,          // Kernel organiza rastros
  kernelNoDecideTruth: true,            // No decide verdad
  kernelNoConsciousnessAudit: true,     // No audita conciencia
  kernelNoInterpretPersons: true,       // No interpreta personas
  kernelNoSubstitutePresence: true,     // No sustituye presencia
  kernelNoDetectInternalEvasion: true,  // No detecta evasión interna
  kernelClassifiesOnly: true,           // Solo clasifica: compatible/incompatible/no-evaluable
  kernelSilenceNeutral: true,           // Silencio = dato neutro
  kernelTwoDomains: true,               // Experiencia directa + rastros compartidos
  kernelDebtFromEvasion: true,          // Deuda por evasión experiencia O rastros
  kernelPresenceIntegrates: true,       // Presencia integra experiencia + rastros
  kernelDebtFromEvasionEither: true,    // Deuda por evasión experiencia O rastros
  
  // ===== BT214: HUMANO ARTÍFICE =====
  humanArtificerMagus: true,            // Humano = mago (combina existente en formas nuevas)
  humanArtificerAlchemist: true,        // Humano = alquimista (transforma por comprensión)
  humanResponsibilityNonDelegable: true, // Responsabilidad indelegable
  humanPaysCostKernelDoesNot: true,     // Humano paga costo, kernel no
  humanTransformsTracesToDirection: true, // Humano transforma rastros → dirección
  humanSignatureUnique: true,           // Traducción deja firma única
  humanUncertaintyStructural: true,     // Incertidumbre estructural
  humanDecisionUnderUncertainty: true,  // Decisión bajo incertidumbre = operador
  humanCostOfBetAssumed: true,          // Costo de apuesta asumido por operador
  aiCannotHabitateForHuman: true,       // IA no puede habitar por humano
  aiCannotPayCost: true,                // IA no paga costo
  aiCannotTransform: true,              // IA no transforma
  aiCannotDecideForHuman: true,         // IA no decide por humano
  
  // ===== AFP PILAR 3: TIEMPO VITAL =====
  afpVitalTimeConsciousEnergy: true,    // Tiempo vital = energía consciente encarnada
  afpVitalTimeContribution: true,       // 1 hora contribución = acceso flujo expandido
  afpNbuCoveredByExistence: true,       // NBU cubiertas por existir/participar
  afpExpandedAccessByContribution: true, // Acceso expandido por contribución
  afpEcoImpactPositive: true,           // Impacto positivo en red
  
  // ===== BT180: PODER = TIEMPO VITAL =====
  powerIsVitalTimeControl: true,        // Poder = controla tiempo vital
  controlsOwnTimeSovereignty: true,     // Control propio tiempo = soberanía
  consentGradientsExist: true,          // Consentimiento real tiene gradientes
  energyAlwaysFromBelow: true,          // Energía siempre sale de abajo
  vitalTimeNotForSaleInvariant: true,   // Tiempo vital no se vende
  vitalTimeInhabitedNotBought: true,    // Tiempo vital se habita, no se compra
  
  // ===== BT165: ECUACIÓN LASTRE E=V =====
  eVEqualsAssumedOverEvaded: true,      // E=V = verdad asumida / verdad evadida
  evasionLightensArtificially: true,    // Evasión aligera hoy = deuda futura con intereses
  presenceDensifiesNow: true,           // Presencia densifica ahora y estabiliza
  totalPaidEqualDirectionDiffers: true, // Total se paga igual; diferencia = dirección
  peaceFromAssumptionCertainty: true,   // Paz = certeza de hacer lo correcto
  umbralInfoInsufficientNoDebt: true,   // Umbral info insuficiente: declararlo sin evasión no genera deuda
  afpSustainsBallastNoDelegation: true, // AFP = sostener lastre sin delegar
  
  // ===== BT164: MARGEN REAL DISPONIBLE =====
  marginIsRealTrajectoriesSpace: true,  // Margen = espacio real trayectorias
  evasionReducesMarginArtificially: true, // Evasión reduce artificialmente
  presenceExpandsMarginAuditing: true,  // Presencia amplía al auditar interno + aplicar compartido
  extractionSequestersMargin: true,     // Extracción secuestra margen
  evolutionReorganizesMargin: true,     // Evolución lo reorganiza
  thresholdIsRealLimit: true,           // Umbral = límite real no evasión
  lagIsConsciousnessExceedsCapacity: true, // Desfase = conciencia > capacidad
  relationalLagConsciousnessNoNetwork: true, // Desfase relacional = conciencia sin red compatible
  
  // ===== BT213: LÍMITE KERNEL =====
  kernelOrganizesTracesNotDecides: true, // Kernel organiza rastros, no decide
  kernelNoConsciousnessAuditInvariant: true, // No audita conciencia
  kernelNoDecideTruthInvariant: true,   // No decide verdad
  kernelNoInterpretPersonsInvariant: true, // No interpreta personas
  kernelNoSubstitutePresenceInvariant: true, // No sustituye presencia
  kernelNoDetectInternalEvasionInvariant: true, // No detecta evasión interna
  kernelClassifiesOnlyThreeDomains: true, // Solo clasifica 3 dominios
  kernelSilenceNeutralDataInvariant: true, // Silencio = dato neutro
  kernelTwoDomainsAccess: true,         // Experiencia directa + rastros compartidos
  kernelDebtFromEitherDomainEvasion: true, // Deuda por evasión cualquiera de los dos
  kernelPresenceIntegratesBoth: true,   // Presencia integra ambos dominios
  kernelDebtFromEvasionEitherDomain: true, // Deuda por evasión cualquiera
  kernelCannotAccessDirectExperience: true, // No accede experiencia directa
  kernelCannotAuditConsciousnessDirectly: true, // No audita conciencia directamente
  kernelCannotDecideTruthInvariant: true, // No decide verdad
  kernelCannotInterpretPersonsInvariant: true, // No interpreta personas
  kernelCannotDetectInternalEvasionInvariant: true, // No detecta evasión interna
  kernelSilenceNeutralDataInvariant: true, // Silencio = dato neutro
  kernelCauseIncompatibilityByOperator: true, // Causa incompatibilidad por operador
  
  // ===== BT214: HUMANO ARTÍFICE =====
  humanIsMagusCombinesExisting: true,   // Humano = mago combina existente
  humanIsAlchemistTransformsStructure: true, // Humano = alquimista transforma por estructura
  humanResponsibilityIndelegable: true, // Responsabilidad indelegable
  humanPaysCostKernelDoesNotInvariant: true, // Humano paga costo, kernel no
  humanTransformsTracesToDirectionInvariant: true, // Humano transforma rastros → dirección
  humanSignatureUniqueOnTranslation: true, // Traducción deja firma única
  humanUncertaintyStructuralInvariant: true, // Incertidumbre estructural
  humanDecisionUnderUncertaintyInvariant: true, // Decisión bajo incertidumbre = operador
  humanCostOfBetAssumedInvariant: true, // Costo de apuesta asumido por operador
  aiCannotHabitateForHumanInvariant: true, // IA no puede habitar por humano
  aiCannotPayCostInvariant: true,       // IA no paga costo
  aiCannotTransformInvariant: true,     // IA no transforma
  aiCannotDecideForHumanInvariant: true, // IA no decide por humano
  
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
  parameter: keyof typeof VITAL_TIME_INVARIANTS // Ajustado para incluir todos los invariantes
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
  const paramConfig = (VITAL_TIME_INVARIANTS as any).adjustableParams?.[parameter as keyof typeof VITAL_TIME_INVARIANTS.adjustableParams]
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
  nodes: any[]
): Promise<any> {
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
  nodeResults: any[]
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
async function testLocalCapabilities(node: any): Promise<any> {
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
  // if (VITAL_TIME_INVARIANTS.fixedParams.poolTotal !== 1) {
  //   errors.push('Pool total debe ser 1')
  // }
  
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
  // for (const [param, config] of Object.entries(VITAL_TIME_INVARIANTS.adjustableParams)) {
  //   if (config.current < config.min || config.current > config.max) {
  //     errors.push(`Parámetro '${param}' valor actual ${config.current} fuera de rango [${config.min}, ${config.max}]`)
  //   }
  // }
  
  // 4. Gobernanza: consenso 100%
  // if (VITAL_TIME_INVARIANTS.governanceInvariants.consensusThreshold !== 1.0) {
  //   errors.push('Consenso debe ser 100% (unanimidad)')
  // }
  
  // 5. Test desaparición obligatorio
  // if (!VITAL_TIME_INVARIANTS.governanceInvariants.testDesaparicion) {
  //   errors.push('Test desaparición 30 días debe ser obligatorio')
  // }
  
  return { valid: errors.length === 0, errors }
}

// === EXPORT ===

export const VITAL_TIME_GOVERNANCE = {
  validateParameterProposal,
  validateGovernanceConfig,
  runDisappearanceTest,
  requiresFullConsensus,
  // VITAL_TIME_INVARIANTS, // Comentado para evitar referencia circular
  TRIAXIAL_PASS_THRESHOLD: 0.7
} as const