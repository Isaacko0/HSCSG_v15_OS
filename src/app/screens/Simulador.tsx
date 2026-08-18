import { useState, useMemo } from 'react'
import { SlidersHorizontal, Play, RotateCcw, Brain, Zap, FlaskConical } from 'lucide-react'
import { Card, Stat, Btn, Badge } from '@components/ui'
import {
  runAlraicoSimulation,
  runAlraicoTick,
  detectResonances,
  detectOverloads,
  DEFAULT_LOOP_CONFIG,
} from '@core/lib/loopEngine'
import type { AppState } from '@core/state/store'

// Estado de simulación simplificado (subconjunto de AppState que el orquestador usa).
function makeSimState(omega: number, sync: number): AppState {
  return {
    base: { harmony: 0.5 },
    lucidez: sync > 0.3,
    caasMembers: [],
    symbiosky: { proposals: [], locks: {}, balances: {}, lastActive: {}, results: {} },
    delegation: { trustAvg: 0.5, revocations: [] },
    education: { courses: [], enrollments: [], certificates: [], assessments: [] },
    sovereignCredit: { attestationRate: omega },
    regen: { ecotech: [], systems: [] },
    vecinal: { barrios: [], propuestas: [] },
    nostrRelay: { config: { url: '', community: 'cosateca', localOnly: true }, events: [], connected: false, lastError: null },
    agentMesh: { community: 'cosateca', agents: [], computePool: [] },
    proofOfResponse: { requests: [], responses: [] },
  } as unknown as AppState
}

