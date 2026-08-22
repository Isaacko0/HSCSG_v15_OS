# BRIEF ONBOARDING CONSTRUCTOR

**Guía práctica de asimilación 4 fases + primera contribución**  
**HSCSG v15 OS** | **Versión 1.0** | **Agosto 2026**  
**Para:** Nuevos integrantes-constructores-usuarios  
**Objetivo:** De cero a primera contribución viva en < 2 horas  

---

## 🎯 QUÉ ES ESTE BRIEF

Este es el **primer brief que debes leer** al unirte a HSCSG v15 OS. Te lleva de "recién llegado" a "constructor activo" en 4 fases probadas con 30+ repos asimilados. Al final tendrás:

- ✅ Tu primer módulo vivo en `src/core/lib/` o `src/app/(os)/`
- ✅ Documentación `*_backup.md` + `*_integration.md` en `docs/`
- ✅ Pull request mergeado a `main`
- ✅ Entendimiento de cómo encaja tu trabajo en la **Meta Plataforma Gaia-Mycelium + OpenHaven + Project Weave**

---

## 🧭 MAPA MENTAL: DÓNDE ESTAMOS

```
┌─────────────────────────────────────────────────────────────────┐
│                    HSCSG v15 OS (Nodo Soberano)                 │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │  4 CAPAS (Ya implementadas)                                 ││
│  │  1. Base Material (13 Pilares × 7 Capas × 4 Fases)         ││
│  │  2. Gobernanza (CDS + Autómata Leyes MJ I/II/III)          ││
│  │  3. Trust/Identity (ERC-8004 + RAO + ValueFlows)           ││
│  │  4. Inteligencia (Autómata E²R + CoachFAB Happpy CMO)      ││
│  └─────────────────────────────────────────────────────────────┘│
│  ┌─────────────────────────────────────────────────────────────┐│
│  │  6 VASOS COMUNICANTES (Pipelines gobernados)                ││
│  │  governance:sync ↔ trust:bridge ↔ infra:connect             ││
│  │  intel:match ↔ app:federate ↔ eco:sync                      ││
│  └─────────────────────────────────────────────────────────────┘│
│  ┌─────────────────────────────────────────────────────────────┐│
│  │  NAVTEKA (Capa Social)                                      ││
│  │  neko-rooms (WebRTC) + Coworkers + Boundaries + CoachFAB   ││
│  └─────────────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────────────┘
        │                    │                    │
        ▼                    ▼                    ▼
┌───────────────┐  ┌─────────────────┐  ┌──────────────────┐
│  OPENHAVEN    │  │  PROJECT WEAVE  │  │  GAIA-MYCELIUM   │
│  (Discovery)  │  │  (Trust Layer)  │  │  (Strategy/Market)│
│  205 tools    │  │  FPP+Groups+DTG │  │  6 capas, 3 niveles│
│  Caso→Cap→Tool│  │  6 Capital Streams│  │  Commonomics     │
└───────────────┘  └─────────────────┘  └──────────────────┘
```

---

## ⚡ INICIO RÁPIDO (5 MINUTOS)

```bash
# 1. Clona el repo
git clone https://github.com/Isaacko0/HSCSG_v15_OS.git
cd HSCSG_v15_OS

# 2. Instala dependencias
npm install

# 3. Levanta en desarrollo
npm run dev
# → http://localhost:3000 (o 3002)

# 4. Explora las 33 rutas navegables
# Prueba: /boundaries, /automata, /coach, /vasos, /simulador

# 5. Ejecuta el orchestrator (ve el estado actual)
node scripts/orchestrator-next-steps.js status
```

---

## 📚 FASE 1: DESEMPAQUETADO (Entender el Repo Fuente)

### 1.1 Elige tu Repo a Asimilar

**Criterios de selección:**
- ¿Resuelve una capacidad faltante en HSCSG? (ver `docs/BRIEFS_INDEX.md` gaps)
- ¿Tiene lógica pura separable de infraestructura? (ideal: TypeScript/JS puro)
- ¿Licencia compatible? (MIT, Apache-2.0, GPL-3.0 OK)
- ¿Comunidad activa o código maduro?

**Ejemplos de buenos candidatos:**
- Protocolos de identidad (DIDComm, KERI, did:webvh)
- Protocolos de confianza (Trust Registries, VC schemas)
- Herramientas de gobernanza (CDS, voting, consensus)
- Economía regenerativa (mutual credit, time banking, demurrage)
- Infraestructura P2P (libp2p, WebRTC, DHT, mesh)

### 1.2 Clona y Explora

