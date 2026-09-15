// HSCSG v15 OS — Moneda Tiempo Vital (hr_vital)
// Extiende valueDual.ts con arquitectura anfibia para tiempo vital
// Basada en BT215 §15-16 + Sistema Alráico (PI, γ-CARMIS, Triaxial, Transducción F)
// ACTUALIZADA con BT213 (Límite Kernel) + BT214 (Mago/Alquimista) + AFP Pilar 3 + BT180 + BT165 + BT164

import type { ValueUnit, NodeMode } from './valueDual'
import type { HumanArtificer, PresenceState, HumanArtificer as HumanArtificerType } from './humanArtificer'
import type { KernelLimitKeys, CannotKeys, CanKeys } from './bt213KernelLimits'

// === TIPOS BASE ===

export type VitalTimeUnit = 'hr_vital'
export type VitalTimeMode = 'postmonetario' | 'conectado'  // Anfibio: solo hr_vital / hr_vital + TQ

// Ancla ontológica: 1 hr_vital = presencia verificable en cuerpo (E=V)
export interface VitalTimeAmount {
  amount: number                    // Horas vitales (decimal, ej: 1.5)
  unit: VitalTimeUnit               // 'hr_vital'
  verified: boolean                 // Verificación triaxial completada
  timestamp: number                 // Unix ms cuando se verificó presencia
  nodeId: string                    // Nodo que verificó (YOKA | LAUTARO | ISAAC | ...)
  triaxialProof: TriaxialProof      // Prueba Mental + Sim + Lab
}

// Prueba Triaxial (Alráico Capa 0) - ACTUALIZADA BT213 + BT214
export interface TriaxialProof {
  mental: {                         // Entendimiento consciente (VIA-27, VIA-25)
    operatorId: string
    timestamp: number
    signature: string               // Firma del operador: "reconozco esta presencia"
    // BT213/VIA-27: Distinguir dato raíz interno vs compartido
    directExperienceIntegrated: boolean
    sharedTracesIntegrated: boolean
  }
  simulation: {                     // Modelo computacional (VIA-25, BT213)
    loopEngineSnapshot: LoopEngineState  // Estado loops + γ-CARMIS
    resonanceCheck: boolean                 // Resonancia con otros nodos
    // BT213: γ-CARMIS + resonancia + coherencia
    gammaCARMISActive: boolean
    coherenceVerified: boolean
    noInternalEvasionDetected: boolean
  }
  laboratory: {                     // Verificación en cuerpo (Lab) - BT214 responsabilidad
    biometricHash?: string          // Hash de biométrica anonimizada (opcional)
    eVBodyCheck: boolean            // E=V verificable en cuerpo (autorreporte + testigo)
    witnessNodeId?: string          // Nodo testigo opcional (LAUTARO para ISAAC, etc.)
    // BT214: Responsabilidad indelegable
    responsibilityAccepted: boolean          // Acepta responsabilidad indelegable
    uncertaintyAcknowledged: boolean         // Incertidumbre estructural asumida
    translationSignature: string             // Firma única del operador
    betaPerpetuaMode: boolean                // Acepta corrección continua
  }
}

// Snapshot del LoopEngine para verificación simulación
export interface LoopEngineState {
  activeLoops: string[]             // Loops activos (CDS, MeritMint, AgentCompute, Regen, etc.)
  gammaCARMIS: {                    // Estado γ-CARMIS
    active: boolean
    triggers: number                // Disparos en último ciclo
    reconfigurations: number        // Reconfiguraciones exitosas
    pendingOverloads: number        // Sobrecargas ΣPᵢ > κ no resueltas
  }
  resonances: Array<{               // Resonancias detectadas
    c1: string
    c2: string
    alphaH: number
  }>
  tickInterval: number              // Intervalo real vs configurado
  // BT213: Coherencia operativa
  coherenceVerified: boolean
  noInternalEvasionAssumed: boolean
}

// Pool de Tiempo Vital (Análogo a ZNU_POOL_TOTAL)
export const VITAL_TIME_POOL_TOTAL = 1          // Pool fijo = 1 (totalidad de vida presente)
export const VITAL_TIME_ROTATION_DAYS = 30      // Rotación más rápida que ZNU (30 vs 60 días)
export const VITAL_TIME_DEMURRAGE_RATE = 0.10 / 365  // 10%/año decay por inactividad

