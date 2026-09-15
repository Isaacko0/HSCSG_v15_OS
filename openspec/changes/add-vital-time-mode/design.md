# Design: FASE 1 — Integración Core Moneda Tiempo Vital

**Change**: add-vital-time-mode  
**Fecha**: 2026-09-15

---

## Arquitectura General

```
HSCSG v15 OS Stack (Actualizado FASE 1)
├── openspec/                          # Specs vivas OpenSpec
│   ├── specs/
│   │   ├── vital-time-currency.md     # Spec moneda tiempo vital
│   │   ├── nexo-architecture.md       # Spec arquitectura NEXO
│   │   ├── kernel-protocol.md         # Spec kernel v214 + VIAs
│   │   └── triaxial-verification.md   # Spec verificación triaxial
│   └── changes/add-vital-time-mode/   # Este change
├── src/core/lib/
│   ├── valueDual.ts                   # ✅ Anfibio: ZNU/USD/hr_vital (3 modos)
│   ├── loopEngine.ts                  # ✅ Loop 7 VitalTimeMint + Alráico
│   ├── metrics.ts                     # ✅ VitalTimeFlow + IST actualizado
│   ├── vitalTime.ts                   # ✅ Tipos base + BT213/BT214/AFP/BT180/BT165/BT164
│   ├── vitalTimeTriaxial.ts           # ✅ verifyTriaxial() + BT213/BT214
│   ├── vitalTimeTransduction.ts       # ✅ Transducción F + validaciones
│   ├── kernelProtocol.ts              # ✅ Kernel unificado + VIA-00-31 + Consola VIA-0
│   ├── bt213KernelLimits.ts           # ✅ Límite kernel BT213
│   ├── humanArtificer.ts              # ✅ Humano artífice BT214
│   ├── mk1Ontology.ts                 # ✅ MK-1 ontología fractal
│   ├── hogueraAFPEnlace.ts            # ✅ La Hoguera, AFP, El Enlace
│   └── viaProtocols.ts                # ✅ 32 VIAs ejecutables
├── src/governance/
│   └── vitalTimeInvariants.ts         # ✅ 100+ invariantes blindados + CDS
└── docs/
    ├── VITAL_TIME_CURRENCY_SPEC.md    # ✅ Spec v0.2 completa
    └── BIO_THESIS_NEXO_ARCHITECTURE.md # ✅ Arquitectura NEXO
```

---

## valueDual.ts — Arquitectura Anfibia (3 Modos)

### Tipos
```typescript
export type ValueUnit = 'ZNU' | 'USD' | 'hr_vital'
export type NodeMode = 'postmonetario' | 'conectado' | 'vital_time'
```

### Funciones Clave
- `displayValueUnified(amount, mode, parity)` — Render agnóstico a unidad
- `vitalTimeRotate(balance, protected, daysSinceActivity, rotationDays=30)`
- `vitalTimeDecay(balance, ratePerDay, daysSinceActivity)`
- `vitalTimeShare(balance, totalSupply)` — Fracción sobre pool fijo=1
- `vitalTimeConcentration(balance, totalSupply, threshold=0.05)`

### Principio Anfibio
Misma lógica de cálculo opera en 3 modos; render decide etiqueta. Pool fijo=1 inmutable.

---

## loopEngine.ts — Loop 7 VitalTimeMint + Alráico

### Loop 7: vitalTimeMintLoop()
```typescript
function vitalTimeMintLoop(st: AppState): Partial<AppState>
```
**Lógica**:
1. Para cada nodo en `st.vitalTime.nodes`:
   - Calcula `daysSinceActivity`
   - Si `daysSinceActivity >= rotationDays` (default 30):
     - Verifica `triaxialVerificationCount > 0` + `presenceIntegration.directExperienceVerified` + `sharedTracesVerified`
     - Si pasa: ejecuta `vitalTimeRotate()` → libera exceso, incrementa `triaxialVerificationCount`
     - Si no pasa: alerta `pendingVerifications`
   - Si `daysSinceActivity > 7`: aplica `vitalTimeDecay()` → `evasionReducesMargin = true`

### Integración Alráico
- `detectOverloads()`: agrega módulo `vitalTime` (nodos sin verificación reciente)
- `simulateReconfig()`: caso `vitalTime` → alerta (BT213: kernel no decide, solo notifica; BT214: humano responde)
- `detectResonances()`: incluye métrica `vitalTime` en resonancias
- `runAlraicoTick()`: ejecuta `vitalTimeMintLoop` en array `loops`

