# Tasks: FASE 1 — Integración Core Moneda Tiempo Vital

**Change**: add-vital-time-mode  
**Fecha**: 2026-09-15  
**Orden**: Secuencial (dependencias marcadas)

---

## Tasks de Implementación

### ✅ TASK-001: Estructura OpenSpec + Specs Base
- [x] Crear `openspec/specs/vital-time-currency.md`
- [x] Crear `openspec/specs/nexo-architecture.md`
- [x] Crear `openspec/specs/kernel-protocol.md`
- [x] Crear `openspec/specs/triaxial-verification.md`
- [x] Crear `openspec/changes/add-vital-time-mode/proposal.md`
- [x] Crear `openspec/changes/add-vital-time-mode/design.md`
- [x] Crear `openspec/changes/add-vital-time-mode/tasks.md` (este archivo)

### ✅ TASK-002: valueDual.ts — Arquitectura Anfibia 3 Modos
- [x] Agregar `VitalTimeMode` a `NodeMode`
- [x] Agregar constantes `VITAL_TIME_POOL_TOTAL`, `VITAL_TIME_ROTATION_DEFAULT_DAYS`, `VITAL_TIME_DEMURRAGE_RATE`
- [x] Implementar `vitalTimeRotate()`, `vitalTimeDecay()`, `vitalTimeShare()`, `vitalTimeConcentration()`
- [x] Implementar `displayValueUnified()` para 3 modos
- [x] Verificar: `tsc --noEmit` pasa

### ✅ TASK-003: loopEngine.ts — Loop 7 VitalTimeMint + Alráico
- [x] Agregar módulo `vitalTime` en `detectOverloads()`
- [x] Agregar caso `vitalTime` en `simulateReconfig()` (BT213: notifica, no decide; BT214: humano responde)
- [x] Agregar métrica `vitalTime` en `detectResonances()`
- [x] Implementar `vitalTimeMintLoop()`:
  - [x] Itera nodos `st.vitalTime.nodes`
  - [x] Calcula `daysSinceActivity`
  - [x] Si `>= rotationDays`: verifica triaxial + 2 dominios → rota exceso + incrementa contador
  - [x] Si no pasa: alerta `pendingVerifications`
  - [x] Si `> 7 días`: aplica `vitalTimeDecay()` + `evasionReducesMargin = true`
- [x] Agregar `vitalTimeMint` a array `loops` en `runAlraicoTick()`
- [x] Importar `vitalTimeRotate`, `vitalTimeDecay` de `valueDual.ts`
- [x] Verificar: `tsc --noEmit` pasa

### ✅ TASK-004: metrics.ts — VitalTimeFlow + VitalTimeActivationCost + IST
- [x] Agregar interface `VitalTimeFlow` (30+ campos por fuente: BT213, BT214, AFP, BT180, BT165, BT164, triaxial, pool)
- [x] Agregar interface `VitalTimeActivationCost` (15+ campos: BT213, BT214, AFP)
- [x] Implementar `calculateVitalTimeFlow(nodes, periodDays)`
- [x] Implementar `calculateVitalTimeActivationCost(...)`
- [x] Actualizar `TerritorialSovereigntyIndex`:
  - [x] Agregar `vitalTimeAutonomy`, `vitalTimeDemurrageHealth` en `economic`
  - [x] Agregar `kernelLimitsRespected`, `humanArtificerActive` en `cognitive`
  - [x] Media geométrica 16 → 18 componentes
- [x] Actualizar `HSCSG_METRICS` export
- [x] Verificar: `tsc --noEmit` pasa

### ✅ TASK-005: vitalTime.ts — Tipos Base + BT213/BT214/AFP/BT180/BT165/BT164
- [x] Actualizar `VitalTimeNode` con campos por fuente
- [x] `kernelLimits` (BT213): 10 campos boolean
- [x] `humanArtificer` (BT214): role, responsibilityAccepted, translationSignature, uncertaintyAcknowledged, betaPerpetuaMode
- [x] `presenceIntegration` (BT213): directExperienceVerified, sharedTracesVerified, debtGenerated
- [x] `afpVitalTime` (AFP): consciousEnergyVerified, contributionHours, expandedAccess, nbuCovered, ecoImpact
- [x] `powerAsVitalTime` (BT180): controlsOwnTime, consentGradients, energyFromBelow, notForSale
- [x] `ballastEquation` (BT165): truthAssumed, truthEvaded, evasionLightensToday, presenceDensifiesNow, totalPaidEqual, peaceFromAssumption
- [x] `realMargin` (BT164): currentMargin, evasionReducesMargin, presenceExpandsMargin, extractionSequestersMargin, evolutionReorganizesMargin, thresholdReal, lagReal
- [x] Actualizar `TriaxialProof` con campos BT213/BT214
- [x] Verificar: `tsc --noEmit` pasa

