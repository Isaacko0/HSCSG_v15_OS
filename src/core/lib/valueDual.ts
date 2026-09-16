// DeseOS / Contento.pro — Arquitectura Anfibia (ZNU <-> USD <-> hr_vital)
// El nodo opera en tres modos sin duplicar lógica de cálculo.
// La lógica opera sobre `amount` (agnóstico a la unidad); el render decide la etiqueta.

import type { VitalTimeAmount } from './vitalTime'

export type ValueUnit = 'ZNU' | 'USD' | 'hr_vital'
export type NodeMode = 'postmonetario' | 'conectado' | 'vital_time'

export interface Value {
  amount: number
  unit: ValueUnit
}

// Convierte un monto interno (siempre ZNU) a la etiqueta visible según el modo del nodo.
// parity = ZNU -> USDC (oráculo ReFi del Nivel 3). En postmonetario, siempre ZNU.
// En modo vital_time, muestra hr_vital.
export function displayValue(amountZNU: number, mode: NodeMode, parity: number): string {
  if (mode === 'postmonetario') {
    return `${Math.round(amountZNU).toLocaleString('es')} ZNU`
  }
  if (mode === 'vital_time') {
    return `${Math.round(amountZNU).toLocaleString('es')} hr_vital`
  }
  const usd = amountZNU * parity
  return `$${usd.toLocaleString('es', { maximumFractionDigits: 2 })}`
}

// ¿El intercambio es interno (CaaS/ZNU) o externo (ReFi/USD/hr_vital)?
export function isExternal(amountZNU: number, mode: NodeMode): boolean {
  return (mode === 'conectado' || mode === 'vital_time') && amountZNU > 0
}

// Atribución orgánica vs pagada (DeseOS Pagos/Pauta) — agnóstica a unidad.
export interface Attribution {
  organic: number // %
  paid: number    // %
}
export function attributionPct(values: Value[], source: (v: Value) => 'Orgánico' | 'Pagado'): Attribution {
  const total = values.reduce((s, v) => s + v.amount, 0) || 1
  const org = values.filter((v) => source(v) === 'Orgánico').reduce((s, v) => s + v.amount, 0)
  return { organic: Math.round((org / total) * 100), paid: Math.round(((total - org) / total) * 100) }
}

// Medidor de Beneficio Neto (Copaís NBR) reutilizando el termómetro de DeseOS.
// El "revenue" en ZNU es el NBR del nodo.
export function netBenefit(revenueZNU: number, costZNU: number): number {
  return Math.max(0, revenueZNU - costZNU)
}

// ============ ZNU NO-INFLABLE ============
export const ZNU_POOL_TOTAL = 1
export const ZNU_ROTATION_DEFAULT_DAYS = 60

export function znuShare(balance: number, totalSupply: number): number {
  if (totalSupply <= 0) return 0
  return Math.min(1, balance / totalSupply)
}

export function znuRotate(
  balance: number,
  protectedZNU: number,
  daysSinceActivity: number,
  rotationDays: number = 60,
): { active: number; released: number } {
  if (daysSinceActivity < rotationDays) return { active: balance, released: 0 }
  const excess = Math.max(0, balance - protectedZNU)
  const released = excess
  return { active: balance - released, released }
}

export function znuConcentration(balance: number, totalSupply: number, threshold = 0.05): boolean {
  return znuShare(balance, totalSupply) > threshold
}

export function znuDecay(balance: number, ratePerDay: number, daysSinceActivity: number): number {
  if (balance <= 0 || daysSinceActivity <= 0) return balance
  const factor = Math.pow(1 - ratePerDay, daysSinceActivity)
  return Math.round(balance * factor * 1e6) / 1e6
}

// ============ hr_vital (TIEMPO VITAL) ============
// Pool fijo = 1 (totalidad de vida presente), rotación 30 días, decay 10%/año
export const VITAL_TIME_POOL_TOTAL = 1
export const VITAL_TIME_ROTATION_DEFAULT_DAYS = 30
export const VITAL_TIME_DEMURRAGE_RATE = 0.10 / 365

export function vitalTimeShare(balance: number, totalSupply: number): number {
  if (totalSupply <= 0) return 0
  return Math.min(1, balance / totalSupply)
}

export function vitalTimeRotate(
  balance: number | VitalTimeAmount,
  protectedVitalTime: number,
  daysSinceActivity: number,
  rotationDays: number = 30,
): { active: number | VitalTimeAmount; released: number } {
  const amount = typeof balance === 'number' ? balance : balance.amount
  if (daysSinceActivity < rotationDays) return { active: balance, released: 0 }
  const excess = Math.max(0, amount - protectedVitalTime)
  const released = excess
  const newAmount = amount - released
  
  if (typeof balance === 'number') {
    return { active: newAmount, released }
  }
  return { active: { ...balance, amount: newAmount }, released }
}

export function vitalTimeDecay(
  balance: number | VitalTimeAmount,
  ratePerDay: number,
  daysSinceActivity: number
): number | VitalTimeAmount {
  const amount = typeof balance === 'number' ? balance : balance.amount
  if (amount <= 0 || daysSinceActivity <= 0) return balance
  const factor = Math.pow(1 - ratePerDay, daysSinceActivity)
  const newAmount = Math.round(amount * factor * 1e6) / 1e6
  
  if (typeof balance === 'number') {
    return newAmount
  }
  return { ...balance, amount: newAmount }
}

export function vitalTimeConcentration(balance: number, totalSupply: number, threshold = 0.05): boolean {
  if (totalSupply <= 0) return false
  return (balance / totalSupply) > threshold
}

// Funciones de display para modo vital_time
export function displayVitalTime(amount: number): string {
  return `${Math.round(amount * 100) / 100} hr_vital`
}

export function displayValueUnified(amount: number, mode: 'postmonetario' | 'conectado' | 'vital_time', parity: number): string {
  if (mode === 'postmonetario') {
    return `${Math.round(amount).toLocaleString('es')} ZNU`
  }
  if (mode === 'vital_time') {
    return `${Math.round(amount * 100) / 100} hr_vital`
  }
  const usd = amount * parity
  return `$${usd.toLocaleString('es', { maximumFractionDigits: 2 })}`
}