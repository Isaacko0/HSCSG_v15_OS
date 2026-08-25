import { Card, Badge, Btn, Stat } from '@components/ui'
import { ExternalLink, Github, BookOpen } from 'lucide-react'
import fuentesData from '../../../docs/fuentes_indice.json'

type Fuente = {
  id: number
  nombre: string
  url: string
  estado: string
  backup: string
  integration: string
  briefs_relacionados: string[]
  seccion_ref: string
}

export function Fuentes() {
  const fuentes = (fuentesData as { fuentes: Fuente[] }).fuentes
  const conOficial = fuentes.filter((f) => f.url).length
  const conRepo = fuentes.filter((f) => f.backup).length

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Fuentes de Asimilación</h1>
        <Badge color="bg-emerald-500/20 text-emerald-300">nodo soberano · offline-first</Badge>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <Stat label="Fuentes" value={`${fuentes.length}`} sub="integradas" />
        <Stat label="Con doc en repo" value={`${conRepo}`} sub="backup/integration" />
        <Stat label="Con fuente oficial" value={`${conOficial}`} sub="URL viva" />
      </div>

      <Card title="Índice de fuentes (click para ir)">
        <div className="space-y-3">
          {fuentes.map((f) => (
            <div
              key={f.id}
              className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 p-3 rounded-lg border border-white/10 bg-white/5"
            >
              <div className="flex items-center gap-2 min-w-[110px]">
                <Badge color="bg-indigo-500/20 text-indigo-300">{f.id}</Badge>
                <span className="font-medium">{f.nombre}</span>
              </div>

              <div className="flex-1 text-sm text-white/70">
                <span className="text-white/90">{f.estado}</span>
                <span className="mx-2 text-white/30">·</span>
                <span className="text-emerald-300/80">→ {f.seccion_ref}</span>
              </div>

              <div className="flex items-center gap-2">
                {f.backup ? (
                  <a href={f.backup} target="_blank" rel="noopener noreferrer">
                    <Btn>
                      <Github className="w-4 h-4 mr-1" /> Ver en repo
                    </Btn>
                  </a>
                ) : (
                  <Badge color="bg-white/10 text-white/40">sin doc local</Badge>
                )}

                {f.url ? (
                  <a href={f.url} target="_blank" rel="noopener noreferrer">
                    <Btn>
                      <ExternalLink className="w-4 h-4 mr-1" /> Fuente oficial
                    </Btn>
                  </a>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card title="Cómo funciona">
        <div className="space-y-1 text-sm text-white/70">
          <div className="flex items-center gap-2"><BookOpen className="w-4 h-4" /> El índice vive en <code>docs/fuentes_indice.json</code> (local, versionado en git).</div>
          <div className="flex items-center gap-2"><Github className="w-4 h-4" /> <b>Ver en repo</b> abre el backup/integration en el repo propio (no expone datos del nodo).</div>
          <div className="flex items-center gap-2"><ExternalLink className="w-4 h-4" /> <b>Fuente oficial</b> abre la URL original solo cuando la fuente es pública y está marcada.</div>
          <div className="text-white/40 mt-2">Principio anfibio: el nodo es soberano (índice local); la trazabilidad a la fuente primaria es opt-in por fuente.</div>
        </div>
      </Card>
    </div>
  )
}
