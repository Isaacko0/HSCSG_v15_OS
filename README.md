# HSCSG v15 OS

**Nodo Cosateca v0.1** — Sistema operativo comunitario postmonetario construido sobre el *Materialismo Jerárquico* (Leyes I/II/III) y el *CaaS* (Comunidad como Servicio). Fork de DeseOS / Contento.pro, ampliado por asimilación de 11 repositorios externos como módulos vivos.

> Repositorio: https://github.com/Isaacko0/HSCSG_v15_OS
> Preview local: http://localhost:4173/

---

## Qué es

HSCSG v15 OS es una aplicación web local (sin servidor central) que funciona como el "sistema operativo" de un nodo comunitario soberano. No es una app de productividad: es un **marco de construcción de realidad** donde cada módulo asimilado aporta una capacidad concreta (base material, crédito mutuo, proyectos, vesting, soberanía civilizatoria…) y todas se gobiernan por las mismas 3 leyes:

| Ley | Enunciado | Dónde se manifiesta |
|-----|-----------|---------------------|
| **I** | No dañar la base material ni a las personas | Base Material, Soberanía (13 pilares), Autómata Soberano |
| **II** | Ganarse la vida soberanizando (AUT × CDS) | CaaS, Tekitl, Trustlines, Vesting |
| **III** | Lucidez: nunca engañar | Verificación, Lucidez, Pattern Theory (Soberanía) |

**Postmonetario** significa: el acceso a recursos del nodo se gana por *contribución a la base material* (AUT), no por tener dinero. ZNU, los coins de Tekitl, el crédito mutuo de Trustlines y el vesting son unidades de cuenta internas, no especulativas.

---

## Metodología de asimilación (4 fases)

Cada repo externo se integra con este flujo:

1. **Desempaquetado** — `cp -r` backup de HSCSG + clon del repo fuente.
2. **Limpieza** — separación de dependencias, extracción de la lógica pura, borrado de infra ajena (Laravel, Supabase, Solidity, EVM, Three.js…).
3. **GitHub** — commit inicial versionado (este repo).
4. **Evolución** — el módulo queda vivo, persistido y conectado a los demás vectores.

Cada repo asimilado deja dos documentos en `docs/`:
- `*_backup.md` — backup del repo original (qué es, stack, estructura).
- `*_integration.md` — análisis triple-perspectiva (Usuario · LLM · HSCSG+CaaS).

---

## Módulos (16 pantallas)

| # | Ruta | Módulo | Origen | Qué hace |
|---|------|--------|--------|----------|
| 1 | `/` | Home | DeseOS | Panel de entrada / estado del nodo |
| 2 | `/base` | Base Material | DeseOS | Tierra, agua, energía, comida, herramientas (núcleo Ley I) |
| 3 | `/lucidez` | Lucidez | DeseOS | Claridad y transparencia (Ley III) |
| 4 | `/colectivo` | Colectivo | DeseOS | Tejido social del nodo |
| 5 | `/automata` | Autómata Soberano | **Conway Automaton** | Entidad que sobrevive si regenera su base material |
| 6 | `/znu` | ZNU | DeseOS + extendido | Moneda interna del nodo (demurrage, paridad) |
| 7 | `/verificacion` | Verificación | DeseOS | Comprobación de verdad / manipulación |
| 8 | `/automat` | Automat | DeseOS | Operador/agente del nodo |
| 9 | `/orquestacion` | Orquestación | **Paperclip (resolveskills)** | Control plane de agentes + gates del Materialismo Jerárquico |
| 10 | `/caas` | CaaS · Comunidad | **CaaS (C2C)** | Acceso por contribución (AUT × CDS), no por pago |
| 11 | `/solarpunk` | Solarpunk · Don | **Solarpunk (x2)** | Ofertas/necesidades/mesh de regalo |
| 12 | `/colaberry` | Colaberry · Agente | **Eliza (HR_AI_Agent)** | Agente soberano acompañante del colectivo |
| 13 | `/priorizar` | Priorizar · Colectivo | **ZiadJ/prioritize** | Priorización de propuestas por beneficio/riesgo |
| 14 | `/vesting` | Vesting · ZNU | **berry-vesting** | Vesting inmutable de ZNU (beneficiario auditable, renuncia de owner) |
| 15 | `/trustlines` | Trustlines · Crédito | **trustlines-protocol** | Crédito mutuo ZNU entre pares (deuda bilateral simétrica) |
| 16 | `/tekitl` | Tekitl · Proyectos | **Baruch4413/tekitl** | Proyectos colaborativos + coins sociales + portafolio |
| 17 | `/soberania` | Soberanía · 13 Pilares | **sovereignty-hub + ui** | Diagnóstico de base material (3×7×13) + Pattern Theory |

> Nota: la tabla lista 17 filas porque Home (`/`) es la raíz; las rutas navegables son 16 (del `/base` al `/soberania`).

---

## Repos asimilados (11)

