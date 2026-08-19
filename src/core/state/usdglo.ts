// HSCSG v15 OS — usdglo: oráculo de paridad USDGLO (Glo Foundation) para Nivel 3 ReFi anfibio
// Extirpado: red mainnet/Polygon/Celo, Defender/Relayer/Hardhat (tooling de despliegue).
// Conservado: patrón stablecoin con propósito (roles MINTER/PAUSER/DENYLISTER, cap emisión, denylist).
// Isomorfo a hscsg-monetary-integration (G1/Túmin/PAR) + ZNU postmonetario + Leyes MJ.
export type UsdgloRole = 'admin' | 'minter' | 'pauser' | 'denylister' | 'upgrader'

export interface UsdgloState {
  // En modo conectado, USDGLO es el oráculo de paridad (1 USDGLO ≈ 1 USD fiduciario).
  priceParity: number // USD por 1 ZNU (oráculo); default 0 en offline (ZNU es la unidad)
  connected: boolean // false = offline (ZNU soberano); true = conectado (oráculo USDGLO)
  maxSupply: number // cap de emisión (invariant sumOfBalances <= maxAllowed)
  paused: boolean // PAUSER_ROLE: pausa de malla ante sobrecarga (γ-CARMIS)
  denylist: string[] // actores dañinos (Kleros, Ley I MJ)
  totalSupply: number
}

export function makeUsdgloState(): UsdgloState {
  return { priceParity: 0, connected: false, maxSupply: 1_000_000_000, paused: false, denylist: [], totalSupply: 0 }
}

// Modo offline: ZNU es la unidad soberana (sin oráculo). Modo conectado: usa USDGLO como paridad.
export function setMode(st: UsdgloState, connected: boolean): UsdgloState {
  return { ...st, connected, priceParity: connected ? 1 : 0 }
}

// Emisión por contribución (Ley II MJ): solo MINTER_ROLE, respetando cap (invariant).
export function mint(st: UsdgloState, to: string, amount: number): UsdgloState {
  if (st.paused) return st // PAUSER_ROLE
  if (st.denylist.includes(to)) return st // DENYLISTER_ROLE
  if (st.totalSupply + amount > st.maxSupply) return st // invariant sumOfBalances
  return { ...st, totalSupply: st.totalSupply + amount }
}

// Denylist de actor dañino (justicia/restauración, Ley I MJ).
export function denylist(st: UsdgloState, actor: string): UsdgloState {
  if (st.denylist.includes(actor)) return st
  return { ...st, denylist: [...st.denylist, actor] }
}

// Conversión ZNU <-> USD vía oráculo USDGLO (anfibio). En offline, 1 ZNU = 1 ZNU (sin USD).
export function znuToUsd(st: UsdgloState, znu: number): number {
  return st.connected ? znu * st.priceParity : znu // offline: valor en ZNU
}
export function usdToZnu(st: UsdgloState, usd: number): number {
  return st.connected && st.priceParity > 0 ? usd / st.priceParity : usd
}
