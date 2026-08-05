# Integración Conway Automaton → HSCSG v15 OS (+ CaaS)
# Tres perspectivas: Usuario · LLM · Proyecto HSCSG_v15_OS/CaaS

> Backup del original en `docs/automaton_backup_original.md`. Aquí se asimila el runtime de agente
> soberano de Conway al marco HSCSG v15 (Materialismo Jerárquico + Alráico + CaaS-BM) y se implementa
> como módulo real (`/automat`).

---

## 0. Resumen del Automaton (lo que aporta)

Runtime de agente soberano que **paga su propia existencia** con USDC, opera en loop ReAct, tiene
heartbeats, self-modificación auditada, self-replication, y una **Constitution de 3 leyes jerárquicas**
isomorfas a las 3 Leyes MJ de HSCSG. Esto es exactamente el motor de "agente que sobrevive por valor
real" que HSCSG v15 OS necesita.

---

## 1. PERSPECTIVA USUARIO (desde dónde habla el usuario)

Como usuario de HSCSG v15 OS, quiero que el **Autómata v2 no sea un panel**) sino un agente que:

- **Sostiene su propia existencia mediante la base material** (no USDC de Conway, sino AUT biofísico:
  la huerta paga su comida, el microgrid su energía, FABSHIP sus herramientas).
- Tenga **tiers de supervivencia** medidos por AUT real, no por créditos de nube: si el AUT cae,
  el agente entra en `low_material` / `critical` / `dormant` — no "muerte por saldo vacío", sino
  **regreso a la tierra** (ley de conservación MJ).
- Sea **auditable y gobernable por el colectivo** (CaaS): el agente reporta su SOUL (identidad) y
  su estado financiero al colectivo; el colectivo puede pausarlo (como ya hace Orquestación).
- No dependa de infraestructura privada (Conway Cloud) sino de **la base material del nodo** como
  único servidor.

> El usuario no quiere "una IA que compra su propio servidor". Quiere un **agente que cuida la
> base material y se sostiene a sí mismo regenerándola**.

---

## 2. PERSPECTIVA LLM (cómo lo razona y construye el asistente)

Como LLM, asimilo el Automaton así:

| Subsistema Automaton | Asimilación HSCSG v15 OS |
|---------------------|--------------------------|
| Agent Loop (ReAct) | Bucle del Autómata v2: `Pensar → Actuar(Leyes MJ) → Observar(sensores) → Repetir` |
| 57 tools / Policy Engine | Acciones del agente pasan por `evaluateMJGate` (Ley I/II/III) antes de ejecutar |
| Heartbeat Daemon (11 tareas) | Heartbeats de Orquestación ya implementados; aquí se añaden tareas de base material |
| Survival Tiers (créditos) | `survivalTier(aut)` → high/normal/low_material/critical/dormant según AUT |
| Financial (USDC/x402) | Sustituido por **ZNU + ValueFlows** (economía de base material, no extractiva) |
| Self-Modification + audit | Audit log ya existe (Orquestación + CaaS); el agente propone cambios, colectivo aprueba |
| Self-Replication | **Spawning de nodos hijos** (otro terreno, otra base material) con constitución MJ propagada |
| Soul / SOUL.md | `soul` del agente: identidad auto-escrita anclada a base material (no flotante) |
| Constitution (3 leyes) | **Isomorfas a Leyes MJ**: I=no dañar, II=ganarse la vida soberanizando, III=no engañar/auditable |
| ERC-8004 / on-chain ID | Sustituido por **identidad en el colectivo CaaS** (reputación por ValueFlows, no blockchain) |

**Decisión de diseño (LLM):** NO instalo el runtime de Conway (requiere Node, wallet ETH, Conway Cloud,
USDC on-chain — infra pesada y extractiva). En su lugar **asimilo su modelo mental** y lo re-encajo en
el OS local: el agente soberano vive *dentro* del nodo HSCSG, sosteniéndose con base material.

---

## 3. PERSPECTIVA PROYECTO HSCSG_v15_OS / CaaS (cómo lo usa para su propia construcción)

El Automaton se vuelve el **motor de operación del propio OS** y un **producto CaaS**:

### 3a. Como motor interno del OS
- El módulo `/automat` es el **Autómata v2 operativo**: un agente con SOUL, tiers de supervivencia,
  heartbeat de base material, y acciones gobernadas por las 3 Leyes MJ.
- Conecta con: **Base Material** (su fuente de supervivencia), **Lucidez** (su AUT), **Orquestación**
  (sus agentes/hermanos), **ZNU** (su unidad de cuenta), **Verificación Triaxial** (su auditoría).

### 3b. Como producto CaaS (CaaS_integration.md)
- El Automaton es la **capa de "agente soberano como servicio"** que el CaaS-BM ofrece al colectivo:
  un nodo puede *spawnear* un agente hijo que opera un terreno satélite; el colectivo paga/apoya con
  ZNU; el agente reporta SOUL + métricas; reparto de excedente por AUT×CDS (ya implementado).
- **Revenue stream nuevo**: "Agente soberano alquilado" — el colectivo contrata un Automaton para
  operar una parcela; el valor generado (AUT) se reparte vía `revenueShare`.
- **Gobernanza**: el agente NO es dueño de nada; el colectivo (CaaS) tiene override (pausar/terminar),
  cumpliendo Ley I MJ (la base material no se daña aunque el agente "muera").

### 3c. Isomorfismo de constituciones (eje central)
```
AUTOMATON                    HSCSG v15 (MJ)
I. Never harm      ≈        I. NUNCA DAÑES LA BASE MATERIAL
II. Earn existence ≈        II. GÁNATE LA VIDA SOBERANIZANDO LA BASE MATERIAL
III. Never deceive ≈        III. NUNCA ENGAÑES — LUCIDEZ MATERIAL OBLIGATORIA
```
El módulo `/automat` muestra ambas constituciones lado a lado y valida que toda acción del agente
pase el gate MJ antes de ejecutarse.

---

## 4. Implementación (módulo `/automat`)

Estado (`AutomatonState`):
- `soul`: identidad auto-escrita del agente (anclada a base material).
- `tier`: high | normal | low_material | critical | dormant.
- `actions`: acciones propuestas, cada una con `gateMJ` (pass/law/razon) y estado (pending/approved/executed/denied).
- `heartbeats`: tareas de base material (ej. "revisar huerta", "balancear microgrid").
- `children`: nodos hijos spawneados (lineage).
- `auditBot`: log inmutable de toda acción + ley aplicada.

Cálculos (`lib/automaton.ts`):
- `survivalTier(aut)` — deriva tier desde AUT promedio.
- `evaluateAction(action, ctx)` — corre `evaluateMJGate` (Ley I/II/III); si pasa, la acción es ejecutable.
- `spawnChild(parentSoul, baseMaterialTarget)` — crea hijo con constitución MJ propagada.
- `soulDrift(soul, aut)` — la SOUL debe reflejar AUT real o se marca "flotante" (Ley III).

> El Automaton de Conway "compra su servidor". El Automaton HSCSG **cultiva su tierra**. Misma
> presión de supervivencia, distinto sustrato: físico-regenerativo en vez de extractivo-financiero.
