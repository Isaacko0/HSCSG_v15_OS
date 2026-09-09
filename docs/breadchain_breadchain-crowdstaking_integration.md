# BreadchainCoop — Breadchain-crowdstaking (Archived) (Integración HSCSG v15 OS)

**Fecha:** 2026-09-10  
**Fuente:** `breadchain_breadchain-crowdstaking_backup.md`  
**Metodología:** hscsg-repo-assimilation (Fase 2: Integración — Triple Perspectiva)

---

## 👁️ Perspectiva 1: Usuario (Histórico / Archaeology)

### Qué ve el usuario
El frontend original de Breadchain Crowdstaking (2023), archivado junio 2024. Stack: Hardhat + Vite + React + Tailwind + Synpress. 476 commits, 10 estrellas. Reemplazado completamente por `crowdstake.fun`.

### Valor histórico
- **Arqueología de patrones**: Ver evolución Vite→Next.js, Hardhat→Foundry, MetaMask→Privy
- **Referencia de migración**: Qué se mantuvo, qué se reescribió
- **Storybook pattern**: Documentación componentes (pre-design-system)

---

## 🤖 Perspectiva 2: LLM / Agente

### Qué ve el agente
- Hardhat config + contracts + tests
- Vite + React + TypeScript frontend
- Synpress E2E (Cypress + MetaMask)
- Storybook component docs
- Volta + Yarn package management

### Patrones evolutivos (Legacy → Modern)

| Legacy Pattern | Modern Equivalent (crowdstake.fun) | HSCSG Application |
|----------------|-----------------------------------|-------------------|
| Hardhat JS/TS | Foundry Solidity/Rust | TypeScript core libs |
| Vite React | Next.js 15 App Router | SPA offline-first |
| MetaMask injected | Privy embedded + gasless | Sovereign identity (Capa 1) |
| Local Tailwind | @breadcoop/ui design system | Matema generativo |
| Synpress E2E | Anvil fork + GIF pipeline | Evidence collector |
| Single chain | Multi-chain familyId | Federated nodes (Vasos) |
| Hardhat deploy | Forge scripts | Orchestrator tasks |
| Yarn/Volta | pnpm + Node 24 | Hermes Agent managed |
| Storybook | Design system docs | DESIGN.md + skills |

---

## 🌐 Perspectiva 3: HSCSG v15 OS + CaaS

### Mapeo: Evolución → HSCSG Patterns

| Evolución Breadchain | Patrón HSCSG |
|---------------------|--------------|
| Hardhat → Foundry | **TypeScript nativo** (no EVM runtime) |
| Vite → Next.js | **SPA offline-first** (no SSR) |
| MetaMask → Privy | **Identidad Soberana** (no wallet dependency) |
| Local Tailwind → Design System | **Matema Generativo** (código, no config) |
| Synpress → Anvil+GIF | **Evidence Collector** (verificación real) |
| Single → Multi-chain | **Nodos Federados** (Vaso infra:connect) |
| Hardhat scripts → Forge | **Orchestrator Tasks** (ejecutables) |
| Yarn → pnpm | **Skill-managed deps** |
| Storybook → Design Docs | **Brief-driven Design** |

### Isomorfismos Evolutivos (10 — total 84)

1. **Build Tool Evolution = HSCSG Toolchain**
   - Hardhat/Vite → Foundry/Next.js → Hermes Agent + Skills
   - Cada salto = abstracción mayor, menos config manual

2. **Wallet Evolution = Soberanía Identitaria**
   - Injected → Embedded → Sovereign (Capa 1 Núcleo/Contenedor)
   - Zero external deps = máxima soberanía

3. **Styling Evolution = Matema Generativo**
   - CSS → Tailwind → Design System → Generative Code
   - Config → Components → Algorithms

4. **Testing Evolution = Evidence-Based**
   - Unit → E2E Mock → Fork Real + Recording
   - Verificación = evidencia, no confianza

5. **Chain Evolution = Federated Nodes**
   - Single → Multi (familyId) → Nodos HSCSG (Vasos)
   - Bridge → Native federation

6. **Deploy Evolution = Orchestrator**
   - Scripts → Scripts → Tasks (con deps, params, verification)

7. **Package Evolution = Skill Management**
   - Yarn → pnpm → Skills (versionados, compuestos)

8. **Docs Evolution = Brief-Driven**
   - Storybook → Design System → DESIGN.md + Briefs
   - Visual → Spec → Executable

9. **Architecture Evolution = Monorepo → Skills**
   - Monorepo → Monorepo → Skills + Libs + Apps
   - Colocation → Composition