---

## metrics.ts — VitalTimeFlow + VitalTimeActivationCost + IST

### VitalTimeFlow (30+ campos por fuente)
```typescript
interface VitalTimeFlow {
  // Base
  mensual: TimeAmount, anual: TimeAmount, autonomyHours, careHours, learningHours
  // BT213: Límite Kernel
  kernelLimitsRespected, twoDomainsIntegrated, noConsciousnessAudit
  // BT214: Humano Artífice
  responsibilityAccepted, uncertaintyAcknowledged, translationSignatureUnique, betaPerpetuaMode
  // AFP Pilar 3
  consciousEnergyVerified, contributionHours, expandedAccessActive, nbuCoveredRate, ecoImpactScore
  // BT180: Poder = Tiempo Vital
  controlsOwnTime, consentGradientsAvg, energyFromBelowRate, notForSaleCompliance
  // BT165: Ecuación Lastre E=V
  truthAssumedAvg, truthEvadedAvg, evasionLightensDetected, presenceDensifiesRate, peaceFromAssumptionRate
  // BT164: Margen Real
  realMarginAvg, evasionReducesMarginRate, presenceExpandsMarginRate, extractionSequestersRate, thresholdRealAvg, lagRealAvg
  // Triaxial
  triaxialDailyRate, triaxialPassRate, witnessVerificationRate
  // Pool
  rotationCompliance, demurrageHealth, concentrationAlerts
}
```

### VitalTimeActivationCost (15+ campos)
Costos específicos BT213 (kernel limits training, 2 dominios integration) + BT214 (responsibility ceremony, uncertainty workshop, translation signature, beta perpetua onboarding) + AFP (conscious energy calibration, contribution tracking, witness network, NBU baseline).

### IST Actualizado
Media geométrica 16 componentes → **18 componentes** (agrega `vitalTimeAutonomy`, `vitalTimeDemurrageHealth`, `kernelLimitsRespected`, `humanArtificerActive`).

### Funciones Cálculo
- `calculateVitalTimeFlow(nodes, periodDays)` — Agrega métricas desde nodos
- `calculateVitalTimeActivationCost(...)` — Costo activación tiempo vital
- `calculateTerritorialSovereigntyIndex(components)` — Media geométrica 18 componentes

---

## vitalTime.ts — Tipos Base Completos

### VitalTimeNode (Campos por Fuente)
```typescript
interface VitalTimeNode {
  // Base
  nodeId, name, vitalTimeBalance, protectedVitalTime, lastActivity, rotationDays, demurrageRate, triaxialVerificationCount, resonanceConnections, mode, transductionEnabled
  // BT213: Límite Kernel
  kernelLimits: { cannotAuditConsciousness, onlyOrganizesTraces, classifiesAssertions, cannotAccessDirectExperience, cannotAuditConsciousnessDirectly, cannotDecideTruth, cannotInterpretPersons, cannotDetectInternalEvasion, silenceIsNeutral, twoDomains, debtFromEvasionEither }
  // BT214: Humano Artífice
  humanArtificer: { role: 'magus'|'alchemist'|'both', responsibilityAccepted, translationSignature, uncertaintyAcknowledged, betaPerpetuaMode }
  // BT213: Presencia 2 Dominios
  presenceIntegration: { directExperienceVerified, sharedTracesVerified, debtGenerated }
  // AFP Pilar 3
  afpVitalTime: { consciousEnergyVerified, contributionHours, expandedAccess, nbuCovered, ecoImpact }
  // BT180: Poder = Tiempo Vital
  powerAsVitalTime: { controlsOwnTime, consentGradients, energyFromBelow, notForSale }
  // BT165: Ecuación Lastre
  ballastEquation: { truthAssumed, truthEvaded, evasionLightensToday, presenceDensifiesNow, totalPaidEqual, peaceFromAssumption }
  // BT164: Margen Real
  realMargin: { currentMargin, evasionReducesMargin, presenceExpandsMargin, extractionSequestersMargin, evolutionReorganizesMargin, thresholdReal, lagReal }
}
```

---

## vitalTimeTriaxial.ts — verifyTriaxial() + BT213/BT214

### verifyTriaxial(operatorId, claimedPresence, witnessNodeId?)
Retorna `TriaxialVerificationResult` con:
- `mental`: verifyMental() — firma + 2 dominios BT213 + kernel limits
- `simulation`: verifySimulation() — loopEngine + γ-CARMIS + coherencia BT213
- `laboratory`: verifyLaboratory() — E=V cuerpo + testigo + responsabilidad BT214 + incertidumbre + firma única + beta perpetua
- `combinedScore`: mental*0.4 + sim*0.3 + lab*0.3
- `passed`: combinedScore ≥ 0.7 && todos passed

