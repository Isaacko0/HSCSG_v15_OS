# Integración overkillkulture/sovereignty-hub + tairea/sovereignty-hub-ui → HSCSG v15 OS (+ CaaS)
# Tres perspectivas: Usuario · LLM · Proyecto HSCSG_v15_OS / CaaS

> Backups en `docs/sovereignty_hub_backup.md` y `docs/sovereignty_hub_ui_backup.md`.

---

## 0. Síntesis del repo
**Sovereignty Hub** = _13 pilares de civilización autosuficiente_ (Agua, Comida, Energía, Medicina, Comunicación, Manufactura, Seguridad, Transporte, Comercio, Gobernanza, Conocimiento, Cultura) organizados como **fractal 3 × 7 × 13 = ∞** (13 pilares × 7 capas × 3 fases = 273 puntos de acción). Incluye **Pattern Theory** (detectar verdad vs manipulación) y un stack offline-AI (~$150: Whisper + Ollama + Kokoro + Meshtastic + Cyclotron).
**sovereignty-hub-ui** = frontend Vite + Three.js que visualiza los 13 pilares como grafo 3D y es una **encuesta de diagnóstico de soberanía** (91 preguntas: pilar × capa → fase none/survive/build/scale), con auth magic-link y sync a Supabase.

---

## 1. Perspectiva del Usuario (¿qué quiere alguien que usa Sovereignty Hub?)
- **Saber qué tan soberano es su comunidad** en cada pilar (¿tenemos agua? ¿energía? ¿medicina?).
- **Diagnóstico visual**: ver los 13 pilares como un cuerpo/red, no como una lista.
- **Plan de acción por capas**: entrar donde está (Survival) y subir (Preparedness → Stockpile → Production → Commerce → Teaching → Innovation).
- **Sin dependencia de grid/nube**: el stack offline-AI y mesh lo hacen resistente a colapsos.
- **Lucidez frente a manipulación**: Pattern Theory ayuda a distinguir verdad de propaganda.

---

## 2. Perspectiva del LLM (¿qué asimilo y qué extirpo?)

### Asimilo (lógica pura, sin Vite/Three.js/Supabase/JS):
| Concepto hub/ui | Módulo HSCSG v15 | Qué conservo |
|---|---|---|
| 13 PILLARES | `SovereignPillar[]` | n, name, metaphor (cuerpo), color, faClass/icono |
| 7 LAYERS | `SovereignLayer[]` | índice + nombre (Survival…Innovation) |
| 4 PHASES | `SovereignPhase` | none/survive/build/scale + color |
| answers (pillar-layer → phase) | `sovereignty.answers` | diagnóstico por celda |
| survey-content (91 preguntas) | seed de preguntas por pilar | guía de autoevaluación |
| Pattern Theory | `lucidez` integration | detector de manipulación ↔ Ley III |

### Extirpo (infra JS/Supabase/Three.js):
- Vite, Three.js/OrbitControls (globo 3D), @supabase/supabase-js, magic-link auth, db.js, schema.sql, RLS, storage bucket, Font Awesome CDN.
- En HSCSG ya hay auth/estado (Colaberry, CaaS, Zustand) y visualización (podría usarse el grafo del Autómata). **No replico el globo 3D**; uso cards/tablas como las otras pantallas.

---

## 3. Perspectiva HSCSG v15 OS + CaaS (monetario → postmonetario)

### Isomorfismo con Materialismo Jerárquico (Leyes I/II/III):
- **Ley I (no dañar base material)**: los 13 pilares SON la base material. La soberanía = no depender de sistemas que dañan la base. Diagnóstico directo.
- **Ley II (ganarse la vida soberanizando)**: las 7 capas son la escalera AUT (de Survival a Innovation). El nodo "soberano" genera su propia vida.
- **Ley III (lucidez, nunca engañar)**: Pattern Theory = el algoritmo de la Lucidez. El diagnóstico es honesto (none = no iniciado, no se maquilla).

