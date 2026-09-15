# Spec: Moneda Tiempo Vital (hr_vital)

**Versión**: 0.2 | **Estado**: Activa | **Fuente**: Kernel v214 + BT213 + BT214 + AFP + BT180 + BT165 + BT164 + Alráico + HSCSG v15 OS

---

## ADDED Requirements

### Requirement: Pool fijo = 1 (totalidad vida presente)
El sistema SHALL mantener pool total de hr_vital = 1 inmutable.

#### Scenario: Pool nunca crece
- **GIVEN** nodo con balance hr_vital
- **WHEN** se intenta incrementar pool total
- **THEN** operación rechazada (invariante blindado)

#### Scenario: Pool total inmutable
- **GIVEN** cualquier operación sobre pool
- **WHEN** se verifica `VITAL_TIME_POOL_TOTAL`
- **THEN** siempre equals 1

---

### Requirement: Rotación anti-acumulación 30 días
El sistema SHALL rotar hr_vital excedente sobre protegido cada 30 días.

#### Scenario: Rotación libera exceso
- **GIVEN** nodo con 40 hr_vital, protegido 30, 31 días inactividad
- **WHEN** ejecuta `vitalTimeRotate()`
- **THEN** libera 10 hr_vital al pool, balance activo = 30

#### Scenario: Sin rotación si actividad reciente
- **GIVEN** nodo con 40 hr_vital, protegido 30, 15 días inactividad
- **WHEN** ejecuta `vitalTimeRotate()`
- **THEN** balance activo = 40, released = 0

#### Scenario: Rotación usa rotationDays configurable (7-90)
- **GIVEN** nodo con rotationDays = 60
- **WHEN** 61 días inactividad
- **THEN** rotación ejecuta con 60 días

---

### Requirement: Decay por inactividad 10%/año
El sistema SHALL aplicar decay 10%/año (0.10/365 por día) por inactividad.

#### Scenario: Decay detectable tras 7 días
- **GIVEN** nodo con 100 hr_vital, 7 días inactividad
- **WHEN** ejecuta `vitalTimeDecay()`
- **THEN** balance decrece ~0.19%

#### Scenario: Decay respeta límite máximo 20%/año
- **GIVEN** demurrageRate configurado > 0.20/365
- **WHEN** validación gobernanza
- **THEN** propuesta rechazada

---

### Requirement: Verificación triaxial obligatoria (Mental 0.4 + Sim 0.3 + Lab 0.3 ≥ 0.7)
El sistema SHALL requerir verificación triaxial completa antes de mint hr_vital.

#### Scenario: Mint sin triaxial rechazado
- **GIVEN** nodo sin `verifyTriaxial()` passing
- **WHEN** intenta `vitalTimeMint()`
- **THEN** mint rechazado, alerta `pendingVerifications`

#### Scenario: Pesos triaxial configurables (0.2-0.6 mental, 0.1-0.5 sim/lab)
- **GIVEN** gobernanza propone nuevos pesos
- **WHEN** consenso 100% + triaxial cada votante
- **THEN** pesos actualizados

#### Scenario: Umbral combinado ≥ 0.7
- **GIVEN** mental=0.8, sim=0.6, lab=0.5
- **WHEN** calcula combinedScore = 0.8*0.4 + 0.6*0.3 + 0.5*0.3 = 0.65
- **THEN** passed = false (< 0.7)

#### Scenario: Umbral combinado ≥ 0.7 pasado
- **GIVEN** mental=0.9, sim=0.7, lab=0.7
- **WHEN** calcula combinedScore = 0.9*0.4 + 0.7*0.3 + 0.7*0.3 = 0.78
- **THEN** passed = true

---

### Requirement: Verificación Mental (VIA-27, VIA-25) — Entendimiento consciente + firma operador
El sistema SHALL verificar mental: firma operador + experiencia directa integrada + rastros compartidos integrados.

#### Scenario: Mental requiere firma operador
- **GIVEN** operador firma "reconozco esta presencia"
- **WHEN** `verifyMental()`
- **THEN** mental.passed = true, evidence incluye firma

