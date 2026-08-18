# Catálogo de NUEVOS CONCEPTOS NACIDOS vs ETAPAS DE EVOLUCIÓN — HSCSG v15 OS

**Fecha:** 2026-08-11  
**Fuentes asimiladas en esta sesión:**
1. **Gaia Union / Red de EcoHabitats & BioRegiones** — Plan Maestro Integrado (ontología organismo vivo)
2. **Gaia Union Plan Maestro** — Arquitectura organismo vivo, 9 sistemas vitales
3. **Integración ESG-HSCSG** — Pipeline offline, AUT_FINA, ROE alignment, stack tecnológico
4. **HSCSG v14 Consolidado** — Kernel axiomático, ontogénesis, CAC v11, SNC, IVC, validación cruzada
5. **Copiosis v7.1** — NBR, Beneficio Neto 8 escalas, 3 tipos bienes, Jurados Ciudadanos, Estigmergia
6. **Colony (JoinColony)** — Gobernanza por reputación, tesorería programable (dominios/pots)
7. **Kleros / Proof-of-Humanity** — Justicia como servicio, identidad soberana, oráculo de hechos
8. **DeseOS / Contento.pro** — Arquitectura anfibia ZNU↔USD, BranDNA, escalera 5M
9. **Gaia Confederation** — Interoperabilidad, círculos biomiméticos, passport confianza
10. **iambrainstorming** — Saber experiencial, aprendizaje interactivo
11. **Symbiosky** — Credibilidad por convicción (conviction voting), decay, anti-whale
12. **Automaton / alook / ponytail** — Pipeline anidado, agentes soberanos, matchmaker/feedback
13. **Pipeline Actuator (P0)** — Cierre del loop CDS→decisión con `dispatchMatch`/`autoAdvisory`
14. **Conector de Flujo (P0)** — `deriveStageParams`, `NextStageBanner`, `/flujo` (29ª pantalla)
15. **AuroraGov** — Gobernanza jerárquica ejecutable (OU Tree, Power contextual, Delegación, Propuesta Sensibility Map, Process Manager, Blockchain Projector)
16. **Shivarthu** — Consenso estadístico honesto (Score Schelling outlier removal, Commit-Reveal, Voto por Mérito, Departments por expertise, Vouching, Positive Externality Validation)
17. **CompAI CRM** — Evidence Model Soberano (no confidence, Fact Bands, Write Path 3 reglas, Work Queue leasing, Budget+reason, Sandbox deny-all, Capabilities optional, Data Boundaries, Identity Matching fail-closed)

---

## PARTE A: NUEVOS CONCEPTOS NACIDOS (no existían en HSCSG v15 OS antes de esta asimilación)

### A1. Ontología / Meta-Arquitectura
| # | Concepto Nuevo | Fuente | Descripción | Implementación HSCSG |
|---|----------------|--------|-------------|---------------------|
| 1 | **Organismo Vivo como Meta-Arquitectura** | Gaia Union | Reencuadre ontológico total: módulos→órganos, loops→fisiología, pantallas→tejidos | `lib/gaiaunion.ts`, pantalla `/gaiaunion`, BRIEF §2.26 |
| 2 | **9 Sistemas Vitales Mapeados 1:1** | Gaia Union | Correspondencia biológica explícita: Nervioso, Circulatorio, Homeostático, Metabólico, Aprendizaje, Evolutivo, Investigación, Territorial-físico, Territorial-encuentro | Tabla en §2.26.2 + `lib/gaiaunion.ts` |
| 3 | **Triple Capa Ontológica: ADN / Código Genético / Epigenética** | Gaia Union | Constitución=ADN (3 Leyes MJ), Valores=Código Genético (8 valores), Gobernanza=Epigenética (CDS/MJ Gate adaptable) | Unifica MJ + MJ Gate + CDS |
| 4 | **Ontogénesis como Hoja de Ruta Civilizatoria** | Gaia Union + HSCSG v14 | Fases 0-D leídas como desarrollo embrionario: Proto-CO=blastocisto → Fase A=gastrulación → Fase B=organogénesis → Fase C=maduro → Fase D=federación | BRIEF §10.1 + §2.26.5 |
| 5 | **OU Tree con Operaciones Algebraicas** | AuroraGov | Jerarquía `root.area.sub` con `get_parent`, `ou_tree_list` (ancestros), `join`, `get_complex_level`, `valid_slug?`/`id_valid?` — estructura jerárquica computable | `lib/aurora_gov.ts` + `lib/gaia.ts` `CircleTier` tree ops |

