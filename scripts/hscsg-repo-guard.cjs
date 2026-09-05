#!/usr/bin/env node
/**
 * hscsg-repo-guard CLI
 * Guarda/asimala un repo externo en HSCSG_v15_OS cuando el usuario lo indique.
 *
 * Uso:
 *   node scripts/hscsg-repo-guard.js guard <owner/repo> [alias]
 *   node scripts/hscsg-repo-guard.js list
 *   node scripts/hscsg-repo-guard.js status
 *
 * Ejemplo:
 *   node scripts/hscsg-repo-guard.js guard sourcerer-io/sourcerer-app sourcerer
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const HSCSG_ROOT = process.env.HSCSG_ROOT || path.join(__dirname, '..');
const DOCS_DIR = path.join(HSCSG_ROOT, 'docs');
const CLONES_DIR = path.join(process.env.USERPROFILE || process.env.HOME || '/c/Users/Isaacko0/Documents', 'repo_clones');

// ============ HELPERS ============

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function slugify(name) {
  return name.toLowerCase().replace(/[^a-z0-9_-]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
}

function nowISO() {
  return new Date().toISOString().replace(/T/, ' ').substring(0, 19);
}

function extractReadme(repoDir) {
  const readmePath = path.join(repoDir, 'README.md');
  if (fs.existsSync(readmePath)) {
    return fs.readFileSync(readmePath, 'utf-8');
  }
  return '';
}

function extractLicense(repoDir) {
  const licensePath = path.join(repoDir, 'LICENSE');
  if (fs.existsSync(licensePath)) {
    return fs.readFileSync(licensePath, 'utf-8').split('\n')[0] || 'Ver LICENSE';
  }
  return 'Sin LICENSE detectado';
}

function extractFileTree(repoDir, maxDepth = 2) {
  try {
    const result = execSync(`git -C "${repoDir}" ls-files`, { encoding: 'utf-8' });
    const files = result.trim().split('\n').filter(Boolean);
    const tree = {};
    files.forEach(f => {
      const parts = f.split('/');
      let current = tree;
      parts.slice(0, maxDepth).forEach((p, i) => {
        if (i === parts.length - 1 || i >= maxDepth - 1) {
          if (!current[p]) current[p] = { _files: [] };
          if (i === parts.length - 1) current[p]._files.push(f);
        } else {
          if (!current[p]) current[p] = {};
          current = current[p];
        }
      });
    });
    return tree;
  } catch (e) {
    return { error: 'No se pudo leer el árbol de archivos' };
  }
}

function extractPackageJson(repoDir) {
  const pkgPath = path.join(repoDir, 'package.json');
  if (fs.existsSync(pkgPath)) {
    try {
      const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));
      return {
        name: pkg.name || '—',
        version: pkg.version || '—',
        scripts: Object.keys(pkg.scripts || {}).join(', ') || '—',
        dependencies: Object.keys(pkg.dependencies || {}).length,
        devDependencies: Object.keys(pkg.devDependencies || {}).length,
      };
    } catch (e) {
      return { error: 'package.json no parseable' };
    }
  }
  return { notFound: true };
}

// ============ BACKUP CREATOR ============

function createBackup(source, alias, repoDir) {
  const backupPath = path.join(DOCS_DIR, `${alias}_backup.md`);
  const readme = extractReadme(repoDir);
  const license = extractLicense(repoDir);
  const pkg = extractPackageJson(repoDir);
  const tree = extractFileTree(repoDir);

  const lines = readme.split('\n');
  const firstLine = lines[0]?.replace(/^#\s*/, '').trim() || alias.toUpperCase();

  const content = `# ${alias.toUpperCase()} — Backup Quirúrgico Completo

**Fuente original:** \`https://github.com/${source}\`
**Fecha de asimilación:** ${nowISO()}
**Alias:** \`${alias}\`

---

## 📋 DATOS BÁSICOS DEL REPO

| Campo | Valor |
|-------|-------|
| **Repositorio** | \`${source}\` |
| **Alias HSCSG** | \`${alias}\` |
| **README título** | ${firstLine} |
| **Licencia** | ${license} |
| **Package.json** | ${pkg.name || '—'} v${pkg.version || '—'} |
| **Scripts** | ${pkg.scripts || '—'} |
| **Dependencias** | ${pkg.dependencies || 0} producción / ${pkg.devDependencies || 0} desarrollo |

---

## 📁 ESTRUCTURA DEL REPOSITORIO (profundidad ${maxDepth})

${JSON.stringify(tree, null, 2).split('\n').map(l => `> ${l}`).join('\n')}

---

## 📄 README ORIGINAL (primeras líneas)

${readme.split('\n').slice(0, 50).join('\n')}

${readme.length > 2000 ? `\n... (continuación omitida, ${readme.length} chars totales)` : ''}

---

## 🏗️ STACK TÉCNICO (extrado de estructura)

${pkg.name ? `**Frontend/Framework:** ${pkg.name}` : ''}
**Scripts disponibles:** ${pkg.scripts || '—'}
**Total archivos en repo:** ${Object.values(tree).flatMap(v => Array.isArray(v._files) ? v._files : []).length || 'desconocido'}

---

## 🔍 CONCEPTOS CLAVE PARA ASIMILACIÓN HSCSG

Seleccionar de la estructura del repo los 5-10 conceptos más relevantes para mapeo con HSCSG v15 OS.

Ejemplo de campos a extraer:
- Arquitectura (monolito, microsservicios, monorepo, SPA, fullstack)
- Auth/Identidad (OAuth, JWT, DID, pasaporte, certificación)
- Gobernanza (DAO, sociocracia, votación, consenso)
- Economía (tokens, mercados, fondos, distribución, Commonomics)
- Infraestructura (cloud, P2P, off-grid, federación, discovery)
- IA/LLM (agentes, matching, inferencia, pipelines auditables)
- Datos (fideicomiso de datos, RAO, blockchain, indexedDB)
- Comunidad (perfiles, normas, rituales, encuentros)

---

## 📁 ARCHIVOS FUENTE REFERENCIADOS

- Repo clonado en: \`${repoDir}\`
- README original: \`${path.join(repoDir, 'README.md')}\`
- LICENSE: \`${path.join(repoDir, 'LICENSE')}\`
- package.json: \`${path.join(repoDir, 'package.json')}\`

---

**Nota:** Este backup es fiel a la estructura original del repo. Para integración operativa con HSCSG v15 OS, ver \`docs/${alias}_integration.md\`.
`;

  fs.writeFileSync(backupPath, content, 'utf-8');
  return backupPath;
}

