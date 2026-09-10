/**
 * Micro-Monopolio de Atención (MMA) — Equivalente HSCSG a "Casi todo para casi nadie" / Micro-nichos
 * 
 * Motor para identificar, validar y escalar micro-monopolios de atención:
 * "100 verdaderos fans × $1,000 = $100K/año" (adaptación Kevin Kelly)
 * 
 * Principio: "Casi todo para casi nadie" → Especialización extrema + comunidad íntima
 * Escala humana: Células (~150 Dunbar) → Civilizaciones (federación de células)
 */

export interface MicroMonopoly {
  id: string;
  name: string;
  description: string;
  niche: NicheDefinition;
  audience: AudienceProfile;
  valueProposition: ValueProposition;
  businessModel: BusinessModel;
  community: CommunityStructure;
  metrics: MMAMetrics;
  status: 'IDEATION' | 'VALIDATION' | 'BUILDING' | 'LAUNCHING' | 'SCALING' | 'MATURE' | 'DECLINING';
  createdAt: Date;
  updatedAt: Date;
}

export interface NicheDefinition {
  problem: string;                    // Problema específico, dolor agudo
  solution: string;                   // Solución única, diferenciada
  uniqueness: string;                 // Qué lo hace "casi nadie más lo hace"
  marketSize: 'MICRO' | 'SMALL' | 'MEDIUM'; // MICRO: <10K personas, SMALL: 10K-100K, MEDIUM: 100K-1M
  barriersToEntry: string[];          // Qué impide que otros copien fácilmente
  adjacentNiches: string[];           // Nichos adyacentes para expansión futura
}

export interface AudienceProfile {
  primaryPersona: Persona;
  secondaryPersonas: Persona[];
  trueFansTarget: number;             // Objetivo: 100-1,000 true fans
  acquisitionChannels: Channel[];
  retentionDrivers: string[];
}

export interface Persona {
  name: string;
  demographics: { ageRange: string; location: string; income: string; };
  psychographics: { values: string[]; fears: string[]; aspirations: string[]; };
  painPoints: string[];
  currentSolutions: string[];
  willingnessToPay: number;           // $/mes
  influenceLevel: number;             // 1-100 (capacidad de referir otros)
}

export interface Channel {
  type: 'ORGANIC' | 'PAID' | 'PARTNERSHIP' | 'COMMUNITY' | 'REFERRAL';
  platform: string;
  cpa: number;                        // Costo por adquisición
  conversionRate: number;             // 0-1
  scalability: number;                // 1-100
}

export interface ValueProposition {
  corePromise: string;                // Una frase: qué entregas
  differentiableBenefits: string[];   // 3-5 beneficios únicos
  proofElements: string[];            // Testimonios, casos, métricas
  riskReversal: string;               // Garantía, prueba gratis, etc.
}

export interface BusinessModel {
  primaryRevenue: RevenueStream;
  secondaryRevenue: RevenueStream[];
  pricing: PricingStrategy;
  unitEconomics: UnitEconomics;
  ltvCacRatio: number;                // Target > 3
  paybackMonths: number;              // Target < 6
}

export interface RevenueStream {
  type: 'SUBSCRIPTION' | 'COURSE' | 'COACHING' | 'COMMUNITY' | 'PRODUCT' | 'AFFILIATE' | 'LICENSING';
  price: number;
  frequency: 'MONTHLY' | 'QUARTERLY' | 'ANNUAL' | 'ONE_TIME';
  projectedVolume: number;
}

export interface PricingStrategy {
  model: 'TIERED' | 'FLAT' | 'USAGE_BASED' | 'VALUE_BASED' | 'FREEMIUM';
  tiers: PricingTier[];
  discountStrategy: string;
}

export interface PricingTier {
  name: string;
  price: number;
  frequency: 'MONTHLY' | 'ANNUAL';
  features: string[];
  targetPersona: string;
}

export interface UnitEconomics {
  cac: number;                        // Customer Acquisition Cost
  ltv: number;                        // Lifetime Value
  grossMargin: number;                // %
  churnRate: number;                  // % mensual
  expansionRevenue: number;           // $/mes por cliente existente
}

export interface CommunityStructure {
  type: 'CELL' | 'CIVILIZATION' | 'FEDERATION';
  size: number;                       // miembros actuales
  targetSize: number;                 // 100-150 (célula) | 150-1500 (civilización) | 1500+ (federación)
  platforms: string[];                // Discord, WhatsApp, Circle, custom
  engagementRituals: Ritual[];
  governance: GovernanceModel;
  moderation: ModerationModel;
}

