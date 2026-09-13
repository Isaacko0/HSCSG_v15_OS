// HSCSG v15 OS — Métricas Soberanas (Ontología HSCSG)
// Reemplaza métricas SaaS/VC (MRR, CAC, LTV, Churn) por métricas de autonomía territorial
// Basado en: E=V, Mutualismo Proudhoniano, Alráico (PI, γ-CARMIS, 20 límites), Principio Anfibio

export type NodeMode = 'postmonetario' | 'conectado'

// === TIPOS BASE ===

export interface ZNUAmount {
  amount: number
  unit: 'ZNU'
}

export interface EnergyAmount {
  amount: number // kWh
  unit: 'kWh'
}

export interface TimeAmount {
  amount: number // horas vitales
  unit: 'hr_vital'
}

export interface AUTScore {
  value: number // 0-1 (Coeficiente de Autonomía)
  components: {
    material: number    // Base material cubierta (alimento, agua, energía, hábitat)
    cognitive: number   // Lucidez + CDS funcionando
    economic: number    // ZNU flow + trustlines activos
    social: number      // Resonancias + células federadas
  }
}

export interface CDSScore {
  value: number // 0-1 (Coeficiente de Deliberación Soberana)
  components: {
    participation: number  // % miembros activos en deliberaciones
    convergence: number    // Rapidez decisiones inevitables
    transparency: number   // Ley III: sin excepciones silenciosas
    lucidez: number        // Lucidez Mode activa
  }
}

// === MÉTRICAS DE FLUJO (Equivalentes a MRR/ARR) ===

export interface ZNUFlow {
  mensual: ZNUAmount      // Net benefit ZNU/mes (revenue - cost en ZNU)
  anual: ZNUAmount        // Proyección anual
  netBenefit: ZNUAmount   // Net Benefit actual (Copiosis NBR adaptado)
  flowVelocity: number    // Velocidad circulación ZNU (rotaciones/mes)
  concentrationIndex: number // Índice Gini ZNU (0=perfecta distribución, 1=concentrado)
  demurrageLoss: ZNUAmount  // ZNU perdido por demurrage/decay (anti-acumulación)
}

export interface EnergyFlow {
  mensual: EnergyAmount   // kWh generados/consumidos netos
  anual: EnergyAmount
  sovereignty: number     // % energía autoproducida vs importada
  storageEfficiency: number // Eficiencia almacenamiento (baterías, térmico, etc.)
}

export interface TimeFlow {
  mensual: TimeAmount     // Horas vitales aportadas al común
  anual: TimeAmount
  autonomyHours: number   // Horas vitales liberadas (no vendidas a mercado)
  careHours: number       // Horas vitales en cuidado (niños, mayores, enfermos)
  learningHours: number   // Horas vitales en aprendizaje/desaprendizaje
}

// === MÉTRICAS DE ACTIVACIÓN (Equivalentes a CAC/Conversion) ===

export interface ActivationCost {
  horasVitales: number    // Horas vitales invertidas en onboarding
  kWh: number             // Energía invertida (infra, herramientas, semillas)
  znu: number             // ZNU invertido (herramientas, capacitación)
  totalAutonomyCost: number // Score compuesto 0-100 (menor = más eficiente)
  breakdown: {
    diagnosis: number     // Costo diagnóstico CAC
    onboarding: number    // Costo onboarding real (tierra, agua, semillas, saberes)
    cdsBootstrap: number  // Costo poner CDS funcionando
    trustlinesSetup: number // Costo establecer trustlines bilaterales
  }
}

export interface GerminationRate {
  semillas: number        // Iniciativas/individuos que inician diagnóstico
  celulasViables: number  // Que alcanzan AUT ≥ 0.3 + CDS ≥ 0.3 en 90 días
  rate: number            // celulasViables / semillas (0-1)
  timeToViability: number // Días promedio semilla → célula viable
  failureModes: string[]  // Por qué fallan las que no germinan
}

// === MÉTRICAS DE SUPERVIVENCIA (Equivalentes a LTV/Churn) ===

export interface NodeLifespan {
  generaciones: number    // Generaciones de sostenibilidad proyectada (target ≥ 7)
  currentGeneration: number // Generación actual del nodo (0 = fundacional)
  autonomyTrajectory: 'CRECIENTE' | 'ESTABLE' | 'DECAYENDO' | 'COLAPSADO'
  regenerationCapacity: number // 0-1: capacidad de regenerar base material tras shock
  knowledgeRetention: number   // 0-1: % saberes prácticos transmitidos a siguiente gen
}

export interface SovereigntyLeak {
  rate: number            // % nodos/año que pierden AUT < 0.2 o CDS < 0.2
  causes: {
    materialCollapse: number    // Fallo base material (sequía, enfermedad, etc.)
    cognitiveDrift: number      // Pérdida lucidez / CDS disfuncional
    economicCapture: number     // Captura por mercado externo (USD dependency)
    socialFragmentation: number // Ruptura resonancias / células
  }
  earlyWarnings: string[] // Señales detectadas por γ-CARMIS / loopEngine
}

