import { Globe, Circle, ArrowRight } from 'lucide-react'
import { useAppStore } from '@core/state/store'
import { Card, Stat } from '@components/ui'

export function Mundus() {
  const { mundus } = useAppStore()
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="font-jost text-2xl md:text-3xl font-semibold flex items-center gap-2">
            <Globe className="w-7 h-7 text-sky-400" /> Mundus · Unidad global
          </h1>
          <p className="text-[var(--dim)] mt-1">Asimilado de Sci-Hive datapoint "Mundus Live" (IDETRA). Símbolo de unidad + Circular Exchange System. Isomorfo a CaaS.</p>
        </div>
      </div>

      <Card>
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex-shrink-0">
            <svg width="120" height="120" viewBox="0 0 120 120" aria-label="Círculo azul de Mundus">
              <circle cx="60" cy="60" r="54" fill="none" stroke="#3B82F6" strokeWidth="10" />
            </svg>
          </div>
          <div>
            <h2 className="font-manrope font-semibold text-lg mb-2">Manifiesto</h2>
            <p className="text-[var(--ink)] leading-relaxed whitespace-pre-line">{mundus.manifesto}</p>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Stat label="Símbolo" value="Círculo azul" color="text-sky-400" />
        <Stat label="Intercambio" value="Circular" color="text-emerald-400" />
        <Stat label="Dependencia $" value="Eliminada" color="text-rose-400" />
        <Stat label="Pilares" value={`${mundus.pillars.length}`} color="text-violet-400" />
      </div>

      <Card title="Pilares de Mundus → módulos Cosateca OS">
        <div className="grid md:grid-cols-2 gap-3">
          {mundus.pillars.map((p) => (
            <a
              key={p.key}
              href={p.hscsgLink}
              className="flex items-center justify-between p-3 rounded-xl border border-[var(--line)] hover:bg-[var(--surf2)] transition-colors"
            >
              <div>
                <div className="font-manrope font-medium">{p.name}</div>
                <div className="text-xs text-[var(--dim)]">{p.desc}</div>
              </div>
              <ArrowRight className="w-4 h-4 text-[var(--mut)]" />
            </a>
          ))}
        </div>
        <p className="text-xs text-[var(--dim)] mt-3 flex items-center gap-1">
          <Circle className="w-3 h-3 text-sky-400" />
          Circular Exchange System = CaaS de Cosateca OS: acceso por contribución a la base material, no por dinero.
        </p>
      </Card>
    </div>
  )
}
