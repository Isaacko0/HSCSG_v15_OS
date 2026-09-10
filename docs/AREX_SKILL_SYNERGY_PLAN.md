# SINERGIA AREX-SKILL ↔ HSCSG v15 OS
## Plan de Integración y Sinergia Estratégica

**Fecha:** 2026-09-10  
**Versión:** 1.0  
**Estado:** PLAN DE ACCIÓN — Listo para ejecución

---

## 1. ANÁLISIS DE COMPATIBILIDAD

### 1.1 Formato Común: SKILL.md (Agent Skills Format)

| Aspecto | AREX-Skill | HSCSG v15 OS | Compatibilidad |
|---------|------------|--------------|----------------|
| **Formato Skill** | `SKILL.md` + `references/` + `scripts/` | `SKILL.md` (Hermes) + `references/` + `scripts/` | ✅ **100% Compatible** |
| **Frontmatter** | YAML con scope, routing, workflow, validation | YAML con name, description, category | ✅ **Mapeable 1:1** |
| **Estructura** | `skill/` → `SKILL.md` + `references/` + `scripts/` | `skills/` → `SKILL.md` + `references/` + `scripts/` | ✅ **Idéntica** |
| **Licencia** | Por skill (metadato en SKILL.md) | Por skill (en SKILL.md) | ✅ **Compatible** |

### 1.2 Arquitectura de Skills

| Componente | AREX-Skill | HSCSG v15 OS | Sinergia |
|------------|------------|--------------|----------|
| **Colecciones** | `repositories/`, `papers/`, `task-oriented/` | Workstreams (12) + Skills (18) | **Mapeable** |
| **Router** | `repo-skills-router` (progressive disclosure) | Orchestrator (auto-execute + workstreams) | **Complementario** |
| **Instalación** | `disco repo-skills install` | `hermes skill install <url>` | **Interoperable** |
| **Formato Portable** | Agent Skills Format (SKILL.md) | Hermes Skill Format (SKILL.md) | ✅ **Estándar Común** |

---

## 2. OPORTUNIDADES DE SINERGIA IDENTIFICADAS

### 2.1 Importación Masiva de Skills AREX → HSCSG

| Categoría AREX | Skills Disponibles | Valor HSCSG | Prioridad |
|----------------|-------------------|-------------|-----------|
| **ML Engineering** | vLLM, SGLang, Unsloth, Diffusers, FAISS | Automatización ML en autómata | **ALTA** |
| **Computer Vision** | AlphaFold2, LeRobot, Diffusers | Biomédico / Robótica | **MEDIA** |
| **LLM/Ops** | vLLM, SGLang, Unsloth, FAISS | Infraestructura LLM local | **ALTA** |
| **Data Science** | FAISS, Scikit-learn, Pandas skills | Pipeline datos HSCSG | **MEDIA** |
| **Scientific Computing** | AlphaFold2, JAX, NumPy skills | Investigación autómata | **MEDIA** |
| **Model Deployment** | vLLM, SGLang, Triton, TensorRT | Despliegue autómata | **ALTA** |
| **Training Infra** | DeepSpeed, FSDP, Megatron-LM | Entrenamiento distribuido | **MEDIA** |

**Total: ~5,000 skills → Filtrar ~500 high-value para HSCSG**

### 2.2 Integración Router + Orchestrator

```
┌─────────────────────────────────────────────────────────────────┐
│                    HSCSG ORCHESTRATOR v2.0                       │
├─────────────────────────────────────────────────────────────────┤
│  ┌─────────────────┐    ┌─────────────────┐                    │
│  │  HSCSG Router   │    │  AREX Router    │                    │
│  │  (Workstreams)  │◄──►│  (Area→Family)  │                    │
│  └────────┬────────┘    └────────┬────────┘                    │
│           │                      │                             │
│           ▼                      ▼                             │
│  ┌─────────────────────────────────────────┐                  │
│  │         UNIFIED SKILL REGISTRY          │                  │
│  │  HSCSG Skills (18) + AREX Skills (500+) │                  │
│  └─────────────────────────────────────────┘                  │
└─────────────────────────────────────────────────────────────────┘
```

### 2.3 DisCo Creator → HSCSG Skill Factory

| Flujo Actual | Flujo Integrado |
|--------------|-----------------|
| `disco repo-skills create` → AREX Skill | `hscsg-assimilate repo` → HSCSG Skill + Auto-export AREX |
| Manual skill creation | **Auto-assimilate** repo → HSCSG Skill + Auto-export AREX format |
| Manual verification | **Auto-verification** via HSCSG orchestrator + AREX validation |

