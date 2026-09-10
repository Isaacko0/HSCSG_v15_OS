/**
 * Matriz Talento-Propósito (MTP) — Equivalente HSCSG a "Cuadrantes de Superpoderes"
 * 
 * Diagnóstico inicial para onboarding: cruza Habilidad × Propósito/Interés
 * para asignar SOUL Tier y ruta de desarrollo personalizada.
 * 
 * Zonas:
 * - DESPERDICIO: Baja Habilidad + Bajo Interés → Inacción
 * - TRAMPA: Alta Habilidad + Bajo Interés → Vende tiempo sin propósito
 * - PROPOSITO: Baja Habilidad + Alto Interés → Área de desarrollo
 * - MAESTRIA: Alta Habilidad + Alto Interés → Micro-Monopolio de Atención (MMA)
 */

export type MTPZone = 'DESPERDICIO' | 'TRAMPA' | 'PROPOSITO' | 'MAESTRIA';

export interface MTPCoordinates {
  habilidad: number;    // 0-100 (percentil o autoevaluación calibrada)
  proposito: number;    // 0-100 (interés genuino, alineación valores)
}

export interface MTPResult {
  coordinates: MTPCoordinates;
  zone: MTPZone;
  soulTier: SOULTier;
  recommendedPath: DevelopmentPath;
  microMonopolyPotential: number; // 0-100
}

export type SOULTier = 
  | 'EXPLORER'      // DESPERDICIO → explorar intereses
  | 'BUILDER'       // PROPOSITO → desarrollar habilidad
  | 'OPERATOR'      // TRAMPA → redirigir habilidad a propósito
  | 'MASTER'        // MAESTRIA → micro-monopolio + mentoría
  | 'VISIONARY';    // MAESTRIA + impacto sistémico

export interface DevelopmentPath {
  primaryFocus: 'EXPLORAR' | 'DESARROLLAR' | 'REDIRIGIR' | 'ESCALAR' | 'SISTEMATIZAR';
  estimatedMonths: number;
  keyMilestones: string[];
  requiredResources: string[];
}

export interface SkillEntry {
  name: string;
  level: number;        // 1-100
  evidence: string[];   // proyectos, certificaciones, testimonios
  lastUsed: Date;
}

export interface InterestEntry {
  topic: string;
  intensity: number;    // 1-100
  alignment: number;    // 1-100 (alineación con valores/core)
  timeInvested: number; // horas/mes
}

/**
 * Analiza coordenadas Habilidad × Propósito y devuelve zona + tier + ruta
 */
export function analyzeMTP(
  skills: SkillEntry[],
  interests: InterestEntry[]
): MTPResult {
  // Calcular habilidad ponderada (promedio ponderado por evidencia)
  const habilidad = calculateWeightedSkill(skills);
  
  // Calcular propósito ponderado (intensidad × alineación)
  const proposito = calculateWeightedPurpose(interests);
  
  const coordinates: MTPCoordinates = { habilidad, proposito };
  const zone = determineZone(habilidad, proposito);
  const soulTier = mapZoneToSOULTier(zone);
  const recommendedPath = generateDevelopmentPath(zone, coordinates);
  const microMonopolyPotential = calculateMMA(coordinates, zone);
  
  return {
    coordinates,
    zone,
    soulTier,
    recommendedPath,
    microMonopolyPotential
  };
}

function calculateWeightedSkill(skills: SkillEntry[]): number {
  if (skills.length === 0) return 0;
  
  let totalWeight = 0;
  let weightedSum = 0;
  
  for (const skill of skills) {
    // Peso = nivel × (1 + evidencia/10) × recencia
    const recencyFactor = Math.max(0.1, 1 - (Date.now() - skill.lastUsed.getTime()) / (1000 * 60 * 60 * 24 * 365));
    const evidenceFactor = 1 + Math.min(skill.evidence.length / 10, 2);
    const weight = skill.level * evidenceFactor * recencyFactor;
    
    weightedSum += weight;
    totalWeight += evidenceFactor * recencyFactor;
  }
  
  return Math.round(weightedSum / totalWeight);
}

function calculateWeightedPurpose(interests: InterestEntry[]): number {
  if (interests.length === 0) return 0;
  
  let totalWeight = 0;
  let weightedSum = 0;
  
  for (const interest of interests) {
    // Peso = intensidad × alineación × consistencia temporal
    const consistencyFactor = Math.min(interest.timeInvested / 20, 2); // cap at 2x
    const weight = interest.intensity * interest.alignment * consistencyFactor;
    
    weightedSum += weight;
    totalWeight += consistencyFactor;
  }
  
  return Math.round(weightedSum / totalWeight);
}

function determineZone(habilidad: number, proposito: number): MTPZone {
  const MID = 50; // umbral medio (percentil 50)
  
  if (habilidad < MID && proposito < MID) return 'DESPERDICIO';
  if (habilidad >= MID && proposito < MID) return 'TRAMPA';
  if (habilidad < MID && proposito >= MID) return 'PROPOSITO';
  return 'MAESTRIA';
}

