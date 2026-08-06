// HSCSG v15 OS — Lógica del módulo Civilizaciones (horizontes postmonetarios)
import type { CivilizacionesState, CivilizationLink } from '@core/state/civilizaciones'

// Proyectos hermanos de civilización postmonetaria / economía basada en recursos.
// Isomorfos a CaaS: acceso por contribución y base material, no por dinero.
export const CIVILIZATION_LINKS: CivilizationLink[] = [
  {
    key: 'auravana',
    name: 'Auravana',
    url: 'https://auravana.org/',
    desc: 'Diseños modulares gratuitos de comunidades, con análisis exhaustivo y sociológico territorial de las civilizaciones a prescindir.',
  },
  {
    key: 'one-community',
    name: 'One Community',
    url: 'https://onecommunityglobal.org/',
    desc: 'Diseños bioconstructivos de germinación y estímulo paisajístico variado, con los mejores componentes recreativos y explorativos sinérgicos de los aspectos de la vida en código libre.',
  },
  {
    key: 'the-venus-project',
    name: 'The Venus Project',
    url: 'https://www.thevenusproject.com/',
    desc: 'Economía basada en recursos: adaptabilidad a cualquier tecnología sin dejar a nadie atrás, con implicaciones de continuidad planetaria.',
  },
  {
    key: 'resource-based-economy',
    name: 'Resource Based Economy',
    url: 'https://www.resourcebasedeconomy.org/',
    desc: 'Las únicas limitaciones son las que nos imponemos a nosotros mismos. Transición a una civilización sin escasez ni dinero.',
  },
]

export function makeCivilizacionesState(): CivilizacionesState {
  return { links: CIVILIZATION_LINKS }
}
