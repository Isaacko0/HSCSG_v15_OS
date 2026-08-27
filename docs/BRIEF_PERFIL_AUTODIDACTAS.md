# BRIEF_PERFIL_AUTODIDACTAS.md

**Guía de Integración para Autodidactas en HSCSG v15 OS**  
**Versión:** 1.0 | **Fecha:** 2026-08-22 | **Audiencia:** Quienes aprenden por su cuenta, sin currículo formal, guiados por curiosidad y necesidad

---

## 🎯 ¿POR QUÉ ESTE BRIEF?

Eres autodidacta: **aprender es tu superpoder**. HSCSG v15 OS es **código abierto, documentación viva, sin gatekeepers** — diseñado para quien aprende haciendo, rompiendo, reconstruyendo.

> **"La educación formal te da un mapa. La autodidaxia te da la brújula para navegar sin mapa."**

---

## 🧭 TU VENTAJA EN HSCSG

| Lo Que Haces Naturalmente | Cómo HSCSG lo Potencia |
|---------------------------|------------------------|
| **Aprendes por proyectos** | 104 briefs = 104 micro-proyectos listos |
| **Buscas fuentes primarias** | `*_backup.md` = fuente original; `*_integration.md` = tu análisis |
| **Validas haciendo** | `npm run test` + `orchestrator run` = verificación inmediata |
| **Compartes lo que aprendes** | Tu PR = documentación para el siguiente autodidacta |
| **Navegas sin permiso** | Repo público, issues abiertos, skills ejecutables |

---

## 🚀 TU INICIO: **CERO PERMISOS, CERO BARRERAS**

```bash
# 1. Clona (30 seg)
git clone https://github.com/Isaacko0/HSCSG_v15_OS.git
cd HSCSG_v15_OS

# 2. Levanta (2 min)
npm install && npm run dev
# → http://localhost:3000 — explora TODO sin login

# 3. Diagnóstico autónomo (1 min)
node scripts/orchestrator-next-steps.js status
# → Ves: workstreams, tareas, grafo, próxima óptima

# 4. Elige TU primer reto (no hay asignaciones)
# ¿Qué te llama? boundaries? automata? coach? vasos? briefs?
```

---

## 🗺️ TU MAPA DE APRENDIZAJE AUTODIRIGIDO

### Nivel 1: Orientación (30 min)
| Documento | Qué Aprendes | Tiempo |
|-----------|--------------|--------|
| `BRIEF_EXHAUSTIVO_HSCSG_COSATECA_OS.md` §1 | Visión + 3 Leyes MJ | 10 min |
| `docs/BRIEFS_INDEX.md` | 104 briefs navegables | 10 min |
| `BRIEF_ONBOARDING_CONSTRUCTOR.md` | Flujo 4 fases | 10 min |

### Nivel 2: Manos a la Obra (2-4 hrs)
| Ruta | Qué Haces | Verificación |
|------|-----------|--------------|
| **Boundaries** | Edita `lib/boundaries.ts` → añade política → `npm run test` | 7/7 tests pass |
| **Autómata** | Extiende `lib/automaton.ts` → nuevo tier → `orchestrator run` | Task completada |
| **CoachFAB** | Añade chip en `CoachFAB.tsx` → pregúntale → ve respuesta | Chat funcional |
| **Briefs** | Sigue ONBOARDING → crea `*_backup.md` + `*_integration.md` | PR mergeado |

### Nivel 3: Profundización (Semanas)
| Tema | Documentos Clave | Proyecto Sugerido |
|------|------------------|-------------------|
| **Policy/Governance** | `boundaries.ts`, `cds.ts`, `kleros_integration.md` | Nueva política CEL + test |
| **Economía Postmonetaria** | `netbenefit.ts`, `copiosis_integration.md`, `znu.ts` | Calculadora BN + jurados |
| **Identidad Soberana** | `ERC-8004`, `rao.ts`, `gaia_mycelium_integration.md` | VC schema + trust bridge |
| **IA Verificable** | `automaton.ts`, `CoachFAB.tsx`, `lucidez_audit_spec.md` | Chip CoachFAB + Lucidez |
|| **Infra P2P** | `neko-client`, `discovery_adapter.ts`, `vasos page.tsx` | neko-room + vaso nuevo |

---

## 🛠️ HERRAMIENTAS AUTODIDACTAS (Aprendes Usándolas)

| Herramienta | Cómo Aprendes con Ella |
|-------------|------------------------|
| **Orchestrator CLI** | Menú interactivo → eliges → ejecutas → ves resultado → iteras |
| **CoachFAB** | Preguntas: "¿Cómo funciona X?" → respuesta con código + fuentes + Lucidez |
| **Modo Lucidez** | Toggle → ves `.lucidez-raw` = datos crudos + provenance = sin caja negra |
| **Brief Detector** | `detect` → gaps → tú eliges cuál explorar → `recommend` → prioriza |
| **GitHub Issues** | `autodidacta/question` → comunidad responde + tú documentas aprendizaje |

---

## 📚 TU BIBLIOTECA MÍNIMA VIABLE (5 Docs)

