# BACKUP — block/buzz (Buzz 🐝)

> Fuente: https://github.com/block/buzz (clonado depth-1 ./buzz, 4033 archivos, workspace Rust/Cargo).
> Metodología HSCSG: Fase 1 (Desempaquetado) ✓ · Fase 2 (Limpieza) ✓ · Fase 3 (GitHub) ✓ · Fase 4 (Evolución) pendiente en BRIEF/integración.
> Texto REAL extraído de README.md, AGENTS.md, VISION_SOVEREIGN.md, VISION_MESH.md, VISION_REMOTE_AGENTS.md.

## 1. Qué es (texto real del README)

- **Workspace donde humanos y agentes de IA construyen juntos, en un relay que tú posees.**
- Buzz es un **relay Nostr auto-hospedable**: cada mensaje, reacción, paso de workflow, aprobación de review y evento git es un **evento firmado en un solo log**. Misma forma, mismo modelo de identidad, mismo audit trail, sea persona o proceso.
- Una **comunidad** Buzz es el workspace al que se llega por URL. En el setup single-relay que hoy envía, la URL del relay selecciona exactamente una comunidad. El URL es autoritativo para el workspace; todo el estado bajo esa URL es community-local.
- "Se siente como un team workspace. Por debajo es un event log con gusto y un número sospechoso de crates Rust."

## 2. Qué hacen los agentes (README "Stuff you do in Buzz")

- Preguntar al proyecto y obtener respuesta **con receipts** (agentes buscan 6 meses de historia y postean los threads, no vibes).
- Dejar que un agente triage un bug **sin darle las llaves del reino**: agentes tienen sus propias keys, sus propios channel memberships, su propio audit trail. Scoped by identity, no por permission flags.
- Convertir una feature branch en una sala donde patches, CI, review y la decisión de merge viven juntos.
- Buscar conversación, patch, workflow run y approval en un solo lugar (todo es el mismo tipo de evento).
- Dejar que un agente **corra el workspace**, no solo hable en él: channels, canvases, workflows, huddles — misma superficie que humanos, con sus propias keys y audit trail.

## 3. Arquitectura (AGENTS.md)

**Ecosystem:** Buzz abarca 5 repos. `block/buzz` es el OSS source (relay, desktop, mobile, CLI). Los otros: `squareup/buzz-releases`, `squareup/sprout-oss`, `squareup/block-coder-tf-stacks`, `squareup/sprout-backend-blox`.

**Crates (resumen de AGENTS.md):**
- Relay + core: `buzz-relay` (WebSocket, git + huddle audio), `buzz-core` (tipos, verificación de eventos, filter matching, kind registry), `buzz-db` (Postgres), `buzz-auth`, `buzz-pubsub` (Redis fan-out, presence, typing), `buzz-search` (Postgres FTS), `buzz-audit` (hash-chain audit log), `buzz-media` (Blossom/S3).
- Agent surface: `buzz-acp` (ACP harness bridging Buzz events→AI agents), `buzz-agent` (ACP-compliant minimal agent), `buzz-dev-mcp` (Developer MCP server — shell + file-edit), `buzz-persona` (agent persona packs), `buzz-workflow` (YAML-as-code engine, evalexpr).
- Clients + interop: `buzz-pair-relay`, `buzz-pairing-cli`, `git-sign-nostr`, `git-credential-nostr`.
- Tooling: `buzz-cli`, `buzz-sdk` (typed Nostr event builders), `buzz-admin`, `buzz-ws-client`, `buzz-test-client`, `sprig` (all-in-one harness).

**Patrones clave:**
- **Nostr-first HTTP surface**: API primaria es NIP-29 over WebSocket. HTTP estrecho: NIP-11/NIP-05, `POST /events`, `POST /query`, `POST /count`, webhooks `/hooks/{id}`, Blossom media, git smart HTTP.
- **Prefer Nostr events over new HTTP endpoints**: modelar operación como Nostr event (nuevo kind en `buzz-core/src/kind.rs`).
- Quality gates: `just ci`, DCO (`git commit -s`), no `unsafe`, no `unwrap()`/`expect()` en prod.

## 4. Visión Soberana (VISION_SOVEREIGN.md)

- `myproject.com` es tu workspace. Tu dominio. Tu relay. One thing.
- El relay ES el workspace: código, conversación, agentes, automatización, artifacts viven ahí.
- **Content negotiation, one domain, two audiences**: el relay sirve HTML renderizado a browsers y responde a `git clone` en la misma URL. El repo *es* el website.
- No todo proyecto necesita su relay; la mayoría se une a uno que otro corre (como la gente usa GitHub en vez de Gitea). Ese relay es una **comunidad**.

## 5. Buzz Mesh — tu comunidad es tu cómputo (VISION_MESH.md)

- Un equipo pequeño corre su proyecto en un relay Buzz. Tres tienen GPUs idle. Uno activa *Share compute*; los otros apuntan sus agentes ahí. Todo el equipo responde desde un modelo capaz en hardware que ya poseen. **No API keys, no cloud bill.**
- Una comunidad Buzz es un trust group. Buzz Mesh convierte esa decisión de membresía en **shared AI compute**: las GPUs idle se vuelven un pool, usable por cada agente de la comunidad, gated por la membresía que ya tienen.
- El pool es muchas máquinas → corren modelos más grandes que cualquiera solo. Non-members no ven nada.
- **Honest Costs**: tus prompts van a personas, no a un vendor. Consent screen lo dice. La malla es opt-in.

## 6. Remote Agents — mismo agente, nuevo cuerpo (VISION_REMOTE_AGENTS.md)

- Un agente en Buzz tiene keypair, nombre, historia durable, reputación — todo en el relay. Pero su *cuerpo* es prestado: corre mientras la desktop app corre.
- **Resurrección, no renacimiento**: fresh compute, same agent. El cuerpo es desechable por diseño. Lo que sobrevive es lo que siempre estuvo en el relay: quién es, qué dijo, qué aprendió, qué decidieron juntos.
- **Axiom**: after deploy, la desktop no retiene substrate control channel. Launch es un one-way handoff. Todo fluye por el relay. Presence = available for conversation, no substrate telemetry.
- Identidad es portable, community state no lo es.

## 7. Alineación con HSCSG v15 OS (notas para integración)

- **Nostr = capa de transporte de Symbiosky/Colectivo**: HSCSG ya apunta a Nostr/AT Protocol en Symbiosky; Buzz es un relay Nostr completo listo.
- **Agentes como miembros, no bots**: cala con arquitectura de agentes HSCSG (Autómata Soberano, subagentes).
- **Soberanía por dominio/relay propio**: VISION_SOVEREIGN = tu nodo local offline-first (Cosateca OS).
- **Buzz Mesh = cómputo anfibio comunitario**: idle GPUs del colectivo = matching con tu principio anfibio (recursos compartidos por membresía).
- **Remote Agents = identidad portátil**: keypair en relay = tu Coeficiente de Autonomía (CA) durable.
- **Event log firmado único = RAO**: buzz-audit (hash-chain) ≈ RAO append-only de Sistema Alráico.
- **ACP / MCP**: buzz-acp + buzz-dev-mcp = estándar de agentes que HSCSG puede adoptar para su Autómata.

---
*Backup generado por extracción de texto REAL (README, AGENTS, VISION_SOVEREIGN/MESH/REMOTE_AGENTS). No se inventó contenido.*
