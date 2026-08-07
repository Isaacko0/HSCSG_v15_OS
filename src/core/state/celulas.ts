// HSCSG v15 OS — Tipos del módulo Células (Freedom Cells)
// Asimilado de "Manual de Células de Libertad" (FreedomCells.org / Derrick Broze).
// Modelo de tejido social fractal isomorfo al Colectivo de Cosateca.

export interface CelulaPrincipio {
  n: number
  nombre: string
  desc: string
}

export interface CelulaRecomendacion {
  n: number
  titulo: string
  desc: string
}

export interface CelulaMetodo {
  key: string
  nombre: string
  desc: string
}

// Nivel de la red fractal: 8 → 64 → 512 → 4096
export interface CelulaNivel {
  key: string
  nombre: string
  tamano: number
  factor: string
}

export interface CelulasState {
  principios: CelulaPrincipio[]
  recomendaciones: CelulaRecomendacion[]
  metodos: CelulaMetodo[]
  niveles: CelulaNivel[]
  // estado editable del nodo (cuántas células/intermedios tiene el usuario)
  miembros: number
  celdasInternas: number
  grupoIntermedio: number
  nota: string
}
