# SISTEMA ALRÁICO — EXPLORACIÓN ITERATIVA EN 8 CARAS
**Integración: HSCSG v15 OS + Didacta/Educaas + Urbanika (SovereignCredit/Regen/Vecinal) + block/buzz (Nostr/Agentes) + NEAR (Proof of Response)**  
**Fuentes primarias:** 7 PDFs Alráico (Modo Compacto 3, Marco Teórico, Neurociencia, Transducción Física, Límites, Dojos 1-2) + BRIEF (144 conceptos, 39 fuentes)  
**Metodología:** cada cara = definición operativa + mapeo a integraciones + código existente + siguiente paso verificable.

---

## 1. PROTOCOLO — Reglas de enganche y validación entre sistemas
**Definición Alráica:** El Principio de Incapacidad (PI) `∀γ ∈ P(a,bᵢ), γ ∩ C ≠ ∅` establece que **toda ligadura toca la incapacidad**. El protocolo es: *ante cualquier acción, declara tu C (lo que no sabes/puedes) y verifica triaxialmente (Mental + Simulación + Laboratorio)*.

**Mapeo integraciones:**
| Sistema | Punto de enganche | Regla operativa |
|---------|-------------------|-----------------|
| **Symbiosky** (commit-reveal) | `evaluateMJGate(propuesta)` | Ley I MJ: `¬daña_base_material` → gate antes de votar |
| **CAAS/ZNU** | `caasMint()` / `vest()` | stake solo si `αʰ > κ` (armonía > umbral crítico) |
| **Delegación** | `delegatePower(to, scope)` | scope acotado; revocable en `pertem` actual |
| **NostrRelay (Buzz)** | `publishNostr(event)` | evento firmado; verifica `verifyEventShape` (Mental) + `queryLocal` (Simulación) |
| **AgentMesh (Buzz)** | `requestAgentCompute(agentId)` | deadline `b` + `provePorFailure` (NEAR PoR) = Lab |
| **Proof of Response (NEAR)** | `issuePor / respondPor / provePorFailure` | PI directo: response O proof-of-failure verificable |

**Código real:** `src/core/lib/metrics.ts:evaluateMJGate()` (Ley I/II/III), `src/core/state/proofOfResponse.ts:proveFailure()`, `src/core/lib/nostrRelay.ts:verifyEventShape()`.

**Siguiente paso verificable:** test de protocolo cross-sistema — `Symbiosky.propose()` → `evaluateMJGate` → si pasa → `NostrRelay.publish()` → `AgentMesh.requestCompute()` → `ProofOfResponse.issuePor()` → `provePorFailure` si expira. **Test pendiente.**

---

## 2. MAPA — Topología del espacio cognoscible (B, A, C, 𝕮, κ)
**Definición Alráica:** 
- **B** = espacio cognoscible total (topología τ₈ no compacta)
- **A** = subespacio cognitivo del observador (localmente compacto ⊂ B)
- **C = B \ A** = Incapacidad (densa en B, límite estructural inevitable)
- **𝕮** = Conjunto Credeófilo (unidad relacional: crecimiento/decrecimiento/oscilación/finitud/logística)
- **αʰ = Ω · s** = armonía (diversidad controlada Ω × sincronía s)
- **κ** = umbral crítico; si `αʰ < κ` → fractura → **γ-CARMIS** (reconfiguración consciente)

**Mapeo integraciones (cada módulo = un 𝕮 en el mapa):**

| Módulo HSCSG | 𝕮 correspondiente | Variables Alráicas | Estado actual |
|--------------|-------------------|-------------------|---------------|
| **Base Material** | 𝕮₀ (fundamento) | Ω=recursos, s=coherencia | `src/core/state/base.ts` |
| **Lucidez** | 𝕮₁ (verificación) | γ=ligadura a PI, κ=CDS threshold | `src/core/state/lucidez.ts` |
| **CAAS/ZNU** | 𝕮₂ (economía postmonetaria) | ρ=densidad relacional, ν=estibación | `src/core/state/caas.ts` |
| **Symbiosky** | 𝕮₃ (gobernanza) | αʰ=meritocracia, κ=quorum | `src/core/state/symbiosky.ts` |
| **Delegación** | 𝕮₄ (poder líquido) | γ=scope, κ=revocación | `src/core/state/delegation.ts` |
| **Educación/Educaas** | 𝕮₅ (aprendizaje) | n𝕿[θ]=tiempo logístico | `src/core/state/education.ts` |
| **SovereignCredit** | 𝕮₆ (crédito soberano) | Ω=activos, s=attestaciones | `src/core/state/sovereignCredit.ts` |
| **Regen** | 𝕮₇ (regeneración) | Ω=ecotecnias, s=MRV | `src/core/state/regen.ts` |
| **Vecinal** | 𝕮₈ (gobernanza local) | κ=E5M threshold, γ-CARMIS=reveal | `src/core/state/vecinal.ts` |
| **NostrRelay** | 𝕮₉ (transporte) | Ω=relays, s=firma | `src/core/state/nostrRelay.ts` |
| **AgentMesh** | 𝕮₁₀ (cómputo) | ρ=miembros, ν=compute share | `src/core/state/agentMesh.ts` |
| **ProofOfResponse** | 𝕮₁₁ (verificación) | κ=deadline b, γ-CARMIS=penalty | `src/core/state/proofOfResponse.ts` |

