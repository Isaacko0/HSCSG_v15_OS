// HSCSG v15 OS — Tipos del módulo Células (Freedom Cells)
// Asimilado de "Manual de Células de Libertad" (FreedomCells.org / Derrick Broze).
// Modelo de tejido social fractal isomorfo al Colectivo de Cosateca y a la Soberanía.

export interface CelulaPrincipio {
  n: number
  nameKey: string
  descKey: string
}

export interface CelulaRecomendacion {
  n: number
  titleKey: string
  descKey: string
}

export interface CelulaMetodo {
  key: string
  nameKey: string
  descKey: string
}

export interface CelulaNivel {
  key: string
  nivelKey: string
  tamano: number
  factor: string
}

export interface CelulasState {
  principios: CelulaPrincipio[]
  recomendaciones: CelulaRecomendacion[]
  metodos: CelulaMetodo[]
  niveles: CelulaNivel[]
  miembros: number
  celdasInternas: number
  grupoIntermedio: number
  nota: string
}
