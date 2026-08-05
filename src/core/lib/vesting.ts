// HSCSG v15 OS — Lógica del módulo Vesting (asimilado de sepu85/collabberry-berry-vesting)
// Réplica fiel de BerryInvestorVesting.sol pero sobre ZNU y en local (sin EVM).
// Garantías isomorfas a MJ: inmutable, no-drain, beneficiario auditable, owner renuncia.

import type { VestingState, VestingTranche } from '@core/state/vesting'

const DAY = 86400000

// Σ amount de los tramos cuyo ts <= now (equivale a totalUnlocked del contrato)
export function totalUnlocked(schedule: VestingTranche[], now: number): number {
  let u = 0
  for (const t of schedule) {
    if (t.ts <= now) u += t.amountZNU
    else break // schedule ascendente
  }
  return u
}

// releasable = unlocked - claimed (solo vía release pathway)
export function releasable(schedule: VestingTranche[], claimed: number, now: number): number {
  const u = totalUnlocked(schedule, now)
  return u > claimed ? u - claimed : 0
}

// próximo unlock futuro (equivale a nextUnlock)
export function nextUnlock(schedule: VestingTranche[], now: number): VestingTranche | null {
  for (const t of schedule) if (t.ts > now) return t
  return null
}

// total asignado (suma del schedule)
export function totalAllocation(schedule: VestingTranche[]): number {
  return schedule.reduce((a, t) => a + t.amountZNU, 0)
}

// setBeneficiary: una sola vez, antes del deadline (equivale a setBeneficiary del contrato)
export function setBeneficiary(
  st: VestingState, beneficiary: string, now: number,
): { ok: boolean; error?: string } {
  if (st.beneficiary !== null) return { ok: false, error: 'Beneficiario ya asignado (una sola vez)' }
  if (now > st.beneficiarySetDeadline) return { ok: false, error: 'Plazo para asignar beneficiario vencido' }
  if (!beneficiary) return { ok: false, error: 'Beneficiario inválido' }
  return { ok: true }
}

// renounce: solo después de setear beneficiario (equivale a renounceAfterBeneficiarySet)
export function canRenounce(st: VestingState): { ok: boolean; error?: string } {
  if (st.beneficiary === null) return { ok: false, error: 'Beneficiario no asignado' }
  return { ok: true }
}

// Construye un schedule estilo Berry: A(30%) meses 25-30, pausa 31-36, B(70%) meses 37-43
export function buildBerrySchedule(t0: number, allocationZNU: number): VestingTranche[] {
  const monthTs = (offset: number) => t0 + offset * 30 * DAY
  const out: VestingTranche[] = []
  const uid = (i: number) => `tr_${i}_${Math.random().toString(36).slice(2, 6)}`
  // A: 6 meses × 5%
  for (let i = 0; i < 6; i++) {
    out.push({ id: uid(i), ts: monthTs(25 + i), amountZNU: Math.round((allocationZNU * 0.05)) })
  }
  // B: 70% en tramos de 10% (7 meses desde 37)
  let remaining = allocationZNU * 0.7
  let m = 0
  while (remaining > 0) {
    const chunk = Math.min(allocationZNU * 0.1, remaining)
    out.push({ id: uid(100 + m), ts: monthTs(37 + m), amountZNU: Math.round(chunk) })
    remaining -= chunk
    m++
  }
  return out.sort((a, b) => a.ts - b.ts)
}