// Nodo con Tiempo Vital - ACTUALIZADO BT213 + BT214 + AFP + BT180 + BT165 + BT164
export interface VitalTimeNode {
  nodeId: string                       // YOKA | LAUTARO | ISAAC | FELIPE | ...
  name: string                         // Nombre de Resonancia elegido
  vitalTimeBalance: VitalTimeAmount    // Balance actual (pool fijo = 1)
  protectedVitalTime: number           // Protegido de rotación (horas vitales)
  lastActivity: number                 // Timestamp última verificación triaxial
  rotationDays: number                 // Días para rotación (default 30)
  demurrageRate: number                // Rate decay (default 10%/año)
  triaxialVerificationCount: number    // Contador verificaciones completadas
  resonanceConnections: string[]       // Nodos con resonancia αʰ > umbral
  mode: VitalTimeMode                  // 'postmonetario' | 'conectado'
  transductionEnabled: boolean         // Si permite transducción TQ↔hr_vital
  
  // ===== BT213: LÍMITE KERNEL =====
  kernelLimits: {
    cannotAuditConsciousness: true
    onlyOrganizesTraces: true
    classifiesAssertions: 'compatible' | 'incompatible' | 'no-evaluable'
    cannotAccessDirectExperience: true
    cannotAuditConsciousnessDirectly: true
    cannotDecideTruth: true
    cannotInterpretPersons: true
    cannotDetectInternalEvasion: true
  }
  
  // ===== BT214: HUMANO ARTÍFICE (MAGO + ALQUIMISTA) =====
  humanArtificer: {
    role: 'magus' | 'alchemist' | 'both'
    responsibilityAccepted: boolean        // Firma responsabilidad indelegable
    translationSignature: string           // Huella única de su traducción
    uncertaintyAcknowledged: boolean       // Incertidumbre estructural asumida
    betaPerpetuaMode: boolean              // Acepta corrección continua
    magus: boolean                         // Combina lo existente en formas nuevas
    alchemist: boolean                     // Transforma por comprensión estructural
    translationSignature: string           // Huella única = firma operador
  }
  
  // ===== BT213: PRESENCIA INTEGRA DOS DOMINIOS =====
  presenceIntegration: {
    directExperienceVerified: boolean      // Experiencia directa (privada) verificada
    sharedTracesVerified: boolean          // Rastros compartidos (públicos) verificados
    debtGenerated: boolean                 // true si evadió uno de los dos dominios
    lastIntegration: number                // Timestamp última integración
  }
  
  // ===== AFP PILAR 3: TIEMPO VITAL =====
  afpVitalTime: {
    // AFP Pilar 3: Tiempo Vital = energía consciente encarnada
    consciousEnergy: number                // Aliento, atención, intención, creatividad
    contributionHours: number              // Horas contribución consciente registrada
    nbuCovered: boolean                    // NBU cubiertas por hecho de existir/participar
    expandedAccess: boolean                // Acceso expandido cubierto por contribución
    ecoImpact: number                      // Impacto positivo en la red
  }
  
  // ===== BT180: PODER = TIEMPO VITAL =====
  powerAsVitalTime: {
    controlsOwnTime: boolean               // Quien controla tu tiempo, controla tu vida
    consentGradients: number               // Consentimiento real tiene gradientes
    energyFromBelow: boolean               // Energía siempre sale de abajo
    notForSale: boolean                    // Tiempo vital no se vende, se habita
  }
  
  // ===== BT165: ECUACIÓN LASTRE E=V =====
  ballastEquation: {
    // E=V = verdad asumida / verdad evadida
    assumedTruth: number                   // Verdad asumida (integrada)
    evadedTruth: number                    // Verdad evadida (deuda)
    ballast: number                        // Peso = verdad asumida / verdad evadida
    // Evasión aligera artificialmente hoy = deuda futura con intereses
    // Presencia densifica ahora y estabiliza
  }
  
  // ===== BT164: MARGEN REAL DISPONIBLE =====
  realMargin: {
    available: number                      // Espacio real de trayectorias disponibles
    evasionReduces: boolean                // Evasión reduce artificialmente
    presenceExpands: boolean               // Presencia amplía al auditar interno + aplicar al compartido
    extractionSequesters: boolean          // Extracción secuestra margen
    evolutionReorganizes: boolean          // Evolución lo reorganiza
    threshold: number                      // Umbral (límite real no evasión)
    lag: number                            // Desfase (conciencia > capacidad)
    relationalLag: number                  // Desfase relacional (conciencia sin red compatible)
  }
  
