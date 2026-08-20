import type { BoundaryPolicy, AuditRow } from '@core/lib/boundaries'
import { DEFAULT_BOUNDARY_POLICY } from '@core/lib/boundaries'

export interface BoundariesState {
  policy: BoundaryPolicy
  audit: AuditRow[]
  /** Cuántas filas de audit conservar en memoria. */
  maxAudit: number
}

export const initialBoundaries: BoundariesState = {
  policy: DEFAULT_BOUNDARY_POLICY,
  audit: [],
  maxAudit: 200,
}

export function makeAuditRow(
  partial: Omit<AuditRow, 'id' | 'ts'>,
): AuditRow {
  return {
    ...partial,
    id: `ba_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    ts: Date.now(),
  }
}
