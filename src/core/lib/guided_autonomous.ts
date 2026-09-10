/**
 * Modelo Guiado-Autónomo (MGA) — Equivalente HSCSG a "Waze vs Uber"
 * 
 * Patrón de delegación: el usuario MANEJA (autonomía), el sistema GUIA (navegación).
 * No "te llevan y te bajan" (Uber), te orientamos mientras tú decides (Waze).
 * 
 * Integra: E²R (Explore→Execute→Reflect) + Coworker Delegation
 */

export type NavigationMode = 'AUTONOMOUS' | 'GUIDED' | 'CO_PILOT' | 'AUTOPILOT';

export interface NavigationContext {
  userId: string;
  currentGoal: string;
  currentPhase: 'EXPLORE' | 'EXECUTE' | 'REFLECT';
  autonomyLevel: number;        // 0-100 (cuánta autonomía quiere el usuario)
  expertiseLevel: number;       // 0-100 (experiencia en el dominio)
  riskTolerance: number;        // 0-100
  preferredGuidance: 'MINIMAL' | 'BALANCED' | 'DETAILED';
}

export interface RouteOption {
  id: string;
  name: string;
  description: string;
  estimatedTime: number;        // minutos/horas
  effort: number;               // 1-100
  risk: number;                 // 1-100
  learningValue: number;        // 1-100
  autonomyPreserved: number;    // 0-100 (cuánta autonomía mantiene el usuario)
  prerequisites: string[];
  checkpoints: Checkpoint[];
}

export interface Checkpoint {
  id: string;
  description: string;
  expectedAt: number;           // % del progreso (0-100)
  validation: 'AUTO' | 'USER' | 'COWORKER';
  criteria: string;
}

export interface NavigationInstruction {
  step: number;
  instruction: string;
  type: 'TURN' | 'CONTINUE' | 'REROUTE' | 'CHECKPOINT' | 'DECISION_POINT';
  context: string;
  alternatives?: RouteOption[];
  requiresUserDecision: boolean;
  coworkerAssigned?: string;
}

export interface MGASession {
  id: string;
  userId: string;
  goal: string;
  mode: NavigationMode;
  currentRoute: RouteOption;
  currentStep: number;
  instructions: NavigationInstruction[];
  coworkerAssignments: CoworkerAssignment[];
  progress: number;             // 0-100
  startedAt: Date;
  lastUpdate: Date;
  completedAt?: Date;
  rerouteCount: number;
  decisionsMade: DecisionRecord[];
}

export interface CoworkerAssignment {
  coworkerId: string;
  role: 'NAVIGATOR' | 'RESEARCHER' | 'EXECUTOR' | 'VALIDATOR' | 'COACH';
  task: string;
  authority: 'ADVISORY' | 'EXECUTE' | 'DECIDE';
  startedAt: Date;
  completedAt?: Date;
  status: 'PENDING' | 'ACTIVE' | 'COMPLETED' | 'BLOCKED';
}

export interface DecisionRecord {
  timestamp: Date;
  decisionPoint: string;
  optionsConsidered: string[];
  chosen: string;
  reasoning: string;
  outcome?: 'SUCCESS' | 'PARTIAL' | 'FAILURE' | 'PENDING';
  lessonLearned?: string;
}

/**
 * Configuración del navegador MGA
 */
export interface MGAConfig {
  defaultMode: NavigationMode;
  autoRerouteThreshold: number;     // % desviación para reroute automático (default 15%)
  checkpointFrequency: number;      // cada cuántos % validar (default 20%)
  maxAlternatives: number;          // máx opciones en decision points (default 3)
  coworkerPool: string[];           // IDs de coworkers disponibles
  learningEnabled: boolean;         // aprender de decisiones (default true)
  userConsentRequired: boolean;     // requerir consentimiento para reroute (default true)
}

export const DEFAULT_MGA_CONFIG: MGAConfig = {
  defaultMode: 'GUIDED',
  autoRerouteThreshold: 15,
  checkpointFrequency: 20,
  maxAlternatives: 3,
  coworkerPool: [],
  learningEnabled: true,
  userConsentRequired: true
};

