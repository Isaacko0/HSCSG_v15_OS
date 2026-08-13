import { ShieldCheck, ShieldAlert, Lock } from 'lucide-react'
import { useAppStore } from '@core/state/store'
import { nodePerimeter } from '@core/lib/capacidades'
import { Card, Stat, Btn, Badge } from '@components/ui'

export function Capacidades() {
  const { capacidades, nodeMode, toggleCapability, setNodeMode } = useAppStore()
  const perim = nodePerimeter(capacidades)

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        {perim.closed ? <ShieldCheck className="w-7 h-7 text-emerald-400" /> : <ShieldAlert className="w-7 h-7 text-amber-400" />}
        <h1 className="font-jost text-2xl font-semibold">Capabilities (jardín cerrado)</h1>
      </div>
      <p className="text-[var(--dim)]">Principio CompAI CRM: <strong className="text-[var(--ink)]">capabilities optional by default</strong>. El nodo corre offline (ZNU/CaaS). Fuentes externas se habilitan explícitamente y con data boundaries. Sin capability activa = jardín cerrado (sandbox deny-all egress).</p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Stat label="Modo nodo" value={nodeMode} color={nodeMode === 'postmonetario' ? 'text-emerald-400' : 'text-amber-400'} />
        <Stat label="Capabilities externas" value={String(perim.externalActive)} color="text-sky-400" />
        <Stat label="Perímetro" value={perim.closed ? 'CERRADO' : 'ABIERTO'} color={perim.closed ? 'text-emerald-400' : 'text-rose-400'} />
        <Stat label="Offline-core" value="ON" color="text-emerald-400" />
      </div>

      <Card title="Modo del nodo (anfibio)">
        <div className="flex gap-2 flex-wrap">
          <Btn variant={nodeMode === 'postmonetario' ? 'primary' : 'ghost'} onClick={() => setNodeMode('postmonetario')}>Postmonetario (ZNU/CaaS)</Btn>
          <Btn variant={nodeMode === 'conectado' ? 'primary' : 'ghost'} onClick={() => setNodeMode('conectado')}>Conectado (USD/ReFi)</Btn>
        </div>
        <p className="text-xs text-[var(--dim)] mt-2">En modo postmonetario no se pueden activar capabilities que requieren 'conectado'. El render decide la etiqueta; la lógica es agnóstica a la unidad.</p>
      </Card>

      <Card title="Capabilities">
        <div className="space-y-2">
          {capacidades.caps.map((c) => (
            <div key={c.key} className="flex items-center justify-between p-2 rounded border border-[var(--line)]">
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-manrope">{c.label}</span>
                  {c.enabled
                    ? <Badge color="bg-emerald-500/20 text-emerald-300">ON</Badge>
                    : <Badge color="bg-zinc-500/20 text-zinc-300">OFF</Badge>}
                  {c.key === 'offline-core' && <Badge color="bg-chispa/20 text-chispa">inmutable</Badge>}
                  {!c.enabled && c.requiredMode === 'conectado' && nodeMode === 'postmonetario' && <Badge color="bg-rose-500/20 text-rose-300">requiere conectado</Badge>}
                </div>
                <div className="text-xs text-[var(--dim)] mt-0.5 flex items-center gap-1">
                  <Lock className="w-3 h-3" /> egress: {c.egressRule}
                </div>
              </div>
              {c.key !== 'offline-core' && (
                <Btn
                  variant={c.enabled ? 'ghost' : 'primary'}
                  disabled={!c.enabled && c.requiredMode === 'conectado' && nodeMode === 'postmonetario'}
                  onClick={() => toggleCapability(c.key)}
                >
                  {c.enabled ? 'Desactivar' : 'Activar'}
                </Btn>
              )}
            </div>
          ))}
        </div>
        {perim.closed && (
          <p className="text-xs text-emerald-300 mt-3">✓ Jardín cerrado: el nodo no envía nada externo. Sovereignty por defecto.</p>
        )}
        {!perim.closed && (
          <div className="mt-3">
            <p className="text-xs text-amber-300 mb-1">⚠ Superficie externa activa:</p>
            <ul className="list-disc list-inside text-xs text-[var(--dim)]">
              {perim.activeCaps.map((c) => <li key={c}>{c}</li>)}
            </ul>
          </div>
        )}
      </Card>
    </div>
  )
}