  // ===== BT213: LÍMITE KERNEL =====
  kernelLimits: {
    cannotAuditConsciousness: true
    onlyOrganizesTraces: true
    classifiesAssertions: 'compatible' | 'incompatible' | 'no-evaluable'
    cannotAccessDirectExperience: true
    cannotAuditConsciousnessDirectly: true
    cannotDecideTruth: true
    cannotInterpretPersons: true
    cannotDetectInternalEvasion: true
    cannotDecideTruth: true
    cannotInterpretPersons: true
    cannotDetectInternalEvasion: true
    silenceIsNeutralData: true
  }
  
  // ===== BT214: HUMANO ARTÍFICE =====
  humanArtificer: {
    role: 'magus' | 'alchemist' | 'both'
    responsibilityAccepted: boolean        // Firma responsabilidad indelegable
    translationSignature: string           // Huella única de su traducción
    uncertaintyAcknowledged: boolean       // Incertidumbre estructural asumida
    betaPerpetuaMode: boolean              // Acepta corrección continua
    magus: boolean                         // Combina lo existente en formas nuevas
    alchemist: boolean                     // Transforma por comprensión estructural
    translationSignature: string           // Huella única = firma operador
    kernelDoesNotPayCost: true
    humanPaysCost: true
    knowledgeShared: true
    translationLeavesSignature: true
  }
  
  // ===== AFP PILAR 3: TIEMPO VITAL =====
  afpVitalTime: {
    consciousEnergy: number
    contributionHours: number
    nbuCovered: boolean
    expandedAccess: boolean
    ecoImpact: number
  }
  
  // ===== BT180: PODER = TIEMPO VITAL =====
  powerAsVitalTime: {
    controlsOwnTime: boolean
    consentGradients: number
    energyFromBelow: boolean
    notForSale: boolean
  }
  
  // ===== BT165: ECUACIÓN LASTRE E=V =====
  ballastEquation: {
    assumedTruth: number
    evadedTruth: number
    ballast: number
  }
  
  // ===== BT164: MARGEN REAL DISPONIBLE =====
  realMargin: {
    available: number
    evasionReduces: boolean
    presenceExpands: boolean
    extractionSequesters: boolean
    evolutionReorganizes: boolean
    threshold: number
    lag: number
    relationalLag: number
  }
  
  // ===== BT213: LÍMITE KERNEL =====
  kernelLimits: {
    cannotAuditConsciousness: true
    onlyOrganizesTraces: true
    classifiesAssertions: 'compatible' | 'incompatible' | 'no-evaluable'
    cannotAccessDirectExperience: true
    cannotAuditConsciousnessDirectly: true
    cannotDecideTruth: true
    cannotInterpretPersons: true
    cannotDetectInternalEvasion: true
    cannotDecideTruth: true
    cannotInterpretPersons: true
    cannotDetectInternalEvasion: true
    silenceIsNeutralData: true
  }
  
  // ===== BT214: HUMANO ARTÍFICE =====
  humanArtificer: {
    role: 'magus' | 'alchemist' | 'both'
    responsibilityAccepted: boolean
    translationSignature: string
    uncertaintyAcknowledged: boolean
    betaPerpetuaMode: boolean
    magus: boolean
    alchemist: boolean
    translationSignature: string
    kernelDoesNotPayCost: true
    humanPaysCost: true
    knowledgeShared: true
    translationLeavesSignature: true
  }
  
  // ===== AFP PILAR 3 =====
  afpVitalTime: {
    consciousEnergy: number
    contributionHours: number
    nbuCovered: boolean
    expandedAccess: boolean
    ecoImpact: number
  }
  
  // ===== BT180 =====
  powerAsVitalTime: {
    controlsOwnTime: boolean
    consentGradients: number
    energyFromBelow: boolean
    notForSale: boolean
  }
  
  // ===== BT165 =====
  ballastEquation: {
    assumedTruth: number
    evadedTruth: number
    ballast: number
  }
  
  // ===== BT164 =====
  realMargin: {
    available: number
    evasionReduces: boolean
    presenceExpands: boolean
    extractionSequesters: boolean
    evolutionReorganizes: boolean
    threshold: number
    lag: number
    relationalLag: number
  }
  
