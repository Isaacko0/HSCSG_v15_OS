# colonySDK — Backup Quirúrgico (JoinColony)

**Fuente:** https://github.com/JoinColony/colonySDK (redirect: ahora vive en `colonyJS/packages/sdk`)
**Stack:** TypeScript (parte del monorepo colonyJS)
**Licencia:** GPL-3.0
**Clone:** 153 archivos (es un espejo/mirror del paquete `sdk` de colonyJS).

## Qué es colonySDK
El "development kit" de Colony: una interfaz fácil de usar sobre los contratos del Network que oculta la complejidad EVM. Cubre **todo** lo que la dApp puede hacer, permitiendo operar una DAO programáticamente.

### API de alto nivel (ejemplo del README)
```typescript
import { ColonyNetwork, toEth } from '@colony/sdk';
const colonyNetwork = new ColonyNetwork(provider);
const colony = await colonyNetwork.getColony('my-colony');
const funding = await colony.getFunding();  // ROOT pot
```

### Conceptos que aporta a HSCSG
| Concepto SDK | Mapeo HSCSG |
|--------------|-------------|
| `ColonyNetwork` (singleton) | Registro federado de Nodos Cosateca |
| `colony.getColony(name)` | Resolución de Colectivo por identidad |
| `colony.getFunding()` | CaaS / Fondo Solarpunk (tesorería del nodo) |
| `colony.getDomains()` | Células / sub-colectivos |
| `colony.getReputation()` | AUT×CDS (contribución verificada) |
| `colony.getRoles()` | Roles de gobernanza (CDS) |

### Qué EXTRIRPAR
- Ethers provider, MetaMask, Gnosis Chain.
- Todo el runtime EVM.

### Qué ASIMILAR
- **Patrón de API fluida** (`network → colony → domain → funding/reputation/roles`): el módulo **Colectivo** de HSCSG debe exponer una API igual de navegable para el usuario del nodo.
- **getFunding()/getReputation()** como lectores de estado del nodo → `useAppStore()` selectores en HSCSG.
