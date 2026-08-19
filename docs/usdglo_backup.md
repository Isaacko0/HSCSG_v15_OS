# BACKUP — usdglo-celo (Glo Foundation: USDGLO stablecoin)

**Fecha:** 2026-08-19 · **Origen:** https://github.com/Glo-Foundation/usdglo-celo
**Clon:** `C:\Users\Isaacko0\Documents\usdglo-celo` (71 archivos) · **Backup:** `usdglo-celo_BACKUP_20260819_004019`
**Licencia:** MIT (SPDX en contratos) · **Red:** Celo (originario), también Mainnet + Polygon desplegado.

## Qué es

**USDGLO** ("Glo Dollar") = stablecoin con propósito del Glo Foundation (financiamiento global / UBI). Contratos Solidity Foundry/Hardhat, v1→v4 (v2 actual). ERC20Upgradeable con gobernanza de roles. Ya desplegado en Mainnet/Polygon.

## Lógica del contrato (USDGLO_V2.sol — cita precisa)

```solidity
contract USDGlobalIncomeCoinV2 is Initializable, ERC20UpgradeableV2, PausableUpgradeable,
    AccessControlUpgradeable, UUPSUpgradeable {
  PAUSER_ROLE, MINTER_ROLE, DENYLISTER_ROLE, UPGRADER_ROLE
  initialize(admin) → __ERC20_init("Glo Dollar","USDGLO")
  pause()/unpause()            // PAUSER_ROLE
  denylist()/undenylist()      // DENYLISTER_ROLE (frozen funds)
  destroyDenylistedFunds()     // quema de fondos denylistados
  mint(to, amount)             // MINTER_ROLE, whenNotDenylisted
  burn(amount)                 // caller
  // invariant: sumOfBalances <= maxAllowed (forge test)
}
```

Roles (AccessControl): admin, minter, pauser, denylister, upgrader (UUPS proxy upgradeable).

## Por qué es fuente primaria para HSCSG

USDGLO es **stablecoin con propósito (ReFi/UBI)** — isomorfo a `hscsg-monetary-integration` (G1/Túmin/PAR) y al **Nivel 3 ReFi** de HSCSG (oráculo priceParity en modo conectado). La lógica de minter/pauser/denylister es el patrón de **gobernanza de emisión** que ZNU necesita (quién acuña, quién pausa, quién denylista). Glo Foundation = evidencia de que stablecoins con propósito existen y funcionan en mainnet.

## Infraestructura ajena a extirpar (principio anfibio)

- **Despliegue en mainnet/Polygon/Celo:** dependencia de red externa. En HSCSG, USDGLO es el **oráculo de paridad** en modo conectado (no la sede).
- **Defender/Relayer/Hardhat:** tooling de despliegue. Extirpar; conservar solo la lógica de contrato como referencia.
- **Se conserva:** patrón de stablecoin con roles (minter/gobernanza), invariant sum-of-balances, denylist (justicia/restauración), UUPS upgradeable. Mapear a `lib/valueDual.ts` (ZNU↔USD anfibio) + rol MINTER de CaaS-BM.

## Isomorfismo HSCSG

| USDGLO | HSCSG | Ley MJ |
|---|---|---|
| MINTER_ROLE | Rol de acuñación ZNU/CaaS-BM | II: emisión por contribución |
| PAUSER_ROLE | Pausa de malla ante sobrecarga (γ-CARMIS) | I: no-daño |
| DENYLISTER_ROLE | Denylist de actor dañino (Kleros) | I: anti-daño |
| sumOfBalances invariant | Cap de emisión ZNU (demurrage) | II |
| UUPS upgradeable | Upgrades de contrato por CDS | CDS |
| Glo Foundation (UBI) | ZNU postmonetario (acceso libre Nivel 1) | II |
