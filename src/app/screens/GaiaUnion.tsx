import { useState } from 'react'
import { Card, Stat, Badge, Btn } from '@components/ui'
import { LEVELS, VITAL_ORGANS, GENETIC_CODE, organismVitality } from '@core/lib/gaiaunion'
import { useAppStore } from '@core/state/store'

export function GaiaUnion() {
  const { gaiaunion, setEpigeneticMode } = useAppStore()
  const [mode, setMode] = useState<'estable' | 'adaptativo'>(gaiaunion.epigeneticMode)

  const vitality = organismVitality(VITAL_ORGANS.length) // todos vivos (derivado)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Gaia Union · Organismo Vivo</h1>
        <Badge color="bg-emerald-500/20 text-emerald-300">ontología del vaso</Badge>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        <Stat label="Niveles" value={`${LEVELS.length}`} sub="célula→organismo" />
        <Stat label="Sistemas Vitales" value={`${VITAL_ORGANS.length}`} sub="órganos del nodo" />
        <Stat label="Vitalidad" value={`${vitality}%`} sub="órganos activos" />
      </div>

      <Card title="ADN del Ecosistema (Constitución)">
        <p className="text-sm">{gaiaunion.constitution}</p>
        <div className="mt-2 flex flex-wrap gap-1">
          {GENETIC_CODE.map((g) => (
            <Badge key={g.value} color={g.ley === 'I' ? 'bg-sky-500/20 text-sky-300' : g.ley === 'II' ? 'bg-emerald-500/20 text-emerald-300' : 'bg-amber-500/20 text-amber-300'}>
              {g.value} · Ley {g.ley}
            </Badge>
          ))}
        </div>
      </Card>

      <Card title="Epigenética (gobernanza adaptable, no altera la esencia)">
        <div className="flex items-center gap-2">
          <Btn onClick={() => { setMode('adaptativo'); setEpigeneticMode('adaptativo') }}>Adaptativo</Btn>
          <Btn onClick={() => { setMode('estable'); setEpigeneticMode('estable') }}>Estable</Btn>
          <span className="text-sm text-white/60">modo actual: <b>{mode}</b></span>
        </div>
      </Card>

      <Card title="Niveles de Organización">
        <div className="space-y-1 text-sm">
          {LEVELS.map((l) => (
            <div key={l.id} className="border-b border-white/5 py-1">
              <div className="font-medium">{l.label}</div>
              <div className="text-xs text-white/50">{l.example} → <span className="text-emerald-300">{l.hscsg}</span></div>
            </div>
          ))}
        </div>
      </Card>

      <Card title="Sistemas Vitales (el cuerpo del nodo)">
        <div className="grid md:grid-cols-2 gap-2">
          {VITAL_ORGANS.map((o) => (
            <div key={o.id} className="border border-white/10 rounded p-2">
              <div className="font-medium">{o.label} <span className="text-xs text-white/40">({o.analogo})</span></div>
              <div className="text-xs text-white/50">{o.funcion}</div>
              <div className="text-sm mt-1">Órgano HSCSG: <b className="text-emerald-300">{o.hscsg}</b></div>
              <div className="text-xs mt-1">Ley {o.ley}</div>
            </div>
          ))}
        </div>
      </Card>

      <p className="text-xs text-white/40">Gaia Union reencuadra el loop /pipeline como sistemas vitales: FRS=Neurvioso,
        ZNU=Circulatorio, CDS=Homeostático, Solarpunk/Tekitl=Metabólico, Aprender=Aprendizaje. Editable por el dueño del nodo.</p>
    </div>
  )
}
