import { useState } from 'react'
import { BadgeCheck, Coins } from 'lucide-react'
import { useAppStore } from '@core/state/store'
import { priceLabel } from '@core/lib/educaas'
import { Card, Stat, Btn, Badge } from '@components/ui'

export function Educacion() {
  const {
    education, educaas, members,
    createEduCourse, enrollEdu, issueEduCertificate,
    createEduAssessment, gradeEduByMerit, verifyEduCertificate,
    setEducaasMode, subscribeEducaas, cancelEducaas,
  } = useAppStore()

  const [title, setTitle] = useState('Curso de Soberanía Operacional')
  const [member, setMember] = useState(members[0]?.name ?? 'Isaac Ko')
  const [rubric, setRubric] = useState('Teoría, Práctica, Externo')
  const [rep, setRep] = useState(80)
  const [exp, setExp] = useState(10)
  const [ext, setExt] = useState(70)
  const [grade, setGrade] = useState<{ meritWeight: number; weightedScore: number } | null>(null)

  const certs = education.certificates
  const activeSub = educaas.active[member]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Educación Postmonetaria (Didacta)</h1>
        <Badge color="bg-emerald-500/20 text-emerald-300">Cursos · Certificados · Mérito</Badge>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <Stat label="Cursos" value={`${education.courses.length}`} sub="catálogo" />
        <Stat label="Matriculados" value={`${education.enrollments.length}`} sub="miembros" />
        <Stat label="Certificados" value={`${certs.length}`} sub="firmados local" />
        <Stat label="Modo" value={educaas.mode === 'postmonetario' ? 'ZNU' : 'EUR'} sub="anfibio" />
      </div>

      {/* Crear curso + matricular */}
      <Card title="Catálogo y matrícula">
        <div className="flex flex-wrap gap-2 items-end">
          <div className="flex flex-col">
            <label className="text-xs text-white/60">Título del curso</label>
            <input className="bg-black/30 border border-white/10 rounded px-2 py-1 text-sm" value={title}
              onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div className="flex flex-col">
            <label className="text-xs text-white/60">Miembro</label>
            <select className="bg-black/30 border border-white/10 rounded px-2 py-1 text-sm" value={member}
              onChange={(e) => setMember(e.target.value)}>
              {members.map((m) => <option key={m.name} value={m.name}>{m.name}</option>)}
            </select>
          </div>
          <Btn onClick={() => {
            createEduCourse(title, 'avanzado')
            const c = education.courses[education.courses.length - 1]
            if (c) enrollEdu(c.id, member)
          }}>Crear + matricular</Btn>
        </div>
        <p className="text-xs text-white/50 mt-2">Cursos requieren evidencia para certificar (Ley III). Certificado se firma localmente (equiv. license-sdk ES256).</p>
      </Card>

      {/* Certificados */}
      <Card title="Certificados verificables">
        {certs.length === 0 ? (
          <p className="text-sm text-white/50">Aún no hay certificados. Matricula un curso y emite certificado.</p>
        ) : (
          <div className="space-y-2">
            {certs.map((c) => (
              <div key={c.id} className="flex items-center justify-between text-sm p-2 rounded border border-white/10">
                <span><BadgeCheck className="w-4 h-4 inline text-emerald-400" /> {c.courseId.slice(0, 8)} → {c.memberId}</span>
                <button className="text-xs text-sky-300 hover:underline" onClick={() => verifyEduCertificate(c.id)}>
                  {verifyEduCertificate(c.id) ? 'verificado ✓' : 'inválido'}
                </button>
              </div>
            ))}
          </div>
        )}
        {education.courses[0] && (
          <Btn className="mt-2" variant="ghost" onClick={() => issueEduCertificate(education.courses[0].id, member)}>
            Emitir certificado (curso 1)
          </Btn>
        )}
      </Card>

      {/* Assessment por mérito (Shivarthu) */}
      <Card title="Evaluación por mérito (no por nota)">
        <div className="flex flex-wrap gap-2 items-end">
          <input className="bg-black/30 border border-white/10 rounded px-2 py-1 text-sm w-48" value={rubric}
            onChange={(e) => setRubric(e.target.value)} placeholder="rúbrica separada por comas" />
          <input type="number" className="w-14 px-1 py-1 bg-black/30 border border-white/10 rounded text-sm" value={rep} onChange={(e) => setRep(Number(e.target.value))} />
          <input type="number" className="w-14 px-1 py-1 bg-black/30 border border-white/10 rounded text-sm" value={exp} onChange={(e) => setExp(Number(e.target.value))} />
          <input type="number" className="w-14 px-1 py-1 bg-black/30 border border-white/10 rounded text-sm" value={ext} onChange={(e) => setExt(Number(e.target.value))} />
          <Btn onClick={() => {
            if (education.courses[0]) {
              createEduAssessment(education.courses[0].id, rubric.split(',').map((r) => ({ criterion: r.trim(), meritWeight: 1 })))
            }
          }}>Crear rúbrica</Btn>
          <Btn variant="ghost" onClick={() => {
            const a = education.assessments[education.assessments.length - 1]
            if (a) setGrade(gradeEduByMerit(a.id, rep, exp, ext))
          }}>Evaluar por mérito</Btn>
        </div>
        {grade && <p className="text-xs text-white/60 mt-2">Peso de mérito: <b>{grade.meritWeight}</b> · Score ponderado: <b>{grade.weightedScore}</b></p>}
      </Card>

      {/* Educaas anfibio */}
      <Card title="Educaas — monetización anfibia (Didacta billing/subscriptions)">
        <div className="flex items-center gap-2 mb-2">
          <Coins className="w-4 h-4 text-amber-400" />
          <Badge color={educaas.mode === 'postmonetario' ? 'bg-emerald-500/20 text-emerald-300' : 'bg-sky-500/20 text-sky-300'}>
            {educaas.mode === 'postmonetario' ? 'Postmonetario (ZNU)' : 'Conectado (EUR/USDC)'}
          </Badge>
          <Btn variant="ghost" onClick={() => setEducaasMode(educaas.mode === 'postmonetario' ? 'conectado' : 'postmonetario')}>
            Cambiar modo
          </Btn>
        </div>
        <div className="space-y-2">
          {educaas.plans.map((p) => (
            <div key={p.id} className="flex items-center justify-between text-sm p-2 rounded border border-white/10">
              <span>{p.name} · {priceLabel(educaas, p.id)}</span>
              <button className="text-xs text-sky-300 hover:underline" onClick={() => subscribeEducaas(member, p.id)}>
                {activeSub === p.id ? 'activa ✓' : 'suscribir'}
              </button>
            </div>
          ))}
        </div>
        {activeSub && <Btn variant="ghost" className="mt-2" onClick={() => cancelEducaas(member)}>Cancelar suscripción</Btn>}
        <p className="text-xs text-white/50 mt-2">Modo postmonetario: ZNU/tiempo-crédito. Conectado: EUR/USDC vía priceParity (oráculo). Misma lógica, etiqueta distinta.</p>
      </Card>

      <p className="text-xs text-white/40">Asimilado de va360labs/didacta-io (LMS fair-code). Extirpado: Postgres/Redis/Stripe/S3/SMTP → estado local Zustand offline-first. Conservado: contrato module.json, firma local, mérito.</p>
    </div>
  )
}
