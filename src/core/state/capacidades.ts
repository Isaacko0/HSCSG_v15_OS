// HSCSG v15 OS — Tipos de Capabilities (asimilado de CompAI CRM)
// Principio: "Capabilities optional by default" — el nodo funciona offline
// (ZNU/CaaS, postmonetario). Fuentes externas (USD/USDC, analytics, ad-networks)
// son capabilities que se habilitan explícitamente. Sin capability activa,
// el nodo es un jardín cerrado (sandbox deny-all egress).

export type CapabilityKey =
  | 'offline-core' // siempre on: ZNU, CaaS, CDS local
  | 'usd-refi' // oráculo ReFi Nivel 3 (priceParity)
  | 'external-analytics'
  | 'external-mesh' // red mesh LoRa/WiFi/BLE
  | 'external-github' // sincronización de repos (solo referencia)
  | 'external-crm'

export interface Capability {
  key: CapabilityKey
  label: string
  enabled: boolean
  // data boundary: qué puede salir del nodo cuando está on
  egressRule: string
  requiredMode: 'postmonetario' | 'conectado' | 'any'
}

export interface CapabilityState {
  caps: Capability[]
}

export function makeCapabilityState(): CapabilityState {
  return {
    caps: [
      { key: 'offline-core', label: 'Núcleo offline (ZNU/CaaS/CDS)', enabled: true, egressRule: 'ninguno — jardín cerrado', requiredMode: 'any' },
      { key: 'usd-refi', label: 'Oráculo ReFi (USDC)', enabled: false, egressRule: 'solo lectura priceParity', requiredMode: 'conectado' },
      { key: 'external-analytics', label: 'Analytics externo', enabled: false, egressRule: 'métricas agregadas, sin PII', requiredMode: 'conectado' },
      { key: 'external-mesh', label: 'Red mesh (LoRa/WiFi/BLE)', enabled: false, egressRule: 'solo peers firmados', requiredMode: 'any' },
      { key: 'external-github', label: 'Sync GitHub (referencia)', enabled: false, egressRule: 'solo metadatos de repo', requiredMode: 'conectado' },
      { key: 'external-crm', label: 'CRM externo', enabled: false, egressRule: 'solo contactos atestados', requiredMode: 'conectado' },
    ],
  }
}