**Código real:** `src/core/lib/metrics.ts` calcula `αʰ` (armonía), `κ` (CDS), `ρ` (CA colectiva). `src/core/lib/caas.ts:priceParity()` = transducción valor dual.

**Siguiente paso verificable:** visualizador de mapa (React Flow) donde cada 𝕮 muestra su `αʰ`, `κ`, `γ` en tiempo real. **Pendiente UI `/mapa`.**

---

## 3. MANUAL — Guía de operación para el observador (a ∈ A en Pertem)
**Definición Alráica:** *Pertem* = Presente persistente (momento operativo donde a ∈ A actúa). El manual enseña al observador a **girar la lámpara**: en lugar de iluminar afuera, observar sus propios pasos (autoreferencia).

**Mapeo integraciones (pasos operativos):**

| Paso | Acción del observador | Módulo HSCSG | UI real |
|------|----------------------|--------------|---------|
| 1. **Situarse** | Ver mi `C` (lo que no sé/puedo) | `Lucidez` → `Integral` (FactBand) | `/integral` |
| 2. **Declarar** | Emitir propuesta con evidencia | `Symbiosky` → `raiseIntegralIssueWithEvidence` | `/integral` |
| 3. **Votar por mérito** | Commit → Reveal (no dogma) | `Symbiosky` commit-reveal | `/lucidez` → `/symbiosky` |
| 4. **Delegar con scope** | Poder líquido revocable | `Delegación` | `/delegacion` |
| 5. **Aprender** | Retos → experiencias → recuerdos | `Educación/Educaas` | `/educacion` |
| 6. **Atestar crédito** | Activos → attestaciones soberanas | `SovereignCredit` | `/soberania-credito` |
| 7. **Regenerar** | EcoTecnologías + dMRV | `Regen` | `/regen` |
| 8. **Gobernar vecinal** | Propuesta E5M → commit-reveal | `Vecinal` | `/vecinal` |
| 9. **Publicar en Nostr** | Evento firmado offline-first | `NostrRelay` | `/nostr` |
| 10. **Pedir cómputo a agentes** | Request → response O proof | `AgentMesh` + `ProofOfResponse` | `/agentes` + `/verificacion` |

**Código real:** `src/app/screens/Integral.tsx` (FactBand = "girar la lámpara"), `src/core/state/integral.ts:raiseIssueWithEvidence()`, `src/core/state/education.ts:completeChallenge()`.

**Siguiente paso verificable:** flujo guiado "Onboarding Alráico" que lleva al usuario por los 10 pasos en orden, grabando su `ECROX` (estado cognitivo momentáneo) en cada uno. **Pendiente.**

---

## 4. MÉTODO — Algoritmo de reconfiguración consciente (γ-CARMIS)
**Definición Alráica:** Cuando `Σ Pᵢ > κ` (sobrecarga) → **γ-CARMIS** activado → reorganización → nuevo estable. Traducción al usuario: *"mecanismo de reinicio consciente"*. 3 ejes: **Mental + Simulación + Laboratorio** (Verificación Triaxial).

**Mapeo integraciones (γ-CARMIS por módulo):**

