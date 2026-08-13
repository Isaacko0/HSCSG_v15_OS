// Symbiosky — lógica pura de credibilidad por convicción (offline-first, sin EVM)
// Asimilado de GitLab: blockchain-projects-ecosymra/symbiosky-whitpaper + contract-evm + nostr.
// Extirpado: EVM/Solidity/Foundry, SYSKY ERC20, AT Protocol/Bluesky/Nostr remotos.
// Sustituido por: ZNU (acceso CaaS), federación DTN/AP local, MJ Gate + CDS.

// ============ PARÁMETROS (extraídos del whitepaper + contratos) ============
export const SYMBIOSKY_PARAMS = {
  /** decay anual por inactividad sobre el exceso (ConvictionStorage.inactivityDecayBps = 500 = 5%) */
  INACTIVITY_DECAY_BPS: 500,
  /** protección = convictionStake × multiplier (default 1x) */
  CONVICTION_PROTECTION_BPS: 10000,
  /** lock máximo de convicción (VotingController.MAX_LOCK_DURATION = 5*365 days) */
  MAX_LOCK_DURATION_DAYS: 5 * 365,
  /** umbral mínimo de votos para fondos (whitepaper §5.3) */
  MIN_VOTES: 50,
  /** umbral mínimo de convicción ponderada (whitepaper §5.3) */
  MIN_CONVICTION: 10,
  /** score < 5 no recibe fondos (whitepaper §5.2) */
  SCORE_THRESHOLD: 5,
  /** multiplicador de recompensa por punto de score (ej. 100 tokens) */
  REWARD_MULTIPLIER: 100,
  /** reward máximo por propuesta (ProposalController.MAX_REWARD_PER_PROPOSAL = 1000e18) */
  MAX_REWARD_PER_PROPOSAL: 1000,
  /** distribución mensual */
  DISTRIBUTION_DAYS: 30,
  /** timelock de config (ConfigController.CONFIG_TIMELOCK_DELAY = 20 days) */
  CONFIG_TIMELOCK_DAYS: 20,
} as const

export type ConvictionLevel = 1 | 2 | 3 | 4 | 5

// ============ TIPOS ============
export interface Proposal {
  id: string
  title: string
  author: string
  /** votes: address(nodo) -> { score 1-10, convictionLevel } */
  votes: Record<string, { score: number; conviction: ConvictionLevel }>
  createdAt: number
  /** FASE de votación (Shivarthu commit-reveal): 'commit' -> 'reveal' -> 'closed' */
  phase: 'commit' | 'reveal' | 'closed'
  /** commits pendientes: voter -> { hash, salt } (revelados en fase reveal) */
  commits: Record<string, { hash: string; salt: string }>
}

export interface ConvictionLock {
  id: string
  voter: string
  /** ZNU bloqueado ∝ convictionLevel */
  lockedZNU: number
  level: ConvictionLevel
  lockedAt: number
  /** días de lock (hasta MAX_LOCK_DURATION_DAYS) */
  lockDays: number
}

export interface CredibilityState {
  proposals: Proposal[]
  locks: ConvictionLock[]
  /** balance ZNU por nodo (para decay por inactividad) */
  balances: Record<string, number>
  /** última actividad por nodo (para decay) */
  lastActive: Record<string, number>
  /** scores finales por propuesta (tras cierre) */
  results: Record<string, { meanScore: number; reward: number; funded: boolean }>
}

export function makeCredibilityState(): CredibilityState {
  return { proposals: [], locks: [], balances: {}, lastActive: {}, results: {} }
}

// ============ CONVICCIÓN ============
/** convicción ponderada = suma(score × level) / suma(level) → peso por nivel */
export function weightedConviction(p: Proposal): { meanScore: number; totalConviction: number } {
  let sw = 0 // suma score×level
  let lw = 0 // suma level
  for (const v of Object.values(p.votes)) {
    const sc = Math.max(0, Math.min(10, v.score))
    sw += sc * v.conviction
    lw += v.conviction
  }
  const meanScore = lw > 0 ? sw / lw : 0
  return { meanScore, totalConviction: lw }
}

/** ¿Cumple umbrales para ser financiada? (whitepaper §5.3) */
export function meetsThreshold(p: Proposal): boolean {
  const voteCount = Object.keys(p.votes).length
  const { totalConviction } = weightedConviction(p)
  return voteCount >= SYMBIOSKY_PARAMS.MIN_VOTES && totalConviction >= SYMBIOSKY_PARAMS.MIN_CONVICTION
}

/** reward = mean_score × multiplier, con tope y umbral de calidad (§5.2) */
export function computeReward(p: Proposal): { meanScore: number; reward: number; funded: boolean } {
  const { meanScore, totalConviction } = weightedConviction(p)
  const voteCount = Object.keys(p.votes).length
  const passes = voteCount >= SYMBIOSKY_PARAMS.MIN_VOTES && totalConviction >= SYMBIOSKY_PARAMS.MIN_CONVICTION
  if (!passes || meanScore < SYMBIOSKY_PARAMS.SCORE_THRESHOLD) {
    return { meanScore, reward: 0, funded: false }
  }
  const reward = Math.min(
    SYMBIOSKY_PARAMS.MAX_REWARD_PER_PROPOSAL,
    Math.round(meanScore * SYMBIOSKY_PARAMS.REWARD_MULTIPLIER),
  )
  return { meanScore, reward, funded: true }
}

