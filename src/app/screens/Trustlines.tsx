import { useState } from 'react'
import {
  Link2, ArrowRightLeft, ShieldCheck, PlusCircle, Send,
} from 'lucide-react'
import { useAppStore } from '@core/state/store'
import { creditUsed } from '@core/lib/trustlines'
import { Card, Stat, Btn, Badge, EmptyState } from '@components/ui'

export function Trustlines() {
  const { trust, openTrustline, increaseTrustDebt, doDebitTransfer } = useAppStore()
  const [from] = useState('Isaac Ko')
  const [to] = useState('Tobías')
  const [value, setValue] = useState(120)
  const path = ['Isaac Ko', 'Luz', 'Tobías']

  const totalCredit = trust.trustlines.reduce((a, t) => a + t.creditGiven + t.creditReceived, 0)
  const totalDebt = Object.keys(trust.debts).reduce((acc, a) => {
    const m = trust.debts[a]
    return acc + Object.values(m).filter((d) => d > 0).reduce((x, y) => x + y, 0)
  }, 0)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="font-jost text-2xl md:text-3xl font-semibold flex items-center gap-2">
            <Link2 className="w-7 h-7 text-teal-400" /> Trustlines · Crédito mutuo ZNU
          </h1>
          <p className="text-[var(--dim)] mt-1">Asimilado de trustlines-protocol/contracts. Tu moneda nace de la confianza mutua (Web of Trust), no de un emisor central. Isomorfo a MJ.</p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Stat label="Trustlines" value={`${trust.trustlines.length}`} color="text-teal-400" />
        <Stat label="Crédito total" value={`${totalCredit} ZNU`} color="text-emerald-400" />
        <Stat label="Deuda viva" value={`${totalDebt} ZNU`} color="text-amber-400" />
        <Stat label="Transferencias" value={`${trust.transfers.length}`} color="text-sky-400" />
      </div>

      <Card title="Red de confianza (trustlines)">
        {trust.trustlines.length === 0 ? <EmptyState>Sin trustlines. Abre una línea de crédito mutua con otro miembro.</EmptyState> : trust.trustlines.map((t) => {
          const used = creditUsed(trust.debts, t.a, t.b)
          return (
            <div key={t.id} className="flex items-center justify-between p-2 rounded-lg border border-[var(--line)] text-sm mb-1">
              <span className="font-manrope">{t.a} ↔ {t.b}</span>
              <div className="flex items-center gap-2">
                <Badge color="text-teal-400">da {t.creditGiven}</Badge>
                <Badge color="text-[var(--mut)]">recibe {t.creditReceived}</Badge>
                <span className="text-xs text-[var(--dim)]">usado {used}</span>
              </div>
            </div>
          )
        })}
      </Card>

      <Card title="Deuda bilateral (simétrica, como DebtTracking.sol)">
        <div className="space-y-1 text-sm">
          {Object.keys(trust.debts).map((a) => Object.entries(trust.debts[a]).filter(([, d]) => d !== 0).map(([b, d]) => (
            <div key={`${a}-${b}`} className="flex justify-between">
              <span>{a} → {b}</span>
              <span className={d > 0 ? 'text-amber-400' : 'text-emerald-400'}>{d > 0 ? `debe ${d}` : `a favor ${-d}`}</span>
            </div>
          ))).flat()}
        </div>
      </Card>

      <div className="grid md:grid-cols-2 gap-4">
        <Card title="Transferir por ruta (debitTransfer)">
          <p className="text-xs text-[var(--dim)] mb-2">El acreedor inicia; el pago se enruta por la red de trustlines. Isaac→Luz→Tobías (enrutable).</p>
          <div className="flex items-center gap-2 mb-2">
            <input className="inp w-24" type="number" value={value} onChange={(e) => setValue(Number(e.target.value))} />
            <span className="text-xs text-[var(--dim)]">ZNU por ruta {path.join(' → ')}</span>
          </div>
          <Btn onClick={() => doDebitTransfer(path, value, 0)}><Send className="w-4 h-4" /> Pagar por ruta</Btn>
          {trust.transfers.length > 0 && (
            <div className="mt-2 text-xs text-[var(--dim)]">
              Último: {trust.transfers[trust.transfers.length - 1].path.join('→')} · {trust.transfers[trust.transfers.length - 1].value} ZNU
            </div>
          )}
        </Card>

        <Card title="Abrir trustline / aumentar deuda">
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <input className="inp flex-1" placeholder="de (a)" defaultValue="Isaac Ko" id="tl-a" />
              <input className="inp flex-1" placeholder="a (b)" defaultValue="Nico" id="tl-b" />
            </div>
            <div className="flex gap-2">
              <input className="inp w-24" type="number" placeholder="da" defaultValue={300} id="tl-give" />
              <input className="inp w-24" type="number" placeholder="recibe" defaultValue={200} id="tl-rec" />
              <Btn variant="ghost" onClick={() => {
                const a = (document.getElementById('tl-a') as HTMLInputElement)?.value.trim()
                const b = (document.getElementById('tl-b') as HTMLInputElement)?.value.trim()
                const g = Number((document.getElementById('tl-give') as HTMLInputElement)?.value || 0)
                const r = Number((document.getElementById('tl-rec') as HTMLInputElement)?.value || 0)
                if (a && b && a !== b) openTrustline(a, b, g, r, 0)
              }}><PlusCircle className="w-4 h-4" /> Abrir</Btn>
            </div>
            <Btn variant="ghost" onClick={() => increaseTrustDebt(from, to, value)}><ArrowRightLeft className="w-4 h-4" /> Aumentar deuda {from}→{to}</Btn>
          </div>
        </Card>
      </div>

      <div className="flex items-center gap-2">
        <ShieldCheck className="w-4 h-4 text-emerald-400" />
        <span className="text-xs text-[var(--dim)]">Sin emisor central · deuda bilateral simétrica · fee regenerativo (no usura) — isomorfo a Ley I/II/III.</span>
      </div>
    </div>
  )
}
