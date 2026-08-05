# BACKUP ORIGINAL — trustlines-protocol / contracts
# Copia de seguridad del repositorio analizado (2026-08-05) antes de asimilarlo a HSCSG v15 OS.
# Fuente: https://github.com/trustlines-protocol/contracts (README.rst, contracts/currency-network/)

---

## Qué es

**Trustlines Protocol** — plataforma de contratos inteligentes (Solidity, EVM) para **créditos
mutuos / monedas comunitarias**. Núcleo en `contracts/currency-network/`:
- `CurrencyNetwork.sol`: abre/actualiza/cierra trustlines, transferencias por ruta, fees e intereses.
- `DebtTracking.sol`: deuda bilateral simétrica (`getDebt(debtor, creditor)` = opuesto de
  `getDebt(creditor, debtor)`), `increaseDebt`, `_reduceDebt`, lista de deudores.
- `debitTransfer(_value, _maxFee, _path, ...)`: el **acreedor** inicia; requiere deuda ≥ valor;
  reduce deuda y media la transferencia por la ruta.
- `Onboarding.sol`: reglas para abrir trustlines.
- `Exchange`, `Identity` (meta-transactions/delegates) como capas adicionales.

Modelo: los usuarios se otorgan **líneas de crédito mutuas** (creditlineGiven/Received). El saldo
entre dos pares es deuda; las transferencias se enrutan por la red de trustlines (sin dinero
centralizado). Intereses por mantener deuda.

## Relevancia para HSCSG v15 OS

Es el **mecanismo de crédito mutuo del CaaS/ZNU postmonetario**: en vez de dinero emitido por
arriba, los miembros se extienden **crédito mutuo** según confianza (Web of Trust del Solarpunk) y
necesidad (Ley I). Isomorfismo directo con HSCSG:
- trustline = crédito ZNU entre dos miembros del colectivo.
- deuda bilateral = saldo ZNU (simétrico).
- debitTransfer por ruta = pago ZNU mediado por la red de confianza.
- interés = (opcional) incentivo a cerrar deuda / regenerar.

> Nota: es Solidity/EVM pesado (solc, deploy tools, Python). Se asimila la **lógica de crédito
> mutuo** como módulo local React/Zustand (simulación fiel de DebtTracking + debitTransfer), sin
> EVM. El sustrato on-chain queda como puente futuro opcional; el OS funciona offline.