  // ===== BT213 LÍMITE KERNEL =====
  kernelLimits: {
    cannotAuditConsciousness: true
    onlyOrganizesTraces: true
    classifiesAssertions: 'compatible' | 'incompatible' | 'no-evaluable'
    cannotAccessDirectExperience: true
    cannotAuditConsciousnessDirectly: true
    cannotDecideTruth: true
    cannotInterpretPersons: true
    cannotDetectInternalEvasion: true
    cannotDecideTruth: true
    cannotInterpretPersons: true
    cannotDetectInternalEvasion: true
    silenceIsNeutralData: true
  }
  
  // ===== BT214 HUMANO ARTÍFICE =====
  humanArtificer: {
    role: 'magus' | 'alchemist' | 'both'
    responsibilityAccepted: boolean
    translationSignature: string
    uncertaintyAcknowledged: boolean
    betaPerpetuaMode: boolean
    magus: boolean
    alchemist: boolean
    translationSignature: string
    kernelDoesNotPayCost: true
    humanPaysCost: true
    knowledgeShared: true
    translationLeavesSignature: true
  }
  
  // ===== AFP PILAR 3 =====
  afpVitalTime: {
    consciousEnergy: number
    contributionHours: number
    nbuCovered: boolean
    expandedAccess: boolean
    ecoImpact: number
  }
  
  // ===== BT180 =====
  powerAsVitalTime: {
    controlsOwnTime: boolean
    consentGradients: number
    energyFromBelow: boolean
    notForSale: boolean
  }
  
  // ===== BT165 =====
  ballastEquation: {
    assumedTruth: number
    evadedTruth: number
    ballast: number
  }
  
  // ===== BT164 =====
  realMargin: {
    available: number
    evasionReduces: boolean
    presenceExpands: boolean
    extractionSequesters: boolean
    evolutionReorganizes: boolean
    threshold: number
    lag: number
    relationalLag: number
  }
  
  // ===== BT213 LÍMITE KERNEL =====
  kernelLimits: {
    cannotAuditConsciousness: true
    onlyOrganizesTraces: true
    classifiesAssertions: 'compatible' | 'incompatible' | 'no-evaluable'
    cannotAccessDirectExperience: true
    cannotAuditConsciousnessDirectly: true
    cannotDecideTruth: true
    cannotInterpretPersons: true
    cannotDetectInternalEvasion: true
    cannotDecideTruth: true
    cannotInterpretPersons: true
    cannotDetectInternalEvasion: true
    silenceIsNeutralData: true
  }
  
  // ===== BT214 HUMANO ARTÍFICE =====
  humanArtificer: {
    role: 'magus' | 'alchemist' | 'both'
    responsibilityAccepted: boolean
    translationSignature: string
    uncertaintyAcknowledged: boolean
    betaPerpetuaMode: boolean
    magus: boolean
    alchemist: boolean
    translationSignature: string
    kernelDoesNotPayCost: true
    humanPaysCost: true
    knowledgeShared: true
    translationLeavesSignature: true
  }
  
  // ===== AFP PILAR 3 =====
  afpVitalTime: {
    consciousEnergy: number
    contributionHours: number
    nbuCovered: boolean
    expandedAccess: boolean
    ecoImpact: number
  }
  
  // ===== BT180 =====
  powerAsVitalTime: {
    controlsOwnTime: boolean
    consentGradients: number
    energyFromBelow: boolean
    notForSale: boolean
  }
  
  // ===== BT165 =====
  ballastEquation: {
    assumedTruth: number
    evadedTruth: number
    ballast: number
  }
  
  // ===== BT164 =====
  realMargin: {
    available: number
    evasionReduces: boolean
    presenceExpands: boolean
    extractionSequesters: boolean
    evolutionReorganizes: boolean
    threshold: number
    lag: number
    relationalLag: number
  }
  
  // ===== CAMPOS BASE EXISTENTES =====
  nodeId: string
  name: string
  vitalTimeBalance: VitalTimeAmount
  protectedVitalTime: number
  lastActivity: number
  rotationDays: number
  demurrageRate: number
  triaxialVerificationCount: number
  resonanceConnections: string[]
  mode: VitalTimeMode
  transductionEnabled: boolean
}

