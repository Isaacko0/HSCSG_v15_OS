// Nextcloud — Estado
// Fuente: github.com/nextcloud/server
// Última actualización: 2026-08-25

export interface Share {
  id: string
  resourceId: string
  resourceType: 'file' | 'folder' | 'calendar' | 'contact'
  sharedBy: string
  sharedWith: string
  permissions: string[]
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
  permissions: string[]
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
  permissions: string[]
  status: string
}

export interface NextcloudState {
  shares: Share[]
  versions: FileVersion[]
  trash: TrashItem[]
  groups: UserGroup[]
  activities: ActivityEvent[]
  federatedShares: FederatedShare[]
  syncStrategy: 'manual' | 'auto' | 'offline-first'
  encryptionMode: 'none' | 'e2ee' | 'server-side'
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
