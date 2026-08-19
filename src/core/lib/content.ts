// HSCSG v15 OS — content (lib): lógica pura de creación de contenido (ContentCreation-OS asimilado)
// No importa infra original. Conserva: captura -> score -> ángulos -> gate humano (MJ), news rolling.
import type { ContentState, Idea } from '@core/state/content'

/** Ideas pendientes (esperando decisión humana — Ley III MJ) */
export function pendingIdeas(st: ContentState): Idea[] {
  return st.ideas.filter((i) => i.status === 'pending')
}

/** Ideas aprobadas por el humano (gate superado) */
export function approvedIdeas(st: ContentState): Idea[] {
  return st.ideas.filter((i) => i.status === 'approved')
}

/**
 * γ-CARMIS para contenido: si hay ideas con brandFit alto (>70) pero siguen pendientes
 * y sin ángulos, se recomienda generar ángulos (no decidir). Análogo a detectOverloads.
 */
export function needsAngles(st: ContentState): string[] {
  return st.ideas
    .filter((i) => i.status === 'pending' && i.brandFit >= 70 && i.angles.length === 0)
    .map((i) => i.id)
}

/** Score agregado de alineación con marca (advisory, no bloquea) */
export function avgBrandFit(st: ContentState): number {
  if (st.ideas.length === 0) return 0
  const scored = st.ideas.filter((i) => i.brandFit > 0)
  if (scored.length === 0) return 0
  return Math.round(scored.reduce((s, i) => s + i.brandFit, 0) / scored.length)
}

/** Densidad de noticias (rolling 30d) */
export function newsCount(st: ContentState): number {
  return st.news.length
}