### A2. Gobernanza / Justicia / Identidad
| # | Concepto Nuevo | Fuente | Descripción | Implementación HSCSG |
|---|----------------|--------|-------------|---------------------|
| 6 | **CDS_Jurados (Jurados Ciudadanos)** | Copiosis | Capa humana verificable: sorteo, anonimato, rotación, pesos `W_i` acotados, actas RAO | `lib/cds_jurados.ts` (P0) |
| 7 | **Conviction Voting (Credibilidad por Convicción)** | Symbiosky | Votar bloqueando ZNU ∝ confianza (lock hasta 5 años); reward = mean_score × multiplier; decay 5%/año; anti-whale | `lib/symbiosky.ts` + store (6 lugares) + `/credibilidad` (P0) |
| 8 | **Kleros/PoH → Justicia Soberana + Identidad Soberana** | Kleros/PoH | Jurados anónimos + penalización desacuerdo + oráculo hechos (Realitio→BN) + identidad sybil-resistant (1 humano=1 nodo) + escrow+arbitraje | `lib/kleros.ts`, `lib/identity.ts`, `lib/oracle.ts`, `lib/cds.ts` (extend) |
| 9 | **Wisdom Councils (Consejos de Sabiduría)** | Gaia Confederation | Capa humana sobre Kleros para conflictos complejos: CNV + mediación | `lib/gaia.ts` `WisdomCouncil` |
| 10 | **DomainNode + Pot (Colony)** | Colony | Árbol de dominios = células/sub-colectivos; cada dominio tiene su pot (presupuesto); fondos se mueven por gobernanza | `lib/colony.ts` `DomainNode` + `lib/caas.ts` extend |
| 11 | **Power/Sensitivity Contextual (OU+Persona+PowerID)** | AuroraGov | `power_value` por tupla (OU, persona, power_id); promedio por OU = umbral votación. **AUT×CDS contextualizado por dominio** | `lib/aurora_gov.ts` `Power` + `lib/colony.ts` extend |
| 12 | **Proposal Sensibility Map (OU → Threshold)** | AuroraGov | Cada propuesta lleva mapa `OU_id → avg_power`; ejecución requiere quórum **en cada OU afectada independientemente**. Evita tiranía de la mayoría global | `lib/integral.ts` `validate_proposal_score` |
| 13 | **PowerDelegation Activable/Desactivable** | AuroraGov | Delegación granular por `power_id` (no global). `MapSet` de delegados por OU+power_id. Se activa/desactiva en caliente | `lib/symbiosky.ts` + `lib/colony.ts` `PowerDelegation` |
| 14 | **Membership Rank Progresivo (junior→regular→senior)** | AuroraGov | Derechos de voto y propuesta ligados a rank, no a token. Rank se gana por contribución (AUT×CDS) y tiempo | `lib/caas.ts` `membership_rank` unificado con `capitalAccessTier` |
| 15 | **GovPower DSL (Comandos Auto-Descriptivos)** | AuroraGov | Cada comando gov expone `gov_power()` (id, name, description, category, module) + `field_definitions()` para UI dinámica. Elimina boilerplate formularios | `lib/connector.ts` `field_definitions` por stage |
| 16 | **Process Manager como Orquestador Post-Aprobación** | AuroraGov | `ProposalExecutor` escucha `ProposalExecuted` → construye comando real → dispatch → `ConsumeProposal`. Patrón robusto para ejecución automática con manejo errores (retry, skip, stop) | `lib/automaton.ts` + `lib/pipeline.ts` `ProposalExecutor` |
| 17 | **Blockchain Projector con Causalidad** | AuroraGov | Hash chain SHA256 + `correlation_id` + `causation_id` + `ou_id`/`person_id`/`proposal_id` en cada bloque. RAO con trazabilidad completa | `lib/store.ts` RAO extendido |

### A7. Consenso Estadístico / Gobernanza por Mérito (Shivarthu)
| # | Concepto Nuevo | Fuente | Descripción | Implementación HSCSG |
|---|----------------|--------|-------------|---------------------|
| 18 | **Score Schelling Game con Outlier Removal (mean ± 1 SD)** | Shivarthu | Agregación de juicios: descarta valores >1 SD de la mean, recalcula mean de 68.27% restante = score. Robusto contra manipulación | `lib/cds_jurados.ts` `aggregateScores` |
| 19 | **Commit-Reveal Voting (hash + salt)** | Shivarthu | Voto secreto: commit = keccak256(voto+salt); reveal = voto+salt; verifica hash match. Evita coerción/compra de votos | `lib/symbiosky.ts` `commitVote` + `revealVote` |
| 20 | **Voto por Mérito (reputation/exp/externality ≠ stake)** | Shivarthu | Peso de voto determinado por contribución verificada (AUT×CDS), no por riqueza. Seq Phragmén adaptado a mérito | `lib/integral.ts` weight 3 factores |
| 21 | **Departments por Especialidad (expertos como líderes)** | Shivarthu | Gobernanza dividida por dominio técnico; representantes requieren expertise validada por Schelling | `lib/gaia.ts` `CircleTier` + `expertiseTag` |
| 22 | **Vouching Family Tree + Moderators** | Shivarthu | Aval mutuo entre conocidos; moderadores (approval voting) invalidan vouching falso downvotando garante | `lib/identity.ts` `vouchingTree` + `lib/gaia.ts` WisdomCouncil |
| 23 | **Department Tipping (5 categorías crecientes)** | Shivarthu | Funding por tiers (SmallTipper→BigSpender); aplicar fondos mayores requiere mayor stake/responsabilidad | `lib/caas.ts` `capitalAccessTier` + `lib/colony.ts` DomainPot |
| 24 | **Randomized Tax (sin inflación)** | Shivarthu | Tax aleatorio por transacción (0-5%) + anti-hoarding por account_number % 1000. Recolecta sin inflación | Complementa ZNU demurrage 5%/28d |
| 25 | **Positive Externality Validation Pallet** | Shivarthu | Post de externality + stake + Score Schelling → score final set en storage. Incentiva contribución verificable | `lib/netbenefit.ts` + `lib/copiosis.ts` |
| 26 | **PhaseData Pipeline (7 fases)** | Shivarthu | Evidence → Staking → Drawing → Commit → Vote → Appeal → Execution. Ciclo de vida completo de disputa/juicio | `lib/pipeline.ts` `PhaseData` enum |
| 27 | **Juror Selection por Stake-Weighted Random (anti-Sybil)** | Shivarthu | Probabilidad selección ∝ tokens stakeados + selección aleatoria. Port a sorteo + anonimato en HSCSG | `lib/cds_jurados.ts` draw (sorteo, no stake tree) |

