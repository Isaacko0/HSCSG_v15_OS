# Shivarthu — Backup Quirúrgico

**Fuente:** repo `https://github.com/silicology1/shivarthu` (archivado; desarrollo continua en `reaudito/shivarthu`). Substrate/FRAME (Rust/Polkadot). Licencia **MIT**. Tagline: *"Decentralized democracy with experts as leaders"*.

**Stack:** Rust + Substrate FRAME + Pallets + IPFS + Leptos/Yew/React frontends. 16 pallets FRAME.

## Arquitectura General (Substrate FRAME Pallets)

```
runtime/
├── pallets/
│   ├── election/                    # Selección representantes (Seq Phragmén + Approval Voting)
│   ├── schelling-game-shared/       # Motor Schelling Game (commit-reveal, jurors, incentivos)
│   ├── sortition-sum-game/          # Sortition Sum Tree (selección jurados por stake)
│   ├── department-funding/          # Tipping system para departamentos
│   ├── positive-externality-validation/  # Validación externality positiva (Score Schelling)
│   ├── profile-validation/          # KYC + experiencia por Schelling
│   ├── project-tips/                # Aplicación fondos proyectos
│   ├── posts/                       # Posts/comentarios
│   ├── spaces/                      # Espacios (departamentos/locaciones)
│   ├── tags/                        # Tags/categorías
│   ├── support/                     # Soporte
│   ├── ubi/                         # Universal Basic Income
│   ├── shared-storage/              # Almacenamiento compartido (IPFS link)
│   └── template/                    # Experiencia evaluación (pallet original)
```

## Conceptos Centrales (Whistepaper + Docs)

### 1. Departments (Departamentos por Especialidad)
Gobernanza dividida en departamentos (educación, infraestructura, salud, servicio comunitario) por localidad.
- Cada departamento supervisado por representantes con **expertise en el campo**.
- Formación: mín 3000 miembros, aprobado por gobernanza principal.
- **Precio de descubrimiento:** 1,000,000 departamentos × 3000 población.

### 2. Schelling Game (Juego de Schelling) — Núcleo de Consenso
Usado para: KYC, evaluación experiencia, score externality positiva, price discovery.
- **Jurors:** se postulan, probabilidad selección ∝ tokens stakeados. Selección aleatoria (anti-Sybil vía `sp_io::hashing` randomness).
- **Commit-Reveal:** fase commit (hash del voto), fase reveal (hash + string). Si match → aceptado.
- **Coherencia:** si voto coherent (≥51% acuerdo) → incentivo; sino → quema parte del stake.
- **Tipos (`SchellingGameType`):** ProfileApproval, ProfileScore, ProjectReview, PriceDiscovery, PositiveExternality, DepartmentScore.

### 3. Score Schelling Game (para Externality Positiva) — Método Estadístico Innovador
Rango: -10 a +10 (o 0-5, 0-10).
- **Outlier removal:** calcular mean + std dev; eliminar valores >1 std dev de la mean.
- Nueva mean de remaining (68.27% dataset) = score final.
- Si score dado cercano a nueva mean → incentivo; si diverge → deduce parte del stake.
- `get_incentives_range`: ZeroToTen ±1500, MinusTenToPlusTen ±3000, ZeroToFive ±750 (multiplicado ×1000 para integer).

```python
# Código referencia (port a Rust en score_game.rs):
def calculate_new_mean(items):
    mean = statistics.mean(items)
    sd = statistics.stdev(items)
    new_items = [x for x in items if mean - sd <= x <= mean + sd]
    return statistics.mean(new_items)
```

### 4. Sequential Phragmén Election (Selección Representantes)
- **Multi-winner approval voting** para representantes.
- Peso de voto NO por stake, sino por: **reputation, experience, positive externality score**.
- `sp_npos_elections::seq_phragmen` de Substrate.
- Gobernadores también por seq phragmén; fijan thresholds (timing elección, nº representantes, aprobar departamentos).

### 5. Approval Voting (Voting Multi-Ganador)
Representantes elegidos por approval voting (no único ganador). Muestra perfil del candidato.

### 6. Vouching (Aval/Familia)
- Árbol familiar: amigos/ familiares se avalan mutuamente.
- Moderadores (approval voting) pueden invalidar vouching falso downvotando al garante.

### 7. Department Funding (Tipping System)
- Categorías: `SmallTipper, BigTipper, SmallSpender, MediumSpender, BigSpender` (valores crecientes).
- Governors aplican por spending value ≤ límite de tipping name.
- Aplicar fondos mayores → mayor stake/responsabilidad.
- Liberado tras validación Yes/No Schelling game.
- **Project Tips:** individuos/equipos aplican fondos similar a department funding.

### 8. Randomized Tax Collection (Sin Inflación)
- Fondo inicial por inflación; luego se recoge restando balance de cuentas (no inflación).
- Tax aleatorio por transacción: random 0-10 → 0% a 5% tax.
- Anti-hoarding: account_number % 1000 == random → taxed. 1 draw/mes. Tax deducido al interactuar.

### 9. Positive Externality Validation Pallet
- Post de externality positiva (content + stake mínimo 10000).
- `apply_staking_period`: cada 3 meses (block modulus) → staking period.
- `apply_jurors`: jurors postulan con stake.
- `commit_vote` / `reveal_vote` (1-5 range) → Score Schelling → `get_incentives` → score final set en SharedStorage.

