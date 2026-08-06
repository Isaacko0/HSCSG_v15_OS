// HSCSG v15 OS — Lógica del módulo Mundus (asimilado de Sci-Hive "Mundus Live")
import type { MundusState, MundusPillar } from '@core/state/mundus'

// Manifiesto original de Mundus Live (Sci-Hive / IDETRA), traducido y preservado.
export const MUNDUS_MANIFESTO = `Dibuja un círculo azul. En cualquier lugar.
En el dorso de tu mano, en la portada de tu cuaderno.
Publícalo en redes, llévalo en una camiseta o una gorra.
Necesitamos mostrar que todos queremos lo mismo: un pálido punto azul, sano y cuerdo,
errante en el cosmos, impulsado por la forma más alta de intelecto que podamos reunir.`

export const MUNDUS_PILLARS: MundusPillar[] = [
  { key: 'sci-hive', name: 'Sci-Hive', hscsgLink: '/verificacion', sourceUrl: 'https://sci-hive.com/', desc: 'Elevar la calidad del diálogo mediante evidencia (SCI).' },
  { key: 'terra-formus', name: 'Terra Formus', hscsgLink: '/soberania', sourceUrl: 'https://terraformus.org/', desc: 'Promover cambio de forma estructurada y accionable.' },
  { key: 'plannus', name: 'Plann.us', hscsgLink: '/tekitl', sourceUrl: 'https://plann.us/', desc: 'Planear y ejecutar proyectos; pedir ayuda en la home.' },
  { key: 'temet', name: 'Temet.app', hscsgLink: '/colaberry', sourceUrl: 'https://temet.app/', desc: 'IA local, propiedad real de datos, compartir directo.' },
]

export function makeMundusState(): MundusState {
  return {
    manifesto: MUNDUS_MANIFESTO,
    symbol: 'blue-circle',
    pillars: MUNDUS_PILLARS,
  }
}
