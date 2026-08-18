import { useState } from 'react'
import { Leaf, Sprout } from 'lucide-react'
import { useAppStore } from '@core/state/store'
import { Card, Stat, Btn, Badge } from '@components/ui'

export function Regen() {
  const { regen, addEcoTech, regenCatalog, regenAvgSaving } = useAppStore()
  const [name, setName] = useState('Biofiltro comunitario')
  const [category, setCategory] = useState('Agua')
  const [provider, setProvider] = useState('Colectivo local')
  const [desc, setDesc] = useState('Tratamiento natural de aguas grises para riego común')

  const catalog = regenCatalog()
  const cats = Object.keys(catalog)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Regen · Directorio de Ecotecnias (Urbanika)</h1>
        <Badge color="bg-emerald-500/20 text-emerald-300"><Leaf className="w-3 h-3 inline" /> Catálogo Nidori</Badge>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <Stat label="Ecotecnias" value={`${regen.ecotech.length}`} sub="directorio" />
        <Stat label="Sistemas bioclimáticos" value={`${regen.systems.length}`} sub="Nidori" />
        <Stat label="Ahorro promedio" value={`${regenAvgSaving()}%`} sub="energía" />
        <Stat label="Categorías" value={`${cats.length}`} sub="catálogo" />
      </div>

      <Card title="Catálogo bioclimático Nidori (seed)">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {regen.systems.map((s) => (
            <div key={s.id} className="p-2 rounded border border-white/10 text-sm">
              <div className="flex justify-between"><b>{s.name}</b><span className="text-emerald-400">-{s.savingPct}%</span></div>
              <p className="text-xs text-white/50">{s.description}</p>
            </div>
          ))}
        </div>
      </Card>

      <Card title="Añadir ecotecnia al directorio">
        <div className="flex flex-wrap gap-2 items-end">
          <input className="bg-black/30 border border-white/10 rounded px-2 py-1 text-sm" value={name} onChange={(e) => setName(e.target.value)} />
          <input className="bg-black/30 border border-white/10 rounded px-2 py-1 text-sm w-28" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Categoría" />
          <input className="bg-black/30 border border-white/10 rounded px-2 py-1 text-sm w-40" value={provider} onChange={(e) => setProvider(e.target.value)} placeholder="Proveedor" />
          <input className="bg-black/30 border border-white/10 rounded px-2 py-1 text-sm w-64" value={desc} onChange={(e) => setDesc(e.target.value)} />
          <Btn onClick={() => addEcoTech(name, category, provider, desc)}><Sprout className="w-4 h-4 inline" /> Añadir</Btn>
        </div>
      </Card>

      {cats.length > 0 && (
        <Card title="Directorio por categoría">
          {cats.map((c) => (
            <div key={c} className="mb-2">
              <div className="text-sm font-semibold text-emerald-300">{c}</div>
              {catalog[c].map((e) => (
                <div key={e.id} className="text-xs text-white/60 pl-3">• {e.name} — {e.provider}</div>
              ))}
            </div>
          ))}
        </Card>
      )}

      <p className="text-xs text-white/40">Asimilado de Urbanika/Directorio_Regen (scraper UNAM) + Nidori-catalogo (10 sistemas, -80% energía). Extirpado: scraping, Dash/Plotly, APIs. Conservado: catálogo de ecotecnias y sistemas bioclimáticos certificables.</p>
    </div>
  )
}
