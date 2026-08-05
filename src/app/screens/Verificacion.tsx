import { Brain, FlaskConical, Cpu, Plus } from 'lucide-react'
import { useAppStore } from '@core/state/store'
import { autFromCAC, pgsLM, xiFromPVSO, etaFromPVSO, pmrtePartial } from '@core/lib/metrics'
import { Card, Stat, Btn, EmptyState, Field } from '@components/ui'

export function Verificacion() {
  const { cac, base, pvsos, addPVSO } = useAppStore()
  const aut = autFromCAC(cac)
  const pgs = pgsLM(aut)
  const xi = xiFromPVSO(pvsos)
  const eta = etaFromPVSO(pvsos)
  const pmrte = pmrtePartial(aut, pvsos)

  // Verificación triaxial (MJ/Alráico §2.x)
  const mental = pgs > 0 // CDS + diseño
  const simulacion = pvsos.length >= 1 // Autómata / modelo
  const laboratorio = base.tierra_ha > 0 && base.energia_kwh_dia > 0 // sensores reales en tierra
  const triaxialPass = mental && simulacion && laboratorio

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-jost text-2xl md:text-3xl font-semibold">Verificación Triaxial</h1>
        <p className="text-[var(--dim)] mt-1">Mental (CDS) + Simulación (Autómata) + Laboratorio (Sensores en tierra real).</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Stat label="η (ontogenética)" value={eta.toFixed(2)} sub="PGS promedio PVSO" color="text-chispa" />
        <Stat label="ξ (aprendizaje)" value={xi.toFixed(2)} sub="Δη validado por ciclo" />
        <Stat label="PMRTE parcial" value={pmrte.toFixed(3)} sub="μ·ε·ρ·τ·δ (modelo)" />
        <Stat label="Triaxial" value={triaxialPass ? 'PASS' : 'INCOMPLETA'} color={triaxialPass ? 'text-emerald-400' : 'text-orange-400'} />
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <Card title="I · Mental (CDS)">
          <div className="flex items-center gap-2 mb-2">
            <Brain className="w-5 h-5 text-purple-400" />
            {mental ? <span className="text-emerald-400 text-sm">✓ diseño/consenso</span> : <span className="text-orange-400 text-sm">○ pendiente</span>}
          </div>
          <p className="text-[var(--dim)] text-sm">PGS calculado: {pgs.toFixed(2)}. El colectivo comprende su posición jerárquica real (MJ §1.5).</p>
        </Card>
        <Card title="II · Simulación (Autómata)">
          <div className="flex items-center gap-2 mb-2">
            <Cpu className="w-5 h-5 text-cyan-400" />
            {simulacion ? <span className="text-emerald-400 text-sm">✓ modelo corrido</span> : <span className="text-orange-400 text-sm">○ sin PVSO</span>}
          </div>
          <p className="text-[var(--dim)] text-sm">PVSOs registrados: {pvsos.length}. η={eta.toFixed(2)}, ξ={xi.toFixed(2)}.</p>
        </Card>
        <Card title="III · Laboratorio (Tierra)">
          <div className="flex items-center gap-2 mb-2">
            <FlaskConical className="w-5 h-5 text-emerald-400" />
            {laboratorio ? <span className="text-emerald-400 text-sm">✓ sensores en campo</span> : <span className="text-orange-400 text-sm">○ sin base</span>}
          </div>
          <p className="text-[var(--dim)] text-sm">Tierra {base.tierra_ha}ha, energía {base.energia_kwh_dia}kWh/d. Sin laboratorio, toda métrica es SIMULACIÓN ILUSTRATIVA.</p>
        </Card>
      </div>

      <Card title="PVSO — Protocolo de Validación de Salud Ontogenética (cada 28 días)">
        <AddPVSO onAdd={(cycle, pgsVal, aut_alim, aut_ener, aut_habi, aut_salu) =>
          addPVSO({ cycle, pgs: pgsVal, aut_alim, aut_ener, aut_habi, aut_salu, notes: 'PVSO de campo' })} />
        {pvsos.length === 0 ? (
          <EmptyState>Aún no hay PVSOs. Registra la primera medición de campo (Ciclo 1).</EmptyState>
        ) : (
          <ul className="mt-4 space-y-2">
            {[...pvsos].reverse().map((p) => (
              <li key={p.id} className="bg-[var(--surf2)] rounded-xl px-3 py-2 text-sm">
                <div className="flex items-center justify-between">
                  <span className="font-manrope font-medium">Ciclo {p.cycle} · PGS {p.pgs.toFixed(2)}</span>
                  <span className="text-[var(--dim)] text-xs">{new Date(p.ts).toLocaleDateString()}</span>
                </div>
                <div className="text-[var(--dim)] text-xs mt-1">
                  AUT_ALIM {p.aut_alim.toFixed(2)} · ENER {p.aut_ener.toFixed(2)} · HABI {p.aut_habi.toFixed(2)} · SALU {p.aut_salu.toFixed(2)}
                </div>
              </li>
            ))}
          </ul>
        )}
      </Card>
    </div>
  )
}

function AddPVSO({ onAdd }: { onAdd: (cycle: number, pgs: number, a: number, e: number, h: number, s: number) => void }) {
  return (
    <div className="flex flex-wrap items-end gap-2">
      <Field label="Ciclo" value={1} onChange={() => {}} />
      <input type="number" defaultValue={1} min={1} id="pvso-cycle" className="w-16 px-2 py-2 bg-[var(--surf2)] border border-[var(--line)] rounded-xl text-sm" />
      <Btn onClick={() => {
        const c = Number((document.getElementById('pvso-cycle') as HTMLInputElement)?.value || 1)
        const { cac } = useAppStore.getState()
        const a = Math.min(1, cac.ALIM), e = Math.min(1, cac.ENER), h = Math.min(1, cac.HABI), s = Math.min(1, cac.SALU)
        const pgs = (a + e + h + s + Math.min(1, cac.PROD)) / 5
        onAdd(c, +pgs.toFixed(2), +a.toFixed(2), +e.toFixed(2), +h.toFixed(2), +s.toFixed(2))
      }}><Plus className="w-4 h-4 mr-1" /> Registrar PVSO</Btn>
      <p className="text-[var(--dim)] text-xs w-full">Valor por defecto = métricas CAC actuales (reemplaza con datos de campo reales).</p>
    </div>
  )
}