---

## 3. PLAN DE IMPLEMENTACIÓN (3 FASES)

### FASE 1: FUNDACIÓN (Semanas 1-2)

#### 1.1 Crear Adaptador AREX → HSCSG
```typescript
// src/core/lib/arex-adapter.ts
interface AREXSkill {
  id: string;
  name: string;
  description: string;
  category: 'repositories' | 'papers' | 'task-oriented';
  area: string;
  family: string;
  repo: string;           // owner/repo
  skillPath: string;      // path to skill in AREX repo
  license: string;        // from SKILL.md frontmatter
  tags: string[];
  routing: {
    area: string;
    family: string;
    keywords: string[];
  };
  validation: {
    checks: string[];
    recovery: string[];
  };
}

interface HSCSGSkill {
  // ... existing HSCSG skill format
  arexMetadata?: AREXSkill;
  source: 'hscsg-native' | 'arex-imported' | 'hybrid';
}

class AREXAdapter {
  async importSkill(arexSkillPath: string): Promise<HSCSGSkill>
  async exportToAREX(hscsgSkill: HSCSGSkill): Promise<AREXSkill>
  async syncWithAREXRegistry(): Promise<void>
  async validateLicenseCompatibility(license: string): boolean
}
```

#### 1.2 Crear Importador AREX → HSCSG Registry
```bash
# Script: scripts/import-arex-skills.ts
# Uso: npx tsx scripts/import-arex-skills.ts --area "ml-engineering" --limit 50
```

#### 1.3 Mapeo Licencias AREX → HSCSG
```typescript
// scripts/license-mapper.ts
const LICENSE_COMPATIBILITY = {
  'Apache-2.0': { compatible: true, hscsgLicense: 'MIT' },
  'MIT': { compatible: true, hscsgLicense: 'MIT' },
  'BSD-3-Clause': { compatible: true, hscsgLicense: 'MIT' },
  'BSD-2-Clause': { compatible: true, hscsgLicense: 'MIT' },
  'Apache-1.0': { compatible: false, reason: 'Incompatible with MIT' },
  'GPL-3.0': { compatible: false, reason: 'Copyleft fuerte' },
  'AGPL-3.0': { compatible: false, reason: 'Copyleft fuerte + SaaS trigger' },
  'Custom': { compatible: 'case-by-case', review: 'legal' }
};
```

### 1.4 Pipeline Importación Automatizada
```bash
# Pipeline: scripts/import-arex-pipeline.ts
# 1. Descargar AREX skills index (repo index.jsonl)
# 2. Filtrar por área/familia/licencia compatible
# 3. Descargar skill completo (SKILL.md + references + scripts)
# 4. Validar licencia compatible
# 5. Convertir a formato HSCSG Skill
# 6. Generar HSCSG Skill + metadata AREX
# 7. Registrar en HSCSG Skill Registry
# 8. Actualizar Orchestrator Registry
# 9. Commit + Push
```

---

### FASE 2: INTEGRACIÓN ROUTER + ORCHESTRATOR (Semanas 3-4)

### 2.1 Unified Skill Router
```typescript
// src/core/lib/unified-router.ts
interface UnifiedRouter {
  // HSCSG Router (workstreams, auto-execute)
  hscsgRouter: HSCSGRouter;
  
  // AREX Router (area → family → repo → skill)
  arexRouter: AREXRouter;
  
  // Unified routing logic
  async route(request: SkillRequest): Promise<SkillMatch[]> {
    // 1. Try HSCSG Router first (native skills, workstreams)
    const hscsgMatches = await this.hscsgRouter.route(request);
    
    // 2. If no match or low confidence, try AREX Router
    if (hscsgMatches.length === 0 || hscsgMatches[0].confidence < 0.7) {
      const arexMatches = await this.arexRouter.route(request);
      return this.mergeAndRank(hscsgMatches, arexMatches);
    }
    
    return hscsgMatches;
  }
  
  // Progressive disclosure: HSCSG → AREX → External
  async progressiveRoute(request: SkillRequest): Promise<RoutePlan> {
    const plan: RoutePlan = { steps: [] };
    
    // Step 1: HSCSG Native Skills (highest priority)
    plan.steps.push({ source: 'hscsg-native', skills: await this.hscsgRouter.route(request) });
    
    // Step 2: AREX Imported Skills (medium priority)
    plan.steps.push({ source: 'arex-imported', skills: await this.arexRouter.route(request) });
    
    // Step 3: External/DisCo Creator (lowest priority)
    plan.steps.push({ source: 'disco-creator', action: 'create-skill-on-demand' });
    
    return plan;
  }
}
```

