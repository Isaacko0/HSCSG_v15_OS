# Integración AuroraGov — Perspectiva Triple (Usuario · LLM · HSCSG)

**Fuente:** `https://github.com/aurora-ong/aurora_gov` — Digital Governance Platform based on Collective Intelligence. Elixir/Phoenix + Commanded CQRS/Event Sourcing. Licencia ELv2 (Source Available).

---

## 0. Síntesis
AuroraGov implementa **gobernanza jerárquica por Unidades Organizacionales (OU)** con **poder/sensibilidad por dominio**, **delegación líquida**, **propuestas con quórum ponderado por OU**, y **proyector blockchain inmutable**. Es el referente más completo de **gobernanza multinivel ejecutable** que HSCSG ha asimilado — supera a Colony (solo dominios/pots) y Kleros (solo jurados) al integrar: jerarquía OU + poder contextual + delegación + ejecución automatizada + auditoría inmutable.

---

## 1. Perspectiva del Usuario
Una organización (barrio, cooperativa, red de ecoaldeas) quiere:
- Crear estructura jerárquica (`barrio.area.sector`) sin fricción
- Definir "poderes" (sensibilidades) por dominio (ej: "presupuesto", "urbanismo", "cultura")
- Que miembros deleguen su poder en otros de confianza
- Proponer decisiones que requieren aprobación ponderada **por cada OU afectada**
- Ejecutar automáticamente la decisión aprobada (crear OU, cambiar poder, asignar rol)
- Tener trazabilidad inmutable de todo (blockchain projector)

**Dolor resuelto:** gobernanza real, no consultiva; ejecución automática; delegación fluida; auditoría completa.

---

## 2. Perspectiva del LLM (Asimilo / Extirpo)

### Asimilo (Conceptos → HSCSG)

| Concepto AuroraGov | Traducción Soberana HSCSG | Módulo / Componente |
|---------------------|---------------------------|---------------------|
| **OU Tree (dot-notation)** | Círculos biomiméticos jerárquicos (Dunbar 3-13, 13-150, federación) | `lib/gaia.ts` `CircleTier` + `lib/colony.ts` `DomainNode` tree |
| **Power/Sensitivity por OU+Persona** | `AUT×CDS` weight por dominio + `CDS_Jurados` pesos `W_i` | `lib/colony.ts` `Reputation` + `lib/cds_jurados.ts` |
| **PowerDelegation (líquida)** | Conviction voting (Symbiosky) + delegación CDS | `lib/symbiosky.ts` `conviction voting` + `lib/colony.ts` |
| **Proposal Sensibility Map (OU→threshold)** | CDS multi-dominio: umbral por célula para decisión | `lib/integral.ts` `CDS weight por AUT` + quórum por dominio |
| **Membership Ranks (junior/regular/senior)** | CaaS-BM tiers: stake ZNU + AUT ≥ threshold → voz | `lib/caas.ts` `capitalAccessTier` + `verifiedProducer` |
| **Roles por OU (MapSet assignments)** | `DomainNode` + `Pot` (tesorería por dominio) | `lib/colony.ts` `DomainNode` + `lib/caas.ts` `DomainPot` |
| **Blockchain Projector (hash chain)** | RAO (Decision Records) + ERC-8004 hash + causalidad | `lib/store.ts` RAO + `lib/identity.ts` hash atestaciones |
| **Process Manager (ProposalExecutor)** | Autómata Soberano: E²R + MJ Gate + ejecución post-CDS | `lib/automaton.ts` + `lib/pipeline.ts` `autoAdvisory` |
| **GovPower DSL (comandos auto-descriptivos)** | `STAGES` + `deriveStageParams` + UI dinámica por pantalla | `lib/connector.ts` + `components/NextStageBanner.tsx` |
| **Propuesta multi-paso validada** | Pipeline anidado: Percepción→Decisión→Ejecución | `lib/pipeline.ts` 3 capas + `lib/connector.ts` 10 etapas |

### Extirpo (No Se Asimila)
| Extirpado | Sustituto HSCSG |
|-----------|-----------------|
| Elixir/OTP/Commanded runtime | React/TS/Vite + Zustand + localStorage/IndexedDB |
| PostgreSQL + Docker infra | Nodo local portable (offline-first) |
| Auth password + sesión | Identidad Soberana PoH (1 humano=1 nodo, sin KYC) |
| Blockchain projector tabla SQL | RAO append-only local (file/IndexedDB) |
| Licencia ELv2 (no SaaS comercial) | Apache 2.0 / MIT (soberano, sin restricciones) |
| Servidor centralizado | Federación DTN/AP (sync oportunista) |

---

## 3. Perspectiva HSCSG + CaaS (Postmonetario)

