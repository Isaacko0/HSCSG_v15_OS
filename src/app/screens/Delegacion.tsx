import { useState } from 'react'
import { GitBranch, UserMinus, UserPlus } from 'lucide-react'
import { useAppStore } from '@core/state/store'
import { delegationTree, expertInfluence } from '@core/lib/delegation'
import type { DomainKey } from '@core/state/delegation'
import { Card, Stat, Btn, Badge, EmptyState } from '@components/ui'

const DOMAINS: DomainKey[] = ['ALIM', 'ENER', 'SALU', 'HABI', 'PROD', 'COMU', 'REDES', 'FINA', 'TRANSVERSAL', 'GOV', 'JUST', 'CDS']

export function Delegacion() {
  const { delegation, members, delegatePower, revokeDelegation } = useAppStore()
  const [from, setFrom] = useState(members[0]?.name ?? 'Isaac Ko')
  const [to, setTo] = useState(members[1]?.name ?? 'Luz')
  const [domain, setDomain] = useState<DomainKey>('ALIM')

  const tree = delegationTree(delegation)
  const experts = Array.from(new Set(delegation.edges.map((e) => e.to)))

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <GitBranch className="w-7 h-7 text-emerald-400" />
        <h1 className="font-jost text-2xl font-semibold">Delegación de Poder (liquid democracy local)</h1>
      </div>
      <p className="text-[var(--dim)]">Delega tu voto de convicción en un dominio a un experto del nodo. Una sola delegación por dominio (reemplaza la previa). Isomorfo a AuroraGov + Symbiosky.</p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Stat label="Delegaciones" value={String(delegation.edges.length)} color="text-emerald-400" />
        <Stat label="Dominios activos" value={String(Object.keys(tree).length)} color="text-violet-400" />
        <Stat label="Expertos" value={String(experts.length)} color="text-sky-400" />
        <Stat label="Miembros" value={String(members.length)} color="text-amber-400" />
      </div>

      <Card title="Delegar poder">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          <select value={from} onChange={(e) => setFrom(e.target.value)} className="px-2 py-2 bg-[var(--surf2)] border border-[var(--line)] rounded-xl text-[var(--ink)] text-sm">
            {members.map((m) => <option key={m.id} value={m.name}>{m.name}</option>)}
          </select>
          <select value={to} onChange={(e) => setTo(e.target.value)} className="px-2 py-2 bg-[var(--surf2)] border border-[var(--line)] rounded-xl text-[var(--ink)] text-sm">
            {members.filter((m) => m.name !== from).map((m) => <option key={m.id} value={m.name}>{m.name}</option>)}
          </select>
          <select value={domain} onChange={(e) => setDomain(e.target.value as DomainKey)} className="px-2 py-2 bg-[var(--surf2)] border border-[var(--line)] rounded-xl text-[var(--ink)] text-sm">
            {DOMAINS.map((d) => <option key={d} value={d}>{d}</option>)}
          </select>
          <Btn onClick={() => delegatePower(from, to, domain)}><UserPlus className="w-4 h-4 mr-1 inline" />Delegar</Btn>
        </div>
      </Card>

      <div className="grid md:grid-cols-2 gap-4">
        <Card title="Árbol de delegación por dominio">
          {delegation.edges.length === 0 && <EmptyState>Aún no hay delegaciones. El nodo decide por convicción directa de cada miembro.</EmptyState>}
          {DOMAINS.filter((d) => tree[d]?.length).map((d) => (
            <div key={d} className="mb-3">
              <Badge color="text-violet-400">{d}</Badge>
              <div className="mt-1 space-y-1">
                {tree[d].map((e, i) => (
                  <div key={i} className="flex items-center justify-between text-sm">
                    <span>{e.from} → <strong className="text-[var(--ink)]">{e.to}</strong> <span className="text-[var(--dim)]">(w {e.weight})</span></span>
                    <Btn variant="ghost" onClick={() => revokeDelegation(e.from, d)}><UserMinus className="w-3 h-3 inline" /> revocar</Btn>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </Card>

        <Card title="Influencia agregada de expertos">
          {experts.length === 0 && <EmptyState>Nadie delega aún. Los expertos ganan influencia solo al recibir delegación.</EmptyState>}
          {experts.map((ex) => {
            const inf = expertInfluence(delegation, ex)
            return (
              <div key={ex} className="mb-2 p-2 rounded border border-[var(--line)]">
                <div className="font-manrope text-sm">{ex}</div>
                <div className="flex flex-wrap gap-1 mt-1">
                  {Object.entries(inf).map(([dom, w]) => (
                    <Badge key={dom} color="bg-emerald-500/20 text-emerald-300">{dom}: {w}</Badge>
                  ))}
                </div>
              </div>
            )
          })}
        </Card>
      </div>
    </div>
  )
}
