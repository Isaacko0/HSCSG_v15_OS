import { useState } from 'react'
import { ShieldCheck, ShieldX, Plus, Trash2, FlaskConical, History } from 'lucide-react'
import { useAppStore } from '@core/state/store'
import { Card, Badge, Btn, Stat } from '@components/ui'
import { governAction, type PolicyContext } from '@core/lib/boundaries'

export function Boundaries() {
  const boundaries = useAppStore((s) => s.boundaries)
  const setBoundaryPolicy = useAppStore((s) => s.setBoundaryPolicy)
  const addBoundaryRule = useAppStore((s) => s.addBoundaryRule)
  const removeBoundaryRule = useAppStore((s) => s.removeBoundaryRule)
  const clearBoundaryAudit = useAppStore((s) => s.clearBoundaryAudit)
  const logBoundaryAudit = useAppStore((s) => s.logBoundaryAudit)

  const [newDeny, setNewDeny] = useState('')
  const [newAllow, setNewAllow] = useState('')
  const [mode, setMode] = useState<'enforce' | 'dry-run'>(boundaries.policy.mode)
  const [testTool, setTestTool] = useState('computer_click')
  const [testIntent, setTestIntent] = useState('activate')
  const [testHost, setTestHost] = useState('evil-bank.example')
  const [testResult, setTestResult] = useState<string>('')
  const [testColor, setTestColor] = useState<'emerald' | 'rose'>('emerald')

  const runTest = () => {
    const ctx: PolicyContext = {
      tool: testTool,
      intent: testIntent,
      bot: 'local',
      actor: 'admin',
      page: { url: `https://${testHost}/x`, host: testHost },
    }
    try {
      governAction(
        boundaries.policy,
        ctx,
        (row) => logBoundaryAudit(row),
        () => {},
      )
      setTestResult('ACCIÓN PERMITIDA (forward)')
      setTestColor('emerald')
    } catch (e) {
      setTestResult(`RECHAZADA: ${e instanceof Error ? e.message : 'bloqueada'}`)
      setTestColor('rose')
    }
  }

  const allowedCount = boundaries.audit.filter((a) => a.decision === 'allowed').length
  const refusedCount = boundaries.audit.filter((a) => a.decision === 'refused').length

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <ShieldCheck className="w-6 h-6 text-amber-400" />
        <h1 className="text-xl font-semibold">Boundaries</h1>
        <Badge color="bg-amber-500/20 text-amber-300">policy gateway anfibio · OpenBot</Badge>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <Stat label="Modo" value={boundaries.policy.mode} sub="fail-closed" />
        <Stat label="Reglas deny" value={`${boundaries.policy.deny.length}`} sub="evaluadas primero" />
        <Stat label="Permitidas (audit)" value={`${allowedCount}`} sub="en sesión" />
        <Stat label="Rechazadas (audit)" value={`${refusedCount}`} sub="en sesión" />
      </div>

      <Card title="Política — modo">
        <div className="flex gap-2">
          <Btn onClick={() => { setMode('enforce'); setBoundaryPolicy({ mode: 'enforce' }) }} className={mode === 'enforce' ? '' : 'opacity-60'}>
            <ShieldX className="w-4 h-4 mr-1" /> enforce (bloquea)
          </Btn>
          <Btn onClick={() => { setMode('dry-run'); setBoundaryPolicy({ mode: 'dry-run' }) }} className={mode === 'dry-run' ? '' : 'opacity-60'}>
            <FlaskConical className="w-4 h-4 mr-1" /> dry-run (registra, deja pasar)
          </Btn>
        </div>
        <p className="text-xs text-white/50 mt-2">
          Inspirado en OpenBot: <b>deny &gt; allow</b>, política ausente = denegar, regla rota = denegar (fail-closed).
          Default: <code>allow: ['intent == "read"']</code> (solo lectura permitida).
        </p>
      </Card>

      <div className="grid md:grid-cols-2 gap-4">
        <Card title="Deny rules (rechazo)">
          <div className="flex gap-2 mb-2">
            <input className="flex-1 bg-black/30 rounded px-2 py-1 text-sm outline-none" placeholder='ej: page.host contains "bank"' value={newDeny} onChange={(e) => setNewDeny(e.target.value)} />
            <Btn onClick={() => { addBoundaryRule('deny', newDeny); setNewDeny('') }}><Plus className="w-4 h-4" /></Btn>
          </div>
          <ul className="space-y-1 text-sm">
            {boundaries.policy.deny.length === 0 && <li className="text-white/40">ninguna</li>}
            {boundaries.policy.deny.map((r, i) => (
              <li key={i} className="flex items-center justify-between bg-rose-500/10 px-2 py-1 rounded">
                <code className="truncate">{r}</code>
                <button onClick={() => removeBoundaryRule('deny', i)} className="text-rose-300 hover:text-rose-100"><Trash2 className="w-4 h-4" /></button>
              </li>
            ))}
          </ul>
        </Card>

        <Card title="Allow rules (permiso)">
          <div className="flex gap-2 mb-2">
            <input className="flex-1 bg-black/30 rounded px-2 py-1 text-sm outline-none" placeholder='ej: intent == "read"' value={newAllow} onChange={(e) => setNewAllow(e.target.value)} />
            <Btn onClick={() => { addBoundaryRule('allow', newAllow); setNewAllow('') }}><Plus className="w-4 h-4" /></Btn>
          </div>
          <ul className="space-y-1 text-sm">
            {boundaries.policy.allow.length === 0 && <li className="text-white/40">ninguna (todo denegado)</li>}
            {boundaries.policy.allow.map((r, i) => (
              <li key={i} className="flex items-center justify-between bg-emerald-500/10 px-2 py-1 rounded">
                <code className="truncate">{r}</code>
                <button onClick={() => removeBoundaryRule('allow', i)} className="text-emerald-300 hover:text-emerald-100"><Trash2 className="w-4 h-4" /></button>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <Card title="Probar acción contra la política (govern)">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-2">
          <input className="bg-black/30 rounded px-2 py-1 text-sm outline-none" placeholder="tool" value={testTool} onChange={(e) => setTestTool(e.target.value)} />
          <input className="bg-black/30 rounded px-2 py-1 text-sm outline-none" placeholder="intent" value={testIntent} onChange={(e) => setTestIntent(e.target.value)} />
          <input className="bg-black/30 rounded px-2 py-1 text-sm outline-none" placeholder="host" value={testHost} onChange={(e) => setTestHost(e.target.value)} />
          <Btn onClick={runTest}><FlaskConical className="w-4 h-4 mr-1" /> gobernar</Btn>
        </div>
        {testResult && (
          <p className={`text-sm font-medium ${testColor === 'emerald' ? 'text-emerald-300' : 'text-rose-300'}`}>{testResult}</p>
        )}
        <p className="text-xs text-white/40 mt-1">Campos: tool / intent / page.host / element.name / key / file.extension / repeat.count. Helpers: contains(), matches().</p>
      </Card>

      <Card title="Audit (escrito ANTES de actuar)">
        <div className="flex items-center justify-between mb-2">
          <span className="flex items-center gap-2 text-sm text-white/60"><History className="w-4 h-4" /> {boundaries.audit.length} filas</span>
          <Btn onClick={clearBoundaryAudit}>Limpiar</Btn>
        </div>
        <div className="space-y-1 max-h-64 overflow-y-auto text-xs">
          {boundaries.audit.length === 0 && <p className="text-white/40">sin acciones gobernadas aún</p>}
          {boundaries.audit.map((a) => (
            <div key={a.id} className="flex items-center gap-2 px-2 py-1 rounded bg-white/5">
              <Badge color={a.decision === 'allowed' ? 'bg-emerald-500/20 text-emerald-300' : a.decision === 'refused' ? 'bg-rose-500/20 text-rose-300' : 'bg-amber-500/20 text-amber-300'}>{a.decision}</Badge>
              <span className="text-white/70">{a.tool}</span>
              <span className="text-white/40">@{a.host}</span>
              <span className="text-white/40 ml-auto">{a.source}{a.matched ? ` · ${a.matched}` : ''}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
