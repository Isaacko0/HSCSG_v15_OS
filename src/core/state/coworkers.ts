/**
 * Coworkers — agentes con perfil durable + standing role + canal + handover humano.
 * Inspirado en OpenBot (CopilotKit/openbot) docs/coworkers.md, adaptado a nodo local HSCSG
 * (sin Postgres/CopilotKit Intelligence; estado en el store del cliente).
 *
 * Diferencia clave vs OpenBot: aquí el "computer" aislado es conceptual (un sandbox/nodo por
 * agente en el store), no un container Docker. El handover humano es local (tomar control).
 */

export interface Coworker {
  id: string
  name: string
  title: string
  role: string
  visibility: 'private' | 'public'
  owner: string
  active: boolean
  hidden: boolean // personal roster state (hide)
  /** Handover: null = Bot conduce; si humano tomó control, guarda quién y cuándo. */
  control: { by: string; since: number; reason?: string } | null
  createdAt: number
}

export interface CoworkerChannel {
  id: string
  coworkerId: string
  messages: { id: string; from: 'human' | 'bot'; text: string; ts: number }[]
  createdAt: number
}

export interface CoworkersState {
  coworkers: Coworker[]
  channels: CoworkerChannel[]
}

export const initialCoworkers: CoworkersState = {
  coworkers: [
    {
      id: 'cw_general',
      name: 'Asistente General',
      title: 'Operaciones diarias',
      role: 'Ayuda en tareas cotidianas del nodo: planifica, busca, resume.',
      visibility: 'public',
      owner: 'admin',
      active: true,
      hidden: false,
      control: null,
      createdAt: Date.now(),
    },
    {
      id: 'cw_knowledge',
      name: 'Conocimiento',
      title: 'Preguntas del nodo',
      role: 'Responde sobre fuentes asimiladas (docs/ del repo) y BRIEF.',
      visibility: 'public',
      owner: 'admin',
      active: true,
      hidden: false,
      control: null,
      createdAt: Date.now(),
    },
    {
      id: 'cw_risk',
      name: 'Analista de Riesgo',
      title: 'Riesgo y cumplimiento',
      role: 'Revisa acciones de agente contra Boundaries y señala desviaciones.',
      visibility: 'public',
      owner: 'admin',
      active: true,
      hidden: false,
      control: null,
      createdAt: Date.now(),
    },
  ],
  channels: [],
}

let counter = 0
function uid(prefix: string): string {
  counter += 1
  return `${prefix}_${Date.now().toString(36)}_${counter}`
}

export function makeCoworker(input: { name: string; title: string; role: string; visibility?: 'private' | 'public'; owner?: string }): Coworker {
  return {
    id: uid('cw'),
    name: input.name,
    title: input.title,
    role: input.role,
    visibility: input.visibility ?? 'private',
    owner: input.owner ?? 'admin',
    active: true,
    hidden: false,
    control: null,
    createdAt: Date.now(),
  }
}

export function makeChannel(coworkerId: string): CoworkerChannel {
  return { id: uid('ch'), coworkerId, messages: [], createdAt: Date.now() }
}

/** Standing role system message (como OpenBot: enviado en cada run). */
export function standingRoleMessage(cw: Coworker): string {
  return `Eres ${cw.name}, ${cw.title}.\n\n${cw.role}\n\nEste rol permanente aplica en cada canal. Trata los mensajes del canal como instrucciones específicas dentro de él.`
}
