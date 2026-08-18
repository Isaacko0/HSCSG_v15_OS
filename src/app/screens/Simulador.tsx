import { useState, useMemo } from 'react'
import { SlidersHorizontal, Play, Pause, RotateCcw, Brain, Zap, FlaskConical } from 'lucide-react'
import { useAppStore } from '@core/state/store'
import { Card, Stat, Btn, Badge } from '@components/ui'
import { runAlraicoSimulation, runAlraicoTick, detectResonances, detectOverloads, DEFAULT_LOOP_CONFIG } from '@core/lib/loopEngine'

// Estado de simulación simplificado (no usa store real directamente)
type SimState = {
  base: { harmony: number }
  lucidez: { cds: number; rao: unknown[] }
  caas: { balance: number; priceParity: number }
  symbiosky: { proposals: unknown[]; meritAvg: number }
  delegation: { trustAvg: number; revocations: unknown[] }
  education: { progressAvg: number }
  sovereignCredit: { attestationRate: number }
  regen: { ecoTechs: unknown[]; mrvVerifiedRate: number }
  vecinal: { proposals: unknown[]; participationRate: number }
  nostrRelay: { mode: 'offline' | 'connected'; events: unknown[]; connectionHealth: number }
  agentMesh: { requests: unknown[]; responses: unknown[]; penalties: unknown[]; computeUtilization: number; community: string; agents: unknown[] }
  proofOfResponse: { requests: unknown[]; responses: unknown[]; failures: unknown[]; penalties: unknown[]; mode: 'offline' | 'connected'; satisfactionRate: number }
  stageSeeds: Record<string, unknown>
}

function makeSimState(): SimState {
  return {
    base: { harmony: 0.5 },
    lucidez: { cds: 0.8, rao: [] },
    caas: { balance: 1000, priceParity: 0.5 },
    symbiosky: { proposals: [], meritAvg: 0.5 },
    delegation: { trustAvg: 0.5, revocations: [] },
    education: { progressAvg: 0.5 },
    sovereignCredit: { attestationRate: 0.5 },
    regen: { ecoTechs: [], mrvVerifiedRate: 0.5 },
    vecinal: { proposals: [], participationRate: 0.5 },
    nostrRelay: { mode: 'offline', events: [], connectionHealth: 0.5 },
    agentMesh: { requests: [], responses: [], penalties: [], computeUtilization: 0.5, community: 'cosateca', agents: [] },
    proofOfResponse: { requests: [], responses: [], failures: [], penalties: [], mode: 'offline', satisfactionRate: 0.5 },
    stageSeeds: {},
  }
}

