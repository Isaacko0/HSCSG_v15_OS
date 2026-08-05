import { Coins, TrendingDown, Scale } from 'lucide-react'
import { useAppStore } from '@core/state/store'
import { autFromCAC, znuEligible, znuEmission, demurrage, population } from '@core/lib/metrics'
import { Card, Stat, Bar, Field } from '@components/ui'

export function ZNU() {
  const { cac, members, znu, updateZNU, base } = useAppStore()
  const aut = autFromCAC(cac)
  const eligible = znuEligible(aut)
  const pop = population(members)
  const emission = znuEmission(members, eligible, znu.perMember)

  // Supongamos circulación: emisión acumulada simulada desde miembros + flujos
  const circulation = emission
  const dem = demurrage(circulation, znu.demurrageThreshold, znu.demurrageRate)
  const toFondo = dem // va al Fondo de Acceso Común (tierra/agua/energía/herramientas/semillas)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-jost text-2xl md:text-3xl font-semibold">ZNU v2 · Soberanía Material</h1>
        <p className="text-[var(--dim)] mt-1">Current-see de acceso a base material. Emisión solo si la base existe.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Stat label="Elegibilidad" value={eligible ? 'SÍ' : 'NO'} sub="AUT_ALIM/ENER≥0.5, HABI≥0.4" color={eligible ? 'text-amber-400' : 'text-[var(--dim)]'} />
        <Stat label="Emisión / mes" value={`${emission}`} sub={`${pop} miembros × ${znu.perMember}`} color="text-amber-400" />
        <Stat label="Demurrage / mes" value={`${dem}`} sub={`> ${znu.demurrageThreshold} ZNU`} color="text-orange-400" />
        <Stat label="A Fondo Común" value={`${toFondo.toFixed(1)}`} sub="tierra/agua/energía/herr/sem" color="text-emerald-400" />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <Card title="Parámetros ZNU v2">
          <div className="space-y-3">
            <Field label="ZNU por miembro/mes" value={znu.perMember} onChange={(v) => updateZNU({ perMember: v })} step="10" />
            <Field label="Umbral demurrage" value={znu.demurrageThreshold} onChange={(v) => updateZNU({ demurrageThreshold: v })} step="50" suffix="ZNU" />
            <Field label="Tasa demurrage" value={Math.round(znu.demurrageRate * 100)} onChange={(v) => updateZNU({ demurrageRate: v / 100 })} step="0.5" suffix="%" />
            <Field label="Paridad (ZNU por 1 USDC)" value={znu.priceParity} onChange={(v) => updateZNU({ priceParity: v })} step="0.1" />
          </div>
        </Card>

        <Card title="Demurrage anti-acumulación real">
          <p className="text-[var(--dim)] text-sm mb-3">
            MJ: "No existen límites excepto los que nos imponemos". El exceso de ZNU sobre el umbral se recicla al
            Fondo de Acceso Común — financia tierra, agua, energía, herramientas, semillas.
          </p>
          <Bar value={circulation} max={Math.max(znu.demurrageThreshold * 2, circulation)} color="bg-amber-400" />
          <div className="mt-3 space-y-1 text-sm">
            <Row icon={<Coins className="w-4 h-4" />} k="Circulación" v={`${circulation.toFixed(0)} ZNU`} />
            <Row icon={<TrendingDown className="w-4 h-4" />} k="Reciclado a fondo" v={`${toFondo.toFixed(1)} ZNU`} />
            <Row icon={<Scale className="w-4 h-4" />} k="Paridad local" v={`1 ZNU = ${znu.priceParity} USDC`} />
          </div>
        </Card>
      </div>

      <Card title="Value Equation (biofísica, no financiera)">
        <p className="text-[var(--dim)] text-sm">
          puntos = horas_base×1.0 + materiales_kg×0.8 + energía_kWh×1.2 + comida_kg×1.5 + semillas_variedades×2.0 +
          impacto_eco×2.0 + apreciaciones×0.5. ZNU = puntos ÷ coeficiente paridad local.
        </p>
        <p className="text-[var(--mut)] text-xs mt-2">Con base material {base.tierra_ha > 0 ? 'presente' : 'ausente'}, el coeficiente se calibra al costo de vida REAL del territorio, no al mercado global.</p>
      </Card>
    </div>
  )
}

function Row({ icon, k, v }: { icon: React.ReactNode; k: string; v: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-amber-400 w-5 flex-shrink-0">{icon}</span>
      <span className="w-40 text-[var(--mut)]">{k}</span>
      <span className="font-manrope">{v}</span>
    </div>
  )
}
