// Plan 90 Días — 3 Ciclos Lunares
// Fuente: HSCSG_MJ_SYNTHESIS_v15.md §3 (Vault Obsidian del usuario)
// Última actualización: 2026-08-22

export interface CicloPlan {
  id: number
  nombre: string
  lema: string
  dias: number
  semanas: SemanaPlan[]
  entregable: string
  pvso: string[]
}

export interface SemanaPlan {
  semana: number
  accion: string
  responsable: string
  metrica: string
}

export const PLAN_90_DIAS: CicloPlan[] = [
  {
    id: 1,
    nombre: 'BASE MATERIAL',
    lema: 'El suelo no miente',
    dias: 28,
    semanas: [
      { semana: 1, accion: 'Identificar y asegurar tierra (compra/arriendo 3-5 años)', responsable: 'Isaac + 2 socios', metrica: 'Escritura/contrato firmado + agua verificada + medición solar' },
      { semana: 2, accion: 'Instalar microgrid v0.1 (2kW + 10kWh)', responsable: 'Técnico energía + FABSHIP', metrica: '5 kWh/día generados + 3 días autonomía + datos SVD streaming' },
      { semana: 3, accion: 'Montar FABSHIP v0.1 en contenedor', responsable: 'Maker + FABSHIP', metrica: 'Imprime pieza de prueba + corta madera + suelda + registra RepairFlow' },
      { semana: 4, accion: 'Preparar 200 m² huerta biointensiva + compost', responsable: 'Agrónomo + colectivo', metrica: 'Camas listas + riego funcionando + 20 especies sembradas' }
    ],
    entregable: 'Nodo Cosateca v0.1 FÍSICO OPERATIVO (aunque mínimo). No PDF. No repo. Tierra + energía + herramientas + comida creciendo.',
    pvso: ['AUT_ALIM ≥ 0.5', 'AUT_ENER ≥ 0.5', 'AUT_HABI ≥ 0.4']
  },
  {
    id: 2,
    nombre: 'COLECTIVO ONTOGENÉTICO',
    lema: 'La red no se decreta, se teje',
    dias: 28,
    semanas: [
      { semana: 5, accion: 'Onboarding 5-10 miembros: firma Social DNA + aporte 20h/sem + 500 ZNU', responsable: 'Isaac + facilitador CDS', metrica: '5+ miembros con ERP-8004 + ValueFlows activos + compromisos firmados' },
      { semana: 6, accion: 'CDS operacional: 2 decisiones reales', responsable: 'Colectivo', metrica: 'Actas ValueFlows + objeciones ponderadas + reversibilidad < 90 días' },
      { semana: 7, accion: 'ValueFlows circulando: 50+ eventos', responsable: 'Autómata v0.1 + Agent System', metrica: 'Velocidad ZNU > 12 eventos/año; 0% acumulación > 3×DSI' },
      { semana: 8, accion: 'Autómata v0.1 desplegado en hardware local', responsable: 'DevOps + Autómata', metrica: 'Latido 6h + D-check < 1ms + SOUL.md generado + Talents FABSHIP activos' }
    ],
    entregable: 'Colectivo Ontogenético v0.1 FUNCIONANDO (CDS + ValueFlows + Autómata + base material del Ciclo 1).',
    pvso: ['PGS ≥ 1.5', 'η > 0.35', 'ξ > 0', 'ICS ≥ 0.4']
  },
  {
    id: 3,
    nombre: 'LUCIDEZ MATERIAL',
    lema: 'El diagnóstico es el territorio',
    dias: 28,
    semanas: [
      { semana: 9, accion: 'Micro-SaaS rediseñado: formulario 80% biofísico + diagnóstico CAC en < 5 min', responsable: 'Dev + Agrónomo', metrica: '5 colectivos beta completan + pagan 180 ZNU + acción concreta en 48h' },
      { semana: 10, accion: 'AI Wrapper entrenado solo con datos del Nodo v0.1', responsable: 'AI Engineer', metrica: 'Recomendaciones aciertan 80% vs decisión humana CDS; 0 alucinaciones' },
      { semana: 11, accion: 'Productized Service 1: "Auditoría Base Material 7 días"', responsable: 'Isaac + 2 técnicos', metrica: '3 auditorías vendidas/entregadas + colectivos implementan ≥ 2 recomendaciones' },
      { semana: 12, accion: 'Revenue Demo v0.1: visita 1 día + taller 2 días', responsable: 'Colectivo + Autómata', metrica: '5 visitantes + 2 inician Proto-CO en su territorio + ingresos ≥ 500 ZNU' }
    ],
    entregable: 'HSCSG v15 OPERATIVO — Base material + Colectivo ontogenético + Herramientas validadas + Primeros ingresos reales + Métricas con datos de campo.',
    pvso: ['PGS ≥ 2.0', 'η > 0.5', 'ξ > 0.1', 'IVC ≥ 0.5', 'MCI ≥ 1.5']
  }
]

export const PLAN_90_DIAS_MAP: Record<number, CicloPlan> = {
  1: PLAN_90_DIAS[0],
  2: PLAN_90_DIAS[1],
  3: PLAN_90_DIAS[2]
}

export function getCicloPlan(id: number): CicloPlan | undefined {
  return PLAN_90_DIAS_MAP[id]
}

export function getPlan90DiasProgreso(cicloActual: number, semanaActual: number): number {
  const ciclo = PLAN_90_DIAS_MAP[cicloActual]
  if (!ciclo) return 0
  return ((cicloActual - 1) * 4 + semanaActual) / 12 * 100
}
