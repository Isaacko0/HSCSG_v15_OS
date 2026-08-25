// Meta-Crisis Books & Papers Data
// Source: https://metacrisis.org (Obsidian Publish, Kyle Kowalski)
// Last updated: 2026-08-22

export interface MetaCrisisBook {
  id: string;
  title: string;
  author: string;
  year: number;
  hscgMapping: string;
  tags: string[];
}

export const META_CRISIS_BOOKS: MetaCrisisBook[] = [
  // Cognitive Science + Wisdom
  { id: 'predictive-processing-2022', title: 'Predictive processing and relevance realization', author: 'Brett Andersen, Mark Miller, John Vervaeke', year: 2022, hscgMapping: 'Relevance realization, Autómata E²R', tags: ['cognitivescience', 'relevancerealization', 'vervaeke'] },
  { id: 'matter-with-things-2021', title: 'The Matter With Things', author: 'Iain McGilchrist', year: 2021, hscgMapping: 'Divided brain, Western world, perception', tags: ['brain', 'perception', 'western'] },
  { id: 'cynefin-2020', title: 'Cynefin - Weaving Sense-Making into the Fabric of Our World', author: 'Dave Snowden', year: 2020, hscgMapping: 'Sensemaking framework, complexity', tags: ['sensemaking', 'complexity', 'cynefin'] },
  { id: 'education-time-between-2019', title: 'Education in a Time Between Worlds', author: 'Zak Stein', year: 2019, hscgMapping: 'Education, meaning crisis', tags: ['education', 'meaningcrisis', 'stein'] },
  { id: 'master-emissary-2009', title: 'The Master and His Emissary', author: 'Iain McGilchrist', year: 2009, hscgMapping: 'Divided brain, perception', tags: ['brain', 'perception', 'western'] },

  // Civilization Design + Governance
  { id: 'dispatches-2021', title: 'Dispatches from a Time Between Worlds', author: 'Jonathan Rowson et al.', year: 2021, hscgMapping: 'Metamodernity, civilizational crisis', tags: ['metamodernity', 'civilization', 'rowson'] },
  { id: 'reality-blind-2021', title: 'Reality Blind', author: 'Nate Hagens, DJ White', year: 2021, hscgMapping: 'Systems science, collective futures', tags: ['systems', 'futures', 'hagens'] },
  { id: 'design-pathway-2021', title: 'The Design Pathway for Regenerating Earth', author: 'Joe Brewer', year: 2021, hscgMapping: 'Regenerative design, earth system', tags: ['regenerative', 'design', 'earth'] },
  { id: 'developmental-politics-2020', title: 'Developmental Politics', author: 'Steve McIntosh', year: 2020, hscgMapping: 'Developmental psychology, politics', tags: ['development', 'politics', 'psychology'] },
  { id: 'moves-that-matter-2019', title: 'The Moves That Matter', author: 'Jonathan Rowson', year: 2019, hscgMapping: 'Chess, strategy, life', tags: ['chess', 'strategy', 'life'] },
  { id: 'world-we-create-2019', title: 'The World We Create', author: 'Tomas Björkman', year: 2019, hscgMapping: 'Social systems, cultural creation', tags: ['social', 'systems', 'culture'] },
  { id: 'metamodernity-2019', title: 'Metamodernity', author: 'Lene Rachel Andersen', year: 2019, hscgMapping: 'Meaning, hope, complex world', tags: ['metamodernity', 'meaning', 'hope'] },
  { id: 'theory-u-2018', title: 'The Essentials of Theory U', author: 'Otto Scharmer', year: 2018, hscgMapping: 'Presencing, social change', tags: ['theoryu', 'presencing', 'change'] },
  { id: 'religion-tomorrow-2017', title: 'The Religion of Tomorrow', author: 'Ken Wilber', year: 2017, hscgMapping: 'Integral spirituality, evolution', tags: ['integral', 'spirituality', 'evolution'] },

  // Economics + Post-Monetary
  { id: 'gaming-future-2022', title: 'Gaming the Future', author: 'Allison Duettmann et al.', year: 2022, hscgMapping: 'Voluntary cooperation, game theory', tags: ['gametheory', 'cooperation', 'future'] },
  { id: 'climate-new-story-2020', title: 'Climate: A New Story', author: 'Charles Eisenstein', year: 2020, hscgMapping: 'Climate, narrative change', tags: ['climate', 'narrative', 'eisenstein'] },
  { id: 'open-revolution-2018', title: 'The Open Revolution', author: 'Rufus Pollock', year: 2018, hscgMapping: 'Information age, open society', tags: ['open', 'information', 'society'] },
  { id: 'sacred-economics-2011', title: 'Sacred Economics, Revised', author: 'Charles Eisenstein', year: 2011, hscgMapping: 'Gift economy, money, transition', tags: ['gifteconomy', 'money', 'transition'] },
  { id: 'ascent-humanity-2007', title: 'The Ascent of Humanity', author: 'Charles Eisenstein', year: 2007, hscgMapping: 'Civilization, human sense of self', tags: ['civilization', 'human', 'self'] },

  // Spirituality + Consciousness
  { id: 'crossing-threshold-2023', title: 'Crossing the Threshold', author: 'Matt Segall', year: 2023, hscgMapping: 'Process philosophy, Whitehead', tags: ['process', 'philosophy', 'whitehead'] },
  { id: 'bigger-picture-2023', title: 'The Bigger Picture', author: 'Alexander Beiner', year: 2023, hscgMapping: 'Psychedelics, sense-making', tags: ['psychedelics', 'sensemaking', 'beiner'] },
  { id: '12-commandments-2022', title: '12 Commandments', author: 'Hanzi Freinacht', year: 2022, hscgMapping: 'Self-mastery, extraordinary life', tags: ['selfmastery', 'commandments', 'freinacht'] },
  { id: 'emergentism-2022', title: 'Emergentism', author: 'Brendan Graham Dempsey', year: 2022, hscgMapping: 'Complexity religion, metamodern', tags: ['emergentism', 'complexity', 'religion'] },
  { id: 'recapture-rapture-2021', title: 'Recapture the Rapture', author: 'Jamie Wheal', year: 2021, hscgMapping: 'Psychospiritual development', tags: ['psychospiritual', 'development', 'rapture'] },
  { id: 'physics-world-soul-2021', title: 'Physics of the World-Soul', author: 'Matt Segall', year: 2021, hscgMapping: 'Whitehead, cosmology', tags: ['whitehead', 'cosmology', 'soul'] },
  { id: 'sand-talk-2020', title: 'Sand Talk', author: 'Tyson Yunkaporta', year: 2020, hscgMapping: 'Indigenous thinking', tags: ['indigenous', 'thinking', 'yunkaporta'] },
  { id: 'bildung-2020', title: 'Bildung: Keep Growing', author: 'Lene Rachel Andersen', year: 2020, hscgMapping: 'Education, growth', tags: ['bildung', 'education', 'growth'] },
  { id: 'breaking-open-2020', title: 'Breaking Open', author: 'Jules Evans', year: 2020, hscgMapping: 'Spiritual emergency', tags: ['spiritual', 'emergency', 'evans'] },
  { id: 'seeing-through-world-2019', title: 'Seeing Through the World', author: 'Jeremy Johnson', year: 2019, hscgMapping: 'Jean Gebser, integral consciousness', tags: ['gebser', 'consciousness', 'integral'] },
  { id: 'high-weirdness-2019', title: 'High Weirdness', author: 'Erik Davis', year: 2019, hscgMapping: 'Drugs, esoterica, visionary', tags: ['drugs', 'esoterica', 'visionary'] },
  { id: '12-rules-2018', title: '12 Rules for Life', author: 'Jordan B Peterson', year: 2018, hscgMapping: 'Chaos, order, meaning', tags: ['chaos', 'order', 'meaning'] },
  { id: 'integral-life-practice-2008', title: 'Integral Life Practice', author: 'Ken Wilber', year: 2008, hscgMapping: '21st-century blueprint', tags: ['integral', 'practice', 'blueprint'] },
  { id: 'integral-spirituality-2006', title: 'Integral Spirituality', author: 'Ken Wilber', year: 2006, hscgMapping: 'Religion, modern/postmodern', tags: ['integral', 'spirituality', 'religion'] },
  { id: 'theory-everything-2000', title: 'A Theory of Everything', author: 'Ken Wilber', year: 2000, hscgMapping: 'Integral vision', tags: ['integral', 'vision', 'everything'] },
  { id: 'sex-ecology-spirituality-1995', title: 'Sex, Ecology, Spirituality', author: 'Ken Wilber', year: 1995, hscgMapping: 'Spirit of evolution', tags: ['sex', 'ecology', 'spirituality'] },
  { id: 'spectrum-consciousness-1977', title: 'The Spectrum of Consciousness', author: 'Ken Wilber', year: 1977, hscgMapping: 'Consciousness spectrum', tags: ['consciousness', 'spectrum', 'wilber'] },

  // Systems + Complexity
  { id: 'systems-subjects-2023', title: 'Systems and Subjects', author: 'Cadell Last', year: 2023, hscgMapping: 'Philosophy, science foundations', tags: ['systems', 'philosophy', 'science'] },
  { id: 'new-synthesis-psychology-2022', title: 'A New Synthesis for Solving the Problem of Psychology', author: 'Gregg Henriques', year: 2022, hscgMapping: 'Unified psychology', tags: ['psychology', 'synthesis', 'henriques'] },
  { id: 'collective-wisdom-2021', title: 'Collective Wisdom in the West', author: 'Liam Kavanagh', year: 2021, hscgMapping: 'Enlightenment, collective wisdom', tags: ['wisdom', 'enlightenment', 'collective'] },
  { id: 'understand-everything-2021', title: 'How to Understand Everything', author: 'Tom Beakbane', year: 2021, hscgMapping: 'Consilience, worldview', tags: ['consilience', 'worldview', 'beakbane'] },
  { id: 'ego-development-2021', title: 'Ego Development', author: 'Susanne Cook-Greuter', year: 2021, hscgMapping: 'Vertical growth, meaning making', tags: ['ego', 'development', 'vertical'] },
  { id: 'collective-blooming-2020', title: 'A Collective Blooming', author: 'Joe Lightfoot', year: 2020, hscgMapping: 'Mutual aid community', tags: ['mutualaid', 'community', 'lightfoot'] },
  { id: 'bottlenecks-21st-2019', title: 'The Bottlenecks of the 21st Century', author: 'DJ White, Nate Hagens', year: 2019, hscgMapping: 'Systems synthesis, human predicament', tags: ['bottlenecks', 'systems', 'predicament'] },
  { id: 'unified-theory-psychology-2011', title: 'A New Unified Theory of Psychology', author: 'Gregg Henriques', year: 2011, hscgMapping: 'Psychology synthesis', tags: ['psychology', 'unified', 'synthesis'] },
  { id: 'postautonomous-ego-2010', title: 'Postautonomous Ego Development', author: 'Susanne Cook-Greuter', year: 2010, hscgMapping: 'Vertical development', tags: ['ego', 'development', 'vertical'] }
];

export const META_CRISIS_BOOKS_MAP: Record<string, MetaCrisisBook> = {};
META_CRISIS_BOOKS.forEach(b => {
  META_CRISIS_BOOKS_MAP[b.id] = b;
});

export function getBooksByTag(tag: string): MetaCrisisBook[] {
  return META_CRISIS_BOOKS.filter(b => b.tags.includes(tag));
}

export function getBooksByYearRange(start: number, end: number): MetaCrisisBook[] {
  return META_CRISIS_BOOKS.filter(b => b.year >= start && b.year <= end);
}

export function getBooksByAuthor(author: string): MetaCrisisBook[] {
  return META_CRISIS_BOOKS.filter(b => 
    b.author.toLowerCase().includes(author.toLowerCase())
  );
}
