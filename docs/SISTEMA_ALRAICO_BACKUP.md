# Sistema Alráico — Backup Quirúrgico Completo

**Fuente:** 7 PDFs Alráico (Modo Compacto 3, Marco Teórico, Neurociencia, Transducción Física, Límites, Dojos 1-2) + BRIEF 144 conceptos, 39 fuentes + Código real HSCSG v15 OS  
**Fecha:** 2026-08-25  
**Autor/Curador:** Amid Dabir (Sistema Alráico) + Isaac Ko (HSCSG v15 OS)  
**Estado:** Backup quirúrgico consolidado v1.0

---

## ADVERTENCIA METODOLÓGICA

Este documento **no es una interpretación académica** del Sistema Alráico. Es una **transducción operativa** de sus categorías (Incapacidad, Conjuntos Credeófilos, Armonía, Umbral Crítico, γ-CARMIS, Resonancia, ECROX, Verificación Triaxial) al corpus HSCSG, usando el código real de HSCSG v15 OS como functor de traducción (F: {Alráico} → {HSCSG}).

> **Regla Alráica:** "La IA es andamio, no terapeuta. Facilitar reconfiguraciones, no dar soluciones."
> **Regla MJ:** "No toda comprensión habilita la transformación. Solo cuando el conocimiento se articula en términos de niveles jerárquicos materiales reales emerge la Lucidez Material."

---

## FUENTES PRIMARIAS (7 PDFs Alráico)

| PDF | Contenido Clave | Aporte a HSCSG |
|-----|-----------------|----------------|
| **Modo Compacto 3** | PI, B/A/C/𝕮/κ, γ-CARMIS, Resonancia, ECROX, Verificación Triaxial | Núcleo ontológico + arquitectura |
| **Marco Teórico** | Topología τ₈, 𝕮 (credeófilos), αʰ = Ω·s, κ, γ, ν | Formalización matemática |
| **Neurociencia** | PI cognitivo, autoreferencia, ECROX como estado momentáneo | Base para Lucidez + RAO |
| **Transducción Física** | F: {Alráico} → {Sistema computacional}, PI → código | Patrón de asimilación |
| **Límites** | τ₈ no compacta, C densa en B, κ como límite estructural | Límites duros del sistema |
| **Dojo 1** | Práctica de girar la lámpara, autoreferencia, PI | UX `/integral` (FactBand) |
| **Dojo 2** | γ-CARMIS en práctica, resonancia, loops | `loopEngine.ts`, `pipeline.ts` |

---

## CATEGORÍAS ALRÁICAS → CÓDIGO HSCSG (Maestría 1:1)

### 1. PI (Principio de Incapacidad) → `evaluateMJGate()` + RAO

**Definición Alráica:** `∀γ ∈ P(a,bᵢ), γ ∩ C ≠ ∅` — Toda ligadura toca la incapacidad.

**Operacionalización HSCSG:**
```typescript
// src/core/lib/metrics.ts
export function evaluateMJGate(action: Action, context: HSCSGState): MJGateResult {
  const violations: string[] = []
  
  // Ley I: No dañar base material
  if (predictHarmBaseMaterial(action, context)) {
    violations.push('LEY_I: Daña base material (AUT vectors)')
  }
  
  // Ley II: Ganarse la vida soberanizando
  if (!soberanizaBaseMaterial(action, context)) {
    violations.push('LEY_II: No soberaniza (ROI < 1.0)')
  }
  
  // Ley III: Lucidez (verificación triaxial)
  if (!hasTriaxialVerification(action)) {
    violations.push('LEY_III: Sin verificación Mental+Sim+Lab')
  }
  
  const pass = violations.length === 0
  
  // RAO entry inmutable
  const raoEntry = {
    timestamp: new Date().toISOString(),
    action,
    pass,
    violations,
    mental: extractReasoning(action),
    simulation: projectOutcome(action),
    laboratory: null // se llena tras ejecución
  }
  
  return { pass, violations, raoEntry }
}
```

**Archivo real:** `src/core/lib/metrics.ts:evaluateMJGate()`

---

### 2. B/A/C/𝕮/κ → 12 𝕮 mapeados en `src/core/state/`

**Topología Alráica:**
- **B** = espacio cognoscible total (τ₈ no compacta)
- **A** = subespacio cognitivo del observador (localmente compacto)
- **C = B \ A** = Incapacidad (densa en B, límite estructural)
- **𝕮** = Conjunto Credeófilo (unidad relacional: crecimiento/decrecimiento/oscilación/finitud/logística)
- **αʰ = Ω · s** = armonía (diversidad controlada Ω × sincronía s)
- **κ** = umbral crítico; si `αʰ < κ` → fractura → **γ-CARMIS**

