# colonyJS — Backup Quirúrgico (JoinColony)

**Fuente:** https://github.com/JoinColony/colonyJS
**Stack:** TypeScript monorepo (pnpm), Ethers.js, GraphQL client
**Paquetes:** `@colony/sdk`, `@colony/colony-js`, `@colony/core`, `@colony/contractor`, `@colony/events`, `@colony/tokens`
**Licencia:** GPL-3.0
**Clone:** 1790 archivos, README presente, LICENSE presente.

## Qué es colonyJS
El monorepo de librerías TypeScript de referencia de Colony. Expone la API para interactuar con los contratos del Network: crear colonias, gestionar dominios, mover fondos, votar, reclamar reputación, etc.

### Paquetes relevantes para HSCSG
| Paquete | Rol | Utilidad HSCSG |
|---------|-----|----------------|
| `@colony/sdk` | Dev kit de alto nivel (oculta complejidad EVM) | **Patrón de API ergonómica** para gobernanza del nodo |
| `@colony/colony-js` | Implementación de referencia | Tipos de dominio, colony, funding, voting |
| `@colony/core` | Utilidades/tipos/constantes compartidas | **Modelo de datos**: Colony, Domain, Pot, Reputation, Token |
| `@colony/events` | Parseo de eventos on-chain | Patrón append-only / RAO (registro inmutable) |
| `@colony/tokens` | Bindings de contratos token | Token de gobernanza (vs ZNU) |
| `@colony/contractor` | Genera bindings TS de contratos | Patrón de codegen (no necesario en HSCSG offline) |

### Modelo de dominio (extraído de `@colony/core`)
```
ColonyNetwork
  └─ Colony (nodo)
       ├─ Domains[] (árbol: root → subdominios = células)
       ├─ Pots[] (tesorería por dominio)
       ├─ Tokens[] (CLNY, tokens de colonia)
       ├─ Reputation (por dominio, por usuario)
       └─ Roles/Permissions (por dominio)
```

### Leyes MJ
- **Ley I:** permisos por dominio limitan daño; HSCSG: MJ Gate.
- **Ley II:** reputación por trabajo → AUT×CDS; tokens por contribución.
- **Ley III:** eventos append-only → RAO.

### Qué EXTRIRPAR
- Ethers.js / provider MetaMask / Gnosis Chain.
- Todo el runtime EVM y el manejo de gas.
- El codegen de contratos (`@colony/contractor`).

### Qué ASIMILAR
- **Tipos de dominio** (`lib/colony.ts`): Colony, Domain, Pot, Reputation — reutilizables para el módulo **Colectivo/CDS** de HSCSG.
- **Patrón de API** del SDK: funciones simples que ocultan complejidad → el módulo de gobernanza HSCSG debe ser igual de ergonómico para el usuario del nodo.
- **Estructura de eventos** → RAO (registro inmutable de decisiones).