| Sobrecarga (ΣPᵢ > κ) | γ-CARMIS activado | Resultado |
|----------------------|-------------------|-----------|
| CDS decay > threshold | `znuDecayOnBalance()` → reinicio vesting | `src/core/lib/pipeline.ts:znuDecayOnBalance()` |
| Propuesta daña base material | `evaluateMJGate` → reject | `src/core/lib/metrics.ts:evaluateMJGate()` |
| Agente no responde en `b` | `provePorFailure` → penalty + reassign | `src/core/state/proofOfResponse.ts:proveFailure()` |
| Relay Nostr desconectado | `disconnectRelay()` → modo local | `src/core/state/store.ts:disconnectRelay()` |
| Comunidad Vecinal estancada | nueva `raisePropuesta` E5M | `src/core/state/vecinal.ts:vRaise()` |
| Educación sin retos completados | nuevo challenge adaptativo | `src/core/state/education.ts:completeChallenge()` |

**Flujo γ-CARMIS unificado (pseudocódigo real):**
```ts
function gammaCARMIS(system: HSCSGState): HSCSGState {
  // 1. Mental: evalúa PI en cada 𝕮
  const overloads = detectOverloads(system)  // ΣPᵢ > κ por módulo
  // 2. Simulación: proyecta reconfiguración
  const reconfig = simulateReconfig(overloads, system)
  // 3. Laboratorio: ejecuta en sandbox (testnet/offline)
  const result = executeInSandbox(reconfig)
  // 4. Si αʰ_new > κ → commit; sino → rollback + alerta
  return result.αh > result.κ ? commit(result) : rollback(system)
}
```

**Código real:** `src/core/lib/pipeline.ts:dispatchMatch()` + `autoAdvisory()` + `applyDecisionTo()` + `znuDecayOnBalance()` = pipeline γ-CARMIS.

**Siguiente paso verificable:** test de estrés que fuerza `ΣPᵢ > κ` en 3 módulos simultáneos y verifica que γ-CARMIS reorganiza sin pérdida de RAO. **Pendiente.**

---

## 5. INTERFAZ — Donde el observador toca el sistema (ECROX + Verificación Triaxial)
**Definición Alráica:** **ECROX** = Configuración relacional dinámica = estado cognitivo momentáneo en Pertem. **Verificación Triaxial** = Mental (razonamiento) + Simulación (modelo) + Laboratorio (realidad). La interfaz debe exponer los 3 ejes simultáneamente.

**Mapeo integraciones (UI real existente):**

| Eje Triaxial | Pantalla HSCSG | Qué muestra | Código |
|--------------|----------------|-------------|--------|
| **Mental** | `/integral` | FactBand (convicción), Lucidez 2.0, Evidence Model | `Integral.tsx`, `integral.ts` |
| **Mental** | `/lucidez` | CDS, RAO log, Score Schelling | `Lucidez.tsx` |
| **Simulación** | `/simulador` (pendiente) | proyección `αʰ(t)`, `κ`, `γ-CARMIS` paths | — |
| **Laboratorio** | `/verificacion` | Proof of Response: request → response O fallo probado | `Verificacion.tsx`, `proofOfResponse.ts` |
| **Laboratorio** | `/agentes` | AgentMesh: spawn, compute share, resurrect | `Agentes.tsx`, `agentMesh.ts` |
| **Laboratorio** | `/nostr` | Relay: publish event, verify shape, offline queue | `Nostr.tsx`, `nostrRelay.ts` |
| **ECROX live** | Header + Aside | `nav.verificacionPor`, `nav.agentes`, `nav.nostr` | `Header.tsx`, `Aside.tsx` |

**Código real:** `src/core/state/integral.ts:FactBand` (convicción 0-100), `src/core/state/proofOfResponse.ts` (response O failure), `src/core/state/agentMesh.ts` (compute gated por comunidad).

**Siguiente paso verificable:** pantalla `/simulador` que proyecta `αʰ(t)` para cada 𝕮 con sliders de Ω, s, κ y botón "Disparar γ-CARMIS". **Pendiente.**

---

## 6. VASO COMUNICANTE — Flujo de información entre subsistemas (sin pérdida de coherencia)
**Definición Alráica:** La **ligadura γ** (0 ≤ γ ≤ 1) = grado de conexión con lo inherente. **ν (Estibación)** = proceso de almacenamiento/agrupamiento = medida de dependencia conceptual. El vaso comunicante permite que `γ` fluya entre 𝕮 sin romper `αʰ`.

**Mapeo integraciones (flujos reales implementados):**

