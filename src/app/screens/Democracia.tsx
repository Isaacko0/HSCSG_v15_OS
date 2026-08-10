import { useState } from 'react'
import { Card, Stat, Badge, Btn } from '@components/ui'
import { totalDelegations, mostDelegated } from '@core/lib/democracia'
import { useAppStore } from '@core/state/store'

export function Democracia() {
  const { democracia, electDeptRep } = useAppStore()
  const [dept, setDept] = useState(democracia.departments[0]?.id ?? '')
  const [rep, setRep] = useState('')
  const voter = 'nodo'

  const total = totalDelegations(democracia)
  const top = mostDelegated(democracia)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Democracia por Expertise (DPoS)</h1>
        <Badge color="bg-emerald-500/20 text-emerald-300">iambrainstorming → CDS</Badge>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        <Stat label="Departamentos" value={`${democracia.departments.length}`} sub="especializados" />
        <Stat label="Delegaciones" value={`${total}`} sub="votantes activos" />
        <Stat label="Más delegado" value={top?.name ?? '—'} sub={`${top?.delegates ?? 0} delegates`} />
      </div>

      <Card title="Árbol de departamentos (evolutivo)">
        <div className="grid md:grid-cols-2 gap-2">
          {democracia.departments.map((d) => (
            <div key={d.id} className="border border-white/10 rounded p-2">
              <div className="font-medium">{d.name}</div>
              <div className="text-xs text-white/50">sub: {d.children.join(', ')}</div>
              <div className="text-sm mt-1">
                Rep: <b>{d.rep || 'sin elegir'}</b> · {d.delegates} delegates
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card title="Elegir representante por expertise">
        <div className="flex flex-wrap gap-2 items-end">
          <div className="flex flex-col">
            <label className="text-xs text-white/60">Departamento</label>
            <select className="bg-black/30 border border-white/10 rounded px-2 py-1 text-sm" value={dept}
              onChange={(e) => setDept(e.target.value)}>
              {democracia.departments.map((d) => <option key={d.id} value={d.id}>{d.name}</option>)}
            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-xs text-white/60">Representante (expertise)</label>
            <input className="bg-black/30 border border-white/10 rounded px-2 py-1 text-sm" value={rep}
              onChange={(e) => setRep(e.target.value)} placeholder="ej. Dra. Biología" />
          </div>
          <Btn disabled={!dept || !rep.trim()} onClick={() => { electDeptRep(dept, rep.trim(), voter); setRep('') }}>
            Delegar voto
          </Btn>
        </div>
        <p className="text-xs text-white/40 mt-2">Editable por el dueño del nodo. Se guarda localmente.
          Inspirado en "A new fair democracy inspired by Delegated Proof of Stake" (Amiya Tulu, 2019).</p>
      </Card>
    </div>
  )
}
