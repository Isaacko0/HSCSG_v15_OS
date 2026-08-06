import { Globe2, ExternalLink, Compass } from 'lucide-react'
import { useAppStore } from '@core/state/store'
import { Card, Stat } from '@components/ui'

export function Civilizaciones() {
  const { civilizaciones } = useAppStore()
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-jost text-2xl md:text-3xl font-semibold flex items-center gap-2">
          <Compass className="w-7 h-7 text-emerald-400" /> Civilizaciones · Horizontes postmonetarios
        </h1>
        <p className="text-[var(--dim)] mt-1">
          Proyectos hermanos de civilización postmonetaria y economía basada en recursos. Como Cosateca OS,
          apuntan al acceso por contribución y base material, no por dinero.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Stat label="Horizontes" value={`${civilizaciones.links.length}`} color="text-emerald-400" />
        <Stat label="Modelo" value="Postmonetario" color="text-sky-400" />
        <Stat label="Base" value="Recursos" color="text-violet-400" />
        <Stat label="Límite" value="Autoimpuesto" color="text-rose-400" />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {civilizaciones.links.map((l) => (
          <Card key={l.key}>
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="font-manrope font-semibold text-lg flex items-center gap-2">
                  <Globe2 className="w-5 h-5 text-emerald-400" /> {l.name}
                </div>
                <p className="text-sm text-[var(--ink)] mt-2 leading-relaxed">{l.desc}</p>
              </div>
            </div>
            <a
              href={l.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1 text-sm text-sky-400 hover:underline"
            >
              Visitar <ExternalLink className="w-3 h-3" />
            </a>
          </Card>
        ))}
      </div>

      <p className="text-xs text-[var(--dim)]">
        Enlaces externos (se abren en nueva pestaña). No son parte del nodo Cosateca; se listan como referentes de
        civilización postmonetaria coherentes con el Materialismo Jerárquico y el CaaS.
      </p>
    </div>
  )
}
