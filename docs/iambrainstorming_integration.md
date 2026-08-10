# Integración iambrainstorming — Perspectiva Triple (Usuario · LLM · HSCSG)

**Fuente:** libro mdBook `iambrainstorming.github.io` (Amiya Tulu) — ~270 capítulos sobre moneda post-capitalista, democracia justa DPoS, descentralización, educación, trabajo, ciudad. Federado con `opinionated_observer`, `coding_blog`, `interactive-five`, `blog` (GitLab). Licencia CC + MIT.

**Aporta al vaso comunicante:** la **capa de modelo de negocio del conocimiento + moneda que cuenta para la unidad + precio por consenso de utilidad + democracia por expertise**. Valida y enriquece ZNU, CDS, RAO, CaaS-BM y la federación DTN/AP de HSCSG.

---

## 1. Perspectiva USUARIO (qué quiere en su Nodo Cosateca)

El usuario del nodo quiere:
- **No depender del dinero fiat ni de deuda** — acceso a necesidades por contribución (CaaS).
- **Una moneda no-inflable que "cuenta para la unidad"** (total=1) — ZNU.
- **Precios justos por consenso de utilidad**, no especulación — CDS+RAO.
- **Gobernanza por expertise (DPoS evolutivo)**, no partidos con conflicto de interés — CDS.
- **UBI ligado a aprender/thriving**, no incondicional ciego — CaaS-BM.
- **Conocimiento libre financiado por modelos híbridos** (tie-ups, APIs abiertas) — federalismo de blogs.
- **Trabajo de máx. 5h/día, sin bullshit jobs** — postmonetario real.

---

## 2. Perspectiva LLM (qué asimilar / qué extirpar)

### Asimilar (concepto → módulo HSCSG)
| Concepto iambrainstorming | Módulo HSCSG |
|----------------------------|--------------|
| Moneda "total=1", no inflable | `ZNU` (pool fijo) — `lib/valueDual.ts` |
| Exchange money con caducidad | ZNU con rotación anti-acumulación |
| 4 tipos: exchange/storage/deposit/loan | CaaS (acceso, no deuda) |
| Price discovery por Schelling/consenso | `lib/kleros.ts` (jurados) + `lib/gaia.ts` (Bounty) |
| Tax shitcoin / subsidize good | `RAO` (tasa externalidad neg/positiva) |
| Democracia DPoS por expertise | `CDS` (Consejo de Dominios Especializados) |
| UBI ligado a educación/thriving | `CaaS-BM` |
| APIs abiertas / federación | `Federación DTN/AP` |
| Accountability (explainability/auditability) | `RAO` (append-only) |
| 5h/día, sin bullshit jobs | Lucidez / límite de trabajo |

### Extirpar (infra ajena, regla offline-first sin EVM)
- **Blockchain/EVM/smart contracts** (Schelling on-chain, DEX, KYC) → CDS+RAO locales.
- **Stablecoins USD-pegged** → ZNU/CaaS (el autor rechaza el amor por USD: *"Love for USD pegged stable coin... must end"*).
- **ICOs especulativos** → CaaS (financiación por contribución).
- **Plataformas centralizadas** (Amazon/Zomato/Ola) → federación DTN/AP.
- **Analytics de terceros** → RAO local.

### Módulos HSCSG afectados
| Módulo | Aporte iambrainstorming |
|--------|------------------------|
| `lib/valueDual.ts` | Moneda no-inflable (total=1) |
| `lib/kleros.ts` | Jurados = "rational price discoverers" |
| `lib/gaia.ts` | Bounty = Schelling game de precio/utilidad |
| `lib/colony.ts` + CDS | Democracia DPoS por expertise |
| RAO | Tax/subsidio por externalidad |
| CaaS-BM | UBI ligado a thriving |

---

## 3. Perspectiva HSCSG + CaaS (isomorfismo con Leyes MJ)

### Ley I — No dañar
- Moneda no-inflable evita concentración y expropiación por inflación (el autor: "all money gets concentrated with people that run these factories").
- Eliminar deuda (fiat nacional) → CaaS sin deuda.
- Tax externalidad negativa (fossil, unhealthy food) → RAO.

