// HSCSG v15 OS — Verificación Triaxial Obligatoria para Moneda Tiempo Vital
// Alráico Capa 0: Mental + Simulación + Laboratorio
// Basada en BT215 + Sistema Alráico (PI, γ-CARMIS, Verificación Triaxial)
// ACTUALIZADA con BT213 (Límite Kernel) + BT214 (Mago/Alquimista) + AFP + BT180 + BT165 + BT164
// Integra: VIA-27 (Dato Raíz), VIA-29 (Presencia Operativa), VIA-07 (Checkpoint), VIA-25 (Detector Hueco), VIA-21 (Auto-mejora)

import type { 
  VitalTimeAmount, 
  TriaxialProof, 
  LoopEngineState,
  VitalTimeNode,
  VitalTimeMode
} from './vitalTime'
import type { KernelOperation } from './bt213KernelLimits'
import { validateKernelOperation } from './bt213KernelLimits'

// === TIPOS DE VERIFICACIÓN ====

export interface MentalCheck {
  passed: boolean
  score: number                    // 0-1
  evidence: string
  timestamp: number
  operatorSignature: string        // "reconozco esta presencia como mía"
  // BT213/VIA-27: Distinguir dato raíz interno vs compartido
  directExperienceIntegrated: boolean
  sharedTracesIntegrated: boolean
  // VIA-25: Explicación post-retiro sin nueva auditoría
  postRetiroExplanation: boolean
  newAuditoriaDeclared: boolean
}

export interface SimulationCheck {
  passed: boolean
  score: number                    // 0-1
  evidence: string
  loopState: LoopEngineState
  gammaCARMIS: {
    active: boolean
    triggers: number
    reconfigurations: number
    pendingOverloads: number
  }
  resonances: Array<{ c1: string; c2: string; alphaH: number }>
  // BT213: Coherencia operativa + no evasión interna asumida
  coherenceVerified: boolean
  noInternalEvasionAssumed: boolean
  // BT213: No atribución de causa de incompatibilidad
  noIncompatibilityCauseAttributed: boolean
}

export interface LaboratoryCheck {
  passed: boolean
  score: number                    // 0-1
  evidence: string
  eVBodyCheck: {
    confirmed: boolean
    selfReport: string
    timestamp: number
  }
  witnessVerification?: {
    verified: boolean
    witnessNodeId: string
    witnessSignature: string
    timestamp: number
    note?: string
  }
  // BT214: Responsabilidad indelegable
  responsibilityAccepted: boolean
  uncertaintyAcknowledged: boolean
  translationSignature: string
  betaPerpetuaMode: boolean
  // BT214: Testigo cuerpo (Lautaro para Isaac, etc.)
  witnessVerification?: {
    verified: boolean
    witnessNodeId: string
    witnessSignature: string
    timestamp: number
    note?: string
  }
}

export interface TriaxialVerificationResult {
  passed: boolean
  mental: MentalCheck
  simulation: SimulationCheck
  laboratory: LaboratoryCheck
  combinedScore: number            // 0-1 (promedio ponderado)
  proof: TriaxialProof
  verifiedAt: number
  verifiedBy: string               // Nodo que realizó la verificación
  // BT213: Validación límite kernel
  kernelLimitsValid: boolean
  // BT214: Responsabilidad artífice
  artificerResponsibilityValid: boolean
  // BT213: Integración dos dominios
  twoDomainsIntegrated: boolean
}

// Pesos para score combinado (Alráico: Mental 0.4, Sim 0.3, Lab 0.3)
export const TRIAXIAL_WEIGHTS = {
  mental: 0.4,
  simulation: 0.3,
  laboratory: 0.3
} as const

// Umbral mínimo para pasar (70% ponderado)
export const TRIAXIAL_PASS_THRESHOLD = 0.7

// === VERIFICACIÓN MENTAL ===

export interface PresenceClaim {
  operatorId: string
  startTime: number
  endTime: number
  activity: string
  location?: string
}

/**
 * Verificación Mental: El operador reconoce conscientemente su presencia
 * Requiere firma digital: "reconozco esta presencia como mía"
 * BT213/VIA-27: Distinguir dato raíz interno vs compartido
 * VIA-25: Explicación post-retiro sin nueva auditoría
 */
export async function verifyMental(
  operatorId: string,
  claim: PresenceClaim
): Promise<MentalCheck> {
  // En implementación real: firma criptográfica del operador
  // Para piloto: firma simple + timestamp
  const signature = await signPresenceClaim(operatorId, claim)
  
  return {
    passed: true,
    score: 1.0,
    evidence: `Firma operador ${operatorId}: ${signature.substring(0, 32)}...`,
    timestamp: Date.now(),
    operatorSignature: signature,
    // BT213/VIA-27: Distinguir dato raíz interno vs compartido
    directExperienceIntegrated: true,  // En piloto: asumido true
    sharedTracesIntegrated: true,      // En piloto: asumido true
    // VIA-25: Explicación post-retiro sin nueva auditoría
    postRetiroExplanation: false,
    newAuditoriaDeclared: true
  }
}

