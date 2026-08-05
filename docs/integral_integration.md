# Integración Integral Collective (9 repos) → HSCSG v15 OS
# Filosofía de planificación, reestructuración y retroalimentación entre componentes.
# Tres perspectivas: Usuario · LLM · Proyecto HSCSG_v15_OS / CaaS

> Backup en `docs/integral_backup.md`.

---

## 0. Síntesis
Integral = **sistema cooperativo postmonetario, cibernéticamente coordinado**, organizado en 5 subsistemas que forman un **loop cerrado**:
**CDS** (decide) → **OAD** (diseña/certifica) → **COS** (produce) → **ITC** (registra contribución/acceso) → **FRS** (observa/diagnostica) → vuelve a **CDS**.
Es una *filosofía de coordinación*, no una app (los 9 repos son specs JSON + markdown, Phase 1, sin implementación).

---

## 1. Perspectiva del Usuario (¿qué quiere alguien en un nodo Integral/HSCSG?)
- **Decidir en comunidad sin votación mayoritaria**: problemas→propuestas→deliberación→decisión con provenance.
- **Diseños abiertos y certificados**: antes de producir, el diseño existe en commons versionado y eco-evaluado.
- **Contribución reconocida, no mercado**: time-credits por trabajo necesario; no se transfieren ni acumulan (decay).
- **Trabajo organizado alrededor de diseños**: tareas, labor, materiales, QA.
- **Retroalimentación viva**: el sistema "nervioso" observa la realidad y avisa antes de la crisis, pero no manda — la comunidad decide.
- **Memoria institucional**: decisiones append-only, inmutables, solo superseded.

---

## 2. Perspectiva del LLM (¿qué asimilo y qué extirpo?)

### Asimilo (como filosofía + modelo de datos del loop):
| Subsistema Integral | Vector HSCSG | Rol en HSCSG |
|---|---|---|
| **CDS** | Priorizar + Colectivo + Verificación | Deliberación y decisions con provenance |
| **OAD** | Solarpunk (open commons) + Tekitl (blueprints) | Diseños certificados versionados |
| **ITC** | ZNU (demurrage) + CaaS | Time-credits postmonetarios, acceso por contribución |
| **COS** | Tekitl (roles/voluntarios) + Autómata Soberano | Producción organizada por base material |
| **FRS** | Lucidez + Verificación + Colaberry | Feedback loop / nervous system |
| **decisions (DR)** | institutional memory | Decision Records append-only |

### Extirpo (infra de Integral):
- GitHub Issues/PRs como única interfaz de gobernanza (en HSCSG es la app local).
- JSON Schemas estrictos (losuso como *modelo de datos* de referencia, no validación runtime).
- Aprobación de contribuyentes (gated) → en HSCSG el acceso es por CaaS/AUT, no por aplicación.
- Whitepaper peer-review workflow (lo conservo como filosofía documentada, no como proceso).

---

## 3. Perspectiva HSCSG v15 OS + CaaS (monetario → postmonetario)

### Isomorfismo con Materialismo Jerárquico (Leyes I/II/III):
- **Ley I (no dañar base material)**: COS produce solo contra diseños OAD eco-certificados; ITC no mercantiliza. El loop protege la base.
- **Ley II (ganarse la vida soberanizando)**: ITC = reconocimiento de AUT real (work the community identified as necessary). CaaS acceso por contribución = mismo principio.
- **Ley III (lucidez, nunca engañar)**: CDS append-only + provenance; FRS observa y reporta; decisions inmutables. Transparencia radical.

### El loop como "filosofía de reestructuración y retroalimentación":
```
  CDS (priorizar/colectivo)  ──decide──▶  OAD (solarpunk/tekitl)  ──diseña──▶
        ▲                                                          │
        │                                                    COS (tekitl/autómata) ──produce──▶
        │                                                          │
        │◀── FRS (lucidez/verificación) ──observa──  ITC (znu/caas) ──contribución──┘
```
Cada módulo HSCSG existente queda **reencuadrado** como un órgano de este cuerpo cibernético:
- Un Issue en CDS puede nacer de un Submit en Priorizar o de un Signal en FRS.
- Una decisión ratificada (DR) dispara un Proyecto en Tekitl (OAD→COS).
- El trabajo de Tekitl genera LaborEvents que alimentan ZNU/ITC (contribución).
- FRS lee el estado del nodo (base material, sovereign pillars, caas payouts) y emite Recommendations.

---

## 4. Entregable: Módulo `/integral` en HSCSG v15 OS

### Tipos (`src/core/state/integral.ts`)
```ts
type IntegralSystem = 'CDS' | 'OAD' | 'ITC' | 'COS' | 'FRS'
interface Issue { id; title; raisedBy; status: 'open'|'deliberating'|'decided'|'dispatched' }
interface DecisionRecord { id; decision; context; reasoning; date; supersedes?: string }
interface CertifiedDesign { id; title; ecoScore; version }
interface LaborEvent { id; projectId; participant; hours; certified }
interface TimeCredit { id; participant; credits; decayed }
interface SignalPacket { id; fromSystem; severity; finding }
interface Recommendation { id; finding; target; promotedToIssue?: boolean }
interface IntegralState {
  issues: Issue[]; decisions: DecisionRecord[]; designs: CertifiedDesign[];
  labor: LaborEvent[]; credits: TimeCredit[]; signals: SignalPacket[]; recommendations: Recommendation[];
}
```

### Lógica (`src/core/lib/integral.ts`)
- `raiseIssue`, `deliberate`, `ratifyDecision` (append-only DR, supersedes)
- `certifyDesign` (ecoScore), `promoteToCOS`
- `logLabor` (COS), `awardCredits` (ITC, con decay), `extinguishOnAccess`
- `ingestSignal` (FRS), `diagnose`, `recommend`, `promoteRecommendationToIssue` (FRS advisory → CDS only)
- `systemHealth()` → score 0-100 del loop (isomorfo a Lucidez/Verificación)

### Store (`store.ts`)
- Estado `integral` precargado (Issues de ejemplo, 1 DR, 2 designs, labor de Tekitl, credits, signals de FRS)
- Acciones: `raiseIntegralIssue`, `ratifyIntegralDecision`, `certifyIntegralDesign`, `logIntegralLabor`, `awardIntegralCredits`, `ingestIntegralSignal`, `recommendIntegral`, `promoteRecommendation`
- Persistencia (partialize)

### Pantalla (`src/app/screens/Integral.tsx`)
- **Mapa del loop** (5 sistemas como nodos conectados, estado de cada uno)
- **CDS**: lista de Issues + Decision Records (append-only, provenance)
- **OAD**: diseños certificados (ecoScore)
- **COS**: labor events (de Tekitl)
- **ITC**: time-credits con decay
- **FRS**: signals + recommendations (advisory → promover a Issue)
- **System Health**: score del loop cerrado

### Nav + Ruta
- Aside: `Integral · Loop` (icono `RefreshCw` o `Infinity`) → `/integral`

---

## 5. Próximos pasos
1. Crear tipos + lib + store + pantalla + nav/ruta.
2. Typecheck + build + preview (verificar 17 rutas 200).
3. Documentar en `docs/integral_integration.md` (este archivo sirve de base).
4. Commitear y pushear a GitHub.