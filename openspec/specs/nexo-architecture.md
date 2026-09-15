# Spec: Arquitectura NEXO (Orquestador Acople Soberano)

**Versión**: 1.0 | **Estado**: Activa | **Fuente**: BT215 (El Nexus) + Kernel v214 Canónico + Sistema Alráico + HSCSG v15 OS

---

## ADDED Requirements

### Requirement: NEXO = Punto Acople (No Autoridad Central)
El NEXO SHALL ser punto de acople donde sistemas soberanos se encuentran, reconocen, intercambian rastros y operan juntos sin dejar de ser lo que son.

#### Scenario: NEXO no es quinto sistema
- **GIVEN** sistemas existentes (Kernel, TQ, HSCSG, Gaia, Alráico)
- **WHEN** NEXO acopla
- **THEN** cada sistema conserva lo suyo, ninguno se disuelve

#### Scenario: NEXO hace operativa Gran Confederación
- **GIVEN** sistemas acoplados
- **WHEN** NEXO opera
- **THEN** Gran Confederación = estado de acople resultante

---

### Requirement: Test Desaparición 30 Días
El NEXO SHALL pasar test: si desaparece 30 días, nodos siguen identificándose, intercambiando, consultando rastros, coordinando. Degradación, no colapso.

#### Scenario: Identidad única local sobrevive
- **GIVEN** NEXO desaparecido 30 días
- **WHEN** nodo verifica canIdentify
- **THEN** true (DID + credenciales locales)

#### Scenario: Intercambio hr_vital local sobrevive
- **GIVEN** NEXO desaparecido 30 días
- **WHEN** nodo verifica canExchange
- **THEN** true (pool local + rotación + trustlines bilaterales)

#### Scenario: Consulta rastros kernel local sobrevive
- **GIVEN** NEXO desaparecido 30 días
- **WHEN** nodo verifica canQueryTraces
- **THEN** true (kernel local con rastros)

#### Scenario: Coordinación manual CDS local sobrevive
- **GIVEN** NEXO desaparecido 30 días
- **WHEN** nodo verifica canCoordinate
- **THEN** true (CDS local + acuerdos bilaterales)

#### Scenario: Obligaciones previas sobreviven
- **GIVEN** NEXO desaparecido 30 días
- **WHEN** nodo verifica obligationsSurvive
- **THEN** true

#### Scenario: Kernel local opera (BT213)
- **GIVEN** NEXO desaparecido 30 días
- **WHEN** nodo verifica kernelLocal
- **THEN** true (kernel organiza rastros localmente)

#### Scenario: Artífice local opera (BT214)
- **GIVEN** NEXO desaparecido 30 días
- **WHEN** nodo verifica artificerLocal
- **THEN** true (humano transforma localmente)

---

### Requirement: IA = Espejo-Excavador (No Voluntad)
El NEXO SHALL usar IA como instrumento: filtra narrativas imposición, devuelve dato raíz compartido. IA no tiene voluntad, procesa y refleja.

#### Scenario: IA no decide por nodos
- **GIVEN** IA procesa datos
- **WHEN** NEXO coordina
- **THEN** IA no decide, solo refleja opciones

#### Scenario: IA filtra narrativas imposición
- **GIVEN** datos con narrativas impuestas
- **WHEN** IA excava
- **THEN** devuelve dato raíz compartido

---

### Requirement: Entrada Voluntaria + Transparencia Condicional
La entrada al NEXO SHALL ser voluntaria. Transparencia no es propiedad del sistema, es condición que cada nodo elige.

#### Scenario: Nodo elige transparencia
- **GIVEN** nodo decide qué comparte
- **WHEN** acopla en NEXO
- **THEN** transparencia = elección del nodo

---

### Requirement: Stack 8 Capas NEXO
El NEXO SHALL implementar stack 8 capas:

| Capa | Componente | Función |
|------|------------|---------|
| 0 | **E=V (Viva)** | Restricción realidad, no implementable, ancla ontológica |
| 1 | **Kernel Alráico** | PI, γ-CARMIS, Triaxial, Transducción F, VIA00-31, Consola VIA-0 |
| 2 | **Identidad Soberana** | DID + FactBand + ECROx + Nombre Resonancia + RAO append-only |
| 3 | **Intercambio Medible** | TQ (1 TQ=1 kWh), Trustlines ZNU/FRNE, Transducción F TQ↔hr_vital |
| 4 | **Deliberación Federada** | CDS 100% consenso, invariantes blindados, propuesta→voto→ejecución |
| 5 | **Red Conocimiento** | Gaia (3000+ contactos, ecoaldeas), RIDF (federated exchange) |
| 6 | **IA Coordinadora** | Espejo-excavador, AgentMesh, ProofOfResponse, CoachFAB, CEL Gateway |
| 7 | **Infraestructura Física** | Ecoaldeas, bioclimáticos, energía, comunicaciones mesh, Nostr relay |

#### Scenario: Capa 0 = E=V viva (no código)
- **GIVEN** Capa 0
- **WHEN** sistema opera
- **THEN** E=V es restricción realidad, no implementable en código

