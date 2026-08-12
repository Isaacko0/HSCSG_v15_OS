# Integración Shivarthu — Perspectiva Triple (Usuario · LLM · HSCSG)

**Fuente:** `https://github.com/silicology1/shivarthu` — Decentralized democracy with experts as leaders. Substrate/FRAME (Rust/Polkadot). MIT. Tiene whitepaper (PDF) + 16 pallets FRAME implementados.

---

## 0. Síntesis
Shivarthu implementa **gobernanza por departamentos con representantes expertos** usando **Schelling Games** (commit-reveal + stake) para KYC, evaluación de experiencia y validación de externalidad positiva. Su innovación técnica más valiosa para HSCSG es el **Score Schelling Game con outlier removal** (mean ± 1 SD → 68.27% → nueva mean = score) y el **voto ponderado por mérito** (reputation/experience/externality ≠ stake). Es el referente más riguroso de **consenso estadístico honesto** que HSCSG ha asimilado — complementa a Kleros (schelling básico) y Symbiosky (conviction) con un método matemático explícito de agregación de juicios.

---

## 1. Perspectiva del Usuario
Una persona quiere:
- Ser gobernada por **expertos en cada dominio** (educación, salud, infra), no por políticos generalistas.
- Que su **voz pese por su mérito** (reputación, experiencia, externality positiva), no por cuánto dinero tiene.
- Que las **decisiones se validen por pares** vía Schelling Game (no confiar ciegamente en líderes).
- Que quien aporta externalidad positiva (verificable) **reciba incentives automáticos**.
- Que el sistema sea **resistente a Sybil** y a votos coatados.

**Dolor resuelto:** democracia capturada por partidos/plutocracia; líderes sin expertise; voto igualitario ingenuo que ignora mérito.

---

## 2. Perspectiva del LLM (Asimilo / Extirpo)

### Asimilo (Conceptos → HSCSG)

| Concepto Shivarthu | Traducción Soberana HSCSG | Módulo / Componente |
|---------------------|---------------------------|---------------------|
| **Departments por Especialidad** | Círculos biomimétricos por dominio (Dunbar + expertise tag) | `lib/gaia.ts` `CircleTier` + `lib/colony.ts` DomainNode + expertise field |
| **Schelling Game (commit-reveal + stake)** | Kleros (schelling) + Symbiosky conviction voting | `lib/kleros.ts` + `lib/symbiosky.ts` |
| **Score Schelling (outlier removal)** | CDS_Jurados agregación con filtro outliers | `lib/cds_jurados.ts` `aggregateScores()` |
| **Seq Phragmén por mérito** | CDS weight por AUT×CDS (no stake) | `lib/integral.ts` `CDS weight por AUT` |
| **Approval Voting multi-ganador** | CDS consentimiento ponderado (multi-seat) | `lib/cds.ts` `ratifyDecision` extend |
| **Vouching family tree + moderators** | Social DNA / Web of Trust + Wisdom Council | `lib/identity.ts` + `lib/gaia.ts` WisdomCouncil |
| **Department Tipping (5 tiers)** | CaaS-BM tiers (0-3) + DomainPot por célula | `lib/caas.ts` `capitalAccessTier` + `lib/colony.ts` DomainPot |
| **Randomized Tax (no inflación)** | ZNU demurrage 5%/28d (anti-hoarding) | `lib/vesting.ts` + `lib/trustlines.ts` |
| **Positive Externality Validation** | NetBenefit (Copiosis) + BN_Gradient_Signal | `lib/netbenefit.ts` + `lib/copiosis.ts` |
| **Juror selection (stake-weighted random)** | CDS_Jurados sorteo + anonimato (sin stake tree) | `lib/cds_jurados.ts` |
| **PhaseData (Evidence→Staking→Drawing→Commit→Vote→Appeal→Execution)** | Pipeline anidado 3 capas + FRS feedback | `lib/pipeline.ts` + `lib/automaton.ts` |

### Extirpo (No Se Asimila)
| Extirpado | Sustituto HSCSG |
|-----------|-----------------|
| Substrate/Polkadot/Rust/FRAME runtime | React/TS/Vite + Zustand + localStorage/IndexedDB |
| EVM/Parachain/Staking tokens (DOT) | ZNU demurrage (sin staking externo) |
| IPFS para content storage | Local storage / RAO append-only |
| Sequential Phragmén (NPoS electoral) | CDS ponderado por AUT×CDS (no elección NPoS) |
| Sortition Sum Tree (juror selection por stake) | CDS_Jurados sorteo + anonimato (sin stake tree) |
| Inflation funding → Randomized tax | Fondo Solarpunk + DSI (sin tax aleatorio) |