// Transducción F: {TQ, Gaia, Kernel, Alráico} → 𝕮 → {hr_vital} (Alráico)
export interface VitalTimeTransduction {
  fromSystem: 'TQ' | 'GAIA' | 'KERNEL' | 'ALRAICO'
  fromAmount: number
  fromUnit: 'kWh' | 'gaia_tokens' | 'kernel_rastros' | 'alraico_alphaH'
  toAmount: number                     // En hr_vital
  transductionFunction: 'F_TQ' | 'F_GAIA' | 'F_KERNEL' | 'F_ALRAICO'
  cedeoFiloThreshold: number           // Umbral 𝕮 para transducción válida
  triaxialVerified: boolean            // Requiere verificación triaxial
  // BT213: Transducción requiere integración dos dominios
  requiresTwoDomainsIntegration: boolean
  // BT214: Responsabilidad artífice
  artificerResponsibilityAccepted: boolean
}

// === FUNCIONES CORE ===

/**
 * Rotación anti-acumulación (adaptada de znuRotate)
 * Si pasan > rotationDays sin actividad, exceso sobre protegido se libera al pool
 */
export function vitalTimeRotate(
  balance: VitalTimeAmount,
  protectedVitalTime: number,
  daysSinceActivity: number,
  rotationDays: number = VITAL_TIME_ROTATION_DAYS
): { active: VitalTimeAmount; released: number } {
  if (daysSinceActivity < rotationDays) return { active: balance, released: 0 }
  const excess = Math.max(0, balance.amount - protectedVitalTime)
  const released = excess  // Libera exceso al pool (anti-acumulación Amiya Tulu)
  return { 
    active: { ...balance, amount: balance.amount - released }, 
    released 
  }
}

/**
 * Decay por inactividad (adaptada de znuDecay)
 * E=V en cuerpo: el tiempo vital pierde poder si no se ejerce (use-it-or-lose-it)
 * ratePerDay = fracción por día (ej. 10%/año ≈ 0.000274/día)
 */
export function vitalTimeDecay(
  balance: VitalTimeAmount,
  ratePerDay: number,
  daysSinceActivity: number
): VitalTimeAmount {
  if (balance.amount <= 0 || daysSinceActivity <= 0) return balance
  const factor = Math.pow(1 - ratePerDay, daysSinceActivity)
  return { 
    ...balance, 
    amount: Math.round(balance.amount * factor * 1e6) / 1e6 
  }
}

/**
 * Concentración (anti-propósito de la moneda)
 * Útil para MJ Gate / alerta: si un nodo concentra > threshold del pool
 */
export function vitalTimeConcentration(
  balance: VitalTimeAmount,
  totalSupply: number,
  threshold = 0.05
): boolean {
  return (balance.amount / totalSupply) > threshold
}

/**
 * Crea nodo vital time por defecto para piloto 3 nodos
 */
