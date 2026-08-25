// Meta-Crisis People Data
// Source: https://metacrisis.org (Obsidian Publish, Kyle Kowalski)
// Last updated: 2026-08-22

export interface MetaCrisisPerson {
  id: string;
  name: string;
  role: string;
  projectId?: string;
  projectName?: string;
  hscgConnection: string;
  tags: string[];
}

export const META_CRISIS_PEOPLE: MetaCrisisPerson[] = [
  {
    id: 'john-vervaeke',
    name: 'John Vervaeke',
    role: 'Cognitive Scientist, Professor',
    projectId: 'awakening-meaning-crisis',
    projectName: 'Awakening from the Meaning Crisis',
    hscgConnection: 'Ley III MJ (Lucidez), wisdom cultivation, relevance realization, cognitive science',
    tags: ['cognitivescience', 'wisdom', 'meaningcrisis', 'relevancerealization', 'psychotechnology']
  },
  {
    id: 'daniel-schmachtenberger',
    name: 'Daniel Schmachtenberger',
    role: 'Systems Thinker, Civilizational Designer',
    projectId: 'consilience-project',
    projectName: 'The Consilience Project',
    hscgConnection: 'Civilizational design, existential risk, governance design, Game B',
    tags: ['civilizationdesign', 'existentialrisk', 'governancedesign', 'metacrisis']
  },
  {
    id: 'jordan-hall',
    name: 'Jordan Hall',
    role: 'Game B Co-founder, Entrepreneur',
    projectId: 'game-b',
    projectName: 'Game B',
    hscgConnection: 'Collective intelligence, anti-fragile civilization, Game B',
    tags: ['GameB', 'collectiveintelligence', 'civilizationdesign']
  },
  {
    id: 'jim-rutt',
    name: 'Jim Rutt',
    role: 'Game B, Former Board Chairman Santa Fe Institute',
    projectId: 'game-b',
    projectName: 'Game B',
    hscgConnection: 'Complexity, technology, civilization design',
    tags: ['GameB', 'complexity', 'technology', 'civilization']
  },
  {
    id: 'zak-stein',
    name: 'Zak Stein',
    role: 'Psychometrics, Education Theorist',
    projectId: 'consilience-project',
    projectName: 'The Consilience Project',
    hscgConnection: 'Education, psychometrics, wisdom cultivation, Ley I MJ',
    tags: ['education', 'psychometrics', 'wisdom', 'metacrisis']
  },
  {
    id: 'ken-wilber',
    name: 'Ken Wilber',
    role: 'Integral Theory Founder',
    projectId: 'integral-life',
    projectName: 'Integral Life',
    hscgConnection: 'Integral 2.0, AQAL framework, holons, Sistema Alráico',
    tags: ['integral', 'consciousness', 'development', 'spirituality']
  },
  {
    id: 'jonathan-rowson',
    name: 'Jonathan Rowson',
    role: 'Perspectiva, Chess Grandmaster',
    projectId: 'emerge',
    projectName: 'Emerge',
    hscgConnection: 'Metamodernity, systems change, cultural evolution',
    tags: ['metamodernity', 'systemschange', 'culturalevolution', 'chess']
  },
  {
    id: 'hanzi-freinacht',
    name: 'Hanzi Freinacht',
    role: 'Metamoderna, Author',
    projectId: 'metamoderna',
    projectName: 'Metamoderna',
    hscgConnection: 'Developmental politics, metamodernism, 12 Commandments',
    tags: ['metamodernism', 'politics', 'development', 'culture']
  },
  {
    id: 'tomas-bjorkman',
    name: 'Tomas Björkman',
    role: 'Emerge Co-founder, Social Entrepreneur',
    projectId: 'emerge',
    projectName: 'Emerge',
    hscgConnection: 'Social systems, cultural transformation',
    tags: ['socialsystems', 'culturaltransformation', 'emergence']
  },
  {
    id: 'tristan-harris',
    name: 'Tristan Harris',
    role: 'Center for Humane Technology Founder',
    projectId: 'center-humane-technology',
    projectName: 'The Center for Humane Technology',
    hscgConnection: 'Ley III MJ (no dañar), technology ethics, attention economy',
    tags: ['technology', 'ethics', 'attention', 'humane']
  },
  {
    id: 'nate-hagens',
    name: 'Nate Hagens',
    role: 'The Great Simplification, Natural Resource Economics',
    projectId: 'great-simplification',
    projectName: 'The Great Simplification',
    hscgConnection: 'CAC vectors, resource constraints, natural resource economics',
    tags: ['resources', 'economics', 'risk', 'civilization']
  },
  {
    id: 'jamie-wheal',
    name: 'Jamie Wheal',
    role: 'Cultural Architecture, Author',
    hscgConnection: 'Psychospiritual development, cultural design',
    tags: ['psychospiritual', 'culture', 'development', 'rapture']
  },
  {
    id: 'charles-eisenstein',
    name: 'Charles Eisenstein',
    role: 'Author, Activist',
    hscgConnection: 'Gift economy, post-monetary, Sacred Economics',
    tags: ['gifteconomy', 'postmonetary', 'sacredeconomics', 'climate']
  },
  {
    id: 'iain-mcgilchrist',
    name: 'Iain McGilchrist',
    role: 'Psychiatrist, Author',
    hscgConnection: 'Divided brain, perception, Western world, Master and His Emissary',
    tags: ['brain', 'perception', 'westernworld', 'consciousness']
  },
  {
    id: 'tyson-yunkaporta',
    name: 'Tyson Yunkaporta',
    role: 'Indigenous Studies, Author',
    hscgConnection: 'Indigenous thinking, Sand Talk, cultural research',
    tags: ['indigenous', 'culture', 'sandtalk', 'research']
  },
  {
    id: 'bayo-akomolafe',
    name: 'Bayo Akomolafe',
    role: 'Post-activist, Author',
    hscgConnection: 'Decolonial wisdom, embodied activism',
    tags: ['postactivism', 'decolonial', 'wisdom', 'embodied']
  },
  {
    id: 'kyle-kowalski',
    name: 'Kyle Kowalski',
    role: 'Sloww Founder, metacrisis.org Curator',
    projectId: 'sloww',
    projectName: 'Sloww',
    hscgConnection: 'Art of living, Ikigai 2.0, synthesizer, meta-crisis curation',
    tags: ['artofliving', 'ikigai', 'synthesizer', 'metacrisis', 'curation']
  },
  {
    id: 'brandon-norgaard',
    name: 'Brandon Norgaard',
    role: 'Meta-Crisis Researcher',
    hscgConnection: 'Ecosystem mapping, Comparing Approaches to Meta-Crisis, Gaia-Mycelium connection',
    tags: ['metacrisis', 'mapping', 'ecosystem', 'gaia']
  },
  {
    id: 'alexander-beiner',
    name: 'Alexander Beiner',
    role: 'Rebel Wisdom, Author',
    projectId: 'rebel-wisdom',
    projectName: 'Rebel Wisdom',
    hscgConnection: 'Intellectual dark web, meaning crisis, psychedelics',
    tags: ['meaning', 'crisis', 'psychedelics', 'intellectual']
  },
  {
    id: 'brendan-graham-dempsey',
    name: 'Brendan Graham Dempsey',
    role: 'Author, Complexity Theorist',
    hscgConnection: 'Emergentism, complexity religion, metamodern world',
    tags: ['emergentism', 'complexity', 'metamodern', 'religion']
  }
];

export const META_CRISIS_PEOPLE_MAP: Record<string, MetaCrisisPerson> = {};
META_CRISIS_PEOPLE.forEach(p => {
  META_CRISIS_PEOPLE_MAP[p.id] = p;
});

export function getPeopleByProject(projectId: string): MetaCrisisPerson[] {
  return META_CRISIS_PEOPLE.filter(p => p.projectId === projectId);
}

export function getPeopleByTag(tag: string): MetaCrisisPerson[] {
  return META_CRISIS_PEOPLE.filter(p => p.tags.includes(tag));
}

export function getPeopleByHscgConnection(keyword: string): MetaCrisisPerson[] {
  return META_CRISIS_PEOPLE.filter(p => 
    p.hscgConnection.toLowerCase().includes(keyword.toLowerCase())
  );
}
