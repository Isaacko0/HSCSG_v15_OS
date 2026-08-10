# Kleros — Backup Quirúrgico (Familias: Dispute Resolver · Governor · Curate · Scout · Moderate · Reality · Escrow · Proof of Humanity)

## Dispute Resolver (3 repos)
- `kleros/arbitrable-proxy-contracts`: proxies que conectan contratos externos al arbitraje Kleros.
- `kleros/dispute-resolver`: servicio que escucha disputes y ejecuta resolución (oráculo).
- `kleros/dispute-resolver-interface-contract`: interfaz para que dapps soliciten resolución.

**Aporte HSCSG:** el patrón de **oráculo de resolución** que ejecuta una acción tras deliberación → `lib/automaton.ts` (Autómata ejecuta tras CDS). Extirpar: EVM/proxy on-chain.

## Governor (4 repos)
- `kleros/corobot`: bot de gobernanza (ejecuta acciones on-chain por propuestas).
- `kleros/governor-script`: scripts de gobernanza.
- `kleros/governor-snapshot`: integración Snapshot (votación off-chain).
- `kleros/zodiac-bots`: módulos Zodiac (SafeSnap) para ejecutar propuestas en Safe.

**Aporte HSCSG:** `corobot` es el antecedente directo del **Autómata Soberano** — un agente que ejecuta decisiones de gobernanza. Snapshot = votación off-chain (compatible con CDS off-line). Zodiac/SafeSnap = ejecución de propuestas por firma → MJ Gate. Extirpar: Safe, Snapshot API, EVM.

## Curate V1 (2 repos)
- `kleros/stake-curate`: listas curadas con staking (TCR — Token Curated Registries).
- `kleros/tag-registry-rewards`: recompensas por curaduría de tags.

**Aporte HSCSG:** las **TCR** (registros curados por staking) → modelo de **catálogos curados por la comunidad** (ej. registro de células, de recursos) gobernados por CDS en vez de staking especulativo. Extirpar: staking token, TCR on-chain.

## Scout (2 repos)
- `kleros/scout`: bounty scout que encuentra disputes para jurar.
- `kleros/scout-snap`: integración Snapshot de scout.

**Aporte HSCSG:** el patrón de **agente buscador de tareas** (scout) = antecedente del Autómata/Conway Agent que busca contribuciones por hacer. Extirpar: EVM, PNK rewards.

## Moderate (1 repo)
- `kleros/kleros-moderate`: moderación de contenido vía Kleros.

**Aporte HSCSG:** moderación comunitaria por CDS_Jurados (jurados resuelven flag de contenido) → módulo de **moderación del nodo** (anti-abuso) resuelto por consentimiento, no por un admin.

## Reality V1 (5 repos: realitio + bots)
- `kleros/realitio-reporting-bot`, `realitio-proxy`, `realitio-script`, `action-callback-bots`, `event-service`: oráculo de verdad (Realitio) que resuelve preguntas factuales; bots reportan.

**Aporte HSCSG:** **oráculo de hechos** (Realitio) → fuente de verdad verificable para Value Equation / BN (¿la contribución ocurrió?). `event-service` = índice de eventos append-only = RAO. Extirpar: EVM, oráculo on-chain.

## Escrow (2 repos)
- `kleros/escrow-contracts`: escrow con arbitraje Kleros.
- `kleros/simple-escrow`: escrow simple.

**Aporte HSCSG:** **escrow con arbitraje** = garantía de intercambio (Solarpunk) resuelta por CDS_Jurados si hay disputa. Mapea a `matchOffersNeeds` + gate de disputa. Extirpar: Solidity, EVM.

## Proof of Humanity V1/V2 (2 repos)
- `Proof-Of-Humanity/Proof-Of-Humanity` (V1): registro Sybil-resistant de humanos (1 humano = 1 identidad).
- `Proof-Of-Humanity/proof-of-humanity-v2-contracts` (V2): versión nueva con subregistros.

**Aporte HSCSG:** **sybil-resistance** (1 humano = 1 nodo) es crítico para que AUT×CDS no sea farmeado por bots. HSCSG necesita un **registro de identidad soberana** (no KYC estatal, sino atestación comunitaria: varios miembros del nodo atestiguan que eres humano real). V2 subregistros = células pueden tener sus propios registros. Extirpar: EVM, Vídeo-KYC on-chain.

### Leyes MJ transversales
- **Ley I:** escrow + arbitraje protegen a la parte honesta; MJ Gate lo replica off-line.
- **Ley II:** curaduría/scout/jurar = trabajo real recompensado (AUT×CDS), no staking especulativo.
- **Ley III:** oráculo de hechos (Realitio) + evidencia pública = RAO + Modo Lucidez.