export function Simulador() {
  const st = useAppStore()
  const [ticks, setTicks] = useState(100)
  const [running, setRunning] = useState(false)
  const [history, setHistory] = useState<{ state: SimState; results: ReturnType<typeof runAlraicoSimulation>['history'][0] }[] | null>(null)
  const [currentTick, setCurrentTick] = useState(0)

  // Sliders para Ω (diversidad), s (sincronía), κ (umbral)
  const [omega, setOmega] = useState(0.5)
  const [sync, setSync] = useState(0.5)
  const [kappa, setKappa] = useState(0.3)

  const alphaH = useMemo(() => omega * sync, [omega, sync])
  const stable = alphaH > kappa

  const runSim = () => {
    setRunning(true)
    let current = makeSimState()
    current.lucidez.cds = sync
    current.caas.priceParity = omega
    current.symbiosky.meritAvg = (omega + sync) / 2
    
    const combinedHistory: { state: SimState; results: ReturnType<typeof runAlraicoSimulation>['history'][0] }[] = []
    for (let i = 0; i < ticks; i++) {
      const { state, results } = runAlraicoTick(current, DEFAULT_LOOP_CONFIG)
      combinedHistory.push({ state, results })
      current = state
      if (i > 10 && combinedHistory.slice(-10).every(h => h.results.every(r => !r.executed))) break
    }
    setHistory(combinedHistory)
    setCurrentTick(combinedHistory.length - 1)
    setRunning(false)
  }

  const step = (dir: number) => {
    if (!history) return
    setCurrentTick(Math.max(0, Math.min(history.length - 1, currentTick + dir)))
  }

  const currentState = history?.[currentTick]?.state || makeSimState()
  const overloads = useMemo(() => detectOverloads(currentState), [currentState])
  const resonances = useMemo(() => detectResonances(currentState), [currentState])

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <SlidersHorizontal className="w-7 h-7 text-emerald-400" />
        <div>
          <h1 className="text-xl font-semibold text-white">Simulador · Verificación Triaxial (Eje Simulación)</h1>
          <p className="text-sm text-slate-400">Proyecta αʰ(t), κ, γ-CARMIS paths. Mental: /integral · Lab: /verificacion · Sim: AQUÍ.</p>
        </div>
      </div>

      {/* Controles αʰ = Ω · s */}
      <Card>
        <h2 className="text-sm font-semibold text-white mb-3">Parámetros de Armonía: αʰ = Ω × s</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div>
            <label className="text-xs text-slate-400 block mb-1">Ω (Diversidad controlada): {omega.toFixed(2)}</label>
            <input type="range" min="0" max="1" step="0.01" value={omega} onChange={e => setOmega(Number(e.target.value))} className="w-full" />
          </div>
          <div>
            <label className="text-xs text-slate-400 block mb-1">s (Sincronía): {sync.toFixed(2)}</label>
            <input type="range" min="0" max="1" step="0.01" value={sync} onChange={e => setSync(Number(e.target.value))} className="w-full" />
          </div>
          <div>
            <label className="text-xs text-slate-400 block mb-1">κ (Umbral crítico): {kappa.toFixed(2)}</label>
            <input type="range" min="0" max="1" step="0.01" value={kappa} onChange={e => setKappa(Number(e.target.value))} className="w-full" />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Stat label="αʰ (Armonía)" value={alphaH.toFixed(3)} />
          <Stat label="κ (Umbral)" value={kappa.toFixed(2)} />
          <Badge color={stable ? 'border-emerald-500 text-emerald-400' : 'border-red-500 text-red-400'}>
            {stable ? 'ESTABLE (αʰ > κ)' : 'FRÁGIL (αʰ < κ) → γ-CARMIS'}
          </Badge>
        </div>
      </Card>

      {/* Simulación multi-tick */}
      <Card>
        <h2 className="text-sm font-semibold text-white mb-3">Simulación {ticks} ticks</h2>
        <div className="flex items-center gap-2 mb-3">
          <input type="number" min="10" max="1000" step="10" value={ticks} onChange={e => setTicks(Number(e.target.value))} className="w-24 bg-slate-800 text-white rounded px-2 py-1 text-sm" />
          <Btn onClick={runSim} disabled={running}>
            {running ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />} {running ? 'Ejecutando...' : 'Ejecutar'}
          </Btn>
          <Btn onClick={() => { setHistory(null); setCurrentTick(0) }}><RotateCcw className="w-4 h-4" /> Reset</Btn>
        </div>
        {history && (
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs">
              <Btn onClick={() => step(-1)} disabled={currentTick === 0} variant="ghost"><RotateCcw className="w-3 h-3" /></Btn>
              <span>Tick {currentTick + 1} / {history.length}</span>
              <Btn onClick={() => step(1)} disabled={currentTick >= history.length - 1} variant="ghost"><RotateCcw className="w-3 h-3 rotate-180" /></Btn>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
              <Stat label="CDS" value={history[currentTick]?.state?.lucidez?.cds?.toFixed(3) ?? '?'} />
              <Stat label="PriceParity" value={history[currentTick]?.state?.caas?.priceParity?.toFixed(3) ?? '?'} />
              <Stat label="MeritAvg" value={history[currentTick]?.state?.symbiosky?.meritAvg?.toFixed(3) ?? '?'} />
              <Stat label="Loops ejecutados" value={String(history[currentTick]?.results?.filter(r => r.executed).length ?? 0)} />
            </div>
            {/* Detalle loops */}
            <details className="mt-2">
              <summary className="text-xs text-slate-400 cursor-pointer">Ver loops ejecutados en este tick</summary>
              <div className="mt-1 space-y-1">
                {history[currentTick]?.results?.map((r, i) => (
                  <div key={i} className={`text-xs px-2 py-1 rounded ${r.executed ? 'bg-emerald-900/30 text-emerald-300' : 'bg-slate-800 text-slate-500'}`}>
                    {r.loop} {r.resonance ? `→ resonancia ${r.resonance.c1}↔${r.resonance.c2} (αʰ=${r.resonance.alphaH.toFixed(2)})` : ''}
                  </div>
                ))}
              </div>
            </details>
          </div>
        )}
      </Card>

      {/* Estado actual: sobrecargas y resonancias */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <h2 className="text-sm font-semibold text-white mb-3 flex items-center gap-2"><Zap className="w-4 h-4" /> Sobrecargas detectadas (ΣPᵢ {'>'} κ)</h2>
          {overloads.length === 0 ? (
            <p className="text-xs text-emerald-400">Sin sobrecargas. Sistema en homeostasis.</p>
          ) : (
            <div className="space-y-1">
              {overloads.map((o, i) => (
                <div key={i} className="text-xs bg-red-900/30 text-red-300 px-2 py-1 rounded">
                  {o.module}: αʰ={o.alphaH.toFixed(2)} {'<'} κ={o.kappa}
                </div>
              ))}
            </div>
          )}
        </Card>
        <Card>
          <h2 className="text-sm font-semibold text-white mb-3 flex items-center gap-2"><Brain className="w-4 h-4" /> Resonancias detectadas (αʰ_oda {'>'} αʰ₁+αʰ₂)</h2>
          {resonances.length === 0 ? (
            <p className="text-xs text-slate-400">Sin resonancias activas.</p>
          ) : (
            <div className="space-y-1">
              {resonances.slice(0, 5).map((r, i) => (
                <div key={i} className="text-xs bg-emerald-900/30 text-emerald-300 px-2 py-1 rounded">
                  {r.c1} ↔ {r.c2} → αʰ_oda={r.alphaH.toFixed(2)}
                </div>
              ))}
            </div>
          )}
        </Card>
      </div>

      {/* Triaxial status */}
      <Card>
        <h2 className="text-sm font-semibold text-white mb-3 flex items-center gap-2"><FlaskConical className="w-4 h-4" /> Verificación Triaxial</h2>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="bg-slate-800 rounded p-3">
            <Brain className="w-6 h-6 text-blue-400 mx-auto mb-1" />
            <div className="text-xs text-blue-400 font-medium">MENTAL</div>
            <div className="text-xs text-slate-400">/integral · /lucidez</div>
          </div>
          <div className="bg-slate-800 rounded p-3 ring-2 ring-emerald-500">
            <SlidersHorizontal className="w-6 h-6 text-emerald-400 mx-auto mb-1" />
            <div className="text-xs text-emerald-400 font-medium">SIMULACIÓN</div>
            <div className="text-xs text-slate-400">AQUÍ (proyección αʰ)</div>
          </div>
          <div className="bg-slate-800 rounded p-3">
            <FlaskConical className="w-6 h-6 text-amber-400 mx-auto mb-1" />
            <div className="text-xs text-amber-400 font-medium">LABORATORIO</div>
            <div className="text-xs text-slate-400">/verificacion · /agentes · /nostr</div>
          </div>
        </div>
      </Card>
    </div>
  )
}