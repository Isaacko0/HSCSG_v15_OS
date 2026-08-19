# INTEGRACIÓN — usdglo-celo (USDGLO) en HSCSG v15 OS

**Metodología:** `hscsg-repo-assimilation` (Fase 2) + vasos comunicantes (`hscsg-unified-assimilation-science`).
**Fuente:** `docs/usdglo_backup.md` · **Autor:** Glo Foundation.

---

## Triple Perspectiva

### 👤 Usuario (nodo HSCSG)
Quiere una **moneda con propósito** (ReFi/UBI) que funcione en modo conectado como oráculo de paridad, sin depender de emisión centralizada opaca. USDGLO (Glo Dollar) es la evidencia de que stablecoins con propósito existen en mainnet.

### 🤖 LLM (qué asimilar)
**CONSERVAR (isomorfo a hscsg-monetary-integration + ZNU + ReFi Nivel 3):**
- Patrón de stablecoin con roles (MINTER/PAUSER/DENYLISTER/UPGRADER) → gobernanza de emisión ZNU/CaaS-BM.
- Invariant `sumOfBalances <= maxAllowed` → cap de emisión ZNU (demurrage).
- Denylist + quema → justicia/restauración (Kleros, Ley I MJ).
- UUPS upgradeable → upgrades de contrato por CDS.
- Glo Foundation (UBI) → ZNU postmonetario (acceso libre Nivel 1).

**EXTIRPAR (infra ajena — principio anfibio):**
- **Red mainnet/Polygon/Celo + Defender/Relayer/Hardhat** → tooling de despliegue. USDGLO en HSCSG es **oráculo de paridad** en modo conectado, no la sede de emisión.
- **Contrato ya desplegado (terceros)** → referencia de lógica, no dependencia de runtime.

### 🔗 HSCSG + CaaS (isomorfismo)
| USDGLO | HSCSG | Ley MJ |
|---|---|---|
| MINTER_ROLE | Rol acuñación ZNU/CaaS-BM | II |
| PAUSER_ROLE | Pausa malla (γ-CARMIS) | I |
| DENYLISTER_ROLE | Denylist actor dañino (Kleros) | I |
| sumOfBalances invariant | Cap emisión ZNU (demurrage) | II |
| UUPS upgradeable | Upgrades por CDS | CDS |
| Glo (UBI) | ZNU postmonetario Nivel 1 | II |

---

## Vasos Comunicantes

- `[EBD-D1]` ADSOA → `docs/research_output/04_*`
- `[DV-01]` validación → `docs/research_output/06_*`
- `[repo:usdglo]` → `docs/usdglo_backup.md` + `docs/usdglo_integration.md`
- `[mon:ZNU]` → `skills/hscsg-monetary-integration` (G1/Túmin/PAR anfibio)
- `[aut:LeyII]` → `skills/hscsg-coeficiente-autonomia` (emisión por contribución)

---

## Decisión de Asimilación
- **Alcance:** Documentada (backup + integration). NO se vuelca el contrato Solidity (depende de red externa).
- **Uso:** USDGLO es el **oráculo priceParity** del Nivel 3 ReFi en modo conectado. La lógica de roles se mapea a `lib/valueDual.ts` (ZNU↔USD anfibio) y al rol MINTER de CaaS-BM.
- **Evidencia de mercado:** stablecoin con propósito operativa en mainnet refuerza el modelo postmonetario HSCSG (no es teoría: Glo Foundation ya lo hace).