### ✅ TASK-006: vitalTimeTriaxial.ts — verifyTriaxial() + BT213/BT214
- [x] `verifyTriaxial()` retorna `TriaxialVerificationResult`
- [x] `verifyMental()`: firma + 2 dominios BT213 + kernel limits (VIA-27, VIA-25)
- [x] `verifySimulation()`: loopEngine + γ-CARMIS + coherencia BT213 (VIA-25)
- [x] `verifyLaboratory()`: E=V cuerpo + testigo + responsabilidad BT214 + incertidumbre + firma única + beta perpetua (VIA-21)
- [x] `combinedScore = mental*0.4 + sim*0.3 + lab*0.3`
- [x] `passed = combinedScore >= 0.7 && mental.passed && simulation.passed && laboratory.passed`
- [x] Preguntas obligatorias por eje (comentarios en código)
- [x] Verificar: `tsc --noEmit` pasa

### ✅ TASK-007: vitalTimeTransduction.ts — Transducción F + Validaciones
- [x] `transduceTQtoVitalTime()` con 5 validaciones ordenadas:
  1. triaxialVerified
  2. kernelLimitsValidated (BT213)
  3. operatorResponsibilityAccepted (BT214)
  4. twoDomainsIntegrated (BT213)
  5. operatorAlphaH ≥ 0.6
- [x] `transduceVitalTimeToTQ()` con validación extra `energyCapacityKWh`
- [x] `TRANSDUCTION_RATES` actualizado con flags validaciones
- [x] Verificar: `tsc --noEmit` pasa

### ✅ TASK-008: vitalTimeInvariants.ts — 100+ Invariantes Blindados + CDS
- [x] Invariantes por categoría: ontológicas, kernel, BT213, BT214, AFP, BT180, BT165, BT164
- [x] `fixedParams` (poolTotal=1, unit='hr_vital', nonAccumulable, nonInheritable, nonPurchasable)
- [x] `adjustableParams` con rangos (rotationDays, demurrageRate, transductionThresholds, triaxialWeights, triaxialPassThreshold)
- [x] `governanceInvariants` (consensusThreshold=1.0, triaxialRequiredForVote, invariantsBlindaje, divergenceLegitima, testDesaparicion)
- [x] `validateParameterProposal()` valida rango + no viola invariantes
- [x] `runDisappearanceTest(nodes)` con `kernelLocal` + `artificerLocal`
- [x] `validateGovernanceConfig()`
- [x] Verificar: `tsc --noEmit` pasa

### ✅ TASK-009: Kernel Protocol — kernelProtocol.ts + viaProtocols.ts + bt213KernelLimits.ts + humanArtificer.ts + mk1Ontology.ts + hogueraAFPEnlace.ts
- [x] `kernelProtocol.ts`: KernelProtocol interface, ConsolaVIA0 class, KernelLimits, HumanArtificer constants
- [x] `viaProtocols.ts`: 32 interfaces VIA_XX + VIA_REGISTRY + executeVIA()
- [x] `bt213KernelLimits.ts`: KERNEL_EPISTEMIC_LIMIT + validateKernelOperation()
- [x] `humanArtificer.ts`: HumanArtificer interface + humanTransform() + constants
- [x] `mk1Ontology.ts`: MK1_Ontology + triada + fractal + consciencia
- [x] `hogueraAFPEnlace.ts`: HogueraLayer + AFP_Pilares + EnlaceMatriz
- [x] Verificar: `tsc --noEmit` pasa

### ✅ TASK-010: docs/VITAL_TIME_CURRENCY_SPEC.md — Spec v0.2 Completa
- [x] Fundamento epistemológico: Kernel v214 + BT213 + BT214 + AFP + BT180 + BT165 + BT164
- [x] Tipos TypeScript actualizados con todos los campos
- [x] Verificación triaxial con validaciones BT213/BT214
- [x] Transducción F con validaciones kernel limits + responsabilidad + 2 dominios
- [x] 100+ invariantes blindados organizados por fuente
- [x] Test desaparición extendido (kernelLocal + artificerLocal)
- [x] Roadmap 60 días actualizado
- [x] Referencias cruzadas 20 fuentes

### ✅ TASK-011: docs/BIO_THESIS_NEXO_ARCHITECTURE.md — Arquitectura NEXO
- [x] Stack 8 capas documentado
- [x] 11 funciones NEXO
- [x] Roadmap 6 fases
- [x] Referencias cruzadas BT215 + Kernel v214 + Alráico + HSCSG

---

## Tasks de Validación (Pendientes - FASE 2)

