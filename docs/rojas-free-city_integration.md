# ASIMILACIÓN: Rojas - Free City: Orden Cooperativo y Competencia
## Análisis e Isomorfismos con HSCSG v15 OS

**Fuente:** `Rojas - Free City Orden cooperativo y competencia.pdf` (Ricardo Manuel Rojas, Unión Editorial 2025)  
**Fecha asimilación:** 2026-09-10  
**Skill:** `hscsg-repo-assimilation` → `references/rojas-free-city.md`

---

## 1. RESUMEN EJECUTIVO

Rojas propone **Free Cities** como alternativa al monopolio estatal: regiones donde se suspenden elementos de soberanía estatal, permitiendo **libre elección de reglas jurídicas**, **mecanismos de solución de conflictos**, **reglas económicas/monetarias**, **autonomía de la voluntad** en vida privada. Diferencia de *charter cities* (reglas impuestas por Estado) y *zonas francas* (solo incentivos económicos). Modelo: **orden cooperativo basado en contrato**, no en monopolio de fuerza. Antecedentes: ciudades libres medievales (Lübeck), Hong Kong, ZEDE Honduras, SEZ China. Propone enmienda constitucional + ley orgánica para implementación.

---

## 2. MAPEO DE CONCEPTOS ROJAS → HSCSG v15 OS

| Concepto Rojas | Isomorfismo HSCSG v15 OS | Módulo / Archivo | Ley MJ |
|---|---|---|---|
| **Free City** (región con soberanía suspendida, reglas contractuales) | **Nodo Soberano** (DID:hsccsg) + **Célula** (autogobernada, CELULA_PRINCIPIOS) | `packages/identity/`, `celulas.ts` | Ley I |
| **Libre elección de reglas jurídicas** | **Skill Marketplace** (skills = reglas/protocolos portables) + **Boundaries** (policy gateway configurable) | `lib/skill_marketplace.ts`, `boundaries.ts` | Ley I |
| **Mecanismos solución conflictos contractuales** | **Kleros** (justicia descentralizada, Fact Bands) + **Trustlines** (crédito bilateral con dispute resolution) | `kleros.ts`, `trustlines.ts` | Ley II |
| **Autonomía de la voluntad** | **Autómata Soberano** (agencia real) + **MJ Gate** (filtro soberano) | `automaton.ts`, `orchestration.ts` | Ley I/II/III |
| **Sin impuestos, solo cuota contractual** | **CaaS Tier Visitante** (sin extracción) + **ZNU demurrage** (auto-regulación, no impuesto) | `caas.ts`, `valueDual.ts` | Ley III |
| **Orden cooperativo vs monopolio fuerza** | **Vasos Comunicantes** (cooperación peer-to-peer) + **Pipeline Matchmaker** (competencia meritocrática) | `vasos_comunicantes.ts`, `pipeline.ts` | Ley II |
| **Ciudades libres medievales (Lübeck)** | **Células fractales** (8→64→512→4096) = free cities modernas en red | `celulas.ts` | Ley III |
| **Hong Kong / ZEDE / SEZ China** | **Federación de nodos** (soberanía compartida, no universalidad) | `lib/federation.ts` | Ley III |
| **Enmienda constitucional + ley orgánica** | **Governance Layer** (Integral Loop + Symbiosky + Kleros) = constitucion viva programable | `integral.ts`, `symbiosky.ts`, `kleros.ts` | Ley I/II/III |
| **Free cities en el mar (islas artificiales)** | **AgentMesh/Buzz** (compute pool distribuido, geográficamente agnóstico) | `agentMesh.ts` | Ley II |
| **Soberanía como escollo fundamental** | **Identidad Soberana DID:hsccsg** — soberanía nativa, no concedida | `packages/identity/` | Ley I |

---

## 3. ANÁLISIS PROFUNDO POR LEYES MJ

### Ley I: Materia Prima Soberana
**Rojas:** "Las personas nacen pobres... supervivencia requiere esfuerzo permanente por abandonar la pobreza." Free City = región donde materia prima (trabajo, propiedad, contrato) no es capturada por monopolio estatal.
**HSCSG:** `BaseMaterial` protegido por `Boundaries fail-closed`. `DID:hsccsg` = soberanía identitaria nativa (no concedida por Estado). `NodeMode offline-first` = soberanía material real.

### Ley II: Trabajo como Fuente de Valor
**Rojas:** "Buenas reglas e instituciones fomentan crecimiento; malas conducen a crisis." Free City = reglas eficientes emergen espontáneamente (lex mercatoria). Empresario/jefe = agente coordinador.
**HSCSG:** `CACVectors` → `autFromCAC` = trabajo medido. `Matchmaker` = coordinación meritocrática. `CaaS` = trabajo computacional como servicio. `Pipeline` = orquestador gobernanza-ejecución.