### Ley I (No Dañar)
- **OU Tree** protege autonomía local: decisiones solo afectan OU destino + ancestros (no laterales)
- **Power Sensitivity** = umbral de daño: propuesta solo ejecuta si supera quórum ponderado en CADA OU afectada
- **Membership Rank** evita captura: solo regular/senior votan (skin in the game = AUT×CDS)
- **MJ Gate** bloquea propuesta que degrade AUT vectorial en cualquier OU

### Ley II (Ganarse la Vida Soberanizando)
- **Power = Sensibilidad** se gana por contribución verificada (AUT×CDS), no se compra
- **Delegación** = confianza ganada (Symbiosky conviction), no token staking
- **Roles** = responsabilidad operativa (DomainPot = tesorería por contribución)
- **Ejecución automática** = acceso a recursos tras decisión legítima (ZNU por Value Equation)

### Ley III (Lucidez / Nunca Engañar)
- **Blockchain Projector** = RAO inmutable: cada evento hasheado + causalidad + correlación
- **Propuesta multi-paso** = transparencia radical: validación OU origen → título/descripción → poder → votantes
- **Process Manager logs** = trazabilidad ejecución: éxito/fallo + comando generado + error
- **Modo Lucidez HSCSG** revela: `power_value` crudo por OU, votos delegados vs directos, hash chain RAO

---

## 4. Interrelaciones / Correlaciones con Arquitectura HSCSG Actual

### 4.1 Mapeo Directo a Módulos Existentes

```
AuroraGov                    HSCSG v15 OS (Actual + Planeado)
─────────────────────────────────────────────────────────────────────
OU (Aggregate)               →  lib/colony.ts DomainNode (tree) + lib/gaia.ts CircleTier
Power (sensitivity)          →  lib/metrics.ts AUT×CDS weight + lib/cds_jurados.ts W_i
PowerDelegation              →  lib/symbiosky.ts conviction voting (lock ZNU ∝ confianza)
Proposal (Aggregate)         →  lib/integral.ts Issue + ratifyDecision + CDS deliberación
Proposal Sensibility Map     →  lib/integral.ts CDS weight por dominio (quórum por célula)
Membership Rank              →  lib/caas.ts capitalAccessTier (0-3) + verifiedProducer
Role (MapSet assignments)    →  lib/colony.ts DomainNode roles + lib/caas.ts DomainPot
Blockchain Projector         →  lib/store.ts RAO (Decision Records) + ERC-8004 hash
Process Manager              →  lib/automaton.ts (E²R) + lib/pipeline.ts (dispatchMatch/autoAdvisory)
GovPower DSL                 →  lib/connector.ts STAGES + deriveStageParams (auto-llenado)
OU Tree (dot-notation)       →  lib/gaia.ts CircleTier (jerarquía biomimética) + federación DTN/AP
```

### 4.2 Gap Analysis: Qué Falta en HSCSG Hoy

| Capacidad AuroraGov | Estado HSCSG | Acción Requerida |
|---------------------|--------------|------------------|
| **OU Tree jerárquica con ancestros** | Parcial (`lib/gaia.ts` CircleTier existe, falta tree ops) | Extender `lib/gaia.ts` con `ou_tree_list`, `get_parent`, `join` |
| **Power/Sensitivity por OU+Persona+PowerID** | Falta (solo AUT global) | `lib/colony.ts` `Power` struct por dominio + `lib/metrics.ts` weight contextual |
| **Delegación de poder líquida** | Parcial (Symbiosky conviction voting) | Integrar `PowerDelegation` en `lib/symbiosky.ts` + `lib/colony.ts` |
| **Propuesta con quórum ponderado POR OU** | Falta (CDS simple) | `lib/integral.ts` `validate_proposal_score` por dominio |
| **Membership ranks con derechos progresivos** | Parcial (CaaS tiers) | Unificar `capitalAccessTier` + `membership_rank` en `lib/caas.ts` |
| **Roles por OU con MapSet assignments** | Falta | `lib/colony.ts` `DomainNode.roles: MapSet` |
| **Blockchain projector (hash chain + causalidad)** | Parcial (RAO básico) | Extender RAO con `prev_hash`, `correlation_id`, `causation_id` |
| **Process Manager post-aprobación** | Parcial (pipeline actuator) | Completar `applyDecision→OAD/COS/ITC` en `lib/pipeline.ts` |
| **GovPower DSL para UI dinámica** | Parcial (connector STAGES) | Extender `field_definitions` por módulo para formularios auto-generados |

### 4.3 Flujo Integrado: Propuesta AuroraGov → HSCSG

