// DeseOS / Contento.pro — Método de agencia del nodo (lógica pura, offline-first)
// Asimilado de DeseOS_project1 (Soul.MBA). Sin infra ajena (Stripe/GA/ad-networks).

// ============ BranDNA (12 secciones obligatorias) ============
export const BRANDNA_SECTIONS = [
  { key: 'proposito', label: 'Propósito' },
  { key: 'villano', label: 'Villano' },
  { key: 'promesa', label: 'Promesa' },
  { key: 'metodo', label: 'Método' },
  { key: 'voz', label: 'Voz' },
  { key: 'estetica', label: 'Estética' },
  { key: 'audiencia', label: 'Audiencia ideal' },
  { key: 'diferenciador', label: 'Diferenciador' },
  { key: 'historia', label: 'Historia' },
  { key: 'prueba', label: 'Prueba social' },
  { key: 'transformacion', label: 'Transformación' },
  { key: 'siguiente', label: 'Siguiente paso' },
] as const
export type BrandDNAKey = (typeof BRANDNA_SECTIONS)[number]['key']

// ============ Escalera 5M (catálogo de bienes del nodo) ============
export interface Offer {
  id: string
  name: string
  tier: 'Magnet' | 'Mini' | 'Core' | 'Mastermind' | 'Mentorship'
  znuPrice: number   // precio en ZNU (postmonetario) — anfibio
  usdPrice: number   // precio en USD (modo conectado) — ref de paridad
  desc: string
}
export const OFFER_LADDER: Offer[] = [
  { id: 'magnet', name: 'Magnet (lead magnet)', tier: 'Magnet', znuPrice: 0, usdPrice: 0, desc: 'Contenido de entrada, gratis' },
  { id: 'mini', name: 'Mini curso', tier: 'Mini', znuPrice: 300, usdPrice: 29, desc: 'Primer compromiso de valor' },
  { id: 'core', name: 'Cohorte Core', tier: 'Core', znuPrice: 8000, usdPrice: 497, desc: 'Programa principal del nodo' },
  { id: 'master', name: 'Mastermind', tier: 'Mastermind', znuPrice: 20000, usdPrice: 1500, desc: 'Círculo íntimo de pares' },
  { id: 'mentor', name: 'Mentorship 1:1', tier: 'Mentorship', znuPrice: 50000, usdPrice: 3500, desc: 'Acompañamiento directo' },
]

// ============ ICP Builder (5 niveles de consciencia) ============
export const ICP_AWARENESS = [
  { level: 1, key: 'inconsciente', label: 'Inconsciente del problema' },
  { level: 2, key: 'consciente', label: 'Consciente del problema' },
  { level: 3, key: 'solucion', label: 'Consciente de la solución' },
  { level: 4, key: 'producto', label: 'Consciente del producto' },
  { level: 5, key: 'listo', label: 'Listo para comprar' },
] as const
export type ICPLevel = (typeof ICP_AWARENESS)[number]['level']

export interface ICPProfile {
  id: string
  name: string
  awareness: ICPLevel
  jtbd: string      // job-to-be-done
  trigger: string   // disparador
  heaven: string
  hell: string
}

// ============ Strategic Brain (planificación inversa) ============
export interface StrategicPlan {
  meta: number       // ingreso objetivo (ZNU)
  leads: number
  alcance: number
  piezas: number
  inversion: number  // ZNU (o USD en modo conectado)
}
export function reversePlan(meta: number, conversion = 0.02, cpl = 50): StrategicPlan {
  const leads = Math.ceil(meta > 0 ? leadsFor(meta, conversion) : 0)
  const alcance = Math.ceil(leads / 0.03)
  const piezas = Math.ceil(alcance / 5000)
  const inversion = leads * cpl
  return { meta, leads, alcance, piezas, inversion }
}
function leadsFor(meta: number, conv: number): number {
  // asume ticket promedio 8000 ZNU
  const ticket = 8000
  return Math.ceil(meta / ticket / conv)
}

// ============ Estado inicial ============
export interface AgenciaState {
  brand: Record<BrandDNAKey, string>
  offers: Offer[]
  icps: ICPProfile[]
  plan: StrategicPlan
}
export function makeAgenciaState(): AgenciaState {
  return {
    brand: {
      proposito: '', villano: '', promesa: '', metodo: '', voz: '', estetica: '',
      audiencia: '', diferenciador: '', historia: '', prueba: '', transformacion: '', siguiente: '',
    },
    offers: OFFER_LADDER,
    icps: [],
    plan: reversePlan(80000),
  }
}
