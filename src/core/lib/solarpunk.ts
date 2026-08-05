// HSCSG v15 OS — Lógica del módulo Solarpunk (asimilado de lizTheDeveloper + Isaacko0)
// Economía del don offline-first + ValueFlows + Web of Trust. Medios: don | znu.

import type {
  Offer, Need, Exchange, Vouch, MeshStatus, SanctuaryEvent, ExchangeMedium,
} from '@core/state/solarpunk'

const uid = () => Math.random().toString(36).slice(2, 9)

// Matchmaking ofertas↔necesidades (por tipo/kind, no por precio)
export function matchOffersNeeds(offers: Offer[], needs: Need[]) {
  const matches: { offer: Offer; need: Need }[] = []
  for (const n of needs) {
    const o = offers.find((of) => of.kind === n.kind && of.id)
    if (o) matches.push({ offer: o, need: n })
  }
  return matches
}

// Web of Trust: trustScore de un member = suma de pesos de avales recibidos (normalizado)
export function trustScore(memberId: string, vouches: Vouch[]): number {
  const received = vouches.filter((v) => v.to === memberId)
  if (received.length === 0) return 0
  const sum = received.reduce((acc, v) => acc + v.weight, 0)
  return Math.min(1, sum / Math.max(1, received.length))
}

// Índice post-monetario: % de intercambios resueltos por DON vs total
export function postMonetaryIndex(exchanges: Exchange[]): number {
  if (exchanges.length === 0) return 0
  const don = exchanges.filter((e) => e.medium === 'don').length
  return Math.round((don / exchanges.length) * 100)
}

// Evaluar activación de red santuario (gate Ley I MJ: proteger personas en riesgo)
export function evaluateSanctuary(reason: string, trustOfActor: number): { pass: boolean; note: string } {
  // Ley I: proteger vida/integridad ante riesgo. Requiere confianza mínima para evitar abuso.
  if (trustOfActor < 0.2) return { pass: false, note: 'Confianza insuficiente (Web of Trust < 0.2). Posible abuso.' }
  if (/riesgo|peligro|emergencia|violencia|salud/i.test(reason)) return { pass: true, note: 'Ley I: protección de persona en riesgo autorizada.' }
  return { pass: false, note: 'Sin señal de riesgo. Ley I no aplica a activación rutinaria.' }
}

// Estado de malla (supervivencia de red)
export function meshStatus(online: boolean, peers: number): MeshStatus {
  return { online, peers, lastSync: online ? Date.now() : null }
}

// Constructor de entidades
export const makeOffer = (resource: string, kind: Offer['kind'], from: string): Offer => ({ id: uid(), resource, kind, from, createdAt: Date.now() })
export const makeNeed = (resource: string, kind: Need['kind'], by: string): Need => ({ id: uid(), resource, kind, by, createdAt: Date.now() })
export const makeExchange = (offerId: string, needId: string, medium: ExchangeMedium, znuAmount = 0): Exchange => ({ id: uid(), offerId, needId, medium, znuAmount, ts: Date.now() })
export const makeVouch = (from: string, to: string, weight: number): Vouch => ({ id: uid(), from, to, weight, ts: Date.now() })
export const makeSanctuary = (reason: string, by: string): SanctuaryEvent => ({ id: uid(), reason, activatedAt: Date.now(), by })
