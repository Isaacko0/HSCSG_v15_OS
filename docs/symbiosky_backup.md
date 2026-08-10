# Symbiosky — Backup Quirúrgico + Texto Extraído

**Fuentes (GitLab):**
- Whitepaper: `blockchain-projects-ecosymra/symbiosky-whitpaper` (PDF + Typst source, v1.0 Dec 2025, "Monetizing Credibility, Not Clicks").
- Contratos EVM: `blockchain-projects-ecosymra/symbiosky-contract-evm` (Foundry/Solidity, MIT, 7 contratos).
- Nostr client: `symbiosky/symbiosky-nostr` (Rust/Dioxus, web+desktop+mobile).

**Qué es:** plataforma de *conviction voting* para trabajo de conocimiento sostenible. Construida sobre AT Protocol (Bluesky, 40M+ usuarios) + Nostr. Recompensa **credibilidad, no clics**.

---

## 1. TESIS (Executive Summary)
> "Symbiosky addresses a fundamental misalignment in how digital platforms compensate knowledge workers. While ad-driven social media rewards viral content, researchers, journalists, and educators struggle to monetize credible work."
> "Built on Bluesky's AT Protocol [...] introduces a credibility-first marketplace that uses **conviction voting** to route funding toward trustworthy contributors. By requiring voters to **lock tokens proportional to their confidence level**, the system naturally filters short-term manipulation while amplifying sustained, truthful conviction."

**Innovaciones clave:**
- Conviction voting (recompensa compromiso largoplazo, no especulación)
- Merit-based rewards mensuales por score comunitario (1-10)
- Reputación a prueba de decay (protege activos, desalienta hoarding)
- Funding por umbral (solo propuestas bien apoyadas reciben fondos)
- Open protocol (AT Protocol / Nostr)

---

## 2. MECANISMO: CONVICTION VOTING (§4)
- Votantes califican propuestas 1-10 durante el periodo de votación.
- Los scores se **ponderan por convicción** (nivel de stake bloqueado).
- Se calcula la media de scores ponderados.
- El score determina la recompensa mensual de tokens.
- **Resiste manipulación:** bloquear tokens por convicción hace caro el ataque; la convicción se "resetea" al cambiar de posición (anti-whale).

---

## 3. MODELO DE RECOMPENSA (§5) — fórmulas exactas
> `reward = mean_score × reward_multiplier`
- Multiplicador ej. 100 tokens: score 6 → 600, score 8 → 800, score 10 → 1000.
- **Scores < 5 no reciben fondos** (umbral de calidad).
- **Umbrales anti-gaming:**
  - Mínimo 50 votos totales.
  - Mínimo 10 tokens de convicción total ponderada.
  - Quien no cumple umbrales → score 0.
- **Distribución mensual (30 días):** ritmo predecible, alinea con impacto largoplazo, reduce especulación.

---

## 4. TOKENOMICS Y SEGURIDAD (§6) — parámetros
- Token **SYSKY**: gobernanza + recompensa. Supply cap implícito en contratos: `TOTAL_SUPPLY_CAP = 20_000_000` (SymbioskyToken.sol).
- **Decay por inactividad (5%/año por defecto):**
  - Balances protegidos: votantes activos (mínimo mensual) protegen hasta su conviction stake.
  - Multiplicador de protección configurable (default 1x).
  - Solo el **exceso** sobre el umbral protegido decae.
  - Ej.: Alice 1000 tokens, 500 en convicciones activas, vota 10/trimestre → protegidas 500; solo 500 exceso decae (25 tokens/año si inactiva).
- **Conviction Protection:** quien crea convicciones y vota consistentemente gana protección anti-decay.
- **Anti-Whale:**
  1. Lock duration requirement (alta influencia = alta iliquidez, hasta `MAX_LOCK_DURATION = 5*365 days`).
  2. Vote limits per conviction (no spam).
  3. Conviction resets (cambiar posición pierde influencia).
  4. Activity tracking (decay igual para whales inactivos).

---

