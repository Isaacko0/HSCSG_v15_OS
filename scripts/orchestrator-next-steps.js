#!/usr/bin/env node
/**
 * HSCSG Next Steps Orchestrator CLI
 * Implementa la skill hscsg-next-steps-orchestrator v0.2.0
 * Uso: node scripts/orchestrator-next-steps.js [comando] [args]
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const STATE_FILE = path.join(__dirname, '..', 'orchestrator-state.json');
const NAVTEKA_ROOT = path.join(__dirname, '..');

// ============ STATE MANAGEMENT ============

function loadState() {
  if (fs.existsSync(STATE_FILE)) {
    return JSON.parse(fs.readFileSync(STATE_FILE, 'utf-8'));
  }
  return initializeState();
}

function saveState(state) {
  state.lastInteraction = new Date().toISOString();
  fs.writeFileSync(STATE_FILE, JSON.stringify(state, null, 2));
}

function initializeState() {
  const baseTasks = {
    "P0_SPECS": [
      {"id": "P0-netbenefit", "title": "Crear lib/netbenefit.ts", "deps": [], "effort": 3, "value": 95, "workstream": "P0_SPECS", "source": "agent", "priority": 90, "blocks": ["P0-cds_jurados", "P0-copiosis"], "status": "pending", "notes": "Motor NetBenefit 8 escalas + CDS_Jurados weights"},
      {"id": "P0-cds_jurados", "title": "Crear lib/cds_jurados.ts", "deps": ["P0-netbenefit"], "effort": 3, "value": 90, "workstream": "P0_SPECS", "source": "agent", "priority": 88, "blocks": [], "status": "pending", "notes": "Jury summon, weights, actas RAO, rotation"},
      {"id": "P0-copiosis", "title": "Crear lib/copiosis.ts", "deps": ["P0-netbenefit"], "effort": 2, "value": 88, "workstream": "P0_SPECS", "source": "agent", "priority": 86, "blocks": ["P0-valueflows", "COACH-automaton"], "status": "pending", "notes": "NetBenefitFlow, GoodType, LuxuryPriceNBR, CapitalAccessTier, BNGradient"},
      {"id": "P0-valueflows", "title": "Extender ValueFlows types", "deps": ["P0-copiosis"], "effort": 1, "value": 85, "workstream": "P0_SPECS", "source": "agent", "priority": 84, "blocks": [], "status": "pending", "notes": "Extended EconomicEvent con goodType, luxuryPriceNBR, capitalAccessTier, netBenefitFlow"}
    ],
    "MIGRATION": [
      {"id": "MIG-P1-BranDNA", "title": "Migrar P1 BranDNA + store", "deps": [], "effort": 5, "value": 92, "workstream": "MIGRATION", "source": "agent", "priority": 92, "blocks": ["MIG-P2-Products", "MIG-P3-Personas", "MIG-P5-Produce", "COACH-integration"], "status": "pending", "notes": "Base para P5 auto-llenado"},
      {"id": "MIG-P2-Products", "title": "Migrar P2 Products", "deps": ["MIG-P1-BranDNA"], "effort": 4, "value": 88, "workstream": "MIGRATION", "source": "agent", "priority": 88, "blocks": ["MIG-P4-Plan", "MIG-P8-Pagos"], "status": "pending", "notes": ""},
      {"id": "MIG-P3-Personas", "title": "Migrar P3 Personas/CRM", "deps": ["MIG-P1-BranDNA"], "effort": 5, "value": 85, "workstream": "MIGRATION", "source": "agent", "priority": 85, "blocks": ["MIG-P4-Plan", "MIG-P11-Prospecta"], "status": "pending", "notes": ""},
      {"id": "MIG-P4-Plan", "title": "Migrar P4 StrategicBrain", "deps": ["MIG-P2-Products", "MIG-P3-Personas"], "effort": 4, "value": 90, "workstream": "MIGRATION", "source": "agent", "priority": 90, "blocks": ["MIG-P5-Produce", "MIG-P7-Pauta"], "status": "pending", "notes": ""},
      {"id": "MIG-P5-Produce", "title": "Migrar P5 VITCH + auto-llenado P1→P5", "deps": ["MIG-P1-BranDNA", "MIG-P4-Plan"], "effort": 5, "value": 95, "workstream": "MIGRATION", "source": "agent", "priority": 95, "blocks": ["MIG-P9-Perfecciona", "MIG-P10-Publica", "COACH-integration"], "status": "pending", "notes": "Auto-llenado BranDNA→VITCH"},
      {"id": "MIG-P6-Persuade", "title": "Migrar P6 CloserAI", "deps": ["MIG-P1-BranDNA"], "effort": 4, "value": 82, "workstream": "MIGRATION", "source": "agent", "priority": 82, "blocks": [], "status": "pending", "notes": ""},
      {"id": "MIG-P7-Pauta", "title": "Migrar P7 MediaBuyer", "deps": ["MIG-P4-Plan"], "effort": 4, "value": 85, "workstream": "MIGRATION", "source": "agent", "priority": 85, "blocks": [], "status": "pending", "notes": ""},
      {"id": "MIG-P8-Pagos", "title": "Migrar P8 RevenueThermometer", "deps": ["MIG-P2-Products"], "effort": 3, "value": 80, "workstream": "MIGRATION", "source": "agent", "priority": 80, "blocks": [], "status": "pending", "notes": ""},
      {"id": "MIG-P9-Perfecciona", "title": "Migrar P9 QA/Iteration", "deps": ["MIG-P5-Produce"], "effort": 3, "value": 78, "workstream": "MIGRATION", "source": "agent", "priority": 78, "blocks": [], "status": "pending", "notes": ""},
      {"id": "MIG-P10-Publica", "title": "Migrar P10 Publica/Radar", "deps": ["MIG-P5-Produce"], "effort": 3, "value": 75, "workstream": "MIGRATION", "source": "agent", "priority": 75, "blocks": [], "status": "pending", "notes": ""},
      {"id": "MIG-P11-Prospecta", "title": "Migrar P11 Scout/LeadGen", "deps": ["MIG-P3-Personas"], "effort": 3, "value": 77, "workstream": "MIGRATION", "source": "agent", "priority": 77, "blocks": [], "status": "pending", "notes": ""}
    ],
    "COACH": [
      {"id": "COACH-automaton", "title": "Crear lib/automaton.ts (SOUL, E²R, MJ Gate)", "deps": ["P0-netbenefit", "P0-copiosis"], "effort": 5, "value": 90, "workstream": "COACH", "source": "agent", "priority": 90, "blocks": ["COACH-hook"], "status": "pending", "notes": "SOUL, tiers, heartbeat, E²R, MJ Gate, spawn"},
      {"id": "COACH-hook", "title": "Crear hook useAutomaton()", "deps": ["COACH-automaton"], "effort": 2, "value": 88, "workstream": "COACH", "source": "agent", "priority": 88, "blocks": ["COACH-integration"], "status": "pending", "notes": "Zustand integration"},
      {"id": "COACH-integration", "title": "Refactor CoachFAB → useAutomaton + BranDNA context", "deps": ["COACH-hook", "MIG-P1-BranDNA"], "effort": 3, "value": 92, "workstream": "COACH", "source": "agent", "priority": 92, "blocks": ["COACH-lucidez"], "status": "pending", "notes": "askAutomaton + BranDNA context + Lucidez toggle"},
      {"id": "COACH-lucidez", "title": "Modo Lucidez Material toggle en CoachFAB", "deps": ["COACH-integration"], "effort": 2, "value": 85, "workstream": "COACH", "source": "agent", "priority": 85, "blocks": [], "status": "pending", "notes": "Botón luna/sol, .lucidez-raw blocks"}
    ],
    "ROLES": [
      {"id": "ROLES-mapping", "title": "Definir mapping DeseOS→Coworkers en coworkerRoles.ts", "deps": [], "effort": 1, "value": 80, "workstream": "ROLES", "source": "agent", "priority": 80, "blocks": ["ROLES-state"], "status": "pending", "notes": "6 roles: Strategist, Creative Director, Closer, Media Buyer, Scout, QA Lead"},
      {"id": "ROLES-state", "title": "Actualizar coworkers.ts con deseosRole + seeds", "deps": ["ROLES-mapping"], "effort": 2, "value": 82, "workstream": "ROLES", "source": "agent", "priority": 82, "blocks": ["ROLES-ui"], "status": "pending", "notes": ""},
      {"id": "ROLES-ui", "title": "UI Coworkers: badges Creative/Operator, filtros", "deps": ["ROLES-state"], "effort": 2, "value": 78, "workstream": "ROLES", "source": "agent", "priority": 78, "blocks": [], "status": "pending", "notes": "Chips color-coded, filtro sidebar"}
    ],
    "DEPLOY": [
      {"id": "DEPLOY-link", "title": "Vercel link + env vars + deploy prod", "deps": [], "effort": 2, "value": 95, "workstream": "DEPLOY", "source": "agent", "priority": 95, "blocks": ["DEPLOY-verify"], "status": "pending", "notes": "Fix 404 DEPLOYMENT_NOT_FOUND"},
      {"id": "DEPLOY-verify", "title": "Verificar rutas 200 + CoachFAB visible", "deps": ["DEPLOY-link"], "effort": 1, "value": 90, "workstream": "DEPLOY", "source": "agent", "priority": 90, "blocks": ["DEPLOY-auto"], "status": "pending", "notes": "/, /coach, /boundaries, /coworkers"},
      {"id": "DEPLOY-auto", "title": "Configurar auto-deploy on push", "deps": ["DEPLOY-verify"], "effort": 1, "value": 85, "workstream": "DEPLOY", "source": "agent", "priority": 85, "blocks": [], "status": "pending", "notes": "Vercel dashboard Settings → Git"}
    ],
    "GAIA_INTEGRATION": [
      {"id": "GAIA-gov-sync", "title": "Implementar governance:sync CDS↔Gaia DAO", "deps": ["P0-copiosis", "COACH-automaton"], "effort": 5, "value": 95, "workstream": "GAIA_INTEGRATION", "source": "agent", "priority": 95, "blocks": ["GAIA-trust-bridge", "GAIA-app-federate"], "status": "pending", "notes": "VC-signed Decision Records, MJ Gate veto, RAO anchor"},
      {"id": "GAIA-trust-bridge", "title": "Implementar trust:bridge NetBenefitFlow↔VC", "deps": ["GAIA-gov-sync", "P0-valueflows"], "effort": 5, "value": 93, "workstream": "GAIA_INTEGRATION", "source": "agent", "priority": 93, "blocks": ["GAIA-app-federate"], "status": "pending", "notes": "DIDComm, Project Weave, Trust Registry ↔ RAO"},
      {"id": "GAIA-infra-connect", "title": "Implementar infra:connect neko↔SynchroLabs", "deps": ["MIG-P10-Publica", "DEPLOY-link"], "effort": 4, "value": 90, "workstream": "GAIA_INTEGRATION", "source": "agent", "priority": 90, "blocks": ["GAIA-intel-match"], "status": "pending", "notes": "WebRTC discovery, Boundaries CEL allowlist"},
      {"id": "GAIA-intel-match", "title": "Implementar intel:match Autómata↔AI Matching", "deps": ["GAIA-infra-connect", "COACH-integration"], "effort": 4, "value": 92, "workstream": "GAIA_INTEGRATION", "source": "agent", "priority": 92, "blocks": ["GAIA-eco-sync"], "status": "pending", "notes": "E²R ↔ Recommendation Engine, verifiable inference"},
      {"id": "GAIA-app-federate", "title": "Implementar app:federate Marketplace↔CaaS-BM", "deps": ["GAIA-trust-bridge", "MIG-P5-Produce"], "effort": 5, "value": 94, "workstream": "GAIA_INTEGRATION", "source": "agent", "priority": 94, "blocks": ["GAIA-eco-sync"], "status": "pending", "notes": "Custom commission, Commonomics, ZNU settlement"},
      {"id": "GAIA-eco-sync", "title": "Implementar eco:sync Base Material↔Gaia Impact", "deps": ["GAIA-app-federate", "GAIA-intel-match"], "effort": 3, "value": 88, "workstream": "GAIA_INTEGRATION", "source": "agent", "priority": 88, "blocks": [], "status": "pending", "notes": "CAC/PGS ↔ Gaia Score, multidimensional pipelines"},
      {"id": "GAIA-funding-proposal", "title": "Propuesta financiación conjunta (Sección 15)", "deps": ["GAIA-gov-sync", "GAIA-trust-bridge"], "effort": 2, "value": 90, "workstream": "GAIA_INTEGRATION", "source": "agent", "priority": 90, "blocks": [], "status": "pending", "notes": "Arquitectura común: datos+confianza+IA+educación+proyectos+territorios+economía+regeneración"},
      {"id": "GAIA-marketplace-level3", "title": "Integrar Gaia AI Agent (Level 3) con CoachFAB", "deps": ["COACH-integration", "GAIA-infra-connect"], "effort": 3, "value": 85, "workstream": "GAIA_INTEGRATION", "source": "agent", "priority": 85, "blocks": [], "status": "pending", "notes": "Business+Personal assistance, Gaia ecosystem matchmaking"}
    ]
  };

  // Flatten all tasks
  const taskRegistry = {};
  Object.values(baseTasks).forEach(arr => arr.forEach(t => taskRegistry[t.id] = t));

  return {
    cycle: 1,
    version: "0.2.0",
    taskRegistry,
    currentWorkstream: "P0_SPECS",
    currentTask: null,
    completedTasks: [],
    userPriorities: [],
    sessionLog: []
  };
}

function getAllTasks(state) {
  return Object.values(state.taskRegistry);
}

function getTask(state, id) {
  return state.taskRegistry[id];
}

function getAvailableTasks(state) {
  return getAllTasks(state).filter(t => 
    t.status === 'pending' && 
    (t.dependencies || []).every(depId => getTask(state, depId)?.status === 'done')
  );
}

function calculateScore(task, state) {
  const unblocks = (task.blocks || []).filter(b => getTask(state, b)?.status === 'pending').length;
  return (task.value * 0.5) + ((6 - task.effort) * 10 * 0.3) + (unblocks * 15 * 0.2);
}

function sortByPriority(tasks, state) {
  return tasks.map(t => ({ ...t, score: calculateScore(t, state) }))
    .sort((a, b) => b.score - a.score);
}

// ============ COMMANDS ============

function cmdStatus(state) {
  const available = getAvailableTasks(state);
  const sorted = sortByPriority(available, state);
  const completed = getAllTasks(state).filter(t => t.status === 'done').length;
  const total = Object.keys(state.taskRegistry).length;
  
  console.log('\n╔═══════════════════════════════════════════════════════════════════╗');
  console.log(`║  HSCSG NEXT STEPS ORCHESTRATOR — Ciclo ${state.cycle}                          ║`);
  console.log(`║  Estado: ${completed}/${total} tareas completadas | Workstream: ${state.currentWorkstream}    ║`);
  console.log('╠═══════════════════════════════════════════════════════════════════╣');
  console.log('║  PRÓXIMAS ACCIONES RECOMENDADAS (orden topológico + score):      ║');
  console.log('║                                                                  ║');
  
  sorted.slice(0, 8).forEach((t, i) => {
    const depCount = (t.dependencies || []).length;
    const effortBar = '●'.repeat(t.effort) + '○'.repeat(5 - t.effort);
    console.log(`║  ${i+1}. [${t.id.padEnd(20)}] ${t.workstream.padEnd(12)} ${effortBar} Esf:${t.effort} Val:${t.value} Dep:${depCount}  ║`);
    console.log(`║       └─> ${t.notes || t.title}                                       ║`);
  });
  
  const userTasks = getAllTasks(state).filter(t => t.source === 'user' && t.status === 'pending');
  if (userTasks.length > 0) {
    console.log('║                                                                  ║');
    console.log('║  TAREAS USUARIO PENDIENTES:                                      ║');
    userTasks.forEach(t => {
      console.log(`║  ${t.id}: "${t.title}"  (${t.workstream})                          ║`);
    });
  }
  
  console.log('║                                                                  ║');
  console.log('║  ACCIONES: [1-8] Ejecutar  |  [a] Añadir tarea  |  [r] Repriorizar║');
  console.log('║            [g] Ver grafo  |  [n] Próxima óptima |  [q] Salir     ║');
  console.log('╚═══════════════════════════════════════════════════════════════════╝\n');
  
  return sorted;
}

function cmdGraph(state) {
  console.log('\n📊 GRAFO DE DEPENDENCIAS (Critical Path resaltado):\n');
  console.log(`P0-netbenefit ──► P0-cds_jurados ──► P0-copiosis ──► P0-valueflows`);
  console.log(`     │                                    │`);
  console.log(`     └──────────────────► COACH-automaton ◄─┘`);
  console.log(`                                           │`);
  console.log(`MIG-P1-BranDNA ──────────────────────────►│`);
  console.log(`     │                                    │`);
  console.log(`     ├────► MIG-P2-Products ─────────────►│`);
  console.log(`     │         │                           │`);
  console.log(`     │         └────► MIG-P8-Pagos         │`);
  console.log(`     │                                     │`);
  console.log(`     └────► MIG-P3-Personas ──────────────►│`);
  console.log(`               │                           │`);
  console.log(`               └────► MIG-P11-Prospecta    │`);
  console.log(`                                           │`);
  console.log(`     MIG-P4-Plan ◄─────────────────────────┘`);
  console.log(`          │`);
  console.log(`          ├────► MIG-P7-Pauta`);
  console.log(`          │`);
  console.log(`          └────► MIG-P5-Produce ──► MIG-P9-Perfecciona`);
  console.log(`                       │`);
  console.log(`                       └────► MIG-P10-Publica`);
  console.log(`                       │`);
  console.log(`                       └────► COACH-integration (requiere BranDNA context)`);
  console.log(`                                    │`);
  console.log(`                                    ▼`);
  console.log(`                            COACH-lucidez`);
  console.log(`                                    │`);
  console.log(`GAIA-gov-sync ◄───────────────────────┘`);
  console.log(`     │`);
  console.log(`     ├────► GAIA-trust-bridge ────────►│`);
  console.log(`     │         │                        │`);
  console.log(`     │         └────► GAIA-app-federate ► GAIA-eco-sync`);
  console.log(`     │                                    │`);
  console.log(`     └────► GAIA-funding-proposal        │`);
  console.log(`                                           │`);
  console.log(`GAIA-infra-connect ──────────────────────►│`);
  console.log(`     │                                    │`);
  console.log(`     └────► GAIA-intel-match ────────────►│`);
  console.log(`                                          │`);
  console.log(`                            GAIA-marketplace-level3`);
  console.log(`                                    │`);
  console.log(`ROLES-mapping ──► ROLES-state ──► ROLES-ui`);
  console.log(`                                    │`);
  console.log(`DEPLOY-link ──► DEPLOY-verify ──► DEPLOY-auto\n`);
  
  console.log('🔴 Critical Path HSCSG: P0-netbenefit → P0-copiosis → COACH-automaton → COACH-integration → MIG-P5-Produce → MIG-P9/MIG-P10 (18 días mínimos)');
  console.log('🔴 Critical Path GAIA: P0-copiosis → COACH-automaton → GAIA-gov-sync → GAIA-trust-bridge → GAIA-app-federate → GAIA-eco-sync (15 días adicionales)');
  console.log('🔴 Critical Path Integrado: 18 + 15 = 33 días mínimos\n');
}

function cmdNext(state) {
  const available = getAvailableTasks(state);
  if (available.length === 0) {
    console.log('✅ No hay tareas disponibles (todas completadas o bloqueadas)');
    return;
  }
  const sorted = sortByPriority(available, state);
  const best = sorted[0];
  console.log(`\n🎯 PRÓXIMA ÓPTIMA: [${best.id}] ${best.title}`);
  console.log(`   Workstream: ${best.workstream} | Score: ${best.score.toFixed(1)} | Esfuerzo: ${best.effort}/5 | Valor: ${best.value}/100`);
  console.log(`   Desbloquea: ${(best.blocks || []).join(', ') || 'nada'}`);
  console.log(`   Dependencias: ${(best.dependencies || []).join(', ') || 'ninguna'} (${(best.dependencies || []).every(d => getTask(state, d)?.status === 'done') ? '✅ OK' : '❌ PENDIENTES'})`);
}

async function cmdAddTask(state) {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  
  const ask = (q) => new Promise(resolve => rl.question(q, resolve));
  
  console.log('\n➕ AÑADIR TAREA PERSONALIZADA\n');
  
  const title = await ask('Título: ');
  if (!title.trim()) { console.log('❌ Título requerido'); rl.close(); return state; }
  
  const workstream = await ask('Workstream [P0_SPECS/MIGRATION/COACH/ROLES/DEPLOY/NEW]: ') || 'NEW';
  const depsInput = await ask('Dependencias (IDs separadas por coma, vacío=ninguna): ');
  const deps = depsInput.split(',').map(s => s.trim()).filter(Boolean);
  const effort = parseInt(await ask('Esfuerzo 1-5 [3]: ') || '3');
  const value = parseInt(await ask('Valor 1-100 [70]: ') || '70');
  const priority = parseInt(await ask('Prioridad 0-100 [80]: ') || '80');
  const notes = await ask('Notas: ');
  
  // Generate ID
  const prefix = workstream === 'NEW' ? 'U' : workstream.substring(0,3).toUpperCase();
  const existing = Object.keys(state.taskRegistry).filter(k => k.startsWith(prefix + '-')).length;
  const id = `${prefix}-${String(existing + 1).padStart(3, '0')}`;
  
  const newTask = {
    id, title, workstream, source: 'user', priority, effort, value,
    dependencies: deps, blocks: [], status: 'pending',
    notes, created: new Date().toISOString(), updated: new Date().toISOString()
  };
  
  state.taskRegistry[id] = newTask;
  state.userPriorities.unshift(id);
  state.sessionLog.push({ timestamp: new Date().toISOString(), action: 'add-task', task: id, user: 'Isaacko0' });
  
  saveState(state);
  console.log(`\n✅ Tarea ${id} registrada. Aparecerá en próximo menú.`);
  rl.close();
  return state;
}

async function cmdReprioritize(state) {
  const available = getAvailableTasks(state);
  const sorted = sortByPriority(available, state);
  
  console.log('\n🔄 REPRIORIZAR - Marca prioridad 0-100 (Enter=mantener):\n');
  sorted.slice(0, 10).forEach((t, i) => {
    console.log(`${i+1}. [${t.id}] ${t.title} (actual: ${t.priority})`);
  });
  
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  const ask = (q) => new Promise(resolve => rl.question(q, resolve));
  
  for (let i = 0; i < Math.min(10, sorted.length); i++) {
    const input = await ask(`Prioridad para ${sorted[i].id} [${sorted[i].priority}]: `);
    if (input.trim()) {
      const newP = parseInt(input);
      if (!isNaN(newP)) {
        sorted[i].priority = newP;
        state.taskRegistry[sorted[i].id].priority = newP;
        console.log(`  → Actualizado a ${newP}`);
      }
    }
  }
  
  saveState(state);
  console.log('\n✅ Prioridades actualizadas.');
  rl.close();
  return state;
}

async function cmdRun(state, taskId) {
  const task = getTask(state, taskId);
  if (!task) { console.log(`❌ Tarea ${taskId} no encontrada`); return state; }
  if (task.status === 'done') { console.log(`✅ ${taskId} ya completada`); return state; }
  
  // Check dependencies
  const blocked = (task.dependencies || []).filter(depId => getTask(state, depId)?.status !== 'done');
  if (blocked.length > 0) {
    console.log(`❌ ${taskId} bloqueada por: ${blocked.join(', ')}`);
    return state;
  }
  
  task.status = 'in_progress';
  state.currentTask = taskId;
  state.currentWorkstream = task.workstream;
  state.sessionLog.push({ timestamp: new Date().toISOString(), action: 'run-start', task: taskId });
  saveState(state);
  
  console.log(`\n🚀 EJECUTANDO: [${taskId}] ${task.title}`);
  console.log(`   Workstream: ${task.workstream}`);
  console.log(`   Esfuerzo estimado: ${task.effort} días`);
  console.log(`   Notas: ${task.notes || '—'}`);
  
  // Simulate work (in real impl, this would call actual build/migration commands)
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  const ask = (q) => new Promise(resolve => rl.question(q, resolve));
  
  console.log('\n   Pasos sugeridos (marca cada uno):');
  const steps = [
    'Crear archivos core (.ts)',
    'Adaptar a ESM + Zustand store',
    'Crear componentes React + hooks',
    'Crear screen page + routing',
    'Verificar build (pnpm build)',
    'Test manual en navegador'
  ];
  
  for (const step of steps) {
    const done = await ask(`   ☐ ${step} [s/n]: `);
    if (done.toLowerCase() !== 's') {
      console.log(`   ⏸️ Pausado en: ${step}`);
      task.status = 'pending';
      saveState(state);
      rl.close();
      return state;
    }
  }
  
  task.status = 'done';
  task.updated = new Date().toISOString();
  state.completedTasks.push(taskId);
  state.sessionLog.push({ timestamp: new Date().toISOString(), action: 'run-complete', task: taskId, result: 'done' });
  saveState(state);
  
  console.log(`\n✅ ${taskId} COMPLETADA`);
  rl.close();
  return state;
}

// ============ MAIN ============

async function main() {
  const args = process.argv.slice(2);
  const command = args[0] || 'status';
  const arg = args[1];
  
  let state = loadState();
  
  switch (command) {
    case 'status':
      cmdStatus(state);
      break;
    case 'graph':
      cmdGraph(state);
      break;
    case 'next':
      cmdNext(state);
      break;
    case 'add-task':
      state = await cmdAddTask(state);
      break;
    case 'reprioritize':
      state = await cmdReprioritize(state);
      break;
    case 'run':
      if (!arg) { console.log('Uso: orchestrator run <task-id>'); process.exit(1); }
      state = await cmdRun(state, arg);
      break;
    case 'init':
      // Force re-initialize
      try {
        fs.unlinkSync(STATE_FILE);
      } catch (e) {
        // File doesn't exist, ignore
      }
      state = initializeState();
      saveState(state);
      console.log('✅ Estado reinicializado con tareas base');
      break;
    default:
      console.log(`Comando desconocido: ${command}`);
      console.log('Comandos: status, graph, next, add-task, reprioritize, run <id>, init');
      process.exit(1);
  }
}

main().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});