### Integración con vectores HSCSG existentes:
| Vector HSCSG | Conexión con Sovereignty Hub |
|---|---|
| **Base Material** | Los 13 pilares = expansión de `base` (tierra/agua/energía) a los 13 dominios civiles. |
| **Verificación / Lucidez** | Pattern Theory alimenta el módulo de verificación (detectar manipulación en propuestas). |
| **Autómata Soberano** | Un nodo "soberano" (alta fase en los 13 pilares) = entidad que sobrevive (Ley de Conway/Autómata). |
| **CaaS** | Acceso a recursos del CaaS requiere fase mínima de soberanía (AUT). Sin soberanía, no hay CaaS. |
| **Trustlines** | Comercio entre nodos soberanos = líneas de crédito mutuo por pilar. |
| **Vesting (ZNU)** | Aportes a pilares (subir de fase) aceleran unlock de ZNU. |
| **Tekitl** | Proyectos tekitl implementan pilares concretos (p.ej. "Huerta" = pilar Food). |
| **Colaberry** | Colaberry puede guiar el diagnóstico y sugerir próxima capa a subir. |

### Producto monetario → postmonetario:
- **Hoy (monetario)**: Sovereignty Hub usa Supabase (nube), stack offline opcional. La UI es SaaS-like.
- **Mañana (postmonetario en HSCSG)**: el diagnóstico de 13 pilares **se ejecuta local** (Sin Supabase), el estado vive en el store de HSCSG (persistido en localStorage), y la soberanía medida alimenta el CaaS (acceso por contribución real a la base material). Pattern Theory se vuelve el motor de **Lucidez** del nodo.

---

## 4. Entregable: Módulo `/soberania` en HSCSG v15 OS

### Tipos (`src/core/state/sovereignty.ts`)
```ts
type SovereignPhase = 'none' | 'survive' | 'build' | 'scale'
interface SovereignPillar { n: number; name: string; metaphor: string; color: string; icon: string }
interface SovereignLayer { i: number; name: string; desc: string }
interface SovereigntyState {
  pillars: SovereignPillar[]
  layers: SovereignLayer[]
  answers: Record<string, SovereignPhase>   // key "pillar-layer"
  patternScore: number                       // 0-100 (Pattern Theory / lucidez)
}
```

### Lógica (`src/core/lib/sovereignty.ts`)
- `PILLARS_13`, `LAYERS_7`, `PHASES`
- `setAnswer(pillar, layer, phase)`
- `pillarPhase(pillar)` → fase agregada del pilar (mín de sus capas)
- `sovereigntyIndex()` → % de celdas en survive/build/scale (0-100)
- `weakestPillar()`, `strongestPillar()`
- `patternTheoryScore(answers, proposals)` → heurística de manipulación (stub isomorfo a Ley III)

### Store (`store.ts`)
- Estado `sovereignty` precargado (seed de los 13 pilares + 7 capas + answers semilla del nodo)
- Acciones: `setSovereigntyAnswer`, `computePatternScore`
- Persistencia (partialize)

### Pantalla (`src/app/screens/Soberania.tsx`)
- Grid 13×7 de celdas (pilar × capa) coloreadas por fase
- Índice de soberanía global (% verde/amarillo/rojo)
- Pilar más débil / más fuerte
- Slider/selector de fase por celda
- Card "Pattern Theory / Lucidez" (score de manipulación)
- Conexión: "subir capa X del pilar Y" → sugiere proyecto Tekitl / aporte CaaS

### Nav + Ruta
- Aside: `Soberanía · 13 Pilares` (icono `Shield` o `Globe`) → `/soberania`

---

## 5. Próximos pasos
1. Crear tipos + lib + store + pantalla + nav/ruta.
2. Typecheck + build + preview (verificar 16 rutas 200).
3. Documentar en `docs/sovereignty_integration.md` (este archivo sirve de base).