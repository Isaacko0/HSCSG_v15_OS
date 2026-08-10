// Gaia Confederation — lógica pura de gobernanza biomimética (offline-first, sin EVM)
// Asimilado del White Paper gaiaunion.com. Extirpado: blockchain/DLT, IPFS/SSI cripto.

// ============ Círculos biomiméticos (límites Dunbar) ============
export interface CircleTier {
  key: 'atomo' | 'circulo' | 'comunidad' | 'bioregion' | 'confederacion'
  label: string
  min: number
  max: number
  note: string
}
export const CIRCLE_TIERS: CircleTier[] = [
  { key: 'atomo', label: 'Átomo / Célula', min: 1, max: 1, note: 'Humano como micro-organismo de Gaia' },
  { key: 'circulo', label: 'Círculo / Holón', min: 3, max: 13, note: 'Confianza íntima (familia extendida)' },
  { key: 'comunidad', label: 'Comunidad / BioHábitat', min: 13, max: 150, note: 'Dunbar: límite cognitivo de relaciones estables' },
  { key: 'bioregion', label: 'BioRegión / Federación', min: 144, max: 10000, note: 'Órganos especializados del ecosistema' },
  { key: 'confederacion', label: 'Confederación', min: 10000, max: Infinity, note: 'Macro-organismo vivo (red de nodos)' },
]

// Clasifica un tamaño de grupo en su tier biomimétrico
export function classifyCircle(size: number): CircleTier {
  return CIRCLE_TIERS.find((t) => size >= t.min && size <= t.max) ?? CIRCLE_TIERS[CIRCLE_TIERS.length - 1]
}

// ============ Múltiples capitales (Gaia) ============
export type CapitalKind = 'natural' | 'social' | 'cultural' | 'espiritual' | 'experiencial' | 'intelectual'
export const CAPITAL_KINDS: { key: CapitalKind; label: string }[] = [
  { key: 'natural', label: 'Natural' },
  { key: 'social', label: 'Social' },
  { key: 'cultural', label: 'Cultural' },
  { key: 'espiritual', label: 'Espiritual' },
  { key: 'experiencial', label: 'Experiencial' },
  { key: 'intelectual', label: 'Intelectual' },
]

// ============ Métricas de regeneración (KPI del nodo) ============
export interface RegenMetrics {
  ecosystemHealth: number   // 0-100
  communityWellbeing: number // 0-100
  systemicResilience: number // 0-100
}
export function regenScore(m: RegenMetrics): number {
  return Math.round((m.ecosystemHealth + m.communityWellbeing + m.systemicResilience) / 3)
}

// ============ Bounty System (misiones del nodo) ============
export interface Bounty {
  id: string
  title: string
  need: string
  znuReward: number
  done: boolean
  by?: string
}
export function addBounty(list: Bounty[], b: Bounty): Bounty[] {
  return [...list, b]
}
export function completeBounty(list: Bounty[], id: string): Bounty[] {
  return list.map((b) => (b.id === id ? { ...b, done: true } : b))
}

// ============ Wisdom Council (capa humana sobre Kleros) ============
export interface WisdomCouncil {
  id: string
  topic: string
  members: string[]
  resolved: boolean
}
export function formCouncil(list: WisdomCouncil[], topic: string, members: string[]): WisdomCouncil[] {
  return [...list, { id: `wc-${Date.now()}`, topic, members, resolved: false }]
}

// ============ Estado inicial ============
export interface GaiaState {
  circles: { id: string; name: string; size: number }[]
  capitals: Record<CapitalKind, number>
  metrics: RegenMetrics
  bounties: Bounty[]
  councils: WisdomCouncil[]
}
export function makeGaiaState(): GaiaState {
  return {
    circles: [{ id: 'c0', name: 'Nodo Cosateca', size: 1 }],
    capitals: { natural: 0, social: 0, cultural: 0, espiritual: 0, experiencial: 0, intelectual: 0 },
    metrics: { ecosystemHealth: 50, communityWellbeing: 50, systemicResilience: 50 },
    bounties: [],
    councils: [],
  }
}