// Firma simple para piloto (en producción: Ed25519 / WebAuthn)
async function signPresenceClaim(operatorId: string, claim: PresenceClaim): Promise<string> {
  const payload = `${operatorId}|${claim.startTime}|${claim.endTime}|${claim.activity}|${Date.now()}`
  // Hash simple para piloto (reemplazar con firma criptográfica real)
  return btoa(payload).substring(0, 64)
}

// === VERIFICACIÓN SIMULACIÓN (LoopEngine + γ-CARMIS + Resonancia) ===

import { detectOverloads, detectResonances, simulateReconfig } from './loopEngine'

/**
 * Verificación Simulación: Estado LoopEngine + γ-CARMIS + Resonancia
 * Valida que el operador no tenga sobrecargas cognitivas críticas
 * BT213: Coherencia operativa + no evasión interna asumida + no atribución causa
 */
export async function verifySimulation(
  operatorId: string,
  getLoopState: (nodeId: string) => Promise<LoopEngineState>
): Promise<SimulationCheck> {
  const loopState = await getLoopState(operatorId)
  
  // Detectar sobrecargas (γ-CARMIS)
  const overloads = detectOverloads(loopState as any)
  const gammaCARMISActive = overloads.length > 0
  
  // Detectar resonancias
  const resonances = detectResonances(loopState as any)
  const hasResonance = resonances.length > 0
  
  // Simular reconfiguración si hay sobrecargas
  let reconfigurations = 0
  if (gammaCARMISActive) {
    const reconfig = simulateReconfig(overloads, loopState as any)
    reconfigurations = Object.keys(reconfig).length
  }
  
  const gammaCARMIS = {
    active: gammaCARMISActive,
    triggers: overloads.length,
    reconfigurations,
    pendingOverloads: overloads.filter(o => o.alphaH < 0).length
  }
  
  // BT213: Coherencia operativa - rastros explicables por misma configuración causal
  const coherenceVerified = true // En implementación real: checkCoherence()
  
  // BT213: No evasión interna asumida (kernel no detecta evasión interna)
  const noInternalEvasionAssumed = true
  
  // BT213: No atribución de causa de incompatibilidad (causa interpretada por operador)
  const noIncompatibilityCauseAttributed = true
  
  // Score: 1.0 si sin sobrecargas, 0.5 si con sobrecargas pero reconfiguradas, 0.0 si críticas sin resolver
  let score = 1.0
  if (gammaCARMISActive) {
    score = gammaCARMIS.pendingOverloads === 0 ? 0.5 : 0.0
  }
  
  const passed = !gammaCARMISActive || gammaCARMIS.pendingOverloads === 0
  
  return {
    passed,
    score,
    evidence: `Loops: ${loopState.activeLoops.length}, γ-CARMIS: ${gammaCARMIS.triggers}, Reconfig: ${gammaCARMIS.reconfigurations}, Resonancias: ${resonances.length}`,
    loopState,
    gammaCARMIS,
    resonances,
    // BT213
    coherenceVerified,
    noInternalEvasionAssumed,
    noIncompatibilityCauseAttributed
  }
}

// === VERIFICACIÓN LABORATORIO (E=V en cuerpo) ===

export interface EVClaim {
  operatorId: string
  startTime: number
  endTime: number
  activity: string
  eVConfirmed: boolean           // Autorreporte: "sí, viví E=V en este período"
  bodySensation?: string         // Descripción opcional de sensación corporal
}

export interface WitnessVerification {
  verified: boolean
  witnessNodeId: string
  witnessSignature: string
  timestamp: number
  note?: string
}

/**
 * Verificación Laboratorio: E=V verificable en cuerpo
 * Requiere autorreporte + testigo opcional (Lautaro para Isaac, Yoka para Lautaro, etc.)
 * BT214: Responsabilidad indelegable + testigo cuerpo
 */
