# AuroraGov — Backup Quirúrgico

**Fuente:** repo `https://github.com/aurora-ong/aurora_gov` (Elixir/Phoenix + Commanded CQRS/Event Sourcing). Licencia **Elastic License 2.0 (ELv2)** — Source Available, no SaaS comercial sin acuerdo.

**Stack:** Elixir + Phoenix + Commanded (CQRS/ES) + PostgreSQL + Docker. 206 archivos `.ex`.

## Arquitectura General (Commanded CQRS/ES)

```
┌─────────────┐     ┌──────────────┐     ┌──────────────────┐
│  Commands   │────▶│  Aggregates  │────▶│    Events        │
│  (Intent)   │     │  (State)     │     │  (Facts)         │
└─────────────┘     └──────────────┘     └────────┬─────────┘
                                                   │
                    ┌──────────────┐               │
                    │  Projectors  │◀──────────────┘
                    │  (Read Model)│
                    └──────────────┘
                           │
                    ┌──────▼──────┐
                    │Process Mgrs │
                    │(Orchestrat.)│
                    └─────────────┘
```

## Módulos Core (Aggregates)

### 1. `AuroraGov.Aggregate.OU` — Unidad Organizacional (Jerárquica)
**Estado:** `ou_id`, `ou_status`, `ou_membership`, `ou_power`, `ou_power_delegation`, `ou_roles`

**Estructuras anidadas:**
- `Membership`: `membership_rank` (junior/regular/senior)
- `Power`: `membership_id`, `power_id`, `power_value`, `power_updated_at` — **por OU y por persona**
- `Role`: `role_id`, `role_name`, `role_description`, `status`, `assignments: MapSet`

**Eventos que mutan:**
- `OUCreated` → crea OU raíz
- `MembershipStarted` → añade persona con rank "junior"
- `MembershipPromoted` → actualiza rank
- `PowerUpdated` → actualiza `power_value` (sensibilidad) por `power_id` + `person_id`
- `PowerDelegationActivated/Deactivated` → delegación de poder por `power_id`
- `OURoleCreated/Assigned/Unassigned/Archived` → gestión de roles

**Funciones clave:**
- `get_power_avg_sensitivity(ou, power_id)` → promedio de `power_value` en OU
- `get_power_delegated(ou, power_id)` → lista de personas con delegación activa
- `ou_tree_list(id)` → ancestros incluido propio ID (ej: "a.b.c" → ["a", "a.b", "a.b.c"])

### 2. `AuroraGov.Aggregate.Proposal` — Propuesta de Gobernanza
**Estado:** `proposal_id`, `proposal_ou_end_id`, `proposal_owner_id`, `proposal_power_id`, `proposal_power_data`, `proposal_status` (:active/:executing/:consumed), `proposal_votes`, `proposal_power_sensibility`

**Vote:** `ou_id`, `vote_id`, `vote_value` (-1/0/1)

**Eventos:**
- `ProposalCreated` → inicializa con `proposal_voters` (personas rank regular/senior en árbol OU destino) + `proposal_power_sensibility` (mapa OU→avg_power)
- `VoteEmited` → actualiza voto por `person_id`
- `ProposalExecuted` → status :executing
- `ProposalConsumed` → status :consumed (con resultado/ error)

**Validación de ejecución (`validate_proposal_score`):**
- Por cada OU en `proposal_power_sensibility`:
  - Filtra votos de esa OU (`vote.ou_id` contiene la OU)
  - `required_score = round(sens_value / 100 * total_voters)`
  - `current_score = sum(vote_value || 0)`
  - Pasa si `current_score >= required_score` ∀ OU

### 3. `AuroraGov.Aggregate.Person` — Persona (Mínimo)
**Estado:** `person_id` — solo identidad, sin atributos ricos.

---

## Comandos (Intent) — `AuroraGov.Command.*`

**Macro `AuroraGov.Command`** (`utils/gov_command.ex`): DSL basada en `Ecto.Schema` + `Ecto.Changeset` con:
- `@gov_power_meta`: `{id, name, description, category, version, status}`
- `@fields_config`: mapa campo→config (type, label, form_type, source: :user/:auto/:context)
- `new(params, opts)` → enriquece con contexto, cast, valida
- `gov_power()` → devuelve struct `AuroraGov.GovPower` con `module: __MODULE__`
- `field_definitions()` → lista de campos para UI dinámica

**Comandos Generales:**
- `RegisterPerson` — `person_id`, `person_name`, `person_mail`, `person_password`
- `CreateProposal` — multi-paso (validación OU origen/destino, título/descripción, power_id)
- `ApplyProposalVote` — `vote_value` -1..1 + `vote_comment` + `vote_type` (:direct/:delegated)
- `ExecuteProposal` / `ConsumeProposal` — transición de estado
- `UpdatePower` — actualiza `power_value` (sensibilidad)
- `ActivatePowerDelegation` / `DeactivatePowerDelegation` — delegación de voto

