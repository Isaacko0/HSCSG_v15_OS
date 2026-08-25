// Meta-Crisis Communities Data
// Source: https://metacrisis.org (Obsidian Publish, Kyle Kowalski)
// Last updated: 2026-08-22

export interface MetaCrisisCommunity {
  id: string;
  name: string;
  platform: 'Circle' | 'Discord' | 'Discourse' | 'Mighty Networks' | 'Signal' | 'Telegram' | 'WhatsApp' | 'Other';
  projectName?: string;
  description?: string;
  hscgMapping: string;
}

export const META_CRISIS_COMMUNITIES: MetaCrisisCommunity[] = [
  // Circle
  { id: 'sloww-society', name: 'Sloww Society Community', platform: 'Circle', projectName: 'Sloww', hscgMapping: 'BRIEF_PERFIL_AUTODIDACTAS.md, learning community', description: 'Community for Sloww (Kyle Kowalski)' },
  { id: 'utok-community', name: 'UTOK Community', platform: 'Circle', projectName: 'UTOK', hscgMapping: 'Integral theory community', description: 'Community for UTOK project' },

  // Discord
  { id: 'amc-discord', name: 'Awakening from the Meaning Crisis', platform: 'Discord', projectName: 'Awakening from the Meaning Crisis', hscgMapping: 'Ley III MJ (Lucidez), wisdom cultivation', description: 'John Vervaeke lecture series community' },
  { id: 'doomer-optimism-discord', name: 'Doomer Optimism', platform: 'Discord', projectName: 'Doomer Optimism', hscgMapping: 'Scenario planning, resilience', description: 'Balancing doom and optimism' },
  { id: 'future-thinkers-discord', name: 'Future Thinkers', platform: 'Discord', projectName: 'Future Thinkers', hscgMapping: 'Technology + consciousness', description: 'Emerging technology + consciousness community' },
  { id: 'holistic-tech-discord', name: 'Holistic Technology + Wise Innovation', platform: 'Discord', projectName: 'Michael Garfield', hscgMapping: 'Technology ethics, wise innovation', description: 'Michael Garfield community' },
  { id: 'second-renaissance-discord', name: 'Second Renaissance', platform: 'Discord', projectName: 'Second Renaissance', hscgMapping: 'Cultural renaissance, metamodernism', description: 'Second Renaissance community' },

  // Discourse
  { id: 'integral-life-forum', name: 'Integral Life Forum', platform: 'Discourse', projectName: 'Integral Life', hscgMapping: 'Integral 2.0, AQAL practice', description: "Ken Wilber's integral theory community forum" },
  { id: 'metacrisis-dao-forum', name: 'MetacrisisDAO', platform: 'Discourse', hscgMapping: 'DAO governance, meta-crisis', description: 'DAO focused on meta-crisis governance' },
  { id: 'second-renaissance-forum', name: 'Second Renaissance Forum', platform: 'Discourse', projectName: 'Second Renaissance', hscgMapping: 'Cultural renaissance', description: 'Second Renaissance forum' },

  // Mighty Networks
  { id: 'buddhist-geeks-mn', name: 'Buddhist Geeks', platform: 'Mighty Networks', projectName: 'Buddhist Geeks', hscgMapping: 'Contemplative practice + technology', description: 'Buddhism + technology intersection' },
  { id: 'naas-community', name: 'NAAS Community', platform: 'Mighty Networks', projectName: 'Charles Eisenstein', hscgMapping: 'Gift economy, post-monetary', description: 'Charles Eisenstein community' },
  { id: 'emergent-commons', name: 'Emergent Commons', platform: 'Mighty Networks', projectName: 'Rebel Wisdom', hscgMapping: 'Emergent culture, sensemaking', description: 'Rebel Wisdom emergent culture community' },
  { id: 'emerge-mn', name: 'Emerge Community', platform: 'Mighty Networks', projectName: 'Emerge', hscgMapping: 'Network of pioneers, vasos comunicantes', description: 'Emerge network community' },
  { id: 'future-thinkers-mn', name: 'Future Thinkers', platform: 'Mighty Networks', projectName: 'Future Thinkers', hscgMapping: 'Technology + consciousness', description: 'Future Thinkers community' },
  { id: 'game-b-mn', name: 'Game B', platform: 'Mighty Networks', projectName: 'Game B', hscgMapping: 'Post-monetary civilization', description: 'Game B community' },
  { id: 'voicecraft-mn', name: 'Voicecraft', platform: 'Mighty Networks', projectName: 'Voicecraft', hscgMapping: 'Communication, meaning-making', description: 'Voicecraft community' },

  // Signal, Telegram, WhatsApp
  { id: 'founder-satsang', name: 'Founder Satsang', platform: 'Signal', hscgMapping: 'Founder community, mutual aid', description: 'Signal group for founders' },
  { id: 'metacrisis-telegram', name: 'MetaCrisis.xyz Close Collaborators', platform: 'Telegram', hscgMapping: 'Close collaborators, inner circle', description: 'Inner circle Telegram group' },
  { id: 'life-itself-whatsapp', name: 'Life Itself', platform: 'WhatsApp', projectName: 'Life Itself', hscgMapping: 'Cosateca model, coliving', description: 'Life Itself WhatsApp community' },

  // Other
  { id: 'weco-collective', name: 'we{collective}', platform: 'Other', hscgMapping: 'Collective action, mutual aid', description: 'we{collective} community platform' }
];

export const META_CRISIS_COMMUNITIES_BY_PLATFORM: Record<string, MetaCrisisCommunity[]> = {};
META_CRISIS_COMMUNITIES.forEach(c => {
  const key = c.platform;
  if (!META_CRISIS_COMMUNITIES_BY_PLATFORM[key]) {
    META_CRISIS_COMMUNITIES_BY_PLATFORM[key] = [];
  }
  META_CRISIS_COMMUNITIES_BY_PLATFORM[key].push(c);
});

export function getCommunitiesByPlatform(platform: string): MetaCrisisCommunity[] {
  return META_CRISIS_COMMUNITIES.filter(c => c.platform === platform);
}

export function getCommunitiesByProject(projectName: string): MetaCrisisCommunity[] {
  return META_CRISIS_COMMUNITIES.filter(c => 
    c.projectName?.toLowerCase().includes(projectName.toLowerCase())
  );
}