### 2.2 Integración Orchestrator Auto-Execute
```typescript
// Modificación en orchestrator-next-steps.js
// Agregar workstream AREX_INTEGRATION

const AREX_INTEGRATION_TASKS = [
  { id: 'AREX-001', title: 'Importar top 100 AREX skills (ML ops)', deps: [], effort: 3, value: 90 },
  { id: 'AREX-002', title: 'Crear Unified Router HSCSG+AREX', deps: ['AREX-001'], effort: 5, value: 95 },
  { id: 'AREX-003', title: 'Integrar AREX Router en Orchestrator auto-execute', deps: ['AREX-002'], effort: 3, value: 85 },
  { id: 'AREX-004', title: 'Auto-import pipeline para skills nuevos AREX', deps: ['AREX-002'], effort: 4, value: 80 },
  { id: 'AREX-005', title: 'Skill Marketplace: publicar skills AREX importados', deps: ['AREX-003'], effort: 3, value: 75 }
];
```

---

### FASE 3: DISCO CREATOR + HSCSG SKILL FACTORY (Semanas 5-6)

### 3.1 DisCo Creator → HSCSG Skill Factory
```typescript
// src/core/lib/disco-skill-factory.ts
interface DisCoCreatorConfig {
  anchor: string;                    // repo URL or problem statement
  mode: 'task-agnostic' | 'task-oriented';
  targetFormat: 'hscsg' | 'arex' | 'both';
  validationLevel: 'strict' | 'standard' | 'permissive';
}

class DisCoSkillFactory {
  async createSkillFromRepo(repoUrl: string, config: DisCoCreatorConfig): Promise<HSCSGSkill | AREXSkill | Both> {
    // 1. Usar DisCo Creator para analizar repo
    const discoResult = await this.runDisCoCreator(repoUrl, config);
    
    // 2. Convertir a formato HSCSG nativo
    const hscsgSkill = this.convertToHSCSG(discoResult);
    
    // 3. Si targetFormat incluye 'arex', exportar también formato AREX
    const arexSkill = config.targetFormat.includes('arex') 
      ? this.convertToAREX(discoResult) 
      : null;
    
    // 4. Validar y registrar en HSCSG Registry
    await this.registerInHSCSG(hscsgSkill);
    
    // 5. Si AREX, exportar a formato portable
    if (arexSkill) {
      await this.exportToAREXFormat(arexSkill);
    }
    
    return { hscsgSkill, arexSkill };
  }
  
  async runDisCoCreator(repoUrl: string, config: DisCoCreatorConfig): Promise<DisCoResult> {
    // Ejecutar DisCo Creator via CLI o API
    const cmd = `disco repo-skills create ${repoUrl} --mode ${config.mode}`;
    // ... ejecutar y parsear resultado
  }
}
```

### 3.2 Pipeline: Repo → HSCSG Skill + AREX Export
```bash
# Comando unificado: hscsg-assimilate repo <url> --export-arex
# 1. Clona repo
# 2. Ejecuta DisCo Creator (scope → ground → construct → verify)
# 3. Genera HSCSG Skill nativo (SKILL.md + refs + scripts + types)
# 4. Exporta formato AREX (SKILL.md + refs + scripts + routing metadata)
# 4. Registra en HSCSG Skill Registry
# 5. Opcional: Push a AREX-Skill repo (PR automático)
# 5. Actualiza Orchestrator Registry
```

### 3.3 Skill Marketplace Unificado
```typescript
// src/core/lib/unified-skill-marketplace.ts
class UnifiedSkillMarketplace {
  async search(query: string, filters: { source?: 'hscsg' | 'arex' | 'both'; area?: string; license?: string }): Promise<SkillSearchResult[]>
  async install(skillId: string, target: 'hscsg' | 'arex' | 'both'): Promise<InstallResult>
  async publish(skill: HSCSGSkill | AREXSkill, target: 'hscsg-registry' | 'arex-registry' | 'both'): Promise<PublishResult>
  async syncWithAREX(): Promise<SyncResult>  // Bidirectional sync
}
```

---

## 4. IMPLEMENTACIÓN TÉCNICA DETALLADA

### 4.1 Estructura de Archivos Nueva