### Ley II — Ganarse la vida soberanizando (AUT × CDS)
- Precio por consenso de utilidad = valor por contribución real, no especulación.
- UBI ligado a thriving/educación = CaaS-BM (acceso por desarrollo).
- APIs abiertas = infraestructura compartida, no silo.

### Ley III — Lucidez
- Accountability: responsibility, explainability, accuracy, auditability, fairness → RAO (todo trazable).
- "Conocimiento libre, modelo híbrido" = transparencia del negocio del conocimiento.
- Rechazo a stablecoins opacas (USD) = Lucidez monetaria.

---

## 4. Confluencia con el VASO COMUNICANTE

iambrainstorming es la **capa de modelo de negocio + moneda postmonetaria** del vaso:
- Copiosis (economía NBR) · Colony (gobernanza dominios) · Kleros/PoH (justicia/identidad) · DeseOS (agencia anfibia) · Gaia (interoperabilidad) · **iambrainstorming (moneda que cuenta para la unidad + precio por consenso + democracia por expertise)**.

HSCSG no es solo máquina: es *economía postmonetaria con modelo de negocio del conocimiento explicitado*.

---

## 5. Mejoras Mutuas

**iambrainstorming → HSCSG:** moneda no-inflable (total=1), precio por consenso de utilidad, democracia DPoS por expertise, UBI ligado a thriving, 5h/día sin bullshit jobs, APIs abiertas.

**HSCSG → iambrainstorming:** soberanía offline-first (sin blockchain), MJ Gate (anti-daño/anti-especulación), RAO (trazabilidad), CDS (gobernanza por expertise ya implementada), federación DTN/AP (resiliencia).

---

## 6. Inferencias Extrapoladas

1. **ZNU es la moneda "que cuenta para la unidad"**: total=1, no inflable, acceso por contribución.
2. **CDS_Jurados = "rational price discoverers"**: los jurados de Kleros son exactamente el mecanismo de Schelling de iambrainstorming.
3. **Bounty de Gaia = Schelling game**: retos con incentivo por consenso de utilidad.
4. **RAO = tax/subsidio por externalidad**: mecanismo de precio justo del autor.
5. **Democracia DPoS = CDS**: árbol de departamentos por expertise = Consejo de Dominios Especializados.
6. **CaaS-BM = UBI ligado a thriving**: no incondicional, sino por desarrollo.

---

## 7. Entregables Accionables

| Entregable | Módulo HSCSG | Prioridad | Estado |
|------------|--------------|-----------|-------|
| `docs/iambrainstorming_backup.md` (texto extraído) | Docs | **P0** | ✅ reescrito con texto íntegro |
| `docs/iambrainstorming_integration.md` (este) | Docs | **P0** | ✅ |
| BRIEF §2.22 + §3.5 (vaso) + §16 | Brief | **P0** | ✅ (commit previo 6f5721d) |
| `lib/valueDual.ts`: ZNU no-inflable (total=1) + rotación anti-acumulación | `/agencia` anfibio | **P2** | pendiente |
| `lib/kleros.ts`: jurados como "rational price discoverers" (Schelling) | `/justicia` | **P2** | pendiente |
| Pantalla `/democracia` (DPoS por expertise = CDS) | nuevo | **P2** | pendiente |

---

## 8. Notas de implementación (sin romper HSCSG)

- **Catálogos fijos** (principios de accountability, tipos de money, ejes del libro) → `const` en `lib/*`.
- **Sin backend**: contenido local; la federación es opcional.
- **MJ Gate**: publicar opinión/documento pasa filtro anti-daño (Ley I).
- **Isomorfismo respetado**: iambrainstorming aporta el *modelo de negocio del conocimiento + moneda postmonetaria*, HSCSG la *máquina soberana*.
- **Extracción**: hecha desde el repo clonado (`repo_iambrainstorming_iambrainstorming.github.io`), no vía web_extract (402 billing). Capítulos íntegros leídos y citados.
