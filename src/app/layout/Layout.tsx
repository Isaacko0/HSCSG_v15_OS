import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { useAppStore } from '@core/state/store'
import { Aside } from './Aside'
import { Header } from './Header'
import { Coach } from './Coach'
import { Notifications } from './Notifications'
import { AccountMenu } from './AccountMenu'
import { Eye } from 'lucide-react'

export function Layout() {
  const location = useLocation()
  const { screen, collapsed, navOpen, vw, setScreen, toggleCollapse, toggleNav, setVw } = useAppStore()

  const isMobile = vw < 900

  useEffect(() => {
    const handleResize = () => setVw(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [setVw])

  useEffect(() => {
    const path = location.pathname.slice(1) || 'home'
    if (path !== screen) setScreen(path)
  }, [location.pathname, screen, setScreen])

  return (
    <div className="flex h-screen w-full bg-vacio overflow-hidden font-manrope">
      {isMobile && navOpen && (
        <div className="fixed inset-0 z-50 bg-vacio/50 backdrop-blur-sm" onClick={toggleNav} aria-hidden="true" />
      )}
      <Aside
        collapsed={collapsed}
        onToggleCollapse={toggleCollapse}
      />
      <main className="flex-1 flex flex-col overflow-hidden min-w-0">
        <Header
          collapsed={collapsed}
          onToggleCollapse={toggleCollapse}
          onToggleNav={toggleNav}
          isMobile={isMobile}
          navOpen={navOpen}
        />
        <div className="lucidez-banner items-center gap-2 px-4 md:px-6 py-1.5 bg-chispa/15 border-b border-chispa/40 text-[var(--ink)] text-xs font-manrope">
          <Eye className="w-4 h-4 text-chispa" aria-hidden="true" />
          <span><strong>Modo Lucidez activo</strong> · Ley III: lucidez, nunca engañar. Tema diurno + datos crudos y provenance visibles en cada módulo.</span>
        </div>
        <div className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
          <Outlet />
        </div>
      </main>
      <Coach />
      <Notifications />
      <AccountMenu />
    </div>
  )
}