| Flujo | Origen → Destino | Mecanismo | Código |
|-------|------------------|-----------|--------|
| **Evidencia → Votación** | `Integral.raiseIssueWithEvidence` → `Symbiosky.propose` | `evidence[]` adjunto a propuesta | `integral.ts`, `symbiosky.ts` |
| **Votación → CAAS** | `Symbiosky.tally` → `caasMint` (reward por mérito) | `merit` → `ZNU` | `symbiosky.ts`, `caas.ts` |
| **Delegación → Vecinal** | `Delegación.delegatePower` → `Vecinal.raisePropuesta` | `scope` = vecinalidad | `delegation.ts`, `vecinal.ts` |
| **Educación → Crédito** | `Education.completeChallenge` → `SovereignCredit.addAttestation` | skill → attestación | `education.ts`, `sovereignCredit.ts` |
| **Regen → dMRV** | `Regen.addEcoTech` → `ProofOfResponse.issuePor` (MRV request) | ecoTech → verificación | `regen.ts`, `proofOfResponse.ts` |
| **Agentes → Nostr** | `AgentMesh.requestCompute` → `NostrRelay.publish` (request firmado) | compute request = Nostr event kind 30000 | `agentMesh.ts`, `nostrRelay.ts` |
| **NEAR → Todos** | `ProofOfResponse.proveFailure` → penalty en CA colectiva | slash stake comunidad | `proofOfResponse.ts`, `caas.ts` |

**Código real:** `src/core/state/store.ts` = **el vaso comunicante central** (Zustand store con 12 submódulos cableados). Cada acción usa `set((st) => ...)` para transiciones atómicas cross-módulo.

**Siguiente paso verificable:** test de flujo end-to-end: `Education.challenge` → `SovereignCredit.attestation` → `CAAS.mint` → `Nostr.publish` → `AgentMesh.compute` → `ProofOfResponse.verify`. **Pendiente.**

---

## 7. CREADOR DE LOOPS — Generador de bucles de retroalimentación autorregulada
**Definición Alráica:** **Resonancia** = interacción entre 𝕮₁ y 𝕮₂ con `αʰ` alta genera `αʰ_oda > αʰ₁ + αʰ₂` (efecto sinérgico). **Ciclo de Reconfiguración**: Estable → Sobrecarga (ΣPᵢ > κ) → γ-CARMIS → Reorganización → Nuevo Estable. El sistema debe crear sus propios loops.

**Mapeo integraciones (loops reales y propuestos):**

| Loop | Disparador | Acción | Retroalimentación | Código base |
|------|------------|--------|-------------------|-------------|
| **CDS Decay Loop** | `balance` cambia | `znuDecayOnBalance` → actualiza CDS | CDS ↓ → poder delegado ↓ | `pipeline.ts:znuDecayOnBalance()` |
| **Merit Mint Loop** | `Symbiosky.tally` aprueba | `caasMint(merit)` | ZNU ↑ → stake ↑ → CDS ↑ | `symbiosky.ts` → `caas.ts` |
| **Agent Compute Loop** | `AgentMesh.requestCompute` | `ProofOfResponse.issuePor` → response O failure | success → `shareCompute` ↑ ; failure → `penalty` | `agentMesh.ts` + `proofOfResponse.ts` |
| **Regen MRV Loop** | `Regen.addEcoTech` | `ProofOfResponse.issuePor` (oracle) → verified → `caasMint` | verified → ZNU reward | `regen.ts` + `proofOfResponse.ts` |
| **Nostr Relay Loop** | `NostrRelay.connect` | sync events → `AgentMesh.auditTrail` | audit → trust score | `nostrRelay.ts` + `agentMesh.ts` |
| **Vecinal E5M Loop** | `Vecinal.tally` aprueba | `Delegación.revoke` si falla | accountability → trust | `vecinal.ts` + `delegation.ts` |

**Loop maestro (propuesta de código):**
```ts
// src/core/lib/loopEngine.ts (NUEVO)
export function runLoops(st: HSCSGState): HSCSGState {
  st = cdsDecayLoop(st)
  st = meritMintLoop(st)
  st = agentComputeLoop(st)
  st = regenMrvLoop(st)
  st = nostrAuditLoop(st)
  st = vecinalAccountabilityLoop(st)
  // Resonancia: detecta 𝕮ᵢ,𝕮ⱼ con αʰ alta y propón acoplamiento
  const resonances = detectResonances(st)
  return resonances.length > 0 ? coupleResonances(st, resonances) : st
}
```

**Código real:** `src/core/lib/pipeline.ts` ya tiene `dispatchMatch`, `autoAdvisory`, `applyDecisionTo`, `znuDecayOnBalance` = 4/6 loops. Falta `agentComputeLoop`, `regenMrvLoop`, `nostrAuditLoop`, `vecinalAccountabilityLoop`.