#### Scenario: Mental valida dos dominios BT213 (experiencia directa + rastros compartidos)
- **GIVEN** directExperienceIntegrated=true, sharedTracesIntegrated=true
- **WHEN** `verifyMental()`
- **THEN** twoDomainsIntegrated = true

#### Scenario: Mental rechaza si kernel intenta auditar conciencia
- **GIVEN** presencia claim incluye experiencia interna ajena
- **WHEN** `verifyMental()` detecta `attemptsToAuditConsciousness`
- **THEN** mental.passed = false, kernelLimitsRespected = false

---

### Requirement: Verificación Simulación (VIA-25, BT213) — LoopEngine + γ-CARMIS + Resonancia
El sistema SHALL verificar simulación: loops activos, γ-CARMIS, resonancias, coherencia, no evasión interna.

#### Scenario: Simulación requiere γ-CARMIS activo
- **GIVEN** gammaCARMISActive = true
- **WHEN** `verifySimulation()`
- **THEN** gammaCARMISActive = true en proof

#### Scenario: Simulación valida coherencia operativa BT213
- **GIVEN** coherenceVerified = true, noInternalEvasionAssumed = true
- **WHEN** `verifySimulation()`
- **THEN** coherenceVerified = true, noInternalEvasionDetected = true

#### Scenario: Simulación rechaza sobrecargas críticas
- **GIVEN** gammaCARMIS triggers > 0
- **WHEN** `verifySimulation()`
- **THEN** simulation.passed = false si overloads críticos

---

### Requirement: Verificación Laboratorio (BT214) — E=V en cuerpo + responsabilidad artífice
El sistema SHALL verificar laboratorio: E=V cuerpo + testigo opcional + responsabilidad indelegable + incertidumbre + firma única + beta perpetua.

#### Scenario: Lab requiere E=V cuerpo confirmado
- **GIVEN** eVBodyCheck.confirmed = true
- **WHEN** `verifyLaboratory()`
- **THEN** laboratory.passed = true

#### Scenario: Lab requiere responsabilidad indelegable BT214
- **GIVEN** responsibilityAccepted = true
- **WHEN** `verifyLaboratory()`
- **THEN** responsibilityAccepted = true en proof

#### Scenario: Lab requiere incertidumbre estructural asumida BT214
- **GIVEN** uncertaintyAcknowledged = true
- **WHEN** `verifyLaboratory()`
- **THEN** uncertaintyAcknowledged = true en proof

#### Scenario: Lab requiere firma única operador BT214
- **GIVEN** translationSignature generada
- **WHEN** `verifyLaboratory()`
- **THEN** translationSignature presente en proof

#### Scenario: Lab requiere beta perpetua BT214
- **GIVEN** betaPerpetuaMode = true
- **WHEN** `verifyLaboratory()`
- **THEN** betaPerpetuaMode = true en proof

#### Scenario: Testigo opcional mejora score
- **GIVEN** witnessNodeId = "LAUTARO", witnessVerification.verified = true
- **WHEN** `verifyLaboratory()`
- **THEN** laboratory.score = 1.0 (vs 0.8 sin testigo)

---

### Requirement: Transducción F TQ↔hr_vital via 𝕮 (αʰ ≥ 0.6)
El sistema SHALL permitir transducción 1:1 TQ(kWh)↔hr_vital si αʰ > umbral + triaxial + kernel limits + responsabilidad artífice + dos dominios integrados.

#### Scenario: TQ → hr_vital válido
- **GIVEN** operador αʰ=0.7, triaxial verified, kernel limits OK, responsabilidad firmada, 2 dominios integrados
- **WHEN** `transduceTQtoVitalTime(5 kWh)`
- **THEN** retorna 5 hr_vital, valid=true

#### Scenario: TQ → hr_vital rechazado si αʰ < 0.6
- **GIVEN** operador αʰ=0.5
- **WHEN** `transduceTQtoVitalTime(5 kWh)`
- **THEN** valid=false, reason "αʰ < umbral"