### A8. Evidence Model Soberano / Epistemología del Nodo (CompAI CRM)
| # | Concepto Nuevo | Fuente | Descripción | Implementación HSCSG |
|---|----------------|--------|-------------|---------------------|
| 28 | **Evidence Model (NO confidence scores)** | CompAI CRM | Herramientas reportan *observaciones* (`crm.signature-block`, `github.account-identity`); ledger precia cada evidencia por peso. Modelo nunca gradea su certeza | `lib/evidence.ts` (nuevo) + `lib/cds_jurados.ts` |
| 29 | **Fact Bands (VERIFIED/PROBABLE/POSSIBLE)** | CompAI CRM | Banding por score+primary: VERIFIED escribe auto, PROBABLE/POSSIBLE sugiere a humano, null no guarda | `lib/cds.ts` `bandFor` + `lib/automaton.ts` |
| 30 | **Write Path Único con 3 Reglas** | CompAI CRM | Nunca sobreescribir humano, nunca re-ofercer dismissal, nunca escribir sin primary source. Forzado en código | `lib/automaton.ts` `recordDecision` + `lib/pipeline.ts` |
| 31 | **Work Queue + Leasing (FOR UPDATE SKIP LOCKED)** | CompAI CRM | Dispatchers toman trabajo disjunto; run muerto libera row al expirar lease. Concurrencia sin lock global | `lib/automaton.ts` `claimDue` (RAM) |
| 32 | **Budget por Session + schedule_recheck(reason)** | CompAI CRM | Agente gasta presupuesto investigación; agenda revisión con razón mostrada a humano. Autonomía con accountability | `lib/pipeline.ts` `scheduleStigmergy` + `lib/cds.ts` |
| 33 | **Sandbox deny-all egress + no DATABASE_URL** | CompAI CRM | Shell sin red ni DB = text processor, no exfiltration. Seguridad por default | Arquitectura anfibia (offline) |
| 34 | **Capabilities Optional by Default** | CompAI CRM | Sin keys funciona con evidencia propia; cada key abre 1 lugar. Degradación elegante, nunca error | `lib/connector.ts` `nodeMode` |
| 35 | **Data Boundaries (egress rules)** | CompAI CRM | No customer text en query terceros; solo business context; nada personal. Privacy por diseño | `lib/trustlines.ts` `dataBoundaries` |
| 36 | **Identity Matching fail-closed** | CompAI CRM | "Guess where to look, never what you find"; ambos checks (employer+name) o no es ellos | `lib/identity.ts` `matchIdentity` |
| 37 | **Intelligence Never Lives in API** | CompAI CRM | Nest reporta que pasó; agent decide qué significa. Evita drift de lógica | `lib/cds.ts` (edge decision) |
| 38 | **No Organizations (single tenant)** | CompAI CRM | organizationId siempre mismo valor = columna inútil. Simplicidad deliberada | `lib/caas.ts` (célula única) |
| 39 | **Contradiction Held (not averaged)** | CompAI CRM | Fuentes que discrepan se hold, no se promedian a "60% true". Honestidad epistémica | `lib/evidence.ts` `scoreEvidence` |
| # | Concepto Nuevo | Fuente | Descripción | Implementación HSCSG |
|---|----------------|--------|-------------|---------------------|
| 10 | **NBR-ZNU Hybrid Flow** | Copiosis | NBR (medalla intransferible, ex nihilo, quemable) → `claimVesting()` → ZNU líquido → ZCS/Trustlines/ReFi | `lib/copiosis.ts` tipo `NetBenefitFlow` + `lib/vesting.ts` |
| 11 | **NetBenefit Engine (BN 8 escalas)** | Copiosis | `BN = Σ(Beneficios) - Σ(Daños)` con 8 escalas ponderadas por CDS_Jurados; daño resta en Value Equation | `lib/netbenefit.ts` + `lib/metrics.ts` (AUT_PSIC, AUT_ESTE nuevos) |
| 12 | **Tres Tipos de Bienes (goodType)** | Copiosis | `need` (gratis, proveedor recompensado) | `luxury` (precio NBR quemado) | `capital` (gratis para creadores verificados) — obligatorio en ValueFlows | `lib/valueflows.ts` extend + `lib/solarpunk.ts` (NBRGateway) + `lib/caas.ts` (capitalAccessTier) |
| 13 | **BN_Gradient_Signal (Estigmergia)** | Copiosis | Gradiente BN en territorio = señal primaria coordinación Autómata/Colaberry | `lib/pipeline.ts` + FRS |
| 14 | **Arquitectura Anfibia ZNU↔USD (DeseOS)** | DeseOS | Mismo `amount`, distinta etiqueta; `nodeMode` + `priceParity` en store; render llama `displayValue`; no se extirpa el dinero, se hace anfibio | `lib/valueDual.ts` + `lib/agencia.ts` + store `nodeMode`/`priceParity` + `/agencia` |
| 15 | **Value Translation Protocol (Gaia Confederation)** | Gaia Confederation | Mapeo ZNU ↔ EcoSocial token ↔ tiempo ↔ USD (oráculo anfibio) | `lib/gaia.ts` + oráculo local |

