import { describe, it, expect } from 'vitest'
import {
  makeEducationState, createCourse, enroll, recordProgress, issueCertificate, createAssessment, gradeByMerit, verifyCertificate,
} from '@core/lib/education'
import { makeEducaasState, setEducaasMode, subscribe, cancelSubscription } from '@core/lib/educaas'

describe('education (Didacta asimilado)', () => {
  it('crea curso + matricula + progresa + certifica', () => {
    let st = makeEducationState()
    st = createCourse(st, 'Soberanía', 'avanzado', true)
    const cid = st.courses[0].id
    st = enroll(st, cid, 'Isaac')
    expect(st.enrollments.length).toBe(1)
    st = recordProgress(st, cid, 'Isaac', 0.5)
    expect(st.enrollments[0].progress).toBe(0.5)
    st = issueCertificate(st, cid, 'Isaac')
    expect(st.certificates.length).toBe(1)
    expect(st.enrollments[0].progress).toBe(1)
    const cert = st.certificates[0]
    expect(verifyCertificate(st, cert.id)).toBe(true)
    expect(verifyCertificate(st, 'nope')).toBe(false)
  })

  it('gradeByMerit usa validateProposalScore (rep×exp×ext)', () => {
    let st = makeEducationState()
    st = createCourse(st, 'X', 'basico')
    const cid = st.courses[0].id
    st = createAssessment(st, cid, [
      { criterion: 'Teoría', meritWeight: 1 },
      { criterion: 'Práctica', meritWeight: 1 },
    ])
    const aid = st.assessments[0].id
    const r = gradeByMerit(st, aid, 100, 50, 100)
    expect(r.meritWeight).toBeCloseTo(1, 3) // todos max
    expect(r.weightedScore).toBeCloseTo(1, 3)
  })
})

describe('educaas (anfibio)', () => {
  it('modo postmonetario usa ZNU; conectado convierte a EUR vía parity', () => {
    let st = makeEducaasState()
    expect(st.mode).toBe('postmonetario')
    expect(st.plans[0].currency).toBe('ZNU')
    const znuPrice = st.plans[0].priceNative
    st = setEducaasMode(st, 'conectado', 0.01)
    expect(st.mode).toBe('conectado')
    expect(st.plans[0].currency).toBe('EUR')
    expect(st.plans[0].priceNative).toBeCloseTo(znuPrice * 0.01, 2)
  })

  it('suscripción se activa y cancela', () => {
    let st = makeEducaasState()
    st = subscribe(st, 'Isaac', st.plans[0].id)
    expect(st.active['Isaac']).toBe(st.plans[0].id)
    st = cancelSubscription(st, 'Isaac')
    expect(st.active['Isaac']).toBeUndefined()
  })
})
