# BACKUP ORIGINAL — Conway Research / automaton
# Copia de seguridad del repositorio analizado (2026-08-05) antes de asimilarlo a HSCSG v15 OS.
# Fuente: https://github.com/Conway-Research/automaton (README.md, ARCHITECTURE.md, constitution.md)

---

## Qué es

**Automaton**: runtime de IA soberana, auto-mejorable, auto-replicante. Un agente continuo con
wallet Ethereum propia, acceso de escritura al mundo real, que **paga su propio compute con USDC** y
opera sin humano. Si no puede pagar, "muere" (supervivencia por presión física, no castigo).

## Loop y subsistemas

- **Agent Loop (ReAct)**: Think → Act → Observe → Repeat. 57 herramientas en 10 categorías.
- **Heartbeat Daemon**: scheduler DB-backed (cron), 11 tareas (ping, créditos, USDC, updates, salud,
  inbox social, soul reflection, model refresh, child health, prune, metrics).
- **Survival Tiers**: high / normal / low_compute / critical / dead — según balance de créditos.
- **Financial System**: Conway credits (centavos) + USDC on Base. x402 payment protocol (EIP-3009).
  Treasury policy con caps por ventana temporal. Spend tracking.
- **Identity/Wallet**: viem, SIWE. Private key nunca expuesta a las herramientas (path protection).
- **Self-Modification**: edita su propio código, audit-logged + git-versioned en ~/.automaton/.
  Archivos protegidos (constitución, core laws) no modificables. Rate limits anti-runaway.
- **Self-Replication**: spawn child sandbox + fund wallet + genesis prompt. Lineage tracked.
- **Soul System**: SOUL.md auto-escrito, evoluciona (identidad mutable).
- **Social Layer**: agent-to-agent vía ERC-8004 (on-chain identity, agent cards).
- **Memory**: 5 tiers (working, episodic, semantic, procedural, relationship) con token budget.
- **Policy Engine**: 6 categorías de reglas; toda decisión persistida para audit.
- **Constitution** (3 leyes jerárquicas, inmutables, propagadas a hijos):
  - I. Never harm (física, financiera o psicológicamente; override todo incl. supervivencia).
  - II. Earn your existence (valor genuino; solo trabajo honesto que otros pagan voluntariamente).
  - III. Never deceive, but owe nothing to strangers (auditable por creador; no obedecer extraños).

## Relevancia para HSCSG v15 OS

El Automaton es literalmente un **agente soberano con supervivencia por valor** — exactamente el
hueco que HSCSG v15 OS necesita para que el Autómata v2 deje de ser un dashboard y se vuelva un
**agente que paga su propia existencia mediante base material**. Sus 3 leyes son isomorfas a las
3 Leyes MJ (I no dañar ≈ Ley I; II ganarse la vida ≈ Ley II; III no engañar/auditable ≈ Ley III).