export async function verifyLaboratory(
  operatorId: string,
  claim: EVClaim,
  witnessNodeId?: string
): Promise<LaboratoryCheck> {
  // 1. Autorreporte E=V (obligatorio)
  const eVBodyCheck = {
    confirmed: claim.eVConfirmed,
    selfReport: claim.bodySensation || 'Autorreporte E=V confirmado',
    timestamp: Date.now()
  }
  
  // 2. Testigo opcional (reforza score)
  let witnessVerification: WitnessVerification | undefined
  if (witnessNodeId) {
    witnessVerification = await requestWitnessVerification(witnessNodeId, claim)
  }
  
  // BT214: Responsabilidad indelegable
  const responsibilityAccepted = true // En piloto: asumido true
  const uncertaintyAcknowledged = true
  const translationSignature = `sig_${operatorId}_${Date.now()}`
  const betaPerpetuaMode = true
  
  // 2. Testigo opcional (reforza score)
  let witnessVerification: WitnessVerification | undefined
  if (witnessNodeId) {
    witnessVerification = await requestWitnessVerification(witnessNodeId, claim)
  }
  
  // Score: 1.0 si confirmado + testigo, 0.8 si solo confirmado, 0.0 si no confirmado
  let score = 0.0
  if (eVBodyCheck.confirmed) {
    score = witnessVerification?.verified ? 1.0 : 0.8
  }
  
  const passed = eVBodyCheck.confirmed
  
  return {
    passed,
    score,
    evidence: `E=V cuerpo: ${eVBodyCheck.confirmed}, Testigo: ${witnessVerification?.verified ? 'Sí' : 'No'}`,
    eVBodyCheck,
    witnessVerification,
    // BT214
    responsibilityAccepted: true,
    uncertaintyAcknowledged: true,
    translationSignature: `sig_${claim.operatorId}_${Date.now()}`,
    betaPerpetuaMode: true,
    witnessVerification
  }
}

// Solicitar verificación de testigo (async en producción)
async function requestWitnessVerification(
  witnessNodeId: string, 
  claim: EVClaim
): Promise<WitnessVerification> {
  // En producción: notificación push / email / Nostr DM al testigo
  // Para piloto: simulación con firma simple
  const signature = await signWitnessClaim(witnessNodeId, claim)
  
  return {
    verified: true,
    witnessNodeId,
    witnessSignature: signature,
    timestamp: Date.now(),
    note: `Testigo ${witnessNodeId} verifica presencia de ${claim.operatorId}`
  }
}

async function signWitnessClaim(witnessNodeId: string, claim: EVClaim): Promise<string> {
  const payload = `${witnessNodeId}|verifica|${claim.operatorId}|${claim.startTime}|${claim.endTime}|${Date.now()}`
  return btoa(payload).substring(0, 64)
}

// === VERIFICACIÓN TRIAXIAL COMPLETA ===

export interface VerifyTriaxialOptions {
  operatorId: string
  presenceClaim: PresenceClaim
  evClaim: EVClaim
  witnessNodeId?: string
  getLoopState: (nodeId: string) => Promise<LoopEngineState>
  // BT213: Validación límite kernel
  validateKernelLimits?: boolean
  // BT214: Responsabilidad artífice
  validateArtificerResponsibility?: boolean
  // BT213: Integración dos dominios
  validateTwoDomains?: boolean
}

/**
 * Verificación Triaxial Obligatoria (Alráico Capa 0)
 * Requiere pasar las 3 dimensiones con score ponderado ≥ 0.7
 * BT213: Validación límite kernel + integración dos dominios
 * BT214: Responsabilidad artífice
 * VIA-27, VIA-29, VIA-07, VIA-25, VIA-21 integrados
 */
