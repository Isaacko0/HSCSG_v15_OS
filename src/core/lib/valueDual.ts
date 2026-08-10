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

// Medidor de Beneficio Neto (Copiosis NBR) reutilizando el termómetro de DeseOS.
// El "revenue" en ZNU es el NBR del nodo.
export function netBenefit(revenueZNU: number, costZNU: number): number {
  return Math.max(0, revenueZNU - costZNU)
}