---

## 3. Perspectiva HSCSG + CaaS (Postmonetario)

### Ley I (No Dañar)
- **Score Schelling outlier removal** evita manipulación: votos extremos (>1 SD) se descartan → consenso robusto.
- **Departments por expertise** evita que ignorantes decidan sobre dominios técnicos.
- **Juror incoherente quema stake** (3/4 deducido) → incentivo honestidad (anti-daño).
- **MJ Gate** bloquea propuesta que degrade AUT vectorial.

### Ley II (Ganarse la Vida Soberanizando)
- **Voto por mérito** (reputation/experience/externality) = AUT×CDS puro (voz por contribución verificada).
- **Positive Externality Validation** → incentives por externality verificada = ZNU por Beneficio Neto (Copiosis).
- **Department Tipping** → CaaS-BM: fondos por contribución, no por riqueza.

### Ley III (Lucidez / Nunca Engañar)
- **Commit-Reveal** = voto secreto hasta reveal → evita coerción/compra de votos.
- **Score Schelling transparente**: mean ± SD calculado en ejecución, auditables.
- **Modo Lucidez HSCSG** revela: votos delegados, scores raw, mean/SD calculados, incentives distribuidos.

---

## 4. Interrelaciones / Correlaciones con Arquitectura HSCSG Actual

### 4.1 Mapeo Directo a Módulos Existentes

```
Shivarthu                      HSCSG v15 OS (Actual + Planeado)
─────────────────────────────────────────────────────────────────────
Departments                    →  lib/gaia.ts CircleTier + lib/colony.ts DomainNode (con expertise tag)
Schelling Game (commit-reveal) →  lib/kleros.ts (schelling) + lib/symbiosky.ts conviction
Score Schelling (outlier)     →  lib/cds_jurados.ts aggregateScores (filtro outliers)
Seq Phragmén por mérito       →  lib/integral.ts CDS weight por AUT×CDS
Approval Voting               →  lib/cds.ts ratifyDecision (multi-seat)
Vouching + moderators         →  lib/identity.ts Social DNA + lib/gaia.ts WisdomCouncil
Department Tipping            →  lib/caas.ts capitalAccessTier + lib/colony.ts DomainPot
Randomized Tax                →  lib/vesting.ts ZNU demurrage 5%/28d
Positive Externality           →  lib/netbenefit.ts NetBenefit + lib/copiosis.ts BN_Gradient
Juror Selection (stake tree)  →  lib/cds_jurados.ts sorteo + anonimato
PhaseData pipeline            →  lib/pipeline.ts 3 capas + lib/automaton.ts E²R
```

### 4.2 Gap Analysis: Qué Falta en HSCSG Hoy

| Capacidad Shivarthu | Estado HSCSG | Acción Requerida |
|---------------------|--------------|------------------|
| **Score Schelling outlier removal** | **FALTA** (CDS_Jurados solo promedia) | `lib/cds_jurados.ts` `aggregateScores` con mean ± 1 SD filter |
| **Commit-Reveal voting** | Parcial (Symbiosky vote, no hash commit) | `lib/symbiosky.ts` `commitVote` (hash) + `revealVote` (salt) |
| **Voto por mérito (reputation/exp/externality)** | Parcial (AUT×CDS weight) | `lib/integral.ts` weight por 3 factores explícitos |
| **Departments por expertise** | Parcial (`/colectivo` plano) | `lib/gaia.ts` CircleTier con `expertiseTag` por círculo |
| **Vouching family tree** | **FALTA** (Social DNA referenciado) | `lib/identity.ts` `vouchingTree` + moderators invalidan |
| **Approval Voting multi-ganador** | Parcial (CDS single seat) | `lib/cds.ts` `ratifyDecision` multi-seat approval |
| **Positive Externality Validation** | Parcial (NetBenefit Copiosis) | `lib/netbenefit.ts` + `lib/copiosis.ts` post + stake + score |
| **PhaseData pipeline (7 fases)** | Parcial (pipeline 3 capas) | `lib/pipeline.ts` `PhaseData` enum completo |

### 4.3 Flujo Integrado: Validación Externality Positiva (Shivarthu → HSCSG)

