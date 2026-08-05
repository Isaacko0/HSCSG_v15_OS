import {
  Unlock, ShieldCheck, ShieldAlert, UserCheck, Flame, Coins,
} from 'lucide-react'
import { useAppStore } from '@core/state/store'
import { totalUnlocked, releasable, nextUnlock, totalAllocation } from '@core/lib/vesting'
import { Card, SectionTitle, Stat, Btn, Badge, EmptyState } from '@components/ui'

const fmt = (ts: number) => new Date(ts).toLocaleDateString('es', { year: 'numeric', month: 'short', day: 'numeric' })

export function Vesting() {
  const { vesting, setVestingBeneficiary, claimVesting, renounceVestingOwner } = useAppStore()
  const now = Date.now()
  const unlocked = totalUnlocked(vesting.schedule, now)
  const avail = releasable(vesting.schedule, vesting.claimed, now)
  const total = totalAllocation(vesting.schedule)
  const next = nextUnlock(vesting.schedule, now)
  const pct = total > 0 ? (vesting.claimed / total) * 100 : 0

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="font-jost text-2xl md:text-3xl font-semibold flex items-center gap-2">
            <Unlock className="w-7 h-7 text-amber-400" /> Vesting · Participación {vesting.token}
          </h1>
          <p className="text-[var(--dim)] mt-1">Asimilado de sepu85/collabberry-berry-vesting. Tu participación en el nodo se vestea por hitos (AUT), auditable y sin drains. Isomorfo a MJ.</p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Stat label="Total asignado" value={`${total.toLocaleString()} ZNU`} color="text-amber-400" />
        <Stat label="Liberado" value={`${unlocked.toLocaleString()} ZNU`} color="text-emerald-400" />
        <Stat label="Reclamado" value={`${vesting.claimed.toLocaleString()} ZNU`} color="text-sky-400" />
        <Stat label="Releasable hoy" value={`${avail.toLocaleString()} ZNU`} color="text-violet-400" />
      </div>

      <Card title="Estado del contrato (isomorfo a BerryInvestorVesting.sol)">
        <div className="flex items-center gap-2 flex-wrap">
          {vesting.beneficiary ? <Badge color="text-emerald-400"><UserCheck className="w-3 h-3" /> Beneficiario: {vesting.beneficiary}</Badge> : <Badge color="text-[var(--mut)]">Sin beneficiario</Badge>}
          {vesting.ownerRenounced ? <Badge color="text-emerald-400"><ShieldCheck className="w-3 h-3" /> Owner renunciado</Badge> : <Badge color="text-amber-400"><ShieldAlert className="w-3 h-3" /> Owner activo</Badge>}
          <Badge color="text-[var(--mut)]">Inmutable · no drains</Badge>
        </div>
        <div className="mt-3">
          <div className="flex justify-between text-xs text-[var(--dim)] mb-1">
            <span>Reclamado {pct.toFixed(0)}%</span>
            <span>{vesting.claimed.toLocaleString()} / {total.toLocaleString()}</span>
          </div>
          <div className="h-2 rounded-full bg-[var(--line)] overflow-hidden">
            <div className="h-full bg-amber-400" style={{ width: `${pct}%` }} />
          </div>
        </div>
      </Card>

      <div className="flex gap-2 flex-wrap">
        <Btn onClick={claimVesting} disabled={avail <= 0 || !vesting.beneficiary}><Coins className="w-4 h-4" /> Reclamar {avail.toLocaleString()} ZNU</Btn>
        <Btn variant="ghost" onClick={() => setVestingBeneficiary('Isaac Ko')} disabled={!!vesting.beneficiary}><UserCheck className="w-4 h-4" /> Set beneficiario</Btn>
        <Btn variant="ghost" onClick={renounceVestingOwner} disabled={vesting.ownerRenounced || !vesting.beneficiary}><Flame className="w-4 h-4" /> Renunciar owner</Btn>
      </div>

      <div>
        <SectionTitle>Cronograma de vesting (estilo Berry: A 30% · pausa · B 70%)</SectionTitle>
        {vesting.schedule.length === 0 ? <EmptyState>Sin cronograma. Configura la asignación ZNU del nodo.</EmptyState> : (
          <div className="space-y-1">
            {vesting.schedule.map((t) => {
              const isPast = t.ts <= now
              return (
                <div key={t.id} className="flex items-center justify-between p-2 rounded-lg border border-[var(--line)] text-sm">
                  <span className={isPast ? 'text-white' : 'text-[var(--mut)]'}>{fmt(t.ts)}</span>
                  <span className="font-manrope">{t.amountZNU.toLocaleString()} ZNU</span>
                  <Badge color={isPast ? 'text-emerald-400' : 'text-[var(--mut)]'}>{isPast ? 'Liberado' : 'Pendiente'}</Badge>
                </div>
              )
            })}
            {next && (
              <p className="text-xs text-[var(--dim)] mt-1">Próximo unlock: {fmt(next.ts)} → {next.amountZNU.toLocaleString()} ZNU</p>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
