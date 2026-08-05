# BACKUP ORIGINAL — Isaacko0 / HR_AI_Agent-collaberry-HSCSG
# Copia de seguridad del repositorio analizado (2026-08-05) antes de asimilarlo a HSCSG v15 OS.
# Fuente: https://github.com/Isaacko0/HR_AI_Agent-collaberry-HSCSG (README.md, package.json, src/character.ts)

---

## Qué es

Fork/starter de **Eliza** (framework open-source de agentes de IA autónomos conversacionales, v0.1.9).
El nombre lo vincula a HSCSG ("colaberry" = colaborador + berry). Es un punto de partida para un
agente HR/colaborativo del ecosistema HSCSG.

## Componentes clave (según package.json y README)

- **Personajes** (`src/character.ts`): definición de agente (bio, lore, style, topics, clients).
  En este repo está en plantilla (todo comentado), sin personaje HSCSG custom todavía.
- **Clientes**: Discord, Twitter/X, Telegram, auto, direct (`@elizaos/client-*`).
- **Adapters**: SQLite y Postgres (`@elizaos/adapter-sqlite`, `adapter-postgres`).
- **Plugins**: bootstrap, image-generation, node, **solana**, **starknet** (blockchain), tavily.
- **Runtime**: `tsc && node --loader ts-node`, Docker (docker-compose), Railway deploy.
- **Requisitos**: Node >= 22, pnpm.

## Relevancia para HSCSG v15 OS

Eliza aporta la **capa conversacional/HR autónoma**: un agente con identidad (character), memoria
persistente y presencia en canales sociales. HSCSG lo necesita para que el Colectivo tenga un
"colaborador" (Colaberry) que acoja, onboardee y coordine miembros — gobernado por las 3 Leyes MJ.
Los plugins Solana/Starknet son EXTRAÍBLES (HSCSG usa ZNU, no crypto). La memoria sqlite es
asimilable al Coach/memory de HSCSG.

> Nota: el repo es un starter sin lógica HSCSG real aún (character.ts vacío). Se asimila el MODELO
> de "agente de personaje + canales + memoria", no se instala Eliza (Node 22 + pnpm + Docker pesados).
