/**
 * Optimismo Fundamentado (OFER) — Equivalente HSCSG a "Pronoia vs Paranoia"
 * 
 * Módulo de mindset para el autómata: calibra la tendencia cognitiva
 * desde egocentrismo reactivo (paranoia) hacia optimismo fundamentado (pronoia).
 * 
 * Principio: "La paranoia es foco en el ego (mundo contra mí).
 * La pronoia es foco en la insignificancia liberadora (mundo indiferente → oportunidad)."
 */

export type MindsetMode = 'PARANOIA' | 'NEUTRAL' | 'PRONOIA';

export interface MindsetAssessment {
  // Indicadores de paranoia (egocentrismo reactivo)
  paranoiaIndicators: {
    personalization: number;      // 1-100: "Todo es contra mí"
    catastrophizing: number;      // 1-100: "Lo peor va a pasar"
    hypervigilance: number;       // 1-100: "Escaneo constante de amenazas"
    victimNarrative: number;      // 1-100: "Soy víctima del sistema"
    controlIllusion: number;      // 1-100: "Debo controlar todo"
  };
  
  // Indicadores de pronoia (optimismo fundamentado)
  pronoiaIndicators: {
    insignificanceLiberation: number;  // 1-100: "Mi insignificancia me libera"
    opportunityScanning: number;       // 1-100: "Busco oportunidades, no amenazas"
    serviceOrientation: number;        // 1-100: "Mi propósito es servir a otros"
    flowTrust: number;                 // 1-100: "Confío en el proceso / flujo"
    agencyWithinConstraints: number;   // 1-100: "Agencia dentro de lo que no controlo"
  };
  
  // Contexto situacional
  context: {
    recentStressors: string[];
    recentWins: string[];
    currentChallenge: string;
    supportNetwork: number;  // 1-100
  };
}

export interface OFERCalibration {
  mode: MindsetMode;
  paranoiaScore: number;      // 0-100
  pronoiaScore: number;       // 0-100
  netScore: number;           // -100 a +100 (pronoia - paranoia)
  dominantPattern: string;    // descripción del patrón dominante
  recommendedShifts: MindsetShift[];
  calibrationTimestamp: Date;
}

export interface MindsetShift {
  from: string;               // patrón actual
  to: string;                 // patrón objetivo
  technique: ShiftTechnique;  // técnica recomendada
  difficulty: 'LOW' | 'MEDIUM' | 'HIGH';
  estimatedDays: number;
  practicePrompt: string;     // ejercicio diario
}

export type ShiftTechnique = 
  | 'COGNITIVE_REFRAMING'     // Reencuadre cognitivo
  | 'INSIGNIFICANCE_MEDITATION' // Meditación de insignificancia
  | 'SERVICE_MICRO_ACTIONS'   // Micro-acciones de servicio
  | 'FLOW_JOURNALING'         // Diario de flujo/pronoia
  | 'CONTROL_AUDIT'           // Auditoría de control (qué controlo vs no)
  | 'EVIDENCE_LOGGING'        // Registro de evidencia pronoia
  | 'SERVICE_ORIENTATION'     // Reorientación al servicio
  | 'CONSTRAINT_ACCEPTANCE';  // Aceptación de restricciones

export interface OFERConfig {
  paranoiaThreshold: number;     // ≥ this = PARANOIA mode (default 60)
  pronoiaThreshold: number;      // ≥ this = PRONOIA mode (default 60)
  assessmentWindowDays: number;  // ventana de evaluación (default 7)
  recalibrationIntervalHours: number; // cada cuánto recalibrar (default 24)
  enableAutoShift: boolean;      // sugerir shifts automáticamente (default true)
}

export const DEFAULT_OFER_CONFIG: OFERConfig = {
  paranoiaThreshold: 60,
  pronoiaThreshold: 60,
  assessmentWindowDays: 7,
  recalibrationIntervalHours: 24,
  enableAutoShift: true
};

/**
 * Evalúa mindset actual y calibra OFER
 */
export function calibrateOFER(
  assessment: MindsetAssessment,
  config: OFERConfig = DEFAULT_OFER_CONFIG
): OFERCalibration {
  const paranoiaScore = calculateParanoiaScore(assessment.paranoiaIndicators);
  const pronoiaScore = calculatePronoiScore(assessment.pronoiaIndicators);
  const netScore = pronoiaScore - paranoiaScore;
  
  let mode: MindsetMode;
  if (paranoiaScore >= config.paranoiaThreshold && paranoiaScore > pronoiaScore) {
    mode = 'PARANOIA';
  } else if (pronoiaScore >= config.pronoiaThreshold && pronoiaScore > paranoiaScore) {
    mode = 'PRONOIA';
  } else {
    mode = 'NEUTRAL';
  }
  
  const dominantPattern = identifyDominantPattern(assessment, mode);
  const recommendedShifts = generateShifts(assessment, mode, netScore);
  
  return {
    mode,
    paranoiaScore,
    pronoiaScore,
    netScore,
    dominantPattern,
    recommendedShifts,
    calibrationTimestamp: new Date()
  };
}

