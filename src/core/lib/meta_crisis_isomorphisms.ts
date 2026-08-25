// Meta-Crisis Isomorphisms Data — Meta-Crisis ↔ HSCSG v15 OS
// Source: https://metacrisis.org (Obsidian Publish, Kyle Kowalski)
// Last updated: 2026-08-22

export interface MetaCrisisIsomorphism {
  id: string;
  metaCrisisConcept: string;
  hscgConcept: string;
  isomorphism: string;
  hscgModule: string;
  hscgLaws: ('ley-i' | 'ley-ii' | 'ley-iii')[];
}

export const META_CRISIS_ISOMORPHISMS: MetaCrisisIsomorphism[] = [
  {
    id: 'metacrisis-civilization',
    metaCrisisConcept: 'Meta-Crisis',
    hscgConcept: 'Crisis de civilización (HSCSG §1)',
    isomorphism: 'Interlocking existential risks = dependencia estructurada',
    hscgModule: 'lib/civilizaciones.ts',
    hscgLaws: ['ley-i', 'ley-ii', 'ley-iii']
  },
  {
    id: 'meaning-crisis',
    metaCrisisConcept: 'Meaning Crisis',
    hscgConcept: 'Crisis de sentido (Ley III MJ)',
    isomorphism: 'Wisdom cultivation = Lucidez cultivation',
    hscgModule: 'lib/wisdom.ts',
    hscgLaws: ['ley-iii']
  },
  {
    id: 'game-a-b',
    metaCrisisConcept: 'Game A → Game B',
    hscgConcept: 'Extractivo → Regenerativo (HSCSG §1)',
    isomorphism: 'Post-monetary transition',
    hscgModule: 'lib/game_b.ts',
    hscgLaws: ['ley-ii']
  },
  {
    id: 'sensemaking',
    metaCrisisConcept: 'Sensemaking',
    hscgConcept: 'Autómata E²R + Lucidez',
    isomorphism: 'Relevance realization = E²R tree search',
    hscgModule: 'lib/automaton.ts',
    hscgLaws: ['ley-iii']
  },
  {
    id: 'liminal-web',
    metaCrisisConcept: 'Liminal Web',
    hscgConcept: 'Vasos Comunicantes',
    isomorphism: 'Network of networks',
    hscgModule: 'lib/vasos.ts',
    hscgLaws: ['ley-ii']
  },
  {
    id: 'wisdom-web',
    metaCrisisConcept: 'Wisdom Web',
    hscgConcept: 'CoachFAB + Coworkers',
    isomorphism: 'Wisdom cultivation tools',
    hscgModule: 'lib/wisdom.ts',
    hscgLaws: ['ley-iii']
  },
  {
    id: 'emergentsia',
    metaCrisisConcept: 'Emergentsia',
    hscgConcept: 'Civilizaciones (HSCSG §17)',
    isomorphism: 'Post-monetary communities',
    hscgModule: 'lib/civilizaciones.ts',
    hscgLaws: ['ley-ii']
  },
  {
    id: 'metamodernity',
    metaCrisisConcept: 'Metamodernity',
    hscgConcept: 'Sistema Alráico (G1-CARMIS)',
    isomorphism: 'Developmental, integrative',
    hscgModule: 'lib/integral.ts',
    hscgLaws: ['ley-ii', 'ley-iii']
  },
  {
    id: 'collective-intelligence',
    metaCrisisConcept: 'Collective Intelligence',
    hscgConcept: 'CDS + Autómata',
    isomorphism: 'Collaborative decision-making',
    hscgModule: 'lib/democracia.ts',
    hscgLaws: ['ley-ii']
  },
  {
    id: 'anti-fragile',
    metaCrisisConcept: 'Anti-fragile Civilization',
    hscgConcept: 'CaaS-BM + ZNU',
    isomorphism: 'Resilient economic systems',
    hscgModule: 'lib/caas.ts',
    hscgLaws: ['ley-ii']
  },
  {
    id: 'existential-risk',
    metaCrisisConcept: 'Existential Risk',
    hscgConcept: 'Ley I MJ (no dañar)',
    isomorphism: 'Harm prevention, fail-closed',
    hscgModule: 'lib/boundaries.ts',
    hscgLaws: ['ley-i']
  },
  {
    id: 'governance-design',
    metaCrisisConcept: 'Governance Design',
    hscgConcept: 'CDS + MJ Laws',
    isomorphism: 'Sovereign governance',
    hscgModule: 'lib/governance.ts',
    hscgLaws: ['ley-ii', 'ley-iii']
  },
  {
    id: 'cultural-transformation',
    metaCrisisConcept: 'Cultural Transformation',
    hscgConcept: 'Fondo Solarpunk + Cosatecas',
    isomorphism: 'Regenerative culture',
    hscgModule: 'lib/solarpunk.ts',
    hscgLaws: ['ley-ii']
  },
  {
    id: 'indigenous-thinking',
    metaCrisisConcept: 'Indigenous Thinking',
    hscgConcept: 'Base Material + Tekitl',
    isomorphism: 'Territorial knowledge',
    hscgModule: 'lib/celulas.ts',
    hscgLaws: ['ley-i']
  },
  {
    id: 'gift-economy',
    metaCrisisConcept: 'Gift Economy',
    hscgConcept: 'ZNU + ValueFlows',
    isomorphism: 'Post-monetary exchange',
    hscgModule: 'lib/valueflows.ts',
    hscgLaws: ['ley-ii']
  },
  {
    id: 'vertical-development',
    metaCrisisConcept: 'Vertical Development',
    hscgConcept: '13 Pilares × 7 Capas',
    isomorphism: 'Developmental matrix',
    hscgModule: 'lib/celulas.ts',
    hscgLaws: ['ley-ii']
  },
  {
    id: 'integral-theory',
    metaCrisisConcept: 'Integral Theory',
    hscgConcept: 'Sistema Alráico (8 caras)',
    isomorphism: 'Holistic framework',
    hscgModule: 'lib/integral.ts',
    hscgLaws: ['ley-ii', 'ley-iii']
  },
  {
    id: 'complexity-science',
    metaCrisisConcept: 'Complexity Science',
    hscgConcept: 'loopEngine (6 loops)',
    isomorphism: 'Systems dynamics',
    hscgModule: 'lib/loopEngine.ts',
    hscgLaws: ['ley-ii', 'ley-iii']
  }
];

export const META_CRISIS_ISOMORPHISMS_MAP: Record<string, MetaCrisisIsomorphism> = {};
META_CRISIS_ISOMORPHISMS.forEach(i => {
  META_CRISIS_ISOMORPHISMS_MAP[i.id] = i;
});

export function getIsomorphismsByModule(module: string): MetaCrisisIsomorphism[] {
  return META_CRISIS_ISOMORPHISMS.filter(i => i.hscgModule === module);
}

export function getIsomorphismsByLaw(law: 'ley-i' | 'ley-ii' | 'ley-iii'): MetaCrisisIsomorphism[] {
  return META_CRISIS_ISOMORPHISMS.filter(i => i.hscgLaws.includes(law));
}

export function getIsomorphismCount(): number {
  return META_CRISIS_ISOMORPHISMS.length;
}
