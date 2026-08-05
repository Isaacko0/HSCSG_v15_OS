import { ShieldAlert, ShieldCheck, CheckCircle2, Circle } from 'lucide-react'
import { useState } from 'react'
import { useAppStore } from '@core/state/store'
import { leyI, leyII, autFromCAC, pgsLM, population, znuEligible } from '@core/lib/metrics'
import { Card, Stat, Btn } from '@components/ui'

export function Automata() {
  const { base, cac, members, talents, toggleTalent } = useAppStore()
  const aut = autFromCAC(cac)
  const pgs = pgsLM(aut)
  const pop = population(members)
  const eligible = znuEligible(aut)

  const [action, setAction] = useState('')
  const [audit, setAudit] = useState<string[]>([])

  const ley1 = leyI(action)
  const ley2 = leyII(pgs, pop, base.usdc_reserva)

  const activeTalents = talents.filter((t) => t.active).length

  const runAudit = () => {
    const lines = [
      `LEY I (no dañar base material): ${ley1.pass ? 'PASS' : 'VETO'} ${ley1.hits.length ? '— toca: ' + ley1.hits.join(', ') : ''}`,
      `LEY II (soberanizar base / ROI): ${ley2.pass ? 'PASS' : 'HIBERNACIÓN'} — ROI ${ley2.roi}`,
      `LEY III (lucidez material): sensores=${cac.ALIM + cac.ENER + cac.SALU + cac.HABI + cac.PROD > 0 ? 'registrados' : 'SIN DATOS'}`,
      `Autómata v2: órgano (no cerebro). Talents base activos=${activeTalents}/18.`,
      `Base material: tierra ${base.tierra_ha}ha, energía ${base.energia_kwh_dia}kWh/d, comida ${base.comida_kg_dia}kg/d.`,
    ]
    setAudit(lines)
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-jost text-2xl md:text-3xl font-semibold">Autómata v2 · Leyes MJ</h1>
        <p className="text-[var(--dim)] mt-1">Órgano de base material, no cerebro de civilización abstracta.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Stat label="Talents base activos" value={`${activeTalents}/18`} sub="90% FABSHIP/Energy/Water/Food" />
        <Stat label="Ley I (no dañar)" value={ley1.pass ? 'PASS' : 'VETO'} color={ley1.pass ? 'text-emerald-400' : 'text-red-400'} />
        <Stat label="Ley II (ROI)" value={ley2.pass ? 'PASS' : 'HIBERNAR'} color={ley2.pass ? 'text-emerald-400' : 'text-orange-400'} />
        <Stat label="PGS actual" value={pgs.toFixed(2)} sub={`Elegible ZNU: ${eligible ? 'SÍ' : 'NO'}`} color="text-chispa" />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <Card title="Verificación de acción (Ley I + II)">
          <input
            value={action}
            onChange={(e) => setAction(e.target.value)}
            placeholder="Describe una acción a evaluar (ej: 'usar tierra para parking')"
            className="w-full px-3 py-2 bg-[var(--surf2)] border border-[var(--line)] rounded-xl text-sm mb-3"
          />
          <div className="space-y-2 text-sm">
            <div className={ley1.pass ? 'text-emerald-400' : 'text-red-400'}>
              {ley1.pass ? <ShieldCheck className="w-4 h-4 inline mr-1" /> : <ShieldAlert className="w-4 h-4 inline mr-1" />}
              Ley I — {ley1.pass ? 'No daña base material' : `VETADA: toca ${ley1.hits.join(', ')}`}
            </div>
            <div className={ley2.pass ? 'text-emerald-400' : 'text-orange-400'}>
              {ley2.pass ? <ShieldCheck className="w-4 h-4 inline mr-1" /> : <ShieldAlert className="w-4 h-4 inline mr-1" />}
              Ley II — {ley2.pass ? `Soberaniza (ROI ${ley2.roi})` : `Hibernar: ROI ${ley2.roi} < 1`}
            </div>
          </div>
          <Btn className="mt-4" onClick={runAudit}>Ejecutar auditoría Ley III</Btn>
          {audit.length > 0 && (
            <ul className="mt-3 space-y-1 text-xs bg-[var(--surf2)] rounded-xl p-3">
              {audit.map((l, i) => <li key={i} className="text-[var(--mut)]">{l}</li>)}
            </ul>
          )}
        </Card>

        <Card title="Constitución MJ-Alráica">
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2"><span className="text-chispa font-jost font-bold">I.</span><span>NUNCA DAÑES LA BASE MATERIAL (tierra, agua, energía, comida, herramientas, cuerpos, semillas).</span></li>
            <li className="flex gap-2"><span className="text-chispa font-jost font-bold">II.</span><span>GÁNATE LA VIDA SOBERANIZANDO LA BASE MATERIAL (ROI = ΔAUT/coste ≥ 1).</span></li>
            <li className="flex gap-2"><span className="text-chispa font-jost font-bold">III.</span><span>NUNCA ENGAÑES — LUCIDEZ MATERIAL OBLIGATORIA (auditoría con sensores reales).</span></li>
          </ul>
        </Card>
      </div>

      <Card title="Talents v2 — Solo base material (19 → 18 mapeados)">
        <div className="grid md:grid-cols-2 gap-2">
          {talents.map((t) => (
            <button
              key={t.id}
              onClick={() => toggleTalent(t.id)}
              className="flex items-center justify-between text-left bg-[var(--surf2)] rounded-xl px-3 py-2 hover:bg-[var(--surf3)] transition-colors"
            >
              <div className="min-w-0">
                <p className={`font-manrope text-sm ${t.active ? 'text-white' : 'text-[var(--mut)]'}`}>{t.name}</p>
                <p className="text-[var(--dim)] text-xs truncate">{t.func}</p>
              </div>
              {t.active ? <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" /> : <Circle className="w-5 h-5 text-[var(--dim)] flex-shrink-0" />}
            </button>
          ))}
        </div>
      </Card>
    </div>
  )
}
