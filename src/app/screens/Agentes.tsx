import { useState } from 'react'
import { Bot, Cpu, RefreshCw, Users } from 'lucide-react'
import { useAppStore } from '@core/state/store'
import { Card, Stat, Btn, Badge } from '@components/ui'

export function Agentes() {
  const mesh = useAppStore((s) => s.agentMesh)
  const spawnAgent = useAppStore((s) => s.spawnAgent)
  const shareAgentCompute = useAppStore((s) => s.shareAgentCompute)
  const requestAgentCompute = useAppStore((s) => s.requestAgentCompute)
  const resurrectAgent = useAppStore((s) => s.resurrectAgent)
  const [name, setName] = useState('')
  const [pubkey, setPubkey] = useState('npub_agent_')
  const [member, setMember] = useState('vecino1')
  const [resource, setResource] = useState('GPU idle')
  const [reqResult, setReqResult] = useState<string | null>(null)

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Bot className="w-7 h-7 text-emerald-400" />
        <div>
          <h1 className="text-xl font-semibold text-white">Malla de Agentes · Buzz Mesh</h1>
          <p className="text-sm text-slate-400">Agentes como miembros (block/buzz) — compute comunitario gated por membresía, cuerpo desechable.</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Stat label="Comunidad" value={mesh.community} />
        <Stat label="Agentes" value={String(mesh.agents.length)} />
        <Stat label="Compute compartido" value={String(mesh.computePool.length)} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <h2 className="text-sm font-semibold text-white mb-3 flex items-center gap-2"><Users className="w-4 h-4" /> Spawn agente</h2>
          <div className="flex gap-2 flex-wrap">
            <input className="bg-slate-800 text-white rounded px-2 py-1 text-sm" placeholder="pubkey" value={pubkey} onChange={(e) => setPubkey(e.target.value)} />
            <input className="bg-slate-800 text-white rounded px-2 py-1 text-sm flex-1" placeholder="nombre" value={name} onChange={(e) => setName(e.target.value)} />
            <Btn onClick={() => { if (name) { spawnAgent(pubkey, name); setName('') } }}>Crear</Btn>
          </div>
        </Card>
        <Card>
          <h2 className="text-sm font-semibold text-white mb-3 flex items-center gap-2"><Cpu className="w-4 h-4" /> Buzz Mesh — compartir compute</h2>
          <div className="flex gap-2 flex-wrap">
            <input className="bg-slate-800 text-white rounded px-2 py-1 text-sm" placeholder="miembro" value={member} onChange={(e) => setMember(e.target.value)} />
            <input className="bg-slate-800 text-white rounded px-2 py-1 text-sm flex-1" placeholder="recurso" value={resource} onChange={(e) => setResource(e.target.value)} />
            <Btn onClick={() => shareAgentCompute(member, resource)}>Compartir</Btn>
          </div>
        </Card>
      </div>
      <Card>
        <h2 className="text-sm font-semibold text-white mb-3">Agentes del colectivo</h2>
        <div className="space-y-2">
          {mesh.agents.map((a) => (
            <div key={a.id} className="text-sm bg-slate-900 rounded p-2 flex items-center gap-2 justify-between">
              <div className="flex items-center gap-2">
                <Badge>{a.body}</Badge>
                <span className="text-white">{a.name}</span>
                <span className="text-slate-500">{a.pubkey.slice(0, 12)}…</span>
              </div>
              <div className="flex gap-2">
                <Btn onClick={() => { const r = requestAgentCompute(a.id); setReqResult(r.ok ? `Asignado: ${r.resource}` : 'Sin compute disponible') }}>
                  <Cpu className="w-4 h-4" /> Usar compute
                </Btn>
                <Btn onClick={() => resurrectAgent(a.id)}><RefreshCw className="w-4 h-4" /> Resurrect</Btn>
              </div>
            </div>
          ))}
          {mesh.agents.length === 0 && <p className="text-xs text-slate-500">Sin agentes. Crea uno arriba.</p>}
        </div>
        {reqResult && <p className="text-xs text-emerald-400 mt-2">{reqResult}</p>}
      </Card>
    </div>
  )
}