```bash
# En directorio temporal fuera de HSCSG_v15_OS
git clone <repo-fuente-url> repo-fuente
cd repo-fuente

# Entiende la estructura
find . -name "*.ts" -o -name "*.js" | head -30
cat package.json
cat README.md

# Identifica:
# - Lógica pura (carpeta src/lib, src/core, lib, utils)
# - Infraestructura a extirpar (Docker, Supabase, Solidity, Three.js, etc.)
# - Dependencias externas (APIs, bases de datos, blockchain)
# - Modelo de datos (tipos, schemas, interfaces)
```

### 1.3 Haz el Backup Inicial del HSCSG

```bash
# Desde HSCSG_v15_OS
cd ../HSCSG_v15_OS
cp -r HSCSG_v15_OS HSCSG_v15_OS_BACKUP_$(date +%Y%m%d_%H%M%S)
# Esto es obligatorio antes de cada asimilación (regla de la casa)
```

---

## 🧹 FASE 2: LIMPIEZA (Extraer Lógica Pura)

### 2.1 Principio: **Extirpar Infra Ajena, Conservar Lógica**

| Extirpar (Eliminar) | Conservar (Migrar) |
|---------------------|-------------------|
| Docker, Docker Compose | Lógica pura TypeScript/JS |
| Supabase, Firebase, PostgreSQL | Modelos de datos, tipos, interfaces |
| Solidity, EVM, Web3, ethers.js | Algoritmos, fórmulas, reglas de negocio |
| Three.js, WebGL, Canvas | Cálculos matemáticos, geometría |
| Express, Fastify, Next.js API routes | Funciones puras, utilidades |
| Autenticación externa (Auth0, Clerk) | Lógica de permisos, roles, capacidades |
| UI framework específica (React components) | Lógica de estado, stores, acciones |

### 2.2 Proceso de Extracción

```bash
# 1. Identifica archivos de lógica pura
find repo-fuente -name "*.ts" -path "*/lib/*" -o -path "*/core/*" -o -path "*/utils/*" | head -20

# 2. Copia solo lógica pura a carpeta temporal
mkdir -p /tmp/extraccion
cp -r repo-fuente/src/lib /tmp/extraccion/ 2>/dev/null || true
cp -r repo-fuente/src/core /tmp/extraccion/ 2>/dev/null || true
cp -r repo-fuente/lib /tmp/extraccion/ 2>/dev/null || true

# 3. Limpia cada archivo:
# - Elimina imports de infra (Prisma, Supabase, ethers, etc.)
# - Reemplaza con interfaces puras
# - Añade tipos TypeScript estrictos
# - Documenta con JSDoc qué hacía la infra original
```

### 2.3 Checklist de Limpieza por Archivo

- [ ] Sin imports de `prisma`, `@supabase`, `ethers`, `web3`, `docker`
- [ ] Sin `process.env` directo (usar config centralizada)
- [ ] Sin `fetch` directo a APIs externas (usar adaptadores)
- [ ] Interfaces TypeScript para todos los tipos públicos
- [ ] JSDoc en funciones públicas: qué hace, inputs, outputs, side effects
- [ ] Tests unitarios puros (sin BD, sin red) → `vitest`
- [ ] Exporta solo lo necesario (barrel exports en `index.ts`)

---

## 📦 FASE 3: GITHUB (Integrar al Repo Vivo)

### 3.1 Estructura de Destino en HSCSG_v15_OS

```
src/
├── core/
│   ├── lib/              # ← Lógica pura aquí (un archivo por capacidad)
│   │   ├── tu-modulo.ts
│   │   └── index.ts      # barrel export
│   └── state/
│       ├── tu-modulo.ts  # Zustand store slice
│       └── store.ts      # integra en store principal
├── app/
│   └── (os)/
│       └── tu-ruta/      # pantalla en /tu-ruta
│           └── page.tsx
├── components/
│   └── TuComponente.tsx  # si necesita UI
└── skills/
    └── tu-skill/         # si es skill reutilizable
        └── SKILL.md
```

### 3.2 Crea los Archivos de Documentación (OBLIGATORIO)

**Cada repo asimilado DEBE generar 2 archivos en `docs/`:**

#### A. `docs/tu-modulo_backup.md` — Backup Quirúrgico

