import {
  Mountain, Database, Eye, Users, Cpu, Coins, LayoutDashboard, Network, Users2, Bot, Leaf, MessagesSquare, ListChecks, Unlock, Link2, Briefcase, ShieldHalf,
  ChevronsLeft, ChevronsRight,
} from 'lucide-react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAppStore } from '@core/state/store'
import { clsx } from 'clsx'

const NAV_ITEMS = [
  { key: 'home', label: 'Inicio · Lucidez', icon: LayoutDashboard, color: 'text-chispa', path: '/' },
  { key: 'base', label: 'Nivel 0 · Base Material', icon: Mountain, color: 'text-emerald-400', path: '/base' },
  { key: 'lucidez', label: 'Métricas · CAC v12', icon: Database, color: 'text-lime-400', path: '/lucidez' },
  { key: 'colectivo', label: 'Nivel 1 · Colectivo', icon: Users, color: 'text-purple-400', path: '/colectivo' },
  { key: 'automata', label: 'Autómata v2 · Leyes MJ', icon: Cpu, color: 'text-cyan-400', path: '/automata' },
  { key: 'znu', label: 'ZNU v2 · Soberanía', icon: Coins, color: 'text-amber-400', path: '/znu' },
  { key: 'verificacion', label: 'Verificación Triaxial', icon: Eye, color: 'text-sky-400', path: '/verificacion' },
  { key: 'orquestacion', label: 'Orquestación · MJ', icon: Network, color: 'text-rose-400', path: '/orquestacion' },
  { key: 'caas', label: 'CaaS · Comunidad', icon: Users2, color: 'text-fuchsia-400', path: '/caas' },
  { key: 'automat', label: 'Autómata Soberano', icon: Bot, color: 'text-cyan-400', path: '/automat' },
  { key: 'solarpunk', label: 'Solarpunk · Don', icon: Leaf, color: 'text-emerald-400', path: '/solarpunk' },
  { key: 'colaberry', label: 'Colaberry · Agente', icon: MessagesSquare, color: 'text-violet-400', path: '/colaberry' },
  { key: 'priorizar', label: 'Priorizar · Colectivo', icon: ListChecks, color: 'text-orange-400', path: '/priorizar' },
  { key: 'vesting', label: 'Vesting · ZNU', icon: Unlock, color: 'text-amber-400', path: '/vesting' },
  { key: 'trustlines', label: 'Trustlines · Crédito', icon: Link2, color: 'text-teal-400', path: '/trustlines' },
  { key: 'tekitl', label: 'Tekitl · Proyectos', icon: Briefcase, color: 'text-sky-400', path: '/tekitl' },
  { key: 'soberania', label: 'Soberanía · 13 Pilares', icon: ShieldHalf, color: 'text-emerald-400', path: '/soberania' },
] as const

interface AsideProps {
  collapsed: boolean
  onToggleCollapse: () => void
}

export function Aside({ collapsed, onToggleCollapse }: AsideProps) {
  const navigate = useNavigate()
  const location = useLocation()
  const { nodeName } = useAppStore()

  const isActive = (path: string) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path)

  const asideStyle = {
    width: collapsed ? '70px' : '256px',
    transition: 'width 0.34s cubic-bezier(0.16,1,0.3,1)',
  } as React.CSSProperties

  return (
    <aside
      className="flex flex-col bg-[var(--surf)] border-r border-[var(--lineq)] flex-shrink-0 z-60"
      style={asideStyle}
      aria-label="Navegación principal"
    >
      <div className="flex items-center gap-3 p-4 border-b border-[var(--lineq)] min-h-[70px]">
        {!collapsed && (
          <>
            <div className="w-10 h-10 rounded-xl bg-[var(--grad-wish)] flex items-center justify-center flex-shrink-0">
              <span className="font-jost font-bold text-lg text-[var(--vacio)]">HS</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-jost font-semibold truncate">HSCSG v15 OS</p>
              <p className="text-[var(--dim)] text-xs truncate">{nodeName}</p>
            </div>
          </>
        )}
        {collapsed && (
          <div className="w-10 h-10 rounded-xl bg-[var(--grad-wish)] flex items-center justify-center mx-auto">
            <span className="font-jost font-bold text-lg text-[var(--vacio)]">HS</span>
          </div>
        )}
      </div>

      <nav className="flex-1 overflow-y-auto py-4 px-2" role="navigation" aria-label="Módulos">
        <ul className="space-y-1" role="list">
          {NAV_ITEMS.map((item) => (
            <li key={item.key}>
              <button
                onClick={() => navigate(item.path)}
                className={clsx(
                  'w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200',
                  'focus:outline-none focus-visible:ring-2 focus-visible:ring-chispa focus-visible:ring-offset-2 focus-visible:ring-offset-vacio',
                  isActive(item.path)
                    ? 'bg-[var(--grad-wish)] text-white shadow-[0_0_20px_rgba(175,235,0,0.25)]'
                    : 'text-[var(--mut)] hover:text-white hover:bg-[var(--surf2)]',
                  collapsed && 'justify-center px-0',
                )}
                aria-current={isActive(item.path) ? 'page' : undefined}
                title={collapsed ? item.label : undefined}
              >
                <item.icon className={clsx('w-5 h-5 flex-shrink-0', item.color)} aria-hidden="true" />
                {!collapsed && <span className="font-manrope font-medium whitespace-nowrap text-[13px]">{item.label}</span>}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4 border-t border-[var(--lineq)]">
        {!collapsed ? (
          <>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-chispa co-pulse" aria-hidden="true" />
              <span className="font-jost font-medium text-xs uppercase tracking-wide">Lucidez Material</span>
            </div>
            <p className="text-[var(--dim)] text-xs mb-3">
              La implementación es ontogénesis. El territorio es la única verdad.
            </p>
            <button
              onClick={onToggleCollapse}
              className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-xl border border-[var(--line)] text-[var(--mut)] hover:text-white hover:bg-[var(--surf2)] transition-colors"
              aria-label="Colapsar panel"
            >
              <ChevronsLeft className="w-5 h-5" />
              <span className="font-manrope font-medium">Colapsar</span>
            </button>
          </>
        ) : (
          <button
            onClick={onToggleCollapse}
            className="w-full flex items-center justify-center px-3 py-2 rounded-xl border border-[var(--line)] text-[var(--mut)] hover:text-white hover:bg-[var(--surf2)] transition-colors"
            aria-label="Expandir panel"
          >
            <ChevronsRight className="w-5 h-5" />
          </button>
        )}
      </div>
    </aside>
  )
}
