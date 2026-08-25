import { Globe2, ExternalLink, Compass, BookOpen, Users, Map, Tag } from 'lucide-react'
import { useAppStore } from '@core/state/store'
import { Card, Stat } from '@components/ui'
import { t } from '@core/lib/i18n'
import { META_CRISIS_PROJECTS } from '@core/lib/meta_crisis_projects'
import { META_CRISIS_PEOPLE } from '@core/lib/meta_crisis_people'
import { META_CRISIS_BOOKS } from '@core/lib/meta_crisis_books'
import { META_CRISIS_COMMUNITIES } from '@core/lib/meta_crisis_communities'
import { META_CRISIS_MAPS } from '@core/lib/meta_crisis_maps'
import { META_CRISIS_ISOMORPHISMS } from '@core/lib/meta_crisis_isomorphisms'
import { META_CRISIS_CONCEPTS } from '@core/lib/meta_crisis_concepts'

export function MetaCrisis() {
  const { lang } = useAppStore()
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-jost text-2xl md:text-3xl font-semibold flex items-center gap-2">
          <Compass className="w-7 h-7 text-emerald-400" /> Meta-Crisis · Ecosistema de Transición
        </h1>
        <p className="text-[var(--dim)] mt-1">Mapa del ecosistema meta-crisis y su isomorfismo con HSCSG v15 OS</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Stat label="Proyectos" value={`${META_CRISIS_PROJECTS.length}`} color="text-emerald-400" />
        <Stat label="Personas" value={`${META_CRISIS_PEOPLE.length}`} color="text-sky-400" />
        <Stat label="Libros" value={`${META_CRISIS_BOOKS.length}`} color="text-violet-400" />
        <Stat label="Isomorfismos" value={`${META_CRISIS_ISOMORPHISMS.length}`} color="text-amber-400" />
      </div>

      {/* Isomorfismos */}
      <Card>
        <h2 className="font-manrope font-semibold text-lg flex items-center gap-2 mb-4">
          <Map className="w-5 h-5 text-emerald-400" /> Isomorfismos Meta-Crisis ↔ HSCSG
        </h2>
        <div className="grid md:grid-cols-2 gap-3">
          {META_CRISIS_ISOMORPHISMS.map((iso) => (
            <div key={iso.id} className="p-3 rounded-lg bg-[var(--card)] border border-[var(--border)]">
              <div className="flex items-center justify-between">
                <span className="font-medium text-sm">{iso.metaCrisisConcept}</span>
                <span className="text-xs text-emerald-400">→</span>
              </div>
              <div className="text-sm text-[var(--ink)] mt-1">{iso.hscgConcept}</div>
              <div className="text-xs text-[var(--dim)] mt-1">{iso.isomorphism}</div>
            </div>
          ))}
        </div>
      </Card>

      {/* Proyectos */}
      <Card>
        <h2 className="font-manrope font-semibold text-lg flex items-center gap-2 mb-4">
          <Globe2 className="w-5 h-5 text-sky-400" /> Proyectos Clave
        </h2>
        <div className="grid md:grid-cols-2 gap-3">
          {META_CRISIS_PROJECTS.map((p) => (
            <div key={p.id} className="p-3 rounded-lg bg-[var(--card)] border border-[var(--border)]">
              <div className="flex items-start justify-between">
                <div>
                  <div className="font-medium text-sm">{p.name}</div>
                  <div className="text-xs text-[var(--dim)]">{p.type}</div>
                </div>
                {p.website && (
                  <a href={p.website} target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:underline">
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
              <p className="text-xs text-[var(--ink)] mt-2 leading-relaxed">{p.description}</p>
              <div className="text-xs text-emerald-400 mt-2">→ {p.hscgMapping}</div>
            </div>
          ))}
        </div>
      </Card>

      {/* Personas */}
      <Card>
        <h2 className="font-manrope font-semibold text-lg flex items-center gap-2 mb-4">
          <Users className="w-5 h-5 text-violet-400" /> Personas Clave
        </h2>
        <div className="grid md:grid-3 gap-3">
          {META_CRISIS_PEOPLE.map((person) => (
            <div key={person.id} className="p-3 rounded-lg bg-[var(--card)] border border-[var(--border)]">
              <div className="font-medium text-sm">{person.name}</div>
              <div className="text-xs text-[var(--dim)]">{person.role}</div>
              <div className="text-xs text-emerald-400 mt-1">→ {person.hscgConnection}</div>
            </div>
          ))}
        </div>
      </Card>

      {/* Libros */}
      <Card>
        <h2 className="font-manrope font-semibold text-lg flex items-center gap-2 mb-4">
          <BookOpen className="w-5 h-5 text-amber-400" /> Libros & Papers
        </h2>
        <div className="grid md:grid-cols-2 gap-3">
          {META_CRISIS_BOOKS.map((book) => (
            <div key={book.id} className="p-3 rounded-lg bg-[var(--card)] border border-[var(--border)]">
              <div className="font-medium text-sm">{book.title}</div>
              <div className="text-xs text-[var(--dim)]">{book.author} ({book.year})</div>
              <div className="text-xs text-emerald-400 mt-1">→ {book.hscgMapping}</div>
            </div>
          ))}
        </div>
      </Card>

      {/* Comunidades */}
      <Card>
        <h2 className="font-manrope font-semibold text-lg flex items-center gap-2 mb-4">
          <Tag className="w-5 h-5 text-rose-400" /> Comunidades
        </h2>
        <div className="grid md:grid-cols-3 gap-3">
          {META_CRISIS_COMMUNITIES.map((comm) => (
            <div key={comm.id} className="p-3 rounded-lg bg-[var(--card)] border border-[var(--border)]">
              <div className="flex items-center justify-between">
                <div className="font-medium text-sm">{comm.name}</div>
                <span className="text-xs px-2 py-0.5 rounded bg-[var(--border)]">{comm.platform}</span>
              </div>
              <div className="text-xs text-emerald-400 mt-1">→ {comm.hscgMapping}</div>
            </div>
          ))}
        </div>
      </Card>

      {/* Mapas */}
      <Card>
        <h2 className="font-manrope font-semibold text-lg flex items-center gap-2 mb-4">
          <Map className="w-5 h-5 text-cyan-400" /> Mapas & Síntesis
        </h2>
        <div className="grid md:grid-cols-2 gap-3">
          {META_CRISIS_MAPS.map((map) => (
            <div key={map.id} className="p-3 rounded-lg bg-[var(--card)] border border-[var(--border)]">
              <div className="flex items-start justify-between">
                <div>
                  <div className="font-medium text-sm">{map.title}</div>
                  <div className="text-xs text-[var(--dim)]">{map.author} ({map.year})</div>
                </div>
                {map.url && (
                  <a href={map.url} target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:underline">
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
              <div className="text-xs text-emerald-400 mt-1">→ {map.hscgMapping}</div>
            </div>
          ))}
        </div>
      </Card>

      {/* Conceptos */}
      <Card>
        <h2 className="font-manrope font-semibold text-lg flex items-center gap-2 mb-4">
          <Tag className="w-5 h-5 text-fuchsia-400" /> Conceptos Clave
        </h2>
        <div className="grid md:grid-cols-2 gap-3">
          {META_CRISIS_CONCEPTS.map((concept) => (
            <div key={concept.id} className="p-3 rounded-lg bg-[var(--card)] border border-[var(--border)]">
              <div className="font-medium text-sm">{concept.name}</div>
              <p className="text-xs text-[var(--ink)] mt-1 leading-relaxed">{concept.definition}</p>
              <div className="text-xs text-emerald-400 mt-2">→ {concept.hscgMapping}</div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
