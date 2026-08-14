// HSCSG v15 OS — Lógica de Educación (Didacta Community asimilado)
import type { EducationState, Course, Enrollment, Certificate, Assessment } from '@core/state/education'
import { validateProposalScore } from '@core/lib/integral'

const uid = () => Math.random().toString(36).slice(2, 10) + Date.now().toString(36)
const now = () => Date.now()

// Firma local offline (equiv. license-sdk ES256): HMAC determinista FNV-1a.
// En producción real se usaría WebCrypto ES256; aquí offline-first sin dependencias.
function signCert(courseId: string, memberId: string, ts: number): string {
  const msg = `${courseId}|${memberId}|${ts}`
  let h = 2166136261
  for (let i = 0; i < msg.length; i++) { h ^= msg.charCodeAt(i); h = Math.imul(h, 16777619) }
  const sig = (h >>> 0).toString(16).padStart(8, '0')
  return `eyJlZC${ts.toString(36)}.${sig}.${memberId.slice(0, 4)}`
}

export function makeEducationState(): EducationState {
  return { courses: [], enrollments: [], certificates: [], assessments: [] }
}

// ===== Cursos (equiv. modules/courses) =====
export function createCourse(
  st: EducationState, title: string, level: Course['level'], evidenceRequired = true, moduleIds: string[] = [],
): EducationState {
  const c: Course = { id: uid(), title, moduleIds, level, evidenceRequired, createdAt: now() }
  return { ...st, courses: [...st.courses, c] }
}

export function enroll(st: EducationState, courseId: string, memberId: string): EducationState {
  if (st.enrollments.some((e) => e.courseId === courseId && e.memberId === memberId)) return st
  const e: Enrollment = { courseId, memberId, progress: 0 }
  return { ...st, enrollments: [...st.enrollments, e] }
}

export function recordProgress(st: EducationState, courseId: string, memberId: string, progress: number): EducationState {
  return {
    ...st,
    enrollments: st.enrollments.map((e) =>
      e.courseId === courseId && e.memberId === memberId
        ? { ...e, progress: Math.max(0, Math.min(1, progress)) }
        : e,
    ),
  }
}

// ===== Certificados firmados (equiv. license-sdk / certificates) =====
export function issueCertificate(st: EducationState, courseId: string, memberId: string): EducationState {
  const ts = now()
  const cert: Certificate = { id: uid(), courseId, memberId, signedJwt: signCert(courseId, memberId, ts), issuedAt: ts }
  const enrollments = st.enrollments.map((e) =>
    e.courseId === courseId && e.memberId === memberId ? { ...e, certifiedBy: cert.id, progress: 1 } : e,
  )
  return { ...st, certificates: [...st.certificates, cert], enrollments }
}

// ===== Assessments por mérito (equiv. assessments + Shivarthu) =====
export function createAssessment(
  st: EducationState, courseId: string, rubric: { criterion: string; meritWeight: number }[],
): EducationState {
  const a: Assessment = { id: uid(), courseId, rubric, gradedByMerit: true }
  return { ...st, assessments: [...st.assessments, a] }
}

/**
 * Evalúa por mérito: el peso de la evaluación NO es la nota, sino el mérito del evaluador
 * (rep × exp × ext normalizados) ponderado por el peso de la rúbrica.
 */
export function gradeByMerit(
  st: EducationState, assessmentId: string,
  reputation: number, experience: number, externality: number,
): { meritWeight: number; weightedScore: number } {
  const a = st.assessments.find((x) => x.id === assessmentId)
  if (!a) return { meritWeight: 0, weightedScore: 0 }
  const { weight } = validateProposalScore(reputation, experience, externality)
  const rubricW = a.rubric.reduce((s, r) => s + r.meritWeight, 0) / Math.max(1, a.rubric.length)
  return { meritWeight: weight, weightedScore: Number((weight * rubricW).toFixed(3)) }
}

export function verifyCertificate(st: EducationState, certId: string): boolean {
  return st.certificates.some((c) => c.id === certId && c.signedJwt.startsWith('eyJlZC'))
}
