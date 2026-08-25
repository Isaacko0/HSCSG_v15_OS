// Fases 0→E — Hoja de Ruta MJ
// Fuente: HSCSG_MJ_SYNTHESIS_v15.md §7 (Vault Obsidian del usuario)
// Última actualización: 2026-08-22

export type FaseId = '0' | 'A' | 'B' | 'C' | 'D' | 'E'

export interface FaseHojaRuta {
  id: FaseId
  nombre: string
  condicionEntrada: string
  entregable: string
  duracion: string
}

export const FASES_HojaRuta: FaseHojaRuta[] = [
  {
    id: '0',
    nombre: 'BASE MATERIAL',
    condicionEntrada: 'Decisión de empezar + 2 socios + 5k USDC',
    entregable: 'Tierra + Agua + Microgrid v0.1 + FABSHIP v0.1 + Huerta 200m²',
    duracion: '90 días (3 ciclos)'
  },
  {
    id: 'A',
    nombre: 'COLECTIVO ONTOGENÉTICO v0.1',
    condicionEntrada: 'Fase 0 completada + PVSO Ciclo 1 ≥ targets',
    entregable: '5-10 miembros + CDS + ValueFlows + Autómata v0.1 + Talents base',
    duracion: '90 días'
  },
  {
    id: 'B',
    nombre: 'NODO COSATECA v1.0',
    condicionEntrada: 'Fase A completada + PVSO Ciclo 2 ≥ PGS 1.5',
    entregable: 'Micro-SaaS real + AI Wrapper entrenado + 3 auditorías vendidas + Revenue Demo v0.1',
    duracion: '180 días'
  },
  {
    id: 'C',
    nombre: 'NODO INTEGRAL MADURO',
    condicionEntrada: 'Fase B completada + PVSO Ciclo 3 ≥ PGS 2.0',
    entregable: 'PGS ≥ 2.5 + η > 0.5 + ξ > 0.1 + IVC ≥ 0.5 + MCI ≥ 1.5 + 1 federación',
    duracion: '360 días'
  },
  {
    id: 'D',
    nombre: 'FEDERACIÓN ONTOGENÉTICA',
    condicionEntrada: 'Fase C + 2 nodos v1.0 + η_fed > max+0.1',
    entregable: '3+ nodos federados + REO compartida + Autómata hijos + PMRTE ≥ 2.0',
    duracion: '720 días'
  },
  {
    id: 'E',
    nombre: 'ARQUITECTURA CIVILIZATORIA',
    condicionEntrada: 'Fase D operando 2+ años + datos de campo 5+ años',
    entregable: 'G1/Túmin/PAR/ROE integrados + ZCS madura + IVC ≥ 0.85 real',
    duracion: '7 generaciones'
  }
]

export const FASES_HojaRuta_MAP: Record<FaseId, FaseHojaRuta> = {
  '0': FASES_HojaRuta[0],
  'A': FASES_HojaRuta[1],
  'B': FASES_HojaRuta[2],
  'C': FASES_HojaRuta[3],
  'D': FASES_HojaRuta[4],
  'E': FASES_HojaRuta[5]
}

export function getFaseHojaRuta(id: FaseId): FaseHojaRuta {
  return FASES_HojaRuta_MAP[id]
}

export function getFaseSiguiente(actual: FaseId): FaseHojaRuta | undefined {
  const orden: FaseId[] = ['0', 'A', 'B', 'C', 'D', 'E']
  const idx = orden.indexOf(actual)
  if (idx === -1 || idx === orden.length - 1) return undefined
  return FASES_HojaRuta_MAP[orden[idx + 1]]
}

export function puedeAccederFase(fase: FaseId, completadas: FaseId[]): boolean {
  const orden: FaseId[] = ['0', 'A', 'B', 'C', 'D', 'E']
  const idx = orden.indexOf(fase)
  if (idx === 0) return true
  const faseAnterior = orden[idx - 1]
  return completadas.includes(faseAnterior)
}
