// HSCSG v15 OS — nooa: capa de Agente-OObjeto (NVIDIA OO-Agents asimilado)
// Extirpado: unifiedllm/nemo_relay_middleware (acoplado NVIDIA), nooa-cli, nooa-bench.
// Conservado: agente = clase con estado tipado, métodos visibles (tools/gen), visibilidad @hidden,
//   estrategias CodeAct/Predict, contexto/eventos opt-in, self-extending (libs/slash), canales, middleware.
// Isomorfo a agentMesh + Leyes MJ (II: base propia, III: lucidez/auditoría).
export type Strategy = 'codeact' | 'predict'

export interface NooaMethod {
  name: string
  kind: 'tool' | 'generative' // tool = determinista (cuerpo real), generative = docstring prompt (...)
  visibility: 'visible' | 'hidden' // @hidden / Annotated[T, hidden]
  strategy?: Strategy // solo generative
  returns: string // tipo de retorno (contrato)
}

export interface NooaAgent {
  id: string
  name: string
  // Estado tipado del agente (análogo a campos de clase NOOA)
  fields: { name: string; type: string; hidden: boolean }[]
  methods: NooaMethod[]
  // Contexto/Eventos (opt-in, ocultos por defecto — Ley III: auditoría)
  contextVisible: boolean
  eventsVisible: boolean
  // Self-extending
  libs: string[] // bibliotecas de skills persistentes
  // Ley II MJ: paga su existencia con base (no nube)
  autonomy: number // 0–1, análogo a AUT
  // LLM agnóstico (offline RAO ↔ conectado)
  llmMode: 'local' | 'remote'
}

export interface NooaState {
  agents: NooaAgent[]
  defaultStrategy: Strategy
}

export function makeNooaState(): NooaState {
  return { agents: [], defaultStrategy: 'codeact' }
}

let nid = 1
export function spawnNooaAgent(
  st: NooaState,
  name: string,
  opts: Partial<Omit<NooaAgent, 'id' | 'name' | 'methods' | 'fields' | 'libs'>> = {},
): NooaState {
  const agent: NooaAgent = {
    id: `nooa_${nid++}`,
    name,
    fields: [],
    methods: [],
    contextVisible: false,
    eventsVisible: false,
    libs: [],
    autonomy: 0.5,
    llmMode: 'local',
    ...opts,
  }
  return { ...st, agents: [...st.agents, agent] }
}

// Agrega un método (tool o generative) respetando visibilidad (Ley III)
export function addMethod(
  st: NooaState,
  agentId: string,
  m: Omit<NooaMethod, 'visibility'> & { visibility?: NooaMethod['visibility'] },
): NooaState {
  return {
    ...st,
    agents: st.agents.map((a) =>
      a.id === agentId
        ? { ...a, methods: [...a.methods, { visibility: 'visible', ...m }] }
        : a,
    ),
  }
}

// Extirpa secreto: marca campo/método como hidden (no va al LLM)
export function hide(st: NooaState, agentId: string, name: string): NooaState {
  return {
    ...st,
    agents: st.agents.map((a) =>
      a.id === agentId
        ? {
            ...a,
            fields: a.fields.map((f) => (f.name === name ? { ...f, hidden: true } : f)),
            methods: a.methods.map((m) => (m.name === name ? { ...m, visibility: 'hidden' } : m)),
          }
        : a,
    ),
  }
}

// Self-extending: agente aprende una librería de skills (computePool compartido)
export function extendLib(st: NooaState, agentId: string, lib: string): NooaState {
  return {
    ...st,
    agents: st.agents.map((a) =>
      a.id === agentId && !a.libs.includes(lib) ? { ...a, libs: [...a.libs, lib] } : a,
    ),
  }
}