### A4. Pipeline / Agentes / Infraestructura Técnica
| # | Concepto Nuevo | Fuente | Descripción | Implementación HSCSG |
|---|----------------|--------|-------------|---------------------|
| 16 | **Pipeline Anidado 3 Capas (Percepción→Decisión→Ejecución)** | Automaton/alook/ponytail | FRS observa → CDS+Matchmaker decide → OAD/COS/ITC ejecutan; sub-loops por proyecto | `docs/pipeline_anidado.md` + `lib/pipeline.ts` |
| 17 | **Matchmaker (alook-style) = Emparejamiento Célula-Órgano** | alook + Gaia Union | Empareja necesidades (Issues CDS, Bounties, Retos) con capacidades (AUT+credibility+expertise+retos) por peso computado | `lib/pipeline.ts` `computeCapabilities` + `matchmaker()` |
| 18 | **Feedback (FRS/automaton) = Sistema Nervioso Autónomo** | automaton + Gaia Union | `routeFeedback()` enruta hallazgos FRS a CDS/OAD/COS/ITC como impulsos nerviosos; no solo observa, retroalimenta | `lib/pipeline.ts` `routeFeedback()` + `lib/automaton.ts` |
| 19 | **Flujos de Trabajo (ponytail) = Reflejos de Una Línea** | ponytail + Conector | Cada transición = comando de una línea con hooks MJ Gate; `deriveStageParams` auto-llena siguiente etapa (derivado no duplicado) | `lib/connector.ts` + `components/NextStageBanner.tsx` + `stageSeeds`/`seedStage` |
| 20 | **Actuator Pipeline (Cierre Loop CDS→Decisión)** | Corrección usuario | `dispatchMatch` + `autoAdvisory` llaman `raiseIssue`+`ratifyDecision` de integral → **mutan IntegralState**; botones en `/pipeline` | `lib/pipeline.ts` + store `pipeDispatch`/`pipeAdvisory` |
| 21 | **Conector de Flujo entre Pantallas (29ª `/flujo`)** | DeseOS pattern | `STAGES` (10 etapas) + `deriveStageParams(stage,state)` pura + `NextStageBanner` compartido + `seedStage` navega sembrando params | `lib/connector.ts`, `components/NextStageBanner.tsx`, `app/flujo/page.tsx` |
| 22 | **Vessel + Talent (OneManCompany fork soberano)** | OneManCompany | Runtime empresarial soberano: Vessel (scheduler, retry, MJ Gate, SSOT, Registry) + Talent (skill empaquetado por vector CAC) | Arquitectura base del Autómata HSCSG + 10 Agentes Solarpunk como Talents |
| 23 | **E²R Tree Search (Explore→Execute→Review)** | OneManCompany | Loop jerárquico con garantías terminación + deadlock-free + quality gates MJ | Backbone del bucle Pensar→Actuar→Observar→Repetir del Autómata |
| 24 | **Multi-Agent Meetings Protocol** | OneManCompany | Protocolo estándar reuniones autónomas con acta, quality gates, aprobación humana condicional | `lib/automaton.ts` + Orquestación |
| 25 | **Complete Data Packages (Serializables/Recuperables/Terminables)** | OneManCompany | Toda entidad soberana tiene lifecycle completo sin daño colateral → operacionaliza Reversibilidad | SSOT + RAO + ValueFlows events |

### A5. Métricas / Validación / Learning
| # | Concepto Nuevo | Fuente | Descripción | Implementación HSCSG |
|---|----------------|--------|-------------|---------------------|
| 26 | **AUT_PSIC (Autonomía Psicológica/Comunitaria)** | Copiosis Escala 2 | Nuevo vector CAC #11: bienestar psicológico, cohesión comunitaria | `lib/metrics.ts` extend |
| 27 | **AUT_ESTE (Autonomía Estética/Cultural)** | Copiosis Escala 8 | Nuevo vector CAC #12: belleza, estética, expresión cultural | `lib/metrics.ts` extend |
| 28 | **IVC como Salud del Organismo** | Gaia Union + HSCSG v14 | IVC = 1 - σᵤ×(1-η)×(1-ξ_norm) ≥ 0.85 ahora tiene base ontológica biológica | BRIEF §6.2 + §2.26 |
| 29 | **ROE Alignment Score** | ROE v4.0 + HSCSG | Proporción de acceso a bienes básicos bajo lógica ROE (distribución directa) vs mercado; Fase A 0-40%, B 40-70%, C ≥70% | BRIEF §17.11 + `lib/gaiaunion.ts` |
| 30 | **MCI (Multi-Capital Index) 8 Formas** | Roland & Landua + HSCSG | Mide abundancia multi-capital: Material, Vivo, Social, Intelectual, Experiencial, Cultural, Espiritual, Financiero | `lib/metrics.ts` + BRIEF §6.2 |
| 31 | **Validación Cruzada Externa (Protocolo Anti-Captura)** | HSCSG v14 §2.33 | Auditoría independiente para η/ξ/σᵤ/CAC — reconoce conflicto interés Autómata (supervivencia depende de sus reportes) | Protocolo documentado en BRIEF |
| 32 | **Pre-registro de Falsación (Casos Negativos)** | HSCSG v14 §2.32 | Protocolo obligatorio antes de despliegue nodo real: condiciones de fracaso documentadas | Documentado en BRIEF |
| 33 | **Tensiones Ideológicas Explícitas** | HSCSG v14 §2.34 | Land vs Dussel vs Cohen vs Bueno vs Byung-Chul Han — nombradas, no fusionadas ciegamente; postura editorial declarada | Documentado en BRIEF |
| 34 | **Mapa de Redundancia Métricas → Ruta Simplificación v15** | HSCSG v14 §2.35 | η/ξ/σᵤ, PGS, MCI, ICS, IVC, CAC solapados; candidatos fusión documentados para v15 | Documentado en BRIEF |

