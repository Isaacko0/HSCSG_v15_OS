# BreadchainCoop — Crowdstake.fun (Integración HSCSG v15 OS)

**Fecha:** 2026-09-10  
**Fuente:** `breadchain_crowdstake.fun_backup.md`  
**Metodología:** hscsg-repo-assimilation (Fase 2: Integración — Triple Perspectiva)

---

## 👁️ Perspectiva 1: Usuario (Comunidad / Creador de Pool)

### Qué ve el usuario
Una dapp limpia: "Deploy a pool" → elige chains → 1 tx → shareable link. Deposita fondos → ve yield acumularse → vota cada ciclo (100 puntos, 1p1v) → ve distribución a proyectos → retira principal 1:1 cuando quiere. Todo gasless (Privy), cross-chain nativo, funciona en Telegram.

### Dolores resueltos
- **Bootstrapping funding**: Pool → yield sostenible para proyectos comunitarios
- **Gobernanza real**: 1p1v, no plutocracia (stake-weighted)
- **Cross-chain sin fricción**: Una firma, todas las chains
- **Sin custodia técnica**: Principal siempre retiradero, no lockup
- **Mobile nativo**: Telegram Mini App zero-install

### Gaps desde vista usuario
- Solo Gnosis/Arbitrum/Optimism (Ethereum pending)
- Yield strategies limitadas (sDAI, SexyDai)
- Requiere Privy para gasless (fallback self-pay)
- No hay "pool templates" pre-configurados

---

## 🤖 Perspectiva 2: LLM / Agente (Claude Code, OpenCode, Hermes)

