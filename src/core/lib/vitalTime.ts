// HSCSG v15 OS — Moneda Tiempo Vital (hr_vital)
// Extiende valueDual.ts con arquitectura anfibia para tiempo vital
// Basada en BT215 §15-16 + Sistema Alráico (PI, γ-CARMIS, Triaxial, Transducción F)

import type { ValueUnit, NodeMode } from './valueDual'

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

// Prueba Triaxial (Alráico Capa 0)
export interface TriaxialProof {
  mental: {                         // Entendimiento consciente
    operatorId: string
    timestamp: number
    signature: string               // Firma del operador: "reconozco esta presencia"
  }
  simulation: {                     // Modelo computacional
    loopEngineSnapshot: LoopEngineState  // Estado loops + γ-CARMIS
    resonanceCheck: boolean                 // Resonancia con otros nodos
  }
  laboratory: {                     // Verificación en cuerpo (Lab)
    biometricHash?: string          // Hash de biométrica anonimizada (opcional)
    eVBodyCheck: boolean            // E=V verificable en cuerpo (autorreporte + testigo)
    witnessNodeId?: string          // Nodo testigo opcional (LAUTARO para ISAAC, etc.)
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
}

// Pool de Tiempo Vital (Análogo a ZNU_POOL_TOTAL)
export const VITAL_TIME_POOL_TOTAL = 1          // Pool fijo = 1 (totalidad de vida presente)
export const VITAL_TIME_ROTATION_DAYS = 30      // Rotación más rápida que ZNU (30 vs 60 días)
export const VITAL_TIME_DEMURRAGE_RATE = 0.10 / 365  // 10%/año decay por inactividad

// Nodo con Tiempo Vital
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
        mental: { operatorId: nodeId, timestamp: now, signature: '' },
        simulation: { loopEngineSnapshot: { activeLoops: [], gammaCARMIS: { active: false, triggers: 0, reconfigurations: 0, pendingOverloads: 0 }, resonances: [], tickInterval: 1000 }, resonanceCheck: false },
        laboratory: { eVBodyCheck: false }
      }
    },
    protectedVitalTime: 0.1,  // 10% protegido de rotación
    lastActivity: now,
    rotationDays: VITAL_TIME_ROTATION_DAYS,
    demurrageRate: VITAL_TIME_DEMURRAGE_RATE,
    triaxialVerificationCount: 0,
    resonanceConnections: [],
    mode,
    transductionEnabled: true
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
  // En modo conectado, mostrar hr_vital + equivalencia TQ si transductionEnabled
  return `${Math.round(amount * 100) / 100} hr_vital`
}