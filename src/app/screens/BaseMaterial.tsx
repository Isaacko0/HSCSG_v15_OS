import { Mountain, Zap, Droplets, Sprout, Wrench, Leaf, Wallet } from 'lucide-react'
import { useAppStore } from '@core/state/store'
import { survivalCredit } from '@core/lib/metrics'
import { Card, Field, Stat, Bar, Btn } from '@components/ui'

export function BaseMaterial() {
  const { base, updateBase, resetAll } = useAppStore()
  const credit = survivalCredit(base)

  const creditLevel =
    credit >= 5000 ? { label: 'Normal', color: 'text-emerald-400' }
      : credit >= 2000 ? { label: 'Baja', color: 'text-yellow-400' }
      : credit >= 1000 ? { label: 'Crítica', color: 'text-orange-400' }
      : credit >= 500 ? { label: 'Hibernación', color: 'text-red-400' }
      : { label: 'Muerto', color: 'text-red-500' }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="font-jost text-2xl md:text-3xl font-semibold">Nivel 0 · Base Material Inmediata</h1>
          <p className="text-[var(--dim)] mt-1">Tierra · Agua · Energía · Comida · Herramientas · Cuerpos. El único servidor real.</p>
        </div>
        <Btn variant="ghost" onClick={resetAll}>Reiniciar nodo</Btn>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Stat label="Crédito supervivencia" value={credit.toFixed(0)} sub={`Nivel: ${creditLevel.label}`} color={creditLevel.color} />
        <Stat label="Tierra" value={`${base.tierra_ha} ha`} sub="1 ha = 1000 créditos" />
        <Stat label="Energía" value={`${base.energia_kwh_dia} kWh/d`} sub="10 kWh/d = 50 créditos" />
        <Stat label="Comida" value={`${base.comida_kg_dia} kg/d`} sub="10 kg/d = 20 créditos" />
      </div>

      <Card title="Inventario de Base Material (editable)">
        <div className="grid md:grid-cols-3 gap-4">
          <Field label="Tierra" value={base.tierra_ha} onChange={(v) => updateBase({ tierra_ha: v })} suffix="ha" step="0.1" />
          <Field label="Agua" value={base.agua_l_dia} onChange={(v) => updateBase({ agua_l_dia: v })} suffix="L/día" step="50" />
          <Field label="Energía" value={base.energia_kwh_dia} onChange={(v) => updateBase({ energia_kwh_dia: v })} suffix="kWh/día" step="0.5" />
          <Field label="Comida" value={base.comida_kg_dia} onChange={(v) => updateBase({ comida_kg_dia: v })} suffix="kg/día" step="1" />
          <Field label="Herramientas FABSHIP" value={base.herramientas_fabship} onChange={(v) => updateBase({ herramientas_fabship: v })} suffix="unid" step="1" />
          <Field label="Semillas criollas" value={base.semillas_criollas} onChange={(v) => updateBase({ semillas_criollas: v })} suffix="variedades" step="5" />
          <Field label="USDC reserva" value={base.usdc_reserva} onChange={(v) => updateBase({ usdc_reserva: v })} suffix="USDC" step="100" />
        </div>
      </Card>

      <div className="grid md:grid-cols-2 gap-4">
        <Card title="Crédito de supervivencia por vector">
          <ul className="space-y-3 text-sm">
            <Li icon={<Mountain className="w-4 h-4" />} k="Tierra" v={`${base.tierra_ha * 1000}`} max={5000} />
            <Li icon={<Droplets className="w-4 h-4" />} k="Agua" v={`${(base.agua_l_dia * 0.1).toFixed(0)}`} max={500} />
            <Li icon={<Zap className="w-4 h-4" />} k="Energía" v={`${(base.energia_kwh_dia * 5).toFixed(0)}`} max={500} />
            <Li icon={<Sprout className="w-4 h-4" />} k="Comida" v={`${(base.comida_kg_dia * 2).toFixed(0)}`} max={200} />
            <Li icon={<Wrench className="w-4 h-4" />} k="Herramientas" v={`${base.herramientas_fabship}`} max={100} />
            <Li icon={<Leaf className="w-4 h-4" />} k="Semillas" v={`${(base.semillas_criollas * 0.5).toFixed(0)}`} max={200} />
            <Li icon={<Wallet className="w-4 h-4" />} k="USDC" v={`${(base.usdc_reserva * 0.1).toFixed(0)}`} max={200} />
          </ul>
        </Card>
        <Card title="Hard Gate para Nivel 1 (Colectivo)">
          <p className="text-[var(--dim)] text-sm mb-3">
            Según MJ §2.1: no se accede al Nivel 1 sin <span className="text-chispa">Nivel 0 ≥ 2.5 sostenido 90 días</span>.
            Aquí el "≥2.5" se mapea a <span className="text-chispa">crédito ≥ 5000</span> y AUT_ALIM/ENER ≥ 0.5.
          </p>
          <div className="space-y-2">
            <Row ok={base.tierra_ha >= 3} label="Tierra ≥ 3 ha asegurada" />
            <Row ok={base.energia_kwh_dia >= 5} label="Microgrid ≥ 5 kWh/día" />
            <Row ok={base.comida_kg_dia >= 5} label="Comida ≥ 5 kg/día local" />
            <Row ok={credit >= 5000} label={`Crédito ≥ 5000 (hoy: ${credit.toFixed(0)})`} />
          </div>
        </Card>
      </div>
    </div>
  )
}

function Li({ icon, k, v, max }: { icon: React.ReactNode; k: string; v: string; max: number }) {
  const num = Number(v) || 0
  return (
    <li className="flex items-center gap-3">
      <span className="text-emerald-400 w-5 flex-shrink-0">{icon}</span>
      <span className="w-28 text-[var(--mut)]">{k}</span>
      <Bar value={num} max={max} color="bg-emerald-400" />
      <span className="w-12 text-right font-manrope text-sm">{v}</span>
    </li>
  )
}

function Row({ ok, label }: { ok: boolean; label: string }) {
  return (
    <div className={ok ? 'text-emerald-400' : 'text-[var(--dim)]'}>
      {ok ? '✓' : '○'} {label}
    </div>
  )
}
