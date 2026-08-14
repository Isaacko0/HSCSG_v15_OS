// HSCSG v15 OS — Estado de Educación Postmonetaria (asimilado de Didacta Community)
// Módulo NUEVO real: courses + enrollments + certificates firmados + assessments por mérito.
// Extirpado: Postgres/pgvector, Redis, Stripe, S3, SMTP → estado local Zustand offline-first.
// Conservado: contrato module.json (tablePrefix, events), firma local ES256 (equiv. license-sdk).
export interface Course {
  id: string
  title: string
  moduleIds: string[]
  level: 'basico' | 'medio' | 'avanzado'
  /** Didacta: courses requieren evidencia para certificar (Ley III) */
  evidenceRequired: boolean
  createdAt: number
}

export interface Enrollment {
  courseId: string
  memberId: string
  progress: number // 0-1
  certifiedBy?: string // id de certificado
}

export interface Certificate {
  id: string
  courseId: string
  memberId: string
  /** firma local ES256-style (HMAC determinista offline; equiv. license-sdk JWT) */
  signedJwt: string
  issuedAt: number
}

export interface Assessment {
  id: string
  courseId: string
  /** rúbrica: cada criterion tiene peso de mérito 0-1 */
  rubric: { criterion: string; meritWeight: number }[]
  /** evaluación por mérito, no nota binaria (Shivarthu) */
  gradedByMerit: boolean
}

export interface EducationState {
  courses: Course[]
  enrollments: Enrollment[]
  certificates: Certificate[]
  assessments: Assessment[]
}

export function makeEducationState(): EducationState {
  return { courses: [], enrollments: [], certificates: [], assessments: [] }
}
