# colony-gql — Backup Quirúrgico (JoinColony)

**Fuente:** https://github.com/JoinColony/colony-gql (monorepo)
**Stack:** TypeScript monorepo (GraphQL), Vue 3 (`colony-neue`), Apollo, codegen
**Paquetes:** `colony-gql` (schema/client GraphQL), `colony-neue` (frontend Vue 3), `colony-js` (wrapper), `colony-data` (datos/mock)
**Licencia:** ver repos hermanos (GPL-3.0)
**Clone:** 76 archivos, README presente.

## Qué es colony-gql
Capa de **GraphQL** que desacopla el frontend de los contratos EVM. Expone un schema tipado de colonias, dominios, funding, reputación, propuestas y eventos. `colony-neue` es el frontend nuevo en **Vue 3** que lo consume.

### Arquitectura (clave para HSCSG)
```
Contratos EVM ──indexador──> GraphQL Schema (colony-gql)
                                    │
                                    ▼
                              colony-neue (Vue 3 SPA)  ← UI de gobernanza
```

### Lo que aporta a HSCSG
| Elemento | Mapeo HSCSG |
|----------|-------------|
| Schema GraphQL tipado | Tipos de `lib/colony.ts` (Dominio, Pot, Reputation) |
| Desacoplo frontend↔contratos | HSCSG ya es desacoplado: `lib/` (lógica pura) ↔ `state/` (store) ↔ pantalla |
| `colony-neue` Vue 3 | **Patrón de UI de gobernanza**: dashboard de dominios, tesorería, votación |
| Apollo cache | Store Zustand (estado local, offline-first) |

### Qué EXTRIRPAR
- GraphQL server, indexador de eventos on-chain, Apollo Client.
- Vue 3 (HSCSG usa React).
- Todo lo EVM.

### Qué ASIMILAR
- **Schema de dominios/funding/reputation** → tipos del módulo **Colectivo/CDS** en HSCSG.
- **Patrón de dashboard de gobernanza** de `colony-neue` (cómo presentar dominios, pots, reputación al usuario) → inspiración para la pantalla `/colectivo` y `/integral`.
- **Separación de capas** (contrato ↔ API ↔ UI) = ya aplicada en HSCSG (`lib` ↔ `state` ↔ `screens`).
