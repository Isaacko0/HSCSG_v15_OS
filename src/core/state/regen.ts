// HSCSG v15 OS — Regen: directorio de ecotecnias + catálogo bioclimático (Directorio_Regen + Nidori asimilado)
// Extirpado: scraper UNAM, Dash/Plotly, APIs externas. Conservado: catálogo de ecotecnias y sistemas bioclimáticos.
export interface EcoTech {
  id: string
  name: string
  category: string
  provider: string
  description: string
}

export interface BioclimaticSystem {
  id: string
  name: string
  savingPct: number // % ahorro energético (Nidori: hasta 80%)
  description: string
}

export interface RegenState {
  ecotech: EcoTech[]
  systems: BioclimaticSystem[]
}

export function makeRegenState(): RegenState {
  // Seed de Nidori (10 sistemas, -80% energía) para arranque inmediato
  const nidori: BioclimaticSystem[] = [
    { id: 'b1', name: 'Techos verdes', savingPct: 80, description: 'Cubiertas vivas que regulan temperatura y reducen escorrentía' },
    { id: 'b2', name: 'Biofiltro de agua gris', savingPct: 70, description: 'Tratamiento natural de aguas grises para riego' },
    { id: 'b3', name: 'Captación pluvial', savingPct: 60, description: 'Recolección y almacenamiento de agua de lluvia' },
    { id: 'b4', name: 'Pozos canadienses', savingPct: 75, description: 'Ventilación y climatización pasiva subterránea' },
    { id: 'b5', name: 'Tubos terracota', savingPct: 40, description: 'Drenaje y mejora de suelos con materiales locales' },
    { id: 'b6', name: 'Bioconstrucción local', savingPct: 50, description: 'Materiales vernáculos y técnicas tradicionales' },
    { id: 'b7', name: 'Reactor LMSN', savingPct: 65, description: 'Tratamiento de efluentes con luz solar' },
    { id: 'b8', name: 'Energía solar', savingPct: 80, description: 'Aprovechamiento de radiación solar pasiva y activa' },
    { id: 'b9', name: 'Energía eólica', savingPct: 70, description: 'Generación de electricidad con viento' },
    { id: 'b10', name: 'Biopiscinas', savingPct: 55, description: 'Piscinas con filtración natural sin químicos' },
  ]
  return { ecotech: [], systems: nidori }
}
