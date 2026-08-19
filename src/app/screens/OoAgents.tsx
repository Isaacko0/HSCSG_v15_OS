import { useState } from 'react'
import { Boxes, Eye, EyeOff } from 'lucide-react'
import { useAppStore } from '@core/state/store'
import { Card, Stat, Btn, Badge } from '@components/ui'
import { visibleMethods, meshAutonomy, detectBlindAgents } from '@core/lib/nooa'

export function OoAgents() {
  const nooa = useAppStore((s) => s.nooa)
  const spawnNooaAgent = useAppStore((s) => s.spawnNooaAgent)
  const addNooaMethod = useAppStore((s) => s.addNooaMethod)
  const hideNooa = useAppStore((s) => s.hideNooa)
  const extendNooaLib = useAppStore((s) => s.extendNooaLib)
  const [name, setName] = useState('')
  const [agentId, setAgentId] = useState('')
  const [method, setMethod] = useState('')

  const blind = detectBlindAgents(nooa)

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Boxes className="w-6 h-6 text-emerald-400" />
        <h1 className="text-xl font-semibold">OO-Agents (NOOA)</h1>
        <Badge color="text-emerald-400">NVIDIA asimilado · anfibio</Badge>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <Stat label="Agentes" value={String(nooa.agents.length)} />
        <Stat label="Métodos visibles" value={String(nooa.agents.reduce((s, a) => s + visibleMethods(a), 0))} />
        <Stat label="Autonomía malla" value={meshAutonomy(nooa).toFixed(2)} />
      </div>

      <Card title="Spawnear agente-orobjeto (estado tipado, Ley II MJ)">
        <div className="flex gap-2">
          <input className="flex-1 bg-black/30 rounded px-2 py-1 text-sm outline-none" placeholder="Nombre del agente" value={name} onChange={(e) => setName(e.target.value)} />
          <Btn onClick={() => { if (name) { spawnNooaAgent(name, { autonomy: 0.7 }); setName('') } }}>Spawnear</Btn>
        </div>
      </Card>

      <Card title="Agregar método (tool / generativo)">
        <div className="flex gap-2">
          <input className="flex-1 bg-black/30 rounded px-2 py-1 text-sm outline-none" placeholder="Agent ID" value={agentId} onChange={(e) => setAgentId(e.target.value)} />
          <input className="flex-1 bg-black/30 rounded px-2 py-1 text-sm outline-none" placeholder="Nombre método" value={method} onChange={(e) => setMethod(e.target.value)} />
          <Btn onClick={() => { if (agentId && method) { addNooaMethod(agentId, { name: method, kind: 'generative', returns: 'str' }); setMethod('') } }}>Agregar</Btn>
        </div>
      </Card>

      <Card title="Agentes (estado tipado + visibilidad)">
        {nooa.agents.length === 0 ? (
          <p className="text-sm text-[var(--dim)]">Sin agentes. Spawnea uno con estado soberano propio.</p>
        ) : (
          <div className="space-y-2">
            {nooa.agents.map((a) => (
              <div key={a.id} className="flex items-center justify-between border border-white/10 rounded px-3 py-2">
                <div>
                  <p className="text-sm font-medium">{a.name} <span className="text-[var(--dim)] text-xs">{a.id}</span></p>
                  <p className="text-xs text-[var(--dim)]">visibles: {visibleMethods(a)} · autonomía: {a.autonomy.toFixed(2)} · llm: {a.llmMode}</p>
                </div>
                <div className="flex gap-2">
                  <Badge color={a.contextVisible ? 'text-emerald-400' : 'text-zinc-500'}>{a.contextVisible ? <Eye className="w-3 h-3" /> : <EyeOff className="w-3 h-3" />} ctx</Badge>
                  <Btn onClick={() => extendNooaLib(a.id, 'lib_' + Date.now())}>Extender lib</Btn>
                  <Btn variant="ghost" onClick={() => hideNooa(a.id, method || a.name)}>Ocultar</Btn>
                </div>
              </div>
            ))}
          </div>
        )}
      </Card>

      {blind.length > 0 && (
        <Card title="γ-CARMIS: agentes ciegos (sin lucidez)">
          <p className="text-sm text-amber-400">Agentes sin contexto/eventos visibles: {blind.join(', ')}. Reconfigura para exponer contexto (Ley III).</p>
        </Card>
      )}

      <p className="text-xs text-[var(--dim)] mt-2">
        NOOA asimilado como capa agente-orobjeto isomorfa a agentMesh + Leyes MJ. Infra NVIDIA extirpada; lógica conservada.
        Ver <span className="text-emerald-400">docs/nooa_backup.md</span> + <span className="text-emerald-400">docs/nooa_integration.md</span>.
      </p>
    </div>
  )
}
