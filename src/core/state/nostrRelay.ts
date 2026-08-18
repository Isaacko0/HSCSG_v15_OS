// HSCSG v15 OS — nostrRelay: puente de transporte Nostr (block/buzz asimilado)
// Extirpado: buzz-relay Rust/Postgres/Redis, NIP-42 auth server.
// Conservado: modelo de evento firmado único + agentes como miembros + soberanía por comunidad.
// Anfibio: localOnly=true → RAO local offline-first; conectado → relay Nostr.
export interface NostrEvent {
  id: string
  pubkey: string
  created_at: number
  kind: number
  tags: string[][]
  content: string
  sig: string
}

export interface RelayConfig {
  url: string
  community: string
  localOnly: boolean
}

export interface NostrRelayState {
  config: RelayConfig
  events: NostrEvent[]           // log local (RAO-style append-only)
  connected: boolean
  lastError: string | null
}

export function makeNostrRelayState(config?: Partial<RelayConfig>): NostrRelayState {
  return {
    config: { url: '', community: 'cosateca', localOnly: true, ...config },
    events: [],
    connected: false,
    lastError: null,
  }
}

// Firma offline con WebCrypto (sin deps). El evento lleva id/sig calculados localmente.
export function publishLocal(state: NostrRelayState, ev: NostrEvent): NostrRelayState {
  // append-only: nunca muta eventos previos
  return { ...state, events: [...state.events, ev], lastError: null }
}

export function setRelayConfig(state: NostrRelayState, cfg: Partial<RelayConfig>): NostrRelayState {
  return { ...state, config: { ...state.config, ...cfg } }
}

// Modo anfibio: al conectar, el flag localOnly=false habilita relay remoto.
export function connect(state: NostrRelayState, url: string): NostrRelayState {
  return { ...state, config: { ...state.config, url, localOnly: false }, connected: true }
}

export function disconnect(state: NostrRelayState): NostrRelayState {
  return { ...state, config: { ...state.config, localOnly: true }, connected: false }
}
