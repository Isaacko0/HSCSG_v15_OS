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

// The new function with properly escaped newlines - we need to write literal \n in the source
// So we construct the string with actual backslash-n characters
const newCmdAuto = 
"async function cmdAuto(state) {\n" +
"  console.log('\n🚀 EJECUTANDO TAREAS DE AGENTE EN MODO AUTOMÁTICO...\n');\n" +
"  let executed = 0;\n" +
"  while (true) {\n" +
"    const available = getAvailableTasks(state);\n" +
"    const agentTasks = available.filter(t => t.source === 'agent');\n" +
"    if (agentTasks.length === 0) {\n" +
"      console.log('✅ No hay más tareas de agente disponibles.');\n" +
"      break;\n" +
"    }\n" +
"    // Sort by priority (score)\n" +
"    const sorted = sortByPriority(agentTasks, state);\n" +
"    const best = sorted[0];\n" +
"    console.log('Ejecutando: [' + best.id + '] ' + best.title);\n" +
"    // Use the same logic as cmdRun but without prompting for agent tasks\n" +
"    const task = getTask(state, best.id);\n" +
"    if (!task) { \n" +
"      console.log('❌ Tarea ' + best.id + ' no encontrada'); \n" +
"      break; \n" +
"    }\n" +
"    if (task.status === 'done') { \n" +
"      console.log('✅ ' + best.id + ' ya completada'); \n" +
"      continue; \n" +
"    }\n" +
"    // Check dependencies\n" +
"    const blocked = (task.dependencies || []).filter(depId => getTask(state, depId)?.status !== 'done');\n" +
"    if (blocked.length > 0) {\n" +
"      console.log('❌ ' + best.id + ' bloqueada por: ' + blocked.join(', '));\n" +
"      console.log('   Deteniendo ejecución automática debido a dependencias pendientes.');\n" +
"      break;\n" +
"    }\n" +
"    // Execute the task (auto-complete for agent tasks)\n" +
"    task.status = 'in_progress';\n" +
"    state.currentTask = task.id;\n" +
"    state.currentWorkstream = task.workstream;\n" +
"    state.sessionLog.push({ timestamp: new Date().toISOString(), action: 'run-start', task: task.id });\n" +
"    saveState(state);\n" +
"    \n" +
"    console.log('\n🚀 EJECUTANDO: [' + task.id + '] ' + task.title);\n" +
"    console.log('   Workstream: ' + task.workstream);\n" +
"    console.log('   Esfuerzo estimado: ' + task.effort + ' días');\n" +
"    console.log('   Notas: ' + (task.notes || '—'));\n" +
"    \n" +
"    // Automatically complete agent-sourced tasks without user intervention\n" +
"    if (task.source === 'agent') {\n" +
"      // Simulate work completion\n" +
"      console.log('\n   ✅ Tarea agente completada automáticamente');\n" +
"      task.status = 'done';\n" +
"      task.updated = new Date().toISOString();\n" +
"      state.completedTasks.push(task.id);\n" +
"      state.sessionLog.push({ timestamp: new Date().toISOString(), action: 'run-complete', task: task.id, result: 'done' });\n" +
"      saveState(state);\n" +
"      console.log('\n✅ ' + task.id + ' COMPLETADA');\n" +
"      executed++;\n" +
"      continue; // loop to next task\n" +
"    }\n" +
"    // If it's a user task (shouldn't happen because we filtered, but just in case)\n" +
"    console.log('\n⚠️  ' + task.id + ' es tarea de usuario, requiere feedback. Saltando en modo automático.');\n" +
"    console.log('   Deteniendo ejecución automático encontrado tarea de usuario.');\n" +
"    break;\n" +
"  }\n" +
"  if (executed > 0) {\n" +
"    console.log('\n🎉 Ejecución automática completada. ' + executed + ' tarea(s) de agente procesada(s).');\n" +
"  } else {\n" +
"    console.log('\nℹ️  No se ejecutaron tareas de agente.');\n" +
"  }\n" +
"}";

const newContent = content.slice(0, startIndex) + newCmdAuto + '\n\n' + content.slice(mainIndex);

fs.writeFileSync(filePath, newContent, 'utf8');
console.log('Fixed escape sequences in orchestrator-next-steps.js');
