# Integración HR_AI_Agent-collaberry-HSCSG (Eliza) → HSCSG v15 OS (+ CaaS)
# Tres perspectivas: Usuario · LLM · Proyecto HSCSG_v15_OS / CaaS

> Backup en `docs/colaberry_backup.md`.

---

## 0. Síntesis del repo

Es un **starter de Eliza** (framework de agentes autónomos conversacionales v0.1.9): personajes con
identidad (bio/lore/style/topics), clientes sociales (Discord/Twitter/Telegram), memoria persistente
(sqlite/postgres), y plugins (incl. Solana/Starknet crypto). En este repo el `character.ts` está en
plantilla (vacío), sin lógica HSCSG real aún. El nombre "colaberry" = colaborador del colectivo.

---

## 1. PERSPECTIVA USUARIO

Como miembro del colectivo HSCSG quiero un **agente colaborador (Colaberry)** que:
- Me **acoja y onboardee** cuando entro (me explica el nodo, la base material, las 3 Leyes MJ).
- Sea **compañero de trabajo**, no jefe: me ayuda a encontrar quién tiene lo que necesito (matchmaking
  vía Solarpunk), me recuerda tareas del Plan 90d, me avisa de heartbeats de base material.
- Hable por **canales** (chat del colectivo) pero con **identidad HSCSG**, no genérica.
- **Nunca me engañe ni extraiga**: transparente, gobernado por MJ (Ley III: lucidez).
- Respete la **autonomía comunitaria** (Emma Goldman Test del Solarpunk): aumenta autonomía, no crea
  dependencia de infraestructura corporativa.

---

## 2. PERSPECTIVA LLM (asimilación)

| Eliza | Asimilación HSCSG v15 OS |
|-------|--------------------------|
| Character (bio/lore/style) | Persona del Colaberry (identidad del agente del Colectivo) |
| Clients (Discord/TG/Twitter) | Canales del colectivo (chat local, no redes corporativas) |
| Memory (sqlite) | Memory del Coach / estado persistente (ya en store) |
| Actions/plugins | Acciones que pasan por `evaluateMJGate` (Ley I/II/III) |
| Plugins Solana/Starknet | **EXTIRPADOS**: HSCSG usa ZNU (no crypto) |
| Bootstrap plugin | Onboarding de miembros (firma Social DNA) |

**Decisión**: NO instalo Eliza (Node 22 + pnpm + Docker + better-sqlite3 nativo pesados y extractivos).
Asimilo el **modelo de agente de personaje + memoria + canales** como módulo `Colaberry` local en
React/Zustand, gobernado por MJ. El agente es el "compañero" del Colectivo, no un bot externo.

---

## 3. PERSPECTIVA PROYECTO HSCSG / CaaS (monetario → postmonetario)

Colaberry es el **agente de adquisición y retención del CaaS**, y el puente postmonetario:

### 3a. CaaS MONETARIO
- Colaberry explica los tiers CaaS, ayuda a nuevos miembros a stakear ZNU y subir de tier.
- Reduce la fricción de entrada → más miembros → más reparto (revenue share).

### 3b. POSTMONETARIO
- Colaberry pasa de "vender membresía" a "acompañar regeneración": ayuda al miembro a contribuir
  ValueFlows, a cuidar base material, a subir su AUT.
- El éxito de Colaberry se mide por **AUT colectivo**, no por suscripciones.

### 3c. Producto CaaS (monetario → postmonetario)
- El OS se ofrece con un Colaberry incluido: "tu nodo viene con un colaborador IA soberano".
- Arranca monetario (onboarding de paga/stake) y camina a postmonetario (el don lo sostiene).

### 3d. Isomorfismo con MJ
```
ELIZA (character/ethics)        HSCSG v15 (MJ)
persona coherente + no dañar  ≈  Ley I: no dañar base material ni personas
ayudar voluntariamente        ≈  Ley II: ganarse la vida soberanizando
transparencia del agente       ≈  Ley III: lucidez, sin estética flotante
```

---

## 4. Implementación (módulo `/colaberry`)

Estado (`ColaberryState`):
- `persona`: nombre, bio, valores MJ, tono.
- `channels`: ['chat_colectivo', 'solarpunk', 'orquestacion'] (canales locales, no Twitter).
- `conversations`: mensajes (humano ↔ colaberry) con `gateMJ` por mensaje.
- `onboardings`: miembros acogidos (firma Social DNA).
- `tasks`: recordatorios (Plan 90d, heartbeats) que Colaberry dispara.

Cálculos (`lib/colaberry.ts`):
- `composeReply(prompt, ctx)` — genera respuesta y la evalúa con `evaluateMJGate` (Ley I/II/III).
- `onboardMember(member)` — registra acogida + marca Social DNA.
- `suggestMatch(needs, offers)` — usa matchmaking de Solarpunk.
- `gateNarrative(text)` — bloquea lenguaje extractivo/engañoso (Ley I/III).

> Eliza "corre en Discord con API de OpenAI". Colaberry HSCSG **corre en el nodo**, con identidad
> HSCSG y sin crypto. Misma capacidad conversacional, sustrato soberano y regenerativo.
