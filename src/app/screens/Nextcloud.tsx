import { Card, Stat } from '@components/ui'
import { Cloud, Share2, Trash2, Users, Activity, Wifi, WifiOff } from 'lucide-react'
import { useAppStore } from '@core/state/store'
import { canSync, isShareExpired, type Share, type SyncStrategy, type EncryptionMode } from '@core/lib/nextcloud'

export function Nextcloud() {
  const { nextcloud } = useAppStore()
  const {
    shares, trash, groups, activities, federatedShares,
    syncStrategy, encryptionMode, isOnline
  } = nextcloud

  const activeShares = shares.filter(s => !isShareExpired(s))
  const expiredShares = shares.filter(s => isShareExpired(s))

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-jost text-2xl md:text-3xl font-semibold flex items-center gap-2">
          <Cloud className="w-7 h-7 text-blue-400" /> Nextcloud · Soberanía de Datos
        </h1>
        <p className="text-[var(--dim)] mt-1">
          Almacenamiento self-hosted, sincronización offline-first, permisos granulares
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <Stat label="Conexión" value={isOnline ? 'ONLINE' : 'OFFLINE'} color={isOnline ? 'text-emerald-400' : 'text-rose-400'} />
        <Stat label="Estrategia Sync" value={syncStrategy} color="text-blue-400" />
        <Stat label="Cifrado" value={encryptionMode} color="text-violet-400" />
        <Stat label="Compartidos" value={`${activeShares.length}`} color="text-amber-400" />
      </div>

      <Card title="Sincronización y Seguridad">
        <div className="space-y-4">
          <div className="flex items-center justify-between p-3 rounded-lg border border-white/10 bg-white/5">
            <div className="flex items-center gap-2">
              {isOnline ? <Wifi className="w-4 h-4 text-emerald-400" /> : <WifiOff className="w-4 h-4 text-rose-400" />}
              <span className="text-sm">Estado de red</span>
            </div>
            <button
              onClick={() => useAppStore.setState((st) => ({ nextcloud: { ...st.nextcloud, isOnline: !st.nextcloud.isOnline } }))}
              className="px-3 py-1 rounded bg-white/10 text-xs hover:bg-white/20"
            >
              {isOnline ? 'Simular caída' : 'Simular online'}
            </button>
          </div>
          <div className="flex items-center justify-between p-3 rounded-lg border border-white/10 bg-white/5">
            <span className="text-sm">Estrategia de sincronización</span>
            <select
              value={syncStrategy}
              onChange={(e) => useAppStore.setState((st) => ({ nextcloud: { ...st.nextcloud, syncStrategy: e.target.value as SyncStrategy } }))}
              className="bg-white/10 rounded px-2 py-1 text-sm"
            >
              <option value="manual">Manual</option>
              <option value="auto">Auto (solo online)</option>
              <option value="offline-first">Offline-first</option>
            </select>
          </div>
          <div className="flex items-center justify-between p-3 rounded-lg border border-white/10 bg-white/5">
            <span className="text-sm">Modo de cifrado</span>
            <select
              value={encryptionMode}
              onChange={(e) => useAppStore.setState((st) => ({ nextcloud: { ...st.nextcloud, encryptionMode: e.target.value as EncryptionMode } }))}
              className="bg-white/10 rounded px-2 py-1 text-sm"
            >
              <option value="none">Sin cifrado</option>
              <option value="e2ee">End-to-End (E2EE)</option>
              <option value="server-side">Server-side</option>
            </select>
          </div>
          <div className="text-xs text-white/50">
            {canSync(syncStrategy, isOnline) ? '✅ Sincronización activa' : '⏸️ Sincronización pausada (offline)'}
          </div>
        </div>
      </Card>

      <Card title={`Comparticiones (${activeShares.length} activas, ${expiredShares.length} expiradas)`}>
        {shares.length === 0 ? (
          <div className="text-center text-white/40 py-8">
            <Share2 className="w-8 h-8 mx-auto mb-2 opacity-50" />
            <p>No hay comparticiones activas</p>
          </div>
        ) : (
          <div className="space-y-2">
            {shares.map((s) => (
              <div key={s.id} className="flex items-center justify-between p-3 rounded-lg border border-white/10 bg-white/5">
                <div className="flex items-center gap-3">
                  <Share2 className="w-4 h-4 text-blue-400" />
                  <div>
                    <div className="text-sm font-medium">{s.resourceId}</div>
                    <div className="text-xs text-white/50">
                      {s.permissions.join(', ')} · {s.sharedWith}
                      {s.expiresAt && <span className="ml-1">· expira {s.expiresAt}</span>}
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => useAppStore.setState((st) => ({ nextcloud: { ...st.nextcloud, shares: st.nextcloud.shares.filter(x => x.id !== s.id) } }))}
                  className="text-xs text-rose-400 hover:text-rose-300"
                >
                  Revocar
                </button>
              </div>
            ))}
          </div>
        )}
      </Card>

      <Card title={`Grupos de Usuarios (${groups.length})`}>
        {groups.length === 0 ? (
          <div className="text-center text-white/40 py-8">
            <Users className="w-8 h-8 mx-auto mb-2 opacity-50" />
            <p>No hay grupos configurados</p>
          </div>
        ) : (
          <div className="space-y-2">
            {groups.map((g) => (
              <div key={g.id} className="p-3 rounded-lg border border-white/10 bg-white/5 flex items-center gap-3">
                <Users className="w-4 h-4 text-sky-400" />
                <div>
                  <div className="text-sm font-medium">{g.name}</div>
                  <div className="text-xs text-white/50">{g.members.length} miembros · {g.permissions.join(', ')}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </Card>

      <Card title={`Papelera (${trash.length} items)`}>
        {trash.length === 0 ? (
          <div className="text-center text-white/40 py-8">
            <Trash2 className="w-8 h-8 mx-auto mb-2 opacity-50" />
            <p>Papelera vacía</p>
          </div>
        ) : (
          <div className="space-y-2">
            {trash.map((item) => (
              <div key={item.id} className="flex items-center justify-between p-3 rounded-lg border border-white/10 bg-white/5">
                <div className="flex items-center gap-3">
                  <Trash2 className="w-4 h-4 text-rose-400" />
                  <div>
                    <div className="text-sm font-medium">{item.originalPath}</div>
                    <div className="text-xs text-white/50">Eliminado por {item.deletedBy} · Expira {item.expiresAt}</div>
                  </div>
                </div>
                <button
                  onClick={() => useAppStore.setState((st) => ({ nextcloud: { ...st.nextcloud, trash: st.nextcloud.trash.filter(x => x.id !== item.id) } }))}
                  className="text-xs text-emerald-400 hover:text-emerald-300"
                >
                  Restaurar
                </button>
              </div>
            ))}
          </div>
        )}
      </Card>

      <Card title={`Actividad Reciente (${activities.length} eventos)`}>
        {activities.length === 0 ? (
          <div className="text-center text-white/40 py-8">
            <Activity className="w-8 h-8 mx-auto mb-2 opacity-50" />
            <p>Sin actividad registrada</p>
          </div>
        ) : (
          <div className="space-y-1 max-h-48 overflow-y-auto">
            {activities.slice(-10).reverse().map((evt) => (
              <div key={evt.id} className="flex items-center gap-2 p-2 text-xs">
                <span className="text-white/30">{evt.timestamp}</span>
                <span className="text-emerald-400">{evt.actor}</span>
                <span className="text-white/70">{evt.action}</span>
                <span className="text-white/50">{evt.resourceId}</span>
              </div>
            ))}
          </div>
        )}
      </Card>

      <Card title={`Federación (${federatedShares.length} shares cross-server)`}>
        {federatedShares.length === 0 ? (
          <div className="text-center text-white/40 py-8">
            <Cloud className="w-8 h-8 mx-auto mb-2 opacity-50" />
            <p>Sin federación activa</p>
          </div>
        ) : (
          <div className="space-y-2">
            {federatedShares.map((fs) => (
              <div key={fs.id} className="p-3 rounded-lg border border-white/10 bg-white/5">
                <div className="text-sm font-medium">{fs.resourceId} → {fs.targetUser}@{fs.targetServer}</div>
                <div className="text-xs text-white/50">{fs.permissions.join(', ')} · {fs.status}</div>
              </div>
            ))}
          </div>
        )}
      </Card>

      <Card title="Isomorfismos HSCSG ↔ Nextcloud">
        <div className="grid md:grid-cols-2 gap-3 text-xs">
          <div className="p-2 rounded bg-white/5">
            <div className="text-blue-400 font-medium">Self-hosted data sovereignty</div>
            <div className="text-white/60">→ Nodo Cosateco soberano</div>
          </div>
          <div className="p-2 rounded bg-white/5">
            <div className="text-blue-400 font-medium">Files sync (WebDAV)</div>
            <div className="text-white/60">→ DTN mesh offline-first</div>
          </div>
          <div className="p-2 rounded bg-white/5">
            <div className="text-blue-400 font-medium">Sharing permissions</div>
            <div className="text-white/60">→ Boundaries CEL (deny&gt;allow)</div>
          </div>
          <div className="p-2 rounded bg-white/5">
            <div className="text-blue-400 font-medium">2FA + Encryption</div>
            <div className="text-white/60">→ Ley I MJ (no dañar)</div>
          </div>
          <div className="p-2 rounded bg-white/5">
            <div className="text-blue-400 font-medium">User groups</div>
            <div className="text-white/60">→ Colectivo (células)</div>
          </div>
          <div className="p-2 rounded bg-white/5">
            <div className="text-blue-400 font-medium">Activity log</div>
            <div className="text-white/60">→ RAO (append-only)</div>
          </div>
          <div className="p-2 rounded bg-white/5">
            <div className="text-blue-400 font-medium">Federation (cross-server)</div>
            <div className="text-white/60">→ Federación ontogenética</div>
          </div>
          <div className="p-2 rounded bg-white/5">
            <div className="text-blue-400 font-medium">Trash bin (30 días)</div>
            <div className="text-white/60">→ Reversibilidad (Ley I)</div>
          </div>
        </div>
      </Card>
    </div>
  )
}