export function Simulador() {
  const [ticks, setTicks] = useState(100)
  const [running, setRunning] = useState(false)
  const [history, setHistory] = useState<{ state: AppState; results: ReturnType<typeof runAlraicoSimulation>['history'][0] }[] | null>(null)
  const [currentTick, setCurrentTick] = useState(0)

  // Sliders para Ω (diversidad), s (sincronía), κ (umbral)
  const [omega, setOmega] = useState(0.5)
  const [sync, setSync] = useState(0.5)
  const [kappa, setKappa] = useState(0.3)

  const alphaH = useMemo(() => omega * sync, [omega, sync])
  const stable = alphaH > kappa

  const runSim = () => {
    setRunning(true)
    let current = makeSimState(omega, sync)
    const combinedHistory: { state: AppState; results: ReturnType<typeof runAlraicoSimulation>['history'][0] }[] = []
    for (let i = 0; i < ticks; i++) {
      const { state, results } = runAlraicoTick(current, DEFAULT_LOOP_CONFIG)
      combinedHistory.push({ state, results })
      current = state
      if (i > 10 && combinedHistory.slice(-10).every((h) => h.results.every((r) => !r.executed))) break
    }
    setHistory(combinedHistory)
    setCurrentTick(combinedHistory.length - 1)
    setRunning(false)
  }

  const step = (dir: number) => {
    if (!history) return
    setCurrentTick(Math.max(0, Math.min(history.length - 1, currentTick + dir)))
  }

  const currentState = history?.[currentTick]?.state || makeSimState(omega, sync)
  const overloads = useMemo(() => detectOverloads(currentState), [currentState])
  const resonances = useMemo(() => detectResonances(currentState), [currentState])

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <SlidersHorizontal className="w-7 h-7 text-emerald-400" />
        <div>
          <h1 className="text-xl font-semibold text-white">Simulador · Verificación Triaxial (Eje Simulación)</h1>
          <p className="text-sm text-white/50">Proyección αʰ(t) · resonancia · γ-CARMIS · sobrecargas</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <Card className="p-4 space-y-4">
          <h2 className="font-medium text-white">Parámetros del Sistema</h2>
          <div>
            <label className="text-xs text-white/60">Ω Diversidad: {omega.toFixed(2)}</label>
            <input type="range" min={0} max={1} step={0.01} value={omega} onChange={(e) => setOmega(Number(e.target.value))} className="w-full" />
          </div>
          <div>
            <label className="text-xs text-white/60">s Sincronía: {sync.toFixed(2)}</label>
            <input type="range" min={0} max={1} step={0.01} value={sync} onChange={(e) => setSync(Number(e.target.value))} className="w-full" />
          </div>
          <div>
            <label className="text-xs text-white/60">κ Umbral: {kappa.toFixed(2)}</label>
            <input type="range" min={0} max={1} step={0.01} value={kappa} onChange={(e) => setKappa(Number(e.target.value))} className="w-full" />
          </div>
          <div>
            <label className="text-xs text-white/60">Ticks: {ticks}</label>
            <input type="range" min={10} max={1000} step={10} value={ticks} onChange={(e) => setTicks(Number(e.target.value))} className="w-full" />
          </div>
          <div className="flex gap-2">
            <Btn onClick={runSim} disabled={running}>
              <Play className="w-4 h-4" /> {running ? 'Corriendo…' : 'Ejecutar'}
            </Btn>
            <Btn onClick={() => { setHistory(null); setCurrentTick(0) }} variant="ghost">
              <RotateCcw className="w-4 h-4" /> Reset
            </Btn>
          </div>
          <div className="text-sm">
            <span className="text-white/60">αʰ = </span>
            <span className={stable ? 'text-emerald-400 font-semibold' : 'text-rose-400 font-semibold'}>{alphaH.toFixed(3)}</span>
            <span className="text-white/40"> {'>'} κ → {stable ? 'ESTABLE' : 'INESTABLE'}</span>
          </div>
        </Card>

        <Card className="p-4 space-y-3 lg:col-span-2">
          <div className="flex items-center justify-between">
            <h2 className="font-medium text-white flex items-center gap-2"><Brain className="w-4 h-4" /> Estado Triaxial</h2>
            <div className="flex gap-2">
              <Btn onClick={() => step(-1)} disabled={!history} variant="ghost">
                <Zap className="w-3 h-3" /> -1
              </Btn>
              <Btn onClick={() => step(1)} disabled={!history} variant="ghost">
                +1 <Zap className="w-3 h-3" />
              </Btn>
            </div>
          </div>
          {!history && <p className="text-sm text-white/40">Ejecuta la simulación para ver la proyección αʰ(t) tick a tick.</p>}
          {history && (
            <>
              <div className="text-xs text-white/50">Tick {currentTick + 1} / {history.length}</div>
              <div className="grid grid-cols-2 gap-3">
                <Stat label="Lucidez (CDS)" value={currentState.lucidez ? 'ON' : 'OFF'} />
                <Stat label="Agentes" value={String(currentState.agentMesh.agents.length)} />
                <Stat label="Sistemas Regen" value={String(currentState.regen.systems.length)} />
                <Stat label="PoR Requests" value={String(currentState.proofOfResponse.requests.length)} />
              </div>
              <div>
                <h3 className="text-sm text-white/70 flex items-center gap-2"><FlaskConical className="w-4 h-4" /> Sobrecargas (ΣPᵢ {'>'} κ)</h3>
                {overloads.length === 0
                  ? <Badge color="bg-emerald-500/20 text-emerald-300">Sin sobrecargas</Badge>
                  : overloads.map((o, i) => <Badge key={i} color="bg-rose-500/20 text-rose-300 mr-1">{o.module}: αʰ={o.alphaH.toFixed(2)}</Badge>)}
              </div>
              <div>
                <h3 className="text-sm text-white/70">Resonancias (αʰ_oda {'>'} αʰ₁+αʰ₂)</h3>
                {resonances.length === 0
                  ? <Badge color="bg-slate-500/20 text-slate-300">Sin resonancias</Badge>
                  : resonances.slice(0, 5).map((r, i) => <Badge key={i} color="bg-cyan-500/20 text-cyan-300 mr-1">{r.c1}↔{r.c2}: {r.alphaH.toFixed(2)}</Badge>)}
              </div>
            </>
          )}
        </Card>
      </div>
    </div>
  )
}
