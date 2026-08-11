// Gaia Union — Organismo Vivo Regenerativo (ontología de ecosistema).
// Asimilado del documento .md local "El Plan Maestro Integrado para la Emergencia Planetaria".
// No es infra física: es el MODELO de cuerpo vivo que el nodo HSCSG encarna.
// Conecta con /pipeline: el loop mecánico se reencuadra como sistemas vitales.

export type OrgLevel = 'celula' | 'tejido' | 'organo' | 'sistema' | 'organismo'

export interface LevelDef {
  id: OrgLevel
  label: string
  example: string
  /** módulo HSCSG que lo encarna */
  hscsg: string
}

// Niveles de organización (Persona→Célula ... → Organismo)
export const LEVELS: LevelDef[] = [
  { id: 'celula', label: 'Célula', example: 'Persona (capacidades, propósito)', hscsg: 'Miembro del Colectivo / Automat' },
  { id: 'tejido', label: 'Tejido', example: 'Equipo / Comunidad / Red', hscsg: 'Colectivo / Círculo Gaia' },
  { id: 'organo', label: 'Órgano', example: 'Proyecto / Cooperativa / Escuela', hscsg: 'Tekitl / Bounty / Dominio CDS' },
  { id: 'sistema', label: 'Sistema Vital', example: 'Coordina órganos y tejidos', hscsg: '/pipeline (loop anidado)' },
  { id: 'organismo', label: 'Organismo Vivo', example: 'Gaia Union / Nodo Cosateca', hscsg: 'HSCSG v15 OS completo' },
]

export type VitalSystem =
  | 'nervioso' | 'circulatorio' | 'homeostatico' | 'metabolico'
  | 'aprendizaje' | 'evolutivo' | 'investigacion' | 'territorial' | 'territorialFisico'

export interface VitalOrgan {
  id: VitalSystem
  label: string
  analogo: string // sistema biológico
  funcion: string
  hscsg: string // módulo/ÓRGANO HSCSG
  ley: 'I' | 'II' | 'III'
}

// Los 9 sistemas vitales del documento, mapeados a órganos HSCSG
export const VITAL_ORGANS: VitalOrgan[] = [
  { id: 'nervioso', label: 'Gaia Hub & OS', analogo: 'Sistema Nervioso / Cerebro Distribuido', funcion: 'Conectar, coordinar, hacer visible, inteligencia colectiva', hscsg: '/pipeline (FRS + Matchmaker) · Aside/Header', ley: 'III' },
  { id: 'circulatorio', label: 'Gaia Fund', analogo: 'Sistema Circulatorio', funcion: 'Canalizar recursos por contribución', hscsg: 'ZNU / CaaS / ITC', ley: 'II' },
  { id: 'homeostatico', label: 'Gaia DAO (Org)', analogo: 'Homeostático / Endocrino / Inmune', funcion: 'Custodiar bienes comunes, redistribuir, equilibrar', hscsg: 'CDS (Consejo de Dominios) · Wisdom Council', ley: 'I' },
  { id: 'metabolico', label: 'Gaia Market', analogo: 'Metabólico / Intercambio', funcion: 'Circular valor libre y regenerativamente', hscsg: 'Solarpunk / Tekitl / Trustlines', ley: 'II' },
  { id: 'aprendizaje', label: 'Gaia School of Life', analogo: 'Aprendizaje / Memoria', funcion: 'Educación continua, sabiduría ancestral', hscsg: '/aprender (retos + knowledge)', ley: 'III' },
  { id: 'evolutivo', label: 'Gaia Impact & Innovation Hub', analogo: 'Evolutivo', funcion: 'Incubar/acelerar nuevas iniciativas', hscsg: '/integral (COS) · Bounty', ley: 'II' },
  { id: 'investigacion', label: 'Gaia BioLabs', analogo: 'Investigación / Experimentación', funcion: 'Prototipar soluciones, ciencia participativa', hscsg: '/oraculo (hechos) · /verificacion', ley: 'III' },
  { id: 'territorialFisico', label: 'Gaia BioHabitats', analogo: 'Entornos de Vida', funcion: 'Territorios físicos/ecológicos (ecovaldeas, fincas)', hscsg: '/base (Base Material)', ley: 'I' },
  { id: 'territorial', label: 'Gaia BioHubs', analogo: 'Centros de Conexión Territorial', funcion: 'Nodos físicos de encuentro entre nodos', hscsg: 'Federación DTN/AP (nodos)', ley: 'I' },
]

// Constitución = ADN; Código Genético = valores (filtro MJ Gate)
export const CONSTITUTION_ADN = 'Materialismo Jerárquico (Leyes I/II/III) + CaaS'
export const GENETIC_CODE: { value: string; ley: 'I' | 'II' | 'III' }[] = [
  { value: 'Regeneración', ley: 'I' },
  { value: 'Cooperación', ley: 'II' },
  { value: 'Transparencia', ley: 'III' },
  { value: 'Diversidad', ley: 'I' },
  { value: 'Soberanía', ley: 'I' },
  { value: 'Interdependencia', ley: 'II' },
  { value: 'Amor', ley: 'II' },
  { value: 'Servicio', ley: 'II' },
]

export interface GaiaUnionState {
  // el organismo es derivado de los demás módulos; aquí solo el "ADN" editable del nodo
  constitution: string
  geneticCode: string[]
  /** epigenética: modo de expresión actual (no altera la esencia) */
  epigeneticMode: 'estable' | 'adaptativo'
}

export function makeGaiaUnionState(): GaiaUnionState {
  return {
    constitution: CONSTITUTION_ADN,
    geneticCode: GENETIC_CODE.map((g) => g.value),
    epigeneticMode: 'adaptativo',
  }
}

/** salud del organismo = cobertura de órganos vivos (isomorfo a systemHealth/pipelineHealth) */
export function organismVitality(organsAlive: number): number {
  return Math.round((organsAlive / VITAL_ORGANS.length) * 100)
}
