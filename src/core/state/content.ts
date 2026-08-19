// HSCSG v15 OS — content: capa de creación de contenido anfibia (ContentCreation-OS asimilado)
// Extirpado: Notion, Telegram+GCP VM, Gemini, GitHub Action.
// Conservado: captura multi-puerta -> score contra marca -> ángulos LLM -> gate humano (Ley III MJ).
// Isomorfo a Agencia.tsx (brandDNA/MJ Gate) + loopEngine (loops idempotentes).
export type IdeaStatus = 'pending' | 'approved' | 'rejected'

export interface Idea {
  id: string
  text: string
  source: 'cli' | 'telegram' | 'nostr' | 'rss' // multi-puerta (offline: cli; conectado: nostr/telegram)
  brandFit: number // 0–100, advisory (IA nunca decide)
  angles: string[] // sugerencias de guion (LLM asiste)
  status: IdeaStatus // GATE HUMANO: la única puerta (Ley III MJ)
  createdAt: number
  lane: string // categoría/temática
}

export interface NewsItem {
  id: string
  title: string
  url: string
  keyword: string
  date: string // rolling 30d
}

export interface ContentState {
  ideas: Idea[]
  news: NewsItem[]
  brandDNA: string // análogo a personal_brand.md / Agencia.tsx brandDNA
  llmMode: 'local' | 'remote' // offline RAO ↔ conectado
}

export function makeContentState(brandDNA = ''): ContentState {
  return { ideas: [], news: [], brandDNA, llmMode: 'local' }
}

let iid = 1
export function captureIdea(
  st: ContentState,
  text: string,
  opts: { source?: Idea['source']; lane?: string } = {},
): ContentState {
  const idea: Idea = {
    id: `idea_${iid++}`,
    text,
    source: opts.source ?? 'cli',
    brandFit: 0, // sin score hasta evaluar contra marca
    angles: [],
    status: 'pending', // siempre arranca pendiente; humano decide
    createdAt: Math.floor(Date.now() / 1000),
    lane: opts.lane ?? 'general',
  }
  return { ...st, ideas: [...st.ideas, idea] }
}

// Score contra marca (brandDNA) — IA asiste, advisory. NO cambia status.
export function scoreIdea(st: ContentState, ideaId: string, brandFit: number, angles: string[]): ContentState {
  return {
    ...st,
    ideas: st.ideas.map((i) =>
      i.id === ideaId ? { ...i, brandFit: Math.max(0, Math.min(100, brandFit)), angles } : i,
    ),
  }
}

// GATE HUMANO (Ley III MJ): la única puerta. La IA nunca aprueba/publica.
export function humanDecision(st: ContentState, ideaId: string, decision: 'approved' | 'rejected'): ContentState {
  return {
    ...st,
    ideas: st.ideas.map((i) => (i.id === ideaId ? { ...i, status: decision } : i)),
  }
}

// News scraper local (RSS/dedup/filter por keyword, sin LLM) — rolling 30d.
export function ingestNews(st: ContentState, items: Omit<NewsItem, 'id'>[]): ContentState {
  const seen = new Set(st.news.map((n) => n.url))
  const fresh = items.filter((n) => !seen.has(n.url)).map((n) => ({ ...n, id: `news_${Date.now()}_${Math.random().toString(36).slice(2, 7)}` }))
  const merged = [...st.news, ...fresh]
  // rolling: mantener solo últimos 30 (por date desc)
  const rolling = merged.sort((a, b) => b.date.localeCompare(a.date)).slice(0, 30)
  return { ...st, news: rolling }
}
