// HSCSG v15 OS — Lógica del módulo Células (Freedom Cells)
import type { CelulasState, CelulaPrincipio, CelulaRecomendacion, CelulaMetodo, CelulaNivel } from '@core/state/celulas'

// 5 principios de la Red de Células de Libertad
export const CELULA_PRINCIPIOS: CelulaPrincipio[] = [
  { n: 1, nameKey: 'cel.p1', descKey: 'cel.p1d' },
  { n: 2, nameKey: 'cel.p2', descKey: 'cel.p2d' },
  { n: 3, nameKey: 'cel.p3', descKey: 'cel.p3d' },
  { n: 4, nameKey: 'cel.p4', descKey: 'cel.p4d' },
  { n: 5, nameKey: 'cel.p5', descKey: 'cel.p5d' },
]

// 12 recomendaciones para construir células (Derrick Broze, "Cómo salir de la tecnocracia")
export const CELULA_RECOMENDACIONES: CelulaRecomendacion[] = [
  { n: 1, titleKey: 'cel.r1t', descKey: 'cel.r1d' },
  { n: 2, titleKey: 'cel.r2t', descKey: 'cel.r2d' },
  { n: 3, titleKey: 'cel.r3t', descKey: 'cel.r3d' },
  { n: 4, titleKey: 'cel.r4t', descKey: 'cel.r4d' },
  { n: 5, titleKey: 'cel.r5t', descKey: 'cel.r5d' },
  { n: 6, titleKey: 'cel.r6t', descKey: 'cel.r6d' },
  { n: 7, titleKey: 'cel.r7t', descKey: 'cel.r7d' },
  { n: 8, titleKey: 'cel.r8t', descKey: 'cel.r8d' },
  { n: 9, titleKey: 'cel.r9t', descKey: 'cel.r9d' },
  { n: 10, titleKey: 'cel.r10t', descKey: 'cel.r10d' },
  { n: 11, titleKey: 'cel.r11t', descKey: 'cel.r11d' },
  { n: 12, titleKey: 'cel.r12t', descKey: 'cel.r12d' },
]

// 4 métodos para organizar el cuadro interno (8 personas)
export const CELULA_METODOS: CelulaMetodo[] = [
  { key: 'familiaridad', nameKey: 'cel.m1', descKey: 'cel.m1d' },
  { key: 'proximidad', nameKey: 'cel.m2', descKey: 'cel.m2d' },
  { key: 'intereses', nameKey: 'cel.m3', descKey: 'cel.m3d' },
  { key: 'cronologico', nameKey: 'cel.m4', descKey: 'cel.m4d' },
]

// Escala fractal de la red: célula 8 → grupo intermedio 64 → meta grupo 512 → confederación 4096
export const CELULA_NIVELES: CelulaNivel[] = [
  { key: 'interna', nivelKey: 'cel.n1', tamano: 8, factor: 'base' },
  { key: 'intermedio', nivelKey: 'cel.n2', tamano: 64, factor: '8 × 8' },
  { key: 'meta', nivelKey: 'cel.n3', tamano: 512, factor: '8 × 64' },
  { key: 'confederacion', nivelKey: 'cel.n4', tamano: 4096, factor: '8 × 512' },
]

// Cálculo del tamaño de red dado el número de células internas (cada una = 8 personas)
export function redSize(celdasInternas: number): number {
  // célula base 8, luego se multiplica por 8 en cada nivel
  return celdasInternas * 8
}

// Nivel de red alcanzable a partir de miembros totales (aprox por escala fractal)
export function nivelRed(miembros: number): string {
  if (miembros >= 4096) return 'cel.n4'
  if (miembros >= 512) return 'cel.n3'
  if (miembros >= 64) return 'cel.n2'
  if (miembros >= 8) return 'cel.n1'
  return 'cel.n0'
}

export function makeCelulasState(): CelulasState {
  return {
    principios: CELULA_PRINCIPIOS,
    recomendaciones: CELULA_RECOMENDACIONES,
    metodos: CELULA_METODOS,
    niveles: CELULA_NIVELES,
    miembros: 8,
    celdasInternas: 1,
    grupoIntermedio: 0,
    nota: 'Freedom Cells: el objetivo es sustituir al Estado como medio de organización social mediante ayuda mutua y soberanía.',
  }
}
