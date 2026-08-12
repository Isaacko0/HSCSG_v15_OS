// HSCSG v15 OS — Evidence Model (asimilado de CompAI CRM + Shivarthu)
// Principio (CompAI CRM): "No tool accepts a confidence score, because a model
// asked to grade its own certainty will, and it will be wrong in the direction
// that makes it look useful." Las herramientas reportan OBSERVACIONES pesadas
// por un ledger; el nodo NUNCA gradea su propia certeza.
//
// Score Schelling (Shivarthu): agregación de juicios con outlier removal
// (mean ± 1 SD) para consenso estadísticamente honesto.

export type EvidenceKind =
  | 'profile.email-match'
  | 'linkedin.employer-and-name'
  | 'crm.thread-reply'
  | 'crm.signature-block'
  | 'github.account-identity'
  | 'crm.meeting-attendance'
  | 'web.cited-claim'
  | 'handle.name-form'
  | 'search.cites-profile'
  | 'employer-only'
  | 'aut.observation' // observación directa del nodo (sensor, RAO)
  | 'cds.consensus' // consenso de pares del nodo
  | 'contradiction'

type Weighting = { weight: number; primary: boolean; label: string }

// Pesos portados de CompAI CRM (lib/evidence.ts), extendidos con fuentes HSCSG.
export const WEIGHTS: Record<EvidenceKind, Weighting> = {
  'profile.email-match': { weight: 0.95, primary: true, label: 'el email está en el perfil' },
  'linkedin.employer-and-name': { weight: 0.85, primary: true, label: 'LinkedIn: empleador y nombre coinciden' },
  'crm.thread-reply': { weight: 0.85, primary: true, label: 'respondió en un hilo del nodo' },
  'crm.signature-block': { weight: 0.8, primary: true, label: 'su firma propia lo dice' },
  'github.account-identity': { weight: 0.8, primary: true, label: 'la cuenta GitHub nombra su empleador' },
  'crm.meeting-attendance': { weight: 0.7, primary: true, label: 'asistió a una reunión del nodo' },
  'aut.observation': { weight: 0.85, primary: true, label: 'observación directa del nodo (sensor/RAO)' },
  'cds.consensus': { weight: 0.8, primary: true, label: 'consenso de pares del nodo' },
  'web.cited-claim': { weight: 0.4, primary: false, label: 'una fuente web citada lo afirma' },
  'handle.name-form': { weight: 0.35, primary: false, label: 'el handle es forma de su nombre' },
  'search.cites-profile': { weight: 0.35, primary: false, label: 'una búsqueda cita este perfil' },
  'employer-only': { weight: 0.2, primary: false, label: 'el empleador coincide, el nombre no' },
  contradiction: { weight: 0, primary: false, label: 'otra fuente discrepa' },
}

export type FactBand = 'VERIFIED' | 'PROBABLE' | 'POSSIBLE' | null

export type Evidence = {
  kind: EvidenceKind
  detail: string
  sourceUrl?: string
}

export type Scored = {
  score: number
  band: FactBand
  hasPrimary: boolean
  rationale: string
}

const CEILING = 0.99
const CONTRADICTED = 0.45
export const BAND_FLOOR = { VERIFIED: 0.85, PROBABLE: 0.55, POSSIBLE: 0.3 }

// ---- Evidence Model (CompAI CRM) ----
export function scoreEvidence(evidence: Evidence[]): Scored {
  if (evidence.length === 0) {
    return { score: 0, band: null, hasPrimary: false, rationale: 'Sin evidencia.' }
  }
  const contradicted = evidence.some((i) => i.kind === 'contradiction')
  const hasPrimary = evidence.some((i) => WEIGHTS[i.kind].primary)

  // Combinación multiplicativa: cada evidencia reduce la incertidumbre.
  const combined = evidence.reduce(
    (remaining, item) => remaining * (1 - WEIGHTS[item.kind].weight),
    1,
  )
  let score = Math.min(CEILING, 1 - combined)
  if (contradicted) score = Math.min(score, CONTRADICTED)

  return {
    score,
    band: bandFor(score, hasPrimary),
    hasPrimary,
    rationale: rationaleFor(evidence, contradicted, hasPrimary),
  }
}