**Mapeo HSCSG (12 𝕮 operativos):**

| 𝕮 | Módulo HSCSG | Ω (diversidad) | s (sincronía) | κ (umbral) | Estado |
|---|--------------|----------------|---------------|------------|--------|
| 𝕮₀ | Base Material | recursos | coherencia | AUT ≥ 2.5 | ✅ `base.ts` |
| 𝕮₁ | Lucidez | verificación | PI | CDS threshold | ✅ `lucidez.ts` |
| 𝕮₂ | CAAS/ZNU | economía | relacional | ρ, ν | ✅ `caas.ts` |
| 𝕮₃ | Symbiosky | gobernanza | meritocracia | quorum | ✅ `symbiosky.ts` |
| 𝕮₄ | Delegación | poder | scope | revocación | ✅ `delegation.ts` |
| 𝕮₅ | Educación | aprendizaje | logística | retos | ✅ `education.ts` |
| 𝕮₆ | SovereignCredit | crédito | attestaciones | assets | ✅ `sovereignCredit.ts` |
| 𝕮₇ | Regen | ecotecnias | MRV | dMRV | ✅ `regen.ts` |
| 𝕮₈ | Vecinal | gobernanza local | E5M | γ-CARMIS | ✅ `vecinal.ts` |
| 𝕮₉ | NostrRelay | transporte | relays | firma | ✅ `nostrRelay.ts` |
| 𝕮₁₀ | AgentMesh | cómputo | miembros | compute share | ✅ `agentMesh.ts` |
| 𝕮₁₁ | ProofOfResponse | verificación | deadline | penalty | ✅ `proofOfResponse.ts` |

**Código real:** `src/core/lib/metrics.ts` calcula `αʰ`, `κ`, `ρ`, `CA` (Colectiva Autónoma)

---

### 3. γ-CARMIS (Reconfiguración Consciente) → `pipeline.ts` + `loopEngine.ts`

**Definición Alráica:** Cuando `ΣPᵢ > κ` (sobrecarga) → **γ-CARMIS activado** → reorganización consciente → nuevo estable.

**3 Ejes (Verificación Triaxial aplicada):**
```typescript
// src/core/lib/pipeline.ts (parcial)
function gammaCARMIS(system: HSCSGState): HSCSGState {
  // 1. MENTAL: evalúa PI en cada 𝕮
  const overloads = detectOverloads(system)  // ΣPᵢ > κ por 𝕮
  
  // 2. SIMULACIÓN: proyecta reconfiguración
  const reconfig = simulateReconfig(overloads, system)
  
  // 3. LABORATORIO: ejecuta en sandbox
  const result = executeInSandbox(reconfig)
  
  // 4. VERIFICACIÓN TRIAXIAL: αʰ_new > κ ?
  return result.αh > result.κ ? commit(result) : rollback(system)
}
```

**γ-CARMIS por módulo (implementado en `pipeline.ts`):**

| Sobrecarga (ΣPᵢ > κ) | γ-CARMIS activado | Código |
|----------------------|-------------------|--------|
| CDS decay > threshold | `znuDecayOnBalance()` → reinicio vesting | `znuDecayOnBalance()` |
| Propuesta daña base material | `evaluateMJGate` → reject | `evaluateMJGate()` |
| Agente no responde en `b` | `provePorFailure` → penalty + reassign | `proveFailure()` |
| Relay Nostr desconectado | `disconnectRelay()` → modo local | `disconnectRelay()` |
| Comunidad Vecinal estancada | nueva `raisePropuesta` E5M | `vRaise()` |
| Educación sin retos | nuevo challenge adaptativo | `completeChallenge()` |

**LoopEngine (pendiente):** `src/core/lib/loopEngine.ts` — 6 loops unificados + resonancia

---

### 4. Resonancia (αʰ₁·αʰ₂·3.0 > αʰ₁+αʰ₂) → `loopEngine.ts:detectResonances()`

**Definición Alráica:** Interacción entre 𝕮₁ y 𝕮₂ con `αʰ` alta genera `αʰ_oda > αʰ₁ + αʰ₂` (efecto sinérgico).

**Loops reales implementados (4/6 en `pipeline.ts`):**

