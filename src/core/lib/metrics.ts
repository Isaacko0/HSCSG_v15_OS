// HSCSG v15 OS — Métricas Soberanas (Ontología HSCSG)
// Reemplaza métricas SaaS/VC (MRR, CAC, LTV, Churn) por métricas de autonomía territorial
// Basado en: E=V, Mutualismo Proudhoniano, Alráico (PI, γ-CARMIS, 20 límites), Principio Anfibio
// ACTUALIZADO: VitalTimeFlow, VitalTimeActivationCost + BT213 (Límite Kernel) + BT214 (Humano Artífice) + AFP + BT180 + BT165 + BT164

export type NodeMode = 'postmonetario' | 'conectado' | 'vital_time'

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

// === AUT / CDS ===

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

// ===== NUEVO: VitalTimeFlow (BT215 + AFP + BT180 + BT165 + BT164) =====

export interface VitalTimeFlow {
  mensual: TimeAmount           // hr_vital aportadas al común (verificadas triaxial)
  anual: TimeAmount
  autonomyHours: number         // Horas vitales liberadas (no vendidas a mercado)
  careHours: number             // Horas vitales en cuidado
  learningHours: number         // Horas vitales en aprendizaje/desaprendizaje
  
  // ===== BT213: Límite Kernel =====
  kernelLimitsRespected: number   // % verificaciones que respetan límite kernel (target 100%)
  twoDomainsIntegrated: number    // % verificaciones con experiencia directa + rastros compartidos
  noConsciousnessAudit: number    // % verificaciones sin auditar conciencia (target 100%)
  
  // ===== BT214: Humano Artífice =====
  responsibilityAccepted: number  // % mint con responsabilidad indelegable firmada (target 100%)
  uncertaintyAcknowledged: number // % mint con incertidumbre estructural asumida (target 100%)
  translationSignatureUnique: number // % mint con firma única operador (target 100%)
  betaPerpetuaMode: number        // % nodos en beta perpetua (target 100%)
  
  // ===== AFP Pilar 3: Tiempo Vital =====
  consciousEnergyVerified: number // % hr_vital con energía consciente verificada
  contributionHours: number       // Horas contribución verificada total
  expandedAccessActive: number    // % nodos con acceso expandido por contribución
  nbuCoveredRate: number          // % NBU cubiertas por existir/participar
  ecoImpactScore: number          // Impacto positivo en red (promedio)
  
  // ===== BT180: Poder = Tiempo Vital =====
  controlsOwnTime: number         // % nodos que controlan su propio tiempo
  consentGradientsAvg: number     // Gradiente consentimiento promedio (0-1)
  energyFromBelowRate: number     // % energía desde abajo (target 100%)
  notForSaleCompliance: number    // % cumplimiento "no se vende, se habita" (target 100%)
  
  // ===== BT165: Ecuación Lastre E=V =====
  truthAssumedAvg: number         // Promedio verdad asumida (numerador E=V)
  truthEvadedAvg: number          // Promedio verdad evadida (denominador E=V)
  evasionLightensDetected: number // % nodos con evasión detectada (alert)
  presenceDensifiesRate: number   // % nodos donde presencia densifica
  peaceFromAssumptionRate: number // % nodos reportando paz por certeza
  
  // ===== BT164: Margen Real =====
  realMarginAvg: number           // Margen real promedio (espacio trayectorias)
  evasionReducesMarginRate: number // % nodos donde evasión reduce margen
  presenceExpandsMarginRate: number // % nodos donde presencia amplía margen
  extractionSequestersRate: number // % nodos con extracción secuestra margen
  thresholdRealAvg: number        // Umbral real promedio
  lagRealAvg: number              // Desfase conciencia > capacidad promedio
  
  // Verificación triaxial
  triaxialDailyRate: number       // % días con verificación triaxial completa (target ≥ 80%)
  triaxialPassRate: number        // % verificaciones que pasan (≥ 0.7 combinado)
  witnessVerificationRate: number // % verificaciones con testigo
  
