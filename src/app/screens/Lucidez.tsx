import { Plus, Activity } from 'lucide-react'
import { useAppStore } from '@core/state/store'
import { autFromCAC, pgsLM, cacStatus } from '@core/lib/metrics'
import { Card, Field, Stat, Bar, Btn, Badge, EmptyState } from '@components/ui'

const VECTORS: { key: keyof ReturnType<typeof useAppStore.getState>['cac']; label: string; sensor: string }[] = [
  { key: 'ALIM', label: 'ALIM (Comida)', sensor: 'kcal local kg/día per cápita (balanza + IoT huerta)' },
  { key: 'ENER', label: 'ENER (Energía)', sensor: 'kWh locales/día ÷ total (medidor + SVD)' },
  { key: 'SALU', label: 'SALU (Salud)', sensor: 'casos resueltos local ÷ total (botica viva + DTN)' },
  { key: 'HABI', label: 'HABI (Hábitat)', sensor: 'm² FABSHIP ÷ total + tenencia reversible' },
  { key: 'PROD', label: 'PROD (Producción)', sensor: 'componentes críticos FABSHIP ÷ total' },
]

export function Lucidez() {
  const { cac, updateCAC, sensors, addSensor } = useAppStore()
  const aut = autFromCAC(cac)
  const pgs = pgsLM(aut)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-jost text-2xl md:text-3xl font-semibold">Métricas · CAC v12 (Lucidez Material)</h1>
        <p className="text-[var(--dim)] mt-1">Solo vectores CON SENSOR físico o evento ValueFlows verificable. Sin sensor = descartado.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <Stat label="PGS (Lucidez)" value={pgs.toFixed(2)} sub="Media de 5 vectores" color="text-chispa" />
        <Stat label="Vectores soberanos" value={`${VECTORS.filter((v) => cac[v.key] >= 0.8).length}/5`} sub="Umbral 0.8" />
        <Stat label="Lecturas de sensor" value={`${sensors.length}`} sub="SVD + IoT registrados" />
      </div>

      <Card title="Vectores CAC v12 (edita con datos de laboratorio)">
        <div className="grid md:grid-cols-2 gap-6">
          {VECTORS.map((v) => {
            const val = cac[v.key]
            const status = cacStatus(val)
            const statusColor =
              status === 'soberano' ? 'text-emerald-400 border-emerald-400/50'
                : status === 'en transición' ? 'text-yellow-400 border-yellow-400/50'
                : 'text-orange-400 border-orange-400/50'
            return (
              <div key={v.key} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-manrope font-medium">{v.label}</span>
                  <Badge color={statusColor}>{status}</Badge>
                </div>
                <Field label={v.label} value={val} onChange={(n) => updateCAC({ [v.key]: n } as any)} step="0.05" />
                <Bar value={val} color={status === 'soberano' ? 'bg-emerald-400' : status === 'en transición' ? 'bg-yellow-400' : 'bg-orange-400'} />
                <p className="text-[var(--dim)] text-xs">{v.sensor}</p>
              </div>
            )
          })}
        </div>
      </Card>

      <Card title="Registro de sensores (SVD v2)">
        <div className="flex items-center gap-2 mb-4">
          <Activity className="w-5 h-5 text-cyan-400" />
          <span className="text-sm text-[var(--mut)]">Cada lectura es evidencia de laboratorio (no simulación)</span>
        </div>
        {sensors.length === 0 ? (
          <EmptyState>Aún no hay lecturas. Registra una medición de campo para anclar el vector.</EmptyState>
        ) : (
          <ul className="space-y-2">
            {[...sensors].reverse().map((s) => (
              <li key={s.id} className="flex items-center justify-between text-sm bg-[var(--surf2)] rounded-xl px-3 py-2">
                <span className="text-[var(--mut)]">{s.vector} · {s.value} {s.unit}</span>
                <span className="text-[var(--dim)] text-xs">{new Date(s.ts).toLocaleString()}</span>
              </li>
            ))}
          </ul>
        )}
        <div className="mt-4 flex flex-wrap gap-2">
          {VECTORS.map((v) => (
            <Btn key={v.key} variant="ghost" onClick={() => addSensor({ vector: v.key as any, value: cac[v.key], unit: 'ratio', note: 'registro manual' })}>
              <Plus className="w-4 h-4 mr-1" /> {v.key}
            </Btn>
          ))}
        </div>
      </Card>
    </div>
  )
}
