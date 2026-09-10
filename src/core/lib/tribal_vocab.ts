/**
 * Vocabulario Tribular HSCSG — Diccionario Canónico
 * 
 * Reemplaza terminología propietaria con equivalentes HSCSG genéricos.
 * Único source of truth para términos en código, docs, UI.
 */

export interface TermEntry {
  hscsgTerm: string;           // Término canónico HSCSG (usar en código/docs/UI)
  aliases: string[];           // Sinónimos aceptados
  deprecatedTerms: string[];   // Términos NO usar (propietarios, confusos, ambiguos)
  definition: string;          // Definición canónica
  category: TermCategory;
  relatedTerms: string[];      // Otros términos HSCSG relacionados
  examples: string[];          // Ejemplos de uso
  seeAlso: string[];           // Referencias cruzadas
}

export type TermCategory = 
  | 'FRAMEWORK'      // Frameworks metodológicos
  | 'METRIC'         // Métricas y KPIs
  | 'ARCHITECTURE'   // Componentes arquitectónicos
  | 'GOVERNANCE'     // Gobernanza y toma de decisiones
  | 'ECONOMICS'      // Modelos económicos, tokens, valor
  | 'COMMUNITY'      // Estructuras comunitarias
  | 'MINDSET'        // Conceptos psicológicos/filosóficos
  | 'OPERATIONS'     // Operaciones, flujos, rituales
  | 'TECHNICAL';     // Términos técnicos puros

