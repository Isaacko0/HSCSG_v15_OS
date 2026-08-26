# Nextcloud Server — Integración Operativa con HSCSG v15 OS

**Objetivo:** Integrar el modelo de soberanía de datos, sincronización P2P, permisos granulares y colaboración de Nextcloud como **módulo vivo HSCSG** — bajo el principio anfibio (extirpar infra PHP/MySQL, conservar lógica pura de permisos, compartición, sincronización).

---

## 1. Perspectiva Usuario

### Qué quiere lograr el usuario HSCSG con Nextcloud

| Necesidad | Solución Nextcloud | Aplicación HSCSG |
|-----------|-------------------|------------------|
| **Almacenamiento soberano** | Self-hosted files (WebDAV) | Base Material (AUT_HABI) — archivos del nodo |
| **Comunicación offline** | Sincronización P2P | DTN mesh — funciona sin internet |
| **Permisos granulares** | ACL por archivo/carpeta | Boundaries CEL — deny>allow, fail-closed |
| **Colaboración** | Chat, video, calendario, tareas | Vasos comunicantes + Tekitl |
| **Seguridad** | 2FA, encryption, auditoría | Ley I MJ — no dañar base material |
| **Extensibilidad** | 200+ apps/plugins | Arquitectura modular HSCSG |
| **Federación** | Compartición cross-server | Federación ontogenética |

### Casos de Uso

1. **Nodo Cosateca con archivos soberanos**: El colectivo almacena documentos, fotos, backups en su propio servidor Nextcloud — sin depender de Google/Dropbox.
2. **Sincronización offline**: Los dispositivos del nodo sincronizan archivos vía DTN mesh cuando no hay internet.
3. **Compartición segura con externos**: Compartir archivos con permisos granulares (solo lectura, expiración, password).
4. **Colaboración en documentos**: Edición colaborativa de textos, hojas de cálculo, presentaciones.
5. **Calendario y tareas compartidos**: Gestión de eventos y proyectos del nodo.

---

## 2. Perspectiva LLM (Asimilación)

### Qué ASIMILAR (lógica pura)

| Patrón Nextcloud | Módulo HSCSG | Tipo |
|-------------------|--------------|------|
| **ACL granular** (read/write/delete/share) | `lib/nextcloud.ts` → `Permission` types | Lógica pura |
| **Modelo de compartición** (usuarios/grupos/links) | `lib/nextcloud.ts` → `Share` types | Lógica pura |
| **Sincronización P2P** (WebDAV + conflict resolution) | `lib/nextcloud.ts` → `SyncStrategy` | Lógica pura |
| **Cifrado end-to-end** | `lib/nextcloud.ts` → `EncryptionMode` | Lógica pura |
| **Version control** (file history) | `lib/nextcloud.ts` → `FileVersion` | Lógica pura |
| **Trash bin** (reversibilidad) | `lib/nextcloud.ts` → `TrashItem` | Lógica pura |
| **User groups** (organización social) | `lib/nextcloud.ts` → `UserGroup` | Lógica pura |
| **Activity log** (auditoría) | `lib/nextcloud.ts` → `ActivityEvent` | Lógica pura |
| **Federation** (cross-server sharing) | `lib/nextcloud.ts` → `FederatedShare` | Lógica pura |

### Qué EXTIRPAR (infra ajena)

| Componente Nextcloud | Por qué extirpar | Sustituto HSCSG |
|---------------------|------------------|-----------------|
| PHP 8.x + Symfony backend | HSCSG es SPA React | Zustand + localStorage |
| MySQL/MariaDB/PostgreSQL | Sin backend | localStorage (offline) |
| Apache/Nginx + PHP-FPM | Sin servidor | Vite + SPA |
| Docker/CI/CD | No aplica | — |
| BrowserStack/WAVE/Lighthouse | Testing externo | — |
| HackerOne bounty | Seguridad externa | Ley I MJ (fail-closed) |
| WebDAV protocol | Protocolo HTTP | DTN mesh (offline) |
| OAuth2/SAML/LDAP | Auth externa | ERC-8004 + Social DNA |

---

## 3. Perspectiva HSCSG + CaaS

### Isomorfismo con Leyes MJ