export interface Ritual {
  name: string;
  frequency: 'DAILY' | 'WEEKLY' | 'MONTHLY' | 'QUARTERLY' | 'ANNUAL';
  format: 'SYNC' | 'ASYNC' | 'HYBRID';
  purpose: string;                    // conexión, aprendizaje, celebración, gobernanza
  participationRate: number;          // target %
}

export interface GovernanceModel {
  type: 'BENEVOLENT_DICTATOR' | 'COUNCIL' | 'HOLACRACY' | 'TOKEN_VOTING' | 'REPUTATION_BASED';
  decisionMaking: string;
  conflictResolution: string;
  successionPlan: string;
}

export interface ModerationModel {
  type: 'CENTRALIZED' | 'DISTRIBUTED' | 'AI_ASSISTED' | 'COMMUNITY_LED';
  guidelines: string[];
  escalationPath: string[];
}

export interface MMAMetrics {
  // Adquisición
  monthlyVisitors: number;
  leadsPerMonth: number;
  conversionRate: number;             // lead → true fan
  cac: number;
  
  // Retención
  trueFansCount: number;              // miembros pagando + engagados
  monthlyChurn: number;               // %
  netRevenueRetention: number;        // NRR > 100%
  engagementScore: number;            // 0-100 (activos/semana)
  
  // Económicas
  mrr: number;                        // Monthly Recurring Revenue
  arr: number;                        // Annual Recurring Revenue
  ltv: number;
  ltvCacRatio: number;
  grossMargin: number;
  
  // Comunidad
  activeMembers: number;
  dailyActiveUsers: number;
  postsPerWeek: number;
  referralRate: number;               // % nuevos via referidos
  
  // Salud micro-monopolio
  monopolyStrength: number;           // 0-100 (diferenciación + barreras)
  nicheOwnership: number;             // 0-100 (% mente en el nicho)
  expansionReadiness: number;         // 0-100 (listo para nicho adyacente)
}

export interface MMAConfig {
  trueFansTarget: number;             // default 100
  targetMRR: number;                  // default 10000
  maxCAC: number;                     // default 500
  minLTVCACRatio: number;             // default 3
  maxChurn: number;                   // default 5% monthly
  minEngagementScore: number;         // default 70
  cellMaxSize: number;                // default 150 (Dunbar)
  civilizationMaxSize: number;        // default 1500
  validationPeriodDays: number;       // default 90
}

export const DEFAULT_MMA_CONFIG: MMAConfig = {
  trueFansTarget: 100,
  targetMRR: 10000,
  maxCAC: 500,
  minLTVCACRatio: 3,
  maxChurn: 5,
  minEngagementScore: 70,
  cellMaxSize: 150,
  civilizationMaxSize: 1500,
  validationPeriodDays: 90
};

/**
 * Crea micro-monopolio desde definición de nicho
 */