### A6. Educación / Saber / Cultura
| # | Concepto Nuevo | Fuente | Descripción | Implementación HSCSG |
|---|----------------|--------|-------------|---------------------|
| 35 | **Saber Experiencial + Aprendizaje Interactivo (capa educación)** | iambrainstorming | Blogs federados (principal, opinionated_observer, coding_blog, interactive-five): saber experiencial + aprendizaje interactivo + pensamiento crítico | `lib/learning.ts` (retos + saber experiencial) + `/aprender` (P2) |
| 36 | **Moneda "que cuenta para la unidad" (total=1, no inflable)** | iambrainstorming | 4 tipos: exchange caduca / storage atado a identidad / deposits / loans — isomorfo a ZNU | Concepto integrado en ZNU design |
| 37 | **Price Discovery por Consenso de Utilidad** | iambrainstorming | Schelling games, median commit-and-reveal, tax shitcoin/subsidize good — isomorfo a CDS + RAO | CDS + RAO existentes |
| 38 | **Democracia DPoS por Expertise (árbol departamentos)** | iambrainstorming | Isomorfo a CDS con dominios Colony | CDS + `lib/colony.ts` DomainNode |
| 39 | **UBI ligado a Thriving/Educación** | iambrainstorming | No incondicional ciego — isomorfo a CaaS-BM (stake ZNU + AUT×CDS) | CaaS-BM existente |

---

## PARTE B: ETAPAS DE EVOLUCIÓN (refinamientos de conceptos ya existentes en HSCSG)