| Ley MJ | Mecanismo Nextcloud | Implementación HSCSG |
|--------|---------------------|----------------------|
| **Ley I** (no dañar) | 2FA, encryption, brute-force protection | Boundaries CEL fail-closed |
| **Ley II** (ganarse la vida) | Self-hosting = soberanía | Nodo Cosateco = AUT × CDS |
| **Ley III** (lucidez) | Activity log, version control | RAO append-only |

### Isomorfismo con CaaS

| Principio CaaS | Mecanismo Nextcloud | Implementación HSCSG |
|----------------|---------------------|----------------------|
| **Acceso por contribución** | Compartir archivos = contribuir | ValueFlows (LaborFlow) |
| **Post-monetario** | Gratis (open-source) | ZNU (demurrage) |
| **Soberanía** | Self-hosted = control local | Nodo Cosateco offline |
| **Federación** | Cross-server sharing | Federación ontogenética |

### Vasos Comunicantes Afectados

| Vaso | Conexión Nextcloud |
|------|-------------------|
| **infra:connect** | Almacenamiento + sincronización |
| **trust:bridge** | Permisos granulares + compartición |
| **intel:match** | Activity log + version control |
| **app:federate** | Federación cross-server |
| **eco:sync** | Base Material (AUT_HABI) |

---

## 4. Módulos TypeScript a Implementar

### `src/core/lib/nextcloud.ts` (Lógica Pura)

```typescript
// Tipos de permisos
export type Permission = 'read' | 'write' | 'delete' | 'share' | 'admin'

// Modo de cifrado
export type EncryptionMode = 'none' | 'e2ee' | 'server-side'

// Estrategia de sincronización
export type SyncStrategy = 'manual' | 'auto' | 'offline-first'

// Compartición
export interface Share {
  id: string
  resourceId: string
  resourceType: 'file' | 'folder' | 'calendar' | 'contact'
  sharedBy: string
  sharedWith: string | string[]  // usuario, grupo, o link público
  permissions: Permission[]
  expiresAt?: string
  password?: string
  createdAt: string
}

// Versión de archivo
export interface FileVersion {
  id: string
  fileId: string
  version: number
  size: number
  modifiedBy: string
  modifiedAt: string
  comment?: string
}

// Papelera (reversibilidad)
export interface TrashItem {
  id: string
  originalPath: string
  deletedBy: string
  deletedAt: string
  expiresAt: string  // 30 días por defecto
  size: number
}

// Grupo de usuarios
export interface UserGroup {
  id: string
  name: string
  members: string[]
  permissions: Permission[]
  createdAt: string
}

// Evento de actividad (auditoría)
export interface ActivityEvent {
  id: string
  actor: string
  action: 'create' | 'read' | 'update' | 'delete' | 'share' | 'sync'
  resourceId: string
  resourceType: string
  timestamp: string
  metadata?: Record<string, unknown>
}

// Compartición federada
export interface FederatedShare {
  id: string
  resourceId: string
  targetServer: string
  targetUser: string
  permissions: Permission[]
  status: 'pending' | 'accepted' | 'rejected'
  createdAt: string
}

// Funciones puras
export function canPerformAction(
  userPermissions: Permission[],
  required: Permission
): boolean {
  return userPermissions.includes(required) || userPermissions.includes('admin')
}

export function isShareExpired(share: Share): boolean {
  if (!share.expiresAt) return false
  return new Date(share.expiresAt) < new Date()
}

export function getShareStatus(share: Share): 'active' | 'expired' | 'revoked' {
  if (isShareExpired(share)) return 'expired'
  return 'active'
}

export function canSync(
  strategy: SyncStrategy,
  isOnline: boolean
): boolean {
  switch (strategy) {
    case 'manual': return true
    case 'auto': return isOnline
    case 'offline-first': return true
    default: return false
  }
}

export function getTrashExpiryDate(deletedAt: string): string {
  const date = new Date(deletedAt)
  date.setDate(date.getDate() + 30)
  return date.toISOString()
}

export function isTrashExpired(item: TrashItem): boolean {
  return new Date(item.expiresAt) < new Date()
}

export function hasVersionHistory(fileId: string, versions: FileVersion[]): boolean {
  return versions.filter(v => v.fileId === fileId).length > 1
}

export function getLatestVersion(fileId: string, versions: FileVersion[]): FileVersion | undefined {
  const fileVersions = versions.filter(v => v.fileId === fileId)
  return fileVersions.sort((a, b) => b.version - a.version)[0]
}

export function canFederate(
  localServer: string,
  targetServer: string
): boolean {
  return localServer !== targetServer
}
```

