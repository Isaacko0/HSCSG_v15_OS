import { LifeBuoy, Plus, Star, CheckCircle2, ArrowRight, NotebookPen } from 'lucide-react'
import { useAppStore } from '@core/state/store'
import { Card, Stat, Badge } from '@components/ui'
import { GOAL_TYPES, type GoalType, type Effort, type Area } from '@core/state/life'
import { matrixCalculation, znuProjected } from '@core/lib/life'
import { t } from '@core/lib/i18n'

const TYPE_LABEL: Record<GoalType, string> = { trip: 'Viaje', project: 'Proyecto', buy: 'Comprar', do: 'Hacer' }

export function Life() {
  const { life, addLifeGoal, toggleLifeNext, toggleLifeCompleted, removeLifeGoal, setLifeNotes, lang } = useAppStore()
  const znu = znuProjected(life)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="font-jost text-2xl md:text-3xl font-semibold flex items-center gap-2">
            <LifeBuoy className="w-7 h-7 text-sky-400" /> Life · Organizador personal
          </h1>
          <p className="text-[var(--dim)] mt-1">{t('life.subtitle', lang)}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Stat label={t('life.goals', lang)} value={`${life.goals.length}`} color="text-sky-400" />
        <Stat label={t('life.next', lang)} value={`${life.goals.filter((g) => g.next).length}`} color="text-emerald-400" />
        <Stat label={t('life.done', lang)} value={`${life.goals.filter((g) => g.completed).length}`} color="text-violet-400" />
        <Stat label={t('life.znu', lang)} value={String(znu)} color="text-rose-400" />
      </div>

      <Card title={t('life.new', lang)}>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            const f = new FormData(e.currentTarget)
            addLifeGoal({
              name: String(f.get('name') || '').trim() || t('life.noname', lang),
              description: String(f.get('description') || '') || undefined,
              type: (f.get('type') as GoalType) || 'do',
              effort: (f.get('effort') as Effort) || 'lo',
              area: (f.get('area') as Area) || 'pe',
              important: Number(f.get('important') || 1),
              urgent: Number(f.get('urgent') || 1),
              znu: f.get('znu') ? Number(f.get('znu')) : undefined,
            })
            e.currentTarget.reset()
          }}
          className="grid md:grid-cols-2 gap-3"
        >
          <input name="name" placeholder={t('life.what', lang)} required className="md:col-span-2 h-10 px-3 rounded-xl bg-[var(--surf2)] border border-[var(--line)] text-[var(--ink)]" />
          <textarea name="description" placeholder={t('life.desc', lang)} rows={2} className="md:col-span-2 px-3 py-2 rounded-xl bg-[var(--surf2)] border border-[var(--line)] text-[var(--ink)]" />
          <select name="type" className="h-10 px-3 rounded-xl bg-[var(--surf2)] border border-[var(--line)] text-[var(--ink)]">
            {GOAL_TYPES.map((g) => <option key={g.key} value={g.key}>{g.label}</option>)}
          </select>
          <select name="effort" className="h-10 px-3 rounded-xl bg-[var(--surf2)] border border-[var(--line)] text-[var(--ink)]">
            <option value="lo">{t('life.effort.lo', lang)}</option>
            <option value="hi">{t('life.effort.hi', lang)}</option>
          </select>
          <select name="area" className="h-10 px-3 rounded-xl bg-[var(--surf2)] border border-[var(--line)] text-[var(--ink)]">
            <option value="pe">{t('life.area.pe', lang)}</option>
            <option value="pr">{t('life.area.pr', lang)}</option>
          </select>
          <input name="znu" type="number" placeholder={t('life.znuProj', lang)} className="h-10 px-3 rounded-xl bg-[var(--surf2)] border border-[var(--line)] text-[var(--ink)]" />
          <label className="flex items-center gap-2 text-sm text-[var(--dim)]">{t('life.important', lang)}
            <input name="important" type="number" min={1} max={9} defaultValue={5} className="w-16 h-9 px-2 rounded-xl bg-[var(--surf2)] border border-[var(--line)] text-[var(--ink)]" />
          </label>
          <label className="flex items-center gap-2 text-sm text-[var(--dim)]">{t('life.urgent', lang)}
            <input name="urgent" type="number" min={1} max={9} defaultValue={5} className="w-16 h-9 px-2 rounded-xl bg-[var(--surf2)] border border-[var(--line)] text-[var(--ink)]" />
          </label>
          <div className="md:col-span-2">
            <button type="submit" className="w-full h-10 flex items-center justify-center gap-2 rounded-xl bg-[var(--chispa)] text-[var(--vacio)] font-manrope font-medium hover:opacity-90"><Plus className="w-4 h-4" /> {t('life.add', lang)}</button>
          </div>
        </form>
      </Card>

      <div className="grid md:grid-cols-2 gap-3">
        {life.goals.map((g) => {
          const matrix = matrixCalculation(g)
          return (
            <Card key={g.id} className={g.completed ? 'opacity-60' : ''}>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="font-manrope font-medium flex items-center gap-2">
                    {g.name}
                    {g.next && <Badge color="bg-emerald-500/20 text-emerald-300">NEXT</Badge>}
                    {g.completed && <CheckCircle2 className="w-4 h-4 text-violet-400" />}
                  </div>
                  <div className="text-xs text-[var(--dim)] mt-1">{TYPE_LABEL[g.type]} · {g.effort === 'hi' ? t('life.effort.hi', lang) : t('life.effort.lo', lang)} · {g.area === 'pe' ? t('life.area.pe', lang) : t('life.area.pr', lang)}</div>
                  {g.description && <p className="text-sm text-[var(--ink)] mt-1">{g.description}</p>}
                  <div className="flex items-center gap-3 mt-2 text-xs">
                    <span className="flex items-center gap-1 text-[var(--dim)]"><Star className="w-3 h-3 text-amber-400" /> {t('life.matrix', lang)} {matrix} (I{g.important}×U{g.urgent})</span>
                    {g.znu != null && <span className="text-rose-400">ZNU {g.znu}</span>}
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <button onClick={() => toggleLifeNext(g.id)} className="text-[var(--dim)] hover:text-emerald-400 text-xs">{t('life.next', lang)}</button>
                  <button onClick={() => toggleLifeCompleted(g.id)} className="text-[var(--dim)] hover:text-violet-400 text-xs">✓</button>
                  <button onClick={() => removeLifeGoal(g.id)} className="text-[var(--dim)] hover:text-rose-400 text-xs">✕</button>
                </div>
              </div>
            </Card>
          )
        })}
        {life.goals.length === 0 && (
          <div className="md:col-span-2 text-center text-[var(--dim)] text-sm py-8">{t('life.empty', lang)}</div>
        )}
      </div>

      <Card>
        <div className="flex items-center gap-2 font-manrope font-medium mb-3"><NotebookPen className="w-4 h-4" /> {t('life.notes', lang)}</div>
        <textarea
          value={life.notes}
          onChange={(e) => setLifeNotes(e.target.value)}
          rows={4}
          placeholder={t('life.notesPh', lang)}
          className="w-full px-3 py-2 rounded-xl bg-[var(--surf2)] border border-[var(--line)] text-[var(--ink)]"
        />
        <p className="text-xs text-[var(--dim)] mt-2 flex items-center gap-1"><ArrowRight className="w-3 h-3" /> {t('life.local', lang)}</p>
      </Card>
    </div>
  )
}