// === MÉTRICAS DE RED (Equivalentes a Referral/Monopoly/Niche) ===

export interface IncomingResonance {
  count: number           // Nodos externos con resonancia αʰ > umbral
  avgAlphaH: number       // αʰ promedio de resonancias entrantes
  strongestResonance: {   // Resonancia más fuerte
    nodeId: string
    alphaH: number
    modules: string[]     // 𝕮 que resuenan
  }
  federationReadiness: number // 0-1: listo para federar (consenso 100% + piscina global)
}

export interface TerritorialDifferentiation {
  uniquenessScore: number // 0-1: unicidad biofísica/cultural del territorio
  bioregionMatch: number  // 0-1: ajuste a bioregión (Berg/Lovelock)
  endemicSpecies: number  // Especies/variedades endémicas custodiadas
  uniqueKnowledge: string[] // Saberes únicos del territorio
  replicability: number   // 0-1: ¿Replicable en otro territorio? (bajo = bueno para soberanía)
}

export interface TerritoryStewardship {
  coverage: number        // % necesidades básicas cubiertas localmente (target 100%)
  breakdown: {
    food: number          // % alimento autoproducido
    water: number         // % agua captada/gestionada local
    energy: number        // % energía autoproducida
    health: number        // % salud resuelta local (plantas, parteras, saberes)
    governance: number    // % decisiones resueltas en CDS local
    habitat: number       // % hábitat construido/mantenido local
    communication: number // % comms infraestructura propia (mesh, Nostr relay)
    finance: number       // % transacciones en ZNU/trustlines vs USD
  }
  importDependency: string[] // Qué se importa aún (objetivo: lista vacía en 7 gen)
}

// === MÉTRICAS DE SALUD SISTÉMICA (Alráico / LoopEngine) ===

export interface SystemHealth {
  lucidez: boolean        // Ley III: transparencia total
  gammaCARMIS: {
    active: boolean       // γ-CARMIS monitoreando
    triggers: number      // Disparos γ-CARMIS en último ciclo
    reconfigurations: number // Reconfiguraciones exitosas
    pendingOverloads: number // Sobrecargas ΣPᵢ > κ no resueltas
  }
  resonance: {
    active: number        // Resonancias activas αʰ > umbral
    potential: number     // Pares con potencial resonancia
    coupled: number       // Resonancias acopladas (RAO)
  }
  loops: {
    running: string[]     // Loops activos (CDS, MeritMint, AgentCompute, Regen, etc.)
    stalled: string[]     // Loops atascados
    tickInterval: number  // Intervalo real vs configurado
  }
  boundaries: {
    respected: boolean    // Límites biofísicos respetados (Ley II)
    violations: string[]  // Violaciones detectadas
  }
}

// === MÉTRICA MAESTRA: ÍNDICE DE SOBERANÍA TERRITORIAL (IST) ===

export interface TerritorialSovereigntyIndex {
  // Componentes (cada uno 0-1)
  autonomy: AUTScore      // Coeficiente de Autonomía
  deliberation: CDSScore  // Coeficiente de Deliberación Soberana
  material: {
    coverage: TerritoryStewardship['coverage']
    regeneration: NodeLifespan['regenerationCapacity']
  }
  economic: {
    znuFlow: ZNUFlow['mensual']['amount']
    energySovereignty: EnergyFlow['sovereignty']
    timeAutonomy: TimeFlow['autonomyHours']
    demurrageHealth: number // 1 - (demurrageLoss / totalFlow)
  }
  cognitive: {
    lucidez: SystemHealth['lucidez'] ? 1 : 0
    gammaCARMIS: SystemHealth['gammaCARMIS']['reconfigurations'] > 0 ? 1 : 0
    resonanceDensity: SystemHealth['resonance']['active'] / 10 // Normalizado
  }
  social: {
    germinationRate: GerminationRate['rate']
    sovereigntyLeak: 1 - SovereigntyLeak['rate']
    resonanceIncoming: IncomingResonance['count'] / 5 // Normalizado
  }
  territorial: {
    differentiation: TerritorialDifferentiation['uniquenessScore']
    stewardship: TerritoryStewardship['coverage']
    bioregionFit: TerritorialDifferentiation['bioregionMatch']
  }

  // Score compuesto (media geométrica — si uno es 0, todo es 0)
  composite: number       // 0-1
  level: 'SEMILLA' | 'GERMINANDO' | 'CELULA_VIABLE' | 'CIVILIZACION_NASCIENTE' | 'SOBERANA_PLENA'

  // Trayectoria
  trend: 'MEJORANDO' | 'ESTABLE' | 'DEGRADANDO'
  lastUpdated: Date
}

