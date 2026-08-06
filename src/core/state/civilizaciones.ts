// HSCSG v15 OS — Tipos del módulo Civilizaciones (horizontes postmonetarios)
// Enlaces a proyectos hermanos de civilización postmonetaria / economía basada en recursos.

export interface CivilizationLink {
  key: string
  name: string
  url: string
  desc: string
}

export interface CivilizacionesState {
  links: CivilizationLink[]
}
