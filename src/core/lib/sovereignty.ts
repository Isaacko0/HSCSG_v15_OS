// HSCSG v15 OS — Lógica del módulo Soberanía (asimilado de overkillkulture/sovereignty-hub + tairea/sovereignty-hub-ui)
// 13 pilares × 7 capas × 3 fases = 273 puntos de acción. Diagnóstico de base material del nodo. Sin Supabase/Three.js.

import type { SovereigntyState, SovereignPillar, SovereignLayer, SovereignPhase } from '@core/state/sovereignty'

// 13 pilares (del repo original: name, metaphor, color, icon lucide)
export const PILLARS_13: SovereignPillar[] = [
  { n: 1, name: 'Water', metaphor: 'The Bloodstream', color: '#1a5276', icon: 'Droplets' },
  { n: 2, name: 'Food', metaphor: 'The Stomach', color: '#196f3d', icon: 'Utensils' },
  { n: 3, name: 'Shelter', metaphor: 'The Skeleton', color: '#784212', icon: 'Home' },
  { n: 4, name: 'Energy', metaphor: 'The Heart', color: '#f1c40f', icon: 'Zap' },
  { n: 5, name: 'Medicine', metaphor: 'The Immune System', color: '#e74c3c', icon: 'BriefcaseMedical' },
  { n: 6, name: 'Communication', metaphor: 'The Nervous System', color: '#3498db', icon: 'TowerBroadcast' },
  { n: 7, name: 'Manufacturing', metaphor: 'The Hands', color: '#e67e22', icon: 'Cog' },
  { n: 8, name: 'Security', metaphor: 'The Skin', color: '#2ecc71', icon: 'ShieldHalf' },
  { n: 9, name: 'Transportation', metaphor: 'The Legs', color: '#7f8c8d', icon: 'Truck' },
  { n: 10, name: 'Trade', metaphor: 'The Circulatory System', color: '#d4af37', icon: 'Scale' },
  { n: 11, name: 'Governance', metaphor: 'The Brain', color: '#5b5ea6', icon: 'Gavel' },
  { n: 12, name: 'Knowledge', metaphor: 'The Memory', color: '#48c9b0', icon: 'BookOpen' },
  { n: 13, name: 'Culture', metaphor: 'The Soul', color: '#9c27b0', icon: 'MasksTheater' },
]

// 7 capas (del repo: Survival → Innovation)
export const LAYERS_7: SovereignLayer[] = [
  { i: 0, name: 'Survival', desc: 'Zero prep. Grid is down. You have nothing. Improvise.' },
  { i: 1, name: 'Preparedness', desc: 'Kit built. Supplies stocked. Training done. Ready.' },
  { i: 2, name: 'Stockpile', desc: 'Raw materials with trade value. Strategic reserves.' },
  { i: 3, name: 'Production', desc: 'Making things. 3D printing, kits, assemblies, repairs.' },
  { i: 4, name: 'Commerce', desc: 'Selling, drop-shipping, curating. Full product catalog.' },
  { i: 5, name: 'Teaching', desc: 'Classes, guides, installs, consulting. Knowledge transfer.' },
  { i: 6, name: 'Innovation', desc: 'Eureka-level breakthroughs. Category-defining work.' },
]

export const PHASES: { key: SovereignPhase; label: string; color: string; rank: number }[] = [
  { key: 'none', label: 'Not started', color: '#2a3340', rank: 0 },
  { key: 'survive', label: 'Survive', color: '#e74c3c', rank: 1 },
  { key: 'build', label: 'Build', color: '#f1c40f', rank: 2 },
  { key: 'scale', label: 'Scale', color: '#2ecc71', rank: 3 },
]

export const cellKey = (pillar: number, layer: number) => `${pillar}-${layer}`

const PHASE_RANK: Record<SovereignPhase, number> = { none: 0, survive: 1, build: 2, scale: 3 }