// ============ INTEGRATION CREATOR ============

function createIntegration(source, alias, repoDir) {
  const integrationPath = path.join(DOCS_DIR, `${alias}_integration.md`);

  const content = `# ${alias.toUpperCase()} → HSCSG v15 OS — Integración Operativa

**Fecha:** ${nowISO()}
**Fuente:** \`docs/${alias}_backup.md\` (repo clonado + documentado)
**Objetivo:** Mapear isomorfismos, decidir Take/Adapt/Discard, crear módulos vivos, definir plan de implementación

---

## 🔄 TABLA MAESTRA DE ISOMORFISMOS (≤35 conceptos × 2 sistemas)

| # | Concepto ${alias.toUpperCase()} | Concepto HSCSG v15 OS | Tipo | Acción | Notas |
|---|-------------------------------|----------------------|------|--------|-------|
| 1 | *(extraer del repo)* | *(seleccionar de HSCSG)* | **?** | ❓ Pendiente | *(descripción)* |

**Instrucciones para completar:**
1. Leer `docs/${alias}_backup.md` completo
2. Identificar 10-35 conceptos clave del repo (arquitectura, economía, identidad, gobernanza, infra, IA, datos, comunidad)
3. Para cada concepto, encontrar el isomorfismo más cercano en HSCSG v15 OS
4. Decidir: **Take** (adopción directa), **Adapt** (evolución/expansión), **Discard** (incompatible)
5. Documentar notas de implementación

---

## ✅ TAKE (Adopción directa — listo para usar)

| # | Concepto ${alias} | Implementación HSCSG |
|---|-------------------|---------------------|
| 1 | *(extraer concepto)* | *(nombre módulo existente o nuevo)* |

---

## 🔄 ADAPT (Evolución/expansión — modificar para HSCSG)

| # | Concepto ${alias} | Adaptación HSCSG | Detalle |
|---|-------------------|-----------------|---------|
| 1 | *(extraer concepto)* | *(nuevo módulo o extensión)* | *(descripción técnica)* |

---

## ❌ DISCARD (No integrar — incompatibles con principios HSCSG)

| # | Concepto | Por qué no / Alternativa HSCSG |
|---|----------|--------------------------------|
| 1 | *(extraer concepto)* | *(razón anfibia: extirpar infra, conservar lógica)* |

---

## 🏗️ MÓDULOS NUEVOS A CREAR (Plantilla)

Para cada módulo nuevo identificado:

### 1. `src/core/lib/<modulo>.ts` — Descripción
```typescript
// Tipos + interfaces de dominio
// Funciones puras (sin dependencias externas)
// make<Modulo>State() con seed del nodo cosateca
```

### 2. `src/core/state/<modulo>.ts` — Estado HSCSG
```typescript
// Interface <Modulo>State
// make<Modulo>State() inicial
```

### 3. Store integration (src/core/state/store.ts)
- import type { <Modulo>State }
- import { make<Modulo>State } from '@core/state/<modulo>'
- Añadir a AppState + initial state + resetAll + partialize

### 4. Pantalla (si aplica) src/app/screens/<Modulo>.tsx
- Componente React + Zustand + lucide icon
- Ruta + nav + i18n

---

## 📦 PANTALLAS NUEVAS (si aplica)

| Pantalla | Ruta | Descripción |
|----------|------|-------------|
| *(nombre)* | `/<ruta>` | *(descripción)* |

---

## 🔗 INTEGRACIÓN CON MÓDULOS EXISTENTES

| Módulo HSCSG | Integración ${alias} |
|--------------|---------------------|
| *(módulo existente)* | *(cómo se conecta)* |

---

## 📋 PLAN DE IMPLEMENTACIÓN (Critical Path: semanas)

### Semana 1: Core
- [ ] *(módulo 1)*
- [ ] *(módulo 2)*

### Semana 2: Gobernanza + Pantallas
- [ ] *(módulo 3)*
- [ ] *(pantallas)*

---

## 🎯 BRIEFS OPERATIVOS A CREAR

| Brief ID | Título | Perfil |
|----------|--------|--------|
| *(BF-XXX)* | *(título)* | *(perfil)* |

---

## 🔗 VASOS COMUNICANTES

| Vaso | ${alias.toUpperCase()} | HSCSG v15 OS | Estado |
|------|------------------------|--------------|--------|
| governance:sync | *(concepto)* | *(equivalente HSCSG)* | 🟡 Adaptar |
| trust:bridge | *(concepto)* | *(equivalente HSCSG)* | ✅ Take |
| infra:connect | *(concepto)* | *(equivalente HSCSG)* | ❌ Discard |
| intel:match | *(concepto)* | *(equivalente HSCSG)* | 🟡 Adaptar |
| app:federate | *(concepto)* | *(equivalente HSCSG)* | ✅ Take |
| eco:sync | *(concepto)* | *(equivalente HSCSG)* | ✅ Take |

---

**Nota:** Esta integración respeta el principio **anfibio** de HSCSG: misma lógica opera en modo postmonetario (ZNU/CaaS, default offline) o conectado (USD/USDC vía priceParity). La lógica pura se extrae; la infra ajena se extirpa.
`;

  fs.writeFileSync(integrationPath, content, 'utf-8');
  return integrationPath;
}