function calculateParanoiaScore(indicators: MindsetAssessment['paranoiaIndicators']): number {
  const weights = {
    personalization: 0.25,
    catastrophizing: 0.25,
    hypervigilance: 0.20,
    victimNarrative: 0.15,
    controlIllusion: 0.15
  };
  
  return Math.round(
    indicators.personalization * weights.personalization +
    indicators.catastrophizing * weights.catastrophizing +
    indicators.hypervigilance * weights.hypervigilance +
    indicators.victimNarrative * weights.victimNarrative +
    indicators.controlIllusion * weights.controlIllusion
  );
}

function calculatePronoiScore(indicators: MindsetAssessment['pronoiaIndicators']): number {
  const weights = {
    insignificanceLiberation: 0.25,
    opportunityScanning: 0.25,
    serviceOrientation: 0.20,
    flowTrust: 0.15,
    agencyWithinConstraints: 0.15
  };
  
  return Math.round(
    indicators.insignificanceLiberation * weights.insignificanceLiberation +
    indicators.opportunityScanning * weights.opportunityScanning +
    indicators.serviceOrientation * weights.serviceOrientation +
    indicators.flowTrust * weights.flowTrust +
    indicators.agencyWithinConstraints * weights.agencyWithinConstraints
  );
}

function identifyDominantPattern(
  assessment: MindsetAssessment,
  mode: MindsetMode
): string {
  const patterns = {
    PARANOIA: [
      'Víctima del sistema — "Todo conspira contra mí"',
      'Controlador obsesivo — "Si no controlo todo, falla"',
      'Catastrofista crónico — "Siempre espera lo peor"',
      'Hipervigilante agotado — "Escaneo constante de amenazas"',
      'Víctima narrativa — "El mundo es injusto conmigo"'
    ],
    NEUTRAL: [
      'Reactivo equilibrado — Responde a estímulos sin sesgo extremo',
      'Observador cauteloso — Precaución sin paranoia ni exceso de confianza',
      'En transición — Moviéndose entre patrones'
    ],
    PRONOIA: [
      'Insignificancia liberadora — "Mi pequeñez me libera"',
      'Escáner de oportunidades — Ve puertas donde otros ven paredes',
      'Orientado al servicio — "Mi propósito es servir"',
      'Confianza en el flujo — "Las cosas se alinean cuando sirvo"',
      'Agencia dentro de límites — "Actúo donde tengo poder, suelto lo demás"'
    ]
  };
  
  const pool = patterns[mode];
  return pool[Math.floor(Math.random() * pool.length)];
}