// Fase agregada de un pilar = mínimo de sus 7 capas (el eslabón más débil)
export function pillarPhase(answers: Record<string, SovereignPhase>, pillar: number, layers = LAYERS_7.length): SovereignPhase {
  let min = 3
  for (let i = 0; i < layers; i++) {
    const p = answers[cellKey(pillar, i)] ?? 'none'
    min = Math.min(min, PHASE_RANK[p])
  }
  return (['none', 'survive', 'build', 'scale'] as SovereignPhase[])[min]
}

// Índice de soberanía global: % de celdas que NO son 'none', ponderado por rank
export function sovereigntyIndex(answers: Record<string, SovereignPhase>, pillars = PILLARS_13.length, layers = LAYERS_7.length): number {
  const total = pillars * layers
  let acc = 0
  for (let p = 1; p <= pillars; p++) {
    for (let l = 0; l < layers; l++) {
      acc += PHASE_RANK[answers[cellKey(p, l)] ?? 'none']
    }
  }
  // max possible = total * 3
  return Math.round((acc / (total * 3)) * 100)
}

export function weakestPillar(answers: Record<string, SovereignPhase>): SovereignPillar {
  let worst = PILLARS_13[0]
  let worstRank = 99
  for (const pil of PILLARS_13) {
    const r = PHASE_RANK[pillarPhase(answers, pil.n)]
    if (r < worstRank) { worstRank = r; worst = pil }
  }
  return worst
}

export function strongestPillar(answers: Record<string, SovereignPhase>): SovereignPillar {
  let best = PILLARS_13[0]
  let bestRank = -1
  for (const pil of PILLARS_13) {
    const r = PHASE_RANK[pillarPhase(answers, pil.n)]
    if (r > bestRank) { bestRank = r; best = pil }
  }
  return best
}

// Pattern Theory (isomorfo a Lucidez / Ley III): heurística de manipulación.
// Score alto = comunicación coherente y verificable (baja señal de manipulación).
// Aquí: un nodo con alta soberanía real (fases altas) y gobernanza/conocimiento fuertes
// es menos manipulable. Stub didáctico; el motor real vive en Verificación.
export function patternTheoryScore(answers: Record<string, SovereignPhase>): number {
  const gov = PHASE_RANK[pillarPhase(answers, 11)] // Governance = Brain
  const knowledge = PHASE_RANK[pillarPhase(answers, 12)] // Knowledge = Memory
  const comm = PHASE_RANK[pillarPhase(answers, 6)] // Communication = Nervous System
  const base = (gov + knowledge + comm) / 3 // 0..3
  return Math.round((base / 3) * 100)
}

export function emptyAnswers(): Record<string, SovereignPhase> {
  const a: Record<string, SovereignPhase> = {}
  for (let p = 1; p <= PILLARS_13.length; p++) {
    for (let l = 0; l < LAYERS_7.length; l++) a[cellKey(p, l)] = 'none'
  }
  return a
}

export function makeSovereigntyState(): SovereigntyState {
  const answers = emptyAnswers()
  // Semilla de ejemplo: el nodo Cosateca tiene agua/energía/comida en build, el resto en survive/none
  const seed: Array<[number, SovereignPhase]> = [
    [1, 'build'], [2, 'build'], [4, 'build'],
    [3, 'survive'], [5, 'survive'], [6, 'survive'], [7, 'survive'],
    [8, 'survive'], [9, 'none'], [10, 'none'], [11, 'survive'], [12, 'build'], [13, 'survive'],
  ]
  for (const [p, phase] of seed) {
    // propagar la fase a todas las capas de ese pilar para el demo
    for (let l = 0; l < LAYERS_7.length; l++) answers[cellKey(p, l)] = phase
  }
  return {
    pillars: PILLARS_13,
    layers: LAYERS_7,
    answers,
    patternScore: patternTheoryScore(answers),
  }
}