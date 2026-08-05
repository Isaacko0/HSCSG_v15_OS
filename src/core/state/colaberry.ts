// HSCSG v15 OS — Tipos del módulo Colaberry (asimilado de Eliza / HR_AI_Agent-collaberry-HSCSG)
// Agente colaborador del colectivo: personaje + memoria + canales, gobernado por MJ.

export type ColaberryChannel = 'chat_colectivo' | 'solarpunk' | 'orquestacion'

export interface ColaberryPersona {
  name: string
  bio: string
  valuesMJ: string // resumen de las 3 Leyes MJ que guían al agente
  tone: string
}

export interface ColaberryMessage {
  id: string
  channel: ColaberryChannel
  from: 'human' | 'colaberry'
  text: string
  pass: boolean
  law?: 'I' | 'II' | 'III'
  reason: string
  ts: number
}

export interface Onboarding {
  id: string
  memberName: string
  signedSocialDNA: boolean
  channel: ColaberryChannel
  ts: number
}

export interface ColaberryReminder {
  id: string
  channel: ColaberryChannel
  text: string
  done: boolean
  ts: number
}

export interface ColaberryState {
  persona: ColaberryPersona
  channels: ColaberryChannel[]
  messages: ColaberryMessage[]
  onboardings: Onboarding[]
  reminders: ColaberryReminder[]
}
