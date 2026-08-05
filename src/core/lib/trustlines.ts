// HSCSG v15 OS — Lógica del módulo Trustlines (asimilado de trustlines-protocol/contracts)
// Réplica fiel de DebtTracking.sol + CurrencyNetwork.debitTransfer, sobre ZNU y en local (sin EVM).
// Crédito mutuo: sin emisor central, la deuda es bilateral y simétrica. Isomorfo a MJ.

import type { TrustState, Trustline, TrustTransfer } from '@core/state/trustlines'

const uid = () => Math.random().toString(36).slice(2, 9)

// getDebt(a,b) = -getDebt(b,a)  (como DebtTracking.getDebt)
export function getDebt(debts: Record<string, Record<string, number>>, a: string, b: string): number {
  if (a === b) return 0
  if (debts[a]?.[b] != null) return debts[a][b]
  if (debts[b]?.[a] != null) return -debts[b][a]
  return 0
}

// reduce o aumenta la deuda de a hacia b de forma simétrica
function setDebt(
  debts: Record<string, Record<string, number>>, a: string, b: string, delta: number,
): Record<string, Record<string, number>> {
  const next = structuredCloneSafe(debts)
  if (!next[a]) next[a] = {}
  if (!next[b]) next[b] = {}
  next[a][b] = (next[a][b] ?? 0) + delta
  next[b][a] = (next[b][a] ?? 0) - delta
  // limpiar ceros
  if (next[a][b] === 0) delete next[a][b]
  if (next[b][a] === 0) delete next[b][a]
  return next
}

function structuredCloneSafe<T>(o: T): T {
  return JSON.parse(JSON.stringify(o))
}

// increaseDebt(a -> creditor, value)  (como DebtTracking.increaseDebt)
export function increaseDebt(
  debts: Record<string, Record<string, number>>, a: string, creditor: string, value: number,
): Record<string, Record<string, number>> {
  return setDebt(debts, a, creditor, value)
}

// reduceDebt(a -> creditor, value)  (como DebtTracking._reduceDebt)
export function reduceDebt(
  debts: Record<string, Record<string, number>>, a: string, creditor: string, value: number,
): Record<string, Record<string, number>> {
  return setDebt(debts, a, creditor, -value)
}

export function openTrustline(
  a: string, b: string, creditGiven: number, creditReceived: number, interestRate: number,
): Trustline {
  return { id: uid(), a, b, creditGiven, creditReceived, interestRate }
}

// crédito usado = deuda neta de a hacia b (si a debe a b)
export function creditUsed(debts: Record<string, Record<string, number>>, a: string, b: string): number {
  const d = getDebt(debts, a, b)
  return d > 0 ? d : 0
}

// debitTransfer: el ACREEDOR (último de la ruta) inicia; reduce deuda a lo largo de la ruta.
// Valida que cada tramo tenga deuda suficiente (enrutado por la red de trustlines).
export function debitTransfer(
  st: TrustState, path: string[], value: number, maxFee = 0,
): { ok: boolean; error?: string; debts?: Record<string, Record<string, number>>; transfer?: TrustTransfer } {
  if (path.length < 2) return { ok: false, error: 'Ruta inválida (mínimo 2 nodos)' }
  // el último es el acreedor que inicia (msg.sender en el contrato)
  let debts = st.debts
  // recorrer la ruta: cada tramo (path[i] -> path[i+1]) debe tener deuda path[i]→path[i+1] >= value
  for (let i = 0; i < path.length - 1; i++) {
    const from = path[i]
    const to = path[i + 1]
    const d = getDebt(debts, from, to)
    if (d < value) {
      return { ok: false, error: `Sin deuda suficiente en tramo ${from}→${to} (deuda ${d}, requiere ${value})` }
    }
    debts = reduceDebt(debts, from, to, value)
  }
  if (maxFee < 0) return { ok: false, error: 'Fee negativo' }
  const transfer: TrustTransfer = { id: uid(), path: [...path], value, fee: maxFee, ts: Date.now() }
  return { ok: true, debts, transfer }
}
