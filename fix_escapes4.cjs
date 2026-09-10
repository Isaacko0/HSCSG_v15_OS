const fs = require('fs');
const path = require('path');

const filePath = 'C:/Users/Isaacko0/HSCSG_v15_OS/scripts/orchestrator-next-steps.js';
let content = fs.readFileSync(filePath, 'utf8');

// The problem is that the content has literal newlines inside console.log strings.
// Let's just replace the whole cmdAuto function by finding it and replacing the problematic line.

// Find the start of cmdAuto
const startMarker = 'async function cmdAuto(state) {';
const startIndex = content.indexOf(startMarker);
if (startIndex === -1) {
  console.error('Could not find cmdAuto function');
  process.exit(1);
}

// Find the end - main marker
const mainMarker = '// ============ MAIN ============';
const mainIndex = content.indexOf(mainMarker, startIndex);
if (mainIndex === -1) {
  console.error('Could not find main marker');
  process.exit(1);
}

// Extract the function body to debug
const functionBody = content.slice(startIndex, mainIndex);
console.log('Function body length:', functionBody.length);
console.log('First 200 chars:', functionBody.slice(0, 200));

// Let's just rewrite the entire function using a template literal approach
// We'll write the new function as a string with proper escaping
const newFunction = 
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
"    const sorted = sortByPriority(agentTasks, state);\n" +
"    const best = sorted[0];\n" +
"    console.log('Ejecutando: [' + best.id + '] ' + best.title);\n" +
"    const task = getTask(state, best.id);\n" +
"    if (!task) { \n" +
"      console.log('❌ Tarea ' + best.id + ' no encontrada'); \n" +
"      break; \n" +
"    }\n" +
"    if (task.status === 'done') { \n" +
"      console.log('✅ ' + best.id + ' ya completada'); \n" +
"      continue; \n" +
"    }\n" +
"    const blocked = (task.dependencies || []).filter(depId => getTask(state, depId)?.status !== 'done');\n" +
"    if (blocked.length > 0) {\n" +
"      console.log('❌ ' + best.id + ' bloqueada por: ' + blocked.join(', '));\n" +
"      console.log('   Deteniendo ejecución automática debido a dependencias pendientes.');\n" +
"      break;\n" +
"    }\n" +
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
"    if (task.source === 'agent') {\n" +
"      console.log('\n   ✅ Tarea agente completada automáticamente');\n" +
"      task.status = 'done';\n" +
"      task.updated = new Date().toISOString();\n" +
"      state.completedTasks.push(task.id);\n" +
"      state.sessionLog.push({ timestamp: new Date().toISOString(), action: 'run-complete', task: task.id, result: 'done' });\n" +
"      saveState(state);\n" +
"      console.log('\n✅ ' + task.id + ' COMPLETADA');\n" +
"      executed++;\n" +
"      continue;\n" +
"    }\n" +
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

// Verify the new function doesn't have literal newlines in strings
console.log('New function first 100 chars:', newFunction.slice(0, 100));
console.log('Has literal newline in console.log?', newFunction.includes("console.log('\n"));

const newContent = content.slice(0, startIndex) + newFunction + '\n\n' + content.slice(mainIndex);

fs.writeFileSync(filePath, newContent, 'utf8');
console.log('Fixed escape sequences in orchestrator-next-steps.js');