function mapZoneToSOULTier(zone: MTPZone): SOULTier {
  switch (zone) {
    case 'DESPERDICIO': return 'EXPLORER';
    case 'PROPOSITO': return 'BUILDER';
    case 'TRAMPA': return 'OPERATOR';
    case 'MAESTRIA': return 'MASTER';
  }
}

// Para VISIONARY se requiere lógica adicional (impacto sistémico medido)
export function checkVisionaryCriteria(result: MTPResult, systemicImpact: number): boolean {
  return result.zone === 'MAESTRIA' && systemicImpact > 80;
}

function generateDevelopmentPath(zone: MTPZone, coords: MTPCoordinates): DevelopmentPath {
  const gap = Math.abs(coords.habilidad - coords.proposito);
  
  switch (zone) {
    case 'DESPERDICIO':
      return {
        primaryFocus: 'EXPLORAR',
        estimatedMonths: 3,
        keyMilestones: [
          'Completar assessment de intereses (30 días)',
          'Probar 3 micro-proyectos (60 días)',
          'Identificar 1 interés con tracción (90 días)'
        ],
        requiredResources: ['Assessment MTP', 'Micro-experimentos guiados', 'Mentor exploratorio']
      };
      
    case 'PROPOSITO':
      return {
        primaryFocus: 'DESARROLLAR',
        estimatedMonths: 6,
        keyMilestones: [
          'Definir skill objetivo único (30 días)',
          'Completar primer proyecto real (90 días)',
          'Alcanzar nivel 50/100 en skill objetivo (180 días)'
        ],
        requiredResources: ['Curso enfocado', 'Mentor técnico', 'Proyecto real aplicado']
      };
      
    case 'TRAMPA':
      return {
        primaryFocus: 'REDIRIGIR',
        estimatedMonths: 4,
        keyMilestones: [
          'Auditar skills actuales vs valores (30 días)',
          'Identificar 1 intersección skill+propósito (60 días)',
          'Lanzar primer proyecto alineado (120 días)'
        ],
        requiredResources: ['Auditoría de skills', 'Coaching de propósito', 'Comunidad de pares']
      };
      
    case 'MAESTRIA':
      return {
        primaryFocus: 'ESCALAR',
        estimatedMonths: 12,
        keyMilestones: [
          'Definir micro-monopolio (30 días)',
          'Construir comunidad 100 true fans (180 días)',
          'Sistematizar para mentoría (365 días)'
        ],
        requiredResources: ['Estrategia MMA', 'Plataforma comunidad', 'Sistema mentoría']
      };
  }
}

function calculateMMA(coords: MTPCoordinates, zone: MTPZone): number {
  if (zone !== 'MAESTRIA') return Math.min(coords.habilidad, coords.proposito);
  
  // En zona MAESTRIA: potencial = media geométrica × factor de alineación
  const geometricMean = Math.sqrt(coords.habilidad * coords.proposito);
  const alignmentFactor = 1 + (Math.min(coords.habilidad, coords.proposito) / 100) * 0.5;
  
  return Math.round(Math.min(geometricMean * alignmentFactor, 100));
}

/**
 * Asigna SOUL Tier basado en resultado MTP + criterios adicionales
 */
export function assignSOULTier(result: MTPResult, systemicImpact?: number): SOULTier {
  let tier = result.soulTier;
  
  if (systemicImpact !== undefined && systemicImpact > 80 && result.zone === 'MAESTRIA') {
    tier = 'VISIONARY';
  }
  
  return tier;
}

/**
 * Genera reporte MTP legible para usuario
 */
export function generateMTPReport(result: MTPResult): string {
  const zoneLabels: Record<MTPZone, string> = {
    DESPERDICIO: '🌱 Zona Desperdicio — Explorar',
    TRAMPA: '⚠️ Zona Trampa — Redirigir',
    PROPOSITO: '🎯 Zona Propósito — Desarrollar',
    MAESTRIA: '🏆 Zona Maestría — Escalar'
  };
  
  const tierLabels: Record<SOULTier, string> = {
    EXPLORER: 'Explorador',
    BUILDER: 'Constructor',
    OPERATOR: 'Operador',
    MASTER: 'Maestro',
    VISIONARY: 'Visionario'
  };
  
  return `
# Reporte MTP — Matriz Talento-Propósito

## Coordenadas
- **Habilidad:** ${result.coordinates.habilidad}/100
- **Propósito:** ${result.coordinates.proposito}/100

## Diagnóstico
- **Zona:** ${zoneLabels[result.zone]}
- **SOUL Tier:** ${tierLabels[result.soulTier]}
- **Potencial MMA:** ${result.microMonopolyPotential}/100

## Ruta Recomendada
- **Foco Principal:** ${result.recommendedPath.primaryFocus}
- **Tiempo Estimado:** ${result.recommendedPath.estimatedMonths} meses

### Hitos Clave
${result.recommendedPath.keyMilestones.map((m, i) => `${i+1}. ${m}`).join('\n')}

### Recursos Requeridos
${result.recommendedPath.requiredResources.map(r => `- ${r}`).join('\n')}

---
*Generado por HSCSG MTP Engine v1.0*
  `.trim();
}