function generateShifts(
  assessment: MindsetAssessment,
  mode: MindsetMode,
  netScore: number
): MindsetShift[] {
  const shifts: MindsetShift[] = [];
  
  if (mode === 'PARANOIA') {
    // Shifts prioritarios para salir de paranoia
    shifts.push({
      from: 'Personalización excesiva ("Es contra mí")',
      to: 'Despersonalización compasiva ("Es circunstancial, no personal")',
      technique: 'COGNITIVE_REFRAMING',
      difficulty: 'MEDIUM',
      estimatedDays: 14,
      practicePrompt: 'Cuando algo "malo" pase, escribe: "Esto le pasa a cualquiera en esta situación, no es contra mí."'
    });
    
    shifts.push({
      from: 'Ilusión de control total',
      to: 'Auditoría de control real (qué controlo vs qué no)',
      technique: 'CONTROL_AUDIT',
      difficulty: 'LOW',
      estimatedDays: 7,
      practicePrompt: 'Cada mañana: lista 3 cosas que controlo hoy y 3 que suelto conscientemente.'
    });
    
    shifts.push({
      from: 'Narrativa de víctima ("El mundo contra mí")',
      to: 'Agencia dentro de restricciones ("Qué puedo elegir hoy")',
      technique: 'CONSTRAINT_ACCEPTANCE',
      difficulty: 'HIGH',
      estimatedDays: 21,
      practicePrompt: 'Identifica una queja recurrente. Pregunta: "¿Qué parte de esto SÍ puedo elegir?"'
    });
    
    // Primer paso hacia pronoia
    shifts.push({
      from: 'Escaneo de amenazas',
      to: 'Escaneo de oportunidades (micro)',
      technique: 'EVIDENCE_LOGGING',
      difficulty: 'LOW',
      estimatedDays: 7,
      practicePrompt: 'Cada noche: anota 3 cosas que salieron bien o puertas que se abrieron hoy.'
    });
  }
  
  if (mode === 'NEUTRAL' || mode === 'PRONOIA') {
    // Consolidar y profundizar pronoia
    shifts.push({
      from: 'Optimismo pasivo',
      to: 'Optimismo fundamentado activo (servicio + evidencia)',
      technique: 'SERVICE_ORIENTATION',
      difficulty: 'MEDIUM',
      estimatedDays: 14,
      practicePrompt: 'Cada mañana: "¿A quién puedo servir hoy de forma que me cueste poco y le aporte mucho?"'
    });
    
    shifts.push({
      from: 'Confianza ciega en el flujo',
      to: 'Confianza calibrada (flujo + evidencia + agencia)',
      technique: 'FLOW_JOURNALING',
      difficulty: 'LOW',
      estimatedDays: 7,
      practicePrompt: 'Diario: "¿Dónde sentí flujo hoy? ¿Qué hice para permitirlo? ¿Qué bloqueé?"'
    });
    
    shifts.push({
      from: 'Servicio reactivo',
      to: 'Servicio estratégico (micro-acciones de alto apalancamiento)',
      technique: 'SERVICE_MICRO_ACTIONS',
      difficulty: 'LOW',
      estimatedDays: 7,
      practicePrompt: 'Identifica 1 acción de <15 min que aporte mucho a otro y cueste poco.'
    });
    
    if (assessment.context.supportNetwork < 50) {
      shifts.push({
        from: 'Aislamiento / autosuficiencia extrema',
        to: 'Red de apoyo mutuo (pronoia colectiva)',
        technique: 'SERVICE_ORIENTATION',
        difficulty: 'MEDIUM',
        estimatedDays: 21,
        practicePrompt: 'Pide ayuda específica a 1 persona esta semana. Ofrece ayuda específica a 1 persona.'
      });
    }
  }
  
  // Ordenar por dificultad ascendente (fácil primero para momentum)
  return shifts.sort((a, b) => {
    const diffOrder = { LOW: 0, MEDIUM: 1, HIGH: 2 };
    return diffOrder[a.difficulty] - diffOrder[b.difficulty];
  });
}

/**
 * Aplica shift recomendado y genera plan de práctica diaria
 */
export function applyShift(
  shift: MindsetShift,
  startDate: Date = new Date()
): DailyPracticePlan {
  const practices: DailyPractice[] = [];
  
  for (let day = 0; day < shift.estimatedDays; day++) {
    const date = new Date(startDate);
    date.setDate(date.getDate() + day);
    
    let prompt = shift.practicePrompt;
    let reflectionPrompt = '';
    
    // Variar prompts según día para evitar automatismo
    if (day % 3 === 1) {
      reflectionPrompt = '¿Qué noté diferente hoy vs ayer?';
    } else if (day % 3 === 2) {
      reflectionPrompt = '¿Qué resistencia apareció? ¿Cómo la manejé?';
    } else {
      reflectionPrompt = '¿Qué evidencia de cambio noto?';
    }
    
    practices.push({
      day: day + 1,
      date,
      technique: shift.technique,
      prompt,
      reflectionPrompt,
      completed: false,
      notes: ''
    });
  }
  
  return {
    shift,
    practices,
    startedAt: startDate,
    completedAt: null,
    completionRate: 0
  };
}

export interface DailyPractice {
  day: number;
  date: Date;
  technique: ShiftTechnique;
  prompt: string;
  reflectionPrompt: string;
  completed: boolean;
  notes: string;
}

export interface DailyPracticePlan {
  shift: MindsetShift;
  practices: DailyPractice[];
  startedAt: Date;
  completedAt: Date | null;
  completionRate: number;
}

export function markPracticeComplete(
  plan: DailyPracticePlan,
  day: number,
  notes: string
): DailyPracticePlan {
  const practice = plan.practices.find(p => p.day === day);
  if (practice) {
    practice.completed = true;
    practice.notes = notes;
  }
  
  const completed = plan.practices.filter(p => p.completed).length;
  const completionRate = Math.round((completed / plan.practices.length) * 100);
  
  return {
    ...plan,
    completionRate,
    completedAt: completionRate === 100 ? new Date() : plan.completedAt
  };
}

/**
 * Genera reporte OFER
 */