### Ley III: Float Soberano
**Rojas:** "No se podrán cobrar impuestos... solo cuota para gastos administrativos aceptada en contrato." Float no capturado por monopolio. Competencia de reglas = float fluyendo a mejores jurisdicciones.
**HSCSG:** `ZNU` + `demurrage` = float auto-regulado (no impuesto). `Trustlines` = float bilateral contractual. `Vasos Comunicantes` = float fluyendo a nodos más eficientes. `Vesting` = float liberado por contribución.

---

## 4. INTEGRACIÓN TÉCNICA PROPUESTA

### 4.1 Extensiones a Módulos Existentes

| Módulo | Extensión Rojas → HSCSG |
|---|---|
| `celulas.ts` | `FreeCityProtocol` — célula = free city: soberanía suspendida, reglas contractuales, cuota contractual (no impuesto), exit libre |
| `packages/identity/` | `FreeCityDID` — DID con metadata: jurisdicción contractual, reglas elegidas, dispute resolution mechanism |
| `skill_marketplace.ts` | `LegalRulesAsSkills` — reglas jurídicas como skills portables (instalables, actualizables, forkables) |
| `kleros.ts` | `ContractualDisputeResolution` — Kleros como motor de justicia elegido contractualmente (no impuesto) |
| `trustlines.ts` | `FreeCityCredit` — Trustlines con jurisdiction clause (reglas elegidas por las partes) |
| `vasos_comunicantes.ts` | `InterFreeCityProtocol` — protocolos entre free cities (federación voluntaria) |
| `caas.ts` | `FreeCityTier` — tier sin extracción, solo fee contractual transparente |

### 4.2 Nuevo Módulo: `rojas-free-city.ts`
```typescript
// src/core/lib/rojas-free-city.ts
interface FreeCityCharter {
  // Carta de free city: reglas elegidas, dispute resolution, cuota, exit terms
  jurisdiction: JurisdictionRules;
  disputeResolution: DisputeMechanism; // Kleros, arbitraje, etc.
  feeStructure: ContractualFee; // no impuestos
  exitTerms: ExitTerms; // derecho de salida incondicional
}

interface FreeCityRegistry {
  // Registro de free cities (nodos soberanos con charter)
  registerFreeCity(charter: FreeCityCharter, did: DID): FreeCityNode;
  
  // Competencia de jurisdicciones: usuarios eligen con los pies (Exit)
  jurisdictionalCompetition(freeCities: FreeCityNode[]): CompetitionMetrics;
  
  // Lex mercatoria emergente: reglas que sobreviven a competencia
  emergentLexMercatoria(transactions: Transaction[]): EmergentRules;
}

interface ConstitutionalHack {
  // Enmienda constitucional + ley orgánica como deploy de governance layer
  deployGovernanceLayer(constitution: Constitution, organicLaw: OrganicLaw): GovernanceDeployment;
  
  // Governance layer programable (Integral Loop + Symbiosky + Kleros)
  programmableGovernance(): ProgrammableGovernance;
}
```

---

## 5. ÉTICA Y ALINEACIÓN HSCSG

**Alineación fuerte:** Rojas diseña **institucionalmente** lo que HSCSG implementa **tecnológicamente**:
- Free City = Nodo Soberano + Célula autogobernada
- Reglas contractuales = Skills + Boundaries policies
- Justicia privada = Kleros + Trustlines dispute resolution
- Sin impuestos = ZNU demurrage + CaaS fee contractual
- Competencia jurisdiccional = Vasos Comunicantes + Matchmaker

**Diferencia clave:** Rojas requiere **negociación con Estado soberano** (enmienda constitucional). HSCSG **inicia offline-first** (NodeMode postmonetario) — soberanía nativa, no concedida. La federación HSCSG **no pide permiso**; la free city de Rojas **sí**.

**Resolución:** HSCSG puede **exportar free cities** como modelo a Estados (vía `hscsg-repo-assimilation` → gobiernos), mientras mantiene su **red soberana nativa** offline-first.

---

## 6. ARCHIVOS GENERADOS

| Archivo | Ubicación | Tipo |
|---|---|---|
| `rojas-free-city_backup.md` | `docs/` | Backup original (solo local) |
| `rojas-free-city_integration.md` | `docs/` | **Este archivo** |
| `rojas-free-city.md` | `skills/hscsg/hscsg-repo-assimilation/references/` | Referencia skill |

---

## 7. PRÓXIMOS PASOS

1. **Implementar `FreeCityProtocol`** en `celulas.ts` (célula = free city)
2. **Extender `skill_marketplace.ts`** con `LegalRulesAsSkills`
3. **Extender `kleros.ts`** con `ContractualDisputeResolution`
4. **Registrar en `fuentes_indice.json`** (fuente #120)

---

**Fin de asimilación** — `hscsg-repo-assimilation` v15.0