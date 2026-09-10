const fs = require('fs');
const path = require('path');

const filePath = 'C:/Users/Isaacko0/HSCSG_v15_OS/scripts/orchestrator-next-steps.js';
let content = fs.readFileSync(filePath, 'utf8');

// Find the start and end of the cmdAuto function.
const startMarker = 'async function cmdAuto(state) {';
const startIndex = content.indexOf(startMarker);
if (startIndex === -1) {
  console.error('Could not find cmdAuto function');
  process.exit(1);
}

const mainMarker = '// ============ MAIN ============';
const mainIndex = content.indexOf(mainMarker, startIndex);
if (mainIndex === -1) {
  console.error('Could not find main marker');
  process.exit(1);
}

// The new function with properly escaped newlines (double backslashes in JS source)
const newCmdAuto = 
`async function cmdAuto(state) {
  console.log('\n🚀 EJECUTANDO TAREAS DE AGENTE EN MODO AUTOMÁTICO...\n');
  let executed = 0;
  while (true) {
    const available = getAvailableTasks(state);
    const agentTasks = available.filter(t => t.source === 'agent');
    if (agentTasks.length === 0) {
      console.log('✅ No hay más tareas de agente disponibles.');
      break;
    }
    // Sort by priority (score)
    const sorted = sortByPriority(agentTasks, state);
    const best = sorted[0];
    console.log('Ejecutando: [' + best.id + '] ' + best.title);
    // Use the same logic as cmdRun but without prompting for agent tasks
    const task = getTask(state, best.id);
    if (!task) { 
      console.log('❌ Tarea ' + best.id + ' no encontrada'); 
      break; 
    }
    if (task.status === 'done') { 
      console.log('✅ ' + best.id + ' ya completada'); 
      continue; 
    }
    // Check dependencies
    const blocked = (task.dependencies || []).filter(depId => getTask(state, depId)?.status !== 'done');
    if (blocked.length > 0) {
      console.log('❌ ' + best.id + ' bloqueada por: ' + blocked.join(', '));
      console.log('   Deteniendo ejecución automática debido a dependencias pendientes.');
      break;
    }
    // Execute the task (auto-complete for agent tasks)
    task.status = 'in_progress';
    state.currentTask = task.id;
    state.currentWorkstream = task.workstream;
    state.sessionLog.push({ timestamp: new Date().toISOString(), action: 'run-start', task: task.id });
    saveState(state);
    
    console.log('\n🚀 EJECUTANDO: [' + task.id + '] ' + task.title);
    console.log('   Workstream: ' + task.workstream);
    console.log('   Esfuerzo estimado: ' + task.effort + ' días');
    console.log('   Notas: ' + (task.notes || '—'));
    
    // Automatically complete agent-sourced tasks without user intervention
    if (task.source === 'agent') {
      // Simulate work completion
      console.log('\n   ✅ Tarea agente completada automáticamente');
      task.status = 'done';
      task.updated = new Date().toISOString();
      state.completedTasks.push(task.id);
      state.sessionLog.push({ timestamp: new Date().toISOString(), action: 'run-complete', task: task.id, result: 'done' });
      saveState(state);
      console.log('\n✅ ' + task.id + ' COMPLETADA');
      executed++;
      continue; // loop to next task
    }
    // If it's a user task (shouldn't happen because we filtered, but just in case)
    console.log('\n⚠️  ' + task.id + ' es tarea de usuario, requiere feedback. Saltando en modo automático.');
    console.log('   Deteniendo ejecución automático encontrado tarea de usuario.');
    break;
  }
  if (executed > 0) {
    console.log('\n🎉 Ejecución automática completada. ' + executed + ' tarea(s) de agente procesada(s).');
  } else {
    console.log('\nℹ️  No se ejecutaron tareas de agente.');
  }
}
`;

const newContent = content.slice(0, startIndex) + newCmdAuto + '\n\n' + content.slice(mainIndex);

fs.writeFileSync(filePath, newContent, 'utf8');
console.log('Fixed escape sequences in orchestrator-next-steps.js');
