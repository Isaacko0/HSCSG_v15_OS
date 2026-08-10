import { Card, Stat, Badge, EmptyState } from '@components/ui'
import { useAppStore } from '@core/state/store'
import { BRANDNA_SECTIONS, ICP_AWARENESS } from '@core/lib/agencia'
import { displayValue } from '@core/lib/valueDual'
import type { BrandDNAKey } from '@core/lib/agencia'

export function Agencia() {
  const {
    agencia, nodeMode, priceParity, setBrandDNA, setNodeMode, setPriceParity, setPlanMeta,
  } = useAppStore()

  const fmt = (amt: number) => displayValue(amt, nodeMode, priceParity)
  const totalZNU = agencia.offers.reduce((s, o) => s + o.znuPrice, 0)

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="font-jost text-2xl md:text-3xl font-semibold">Agencia del Nodo (DeseOS)</h1>
          <p className="text-[var(--dim)] mt-1">Método de agencia soberano + arquitectura <b className="text-fuchsia-400">anfibia</b> ZNU ↔ USD.</p>
        </div>
        <div className="flex items-center gap-2 bg-[var(--surf2)] rounded-xl px-3 py-2">
          <span className="text-xs text-[var(--dim)]">Modo</span>
          <button
            onClick={() => setNodeMode(nodeMode === 'conectado' ? 'postmonetario' : 'conectado')}
            className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors ${nodeMode === 'conectado' ? 'bg-fuchsia-500/30 text-fuchsia-200' : 'bg-emerald-500/20 text-emerald-300'}`}
          >
            {nodeMode === 'conectado' ? 'Conectado (USD/ReFi)' : 'Postmonetario (ZNU)'}
          </button>
        </div>
      </div>

      {nodeMode === 'conectado' && (
        <Card title="Oráculo de Paridad (Nivel 3 ReFi)">
          <div className="flex items-end gap-2">
            <label className="text-xs text-[var(--dim)]">1 ZNU =</label>
            <input
              type="number" step="0.001" value={priceParity}
              onChange={(e) => setPriceParity(Number(e.target.value))}
              className="px-2 py-1 bg-[var(--surf2)] border border-[var(--line)] rounded-lg text-sm w-24"
            />
            <span className="text-xs text-[var(--dim)]">USDC (referencia ReFi)</span>
          </div>
          <p className="text-xs text-[var(--dim)] mt-2">El nodo expone bienes en USD externo sin perder soberanía. MJ Gate bloquea ventas ciegas.</p>
        </Card>
      )}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Stat label="BranDNA" value={`${BRANDNA_SECTIONS.filter((s) => agencia.brand[s.key as BrandDNAKey]).length}/12`} sub="secciones" color="text-fuchsia-400" />
        <Stat label="Ofertas (5M)" value={`${agencia.offers.length}`} sub="escalera" />
        <Stat label="Valor catálogo" value={fmt(totalZNU)} sub={nodeMode === 'postmonetario' ? 'en ZNU' : 'en USD'} color="text-emerald-400" />
        <Stat label="Plan meta" value={fmt(agencia.plan.meta)} sub="Strategic Brain" />
      </div>

      <Card title="BranDNA — Identidad del Nodo (constitución)">
        <div className="grid md:grid-cols-2 gap-3">
          {BRANDNA_SECTIONS.map((s) => (
            <div key={s.key} className="bg-[var(--surf2)] rounded-xl px-3 py-2">
              <label className="text-xs font-medium text-[var(--mut)]">{s.label}</label>
              <input
                value={agencia.brand[s.key as BrandDNAKey]}
                onChange={(e) => setBrandDNA(s.key as BrandDNAKey, e.target.value)}
                placeholder={`Definir ${s.label.toLowerCase()}...`}
                className="w-full mt-1 px-2 py-1 bg-[var(--surf)] border border-[var(--line)] rounded-lg text-sm"
              />
            </div>
          ))}
        </div>
      </Card>

      <Card title="Escalera 5M — Catálogo de Bienes (anfibio)">
        <div className="space-y-2">
          {agencia.offers.map((o) => (
            <div key={o.id} className="flex items-center justify-between bg-[var(--surf2)] rounded-xl px-3 py-2">
              <div>
                <p className="font-manrope text-sm font-medium">{o.name}</p>
                <p className="text-[var(--dim)] text-xs">{o.desc}</p>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Badge color="bg-fuchsia-500/20 text-fuchsia-300">{o.tier}</Badge>
                <span className="text-emerald-400 font-medium">{fmt(o.znuPrice)}</span>
                {nodeMode === 'conectado' && (
                  <span className="text-[var(--dim)] text-xs">(${o.usdPrice})</span>
                )}
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-[var(--dim)] mt-2">En postmonetario todo es ZNU (acceso CaaS por AUT×CDS). En conectado, cada bien muestra su par USD vía oráculo.</p>
      </Card>

      <div className="grid md:grid-cols-2 gap-4">
        <Card title="Strategic Brain (plan inverso)">
          <div className="flex items-end gap-2 mb-3">
            <label className="text-xs text-[var(--dim)]">Meta (ZNU)</label>
            <input
              type="number" value={agencia.plan.meta}
              onChange={(e) => setPlanMeta(Number(e.target.value))}
              className="px-2 py-1 bg-[var(--surf2)] border border-[var(--line)] rounded-lg text-sm w-32"
            />
          </div>
          <ul className="space-y-1 text-sm text-[var(--mut)]">
            <li>Leads necesarios: <b className="text-[var(--surf0)]">{agencia.plan.leads}</b></li>
            <li>Alcance estimado: <b className="text-[var(--surf0)]">{agencia.plan.alcance.toLocaleString('es')}</b></li>
            <li>Piezas de contenido: <b className="text-[var(--surf0)]">{agencia.plan.piezas}</b></li>
            <li>Inversión: <b className="text-[var(--surf0)]">{fmt(agencia.plan.inversion)}</b></li>
          </ul>
        </Card>

        <Card title="ICP — Niveles de Consciencia">
          {agencia.icps.length === 0 ? (
            <EmptyState>Aún no hay perfiles ICP. Los 5 niveles alimentan el CDS (quién decide qué).</EmptyState>
          ) : (
            <ul className="space-y-1 text-sm">
              {agencia.icps.map((icp) => (
                <li key={icp.id} className="bg-[var(--surf2)] rounded-xl px-3 py-2">
                  <span className="font-manrope">{icp.name}</span> · Nivel {icp.awareness} · {icp.jtbd}
                </li>
              ))}
            </ul>
          )}
          <div className="mt-2 flex flex-wrap gap-1">
            {ICP_AWARENESS.map((a) => (
              <Badge key={a.level} color="border-[var(--line)] text-[var(--mut)]">N{a.level}: {a.label}</Badge>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}
