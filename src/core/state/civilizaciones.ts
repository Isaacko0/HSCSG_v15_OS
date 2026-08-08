// HSCSG v15 OS — Tipos del módulo Civilizaciones (horizontes postmonetarios)
// Enlaces a proyectos hermanos de civilización postmonetaria / economía basada en recursos.

export interface CivilizationLink {
  key: string
  name: string
  url: string
  descKey: string // clave de i18n (civ.<key>) en lugar de desc fija
}

export interface CivilizacionesState {
  links: CivilizationLink[]
}
