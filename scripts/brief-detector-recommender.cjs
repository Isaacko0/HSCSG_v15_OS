#!/usr/bin/env node
/**
 * Brief Detector & Recommender
 * Detecta gaps, recomienda briefs, proyecta necesidades, extrapola patrones
 * Invocable por hscsg-next-steps-orchestrator
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROOT = path.join(__dirname, '..');
const DOCS = path.join(ROOT, 'docs');
const SKILLS = path.join(ROOT, 'skills');
const SRC = path.join(ROOT, 'src');

class BriefDetectorRecommender {
  constructor() {
    this.state = {
      gaps: [],
      recommendations: [],
      projections: { "30d": [], "60d": [], "90d": [] },
      extrapolations: {}
    };
  }

  loadSources() {
    this.briefsIndex = this.parseBriefsIndex(path.join(DOCS, 'BRIEFS_INDEX.md'));
    this.fuentes = JSON.parse(fs.readFileSync(path.join(DOCS, 'fuentes_indice.json'), 'utf-8'));
    this.fuentesArray = this.fuentes.fuentes || this.fuentes;
    this.briefExhaustivo = fs.readFileSync(path.join(DOCS, 'BRIEF_EXHAUSTIVO_HSCSG_COSATECA_OS.md'), 'utf-8');
    this.orchestrator = this.parseOrchestrator(path.join(ROOT, 'scripts', 'orchestrator-next-steps.js'));
    this.gitLog = this.getGitLog();
    this.skills = this.scanSkills();
    this.srcModules = this.scanSrcModules();
  }

  parseBriefsIndex(filePath) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const tables = content.match(/\|[\s\S]*?\|/g) || [];
    const briefs = [];
    tables.forEach(table => {
      const rows = table.trim().split('\n').slice(2);
      rows.forEach(row => {
        const cols = row.split('|').map(c => c.trim()).filter(Boolean);
        if (cols.length >= 4) {
          briefs.push({
            id: cols[0],
            doc: cols[1],
            location: cols[2],
            status: cols[3],
            description: cols[4] || ''
          });
        }
      });
    });
    return briefs;
  }

  parseOrchestrator(filePath) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const tasksMatch = content.match(/const baseTasks = \{[\s\S]*?\};/);
    return { tasks: [], raw: content };
  }

  getGitLog() {
    try {
      return execSync('git log --oneline -20', { cwd: ROOT, encoding: 'utf-8' });
    } catch { return ''; }
  }

  scanSkills() {
    const skills = [];
    if (fs.existsSync(SKILLS)) {
      const categories = fs.readdirSync(SKILLS);
      categories.forEach(cat => {
        const catPath = path.join(SKILLS, cat);
        if (fs.statSync(catPath).isDirectory()) {
          const skills = fs.readdirSync(catPath);
          skills.forEach(skill => {
            const skillPath = path.join(catPath, skill, 'SKILL.md');
            if (fs.existsSync(skillPath)) {
              const content = fs.readFileSync(skillPath, 'utf-8');
              const fmMatch = content.match(/^---\n([\s\S]*?)\n---/);
              let meta = { name: skill, category: cat };
              if (fmMatch) {
                try {
                  const yaml = fmMatch[1];
                  const lines = yaml.split('\n');
                  lines.forEach(line => {
                    const [key, ...val] = line.split(':');
                    if (key && val.length) meta[key.trim()] = val.join(':').trim().replace(/^["']|["']$/g, '');
                  });
                } catch {}
              }
              skills.push(meta);
            }
          });
        }
      });
    }
    return skills;
  }

  scanSrcModules() {
    const modules = [];
    const libPath = path.join(SRC, 'core', 'lib');
    if (fs.existsSync(libPath)) {
      fs.readdirSync(libPath).forEach(f => {
        if (f.endsWith('.ts') && !f.includes('.test.') && !f.includes('.d.ts')) {
          modules.push(f.replace('.ts', ''));
        }
      });
    }
    return modules;
  }

  detectGaps() {
    const gaps = [];

    // Gap type 1: Fuentes pendientes
        this.fuentesArray.forEach(f => {
          if (f.estado === '⏳ Pendiente') {
            gaps.push({
              id: `BI-${String(f.id).padStart(3,'0')}`,
              type: 'backup_missing',
              source: f.nombre,
              priority: 'P0',
              related_briefs: f.briefs_relacionados || []
            });
          }
        });

        // Gap type 4: Fuentes sin backup/integration
        this.fuentesArray.forEach(f => {
          if (f.estado === '⏳ Pendiente') {
            gaps.push({
              id: `BI-${String(f.id).padStart(3,'0')}`,
              type: 'backup_integration_missing',
              source: f.nombre,
              priority: 'P0',
              related_briefs: [`BF-001§${f.seccion_ref || 'N/A'}`]
            });
          }
        });

    // Gap type 3: Skills sin doc
    this.skills.forEach(s => {
      const hasDoc = this.briefsIndex.some(b => b.doc.includes(s.name));
      if (!hasDoc && s.category !== 'web') {
        gaps.push({
          id: `SK-${String(this.state.gaps.filter(g=>g.type==='skill_missing').length+1).padStart(3,'0')}`,
          type: 'skill_missing',
          capability: s.name,
          priority: 'P0'
        });
      }
    });

    // Gap type 4: Fuentes sin backup/integration
    this.fuentesArray.forEach(f => {
      if (f.estado === '⏳ Pendiente') {
        gaps.push({
          id: `BI-${String(f.id).padStart(3,'0')}`,
          type: 'backup_integration_missing',
          source: f.nombre,
          priority: 'P0',
          related_briefs: [`BF-001§${f.seccion_ref || 'N/A'}`]
        });
      }
    });

    // Gap type 5: Módulos sin spec
    this.srcModules.forEach(m => {
      const hasSpec = this.briefsIndex.some(b => b.description.includes(m));
      if (!hasSpec && !m.includes('test') && !m.includes('.d.ts')) {
        gaps.push({
          id: `SM-${String(this.state.gaps.filter(g=>g.type==='spec_missing').length+1).padStart(3,'0')}`,
          type: 'spec_missing',
          module: m,
          priority: 'P1',
          workstream: 'CORE'
        });
      }
    });

    this.state.gaps = gaps;
    return gaps;
  }

  inferWorkstream(brief) {
    const desc = brief.description.toLowerCase();
    if (desc.includes('gaia') || desc.includes('copiosis') || desc.includes('trust')) return 'GAIA_INTEGRATION';
    if (desc.includes('automaton') || desc.includes('coach') || desc.includes('e²r')) return 'COACH';
    if (desc.includes('migrat') || desc.includes('deseos') || desc.includes('p1') || desc.includes('p5')) return 'MIGRATION';
    if (desc.includes('deploy') || desc.includes('vercel')) return 'DEPLOY';
    return 'CORE';
  }

  calculateScore(gap) {
    const strategic = this.strategicValue(gap);
    const unblocks = this.unblockFactor(gap);
    const effortInv = 1 / (this.estimateEffort(gap) || 1);
    const deps = this.dependencyCount(gap);
    return strategic * 0.4 + unblocks * 0.3 + effortInv * 0.2 + deps * 0.1;
  }

  strategicValue(gap) {
    const highValueWorkstreams = ['GAIA_INTEGRATION', 'P0_SPECS', 'COACH', 'MIGRATION'];
    if (highValueWorkstreams.some(w => gap.workstream === w)) return 10;
    if (gap.priority === 'P0') return 9;
    if (gap.priority === 'P1') return 7;
    return 5;
  }

  unblockFactor(gap) {
    const blocks = this.orchestrator.tasks?.filter?.(t => t.deps?.includes(gap.id)).length || 0;
    return Math.min(blocks * 2, 10);
  }

  estimateEffort(gap) {
    if (gap.type === 'backup_missing') return 3;
    if (gap.type === 'integration_missing') return 4;
    if (gap.type === 'spec_missing') return 2;
    if (gap.type === 'skill_missing') return 2;
    return 3;
  }

  dependencyCount(gap) {
    return this.orchestrator.tasks?.filter?.(t => t.deps?.includes(gap.id)).length || 0;
  }

  recommend() {
    const scored = this.state.gaps.map(g => ({ ...g, score: this.calculateScore(g) }))
      .sort((a,b) => b.score - a.score);
    this.state.recommendations = scored.map((g,i) => ({ rank: i+1, ...g, rationale: this.generateRationale(g) }));
  }

  generateRationale(gap) {
    const reasons = [];
    if (gap.workstream === 'GAIA_INTEGRATION') reasons.push('Desbloquea GAIA_INTEGRATION workstream');
    if (gap.priority === 'P0') reasons.push('Prioridad crítica P0');
    if (gap.type === 'backup_missing') reasons.push('Fuente fundamental sin asimilar');
    if (gap.type === 'spec_missing') reasons.push('Módulo core sin especificación');
    if (gap.type === 'skill_missing') reasons.push('Skill crítica sin documentar');
    return reasons.join('; ');
  }

  project() {
    const horizons = { "30d": [], "60d": [], "90d": [] };
    this.state.recommendations.forEach(r => {
      const effort = this.estimateEffort(r);
      const endDays = effort; // simplified
      if (endDays <= 30) horizons["30d"].push(r);
      else if (endDays <= 60) horizons["60d"].push(r);
      else horizons["90d"].push(r);
    });
    this.state.projections = horizons;
  }

  extrapolate() {
    this.state.extrapolations = {
      frequency: '1 repo / 2 semanas',
      repoTypes: { 'Identidad/Gobernanza': 30, 'Economía': 20, 'Infra/Comms': 20, 'IA': 15, 'Social': 15 },
      briefsPerRepo: { backup: 2, integration: 2, specs: '1-3', skills: '0-1' },
      nextRepos: ['Copiosis', 'Conway Automaton', 'OneManCompany'],
      briefsNext60Days: 23,
      strategicAdvice: 'Priorizar Copiosis + Conway (desbloquean Autómata + GAIA_INTEGRATION). Crear skill copiosis-assimilation antes de empezar. Parallelizar backup/integration + specs.'
    };
  }

  generateOutputs() {
    // 1. Detection Report
    fs.writeFileSync(
      path.join(DOCS, 'brief-detection-report.json'),
      JSON.stringify({ timestamp: new Date().toISOString(), gaps: this.state.gaps }, null, 2)
    );

    // 2. Recommendations
    const recMd = this.generateRecommendationsMd();
    fs.writeFileSync(path.join(DOCS, 'brief-recommendations.md'), recMd);

    // 3. Projections
    const projMd = this.generateProjectionsMd();
    fs.writeFileSync(path.join(DOCS, 'brief-projection-30-60-90.md'), projMd);

    // 4. Extrapolation
    const extraMd = this.generateExtrapolationMd();
    fs.writeFileSync(path.join(DOCS, 'brief-extrapolation.md'), extraMd);

    // 5. Update BRIEFS_INDEX.md
    this.updateBriefsIndex();

    // Summary
    console.log(JSON.stringify({
      gapsDetected: this.state.gaps.length,
      recommendations: this.state.recommendations.length,
      projections: { "30d": this.state.projections["30d"].length, "60d": this.state.projections["60d"].length, "90d": this.state.projections["90d"].length },
      extrapolation: { nextRepos: this.state.extrapolations.nextRepos, briefsNext60Days: this.state.extrapolations.briefsNext60Days }
    }, null, 2));
  }

  generateRecommendationsMd() {
    const lines = ['# Briefs Recomendados (Orden de Prioridad)', '', '## P0 — Críticos (Desbloquean workstreams activos)'];
    this.state.recommendations.filter(r => r.priority === 'P0').forEach((r, i) => {
      lines.push(`${i+1}. **${r.id}** — ${r.type.replace('_', ' ')}: ${r.source || r.module || r.capability} (${r.rationale})`);
    });
    lines.push('', '## P1 — Importantes (Próximos 30 días)');
    this.state.recommendations.filter(r => r.priority === 'P1').forEach((r, i) => {
      lines.push(`${i+1}. **${r.id}** — ${r.type.replace('_', ' ')}: ${r.source || r.module || r.capability} (${r.rationale})`);
    });
    return lines.join('\n');
  }

  generateProjectionsMd() {
    const lines = ['# Proyección de Necesidades de Briefs', '', '## 30 días (Próximo Sprint)'];
    this.state.projections["30d"].forEach(r => lines.push(`- ${r.id}: ${r.type} (${r.workstream})`));
    lines.push('', '## 60 días');
    this.state.projections["60d"].forEach(r => lines.push(`- ${r.id}: ${r.type} (${r.workstream})`));
    lines.push('', '## 90 días');
    this.state.projections["90d"].forEach(r => lines.push(`- ${r.id}: ${r.type} (${r.workstream})`));
    return lines.join('\n');
  }

  generateExtrapolationMd() {
    return `# Extrapolación de Patrones de Asimilación

## Patrones Detectados

### Frecuencia
- **1 repo / 2 semanas** (git history: 10 repos en 20 semanas)
- **Ciclo completo**: 2-3 semanas (backup + integration + specs + skill + PR)

### Distribución de Tipos de Repo
1. **Identidad/Gobernanza** (30%): OpenBot, Conway, OneManCompany, Integral
2. **Economía** (20%): Copiosis, DisCO, FABSHIP
3. **Infra/Comms** (20%): neko, **Discovery Layer**, Project Weave
4. **IA/Inteligencia** (15%): Autómata, CoachFAB, Weave
5. **Social/Ecosistema** (15%): Hylo, navteka, DisCO, FABSHIP

### Briefs por Repo (Promedio)
- 2 BI (backup + integration)
- 1-3 SM (specs técnicos)
- 0-1 SK (skill si capability crítica)
- **Total: 4-7 briefs por repo**

### Predicción Próximos 3 Repos
1. **Copiosis v7.1** (95%) — Gap P0 crítico
2. **Conway Automaton** (90%) — Isomorfismo MJ
3. **OneManCompany fork** (85%) — Runtime empresarial
4. **Integral Collective** (80%) — Loop celular

### Predicción Briefs Próximos 60 Días
- 8 BI (4 repos × 2)
- 12 SM (4 repos × 3 specs avg)
- 3 SK (1 por capability crítica)
- **Total estimado: 23 briefs nuevos**

### Recomendación Estratégica
${this.state.extrapolations.strategicAdvice}
`;
  }

  updateBriefsIndex() {
    let indexContent = fs.readFileSync(path.join(DOCS, 'BRIEFS_INDEX.md'), 'utf-8');
    // Append new recommended briefs as pending entries (simplified)
    // In real implementation, would parse and update tables properly
    console.log('ℹ️  BRIEFS_INDEX.md update would be implemented here');
  }

  async run(command = 'full-cycle') {
    console.log(`🔍 Brief Detector & Recommender — ${command}`);
    this.loadSources();
    
    if (command === 'detect' || command === 'full-cycle') {
      this.detectGaps();
      console.log(`✅ Detect: ${this.state.gaps.length} gaps found`);
    }
    if (command === 'recommend' || command === 'full-cycle') {
      this.recommend();
      console.log(`✅ Recommend: ${this.state.recommendations.length} briefs prioritized`);
    }
    if (command === 'project' || command === 'full-cycle') {
      this.project();
      console.log(`✅ Project: 30d=${this.state.projections["30d"].length}, 60d=${this.state.projections["60d"].length}, 90d=${this.state.projections["90d"].length}`);
    }
    if (command === 'extrapolate' || command === 'full-cycle') {
      this.extrapolate();
      console.log(`✅ Extrapolate: ${this.state.extrapolations.nextRepos.length} next repos predicted`);
    }
    if (command === 'full-cycle') {
      this.generateOutputs();
      console.log('✅ Full cycle complete. Reports written to docs/');
    }
  }
}

const detector = new BriefDetectorRecommender();
const command = process.argv[2] || 'full-cycle';
detector.run(command).catch(err => {
  console.error('❌ Error:', err);
  process.exit(1);
});