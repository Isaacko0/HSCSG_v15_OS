// HSCSG v15 OS — Tipos del módulo Soberanía (asimilado de overkillkulture/sovereignty-hub + tairea/sovereignty-hub-ui)
// 13 pilares de civilización autosuficiente + 7 capas + 3 fases (3×7×13=∞). Sin Vite/Three.js/Supabase.

export type SovereignPhase = 'none' | 'survive' | 'build' | 'scale'

export interface SovereignPillar {
  n: number
  name: string
  nameKey: string
  metaphor: string // cuerpo humano al que equivale
  color: string
  icon: string // lucide icon name
}

export interface SovereignLayer {
  i: number
  name: string
  nameKey: string
  desc: string
}

export interface SovereigntyState {
  pillars: SovereignPillar[]
  layers: SovereignLayer[]
  // key "pillar-layer" -> fase. Ej: "1-0" = Water/Survival
  answers: Record<string, SovereignPhase>
  patternScore: number // 0-100 (Pattern Theory / lucidez)
}