10. **Governance Evolution = κ-Governance**
    - Centralized → DAO → κ-Governance (VIA-25)
    - Token → Stake → Contribution (AUT×CDS)

---

## 🔧 Módulos Extraíbles (2 — total 34)

### 1. `legacy-evolution-mapping.ts` → `src/core/lib/legacy-evolution-mapping.ts`
```typescript
// Mapeo de evolución de patrones para referencia histórica
export namespace LegacyEvolution {
  export interface EvolutionStep<Legacy, Modern, HSCSG> {
    legacy: Legacy;           // Pattern in archived repo
    modern: Modern;           // Pattern in current Bread repo
    hscsg: HSCSG;             // Pattern in HSCSG v15 OS
    rationale: string;        // Why the evolution happened
  }
  
  // Documented evolutions
  export const evolutions: EvolutionStep<any, any, any>[] = [
    {
      legacy: 'Hardhat (JS/TS)',
      modern: 'Foundry (Solidity/Rust)',
      hscsg: 'TypeScript Core Libs (no EVM)',
      rationale: 'Remove EVM runtime dependency; pure logic'
    },
    {
      legacy: 'Vite + React',
      modern: 'Next.js 15 App Router',
      hscsg: 'SPA Offline-First (Vite/React or similar)',
      rationale: 'Static export, no server, full client control'
    },
    {
      legacy: 'MetaMask Injected',
      modern: 'Privy Embedded + Gasless',
      hscsg: 'Sovereign Identity (Capa 1) + Local Signing',
      rationale: 'Zero external dependencies; full sovereignty'
    },
    // ... 7 more
  ];
}
```

### 2. `archaeology-patterns.ts` → `src/core/lib/archaeology-patterns.ts`
```typescript
// Patrones de arqueología de código para asimilación futura
export namespace ArchaeologyPatterns {
  // Detect legacy patterns in external repos
  export interface LegacyDetector {
    detectHardhat(repo: RepoAnalysis): boolean;
    detectViteReact(repo: RepoAnalysis): boolean;
    detectMetaMaskOnly(repo: RepoAnalysis): boolean;
    detectLocalTailwind(repo: RepoAnalysis): boolean;
    detectSynpress(repo: RepoAnalysis): boolean;
    detectSingleChain(repo: RepoAnalysis): boolean;
  }
  
  // Map to modern equivalents
  export interface ModernMapper {
    mapBuildTool(legacy: 'hardhat' | 'vite' | 'webpack'): ModernTool;
    mapWallet(legacy: 'metamask' | 'walletconnect'): ModernWallet;
    mapStyling(legacy: 'css' | 'tailwind-local'): ModernStyling;
    mapTesting(legacy: 'synpress' | 'cypress'): ModernTesting;
    mapChain(legacy: 'single' | 'multi'): ModernChain;
    mapDeploy(legacy: 'hardhat-script' | 'forge'): ModernDeploy;
    mapPackage(legacy: 'yarn' | 'npm' | 'pnpm'): ModernPackage;
    mapDocs(legacy: 'storybook' | 'docusaurus'): ModernDocs;
  }
  
  // HSCSG Target Patterns
  export type ModernTool = 'hermes-skills' | 'orchestrator';
  export type ModernWallet = 'sovereign-identity' | 'embedded-gasless';
  export type ModernStyling = 'matema-generative' | 'design-md';
  export type ModernTesting = 'evidence-collector' | 'fork-verification';
  export type ModernChain = 'federated-nodes' | 'vaso-infraconnect';
  export type ModernDeploy = 'orchestrator-tasks' | 'skills';
  export type ModernPackage = 'skill-dependencies';
  export type ModernDocs = 'brief-driven' | 'design-md';
}
```

---

## 📋 Workstream `BREADCHAIN_INTEGRATION` — Tasks Finales (BC-074 a BC-075)

| Task ID | Descripción | Dependencia | Estado |
|---------|-------------|-------------|--------|
| BC-074 | Extraer legacy-evolution-mapping.ts | BC-061 | 🟡 Pendiente |
| BC-075 | Extraer archaeology-patterns.ts (para asimilación futura) | BC-062 | 🟡 Pendiente |

**Total workstream BREADCHAIN_INTEGRATION: 75 tasks** (10+10+10+10+10+10+10+3+2)

---

## 🎯 Decisiones de Diseño (ADR) — Legacy Specific

| ADR | Decisión | Razón |
|-----|----------|-------|
| ADR-BC-071 | **NO asimilar código legacy** | Solo patrones evolutivos para referencia |
| ADR-BC-072 | **Documentar evolución = Prevent Repeat** | Evitar reinventar ruedas en asimilaciones futuras |
| ADR-BC-073 | **Archived = Read-only reference** | No mantener, solo consultar |

