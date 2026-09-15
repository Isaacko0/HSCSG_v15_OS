# Spec: Verificación Triaxial Obligatoria (Alráico Capa 0)

**Versión**: 1.0 | **Estado**: Activa | **Fuente**: Sistema Alráico (PI, γ-CARMIS, Triaxial) + BT213 (Límite Kernel) + BT214 (Humano Artífice)

---

## ADDED Requirements

### Requirement: Verificación Triaxial = Mental + Simulación + Laboratorio
El sistema SHALL requerir verificación triaxial completa (3 ejes) antes de cualquier mint hr_vital o transducción.

#### Scenario: Triaxial obligatoria para mint
- **GIVEN** nodo quiere mint hr_vital
- **WHEN** vitalTimeMintLoop()
- **THEN** requiere verifyTriaxial() passing

#### Scenario: Triaxial obligatoria para transducción
- **GIVEN** nodo quiere transducir TQ↔hr_vital
- **WHEN** transduceTQtoVitalTime() o transduceVitalTimeToTQ()
- **THEN** requiere triaxialVerified = true

---

### Requirement: Eje Mental (Peso 0.4) — Entendimiento Consciente + VIA-27 + VIA-25
El sistema SHALL verificar mental: firma operador + experiencia directa integrada + rastros compartidos integrados + kernel limits respetados.

#### Scenario: Mental requiere firma operador
- **GIVEN** operador firma "reconozco esta presencia"
- **WHEN** verifyMental()
- **THEN** mental.passed = true, signature presente

#### Scenario: Mental valida dos dominios BT213
- **GIVEN** directExperienceIntegrated=true, sharedTracesIntegrated=true
- **WHEN** verifyMental()
- **THEN** twoDomainsIntegrated = true

#### Scenario: Mental respeta límite kernel (no audita conciencia)
- **GIVEN** claim incluye experiencia interna ajena
- **WHEN** verifyMental() detecta attemptsToAuditConsciousness
- **THEN** mental.passed = false, kernelLimitsRespected = false

#### Scenario: Mental detecta hueco justificación VIA-25
- **GIVEN** explicación post-retiro sin nueva auditoría
- **WHEN** verifyMental() con VIA-25
- **THEN** alerta justificationGap

---

### Requirement: Eje Simulación (Peso 0.3) — LoopEngine + γ-CARMIS + Resonancia + BT213
El sistema SHALL verificar simulación: loops activos, γ-CARMIS, resonancias, coherencia operativa, no evasión interna asumida.

#### Scenario: Simulación requiere γ-CARMIS activo
- **GIVEN** gammaCARMISActive = true
- **WHEN** verifySimulation()
- **THEN** gammaCARMISActive = true en proof

#### Scenario: Simulación valida coherencia operativa BT213
- **GIVEN** coherenceVerified = true, noInternalEvasionAssumed = true
- **WHEN** verifySimulation()
- **THEN** coherenceVerified = true, noInternalEvasionDetected = true

#### Scenario: Simulación detecta resonancias αʰ > umbral
- **GIVEN** resonancias detectadas con αʰ > 0.8
- **WHEN** verifySimulation()
- **THEN** resonanceCheck = true

#### Scenario: Simulación rechaza sobrecargas críticas
- **GIVEN** gammaCARMIS triggers > 0 (overloads ΣPᵢ > κ)
- **WHEN** verifySimulation()
- **THEN** simulation.passed = false si overloads críticos no resueltos

---

### Requirement: Eje Laboratorio (Peso 0.3) — E=V Cuerpo + Testigo + BT214 Responsabilidad
El sistema SHALL verificar laboratorio: E=V en cuerpo + testigo opcional + responsabilidad indelegable + incertidumbre estructural + firma única + beta perpetua.

#### Scenario: Lab requiere E=V cuerpo confirmado
- **GIVEN** eVBodyCheck.confirmed = true (autorreporte + testigo)
- **WHEN** verifyLaboratory()
- **THEN** laboratory.passed = true

#### Scenario: Lab requiere responsabilidad indelegable BT214
- **GIVEN** responsibilityAccepted = true
- **WHEN** verifyLaboratory()
- **THEN** responsibilityAccepted = true en proof

#### Scenario: Lab requiere incertidumbre estructural asumida BT214
- **GIVEN** uncertaintyAcknowledged = true
- **WHEN** verifyLaboratory()
- **THEN** uncertaintyAcknowledged = true en proof