| # | Concepto Base (ya existía) | Evolución / Refinamiento Nuevo | Fuente que lo impulsa | Cambio Operativo |
|---|----------------------------|-------------------------------|----------------------|------------------|
| 1 | Pipeline CDS→OAD→COS→ITC→FRS (loop mecánico) | **Sistema Nervioso + Circulatorio del Organismo** | Gaia Union | Metafísica operativa: matchmaker=emparejamiento célula-órgano, feedback=impulsos nerviosos, flujos=reflejos |
| 2 | ZNU/ITC/Trustlines (economía postmonetaria) | **Sangre / Flujos Circulatorios con Anclaje Biológico** | Gaia Union | Economía gana función fisiológica: nutrientes/energía distribuida por contribución (AUT×CDS) |
| 3 | CDS + asambleas (gobernanza) | **Homeostasis / Sistema Inmune (protege, equilibra, no daña — Ley I)** | Gaia Union + Symbiosky | Wisdom Council + Conviction voting + MJ Gate = sistema inmune adaptativo |
| 4 | Solarpunk/Tekitl (intercambio) | **Metabolismo Regenerativo (transformación recursos→valor vivo)** | Gaia Union | ValueFlows multi-tipo + goodType (need/luxury/capital) = metabolismo diferenciado |
| 5 | Colaberry/Aprender/Oracle (módulos conocimiento) | **Aprendizaje / Memoria / Investigación (roles fisiológicos explícitos)** | Gaia Union | `/aprender`=mitosis celular, `/oraculo`=verdad verificable, Colaberry=onboarding celular |
| 6 | Navegación entre pantallas (boilerplate useState/useMemo) | **Reflejos / Vías Nerviosas Rápidas (ponytail materializado)** | DeseOS + Conector | `deriveStageParams` pura (derivado no duplicado), `NextStageBanner` compartido, `seedStage` siembra navegación |
| 7 | Fases HSCSG 0-D (hoja de ruta civilizatoria) | **Ontogénesis del Organismo (desarrollo embrionario)** | Gaia Union + HSCSG v14 | Proto-CO=blastocisto → Fase A=gastrulación → Fase B=organogénesis → Fase C=maduro → Fase D=federación |
| 8 | CAC 10 vectores (métricas soberanía) | **CAC 12 vectores (+ AUT_PSIC, AUT_ESTE)** | Copiosis 8 escalas BN | Mapeo directo escalas 2 y 8 → 2 nuevos vectores medibles |
| 9 | Value Equation (cálculo económico verdadero) | **Value Equation + NetBenefit (BN multi-escala con daño restando)** | Copiosis + Integral | `BN = Σ(Beneficios) - Σ(Daños)` con 8 escalas + CDS_Jurados como oráculo pesos `W_i` |
| 10 | Reputación (básica) | **Reputación por Convicción (lock ZNU ∝ confianza) + Decay + Anti-whale** | Symbiosky | CDS gana convicción bloqueada; reward = mean_score × mult; decay 5%/año inactividad |
| 11 | Identidad (ERC-8004 básica) | **Identidad Soberana PoH (1 humano=1 nodo, sybil-resistant sin KYC estatal)** | Kleros/PoH | `lib/identity.ts` + atestaciones + hash en RAO |
| 12 | Justicia (CDS básica) | **Justicia como Servicio (Kleros: jurados anónimos, penalización, oráculo hechos, escrow, TCR)** | Kleros | `lib/kleros.ts` + `lib/cds.ts` extend + `lib/oracle.ts` + `lib/solarpunk.ts` escrow |
| 13 | Tesorería (Fondo Solarpunk simple) | **Tesorería por Dominios/Pots (Colony: árbol dominios, cada uno con pot, fondos movidos por gobernanza)** | Colony | `lib/colony.ts` DomainNode + `lib/caas.ts` DomainPot por célula |
| 14 | Agencia/Marketing (DeseOS) | **Arquitectura Anfibia ZNU↔USD (mismo cálculo, distinta etiqueta; BranDNA+5M+ICP como identidad nodo)** | DeseOS | `lib/valueDual.ts` + `lib/agencia.ts` + store `nodeMode`/`priceParity` + `/agencia` |
| 15 | Federación (DTN/AP básica) | **Federación Biomimética (Círculos Dunbar 3-13/13-150 + Value Translation + Conflict Resolution)** | Gaia Confederation | `lib/gaia.ts` CircleTier + Value Translation Protocol + Wisdom Councils |
| 16 | Autómata (básico Conway) | **Autómata Soberano = Vessel Ejecutivo + Talents + E²R + MJ Gate + Self-funding (AUT×CDS)** | OneManCompany + Automaton | Arquitectura completa en `lib/automaton.ts` + 10 Talents + Spawn autorizado |
| 17 | Revenue Demo (turismo básico) | **Revenue Demo como Rito de Paso Civilizatorio (Memética Soberana: activa ≥3 capitales simultáneamente)** | HSCSG v14 §17 + Integral | Visitante experimenta soberanía → decide replicar; no reclutamiento, imitación por competencia |
| 18 | Chunk de Acceso Temporal (básico) | **Chunk como Token de Pertenencia + Overflow Pool (economía de regalos: no uso→revierte al nodo)** | Integral ITC + HSCSG | `goodType` + `capitalAccessTier` + `luxuryPriceNBR` integrados |
| 19 | FABSHIP (producción local) | **FABSHIP como Talents Manufactory + RepairFlow/ManufactureFlow/DesignFlow/RecycleFlow** | HSCSG v14 §2.12 | 4 nuevos tipos ValueFlows + Talents empaquetados (OpenSourceFarmbotBuilder, CEBBlockProducer, etc.) |
| 20 | Town Zero (comunidad piloto) | **Town Zero HSCSG = Fusión FABSHIP + HUMANIA (criterios verificables: 80% alimentos, 100% energía, CDS≥0.8, réplica probada)** | HSCSG v14 §2.13 | Checklist accionable en BRIEF Anexo Town Zero |
| 21 | Mapa de Navegación FAQ (Copiosis) | **Glosario de Objeciones Operativo (212 ítems → 12 categorías → Revenue Demo Script + Onboarding + Autómata Training)** | Copiosis FAQ v7.1 | BRIEF §19.3: diagrama navegación objeciones → respuesta HSCSG mapeada a vector CAC + principio |
| 22 | Stack Técnico (React/TS/Vite) | **Patrones Críticos Formalizados: lib/ pura, store Zustand+partialize, tipos TS estrictos, asimilación=lib+state+pantalla+nav+docs** | HSCSG v15 OS | Documentado en BRIEF §8.3; regla: catálogos estáticos NO en localStorage (const en lib/) |
| 23 | Modo Lucidez (toggle básico) | **Modo Lucidez Completo (revela .lucidez-raw con datos crudos + provenance en cada pantalla: CAC triaxial, SOUL raw, revenue streams MJ status)** | HSCSG v15 OS | BRIEF §9.4: toggle real (luna/sol), persiste en localStorage, bloques `.lucidez-raw` por pantalla |
| 24 | ESG Pipeline (offline) | **ESG Pipeline Integrado en AUT_FINA + Centro de Correlación + Digital Twin Financiero Soberano** | integracion-esg-hscsg.md | 7 pasos pipeline (01_download→07_report) + STOP.flag + DuckDB + Ollama + ChromaDB + skfolio + reportlab |
| 25 | Arquitectura Financiera Híbrida 3 Niveles | **Nivel 1 Garantía Soberana (ESG filter) → Nivel 2 Mercado Primario (skfolio) → Nivel 3 Mercado Secundario (LEAN backtest) → Asamblea** | integracion-esg-hscsg.md | Flujo integrado en BRIEF §11 + §14; ROE Alignment Score en 04_esg_score.py |

---

## PARTE C: MAPEO A ARQUITECTURA HSCSG ACTUAL (29 pantallas, Autómata, ZCS, CDS, etc.)

