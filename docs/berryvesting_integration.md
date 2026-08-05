# Integración sepu85/collabberry-berry-vesting → HSCSG v15 OS (+ CaaS)
# Tres perspectivas: Usuario · LLM · Proyecto HSCSG_v15_OS / CaaS

> Backup en `docs/berryvesting_backup.md`.

---

## 0. Síntesis del repo

Contrato **Hardhat/OpenZeppelin (EVM/L2)** de vesting piecewise inmutable de tokens $BERRY. Schedule
de `(timestamp, amount)` ascendente; `totalUnlocked()` suma entradas pasadas; `releasable()` =
unlocked − claimed; `release()` transfiere al beneficiario; beneficiario post-TGE una sola vez;
owner renuncia. Ejemplo: A (30%) meses 25–30, pausa 31–36, B (70%) meses 37–43.

---

## 1. PERSPECTIVA USUARIO (miembro CaaS del nodo HSCSG)

Como miembro quiero:
- Que mi **participación en el nodo se gane con el tiempo y mis aportes reales** (AUT), no se compre
  ni se prometa de palabra.
- Ver mi **vesting de ZNU/contribución** de forma transparente: cuánto está liberado, cuánto en
  clamperiod, cuándo es el próximo unlock — sin depender de que el admin "sea buena persona".
- Que el nodo **no pueda drenar** mis aportes: solo hay una vía de liberación (release), auditada.
- Que la **propiedad del nodo se distribuya** por vesting, no concentrada en quien deployó.

---

## 2. PERSPECTIVA LLM (asimilación)

| BerryInvestorVesting (Solidity) | Asimilación HSCSG v15 OS |
|---------------------------------|--------------------------|
| `schedule[]` `(timestamp, amount)` | Cronograma de vesting de participación ZNU por hitos |
| `totalUnlocked()` | `totalUnlocked(vesting, now)` — suma tramos pasados |
| `releasable()` = unlocked − claimed | `releasable()` — lo liberable hoy |
| `release()` | `claimVesting()` — registrar liberación local |
| beneficiario post-TGE + renuncia | Nodo setea beneficiario (miembro) y quema owner |
| inmutable / no drains | **Isomorfo a Ley I**: no dañar ni drenar aportes |

**Decisión**: NO deployo Solidity/Hardhat (requiere node + chain + gas). Asimilo la **lógica** como
módulo `Vesting` local en React/Zustand: simulación fiel del contrato (`totalUnlocked`,
`releasable`, `claim`) sobre el estado del CaaS. El sustrato on-chain queda como puente futuro
opcional; el OS funciona offline. Los tokens $BERRY → **ZNU** (moneda postmonetaria HSCSG).

---

## 3. PERSPECTIVA PROYECTO HSCSG / CaaS (monetario → postmonetario)

Vesting aporta la **garantía contractual del reparto CaaS**: el dinero/aportes no se prometen, se
**vestean** por hitos de base material (AUT), auditables.

### 3a. CaaS MONETARIO
- El OS se vende con "tu participación en el nodo está vesteada y auditada, no en la palabra del admin".
- Inversores/miembros CaaS reciben vesting de ZNU por su aporte (stake + trabajo).

### 3b. POSTMONETARIO
- El vesting **no es especulativo**: está atado a hitos de AUT (base material real), no a precio de token.
- "Claim later" del repo = el miembro puede liberar cuando la base lo soporte (Ley II: soberanía).
- La propiedad del nodo se **descentraliza por vesting** (owner renuncia) → postmonetario.

### 3c. Isomorfismo con MJ
```
BERRY VESTING (contract)          HSCSG v15 (MJ)
inmutable, no drains             ≈  Ley I: no dañar ni drenar aportes del colectivo
unlock por hitos en el tiempo     ≈  Ley II: ganarse la participación con aportes reales
beneficiario auditable + renuncia ≈  Ley III: lucidez, owner quemado, sin opacidad
```

---

## 4. Implementación (módulo `/vesting`)

Estado (`VestingState`):
- `schedule`: tramos `(ts, amountZNU)` (amount en ZNU, no $BERRY).
- `beneficiary`: miembro beneficiario (seteado post-TGE, una vez).
- `claimed`: ZNU ya liberado.
- `beneficiarySetDeadline`: límite para setear beneficiario.
- `ownerRenounced`: bool.

Cálculos (`lib/vesting.ts`) — réplica fiel del contrato:
- `totalUnlocked(schedule, now)`: Σ amount donde ts ≤ now.
- `releasable(schedule, claimed, now)`: max(0, unlocked − claimed).
- `claimVesting(...)`: registra liberación (solo vía release pathway).
- `setBeneficiary` / `renounce` (una vez / antes de deadline).

> BerryVesting "corre en EVM/L2 con gas". Vesting HSCSG **corre en el nodo**, simulando el contrato
> sobre ZNU, sin chain. Misma garantía de no-drain e inmutabilidad lógica, sustrato soberano offline.