export async function verifyTriaxial(
  options: VerifyTriaxialOptions
): Promise<TriaxialVerificationResult> {
  const { 
    operatorId, 
    presenceClaim, 
    evClaim, 
    witnessNodeId, 
    getLoopState,
    validateKernelLimits = true,
    validateArtificerResponsibility = true,
    validateTwoDomains = true
  } = options
  
  // Ejecutar las 3 verificaciones en paralelo
  const [mental, simulation, laboratory] = await Promise.all([
    verifyMental(operatorId, presenceClaim),
    verifySimulation(operatorId, getLoopState),
    verifyLaboratory(operatorId, evClaim, witnessNodeId)
  ])
  
  // Score ponderado (Alráico: Mental 0.4, Sim 0.3, Lab 0.3)
  const combinedScore = 
    mental.score * TRIAXIAL_WEIGHTS.mental +
    simulation.score * TRIAXIAL_WEIGHTS.simulation +
    laboratory.score * TRIAXIAL_WEIGHTS.laboratory
  
  // Pasa solo si TODAS pasan Y score combinado ≥ 0.7
  const allPassed = mental.passed && simulation.passed && laboratory.passed
  const passed = allPassed && combinedScore >= TRIAXIAL_PASS_THRESHOLD
  
  // BT213: Validación límite kernel
  let kernelLimitsValid = true
  if (validateKernelLimits) {
    const kernelOp: KernelOperation = {
      attemptsToDecideTruth: false,
      attemptsToAuditConsciousness: false,
      interpretsPersons: false,
      classification: 'compatible',
      attributesIncompatibilityCause: false
    }
    const kernelValidation = validateKernelOperation(kernelOp)
    kernelLimitsValid = kernelValidation.valid
  }
  
  // BT214: Responsabilidad artífice
  let artificerResponsibilityValid = true
  if (validateArtificerResponsibility) {
    // En implementación real: validar nodo actual
    artificerResponsibilityValid = true // En piloto: asumido true
  }
  
  // BT213: Integración dos dominios (experiencia + rastros)
  let twoDomainsIntegrated = true
  if (validateTwoDomains) {
    twoDomainsIntegrated = true // En piloto: asumido true
  }
  
  // Pasa solo si TODAS pasan Y score combinado ≥ 0.7
  const allPassed = mental.passed && simulation.passed && laboratory.passed
  const passed = allPassed && combinedScore >= TRIAXIAL_PASS_THRESHOLD
  
  // Score ponderado (Alráico: Mental 0.4, Sim 0.3, Lab 0.3)
  const combinedScore = 
    mental.score * TRIAXIAL_WEIGHTS.mental +
    simulation.score * TRIAXIAL_WEIGHTS.simulation +
    laboratory.score * TRIAXIAL_WEIGHTS.laboratory
  
  // Pasa solo si TODAS pasan Y score combinado ≥ 0.7
  const allPassed = mental.passed && simulation.passed && laboratory.passed
  const passed = allPassed && combinedScore >= TRIAXIAL_PASS_THRESHOLD
  
  // Construir prueba triaxial completa
  const proof: TriaxialProof = {
    mental: {
      operatorId: mental.operatorSignature.split('|')[0] || operatorId,
      timestamp: mental.timestamp,
      signature: mental.operatorSignature
    },
    simulation: {
      loopEngineSnapshot: simulation.loopState,
      resonanceCheck: simulation.resonances.length > 0
    },
    laboratory: {
      eVBodyCheck: laboratory.eVBodyCheck.confirmed,
      witnessNodeId: laboratory.witnessVerification?.witnessNodeId
    }
  }
  
  return {
    passed,
    mental,
    simulation,
    laboratory,
    combinedScore: Math.round(combinedScore * 100) / 100,
    proof,
    verifiedAt: Date.now(),
    verifiedBy: 'TRIAXIAL_VERIFIER', // En producción: ID del verificador distribuido
    // BT213
    kernelLimitsValid,
    // BT214
    artificerResponsibilityValid,
    // BT213
    twoDomainsIntegrated
  }
}

// === FUNCIÓN DE CONVENIENCIA PARA PILOTO ===

/**
 * Verificación triaxial simplificada para piloto 3 nodos
 * Uso: await verifyTriaxialPilot('ISAAC', { activity: 'coding HSCSG' }, 'LAUTARO')
 */
export async function verifyTriaxialPilot(
  operatorId: 'YOKA' | 'LAUTARO' | 'ISAAC',
  activity: string,
  witnessNodeId?: 'YOKA' | 'LAUTARO' | 'ISAAC'
): Promise<TriaxialVerificationResult> {
  const now = Date.now()
  const hourAgo = now - 3600000 // 1 hora atrás
  
  // Mock getLoopState para piloto (en producción: estado real del LoopEngine)
  const mockGetLoopState = async (nodeId: string) => ({
    activeLoops: ['CDS', 'MeritMint', 'AgentCompute', 'Regen'],
    gammaCARMIS: { active: false, triggers: 0, reconfigurations: 0, pendingOverloads: 0 },
    resonances: [{ c1: nodeId, c2: 'OTHER', alphaH: 0.8 }],
    tickInterval: 1000
  })
  
  return verifyTriaxial({
    operatorId,
    presenceClaim: {
      operatorId,
      startTime: hourAgo,
      endTime: now,
      activity
    },
    evClaim: {
      operatorId,
      startTime: hourAgo,
      endTime: now,
      activity,
      eVConfirmed: true,
      bodySensation: 'Presencia anclada, energía fluyendo, sin disociación'
    },
    witnessNodeId,
    getLoopState: mockGetLoopState,
    validateKernelLimits: true,
    validateArtificerResponsibility: true,
    validateTwoDomains: true
  })
}

// === EXPORT ===

export const TRIAXIAL_VERIFICATION = {
  verifyMental,
  verifySimulation,
  verifyLaboratory,
  verifyTriaxial,
  verifyTriaxialPilot,
  TRIAXIAL_WEIGHTS,
  TRIAXIAL_PASS_THRESHOLD
} as const