**Siguiente paso verificable:** crear `loopEngine.ts` + test que simula 100 ticks y verifica que `αʰ_total` no decae (homeostasis). **Pendiente.**

---

## 8. SISTEMA OPERATIVO — Nodo offline-first que ejecuta todo lo anterior
**Definición Alráica:** El Sistema Alráico **es** el sistema operativo: topología B/A/C + PI + γ-CARMIS + Verificación Triaxial + loops. No es una app encima de un OS; **es el OS**. HSCSG v15 OS = implementación computacional de ese OS.

**Arquitectura HSCSG = Alráico OS (mapeo 1:1):**

| Capa Alráica | Implementación HSCSG | Estado |
|--------------|----------------------|--------|
| **Kernel (PI + B/A/C)** | `src/core/state/` (12 stores) + `src/core/lib/metrics.ts` | ✅ 144 conceptos |
| **Scheduler (γ-CARMIS)** | `src/core/lib/pipeline.ts` + `loopEngine.ts` (pendiente) | 🟡 4/6 loops |
| **FS (RAO append-only)** | `src/core/state/lucidez.ts:rao` + `Integral.evidence[]` | ✅ |
| **Network (Nostr/NEAR)** | `nostrRelay.ts` (anfibio) + `proofOfResponse.ts` (anfibio) | ✅ |
| **Process (Agentes/Actores)** | `agentMesh.ts` (spawn/resurrect) + `symbiosky.ts` (votación) | ✅ |
| **Shell (Interfaz)** | `src/app/screens/` (12 pantallas) + `Aside/Header/i18n` | ✅ |
| **Package Manager (Módulos)** | `src/core/state/*.ts` + `src/core/lib/*.ts` (ESM, tree-shakable) | ✅ |
| **Verificación (Triaxial)** | Mental: `Integral/Lucidez` · Sim: `Simulador` (pendiente) · Lab: `Verificacion/Agentes/Nostr` | 🟡 2/3 |

**Anfibio (postmonetario ↔ conectado):** `lib/valueDual.ts:priceParity` + `store.nodeMode` + `caas.ts` = misma lógica, distinta etiqueta (ZNU/USD).

**Código real:** `src/main.tsx` → `App.tsx` (router 12 rutas) → `store.ts` (12 submódulos) → `metrics.ts` (Ley I/II/III MJ, αʰ, κ, ρ, CA).

**Siguiente paso verificable:** 
1. `loopEngine.ts` (completa scheduler)
2. `/simulador` (completa Verificación Triaxial)
3. Test de homeostasis 1000 ticks
4. Documento único `ALRAICO_OS.md` que esto resume + diagramas Mermaid

---

## RESUMEN EJECUTIVO: QUÉ HAY, QUÉ FALTA, QUÉ SIGUE

| Cara | Implementado (código real) | Pendiente (verificable) |
|------|----------------------------|-------------------------|
| 1. Protocolo | `evaluateMJGate`, `verifyEventShape`, `provePorFailure` | Test cross-sistema |
| 2. Mapa | 12 𝕮 mapeados, `metrics.ts` calcula αʰ/κ/ρ | UI `/mapa` (React Flow) |
| 3. Manual | 10 pasos en 12 pantallas | Onboarding guiado |
| 4. Método (γ-CARMIS) | `pipeline.ts` (4/6 loops) | `loopEngine.ts` + test estrés |
| 5. Interfaz | Mental ✅, Lab ✅, Sim ❌ | `/simulador` |
| 6. Vaso Comunicante | `store.ts` (12 módulos atómicos) | Test E2E flujo completo |
| 7. Creador Loops | 4/6 loops en `pipeline.ts` | `loopEngine.ts` + resonancia |
| 8. Sistema Operativo | Kernel/FS/Net/Proc/Shell/Pkg ✅ | Scheduler/Sim completos |

**Próximo commit sugerido (P0):**
1. `src/core/lib/loopEngine.ts` (scheduler unificado + resonancia)
2. `src/app/screens/Simulador.tsx` (Verificación Triaxial completa)
3. `src/core/lib/loopEngine.test.ts` (homeostasis 1000 ticks)
4. `docs/ALRAICO_OS.md` (este doc + diagramas Mermaid)
5. Commit + push → Vercel auto-deploy → verificar 3 ejes triaxiales en vivo

---

*Documento generado desde fuentes reales: 7 PDFs Alráico (texto extraído) + BRIEF 144 conceptos + 4 integraciones completadas (Didacta, Urbanika, Buzz, NEAR). Sin inventar.*