```markdown
# Tu Módulo — Backup Quirúrgico

**Fuente:** `<repo-url>` (commit `<sha>`)
**Tipo:** <Protocolo/Librería/Herramienta>
**Dominio:** <Identidad/Gobernanza/Economía/Infra/Inteligencia>
**Stack original:** <TypeScript, Rust, Go, etc.>
**Licencia:** <MIT/Apache-2.0/GPL-3.0>

## Estructura Original
- Archivos clave: `src/lib/x.ts`, `src/core/y.ts`
- Dependencias clave: `dep1`, `dep2` (extirpadas: `dep3`, `dep4`)
- Modelo de datos: `interface X { ... }`, `type Y = ...`

## Qué se Conserva
- Lógica: `funciónA()`, `claseB`, `tipoC`
- Algoritmos: `algoritmoX()` en `utils/math.ts`
- Tipos: `interface X`, `type Y`

## Qué se Extirpa
- Infra: Docker, Supabase, Solidity, Three.js
- APIs externas: `fetch` directo a `api.ejemplo.com`
- Auth externa: Auth0, Clerk
- UI: Componentes React acoplados

## Isomorfismo con HSCSG
| Concepto Fuente | Equivalente HSCSG | Estado |
|----------------|-------------------|--------|
| Concepto A | Módulo X en `lib/` | ✅ Take |
| Concepto B | Adaptado a Boundaries CEL | 🔄 Adapt |
| Concepto C | Blockchain → descartado | ❌ Discard |
```

#### B. `docs/tu-modulo_integration.md` — Integración Operativa

```markdown
# Tu Módulo — Integración Operativa

## Resumen Ejecutivo
Una frase: qué resuelve, para quién, cómo encaja en HSCSG.

## Mapeo Concepto a Concepto
| Concepto Fuente | Equivalente HSCSG | Archivo Destino | Gap/Acción |
|----------------|-------------------|-----------------|------------|

## Decisiones Take/Adapt/Discard
### ✅ TAKE (Integrar directo)
- Concepto X → `lib/x.ts`
### 🔄 ADAPT (Modificar para HSCSG)
- Concepto Y → adaptar a Boundaries CEL / ERC-8004 / ValueFlows
### ❌ DISCARD (No integrar)
- Concepto Z → blockchain/EVM/centralizado

## Archivos Creados/Modificados
- `src/core/lib/tu-modulo.ts` (lógica pura)
- `src/core/state/tu-modulo.ts` (store slice)
- `src/app/(os)/tu-ruta/page.tsx` (pantalla)
- `src/core/lib/index.ts` (barrel export)
- `src/core/state/store.ts` (integración en store principal)

## Vasos Comunicantes Afectados
- `governance:sync` — si afecta gobernanza
- `trust:bridge` — si afecta identidad/confianza
- `infra:connect` — si afecta infra/neko
- `intel:match` — si afecta IA/matching
- `app:federate` — si afecta marketplace/economía
- `eco:sync` — si afecta métricas/base material

## Verification Checklist
- [ ] `npm run typecheck` pasa
- [ ] `npm run build` pasa
- [ ] `npm run test` pasa (7/7 tests)
- [ ] Pantalla accesible en `/tu-ruta` (200 OK)
- [ ] Documentación `*_backup.md` + `*_integration.md` en `docs/`
- [ ] Entrada en `docs/BRIEFS_INDEX.md` actualizada
- [ ] Entrada en `docs/fuentes_indice.json` actualizada
```

### 3.3 Integra en el Store Principal

```typescript
// src/core/state/tu-modulo.ts
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface TuModuloState {
  // estado aquí
  accion: () => void
}

export const useTuModuloStore = create<TuModuloState>()(
  persist(
    (set) => ({
      // estado inicial
      accion: () => set({ ... }),
    }),
    {
      name: 'hscsg.tu-modulo.v1',
      partialize: (state) => ({ /* solo estado persistible */ }),
    }
  )
)
```

```typescript
// src/core/state/store.ts — AÑADIR AL FINAL
import { useTuModuloStore } from './tu-modulo'

// En el store principal:
tuModulo: useTuModuloStore.getState(),
// Y en actions:
setTuModulo: (updates) => useTuModuloStore.getState().accion(updates),
```

### 3.4 Crea la Pantalla (si aplica)

```tsx
// src/app/(os)/tu-ruta/page.tsx
'use client'

import { TuComponente } from '@/components/TuComponente'

export default function TuRutaPage() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Tu Módulo</h1>
      <TuComponente />
    </div>
  )
}
```

### 3.5 Actualiza Navegación (si nueva pantalla)

```tsx
// packages/ui/src/Aside.tsx — AÑADIR A NAV_ITEMS
const NAV_ITEMS = [
  // ... existentes
  { key: 'tu-ruta', label: 'Tu Módulo', icon: TuIcono, color: 'text-green-400' },
]
```