```
1. USUARIO (célula)          →  Post externality positiva (content + stake mínimo)
                               ↓ lib/netbenefit.ts createPost + lib/copiosis.ts stake
2. SISTEMA (nervioso)        →  applyStakingPeriod: cada 3 meses (block modulus)
                               →  create SortitionSumTree (jurors)
                               ↓ lib/cds_jurados.ts + lib/pipeline.ts
3. JURADOS (CDS_Jurados)     →  applyJurors: postulan con stake (o por AUT×CDS)
                               →  drawJurors: selección aleatoria anti-Sybil
                               ↓ lib/cds_jurados.ts draw (sorteo, no stake tree)
4. VOTACIÓN (Schelling)      →  commitVote: hash(voto + salt)
                               →  revealVote: reveal voto 1-5 + salt
                               →  verificar hash == commit
                               ↓ lib/symbiosky.ts commit/reveal + lib/kleros.ts
5. AGREGACIÓN (Score Schelling)  →  mean ± 1 SD → filtrar outliers → nueva mean = score
                               →  jurors en [mean-range, mean+range] → winners (incentive)
                               →  otros → stake * 3/4 deducido (burn)
                               ↓ lib/cds_jurados.ts aggregateScores (OUTLIER FILTER)
6. EJECUCIÓN (Autómata)      →  setPositiveExternality(score) → ZNU emitido por BN
                               ↓ lib/netbenefit.ts + lib/copiosis.ts NetBenefitFlow
7. RAO (memoria)             →  Decision Record: post, jurors, votes, mean, SD, score
                               ↓ lib/store.ts RAO
8. USUARIO (retroalimentación)  →  Ve score en dashboard + Modo Lucidez raw (mean/SD/votes)
```

---

## 5. Entregables Accionables (Prioridad P0/P1)

| Entregable | Módulo HSCSG | Prioridad | Descripción |
|------------|--------------|-----------|-------------|
| `docs/shivarthu_backup.md` + `shivarthu_integration.md` | Docs | **P0** | Este backup + integración |
| `lib/cds_jurados.ts` extend: `aggregateScores` con outlier removal (mean ± 1 SD) | CDS_Jurados | **P0** | Score Schelling port a TS |
| `lib/symbiosky.ts` extend: `commitVote` (hash) + `revealVote` (salt) | Symbiosky/CDS | **P0** | Commit-Reveal voting real |
| `lib/integral.ts` extend: weight por reputation/exp/externality (3 factores) | CDS/Integral | **P0** | Voto por mérito explícito |
| `lib/gaia.ts` extend: `CircleTier` con `expertiseTag` por círculo | Gaia/Colony | **P0** | Departments por especialidad |
| `lib/identity.ts` extend: `vouchingTree` + moderators invalidan | Identity | **P1** | Vouching family tree |
| `lib/cds.ts` extend: `ratifyDecision` multi-seat approval voting | CDS | **P1** | Approval Voting multi-ganador |
| `lib/netbenefit.ts` extend: `createPost` + `stake` + `validateExternality` | Copiosis/NetBenefit | **P1** | Positive Externality Validation pallet |
| `lib/pipeline.ts` extend: `PhaseData` enum (7 fases) completo | Pipeline | **P1** | Evidence→Staking→Drawing→Commit→Vote→Appeal→Execution |
| Pantalla `/justicia` extend: Score Schelling visualization (mean/SD/outliers) | `/justicia` | **P1** | UI agregación transparente |
| Pantalla `/colectivo` extend: Departments por expertise + vouching | `/colectivo` | **P1** | UI governanza departamental |

---

## 6. Conceptos NUEVOS NACIDOS (No Existían en HSCSG)

1. **Score Schelling Game con Outlier Removal (mean ± 1 SD)** — método estadístico explícito para agregar juicios honestos: descarta valores extremos (>1 SD), recalcula mean de 68.27% restante. Robusto contra manipulación.

2. **Commit-Reveal Voting (hash + salt)** — voto secreto: commit = keccak256(voto+salt); reveal = voto+salt; verifica hash match. Evita coerción/compra de votos.

3. **Voto por Mérito (reputation/experience/externality ≠ stake)** — peso de voto determinado por contribución verificada (AUT×CDS), no por riqueza. Seq Phragmén adaptado a mérito.

4. **Departments por Especialidad (expertos como líderes)** — gobernanza dividida por dominio técnico; representantes requieren expertise validada por Schelling.

