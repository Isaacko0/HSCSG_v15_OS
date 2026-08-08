import { Network, Users2, Radio, GitBranch } from 'lucide-react'
import { useAppStore } from '@core/state/store'
import { Card, Stat } from '@components/ui'
import { redSize, nivelRed } from '@core/lib/celulas'
import { t } from '@core/lib/i18n'

export function Celulas() {
  const { celulas, setCelulas, lang } = useAppStore()
  const size = redSize(celulas.celdasInternas)
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-jost text-2xl md:text-3xl font-semibold flex items-center gap-2">
          <Network className="w-7 h-7 text-emerald-400" /> Células · Tejido social fractal
        </h1>
        <p className="text-[var(--dim)] mt-1">{t('cel.subtitle', lang)}</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Stat label={t('cel.principles', lang)} value={`${celulas.principios.length}`} color="text-emerald-400" />
        <Stat label={t('cel.recos', lang)} value={`${celulas.recomendaciones.length}`} color="text-sky-400" />
        <Stat label={t('cel.methods', lang)} value={`${celulas.metodos.length}`} color="text-violet-400" />
        <Stat label={t('cel.scale', lang).split(' ')[0]} value="4096" color="text-rose-400" />
      </div>

      {/* Estado editable del nodo */}
      <Card>
        <div className="font-manrope font-medium mb-3 flex items-center gap-2"><Users2 className="w-4 h-4" /> {t('cel.yournet', lang)}</div>
        <div className="grid md:grid-cols-3 gap-3">
          <div>
            <label className="text-xs text-[var(--dim)]">{t('cel.cells', lang)}</label>
            <input
              type="number" min={0} value={celulas.celdasInternas}
              onChange={(e) => setCelulas({ celdasInternas: Math.max(0, Number(e.target.value) || 0) })}
              className="w-full h-10 px-3 rounded-xl bg-[var(--surf2)] border border-[var(--line)] text-[var(--ink)] focus:outline-none focus:border-chispa"
            />
          </div>
          <div>
            <label className="text-xs text-[var(--dim)]">{t('cel.members', lang)}</label>
            <input
              type="number" min={0} value={celulas.miembros}
              onChange={(e) => setCelulas({ miembros: Math.max(0, Number(e.target.value) || 0) })}
              className="w-full h-10 px-3 rounded-xl bg-[var(--surf2)] border border-[var(--line)] text-[var(--ink)] focus:outline-none focus:border-chispa"
            />
          </div>
          <div>
            <label className="text-xs text-[var(--dim)]">{t('cel.groups', lang)}</label>
            <input
              type="number" min={0} value={celulas.grupoIntermedio}
              onChange={(e) => setCelulas({ grupoIntermedio: Math.max(0, Number(e.target.value) || 0) })}
              className="w-full h-10 px-3 rounded-xl bg-[var(--surf2)] border border-[var(--line)] text-[var(--ink)] focus:outline-none focus:border-chispa"
            />
          </div>
        </div>
        <div className="mt-3 text-sm">
          {t('cel.potential', lang)}: <span className="text-emerald-400 font-medium">{size.toLocaleString()}</span> ·{' '}
          {t('cel.level', lang)}: <span className="text-sky-400 font-medium">{nivelRed(Math.max(celulas.miembros, size))}</span>
        </div>
      </Card>

      {/* Principios */}
      <Card title={t('cel.principles', lang)}>
        <div className="grid md:grid-cols-2 gap-3">
          {celulas.principios.map((p) => (
            <div key={p.n} className="p-3 rounded-xl border border-[var(--line)]">
              <div className="font-manrope font-medium">{p.n}. {t(p.nameKey, lang)}</div>
              <div className="text-xs text-[var(--dim)] mt-1">{t(p.descKey, lang)}</div>
            </div>
          ))}
        </div>
      </Card>

      {/* Escala fractal */}
      <Card title={t('cel.scale', lang)}>
        <div className="flex flex-col gap-2">
          {celulas.niveles.map((n) => (
            <div key={n.key} className="flex items-center justify-between p-2 rounded-lg bg-[var(--surf2)]">
              <div className="flex items-center gap-2">
                <GitBranch className="w-4 h-4 text-emerald-400" />
                <span className="font-manrope">{t(n.nivelKey, lang)}</span>
              </div>
              <div className="text-sm text-[var(--dim)]">{n.factor} = <span className="text-[var(--ink)]">{n.tamano}</span></div>
            </div>
          ))}
        </div>
      </Card>

      {/* Recomendaciones */}
      <Card title={t('cel.recos', lang)}>
        <div className="grid md:grid-cols-2 gap-3">
          {celulas.recomendaciones.map((r) => (
            <div key={r.n} className="flex gap-2">
              <span className="text-emerald-400 font-medium">{r.n}.</span>
              <div>
                <div className="font-manrope text-sm">{t(r.titleKey, lang)}</div>
                <div className="text-xs text-[var(--dim)]">{t(r.descKey, lang)}</div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Métodos de organización */}
      <Card title={t('cel.methods', lang)}>
        <div className="grid md:grid-cols-2 gap-3">
          {celulas.metodos.map((m) => (
            <div key={m.key} className="p-3 rounded-xl border border-[var(--line)]">
              <div className="font-manrope font-medium flex items-center gap-2"><Radio className="w-4 h-4 text-sky-400" /> {t(m.nameKey, lang)}</div>
              <div className="text-xs text-[var(--dim)] mt-1">{t(m.descKey, lang)}</div>
            </div>
          ))}
        </div>
      </Card>

      <p className="text-xs text-[var(--dim)]">{t('cel.source', lang)}</p>
    </div>
  )
}
