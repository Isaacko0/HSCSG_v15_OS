import { Menu, X, Search, Bell, ChevronsRight, ChevronsLeft, Moon, Sun } from 'lucide-react'
import { useAppStore } from '@core/state/store'
import { clsx } from 'clsx'

const SCREENS: Record<string, string> = {
  home: 'Inicio · Lucidez Material',
  base: 'Nivel 0 · Base Material',
  lucidez: 'Métricas · CAC v12',
  colectivo: 'Nivel 1 · Colectivo Ontogenético',
  automata: 'Autómata v2 · Leyes MJ',
  znu: 'ZNU v2 · Soberanía Material',
  verificacion: 'Verificación Triaxial',
}

export function Header({ collapsed, onToggleCollapse, onToggleNav, isMobile, navOpen }: {
  collapsed: boolean; onToggleCollapse: () => void; onToggleNav: () => void; isMobile: boolean; navOpen: boolean
}) {
  const { screen, nodeName, notif, toggleNotif, acct, toggleAcct, search, setSearch, lucidez, toggleLucidez } = useAppStore()

  return (
    <header className={clsx(
      'flex items-center flex-wrap gap-3 md:gap-4 px-4 md:px-6',
      'border-b border-[var(--lineq)] bg-[var(--surf)]/80 backdrop-blur-xl',
      collapsed && !isMobile ? 'pl-20' : 'pl-0',
    )} style={{ minHeight: '64px' }} role="banner">
      {isMobile && (
        <button onClick={onToggleNav} className="w-10 h-10 flex items-center justify-center rounded-xl border border-[var(--line)] text-[var(--mut)] hover:text-white hover:bg-[var(--surf2)] transition-colors flex-shrink-0" aria-label="Menú" aria-expanded={navOpen}>
          {navOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      )}
      {!isMobile && (
        <button onClick={onToggleCollapse} className="w-10 h-10 flex items-center justify-center rounded-xl border border-[var(--line)] text-[var(--mut)] hover:text-white hover:bg-[var(--surf2)] transition-colors flex-shrink-0" aria-label="Colapsar">
          {collapsed ? <ChevronsRight className="w-5 h-5" /> : <ChevronsLeft className="w-5 h-5" />}
        </button>
      )}
      <div className={clsx('flex items-center gap-3 min-w-0', collapsed && !isMobile ? 'w-16' : 'flex-1')}>
        {!collapsed && (
          <h1 className="font-jost font-semibold text-lg truncate">{SCREENS[screen] || nodeName}</h1>
        )}
      </div>
      <div className="flex-1" />
      <div className={clsx('relative flex-1 max-w-md', collapsed && !isMobile && 'hidden')}>
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--dim)]" aria-hidden="true" />
        <input
          type="search"
          placeholder="Buscar en HSCSG v15 OS…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2 bg-[var(--surf2)] border border-[var(--line)] rounded-xl text-[var(--ink)] placeholder-[var(--dim)] focus:outline-none focus:border-chispa focus:ring-1 focus:ring-chispa transition-colors text-sm"
          aria-label="Buscar"
        />
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={toggleLucidez}
          className={clsx(
            'flex items-center gap-2 h-10 px-3 rounded-xl border transition-colors',
            lucidez
              ? 'border-chispa text-[var(--ink)] bg-[var(--surf2)]'
              : 'border-[var(--line)] text-[var(--mut)] hover:text-white hover:bg-[var(--surf2)]',
          )}
          aria-label="Modo Lucidez (Ley III: transparencia radical)"
          aria-pressed={lucidez}
          title="Modo Lucidez · Ley III: lucidez, nunca engañar. Invierte a tema diurno y revela datos crudos."
        >
          {lucidez ? <Sun className="w-4 h-4 text-chispa" /> : <Moon className="w-4 h-4" />}
          <span className="text-xs hidden md:flex items-center gap-1">
            {lucidez ? 'Lucidez ON' : 'modo lucidez'}
          </span>
        </button>
        <button onClick={toggleNotif} className="w-10 h-10 flex items-center justify-center rounded-xl border border-[var(--line)] text-[var(--mut)] hover:text-white hover:bg-[var(--surf2)] transition-colors relative" aria-label="Notificaciones" aria-expanded={notif}>
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-amber-400 rounded-full" aria-hidden="true" />
        </button>
        <button onClick={toggleAcct} className="flex items-center gap-2 w-10 h-10 px-3 rounded-xl border border-[var(--line)] text-[var(--mut)] hover:text-white hover:bg-[var(--surf2)] transition-colors" aria-label="Cuenta" aria-expanded={acct}>
          <div className="w-8 h-8 rounded-xl bg-[var(--grad-wish)] flex items-center justify-center flex-shrink-0">
            <span className="font-jost font-bold text-xs text-[var(--vacio)]">HS</span>
          </div>
        </button>
      </div>
    </header>
  )
}
