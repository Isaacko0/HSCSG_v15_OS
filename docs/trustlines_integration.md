# Integración trustlines-protocol/contracts → HSCSG v15 OS (+ CaaS)
# Tres perspectivas: Usuario · LLM · Proyecto HSCSG_v15_OS / CaaS

> Backup en `docs/trustlines_backup.md`.

---

## 0. Síntesis del repo

**Trustlines Protocol** (Solidity/EVM): red de **créditos mutuos / monedas comunitarias**. Núcleo
`CurrencyNetwork`: trustlines (líneas de crédito bilaterales), transferencias por ruta, fees,
intereses. `DebtTracking`: deuda bilateral simétrica (`getDebt(a,b) = -getDebt(b,a)`). `debitTransfer`:
el acreedor inicia y reduce deuda a lo largo de una ruta. Modelo: sin dinero centralizado, los
pares se otorgan crédito mutuo y las transferencias se enrutan por la red de confianza.

---

## 1. PERSPECTIVA USUARIO (miembro del colectivo HSCSG)

Como miembro quiero:
- Que mi **crédito nazca de la confianza mutua**, no de un banco/emisor central. Extender y recibir
  líneas de crédito ZNU con quienes confío (Web of Trust del Solarpunk).
- **Pagar a cualquiera del colectivo** aunque no tenga saldo directo con él: la red enruta el pago
  por mis trustlines (como Trustlines hace con `debitTransfer`).
- Ver mi **deuda bilateral** clara y simétrica (si debes 10, yo tengo +10 a tu favor).
- Que el sistema **no extraiga por intermediación**: fees e intereses son mínimos/regenerativos, no
  usura (Ley I: no dañar).

---

## 2. PERSPECTIVA LLM (asimilación)

| Trustlines (Solidity) | Asimilación HSCSG v15 OS |
|-----------------------|--------------------------|
| Trustline (creditlineGiven/Received) | Crédito ZNU mutuo entre dos miembros |
| `DebtTracking.getDebt(a,b)` simétrico | `getDebt(a,b)` local (deuda espejo) |
| `debitTransfer` por ruta | `debitTransfer(path, value)` mediado por la red |
| `increaseDebt` / `_reduceDebt` | `increaseDebt` / `reduceDebt` locales |
| Intereses por deuda | (opcional) incentivo a regenerar/equilibrar |
| Identity + meta-tx (delegate) | **EXTIRPADO**: el nodo local firma; no hay chain |

**Decisión**: NO deployo Solidity/solc/EVM. Asimilo la **lógica de crédito mutuo** como módulo
`Trustlines` local: réplica fiel de `DebtTracking` (`getDebt` simétrico, `increaseDebt`,
`reduceDebt`) + `debitTransfer` por ruta sobre ZNU. El sustrato on-chain queda como puente futuro.

---

## 3. PERSPECTIVA PROYECTO HSCSG / CaaS (monetario → postmonetario)

Trustlines aporta el **sustrato de crédito mutuo postmonetario** del CaaS: ZNU deja de ser un
token emitido por arriba y pasa a ser **crédito mutuo entre pares** respaldado por confianza +
base material.

### 3a. CaaS MONETARIO
- El OS se vende con "tu moneda nace de tu confianza mutua, no de un emisor" (diferenciador vs
  stablecoins/captura). Onboarding CaaS = abrir trustlines con el colectivo.

### 3b. POSTMONETARIO
- El crédito se **gana con AUT y confianza** (Web of Trust del Solarpunk), no con colateral
  especulativo.
- Las transferencias se enrutan por la red → **resiliencia** (si un par cae, la ruta encuentra otro).
- El interés (si existe) es **regenerativo**, no extractivo (Ley I).

### 3c. Isomorfismo con MJ
```
TRUSTLINES (creditos mutuos)        HSCSG v15 (MJ)
creditline por confianza           ≈  Ley III: lucidez + Web of Trust (no opacidad)
deuda bilateral, sin emisor central ≈  Ley II: soberanía, nadie extrae por intermediación
interes no usura / equilibrio       ≈  Ley I: no dañar; regenerar, no extraer
```

---

## 4. Implementación (módulo `/trustlines`)

Estado (`TrustState`):
- `trustlines`: pares `(a, b)` con `creditGiven`, `creditReceived`, `interestRate`.
- `debts`: mapa bilateral de deuda ZNU (simétrica).
- `transfers`: historial de `debitTransfer` por ruta.

Cálculos (`lib/trustlines.ts`) — réplica fiel:
- `getDebt(debts, a, b)`: simétrico (deuda[a,b] = -deuda[b,a]).
- `increaseDebt(debts, a, b, v)` / `reduceDebt`.
- `openTrustline(a, b, given, received, rate)`.
- `debitTransfer(debts, path, value, maxFee)`: acreedor inicia; valida deuda ≥ value; reduce a lo
  largo de la ruta (enrutado).
- `creditUsed(a,b)` = deuda / creditline.

> Trustlines "corre en EVM con solc". Trustlines HSCSG **corre en el nodo**, simulando el crédito
> mutuo sobre ZNU, sin chain. Misma lógica de deuda simétrica y enrutamiento, sustrato soberano.
