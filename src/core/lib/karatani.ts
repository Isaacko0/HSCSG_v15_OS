// Karatani — Modos de Intercambio
// Fuente: teoria HSCSG.md (Vault Obsidian del usuario)
// Última actualización: 2026-08-22

export type ModoIntercambio = 'A' | 'B' | 'C' | 'D'

export interface ModoIntercambioData {
  id: ModoIntercambio
  nombre: string
  principio: string
  sociedad: string
  descripcion: string
}

export const MODOS_INTERCAMBIO: ModoIntercambioData[] = [
  {
    id: 'A',
    nombre: 'Reciprocidad',
    principio: 'Don y contradón',
    sociedad: 'Sociedad primitiva clánica, comunidad agrícola, nación',
    descripcion: 'Basado en el don y el contradón, es el principio constitutivo de la sociedad primitiva clánica y, posteriormente, de la comunidad agrícola y la nación.'
  },
  {
    id: 'B',
    nombre: 'Redistribución',
    principio: 'Sumisión y protección (saqueo y redistribución)',
    sociedad: 'Estado, sociedades jerárquicas premodernas',
    descripcion: 'Basado en la sumisión y protección (o saqueo y redistribución), es el principio del Estado y las sociedades jerárquicas premodernas.'
  },
  {
    id: 'C',
    nombre: 'Mercancía',
    principio: 'Intercambio de mercancías y dinero',
    sociedad: 'Sociedad capitalista moderna',
    descripcion: 'Basado en el intercambio de mercancías y dinero, es el modo predominante de la sociedad capitalista moderna.'
  },
  {
    id: 'D',
    nombre: 'Libertad',
    principio: 'Reciprocidad de la libertad, retorno del nomadismo',
    sociedad: 'Comunismo, sociedad X (futuro)',
    descripcion: 'Un modo hipotético o futuro que supera a los anteriores, caracterizado por la reciprocidad de la libertad y el retorno del nomadismo originario, asociado con el comunismo o la sociedad X.'
  }
]

export const MODOS_INTERCAMBIO_MAP: Record<ModoIntercambio, ModoIntercambioData> = {
  A: MODOS_INTERCAMBIO[0],
  B: MODOS_INTERCAMBIO[1],
  C: MODOS_INTERCAMBIO[2],
  D: MODOS_INTERCAMBIO[3]
}

export function getModoIntercambio(id: ModoIntercambio): ModoIntercambioData {
  return MODOS_INTERCAMBIO_MAP[id]
}

export function getModoHSCSG(): ModoIntercambioData {
  return MODOS_INTERCAMBIO_MAP.D
}

export function getTriadaModerna(): { capital: ModoIntercambioData; estado: ModoIntercambioData; nacion: ModoIntercambioData } {
  return {
    capital: MODOS_INTERCAMBIO_MAP.C,
    estado: MODOS_INTERCAMBIO_MAP.B,
    nacion: MODOS_INTERCAMBIO_MAP.A
  }
}