5. **Vouching Family Tree + Moderators** — aval mutuo entre conocidos; moderadores (approval voting) invalidan vouching falso downvotando garante. Social graph de confianza.

6. **Department Tipping (5 categorías crecientes)** — funding por tiers (SmallTipper→BigSpender); aplicar fondos mayores requiere mayor stake/responsabilidad.

7. **Randomized Tax (sin inflación)** — tax aleatorio por transacción (0-5%) + anti-hoarding por account_number % 1000. Recolecta sin inflación.

8. **Positive Externality Validation Pallet** — post de externality + stake + Score Schelling → score final set en storage. Incentiva contribución verificable.

9. **PhaseData Pipeline (7 fases)** — Evidence → Staking → Drawing → Commit → Vote → Appeal → Execution. Ciclo de vida completo de disputa/juicio.

10. **Juror Selection por Stake-Weighted Random (anti-Sybil)** — probabilidad selección ∝ tokens stakeados + selección aleatoria (sp_io randomness). Port a sorteo + anonimato en HSCSG.

---

## 7. Conceptos ETAPAS DE EVOLUCIÓN (Refinamientos)

| Base HSCSG | Evolución Shivarthu | Cambio |
|------------|---------------------|--------|
| CDS_Jurados (promedia `W_i`) | **Score Schelling outlier removal** | `aggregateScores` filtra >1 SD antes de mean |
| Symbiosky (vote simple) | **Commit-Reveal voting** | `commitVote` (hash) + `revealVote` (salt) |
| CDS weight (AUT×CDS global) | **Voto por mérito 3 factores** | reputation + experience + externality |
| `/colectivo` (plano) | **Departments por expertise** | CircleTier con expertiseTag |
| Social DNA (referenciado) | **Vouching family tree + moderators** | identity.ts vouchingTree real |
| CDS (single seat) | **Approval Voting multi-ganador** | ratifyDecision multi-seat |
| NetBenefit (Copiosis básico) | **Positive Externality Validation** | post + stake + score schelling |
| Pipeline (3 capas) | **PhaseData 7 fases** | Evidence→Staking→...→Execution |
| ZNU demurrage (anti-hoarding) | **Randomized Tax** | tax aleatorio por tx (complementario) |

---

## 8. Roadmap de Integración (Secuencia Lógica)

```
SEMANA 1 (P0 - Núcleo Consenso):
├── lib/cds_jurados.ts extend: aggregateScores (mean ± 1 SD outlier filter)
├── lib/symbiosky.ts extend: commitVote + revealVote (commit-reveal)
├── lib/integral.ts extend: weight por reputation/exp/externality
└── lib/gaia.ts extend: CircleTier con expertiseTag

SEMANA 2 (P1 - Validación + Voto):
├── lib/identity.ts extend: vouchingTree + moderators
├── lib/cds.ts extend: ratifyDecision multi-seat approval
├── lib/netbenefit.ts extend: createPost + stake + validateExternality
└── lib/pipeline.ts extend: PhaseData enum 7 fases

SEMANA 3 (P1 - UI + Visualización):
├── Pantalla /justicia extend: Score Schelling viz (mean/SD/outliers)
├── Pantalla /colectivo extend: Departments + vouching
└── Modo Lucidez: raw scores, votes, mean/SD, incentives

SEMANA 4 (P1 - Pruebas):
├── Validación empírica: 3 nodos beta, externality posts cross-OU
└── Documentación: shivarthu_integration.md actualizado
```

---

## 9. Conclusión: Shivarthu como "Método de Consenso Estadístico Honesto" de HSCSG

Shivarthu aporta la **rigurosidad estadística faltante** en la agregación de juicios HSCSG:
- Kleros dio **schelling básico** (coherencia = incentivo)
- Symbiosky dio **conviction** (voto bloqueado por confianza)
- **Shivarthu da OUTLIER REMOVAL + COMMIT-REVEAL + VOTO POR MÉRITO**

El nodo HSCSG deja de ser "app con votación simple" para ser **organismo con consenso estadísticamente honesto**: post → jurados → commit-reveal → agregación con outliers → incentives por mérito → auditoría transparente.

**Próximo paso inmediato:** Extender `lib/cds_jurados.ts` con `aggregateScores` (mean ± 1 SD filter) e integrar en `lib/symbiosky.ts` commit-reveal voting. Commit atómico P0.

---
*Fecha: 2026-08-12 | HSCSG v15 OS | Asimilación repo silicology1/shivarthu*