**Comandos Gov (con `gov_power` metadata):**
- `StartMembership` — inicia membresía en OU
- `CreateOU` — crea OU hija (valida slug + jerarquía dot-notation)
- `PromoteMembership` — sube rank
- `CreateRole` / `AssignRole` / `UnassignRole` / `ArchiveRole` — roles por OU

---

## Command Handlers (Lógica de Negocio)

### `CreateProposalHandler` — Núcleo de Gobernanza
1. Valida OU origen activa + persona existe + membresía rank ≥ regular
2. Valida OU destino activa
3. **Calcula votantes:** recorre árbol OU destino (`ou_tree_list`), filtra miembros rank regular/senior, agrupa por `person_id` con lista de `ou_id` donde puede votar
4. **Calcula sensibilidad:** recorre árbol OU destino, `get_power_avg_sensitivity(ou, power_id)` por cada OU
5. Si `use_delegated`: busca delegaciones activas en árbol OU origen, auto-vota +1 por cada delegado (`vote_type: :delegated`)

### `ApplyProposalVoteHandler` — Emite `VoteEmited` si propuesta activa

### `ProposalExecutor` (Process Manager)
- `interested?(%ProposalExecuted{})` → `:start`
- `interested?(%ProposalConsumed{})` → `:stop`
- `handle(%ProposalExecuted{})` → `build_proposal_command`:
  - Busca `GovPower` por `proposal_power_id` → obtiene `module` (ej: `CreateOU`, `StartMembership`)
  - Construye command con `proposal_power_data`
  - Retorna `[proposal_command, %ConsumeProposal{result: :success}]`
- `error/3` maneja fallos: reintenta con `:failed` + error, o `:skip` en errores imprevistos

---

## Contextos (Read Model / Projectors)

- `PowerContext` — consultas `Power` (sensibilidad) por OU/persona/power_id
- `GovPowerContext` — catálogo de `GovPower` disponibles (7 comandos gov registrados)
- `OUTree` — utilidades jerárquicas (validación slug, ancestros, join, nivel)

---

## Blockchain Projector — Inmutabilidad Tipo RAO
`AuroraGov.Blockchain.Projector` (Commanded.Projections.Ecto):
- Cadena SHA256: `current_hash = sha256(payload_hash <> prev_hash)`
- Genesis hash = "0"×64
- Cada evento → entrada `Block` con: `index`, `hash`, `prev_hash`, `event_id`, `ou_id`, `person_id`, `proposal_id`, `event_type`, `data` (Map.from_struct), `correlation_id`, `causation_id`, `occurred_at`
- Consistency: `:strong`

---

## Conceptos Clave Innovadores para HSCSG

| Concepto AuroraGov | Descripción | Paralelo HSCSG |
|---------------------|-------------|----------------|
| **OU Tree (dot-notation)** | Jerarquía `root.area.sub` con `ou_tree_list` ancestros | `/circulos` biomiméticos (Dunbar 3-13, 13-150) + federación |
| **Power/Sensitivity por OU** | `power_value` por persona+power_id+OU; promedio por OU = umbral votación | `AUT×CDS` weight por dominio (Colony) + CDS_Jurados `W_i` |
| **Delegated Power** | `PowerDelegationActivated` → auto-voto +1 en propuestas | Conviction voting (Symbiosky) + liquid democracy |
| **Proposal Sensibility Map** | Mapa OU→avg_power; ejecución requiere quórum ponderado POR OU | CDS multi-dominio con umbrales por célula |
| **Membership Ranks** | junior → regular → senior (derecho a voto) | CaaS-BM tiers (stake ZNU + AUT≥threshold) |
| **Roles por OU** | `Role` con `assignments: MapSet` | `DomainNode` + `Pot` (Colony) |
| **Blockchain Projector** | Hash chain inmutable + metadatos correlación/causación | RAO (Decision Records) + ERC-8004 hash |
| **Process Manager** | Orquesta ejecución post-aprobación (ProposalExecutor) | Autómata Soberano (E²R + MJ Gate) |
| **GovPower DSL** | Comandos auto-descriptivos con metadata para UI dinámica | `lib/connector.ts` `STAGES` + `deriveStageParams` |

---

## Extirpación (No Se Asimila Directamente)
- **Elixir/OTP/Commanded/PostgreSQL** → HSCSG es React/TS/Vite/Zustand/localStorage-IndexedDB (offline-first)
- **Docker/Infra gestionada** → HSCSG nodo local portable
- **Licencia ELv2 (Source Available)** → HSCSG Apache 2.0 / MIT
- **Auth con password** → HSCSG Identidad Soberana PoH (sin KYC)
- **Blockchain projector como tabla SQL** → HSCSG RAO local (append-only file/IndexedDB)

---

**Extracción:** clonación directa del repo + lectura de 15+ archivos clave (`application.ex`, aggregates, commands, handlers, events, projectors, process managers, contexts, utils). Texto volcado a este backup sin web_extract.