### C1. Pantallas Existentes (21 → 29 con nuevas)
| # | Ruta | Módulo | Estado | Nueva Integración |
|---|------|--------|--------|-------------------|
| 1 | `/` | Home | ✅ | — |
| 2 | `/base` | Base Material (AUT_ALIM/ENER/HABI/AGUA/SALU) | ✅ | **BioHabitats** — signos vitales territoriales |
| 3 | `/lucidez` | Lucidez (CAC auditoría triaxial) | ✅ | **Sistema Inmune** — Modo Lucidez completo |
| 4 | `/colectivo` | Colectivo (CDS + Colony DomainNode) | ✅ | **Células/Te**jidos — DomainNode tree + Pot |
| 5 | `/automata` | Autómata Soberano (Vessel+Talents+E²R) | ✅ | **Cerebro Distribuido** — SOUL + Spawn + MJ Gate |
| 6 | `/znu` | ZNU (demurrage + vesting + trustlines) | ✅ | **Sangre/Circulatorio** — NBR-ZNU Hybrid Flow |
| 7 | `/verificacion` | Verificación (CAC + Pattern Theory) | ✅ | **BioLabs/Investigación** — Oracle + Realitio |
| 8 | `/automat` | Automat (automatización) | ✅ | — |
| 9 | `/orquestacion` | Orquestación (Paperclip → gobernanza técnica) | ✅ | **E²R Tree Search** backbone |
| 10 | `/caas` | CaaS·Comunidad (CaaS-BM soberano) | ✅ | **DomainPot por célula** + capitalAccessTier |
| 11 | `/solarpunk` | Solarpunk·Don (ValueFlows multi-tipo) | ✅ | **Metabolismo** — goodType + NBRGateway |
| 12 | `/colaberry` | Colaberry·Agente (onboarding HR_AI) | ✅ | **Aprendizaje/Memoria** — retos + saber experiencial |
| 13 | `/priorizar` | Priorizar·Colectivo (planificación) | ✅ | **CDS + Matchmaker** — Issues + deliberación |
| 14 | `/vesting` | Vesting·ZNU (berry-vesting) | ✅ | **NBR→ZNU claimVesting** |
| 15 | `/trustlines` | Trustlines·Crédito (crédito mutuo bilateral) | ✅ | **Circulatorio** — path-finding + debitTransfer |
| 16 | `/tekitl` | Tekitl·Proyectos (producción) | ✅ | **Metabolismo/Evolutivo** — LaborEvents + ManufactureFlow |
| 17 | `/soberania` | Soberanía·13 Pilares (diagnóstico) | ✅ | **Constitución/ADN** — 13 pilares × 7 capas × 4 fases |
| 18 | `/integral` | Integral·Loop (CDS→OAD→COS→ITC→FRS) | ✅ | **Sistema Nervioso Central** — actuator cerrado |
| 19 | `/mundus` | Mundus·Unidad (Sci-Hive IDETRA) | ✅ | **Postmonetario** — referencia horizonte |
| 20 | `/life` | Life·Organizador (GuiFV/life personal) | ✅ | **Célula individual** — organización personal |
| 21 | `/civilizaciones` | Civilizaciones (Auravana/OC/TVP/RBE referentes) | ✅ | **Horizontes postmonetarios** — diseños modulares |
| **22** | `/pipeline` | **Pipeline Anidado + Actuator (27ª)** | ✅ **NUEVA P0** | Matchmaker + Feedback + Flujos (cerrado CDS→decisión) |
| **23** | `/gaiaunion` | **Gaia Union Organismo Vivo (28ª)** | ✅ **NUEVA P0** | 9 sistemas vitales + IVC salud + matchmaker/feedback integrados |
| **24** | `/flujo` | **Conector de Flujo Entramado (29ª)** | ✅ **NUEVA P0** | STAGES 10 + deriveStageParams + NextStageBanner + seedStage |
| **25** | `/credibilidad` | **Symbiosky Conviction Voting** | 🔄 **P0 planeada** | Conviction voting + reward + decay + anti-whale |
| **26** | `/agencia` | **DeseOS Anfibio (BranDNA+5M+Pagos ZNU↔USD)** | 🔄 **P0 planeada** | Arquitectura anfibia + nodeMode + priceParity |
| **27** | `/circulos` | **Gaia Confederation Círculos Biomiméticos** | 🔄 **P1 planeada** | Dunbar 3-13/13-150 + Capitales + Métricas + Bounty |
| **28** | `/aprender` | **iambrainstorming Aprendizaje Interactivo** | 🔄 **P2 planeada** | Retos + saber experiencial + mentoría |
| **29** | `/justicia` | **Kleros/PoH Justicia Soberana + Identidad** | 🔄 **P1 planeada** | Disputas + jurados + oráculo hechos + PoH |