// ============ DECAY POR INACTIVIDAD (§6.2) ============
/** decay solo sobre el exceso sobre el umbral protegido (convictionStake × 1x) */
export function decayBalance(
  balance: number,
  protectedZNU: number,
  yearsInactive: number,
): number {
  const excess = Math.max(0, balance - protectedZNU)
  if (excess <= 0) return balance
  const decay = excess * (SYMBIOSKY_PARAMS.INACTIVITY_DECAY_BPS / 10000) * yearsInactive
  return Math.max(protectedZNU, balance - decay)
}

/** protección = suma de ZNU en convicciones activas (ConvictionProtection 1x) */
export function protectedAmount(locks: ConvictionLock[], voter: string): number {
  return locks
    .filter((l) => l.voter === voter)
    .reduce((acc, l) => acc + l.lockedZNU, 0)
}

// ============ ANTI-WHALE (§6.4) ============
/** influencia cara = iliquidez: el lock máximo limita la convicción */
export function maxConvictionForLock(lockDays: number): ConvictionLevel {
  const ratio = lockDays / SYMBIOSKY_PARAMS.MAX_LOCK_DURATION_DAYS
  if (ratio >= 1) return 5
  if (ratio >= 0.6) return 4
  if (ratio >= 0.4) return 3
  if (ratio >= 0.2) return 2
  return 1
}

// ============ ACCIONES ============
export function addProposal(st: CredibilityState, title: string, author: string): CredibilityState {
  const p: Proposal = {
    id: `prop_${Date.now()}`,
    title,
    author,
    votes: {},
    createdAt: Date.now(),
    phase: 'commit',
    commits: {},
  }
  return { ...st, proposals: [...st.proposals, p] }
}

export function castVote(
  st: CredibilityState,
  proposalId: string,
  voter: string,
  score: number,
  conviction: ConvictionLevel,
): CredibilityState {
  const proposals = st.proposals.map((p) =>
    p.id === proposalId
      ? { ...p, votes: { ...p.votes, [voter]: { score, conviction } } }
      : p,
  )
  const lastActive = { ...st.lastActive, [voter]: Date.now() }
  return { ...st, proposals, lastActive }
}

export function createLock(
  st: CredibilityState,
  voter: string,
  lockedZNU: number,
  level: ConvictionLevel,
  lockDays: number,
): CredibilityState {
  const lock: ConvictionLock = {
    id: `lock_${Date.now()}`,
    voter,
    lockedZNU,
    level,
    lockedAt: Date.now(),
    lockDays: Math.min(lockDays, SYMBIOSKY_PARAMS.MAX_LOCK_DURATION_DAYS),
  }
  const balances = { ...st.balances, [voter]: (st.balances[voter] ?? 0) + lockedZNU }
  const lastActive = { ...st.lastActive, [voter]: Date.now() }
  return { ...st, locks: [...st.locks, lock], balances, lastActive }
}

export function closeProposal(st: CredibilityState, proposalId: string): CredibilityState {
  const p = st.proposals.find((x) => x.id === proposalId)
  if (!p || st.results[proposalId]) return st
  const r = computeReward(p)
  return { ...st, results: { ...st.results, [proposalId]: r } }
}

/** aplicar decay por inactividad a todos los balances (usado en tick mensual) */
export function applyDecay(st: CredibilityState, now: number, yearMs: number): CredibilityState {
  const balances: Record<string, number> = {}
  for (const [voter, bal] of Object.entries(st.balances)) {
    const last = st.lastActive[voter] ?? now
    const years = Math.max(0, (now - last) / yearMs)
    if (years <= 0) {
      balances[voter] = bal
      continue
    }
    const prot = protectedAmount(st.locks, voter)
    balances[voter] = Math.round(decayBalance(bal, prot, years))
  }
  return { ...st, balances }
}

// ============ COMMIT-REVEAL VOTING (Shivarthu) ============
// El votante primero compromete un HASH(score+conviction+salt) en fase 'commit'.
// Solo en fase 'reveal' expone score/conviction/salt; si el hash coincide, el voto
// cuenta. Esto evita votación estratégica copiando a otros (el voto es secreto hasta reveal).
export function commitHash(score: number, conviction: number, salt: string): string {
  // hash determinista offline (FNV-1a simplificado) — suficiente para commit-reveal local
  const msg = `${score}|${conviction}|${salt}`
  let h = 2166136261
  for (let i = 0; i < msg.length; i++) {
    h ^= msg.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return (h >>> 0).toString(16).padStart(8, '0')
}

export function castCommit(
  st: CredibilityState,
  proposalId: string,
  voter: string,
  score: number,
  conviction: ConvictionLevel,
  salt: string,
): CredibilityState {
  const hash = commitHash(score, conviction, salt)
  return {
    ...st,
    proposals: st.proposals.map((p) =>
      p.id === proposalId && p.phase === 'commit'
        ? { ...p, commits: { ...p.commits, [voter]: { hash, salt } } }
        : p,
    ),
  }
}

export function openReveal(st: CredibilityState, proposalId: string): CredibilityState {
  return {
    ...st,
    proposals: st.proposals.map((p) =>
      p.id === proposalId && p.phase === 'commit' ? { ...p, phase: 'reveal' } : p,
    ),
  }
}

export function revealVote(
  st: CredibilityState,
  proposalId: string,
  voter: string,
  score: number,
  conviction: ConvictionLevel,
  salt: string,
): CredibilityState {
  return {
    ...st,
    proposals: st.proposals.map((p) => {
      if (p.id !== proposalId || p.phase !== 'reveal') return p
      const c = p.commits[voter]
      if (!c || c.salt !== salt) return p // salt no coincide: commit inválido
      const expected = commitHash(score, conviction, salt)
      if (c.hash !== expected) return p // hash no coincide: voto rechazado (tamper)
      return { ...p, votes: { ...p.votes, [voter]: { score, conviction } } }
    }),
  }
}