| # | Documento | Por Qué |
|---|-----------|---------|
| **1** | `BRIEF_ONBOARDING_CONSTRUCTOR.md` | Tu syllabus autodirigido paso a paso |
| **2** | `BRIEF_EXHAUSTIVO_HSCSG_COSATECA_OS.md` §17 | Glosario 44 términos = tu diccionario |
| **3** | `docs/BRIEFS_INDEX.md` | Índice navegable = tu mapa de qué existe |
| **4** | `docs/gaia_mycelium_integration.md` | 20 mapeos = patrones de conexión |
| **5** | `scripts/orchestrator-next-steps.js` --help | Comandos = tu panel de control |

---

## ⚡ TU PRIMER DÍA (Plan Realista)

| Tiempo | Acción | Output |
|--------|---------|--------|
| **0:00** | `git clone` + `npm install` + `npm run dev` | Entorno vivo |
| **0:10** | `orchestrator status` + `graph` | Mapa mental del sistema |
| **0:20** | Elige 1 task P0 (ej: `P0-netbenefit`) | Foco definido |
| **0:30** | Lee `netbenefit_spec.md` + `copiosis_integration.md` | Contexto técnico |
| **1:00** | `orchestrator run P0-netbenefit` | Ejecutas + marcas pasos |
| **1:30** | Si atascas → CoachFAB "Modo Lucidez" | Desbloqueo autónomo |
| **2:00** | Task completada → ves en `status` | Verificación real |
| **2:15** | Documenta en CoachFAB lo que aprendiste | Base de conocimiento personal |
| **2:30** | Commit + PR (siguiendo ONBOARDING) | Contribución verificada |

---

## 🎓 PATRÓN DE ÉXITO AUTODIDACTA EN HSCSG

```
Semana 1:  3 tasks completadas (diferentes workstreams)
           1 PR mergeado (siguiendo ONBOARDING al pie)
           CoachFAB: 20 preguntas técnicas resueltas
Semana 2:  1 brief `autodidacta/aprendizaje_X.md` publicado
           Entiendes 8/13 términos canónicos sin glosario
           Ayudas a 1 autodidacta nuevo en issue
Semana 3:  Extiendes 1 módulo core (boundaries/automaton/coach)
           Tu extensión tiene tests + docs + Lucidez
Mes 2:    Diseñas tu propio curriculum HSCSG
           "Aprendí X haciendo Y, documenté en Z"
           Mentoreas a 3 autodidactas nuevos
```

---

## ✅ CHECKLIST: ERES AUTODIDACTA HSCSG SI...

- [ ] Nadie te asignó tareas — tú las elegiste del orchestrator
- [ ] Aprendiste `boundaries.ts` leyendo el código + tests, no tutoriales
- [ ] Usas CoachFAB como tutor técnico 24/7 (con fuentes verificables)
- [ ] Tus PRs incluyen: qué aprendiste, qué costó, qué recomiendas
- [ ] Conviertes tus dudas en issues `autodidacta/question` → docs para otros
- [ ] Tu motivación: **curiosidad + utilidad**, no credenciales

---

## 🚫 TRAMPAS DEL AUTODIDACTA (Y CÓMO EVITARLAS)

| Trampa | Antídoto HSCSG |
|--------|----------------|
| "Necesito un curso primero" | **No hay cursos** — hay `orchestrator run` + CoachFAB + tests |
| "Me faltan prerequisitos" | **Prerequisitos = curiosidad + terminal** — lo demás se aprende haciendo |
| "No sé si lo hago bien" | **Verificación real**: `npm run test` + `orchestrator status` + `preview` |
| "Me abruma la complejidad" | **Una task a la vez** — orchestrator prioriza, tú ejecutas |
| "Nadie valida mi aprendizaje" | **Tu PR mergeado = validación** + CoachFAB history + briefs creados |

---

## 📞 TU CANAL AUTODIDACTA

- **Issues:** `autodidacta/question`, `autodidacta/learning-log`, `autodidacta/pr-review`
- **Discussions:** `autodidacta/curriculum`, `autodidacta/resources`, `autodidacta/showcase`
- **neko-room:** "Autodidacta Lab" en navteka (auto-invitation via issue)
- **CoachFAB:** Chip "Autodidacta" → respuestas con: código + test + doc + siguiente paso

---

## 🎁 RECURSOS EXTERNOS CURADOS POR AUTODIDACTAS HSCSG

| Tema | Recurso | Por Qué |
|------|---------|---------|
| **TypeScript estricto** | `typescript-eslint` rules en repo | Estándar real del proyecto |
| **Zustand + React** | `src/core/state/store.ts` | Patrón real usado aquí |
| **Vitest** | `src/core/lib/*.test.ts` | Tests reales del proyecto |
| **CEL-like policies** | `lib/boundaries.ts` | Subset seguro implementado |
| **ValueFlows types** | `lib/valueflows.ts` | Modelo económico real |

---

> **"El autodidacta no espera permiso para aprender. En HSCSG, tampoco espera permiso para contribuir. El código está ahí. Los tests están ahí. La documentación está ahí. El siguiente paso es tuyo."**  
> — *HSCSG v15 OS: Infraestructura para el aprendizaje autónomo verificable*