| Repo origen | Mapeado a | Backup + Integración |
|------------|-----------|----------------------|
| [Paperclip (resolveskills)](https://github.com/) | Orquestación | `docs/automaton_backup_original.md`¹ · `docs/automaton_integration.md` |
| [CaaS (C2C)](https://github.com/) | CaaS | `docs/CaaS_backup_original.md` · `docs/CaaS_integration.md` |
| [Conway Automaton](https://github.com/) | Autómata Soberano | `docs/automaton_backup_original.md` · `docs/automaton_integration.md` |
| [lizTheDeveloper/solarpunk_utopia](https://github.com/lizTheDeveloper/solarpunk_utopia) | Solarpunk · Don | `docs/solarpunk_liz_backup.md` · `docs/solarpunk_integration.md` |
| [Isaacko0/Plataforma-solarpunk](https://github.com/Isaacko0/Plataforma-solarpunk) | Solarpunk · Don | `docs/solarpunk_isaac_backup.md` · `docs/solarpunk_integration.md` |
| [Eliza (HR_AI_Agent-collaberry)](https://github.com/) | Colaberry | `docs/colaberry_backup.md` · `docs/colaberry_integration.md` |
| [ZiadJ/prioritize](https://github.com/ZiadJ/prioritize) | Priorizar | `docs/prioritize_backup.md` · `docs/prioritize_integration.md` |
| [sepu85/collabberry-berry-vesting](https://github.com/sepu85/collabberry-berry-vesting) | Vesting · ZNU | `docs/berryvesting_backup.md` · `docs/berryvesting_integration.md` |
| [trustlines-protocol/contracts](https://github.com/trustlines-protocol/contracts) | Trustlines · Crédito | `docs/trustlines_backup.md` · `docs/trustlines_integration.md` |
| [Baruch4413/tekitl](https://github.com/Baruch4413/tekitl) | Tekitl · Proyectos | `docs/tekitl_backup.md` · `docs/tekitl_integration.md` |
| [overkillkulture/sovereignty-hub](https://github.com/overkillkulture/sovereignty-hub) | Soberanía · 13 Pilares | `docs/sovereignty_hub_backup.md` · `docs/sovereignty_integration.md` |
| [tairea/sovereignty-hub-ui](https://github.com/tairea/sovereignty-hub-ui) | Soberanía · 13 Pilares | `docs/sovereignty_hub_ui_backup.md` · `docs/sovereignty_integration.md` |

¹ Los backups originales se guardan también fuera del repo en `../HSCSG_v15_OS_BACKUP_YYYYMMDD_HHMMSS/`.

---

## Arquitectura

```
src/
├── app/
│   ├── App.tsx              # Router (16 rutas)
│   ├── layout/              # Aside (nav), Header, Layout, Coach…
│   └── screens/             # 16 pantallas (una por módulo)
├── components/
│   └── ui.tsx               # Card, Stat, Btn, Badge, EmptyState, Field, Bar
├── core/
│   ├── lib/                 # Lógica pura de cada repo asimilado
│   │   ├── automaton.ts  caas.ts  colaberry.ts  metrics.ts
│   │   ├── orchestration.ts  prioritize.ts  solarpunk.ts
│   │   ├── vesting.ts  trustlines.ts  tekitl.ts  sovereignty.ts
│   └── state/               # Tipos + store (Zustand persistido)
│       ├── store.ts         # Estado global + acciones + partialize
│       ├── seed.ts  types.ts
│       ├── automaton.ts  caas.ts  colaberry.ts  orchestration.ts
│       ├── prioritize.ts  solarpunk.ts  vesting.ts  trustlines.ts
│       ├── tekitl.ts  sovereignty.ts
└── shared/                  # assets, estilos, tipos
```

**Stack:** React 18 + TypeScript + Vite 5 + React Router 6 + Zustand 4 + Tailwind 3 + lucide-react.

**Persistencia:** el store se guarda en `localStorage` (sin backend). `node_modules` y `dist` están en `.gitignore`.

---

## Cómo correrlo

Requiere Node 18+ (y `npm`).

```bash
# 1. Clonar
git clone https://github.com/Isaacko0/HSCSG_v15_OS.git
cd HSCSG_v15_OS

# 2. Instalar dependencias
npm install

# 3. Desarrollo (hot reload en http://localhost:3000 o 3002)
npm run dev

# 4. Build de producción
npm run build          # tsc && vite build  → dist/

# 5. Preview del build (http://localhost:4173)
npm run preview

# Utilidades
npm run typecheck      # tsc --noEmit
npm run lint           # eslint
npm run test           # vitest
```

> El preview (`npm run preview`) sirve `dist/` como una app estática portable. Por limitaciones de ES modules, **ábrelo vía el servidor** (`localhost:4173`), no con `file://`.

---

## Backups de HSCSG (fuera del repo)

Cada asimilación primero hace `cp -r HSCSG_v15_OS HSCSG_v15_OS_BACKUP_<ts>` (sin node_modules/dist):

- `HSCSG_v15_OS_BACKUP_20260805_120241/` — antes de berry-vesting
- `HSCSG_v15_OS_BACKUP_20260805_122034/` — antes de trustlines
- `HSCSG_v15_OS_BACKUP_20260805_123427/` — antes de tekitl
- `HSCSG_v15_OS_BACKUP_20260805_133739/` — antes de sovereignty-hub (+ui)

---

## Licencia

El fork DeseOS/Contento.pro conserva su licencia original. Los repos asimilados mantienen la suya (MIT en la mayoría: sovereignty-hub, tekitl es GPL-3.0, trustlines es GPL). El código de integración de HSCSG v15 OS se publica bajo la misma licencia del fork salvo donde se indique.