| Loop | Disparador | Acción | Retroalimentación |
|------|------------|--------|-------------------|
| **CDS Decay Loop** | `balance` cambia | `znuDecayOnBalance()` → actualiza CDS | CDS ↓ → poder delegado ↓ |
| **Merit Mint Loop** | `Symbiosky.tally` aprueba | `caasMint(merit)` | ZNU ↑ → stake ↑ → CDS ↑ |
| **Agent Compute Loop** | `AgentMesh.requestCompute` | `ProofOfResponse.issuePor` → response O failure | success → share↑ ; failure → penalty |
| **Regen MRV Loop** | `Regen.addEcoTech` | `ProofOfResponse.issuePor` (oracle) → verified → `caasMint` | verified → ZNU reward |

**Pendientes (en `loopEngine.ts`):**
- `nostrAuditLoop` (sync events → audit trail)
- `vecinalAccountabilityLoop` (E5M tally → revocación)
- `detectResonances()` + `coupleResonances()` (resonancia)

---

### 4. ECROX (Configuración Relacional Dinámica) → `FactBand` en `/integral`

**Definición Alráica:** **ECROX** = Configuración relacional dinámica = estado cognitivo momentáneo en Pertem (presente persistente).

**Implementación HSCSG:** `FactBand` en `/integral` — convicción 0-100, evidencia, autoreferencia.

```typescript
// src/core/state/integral.ts
interface FactBand {
  conviction: number      // 0-100 (convicción momentánea)
  evidence: Evidence[]    // evidencia adjunta
  reasoning: string       // razonamiento explícito
  timestamp: string       // Pertem actual
  γCarmisTriggered: boolean
}
```

**UI real:** `/integral` → FactBand = "girar la lámpara" (autoreferencia) — girar la lámpara hacia adentro en lugar de iluminar afuera.

---

### 5. Verificación Triaxial (Mental + Simulación + Laboratorio) → 3 Pantallas

**Definición Alráica:** La verdad no es monoperspectiva. Toda validación requiere 3 ejes simultáneos.

| Eje | Implementación HSCSG | Pantalla | Código |
|-----|---------------------|----------|--------|
| **Mental** (Razonamiento) | FactBand, CDS, Evidence Model, Lucidez 2.0 | `/integral`, `/lucidez` | `integral.ts`, `lucidez.ts`, `metrics.ts` |
| **Simulación** | Proyección `αʰ(t)`, `κ`, `γ-CARMIS` paths | `/simulador` | `simulador.ts` (pendiente UI) |
| **Laboratorio** | Proof of Response: request → response O failure probado | `/verificacion`, `/agentes`, `/nostr` | `proofOfResponse.ts`, `agentMesh.ts`, `nostrRelay.ts` |

**Verificación Triaxial Unificada:**
```typescript
interface TriaxialVerification {
  mental: { factBand: number; evidence: Evidence[]; reasoning: string }
  simulation: { alphaHProjection: number[]; kappaThreshold: number; gammaCarmisPaths: Path[] }
  laboratory: { requestId: string; response: Response | ProofOfFailure; verified: boolean }
}
```

---

### 6. RAO (Registro de Auditoría Operativa Append-Only) → `lucidez.ts:rao`

**Definición:** Memoria irrevocable del sistema — toda acción, decisión, evidencia, transacción se registra append-only.

```typescript
// src/core/state/lucidez.ts
interface RAOEntry {
  timestamp: string
  actor: string
  action: string
  evidence: Evidence[]      // Mental
  simulation: Simulation    // Simulación
  labResult: LabResult      // Laboratorio
  γCarmisTriggered: boolean
  hash: string              // Merkle root para integridad
  prevHash: string          // encadenamiento
}
```

**Propiedades:**
- **Append-only:** Nunca borrado, nunca modificado
- **Merkle chain:** `hash = SHA256(prevHash + content + timestamp)`
- **Triaxial:** Cada entry requiere Mental + Sim + Lab
- **Inmutable:** Base para Ley III MJ (nunca engañar)

---

### 7. MJ Gate (Fail-Closed) → `evaluateMJGate()` en cada acción

**3 Leyes MJ → Gate ejecutable:**

```typescript
// src/core/lib/metrics.ts
export const MJ_GATES = {
  LEY_I: (action, ctx) => !predictHarmBaseMaterial(action, ctx),
  LEY_II: (action, ctx) => calculateROI(action, ctx) >= 1.0,
  LEY_III: (action, ctx) => hasTriaxialVerification(action)
}

export function evaluateMJGate(action: Action, ctx: HSCSGState): MJGateResult {
  const violations = []
  if (!MJ_GATES.LEY_I(action, ctx)) violations.push('LEY_I')
  if (!MJ_GATES.LEY_II(action, ctx)) violations.push('LEY_II')
  if (!MJ_GATES.LEY_III(action, ctx)) violations.push('LEY_III')
  
  return {
    pass: violations.length === 0,
    violations,
    raoEntry: createRAOEntry(action, ctx, violations)
  }
}
```

