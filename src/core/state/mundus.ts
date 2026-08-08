// HSCSG v15 OS — Tipos del módulo Mundus (asimilado de Sci-Hive datapoint "Mundus Live")
// Conocimiento/filosofía: símbolo de unidad global de IDETRA + Circular Exchange System.
// Isomorfo a CaaS (acceso por contribución, no por dinero).

export interface MundusPillar {
  key: string
  name: string
  hscsgLink: string // ruta interna HSCSG que lo implementa
  sourceUrl: string // sitio original de la iniciativa IDETRA
  desc?: string
  descKey?: string
}

export interface MundusState {
  manifesto: string
  symbol: 'blue-circle'
  pillars: MundusPillar[]
}
