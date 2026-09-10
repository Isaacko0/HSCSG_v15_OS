# ASIMILACIÓN: Sandh - Ética Argumentativa No-Cognitivista
## Análisis e Isomorfismos con HSCSG v15 OS

**Fuente:** `Sandh - Ética Argumentativa No-Cognitivista.pdf` (Sandh, CRCI)  
**Fecha asimilación:** 2026-09-10  
**Skill:** `hscsg-repo-assimilation` → `references/sandh-etica-no-cognitivista.md`

---

## 1. RESUMEN EJECUTIVO

Sandh defiende la **Ética Argumentativa (EtA) de Hoppe** desde el **no-cognitivismo ético** (antirrealismo moral). La EtA se sostiene por axiomas apriorísticos (acción humana = racional/teleológica) y el **principio de no-agresión** implícito en el acto de argumentar. Sin realismo moral, la EtA se vuelve **constructivista**: normas éticas emergen de prácticas argumentativas (necesidad de coherencia), no se descubren en realidad objetiva. El Estado corrompe incentivos (monopolio violento = robo/violencia/esclavitud legalizados). Sin Estado, evolución moral más eficiente y cercana a EtA. Rechaza realismo (hechos morales incognoscibles) y relativismo/subjetivismo (caos, utilitarismo sin freno). Posición: **no-cognitivismo + agnosticismo ético + EtA constructivista**.

---

## 2. MAPEO DE CONCEPTOS SANDH → HSCSG v15 OS

| Concepto Sandh | Isomorfismo HSCSG v15 OS | Módulo / Archivo | Ley MJ |
|---|---|---|---|
| **EtA Hoppe** (axioma acción, no-agresión implícita) | **MJ Gate** (Ley I/II/III enforcement) — no-agresión = Ley I (materia prima soberana no violada) | `orchestration.ts` | Ley I |
| **No-cognitivismo ético** (hechos morales incognoscibles) | **Boundaries fail-closed** — no asume bondad, verifica compliance objetivo | `boundaries.ts` | Ley I |
| **Constructivismo ético** (normas emergen de argumentación) | **RAO Verification** (evidencia construida via argumentación/verificación) + **Skill Marketplace** (capacidades demostradas) | `lib/rao_verification.ts`, `lib/skill_marketplace.ts` | Ley II |
| **Argumentación = acuerdo no-agresión implícito** | **Integral Loop** (raiseIssue → validateProposalScore → ratifyDecision) — diálogo estructurado sin agresión | `integral.ts` | Ley II |
| **Estado = monopolio violento = relativismo/utilitarismo** | **Boundaries** detecta "entidad especial fuera de sus leyes" → fail-closed | `boundaries.ts` | Ley I |
| **Sin Estado → evolución moral eficiente** | **Células autogobernadas** (CELULA_PRINCIPIOS) + **Vasos Comunicantes** (cooperación sin monopolio) | `celulas.ts`, `vasos_comunicantes.ts` | Ley III |
| **Contrato = incentivo mutuo ante escasez** | **Trustlines** (crédito bilateral consensuado) + **CaaS** (intercambio valor medible) | `trustlines.ts`, `caas.ts` | Ley II |
| **Rechazo relativismo/subjetivismo** (caos, principio no-contradicción) | **MJ Gate** + **Kleros** (Fact Bands evidencia objetiva) + **Symbiosky** (conviction voting con decay) | `orchestration.ts`, `kleros.ts`, `symbiosky.ts` | Ley I/II/III |
| **Agnosticismo ético + EtA práctica** | **HSCSG postmonetario default** — no presupone moralidad, protocolos funcionales | `valueDual.ts` (NodeMode offline-first) | Ley I/III |

---

## 3. ANÁLISIS PROFUNDO POR LEYES MJ

### Ley I: Materia Prima Soberana
**Sandh:** "El acto de argumentar implica reconocimiento implícito de derechos a usar propios cuerpos/recursos." Argumentar a favor de agresión = contradicción performativa. Estado = único entidad permitida robo/violencia/esclavitud = relativismo supremo.
**HSCSG:** `BaseMaterial` = cuerpos/recursos soberanos. `Boundaries fail-closed` = no entidad especial (ni Estado ni Autómata) puede violar materia prima sin verificación. `MJ Gate` = enforcement automático: `evaluateMJGate` rechaza acciones que violen Ley I.

### Ley II: Trabajo como Fuente de Valor
**Sandh:** "El acto contractual incentivado por fines propios ante escasez." Contrato = cooperación mutuamente beneficiosa. Sin Estado, agresión abandonada por ineficiente (contractualismo).
**HSCSG:** `CACVectors` → `autFromCAC` = autonomía real (trabajo). `Matchmaker` = coordinación contractual meritocrática. `Trustlines` = crédito bilateral = contrato consensuado. `CaaS` = intercambio trabajo computacional medible.