/**
 * Inicia sesión de navegación MGA
 */
export function startNavigation(
  context: NavigationContext,
  availableRoutes: RouteOption[],
  config: MGAConfig = { ...DEFAULT_MGA_CONFIG }
): MGASession {
  // Seleccionar ruta inicial basada en contexto
  const initialRoute = selectOptimalRoute(context, availableRoutes);
  
  // Generar instrucciones iniciales
  const instructions = generateInstructions(initialRoute, context, 0);
  
  // Asignar coworkers si disponibles
  const coworkerAssignments = assignCoworkers(initialRoute, config.coworkerPool);
  
  return {
    id: `mga_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    userId: context.userId,
    goal: context.currentGoal,
    mode: config.defaultMode,
    currentRoute: initialRoute,
    currentStep: 0,
    instructions,
    coworkerAssignments,
    progress: 0,
    startedAt: new Date(),
    lastUpdate: new Date(),
    rerouteCount: 0,
    decisionsMade: []
  };
}

function selectOptimalRoute(
  context: NavigationContext,
  routes: RouteOption[]
): RouteOption {
  // Score cada ruta según contexto
  const scored = routes.map(route => ({
    route,
    score: calculateRouteScore(route, context)
  }));
  
  // Ordenar por score descendente
  scored.sort((a, b) => b.score - a.score);
  
  return scored[0].route;
}

function calculateRouteScore(route: RouteOption, context: NavigationContext): number {
  // Ponderación según contexto
  const autonomyMatch = 100 - Math.abs(route.autonomyPreserved - context.autonomyLevel);
  const expertiseMatch = 100 - Math.abs(route.effort - context.expertiseLevel);
  const riskTolerance = 100 - Math.max(0, route.risk - context.riskTolerance);
  const learningValue = context.currentPhase === 'EXPLORE' ? route.learningValue : 50;
  
  return Math.round(
    autonomyMatch * 0.3 +
    expertiseMatch * 0.25 +
    riskTolerance * 0.25 +
    learningValue * 0.2
  );
}

function generateInstructions(
  route: RouteOption,
  context: NavigationContext,
  progress: number
): NavigationInstruction[] {
  const instructions: NavigationInstruction[] = [];
  
  // Instrucción inicial
  instructions.push({
    step: 1,
    instruction: `Iniciando ruta: ${route.name}. ${route.description}`,
    type: 'CONTINUE',
    context: `Objetivo: ${route.description}. Tiempo estimado: ${route.estimatedTime}min`,
    requiresUserDecision: false
  });
  
  // Instrucciones por checkpoints
  route.checkpoints.forEach((checkpoint, index) => {
    instructions.push({
      step: index + 2,
      instruction: `Checkpoint: ${checkpoint.description}`,
      type: 'CHECKPOINT',
      context: `Validación: ${checkpoint.validation}. Criterio: ${checkpoint.criteria}`,
      requiresUserDecision: checkpoint.validation === 'USER',
      alternatives: checkpoint.validation === 'USER' ? generateAlternatives(checkpoint) : undefined
    });
  });
  
  // Decision points basados en fase
  if (progress === 0) {
    instructions.push({
      step: instructions.length + 1,
      instruction: '¿Confirmas iniciar esta ruta o prefieres ver alternativas?',
      type: 'DECISION_POINT',
      context: 'Confirmación inicial antes de comenzar',
      requiresUserDecision: true,
      alternatives: generateAlternatives({ 
        description: 'Rutas alternativas',
        criteria: 'Diferente enfoque/riesgo/esfuerzo'
      } as Checkpoint)
    });
  }
  
  return instructions;
}

function generateAlternatives(checkpoint: Checkpoint): RouteOption[] {
  // En implementación real, buscar rutas alternativas en registry
  // Por ahora, placeholders
  return [
    {
      id: `alt_${Date.now()}_1`,
      name: 'Ruta conservadora',
      description: 'Mismo objetivo, menor riesgo, más tiempo',
      estimatedTime: 0,
      effort: 40,
      risk: 20,
      learningValue: 60,
      autonomyPreserved: 80,
      prerequisites: [],
      checkpoints: []
    },
    {
      id: `alt_${Date.now()}_2`,
      name: 'Ruta acelerada',
      description: 'Mismo objetivo, más riesgo, menos tiempo',
      estimatedTime: 0,
      effort: 80,
      risk: 70,
      learningValue: 80,
      autonomyPreserved: 60,
      prerequisites: ['Experiencia previa'],
      checkpoints: []
    }
  ];
}

function assignCoworkers(route: RouteOption, pool: string[]): CoworkerAssignment[] {
  if (!pool.length) return [];
  
  const assignments: CoworkerAssignment[] = [];
  const roles: CoworkerAssignment['role'][] = ['NAVIGATOR', 'RESEARCHER', 'EXECUTOR', 'VALIDATOR'];
  
  route.checkpoints.forEach((checkpoint, index) => {
    if (pool[index % pool.length]) {
      assignments.push({
        coworkerId: pool[index % pool.length],
        role: roles[index % roles.length],
        task: `Validar checkpoint: ${checkpoint.description}`,
        authority: checkpoint.validation === 'COWORKER' ? 'DECIDE' : 'ADVISORY',
        startedAt: new Date(),
        status: 'PENDING'
      });
    }
  });
  
  return assignments;
}

/**
 * Procesa decisión del usuario en decision point
 */
export function processDecision(
  session: MGASession,
  decisionPointId: string,
  chosenOption: string,
  reasoning: string
): MGASession {
  const decisionPoint = session.instructions.find(i => 
    i.type === 'DECISION_POINT' && i.step.toString() === decisionPointId
  );
  
  if (!decisionPoint) {
    throw new DecisionPointNotFoundError(decisionPointId);
  }
  
  const decision: DecisionRecord = {
    timestamp: new Date(),
    decisionPoint: decisionPoint.instruction,
    optionsConsidered: decisionPoint.alternatives?.map(a => a.name) || [],
    chosen: chosenOption,
    reasoning,
    outcome: 'PENDING'
  };
  
  // Si elige ruta alternativa → reroute
  if (chosenOption !== 'CONTINUE_CURRENT') {
    return rerouteSession(session, chosenOption, reasoning);
  }
  
  // Continuar ruta actual
  const updatedSession = {
    ...session,
    currentStep: session.currentStep + 1,
    lastUpdate: new Date(),
    decisionsMade: [...session.decisionsMade, { ...decision, outcome: 'SUCCESS' }]
  };
  
  // Generar siguiente instrucción
  const nextInstruction = generateNextInstruction(updatedSession);
  if (nextInstruction) {
    updatedSession.instructions.push(nextInstruction);
  }
  
  return updatedSession;
}

function generateNextInstruction(session: MGASession): NavigationInstruction | null {
  const route = session.currentRoute;
  const currentProgress = session.progress;
  const nextCheckpoint = route.checkpoints.find(cp => cp.expectedAt > session.progress);
  
  if (!nextCheckpoint) {
    // Ruta completada
    return {
      step: session.instructions.length + 1,
      instruction: '¡Ruta completada! Objetivo alcanzado.',
      type: 'CONTINUE',
      context: 'Navegación finalizada. Iniciar fase REFLECT.',
      requiresUserDecision: false
    };
  }
  
  return {
    step: session.instructions.length + 1,
    instruction: `Próximo checkpoint: ${nextCheckpoint.description}`,
    type: 'CHECKPOINT',
    context: `Validación en ${nextCheckpoint.expectedAt}% completado`,
    requiresUserDecision: false
  };
}

/**
 * Re-ruteo de sesión (cambio de ruta)
 */
export function rerouteSession(
  session: MGASession,
  newRouteId: string,
  reasoning: string
): MGASession {
  // En implementación real, buscar nueva ruta en registry
  const newRoute: RouteOption = {
    id: newRouteId,
    name: 'Ruta alternativa',
    description: 'Ruta recalculada basada en decisión del usuario',
    estimatedTime: 0,
    effort: 50,
    risk: 40,
    learningValue: 70,
    autonomyPreserved: 70,
    prerequisites: [],
    checkpoints: []
  };
  
  const decision: DecisionRecord = {
    timestamp: new Date(),
    decisionPoint: 'Reroute solicitado',
    optionsConsidered: ['Continuar ruta actual', 'Ruta alternativa'],
    chosen: newRouteId,
    reasoning,
    outcome: 'PENDING'
  };
  
  const newInstructions = generateInstructions(newRoute, {
    userId: session.userId,
    currentGoal: session.goal,
    currentPhase: 'EXECUTE',
    autonomyLevel: 70,
    expertiseLevel: 50,
    riskTolerance: 50,
    preferredGuidance: 'BALANCED'
  }, 0);
  
  return {
    ...session,
    currentRoute: newRoute,
    currentStep: 0,
    instructions: newInstructions,
    progress: 0,
    lastUpdate: new Date(),
    rerouteCount: session.rerouteCount + 1,
    decisionsMade: [...session.decisionsMade, { ...decision, outcome: 'SUCCESS' }]
  };
}

/**
 * Procesa checkpoint completado
 */
export function completeCheckpoint(
  session: MGASession,
  checkpointId: string,
  validationResult: 'PASS' | 'FAIL' | 'PARTIAL',
  notes: string
): MGASession {
  const checkpoint = session.currentRoute.checkpoints.find(c => c.id === checkpointId);
  if (!checkpoint) throw new CheckpointNotFoundError(checkpointId);
  
  const progressIncrement = checkpoint.expectedAt - session.progress;
  const newProgress = Math.min(100, session.progress + progressIncrement);
  
  const decision: DecisionRecord = {
    timestamp: new Date(),
    decisionPoint: `Checkpoint: ${checkpoint.description}`,
    optionsConsidered: ['PASS', 'FAIL', 'PARTIAL'],
    chosen: validationResult,
    reasoning: notes,
    outcome: validationResult === 'PASS' ? 'SUCCESS' : validationResult === 'PARTIAL' ? 'PARTIAL' : 'FAILURE',
    lessonLearned: validationResult !== 'PASS' ? notes : undefined
  };
  
  return {
    ...session,
    progress: newProgress,
    currentStep: session.currentStep + 1,
    lastUpdate: new Date(),
    decisionsMade: [...session.decisionsMade, decision],
    instructions: newProgress >= 100 ? [] : session.instructions
  };
}

/**
 * Genera siguiente instrucción basada en progreso
 */
export function getNextInstruction(session: MGASession): NavigationInstruction | null {
  if (session.progress >= 100) return null;
  
  const nextCheckpoint = session.currentRoute.checkpoints
    .filter(cp => cp.expectedAt > session.progress)
    .sort((a, b) => a.expectedAt - b.expectedAt)[0];
  
  if (!nextCheckpoint) return null;
  
  return {
    step: session.instructions.length + 1,
    instruction: `Checkpoint próximo: ${nextCheckpoint.description} (en ${nextCheckpoint.expectedAt - session.progress}%)`,
    type: 'CHECKPOINT',
    context: `Validación: ${nextCheckpoint.validation}. Criterio: ${nextCheckpoint.criteria}`,
    requiresUserDecision: false
  };
}

/**
 * Cambia modo de navegación
 */
export function setNavigationMode(
  session: MGASession,
  mode: NavigationMode
): MGASession {
  return {
    ...session,
    mode,
    lastUpdate: new Date(),
    decisionsMade: [...session.decisionsMade, {
      timestamp: new Date(),
      decisionPoint: 'Cambio de modo navegación',
      optionsConsidered: ['AUTONOMOUS', 'GUIDED', 'CO_PILOT', 'AUTOPILOT'],
      chosen: mode,
      reasoning: 'Cambio de modo solicitado por usuario',
      outcome: 'SUCCESS'
    }]
  };
}

/**
 * Asigna coworker a tarea específica
 */
export function assignCoworkerToTask(
  session: MGASession,
  coworkerId: string,
  role: CoworkerAssignment['role'],
  task: string,
  authority: CoworkerAssignment['authority']
): MGASession {
  const assignment: CoworkerAssignment = {
    coworkerId,
    role,
    task,
    authority,
    startedAt: new Date(),
    status: 'ACTIVE'
  };
  
  return {
    ...session,
    coworkerAssignments: [...session.coworkerAssignments, assignment],
    lastUpdate: new Date()
  };
}

/**
 * Completa tarea de coworker
 */
export function completeCoworkerTask(
  session: MGASession,
  coworkerId: string,
  outcome: 'SUCCESS' | 'PARTIAL' | 'FAILURE',
  notes: string
): MGASession {
  const updatedAssignments = session.coworkerAssignments.map(a => 
    a.coworkerId === coworkerId 
      ? { ...a, status: 'COMPLETED', completedAt: new Date() }
      : a
  );
  
  return {
    ...session,
    coworkerAssignments: updatedAssignments,
    lastUpdate: new Date(),
    decisionsMade: [...session.decisionsMade, {
      timestamp: new Date(),
      decisionPoint: `Tarea coworker ${coworkerId}`,
      optionsConsidered: ['SUCCESS', 'PARTIAL', 'FAILURE'],
      chosen: outcome,
      reasoning: notes,
      outcome
    }]
  };
}

/**
 * Genera reporte de sesión MGA
 */
export function generateMGAReport(session: MGASession): string {
  const modeLabels = {
    AUTONOMOUS: '🚗 AUTÓNOMO (Usuario maneja todo)',
    GUIDED: '🗺️ GUIADO (Waze - usuario maneja, sistema navega)',
    CO_PILOT: '👥 CO-PILOTO (Decisiones compartidas)',
    AUTOPILOT: '🤖 AUTOPILOTO (Sistema maneja, usuario supervisa)'
  };
  
  return `
# Reporte Sesión MGA — Modelo Guiado-Autónomo

## Sesión
- **ID:** ${session.id}
- **Usuario:** ${session.userId}
- **Objetivo:** ${session.goal}
- **Modo:** ${modeLabels[session.mode]}
- **Ruta:** ${session.currentRoute.name}
- **Progreso:** ${session.progress}%
- **Reroutes:** ${session.rerouteCount}

## Ruta Actual
- **${session.currentRoute.name}** (${session.currentRoute.estimatedTime} min)
- **Esfuerzo:** ${session.currentRoute.effort}/100 | **Riesgo:** ${session.currentRoute.risk}/100
- **Autonomía preservada:** ${session.currentRoute.autonomyPreserved}%

## Checkpoints
${session.currentRoute.checkpoints.map((cp, i) => `
### ${i+1}. ${cp.description} (${cp.expectedAt}%)
- **Validación:** ${cp.validation}
- **Criterio:** ${cp.criteria}
`).join('\n')}

## Decisiones Tomadas (${session.decisionsMade.length})
${session.decisionsMade.map((d, i) => `
### ${i+1}. ${d.decisionPoint}
- **Elegido:** ${d.chosen}
- **Razonamiento:** ${d.reasoning}
- **Resultado:** ${d.outcome || 'PENDIENTE'}
${d.lessonLearned ? `- **Lección:** ${d.lessonLearned}` : ''}
`).join('\n')}

## Coworkers Asignados (${session.coworkerAssignments.length})
${session.coworkerAssignments.map(c => `
- **${c.coworkerId}** (${c.role}) — ${c.task} — ${c.status} ${c.authority !== 'ADVISORY' ? `[${c.authority}]` : ''}
`).join('\n')}

## Progreso
- **Progreso actual:** ${session.progress}%
- **Reroutes:** ${session.rerouteCount}
- **Decisiones registradas:** ${session.decisionsMade.length}

---
*Generado por HSCSG MGA Engine v1.0*
  `.trim();
}

/**
 * Errores personalizados
 */
export class DecisionPointNotFoundError extends Error {
  constructor(id: string) {
    super(`Decision point not found: ${id}`);
    this.name = 'DecisionPointNotFoundError';
  }
}

export class CheckpointNotFoundError extends Error {
  constructor(id: string) {
    super(`Checkpoint not found: ${id}`);
    this.name = 'CheckpointNotFoundError';
  }
}

/**
 * Factory para rutas comunes
 */
export const RouteTemplates = {
  learningPath: (topic: string): RouteOption => ({
    id: `learning_${topic.toLowerCase().replace(/\s+/g, '_')}`,
    name: `Aprender ${topic}`,
    description: `Ruta de aprendizaje estructurado para ${topic}`,
    estimatedTime: 120,
    effort: 60,
    risk: 20,
    learningValue: 95,
    autonomyPreserved: 85,
    prerequisites: ['Interés genuino', 'Tiempo dedicado'],
    checkpoints: [
      { id: 'cp1', description: 'Fundamentos comprendidos', expectedAt: 25, validation: 'AUTO', criteria: 'Test conceptual ≥ 80%' },
      { id: 'cp2', description: 'Primer proyecto aplicado', expectedAt: 50, validation: 'USER', criteria: 'Proyecto funcional demostrado' },
      { id: 'cp3', description: 'Aplicación real integrada', expectedAt: 75, validation: 'COWORKER', criteria: 'Integración en contexto real' },
      { id: 'cp4', description: 'Enseñar a otro (Feynman)', expectedAt: 100, validation: 'USER', criteria: 'Explicación clara a otro' }
    ],
    estimatedTime: 480,
    effort: 70,
    risk: 15,
    learningValue: 100,
    autonomyPreserved: 90,
    prerequisites: [],
    checkpoints: []
  }),
  
  projectLaunch: (projectName: string): RouteOption => ({
    id: `launch_${projectName.toLowerCase().replace(/\s+/g, '_')}`,
    name: `Lanzar ${projectName}`,
    description: `Ruta de lanzamiento para ${projectName}`,
    estimatedTime: 0,
    effort: 80,
    risk: 60,
    learningValue: 70,
    autonomyPreserved: 75,
    prerequisites: ['Validación problema', 'MVP definido', 'Primeros usuarios'],
    checkpoints: [
      { id: 'cp1', description: 'MVP funcional', expectedAt: 30, validation: 'AUTO', criteria: 'Core features funcionando' },
      { id: 'cp2', description: 'Primeros 10 usuarios reales', expectedAt: 50, validation: 'USER', criteria: '10 usuarios activos + feedback' },
      { id: 'cp3', description: 'Primer ingreso / tracción', expectedAt: 70, validation: 'COWORKER', criteria: '€/users/retention targets' },
      { id: 'cp4', description: 'Sistematizar para escala', expectedAt: 100, validation: 'USER', criteria: 'Procesos documentados + métricas' }
    ],
    estimatedTime: 720,
    effort: 85,
    risk: 55,
    learningValue: 80,
    autonomyPreserved: 70,
    prerequisites: [],
    checkpoints: []
  }),
  
  skillAcquisition: (skill: string): RouteOption => ({
    id: `skill_${skill.toLowerCase().replace(/\s+/g, '_')}`,
    name: `Dominar ${skill}`,
    description: `Adquisición de habilidad ${skill} nivel profesional`,
    estimatedTime: 0,
    effort: 70,
    risk: 25,
    learningValue: 90,
    autonomyPreserved: 80,
    prerequisites: ['Tiempo dedicado', 'Recursos de práctica'],
    checkpoints: [
      { id: 'cp1', description: 'Conceptos fundamentales', expectedAt: 20, validation: 'AUTO', criteria: 'Test teórico ≥ 85%' },
      { id: 'cp2', description: 'Práctica deliberada (10h)', expectedAt: 40, validation: 'USER', criteria: 'Logs de práctica + autoevaluación' },
      { id: 'cp3', description: 'Proyecto real aplicado', expectedAt: 70, validation: 'COWORKER', criteria: 'Proyecto real entregado + feedback' },
      { id: 'cp4', description: 'Enseñar/Documentar', expectedAt: 100, validation: 'USER', criteria: 'Guía/tutorial creado para otros' }
    ],
    estimatedTime: 300,
    effort: 75,
    risk: 20,
    learningValue: 95,
    autonomyPreserved: 85,
    prerequisites: [],
    checkpoints: []
  })
};