---

## Pallets Críticos (Código Real)

### `schelling-game-shared/src/types.rs`
```rust
pub enum Period { Evidence, Staking, Drawing, Commit, Vote, Appeal, Execution }
pub enum SchellingGameType { ProfileApproval, ProfileScore, ProjectReview, PriceDiscovery, PositiveExternality, DepartmentScore }
pub enum RangePoint { ZeroToTen, MinusTenToPlusTen, ZeroToFive }
pub struct PhaseData<T> { evidence_length, staking_length, commit_length, vote_length, appeal_length, max_draws, min_juror_stake, juror_incentives: (looser_burn, winner_mint) }
pub struct ScoreCommitVote { commit: [u8;32], votestatus, revealed_vote: Option<i64> }
```

### `schelling-game-shared/src/score_game.rs` — Cálculo de Incentivos
```rust
fn std_deviation_interger(data: &Vec<i64>) -> Option<(i64, i64)> {
    let mean = mean_integer(data);
    let variance = data.iter().map(|v| (mean - *v).pow(2)).sum::<i64>() / count;
    Some((variance.sqrt(), mean))
}
fn calculate_new_mean(data, sd_and_mean) -> Option<i64> {
    let new_items = data.filter(|x| mean-sd <= *x <= mean+sd);
    mean_integer(&new_items)  // 68.27% dataset
}
fn get_incentives_score_schelling_helper(key, phase_data, range_point) {
    // jurors con revealed_vote*1000 en [new_mean - range, new_mean + range] → winners
    // winners reparten winning_incentives = juror_incentives.1 / winners_len
    // others → stake * 3/4 deducido (burn)
}
```

### `election/src/types.rs`
```rust
pub struct DepartmentDetails { name, locationid, details, departmentid }
pub struct SeatHolder<AccountId, Balance> { who, stake, deposit }
pub struct Voter<AccountId> { votes: Vec<AccountId>, score: u64 }
```

### `department-funding/src/lib.rs`
```rust
pub enum TippingName { SmallTipper, BigTipper, SmallSpender, MediumSpender, BigSpender }
pub enum DepartmentFundingStatus { ... }
// MinimumDepartmentStake = 10000, DepartmentRequiredFund por ID
```

### `positive-externality-validation/src/lib.rs`
```rust
// create_positive_externality_post(content) → requiere KYC aprobado
// add_positive_externality_stake(deposit) → withdraw + store
// set_validate_positive_externality(bool)
// apply_staking_period(user) → cada 3 meses block modulus
// apply_jurors_positive_externality(user, stake) → SortitionSumGame tree
// commit_vote(user, [u8;32]) / reveal_vote(user, choice 1-5, salt)
// get_incentives(user) → Score Schelling → set_positive_externality(score)
```

---

## Conceptos Clave Innovadores para HSCSG

| Concepto Shivarthu | Descripción | Paralelo HSCSG |
|---------------------|-------------|----------------|
| **Departments por Especialidad** | Gobernanza dividida por expertise; representantes expertos | `/colectivo` + Colony DomainNode (pero plano, no por expertise) |
| **Schelling Game (commit-reveal + stake)** | Jurors staked, coherentes ganan, incoherentes queman | Kleros (schelling-based) + Symbiosky conviction |
| **Score Schelling (outlier removal)** | Mean ± 1 SD → 68.27% → nueva mean = score | CDS_Jurados pesos `W_i` (no outlier removal explícito) |
| **Seq Phragmén por reputation/exp/externality** | Voto peso ≠ stake, sino mérito | AUT×CDS weight (similar: voz por contribución) |
| **Approval Voting multi-ganador** | Representantes por approval | CDS consentimiento ponderado (diferente mecanismo) |
| **Vouching family tree + moderators** | Aval mutuo + invalidación por moderadores | Social DNA / Web of Trust (referenciado pero no implementado) |
| **Department Tipping (5 categorías)** | Funding por tiers crecientes | CaaS-BM tiers (0-3) + DomainPot |
| **Randomized Tax (no inflación)** | Tax aleatorio por tx, anti-hoarding | ZNU demurrage 5%/28d (similar anti-hoarding) |
| **Positive Externality Validation** | Post + stake + Score Schelling → score | NetBenefit (Copiosis) + BN_Gradient_Signal |

---

## Extirpación (No Se Asimila Directamente)
- **Substrate/Polkadot/Rust/FRAME** → HSCSG es React/TS/Vite/Zustand offline-first (sin blockchain)
- **EVM/Parachain/Staking tokens** → HSCSG ZNU demurrage (sin staking externo)
- **IPFS para content** → HSCSG local storage / RAO
- **Sequential Phragmén (NPoS)** → HSCSG CDS ponderado por AUT×CDS (no NPoS electoral)
- **Sortition Sum Tree (juror selection)** → HSCSG CDS_Jurados sorteo + anonimato (sin stake tree)

---

**Extracción:** clonación directa del repo + lectura de 8 archivos clave (`Shivarthu.md`, `schelling-game-shared/types.rs`, `score_game.rs`, `election/types.rs`, `department-funding/lib.rs`, `positive-externality-validation/lib.rs`, `docs/effectiveness_schelling_game.md`). Texto volcado a este backup sin web_extract.