#### Scenario: Capa 1 = Kernel completo v214
- **GIVEN** Capa 1
- **WHEN** kernelProtocol.ts + VIA00-31 + MK-1 + Hoguera + AFP + Enlace
- **THEN** kernel operativo completo

#### Scenario: Capa 6 = IA Espejo-Excavador
- **GIVEN** Capa 6
- **WHEN** IA coordina
- **THEN** no voluntad, solo filtra + refleja

---

### Requirement: 11 Funciones NEXO Operativas

1. **Identificación Única** — DID + FactBand + Nombre Resonancia
2. **Verificación Triaxial** — Mental + Sim + Lab (≥0.7)
3. **Intercambio Medible** — TQ + hr_vital + Trustlines ZNU/FRNE
4. **Transducción F** — TQ↔hr_vital via 𝕮 (αʰ≥0.6)
5. **Deliberación CDS** — Consenso 100%, invariantes blindados
6. **Resonancia Detección** — αʰ₁·αʰ₂·3.0 > αʰ₁+αʰ₂
7. **γ-CARMIS Reconfiguración** — ΣPᵢ > κ → reconfig
8. **Kernel Rastros** — Organiza, no decide, 3 dominios, VIA00-31
9. **IA Espejo-Excavador** — Filtra narrativas, devuelve dato raíz
10. **Test Desaparición** — 30 días degradación no colapso
11. **Autotrofía 7 Gen** — Secuencia crítica material→cognitiva→económica→social

---

### Requirement: Roadmap 6 Fases NEXO

| Fase | Objetivo | Duración | Entregable |
|------|----------|----------|------------|
| 1 | **Kernel v214 Completo** | 2 sem | kernelProtocol.ts + VIA00-31 + Consola VIA-0 |
| 2 | **Identidad + Verificación** | 1 mes | DID + FactBand + Triaxial + RAO |
| 3 | **Intercambio + Transducción** | 2 mes | TQ + hr_vital + Trustlines + Transducción F |
| 4 | **CDS Federado + Resonancia** | 3 mes | CDS 100% + Resonancia + γ-CARMIS |
| 5 | **Red Conocimiento + IA** | 6 mes | Gaia + RIDF + AgentMesh + Espejo-Excavador |
| 6 | **NEXO Operativo + Test Desaparición** | 1 año | Stack 8 capas + test 30 días pasado |

---

## Referencias Cruzadas

| Fuente | Aporte |
|--------|--------|
| BT215 §2-4 | NEXO definición, test desaparición, sistemas base, entrada voluntaria |
| BT215 §25-37 | Stack 8 capas, 11 funciones, roadmap 6 fases |
| Kernel v214 | BT1-214, VIA00-31, MK-1, La Hoguera, AFP, El Enlace, Consola VIA-0 |
| BT213 | Límite kernel (Capa 1, Capa 6 IA) |
| BT214 | Humano artífice (Capa 0, Capa 2, Capa 6) |
| AFP Pilar 3 | Tiempo vital (Capa 3) |
| BT180 | Poder = tiempo vital (Capa 3, Capa 0) |
| BT165 | E=V = verdad asumida/evadida (Capa 0) |
| BT164 | Margen real (Capa 0, Capa 7) |
| Alráico | PI, γ-CARMIS, Triaxial, F, ECROx, 𝕮 (Capa 1, 3, 4) |
| HSCSG v15 OS | valueDual, loopEngine, metrics, skills, legal-safe (todas capas) |

---

## Archivos Implementación

| Archivo | Capa | Descripción |
|---------|------|-------------|
| `src/core/lib/kernelProtocol.ts` | 1 | Kernel Alráico completo + VIA00-31 + Consola VIA-0 |
| `src/core/lib/bt213KernelLimits.ts` | 1, 6 | Límite epistemológico kernel |
| `src/core/lib/humanArtificer.ts` | 0, 2, 6 | Humano artífice Mago+Alquimista |
| `src/core/lib/viaProtocols.ts` | 1 | 32 VIAs ejecutables |
| `src/core/lib/mk1Ontology.ts` | 1 | Ontología MK-1 (Bloque 1.5) |
| `src/core/lib/hogueraAFPEnlace.ts` | 1 | La Hoguera, AFP, El Enlace |
| `src/core/lib/valueDual.ts` | 3 | Arquitectura anfibia ZNU/USD/hr_vital |
| `src/core/lib/vitalTime.ts` | 3 | Moneda tiempo vital completa |
| `src/core/lib/vitalTimeTriaxial.ts` | 2 | Verificación triaxial obligatoria |
| `src/core/lib/vitalTimeTransduction.ts` | 3 | Transducción F TQ↔hr_vital |
| `src/core/lib/loopEngine.ts` | 1, 4, 7 | LoopEngine + Loop 7 VitalTimeMint + γ-CARMIS |
| `src/core/lib/metrics.ts` | 4, 11 | IST + VitalTimeFlow + VitalTimeActivationCost |
| `src/governance/vitalTimeInvariants.ts` | 4 | Invariantes blindados + CDS federado |
| `docs/BIO_THESIS_NEXO_ARCHITECTURE.md` | Todas | Arquitectura completa documentada |