  // Pool mechanics
  rotationCompliance: number      // % nodos cumpliendo rotación 30d (target 100%)
  demurrageHealth: number         // 1 - (decay aplicado / balance total)
  concentrationAlerts: number     // Alertas concentración > 5%
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

// ===== NUEVO: VitalTimeActivationCost (BT213 + BT214 + AFP) =====

export interface VitalTimeActivationCost {
  horasVitales: number            // Horas vitales invertidas en activación tiempo vital
  kWh: number                     // Energía invertida (infra verificación, biométrica, testigos)
  znu: number                     // ZNU invertido (herramientas, capacitación triaxial)
  totalVitalTimeCost: number      // Score compuesto 0-100 (menor = más eficiente)
  
  // BT213: Costos de respetar límite kernel
  kernelLimitsCompliance: number  // Costo asegurar límite kernel (no auditar conciencia, etc.)
  twoDomainsIntegration: number   // Costo integrar experiencia directa + rastros
  threeDomainsClassification: number // Costo clasificar compatible/incompatible/no-evaluable
  
  // BT214: Costos de responsabilidad artífice
  responsibilityCeremony: number  // Costo ceremonia responsabilidad indelegable
  uncertaintyWorkshop: number     // Costo taller incertidumbre estructural
  translationSignature: number    // Costo generar firma única operador
  betaPerpetuaOnboarding: number  // Costo onboarding beta perpetua
  
  // AFP: Costos pilar 3
  consciousEnergyCalibration: number // Costo calibrar energía consciente
  contributionTracking: number    // Costo tracking contribuciones
  witnessNetworkSetup: number     // Costo red testigos (Lautaro, Yoka, etc.)
  nbuBaselineSetup: number        // Costo establecer baseline NBU
  