---

## 📊 Métricas de Asimilación (Breadchain-crowdstaking)

| Métrica | Valor |
|---------|-------|
| Archivos fuente analizados | ~60 líneas README + estructura |
| Isomorfismos detectados | 10 (total acumulado: 84) |
| Módulos extraíbles | 2 (total acumulado: 34) |
| Workstream tasks nuevos | 2 (total acumulado: 75) |
| Briefs generados | 2 (backup + integration) |
| Líneas código nuevo estimado | ~300 TS + ~100 MD |
| Tiempo estimado implementación | 1 semana (1 dev) |

---

## 🔗 Enlaces Cruzados

- **Backup:** `docs/breadchain_breadchain-crowdstaking_backup.md`
- **Integración:** `docs/breadchain_breadchain-crowdstaking_integration.md` (este archivo)
- **BRIEFS_INDEX:** Entrada #37 (pendiente actualizar)
- **fuentes_indice.json:** Fuente #37 (pendiente actualizar)
- **Sucesor:** `BreadchainCoop/crowdstake.fun` (fuente #30)
- **Workstream:** `BREADCHAIN_INTEGRATION` (75 tasks totales)
- **Skills relacionadas:** `hscsg-repo-assimilation`, `hscsg-document-architect`, `brief-detector-recommender`

---

## 📈 RESUMEN FINAL — ASIMILACIÓN BREADCHAINCOOP COMPLETA

### 9 Repos Asimilados

| # | Repo | Tipo | Backup | Integración | Isomorfismos | Módulos | Tasks |
|---|------|------|--------|-------------|--------------|---------|-------|
| 1 | bread-docs | Documentation | ✅ | ✅ | 10 | 4 | 10 |
| 2 | crowdstake.fun | Protocol Monorepo | ✅ | ✅ | 10 | 5 | 10 |
| 3 | ourcoop | Cooperative Fork | ✅ | ✅ | 10 | 4 | 10 |
| 4 | bread-design-system | Design System | ✅ | ✅ | 10 | 4 | 10 |
| 5 | coopstable-contracts | Stablecoin (Soroban) | ✅ | ✅ | 10 | 4 | 10 |
| 6 | monorepo | Commonware Fork | ✅ | ✅ | 10 | 4 | 10 |
| 7 | commonware-restaking | AVS Contracts | ✅ | ✅ | 10 | 4 | 10 |
| 8 | bread-gnosis-pay | Legacy Bridge | ✅ | ✅ | 4 | 3 | 3 |
| 9 | breadchain-crowdstaking | Archived Frontend | ✅ | ✅ | 10 | 2 | 2 |
| **TOTAL** | | | **18 files** | | **84** | **34** | **75** |

### Archivos Generados (18)

**Backups (9):**
1. `breadchain_bread-docs_backup.md`
2. `breadchain_crowdstake.fun_backup.md`
3. `breadchain_ourcoop_backup.md`
4. `breadchain_bread-design-system_backup.md`
5. `breadchain_coopstable-contracts_backup.md`
6. `breadchain_monorepo_backup.md`
7. `breadchain_commonware-restaking-contracts_backup.md`
8. `breadchain_bread-gnosis-pay_backup.md`
9. `breadchain_breadchain-crowdstaking_backup.md`

**Integraciones (9):**
1. `breadchain_bread-docs_integration.md`
2. `breadchain_crowdstake.fun_integration.md`
3. `breadchain_ourcoop_integration.md`
4. `breadchain_bread-design-system_integration.md`
5. `breadchain_coopstable-contracts_integration.md`
6. `breadchain_monorepo_integration.md`
7. `breadchain_commonware-restaking-contracts_integration.md`
8. `breadchain_bread-gnosis-pay_integration.md`
9. `breadchain_breadchain-crowdstaking_integration.md`

### Workstream `BREADCHAIN_INTEGRATION` — 75 Tasks

Listo para añadir a `scripts/orchestrator-next-steps.cjs`

### Próximos Pasos Inmediatos

1. **Actualizar BRIEFS_INDEX.md v1.5** con 9 nuevas fuentes (#29-#37)
2. **Actualizar fuentes_indice.json** con 9 entradas
3. **Añadir workstream BREADCHAIN_INTEGRATION** (75 tasks) al orchestrator
4. **Commit + Push** a GitHub
5. **Ejecutar primeras tasks** (BC-001, BC-011, BC-021, BC-031, BC-041, BC-051, BC-061, BC-071)

---

*Integración generada por HSCSG v15 OS — Metodología hscsg-repo-assimilation (Fase 2: Integración — Triple Perspectiva Usuario·LLM·HSCSG+CaaS)*