### Preguntas Obligatorias (por eje)
- **Mental (VIA-27, VIA-25)**: experiencia directa, rastros compartidos, evasión, hueco justificación
- **Simulación (VIA-25, BT213)**: asimetría info, imposición sin reciprocidad, alternativa acople, explicación post-retiro
- **Laboratorio (BT214 VIA-21)**: responsabilidad indelegable, kernel no paga costo, incertidumbre, firma única

---

## vitalTimeTransduction.ts — Transducción F + Validaciones

### transduceTQtoVitalTime(tqAmount, operatorAlphaH, triaxialVerified, kernelLimitsValidated, operatorResponsibilityAccepted, twoDomainsIntegrated)
**Validaciones en orden**:
1. triaxialVerified
2. kernelLimitsValidated (BT213)
3. operatorResponsibilityAccepted (BT214)
4. twoDomainsIntegrated (BT213)
5. operatorAlphaH ≥ 0.6
→ Retorna `{ vitalTime: tqAmount, valid: true }`

### transduceVitalTimeToTQ(vitalTimeAmount, operatorAlphaH, triaxialVerified, energyCapacityKWh, kernelLimitsValidated, operatorResponsibilityAccepted, twoDomainsIntegrated)
**Validaciones adicionales**: `energyCapacityKWh ≥ vitalTimeAmount`

---

## vitalTimeInvariants.ts — 100+ Invariantes Blindados

### Categorías (No Votables)
- **Ontológicas** (BT215): nonAccumulable, nonInheritable, nonPurchasable, nonConvertible, sovereigntyExposure, replaceability, rightOfExit, traceabilityNotSurveillance, existenceVerifiabilityAccessSeparation
- **Kernel** (BT215 §14): epistemologicalLimit, noConsciousnessAudit
- **BT213**: kernelEpistemologicalLimit, kernelNoConsciousnessAudit, kernelNoDecideTruth, kernelNoInterpretPersons, kernelNoSubstitutePresence, kernelNoDetectInternalEvasion, kernelClassifiesOnly, kernelSilenceNeutral, kernelTwoDomains, kernelDebtFromEvasion, kernelPresenceIntegrates, kernelDebtFromEvasionEither
- **BT214**: humanArtificerRole, humanResponsibilityNonDelegable, humanPaysCost, humanTransformsTraces, humanSignatureUnique, humanUncertaintyAcknowledged, humanBetaPerpetua, aiCannotHabitate, aiCannotPayCost, aiCannotTransform, aiCannotDecideForHuman
- **AFP**: afpVitalTimeConsciousEnergy, afpVitalTimeContribution, afpNbuCovered, afpExpandedAccess, afpEcoImpact
- **BT180**: powerIsVitalTime, controlsOwnTime, consentGradients, energyFromBelow, vitalTimeNotForSale, vitalTimeInhabited
- **BT165**: ballastEquation, evasionLightensToday, presenceDensifies, totalPaidEqual, peaceFromAssumption, umbralInfoInsufficient, afpSustainsBallast
- **BT164**: realMarginVariable, evasionReducesMargin, presenceExpandsMargin, extractionSequestersMargin, evolutionReorganizesMargin, thresholdReal, lagReal, relationalLagReal

### Parámetros Ajustables (Consenso 100% + Triaxial)
- rotationDays (7-90, current 30)
- demurrageRate (0-0.20/365, current 0.10/365)
- poolTotal (FIXED=1)
- transductionThresholds (minAlphaH 0.5-0.9)
- triaxialWeights (mental 0.2-0.6, sim 0.1-0.5, lab 0.1-0.5)
- triaxialPassThreshold (0.5-0.9, current 0.7)

### Gobernanza
- `validateParameterProposal()` — Valida rango + no viola invariantes
- `requiresFullConsensus()` — Siempre true
- `runDisappearanceTest(nodes)` — Test 30 días con kernelLocal + artificerLocal
- `validateGovernanceConfig()` — Valida configuración completa

---

## Kernel Protocol (kernelProtocol.ts + viaProtocols.ts + bt213KernelLimits.ts + humanArtificer.ts)

