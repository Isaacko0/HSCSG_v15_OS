// HSCSG v15 OS — Lógica del módulo Mundus (asimilado de Sci-Hive "Mundus Live")
import type { MundusState, MundusPillar } from '@core/state/mundus'

// Manifiesto default de Mundus Live (Sci-Hive / IDETRA), versión no impositiva.
// Editable por el dueño del nodo desde la pantalla /mundus.
export const MUNDUS_MANIFESTO = `Un círculo azul, en cualquier lugar.
En el dorso de tu mano, en la portada de tu cuaderno.
Si te resuena, publícalo en redes o llévalo en una camiseta o una gorra.
Es solo una invitación a imaginar, juntos, un pálido punto azul más sano y cuerdo:
un hogar común que cuidamos porque podemos, no porque debamos.`

export const MUNDUS_PILLARS: MundusPillar[] = [
  { key: 'sci-hive', name: 'Sci-Hive', hscsgLink: '/verificacion', sourceUrl: 'https://sci-hive.com/', descKey: 'mundus.scihive' },
  { key: 'terra-formus', name: 'Terra Formus', hscsgLink: '/soberania', sourceUrl: 'https://terraformus.org/', descKey: 'mundus.terra' },
  { key: 'plannus', name: 'Plann.us', hscsgLink: '/tekitl', sourceUrl: 'https://plann.us/', descKey: 'mundus.plann' },
  { key: 'temet', name: 'Temet.app', hscsgLink: '/colaberry', sourceUrl: 'https://temet.app/', descKey: 'mundus.temet' },
]

export function makeMundusState(): MundusState {
  return {
    manifesto: MUNDUS_MANIFESTO,
    symbol: 'blue-circle',
    pillars: MUNDUS_PILLARS,
  }
}
