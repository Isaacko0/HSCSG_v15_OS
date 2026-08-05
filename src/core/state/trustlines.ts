// HSCSG v15 OS — Tipos del módulo Trustlines (asimilado de trustlines-protocol/contracts)
// Crédito mutuo ZNU entre pares, isomorfo a CurrencyNetwork/DebtTracking.sol.

export interface Trustline {
  id: string
  a: string // miembro
  b: string // contraparte
  creditGiven: number // línea que `a` otorga a `b`
  creditReceived: number // línea que `a` recibe de `b`
  interestRate: number // interés por deuda (regenerativo, no usura)
}

// deuda[a][b] = deuda neta de a hacia b (positiva = a debe a b)
// getDebt(a,b) = -getDebt(b,a)  (simétrica, como en DebtTracking.sol)
export interface TrustState {
  trustlines: Trustline[]
  debts: Record<string, Record<string, number>> // debts[a][b]
  transfers: TrustTransfer[]
}

export interface TrustTransfer {
  id: string
  path: string[] // [deudor ... acreedor]
  value: number
  fee: number
  ts: number
}
