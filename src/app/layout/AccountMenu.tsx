import { CreditCard, Palette, UsersRound, Link, Plug, Download, LogOut, Trash2, X, ChevronRight, Info, Facebook } from 'lucide-react'
import { useAppStore } from '@core/state/store'

export function AccountMenu() {
  const { acct, toggleAcct, acctMsg, setAcctMsg, brand, brands } = useAppStore()

  if (!acct) return null

  const menuItems = [
    { label: 'Perfil y datos', note: 'nombre, RFC, dirección de facturación', icon: CreditCard, color: '#0c34e9' },
    { label: 'White-label activo', note: 'hscsg.os · logo y acento del nodo', icon: Palette, color: '#6524d6' },
    { label: 'Equipo y permisos', note: 'colectivo ancla · roles CDS', icon: UsersRound, color: '#0a6f61' },
    { label: 'Conexiones', note: 'DTN mesh, FABSHIP, microgrid, huerta, botica', icon: Link, color: '#8a5c00' },
    { label: 'Sensores SVD', note: 'magnetómetro, QRNG, biosensores ξ/λ', icon: Plug, color: '#0a6f61' },
    { label: 'Exportar mis datos', note: 'base material, CAC, ValueFlows, PVSO en JSON', icon: Download, color: 'var(--mut)' },
    { label: 'Cerrar sesión', note: 'en este dispositivo', icon: LogOut, color: 'var(--mut)' },
    { label: 'Reiniciar nodo', note: 'borra toda la base material local', icon: Trash2, color: '#b0245a' },
  ]

  const contactItems = [
    { label: 'Contacto', note: 'facebook.com/Isaack0o', icon: Facebook, color: '#1877f2', href: 'https://www.facebook.com/Isaack0o/' },
  ]

  return (
    <div className="fixed top-16 right-4 z-50 w-72 animate-in slide-in-from-top-2 duration-200" role="dialog" aria-label="Menú de cuenta">
      <div className="bg-[var(--surf)] border border-[var(--line)] rounded-2xl shadow-2xl overflow-hidden">
        <div className="p-4 border-b border-[var(--lineq)]">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-[var(--grad-wish)] flex items-center justify-center">
              <span className="font-jost font-bold text-xl text-[var(--vacio)]">{brands[brand]?.ini || 'HS'}</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-jost font-semibold truncate">{brands[brand]?.name || 'HSCSG v15 OS'}</p>
              <p className="text-[var(--dim)] text-sm truncate">{brands[brand]?.handle || '@cosateca'}</p>
            </div>
          </div>
        </div>

        {acctMsg && (
          <div className="p-4 border-b border-[var(--lineq)] bg-[var(--surf2)]/50">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-chispa flex-shrink-0 mt-0.5" />
              <p className="text-sm text-[var(--ink)]">{acctMsg}</p>
              <button onClick={() => setAcctMsg(null)} className="flex-shrink-0 text-[var(--dim)] hover:text-white">
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        <nav className="max-h-96 overflow-y-auto" aria-label="Opciones de cuenta">
          <ul className="divide-y divide-[var(--lineq)]" role="list">
            {menuItems.map((item, i) => (
              <li key={i}>
                <button
                  className="w-full px-4 py-3 text-left flex items-center gap-3 hover:bg-[var(--surf2)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-chispa"
                  style={{ color: item.color }}
                >
                  <item.icon className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                  <div className="flex-1 min-w-0 text-left">
                    <p className="font-manrope font-medium text-sm truncate">{item.label}</p>
                    <p className="text-[var(--dim)] text-xs truncate">{item.note}</p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-[var(--dim)] flex-shrink-0" aria-hidden="true" />
                </button>
              </li>
            ))}
          </ul>
          <ul className="divide-y divide-[var(--lineq)]" role="list">
            {contactItems.map((item, i) => (
              <li key={`c${i}`}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-4 py-3 text-left flex items-center gap-3 hover:bg-[var(--surf2)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-chispa"
                  style={{ color: item.color }}
                >
                  <item.icon className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                  <div className="flex-1 min-w-0 text-left">
                    <p className="font-manrope font-medium text-sm truncate">{item.label}</p>
                    <p className="text-[var(--dim)] text-xs truncate">{item.note}</p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-[var(--dim)] flex-shrink-0" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="p-3 border-t border-[var(--lineq)]">
          <button
            onClick={toggleAcct}
            className="w-full px-4 py-2 text-sm font-manrope font-medium rounded-xl border border-[var(--line)] text-[var(--mut)] hover:text-white hover:bg-[var(--surf2)] transition-colors"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  )
}
