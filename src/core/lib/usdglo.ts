// HSCSG v15 OS — usdglo (lib): lógica pura del oráculo USDGLO (ReFi Nivel 3 anfibio)
// No importa red externa. Conserva: roles de emisión, cap, denylist, paridad ZNU<->USD.
import type { UsdgloState } from '@core/state/usdglo'

/** ¿Emisión respetando invariantes? (no pausado, no denylist, bajo cap) */
export function canMint(st: UsdgloState, to: string, amount: number): boolean {
  return !st.paused && !st.denylist.includes(to) && st.totalSupply + amount <= st.maxSupply
}

/** Headroom de emisión (invariant sumOfBalances) */
export function mintHeadroom(st: UsdgloState): number {
  return Math.max(0, st.maxSupply - st.totalSupply)
}

/** ¿Modo soberano (offline) o conectado (oráculo USDGLO)? */
export function isSovereign(st: UsdgloState): boolean {
  return !st.connected
}

/** Denylist activo (justicia Ley I MJ) */
export function denylistedActors(st: UsdgloState): string[] {
  return st.denylist
}
