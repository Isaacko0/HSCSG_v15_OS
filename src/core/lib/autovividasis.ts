// Autovividasis — Proceso auto-referencial
// Fuente: HSCSG Autovividasis.md (Vault Obsidian del usuario)
// Última actualización: 2026-08-22

export interface AutovividasisCheck {
  reportado: number
  vivido: number
  brecha: number
  esVivido: boolean
}

export interface AutovividasisResult {
  checks: AutovividasisCheck[]
  promedioVivido: number
  promedioReportado: number
  brechaTotal: number
  estado: 'vivido' | 'mixto' | 'calculado'
  recomendaciones: string[]
}

export function checkAutovividasis(params: {
  compromisosPresupuesto: number
  compromisosReales: number
  eventosReportados: number
  eventosVerificables: number
  metricasReportadas: number
  metricasConSensor: number
}): AutovividasisResult {
  const checks: AutovividasisCheck[] = [
    {
      reportado: params.compromisosPresupuesto,
      vivido: params.compromisosReales,
      brecha: Math.max(0, params.compromisosPresupuesto - params.compromisosReales),
      esVivido: params.compromisosReales >= params.compromisosPresupuesto * 0.8
    },
    {
      reportado: params.eventosReportados,
      vivido: params.eventosVerificables,
      brecha: Math.max(0, params.eventosReportados - params.eventosVerificables),
      esVivido: params.eventosVerificables >= params.eventosReportados * 0.8
    },
    {
      reportado: params.metricasReportadas,
      vivido: params.metricasConSensor,
      brecha: Math.max(0, params.metricasReportadas - params.metricasConSensor),
      esVivido: params.metricasConSensor >= params.metricasReportadas * 0.8
    }
  ]

  const promedioVivido = checks.reduce((sum, c) => sum + c.vivido, 0) / checks.length
  const promedioReportado = checks.reduce((sum, c) => sum + c.reportado, 0) / checks.length
  const brechaTotal = promedioReportado - promedioVivido
  const ratio = promedioVivido / Math.max(promedioReportado, 0.001)

  let estado: AutovividasisResult['estado']
  if (ratio >= 0.9) estado = 'vivido'
  else if (ratio >= 0.6) estado = 'mixto'
  else estado = 'calculado'

  const recomendaciones: string[] = []
  if (!checks[0].esVivido) recomendaciones.push('Compromisos sin correlato en práctica vivida')
  if (!checks[1].esVivido) recomendaciones.push('Eventos reportados sin verificación en territorio')
  if (!checks[2].esVivido) recomendaciones.push('Métricas reportadas sin sensor real asociado')
  if (estado === 'calculado') recomendaciones.push('El avance está siendo calculado, no vivido — priorizar base material')

  return { checks, promedioVivido, promedioReportado, brechaTotal, estado, recomendaciones }
}

export function isAutovividasis(result: AutovividasisResult): boolean {
  return result.estado === 'vivido'
}

export function getAutovividasisRatio(result: AutovividasisResult): number {
  return result.promedioVivido / Math.max(result.promedioReportado, 0.001)
}