### `src/core/state/nextcloud.ts` (Estado)

```typescript
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface NextcloudState {
  shares: Share[]
  versions: FileVersion[]
  trash: TrashItem[]
  groups: UserGroup[]
  activities: ActivityEvent[]
  federatedShares: FederatedShare[]
  syncStrategy: SyncStrategy
  encryptionMode: EncryptionMode
  isOnline: boolean
}

export const makeNextcloudState = (): NextcloudState => ({
  shares: [],
  versions: [],
  trash: [],
  groups: [],
  activities: [],
  federatedShares: [],
  syncStrategy: 'offline-first',
  encryptionMode: 'none',
  isOnline: true
})

// Acciones
export const useNextcloudStore = create<NextcloudState & {
  addShare: (share: Share) => void
  revokeShare: (id: string) => void
  addVersion: (version: FileVersion) => void
  moveToTrash: (item: TrashItem) => void
  restoreFromTrash: (id: string) => void
  addGroup: (group: UserGroup) => void
  logActivity: (event: ActivityEvent) => void
  addFederatedShare: (share: FederatedShare) => void
  setSyncStrategy: (strategy: SyncStrategy) => void
  setEncryptionMode: (mode: EncryptionMode) => void
  setOnlineStatus: (status: boolean) => void
}>(
  persist(
    (set) => ({
      ...makeNextcloudState(),
      addShare: (share) => set((s) => ({ shares: [...s.shares, share] })),
      revokeShare: (id) => set((s) => ({ shares: s.shares.filter((x) => x.id !== id) })),
      addVersion: (version) => set((s) => ({ versions: [...s.versions, version] })),
      moveToTrash: (item) => set((s) => ({ trash: [...s.trash, item] })),
      restoreFromTrash: (id) => set((s) => ({ trash: s.trash.filter((x) => x.id !== id) })),
      addGroup: (group) => set((s) => ({ groups: [...s.groups, group] })),
      logActivity: (event) => set((s) => ({ activities: [...s.activities, event] })),
      addFederatedShare: (share) => set((s) => ({ federatedShares: [...s.federatedShares, share] })),
      setSyncStrategy: (strategy) => set({ syncStrategy: strategy }),
      setEncryptionMode: (mode) => set({ encryptionMode: mode }),
      setOnlineStatus: (status) => set({ isOnline: status })
    }),
    { name: 'hscsg.nextcloud' }
  )
)
```

---

## 5. Pantalla `/nextcloud`

La pantalla muestra:
- **Estado de conexión** (online/offline)
- **Estrategia de sincronización** (manual/auto/offline-first)
- **Modo de cifrado** (none/e2ee/server-side)
- **Comparticiones activas** (lista con permisos, expiración)
- **Papelera** (items eliminados con fecha de expiración)
- **Actividad reciente** (log de auditoría)
- **Grupos de usuarios** (organización social)

---

## 6. Plan de Implementación

| Paso | Acción | Estado |
|------|--------|--------|
| 1 | Crear `docs/nextcloud_backup.md` | ✅ |
| 2 | Crear `docs/nextcloud_integration.md` | ✅ |
| 3 | Crear `src/core/lib/nextcloud.ts` | ⏳ |
| 4 | Crear `src/core/state/nextcloud.ts` | ⏳ |
| 5 | Crear `src/app/screens/Nextcloud.tsx` | ⏳ |
| 6 | Actualizar `store.ts` | ⏳ |
| 7 | Actualizar `App.tsx` | ⏳ |
| 8 | Actualizar `Aside.tsx` | ⏳ |
| 9 | Actualizar `i18n.ts` | ⏳ |
| 10 | Build + verificación | ⏳ |

---

## 7. Prioridad

**P1 — Alta**: Nextcloud es la plataforma de referencia mundial para soberanía de datos. Su modelo de permisos granulares, sincronización P2P y federación es directamente aplicable a HSCSG (DTN mesh, Boundaries CEL, ValueFlows).

---

*Documento generado: 2026-08-25 | Fuente: github.com/nextcloud/server*