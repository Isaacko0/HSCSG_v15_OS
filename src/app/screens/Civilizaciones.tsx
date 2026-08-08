import { Globe2, ExternalLink, Compass } from 'lucide-react'
import { useAppStore } from '@core/state/store'
import { Card, Stat } from '@components/ui'
import { CIVILIZATION_LINKS } from '@core/lib/civilizaciones'
import { t } from '@core/lib/i18n'

export function Civilizaciones() {
  const { lang } = useAppStore()
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-jost text-2xl md:text-3xl font-semibold flex items-center gap-2">
          <Compass className="w-7 h-7 text-emerald-400" /> Civilizaciones · Horizontes postmonetarios
        </h1>
        <p className="text-[var(--dim)] mt-1">{t('civ.subtitle', lang)}</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Stat label={t('civ.horizons', lang)} value={`${CIVILIZATION_LINKS.length}`} color="text-emerald-400" />
        <Stat label={t('civ.model', lang)} value={t('civ.postmonetary', lang)} color="text-sky-400" />
        <Stat label={t('civ.base', lang)} value={t('civ.resources', lang)} color="text-violet-400" />
        <Stat label={t('civ.limit', lang)} value={t('civ.selfimposed', lang)} color="text-rose-400" />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {CIVILIZATION_LINKS.map((l) => (
          <Card key={l.key} className={l.wide ? 'md:col-span-2' : ''}>
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="font-manrope font-semibold text-lg flex items-center gap-2">
                  <Globe2 className="w-5 h-5 text-emerald-400" /> {l.name}
                </div>
                <p className="text-sm text-[var(--ink)] mt-2 leading-relaxed">{t(l.descKey, lang)}</p>
              </div>
            </div>
            <a
              href={l.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1 text-sm text-sky-400 hover:underline"
            >
              {t('civ.visit', lang)} <ExternalLink className="w-3 h-3" />
            </a>
          </Card>
        ))}
      </div>

      <p className="text-xs text-[var(--dim)]">{t('civ.note', lang)}</p>
    </div>
  )
}