### ⬜ TASK-012: Tests Triaxiales Obligatorios
- [ ] Crear `src/core/lib/vitalTime.test.ts`
- [ ] Test `vitalTimeRotate()`: libera exceso, no rota si < rotationDays
- [ ] Test `vitalTimeDecay()`: decay detectable tras 7 días
- [ ] Test `verifyTriaxial()`: passed si combinedScore ≥ 0.7 + todos passed
- [ ] Test `verifyTriaxial()`: rechaza si mental intenta auditar conciencia (BT213)
- [ ] Test `verifyTriaxial()`: requiere responsabilidad BT214 en lab
- [ ] Test `transduceTQtoVitalTime()`: válido si αʰ≥0.6 + triaxial + kernelLimits + responsabilidad + 2dominios
- [ ] Test `transduceTQtoVitalTime()`: rechaza si kernelLimitsValidated=false
- [ ] Test `vitalTimeMintLoop()`: minea si triaxial verificada + 2 dominios
- [ ] Test `vitalTimeMintLoop()`: alerta pendingVerifications si sin triaxial
- [ ] Test `calculateTerritorialSovereigntyIndex()`: incluye vitalTimeAutonomy + kernelLimitsRespected + humanArtificerActive
- [ ] Test `runDisappearanceTest()`: verifica kernelLocal + artificerLocal
- [ ] Ejecutar: `pnpm test` → todos pasando

### ⬜ TASK-013: Validación OpenSpec
- [ ] Instalar OpenSpec CLI: `npm install -g @fission-ai/openspec@latest`
- [ ] Inicializar: `openspec init` en HSCSG_v15_OS
- [ ] Validar specs: `openspec validate --strict` → pasa
- [ ] Verificar trazabilidad spec↔código completa

### ⬜ TASK-014: CI/CD + Legal-Safe
- [ ] Crear `.github/workflows/openspec-validate.yml`
- [ ] Verificar pre-commit legal-safe pasa
- [ ] Commit + push

### ⬜ TASK-015: Skills Agentes HSCSG (Patrón OpenSpec)
- [ ] Crear `skills/hscsg/hscsg-write-spec/`
- [ ] Crear `skills/hscsg/hscsg-draft-proposal/`
- [ ] Crear `skills/hscsg/hscsg-verify-specs/`
- [ ] Crear `skills/hscsg/hscsg-onboard/`
- [ ] Crear `skills/hscsg/hscsg-archive-change/`
- [ ] Crear `skills/hscsg/hscsg-sync-stores/`

### ⬜ TASK-016: Stores Cross-Repo (RIDF, Gaia, Alráico, NEXO)
- [ ] Inicializar stores en `openspec/stores/`
- [ ] Especs base por store
- [ ] Configurar sincronización git push

---

## Criterios de Aceptación FASE 1

| Criterio | Verificación |
|----------|--------------|
| TypeScript compila sin errores | `tsc --noEmit` exit code 0 |
| Tests triaxiales pasan | `pnpm test` exit code 0 |
| OpenSpec validate pasa | `openspec validate --strict` exit code 0 |
| Pre-commit legal-safe pasa | `git commit` sin bloqueo |
| IST calcula 18 componentes | `calculateTerritorialSovereigntyIndex()` incluye nuevos |
| LoopEngine ejecuta Loop 7 | `runAlraicoTick()` incluye vitalTimeMintLoop |
| Transducción F válida | `transduceTQtoVitalTime(5, 0.7, true, true, true, true)` → valid=true |
| Kernel limits respetados | `validateKernelOperation()` no violations en código |
| Humano artífice requerido | `humanTransform()` firma responsabilidad |

---

## Dependencias Entre Tasks

```
TASK-001 (specs)
    ↓
TASK-002 (valueDual) ← base para TASK-003, TASK-004, TASK-005
    ↓
TASK-003 (loopEngine) ← usa valueDual
TASK-004 (metrics) ← usa valueDual, vitalTime
TASK-005 (vitalTime) ← base para TASK-006, TASK-007, TASK-008
    ↓
TASK-006 (triaxial) ← usa vitalTime, loopEngine
TASK-007 (transduction) ← usa vitalTime, triaxial
TASK-008 (invariants) ← usa vitalTime, triaxial
    ↓
TASK-009 (kernel) ← independiente, base conceptual
TASK-010 (spec doc) ← documenta todo lo anterior
TASK-011 (nexus doc) ← documenta arquitectura
    ↓
TASK-012 (tests) ← valida TASK-002 a TASK-009
TASK-013 (openspec validate) ← valida specs TASK-001
TASK-014 (CI) ← automatiza validaciones
TASK-015 (skills) ← habilita workflow agentes
TASK-016 (stores) ← habilita cross-repo
```

---

## Estado Actual (2026-09-15)

✅ **COMPLETADOS**: TASK-001 a TASK-011 (Implementación core completa)
⬜ **PENDIENTES**: TASK-012 a TASK-016 (Validación + Skills + Stores)

**Próximo**: Ejecutar TASK-012 (Tests Triaxiales) → TASK-013 (OpenSpec Validate) → TASK-014 (CI/Legal-Safe) → Commit + Push