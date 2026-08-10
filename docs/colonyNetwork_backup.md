# colonyNetwork — Backup Quirúrgico (JoinColony)

**Fuente:** https://github.com/JoinColony/colonyNetwork
**Rama por defecto:** `develop` (la rama `master` está vacía; el contenido de contratos vive en `develop` o en submodule no inicializado en este clone `--depth`)
**Stack:** Solidity (Ethereum/Gnosis Chain), Truffle/Hardhat, EVM
**Licencia:** GPL-3.0 (ecosistema Colony)
**Estado del clone:** 0 archivos rastreados en disco (repo archivado / submodule de contratos; el código de contratos Network, Colony, Token, Voting, Funding, ColonyNetworkMaster, ENS, etc. NO se clonó íntegro por estructura de submódulos).

## Qué es Colony Network
Colony es un protocolo de **organizaciones autónomas (DAOs)** desplegado en Ethereum/Gnosis Chain. Su contribución central a HSCSG es el modelo de **gobernanza por reputación + tokens** y la **tesorería programable por dominios (pots)**.

### Componentes clave (contratos, según documentación del ecosistema)
| Contrato | Función | Isomorfismo HSCSG |
|----------|---------|-------------------|
| `ColonyNetwork` | Registro global de colonias, extensibil / metadatos | Registro de Nodos Cosateca federados |
| `Colony` | Una organización (colony) = un nodo soberano | Nodo Cosateca (Colectivo) |
| `Domain` (estructura en árbol) | Sub-equipos/circunscripciones con su propia tesorería | Células / sub-colectivos (Life Radius) |
| `Funding` (pots) | Presupuestos por pot; movimiento de fondos entre dominios | CaaS-BM reparto por AUT×CDS |
| `Voting` (reputación) | Voto ponderado por reputación (no 1-token-1-voto) | CDS (consentimiento por peso de contribución, no capital) |
| `Token` (CLNY/nativo) | Token de gobernanza + recompensa | ZNU (demurrage, paridad biofísica) |
| `Reputation` | Sistema de reputación ganado por trabajo real | AUT (Autonomía) × CDS — contribución verificada |
| `Vesting` (opciones de token) | Liberación de tokens por tiempo + hitos | Vesting ZNU (berry-vesting: hitos AUT, no tiempo) |
| `ArbitraryTransaction` | Ejecución de acciones on-chain por gobernanza | Autómata Soberano ejecuta acciones por MJ Gate |

### Leyes MJ aplicadas
- **Ley I (no dañar):** los contratos son auditados y la tesorería requiere quórum multisig; HSCSG: MJ Gate bloquea acciones que degraden base material.
- **Ley II (ganarse la vida soberanizando):** reputación se gana por trabajo → ZNU se emite por Value Equation (AUT×CDS). Vesting por hitos, no tiempo.
- **Ley III (lucidez):** transacciones append-only en blockchain (públicas); HSCSG: RAO inmutable + Modo Lucidez.

### Qué EXTRIRPAR (no se asimila el Solidity/EVM)
- Toda la capa de contratos Solidity, despliegue EVM, gas, wallets MetaMask.
- Dependencias de Gnosis Chain / Ethereum mainnet.
- Sistema de resolución de disputas de Colony (arbitraje externo).

### Qué ASIMILAR (lógica pura / patrón conceptual)
- **Estructura de dominios en árbol** → células/sub-nodos Cosateca federados.
- **Reputación por trabajo** → AUT×CDS como base de voz/gobernanza (no tokens-especulativos).
- **Tesorería por pots/funding** → CaaS-BM reparto de excedentes por contribución.
- **Voting por reputación** → CDS con peso de contribución, no capital.
- **Vesting por hitos** → ya asimilado (berry-vesting) pero Colony confirma el patrón de "vesting por mérito no tiempo".

> Nota: el clone local está vacío por la estructura de submódulos de Colony. La asimilación se basa en la **documentación pública del protocolo** (whitepaper, docs.colony.io) y en los repos hermanos colonyJS/colonySDK/colony-gql que SÍ contienen código utilizable para entender la API de gobernanza.
