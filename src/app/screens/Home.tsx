import { Mountain, Database, Users, Cpu, Coins, Eye, ChevronRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useAppStore } from '@core/state/store'
import { autFromCAC, pgsLM, population, survivalCredit, znuEligible } from '@core/lib/metrics'
import { Stat, SectionTitle, Card, Bar, Btn } from '@components/ui'

const MODULES = [
  { key: 'base', label: 'Nivel 0 · Base Material', icon: Mountain, color: 'text-emerald-400', bg: 'bg-emerald-500/20' },
  { key: 'lucidez', label: 'Métricas · CAC v12', icon: Database, color: 'text-lime-400', bg: 'bg-lime-500/20' },
  { key: 'colectivo', label: 'Nivel 1 · Colectivo', icon: Users, color: 'text-purple-400', bg: 'bg-purple-500/20' },
  { key: 'automata', label: 'Autómata v2 · Leyes MJ', icon: Cpu, color: 'text-cyan-400', bg: 'bg-cyan-500/20' },
  { key: 'znu', label: 'ZNU v2 · Soberanía', icon: Coins, color: 'text-amber-400', bg: 'bg-amber-500/20' },
  { key: 'verificacion', label: 'Verificación Triaxial', icon: Eye, color: 'text-sky-400', bg: 'bg-sky-500/20' },
]

export function Home() {
  const { nodeName, base, cac, members } = useAppStore()
  const navigate = useNavigate()
  const aut = autFromCAC(cac)
  const pgs = pgsLM(aut)
  const pop = population(members)
  const credit = survivalCredit(base)
  const eligible = znuEligible(aut)

  // Posición jerárquica real (MJ §1.1)
  const hasBase = base.tierra_ha > 0 && base.energia_kwh_dia > 0 && base.comida_kg_dia > 0
  const position = hasBase
    ? pop >= 5 ? 'Nivel 1 · Colectivo ontogenético operativo' : 'Nivel 0 · Base material desplegada'
    : 'PRE-INFRAESTRUCTURAL · sin base material propia'

  const positionColor = hasBase ? (pop >= 5 ? 'text-purple-400' : 'text-emerald-400') : 'text-orange-400'

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="font-jost text-2xl md:text-3xl font-semibold">{nodeName}</h1>
          <p className="text-[var(--dim)] mt-1">Diagnóstico de Lucidez Material — Materialismo Jerárquico aplicado.</p>
        </div>
        <div className="flex items-center gap-2">
          <span className={`flex items-center gap-1 text-sm ${positionColor}`}>
            <span className="w-2 h-2 rounded-full bg-current co-pulse" aria-hidden="true" />
            {position}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Stat label="PGS (Lucidez)" value={pgs.toFixed(2)} sub="Media vectores con sensor" color="text-chispa" />
        <Stat label="Población ancla" value={`${pop}`} sub="Miembros Social DNA" />
        <Stat label="Crédito supervivencia" value={credit.toFixed(0)} sub="Base material medida" />
        <Stat label="Elegibilidad ZNU" value={eligible ? 'SÍ' : 'NO'} sub="AUT_ALIM/ENER≥0.5, HABI≥0.4" color={eligible ? 'text-amber-400' : 'text-[var(--dim)]'} />
      </div>

      <Card title="Posición jerárquica real (MJ §1.1–1.3)">
        <div className="space-y-2 text-sm">
          <p className="text-[var(--dim)]">
            MJ: "Solo cuando el conocimiento se articula en niveles jerárquicos materiales reales emerge la Lucidez Material."
          </p>
          <div className="flex items-center gap-2">
            <span className="font-jost font-semibold">Tu posición hoy:</span>
            <span className={positionColor}>{position}</span>
          </div>
          <Bar value={hasBase ? (pop >= 5 ? 0.5 : 0.15) : 0.05} max={1} color={hasBase ? 'bg-emerald-400' : 'bg-orange-400'} />
          <p className="text-[var(--dim)] text-xs">
            {hasBase
              ? pop >= 5
                ? 'Base desplegada + colectivo ancla. Siguiente gate: PVSO Ciclo 2 (PGS ≥ 1.5).'
                : 'Base material presente. Siguiente gate: convocar colectivo ancla (5 miembros, Social DNA).'
              : 'Sin tierra/energía/comida propias. Primera acción: asegurar 3-5 ha con agua + sol (Ciclo 1).'}
          </p>
        </div>
      </Card>

      <div>
        <SectionTitle>Módulos del OS</SectionTitle>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {MODULES.map((m) => (
            <button
              key={m.key}
              onClick={() => navigate('/' + m.key)}
              className="flex items-center justify-between p-4 rounded-2xl border border-[var(--line)] hover:border-chispa/50 transition-colors text-left"
            >
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${m.bg}`}>
                  <m.icon className={`w-5 h-5 ${m.color}`} aria-hidden="true" />
                </div>
                <span className="font-manrope font-medium">{m.label}</span>
              </div>
              <ChevronRight className="w-4 h-4 text-[var(--dim)]" />
            </button>
          ))}
        </div>
      </div>

      <Card title="Atajo a la acción">
        <div className="flex flex-wrap gap-3">
          <Btn onClick={() => navigate('/base')}>Asegurar base material</Btn>
          <Btn variant="ghost" onClick={() => navigate('/colectivo')}>Convocar colectivo</Btn>
          <Btn variant="ghost" onClick={() => navigate('/automata')}>Revisar Leyes MJ</Btn>
        </div>
      </Card>
    </div>
  )
}
