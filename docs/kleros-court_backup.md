# Kleros — Backup Quirúrgico (Familia Court / Protocol V1)

**Fuentes (5 repos):**
- `kleros/kleros` (Protocol V1 — contratos core: KlerosLiquid, DisputeResolver, Arbitrable)
- `kleros/kleros-interaction` (SDK/helpers de interacción con el court)
- `kleros/court` (interfaz/tooling del tribunal)
- `kleros/xdai-kleros-liquid` (despliegue en Gnosis Chain)
- `kleros/court-notifications-bot` (notificaciones de dispute)

**Stack:** Solidity (EVM), Ethers.js, Gnosis Chain; bot en TS.
**Licencia:** GPL-3.0 (ecosistema Kleros).

## Qué es Kleros
Kleros es un **protocolo de arbitraje descentralizado** ("justicia como servicio"). Jurados anónimos resuelven disputas basándose en evidencia, con incentivos económicos (staking de PNK, penización por voto minoritario). Es el referente mundial de **resolución de conflictos por criptoeconomía**.

### Componentes clave
| Contrato / Módulo | Función | Isomorfismo HSCSG |
|-------------------|---------|-------------------|
| `KlerosLiquid` / `KlerosCourt` | Tribunal principal, registro de jurados | CDS_Jurados (órgano de resolución) |
| `DisputeResolver` | Resuelve disputes de contratos arbitrables | CDS ratifyIntegralDecision + RAO |
| `Arbitrable` (interfaz) | Contratos que piden arbitraje | Autómata (acción sujeta a gate) |
| `KlerosLiquid staking (PNK)` | Jurados stakean PNK para ser sorteados | AUT×CDS (reputación por contribución honesta) |
| `VoteCoins` / `Vote` | Voto de jurados por opción | CDS Decision Record |
| `Appeal` / `Appeal payment` | Apelaciones (subcortes) | Recurso en CDS_Jurados |
| `Evidence` (estándar ERC-1497) | Presentación de evidencia | RAO (registro inmutable) |
| `Notification bot` | Avisa a jurados/partes | Eventos append-only → RAO |

### Leyes MJ
- **Ley I:** penización al jurado deshonesto (voto minoritario pierde PNK) → MJ Gate bloquea acción que daña base.
- **Ley II:** el jurar bien es trabajo real recompensado → AUT×CDS; la voz no se compra.
- **Ley III:** evidencia + votos son públicos (append-only) → RAO inmutable + Modo Lucidez.

### Qué EXTRIRPAR
- Solidity / EVM / Gnosis Chain / gas / MetaMask.
- Staking de PNK especulativo (token ERC-20).
- Todo el runtime de disputes on-chain.

### Qué ASIMILAR (lógica pura)
- **Estructura de jurados** (sorteo + anonimato + rotación) → `lib/cds.ts` `CDS_Jurados` ya asimilado de Copiosis, pero Kleros confirma el patrón de **penalización por desacuerdo** (= reputación decreciente por voto contrario al consenso honesto).
- **Estándar de evidencia ERC-1497** → modelo de `EvidenceRecord` en RAO.
- **Appeals** → recurso de decisión en CDS.
- **Incentivo honestidad por pérdida de stake** → `reputationDecay` en AUT×CDS (anti-sabotaje).
