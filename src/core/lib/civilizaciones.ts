// HSCSG v15 OS — Lógica del módulo Civilizaciones (horizontes postmonetarios)
import type { CivilizacionesState, CivilizationLink } from '@core/state/civilizaciones'

// Proyectos hermanos de civilización postmonetaria / economía basada en recursos.
// Isomorfos a CaaS: acceso por contribución y base material, no por dinero.
export const CIVILIZATION_LINKS: CivilizationLink[] = [
  {
    key: 'auravana',
    name: 'Auravana',
    url: 'https://auravana.org/',
    descKey: 'civ.auravana',
  },
  {
    key: 'one-community',
    name: 'One Community',
    url: 'https://onecommunityglobal.org/',
    descKey: 'civ.onecommunity',
  },
  {
    key: 'the-venus-project',
    name: 'The Venus Project',
    url: 'https://www.thevenusproject.com/',
    descKey: 'civ.thevenusproject',
  },
  {
    key: 'resource-based-economy',
    name: 'Resource Based Economy',
    url: 'https://www.resourcebasedeconomy.org/',
    descKey: 'civ.resourcebasedeconomy',
  },
  {
    key: 'copiosis',
    name: 'Copiaosis',
    url: 'https://copiosis.net/',
    descKey: 'civ.copiosis',
    wide: true,
  },
]

export function makeCivilizacionesState(): CivilizacionesState {
  return { links: CIVILIZATION_LINKS }
}