```
1. USUARIO (célula)          →  Crea Propuesta en OU origen (valida rank ≥ regular)
                               ↓ lib/colony.ts DomainNode + membership_rank
2. SISTEMA (nervioso)        →  Calcula votantes: recorre árbol OU destino
                               →  Filtra miembros rank regular/senior por OU
                               →  Calcula sensibilidad: avg(Power) por OU + power_id
                               ↓ lib/pipeline.ts computeCapabilities + matchmaker
3. CDS (homeostático)        →  Deliberación + votación (directa + delegada)
                               →  vote_value -1/0/1 por OU donde tiene voz
                               ↓ lib/integral.ts ratifyDecision + lib/symbiosky.ts conviction
4. VALIDACIÓN (inmune)       →  Por cada OU en sensibilidad:
                               →  required = round(sens/100 * votantes_OU)
                               →  current = sum(vote_value)
                               →  PASS si ∀ OU: current ≥ required
                               ↓ lib/integral.ts validate_proposal_score (NUEVO)
5. AUTÓMATA (ejecutor)       →  ProposalExecutor: build_proposal_command(power_id, power_data)
                               →  Dispatch command (CreateOU, UpdatePower, AssignRole, etc.)
                               →  ConsumeProposal(result: success/failed)
                               ↓ lib/automaton.ts + lib/pipeline.ts applyDecision→OAD/COS/ITC
6. RAO (memoria)             →  Blockchain projector: hash chain + causalidad
                               →  Decision Record inmutable + ERC-8004 hash
                               ↓ lib/store.ts RAO extendido
7. USUARIO (retroalimentación)  →  Ve resultado en dashboard + Modo Lucidez raw data
```

---

## 5. Entregables Accionables (Prioridad P0/P1)

| Entregable | Módulo HSCSG | Prioridad | Descripción |
|------------|--------------|-----------|-------------|
| `docs/aurora_gov_backup.md` + `aurora_gov_integration.md` | Docs | **P0** | Este backup + integración |
| `lib/aurora_gov.ts` (OU Tree ops, Power struct, Proposal validation) | **NUEVO** | **P0** | Núcleo gobernanza multinivel |
| `lib/colony.ts` extend: `Power` por dominio, `PowerDelegation`, `MembershipRank` | Colony/CDS | **P0** | Unifica Colony + AuroraGov |
| `lib/integral.ts` extend: `validate_proposal_score` por OU, `proposal_sensibility_map` | CDS/Integral | **P0** | Quórum ponderado multinivel |
| `lib/symbiosky.ts` extend: `PowerDelegation` + conviction voting integrado | Symbiosky/CDS | **P0** | Delegación líquida real |
| `lib/caas.ts` extend: `membership_rank` (junior/regular/senior) unificado con `capitalAccessTier` | CaaS-BM | **P0** | Tiers de voz progresivos |
| `lib/store.ts` extend RAO: `prev_hash`, `correlation_id`, `causation_id`, `hash_chain_verify()` | RAO | **P1** | Auditoría inmutable tipo blockchain |
| `lib/pipeline.ts` extend: `applyDecision→OAD/COS/ITC` (completar actuator) | Pipeline/Autómata | **P1** | Ejecución post-CDS real |
| `lib/automaton.ts` extend: `ProposalExecutor` process manager pattern | Autómata | **P1** | Orquestación post-aprobación |
| `lib/connector.ts` extend: `field_definitions` por stage (GovPower DSL) | Conector/UI | **P1** | Formularios auto-generados |
| Pantalla `/gobernanza` (OU tree + propuestas + delegación + ejecución) | `/gobernanza` | **P1** | UI unificada gobernanza |
| Pantalla `/circulos` extend: OU tree visual + power sensitivity heatmap | `/circulos` | **P1** | Mapa calor poder por círculo |

---

## 6. Conceptos NUEVOS NACIDOS (No Existían en HSCSG)

1. **OU Tree con Operaciones Algebraicas** — `get_parent`, `ou_tree_list` (ancestros), `join`, `get_complex_level`, `valid_slug?`/`id_valid?` — estructura jerárquica computable, no solo visual.

2. **Power/Sensitivity Contextual (OU + Persona + PowerID)** — el poder no es global; es `power_value` por tupla (OU, persona, power_id). Promedio por OU = umbral de votación. Esto es **AUT×CDS contextualizado por dominio**.

3. **Proposal Sensibility Map (OU → Threshold)** — cada propuesta lleva mapa `OU_id → avg_power`; ejecución requiere quórum **en cada OU afectada independientemente**. Evita tiranía de la mayoría global.

4. **PowerDelegation Activable/Desactivable** — delegación granular por `power_id` (no global). `MapSet` de delegados por OU+power_id. Se activa/desactiva en caliente.

5. **Membership Rank Progresivo (junior→regular→senior)** — derechos de voto y propuesta ligados a rank, no a token. Rank se gana por contribución (AUT×CDS) y tiempo.