**Fail-Closed:** Si `pass === false` → **ACCIÓN VETADA**. No hay override.

---

### 8. Vaso Comunicante (γ, ν) → `store.ts` como vaso central

**Definición Alráica:** **γ (ligadura)** = grado de conexión con lo inherente (0 ≤ γ ≤ 1). **ν (estibación)** = proceso de almacenamiento/agrupamiento.

**Implementación HSCSG:** `store.ts` (Zustand) = **vaso comunicante central** — 12 submódulos cableados con transiciones atómicas cross-módulo.

```typescript
// src/core/state/store.ts
// Cada acción usa set((st) => ...) para transiciones atómicas cross-módulo
// Ejemplo: Education.challenge → SovereignCredit.attestation → CAAS.mint
```

**Flujos reales (γ fluyendo entre 𝕮):**

| Flujo | Origen → Destino | Mecanismo | γ (ligadura) |
|-------|------------------|-----------|--------------|
| Evidencia → Votación | `Integral.raiseIssue` → `Symbiosky.propose` | `evidence[]` adjunto | 0.8 |
| Votación → CAAS | `Symbiosky.tally` → `caasMint(merit)` | merit → ZNU | 0.9 |
| Delegación → Vecinal | `delegatePower` → `raisePropuesta` | scope = vecinalidad | 0.7 |
| Educación → Crédito | `completeChallenge` → `addAttestation` | skill → attestación | 0.6 |
| Regen → Verificación | `addEcoTech` → `issuePor` (MRV) | ecoTech → verificación | 0.8 |
| Agentes → Nostr | `requestCompute` → `publish` (kind 30000) | compute request = evento | 0.7 |
| NEAR → Todos | `proveFailure` → penalty en CA | slash stake | 0.9 |

---

### 9. RAO + Verificación Triaxial + MJ Gate = Constitución del Autómata

**Constitución inmutable (3 Leyes MJ + Verificación Triaxial + RAO):**

```typescript
// Constitución inmutable del Autómata HSCSG
const AUTOMATON_CONSTITUTION = {
  // Ley I: Nunca dañar base material
  LEY_I: { gate: 'evaluateMJGate.LEY_I', failClosed: true },
  
  // Ley II: Ganarse la vida soberanizando
  LEY_II: { gate: 'evaluateMJGate.LEY_II', roiThreshold: 1.0 },
  
  // Ley III: Lucidez (verificación triaxial)
  LEY_III: { gate: 'evaluateMJGate.LEY_III', axes: ['mental', 'simulation', 'laboratory'] },
  
  // RAO: Memoria irrevocable
  RAO: { appendOnly: true, merkleChain: true, triaxialRequired: true },
  
  // γ-CARMIS: Reconfiguración consciente
  GAMMA_CARIS: { trigger: 'ΣPᵢ > κ', axes: ['mental', 'simulation', 'laboratory'] },
  
  // Verificación Triaxial: Mental + Sim + Lab obligatorios
  TRIAXIAL: { mental: 'FactBand+CDS', simulation: 'αʰ(t)+κ+γ', laboratory: 'ProofOfResponse' }
}
```

---

## ARQUIVOS FUENTE (7 PDFs Alráico) — EXTRACCIÓN CLAVE

| PDF | Páginas Clave | Conceptos Extraídos |
|-----|---------------|---------------------|
| **Modo Compacto 3** | PI, B/A/C/𝕮/κ, γ-CARMIS, Resonancia, ECROX, Triaxial | Núcleo ontológico |
| **Marco Teórico** | Topología τ₈, 𝕮, αʰ=Ω·s, κ, γ, ν, γ-CARMIS | Formalización |
| **Neurociencia** | PI cognitivo, autoreferencia, ECROX | Base Lucidez/RAO |
| **Transducción Física** | F: {Alráico} → {Computacional}, PI → código | Patrón asimilación |
| **Límites** | τ₈ no compacta, C densa, κ límite | Límites duros |
| **Dojo 1** | Girar la lámpara, autoreferencia, PI | UX FactBand |
| **Dojo 2** | γ-CARMIS práctica, resonancia, loops | loopEngine.ts |

