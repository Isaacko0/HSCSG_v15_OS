# BreadchainCoop — Bread-gnosis-pay (Integración HSCSG v15 OS)

**Fecha:** 2026-09-10  
**Fuente:** `breadchain_bread-gnosis-pay_backup.md`  
**Metodología:** hscsg-repo-assimilation (Fase 2: Integración — Triple Perspectiva)

---

## 👁️ Perspectiva 1: Usuario (Histórico / Referencia)

### Qué ve el usuario
Un proyecto hackathon de 2024 (marzo) para conectar Bread con Gnosis Pay. Contrato `Bread2GnosisPay.sol`, script de deploy `DeployYieldDisburser.s.sol`, frontend básico. 2 años sin desarrollo, 36 commits totales.

### Dolores resueltos (en su momento)
- **Bridge experiment**: Conectar Bread tokens con Gnosis Pay
- **Yield disbursement**: Distribuir yield a usuarios
- **Hackathon deployment**: Tracking manual via JSON

### Gaps
- **Legacy/abandonado**: No mantenimiento desde 2024
- **Reemplazado**: crowdstake.fun/ourcoop resuelven funding sin bridge
- **Scope mínimo**: Solo bridge + yield disburser
- **No docs**: Solo README básico

---

## 🤖 Perspectiva 2: LLM / Agente

### Qué ve el agente
- Foundry project básico (forge build/test/deploy)
- 1 contrato principal + 1 script deploy
- OpenZeppelin upgradeable dependency
- hackathon_deployment.json para tracking
- No AGENTS.md/CLAUDE.md

### Patrones explotables
| Patrón | Aplicación HSCSG |
|--------|------------------|
| Bridge contract | Vaso `infra:connect` pattern |
| Yield disburser | Autómata + Alráico distribution |
| Deployment tracking JSON | Orchestrator deploy manifest |
| OpenZeppelin upgradeable | Upgradable modules pattern |

---

## 🌐 Perspectiva 3: HSCSG v15 OS + CaaS

### Mapeo Directo

| Componente | Módulo HSCSG | Estado |
|------------|--------------|--------|
| Bridge contract | **Vaso infra:connect** | ✅ 6 vasos |
| Yield disburser | **Autómata Soberano + Alráico** | ✅ Existente |
| Deployment JSON | **Orchestrator manifest** | ✅ Orchestrator |
| Upgradeable proxy | **Upgradable modules** | 🟡 Concepto |

### Isomorfismos (4 detectados — total 74)

1. **Bridge = Vaso infra:connect** — Puentes inter-nodo federados
2. **Yield Disburser = Distribución Autómata** — E=V cycle distribution
3. **Deployment Tracking = Orchestrator Manifest** — Reproducible deploys
4. **Upgradeable = Module Proxy** — Actualizabilidad gobernada

---

## 🔧 Módulos Extraíbles (3 — total 32)

### 1. `bridge-pattern.ts` → `src/core/lib/bridge-pattern.ts`
```typescript
// Bridge pattern → Vaso infra:connect
export namespace BridgePattern {
  export interface Bridge<From, To> {
    lock(from: From, amount: Amount, auth: SovereignAuth): LockReceipt;
    unlock(to: To, receipt: LockReceipt, auth: SovereignAuth): UnlockResult;
    verify(receipt: LockReceipt): boolean;
  }
}
```

### 2. `yield-disburser.ts` → `src/core/lib/yield-disburser.ts`
```typescript
// Yield disbursement → Autómata distribution
export namespace YieldDisburser {
  export interface Disburser {
    calculateYield(pool: PoolState): YieldAmount;
    distribute(yield: YieldAmount, recipients: Recipient[]): DistributionResult;
    claim(recipient: Recipient, auth: SovereignAuth): ClaimResult;
  }
}
```

### 3. `deployment-manifest.ts` → `src/core/lib/deployment-manifest.ts`
```typescript
// Deployment tracking → Orchestrator manifest
export namespace DeploymentManifest {
  export interface Manifest {
    version: string;
    timestamp: Timestamp;
    contracts: ContractDeployment[];
    config: DeploymentConfig;
    verification: VerificationResult[];
  }
}
```

---

## 📋 Workstream Tasks (BC-071 a BC-073)

| Task | Descripción |
|------|-------------|
| BC-071 | Extraer bridge-pattern.ts → vaso infra:connect |
| BC-072 | Extraer yield-disburser.ts → autómata distribution |
| BC-073 | Extraer deployment-manifest.ts → orchestrator |

---

## 🎯 ADR

| ADR | Decisión |
|-----|----------|
| ADR-BC-071 | **Legacy only** — extraer patterns, no código |

---

## 📊 Métricas

| Métrica | Valor |
|---------|-------|
| Isomorfismos | 4 (total: 74) |
| Módulos | 3 (total: 32) |
| Tasks | 3 (total: 73) |

---

## 🔗 Enlaces

- Backup: `docs/breadchain_bread-gnosis-pay_backup.md`
- BRIEFS_INDEX: #36
- Workstream: `BREADCHAIN_INTEGRATION` (73 tasks)