export function createVitalTimeNode(
  nodeId: 'YOKA' | 'LAUTARO' | 'ISAAC' | 'FELIPE',
  name: string,
  mode: VitalTimeMode = 'postmonetario'
): VitalTimeNode {
  const now = Date.now()
  return {
    nodeId,
    name,
    vitalTimeBalance: {
      amount: 1 / 3,  // Pool dividido equitativamente entre 3 nodos piloto
      unit: 'hr_vital',
      verified: false,
      timestamp: now,
      nodeId,
      triaxialProof: {
        mental: { 
          operatorId: nodeId, 
          timestamp: now, 
          signature: '',
          directExperienceIntegrated: false,
          sharedTracesIntegrated: false
        },
        simulation: { 
          loopEngineSnapshot: { 
            activeLoops: [], 
            gammaCARMIS: { active: false, triggers: 0, reconfigurations: 0, pendingOverloads: 0 }, 
            resonances: [], 
            tickInterval: 1000 
          }, 
          resonanceCheck: false,
          gammaCARMISActive: false,
          coherenceVerified: false,
          noInternalEvasionDetected: true
        },
        laboratory: { 
          eVBodyCheck: false,
          responsibilityAccepted: false,
          uncertaintyAcknowledged: false,
          translationSignature: '',
          betaPerpetuaMode: true
        }
      }
    },
    protectedVitalTime: 0.1,
    lastActivity: now,
    rotationDays: VITAL_TIME_ROTATION_DAYS,
    demurrageRate: VITAL_TIME_DEMURRAGE_RATE,
    triaxialVerificationCount: 0,
    resonanceConnections: [],
    mode: 'postmonetario',
    transductionEnabled: true,
    
    // BT213: Límite Kernel
    kernelLimits: {
      cannotAuditConsciousness: true,
      onlyOrganizesTraces: true,
      classifiesAssertions: 'no-evaluable',
      cannotAccessDirectExperience: true,
      cannotAuditConsciousnessDirectly: true,
      cannotDecideTruth: true,
      cannotInterpretPersons: true,
      cannotDetectInternalEvasion: true,
      cannotDecideTruth: true,
      cannotInterpretPersons: true,
      cannotDetectInternalEvasion: true,
      silenceIsNeutralData: true
    },
    
    // BT214: Humano Artífice
    humanArtificer: {
      role: 'both',
      responsibilityAccepted: false,
      translationSignature: '',
      uncertaintyAcknowledged: false,
      betaPerpetuaMode: true,
      magus: true,
      alchemist: true,
      translationSignature: '',
      kernelDoesNotPayCost: true,
      humanPaysCost: true,
      knowledgeShared: true,
      translationLeavesSignature: true
    },
    
    // BT213: Presencia integra dos dominios
    presenceIntegration: {
      directExperienceVerified: false,
      sharedTracesVerified: false,
      debtGenerated: false,
      lastIntegration: 0
    },
    
    // AFP Pilar 3: Tiempo Vital
    afpVitalTime: {
      consciousEnergy: 0,
      contributionHours: 0,
      nbuCovered: false,
      expandedAccess: false,
      ecoImpact: 0
    },
    
    // BT180: Poder = Tiempo Vital
    powerAsVitalTime: {
      controlsOwnTime: true,
      consentGradients: 0,
      energyFromBelow: true,
      notForSale: true
    },
    
    // BT165: Ecuación Lastre E=V
    ballastEquation: {
      assumedTruth: 0,
      evadedTruth: 0,
      ballast: 0
    },
    
    // BT164: Margen Real Disponible
    realMargin: {
      available: 1,
      evasionReduces: true,
      presenceExpands: true,
      extractionSequesters: true,
      evolutionReorganizes: true,
      threshold: 0,
      lag: 0,
      relationalLag: 0
    },
    
    // BT213: Límite Kernel
    kernelLimits: {
      cannotAuditConsciousness: true,
      onlyOrganizesTraces: true,
      classifiesAssertions: 'no-evaluable',
      cannotAccessDirectExperience: true,
      cannotAuditConsciousnessDirectly: true,
      cannotDecideTruth: true,
      cannotInterpretPersons: true,
      cannotDetectInternalEvasion: true,
      cannotDecideTruth: true,
      cannotInterpretPersons: true,
      cannotDetectInternalEvasion: true,
      silenceIsNeutralData: true
    },
    
    // BT214: Humano Artífice
    humanArtificer: {
      role: 'both',
      responsibilityAccepted: false,
      translationSignature: '',
      uncertaintyAcknowledged: false,
      betaPerpetuaMode: true,
      magus: true,
      alchemist: true,
      translationSignature: '',
      kernelDoesNotPayCost: true,
      humanPaysCost: true,
      knowledgeShared: true,
      translationLeavesSignature: true
    },
    
    // AFP Pilar 3: Tiempo Vital
    afpVitalTime: {
      consciousEnergy: 0,
      contributionHours: 0,
      nbuCovered: false,
      expandedAccess: false,
      ecoImpact: 0
    },
    
    // BT180: Poder = Tiempo Vital
    powerAsVitalTime: {
      controlsOwnTime: true,
      consentGradients: 0,
      energyFromBelow: true,
      notForSale: true
    },
    
    // BT165: Ecuación Lastre E=V
    ballastEquation: {
      assumedTruth: 0,
      evadedTruth: 0,
      ballast: 0
    },
    
    // BT164: Margen Real Disponible
    realMargin: {
      available: 1,
      evasionReduces: true,
      presenceExpands: true,
      extractionSequesters: true,
      evolutionReorganizes: true,
      threshold: 0,
      lag: 0,
      relationalLag: 0
    },
    
    // Campos base existentes
    nodeId: '' as 'YOKA' | 'LAUTARO' | 'ISAAC' | 'FELIPE',
    name: '',
    vitalTimeBalance: {
      amount: 1/3,
      unit: 'hr_vital',
      verified: false,
      timestamp: Date.now(),
      nodeId: '' as 'YOKA' | 'LAUTARO' | 'ISAAC' | 'FELIPE',
      triaxialProof: {
        mental: { 
          operatorId: '', 
          timestamp: 0, 
          signature: '',
          directExperienceIntegrated: false,
          sharedTracesIntegrated: false
        },
        simulation: { 
          loopEngineSnapshot: { 
            activeLoops: [], 
            gammaCARMIS: { active: false, triggers: 0, reconfigurations: 0, pendingOverloads: 0 }, 
            resonances: [], 
            tickInterval: 1000 
          }, 
          resonanceCheck: false,
          gammaCARMISActive: false,
          coherenceVerified: false,
          noInternalEvasionDetected: true
        },
        laboratory: { 
          eVBodyCheck: false,
          responsibilityAccepted: false,
          uncertaintyAcknowledged: false,
          translationSignature: '',
          betaPerpetuaMode: true
        }
      },
      protectedVitalTime: 0.1,
      lastActivity: 0,
      rotationDays: 30,
      demurrageRate: 0.10/365,
      triaxialVerificationCount: 0,
      resonanceConnections: [],
      mode: 'postmonetario',
      transductionEnabled: true
    } as VitalTimeNode
  }
}

