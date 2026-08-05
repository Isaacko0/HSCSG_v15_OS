import {
  ShieldHalf, Droplets, Utensils, Home, Zap, BriefcaseMedical, Radio, Cog,
  Truck, Scale, Gavel, BookOpen, Drama, Eye,
} from 'lucide-react'
import { useAppStore } from '@core/state/store'
import {
  PILLARS_13, LAYERS_7, PHASES, cellKey, sovereigntyIndex,
  weakestPillar, strongestPillar,
} from '@core/lib/sovereignty'
import type { SovereignPhase } from '@core/state/sovereignty'
import { Card, Stat, Btn, Badge } from '@components/ui'

const ICONS: Record<string, any> = {
  Droplets, Utensils, Home, Zap, BriefcaseMedical, Radio, Cog,
  Truck, Scale, Gavel, BookOpen, Drama, ShieldHalf,
}

export function Soberania() {
  const { sovereignty, setSovereigntyAnswer, computePatternScore } = useAppStore()
  const idx = sovereigntyIndex(sovereignty.answers)
  const weak = weakestPillar(sovereignty.answers)
  const strong = strongestPillarSafe(sovereignty.answers)
  const phaseByKey = (k: string) => sovereignty.answers[k] ?? 'none'

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="font-jost text-2xl md:text-3xl font-semibold flex items-center gap-2">
            <ShieldHalf className="w-7 h-7 text-emerald-400" /> Soberanía · 13 Pilares
          </h1>
          <p className="text-[var(--dim)] mt-1">Asimilado de overkillkulture/sovereignty-hub + tairea/sovereignty-hub-ui. Diagnóstico de base material del nodo (3×7×13=∞). Sin Supabase/Three.js.</p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Stat label="Índice de soberanía" value={`${idx}%`} color="text-emerald-400" />
        <Stat label="Pattern Score (Lucidez)" value={`${sovereignty.patternScore}/100`} color="text-sky-400" />
        <Stat label="Pilar más fuerte" value={strong.name} color="text-emerald-400" />
        <Stat label="Pilar más débil" value={weak.name} color="text-rose-400" />
      </div>

      <Card title="Matriz de soberanía — Pilar × Capa (clic para subir fase)">
        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr>
                <th className="text-left p-1 sticky left-0 bg-[var(--surf)]">Pilar</th>
                {LAYERS_7.map((l) => (
                  <th key={l.i} className="p-1 text-[var(--dim)] font-normal whitespace-nowrap">{l.name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {PILLARS_13.map((p) => {
                const Icon = ICONS[p.icon] ?? ShieldHalf
                return (
                  <tr key={p.n}>
                    <td className="p-1 sticky left-0 bg-[var(--surf)] whitespace-nowrap">
                      <span className="inline-flex items-center gap-1">
                        <Icon className="w-3 h-3" style={{ color: p.color }} />
                        <span className="font-manrope">{p.n}. {p.name}</span>
                      </span>
                    </td>
                    {LAYERS_7.map((l) => {
                      const key = cellKey(p.n, l.i)
                      const ph = phaseByKey(key)
                      const phDef = PHASES.find((x) => x.key === ph)!
                      const next = nextPhase(ph)
                      return (
                        <td key={l.i} className="p-0.5">
                          <button
                            title={`${p.name} / ${l.name}: ${phDef.label}. Clic → ${next ? PHASES.find((x) => x.key === next)!.label : '—'}`}
                            onClick={() => setSovereigntyAnswer(p.n, l.i, next ?? ph)}
                            className="w-full h-7 rounded border border-[var(--line)] text-[10px] font-manrope transition-colors"
                            style={{ background: phDef.color + '33', color: phDef.color }}
                          >
                            {phDef.label.slice(0, 4)}
                          </button>
                        </td>
                      )
                    })}
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-[var(--dim)] mt-2">Fase por celda: none → survive → build → scale. La fase del pilar = la capa más baja (eslabón débil).</p>
      </Card>

      <div className="grid md:grid-cols-2 gap-4">
        <Card title="Leyes del Materialismo Jerárquico (isomorfismo)">
          <ul className="text-sm space-y-1 text-[var(--dim)]">
            <li><Badge color="text-emerald-400">Ley I</Badge> Los 13 pilares = base material. Soberanía = no depender de sistemas que la dañan.</li>
            <li><Badge color="text-amber-400">Ley II</Badge> Las 7 capas = escalera AUT (Survival → Innovation): el nodo genera su propia vida.</li>
            <li><Badge color="text-sky-400">Ley III</Badge> Pattern Theory = Lucidez: detectar manipulación. El diagnóstico es honesto (none no se maquilla).</li>
          </ul>
        </Card>
        <Card title="Pattern Theory / Lucidez (Ley III)">
          <div className="flex items-center gap-3">
            <Eye className="w-6 h-6 text-sky-400" />
            <div>
              <p className="text-sm">Score de coherencia y verificabilidad del nodo (Gobernanza + Conocimiento + Comunicación).</p>
              <p className="text-xs text-[var(--dim)] mt-1">Alto = menor manipulabilidad. Recomputa al cambiar fases.</p>
              <Btn className="mt-2" onClick={computePatternScore}>Recomputar</Btn>
            </div>
          </div>
        </Card>
      </div>

      <Card title="Próximo paso sugerido">
        <p className="text-sm text-[var(--dim)]">
          El pilar más débil es <Badge color="text-rose-400">{weak.name}</Badge> ({weak.metaphor}). Sube su capa más baja en la matriz, o crea un proyecto en <span className="text-[var(--ink)]">Tekitl</span> para construirlo (p.ej. "Huerta Comunitaria" fortalece el pilar Food).
          Fortalecer la base material eleva tu índice de soberanía y tu acceso por contribución en el CaaS.
        </p>
      </Card>
    </div>
  )
}

function nextPhase(ph: SovereignPhase): SovereignPhase | null {
  const order: SovereignPhase[] = ['none', 'survive', 'build', 'scale']
  const i = order.indexOf(ph)
  return i < order.length - 1 ? order[i + 1] : null
}

function strongestPillarSafe(answers: Record<string, SovereignPhase>) {
  // alias local para no chocar con otro import
  return strongestPillar(answers)
}