## 5. ARQUITECTURA DE CONTRATOS EVM (§7, Solidity/Foundry, MIT)
| Contrato | Rol |
|----------|-----|
| `SymbioskyToken.sol` | ERC20, mint/burn controlado (MINTER/BURNER/OPERATOR roles), `TOTAL_SUPPLY_CAP = 20M` |
| `ConvictionStorage.sol` | Single source of truth del estado mutable; `WRITER_ROLE`; Config (reputationStake, convictionLockDuration, inactivityDecayBps=500=5%, minVotesPerQuarter, convictionProtectionBps) |
| `ConfigController.sol` | Admin surface; `CONFIG_TIMELOCK_DELAY = 20 days` |
| `VotingController.sol` | Conviction NFT-like objects; crear/votar/liberar stake tras lock; `MAX_LOCK_DURATION = 5y` |
| `ProposalController.sol` | Crear propuesta, reputation scoring, release reward/stake; `MAX_REWARD_PER_PROPOSAL = 1000e18`, `MIN_SCORE_FOR_REWARD=1` |
| `DecayController.sol` | Aplica inactivity decay (burn vía token) |
| `RewardController` (referenciado) | Distribuye recompensas |

---

## 6. NOSTR CLIENT (symbiosky-nostr, Rust/Dioxus)
- App web/desktop/mobile (Dioxus/`dx`). README: testing site `symbiosky-nostr.vercel.app`.
- Capa de mensajería descentralizada (Nostr) — isomorfa a federación DTN/AP de HSCSG.

---

## 7. ISOMORFISMO CON HSCSG
| Symbiosky | HSCSG v15 OS | Gap |
|-----------|--------------|-----|
| Conviction voting (lock ∝ confianza) | CDS vota por reputación | **HSCSG NO tiene convicción bloqueada** |
| Reward = mean_score × mult | AUT×CDS | HSCSG no tiene score 1-10 + umbral |
| Decay 5%/año por inactividad | ZNU/ITC (decay sí existe en Integral) | HSCSG no tiene decay por inactividad explícito |
| Anti-whale (lock, resets) | CDS | parcial |
| Funding por umbral (50 votos/10 conv) | CDS quorum | parcial |
| Nostr/AT Protocol | Federación DTN/AP | HSCSG no tiene capa de mensajería |
| Reputación como activo | AUT/CDS | parcial |

→ **Symbiosky llena vacíos reales de HSCSG**: convicción bloqueada, score+umbral, decay por inactividad, anti-whale, capa Nostr.

---

## 8. LO QUE SE EXTIRPA (regla offline-first sin EVM)
- **EVM/Solidity/Foundry** → lógica pura en `lib/symbiosky.ts` (offline, ZNU en vez de SYSKY).
- **AT Protocol/Bluesky/Nostr remotos** → federación DTN/AP local (el nodo corre offline; Nostr es referencia de diseño de mensajería).
- **Token SYSKY ERC20** → ZNU (acceso CaaS, no especulación).
- **Timelock 20d / roles AccessControl** → MJ Gate + CDS local.

## 9. LO NUEVO QUE APORTA (más allá de HSCSG actual)
1. **Conviction voting** como primitiva de gobernanza (lock ∝ confianza).
2. **Score comunitario 1-10 + umbral de calidad** (score<5 = sin fondos).
3. **Decay por inactividad configurable** (protege activos, castiga hoarding).
4. **Anti-whale por iliquidez** (influencia cara = lock largo).
5. **Capa de mensajería descentralizada** (Nostr) → federación real de nodos.

## 10. VERIFICACIÓN DE EXTRACCIÓN
- 3 clones: whitpaper (PDF 812 líneas + .typ 27k chars), contract-evm (16 archivos, 7 .sol), nostr (71 archivos, Rust).
- Whitepaper leído íntegro (PDF extraído vía pdftotext + .typ). Contratos leídos (Config/Voting/Proposal/Decay/Token/Storage).
- Licencia MIT confirmada en contratos + whitepaper.
