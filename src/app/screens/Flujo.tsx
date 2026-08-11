import { useAppStore } from '@core/state/store'
import { STAGES, deriveStageParams, nextStageOf } from '@core/lib/connector'
import { useNavigate } from 'react-router-dom'
import { Card, Stat, Badge, Btn } from '@components/ui'

export function Flujo() {
  const navigate = useNavigate()
  const state = useAppStore()
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-2">
        <h1 className="text-2xl font-bold">Entramado Cibernético (Conector)</h1>
        <Badge color="bg-cyan-500/20 text-cyan-300">auto-llenado entre pantallas</Badge>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        <Stat label="Etapas" value={`${STAGES.length}`} sub="del flujo" />
        <Stat label="Conectadas" value={`${STAGES.length - 1}`} sub="auto-llenadas" />
        <Stat label="Base" value={`${state.base ? 1 : 0}`} sub="material" />
        <Stat label="Miembros" value={`${state.members?.length ?? 0}`} sub="células" />
        <Stat label="Decisiones" value={`${state.integral.decisions.length}`} sub="CDS" />
      </div>

      <p className="text-xs text-white/50">Cada etapa recibe el «seed» de la anterior y alimenta la siguiente (patrón
        stage/next/seed de DeseOS). Al abrir una pantalla, el banner «Siguiente» ya trae los parámetros calculados
        y los pre-llena al navegar — sin repetir subfunciones.</p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        {STAGES.map((s) => {
          const params = deriveStageParams(s.key, state as any)
          const next = nextStageOf(s.key)
          return (
            <Card key={s.key} title={`${s.label}`}>
              <div className="text-xs text-white/50">ruta {s.path}</div>
              <div className="text-xs text-white/60 mt-1">alimenta: <b>{s.feeds}</b></div>
              <div className="text-xs text-cyan-300 mt-1">
                params: {Object.entries(params).map(([k, v]) => `${k}=${JSON.stringify(v)}`).join(' · ') || '—'}
              </div>
              {next && (
                <div className="text-xs text-white/40 mt-1">→ siguiente: {next.label}</div>
              )}
              <Btn className="mt-2" onClick={() => { state.seedStage(s.key, params); navigate(s.path) }}>
                Abrir y sembrar
              </Btn>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
