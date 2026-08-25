// Meta-Crisis Key Concepts Data
// Source: https://metacrisis.org (Obsidian Publish, Kyle Kowalski)
// Last updated: 2026-08-22

export interface MetaCrisisConcept {
  id: string;
  name: string;
  definition: string;
  keyPeople: string[];
  keyProjects: string[];
  hscgMapping: string;
  hscgModule: string;
}

export const META_CRISIS_CONCEPTS: MetaCrisisConcept[] = [
  {
    id: 'meta-crisis',
    name: 'Meta-Crisis',
    definition: 'The interlocking, interrelated existential risks facing humanity: ecological collapse, geopolitical instability, economic fragility, technological disruption, meaning crisis, and systemic fragility. The meta-crisis is not a single crisis but the crisis of crises — the systemic pattern that generates and amplifies all other crises.',
    keyPeople: ['Daniel Schmachtenberger', 'Kyle Kowalski', 'Jonathan Rowson'],
    keyProjects: ['The Consilience Project', 'Game B', 'Life Itself', 'Emerge'],
    hscgMapping: 'Crisis de civilización (HSCSG §1), dependencia estructurada',
    hscgModule: 'lib/civilizaciones.ts'
  },
  {
    id: 'meaning-crisis',
    name: 'Meaning Crisis',
    definition: 'A crisis of wisdom cultivation. The monasteries are gone, the commodification of schools dilutes education to mere preparation for uncertain labor markets. Where do we go for wisdom? The meaning crisis is the loss of frameworks for meaning-making, purpose, and coherent identity.',
    keyPeople: ['John Vervaeke', 'Zak Stein', 'Charles Eisenstein'],
    keyProjects: ['Awakening from the Meaning Crisis', 'Rebel Wisdom', 'Sloww'],
    hscgMapping: 'Crisis de sentido (Ley III MJ), Lucidez cultivation',
    hscgModule: 'lib/wisdom.ts'
  },
  {
    id: 'game-b',
    name: 'Game B',
    definition: 'A new social operating system for humanity. Game A is what got us to this time of metacrisis and collapse. Game B is what emerges in response. It is an anti-fragile, scalable, increasingly omni-win-win civilization — distinct from our current rivalrous Game A civilization replete with destructive externalities and power asymmetries producing existential risk. Game B is not a prescriptive ideology but a modus operandi.',
    keyPeople: ['Jim Rutt', 'Daniel Schmachtenberger', 'Jordan Hall'],
    keyProjects: ['Game B', 'The Consilience Project', 'The Jim Rutt Show'],
    hscgMapping: 'Post-monetary civilization, HSCSG Game B mapping, Extractivo → Regenerativo',
    hscgModule: 'lib/game_b.ts'
  },
  {
    id: 'sensemaking',
    name: 'Sensemaking',
    definition: 'The process of creating meaning from complex, ambiguous, and interconnected information. In the meta-crisis context, sensemaking is the capacity to understand the systemic nature of our challenges and to orient toward effective action within complexity.',
    keyPeople: ['John Vervaeke', 'Dave Snowden', 'Joe Lightfoot'],
    keyProjects: ['Awakening from the Meaning Crisis', 'Life Itself', 'Emerge'],
    hscgMapping: 'Autómata E²R + Lucidez, relevance realization',
    hscgModule: 'lib/automaton.ts'
  },
  {
    id: 'liminal-web',
    name: 'Liminal Web',
    definition: 'An emergent subculture of sensemakers, meta-theorists, and systems poets navigating the threshold between worlds. Also called the wisdom web, meaning web, intellectual dark web, emergentsia, or metatribe. It is the network of individuals and projects working at the edges of civilizational transformation.',
    keyPeople: ['Joe Lightfoot', 'Peter Limberg', 'Kyle Kowalski'],
    keyProjects: ['Life Itself', 'Emerge', 'Sloww'],
    hscgMapping: 'Vasos Comunicantes, network of networks',
    hscgModule: 'lib/vasos.ts'
  },
  {
    id: 'emergentsia',
    name: 'Emergentsia',
    definition: 'The rise of meaning-makers in a time between worlds. A new class of thinkers, creators, and activists who are articulating the patterns of the emerging civilization while the old one disintegrates.',
    keyPeople: ['Brent Cooper', 'Jonathan Rowson', 'Alexander Beiner'],
    keyProjects: ['Emerge', 'Perspectiva', 'Rebel Wisdom'],
    hscgMapping: 'Civilizaciones (HSCSG §17), post-monetary communities',
    hscgModule: 'lib/civilizaciones.ts'
  },
  {
    id: 'metamodernity',
    name: 'Metamodernity',
    definition: 'A cultural sensibility that integrates modern optimism and postmodern skepticism into a constructive, developmental, and politically engaged framework. It is the "next step" after modernity and postmodernity, characterized by irony, hope, and pragmatic utopianism.',
    keyPeople: ['Hanzi Freinacht', 'Lene Rachel Andersen', 'Tomas Björkman', 'Jonathan Rowson'],
    keyProjects: ['Metamoderna', 'Emerge', 'Perspectiva'],
    hscgMapping: 'Sistema Alráico (G1-CARMIS), developmental politics',
    hscgModule: 'lib/integral.ts'
  },
  {
    id: 'collective-intelligence',
    name: 'Collective Intelligence',
    definition: 'The capacity of groups to make decisions, solve problems, and create meaning that exceeds the capacity of any individual. In the meta-crisis, collective intelligence is both the means and the end — we need collective intelligence to solve collective action problems, and the development of collective intelligence is itself a transformation in human capability.',
    keyPeople: ['Jordan Hall', 'Daniel Schmachtenberger', 'Dave Snowden'],
    keyProjects: ['Game B', 'The Consilience Project', 'The Jim Rutt Show'],
    hscgMapping: 'CDS + Autómata, collaborative decision-making',
    hscgModule: 'lib/democracia.ts'
  },
  {
    id: 'anti-fragile-civilization',
    name: 'Anti-fragile Civilization',
    definition: 'A civilization that gains from disorder, volatility, and shocks — the opposite of our current hyper-fragile global system. An anti-fragile civilization is scalable, resilient, and omni-win-win, producing positive-sum outcomes for all participants.',
    keyPeople: ['Jim Rutt', 'Daniel Schmachtenberger', 'Jordan Hall'],
    keyProjects: ['Game B', 'The Consilience Project'],
    hscgMapping: 'CaaS-BM + ZNU, resilient economic systems',
    hscgModule: 'lib/caas.ts'
  },
  {
    id: 'existential-risk',
    name: 'Existential Risk',
    definition: 'Risks that threaten the extinction of humanity or the permanent destruction of its potential. Includes nuclear war, climate change, pandemics, unaligned artificial intelligence, and other catastrophic risks.',
    keyPeople: ['Daniel Schmachtenberger', 'Tristan Harris', 'Nate Hagens'],
    keyProjects: ['The Consilience Project', 'Center for Humane Technology', 'Future of Life Institute'],
    hscgMapping: 'Ley I MJ (no dañar), harm prevention, fail-closed',
    hscgModule: 'lib/boundaries.ts'
  },
  {
    id: 'governance-design',
    name: 'Governance Design',
    definition: 'The intentional redesign of social systems and institutions to address the meta-crisis. Creating governance structures that are resilient, adaptive, participatory, and capable of handling complexity.',
    keyPeople: ['Daniel Schmachtenberger', 'Jordan Hall', 'Jonathan Rowson'],
    keyProjects: ['The Consilience Project', 'Game B', 'Perspectiva'],
    hscgMapping: 'CDS + MJ Laws, sovereign governance',
    hscgModule: 'lib/governance.ts'
  },
  {
    id: 'cultural-transformation',
    name: 'Cultural Transformation',
    definition: 'The shift in views, values, beliefs, and practices that underlie our collective way of being. Real change requires working, and even living, together — creating co-living spaces and businesses, and engaging in politics and social change.',
    keyPeople: ['Tomas Björkman', 'Charles Eisenstein', 'Jamie Wheal'],
    keyProjects: ['Life Itself', 'Emerge', 'Metamoderna'],
    hscgMapping: 'Fondo Solarpunk + Cosatecas, regenerative culture',
    hscgModule: 'lib/solarpunk.ts'
  },
  {
    id: 'indigenous-thinking',
    name: 'Indigenous Thinking',
    definition: 'Knowledge systems rooted in place, relationship, and reciprocity with the land. Indigenous thinking offers alternatives to extractive, linear, and mechanistic paradigms — emphasizing circularity, intergenerational responsibility, and living systems.',
    keyPeople: ['Tyson Yunkaporta', 'Bayo Akomolafe', 'Nora Bateson'],
    keyProjects: ['Sand Talk', 'Raising Free People', 'Science & Nonduality (SAND)'],
    hscgMapping: 'Base Material + Tekitl, territorial knowledge',
    hscgModule: 'lib/celulas.ts'
  },
  {
    id: 'gift-economy',
    name: 'Gift Economy',
    definition: 'An economic system based on reciprocity, trust, and social bonds rather than explicit exchange or money. In a gift economy, value flows through relationships and reputation, creating abundance through circulation rather than accumulation.',
    keyPeople: ['Charles Eisenstein', 'Daniel Schmachtenberger', 'Jamie Wheal'],
    keyProjects: ['Sacred Economics', 'Game B', 'Life Itself'],
    hscgMapping: 'ZNU + ValueFlows, post-monetary exchange',
    hscgModule: 'lib/valueflows.ts'
  },
  {
    id: 'vertical-development',
    name: 'Vertical Development',
    definition: 'The evolution of adult meaning-making capacity from concrete, ego-centric stages to more complex, systemic, and integral stages. Also called "adult development" or "ego development."',
    keyPeople: ['Susanne Cook-Greuter', 'Zak Stein', 'Steve McIntosh'],
    keyProjects: ['Integral Life', 'The Consilience Project', 'Awakening from the Meaning Crisis'],
    hscgMapping: '13 Pilares × 7 Capas, developmental matrix',
    hscgModule: 'lib/celulas.ts'
  },
  {
    id: 'integral-theory',
    name: 'Integral Theory',
    definition: 'A comprehensive framework (AQAL) that integrates multiple perspectives — subjective, objective, intersubjective, interobjective — into a coherent map of reality. Developed by Ken Wilber.',
    keyPeople: ['Ken Wilber', 'Zak Stein', 'Steve McIntosh'],
    keyProjects: ['Integral Life', 'Pacific Integral', 'Metamoderna'],
    hscgMapping: 'Sistema Alráico (8 caras), holistic framework',
    hscgModule: 'lib/integral.ts'
  },
  {
    id: 'complexity-science',
    name: 'Complexity Science',
    definition: 'The study of complex adaptive systems — systems with many interacting agents that produce emergent, non-linear, and self-organizing behavior. Essential for understanding the meta-crisis as a systemic phenomenon.',
    keyPeople: ['Dave Snowden', 'Jim Rutt', 'Michael Garfield'],
    keyProjects: ['Santa Fe Institute', 'The Jim Rutt Show', 'Life Itself'],
    hscgMapping: 'loopEngine (6 loops), systems dynamics',
    hscgModule: 'lib/loopEngine.ts'
  },
  {
    id: 'holosociocibersimbiogenesis',
    name: 'Holosociocibersimbiogenesis (HSCSG)',
    definition: 'The user\'s own framework: a transition architecture toward a post-market, post-dependence, post-centralization ecosystem. Not a literary utopia but an informational, technical, and territorial executable framework. The ultimate objective: any human collective, in any territory, can deploy operational self-sufficiency in its critical domains (food, energy, health, governance, knowledge, production, communication, habitat, finance) in a maximum of 7 generations, without depending on external actors.',
    keyPeople: ['Isaac Ko (Isaacko0)', 'Amid Dabir (Sistema Alráico)', 'Auravana (Estándar SSS-PP-PE-001)'],
    keyProjects: ['HSCSG v15 OS', 'Navteka', 'Cosateca OS'],
    hscgMapping: 'Self-reference — this IS the HSCSG definition',
    hscgModule: 'docs/hscsg_definition.md'
  }
];

export const META_CRISIS_CONCEPTS_MAP: Record<string, MetaCrisisConcept> = {};
META_CRISIS_CONCEPTS.forEach(c => {
  META_CRISIS_CONCEPTS_MAP[c.id] = c;
});

export function getConceptByName(name: string): MetaCrisisConcept | undefined {
  return META_CRISIS_CONCEPTS.find(c => 
    c.name.toLowerCase() === name.toLowerCase()
  );
}

export function getConceptsByModule(module: string): MetaCrisisConcept[] {
  return META_CRISIS_CONCEPTS.filter(c => c.hscgModule === module);
}

export function getConceptsByPerson(person: string): MetaCrisisConcept[] {
  return META_CRISIS_CONCEPTS.filter(c => 
    c.keyPeople.some(p => p.toLowerCase().includes(person.toLowerCase()))
  );
}

export function searchConcepts(query: string): MetaCrisisConcept[] {
  const q = query.toLowerCase();
  return META_CRISIS_CONCEPTS.filter(c => 
    c.name.toLowerCase().includes(q) || 
    c.definition.toLowerCase().includes(q) ||
    c.hscgMapping.toLowerCase().includes(q)
  );
}
