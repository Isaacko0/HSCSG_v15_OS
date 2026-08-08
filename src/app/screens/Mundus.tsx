import { Globe, Circle, ArrowRight } from 'lucide-react'
import { useAppStore } from '@core/state/store'
import { Card, Stat } from '@components/ui'
import { MUNDUS_PILLARS } from '@core/lib/mundus'
import { t } from '@core/lib/i18n'

export function Mundus() {
  const { mundus, setMundusManifesto, lang } = useAppStore()
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="font-jost text-2xl md:text-3xl font-semibold flex items-center gap-2">
            <Globe className="w-7 h-7 text-sky-400" /> Mundus · Unidad global
          </h1>
          <p className="text-[var(--dim)] mt-1">{t('mundus.subtitle', lang)}</p>
        </div>
      </div>

      <Card>
        <div className="flex flex-col md:flex-row items-start gap-6">
          <div className="flex-shrink-0">
            <svg width="120" height="120" viewBox="0 0 120 120" aria-label="Círculo azul de Mundus">
              <circle cx="60" cy="60" r="54" fill="none" stroke="#3B82F6" strokeWidth="10" />
            </svg>
          </div>
          <div className="flex-1 w-full">
            <h2 className="font-manrope font-semibold text-lg mb-2">{t('mundus.manifesto', lang)}</h2>
            <textarea
              value={mundus.manifesto}
              onChange={(e) => setMundusManifesto(e.target.value)}
              rows={6}
              className="w-full px-3 py-2 rounded-xl bg-[var(--surf2)] border border-[var(--line)] text-[var(--ink)] placeholder-[var(--dim)] focus:outline-none focus:border-chispa resize-y"
            />
            <p className="text-xs text-[var(--dim)] mt-2">{t('mundus.editable', lang)}</p>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Stat label={t('mundus.symbol', lang)} value={t('mundus.circle', lang)} color="text-sky-400" />
        <Stat label={t('mundus.exchange', lang)} value={t('mundus.circular', lang)} color="text-emerald-400" />
        <Stat label={t('mundus.dependency', lang)} value={t('mundus.removed', lang)} color="text-rose-400" />
        <Stat label={t('mundus.pillars', lang).split(' ')[0]} value={`${mundus.pillars.length}`} color="text-violet-400" />
      </div>

      <Card title={t('mundus.pillars', lang)}>
        <div className="grid md:grid-cols-2 gap-3">
          {MUNDUS_PILLARS.map((p) => (
            <div
              key={p.key}
              className="p-3 rounded-xl border border-[var(--line)] hover:bg-[var(--surf2)] transition-colors"
            >
              <div className="font-manrope font-medium">{p.name}</div>
              <div className="text-xs text-[var(--dim)] mb-2">{p.descKey ? t(p.descKey, lang) : p.desc}</div>
              <div className="flex flex-wrap gap-3 text-xs">
                <a href={p.hscsgLink} className="flex items-center gap-1 text-emerald-400 hover:underline">
                  {t('mundus.cosatecaModule', lang)} <ArrowRight className="w-3 h-3" />
                </a>
                <a href={p.sourceUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sky-400 hover:underline">
                  {t('mundus.origin', lang)} <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-[var(--dim)] mt-3 flex items-center gap-1">
          <Circle className="w-3 h-3 text-sky-400" />
          {t('mundus.ces', lang)}
        </p>
      </Card>
    </div>
  )
}