export function createMicroMonopoly(
  niche: NicheDefinition,
  audience: AudienceProfile,
  valueProp: ValueProposition,
  config: MMAConfig = DEFAULT_MMA_CONFIG
): MicroMonopoly {
  return {
    id: `mma_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    name: generateName(niche),
    description: `${niche.problem} → ${niche.solution}`,
    niche,
    audience,
    valueProposition: valueProp,
    businessModel: createDefaultBusinessModel(valueProp, audience),
    community: createDefaultCommunity(niche),
    metrics: initializeMetrics(),
    status: 'IDEATION',
    createdAt: new Date(),
    updatedAt: new Date()
  };
}

function generateName(niche: NicheDefinition): string {
  const words = niche.problem.split(' ').slice(0, 3).map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('');
  return `MMA-${words}-${Date.now().toString(36)}`;
}

function createDefaultBusinessModel(valueProp: ValueProposition, audience: AudienceProfile): BusinessModel {
  const primaryPrice = audience.primaryPersona.willingnessToPay || 97;
  
  return {
    primaryRevenue: {
      type: 'SUBSCRIPTION',
      price: primaryPrice,
      frequency: 'MONTHLY',
      projectedVolume: 100
    },
    secondaryRevenue: [
      { type: 'COURSE', price: 497, frequency: 'ONE_TIME', projectedVolume: 20 },
      { type: 'COACHING', price: 1500, frequency: 'ONE_TIME', projectedVolume: 5 }
    ],
    pricing: {
      model: 'TIERED',
      tiers: [
        { name: 'Explorador', price: 27, frequency: 'MONTHLY', features: ['Contenido base', 'Comunidad'], targetPersona: 'Curioso' },
        { name: 'Practicante', price: 97, frequency: 'MONTHLY', features: ['Todo contenido', 'Comunidad', 'Q&A mensual'], targetPersona: 'Comprometido' },
        { name: 'Maestro', price: 297, frequency: 'MONTHLY', features: ['Todo + coaching grupal', 'Acceso directo', 'Plantillas'], targetPersona: 'Serio' }
      ],
      discountStrategy: 'Anual 20% off + referido 1 mes gratis'
    },
    unitEconomics: {
      cac: 0,
      ltv: 0,
      grossMargin: 85,
      churnRate: 5,
      expansionRevenue: 0
    },
    ltvCacRatio: 0,
    paybackMonths: 0
  };
}

function createDefaultCommunity(niche: NicheDefinition): CommunityStructure {
  return {
    type: 'CELL',
    size: 0,
    targetSize: 100,
    platforms: ['Discord', 'Email'],
    engagementRituals: [
      { name: 'Check-in diario', frequency: 'DAILY', format: 'ASYNC', purpose: 'conexión', participationRate: 60 },
      { name: 'Sesión semanal', frequency: 'WEEKLY', format: 'SYNC', purpose: 'aprendizaje', participationRate: 40 },
      { name: 'Celebración mensual', frequency: 'MONTHLY', format: 'HYBRID', purpose: 'celebración', participationRate: 50 },
      { name: 'Retiro trimestral', frequency: 'QUARTERLY', format: 'SYNC', purpose: 'gobernanza', participationRate: 30 }
    ],
    governance: {
      type: 'BENEVOLENT_DICTATOR',
      decisionMaking: 'Fundador decide con input de consejeros',
      conflictResolution: 'Mediación directa → consejo de 3',
      successionPlan: 'Consejo de 3 elige sucesor'
    },
    moderation: {
      type: 'COMMUNITY_LED',
      guidelines: ['Respeto mutuo', 'Sin spam', 'Valor ante ruido', 'Confidencialidad'],
      escalationPath: ['Moderador comunitario' , 'Fundador', 'Consejo externo']
    }
  };
}

function initializeMetrics(): MMAMetrics {
  return {
    monthlyVisitors: 0,
    leadsPerMonth: 0,
    conversionRate: 0,
    cac: 0,
    trueFansCount: 0,
    monthlyChurn: 0,
    netRevenueRetention: 0,
    engagementScore: 0,
    mrr: 0,
    arr: 0,
    ltv: 0,
    ltvCacRatio: 0,
    grossMargin: 0,
    activeMembers: 0,
    dailyActiveUsers: 0,
    postsPerWeek: 0,
    referralRate: 0,
    monopolyStrength: 0,
    nicheOwnership: 0,
    expansionReadiness: 0
  };
}

/**
 * Valida si un micro-monopolio está listo para lanzar
 */
export function validateForLaunch(mma: MicroMonopoly, config: MMAConfig = DEFAULT_MMA_CONFIG): {
  ready: boolean;
  score: number;
  gaps: string[];
  recommendations: string[];
} {
  const gaps: string[] = [];
  const recommendations: string[] = [];
  let score = 0;
  
  // 1. Nicho validado
  if (mma.niche.problem && mma.niche.solution && mma.niche.uniqueness) {
    score += 20;
  } else {
    gaps.push('Nicho no completamente definido');
    recommendations.push('Completar definición de nicho: problema, solución, unicidad');
  }
  
  // 2. Audiencia definida
  if (mma.audience.primaryPersona && mma.audience.trueFansTarget > 0) {
    score += 15;
  } else {
    gaps.push('Perfil de audiencia incompleto');
    recommendations.push('Definir persona primaria + target de true fans');
  }
  
  // 3. Propuesta de valor clara
  if (mma.valueProposition.corePromise && mma.valueProposition.differentiableBenefits.length >= 3) {
    score += 15;
  } else {
    gaps.push('Propuesta de valor débil');
    recommendations.push('Definir promesa central + 3+ beneficios diferenciables + pruebas');
  }
  
  // 4. Modelo de negocio viable
  const bm = mma.businessModel;
  if (bm.primaryRevenue && bm.pricing && bm.unitEconomics) {
    score += 20;
    if (bm.unitEconomics.ltvCacRatio >= config.minLTVCACRatio) score += 5;
    else recommendations.push(`Mejorar LTV/CAC ratio (actual: ${bm.unitEconomics.ltvCacRatio}, target: ${config.minLTVCACRatio})`);
  } else {
    gaps.push('Modelo de negocio incompleto');
    recommendations.push('Completar streams de revenue, pricing, unit economics');
  }
  
  // 5. Comunidad lista
  if (mma.community.platforms.length > 0 && mma.community.engagementRituals.length >= 2) {
    score += 15;
  } else {
    gaps.push('Infraestructura comunitaria insuficiente');
    recommendations.push('Configurar plataforma + al menos 2 rituales de engagement');
  }
  
  // 5. Métricas de validación
  if (mma.metrics.trueFansCount >= 10) score += 10; // early adopters
  else recommendations.push('Conseguir 10+ early adopters para validación');
  
  return {
    ready: score >= 80 && gaps.length === 0,
    score,
    gaps,
    recommendations
  };
}

/**
 * Calcula salud del micro-monopolio (0-100)
 */
export function calculateMMAHealth(mma: MicroMonopoly, config: MMAConfig = DEFAULT_MMA_CONFIG): number {
  const weights = {
    monopolyStrength: 0.25,
    nicheOwnership: 0.20,
    financialHealth: 0.25,
    communityHealth: 0.20,
    growthTrajectory: 0.10
  };
  
  const financialHealth = calculateFinancialHealth(mma, config);
  const communityHealth = calculateCommunityHealth(mma, config);
  const growthTrajectory = calculateGrowthTrajectory(mma);
  
  return Math.round(
    mma.metrics.monopolyStrength * weights.monopolyStrength +
    mma.metrics.nicheOwnership * weights.nicheOwnership +
    financialHealth * weights.financialHealth +
    communityHealth * weights.communityHealth +
    growthTrajectory * weights.growthTrajectory
  );
}

function calculateFinancialHealth(mma: MicroMonopoly, config: MMAConfig): number {
  const bm = mma.businessModel;
  let score = 0;
  
  if (bm.unitEconomics.ltvCacRatio >= config.minLTVCACRatio) score += 40;
  else if (bm.unitEconomics.ltvCacRatio > 1) score += 20;
  
  if (mma.metrics.mrr > 0) score += 20;
  if (mma.metrics.churnRate < config.maxChurn) score += 20;
  if (mma.metrics.ltvCacRatio >= config.minLTVCACRatio) score += 20;
  
  return Math.min(score, 100);
}

function calculateCommunityHealth(mma: MicroMonopoly, config: MMAConfig): number {
  let score = 0;
  
  if (mma.metrics.engagementScore >= config.minEngagementScore) score += 40;
  if (mma.metrics.referralRate > 20) score += 30;
  if (mma.metrics.activeMembers > 0 && mma.metrics.activeMembers / Math.max(mma.community.size, 1) > 0.5) score += 30;
  
  return Math.min(score, 100);
}

function calculateGrowthTrajectory(mma: MicroMonopoly): number {
  // Basado en tendencias de métricas (simplificado)
  let score = 50; // base
  
  if (mma.metrics.mrr > 0 && mma.metrics.mrr > mma.metrics.arr / 12 * 1.1) score += 25; // creciendo >10% mes
  if (mma.metrics.trueFansCount > mma.metrics.activeMembers * 0.5) score += 25; // buena conversión
  
  return Math.min(score, 100);
}

/**
 * Genera plan de expansión a nicho adyacente
 */
export function planAdjacentExpansion(
  mma: MicroMonopoly,
  targetNiche: string
): ExpansionPlan {
  return {
    sourceMMA: mma.id,
    targetNiche,
    rationale: `Expansión natural desde ${mma.niche.problem} hacia ${targetNiche}`,
    sharedAudience: calculateAudienceOverlap(mma, targetNiche),
    resourceRequirements: estimateResources(mma, targetNiche),
    timeline: estimateTimeline(mma, targetNiche),
    riskAssessment: assessExpansionRisk(mma, targetNiche),
    successCriteria: defineSuccessCriteria(mma, targetNiche),
    createdAt: new Date()
  };
}

interface ExpansionPlan {
  sourceMMA: string;
  targetNiche: string;
  rationale: string;
  sharedAudience: number;         // 0-100
  resourceRequirements: ResourceReq;
  timeline: Timeline;
  riskAssessment: RiskAssessment;
  successCriteria: SuccessCriteria;
  createdAt: Date;
}

interface ResourceReq {
  contentHours: number;
  techInvestment: number;
  humanHours: number;
  budget: number;
}

interface Timeline {
  validation: number;    // días
  build: number;         // días
  launch: number;        // días
  breakeven: number;     // días
}

interface RiskAssessment {
  level: 'LOW' | 'MEDIUM' | 'HIGH';
  keyRisks: string[];
  mitigations: string[];
}

interface SuccessCriteria {
  trueFansTarget: number;
  mrrTarget: number;
  engagementScore: number;
  timeframe: number; // días
}

function calculateAudienceOverlap(mma: MicroMonopoly, targetNiche: string): number {
  // Simplificado: basado en tags compartidos
  return 40; // placeholder
}

function estimateResources(mma: MicroMonopoly, targetNiche: string): ResourceReq {
  return {
    contentHours: 40,
    techInvestment: 5000,
    humanHours: 200,
    budget: 15000
  };
}

function estimateTimeline(mma: MicroMonopoly, targetNiche: string): Timeline {
  return {
    validation: 30,
    build: 60,
    launch: 30,
    breakeven: 180
  };
}

function assessExpansionRisk(mma: MicroMonopoly, targetNiche: string): RiskAssessment {
  return {
    level: 'MEDIUM',
    keyRisks: ['Cannibalización audiencia', 'Dilución marca', 'Recursos dispersos'],
    mitigations: ['Branding separado', 'Equipo dedicado', 'Presupuesto ring-fenced']
  };
}

function defineSuccessCriteria(mma: MicroMonopoly, targetNiche: string): SuccessCriteria {
  return {
    trueFansTarget: 50,
    mrrTarget: 5000,
    engagementScore: 70,
    timeframe: 180
  };
}

/**
 * Genera reporte MMA
 */
export function generateMMAReport(mma: MicroMonopoly): string {
  const statusLabels = {
    IDEATION: '💡 IDEACIÓN',
    VALIDATION: '🧪 VALIDACIÓN',
    BUILDING: '🔨 CONSTRUCCIÓN',
    LAUNCHING: '🚀 LANZAMIENTO',
    SCALING: '📈 ESCALANDO',
    MATURE: '🏛️ MADURO',
    DECLINING: '📉 DECLIVE'
  };
  
  const health = calculateMMAHealth(mma);
  const launchValidation = validateForLaunch(mma);
  
  return `
# Reporte MMA — Micro-Monopolio de Atención

## Identidad
- **ID:** ${mma.id}
- **Nombre:** ${mma.name}
- **Estado:** ${statusLabels[mma.status]}
- **Salud Global:** ${health}/100

## Nicho
- **Problema:** ${mma.niche.problem}
- **Solución:** ${mma.niche.solution}
- **Unicidad:** ${mma.niche.uniqueness}
- **Tamaño Mercado:** ${mma.niche.marketSize}
- **Barreras:** ${mma.niche.barriersToEntry.join(', ') || 'Ninguna documentada'}

## Propuesta de Valor
- **Promesa:** ${mma.valueProposition.corePromise}
- **Beneficios:** ${mma.valueProposition.differentiableBenefits.join(' | ')}
- **Pruebas:** ${mma.valueProposition.proofElements.join(', ') || 'Pendientes'}

## Modelo de Negocio
- **Revenue Principal:** ${mma.businessModel.primaryRevenue.type} $${mma.businessModel.primaryRevenue.price}/${mma.businessModel.primaryRevenue.frequency}
- **Pricing:** ${mma.businessModel.pricing.model}
- **LTV/CAC:** ${mma.businessModel.ltvCacRatio.toFixed(2)} (target > ${3})
- **Churn:** ${mma.metrics.churnRate}% (target < 5%)

## Métricas Clave
- **True Fans:** ${mma.metrics.trueFansCount} / ${mma.audience.trueFansTarget} target
- **MRR:** $${mma.metrics.mrr} | **ARR:** $${mma.metrics.arr}
- **Churn:** ${mma.metrics.churnRate}% | **NRR:** ${mma.metrics.netRevenueRetention}%
- **Engagement:** ${mma.metrics.engagementScore}/100
- **Referral Rate:** ${mma.metrics.referralRate}%

## Comunidad
- **Tipo:** ${mma.community.type} (${mma.community.size}/${mma.community.targetSize})
- **Plataformas:** ${mma.community.platforms.join(', ')}
- **Rituales:** ${mma.community.engagementRituals.length} activos

## Validación Lanzamiento
- **¿Listo?** ${launchValidation.ready ? '✅ SÍ' : '❌ NO'}
- **Score:** ${launchValidation.score}/100
- **Gaps:** ${launchValidation.gaps.join(', ') || 'Ninguno'}

## Salud MMA
- **Fuerza Monopolio:** ${mma.metrics.monopolyStrength}/100
- **Propiedad Nicho:** ${mma.metrics.nicheOwnership}/100
- **Expansión:** ${mma.metrics.expansionReadiness}/100

---
*Generado por HSCSG MMA Engine v1.0*
  `.trim();
}

/**
 * Factory para micro-monopolios tipo conocidos
 */
export const MMATemplates = {
  infoProductCommunity: (topic: string): Partial<MicroMonopoly> => ({
    niche: {
      problem: `Falta de guía práctica y comunidad para ${topic}`,
      solution: `Sistema paso a paso + comunidad de practicantes + coaching grupal`,
      uniqueness: `Único que combina framework propietario + comunidad íntima (≤150) + coaching real`,
      marketSize: 'SMALL',
      barriersToEntry: ['Framework propietario', 'Comunidad con efectos de red', 'Reputación fundador'],
      adjacentNiches: [`${topic} avanzado`, `${topic} para equipos`, `Coaching 1:1 ${topic}`]
    },
    audience: {
      primaryPersona: {
        name: `Practicante ${topic}`,
        demographics: { ageRange: '25-40', location: 'Hispanohablante global', income: '$2-10K/mes' },
        psychographics: { values: ['Crecimiento', 'Autonomía', 'Comunidad'], fears: ['Estancamiento', 'Aislamiento', 'Perder tiempo'], aspirations: ['Maestría', 'Ingresos pasivos', 'Impacto'] },
        painPoints: ['Info fragmentada', 'Sin comunidad', 'Sin feedback real', 'Cursos que no aplican'],
        currentSolutions: ['Cursos baratos sin soporte', 'Coaching caro 1:1', 'Foros gratuitos ruidosos'],
        willingnessToPay: 97,
        influenceLevel: 70
      },
      secondaryPersonas: [],
      trueFansTarget: 100,
      acquisitionChannels: [
        { type: 'ORGANIC', platform: 'TikTok/Reels', cpa: 5, conversionRate: 0.01, scalability: 80 },
        { type: 'COMMUNITY', platform: 'Referidos', cpa: 0, conversionRate: 0.15, scalability: 60 },
        { type: 'PARTNERSHIP', platform: 'Newsletter afines', cpa: 20, conversionRate: 0.05, scalability: 40 }
      ],
      retentionDrivers: ['Progreso visible', 'Comunidad', 'Coaching real', 'Resultados medibles']
    },
    valueProposition: {
      corePromise: `Domina ${topic} en 90 días con framework probado + comunidad de 100 + coaching real`,
      differentiableBenefits: ['Framework propietario (no info genérica)', 'Comunidad ≤150 (intimidad real)', 'Coaching grupal semanal (no solo contenido)', 'Resultados en 90 días o devolución'],
      proofElements: ['Casos de estudio', 'Testimonios video', 'Métricas agregadas'],
      riskReversal: '90 días prueba: resultados o devolución total'
    }
  }),
  
  skillMicroMonopoly: (skill: string): Partial<MicroMonopoly> => ({
    niche: {
      problem: `Profesionales que necesitan ${skill} pero cursos son genéricos/sin práctica`,
      solution: `Entrenamiento deliberado + comunidad de pares + proyectos reales + portfolio`,
      uniqueness: `Entrenamiento tipo "guild" medieval: aprendiz → oficial → maestro con proyectos reales`,
      marketSize: 'MICRO',
      barriersToEntry: ['Currículum propietario', 'Red de mentores', 'Proyectos reales con clientes'],
      adjacentNiches: [`${skill} avanzado`, `Enseñar ${skill}`, `Consultoría ${skill}`]
    }
  })
};