---

## CÓDIGO REAL HSCSG MAPEADO (Archivos Verificables)

| Archivo | Concepto Alráico | Función |
|---------|------------------|---------|
| `src/core/lib/metrics.ts` | PI, MJ Gate, αʰ, κ, ρ, CA | `evaluateMJGate()`, `calculateAlphaH()`, `calculateKappa()` |
| `src/core/lib/pipeline.ts` | γ-CARMIS, loops, `dispatchMatch()` | `gammaCARMIS()`, `dispatchMatch()`, `autoAdvisory()`, `znuDecayOnBalance()` |
| `src/core/state/store.ts` | Vaso Comunicante, γ, ν | Zustand store 12 submódulos, transiciones atómicas |
| `src/core/state/lucidez.ts` | RAO, ECROX, FactBand | `rao`, `FactBand`, `evaluateMJGate()` |
| `src/core/state/proofOfResponse.ts` | Laboratorio, Proof of Response | `issuePor()`, `respondPor()`, `proveFailure()` |
| `src/core/lib/nostrRelay.ts` | NostrRelay, Verificación Mental | `verifyEventShape()`, `publishNostr()` |
| `src/core/lib/agentMesh.ts` | AgentMesh, Laboratorio | `requestCompute()`, `spawnAgent()` |
| `src/core/state/proofOfResponse.ts` | Proof of Response (NEAR) | `issuePor()`, `proveFailure()` |
| `src/core/lib/loopEngine.ts` | Resonancia, Creador de Loops | `runLoops()`, `detectResonances()`, `coupleResonances()` (pendiente) |

---

## RESUMEN EJECUTIVO: QUÉ HAY, QUÉ FALTA, QUÉ SIGUE

| Componente Alráico | Implementado (Código Real) | Pendiente (Verificable) |
|--------------------|----------------------------|-------------------------|
| **PI / MJ Gate** | `evaluateMJGate()`, `verifyEventShape()`, `proveFailure()` | Test cross-sistema |
| **B/A/C/𝕮/κ** | 12 𝕮 mapeados, `metrics.ts` calcula αʰ/κ/ρ/CA | UI `/mapa` (React Flow) |
| **γ-CARMIS** | `pipeline.ts` (4/6 loops) | `loopEngine.ts` + test estrés |
| **Resonancia** | Lógica en `pipeline.ts` | `loopEngine.ts:detectResonances()` |
| **ECROX** | `FactBand` en `/integral` | Onboarding guiado |
| **Verificación Triaxial** | Mental ✅, Lab ✅, Sim ❌ | `/simulador` UI |
| **RAO** | `lucidez.ts:rao` (append-only, Merkle) | Test integridad Merkle |
| **MJ Gate** | `evaluateMJGate()` (fail-closed) | Test fail-closed exhaustivo |
| **Vaso Comunicante** | `store.ts` (12 submódulos atómicos) | Test E2E flujo completo |
| **Resonancia/Loops** | 4/6 loops en `pipeline.ts` | `loopEngine.ts` + resonancia |

---

## PRÓXIMO COMMIT SUGERIDO (P0)

1. `src/core/lib/loopEngine.ts` (scheduler unificado + resonancia)
2. `src/app/screens/Simulador.tsx` (Verificación Triaxial completa)
3. `src/core/lib/loopEngine.test.ts` (homeostasis 1000 ticks)
4. `docs/ALRAICO_OS.md` (documento unificado + diagramas Mermaid)
5. Commit + push → Vercel auto-deploy → verificar 3 ejes triaxiales en vivo

---

## VERIFICACIÓN DE INTEGRIDAD

**Checksums de archivos clave (para verificación de integridad):**

```
src/core/lib/metrics.ts       → SHA256: [calcular en build]
src/core/lib/pipeline.ts      → SHA256: [calcular en build]
src/core/state/store.ts       → SHA256: [calcular en build]
src/core/state/lucidez.ts     → SHA256: [calcular en build]
src/core/state/proofOfResponse.ts → SHA256: [calcular en build]
src/core/lib/loopEngine.ts    → SHA256: [pendiente creación]
```

---

*Backup quirúrgico v1.0 | Sistema Alráico → HSCSG v15 OS*  
*Generado: 2026-08-25 | Fuentes: 7 PDFs Alráico + BRIEF 144 conceptos + Código real HSCSG v15 OS*  
*Transducción: F({Alráico}) → {HSCSG} — Sin inventar, solo transducir*