#### Scenario: TQ → hr_vital rechazado sin triaxial
- **GIVEN** triaxialVerified = false
- **WHEN** `transduceTQtoVitalTime(5 kWh)`
- **THEN** valid=false, reason "Triaxial no verificada"

#### Scenario: TQ → hr_vital rechazado si kernel limits violados
- **GIVEN** kernelLimitsValidated = false
- **WHEN** `transduceTQtoVitalTime(5 kWh)`
- **THEN** valid=false, reason "Límite kernel no validado (BT213)"

#### Scenario: TQ → hr_vital rechazado sin responsabilidad artífice
- **GIVEN** operatorResponsibilityAccepted = false
- **WHEN** `transduceTQtoVitalTime(5 kWh)`
- **THEN** valid=false, reason "Responsabilidad artífice no aceptada (BT214)"

#### Scenario: TQ → hr_vital rechazado sin 2 dominios integrados
- **GIVEN** twoDomainsIntegrated = false
- **WHEN** `transduceTQtoVitalTime(5 kWh)`
- **THEN** valid=false, reason "Dos dominios no integrados (BT213)"

#### Scenario: hr_vital → TQ requiere capacidad energética demostrada
- **GIVEN** vitalTimeAmount=5, energyCapacityKWh=3
- **WHEN** `transduceVitalTimeToTQ(5 hr_vital)`
- **THEN** valid=false, reason "Capacidad energética insuficiente"

---

### Requirement: Límite Kernel (BT213) — No audita conciencia, 3 dominios clasificación
El kernel SHALL solo organizar rastros, clasificar compatible/incompatible/no-evaluable.

#### Scenario: Kernel no decide verdad
- **GIVEN** afirmación sobre experiencia interna
- **WHEN** kernel clasifica
- **THEN** retorna 'no-evaluable', no decide verdad

#### Scenario: Kernel no audita conciencia
- **GIVEN** claim sobre estado interno ajeno
- **WHEN** kernel procesa
- **THEN** no audita, clasifica 'no-evaluable'

#### Scenario: Kernel clasifica solo 3 dominios
- **GIVEN** cualquier afirmación
- **WHEN** kernel clasifica
- **THEN** clasificación ∈ {compatible, incompatible, no-evaluable}

#### Scenario: Silencio = dato neutro
- **GIVEN** ausencia de rastro
- **WHEN** kernel evalúa
- **THEN** silencio = dato neutro, no incoherencia

#### Scenario: Presencia Nula detectable (3 criterios)
- **GIVEN** asimetría info + imposición sin reciprocidad + alternativa acople verificable
- **WHEN** kernel detecta
- **THEN** presenciaNula = true

#### Scenario: Deuda estructural por evasión cualquiera dominio
- **GIVEN** evasión experiencia directa O rastros compartidos
- **WHEN** kernel evalúa
- **THEN** debtGenerated = true

---

### Requirement: Humano Artífice (BT214) — Responsabilidad indelegable, Mago+Alquimista
El sistema SHALL requerir firma responsabilidad indelegable + incertidumbre asumida + firma única + beta perpetua.

#### Scenario: Humano = Mago (combina existente en formas nuevas)
- **GIVEN** role = 'magus'
- **WHEN** humanTransform()
- **THEN** combina lo existente en formas nuevas

#### Scenario: Humano = Alquimista (transforma por comprensión estructural)
- **GIVEN** role = 'alchemist'
- **WHEN** humanTransform()
- **THEN** transforma por comprensión, no deseo

#### Scenario: Responsabilidad indelegable
- **GIVEN** humano firma responsabilidad
- **WHEN** cualquier decisión
- **THEN** humano paga costo, kernel no

#### Scenario: IA no puede habitar/pagar/transformar/decidir por humano
- **GIVEN** IA intenta acción por humano
- **WHEN** sistema valida
- **THEN** rechazado (aiCannotHabitate, aiCannotPayCost, aiCannotTransform, aiCannotDecideForHuman)

---

### Requirement: AFP Pilar 3 — Tiempo Vital = Energía Consciente
El sistema SHALL integrar AFP: tiempo vital = energía consciente encarnada, 1h contribución = acceso expandido, NBU cubiertas.