/**
 * Verifica si un nodo puede transducir (requiere αʰ > umbral + triaxial)
 */
export function canTransduce(node: VitalTimeNode, minAlphaH = 0.6): boolean {
  return node.vitalTimeBalance.verified && 
         node.triaxialVerificationCount > 0 &&
         node.mode === 'conectado' &&
         node.transductionEnabled
}

/**
 * Display value para UI (adaptada de valueDual.displayValue)
 */
export function displayVitalTime(amount: number, mode: VitalTimeMode): string {
  if (mode === 'postmonetario') {
    return `${Math.round(amount * 100) / 100} hr_vital`
  }
  return `${Math.round(amount * 100) / 100} hr_vital`
}

// ===== NUEVAS FUNCIONES BT213 + BT214 =====

/**
 * BT213: Valida que nodo respeta límite epistemológico kernel
 */
export function validateKernelLimits(node: VitalTimeNode): { valid: boolean; violations: string[] } {
  const violations: string[] = []
  
  if (node.kernelLimits.cannotAuditConsciousness === false) {
    violations.push('VIOLACIÓN BT213: Nodo intenta auditar conciencia')
  }
  if (node.kernelLimits.cannotDecideTruth === false) {
    violations.push('VIOLACIÓN BT213: Nodo intenta decidir verdad')
  }
  if (node.kernelLimits.cannotInterpretPersons === false) {
    violations.push('VIOLACIÓN BT213: Nodo intenta interpretar personas')
  }
  if (node.kernelLimits.cannotDetectInternalEvasion === false) {
    violations.push('VIOLACIÓN BT213: Nodo intenta detectar evasión interna')
  }
  if (!node.kernelLimits.silenceIsNeutralData) {
    violations.push('VIOLACIÓN BT213: Silencio no tratado como dato neutro')
  }
  
  return { valid: violations.length === 0, violations }
}

/**
 * BT214: Valida que operador asume responsabilidad artífice
 */
export function validateArtificerResponsibility(node: VitalTimeNode): { valid: boolean; violations: string[] } {
  const violations: string[] = []
  
  if (!node.humanArtificer.responsibilityAccepted) {
    violations.push('VIOLACIÓN BT214: Operador no ha aceptado responsabilidad indelegable')
  }
  if (!node.humanArtificer.uncertaintyAcknowledged) {
    violations.push('VIOLACIÓN BT214: Operador no ha reconocido incertidumbre estructural')
  }
  if (!node.humanArtificer.betaPerpetuaMode) {
    violations.push('VIOLACIÓN BT214: Operador no acepta Beta Perpetua (corrección continua)')
  }
  if (!node.humanArtificer.translationSignature) {
    violations.push('VIOLACIÓN BT214: Falta firma única del operador (traductionSignature)')
  }
  if (!node.humanArtificer.kernelDoesNotPayCost || !node.humanArtificer.humanPaysCost) {
    violations.push('VIOLACIÓN BT214: Responsabilidad de costo no asumida correctamente')
  }
  
  return { valid: violations.length === 0, violations }
}

/**
 * BT213: Valida integración dos dominios (experiencia + rastros)
 */
export function validateTwoDomainsIntegration(node: VitalTimeNode): { valid: boolean; violations: string[] } {
  const violations: string[] = []
  
  if (!node.presenceIntegration.directExperienceVerified) {
    violations.push('VIOLACIÓN BT213: Experiencia directa no verificada')
  }
  if (!node.presenceIntegration.sharedTracesVerified) {
    violations.push('VIOLACIÓN BT213: Rastros compartidos no verificados')
  }
  if (node.presenceIntegration.debtGenerated) {
    violations.push('ADVERTENCIA BT213: Deuda generada por evasión de un dominio')
  }
  
  return { valid: violations.length === 0, violations }
}

