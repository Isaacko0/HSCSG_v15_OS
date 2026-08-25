// Meta-Crisis Maps & Syntheses Data
// Source: https://metacrisis.org (Obsidian Publish, Kyle Kowalski)
// Last updated: 2026-08-22

export interface MetaCrisisMap {
  id: string;
  title: string;
  author: string;
  year: number;
  url?: string;
  description: string;
  hscgMapping: string;
}

export const META_CRISIS_MAPS: MetaCrisisMap[] = [
  {
    id: 'is-metacrisis-me-crisis-2024',
    title: 'Is the Meta-Crisis a Me-Crisis?',
    author: 'Kyle Kowalski (Sloww)',
    year: 2024,
    url: 'https://www.sloww.co/meta-crisis-me-crisis/',
    description: 'Kyle Kowalski synthesis of the meta-crisis space after several years of following it.',
    hscgMapping: 'BRIEF_EXHAUSTIVO §18, personal synthesis of meta-crisis'
  },
  {
    id: 'ecosystem-overview-2024',
    title: 'An Overview of Ecosystem Names & Mapping Efforts',
    author: 'Life Itself',
    year: 2024,
    url: 'https://ecosystem.lifeitself.org/overview',
    description: 'Overview of ecosystem names and mapping efforts in the meta-crisis space.',
    hscgMapping: 'OpenHaven Matrix enrichment, ecosystem mapping'
  },
  {
    id: 'meme-to-vibe-2023',
    title: 'Meme to Vibe: A Philosophical Report',
    author: 'Peter Limberg',
    year: 2023,
    url: 'https://thestoa.substack.com/p/meme-to-vibe-a-philosophical-report',
    description: 'Philosophical report on memes and vibes in the meta-crisis.',
    hscgMapping: 'Cultural evolution, sensemaking'
  },
  {
    id: 'meta-crisis-concept-space-2022',
    title: 'Meta Crisis Concept Space Maps',
    author: 'HexaField',
    year: 2022,
    url: 'https://docs.google.com/presentation/d/1QXhQEx4FTnvFfISl_1qj_1Yja5-F9DTk6WOl31zNMHs/edit?usp=sharing',
    description: 'Concept space maps of the meta-crisis.',
    hscgMapping: 'OpenHaven Matrix enrichment'
  },
  {
    id: 'comparing-approaches-2022',
    title: 'Comparing Approaches to Addressing the Meta-Crisis',
    author: 'Brandon Norgaard',
    year: 2022,
    url: 'https://medium.com/@brandon_29259/comparing-approaches-to-addressing-the-meta-crisis-9393e6ee17d7',
    description: 'Comparing different approaches to addressing the meta-crisis. Includes Google Sheet + Google Doc.',
    hscgMapping: 'Gaia-Mycelium connection, ecosystem mapping'
  },
  {
    id: 'education-metacrisis-2022',
    title: 'Education is the Metacrisis',
    author: 'Zak Stein',
    year: 2022,
    url: 'https://systems-souls-society.com/education-is-the-metacrisis/',
    description: 'Education as the core of the meta-crisis.',
    hscgMapping: 'Ley I MJ (no dañar), education, wisdom cultivation'
  },
  {
    id: 'transformational-communities-2022',
    title: 'Transformational Communities',
    author: 'Tucker Walsh',
    year: 2022,
    url: 'https://tuckerwalsh.medium.com/transformational-communities-cd9e41053423',
    description: 'Transformational communities in the meta-crisis.',
    hscgMapping: 'Cosateca model, community transformation'
  },
  {
    id: 'tasting-pickle-2021',
    title: 'Tasting the Pickle: Ten flavours of meta-crisis',
    author: 'Jonathan Rowson',
    year: 2021,
    url: 'https://systems-souls-society.com/tasting-the-pickle-ten-flavours-of-meta-crisis-and-the-appetite-for-a-new-civilisation/',
    description: 'Ten flavours of meta-crisis and the appetite for a new civilisation.',
    hscgMapping: 'Metamodernity, civilizational crisis'
  },
  {
    id: 'liminal-web-2021',
    title: 'The Liminal Web: Mapping An Emergent Subculture',
    author: 'Joe Lightfoot',
    year: 2021,
    url: 'https://www.joelightfoot.org/post/the-liminal-web-mapping-an-emergent-subculture-of-sensemakers-meta-theorists-systems-poets',
    description: 'Mapping the liminal web of sensemakers, meta-theorists, and systems poets.',
    hscgMapping: 'Vasos comunicantes, network mapping'
  },
  {
    id: 'mapping-emergence-2021',
    title: 'Mapping For Emergence',
    author: 'Life Itself',
    year: 2021,
    url: 'https://lifeitself.us/2021/12/09/mapping-for-emergence/',
    description: 'Collaboration to chart the emerging metamodern ecosystem.',
    hscgMapping: 'OpenHaven Matrix enrichment, ecosystem mapping'
  },
  {
    id: 'flourishing-2021',
    title: 'The Flourishing of All Living Things',
    author: 'Naryan',
    year: 2021,
    url: 'https://kumu.io/Naryan/the-flourishing-of-all-living-things#flourishing-of-all-living-things',
    description: 'Kumu visualization of the flourishing of all living things.',
    hscgMapping: 'Systems visualization, ecological flourishing'
  },
  {
    id: 'movement-no-name-2021',
    title: 'A movement with no name',
    author: 'Marcus Gabler',
    year: 2021,
    url: 'https://www.mille-plateaux.com/sensemaking-philosophy',
    description: 'Sensemaking philosophy and the movement with no name.',
    hscgMapping: 'Sensemaking, philosophy'
  },
  {
    id: 'wisdom-age-2021',
    title: 'Building the Wisdom Age',
    author: 'Roote',
    year: 2021,
    url: 'https://www.roote.co/wisdom-age',
    description: 'Building the wisdom age through Roote.',
    hscgMapping: 'Wisdom module, Ley III MJ'
  },
  {
    id: 'sense-making-web-2021',
    title: 'The Sense-Making Web',
    author: 'Chris Leong',
    year: 2021,
    url: 'https://www.lesswrong.com/posts/vKDAXqyab5KRApfvE/the-sense-making-web',
    description: 'The sense-making web on Less Wrong.',
    hscgMapping: 'Autómata E²R, sensemaking'
  },
  {
    id: 'noosphere-map-2021',
    title: 'The Noosphere Map',
    author: 'Johan',
    year: 2021,
    url: 'https://miro.com/app/board/o9J_kniyxiY=/',
    description: 'Miro board mapping the noosphere.',
    hscgMapping: 'Network mapping, collective intelligence'
  },
  {
    id: 'state-sensemaking-2020',
    title: 'State of Sensemaking 2020',
    author: 'Life Itself',
    year: 2020,
    url: 'https://lifeitself.us/ecosystem/state-of-sensemaking-2020/',
    description: 'Snapshot of the sensemaking and culture-making ecosystem.',
    hscgMapping: 'OpenHaven Matrix enrichment'
  },
  {
    id: 'dawn-metatribe-2020',
    title: 'The Dawn of the Metatribe',
    author: 'Tyler Alterman',
    year: 2020,
    url: 'https://youtu.be/4aXvHBIoF0A',
    description: 'YouTube video on the dawn of the metatribe.',
    hscgMapping: 'Metamodernism, cultural evolution'
  },
  {
    id: 'rise-emergentsia-2019',
    title: "The Rise of the 'Emergentsia'",
    author: 'Brent Cooper',
    year: 2019,
    url: 'http://www.whatisemerging.com/opinions/the-rise-of-the-emergentsia-meaning-making-in-a-time-between-worlds',
    description: 'Meaning making in a time between worlds.',
    hscgMapping: 'Emergentsia, meaning-making'
  },
  {
    id: 'twelve-tribes-2019',
    title: 'Awakening the Twelve Tribes of Transformation',
    author: 'Jonathan Rowson',
    year: 2019,
    url: 'http://www.whatisemerging.com/opinions/twelve-tribes-of-transformation-awakening-the-active-ingredients-of-a-new-civilisation',
    description: 'Twelve tribes of transformation.',
    hscgMapping: 'Metamodernity, civilizational design'
  },
  {
    id: 'story-bind-us-2019',
    title: 'A Story to Bind Us',
    author: 'Alexander Beiner',
    year: 2019,
    url: 'https://medium.com/rebel-wisdom/a-story-to-bind-us-the-intellectual-deep-web-and-a-new-grand-narrative-9b32e36857c3',
    description: 'The intellectual deep web and a new meta-narrative.',
    hscgMapping: 'Narrative, meaning-making'
  },
  {
    id: 'sensemaking-web-braindump-2019',
    title: 'The Sensemaking Web Braindump',
    author: 'Gwendolyn Huot',
    year: 2019,
    url: 'https://docs.google.com/document/d/1FmwYnsyzNUITy_ySyOKy3bgnNZsq2uIGoqn6azJa7qI/edit?pli=1#',
    description: 'Google Doc braindump of the sensemaking web.',
    hscgMapping: 'Autómata E²R, sensemaking'
  },
  {
    id: 'memetic-tribes-2018',
    title: 'The Memetic Tribes Of Culture War 2.0',
    author: 'Peter Limberg + Conor Barnes',
    year: 2018,
    url: 'https://medium.com/s/world-wide-wtf/memetic-tribes-and-culture-war-2.0-14705c43f6bb',
    description: 'Memetic tribes and culture war 2.0.',
    hscgMapping: 'Cultural evolution, sensemaking'
  }
];

export const META_CRISIS_MAPS_BY_YEAR: Record<number, MetaCrisisMap[]> = {};
META_CRISIS_MAPS.forEach(m => {
  if (!META_CRISIS_MAPS_BY_YEAR[m.year]) {
    META_CRISIS_MAPS_BY_YEAR[m.year] = [];
  }
  META_CRISIS_MAPS_BY_YEAR[m.year].push(m);
});

export function getMapsByYear(year: number): MetaCrisisMap[] {
  return META_CRISIS_MAPS_BY_YEAR[year] || [];
}

export function getMapsByAuthor(author: string): MetaCrisisMap[] {
  return META_CRISIS_MAPS.filter(m => 
    m.author.toLowerCase().includes(author.toLowerCase())
  );
}