### kernelProtocol.ts
- `KernelProtocol` interface: cannot/can/twoDomains/threeDomains/coherence/truthLevels/nullPresence/silence
- `ConsolaVIA0` class: start/checkpoint/detectJustificationGap/closeSequence/getState
- `KernelLimits` constants
- `HumanArtificer` constants

### viaProtocols.ts
- 32 interfaces `VIA_XX` ejecutables con `execute(input)` → `output`
- `VIA_REGISTRY` map para lookup dinámico
- `executeVIA(viaId, input)` — Ejecutor genérico

### bt213KernelLimits.ts
- `KERNEL_EPISTEMIC_LIMIT` constants completos BT213
- `validateKernelOperation(operation)` — Valida no viola límites
- `KERNEL_EPISTEMIC_LIMIT` export

### humanArtificer.ts
- `HumanArtificer` interface: magus/alchemist/responsibility/transformation/uncertainty/betaPerpetua/aiLimitations
- `humanTransform(kernelTraces, operatorPresence, operatorIntent)` — Humano transforma rastros → dirección
- `HUMAN_ARTIFICER` constants

---

## mk1Ontology.ts + hogueraAFPEnlace.ts

### mk1Ontology.ts
- `MK1_Ontology`: triada, geometría fractal, consciencia, perennialismo, neoplatonismo, termodinámica, estoicismo, anarquismo, ecología profunda, gnosticismo
- `applyTriada(analysis)`, `applyFractalGeometry(pattern)`, `consciousnessAsSelfRecognition(life)`

### hogueraAFPEnlace.ts
- `HogueraLayer`: fricción, presencia, transformación, silencio, sombra, testigo, ofrenda
- `AFP_Pilares`: material, cognitivo, tiempoVital (energía consciente, contribución, NBU, acceso expandido, eco impacto)
- `EnlaceMatriz`: 7 dim × 3 fases (semilla/germinación/viable)

---

## Validación Técnica

### TypeScript Compilation
```bash
tsc --noEmit  # Debe pasar sin errores
```

### Tests Requeridos
```typescript
// vitalTime.test.ts
describe('vitalTimeRotate', () => {
  it('libera exceso > protegido tras rotationDays', () => {})
  it('no rota si daysSinceActivity < rotationDays', () => {})
})

describe('verifyTriaxial', () => {
  it('passed=true si combinedScore ≥ 0.7 + todos passed', () => {})
  it('rechaza si mental intenta auditar conciencia', () => {})
  it('requiere responsabilidad BT214 en lab', () => {})
})

describe('transduceTQtoVitalTime', () => {
  it('válido si αʰ≥0.6 + triaxial + kernelLimits + responsabilidad + 2dominios', () => {})
  it('rechaza si kernelLimitsValidated=false', () => {})
})

describe('vitalTimeMintLoop', () => {
  it('minea si triaxial verificada + 2 dominios integrados', () => {})
  it('alerta pendingVerifications si sin triaxial', () => {})
})

describe('calculateTerritorialSovereigntyIndex', () => {
  it('incluye vitalTimeAutonomy + kernelLimitsRespected + humanArtificerActive', () => {})
})
```

### CI/CD
```yaml
# .github/workflows/openspec-validate.yml
- openspec validate --strict
- tsc --noEmit
- pnpm test
- legal-safe-check.sh
```

---

## Traceabilidad Spec↔Código

| Spec Requirement | Archivo Código | Función/Tipo |
|------------------|----------------|--------------|
| Pool fijo=1 | valueDual.ts | VITAL_TIME_POOL_TOTAL = 1 |
| Rotación 30d | valueDual.ts | vitalTimeRotate() |
| Decay 10%/año | valueDual.ts | vitalTimeDecay() |
| Triaxial obligatoria | vitalTimeTriaxial.ts | verifyTriaxial() |
| Mental 0.4 + Sim 0.3 + Lab 0.3 | vitalTimeTriaxial.ts | combinedScore weights |
| Transducción F αʰ≥0.6 | vitalTimeTransduction.ts | transduceTQtoVitalTime() |
| Kernel límites BT213 | bt213KernelLimits.ts | validateKernelOperation() |
| Humano artífice BT214 | humanArtificer.ts | humanTransform() |
| Loop 7 VitalTimeMint | loopEngine.ts | vitalTimeMintLoop() |
| VitalTimeFlow métricas | metrics.ts | calculateVitalTimeFlow() |
| IST 18 componentes | metrics.ts | calculateTerritorialSovereigntyIndex() |
| Test desaparición kernelLocal+artificerLocal | vitalTimeInvariants.ts | runDisappearanceTest() |