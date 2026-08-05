import { Bell, X, Check, AlertCircle, Info, Clock } from 'lucide-react'
import { useAppStore } from '@core/state/store'
import { clsx } from 'clsx'

export function Notifications() {
  const { notif, toggleNotif, notifList } = useAppStore()
  
  if (!notif) return null
  
  return (
    <div className="fixed top-16 right-4 z-50 w-full max-w-sm animate-in slide-in-from-top-2 duration-200" role="dialog" aria-label="Notificaciones">
      <div className="bg-[var(--surf)] border border-[var(--line)] rounded-2xl shadow-2xl overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b border-[var(--lineq)]">
          <h3 className="font-jost font-semibold">Notificaciones</h3>
          <button
            onClick={toggleNotif}
            className="w-8 h-8 flex items-center justify-center rounded-lg text-[var(--mut)] hover:text-white hover:bg-[var(--surf3)] transition-colors"
            aria-label="Cerrar notificaciones"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        
        <div className="max-h-96 overflow-y-auto">
          {notifList.length === 0 ? (
            <div className="p-8 text-center text-[var(--dim)]">
              <Bell className="w-12 h-12 mx-auto mb-3 opacity-30" aria-hidden="true" />
              <p>No hay notificaciones</p>
              <p className="text-xs mt-1">Cuando algo requiera tu atención, aparecerá aquí</p>
            </div>
          ) : (
            <ul className="divide-y divide-[var(--lineq)]" role="list">
              {notifList.map((n, i) => (
                <li key={i} className="p-4 hover:bg-[var(--surf2)] transition-colors">
                  <button
                    onClick={() => { n.onClick(); toggleNotif(); }}
                    className="w-full text-left flex items-start gap-3"
                  >
                    <div className={clsx(
                      'w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0',
                      n.type === 'alert' && 'bg-red-500/20 text-red-400',
                      n.type === 'success' && 'bg-green-500/20 text-green-400',
                      n.type === 'info' && 'bg-blue-500/20 text-blue-400',
                      n.type === 'warning' && 'bg-yellow-500/20 text-yellow-400',
                    )}>
                      {n.type === 'alert' && <AlertCircle className="w-4 h-4" />}
                      {n.type === 'success' && <Check className="w-4 h-4" />}
                      {n.type === 'info' && <Info className="w-4 h-4" />}
                      {n.type === 'warning' && <Clock className="w-4 h-4" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-manrope font-medium text-sm">{n.title}</p>
                      <p className="text-[var(--dim)] text-xs mt-0.5 line-clamp-2">{n.body}</p>
                      <p className="text-[var(--dim)] text-[10px] mt-1">{n.time}</p>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}