6. **GovPower DSL (Comandos Auto-Descriptivos)** — cada comando gov expone `gov_power()` (id, name, description, category, module) + `field_definitions()` para UI dinámica. Elimina código boilerplate formularios.

7. **Process Manager como Orquestador Post-Aprobación** — `ProposalExecutor` escucha `ProposalExecuted` → construye comando real → dispatch → `ConsumeProposal`. Patrón robusto para ejecución automática con manejo de errores (retry, skip, stop).

8. **Blockchain Projector con Causalidad** — hash chain SHA256 + `correlation_id` + `causation_id` + `ou_id`/`person_id`/`proposal_id` en cada bloque. RAO con trazabilidad completa.

---

## 7. Conceptos ETAPAS DE EVOLUCIÓN (Refinamientos)

| Base HSCSG | Evolución AuroraGov | Cambio |
|------------|---------------------|--------|
| `/circulos` (plano) | **OU Tree jerárquica computable** | `lib/gaia.ts` + `lib/aurora_gov.ts` tree ops |
| CDS simple (1 voto = 1 voz) | **CDS ponderado por Power Sensitivity por OU** | `lib/integral.ts` `validate_proposal_score` |
| Symbiosky conviction (global) | **Delegación granular por PowerID + OU** | `lib/symbiosky.ts` + `lib/colony.ts` PowerDelegation |
| CaaS tiers (0-3) | **Membership Rank semántico (junior/regular/senior)** | `lib/caas.ts` unifica tier + rank |
| Colony DomainNode (básico) | **DomainNode con Power map + Roles MapSet + Pot** | `lib/colony.ts` extend completo |
| RAO (append-only) | **RAO con Hash Chain + Causalidad** | `lib/store.ts` blockchain projector pattern |
| Pipeline actuator (parcial) | **Process Manager post-CDS completo** | `lib/pipeline.ts` + `lib/automaton.ts` ProposalExecutor |
| Connector STAGES (10 fijos) | **GovPower DSL dinámico por módulo** | `lib/connector.ts` `field_definitions` por stage |

---

## 8. Roadmap de Integración (Secuencia Lógica)

```
SEMANA 1 (P0 - Núcleo Gobernanza):
├── lib/aurora_gov.ts (OU Tree + Power + Proposal validation)
├── lib/colony.ts extend (Power por dominio, PowerDelegation, MembershipRank)
├── lib/integral.ts extend (validate_proposal_score por OU)
├── lib/symbiosky.ts extend (PowerDelegation integrado)
└── lib/caas.ts extend (membership_rank unificado)

SEMANA 2 (P0 - Ejecución + Auditoría):
├── lib/store.ts extend RAO (hash chain + causalidad)
├── lib/pipeline.ts extend (applyDecision→OAD/COS/ITC)
├── lib/automaton.ts extend (ProposalExecutor process manager)
└── lib/connector.ts extend (field_definitions GovPower DSL)

SEMANA 3 (P1 - UI + Visualización):
├── Pantalla /gobernanza (OU tree + propuestas + delegación + ejecución)
├── Pantalla /circulos extend (OU tree visual + power heatmap)
└── Modo Lucidez: raw power_value, votos delegados, hash chain

SEMANA 4 (P1 - Federación + Pruebas):
├── Federación DTN/AP: sync OU tree + propuestas entre nodos
├── Validación empírica: 3 nodos beta, propuestas cross-OU
└── Documentación: aurora_gov_integration.md actualizado
```

---

## 9. Conclusión: AuroraGov como "Sistema Nervioso Institucional" de HSCSG

AuroraGov aporta la **capacidad ejecutiva faltante** en la gobernanza HSCSG:
- Colony dio **estructura** (dominios/pots)
- Kleros dio **justicia** (jurados/oráculo)
- Symbiosky dio **convicción** (voto bloqueado)
- **AuroraGov da EJECUCIÓN AUTOMÁTICA + JERARQUÍA COMPUTABLE + QUÓRUM CONTEXTUAL**

El nodo HSCSG deja de ser "app con gobernanza consultiva" para ser **organismo con sistema nervioso institucional**: propuesta → deliberación ponderada → validación multinivel → ejecución automática → auditoría inmutable.

**Próximo paso inmediato:** Crear `lib/aurora_gov.ts` como núcleo unificado (OU Tree + Power + Proposal validation) e integrar en `lib/colony.ts`, `lib/integral.ts`, `lib/symbiosky.ts`, `lib/caas.ts` simultáneamente (commit atómico P0).

---
*Fecha: 2026-08-12 | HSCSG v15 OS | Asimilación repo aurora-ong/aurora_gov*