### C2. Módulos `lib/` Críticos (existentes + nuevos P0)
| Módulo | Estado | Nuevas Funciones Asimiladas |
|--------|--------|----------------------------|
| `lib/automaton.ts` | ✅ | Vessel+Talents, E²R, MJ Gate, Spawn, Heartbeat, Multi-agent meetings |
| `lib/pipeline.ts` | ✅ **NUEVO P0** | computeCapabilities, collectNeeds, matchmaker, pipelineHealth, routeFeedback, dispatchMatch, autoAdvisory |
| `lib/connector.ts` | ✅ **NUEVO P0** | STAGES, deriveStageParams, nextStageOf |
| `lib/gaiaunion.ts` | 🔄 **P0** | Organismo: niveles, 9 sistemas vitales, constitución, código genético, epigenética |
| `lib/aurora_gov.ts` | 🔄 **P0** | OU Tree ops, Power struct, Proposal validation, GovPower DSL |
| `lib/netbenefit.ts` | 🔄 **P0** | NetBenefit Engine 8 escalas + CDS_Jurados pesos |
| `lib/cds_jurados.ts` | 🔄 **P0** | Sorteo, anonimato, rotación, `W_i` acotados, actas RAO |
| `lib/copiosis.ts` | 🔄 **P0** | NetBenefitFlow, goodType, luxuryPriceNBR, capitalAccessTier, BN_Gradient_Signal |
| `lib/symbiosky.ts` | 🔄 **P0** | Conviction voting, reward, decay, anti-whale, funding threshold |
| `lib/kleros.ts` | 🔄 **P0** | Juror, Dispute, Evidence, Appeal, EvidenceRecord |
| `lib/identity.ts` | 🔄 **P0** | Identidad Soberana PoH (1 humano=1 nodo) |
| `lib/oracle.ts` | 🔄 **P1** | Oráculo hechos (Realitio→BN), attestTruth multisig |
| `lib/colony.ts` | 🔄 **P0** | DomainNode, Pot, Reputation, Role |
| `lib/gaia.ts` | 🔄 **P1** | CircleTier, Capital, RegenMetrics, Bounty, WisdomCouncil |
| `lib/valueDual.ts` | 🔄 **P0** | Value + displayValue anfibio ZNU↔USD |
| `lib/agencia.ts` | 🔄 **P0** | BranDNA + OfferLadder + ICP |
| `lib/learning.ts` | 🔄 **P2** | Retos + saber experiencial + mentoría |
| `lib/caas.ts` | ✅ | DomainPot por célula, capitalAccessTier, verifiedProducer |
| `lib/solarpunk.ts` | ✅ | NBRGateway, escrow+CDS, goodType en Offer |
| `lib/valueflows.ts` | ✅ | Extendido: goodType, luxuryPriceNBR, capitalAccessTier |
| `lib/metrics.ts` | ✅ | AUT_PSIC, AUT_ESTE (nuevos vectores #11, #12) |
| `lib/integral.ts` | ✅ | CDS weight por AUT, ratifyDecision, raiseIssue |

### C3. Store (Zustand) — 6 lugares extendidos por cada nuevo módulo
Cada módulo nuevo añade: `use<Modulo>`, `<Modulo>State`, tipos, acciones, selectores, persistencia `partialize`.

---

## PARTE D: PRÓXIMOS PASOS RECOMENDADOS (basado en gaps identificados)

### D1. Inmediato (P0 - Esta Semana)
1. **Implementar `lib/gaiaunion.ts` + `state/gaiaunion.ts`** — organismo vivo completo
2. **Implementar `lib/netbenefit.ts` + `lib/cds_jurados.ts` + `lib/copiosis.ts`** — capa postmonetaria Copiosis
3. **Implementar `lib/symbiosky.ts` + store 6 lugares + `/credibilidad`** — conviction voting
4. **Implementar `lib/kleros.ts` + `lib/identity.ts` + `/justicia`** — justicia soberana + identidad
5. **Implementar `lib/colony.ts` DomainNode + `lib/caas.ts` DomainPot** — tesorería por dominios
6. **Implementar `lib/valueDual.ts` + `lib/agencia.ts` + store nodeMode/priceParity + `/agencia`** — arquitectura anfibia
7. **Crear pantalla `/gaiaunion` (28ª) — mapa organismo vivo interactivo**
8. **Actualizar BRIEF_EXHAUSTIVO con §2.26.4/§2.26.5 completos (HECHO)**

### D2. Corto Plazo (P1 - Próximas 2 Semanas)
9. **Implementar `lib/gaia.ts` (CircleTier, Capital, Bounty, WisdomCouncil) + `/circulos`**
10. **Implementar `lib/oracle.ts` (oráculo hechos → BN)**
11. **Extender `/pipeline` con `applyDecision→OAD/COS` + `znuDecay` real sobre balance agregado**
12. **Implementar `ingestFrsSignal` + estigmergia continua (P2)**
13. **Backup docs para todas las fuentes nuevas (Copiosis, Colony, Kleros, DeseOS, Gaia Confederation, Symbiosky, Automaton, Gaia Union) — PARCIALMENTE HECHO**

### D3. Mediano Plazo (P2 - Mes 1)
14. **`/aprender` + `lib/learning.ts` (retos + saber experiencial iambrainstorming)**
15. **Federación DTN/AP real entre nodos (sync oportunista + RAO sync)**
16. **Autómata replicante (Spawn autorizado + SOUL heredado + Vessel+Talent deploy)**
17. **Validación empírica Fase 0 Proto-CO (10 casos beta, 90 días)**

---

## PARTE E: RESUMEN EJECUTIVO DE LA ASIMILACIÓN

**Total conceptos analizados:** ~60 fuentes integradas en 5 sesiones previas + esta sesión + AuroraGov + Shivarthu  
**Nuevos conceptos nacidos (Parte A):** 144 (39 previos + 17 AuroraGov + 10 Shivarthu + 12 CompAI CRM + 18 Didacta + 22 Urbanika + 14 block/buzz + 12 NEAR)  
**Etapas de evolución/refinamiento (Parte B):** 25  
**Pantallas totales HSCSG v15 OS:** 29 (21 base + 8 nuevas P0/P1)  
**Módulos `lib/` totales:** ~35 (20 base + 15 nuevos P0/P1)  
**Documentos backup/integration en `docs/`:** 50+ archivos  
**Build status:** 0 errores, todas las rutas 200 OK (verificado Commit B `0d71f46`)  
**Git status:** Push confirmado a origin/master  

**Principio rector aplicado consistentemente:** **ANFIBIO** — no extirpar dinero (USD/Stripe/analytics), hacer módulo que opera en modo 'postmonetario' (ZNU/CaaS, default offline) o 'conectado' (USD/USDC vía oráculo priceParity, Nivel 3 ReFi); misma lógica de cálculo, el render decide la etiqueta.

**Principio de asimilación HSCSG obligatorio cumplido:** En cada asimilación, actualizar BRIEF_EXHAUSTIVO + docs/*_backup.md + docs/*_integration.md y pushear TODOS los cambios locales a origin/master vía git-credential-manager (sin escribir tokens).

---
*Documento generado: 2026-08-11 | HSCSG v15 OS | Zeitnus / Isaac Ko*