// ============ ORCHESTRATOR UPDATE ============

function addToOrchestrator(alias, source) {
  const orchestratorPath = path.join(HSCSG_ROOT, 'scripts', 'orchestrator-next-steps.cjs');

  if (!fs.existsSync(orchestratorPath)) {
    console.log(`⚠️  orchestrator-next-steps.cjs no encontrado en ${orchestratorPath}`);
    return false;
  }

  const orchestrator = fs.readFileSync(orchestratorPath, 'utf-8');

  // Agregar workstream si no existe
  const workstreamId = slugify(alias).toUpperCase() + '_INTEGRATION';
  if (orchestrator.includes(workstreamId)) {
    console.log(`✅ Workstream ${workstreamId} ya existe en orchestrator`);
    return true;
  }

  const workstreamEntry = `
    "${workstreamId}": [
      {
        "id": "${workstreamId.replace('_INTEGRATION', '')}-backup",
        "title": "Documentar backup quirúrgico de ${alias}",
        "deps": [],
        "effort": 2,
        "value": 80,
        "workstream": "${workstreamId}",
        "source": "agent",
        "priority": 80,
        "blocks": [],
        "status": "done",
        "notes": "Backup creado en docs/${alias}_backup.md"
      },
      {
        "id": "${workstreamId.replace('_INTEGRATION', '')}-integration",
        "title": "Crear integración operativa ${alias}",
        "deps": ["${workstreamId.replace('_INTEGRATION', '')}-backup"],
        "effort": 3,
        "value": 90,
        "workstream": "${workstreamId}",
        "source": "agent",
        "priority": 90,
        "blocks": [],
        "status": "pending",
        "notes": "docs/${alias}_integration.md con isomorfismos + módulos"
      }
    ],`;

  // Insertar antes del cierre del objeto baseTasks
  const modified = orchestrator.replace(
    /(\s+"],\s*\n  \};\s*\n)/,
    workstreamEntry + '\n$1'
  );

  if (modified === orchestrator) {
    console.log(`⚠️  No se pudo insertar workstream (formato inesperado)`);
    return false;
  }

  fs.writeFileSync(orchestratorPath, modified, 'utf-8');
  console.log(`✅ Workstream ${workstreamId} añadido al orchestrator`);
  return true;
}

// ============ GIT OPERATIONS ============

function gitAdd(files) {
  try {
    execSync(`git add ${files.map(f => `"${f}"`).join(' ')}`, {
      cwd: HSCSG_ROOT,
      stdio: 'pipe',
    });
    return true;
  } catch (e) {
    console.log(`❌ git add falló: ${e.message}`);
    return false;
  }
}

function gitCommit(message) {
  try {
    execSync(`git commit -q -m "${message}"`, {
      cwd: HSCSG_ROOT,
      stdio: 'pipe',
    });
    return true;
  } catch (e) {
    console.log(`❌ git commit falló: ${e.message}`);
    return false;
  }
}

function gitPush() {
  try {
    execSync('git push origin main', {
      cwd: HSCSG_ROOT,
      stdio: 'pipe',
    });
    return true;
  } catch (e) {
    console.log(`⚠️  git push falló (quizás no hay cambios o conflicto): ${e.message}`);
    return false;
  }
}

// ============ MAIN ============

function main() {
  const args = process.argv.slice(2);
  const command = args[0] || 'help';
  const repo = args[1];
  const alias = args[2] || slugify(repo || '');

  switch (command) {
    case 'guard': {
      if (!repo) {
        console.log('❌ Uso: node hscsg-repo-guard.js guard <owner/repo> [alias]');
        console.log('Ejemplo: node hscsg-repo-guard.js guard sourcerer-io/sourcerer-app sourcerer');
        process.exit(1);
      }

      console.log(`\n🛡️  GUARDANDO REPO: ${repo} → alias: ${alias}\n`);

      // 1. Clonar repo
      ensureDir(CLONES_DIR);
      const cloneDir = path.join(CLONES_DIR, alias);
      if (fs.existsSync(cloneDir)) {
        console.log(`✅ Repo ya clonado en ${cloneDir}`);
      } else {
        console.log(`📥 Clonando ${repo}...`);
        try {
          execSync(`git clone --depth 1 https://github.com/${repo}.git "${cloneDir}"`, {
            stdio: 'pipe',
            timeout: 120000,
          });
          console.log(`✅ Clonado exitoso`);
        } catch (e) {
          console.log(`❌ Clone falló: ${e.message}`);
          process.exit(1);
        }
      }

      // 2. Crear backup
      console.log(`📄 Creando backup...`);
      const backupPath = createBackup(repo, alias, cloneDir);
      console.log(`✅ Backup: ${backupPath}`);

      // 3. Crear integration
      console.log(`🔗 Creando integración...`);
      const integrationPath = createIntegration(repo, alias, cloneDir);
      console.log(`✅ Integración: ${integrationPath}`);

      // 4. Añadir al orchestrator
      console.log(`🎛️  Actualizando orchestrator...`);
      addToOrchestrator(alias, repo);

      // 5. Git commit + push
      console.log(`💾 Git commit...`);
      const filesToAdd = [
        backupPath,
        integrationPath,
        path.join(HSCSG_ROOT, 'skills', 'hscsg-repo-guard', 'SKILL.md'),
      ];

      if (gitAdd(filesToAdd)) {
        const msg = `feat(repo-guard): guarda ${repo} como ${alias} (backup + integration)

- docs/${alias}_backup.md: backup quirúrgico (${fs.statSync(backupPath).size} bytes)
- docs/${alias}_integration.md: integración operativa (isomorfismos pendientes de completar)
- skills/hscsg-repo-guard/SKILL.md: skill de guardado genérico

Estado real: BACKUP + INTEGRATION creados; isomorfismos + módulos + push pendientes de completar manualmente.`;

        if (gitCommit(msg)) {
          console.log(`✅ Commit realizado`);
          if (gitPush()) {
            console.log(`✅ Push a origin/main`);
          }
        }
      }

      console.log(`\n✅ REPO GUARDADO: ${repo}`);
      console.log(`   Backup:  ${backupPath}`);
      console.log(`   Integración: ${integrationPath}`);
      console.log(`   \n⚠️  Siguientes pasos manuales:`);
      console.log(`   1. Completar isomorfismos en integration.md`);
      console.log(`   2. Crear módulos TypeScript (lib/<modulo>.ts + state/<modulo>.ts)`);
      console.log(`   3. Crear pantalla + routing + i18n (if applicable)`);
      console.log(`   4. Push final + verificar vivo`);
      break;
    }

    case 'list': {
      console.log('\n📚 REPOS YA GUARDADOS EN HSCSG_v15_OS:\n');
      const backups = fs.readdirSync(DOCS_DIR).filter(f => f.endsWith('_backup.md'));
      backups.forEach(f => {
        const alias = f.replace('_backup.md', '');
        const size = fs.statSync(path.join(DOCS_DIR, f)).size;
        const existsIntegration = fs.existsSync(path.join(DOCS_DIR, alias + '_integration.md'));
        console.log(`  ${alias.padEnd(30)} ${size.toString().padStart(6)} bytes ${existsIntegration ? '✅ integración' : '❌ solo backup'}`);
      });
      console.log(`\nTotal: ${backups.length} repos guardados\n`);
      break;
    }

    case 'status': {
      console.log('\n🛡️  ESTADO DEL GUARDAPAPELES:\n');
      console.log(`  hscsg-repo-guard/SKILL.md: ${fs.existsSync(path.join(HSCSG_ROOT, 'skills', 'hscsg-repo-guard', 'SKILL.md')) ? '✅' : '❌'}`);
      console.log(`  scripts/hscsg-repo-guard.js: ${fs.existsSync(path.join(HSCSG_ROOT, 'scripts', 'hscsg-repo-guard.js')) ? '✅' : '❌'}`);
      console.log(`  Repos guardados: ${fs.readdirSync(DOCS_DIR).filter(f => f.endsWith('_backup.md')).length}`);
      console.log('\n');
      break;
    }

    case 'help':
    default:
      console.log(`
🛡️  hscsg-repo-guard — Guarda repos externos en HSCSG v15 OS

USO:
  node scripts/hscsg-repo-guard.js guard <owner/repo> [alias]
  node scripts/hscsg-repo-guard.js list
  node scripts/hscsg-repo-guard.js status

EJEMPLOS:
  node scripts/hscsg-repo-guard.js guard sourcerer-io/sourcerer-app sourcerer
  node scripts/hscsg-repo-guard.js guard iamlukethedev/Hermes3D hermes3d

QUÉ HACE:
  1. Clona el repo (git clone --depth 1)
  2. Crea docs/<alias>_backup.md (backup quirúrgico)
  3. Crea docs/<alias>_integration.md (plantilla de integración)
  4. Añade workstream al orchestrator
  5. Git commit + push a origin/main

DESPUÉS DEL GUARDADO (manual):
  - Completar isomorfismos en integration.md
  - Crear módulos TypeScript + pantallas (if applicable)
  - Push final + verificar vivo

DIRECTORIO DE CLONES:
  ${CLONES_DIR}
      `);
  }
}

main();