// === FUNCIONES DE CÁLCULO ===

export function calculateZNUFlow(
  revenueZNU: number,
  costZNU: number,
  balanceZNU: number,
  daysSinceActivity: number,
  rotationDays = 60
): ZNUFlow {
  const netBenefit = Math.max(0, revenueZNU - costZNU)
  const flowVelocity = balanceZNU > 0 ? (revenueZNU + costZNU) / balanceZNU : 0
  
  // Demurrage/decay loss (simplificado)
  const demurrageLoss = balanceZNU * (1 - Math.pow(0.95, daysSinceActivity / rotationDays))
  
  return {
    mensual: { amount: netBenefit, unit: 'ZNU' },
    anual: { amount: netBenefit * 12, unit: 'ZNU' },
    netBenefit: { amount: netBenefit, unit: 'ZNU' },
    flowVelocity,
    concentrationIndex: 0, // Requiere datos de red completa
    demurrageLoss: { amount: demurrageLoss, unit: 'ZNU' }
  }
}

export function calculateActivationCost(
  diagnosisHours: number,
  onboardingHours: number,
  onboardingKWh: number,
  onboardingZNU: number,
  cdsBootstrapHours: number,
  trustlinesSetupHours: number
): ActivationCost {
  const totalHours = diagnosisHours + onboardingHours + cdsBootstrapHours + trustlinesSetupHours
  const totalKWh = onboardingKWh
  const totalZNU = onboardingZNU
  
  // Score compuesto: menor = más eficiente (normalizado a 0-100)
  const totalAutonomyCost = Math.min(100, 
    (totalHours / 100) * 40 + 
    (totalKWh / 500) * 30 + 
    (totalZNU / 1000) * 30
  )
  
  return {
    horasVitales: totalHours,
    kWh: totalKWh,
    znu: totalZNU,
    totalAutonomyCost,
    breakdown: {
      diagnosis: diagnosisHours,
      onboarding: onboardingHours,
      cdsBootstrap: cdsBootstrapHours,
      trustlinesSetup: trustlinesSetupHours
    }
  }
}

export function calculateGerminationRate(
  semillas: number,
  celulasViables: number,
  timeToViabilityDays: number[],
  failureModes: string[]
): GerminationRate {
  return {
    semillas,
    celulasViables,
    rate: semillas > 0 ? celulasViables / semillas : 0,
    timeToViability: timeToViabilityDays.length > 0 
      ? timeToViabilityDays.reduce((a, b) => a + b, 0) / timeToViabilityDays.length 
      : 0,
    failureModes
  }
}

export function calculateTerritorialSovereigntyIndex(
  components: Omit<TerritorialSovereigntyIndex, 'composite' | 'level' | 'trend' | 'lastUpdated'>
): TerritorialSovereigntyIndex {
  // Media geométrica de componentes principales
  const values = [
    components.autonomy.value,
    components.deliberation.value,
    components.material.coverage,
    components.material.regeneration,
    components.economic.energySovereignty,
    components.economic.timeAutonomy / 1000, // Normalizar
    components.economic.demurrageHealth,
    components.cognitive.lucidez,
    components.cognitive.gammaCARMIS,
    Math.min(1, components.cognitive.resonanceDensity),
    components.social.germinationRate,
    components.social.sovereigntyLeak,
    Math.min(1, components.social.resonanceIncoming),
    components.territorial.differentiation,
    components.territorial.stewardship,
    components.territorial.bioregionFit
  ].filter(v => v > 0)
  
  const geometricMean = values.length > 0
    ? Math.pow(values.reduce((a, b) => a * b, 1), 1 / values.length)
    : 0
  
  let level: TerritorialSovereigntyIndex['level']
  if (geometricMean >= 0.8) level = 'SOBERANA_PLENA'
  else if (geometricMean >= 0.6) level = 'CIVILIZACION_NASCIENTE'
  else if (geometricMean >= 0.4) level = 'CELULA_VIABLE'
  else if (geometricMean >= 0.2) level = 'GERMINANDO'
  else level = 'SEMILLA'
  
  return {
    ...components,
    composite: geometricMean,
    level,
    trend: 'ESTABLE', // Requiere histórico
    lastUpdated: new Date()
  }
}

// === EXPORT POR DEFECTO ===

export const HSCSG_METRICS = {
  ZNUFlow,
  EnergyFlow,
  TimeFlow,
  ActivationCost,
  GerminationRate,
  NodeLifespan,
  SovereigntyLeak,
  IncomingResonance,
  TerritorialDifferentiation,
  TerritoryStewardship,
  SystemHealth,
  TerritorialSovereigntyIndex,
  calculateZNUFlow,
  calculateActivationCost,
  calculateGerminationRate,
  calculateTerritorialSovereigntyIndex
} as const