export function bandFor(score: number, hasPrimary: boolean): FactBand {
  if (score >= BAND_FLOOR.VERIFIED && hasPrimary) return 'VERIFIED'
  if (score >= BAND_FLOOR.PROBABLE) return 'PROBABLE'
  if (score >= BAND_FLOOR.POSSIBLE) return 'POSSIBLE'
  return null
}

function rationaleFor(
  evidence: Evidence[],
  contradicted: boolean,
  hasPrimary: boolean,
): string {
  const reasons = evidence
    .filter((i) => i.kind !== 'contradiction')
    .map((i) => WEIGHTS[i.kind].label)
  if (contradicted) {
    const clash = evidence.find((i) => i.kind === 'contradiction')
    return `Sostenido: ${clash?.detail ?? 'las fuentes discrepan'}.`
  }
  if (reasons.length === 0) return 'Sin evidencia de soporte.'
  const list = joinWords(reasons)
  return hasPrimary
    ? capitalise(list)
    : `${capitalise(list)} — pero nada identifica directamente.`
}

function joinWords(words: string[]): string {
  if (words.length === 1) return words[0]
  return `${words.slice(0, -1).join(', ')} y ${words[words.length - 1]}`
}
function capitalise(v: string): string {
  return v.charAt(0).toUpperCase() + v.slice(1)
}

// ---- Score Schelling (Shivarthu) — agregación de juicios con outlier removal ----
// Entrada: array de valores (ej. estimaciones de jurados). Devuelve mean, SD,
// y la nueva mean tras descartar valores >1 SD (68.27% del dataset restante).
export function meanInteger(data: number[]): number | null {
  if (data.length === 0) return null
  return data.reduce((a, b) => a + b, 0) / data.length
}

export function stdDeviationInteger(data: number[]): { variance: number; mean: number } | null {
  const mean = meanInteger(data)
  if (mean === null || data.length === 0) return null
  const variance = data.reduce((a, v) => a + (mean - v) ** 2, 0) / data.length
  return { variance, mean }
}

export function calculateNewMean(
  data: number[],
  sdAndMean: { variance: number; mean: number },
): { newMean: number; kept: number[]; removed: number[] } {
  const { variance, mean } = sdAndMean
  const sd = Math.sqrt(variance)
  const kept: number[] = []
  const removed: number[] = []
  for (const x of data) {
    if (x >= mean - sd && x <= mean + sd) kept.push(x)
    else removed.push(x)
  }
  const newMean = meanInteger(kept) ?? mean
  return { newMean, kept, removed }
}

export type SchellingResult = {
  mean: number
  sd: number
  newMean: number
  kept: number[]
  removed: number[]
  winners: number[]
}

// values: estimaciones de jurados. range: tolerancia para "ganador" (usado en Shivarthu)
export function scoreSchelling(values: number[], tolerancePct = 10): SchellingResult {
  const d = values.map((v) => Math.round(v * 1000))
  const sa = stdDeviationInteger(d)
  if (!sa) return { mean: 0, sd: 0, newMean: 0, kept: [], removed: [], winners: [] }
  const { newMean, kept, removed } = calculateNewMean(d, sa)
  const winners: number[] = []
  for (let i = 0; i < d.length; i++) {
    const dev = newMean === 0 ? 0 : (Math.abs(d[i] - newMean) / newMean) * 100
    if (dev <= tolerancePct) winners.push(i)
  }
  return {
    mean: sa.mean / 1000,
    sd: Math.sqrt(sa.variance) / 1000,
    newMean: newMean / 1000,
    kept,
    removed,
    winners,
  }
}
