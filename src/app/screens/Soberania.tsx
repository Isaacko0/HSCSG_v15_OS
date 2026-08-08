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
import { t } from '@core/lib/i18n'

const ICONS: Record<string, any> = {
  Droplets, Utensils, Home, Zap, BriefcaseMedical, Radio, Cog,
  Truck, Scale, Gavel, BookOpen, Drama, ShieldHalf,
}

export function Soberania() {
  const { sovereignty, setSovereigntyAnswer, computePatternScore, lang } = useAppStore()
  const idx = sovereigntyIndex(sovereignty.answers)
  const weak = weakestPillar(sovereignty.answers)
  const strong = strongestPillar(sovereignty.answers)
  const phaseByKey = (k: string) => sovereignty.answers[k] ?? 'none'

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="font-jost text-2xl md:text-3xl font-semibold flex items-center gap-2">
            <ShieldHalf className="w-7 h-7 text-emerald-400" /> Soberanía · 13 Pilares
          </h1>
          <p className="text-[var(--dim)] mt-1">{t('sov.subtitle', lang)}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Stat label={t('sov.index', lang)} value={`${idx}%`} color="text-emerald-400" />
        <Stat label={t('sov.pattern', lang)} value={`${sovereignty.patternScore}/100`} color="text-sky-400" />
        <Stat label={t('sov.stronger', lang)} value={t(strong.nameKey, lang)} color="text-emerald-400" />
        <Stat label={t('sov.weaker', lang)} value={t(weak.nameKey, lang)} color="text-rose-400" />
      </div>

      <Card title={t('sov.matrix', lang)}>
        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr>
                <th className="text-left p-1 sticky left-0 bg-[var(--surf)]">{t('sov.pillar', lang)}</th>
                {LAYERS_7.map((l) => (
                  <th key={l.i} className="p-1 text-[var(--dim)] font-normal whitespace-nowrap">{t(l.nameKey, lang)}</th>
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
                        <span className="font-manrope">{p.n}. {t(p.nameKey, lang)}</span>
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
                            title={`${t(p.nameKey, lang)} / ${t(l.nameKey, lang)}: ${t(phDef.labelKey, lang)}. Clic → ${next ? t(PHASES.find((x) => x.key === next)!.labelKey, lang) : '—'}`}
                            onClick={() => setSovereigntyAnswer(p.n, l.i, next ?? ph)}
                            className="w-full h-7 rounded border border-[var(--line)] text-[10px] font-manrope transition-colors"
                            style={{ background: phDef.color + '33', color: phDef.color }}
                          >
                            {t(phDef.labelKey, lang).slice(0, 4)}
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
        <p className="text-xs text-[var(--dim)] mt-2">{t('sov.note.matrix', lang)}</p>
      </Card>

      <div className="grid md:grid-cols-2 gap-4">
        <Card title={t('sov.laws', lang)}>
          <ul className="text-sm space-y-1 text-[var(--dim)]">
            <li><Badge color="text-emerald-400">Ley I</Badge> {t('sov.law1', lang)}</li>
            <li><Badge color="text-amber-400">Ley II</Badge> {t('sov.law2', lang)}</li>
            <li><Badge color="text-sky-400">Ley III</Badge> {t('sov.law3', lang)}</li>
          </ul>
        </Card>
        <Card title={t('sov.lucidity', lang)}>
          <div className="flex items-center gap-3">
            <Eye className="w-6 h-6 text-sky-400" />
            <div>
              <p className="text-sm">{t('sov.lucidity.desc', lang)}</p>
              <p className="text-xs text-[var(--dim)] mt-1">{t('sov.lucidity.note', lang)}</p>
              <Btn className="mt-2" onClick={computePatternScore}>{t('sov.recompute', lang)}</Btn>
            </div>
          </div>
        </Card>
      </div>

      <Card title={t('sov.nextstep', lang)}>
        <p className="text-sm text-[var(--dim)]">
          {t('sov.nextstep.desc', lang)} <Badge color="text-rose-400">{t(weak.nameKey, lang)}</Badge> ({weak.metaphor}). {t('sov.nextstep.note', lang)}
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
