# BACKUP ORIGINAL — sepu85 / collabberry-berry-vesting
# Copia de seguridad del repositorio analizado (2026-08-05) antes de asimilarlo a HSCSG v15 OS.
# Fuente: https://github.com/sepu85/collabberry-berry-vesting (readme.md, contracts/, scripts/, tests/)

---

## Qué es

Proyecto **Hardhat + OpenZeppelin (Solidity, EVM/L2)** de **vesting de tokens $BERRY** para inversores.
Contrato `BerryInvestorVesting.sol`: single-beneficiary, **inmutable**, vesting piecewise con unlocks
mensuales discretos. Schedule = array de `(timestamp, amount)` estrictamente ascendente.

### Mecánica clave (contrato)
- `totalUnlocked()`: suma las entradas del schedule cuyo `timestamp <= now`.
- `releasable()`: `totalUnlocked() - claimed`.
- `release()`: transfiere `releasable()` al beneficiario (SafeERC20, patrón CEI).
- `setBeneficiary()` post-TGE, una sola vez, antes de `beneficiarySetDeadline`.
- `renounceAfterBeneficiarySet()`: owner quema permisos (trust-minimized).
- No upgradeable, no drains: solo `release()` mueve tokens.

### Schedule de ejemplo (deployVesting.ts)
- A (30%): meses 25–30 → 6 unlocks de 5% cada uno.
- Pausa: meses 31–36 → sin unlocks.
- B (70%): meses 37–43 → ~7 unlocks de 10% cada uno.

## Relevancia para HSCSG v15 OS

Es la **capa contractual/auditabilidad del CaaS/ZNU** que le faltaba al OS: en vez de promesas de
papel sobre reparto y propiedad del nodo, el vesting hace que la participación se **gane con el
tiempo y los aportes reales** (AUT), de forma auditable. Mapea a:
- **Vesting de contribuciones CaaS**: un miembro "vestea" su participación en el nodo según lo que
  aporta (medido por AUT/CDS), no por comprarla.
- **Vesting postmonetario de ZNU**: el reparto se libera por tramos atados a hitos de base material.

> Nota: es Solidity/EVM (requiere Hardhat, node, chain). Se asimila la **lógica de vesting** como
> módulo local React/Zustand (simulación del contrato, sin EVM). El sustrato on-chain queda como
> puente futuro opcional; el OS funciona offline con la simulación.
