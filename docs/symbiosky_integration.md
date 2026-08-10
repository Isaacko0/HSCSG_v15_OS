# Integración Symbiosky — Perspectiva Triple (Usuario · LLM · HSCSG)

**Fuente:** Symbiosky (GitLab: whitpaper + contract-evm + nostr). *"Monetizing Credibility, Not Clicks"* — conviction voting para trabajo de conocimiento. **Esta fuente VA MÁS ALLÁ de HSCSG actual**: aporta primitivas de gobernanza que el CDS de HSCSG no tiene (convicción bloqueada, score+umbral, decay por inactividad, anti-whale) + capa de mensajería (Nostr).

---

## 1. Perspectiva USUARIO (qué quiere en su Nodo Cosateca)

El usuario del nodo quiere:
- **Ser recompensado por credibilidad, no por alcance** — trabajo de conocimiento (investigación, periodismo, educación) financiado por convicción comunitaria.
- **Votar con convicción**: bloquear ZNU ∝ a su confianza, no solo "like".
- **Score transparente 1-10** con umbral de calidad (score<5 = sin fondos).
- **Que la inactividad decaiga** su balance (anti-hoarding) pero protegiendo lo activo.
- **Anti-whale**: influencia cara = iliquidez (lock largo), no dinero instantáneo.
- **Mensajería descentralizada** (Nostr) entre nodos, offline-first.

---

## 2. Perspectiva LLM (qué asimilar / qué extirpar)

### Asimilar (concepto → módulo HSCSG nuevo)
| Concepto Symbiosky | Módulo HSCSG | Novedad vs HSCSG actual |
|--------------------|--------------|--------------------------|
| Conviction voting (lock ∝ confianza, hasta 5y) | `lib/symbiosky.ts` + `/credibilidad` | **CDS no lo tiene** |
| Reward = mean_score × multiplier | `lib/symbiosky.ts` | **CDS no tiene score 1-10 + umbral** |
| Decay 5%/año por inactividad (protege activo) | `lib/symbiosky.ts` | **ZNU no tiene decay por inactividad** |
| Anti-whale (lock, vote limits, resets) | `lib/symbiosky.ts` | parcial en CDS |
| Funding por umbral (50 votos/10 conv) | `lib/symbiosky.ts` | CDS quorum parcial |
| Nostr/AT Protocol (mensajería) | Federación DTN/AP | **HSCSG no tiene capa de mensajería** |
| Reputación como activo | AUT/CDS | parcial |

### Extirpar (infra ajena, regla offline-first sin EVM)
- **EVM/Solidity/Foundry** → lógica pura en `lib/symbiosky.ts` (offline).
- **SYSKY ERC20** → ZNU (acceso CaaS, no especulación).
- **AT Protocol/Bluesky/Nostr remotos** → federación DTN/AP local (Nostr = diseño de referencia).
- **Timelock 20d / AccessControl roles** → MJ Gate + CDS local.

### Módulos HSCSG afectados
| Módulo | Aporte Symbiosky |
|--------|------------------|
| NUEVO `lib/symbiosky.ts` | Conviction voting + reward + decay + anti-whale |
| NUEVO pantalla `/credibilidad` | Marketplace de credibilidad del nodo |
| CDS (store) | Se extiende con convicción bloqueada |
| ZNU | Gana decay por inactividad |
| Federación DTN/AP | Gana capa de mensajería (Nostr) |

---

## 3. Perspectiva HSCSG + CaaS (isomorfismo con Leyes MJ)

### Ley I — No dañar
- Anti-whale + umbrales evitan captura y daño por concentración.
- Decay por inactividad redistribuye, no expropia (protege lo activo).

### Ley II — Ganarse la vida soberanizando (AUT × CDS)
- **Reward por credibilidad = AUT×CDS puro**: se gana por contribución verificable, no por capital.
- Conviction voting alinea incentivos con compromiso largoplazo (soberanía real).

### Ley III — Lucidez
- Score 1-10 ponderado por convicción = trazabilidad (RAO).
- Conviction resets al cambiar posición = anti-engaño (Ley III).

---

## 4. Confluencia con el VASO COMUNICANTE

Symbiosky es la **capa de credibilidad + gobernanza por convicción** del vaso:
- Copiosis (economía NBR) · Colony (dominios) · Kleros/PoH (justicia/identidad) · DeseOS (agencia anfibia) · Gaia (interoperabilidad) · iambrainstorming (moneda postmonetaria) · **Symbiosky (convicción + credibilidad + mensajería Nostr)**.

**Va más allá**: HSCSG tenía CDS (voto por reputación) pero NO convicción bloqueada ni decay por inactividad ni capa de mensajería. Symbiosky los aporta como módulos nuevos.

---

## 5. Mejoras Mutuas

**Symbiosky → HSCSG:** convicción bloqueada, score+umbral, decay por inactividad, anti-whale, capa Nostr.

**HSCSG → Symbiosky:** soberanía offline-first (sin EVM), MJ Gate (anti-daño), RAO (trazabilidad), CaaS-BM (acceso sin especulación), federación DTN/AP (resiliencia sin Bluesky/Nostr remotos).

---

## 6. Inferencias Extrapoladas

1. **CDS debe ganar "conviction voting"**: el voto pesa por ZNU bloqueado ∝ confianza.
2. **ZNU debe ganar decay por inactividad** (5%/año sobre exceso) para evitar hoarding.
3. **Score 1-10 + umbral <5 = sin fondos** es el filtro de calidad del CaaS-BM.
4. **Anti-whale por iliquidez** (lock hasta 5y) hace cara la influencia.
5. **Nostr = federación de mensajería** real entre nodos Cosateca.

---

## 7. Entregables (todos P0 — se implementan, no se dejan P2)

| Entregable | Módulo HSCSG | Prioridad | Estado |
|------------|--------------|-----------|-------|
| `docs/symbiosky_backup.md` (texto extraído) | Docs | **P0** | ✅ |
| `docs/symbiosky_integration.md` (este) | Docs | **P0** | ✅ |
| `lib/symbiosky.ts` (conviction+reward+decay+antiwhale) | NUEVO | **P0** | ✅ |
| `state/symbiosky.ts` | NUEVO | **P0** | ✅ |
| Pantalla `/credibilidad` | NUEVO | **P0** | ✅ |
| BRIEF §2.23 + §3.5 (vaso) + §9.2 + §16 | Brief | **P0** | ✅ |
| Store cableado (6 lugares) | store.ts | **P0** | ✅ |

---

## 8. Notas de implementación (sin romper HSCSG)

- **Catálogros fijos** (parámetros: decayBps=500, maxLock=5y, minVotes=50, minConviction=10, scoreThreshold=5) → `const` en `lib/symbiosky.ts`.
- **Sin backend/EVM**: lógica pura offline; ZNU sustituye SYSKY.
- **MJ Gate**: crear propuesta / votar pasa filtro anti-daño (Ley I).
- **Isomorfismo respetado**: Symbiosky aporta las primitivas que CDS/ZNU no tenían; HSCSG las hace offline-first.
