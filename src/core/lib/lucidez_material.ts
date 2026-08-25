// Lucidez Material — Pirámide de 4 niveles
// Fuente: HSCSG_MJ_SYNTHESIS_v15.md (Vault Obsidian del usuario)
// Última actualización: 2026-08-22

export type NivelLucidez = 0 | 1 | 2 | 3

export interface NivelLucidezMaterial {
  id: NivelLucidez
  nombre: string
  descripcion: string
  metricas: string[]
  herramientas: string[]
  condicionEntrada: string
  duracionDias: number
}

export const NIVELES_LUCIDEZ: NivelLucidezMaterial[] = [
  {
    id: 0,
    nombre: 'BASE MATERIAL INMEDIATA',
    descripcion: 'Micro real: Tierra · Agua · Energía · Comida · Herramientas · Cuerpos',
    metricas: ['AUT_ALIM ≥ 2.5', 'AUT_ENER ≥ 2.5', 'AUT_HABI ≥ 2.0'],
    herramientas: ['FABSHIP', 'Huerta', 'Microgrid', 'Botica viva'],
    condicionEntrada: 'Decisión de empezar + 2 socios + 5k USDC',
    duracionDias: 90
  },
  {
    id: 1,
    nombre: 'COLECTIVO ONTOGENÉTICO OPERATIVO',
    descripcion: 'Meso real: CDS funcional · ValueFlows circulando · Autómata v0.5+',
    metricas: ['PGS ≥ 2.0', 'ICS ≥ 0.6', 'η > 0.5', 'ξ > 0'],
    herramientas: ['Micro-SaaS', 'AI Wrapper', 'Productized Services'],
    condicionEntrada: 'Nivel 0 ≥ 2.5 sostenido 90 días',
    duracionDias: 180
  },
  {
    id: 2,
    nombre: 'FEDERACIÓN DE NODOS SOBERANOS',
    descripcion: 'Macro real: Federación ontogenética · REO compartida · Autómata hijos',
    metricas: ['η_fed > max(η)+0.1', 'ξ_fed > Σξ+0.1', 'PMRTE ≥ 2.0'],
    herramientas: ['DTN cuántica', 'FV v2', 'RAO federado'],
    condicionEntrada: 'Nivel 1 ≥ 2.0 sostenido 180 días',
    duracionDias: 365
  },
  {
    id: 3,
    nombre: 'ARQUITECTURA CIVILIZATORIA',
    descripcion: 'Discurso legítimo: G1/Túmin/PAR/ROE integrados · ZCS madura',
    metricas: ['PGS ≥ 3.0', 'IVC ≥ 0.85', 'MCI ≥ 3.0', 'ROE Alignment ≥ 70%'],
    herramientas: ['G1/Túmin/PAR/ROE', 'ZCS madura', 'Revenue Demo'],
    condicionEntrada: 'Nivel 2 operando 365 días',
    duracionDias: 2555
  }
]

export const NIVELES_LUCIDEZ_MAP: Record<NivelLucidez, NivelLucidezMaterial> = {
  0: NIVELES_LUCIDEZ[0],
  1: NIVELES_LUCIDEZ[1],
  2: NIVELES_LUCIDEZ[2],
  3: NIVELES_LUCIDEZ[3]
}

export function getNivelLucidez(id: NivelLucidez): NivelLucidezMaterial {
  return NIVELES_LUCIDEZ_MAP[id]
}

export function evaluarPosicionJerarquica(params: {
  tieneTierra: boolean
  tieneColectivo: boolean
  tieneFederacion: boolean
  tieneDiscurso: boolean
}): NivelLucidez {
  if (params.tieneDiscurso) return 3
  if (params.tieneFederacion) return 2
  if (params.tieneColectivo) return 1
  if (params.tieneTierra) return 0
  return 0
}

export function puedeAccederNivelActual(nivelActual: NivelLucidez, metricas: {
  autAlim?: number
  autEner?: number
  autHabi?: number
  pgs?: number
  ics?: number
  eta?: number
  xi?: number
}): boolean {
  switch (nivelActual) {
    case 0:
      return (metricas.autAlim ?? 0) >= 2.5 && (metricas.autEner ?? 0) >= 2.5 && (metricas.autHabi ?? 0) >= 2.0
    case 1:
      return (metricas.pgs ?? 0) >= 2.0 && (metricas.ics ?? 0) >= 0.6 && (metricas.eta ?? 0) > 0.5
    case 2:
      return (metricas.eta ?? 0) > 0.5 && (metricas.xi ?? 0) > 0
    case 3:
      return (metricas.pgs ?? 0) >= 3.0 && (metricas.ics ?? 0) >= 0.85
    default:
      return false
  }
}
