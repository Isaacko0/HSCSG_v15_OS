import { clsx } from 'clsx'
import type { ReactNode } from 'react'

export function Card({
  title,
  children,
  className,
  right,
}: {
  title?: string
  children: ReactNode
  className?: string
  right?: ReactNode
}) {
  return (
    <div className={clsx('bg-[var(--surf)] border border-[var(--line)] rounded-2xl p-5', className)}>
      {title && (
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-jost text-lg font-semibold">{title}</h2>
          {right}
        </div>
      )}
      {children}
    </div>
  )
}

export function Stat({
  label,
  value,
  sub,
  color,
  trend,
}: {
  label: string
  value: string
  sub?: string
  color?: string
  trend?: string
}) {
  return (
    <div className="bg-[var(--surf)] border border-[var(--line)] rounded-2xl p-5">
      <p className="text-[var(--dim)] text-sm">{label}</p>
      <p className={clsx('font-jost text-2xl font-bold mt-1', color || 'text-[var(--ink)]')}>{value}</p>
      {sub && <p className="text-[var(--dim)] text-xs mt-1">{sub}</p>}
      {trend && <p className="text-green-400 text-xs mt-1">{trend}</p>}
    </div>
  )
}

export function Bar({ value, max = 1, color = 'bg-chispa' }: { value: number; max?: number; color?: string }) {
  const pct = Math.max(0, Math.min(100, (value / max) * 100))
  return (
    <div className="h-2 rounded-full bg-[var(--surf2)] overflow-hidden">
      <div className={clsx('h-full rounded-full transition-all', color)} style={{ width: `${pct}%` }} />
    </div>
  )
}

export function Badge({
  children,
  color = 'border-[var(--line)] text-[var(--mut)]',
}: {
  children: ReactNode
  color?: string
}) {
  return <span className={clsx('px-2 py-0.5 rounded-full text-xs font-manrope border', color)}>{children}</span>
}

export function Field({
  label,
  value,
  onChange,
  type = 'number',
  step,
  suffix,
}: {
  label: string
  value: number
  onChange: (v: number) => void
  type?: string
  step?: string
  suffix?: string
}) {
  return (
    <label className="block">
      <span className="text-[var(--dim)] text-xs">
        {label}
        {suffix && ` (${suffix})`}
      </span>
      <input
        type={type}
        value={value}
        step={step}
        onChange={(e) => onChange(Number(e.target.value) || 0)}
        className="mt-1 w-full px-3 py-2 bg-[var(--surf2)] border border-[var(--line)] rounded-xl text-[var(--ink)] placeholder-[var(--dim)] focus:outline-none focus:border-chispa focus:ring-1 focus:ring-chispa text-sm"
      />
    </label>
  )
}

export function Btn({
  children,
  onClick,
  variant = 'primary',
  disabled,
  className,
}: {
  children: ReactNode
  onClick?: () => void
  variant?: 'primary' | 'ghost'
  disabled?: boolean
  className?: string
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        'px-3 py-2 rounded-xl text-sm font-manrope font-medium transition-colors',
        variant === 'primary'
          ? 'bg-[var(--grad-wish)] text-[var(--vacio)] hover:opacity-90'
          : 'border border-[var(--line)] text-[var(--mut)] hover:text-white hover:bg-[var(--surf2)]',
        disabled && 'opacity-50 cursor-not-allowed',
        className,
      )}
    >
      {children}
    </button>
  )
}

export function SectionTitle({ children }: { children: ReactNode }) {
  return <h2 className="font-jost font-semibold text-xl mb-4">{children}</h2>
}

export function EmptyState({ children }: { children: ReactNode }) {
  return <p className="text-[var(--dim)] text-sm py-6 text-center">{children}</p>
}

export function FactBandBadge({ band, score }: { band: 'VERIFIED' | 'PROBABLE' | 'POSSIBLE' | null | undefined; score?: number }) {
  if (!band) return <Badge color="bg-zinc-500/20 text-zinc-300">sin banda ({score ?? 0})</Badge>
  const map = {
    VERIFIED: 'bg-emerald-500/20 text-emerald-300',
    PROBABLE: 'bg-amber-500/20 text-amber-300',
    POSSIBLE: 'bg-sky-500/20 text-sky-300',
  } as const
  return <Badge color={map[band]}>{band}{score !== undefined ? ` · ${score}` : ''}</Badge>
}

export function EvidenceLedger({ items }: { items: { kind?: string; author: string; text: string; band?: 'VERIFIED' | 'PROBABLE' | 'POSSIBLE' | null; score?: number; detail?: string; sourceUrl?: string }[] }) {
  if (items.length === 0) return <EmptyState>Sin evidencia. El nodo reporta observaciones, no confianza.</EmptyState>
  return (
    <div className="space-y-1">
      {items.map((e, i) => (
        <div key={i} className="text-sm bg-[var(--surf-2)] rounded px-2 py-1">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[var(--dim)]">{e.author}:</span>
            <span>{e.text}</span>
            {e.kind && <Badge color="border-[var(--line)] text-[var(--mut)]">{e.kind}</Badge>}
            <FactBandBadge band={e.band} score={e.score} />
          </div>
          {e.detail && <div className="text-xs text-[var(--dim)] mt-0.5">↳ {e.detail}</div>}
          {e.sourceUrl && <div className="text-xs text-sky-400 mt-0.5 break-all">🔗 {e.sourceUrl}</div>}
        </div>
      ))}
    </div>
  )
}

// Score Schelling viz (Shivarthu): histograma de votos con mean ± 1 SD.
// Outliers (>1 SD) se atenúan; la nueva mean de 68.27% restante = consenso honesto.
export function ScoreSchellingChart({ values, newMean, kept, removed }: { values: number[]; newMean: number; kept: number[]; removed: number[] }) {
  if (values.length === 0) return <EmptyState>Sin votos para agregar (Score Schelling).</EmptyState>
  const max = Math.max(...values, newMean)
  const min = Math.min(...values, newMean)
  const range = max - min || 1
  return (
    <div className="space-y-2">
      <div className="flex items-end gap-1 h-24">
        {values.map((v, i) => {
          const isOutlier = removed.includes(Math.round(v * 1000))
          const h = ((v - min) / range) * 100
          return (
            <div key={i} className="flex-1 flex flex-col items-center justify-end h-full">
              <div
                className={clsx('w-full rounded-t', isOutlier ? 'bg-rose-500/30' : 'bg-chispa')}
                style={{ height: `${Math.max(8, h)}%` }}
                title={`${v}`}
              />
              <span className="text-[10px] text-[var(--dim)] mt-0.5">{v}</span>
            </div>
          )
        })}
      </div>
      <div className="flex items-center gap-3 text-xs flex-wrap">
        <Badge color="bg-emerald-500/20 text-emerald-300">mean honesta: {newMean.toFixed(3)}</Badge>
        <span className="text-[var(--dim)]">consenso = {kept.length}/{values.length} votos (68.27% sin outliers)</span>
        {removed.length > 0 && <span className="text-rose-300">outliers descartados: {removed.length}</span>}
      </div>
    </div>
  )
}
