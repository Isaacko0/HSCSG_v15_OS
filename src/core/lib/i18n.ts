// HSCSG v15 OS — Diccionario i18n (ES / EN / PT-BR)
// Traduce el shell: navegación, Header, títulos de módulos y etiquetas comunes.
// El contenido asimilado (datos de cada módulo) se deja en su idioma original.

export type Lang = 'es' | 'en' | 'pt'

export const LANG_LABELS: Record<Lang, string> = {
  es: 'Español',
  en: 'English',
  pt: 'Português (BR)',
}

// Diccionario de claves de UI. Cada clave tiene las 3 variantes.
type Dict = Record<string, Record<Lang, string>>

export const I18N: Dict = {
  // Brand / Header
  'app.name': { es: 'HSCSG v15 OS', en: 'HSCSG v15 OS', pt: 'HSCSG v15 OS' },
  'app.subtitle': {
    es: 'Nodo Cosateca · Sistema operativo comunitario postmonetario',
    en: 'Cosateca Node · Post-monetary community operating system',
    pt: 'Nó Cosateca · Sistema operacional comunitário pós-monetário',
  },
  'lang.change': { es: 'Idioma', en: 'Language', pt: 'Idioma' },
  'lucidez.on': { es: 'Modo Lucidez', en: 'Lucidity Mode', pt: 'Modo Lucidez' },
  'lucidez.off': { es: 'Modo claro', en: 'Light mode', pt: 'Modo claro' },

  // Navegación (labels de Aside)
  'nav.home': { es: 'Inicio', en: 'Home', pt: 'Início' },
  'nav.base': { es: 'Base Material', en: 'Material Base', pt: 'Base Material' },
  'nav.lucidez': { es: 'Lucidez', en: 'Lucidity', pt: 'Lucidez' },
  'nav.colectivo': { es: 'Colectivo', en: 'Collective', pt: 'Coletivo' },
  'nav.automata': { es: 'Autómata Soberano', en: 'Sovereign Automaton', pt: 'Autômato Soberano' },
  'nav.znu': { es: 'ZNU', en: 'ZNU', pt: 'ZNU' },
  'nav.verificacion': { es: 'Verificación', en: 'Verification', pt: 'Verificação' },
  'nav.automat': { es: 'Automat', en: 'Automat', pt: 'Automat' },
  'nav.orquestacion': { es: 'Orquestación', en: 'Orchestration', pt: 'Orquestração' },
  'nav.caas': { es: 'CaaS · Comunidad', en: 'CaaS · Community', pt: 'CaaS · Comunidade' },
  'nav.solarpunk': { es: 'Solarpunk · Don', en: 'Solarpunk · Gift', pt: 'Solarpunk · Dom' },
  'nav.colaberry': { es: 'Colaberry · Agente', en: 'Colaberry · Agent', pt: 'Colaberry · Agente' },
  'nav.priorizar': { es: 'Priorizar · Colectivo', en: 'Prioritize · Collective', pt: 'Priorizar · Coletivo' },
  'nav.vesting': { es: 'Vesting · ZNU', en: 'Vesting · ZNU', pt: 'Vesting · ZNU' },
  'nav.trustlines': { es: 'Trustlines · Crédito', en: 'Trustlines · Credit', pt: 'Trustlines · Crédito' },
  'nav.tekitl': { es: 'Tekitl · Proyectos', en: 'Tekitl · Projects', pt: 'Tekitl · Projetos' },
  'nav.soberania': { es: 'Soberanía · 13 Pilares', en: 'Sovereignty · 13 Pillars', pt: 'Soberania · 13 Pilares' },
  'nav.integral': { es: 'Integral · Loop', en: 'Integral · Loop', pt: 'Integral · Loop' },
  'nav.mundus': { es: 'Mundus · Unidad', en: 'Mundus · Unity', pt: 'Mundus · Unidade' },
  'nav.life': { es: 'Life · Organizador', en: 'Life · Organizer', pt: 'Life · Organizador' },
  'nav.civilizaciones': { es: 'Civilizaciones', en: 'Civilizations', pt: 'Civilizações' },
  'nav.celulas': { es: 'Células · Tejido', en: 'Cells · Tissue', pt: 'Células · Tecido' },

  // Títulos de módulos (h1)
  'title.base': { es: 'Base Material', en: 'Material Base', pt: 'Base Material' },
  'title.lucidez': { es: 'Lucidez', en: 'Lucidity', pt: 'Lucidez' },
  'title.colectivo': { es: 'Colectivo', en: 'Collective', pt: 'Coletivo' },
  'title.automata': { es: 'Autómata Soberano', en: 'Sovereign Automaton', pt: 'Autômato Soberano' },
  'title.znu': { es: 'ZNU', en: 'ZNU', pt: 'ZNU' },
  'title.verificacion': { es: 'Verificación', en: 'Verification', pt: 'Verificação' },
  'title.automat': { es: 'Automat', en: 'Automat', pt: 'Automat' },
  'title.orquestacion': { es: 'Orquestación', en: 'Orchestration', pt: 'Orquestração' },
  'title.caas': { es: 'CaaS · Comunidad como Servicio', en: 'CaaS · Community as a Service', pt: 'CaaS · Comunidade como Serviço' },
  'title.solarpunk': { es: 'Solarpunk · Economía del Don', en: 'Solarpunk · Gift Economy', pt: 'Solarpunk · Economia do Dom' },
  'title.colaberry': { es: 'Colaberry · Agente Soberano', en: 'Colaberry · Sovereign Agent', pt: 'Colaberry · Agente Soberano' },
  'title.priorizar': { es: 'Priorizar · Colectivo', en: 'Prioritize · Collective', pt: 'Priorizar · Coletivo' },
  'title.vesting': { es: 'Vesting · ZNU', en: 'Vesting · ZNU', pt: 'Vesting · ZNU' },
  'title.trustlines': { es: 'Trustlines · Crédito Mutuo', en: 'Trustlines · Mutual Credit', pt: 'Trustlines · Crédito Mútuo' },
  'title.tekitl': { es: 'Tekitl · Proyectos', en: 'Tekitl · Projects', pt: 'Tekitl · Projetos' },
  'title.soberania': { es: 'Soberanía · 13 Pilares', en: 'Sovereignty · 13 Pillars', pt: 'Soberania · 13 Pilares' },
  'title.integral': { es: 'Integral · Loop', en: 'Integral · Loop', pt: 'Integral · Loop' },
  'title.mundus': { es: 'Mundus · Unidad', en: 'Mundus · Unity', pt: 'Mundus · Unidade' },
  'title.life': { es: 'Life · Organizador', en: 'Life · Organizer', pt: 'Life · Organizador' },
  'title.civilizaciones': { es: 'Civilizaciones · Horizontes postmonetarios', en: 'Civilizations · Post-monetary horizons', pt: 'Civilizações · Horizontes pós-monetários' },
  'title.celulas': { es: 'Células · Tejido social fractal', en: 'Cells · Fractal social tissue', pt: 'Células · Tecido social fractal' },

  // Home
  'home.welcome': {
    es: 'Bienvenido al Nodo Cosateca',
    en: 'Welcome to the Cosateca Node',
    pt: 'Bem-vindo ao Nó Cosateca',
  },
  'home.tagline': {
    es: 'Sistema operativo comunitario postmonetario sobre el Materialismo Jerárquico y el CaaS.',
    en: 'Post-monetary community OS built on Hierarchical Materialism and CaaS.',
    pt: 'Sistema operacional comunitário pós-monetário sobre o Materialismo Hierárquico e o CaaS.',
  },
  'home.modules': { es: 'Módulos', en: 'Modules', pt: 'Módulos' },
  'home.open': { es: 'Abrir', en: 'Open', pt: 'Abrir' },

  // Común
  'common.save': { es: 'Guardar', en: 'Save', pt: 'Salvar' },
  'common.cancel': { es: 'Cancelar', en: 'Cancel', pt: 'Cancelar' },
  'common.add': { es: 'Añadir', en: 'Add', pt: 'Adicionar' },
  'common.remove': { es: 'Quitar', en: 'Remove', pt: 'Remover' },
}

// Helper: devuelve la traducción de una clave para un idioma.
export function t(key: string, lang: Lang): string {
  const entry = I18N[key]
  if (!entry) return key
  return entry[lang] ?? entry.es
}