### 3.6 Actualiza Documentación Maestra

```bash
# 1. Actualiza docs/BRIEFS_INDEX.md
# Añade entrada en tabla correspondiente

# 2. Actualiza docs/fuentes_indice.json
# Añade nueva fuente con next ID

# 3. Actualiza CHANGELOG.md
# Entrada: "feat: asimilación <repo> — <capacidad>"
```

---

## 🚀 FASE 4: EVOLUCIÓN (Hacerlo Vivo + PR)

### 4.1 Corre Verificaciones

```bash
# Desde HSCSG_v15_OS
npm run typecheck    # TypeScript strict
npm run lint         # ESLint
npm run build        # Vite build → dist/
npm run test         # 7/7 tests passing
npm run preview      # Verifica build producción
```

### 4.2 Ejecuta el Orchestrator (Verifica Integración)

```bash
node scripts/orchestrator-next-steps.js status
# Debe mostrar tu nuevo workstream/task si aplica

# Si tu módulo desbloquea algo en GAIA_INTEGRATION:
node scripts/orchestrator-next-steps.js run TU_TAREA
```

### 4.3 Crea el Pull Request

```bash
git add -A
git commit -m "feat: asimilación <repo-fuente> — <capacidad principal>

- src/core/lib/tu-modulo.ts: lógica pura extraída
- src/core/state/tu-modulo.ts: store slice integrado
- src/app/(os)/tu-ruta/page.tsx: pantalla accesible
- docs/tu-modulo_backup.md: backup quirúrgico
- docs/tu-modulo_integration.md: integración operativa
- docs/BRIEFS_INDEX.md + fuentes_indice.json actualizados
- Vasos comunicantes afectados: <lista>

Closes #<issue-number>"
```

```bash
git push origin feature/tu-modulo
# Crea PR en GitHub: base=main, head=feature/tu-modulo
```

### 4.4 Checklist PR (Antes de Merge)

- [ ] `npm run typecheck` ✅
- [ ] `npm run build` ✅  
- [ ] `npm run test` ✅ (7/7)
- [ ] `npm run preview` → pantalla accesible 200 OK
- [ ] `docs/<modulo>_backup.md` existe
- [ ] `docs/<modulo>_integration.md` existe
- [ ] `docs/BRIEFS_INDEX.md` actualizado
- [ ] `docs/fuentes_indice.json` actualizado (ID incrementado)
- [ ] CHANGELOG.md actualizado
- [ ] Vasos comunicantes documentados en integration.md
- [ ] Pantalla accesible en `/tu-ruta` en preview
- [ ] Orchestrator muestra task completada (si aplica)

---

## 🛠️ HERRAMIENTAS DEL CONSTRUCTOR

### Comandos Esenciales

```bash
# Desarrollo
npm run dev              # Hot reload
npm run build            # Production build
npm run preview          # Preview dist/
npm run typecheck        # tsc --noEmit
npm run lint             # ESLint
npm run test             # Vitest (7/7)

# Orchestrator
node scripts/orchestrator-next-steps.js status
node scripts/orchestrator-next-steps.js graph
node scripts/orchestrator-next-steps.js run <TASK_ID>

# Git
git add -A && git commit -m "feat: ..." && git push origin main
```

### Skills Disponibles (Carga según necesidad)

```bash
# En Hermes Agent:
skill_view hscsg-next-steps-orchestrator    # Orquestador tareas
skill_view hscsg-gaia-mycelium-integration  # Integración Gaia
skill_view hscsg-repo-assimilation          # Metodología 4 fases
skill_view policy-cel-gateway               # Boundaries CEL
skill_view openbot-governed-computer-use    # Computer use gobernado
skill_view ag-ui-protocol                   # Protocolo Agent-to-User
```

### Documentos Clave (Lee en orden)

1. **Este brief** → `BRIEF_ONBOARDING_CONSTRUCTOR.md`
2. **Brief exhaustivo** → `BRIEF_EXHAUSTIVO_HSCSG_COSATECA_OS.md`
3. **Índice de briefs** → `docs/BRIEFS_INDEX.md`
4. **Integración Gaia-Mycelium** → `docs/gaia_mycelium_integration.md`
5. **Análisis OpenHaven+Weave** → `docs/ANALISIS_EXHAUSTIVO_OPENHAVEN_WEAVE_HSCSG_GAIA.md`
6. **Orchestrator CLI** → `scripts/orchestrator-next-steps.js`

---

## 🎓 TU PRIMERA CONTRIBUCIÓN SUGERIDA

