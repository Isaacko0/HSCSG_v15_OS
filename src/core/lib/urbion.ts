// URBION — Ontogénesis Urbana
// Fuente: holo urban HSCSG.md (Vault Obsidian del usuario)
// Última actualización: 2026-08-22

export interface CiudadViva {
  id: string
  nombre: string
  tipo: 'smart' | 'cognitive' | 'responsive' | 'symbiotic'
  descripcion: string
  principios: string[]
}

export interface OntogenesisUrbana {
  tesis: string
  desplazamiento: {
    de: string
    a: string
  }[]
  horizonte: string
  preguntaDecisiva: string
}

export const URBION: OntogenesisUrbana = {
  tesis: 'La ciudad no es una máquina que se optimiza ni una plataforma que se gestiona. Es un organismo sociotécnico en devenir, cuya identidad no reside en su forma estable, sino en su capacidad de preservar coherencia organizacional bajo transformación continua.',
  desplazamiento: [
    { de: 'La planificación', a: 'El devenir' },
    { de: 'La optimización', a: 'La viabilidad' },
    { de: 'El control', a: 'El acoplamiento estructural' }
  ],
  horizonte: 'Ciudades Vivas Simbióticas, donde la tecnología no se impone sobre la vida urbana, el territorio y la cultura, sino que se acopla estructuralmente a ellos.',
  preguntaDecisiva: '¿Qué tipo de coherencia urbana necesitamos para sostener nuevas formas de vida colectiva?'
}

export const CIUDADES_VIVAS: CiudadViva[] = [
  {
    id: 'smart',
    nombre: 'Smart City',
    tipo: 'smart',
    descripcion: 'Ciudad con sensores y datos, pero ontológicamente estática.',
    principios: ['Sensores', 'Datos', 'Dashboards', 'Gemelos digitales']
  },
  {
    id: 'cognitive',
    nombre: 'Cognitive City',
    tipo: 'cognitive',
    descripcion: 'Ciudad que aprende de sus habitantes.',
    principios: ['Aprendizaje', 'Adaptación', 'Gobernanza cognitiva']
  },
  {
    id: 'responsive',
    nombre: 'Responsive City',
    tipo: 'responsive',
    descripcion: 'Ciudad que responde a las necesidades de sus ciudadanos.',
    principios: ['Respuesta', 'Participación', 'Diseño ciudadano']
  },
  {
    id: 'symbiotic',
    nombre: 'Symbiotic City',
    tipo: 'symbiotic',
    descripcion: 'Ciudad viva donde tecnología, territorio y cultura co-evolucionan.',
    principios: ['Co-evolución', 'Acpalamiento estructural', 'Vida urbana']
  }
]

export function getCiudadViva(id: string): CiudadViva | undefined {
  return CIUDADES_VIVAS.find(c => c.id === id)
}

export function isCiudadViva(ciudad: CiudadViva): boolean {
  return ciudad.tipo === 'symbiotic'
}