/**
 * AFP Pilar 3: Calcula Tiempo Vital desde contribución consciente
 */
export function calculateAFPVitalTime(contributionHours: number, ecoImpact: number): number {
  // AFP: 1 hora contribución consciente = acceso flujo expandido
  // Eco: impacto positivo en red
  return contributionHours * (1 + ecoImpact * 0.1)
}

/**
 * BT180: Poder = Tiempo Vital - Valida soberanía temporal
 */
export function validateTemporalSovereignty(node: VitalTimeNode): { valid: boolean; violations: string[] } {
  const violations: string[] = []
  
  if (!node.powerAsVitalTime.controlsOwnTime) {
    violations.push('VIOLACIÓN BT180: Nodo no controla su propio tiempo')
  }
  if (!node.powerAsVitalTime.notForSale) {
    violations.push('VIOLACIÓN BT180: Tiempo vital se está vendiendo')
  }
  if (node.powerAsVitalTime.consentGradients < 0.5) {
    violations.push('ADVERTENCIA BT180: Gradientes de consentimiento bajos')
  }
  
  return { valid: violations.length === 0, violations }
}

/**
 * BT165: Calcula ecuación lastre E=V
 */
export function calculateBallastEquation(assumedTruth: number, evadedTruth: number): number {
  if (evadedTruth === 0) return assumedTruth > 0 ? Infinity : 0
  return assumedTruth / evadedTruth
}

/**
 * BT164: Calcula margen real disponible
 */
export function calculateRealMargin(node: VitalTimeNode): number {
  const { available, evasionReduces, presenceExpands, extractionSequesters } = node.realMargin
  let margin = available
  
  if (evasionReduces) margin *= 0.8
  if (presenceExpands) margin *= 1.2
  if (extractionSequesters) margin *= 0.7
  
  return Math.max(0, Math.min(1, margin))
}

/**
 * Validación completa nodo (todas las fuentes)
 */
export function validateVitalTimeNodeComplete(node: VitalTimeNode): {
  valid: boolean
  violations: string[]
  warnings: string[]
} {
  const allViolations: string[] = []
  const warnings: string[] = []
  
  // BT213: Límite kernel
  const kernelCheck = validateKernelLimits(node)
  allViolations.push(...kernelCheck.violations)
  
  // BT214: Responsabilidad artífice
  const artificerCheck = validateArtificerResponsibility(node)
  allViolations.push(...artificerCheck.violations)
  
  // BT213: Dos dominios
  const domainsCheck = validateTwoDomainsIntegration(node)
  allViolations.push(...domainsCheck.violations.filter(v => v.startsWith('VIOLACIÓN')))
  warnings.push(...domainsCheck.violations.filter(v => v.startsWith('ADVERTENCIA')))
  
  // BT180: Soberanía temporal
  const temporalCheck = validateTemporalSovereignty(node)
  allViolations.push(...temporalCheck.violations)
  
  return {
    valid: allViolations.length === 0,
    violations: allViolations,
    warnings
  }
}

export const VITAL_TIME_BT213_BT214_INTEGRATION = {
  // Funciones de validación
  validateKernelLimits,
  validateArtificerResponsibility,
  validateTwoDomainsIntegration,
  calculateAFPVitalTime,
  validateTemporalSovereignty,
  calculateBallastEquation,
  calculateRealMargin,
  validateVitalTimeNodeComplete,
  
  // Referencias
  references: {
    bt213: 'El Límite del Kernel - kernel organiza rastros, no decide verdad',
    bt214: 'El Mago/Alquimista - kernel organiza rastros, humano transforma',
    afp_pilar3: 'AFP Pilar 3 - Tiempo Vital como energía consciente encarnada',
    bt180: 'Poder = Tiempo Vital - quien controla tu tiempo controla tu vida',
    bt165: 'Ecuación Lastre E=V = verdad asumida / verdad evadida',
    bt164: 'Margen Real Disponible - espacio real de trayectorias disponibles',
    bt213: 'Límite Kernel - kernel organiza rastros, no decide verdad',
    bt214: 'Mago/Alquimista - kernel organiza rastros, humano transforma'
  }
} as const