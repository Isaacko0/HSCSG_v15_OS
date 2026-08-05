// HSCSG v15 OS — Lógica del módulo Colaberry (asimilado de Eliza)
// Agente colaborador del colectivo. Toda respuesta pasa por las 3 Leyes MJ.

import type {
  ColaberryPersona, ColaberryMessage, ColaberryChannel, Onboarding, ColaberryReminder,
} from '@core/state/colaberry'
import { evaluateMJGate } from '@core/lib/orchestration'

const uid = () => Math.random().toString(36).slice(2, 9)

export const DEFAULT_PERSONA: ColaberryPersona = {
  name: 'Colaberry',
  bio: 'Colaborador soberano del nodo HSCSG. Acompaño la regeneración de la base material y la cohesión del colectivo.',
  valuesMJ: 'Ley I: no dañar base material ni personas · Ley II: ganarse la vida soberanizando · Ley III: lucidez, nunca engañar.',
  tone: 'cálido, directo, sin jerga financiera, postmonetario',
}

// Componer respuesta del agente y evaluarla contra MJ (Ley I/II/III)
export function composeReply(
  text: string,
  ctx: { pgs: number; pop: number; usdc: number; hitsBaseMaterial: boolean },
): { pass: boolean; law?: 'I' | 'II' | 'III'; reason: string } {
  // Lenguaje extractivo/engañoso → Ley I/III (no dañar, no engañar)
  const extractive = /compra ahora|inversión garantizada|get rich|ponle dinero|rypto|token para ganar|regala tu usdc/i.test(text)
  if (extractive) {
    return { pass: false, law: 'I' as const, reason: 'Ley I/III: lenguaje extractivo o engañoso detectado. Colaberry no extrae ni engaña.' }
  }
  const g = evaluateMJGate(`reply:${text.slice(0, 40)}`, ctx)
  return { pass: g.pass, law: g.law ?? undefined, reason: g.reason }
}

// Registrar acogida de miembro (firma Social DNA)
export function onboardMember(memberName: string, channel: ColaberryChannel, signedSocialDNA: boolean): Onboarding {
  return { id: uid(), memberName, signedSocialDNA, channel, ts: Date.now() }
}

// Sugerir match usando ofertas/necesidades (delega a Solarpunk en la pantalla)
export function suggestMatchPrompt(need: string): string {
  return `Veo que el colectivo necesita "${need}". Déjame buscar en ValueFlows quién lo ofrece como don o servicio.`
}

// Crear recordatorio (Plan 90d / heartbeat)
export function makeReminder(channel: ColaberryChannel, text: string): ColaberryReminder {
  return { id: uid(), channel, text, done: false, ts: Date.now() }
}

// Construir mensaje
export function makeMessage(
  channel: ColaberryChannel, from: 'human' | 'colaberry', text: string,
  pass: boolean, law: 'I' | 'II' | 'III' | undefined, reason: string,
): ColaberryMessage {
  return { id: uid(), channel, from, text, pass, law, reason, ts: Date.now() }
}