```
hscsg-v15-os/
├── src/
│   ├── core/
│   │   ├── lib/
│   │   │   ├── arex-adapter.ts           # NEW: Adapter AREX ↔ HSCSG
│   │   │   ├── arex-router.ts            # NEW: AREX Router integration
│   │   │   ├── unified-router.ts         # NEW: Unified Router HSCSG+AREX
│   │   │   ├── arex-adapter.ts           # NEW: Adapter AREX ↔ HSCSG
│   │   │   ├── disco-skill-factory.ts    # NEW: DisCo Creator → HSCSG Skill
│   │   │   ├── arex-adapter.ts           # NEW: License compatibility checker
│   │   │   ├── unified-router.ts         # NEW: Unified Router
│   │   │   ├── skill-registry.ts         # EXISTING: extend for AREX
│   │   │   └── tribal-vocab.ts           // EXISTING: extend with AREX terms
│   │   ├── state/
│   │   │   ├── arex-skills.ts            // NEW: AREX skills state
│   │   │   └── skill-registry.ts         // EXTEND: include AREX skills
│   │   └── components/
│   │       └── SkillMarketplace.tsx      // EXTEND: AREX skills
│   ├── scripts/
│   │   ├── import-arex-skills.ts         # NEW: Import pipeline
│   │   ├── arex-license-checker.ts       # NEW: License validator
│   │   ├── arex-sync.ts                  # NEW: Bidirectional sync
│   │   └── orchestrator-next-steps.js    // EXTEND: add AREX_INTEGRATION workstream
│   └── app/
│       └── screens/
│           └── SkillMarketplace.tsx      // EXTEND: AREX skills tab
├── skills/
│   ├── hscsg-arex-adapter/               # NEW: Skill para adapter
│   ├── hscsg-disco-factory/              # NEW: Skill para DisCo Factory
│   └── hscsg-arex-importer/              # NEW: Skill para importación
├── docs/
│   ├── AREX_INTEGRATION_GUIDE.md         # NEW
│   ├── AREX_SKILL_IMPORT_GUIDE.md        # NEW
│   └── UNIFIED_ROUTER_ARCHITECTURE.md    # NEW
└── skills/hscsg-repo-assimilation/
    └── references/
        └── arex-integration-patterns.md  # NEW: Patterns doc
```

---

## 5. ROADMAP DE EJECUCIÓN

| Semana | Fase | Entregable | Responsable |
|--------|------|------------|-------------|
| **1-2** | **FASE 1** | Adapter AREX→HSCSG + Importador + License Checker | Dev Team |
| **3-4** | **FASE 2** | Unified Router + Orchestrator Integration + Workstream AREX | Dev Team |
| **5-6** | **FASE 3** | DisCo Skill Factory + Marketplace Unificado + Docs | Dev Team + Docs |

### Métricas de Éxito

| Métrica | Target Semana 6 |
|---------|-----------------|
| Skills AREX importados compatibles | ≥ 200 skills |
| Skills nativos HSCSG creados via DisCo | ≥ 20 skills |
| Unified Router accuracy | > 90% correct routing |
| Orchestrator auto-execute con AREX | 100% tasks completados |
| Skill Marketplace activo | ≥ 50 skills publicados |
| License compliance rate | 100% compatible |

---

## 5. PRIMER PASO INMEDIATO: EXPLORACIÓN TÉCNICA

```bash
# 1. Clonar AREX-Skill para análisis local
git clone https://github.com/VectorSpaceLab/AREX-Skill.git /tmp/AREX-Skill

# 2. Explorar estructura skills
ls -la /tmp/AREX-Skill/skills/repositories/repo-skills/ | head -20

# 3. Examinar un skill ejemplo (vllm)
cat /tmp/AREX-Skill/skills/repositories/repo-skills/vllm/SKILL.md

# 4. Examinar router
cat /tmp/AREX-Skill/skills/repositories/repo-skills-router/SKILL.md

# 5. Probar DisCo CLI
curl -fsSL https://github.com/VectorSpaceLab/AREX-Skill/releases/latest/download/install-disco.sh | sh
disco repo-skills install
disco repo-skills status

# 6. Probar importar skill vllm a HSCSG
# (requiere implementar adapter primero)
```

---

## 6. PRÓXIMO PASO INMEDIATO

**¿Ejecutar exploración técnica ahora?** (Paso 1-6 arriba)

Esto nos dará:
1. Estructura real de skills AREX
2. Formato exacto SKILL.md de AREX
3. Compatibilidad real licencia por licencia
4. Viabilidad técnica importación masiva
5. Base para implementar adapter

**¿Proceder con exploración técnica ahora?**