#### Scenario: Tiempo vital = energía consciente verificada
- **GIVEN** consciousEnergyVerified = true
- **WHEN** nodo verifica
- **THEN** afpVitalTime.consciousEnergyVerified = true

#### Scenario: Contribución da acceso expandido
- **GIVEN** contributionHours > 0
- **WHEN** nodo contribuye
- **THEN** expandedAccess = true

#### Scenario: NBU cubiertas por existir/participar
- **GIVEN** nodo existe y participa
- **WHEN** verifica
- **THEN** nbuCovered = true

---

### Requirement: BT180 — Poder = Tiempo Vital
El sistema SHALL reflejar: quien controla tu tiempo controla tu vida, consentimiento gradientes, energía desde abajo, no se vende.

#### Scenario: Control propio tiempo = soberanía
- **GIVEN** controlsOwnTime = true
- **WHEN** nodo opera
- **THEN** powerAsVitalTime.controlsOwnTime = true

#### Scenario: Consentimiento tiene gradientes
- **GIVEN** consentGradients = 0.7
- **WHEN** interacción
- **THEN** gradiente respetado

#### Scenario: Energía siempre desde abajo
- **GIVEN** energyFromBelow = true
- **WHEN** cualquier flujo
- **THEN** origen verificado abajo

#### Scenario: Tiempo vital no se vende
- **GIVEN** intento compra hr_vital
- **WHEN** sistema valida
- **THEN** rechazado, notForSale = true

---

### Requirement: BT165 — Ecuación Lastre E=V
El sistema SHALL implementar: E=V = verdad asumida / verdad evadida, evasión aligera = deuda, presencia densifica, paz = certeza.

#### Scenario: E=V = verdad asumida / verdad evadida
- **GIVEN** truthAssumed=10, truthEvaded=2
- **WHEN** calcula E=V
- **THEN** ratio = 5.0

#### Scenario: Evasión aligera hoy = deuda futura con intereses
- **GIVEN** evasionLightensToday = true
- **WHEN** evasión detectada
- **THEN** deuda futura registrada

#### Scenario: Presencia densifica ahora y estabiliza
- **GIVEN** presenceDensifiesNow = true
- **WHEN** presencia verificada
- **THEN** margen real amplía

#### Scenario: Paz = certeza hacer lo correcto
- **GIVEN** peaceFromAssumption = true
- **WHEN** operador reporta
- **THEN** paz registrada

---

### Requirement: BT164 — Margen Real Disponible
El sistema SHALL trackear: margen = espacio trayectorias reales, evasión reduce, presencia amplía, extracción secuestra, umbral/desfase real.

#### Scenario: Margen = espacio trayectorias reales
- **GIVEN** currentMargin = 0.8
- **WHEN** nodo evalúa
- **THEN** realMargin.currentMargin = 0.8

#### Scenario: Evasión reduce margen artificialmente
- **GIVEN** evasionReducesMargin = true
- **WHEN** evasión detectada
- **THEN** margen reduce

#### Scenario: Presencia amplía margen auditando interno + aplicando compartido
- **GIVEN** presenceExpandsMargin = true
- **WHEN** presencia verificada
- **THEN** margen amplía

---

### Requirement: Arquitectura Anfibia (valueDual) — 3 modos: postmonetario, conectado, vital_time
El sistema SHALL operar en 3 modos sin duplicar lógica de cálculo.

#### Scenario: Modo postmonetario muestra ZNU
- **GIVEN** mode = 'postmonetario', amount = 100
- **WHEN** displayValueUnified()
- **THEN** "100 ZNU"

#### Scenario: Modo conectado muestra USD
- **GIVEN** mode = 'conectado', amount = 100, parity = 0.5
- **WHEN** displayValueUnified()
- **THEN** "$50.00"

#### Scenario: Modo vital_time muestra hr_vital
- **GIVEN** mode = 'vital_time', amount = 1.5
- **WHEN** displayValueUnified()
- **THEN** "1.5 hr_vital"

