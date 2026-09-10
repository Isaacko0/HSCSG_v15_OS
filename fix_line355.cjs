const fs = require('fs');

const filePath = 'C:/Users/Isaacko0/HSCSG_v15_OS/scripts/orchestrator-next-steps.js';
let content = fs.readFileSync(filePath, 'utf8');

// Find the problematic line and replace it
// The line has: console.log('\n🚀 EJECUTANDO TAREAS DE AGENTE EN MODO AUTOMÁTICO...\n');
// We need: console.log('\n🚀 EJECUTANDO TAREAS DE AGENTE EN MODO AUTOMÁTICO...\n');
// But with actual backslash-n in the source

const oldLine = "console.log('\n🚀 EJECUTANDO TAREAS DE AGENTE EN MODO AUTOMÁTICO...\n');";
const newLine = "console.log('\n🚀 EJECUTANDO TAREAS DE AGENTE EN MODO AUTOMÁTICO...\n');";

console.log('Old line found:', content.includes(oldLine));

content = content.replace(oldLine, newLine);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Fixed line 355');
