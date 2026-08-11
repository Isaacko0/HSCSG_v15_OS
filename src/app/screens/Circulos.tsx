import { useState } from 'react'
import { Card, Stat, Badge, Btn, EmptyState } from '@components/ui'
import { NextStageBanner } from '@components/NextStageBanner'
import { useAppStore } from '@core/state/store'
import {
  CAPITAL_KINDS, classifyCircle, regenScore,
  type CapitalKind,
} from '@core/lib/gaia'

export function Circulos() {
  const { gaia, addCircle, addCapital, setRegenMetric, addBounty, completeBounty, formCouncil } = useAppStore()
  const [name, setName] = useState('')
  const [size, setSize] = useState(8)
  const [bTitle, setBTitle] = useState('')
  const [bNeed, setBNeed] = useState('')
  const [bReward, setBReward] = useState(100)
  const [cTopic, setCTopic] = useState('')
  const [cMembers, setCMembers] = useState('')

  const score = regenScore(gaia.metrics)
  const totalCapital = Object.values(gaia.capitals).reduce((s, v) => s + v, 0)

  return (
    <div className="space-y-6">
      <NextStageBanner stage="circulos" />
      <div>
        <h1 className="font-jost text-2xl md:text-3xl font-semibold">Círculos Biomiméticos (Gaia)</h1>
        <p className="text-[var(--dim)] mt-1">Gobernanza holón-árquica + múltiples capitales + regeneración. Protocolo de interoperabilidad (vaso comunicante).</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Stat label="Círculos" value={`${gaia.circles.length}`} sub="Nodo→Confederación" color="text-emerald-400" />
        <Stat label="Score regeneración" value={`${score}`} sub="0-100" color="text-lime-400" />
        <Stat label="Capitales" value={`${totalCapital}`} sub="6 tipos" />
        <Stat label="Bounties" value={`${gaia.bounties.filter((b) => !b.done).length}`} sub="abiertas" color="text-amber-400" />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <Card title="Círculos (límites Dunbar)">
          <div className="flex flex-wrap items-end gap-2 mb-3">
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Nombre del círculo"
              className="px-2 py-1 bg-[var(--surf2)] border border-[var(--line)] rounded-lg text-sm w-36" />
            <input type="number" value={size} onChange={(e) => setSize(Number(e.target.value))}
              className="px-2 py-1 bg-[var(--surf2)] border border-[var(--line)] rounded-lg text-sm w-20" />
            <Btn onClick={() => { if (name.trim()) { addCircle(name.trim(), size); setName('') } }}>Crear</Btn>
          </div>
          <ul className="space-y-2">
            {gaia.circles.map((c) => {
              const tier = classifyCircle(c.size)
              return (
                <li key={c.id} className="flex items-center justify-between bg-[var(--surf2)] rounded-xl px-3 py-2">
                  <span className="font-manrope text-sm">{c.name} <span className="text-[var(--dim)] text-xs">({c.size})</span></span>
                  <Badge color="bg-cyan-500/20 text-cyan-300">{tier.label}</Badge>
                </li>
              )
            })}
          </ul>
          <p className="text-xs text-[var(--dim)] mt-2">Tiers: Círculo 3-13 · Comunidad 13-150 (Dunbar) · BioRegión 144-10k.</p>
        </Card>

        <Card title="Múltiples Capitales">
          <div className="grid grid-cols-2 gap-2">
            {CAPITAL_KINDS.map((k) => (
              <div key={k.key} className="bg-[var(--surf2)] rounded-xl px-3 py-2">
                <p className="text-xs text-[var(--mut)]">{k.label}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="font-medium text-sm">{gaia.capitals[k.key as CapitalKind]}</span>
                  <button onClick={() => addCapital(k.key as CapitalKind, 10)}
                    className="text-xs px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">+10</button>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card title="Métricas de Regeneración (KPI del nodo)">
        <div className="space-y-3">
          {([
            ['ecosystemHealth', 'Ecosystem Health', gaia.metrics.ecosystemHealth],
            ['communityWellbeing', 'Community Wellbeing', gaia.metrics.communityWellbeing],
            ['systemicResilience', 'Systemic Resilience', gaia.metrics.systemicResilience],
          ] as const).map(([key, label, val]) => (
            <div key={key}>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-[var(--mut)]">{label}</span>
                <span className="font-medium">{val}</span>
              </div>
              <input type="range" min={0} max={100} value={val}
                onChange={(e) => setRegenMetric(key, Number(e.target.value))}
                className="w-full accent-lime-400" />
            </div>
          ))}
        </div>
      </Card>

      <div className="grid md:grid-cols-2 gap-4">
        <Card title="Bounty System (misiones del nodo)">
          <div className="flex flex-wrap items-end gap-2 mb-3">
            <input value={bTitle} onChange={(e) => setBTitle(e.target.value)} placeholder="Título"
              className="px-2 py-1 bg-[var(--surf2)] border border-[var(--line)] rounded-lg text-sm w-28" />
            <input value={bNeed} onChange={(e) => setBNeed(e.target.value)} placeholder="Necesidad"
              className="px-2 py-1 bg-[var(--surf2)] border border-[var(--line)] rounded-lg text-sm w-32" />
            <input type="number" value={bReward} onChange={(e) => setBReward(Number(e.target.value))}
              className="px-2 py-1 bg-[var(--surf2)] border border-[var(--line)] rounded-lg text-sm w-20" />
            <Btn onClick={() => { if (bTitle.trim()) { addBounty(bTitle.trim(), bNeed, bReward); setBTitle(''); setBNeed('') } }}>Publicar</Btn>
          </div>
          {gaia.bounties.length === 0 ? (
            <EmptyState>Publica necesidades del nodo como misiones con recompensa ZNU (AUT×CDS).</EmptyState>
          ) : (
            <ul className="space-y-2">
              {gaia.bounties.map((b) => (
                <li key={b.id} className="flex items-center justify-between bg-[var(--surf2)] rounded-xl px-3 py-2">
                  <span className="text-sm">{b.title} <span className="text-[var(--dim)] text-xs">· {b.znuReward} ZNU</span></span>
                  {b.done ? <Badge color="bg-emerald-500/20 text-emerald-300">HECHO</Badge>
                    : <button onClick={() => completeBounty(b.id)} className="text-xs px-2 py-0.5 rounded bg-amber-500/20 text-amber-300">Cumplir</button>}
                </li>
              ))}
            </ul>
          )}
        </Card>

        <Card title="Wisdom Council (conflicto complejo)">
          <div className="flex flex-wrap items-end gap-2 mb-3">
            <input value={cTopic} onChange={(e) => setCTopic(e.target.value)} placeholder="Tema"
              className="px-2 py-1 bg-[var(--surf2)] border border-[var(--line)] rounded-lg text-sm w-32" />
            <input value={cMembers} onChange={(e) => setCMembers(e.target.value)} placeholder="miembros (coma)"
              className="px-2 py-1 bg-[var(--surf2)] border border-[var(--line)] rounded-lg text-sm w-36" />
            <Btn onClick={() => { if (cTopic.trim()) { formCouncil(cTopic.trim(), cMembers); setCTopic(''); setCMembers('') } }}>Convocar</Btn>
          </div>
          {gaia.councils.length === 0 ? (
            <EmptyState>Para conflictos que Kleros no resuelve mecánicamente: CNV + consejo de sabiduría.</EmptyState>
          ) : (
            <ul className="space-y-2">
              {gaia.councils.map((w) => (
                <li key={w.id} className="bg-[var(--surf2)] rounded-xl px-3 py-2 text-sm">
                  <span className="font-manrope">{w.topic}</span> · {w.members.join(', ')}
                </li>
              ))}
            </ul>
          )}
        </Card>
      </div>
    </div>
  )
}
