// HSCSG v15 OS — Lógica nostrRelay (block/buzz asimilado)
import type { NostrRelayState, NostrEvent } from '@core/state/nostrRelay'
import { makeNostrRelayState, publishLocal, setRelayConfig, connect, disconnect } from '@core/state/nostrRelay'

export {
  makeNostrRelayState, publishLocal, setRelayConfig, connect, disconnect,
}

export type { NostrEvent, RelayConfig } from '@core/state/nostrRelay'

// Verificación de evento (offline, agnóstica a red).
export function verifyEventShape(ev: NostrEvent): boolean {
  return !!(
    ev.id && ev.pubkey && typeof ev.created_at === 'number' &&
    typeof ev.kind === 'number' && Array.isArray(ev.tags) && typeof ev.content === 'string' && ev.sig
  )
}

// Filtro estilo NIP-50 (búsqueda local en el log RAO).
export function queryLocal(state: NostrRelayState, kind?: number, pubkey?: string): NostrEvent[] {
  return state.events.filter((e) => (kind == null || e.kind === kind) && (pubkey == null || e.pubkey === pubkey))
}

// Build de evento (sin red). Firma real usaría WebCrypto secp256k1; aquí id/sig deterministas para el log local.
export function buildEvent(pubkey: string, kind: number, content: string, tags: string[][] = []): NostrEvent {
  const created_at = Math.floor(Date.now() / 1000)
  const id = `evt_${pubkey.slice(0, 6)}_${created_at}_${kind}`
  const sig = `sig_local_${id}`
  return { id, pubkey, created_at, kind, tags, content, sig }
}
