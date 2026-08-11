// Conector de Flujo (entramado entre pantallas) — inspirado en el patrón
// stage/next/seed de DeseOS (Personas→Prospecta→Persuade→Publica→Personaliza):
// cada etapa recibe el "seed" de la anterior y alimenta la siguiente, sin repetir
// subfunciones ni recalcular lo ya hecho. Auto-llena los parámetros de la pantalla
// destino desde el estado actual del nodo (derivado, no duplicado).
//
// Resuelve la observación del usuario: las pantallas no se auto-enviaban parámetros;
// cada una repetía useState/useMemo para leer el mismo store. Ahora UNA sola
// deriveStageParams alimenta a la siguiente.

import type { AppState } from '@core/state/store'

export type StageKey =
  | 'base' | 'circulos' | 'integral' | 'pipeline' | 'credibilidad'
  | 'democracia' | 'aprender' | 'oraculo' | 'gaiaunion' | 'agencia'

export interface StageDef {
  key: StageKey
  label: string
  path: string
  /** de dónde saca sus datos (para el banner) */
  from: string
  /** qué entrega a la siguiente (clave de params) */
  feeds: string
}

// Orden cibernético del flujo HSCSG (CDS→OAD→COS→ITC→FRS reencuadrado como navegación)
export const STAGES: StageDef[] = [
  { key: 'base', label: 'Base Material', path: '/base', from: 'sensores', feeds: 'recursos' },
  { key: 'circulos', label: 'Círculos', path: '/circulos', from: 'base', feeds: 'miembros' },
  { key: 'integral', label: 'Integral (CDS)', path: '/integral', from: 'círculos', feeds: 'issues' },
  { key: 'pipeline', label: 'Pipeline (Matchmaker)', path: '/pipeline', from: 'integral', feeds: 'matches' },
  { key: 'credibilidad', label: 'Credibilidad', path: '/credibilidad', from: 'pipeline', feeds: 'propuestas' },
  { key: 'democracia', label: 'Democracia', path: '/democracia', from: 'credibilidad', feeds: 'delegaciones' },
  { key: 'aprender', label: 'Aprender', path: '/aprender', from: 'democracia', feeds: 'retos' },
  { key: 'oraculo', label: 'Oráculo', path: '/oraculo', from: 'aprender', feeds: 'consultas' },
  { key: 'gaiaunion', label: 'Gaia Union', path: '/gaiaunion', from: 'oraculo', feeds: 'organism' },
  { key: 'agencia', label: 'Agencia', path: '/agencia', from: 'gaiaunion', feeds: 'ofertas' },
]

export function nextStageOf(key: StageKey): StageDef | undefined {
  const i = STAGES.findIndex((s) => s.key === key)
  return i >= 0 && i < STAGES.length - 1 ? STAGES[i + 1] : undefined
}

/**
 * deriveStageParams: AUTO-LLENA los parámetros de la SIGUIENTE pantalla desde el
 * estado actual. Función PURA y DERIVADA (no duplica estado). La pantalla destino
 * lee estos params para pre-llenar sus inputs (ya "listos para usar").
 */
export function deriveStageParams(key: StageKey, s: AppState): Record<string, unknown> {
  switch (key) {
    case 'base':
      return { recursos: s.base ? { tierra_ha: s.base.tierra_ha, agua_l_dia: s.base.agua_l_dia, energia_kwh_dia: s.base.energia_kwh_dia } : {} }
    case 'circulos':
      return { miembros: s.members?.length ?? 0 }
    case 'integral':
      return { issues: s.integral.issues.length, openIssues: s.integral.issues.filter((i) => i.status === 'open').length }
    case 'pipeline':
      return {
        needs: s.integral.issues.length,
        credits: s.integral.credits.length,
        loopScore: s.integral.decisions.length,
      }
    case 'credibilidad':
      return { creditos: s.integral.credits.length }
    case 'democracia':
      return { propuestas: s.symbiosky?.proposals?.length ?? 0 }
    case 'aprender':
      return { retos: s.aprender?.challenges?.length ?? 0 }
    case 'oraculo':
      return { consultas: s.aprender?.challenges?.length ?? 0 }
    case 'gaiaunion':
      return { organism: 'vivo' }
    case 'agencia':
      return { ofertas: 0 }
    default:
      return {}
  }
}
