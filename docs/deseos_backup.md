# DeseOS / Contento.pro — Backup Quirúrgico

**Fuente:** `DeseOS_project1.zip` (Pepe Sevilla / Soul.MBA). Extraído a `Documents/DeseOS_project1_extract/`.
**Stack:** React 18.3 · TypeScript 5.3 · Vite 5 · Tailwind 3.3 · Zustand 4.5 · lucide-react · react-router-dom 6 · clsx. **IDÉNTICO al stack de HSCSG v15 OS** (verificado en `package.json`).
**Licencia:** MIT (en `LICENSE`).
**Dominio:** Sistema Operativo de Agencia de Marketing (BranDNA, escalera 5M, CRM/ICP, Strategic Brain, producción VITCH, Persuade, Pauta/medios, Pagos/facturación, Perfecciona, Publica).

## Módulos (P1–P11)
| Módulo | Nombre | Qué aporta a HSCSG |
|--------|--------|-------------------|
| P1 Personaliza | BranDNA (12 secciones: propósito, villano, promesa, método, voz, estética) | **Identidad de marca del nodo** (reusa patrón de `civilizaciones`/`mundus`) |
| P2 Productos | Escalera 5M (Magnet→Mini→Core→Mastermind→Mentorship), ecuación de valor, pricing | **Catálogo de bienes/servicios del nodo** (mapea a CaaS/ValueFlows) |
| P3 Personas | CRM (cascada/kanban) + ICP Builder (5 niveles consciencia, psychographics) | **Directorio de miembros/aliados** (mapea a `members` + Colony domains) |
| P4 Plan | Strategic Brain: meta→leads→alcance→piezas→inversión | **Planificación del nodo** (mapea a `plans` + Integral) |
| P5 Produce | VITCH (Video/Imagen/Texto/Carrusel/Historia), atomización | **Producción de contenido del nodo** (sin cambios de fondo) |
| P6 Persuade | Closer AI: inbox, objeciones, voz de marca | **Comunicación del nodo** (mapea a Colaberry) |
| P7 Pauta | Media Buyer: compra de medios, atribución | **Difusión** (anfibio: ZNU orgánico ↔ USD pagado) |
| P8 Pagos | Termómetro de ingresos: price/revenue/attributed USD, orgánico vs pagado | **ANFIBIO: ZNU/CaaS ↔ USD/Stripe** (ver abajo) |
| P9 Perfecciona | Mejora continua | **Retroalimentación del nodo** (mapea a Integral loop) |
| P10 Publica | Distribución automatizada | **Federación DTN/AP** |
| P11 Portfolio | Showcase de trabajos | **Portfolio del nodo** |

## Qué EXTRIRPAR (infra ajena, regla de la skill)
- **Stripe / pasarelas monetarias** → reemplazar por CaaS-BM/ZNU (modo postmonetario) o por wrapper USD opcional (modo conectado).
- **Google Analytics / ad-network APIs (Meta/Google Ads)** → reemplazar por métricas propias del nodo (RAO + Autómata).
- **Reconceptualizar "Pagos" como CaaS-BM/ZNU en vez de USD** (pero MANTENER la capacidad USD como modo conectado).

## Qué ASIMILAR (lógica pura)
- **BranDNA 12 secciones** → `lib/agencia.ts` (identidad de marca del nodo).
- **Escalera 5M** → catálogo de ofertas del nodo (`lib/agencia.ts` `OfferLadder`).
- **ICP Builder (5 niveles)** → perfiles de miembros/aliados.
- **Strategic Brain** → planificación inversa del nodo.
- **Termómetro de ingresos / atribución** → **motor anfibio de valor** (ver `docs/deseos_integration.md` §Arquitectura Anfibia).

### Arquitectura Anfibia (clave de esta asimilación)
El nodo HSCSG puede operar en DOS modos sin duplicar lógica:
1. **Modo Postmonetario (default offline):** todo valor se expresa en **ZNU** + acceso **CaaS-BM**. Los "precios" son `znuPrice`; los "ingresos" son `znuEarned` (Beneficio Neto vía Copiosis). Sin USD, sin Stripe.
2. **Modo Conectado (puente ReFi):** el nodo elige exponer ciertos bienes en **USD/USDC** para comercio externo (Nivel 3 del BRIEF). Los mismos datos (`price`, `attributed`, `revenue`) se renderizan en USD vía un **oráculo de paridad** (`priceParity` en `znu` state).

**Patrón de implementación:** un tipo `Value = { amount: number; unit: 'ZNU' | 'USD' }` y un selector `displayValue(v, mode, parity)` que traduce según el modo del nodo. La lógica de cálculo (escalera, termómetro, atribución orgánico/pagado) es **agnóstica a la unidad** — solo opera sobre `amount` y el render decide la etiqueta. Así DeseOS es 100% reutilizable: sus módulos Pagos/Pauta funcionan igual en ZNU que en USD.

> Esto resuelve el dilema: no se "extirpa" el dinero, se **hace anfibio**. El nodo soberano no depende del USD, pero puede nadar en él cuando conviene (comercio externo, deuda heredada, ReFi).
