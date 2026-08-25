// Meta-Crisis Projects Data
// Source: https://metacrisis.org (Obsidian Publish, Kyle Kowalski)
// Last updated: 2026-08-22

export interface MetaCrisisProject {
  id: string;
  name: string;
  type: string;
  description: string;
  website?: string;
  hscgMapping: string;
  hscgModule?: string;
  tags: string[];
}

export const META_CRISIS_PROJECTS: MetaCrisisProject[] = [
  {
    id: 'awakening-meaning-crisis',
    name: 'Awakening from the Meaning Crisis',
    type: 'YouTube Series (50 episodes)',
    description: 'John Vervaeke: cognitive science + spirituality, wisdom cultivation, relevance realization. Framework for understanding what wisdom is, how to cultivate it, how central the cultivation of wisdom was to societies in the past, and how the usurpation of wisdom by knowledge leaves us adrift in a meaningless cosmos.',
    website: 'https://www.youtube.com/playlist?list=PLND1JCRq8Vuh3f0P5qjrSdb5eC1ZfZwWJ',
    hscgMapping: 'Ley III MJ (Lucidez), wisdom cultivation module',
    hscgModule: 'lib/wisdom.ts',
    tags: ['cognitivescience', 'meaning', 'meaningcrisis', 'metacognition', 'mindfulness', 'psychology', 'psychotechnology', 'rationality', 'relevancerealization', 'spirituality', 'wisdom']
  },
  {
    id: 'life-itself',
    name: 'Life Itself',
    type: 'Community + Coliving',
    description: '"Pragmatic utopians" — coliving hubs, middle way between Plum Village and Silicon Valley. Committed to practical action for a radically wiser, weller world.',
    website: 'https://www.lifeitself.us',
    hscgMapping: 'Cosateca model, coliving, cultural transformation',
    hscgModule: 'lib/cosateca.ts',
    tags: ['coliving', 'collectiveaction', 'culturaltransformation', 'culture', 'meaning', 'politics', 'rationality', 'society', 'spirituality', 'wisdom']
  },
  {
    id: 'sloww',
    name: 'Sloww',
    type: 'Education + Community',
    description: 'Kyle Kowalski: art of living, Ikigai 2.0, synthesizer course. Synthesis on the art of living for students of life.',
    website: 'https://www.sloww.co',
    hscgMapping: 'BRIEF_PERFIL_AUTODIDACTAS.md enrichment',
    hscgModule: 'lib/learning.ts',
    tags: ['adultdevelopment', 'artofliving', 'awakening', 'consciouscapitalism', 'consciousness', 'consilience', 'contemplativepractice', 'creatoreconomy', 'education', 'elearning', 'enlightenedentrepreneurship', 'enlightenment', 'entrepreneurship', 'freewill', 'humandevelopment', 'humanpotential', 'integraltheory', 'intentionalliving', 'interdisciplinary', 'learninpublic', 'lifelonglearning', 'lifepurpose', 'lifestyledesign', 'meaning', 'meaningcrisis', 'metacrisis', 'metacognition', 'nonduality', 'onlinelearning', 'personaldevelopment', 'philosophy', 'psychology', 'psychospiritualdevelopment', 'purpose', 'selfactualization', 'selfawareness', 'sensemaking', 'simpleliving', 'slowliving', 'solopreneur', 'spiritualbusiness', 'spirituality', 'synthesizer', 'systemsthinking', 'toolsforthought', 'transcendence', 'transpersonalpsychology', 'wisdom']
  },
  {
    id: 'game-b',
    name: 'Game B',
    type: 'Memetic Tag + Community',
    description: 'New social OS: anti-fragile, scalable, omni-win-win civilization. Distinct from current rivalrous Game A civilization replete with destructive externalities and power asymmetries producing existential risk. Key people: Jim Rutt, Daniel Schmachtenberger, Jordan Hall.',
    website: 'https://www.game-b.org',
    hscgMapping: 'Post-monetary civilization, HSCSG Game B mapping',
    hscgModule: 'lib/game_b.ts',
    tags: ['civilizationcollapse', 'civilizationdesign', 'collectiveintelligence', 'culture', 'existentialrisk', 'externalities', 'futureofcivilization', 'GameB', 'gametheory', 'generatorfunction', 'gifteconomy', 'metacrisis', 'metamodernism', 'omniwin', 'protob', 'regenerativeculture', 'regenerativefutures', 'ruleomega', 'sensemaking', 'society']
  },
  {
    id: 'consilience-project',
    name: 'The Consilience Project',
    type: 'Research Publication',
    description: 'Daniel Schmachtenberger: publishes novel research at the leading edges of global risk mitigation, governance design and culture. Clarifies and reveals the nature of the metacrisis to enable comprehensive solutions to global problems. Publication of the Civilization Research Institute (CRI).',
    website: 'https://www.consilienceproject.org',
    hscgMapping: 'Governance design, risk mitigation, CDS enrichment',
    hscgModule: 'lib/governance.ts',
    tags: ['catastrophicrisk', 'civilizationdesign', 'collectiveintelligence', 'epistemiccommons', 'existentialrisk', 'exponentialtechnology', 'futureofcivilization', 'governancedesign', 'informationecology', 'metacrisis', 'riskmitigation', 'sensemaking', 'socialphilosophy']
  },
  {
    id: 'emerge',
    name: 'Emerge',
    type: 'Network + Media',
    description: 'Tomas Björkman + Jonathan Rowson: connecting pioneers, seekers, innovators across the meta-crisis. Independent, non-profit media platform sowing the seeds of a new civilisation.',
    website: 'https://www.whatisemerging.com',
    hscgMapping: 'Network mapping, vasos comunicantes',
    hscgModule: 'lib/vasos.ts',
    tags: ['attention', 'civilizationcollapse', 'civilizationdesign', 'climatechange', 'climatecrisis', 'complexity', 'complexsystems', 'culturaltransformation', 'culture', 'ecology', 'education', 'emergence', 'epistemology', 'futureofcivilization', 'governance', 'meaningcrisis', 'metacrisis', 'personaldevelopment', 'politics', 'sensemaking', 'socialsystems', 'society', 'spirituality', 'synergy', 'systemstheory', 'systemsthinking', 'technology']
  },
  {
    id: 'center-humane-technology',
    name: 'The Center for Humane Technology',
    type: 'Advocacy',
    description: 'Tristan Harris: technology ethics, attention economy. Advocacy for humane technology design.',
    hscgMapping: 'Ley III MJ (no dañar), technology governance',
    hscgModule: 'lib/boundaries.ts',
    tags: ['technology', 'attention', 'ethics', 'humane']
  },
  {
    id: 'great-simplification',
    name: 'The Great Simplification',
    type: 'Podcast + Education',
    description: 'Nate Hagens: natural resource economics, risk, civilization simplification.',
    hscgMapping: 'CAC vectors, resource constraints',
    hscgModule: 'lib/cac.ts',
    tags: ['resources', 'economics', 'risk', 'civilization', 'simplification']
  },
  {
    id: 'metamoderna',
    name: 'Metamoderna',
    type: 'Think Tank',
    description: 'Hanzi Freinacht: metamodern politics, "12 Commandments", developmental politics.',
    hscgMapping: 'Developmental politics, metamodernism',
    hscgModule: 'lib/politics.ts',
    tags: ['metamodernism', 'politics', 'development', 'culture']
  },
  {
    id: 'integral-life',
    name: 'Integral Life',
    type: 'Community + Education',
    description: "Ken Wilber's integral theory community. AQAL framework, integral practice.",
    hscgMapping: 'Integral 2.0, AQAL mapping, Sistema Alráico',
    hscgModule: 'lib/integral.ts',
    tags: ['integral', 'consciousness', 'development', 'practice', 'community']
  },
  {
    id: 'rebel-wisdom',
    name: 'Rebel Wisdom',
    type: 'Media + Community',
    description: 'Alexander Beiner: intellectual dark web, meaning crisis, sensemaking.',
    hscgMapping: 'Sensemaking, meaning crisis',
    hscgModule: 'lib/sensemaking.ts',
    tags: ['meaning', 'crisis', 'sensemaking', 'culture', 'intellectual']
  },
  {
    id: 'less-wrong',
    name: 'Less Wrong',
    type: 'Community + Blog',
    description: 'Rationality community, AI safety, Bayesian reasoning.',
    hscgMapping: 'Rationality, AI alignment, Autómata E²R',
    hscgModule: 'lib/rationality.ts',
    tags: ['rationality', 'ai', 'safety', 'bayesian', 'community']
  },
  {
    id: 'long-now',
    name: 'Long Now Foundation',
    type: 'Think Tank',
    description: 'Long-term thinking, 10,000 year clock, civilizational responsibility.',
    hscgMapping: 'Long-term governance, 7 generations',
    hscgModule: 'lib/governance.ts',
    tags: ['longterm', 'civilization', 'time', 'responsibility']
  },
  {
    id: 'santa-fe-institute',
    name: 'Santa Fe Institute',
    type: 'Research Institute',
    description: 'Complexity science, complex adaptive systems, emergence.',
    hscgMapping: 'Sistema Alráico, complexity, loopEngine',
    hscgModule: 'lib/complexity.ts',
    tags: ['complexity', 'systems', 'emergence', 'science']
  },
  {
    id: 'foresight-institute',
    name: 'Foresight Institute',
    type: 'Think Tank',
    description: 'Nanotechnology, AI, existential risk, foresight.',
    hscgMapping: 'Existential risk, technology governance',
    hscgModule: 'lib/risk.ts',
    tags: ['foresight', 'nanotechnology', 'ai', 'risk', 'existential']
  },
  {
    id: 'future-of-life',
    name: 'Future of Life Institute',
    type: 'Advocacy',
    description: 'AI safety, existential risk, advocacy for beneficial AI.',
    hscgMapping: 'AI safety, Ley I MJ',
    hscgModule: 'lib/ai_safety.ts',
    tags: ['ai', 'safety', 'existential', 'risk', 'advocacy']
  }
];

export const META_CRISIS_PROJECT_MAP: Record<string, MetaCrisisProject> = {};
META_CRISIS_PROJECTS.forEach(p => {
  META_CRISIS_PROJECT_MAP[p.id] = p;
});

export function getProjectsByTag(tag: string): MetaCrisisProject[] {
  return META_CRISIS_PROJECTS.filter(p => p.tags.includes(tag));
}

export function getProjectsByHscgModule(module: string): MetaCrisisProject[] {
  return META_CRISIS_PROJECTS.filter(p => p.hscgModule === module);
}