export const TRIBAL_VOCAB: Record<string, TermEntry> = {
  // === FRAMEWORKS ===
  'mtp_matrix': {
    hscsgTerm: 'Matriz Talento-Propósito (MTP)',
    aliases: ['MTP', 'Matriz Habilidad-Interés', 'Diagnóstico Onboarding'],
    deprecatedTerms: ['Cuadrantes de Superpoderes', 'Superpower Quadrants'],
    definition: 'Diagnóstico que cruza Habilidad × Propósito/Interés para asignar SOUL Tier y ruta de desarrollo personalizada. 4 zonas: DESPERDICIO, TRAMPA, PROPÓSITO, MAESTRÍA.',
    category: 'FRAMEWORK',
    relatedTerms: ['soul_tier', 'mma_engine', 'tfa_engine'],
    examples: ['Usuario completa MTP → asignado SOUL Tier BUILDER → ruta DESARROLLAR 6 meses'],
    seeAlso: ['SOUL Tier', 'Micro-Monopolio de Atención (MMA)']
  },

  'tfa_engine': {
    hscsgTerm: 'Triada Foco-Apalancamiento (TFA)',
    aliases: ['TFA', 'Motor FOCO/APALANCAMIENTO/PODA', 'Focus-Leverage-Prune'],
    deprecatedTerms: ['Domina/Delega/Desecha', 'Las 3 D'],
    definition: 'Motor de priorización que asegura: 1 item en FOCO (impacto alto + alineación), resto delegado (APALANCAMIENTO) o eliminado (PODA). Regla dura: máx 1 foco.',
    category: 'FRAMEWORK',
    relatedTerms: ['mtp_matrix', 'focus_score', 'leverage_ratio', 'prune_ratio'],
    examples: ['TFA plan generado: FOCO="Lanzar MVP", APALANCAMIENTO=[diseño, docs], PODA=[reuniones innecesarias]'],
    seeAlso: ['focus_score', 'leverage_ratio', 'prune_ratio']
  },

  'residue_flip': {
    hscsgTerm: 'Giro de Residuo (GR)',
    aliases: ['GR', 'Residue Flip', 'Transformador Assets'],
    deprecatedTerms: ['Canelazo'],
    definition: 'Transformador de assets: invierte ángulo de asset existente (blooper, error, residuo) para crear nuevo valor. 8 ángulos: INVERT_PURPOSE, INVERT_AUDIENCE, INVERT_FORMAT, INVERT_TONE, INVERT_PERSPECTIVE, EXTRACT_RESIDUE, RECOMBINE, CUSTOM.',
    category: 'FRAMEWORK',
    relatedTerms: ['asset', 'flip_operation', 'flipped_asset'],
    examples: ['Blooper video → "La imperfección vende autenticidad" (INVERT_PURPOSE)'],
    seeAlso: ['asset', 'content_pipeline']
  },

  'fertile_fusion': {
    hscsgTerm: 'Fusión Fértil (FF)',
    aliases: ['FF', 'Fertile Fusion', 'Validador Híbridos'],
    deprecatedTerms: ['Manteconcha', 'Tres Efes'],
    definition: 'Validador de ideas híbridas: combina 2 modelos mainstream probados y testea fertilidad con 3 tests: FUNCIONALIDAD (sinergia), REPLICABILIDAD (sin fundadores), ESCALABILIDAD (crece sin degradar). Niveles: ESTÉRIL, INCUBANDO, FÉRTIL, HIPERFÉRTIL.',
    category: 'FRAMEWORK',
    relatedTerms: ['mainstream_model', 'hybrid_proposal', 'viability_test'],
    examples: ['Uber = Taxis + Smartphone (HIPERFÉRTIL)', 'Airbnb = Hoteles + Economía Colaborativa (HIPERFÉRTIL)'],
    seeAlso: ['mainstream_registry', 'hybrid_proposal']
  },

  'fundamented_optimism': {
    hscsgTerm: 'Optimismo Fundamentado (OFER)',
    aliases: ['OFER', 'Pronoia Calibrada', 'Mindset Engine'],
    deprecatedTerms: ['Pronoia vs Paranoia'],
    definition: 'Módulo de mindset que calibra tendencia cognitiva: PARANOIA (egocentrismo reactivo, foco amenazas) ↔ PRONOIA (optimismo fundamentado, insignificancia liberadora, servicio). Scores 0-100, modo dominante, shifts recomendados con técnicas y práctica diaria.',
    category: 'MINDSET',
    relatedTerms: ['mindset_mode', 'paranoia_score', 'pronoia_score', 'mindset_shift'],
    examples: ['Usuario en PARANOIA → shifts: CONTROL_AUDIT (7d) + EVIDENCE_LOGGING (7d) → NEUTRAL → PRONOIA'],
    seeAlso: ['mindset_shift', 'control_audit', 'evidence_logging']
  },

  'guided_autonomous': {
    hscsgTerm: 'Modelo Guiado-Autónomo (MGA)',
    aliases: ['MGA', 'Waze Pattern', 'Navigation Engine'],
    deprecatedTerms: ['Waze vs Uber', 'Chofer vs Navegador'],
    definition: 'Patrón delegación: usuario MANEJA (autonomía), sistema GUIA (navegación). Modos: AUTÓNOMO / GUIADO / CO-PILOTO / AUTOPILOTO. Integra E²R (Explore→Execute→Reflect) + Coworker Delegation. Checkpoints con validación AUTO/USER/COWORKER.',
    category: 'ARCHITECTURE',
    relatedTerms: ['navigation_mode', 'route_option', 'checkpoint', 'coworker_assignment', 'decision_record'],
    examples: ['Usuario elige ruta "Aprender TypeScript" → modo GUIADO → checkpoints 25/50/75/100% → coworker VALIDATOR en cp3'],
    seeAlso: ['e2r_engine', 'coworker_delegation', 'navigation_mode']
  },

  'mma_engine': {
    hscsgTerm: 'Micro-Monopolio de Atención (MMA)',
    aliases: ['MMA', 'Micro-Monopolio', '100 True Fans Engine'],
    deprecatedTerms: ['Casi todo para casi nadie', 'Micro-nicho', '100 True Fans'],
    definition: 'Motor para identificar, validar, escalar micro-monopolios: "100 true fans × $1K = $100K/año". Escala humana: CÉLULA (≤150 Dunbar) → CIVILIZACIÓN (150-1500) → FEDERACIÓN (1500+). Métricas: monopoly_strength, niche_ownership, expansion_readiness.',
    category: 'ECONOMICS',
    relatedTerms: ['niche_definition', 'audience_profile', 'value_proposition', 'community_structure', 'mma_metrics'],
    examples: ['MMA "TypeScript para devs React" → 100 true fans × $97/mes = $100K ARR → célula 100 miembros → civilización 500'],
    seeAlso: ['niche_definition', 'community_structure', 'mma_metrics', 'cell', 'civilization']
  },

  // === MÉTRICAS ===
  'focus_score': {
    hscsgTerm: 'Focus Score',
    aliases: ['Score Foco'],
    deprecatedTerms: [],
    definition: 'Score 0-100 que evalúa idoneidad de item para ser FOCO único en TFA. Combina: impacto 35% + alineación 30% + (100-esfuerzo) 20% + (100-drenaje) 15%.',
    category: 'METRIC',
    relatedTerms: ['tfa_engine', 'leverage_score', 'prune_score'],
    examples: ['Item con focusScore 92 seleccionado como FOCO único'],
    seeAlso: ['tfa_engine', 'leverage_score']
  },

  'leverage_ratio': {
    hscsgTerm: 'Leverage Ratio',
    aliases: ['Ratio Apalancamiento'],
    deprecatedTerms: [],
    definition: 'Proporción items delegados / items totales en plan TFA. Target > 60%.',
    category: 'METRIC',
    relatedTerms: ['tfa_engine', 'focus_score', 'prune_ratio'],
    examples: ['Plan con 1 foco + 4 delegados + 1 podado → leverageRatio = 4/6 = 67%'],
    seeAlso: ['tfa_engine', 'prune_ratio']
  },

  'prune_ratio': {
    hscsgTerm: 'Prune Ratio',
    aliases: ['Ratio Poda'],
    deprecatedTerms: [],
    definition: 'Proporción items eliminados / items totales en plan TFA. Indica cuánto ruido se removió.',
    category: 'METRIC',
    relatedTerms: ['tfa_engine', 'focus_score', 'leverage_ratio'],
    examples: ['Plan con 1 podado de 6 items → pruneRatio = 17%'],
    seeAlso: ['tfa_engine', 'leverage_ratio']
  },

  'isomorphism_score': {
    hscsgTerm: 'Isomorphism Score',
    aliases: ['Score Isomórfico', 'Grado Isomorfismo'],
    deprecatedTerms: [],
    definition: 'Métrica 0-100 que mide grado de equivalencia estructural entre repo externo y módulo HSCSG. ≥70 = asimilación viable. Usado en hscsg-repo-assimilation.',
    category: 'METRIC',
    relatedTerms: ['coverage', 'fidelity', 'repo_assimilation'],
    examples: ['Repo Anthropic Commerce Agents → isomorphism_score 87% (14 isomorfismos)'],
    seeAlso: ['coverage', 'fidelity', 'repo_assimilation']
  },

  'coverage': {
    hscsgTerm: 'Coverage (Asimilación)',
    aliases: ['Cobertura Asimilación'],
    deprecatedTerms: [],
    definition: '% de conceptos/patrones del repo origen mapeados a módulos HSCSG. Target > 80%.',
    category: 'METRIC',
    relatedTerms: ['isomorphism_score', 'fidelity', 'repo_assimilation'],
    examples: ['Coverage 85% = 17/20 conceptos mapeados'],
    seeAlso: ['isomorphism_score', 'fidelity']
  },

  'fidelity': {
    hscsgTerm: 'Fidelity (Asimilación)',
    aliases: ['Fidelidad Asimilación'],
    deprecatedTerms: [],
    definition: 'Grado de preservación de lógica pura vs infraestructura original. 0-100. Target > 85%.',
    category: 'METRIC',
    relatedTerms: ['isomorphism_score', 'coverage', 'anfibio_principle'],
    examples: ['Fidelity 92% = lógica pura conservada, solo infra (Docker, Postgres) extirpada'],
    seeAlso: ['isomorphism_score', 'anfibio_principle']
  },

  'monopoly_strength': {
    hscsgTerm: 'Monopoly Strength',
    aliases: ['Fuerza Monopolio', 'Fuerza Micro-Monopolio'],
    deprecatedTerms: [],
    definition: 'Métrica 0-100: diferenciación + barreras de entrada + switching costs cognitivos. Mide qué tan defendible es el micro-monopolio.',
    category: 'METRIC',
    relatedTerms: ['mma_engine', 'niche_ownership', 'expansion_readiness'],
    examples: ['MMA con framework propietario + comunidad effects red + reputación = monopolyStrength 87'],
    seeAlso: ['niche_ownership', 'expansion_readiness']
  },

  'niche_ownership': {
    hscsgTerm: 'Niche Ownership',
    aliases: ['Propiedad de Nicho', 'Mindshare Nicho'],
    deprecatedTerms: [],
    definition: '% de "mente" que el MMA ocupa en su nicho. 0-100. Qué % del mercado objetivo asocia el problema con TU solución.',
    category: 'METRIC',
    relatedTerms: ['mma_engine', 'monopoly_strength', 'expansion_readiness'],
    examples: ['NicheOwnership 78% = 78% de devs React que buscan "TypeScript avanzado" piensan en tu MMA'],
    seeAlso: ['monopoly_strength', 'expansion_readiness']
  },

  'expansion_readiness': {
    hscsgTerm: 'Expansion Readiness',
    aliases: ['Listo para Expansión'],
    deprecatedTerms: [],
    definition: 'Métrica 0-100: listo para expandir a nicho adyacente. Combina: salud financiera, comunidad estable, recursos libres, nichos adyacentes mapeados.',
    category: 'METRIC',
    relatedTerms: ['mma_engine', 'monopoly_strength', 'niche_ownership'],
    examples: ['ExpansionReadiness 82 = listo para expandir a "TypeScript para equipos" en 90 días'],
    seeAlso: ['monopoly_strength', 'niche_ownership']
  },

  'paranoia_score': {
    hscsgTerm: 'Paranoia Score',
    aliases: ['Score Paranoia'],
    deprecatedTerms: [],
    definition: 'Score 0-100 de egocentrismo reactivo en OFER. Personalización 25% + Catastrofismo 25% + Hipervigilancia 20% + Narrativa víctima 15% + Ilusión control 15%. ≥60 = modo PARANOIA.',
    category: 'METRIC',
    relatedTerms: ['fundamented_optimism', 'pronoia_score', 'net_score'],
    examples: ['ParanoiaScore 78 → modo PARANOIA activo → shifts recomendados'],
    seeAlso: ['fundamented_optimism', 'pronoia_score']
  },

  'pronoia_score': {
    hscsgTerm: 'Pronoia Score',
    aliases: ['Score Pronoia', 'Score Optimismo Fundamentado'],
    deprecatedTerms: [],
    definition: 'Score 0-100 de optimismo fundamentado en OFER. Insignificancia liberadora 25% + Escaneo oportunidades 25% + Orientación servicio 20% + Confianza flujo 15% + Agencia en límites 15%. ≥60 = modo PRONOIA.',
    category: 'METRIC',
    relatedTerms: ['fundamented_optimism', 'paranoia_score', 'net_score'],
    examples: ['PronoiaScore 82 → modo PRONOIA activo → shifts de consolidación'],
    seeAlso: ['fundamented_optimism', 'paranoia_score']
  },

  'net_score': {
    hscsgTerm: 'Net Score (OFER)',
    aliases: ['Score Neto OFER', 'Balance Mindset'],
    deprecatedTerms: [],
    definition: 'PronoiaScore - ParanoiaScore. Rango -100 a +100. Positivo = tendencia pronoia. Negativo = tendencia paranoia.',
    category: 'METRIC',
    relatedTerms: ['fundamented_optimism', 'paranoia_score', 'pronoia_score'],
    examples: ['Paranoia 78, Pronoia 35 → Net Score -43 (sesgo paranoia fuerte)'],
    seeAlso: ['fundamented_optimism', 'paranoia_score', 'pronoia_score']
  },

  // === ARQUITECTURA ===
  'soul_tier': {
    hscsgTerm: 'SOUL Tier',
    aliases: ['Tier SOUL', 'Nivel Autómata'],
    deprecatedTerms: [],
    definition: 'Nivel de autonomía asignado por MTP: EXPLORER → BUILDER → OPERATOR → MASTER → VISIONARY. Determina permisos, ritmos, ritmos de heartbeat, alcance de delegación.',
    category: 'ARCHITECTURE',
    relatedTerms: ['mtp_matrix', 'automaton', 'heartbeat', 'e2r_engine'],
    examples: ['Usuario MTP zona MAESTRÍA → SOUL Tier MASTER → delegación completa + mentoría'],
    seeAlso: ['mtp_matrix', 'automaton', 'heartbeat']
  },

  'anfibio_principle': {
    hscsgTerm: 'Principio Anfibio',
    aliases: ['Anfibio', 'Extirpar Infra / Conservar Lógica'],
    deprecatedTerms: [],
    definition: 'Principio rector asimilación: MISMA lógica opera en modo postmonetario (ZNU/CaaS, offline) o conectado (USD/USDC vía priceParity, Nivel 3 ReFi). EXTIRPAR infra ajena (Docker, Postgres, SaaS, blockchain), CONSERVAR lógica pura.',
    category: 'ARCHITECTURE',
    relatedTerms: ['price_parity', 'node_mode', 'znu', 'caas', 'fidelity'],
    examples: ['Asimilación OpenBot: extirpó Docker/Postgres/AG-UI, conservó gateway/policy/coworkers → Boundaries + Coworkers + 3 skills'],
    seeAlso: ['price_parity', 'node_mode', 'fidelity']
  },

  'price_parity': {
    hscsgTerm: 'Price Parity',
    aliases: ['Paridad de Precio', 'Oracle Multi-Oráculo'],
    deprecatedTerms: [],
    definition: 'Mecanismo de equivalencia valor: 1 TQ = 1 kWh = $USD vía oráculo multi-oráculo (Chainlink + Pyth + HSCSG custom) consenso 2/3. Fallback modo postmonetario si oráculo falla.',
    category: 'ECONOMICS',
    relatedTerms: ['tq', 'znu', 'anfibio_principle', 'oracle'],
    examples: ['1 TQ = 1 kWh = $0.12 USD (oráculo consenso 2/3). Fallback: modo ZNU puro'],
    seeAlso: ['tq', 'znu', 'anfibio_principle']
  },

  'node_mode': {
    hscsgTerm: 'Node Mode',
    aliases: ['Modo Nodo', 'Modo Operación'],
    deprecatedTerms: [],
    definition: 'Modo de operación del nodo: OFFLINE (ZNU/CaaS puro, priceParity disabled) ↔ CONNECTED (USD/USDC vía priceParity, Nivel 3 ReFi). Determina qué módulos activos y qué oráculos consultar.',
    category: 'ARCHITECTURE',
    relatedTerms: ['price_parity', 'anfibio_principle', 'znu', 'caas'],
    examples: ['Nodo ecoaldea remoto: nodeMode=OFFLINE → solo ZNU, pools locales, reconciliación off-grid'],
    seeAlso: ['price_parity', 'anfibio_principle', 'znu']
  },

  // === GOBERNANZA ===
  'council_of_three': {
    hscsgTerm: 'Consejo de Tres',
    aliases: ['Consejo 3', 'Gobernanza Tripartita'],
    deprecatedTerms: [],
    definition: 'Modelo gobernanza por defecto en células/civilizaciones: 3 consejeros rotativos, decisiones por consenso 2/3, veto triple (Ley MJ + Commonomics + FRNE). Sucesión: consejo elige sucesor.',
    category: 'GOVERNANCE',
    relatedTerms: ['cell', 'civilization', 'mj_gate', 'commonomics', 'frne'],
    examples: ['Célula 50 miembros → consejo 3 rotativo cada 90 días → decisiones 2/3'],
    seeAlso: ['cell', 'civilization', 'mj_gate']
  },

  'triple_veto': {
    hscsgTerm: 'Triple Veto',
    aliases: ['Veto Triple', 'Gobernanza 3 Vetos'],
    deprecatedTerms: [],
    definition: 'Mecanismo anti-captura: 3 vetos independientes deben alinearse para bloquear: 1) MJ Gate (ético) 2) Commonomics (económico) 3) FRNE (ecológico/regenerativo). Evita vetos cruzados que bloquean.',
    category: 'GOVERNANCE',
    relatedTerms: ['mj_gate', 'commonomics', 'frne', 'council_of_three'],
    examples: ['Propuesta pasa si NO hay veto unánime de los 3. 1 veto solo = alerta, no bloqueo.'],
    seeAlso: ['mj_gate', 'commonomics', 'frne']
  },

  'mj_gate': {
    hscsgTerm: 'MJ Gate',
    aliases: ['Gate MJ', 'Filtro Ético'],
    deprecatedTerms: [],
    definition: 'Primer veto del Triple Veto: filtro ético basado en 3 Leyes Materialismo Jerárquico. (I) No dañar base material/personas. (II) Ganarse vida soberanizando (ROI = ΔAUT/coste). (III) Lucidez material obligatoria (verdad cruda vs narrativa).',
    category: 'GOVERNANCE',
    relatedTerms: ['triple_veto', 'commonomics', 'frne', 'ley_1_mj', 'ley_2_mj', 'ley_3_mj'],
    examples: ['Propuesta que extrae valor sin regenerar base → MJ Gate bloquea (Ley I)'],
    seeAlso: ['triple_veto', 'ley_1_mj', 'ley_2_mj', 'ley_3_mj']
  },

  // === ECONOMÍA ===
  'tq': {
    hscsgTerm: 'TQ (Token Quántica)',
    aliases: ['Token Quántica', 'Unidad Energética'],
    deprecatedTerms: [],
    definition: 'Unidad base de valor HSCSG: 1 TQ = 1 kWh (invariante física). No especulativo, demurrage integrado. Puente entre físico (kWh) y económico (USD vía priceParity).',
    category: 'ECONOMICS',
    relatedTerms: ['price_parity', 'znu', 'kwh', 'demurrage'],
    examples: ['1 TQ = 1 kWh = $0.12 USD (priceParity). Demurrage 5%/mes incentiva circulación'],
    seeAlso: ['price_parity', 'znu', 'demurrage']
  },

  'znu': {
    hscsgTerm: 'ZNU (Unidad No-Especulativa)',
    aliases: ['Unidad No-Especulativa', 'Moneda Postmonetaria'],
    deprecatedTerms: [],
    definition: 'Unidad de cuenta postmonetaria con demurrage (decaimento programado). No almacena valor, mide flujo de valor regenerativo. Base para CaaS (Comunidad como Servicio).',
    category: 'ECONOMICS',
    relatedTerms: ['tq', 'demurrage', 'caas', 'price_parity'],
    examples: ['ZNU con demurrage 5%/mes → incentiva invertir en base material, no acumular'],
    seeAlso: ['tq', 'demurrage', 'caas', 'price_parity']
  },

  'demurrage': {
    hscsgTerm: 'Demurrage',
    aliases: ['Decaimento Programado', 'Tarifa Tenencia'],
    deprecatedTerms: [],
    definition: 'Tasa de decaimento programado de ZNU/TQ (ej: 5%/mes). Incentiva circulación e inversión en base material, desincentiva acumulación/tesorería. Opueso a interés compuesto.',
    category: 'ECONOMICS',
    relatedTerms: ['znu', 'tq', 'caas'],
    examples: ['Demurrage 5%/mes → 100 ZNU hoy = 95 ZNU en 1 mes → incentiva invertir en paneles solares'],
    seeAlso: ['znu', 'tq', 'caas']
  },

  'caas': {
    hscsgTerm: 'CaaS (Comunidad como Servicio)',
    aliases: ['Comunidad como Servicio', 'Community as a Service'],
    deprecatedTerms: [],
    definition: 'Modelo de acceso: no pagas con dinero, pagas con contribución real (código, cuidado, enseñanza, infraestructura). ZNU mide contribución. Acceso a recursos comunales por contribución verificada (RAO).',
    category: 'ECONOMICS',
    relatedTerms: ['znu', 'rao_verification', 'community_structure', 'land_trust'],
    examples: ['Acceso a panel solar comunitario: contribuir 10h/semana mantenimiento → ZNU generado → acceso energía'],
    seeAlso: ['znu', 'rao_verification', 'land_trust']
  },

  'frne': {
    hscsgTerm: 'FRNE (Fórmula Restitución No Especulativa)',
    aliases: ['Fórmula Restitución', 'Exit Formula'],
    deprecatedTerms: [],
    definition: 'R_neto = Inversión_inicial - Desgaste - Coste_restauración ± Beneficio_TQ - Tasa_salida. Pago 12-24 meses. Garantiza salida justa sin especulación. 3er veto del Triple Veto (ecológico/regenerativo).',
    category: 'ECONOMICS',
    relatedTerms: ['triple_veto', 'land_trust', 'znu', 'tq'],
    examples: ['Miembro sale tras 3 años: recupera inversión - desgaste + valor regenerado - tasa salida 5%'],
    seeAlso: ['triple_veto', 'land_trust', 'znu']
  },

  'land_trust': {
    hscsgTerm: 'Land Trust (Fideicomiso Comunitario)',
    aliases: ['Fideicomiso Comunitario', 'Tierra Colectiva'],
    deprecatedTerms: [],
    definition: 'Tierra colectiva/indivisible/inalienable. Usufructo ligado a membresía activa. No venta en mercado abierto. Base material inalienable para soberanía nodo.',
    category: 'ECONOMICS',
    relatedTerms: ['frne', 'caas', 'znu', 'cell', 'civilization'],
    examples: ['Ecoaldea 50ha en Land Trust: usufructo vitalicio por membresía activa, no vendible'],
    seeAlso: ['frne', 'caas', 'cell', 'civilization']
  },

  // === COMUNIDAD ===
  'cell': {
    hscsgTerm: 'Célula',
    aliases: ['Cell', 'Unidad Base Dunbar'],
    deprecatedTerms: [],
    definition: 'Unidad organizativa base: ≤150 miembros (límite Dunbar). Autonomía operativa, gobernanza Consejo de 3, pools bilaterales, rituales semanales. Escala atómica HSCSG.',
    category: 'COMMUNITY',
    relatedTerms: ['civilization', 'federation', 'council_of_three', 'dunbar_limit', 'bilateral_pool'],
    examples: ['Ecoaldea 80 miembros = 1 célula. 2 células = civilización incipiente.'],
    seeAlso: ['civilization', 'council_of_three', 'dunbar_limit']
  },

  'civilization': {
    hscsgTerm: 'Civilización',
    aliases: ['Civ', 'Federación de Células'],
    deprecatedTerms: [],
    definition: 'Federación de 2-10 células (150-1500 miembros). Coordina pools globales, infraestructura compartida, gobernanza federada, rituales estacionales (solsticios/equinoccios).',
    category: 'COMMUNITY',
    relatedTerms: ['cell', 'federation', 'global_pool', 'seasonal_gatherings'],
    examples: ['3 ecoaldeas vecinas (240 miembros) = civilización → pool global energía + water + comms'],
    seeAlso: ['cell', 'federation', 'global_pool']
  },

  'federation': {
    hscsgTerm: 'Federación',
    aliases: ['Fed', 'Red de Civilizaciones'],
    deprecatedTerms: [],
    definition: 'Red de civilizaciones (1500+ miembros). Coordina: priceParity global, reconciliation off-grid, norm gossip (CRDT), skill marketplace, land trust global. Soberanía local preservada.',
    category: 'COMMUNITY',
    relatedTerms: ['civilization', 'price_parity', 'reconciliation', 'norm_gossip', 'skill_marketplace'],
    examples: ['Federación 5 civilizaciones (8000 miembros) → priceParity global + skill marketplace inter-civ'],
    seeAlso: ['civilization', 'price_parity', 'reconciliation', 'skill_marketplace']
  },

  'dunbar_limit': {
    hscsgTerm: 'Límite Dunbar',
    aliases: ['Número Dunbar', '150'],
    deprecatedTerms: [],
    definition: 'Límite cognitivo ~150 relaciones estables. Tamaño máximo de célula. Base biológica para escalado HSCSG: célula ≤150, civilización ≤1500 (10×Dunbar).',
    category: 'COMMUNITY',
    relatedTerms: ['cell', 'civilization', 'federation'],
    examples: ['Célula crece a 160 → fisión obligatoria en 2 células de ~80'],
    seeAlso: ['cell', 'civilization']
  },

  'bilateral_pool': {
    hscsgTerm: 'Pool Bilateral',
    aliases: ['Pool Bilateral', 'Acuerdo Pares'],
    deprecatedTerms: [],
    definition: 'Acuerdo de intercambio entre 2 células/civilizaciones. No afecta pool global. Límites negociados. Base para comercio inter-nodo sin intermediarios.',
    category: 'COMMUNITY',
    relatedTerms: ['global_pool', 'cell', 'civilization', 'reconciliation'],
    examples: ['Célula A (energía) ↔ Célula B (agua) → pool bilateral 100 TQ/mes cada dirección'],
    seeAlso: ['global_pool', 'cell', 'reconciliation']
  },

  'global_pool': {
    hscsgTerm: 'Pool Global',
    aliases: ['Pool Multilateral', 'Pool Compartido'],
    deprecatedTerms: [],
    definition: 'Pool de recursos compartido entre todas las células de una civilización/federación. Tipos: energía, agua, commons, talento, capital. Tipo pool_type: global/bilateral. Sin filtrar counterpart.',
    category: 'COMMUNITY',
    relatedTerms: ['bilateral_pool', 'civilization', 'federation', 'basket'],
    examples: ['Civilización 3 células → pool global energía: cada célula aporta 30%, retira según necesidad'],
    seeAlso: ['bilateral_pool', 'civilization', 'basket']
  },

  'basket': {
    hscsgTerm: 'Canasta Básica Federada',
    aliases: ['Canasta Básica', 'Canasta Federada'],
    deprecatedTerms: [],
    definition: 'Conjunto mínimo de bienes/servicios garantizados por federación. Consenso 100% requerido para cambios. 500 TQ base por miembro/mes. Items: energía, agua, comida, commons, salud, educación.',
    category: 'ECONOMICS',
    relatedTerms: ['global_pool', 'federation', 'cultural_profiles', 'approval_threshold'],
    examples: ['Canasta: 500 TQ base incluye 100 TQ energía + 100 agua + 100 comida + 100 commons + 100 salud'],
    seeAlso: ['global_pool', 'federation', 'cultural_profiles']
  },

  'reconciliation': {
    hscsgTerm: 'Reconciliación Off-Grid',
    aliases: ['Reconexión', 'Sync Off-Grid'],
    deprecatedTerms: [],
    definition: 'Protocolo de sincronización tras partición de red: comparar last_hash, intercambiar divergencias, verificar firmas duales + hashes. Hash chain inmutable. Base para federación resiliente.',
    category: 'TECHNICAL',
    relatedTerms: ['federation', 'hash_chain', 'dual_signatures', 'off_grid'],
    examples: ['Nodo off-grid 3 meses → reconecta → last_hash coincide → intercambia 47 transacciones → verifica 94 firmas → merge'],
    seeAlso: ['federation', 'hash_chain', 'dual_signatures']
  },

  'norm_gossip': {
    hscsgTerm: 'Norm Gossip (CRDT)',
    aliases: ['Gossip Normas', 'CRDT Normas'],
    deprecatedTerms: [],
    definition: 'Flujo descentralizado de normas/prohibiciones via gossip protocol (60s interval). CRDT para convergencia eventual. Auto-aprobación opcional. Independencia local preservada.',
    category: 'TECHNICAL',
    relatedTerms: ['federation', 'crdt', 'gossip_protocol', 'autonomy'],
    examples: ['Nueva norma "no plásticos" → gossip 60s → todas las células convergen en 5 min → auto-aplican'],
    seeAlso: ['federation', 'crdt', 'autonomy']
  },

  'skill_marketplace': {
    hscsgTerm: 'Skill Marketplace',
    aliases: ['Marketplace Skills', 'Mercado Habilidades'],
    deprecatedTerms: [],
    definition: 'Marketplace local de skills Hermes: registry git, semver, `hermes skill install <url>`. Skills firmados por tribu, sandbox QuickJS/WASM, capacidades declarativas, timeout configurable.',
    category: 'TECHNICAL',
    relatedTerms: ['hermes_skill', 'wasm_runtime', 'quickjs', 'git_registry', 'semver'],
    examples: ['`hermes skill install github.com/isaacko0/hscsg-mtp-skill` → instala skill MTP en autómata local'],
    seeAlso: ['hermes_skill', 'wasm_runtime', 'git_registry']
  },

  // === TÉCNICO ===
  'e2r_engine': {
    hscsgTerm: 'E²R Engine (Explore→Execute→Reflect)',
    aliases: ['E²R', 'Explore-Execute-Reflect', 'Loop Autómata'],
    deprecatedTerms: [],
    definition: 'Motor principal autómata: 3 fases cíclicas. EXPLORE (descubrir opciones, investigar) → EXECUTE (acción concreta, medir) → REFLECT (analizar resultado, actualizar modelo, decidir siguiente). Heartbeat cada ciclo.',
    category: 'TECHNICAL',
    relatedTerms: ['automaton', 'heartbeat', 'soul_tier', 'guided_autonomous'],
    examples: ['Ciclo E²R cada 15 min: EXPLORE (buscar mejor ruta) → EXECUTE (ejecutar paso) → REFLECT (medir outcome, actualizar MTP)'],
    seeAlso: ['automaton', 'heartbeat', 'soul_tier', 'guided_autonomous']
  },

  'heartbeat': {
    hscsgTerm: 'Heartbeat',
    aliases: ['Latido', 'Ciclo Base'],
    deprecatedTerms: [],
    definition: 'Pulso temporal base del autómata. Cada N minutos (configurable por SOUL Tier): ejecuta ciclo E²R, verifica health, sincroniza estado, emite eventos. Base temporal de toda la arquitectura.',
    category: 'TECHNICAL',
    relatedTerms: ['e2r_engine', 'soul_tier', 'automaton', 'automaton_config'],
    examples: ['SOUL Tier MASTER: heartbeat 5 min. EXPLORER: heartbeat 60 min.'],
    seeAlso: ['e2r_engine', 'soul_tier', 'automaton_config']
  },

  'lucidez_toggle': {
    hscsgTerm: 'Lucidez Toggle',
    aliases: ['Modo Lucidez', 'Toggle Lucidez'],
    deprecatedTerms: [],
    definition: '3 niveles de transparencia en UI: FULL (todo visible) / SEMANTIC (resúmenes + fuentes) / RAW (datos crudos, provenance, bloques .lucidez-raw). Botón sol/luna en header CoachFAB. Cache strategy por bloque.',
    category: 'TECHNICAL',
    relatedTerms: ['coach_fab', 'raw_blocks', 'provenance', 'lucidez_raw'],
    examples: ['Usuario activa modo RAW → ve provenance blocks + raw data + decision trail completo'],
    seeAlso: ['coach_fab', 'raw_blocks', 'provenance']
  },

  'rao_verification': {
    hscsgTerm: 'RAO Verification (Triaxial)',
    aliases: ['Verificación RAO', 'RAO Triaxial'],
    deprecatedTerms: [],
    definition: 'Verificación triaxial de hechos: 1) RAO (ERC-8004 + IPFS) — registro inmutable 2) MJ Gate (veto ético) 3) Cross-check (coworkers + autómata). Solo hechos que pasan los 3 entran en MemoryStore.',
    category: 'TECHNICAL',
    relatedTerms: ['memory_store', 'erc8004', 'ipfs', 'mj_gate', 'cross_check'],
    examples: ['Hecho "Usuario completó MTP" → RAO entry + MJ Gate pass + Cross-check 2 coworkers → persistido'],
    seeAlso: ['memory_store', 'mj_gate', 'cross_check', 'erc8004']
  },

  'cross_check': {
    hscsgTerm: 'Cross-Check (Coworkers + Autómata)',
    aliases: ['Verificación Cruzada', 'Validación Múltiple'],
    deprecatedTerms: [],
    definition: '3er eje de RAO Verification: 2+ coworkers + autómata validan independientemente el hecho. Consenso 2/3 requerido. Previene alucinaciones y sesgos individuales.',
    category: 'TECHNICAL',
    relatedTerms: ['rao_verification', 'coworker', 'automaton', 'consensus'],
    examples: ['Hecho validado: Coworker A ✓ + Coworker B ✓ + Autómata ✓ = consenso 3/3 → confirmado'],
    seeAlso: ['rao_verification', 'coworker', 'automaton', 'consensus']
  },

  'wasm_runtime': {
    hscsgTerm: 'WASM/QuickJS Runtime',
    aliases: ['WASM Runtime', 'QuickJS Sandbox', 'Skill Runtime'],
    deprecatedTerms: ['.nfcpkg'],
    definition: 'Sandbox de ejecución para skills Hermes: QuickJS/WASM, timeout configurable, capacidades declarativas (fs, net, cpu, memory), firmado por tribu. Evolución de .nfcpkg.',
    category: 'TECHNICAL',
    relatedTerms: ['skill_marketplace', 'hermes_skill', 'quickjs', 'capabilities', 'sandbox'],
    examples: ['Skill instalado → ejecuta en QuickJS sandbox → timeout 30s → capabilities: fs:read, net:https://api.github.com'],
    seeAlso: ['skill_marketplace', 'hermes_skill', 'quickjs', 'capabilities']
  },

  // === CONCEPTOS BASE ===
  'automaton': {
    hscsgTerm: 'Autómata',
    aliases: ['Automaton', 'Agente Soberano'],
    deprecatedTerms: [],
    definition: 'Entidad autónoma ejecutable: SOUL (identidad + tiers + heartbeat) + E²R (motor) + MJ Gate (filtro) + Spawn (delegación). Corre en cliente (offline-first), estado en Zustand + localStorage. Anfibio: offline ZNU ↔ conectado USD.',
    category: 'ARCHITECTURE',
    relatedTerms: ['soul_tier', 'e2r_engine', 'heartbeat', 'mj_gate', 'spawn', 'anfibio_principle'],
    examples: ['Autómata usuario: SOUL Tier MASTER → heartbeat 5min → E²R activo → MJ Gate estricto → puede spawn 5 coworkers'],
    seeAlso: ['soul_tier', 'e2r_engine', 'heartbeat', 'mj_gate', 'anfibio_principle']
  },

  'spawn': {
    hscsgTerm: 'Spawn (Delegación Autómata)',
    aliases: ['Delegación', 'Spawn Coworker'],
    deprecatedTerms: [],
    definition: 'Mecanismo por el cual un autómata instancia coworker especializado para tarea. Hereda SOUL Tier -1, permisos limitados, reporte automático. Autómata MASTER puede spawnear hasta 5 coworkers simultáneos.',
    category: 'TECHNICAL',
    relatedTerms: ['automaton', 'coworker', 'soul_tier', 'delegation'],
    examples: ['Autómata spawnea coworker RESEARCHER para "investigar competidores" → 30 min → reporte estructurado'],
    seeAlso: ['automaton', 'coworker', 'delegation']
  },

  'coworker': {
    hscsgTerm: 'Coworker (Agente Especializado)',
    aliases: ['Agente Especializado', 'Coworker'],
    deprecatedTerms: [],
    definition: 'Agente con rol standing (STRATEGIST, CREATIVE_DIRECTOR, CLOSER, MEDIA_BUYER, SCOUT, QA_LEAD + 8 roles OpenExecutive). Estado persistente, memoria propia, delegación via MGA. Discord adapter opcional.',
    category: 'ARCHITECTURE',
    relatedTerms: ['automaton', 'spawn', 'mga', 'coworker_role', 'discord_adapter'],
    examples: ['Coworker STRATEGIST: analiza mercado, propone estrategia → autómata aprueba → spawn EXECUTOR'],
    seeAlso: ['automaton', 'spawn', 'mga', 'coworker_role']
  },

  'memory_store': {
    hscsgTerm: 'MemoryStore (RAO-Backed)',
    aliases: ['MemoryStore', 'Almacén Memoria', 'RAO Store'],
    deprecatedTerms: [],
    definition: 'Almacén memoria con validación RAO triaxial. Solo hechos verificados (RAO + MJ Gate + Cross-check) persisten. IndexedDB local + sync opcional. Contrato: write → validate_fact → persist.',
    category: 'TECHNICAL',
    relatedTerms: ['rao_verification', 'memory_runtime', 'validate_fact', 'indexeddb'],
    examples: ['writeFact("user.completed_mtp") → RAO✓ + MJ✓ + Cross✓ → persistido en IndexedDB'],
    seeAlso: ['rao_verification', 'validate_fact', 'indexeddb']
  },

  'validate_fact': {
    hscsgTerm: 'Validate Fact (Triaxial)',
    aliases: ['Validar Hecho', 'Validación Triaxial'],
    deprecatedTerms: [],
    definition: 'Función gatekeeper en MemoryStore: ejecuta RAO Verification completa antes de persistir. Rechaza hechos no verificables. Retorna {valid: boolean, proof: RAOProof}.',
    category: 'TECHNICAL',
    relatedTerms: ['memory_store', 'rao_verification', 'rao_proof'],
    examples: ['validateFact(fact) → {valid: true, proof: {rao: "...", mj: true, cross: ["coworker_a", "automaton"]}}'],
    seeAlso: ['memory_store', 'rao_verification', 'rao_proof']
  },

  // === OPERACIONES ===
  'seasonal_gatherings': {
    hscsgTerm: 'Encuentros Estacionales',
    aliases: ['Solsticios/Equinoccios', 'Rituales Estacionales'],
    deprecatedTerms: [],
    definition: '4 encuentros/año (solsticios/equinoccios) sincronizando: pools globales, intercambio semillas, rituales, actas. Sincroniza federaciones. Base temporal organizativa.',
    category: 'OPERATIONS',
    relatedTerms: ['federation', 'civilization', 'global_pool', 'ritual'],
    examples: ['Equinoccio primavera: sync pools globales + intercambio semillas + acta gobernanza'],
    seeAlso: ['federation', 'civilization', 'global_pool']
  },

  'skill_registry': {
    hscsgTerm: 'Skill Registry',
    aliases: ['Registro Skills', 'Catálogo Skills'],
    deprecatedTerms: [],
    definition: 'Carga skills desde directorios SKILL.md, renderiza prompt index, versionado semver. Base para `hermes skill install <url>`.',
    category: 'TECHNICAL',
    relatedTerms: ['hermes_skill', 'skill_marketplace', 'semver', 'git_registry'],
    examples: ['SkillRegistry.load("skills/") → 47 skills cargadas → index prompt generado'],
    seeAlso: ['hermes_skill', 'skill_marketplace', 'semver']
  },

  // === UTILIDADES ===
  'deprecated': {
    hscsgTerm: 'DEPRECADO (No Usar)',
    aliases: ['OBSOLETO', 'PROHIBIDO'],
    deprecatedTerms: [],
    definition: 'Marcador para términos que NO deben usarse en código/docs/UI HSCSG. Generalmente: términos propietarios de terceros, ambiguos, o reemplazados por equivalente canónico HSCSG.',
    category: 'TECHNICAL',
    relatedTerms: ['hscsg_term', 'canonical'],
    examples: ['"Cuadrantes de Superpoderes" → DEPRECADO → usar "Matriz Talento-Propósito (MTP)"'],
    seeAlso: ['hscsg_term', 'canonical']
  }
};