---

### Requirement: Loop 7 VitalTimeMint en LoopEngine
El sistema SHALL ejecutar Loop 7 que minea hr_vital por presencia verificada cada tick.

#### Scenario: VitalTimeMint rota exceso > 30h protegidas
- **GIVEN** nodo 40 hr_vital, 31 días inactividad, triaxial verificada, 2 dominios integrados
- **WHEN** runAlraicoTick() ejecuta vitalTimeMintLoop
- **THEN** libera 10 hr_vital, triaxialVerificationCount++

#### Scenario: VitalTimeMint NO minea sin triaxial
- **GIVEN** nodo sin triaxial verificada
- **WHEN** vitalTimeMintLoop()
- **THEN** alerta pendingVerifications, no minea

#### Scenario: VitalTimeMint aplica decay > 7 días inactividad
- **GIVEN** nodo 8 días inactividad
- **WHEN** vitalTimeMintLoop()
- **THEN** decay aplicado, evasionReducesMargin = true

---

### Requirement: Métricas VitalTimeFlow + VitalTimeActivationCost
El sistema SHALL proveer métricas completas para tiempo vital (30+ campos VitalTimeFlow, 15+ VitalTimeActivationCost).

#### Scenario: VitalTimeFlow incluye BT213, BT214, AFP, BT180, BT165, BT164
- **GIVEN** nodos verificados
- **WHEN** calculateVitalTimeFlow()
- **THEN** retorna objeto con todos los campos por fuente

#### Scenario: IST incluye vitalTimeAutonomy + kernelLimitsRespected + humanArtificerActive
- **GIVEN** componentes IST
- **WHEN** calculateTerritorialSovereigntyIndex()
- **THEN** media geométrica incluye nuevos componentes

---

### Requirement: Test Desaparición 30 días extendido (kernelLocal + artificerLocal)
El sistema SHALL pasar test desaparición: nodos identifican, intercambian, consultan rastros, coordinan, obligaciones sobreviven, kernel local, artífice local.

#### Scenario: Test desaparición incluye kernelLocal + artificerLocal
- **GIVEN** runDisappearanceTest()
- **WHEN** evalúa nodos
- **THEN** verifica kernelLocal=true, artificerLocal=true

#### Scenario: Degradación mínima, no colapso
- **GIVEN** NEXO central desaparecido 30 días
- **WHEN** testCapabilities()
- **THEN** degradation = 'Mínima', criticalFunctions all pass

---

## REMOVED Requirements
Ninguno (spec v0.2 es aditiva sobre v0.1)

---

## CHANGED Requirements

### Changed: NodeMode ahora incluye 'vital_time'
- **FROM**: `NodeMode = 'postmonetario' | 'conectado'`
- **TO**: `NodeMode = 'postmonetario' | 'conectado' | 'vital_time'`

### Changed: Triaxial weights ahora configurables por gobernanza
- **FROM**: Hardcoded 0.4/0.3/0.3
- **TO**: Ajustables via consenso 100% (rangos: mental 0.2-0.6, sim 0.1-0.5, lab 0.1-0.5)

### Changed: Transducción F ahora requiere kernelLimitsValidated + operatorResponsibility + twoDomainsIntegrated
- **FROM**: Solo triaxial + αʰ
- **TO**: triaxial + αʰ + kernelLimitsValidated + operatorResponsibilityAccepted + twoDomainsIntegrated

---

## Notas de Implementación

- **Archivos código**: `src/core/lib/vitalTime.ts`, `vitalTimeTriaxial.ts`, `vitalTimeTransduction.ts`, `valueDual.ts`, `loopEngine.ts`, `metrics.ts`
- **Gobernanza**: `src/governance/vitalTimeInvariants.ts` (100+ invariantes blindados)
- **Kernel**: `src/core/lib/kernelProtocol.ts`, `bt213KernelLimits.ts`, `humanArtificer.ts`, `viaProtocols.ts`
- **Tests**: Requeridos para cada scenario (vitest)
- **Validación**: `openspec validate --strict` + pre-commit legal-safe