### Qué ve el agente
- **AGENTS.md**: Arquitectura completa, command list, conventions
- **CLAUDE.md**: Auto-read, tool config
- **contracts/src/**: Solidity tipado, 297 tests, patterns claros
- **src/hooks/use-tx.ts**: Gasless cross-chain pattern reutilizable
- **e2e/**: 70/70 tests, anvil fork, GIF pipeline committed
- **Deploy script**: Single-tx, multi-chain, env vars documentadas

### Patrones explotables para HSCSG
| Patrón Crowdstake | Aplicación HSCSG |
|-------------------|------------------|
| `use-tx.ts` → sign once, submit everywhere | `gasless-crosschain.ts` → Vaso infra:connect + governance:sync |
| `DeployGnosis.s.sol` → 1 tx deploy | `deploy-wizard.cjs` → Orchestrator task |
| `InstanceResolver` client-side | `static-instance-resolver.ts` → Offline-first SPA |
| `TelegramMiniApp` detection + injection | `telegram-miniapp.ts` → PWA/Capacitor futuro |
| `ERC4626` vault pattern | `BaseMaterialVault` → ZNU + CaaS vault |
| `DistributionStrategy` (Prop/Equal/Split) | `KappaDistributionStrategy` → VIA-25 |
| `RecipientRegistry` democratic governance | `TrustBridgeRegistry` → Vaso trust:bridge |
| `familyId` deterministic cross-chain | `NodoFederadoId` → Vaso governance:sync |

### Fortalezas para agentes
- TypeScript estricto en frontend + Solidity en contracts
- Tests exhaustivos (297 forge + 70 e2e)
- Patterns claros, bien documentados en AGENTS.md
- Monorepo pnpm workspace (separation of concerns)

### Debilidades para agentes
- EVM-specific (Solidity, Foundry, Privy, wagmi)
- Gasless requiere Privy infra (centralized dependency)
- Cross-chain = EVM chains only (no generic)
- Telegram Mini App = Telegram-specific API

---

## 🌐 Perspectiva 3: HSCSG v15 OS + CaaS (Sistema Operativo Nodo)

### Mapeo Directo a Módulos HSCSG

| Componente Crowdstake | Módulo HSCSG | Estado | Acción |
|----------------------|--------------|--------|--------|
| Pool (principal + yield) | **Base Material + CaaS + ZNU** | ✅ Existente | Extraer lógica pura crowdstaking |
| Yield Strategy (sDAI, SexyDai) | **Estrategias Base Material (Pilares 2-7)** | 🟡 Parcial | Mapear a 13 Pilares × 7 Capas |
| DistributionManager | **Autómata Soberano + Distribución** | ✅ Existente | Enriquecer con strategies |
| CycleModule (ciclos) | **Sistema Alráico (6 loops + γ-CARMIS)** | ✅ Existente | Alinear ciclos → loops |
| VotingModule (1p1v, 100pts) | **Kappa Governance (VIA-25)** | ✅ Código en skill | Integrar 100-point voting |
| RecipientRegistry (democratic) | **Vaso trust:bridge + governance:sync** | ✅ 6 vasos | Mapear registry → vasos |
| Cross-chain (familyId, EIP-712) | **Nodos Federados (Vaso infra:connect)** | 🟡 Parcial | Implementar NodoFederadoId |
| Gasless (Privy EIP-7702) | **Soberanía Computacional** | 🟡 Concepto | Implementar sin Privy dependency |
| Static Export + Client Resolve | **Offline-First SPA** | ✅ Existente | Alinear patterns |
| Telegram Mini App | **Accesibilidad Nodo Móvil** | 🟡 Futuro | PWA/Capacitor/Tauri |
| Deploy Wizard (1 tx) | **Orchestrator Deploy Task** | ✅ Orchestrator | Crear task deploy-node |
| Design System (@breadcoop/ui) | **Matemas + DESIGN.md** | ✅ MATEMAS_GRIMORIO | Sincronizar tokens |

### Isomorfismos Profundos (10 detectados)

1. **Pool = Base Material Vivo**
   - Principal intocable = Ley I (no dañar base material)
   - Yield = excedente regenerativo (AUT × CDS)
   - Shares = participación soberana (no especulativa)

2. **Crowdstaking = CaaS Regenerativo**
   - Acceso por contribución (deposit) → yield distribuido por gobernanza
   - No pago por acceso, pago por participación en base material

3. **1p1v 100pts = κ-Governance (VIA-25)**
   - Triaxial verification: incapacidad + lucidez + resonancia
   - 100 puntos = presupuesto de atención por ciclo
   - Top-N funding = κ-distribution

4. **Cross-chain Family = Nodos Federados**
   - familyId determinístico = NodoFederadoId
   - Sign once, count everywhere = Vaso governance:sync
   - Gasless = Soberanía computacional (no relay)

5. **Static Export = Offline-First SPA**
   - Una build, resuelve client-side = HSCSG architecture
   - Shareable link = Nodo portable (USB, IPFS, local)

6. **Deploy Wizard = Orchestrator Task**
   - 1 tx → 1 comando `orchestrator run deploy-node`
   - Env vars → Config YAML/TOML en `config/`

7. **RecipientRegistry = Trust Bridge**
   - Democratic propose/approve/deny = Vaso trust:bridge
   - Admin sync everywhere = Vaso governance:sync

8. **Yield Strategies = Base Material Strategies**
   - sDAI → Energía solar comunitaria (Pilar 2)
   - SexyDai → Alimentos regenerativos (Pilar 3)
   - Custom → Herramientas/productivas (Pilar 4)

9. **CycleModule = Sistema Alráico Loops**
   - Cycle = Loop γ-CARMIS (resonancia + κ)
   - Vote → Distribute → Withdraw = E=V cycle

10. **Telegram Mini App = Nodo Accesible**
    - Zero-install = Baja barrera entrada
    - Native back button = UX soberana (no browser chrome)

---

## 🔧 Módulos Extraíbles para HSCSG (5)

### 1. `crowdstaking-protocol.ts` → `src/core/lib/crowdstaking-protocol.ts`
```typescript
// Lógica pura crowdstaking (sin EVM)
export interface CrowdstakingPool {
  id: PoolId;
  principal: ZNUAmount;                    // Base Material (Ley I)
  yieldStrategy: YieldStrategy;            // Estrategia Pilar 2-7
  voting: KappaGovernanceConfig;           // 100pts, 1p1v, cycleDuration
  distribution: DistributionStrategy;      // Proportional | Equal | Split
  recipients: RecipientRegistry;           // Democratic governance
  crossChain: FamilyConfig;                // Nodos federados
  cycle: CycleState;                       // Alráico loop state
}

export type DistributionStrategy = 
  | { type: 'proportional'; weightFn: (votes: Votes) => Weights }
  | { type: 'equal'; recipientCount: number }
  | { type: 'split'; ratio: [number, number] }; // [votes, equal]
```

### 2. `gasless-crosschain.ts` → `src/core/lib/gasless-crosschain.ts`
```typescript
// Sign once, submit everywhere — sin relay, sin Privy dependency
export interface GaslessCrossChain {
  // Firma única EIP-712 compatible
  sign(message: GovernanceMessage, key: SovereignKey): Signature;
  
  // Submit a múltiples nodos federados
  submit(signature: Signature, targets: FederatedNode[]): SubmitResult[];
  
  // Verificación local (ecrecover equivalent)
  verify(signature: Signature, signer: SovereignIdentity): boolean;
  
  // Escape hatches
  fallbackSubmit(signature: Signature, target: FederatedNode): SignedPayload;
}
```

### 3. `static-instance-resolver.ts` → `src/core/lib/static-instance-resolver.ts`
```typescript
// Una build SPA, resuelve cualquier nodo client-side
export interface NodeResolver {
  resolve(nodeId: NodeId, context: ResolutionContext): NodeConfig;
  whitelabel(node: NodeConfig): UIConfig;      // banner, ticker, theme
  shareableLink(nodeId: NodeId): string;       // /nodo/:id
  qrCode(nodeId: NodeId): QRCodeDataURI;
}
```

### 4. `telegram-miniapp.ts` → `src/core/lib/telegram-miniapp.ts`
```typescript
// Web app → Native mobile pattern (generalizable)
export interface MiniAppAdapter {
  platform: 'telegram' | 'whatsapp' | 'signal' | 'pwa';
  detect(): boolean;
  injectSDK(): void;
  authZeroClick(): SovereignIdentity;
  handleBackButton(): void;
  handleThemeChange(theme: 'light'|'dark'): void;
}
```

### 5. `deploy-wizard.cjs` → `scripts/deploy-wizard.cjs` (orchestrator task)
```javascript
// Orchestrator task: deploy-node
// Uso: node scripts/orchestrator-next-steps.js run DEPLOY-NODE-001
task('DEPLOY-NODE-001', {
  name: 'Deploy Nodo HSCSG Completo',
  steps: [
    'init-base-material',      // Base Material 13 Pilares
    'init-caas-znu',           // CaaS + ZNU + Vesting
    'init-automaton',          // Autómata Soberano
    'init-governance',         // Kappa + Vasos
    'init-alraic',             // Sistema Alráico (6 loops)
    'init-vasos',              // 6 Vasos Comunicantes
    'generate-shareable-link', // Static resolver + QR
    'verify-e2e'               // Evidence collector
  ]
});
```

---

## 📋 Workstream `BREADCHAIN_INTEGRATION` — Tasks Adicionales (desde Crowdstake)

| Task ID | Descripción | Dependencia | Estado |
|---------|-------------|-------------|--------|
| BC-011 | Extraer crowdstaking-protocol.ts (lógica pura) | BC-001 | 🟡 Pendiente |
| BC-012 | Implementar gasless-crosschain.ts (sin Privy) | BC-002 | 🟡 Pendiente |
| BC-013 | Implementar static-instance-resolver.ts | BC-003 | 🟡 Pendiente |
| BC-014 | Crear telegram-miniapp.ts (adapter pattern) | BC-004 | 🟡 Pendiente |
| BC-015 | Crear deploy-wizard.cjs task en orchestrator | BC-005 | 🟡 Pendiente |
| BC-016 | Mapear yield strategies → Base Material Pilares | BC-006 | 🟡 Pendiente |
| BC-017 | Integrar 100-point voting → Kappa Governance | BC-007 | 🟡 Pendiente |
| BC-018 | Mapear RecipientRegistry → Vaso trust:bridge | BC-008 | 🟡 Pendiente |
| BC-019 | Implementar NodoFederadoId (familyId equivalent) | BC-009 | 🟡 Pendiente |
| BC-020 | Documentar isomorfismos crowdstake en BRIEF_EXHAUSTIVO | BC-010 | 🟡 Pendiente |

---

## 🎯 Decisiones de Diseño (ADR) — Crowdstake Specific

| ADR | Decisión | Razón |
|-----|----------|-------|
| ADR-BC-011 | **NO asimilar Foundry/Solidity/Privy** | HSCSG es post-EVM; extraer solo lógica pura TypeScript |
| ADR-BC-012 | **Gasless sin Privy: firmas soberanas + P2P submit** | Soberanía computacional = no depender de infra centralizada |
| ADR-BC-013 | **Cross-chain = Nodos Federados HSCSG, no EVM chains** | Vaso infra:connect + governance:sync generaliza familyId |
| ADR-BC-014 | **Yield Strategy → Base Material Strategy** | Misma lógica (principal intacto, yield distribuido), distinto dominio |
| ADR-BC-015 | **Deploy Wizard → Orchestrator Task** | Mismo patrón (1 comando), distinta infra (local vs on-chain) |

---

## 📊 Métricas de Asimilación (Crowdstake)

| Métrica | Valor |
|---------|-------|
| Archivos fuente analizados | ~221 líneas README + config + estructura |
| Isomorfismos detectados | 10 (total acumulado: 20) |
| Módulos extraíbles | 5 (total acumulado: 9) |
| Workstream tasks nuevos | 10 (total acumulado: 20) |
| Briefs generados | 2 (backup + integration) |
| Líneas código nuevo estimado | ~1,200 TS + ~300 MD |
| Tiempo estimado implementación | 3-4 semanas (1 dev) |

---

## 🔗 Enlaces Cruzados

- **Backup:** `docs/breadchain_crowdstake.fun_backup.md`
- **Integración:** `docs/breadchain_crowdstake.fun_integration.md` (este archivo)
- **BRIEFS_INDEX:** Entrada #30 (pendiente actualizar)
- **fuentes_indice.json:** Fuente #30 (pendiente actualizar)
- **Workstream:** `BREADCHAIN_INTEGRATION` (20 tasks totales)
- **Skills relacionadas:** `hscsg-repo-assimilation`, `hscsg-document-architect`, `hscsg-sistema-alraico`, `brief-detector-recommender`

---

*Integración generada por HSCSG v15 OS — Metodología hscsg-repo-assimilation (Fase 2: Integración — Triple Perspectiva Usuario·LLM·HSCSG+CaaS)*