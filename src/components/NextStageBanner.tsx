import { useNavigate } from 'react-router-dom'
import { Badge, Btn } from '@components/ui'
import { STAGES, nextStageOf, deriveStageParams, type StageKey } from '@core/lib/connector'
import { useAppStore } from '@core/state/store'

/**
 * NextStageBanner: conector entre pantallas. Cada pantalla lo monta al final y
 * muestra la SIGUIENTE etapa con sus parámetros YA auto-llenados desde el estado.
 * Al hacer clic, navega y deja los params "sembrados" (seedStage) para que la
 * pantalla destino los pre-llene — así no se repiten subfunciones ni recálculos.
 */
export function NextStageBanner({ stage }: { stage: StageKey }) {
  const navigate = useNavigate()
  const state = useAppStore()
  const next = nextStageOf(stage)
  if (!next) {
    return (
      <div className="mt-4 border border-emerald-500/30 rounded p-3 bg-emerald-500/5">
        <Badge color="bg-emerald-500/20 text-emerald-300">Flujo completo</Badge>
        <span className="text-sm ml-2 text-white/70">Has llegado al final del entramado cibernético. El organismo respiró.</span>
      </div>
    )
  }
  const params = deriveStageParams(stage, state as any)
  const current = STAGES.find((s) => s.key === stage)
  return (
    <div className="mt-4 border border-cyan-500/30 rounded p-3 bg-cyan-500/5">
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div>
          <Badge color="bg-cyan-500/20 text-cyan-300">Siguiente: {next.label}</Badge>
          <div className="text-xs text-white/50 mt-1">auto-llenado desde «{current?.label}» → {next.feeds}</div>
          <div className="text-xs text-white/60 mt-1">
            parámetros listos: {Object.entries(params).map(([k, v]) => `${k}=${JSON.stringify(v)}`).join(' · ')}
          </div>
        </div>
        <Btn onClick={() => { state.seedStage(next.key, params); navigate(next.path) }}>Ir y pre-llenar →</Btn>
      </div>
    </div>
  )
}
