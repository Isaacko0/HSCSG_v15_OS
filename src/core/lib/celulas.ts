// HSCSG v15 OS — Lógica del módulo Células (Freedom Cells)
import type { CelulasState, CelulaPrincipio, CelulaRecomendacion, CelulaMetodo, CelulaNivel } from '@core/state/celulas'

// 5 principios de la Red de Células de Libertad
export const CELULA_PRINCIPIOS: CelulaPrincipio[] = [
  { n: 1, nombre: 'Localización', desc: 'Arraigo geográfico y cultural; actuar donde se vive.' },
  { n: 2, nombre: 'Descentralización', desc: 'Sin centro de mando; poder distribuido en células.' },
  { n: 3, nombre: 'Soluciones enfocadas', desc: 'Resolver problemas concretos de la comunidad, no teoría abstracta.' },
  { n: 4, nombre: 'Apolítico', desc: 'Fuera de partidos y banderas; soberanía por encima del Estado.' },
  { n: 5, nombre: 'No violento', desc: 'Resistencia y construcción sin violencia.' },
]

// 12 recomendaciones para construir células (Derrick Broze, "Cómo salir de la tecnocracia")
export const CELULA_RECOMENDACIONES: CelulaRecomendacion[] = [
  { n: 1, titulo: 'Comprender tu motivación', desc: 'Saber por qué persigues este objetivo antes de empezar.' },
  { n: 2, titulo: 'Identificar candidatos', desc: 'Personas sanas mental, física y espiritualmente para el objetivo.' },
  { n: 3, titulo: 'Discutir temas comunes', desc: 'Fuerzas motrices que unen al grupo.' },
  { n: 4, titulo: 'Puntos fuertes y débiles', desc: 'Análisis sincero individual y grupal.' },
  { n: 5, titulo: 'Libertad vs seguridad', desc: 'Evaluar grado de libertad deseado y aceptabilidad de riesgo.' },
  { n: 6, titulo: 'Objetivos corto/largo plazo', desc: '3 meses, 6 meses, 1 año; responsabilidad mutua.' },
  { n: 7, titulo: 'Atención plena', desc: 'Comunicación no violenta y meditación en grupo.' },
  { n: 8, titulo: 'Cumplir objetivos', desc: 'Documentar cada logro de la célula y miembros.' },
  { n: 9, titulo: 'Educación grupal continua', desc: 'Ampliar conocimientos, habilidades y suministros.' },
  { n: 10, titulo: 'Promover logros', desc: 'Redes sociales (cuando sea seguro) para mostrar la contraeconomía.' },
  { n: 11, titulo: 'Ingresos/independencia', desc: 'Crear ingresos que el Estado no pueda gravar.' },
  { n: 12, titulo: 'Red con otras células', desc: 'La clave: construir la comunidad contraeconómica amplia.' },
]

// 4 métodos para organizar el cuadro interno (8 personas)
export const CELULA_METODOS: CelulaMetodo[] = [
  { key: 'familiaridad', nombre: 'Familiaridad y confianza', desc: 'Vincularse con quienes ya se conoce y se confía.' },
  { key: 'proximidad', nombre: 'Proximidad geográfica', desc: 'Agrupar por zona para ayuda mutua presencial.' },
  { key: 'intereses', nombre: 'Intereses compartidos', desc: 'Agrupar por áreas de trabajo común (jardinería, educación…).' },
  { key: 'cronologico', nombre: 'Cronológico / al azar', desc: 'Por orden de llegada o sorteo (último recurso).' },
]

// Escala fractal de la red: célula 8 → grupo intermedio 64 → meta grupo 512 → confederación 4096
export const CELULA_NIVELES: CelulaNivel[] = [
  { key: 'interna', nombre: 'Célula interna (personal)', tamano: 8, factor: 'base' },
  { key: 'intermedio', nombre: 'Grupo intermedio (local)', tamano: 64, factor: '8 × 8' },
  { key: 'meta', nombre: 'Meta grupo (regional)', tamano: 512, factor: '8 × 64' },
  { key: 'confederacion', nombre: 'Confederación', tamano: 4096, factor: '8 × 512' },
]

// Cálculo del tamaño de red dado el número de células internas (cada una = 8 personas)
export function redSize(celdasInternas: number): number {
  // célula base 8, luego se multiplica por 8 en cada nivel
  return celdasInternas * 8
}

// Nivel de red alcanzable a partir de miembros totales (aprox por escala fractal)
export function nivelRed(miembros: number): string {
  if (miembros >= 4096) return 'Confederación (4096+)'
  if (miembros >= 512) return 'Meta grupo (512)'
  if (miembros >= 64) return 'Grupo intermedio (64)'
  if (miembros >= 8) return 'Célula interna (8)'
  return 'Núcleo en formación (<8)'
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