#### Scenario: Lab requiere firma única operador BT214
- **GIVEN** translationSignature generada (huella única)
- **WHEN** verifyLaboratory()
- **THEN** translationSignature presente en proof

#### Scenario: Lab requiere beta perpetua BT214
- **GIVEN** betaPerpetuaMode = true
- **WHEN** verifyLaboratory()
- **THEN** betaPerpetuaMode = true en proof

#### Scenario: Testigo opcional mejora score (0.8 → 1.0)
- **GIVEN** witnessNodeId presente, witnessVerification.verified = true
- **WHEN** verifyLaboratory()
- **THEN** laboratory.score = 1.0 (vs 0.8 sin testigo)

---

### Requirement: Score Combinado ≥ 0.7 (Ponderado)
El sistema SHALL calcular combinedScore = mental*0.4 + simulation*0.3 + laboratory*0.3 y requerir ≥ 0.7.

#### Scenario: Score ≥ 0.7 pasa
- **GIVEN** mental=0.9, sim=0.7, lab=0.7
- **WHEN** calcula combinedScore = 0.9*0.4 + 0.7*0.3 + 0.7*0.3 = 0.78
- **THEN** passed = true

#### Scenario: Score < 0.7 falla
- **GIVEN** mental=0.8, sim=0.6, lab=0.5
- **WHEN** calcula combinedScore = 0.8*0.4 + 0.6*0.3 + 0.5*0.3 = 0.65
- **THEN** passed = false

#### Scenario: Pesos ajustables por gobernanza (consenso 100%)
- **GIVEN** propuesta nuevos pesos
- **WHEN** consenso 100% + triaxial cada votante
- **THEN** pesos actualizados (rangos: mental 0.2-0.6, sim 0.1-0.5, lab 0.1-0.5)

---

### Requirement: Verificación Diaria (Piloto 3 Nodos)
El sistema SHALL soportar verificación triaxial diaria para piloto YOKA, LAUTARO, ISAAC.

#### Scenario: YOKA verifica Mental+Sim+Lab (testigo Lautaro)
- **GIVEN** nodo YOKA
- **WHEN** verifyTriaxial() diaria
- **THEN** mental(firma) + sim(loopEngine) + lab(auto) + testigo Lautaro

#### Scenario: LAUTARO verifica Mental+Sim+Lab cuerpo directo (testigo Yoka)
- **GIVEN** nodo LAUTARO
- **WHEN** verifyTriaxial() diaria
- **THEN** mental + sim + lab(cuerpo directo) + testigo Yoka

#### Scenario: ISAAC verifica Mental+Sim(Alráico)+Lab (testigo Yoka)
- **GIVEN** nodo ISAAC
- **WHEN** verifyTriaxial() diaria
- **THEN** mental + sim(loopEngine+Alráico) + lab + testigo Yoka

---

### Requirement: Integración LoopEngine (Loop 7 VitalTimeMint)
El LoopEngine SHALL ejecutar Loop 7 que verifica triaxial antes de mint.

#### Scenario: Loop 7 solo minea si triaxial passed
- **GIVEN** nodo con triaxialVerificationCount > 0, 2 dominios integrados
- **WHEN** vitalTimeMintLoop() en runAlraicoTick()
- **THEN** rota exceso, incrementa triaxialVerificationCount

#### Scenario: Loop 7 alerta si sin triaxial
- **GIVEN** nodo sin triaxial verificada
- **WHEN** vitalTimeMintLoop()
- **THEN** pendingVerifications alerta, no minea

---

## Métricas Triaxiales

| Métrica | Target Gen 3 | Target Gen 7 |
|---------|--------------|--------------|
| Verificación triaxial diaria | ≥ 80% días/nodo | ≥ 95% |
| Triaxial pass rate | ≥ 80% | ≥ 95% |
| Witness verification rate | ≥ 50% | ≥ 80% |
| Kernel limits respected | 100% | 100% |
| Responsibility accepted | 100% | 100% |

---

## Archivos Implementación

- `src/core/lib/vitalTimeTriaxial.ts` — verifyTriaxial() + 3 ejes + BT213/BT214
- `src/core/lib/loopEngine.ts` — Loop 7 vitalTimeMintLoop()
- `src/core/lib/vitalTime.ts` — Tipos TriaxialProof con campos BT213/BT214
- `src/governance/vitalTimeInvariants.ts` — Invariantes triaxial blindados