### Opción A: Gap Documentado (Fácil)
```bash
# 1. Revisa docs/BRIEFS_INDEX.md → sección "Próximos Briefs a Generar (Prioridad P0)"
# 2. Elige uno: copiosis_backup, conway_automaton_backup, onemanco_backup, etc.
# 3. Sigue Fases 1-4 → crea *_backup.md + *_integration.md
# 4. PR → primer merge
```

### Opción B: Micro-mejora en Código Existente
```bash
# 1. Ejecuta: npm run typecheck
# 2. Arregla un warning TypeScript
# 2. Añade JSDoc a función sin documentar en src/core/lib/
# 3. PR: "docs: añade JSDoc a función X en lib/Y.ts"
```

### Opción C: Nueva Pantalla Simple
```bash
# 1. Crea src/app/(os)/nueva-ruta/page.tsx
# 2. Añade a Aside.tsx
# 4. PR: "feat: nueva pantalla /nueva-ruta para <propósito>"
```

---

## 🌐 CONTEXTO MAYOR: POR QUÉ IMPORTA TU TRABAJO

Tu contribución no es código aislado. Cada módulo asimilado:

1. **Fortalece el nodo soberano** → Base Material + Gobernanza + Economía + Inteligencia
2. **Alimenta los Vasos Comunicantes** → Hace que la federación Gaia-Mycelium sea real
3. **Alimenta OpenHaven** → Tu módulo aparece en la Matrix (205+ herramientas)
4. **Alimenta Project Weave** → Tu lógica fortalece FPP/Groups/DTG/TSP
5. **Habilita Gaia-Mycelium** → Hace la Meta Plataforma operativa, no teórica

> **"No pedimos permiso para ser soberanos. Construimos la infraestructura que lo hace verificable."**

---

## 🆘 SI TE ATASCAS

| Problema | Solución |
|----------|----------|
| TypeScript errors | `npm run typecheck` → lee errores → arregla tipos |
| Build fails | `npm run build` → lee error → usualmente import mal escrito |
| Test fails | `npm run test` → `vitest --reporter=verbose` |
| Orchestrator no ve mi task | Revisa `orchestrator-state.json` → `taskRegistry` |
| Pantalla 404 | Revisa `App.tsx` routes + `Aside.tsx` NAV_ITEMS |
| Store no persiste | Revisa `partialize` en store slice |
| PR blocked | Pide review a @Isaacko0 en GitHub |

### Canales de Ayuda

- **GitHub Issues:** `https://github.com/Isaacko0/HSCSG_v15_OS/issues`
- **GitHub Discussions:** Para preguntas de diseño/arquitectura
- **Hermes Agent:** Pregunta en chat con skills cargadas
- **Orchestrator:** `node scripts/orchestrator-next-steps.js status`

---

## ✅ CHECKLIST FINAL: ¿ERES YA CONSTRUCTOR ACTIVO?

- [ ] Clonado repo + `npm install` + `npm run dev` funcionando
- [ ] Leído `BRIEF_EXHAUSTIVO_HSCSG_COSATECA_OS.md` (secciones 1-4)
- [ ] Entendido 4 fases + 6 vasos + 4 capas + navteka + OpenHaven + Weave
- [ ] Elegido repo a asimilar O micro-mejora O nueva pantalla
- [ ] Ejecutado Fases 1-4 completo al menos una vez
- [ ] Primer PR mergeado a `main`
- [ ] Tu módulo aparece en `node scripts/orchestrator-next-steps.js status`
- [ ] Puedes explicar a otro nuevo: "¿Qué es HSCSG v15 OS y cómo contribuyo?"

---

## 📜 LICENCIA Y CRÉDITOS

Este brief es parte de **HSCSG v15 OS** — Licencia MIT.  
Basado en metodología probada con **30+ repos asimilados** (Paperclip, CaaS, Conway Automaton, Solarpunk, Eliza, ZiadJ/prioritize, Berry-vesting, Trustlines, Tekitl, Sovereignty-hub, Integral Collective, Sci-Hive, GuiFV/life, Auravana, NEAR, ADSOA, Urbanika, Block/buzz, NEAR, Didacta, Fresco/RBE, etc.).

**Mantenido por:** Isaac Ko (Isaacko0) + Zeitnus + Hermes Agent  
**Última actualización:** Agosto 2026  
**Próxima revisión:** Tras cada 5 asimilaciones o cambio mayor de arquitectura

---

> **"La soberanía no se declara: se mide, verifica y federada."**  
> — *HSCSG v15 OS / Cosateca OS*