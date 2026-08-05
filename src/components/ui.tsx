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
