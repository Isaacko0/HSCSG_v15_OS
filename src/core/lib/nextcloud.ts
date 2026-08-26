// Nextcloud — Tipos compartidos (single source of truth)
// Fuente: github.com/nextcloud/server
// Última actualización: 2026-08-25

export type Permission = 'read' | 'write' | 'delete' | 'share' | 'admin'
export type EncryptionMode = 'none' | 'e2ee' | 'server-side'
export type SyncStrategy = 'manual' | 'auto' | 'offline-first'

export interface Share {
  id: string
  resourceId: string
  resourceType: 'file' | 'folder' | 'calendar' | 'contact'
  sharedBy: string
  sharedWith: string
  permissions: Permission[]
  expiresAt?: string
  createdAt: string
}

export interface FileVersion {
  id: string
  fileId: string
  version: number
  size: number
  modifiedBy: string
  modifiedAt: string
}

export interface TrashItem {
  id: string
  originalPath: string
  deletedBy: string
  deletedAt: string
  expiresAt: string
  size: number
}

export interface UserGroup {
  id: string
  name: string
  members: string[]
  permissions: Permission[]
}

export interface ActivityEvent {
  id: string
  actor: string
  action: string
  resourceId: string
  timestamp: string
}

export interface FederatedShare {
  id: string
  resourceId: string
  targetServer: string
  targetUser: string
  permissions: Permission[]
  status: string
}

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

export function canEncrypt(mode: EncryptionMode): boolean {
  return mode === 'e2ee' || mode === 'server-side'
}