### Ley III: Float Soberano
**Sandh:** "Vida sin realismo moral = vida sin Estado = opuesto al caos." Float moral = capacidad de cooperar sin autoridad externa. Estado captura float moral (monopolio legitimación).
**HSCSG:** `ZNU` + `demurrage` = float que no captura autoridad central. `Vasos Comunicantes` = float fluyendo peer-to-peer. `Vesting` = float liberado por contribución real (no por decreto).

---

## 4. INTEGRACIÓN TÉCNICA PROPUESTA

### 4.1 Extensiones a Módulos Existentes

| Módulo | Extensión Sandh → HSCSG |
|---|---|
| `orchestration.ts` | `evaluateMJGate` ← añadir `performativeContradictionCheck`: detecta acciones que violan precondiciones de su propia argumentación (ej. argumentar a favor de agresión) |
| `boundaries.ts` | `StateExceptionDetector` — detecta "entidad especial que actúa fuera de sus propias leyes" (patrón Estado) |
| `integral.ts` | `raiseIssueWithEvidence` ← explicit: argumentación = acuerdo no-agresión implícito; `validateProposalScore` = scoring coherencia argumentativa |
| `kleros.ts` | `FactBands` ← evidencias costosas (señales difíciles de falsificar) = implementación técnica "argumentación honesta requiere señales costosas" |
| `proofOfResponse.ts` | `constructivistVerification` — verificación = construcción de evidencia via proceso argumentativo (no descubrimiento verdad objetiva) |
| `celulas.ts` | `statelessEvolution` — evolución moral/cooperativa sin monopolio central (CELULA_PRINCIPIOS auto-aplicados) |

### 4.2 Nuevo Módulo: `sandh-etica-constructivista.ts`
```typescript
// src/core/lib/sandh-etica-constructivista.ts
interface ConstructivistEthics {
  // Verifica contradicción performativa: acción vs precondiciones de su justificación
  checkPerformativeContradiction(action: Action, justification: Argument): ContradictionResult;
  
  // Construye norma ética desde práctica argumentativa (no descubre)
  constructNormFromArgumentation(discourse: DiscourseRecord): ConstructedNorm;
  
  // Detecta relativismo/utilitarismo: excepciones especiales para entidad única
  detectSpecialPleading(governanceRules: Rule[]): SpecialPleadingAlert;
}

interface StatelessMoralEvolution {
  // Evolución cooperativa sin Estado (contractualismo espontáneo)
  simulateStatelessCooperation(agents: AgentNode[]): CooperationPattern;
  
  // Eficiencia moral sin monopolio violento
  moralEfficiencyWithoutState(community: CommunityNode): EfficiencyMetric;
}
```

---

## 5. ÉTICA Y ALINEACIÓN HSCSG

**Alineación fuerte:** Sandh proporciona **fundamentación filosófica** para la arquitectura HSCSG:
- **Boundaries fail-closed** = no-cognitivismo operacionalizado (no confiar, verificar)
- **MJ Gate** = EtA formalizada en código (Ley I/II/III = no-agresión + trabajo real + float soberano)
- **RAO Verification** = constructivismo ético técnico (evidencia construida, no descubierta)
- **Células/Vasos Comunicantes** = vida sin Estado funcional

**Punto clave:** HSCSG **no necesita realismo moral** para funcionar. Los protocolos (Boundaries, MJ Gate, Integral Loop, Vasos Comunicantes) son **funcionalmente éticos** por diseño — emergen de la necesidad de coherencia operacional, igual que la EtA constructivista.

---

## 6. ARCHIVOS GENERADOS

| Archivo | Ubicación | Tipo |
|---|---|---|
| `sandh-etica-no-cognitivista_backup.md` | `docs/` | Backup original (solo local) |
| `sandh-etica-no-cognitivista_integration.md` | `docs/` | **Este archivo** |
| `sandh-etica-no-cognitivista.md` | `skills/hscsg/hscsg-repo-assimilation/references/` | Referencia skill |

---

## 7. PRÓXIMOS PASOS

1. **Implementar `ConstructivistEthics` + `StatelessMoralEvolution`** en `sandh-etica-constructivista.ts`
2. **Integrar `performativeContradictionCheck`** en `orchestration.ts` `evaluateMJGate`
3. **Integrar `StateExceptionDetector`** en `boundaries.ts`
4. **Registrar en `fuentes_indice.json`** (fuente #119)

---

**Fin de asimilación** — `hscsg-repo-assimilation` v15.0