/**
 * Obtiene término canónico HSCSG
 */
export function getCanonicalTerm(key: string): string {
  const entry = TRIBAL_VOCAB[key];
  return entry?.hscsgTerm || key;
}

/**
 * Verifica si término está deprecado
 */
export function isDeprecated(term: string): boolean {
  for (const entry of Object.values(TRIBAL_VOCAB)) {
    if (entry.deprecatedTerms.includes(term)) return true;
  }
  return false;
}

/**
 * Sugiere término canónico para término deprecado
 */
export function suggestCanonical(term: string): string | null {
  for (const [key, entry] of Object.entries(TRIBAL_VOCAB)) {
    if (entry.deprecatedTerms.includes(term)) {
      return entry.hscsgTerm;
    }
  }
  return null;
}

/**
 * Busca términos por categoría
 */
export function getTermsByCategory(category: TermCategory): TermEntry[] {
  return Object.values(TRIBAL_VOCAB).filter(e => e.category === category);
}

/**
 * Valida texto contra vocabulario (detecta términos deprecados)
 */
export function validateText(text: string): { clean: boolean; deprecated: string[]; suggestions: Record<string, string> } {
  const deprecated: string[] = [];
  const suggestions: Record<string, string> = {};
  
  for (const entry of Object.values(TRIBAL_VOCAB)) {
    for (const dep of entry.deprecatedTerms) {
      if (text.toLowerCase().includes(dep.toLowerCase())) {
        deprecated.push(dep);
        suggestions[dep] = entry.hscsgTerm;
      }
    }
  }
  
  return {
    clean: deprecated.length === 0,
    deprecated,
    suggestions
  };
}

