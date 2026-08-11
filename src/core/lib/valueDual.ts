// DeseOS / Contento.pro — Arquitectura Anfibia (ZNU <-> USD)
// El nodo opera en dos modos sin duplicar lógica de cálculo.
// La lógica de DeseOS opera sobre `amount` (agnóstico a la unidad);
// el render decide la etiqueta vía displayValue().

export type ValueUnit = 'ZNU' | 'USD'
export type NodeMode = 'postmonetario' | 'conectado'

export interface Value {
  amount: number
  unit: ValueUnit
}

// Convierte un monto interno (siempre ZNU) a la etiqueta visible según el modo del nodo.
// parity = ZNU -> USDC (oráculo ReFi del Nivel 3). En postmonetario, siempre ZNU.
export function displayValue(amountZNU: number, mode: NodeMode, parity: number): string {
  if (mode === 'postmonetario') {
    return `${Math.round(amountZNU).toLocaleString('es')} ZNU`
  }
  const usd = amountZNU * parity
  return `$${usd.toLocaleString('es', { maximumFractionDigits: 2 })}`
}

// ¿El intercambio es interno (CaaS/ZNU) o externo (ReFi/USD)?
export function isExternal(amountZNU: number, mode: NodeMode): boolean {
  return mode === 'conectado' && amountZNU > 0
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

// ============ ZNU NO-INFLABLE (iambrainstorming: "moneda que cuenta para la unidad") ============
// Inspirado en "Going away with money and making a currency that counts to unity always" (Amiya Tulu, 2016).
// El pool total es FIJO (=1 o 100%), no crece. Se divide en fracciones para productos/servicios.
// No se puede "imprimir" ZNU; la riqueza se redistribuye por contribución, no por acumulación.

export const ZNU_POOL_TOTAL = 1 // el total siempre es 1 (o 100%); nunca se incrementa
export const ZNU_ROTATION_DEFAULT_DAYS = 60 // exchange money caduca (~2 meses, ver "Future of Money")

/** Fracción de un nodo sobre el pool total (siempre suma <= 1). */
export function znuShare(balance: number, totalSupply: number): number {
  if (totalSupply <= 0) return 0
  return Math.min(1, balance / totalSupply)
}

/**
 * Rotación anti-acumulación: el "exchange ZNU" caduca y debe reactivarse.
 * Si pasan > rotationDays desde la última actividad, el exceso sobre lo protegido
 * se libera de vuelta al pool (no se destruye, se redistribuye).
 */
export function znuRotate(
  balance: number,
  protectedZNU: number,
  daysSinceActivity: number,
  rotationDays: number = ZNU_ROTATION_DEFAULT_DAYS,
): { active: number; released: number } {
  if (daysSinceActivity < rotationDays) return { active: balance, released: 0 }
  const excess = Math.max(0, balance - protectedZNU)
  // libera el exceso al pool (anti-acumulación de Amiya)
  const released = excess
  return { active: balance - released, released }
}

/** ¿El balance está concentrado (anti-propósito de la moneda)? Útil para MJ Gate / alerta. */
export function znuConcentration(balance: number, totalSupply: number, threshold = 0.05): boolean {
  return znuShare(balance, totalSupply) > threshold
}

/**
 * Decay por inactividad (P1): el ZNU pierde poder adquisitivo con el tiempo si no se
 * ejerce (anti-acumulación de Amiya + "use-it-or-lose-it"). Aislado de Symbiosky
 * (cuya convicción es un score distinto, no el balance del pool).
 * `rate` = fracción por día (ej. 5%/año ≈ 0.000137/día). Devuelve balance post-decay.
 */
export function znuDecay(balance: number, ratePerDay: number, daysSinceActivity: number): number {
  if (balance <= 0 || daysSinceActivity <= 0) return balance
  const factor = Math.pow(1 - ratePerDay, daysSinceActivity)
  return Math.round(balance * factor * 1e6) / 1e6
}