  breakdown: {
    diagnosis: number             // Costo diagnóstico triaxial inicial
    triaxialSetup: number         // Costo setup verificación Mental+Sim+Lab
    kernelLimitsTraining: number  // Costo entrenamiento límites kernel (BT213)
    artificerResponsibility: number // Costo responsabilidad artífice (BT214)
    afpOnboarding: number         // Costo onboarding AFP Pilar 3
    witnessAssignment: number     // Costo asignación testigos
    cdsBootstrap: number          // Costo CDS para gobernanza hr_vital
    trustlinesSetup: number       // Costo trustlines bilaterales
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
    vitalTime: number     // % transacciones en hr_vital vs USD/ZNU
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
    running: string[]     // Loops activos (CDS, MeritMint, AgentCompute, Regen, VitalTimeMint)
    stalled: string[]     // Loops atascados
    tickInterval: number  // Intervalo real vs configurado
  }
  boundaries: {
    respected: boolean    // Límites biofísicos respetados (Ley II)
    violations: string[]  // Violaciones detectadas
  }
  // BT213 + BT214
  kernelLimits: {
    respected: boolean    // Límite kernel respetado en todos los módulos
    violations: string[]  // Violaciones límite kernel detectadas
  }
  humanArtificer: {
    active: boolean       // Humanos operando como artífices
    violations: string[]  // IA intentando habitar/pagar/transformar/decidir por humano
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
    vitalTimeAutonomy: VitalTimeFlow['autonomyHours']
    demurrageHealth: number // 1 - (demurrageLoss / totalFlow)
    vitalTimeDemurrageHealth: number // 1 - (vitalTimeDecay / vitalTimeBalance)
  }
  cognitive: {
      lucidez: number
      gammaCARMIS: number
      resonanceDensity: number
      kernelLimitsRespected: number
      humanArtificerActive: number
    }
  social: {
      germinationRate: number
      sovereigntyLeak: number
      resonanceIncoming: number
    }
    territorial: {
      differentiation: number
      stewardship: number
      bioregionFit: number
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
  
  const demurrageLoss = balanceZNU * (1 - Math.pow(0.95, daysSinceActivity / rotationDays))
  
  return {
    mensual: { amount: netBenefit, unit: 'ZNU' },
    anual: { amount: netBenefit * 12, unit: 'ZNU' },
    netBenefit: { amount: netBenefit, unit: 'ZNU' },
    flowVelocity,
    concentrationIndex: 0,
    demurrageLoss: { amount: demurrageLoss, unit: 'ZNU' }
  }
}

// ===== NUEVO: calculateVitalTimeFlow =====

export function calculateVitalTimeFlow(
  nodes: any[],
  periodDays: number = 30
): VitalTimeFlow {
  const verifiedNodes = nodes.filter(n => n.triaxialVerificationCount > 0)
  const totalNodes = nodes.length || 1
  
  const mensualAmount = verifiedNodes.reduce((sum, n) => sum + n.vitalTimeBalance?.amount || 0, 0)
  
  return {
    mensual: { amount: mensualAmount, unit: 'hr_vital' },
    anual: { amount: mensualAmount * 12, unit: 'hr_vital' },
    autonomyHours: mensualAmount, // Todas hr_vital son autonomía (no se venden)
    careHours: 0, // Requiere tracking específico
    learningHours: 0, // Requiere tracking específico
    
    // BT213
    kernelLimitsRespected: verifiedNodes.filter(n => n.kernelLimits?.cannotAuditConsciousness).length / totalNodes,
    twoDomainsIntegrated: verifiedNodes.filter(n => n.presenceIntegration?.directExperienceVerified && n.presenceIntegration?.sharedTracesVerified).length / totalNodes,
    noConsciousnessAudit: 1.0, // Por diseño - kernel no puede auditar
    
    // BT214
    responsibilityAccepted: verifiedNodes.filter(n => n.humanArtificer?.responsibilityAccepted).length / totalNodes,
    uncertaintyAcknowledged: verifiedNodes.filter(n => n.humanArtificer?.uncertaintyAcknowledged).length / totalNodes,
    translationSignatureUnique: verifiedNodes.filter(n => n.humanArtificer?.translationSignature).length / totalNodes,
    betaPerpetuaMode: verifiedNodes.filter(n => n.humanArtificer?.betaPerpetuaMode).length / totalNodes,
    
    // AFP
    consciousEnergyVerified: verifiedNodes.filter(n => n.afpVitalTime?.consciousEnergyVerified).length / totalNodes,
    contributionHours: verifiedNodes.reduce((sum, n) => sum + n.afpVitalTime?.contributionHours || 0, 0),
    expandedAccessActive: verifiedNodes.filter(n => n.afpVitalTime?.expandedAccess).length / totalNodes,
    nbuCoveredRate: verifiedNodes.filter(n => n.afpVitalTime?.nbuCovered).length / totalNodes,
    ecoImpactScore: verifiedNodes.reduce((sum, n) => sum + n.afpVitalTime?.ecoImpact || 0, 0) / totalNodes,
    
    // BT180
    controlsOwnTime: verifiedNodes.filter(n => n.powerAsVitalTime?.controlsOwnTime).length / totalNodes,
    consentGradientsAvg: verifiedNodes.reduce((sum, n) => sum + n.powerAsVitalTime?.consentGradients || 0, 0) / totalNodes,
    energyFromBelowRate: verifiedNodes.filter(n => n.powerAsVitalTime?.energyFromBelow).length / totalNodes,
    notForSaleCompliance: verifiedNodes.filter(n => n.powerAsVitalTime?.notForSale).length / totalNodes,
    
    // BT165
    truthAssumedAvg: verifiedNodes.reduce((sum, n) => sum + n.ballastEquation?.truthAssumed || 0, 0) / totalNodes,
    truthEvadedAvg: verifiedNodes.reduce((sum, n) => sum + n.ballastEquation?.truthEvaded || 0, 0) / totalNodes,
    evasionLightensDetected: verifiedNodes.filter(n => n.ballastEquation?.evasionLightensToday).length / totalNodes,
    presenceDensifiesRate: verifiedNodes.filter(n => n.ballastEquation?.presenceDensifiesNow).length / totalNodes,
    peaceFromAssumptionRate: verifiedNodes.filter(n => n.ballastEquation?.peaceFromAssumption).length / totalNodes,
    
    // BT164
    realMarginAvg: verifiedNodes.reduce((sum, n) => sum + n.realMargin?.currentMargin || 0, 0) / totalNodes,
    evasionReducesMarginRate: verifiedNodes.filter(n => n.realMargin?.evasionReducesMargin).length / totalNodes,
    presenceExpandsMarginRate: verifiedNodes.filter(n => n.realMargin?.presenceExpandsMargin).length / totalNodes,
    extractionSequestersRate: verifiedNodes.filter(n => n.realMargin?.extractionSequestersMargin).length / totalNodes,
    thresholdRealAvg: verifiedNodes.reduce((sum, n) => sum + n.realMargin?.thresholdReal || 0, 0) / totalNodes,
    lagRealAvg: verifiedNodes.reduce((sum, n) => sum + n.realMargin?.lagReal || 0, 0) / totalNodes,
    
    // Triaxial
    triaxialDailyRate: 0, // Requiere tracking histórico
    triaxialPassRate: verifiedNodes.filter(n => n.triaxialVerificationCount > 0).length / totalNodes,
    witnessVerificationRate: verifiedNodes.filter(n => n.vitalTimeBalance?.triaxialProof?.laboratory?.witnessNodeId).length / totalNodes,
    
    // Pool
    rotationCompliance: verifiedNodes.filter(n => n.rotationDays <= 30).length / totalNodes,
    demurrageHealth: 1.0, // Calcular real
    concentrationAlerts: 0
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

// ===== NUEVO: calculateVitalTimeActivationCost =====

export function calculateVitalTimeActivationCost(
  diagnosisHours: number,
  triaxialSetupHours: number,
  kernelLimitsTrainingHours: number,
  artificerResponsibilityHours: number,
  afpOnboardingHours: number,
  witnessAssignmentHours: number,
  cdsBootstrapHours: number,
  trustlinesSetupHours: number,
  energyKWh: number,
  znuAmount: number
): VitalTimeActivationCost {
  const totalHours = diagnosisHours + triaxialSetupHours + kernelLimitsTrainingHours + 
    artificerResponsibilityHours + afpOnboardingHours + witnessAssignmentHours + 
    cdsBootstrapHours + trustlinesSetupHours
  
  const totalVitalTimeCost = Math.min(100,
    (totalHours / 200) * 40 +
    (energyKWh / 1000) * 30 +
    (znuAmount / 2000) * 30
  )
  
  return {
    horasVitales: totalHours,
    kWh: energyKWh,
    znu: znuAmount,
    totalVitalTimeCost,
    
    kernelLimitsCompliance: kernelLimitsTrainingHours,
    twoDomainsIntegration: kernelLimitsTrainingHours * 0.5,
    threeDomainsClassification: kernelLimitsTrainingHours * 0.3,
    responsibilityCeremony: artificerResponsibilityHours * 0.5,
    uncertaintyWorkshop: artificerResponsibilityHours * 0.3,
    translationSignature: artificerResponsibilityHours * 0.2,
    betaPerpetuaOnboarding: artificerResponsibilityHours * 0.2,
    consciousEnergyCalibration: afpOnboardingHours * 0.4,
    contributionTracking: afpOnboardingHours * 0.3,
    witnessNetworkSetup: witnessAssignmentHours,
    nbuBaselineSetup: afpOnboardingHours * 0.3,
    
    breakdown: {
      diagnosis: diagnosisHours,
      triaxialSetup: triaxialSetupHours,
      kernelLimitsTraining: kernelLimitsTrainingHours,
      artificerResponsibility: artificerResponsibilityHours,
      afpOnboarding: afpOnboardingHours,
      witnessAssignment: witnessAssignmentHours,
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
    components.economic.timeAutonomy / 1000,
    components.economic.vitalTimeAutonomy / 1000,
    components.economic.demurrageHealth,
    components.economic.vitalTimeDemurrageHealth,
    components.cognitive.lucidez,
    components.cognitive.gammaCARMIS,
    Math.min(1, components.cognitive.resonanceDensity),
    components.cognitive.kernelLimitsRespected,
    components.cognitive.humanArtificerActive,
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
    trend: 'ESTABLE',
    lastUpdated: new Date()
  }
}

// === EXPORT POR DEFECTO ===

export const HSCSG_METRICS = {
  ZNUFlow,
  EnergyFlow,
  TimeFlow,
  VitalTimeFlow,
  ActivationCost,
  VitalTimeActivationCost,
  GerminationRate,
  NodeLifespan,
  SovereigntyLeak,
  IncomingResonance,
  TerritorialDifferentiation,
  TerritoryStewardship,
  SystemHealth,
  TerritorialSovereigntyIndex,
  calculateZNUFlow,
  calculateVitalTimeFlow,
  calculateActivationCost,
  calculateVitalTimeActivationCost,
  calculateGerminationRate,
  calculateTerritorialSovereigntyIndex
} as const