/**
 * Genera glosario markdown para docs
 */
export function generateGlossaryMarkdown(): string {
  const byCategory = Object.values(TRIBAL_VOCAB).reduce((acc, entry) => {
    if (!acc[entry.category]) acc[entry.category] = [];
    acc[entry.category].push(entry);
    return acc;
  }, {} as Record<TermCategory, TermEntry[]>);
  
  let md = '# Glosario Tribular HSCSG — Vocabulario Canónico\n\n';
  md += '_Única fuente de verdad para terminología en código, docs, UI. Términos deprecados = NO usar._\n\n';
  
  const categoryOrder: TermCategory[] = [
    'FRAMEWORK', 'MINDSET', 'ARCHITECTURE', 'ECONOMICS', 
    'GOVERNANCE', 'COMMUNITY', 'TECHNICAL', 'OPERATIONS', 'METRIC'
  ];
  
  for (const cat of categoryOrder) {
    const entries = byCategory[cat] || [];
    if (entries.length === 0) continue;
    
    md += `## ${cat}\n\n`;
    
    for (const entry of entries) {
      md += `### ${entry.hscsgTerm}\n`;
      md += `**Definición:** ${entry.definition}\n\n`;
      
      if (entry.aliases.length) {
        md += `**Alias:** ${entry.aliases.join(', ')}\n\n`;
      }
      
      if (entry.deprecatedTerms.length) {
        md += `**❌ NO usar:** ${entry.deprecatedTerms.map(t => `\`${t}\``).join(', ')}\n\n`;
      }
      
      if (entry.examples.length) {
        md += `**Ejemplos:**\n${entry.examples.map(e => `- ${e}`).join('\n')}\n\n`;
      }
      
      if (entry.seeAlso.length) {
        md += `**Ver también:** ${entry.seeAlso.map(s => `\`${s}\``).join(', ')}\n\n`;
      }
      
      md += '---\n\n';
    }
  }
  
  return md;
}

/**
 * Exporta vocabulario para uso en CI/linting
 */
export const VOCAB_FOR_LINTING = {
  canonicalTerms: Object.values(TRIBAL_VOCAB).map(e => e.hscsgTerm),
  deprecatedTerms: Object.values(TRIBAL_VOCAB).flatMap(e => e.deprecatedTerms),
  termMap: Object.fromEntries(
    Object.values(TRIBAL_VOCAB).flatMap(e => 
      e.deprecatedTerms.map(d => [d, e.hscsgTerm])
    )
  )
};