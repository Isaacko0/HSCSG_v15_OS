// HSCSG v15 OS — Librería de cálculo (Lucidez Material)
// Todas las funciones son PURAS y derivan de inputs editables del nodo real.
// Fórmulas ancladas al synthesis HSCSG_MJ_SYNTHESIS_v15.md (§4, §5, §6).

import type { BaseMaterial, CACVectors, Member, PVSO, ValueFlow } from '@core/state/types'

export const clamp = (v: number, min = 0, max = 1): number =>
  Math.max(min, Math.min(max, v))

export function population(members: Member[]): number {
  return Math.max(members.filter((m) => m.signedSocialDNA).length, 1)
}

// AUT_* desde vectores CAC medidos (sensores) — síntesis §4.1
export function autFromCAC(cac: CACVectors) {
  return {
    ALIM: clamp(cac.ALIM),
    ENER: clamp(cac.ENER),
    SALU: clamp(cac.SALU),
    HABI: clamp(cac.HABI),
    PROD: clamp(cac.PROD),
  }
}

// PGS_LM = media de vectores CON SENSOR (solo biofísicos: ALIM, ENER, SALU, HABI, PROD)
export function pgsLM(aut: { ALIM: number; ENER: number; SALU: number; HABI: number; PROD: number }): number {
  const v = [aut.ALIM, aut.ENER, aut.SALU, aut.HABI, aut.PROD]
  return v.reduce((a, b) => a + b, 0) / v.length
}

// Crédito de supervivencia = BASE MATERIAL, no USDC — síntesis §5.3
export function survivalCredit(bm: BaseMaterial): number {
  return (
    bm.tierra_ha * 10 * 100 + // 1 ha = 1000 créditos
    bm.agua_l_dia * 0.1 + // 1000 L/día = 100
    bm.energia_kwh_dia * 5 + // 10 kWh/día = 50
    bm.comida_kg_dia * 2 + // 10 kg/día = 20
    bm.herramientas_fabship * 1 + // 10 herramientas = 10
    bm.semillas_criollas * 0.5 + // 100 variedades = 50
    bm.usdc_reserva * 0.1 // solo para compras externas
  )
}

// ZNU v2: emisión SOLO si AUT_ALIM≥0.5, AUT_ENER≥0.5, AUT_HABI≥0.4 — síntesis §6.2
export function znuEligible(aut: { ALIM: number; ENER: number; HABI: number }): boolean {
  return aut.ALIM >= 0.5 && aut.ENER >= 0.5 && aut.HABI >= 0.4
}

export function znuEmission(members: Member[], eligible: boolean, perMember = 100): number {
  const active = members.filter((m) => m.signedSocialDNA).length
  return eligible ? active * perMember : 0
}

// Demurrage anti-acumulación real — síntesis §6.2
export function demurrage(total: number, threshold = 300, rate = 0.05): number {
  if (total <= threshold) return 0
  return +( (total - threshold) * rate).toFixed(2)
}

export type CACStatus = 'soberano' | 'en transición' | 'dependiente'
export function cacStatus(value: number, threshold = 0.8): CACStatus {
  if (value >= threshold) return 'soberano'
  if (value >= threshold * 0.5) return 'en transición'
  return 'dependiente'
}

// ξ (aprendizaje validado) = Δη por ciclo, solo si PGS final > inicio + 0.05 — síntesis §4.2
export function xiFromPVSO(pvsos: PVSO[]): number {
  if (pvsos.length < 2) return 0
  const first = pvsos[0].pgs
  const last = pvsos[pvsos.length - 1].pgs
  return last > first + 0.05 ? +(last - first).toFixed(2) : 0
}

// η (capacidad ontogenética) ≈ PGS promedio de PVSOs
export function etaFromPVSO(pvsos: PVSO[]): number {
  if (pvsos.length === 0) return 0
  return +(pvsos.reduce((a, p) => a + p.pgs, 0) / pvsos.length).toFixed(2)
}

// PMRTE PARCIAL (modelo mínimo) — síntesis §4.3. Requiere datos de laboratorio para completar μ,ε,ρ,τ,δ.
export function pmrtePartial(aut: { ALIM: number; ENER: number; HABI: number }, pvsos: PVSO[]): number {
  const mu = pvsos.length >= 2 ? clamp(pvsos[pvsos.length - 1].pgs - pvsos[0].pgs) : 0
  const eps = clamp(0.5 + 0.5 * aut.ALIM) // placeholder reciclaje de metabolitos
  const rho = 1 // no-jerárquico asumido si hay ValueFlows
  const tau = 0.3 // prácticas heredadas sin coerción (placeholder)
  const delta = 0.3 // rituales sin justificación dinero (placeholder)
  return +(mu * eps * rho * tau * delta).toFixed(3)
}

// ---- Autómata v2 — Leyes MJ (síntesis §5.1) ----

// LEY I: NUNCA DAÑES LA BASE MATERIAL
export function leyI(action: string): { pass: boolean; hits: string[] } {
  const harm = ['tierra', 'agua', 'energia', 'comida', 'herramientas', 'cuerpos', 'semillas']
  const a = action.toLowerCase()
  const hits = harm.filter((h) => a.includes(h))
  return { pass: hits.length === 0, hits }
}

// LEY II: GÁNATE LA VIDA SOBERANIZANDO LA BASE MATERIAL (ROI = ΔAUT / crédito)
export function leyII(pgs: number, pop: number, usdc: number): { pass: boolean; roi: number } {
  const valueGenerated = pgs * pop
  const cost = Math.max(usdc, 1e-6)
  const roi = valueGenerated / cost
  return { pass: roi >= 1, roi: +roi.toFixed(2) }
}

// Índice de Cohesión del Colectivo (CDS) simple
export function ics(members: Member[], flows: ValueFlow[]): number {
  const signed = members.filter((m) => m.signedSocialDNA).length
  const base = signed >= 5 ? 0.6 : signed / 5 * 0.6
  const flowBonus = Math.min(flows.length / 50, 0.4) // 50 eventos = máximo
  return +Math.min(1, base + flowBonus).toFixed(2)
}