export function generateOFERReport(calibration: OFERCalibration): string {
  const modeLabels = {
    PARANOIA: '🔴 PARANOIA (Egocentrismo Reactivo)',
    NEUTRAL: '🟡 NEUTRAL (Transición)',
    PRONOIA: '🟢 PRONOIA (Optimismo Fundamentado)'
  };
  
  return `
# Calibración OFER — Optimismo Fundamentado vs Egocentrismo Reactivo

## Estado Actual
- **Modo:** ${modeLabels[calibration.mode]}
- **Score Paranoia:** ${calibration.paranoiaScore}/100
- **Score Pronoia:** ${calibration.pronoiaScore}/100
- **Score Neto:** ${calibration.netScore >= 0 ? '+' : ''}${calibration.netScore} (Pronoia - Paranoia)
- **Patrón Dominante:** ${calibration.dominantPattern}

## Shifts Recomendados (ordenados por facilidad)
${calibration.recommendedShifts.map((s, i) => `
### ${i+1}. ${s.from} → ${s.to}
- **Técnica:** ${s.technique}
- **Dificultad:** ${s.difficulty}
- **Duración:** ${s.estimatedDays} días
- **Práctica Diaria:** "${s.practicePrompt}"
`).join('\n')}

## Interpretación
${calibration.mode === 'PARANOIA' ? 
`🔴 **Modo Paranoia Activo** — El egocentrismo reactivo domina. 
El foco está en amenazas, control y victimización.
**Prioridad:** Romper el ciclo con CONTROL_AUDIT + EVIDENCE_LOGGING (fácil, 7 días cada uno).
Luego COGNITIVE_REFRAMING + CONSTRAINT_ACCEPTANCE.` : 
  calibration.mode === 'NEUTRAL' ?
`🟡 **Zona Neutral / Transición** — Sin dominancia clara. 
Oportunidad para direccionar hacia PRONOIA intencionalmente.
**Prioridad:** EVIDENCE_LOGGING + SERVICE_MICRO_ACTIONS (fácil, 7 días).` :
`🟢 **Pronoia Activa** — Optimismo fundamentado operativo. 
Foco en servicio, oportunidades, agencia dentro de límites.
**Prioridad:** Consolidar con SERVICE_ORIENTATION + FLOW_JOURNALING.
Profundizar con SERVICE_ORIENTATION (red de apoyo).`
}

---
*Generado por HSCSG OFER Engine v1.0*
  `.trim();
}

/**
 * Factory para assessments comunes
 */
export const AssessmentTemplates = {
  highStress: (): MindsetAssessment => ({
    paranoiaIndicators: {
      personalization: 80,
      catastrophizing: 85,
      hypervigilance: 90,
      victimNarrative: 75,
      controlIllusion: 80
    },
    pronoiaIndicators: {
      insignificanceLiberation: 20,
      opportunityScanning: 25,
      serviceOrientation: 30,
      flowTrust: 20,
      agencyWithinConstraints: 30
    },
    context: {
      recentStressors: ['Presión financiera', 'Conflicto equipo', 'Burnout'],
      recentWins: [],
      currentChallenge: 'Supervivencia del negocio',
      supportNetwork: 30
    }
  }),
  
  postBurnoutRecovery: (): MindsetAssessment => ({
    paranoiaIndicators: {
      personalization: 60,
      catastrophizing: 65,
      hypervigilance: 70,
      victimNarrative: 55,
      controlIllusion: 60
    },
    pronoiaIndicators: {
      insignificanceLiberation: 40,
      opportunityScanning: 35,
      serviceOrientation: 45,
      flowTrust: 30,
      agencyWithinConstraints: 40
    },
    context: {
      recentStressors: ['Burnout previo', 'Recuperación energía'],
      recentWins: ['Límites establecidos', 'Delegación iniciada'],
      currentChallenge: 'Reconstruir confianza',
      supportNetwork: 50
    }
  }),
  
  pronoiaActive: (): MindsetAssessment => ({
    paranoiaIndicators: {
      personalization: 20,
      catastrophizing: 15,
      hypervigilance: 25,
      victimNarrative: 10,
      controlIllusion: 20
    },
    pronoiaIndicators: {
      insignificanceLiberation: 85,
      opportunityScanning: 80,
      serviceOrientation: 85,
      flowTrust: 75,
      agencyWithinConstraints: 80
    },
    context: {
      recentStressors: [],
      recentWins: ['Proyecto lanzado', 'Equipo alineado', 'Comunidad creciendo'],
      currentChallenge: 'Escalar sin perder esencia',
      supportNetwork: 85
    }
  })
};