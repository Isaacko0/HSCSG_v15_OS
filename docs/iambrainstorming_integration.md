# Integración iambrainstorming — Perspectiva Triple (Usuario · LLM · HSCSG)

**Fuentes:** iambrainstorming.github.io (principal + Vercel), opinionated_observer, coding_blog, blog (GitLab), interactive-five. Sitios/blogs personales federados. **Aportan saber experiencial + aprendizaje interactivo + pensamiento crítico.**

---

## 1. Perspectiva USUARIO (qué quiere en su Nodo Cosateca)

El usuario del nodo quiere:
- **Aprender haciendo**, no leyendo pasivamente (interactive-five, coding_blog).
- **Pensar críticamente** sobre su realidad (opinionated_observer) — la Lucidez necesita tensión dialéctica.
- **Documentar su saber** de forma viva y versionada (blog = conocimiento común).
- **Múltiples voces soberanas**, no una central (federalismo de blogs = isomorfo a HSCSG).

iambrainstorming le da la *capa de aprendizaje y comunicación*; HSCSG le da la *máquina soberana* que lo hace offline-first y verificable.

---

## 2. Perspectiva LLM (qué asimilar / qué extirpar)

### Asimilar (concepto → módulo HSCSG)
- **Blog general** → saber experiencial del nodo (mapea a `lib/gaia.ts` Capital experiencial + Colaberry).
- **Observador opinado** → pensamiento crítico / Lucidez (RAO + Modo Lucidez).
- **Coding blog** → documentación técnica viva (Hylo knowledge base + desafíos de aprendizaje).
- **Aprendizaje interactivo** → mentoría por retos (Gaia UniDiversity, `lib/gaia.ts` Bounty como reto).
- **Federalismo de blogs** → red de nodos de conocimiento (federación DTN/AP).

### Extirpar (infra ajena, regla offline-first)
- Analytics de terceros (GA/Vercel Insights) → RAO local.
- Dependencia de Vercel/GitHub Pages → HSCSG offline-first.
- Contenido que vulnere Leyes MJ → filtrado por MJ Gate.

### Módulos HSCSG afectados
| Módulo HSCSG | Aporte iambrainstorming |
|--------------|------------------------|
| `lib/gaia.ts` | Capital experiencial + aprendizaje por retos |
| Colaberry | Voz del nodo (blog general) |
| Lucidez / RAO | Pensamiento crítico (observador) |
| Hylo (knowledge) | Documentación técnica viva (coding blog) |
| Federación DTN/AP | Red de blogs soberanos |

---

## 3. Perspectiva HSCSG + CaaS (isomorfismo con Leyes MJ)

### Ley I — No dañar
- Blogs personales: libertad de expresión, pero MJ Gate filtra contenido que dañe base/material o personas.
- Interactive-five: el aprendizaje no debe ser extractivo (sin dark patterns).

### Ley II — Ganarse la vida soberanizando (AUT × CDS)
- Coding blog / interactive: el saber se comparte y se reconoce por AUT×CDS (no por likes/algos).
- Bounty como reto de aprendizaje = misión con recompensa ZNU.

### Ley III — Lucidez
- Observador opinado: la opinión se etiqueta como tal (no como hecho). Modo Lucidez distingue hecho/opinión/creencia.
- Blogs versionados en RAO = trazabilidad del saber.

---

## 4. Confluencia con el VASO COMUNICANTE

iambrainstorming es la **capa de aprendizaje y comunicación** del vaso:
- Copiosis (economía) · Colony (gobernanza) · Kleros/PoH (justicia/identidad) · DeseOS (agencia) · **Gaia (interoperabilidad)** · **iambrainstorming (saber experiencial + educación)**.

HSCSG no es solo máquina: es también *comunidad que aprende en voz alta*.

---

## 5. Mejoras Mutuas

**iambrainstorming → HSCSG:** ecología de saberes vivida, pensamiento crítico, aprendizaje interactivo, federalismo de voces.

**HSCSG → iambrainstorming:** soberanía offline-first, MJ Gate (anti-daño), RAO (trazabilidad), CDS (reconocimiento por contribución), federación (resiliencia sin plataforma).

---

## 6. Inferencias Extrapoladas

1. **Blog = RAO de conocimiento**: cada post es un evento versionado del saber del nodo.
2. **Observador opinado = tensión dialéctica**: la Lucidez necesita opiniones contrastadas, no consenso blando.
3. **Interactive = Bounty de aprendizaje**: los retos educativos son misiones con recompensa ZNU.
4. **Federalismo de blogs = nodos de conocimiento**: cada blog es un nodo soberano en la federación.

---

## 7. Entregables Accionables (P0/P1)

| Entregable | Descripción | Módulo HSCSG | Prioridad |
|------------|-------------|--------------|-----------|
| `docs/iambrainstorming_backup.md` | Backup quirúrgico | Docs | **P0** |
| `docs/iambrainstorming_integration.md` | Este doc | Docs | **P0** |
| BRIEF §2.22, §3.5, §16 | Inyección iambrainstorming | Brief | **P0** |
| `lib/learning.ts` (retos + saber experiencial) | Educación del nodo | `/aprender` | **P2** |

---

## 8. Notas de implementación (sin romper HSCSG)

- **Catálogos fijos** (tipos de saber, retos) → `const` en `lib/learning.ts`.
- **Sin backend**: contenido local; la federación es opcional.
- **MJ Gate**: publicar opinión/documento pasa filtro anti-daño.
- **Isomorfismo respetado**: iambrainstorming aporta el *saber vivido*, HSCSG la *máquina*.
