# BRIEF_PERFIL_GENERALISTAS.md

**Guía de Integración para Generalistas en HSCSG v15 OS**  
**Versión:** 1.0 | **Fecha:** 2026-08-22 | **Audiencia:** Quienes navegan ancho antes que profundo, conectan puntos, aprenden rápido

---

## 🎯 ¿POR QUÉ ESTE BRIEF?

Eres generalista: **sabes lo suficiente de muchas cosas** para ser útil en contextos diversos. HSCSG v15 OS te da **mapas navegables, andamiaje progresivo y contribución inmediata** sin requerir años de especialización previa.

> **"El generalista no sabe todo de nada — sabe dónde buscar, a quién preguntar y cómo ensamblar."**

---

## 🧭 TU PUNTO DE ENTRADA: **EL ÍNDICE + EL ORQUESTADOR**

```bash
# 1. Mapa completo en 5 min
cat docs/BRIEFS_INDEX.md | head -100
# → Ves 104 briefs, 39 proyectos, 6 vasos, 4 skills

# 2. Estado vivo en 30 seg
node scripts/orchestrator-next-steps.js status
# → Ves 6 workstreams, próxima tarea óptima, grafo dependencias
```

---

## 🗺️ TU MAPA DE NAVEGACIÓN (Rutas Recomendadas)

| Tu Pregunta | Documento | Sección | Tiempo |
|-------------|-----------|---------|--------|
| "¿Qué es esto realmente?" | `BRIEF_EXHAUSTIVO_HSCSG_COSATECA_OS.md` | §1 Visión + §2 Leyes MJ | 15 min |
| "¿Cómo está organizado?" | `docs/BRIEFS_INDEX.md` | Clasificación por dominio | 10 min |
| "¿Qué se ha hecho ya?" | `docs/BRIEFS_INDEX.md` | Estado asimilación 39 proyectos | 5 min |
| "¿Qué falta y qué hago?" | `node scripts/orchestrator-next-steps.js next` | Próxima óptima automática | 30 seg |
| "¿Cómo contribuyo sin ser experto?" | `BRIEF_ONBOARDING_CONSTRUCTOR.md` | Fases 1-4 + primera contribución | 20 min |

---

## 🔄 TU FLUJO GENERALISTA (Ancho → Profundo → Ancho)

```
┌─────────────────────────────────────────────────────────────────┐
│                    GENERALIST LOOP                              │
│                                                                 │
│  FASE 1: EXPLORA (30 min)                                       │
│  ├─ Lee BRIEF_EXHAUSTIVO §1 (visión) + §17 (glosario 44 términos)│
│  ├─ Ejecuta: node scripts/orchestrator-next-steps.js status     │
│  └─ Identifica: "Este workstream me llama la atención"          │
│                                                                 │
│  FASE 2: PROFUNDIZA MÍNIMO VIABLE (2-4 hrs)                     │
│  ├─ Elige 1 workstream (ej: GAIA_INTEGRATION)                   │
│  ├─ Lee SOLO: integration.md + spec.md de ese workstream        │
│  ├─ Ejecuta: node scripts/orchestrator-next-steps.js run <task> │
│  └─ Documenta: "Qué hice, qué entendí, qué no" en CoachFAB     │
│                                                                 │
│  FASE 3: CONECTA (15 min)                                       │
│  ├─ Abre BRIEFS_INDEX.md tabla intersecciones                   │
│  ├─ Pregunta: "¿Mi trabajo en X conecta con Y?"                 │
│  └─ Si sí → crea issue `generalista/bridge`                     │
│                                                                 │
│  FASE 4: REPITE (continuo)                                      │
│  └─ Cada semana: nuevo workstream, nueva conexión               │
└─────────────────────────────────────────────────────────────────┘
```

---

## 🛠️ HERRAMIENTAS PARA GENERALISTAS (Baja Barrera, Alto Techo)

| Herramienta | Uso Generalista | Curva Aprendizaje |
|-------------|-----------------|-------------------|
| **Orchestrator CLI** | Menú interactivo, no código | 5 min |
| **CoachFAB** | Pregunta en lenguaje natural → respuesta con fuentes | 2 min |
| **BRIEFS_INDEX.md** | Mapa navegable con enlaces directos | 10 min |
| **Modo Lucidez** | Toggle visual → ve datos crudos sin jerga | 1 min |
| **Brief Detector** | Auto-detecta gaps → tú eliges cuál explorar | 30 seg |

---

## 📚 TU KIT DE SUPERVIVENCIA (5 Documentos Esenciales)

| # | Documento | Para Qué |
|---|-----------|----------|
| **1** | `BRIEF_ONBOARDING_CONSTRUCTOR.md` | Tu manual de "cómo contribuir paso a paso" |
| **2** | `docs/BRIEFS_INDEX.md` | Tu GPS: qué existe, qué falta, dónde está |
| **3** | `BRIEF_EXHAUSTIVO_HSCSG_COSATECA_OS.md` §1 + §17 | Visión + glosario (traductor de jerga) |
| **4** | `docs/gaia_mycelium_integration.md` §1-2 | Resumen ejecutivo + mapeo 20 conceptos |
| **5** | `scripts/orchestrator-next-steps.js` --help | Comandos disponibles (no leas código, usa CLI) |

---

## 🎯 CONTRIBUCIÓN GENERALISTA DE ALTO IMPACTO

| Tipo | Ejemplo | Por Qué Es Valioso |
|------|---------|-------------------|
| **Traductor** | "Este error en `boundaries.ts` = 'política denegada por defecto'" | Especialistas hablan jerga; tú la traduces |
| **Conector** | "El gap en Conway (SOUL) == gap en Copiosis (Jurados)" | Ves puentes que especialistas no ven |
| **Documentador** | "Añadí ejemplo real a `netbenefit_spec.md` desde mi experiencia" | Ejemplos concretan abstracciones |
| **Tester de UX** | "Pantalla `/vasos` confunde: 'governance:sync' no auto-explicativo" | Frescura de ojos nuevos |
| **Curador de Gaps** | "Ejecuté detector → estos 5 gaps son para generalistas" | Priorizas lo accesible |

---

## ⚡ TU PRIMERA SEMANA (Plan Realista)

| Día | Acción | Output |
|-----|--------|--------|
| **Lunes** | Clona + `npm run dev` + `orchestrator status` | Entorno vivo + workstream elegido |
| **Martes** | Lee `BRIEF_ONBOARDING_CONSTRUCTOR.md` Fases 1-2 | Entiendes flujo asimilación |
| **Miércoles** | Ejecuta 1 tarea `orchestrator run <P0-task>` | Primera contribución verificada |
| **Jueves** | Documenta en CoachFAB + crea issue `generalista/first-week` | Aprendizaje capturado |
| **Viernes** | Explora `BRIEFS_INDEX.md` tabla intersecciones | Ves conexiones dominio-dominio |
| **Sábado** | Opcional: `brief-detector-recommender.cjs detect` | Gaps que tú puedes abordar |
| **Domingo** | Descansa / CoachFAB chat exploratorio | Síntesis informal |

---

## 🎓 PATRÓN DE ÉXITO GENERALISTA

```
Mes 1:  4 tareas completadas (1 por workstream diferente)
        10 issues `generalista/bridge` creados
        CoachFAB: 50+ preguntas hechas, 5 chips personalizados
Mes 2:  1 brief `generalista/guia_workstream_X.md` publicado
        Conoces 6/13 términos canónicos sin mirar glosario
        Eres "puente" entre 2 especialistas en neko-room
Mes 3:  Diseñas tu propia ruta de especialización emergente
        "Empecé generalista, ahora domino Autómata E²R + CAC"
        Mentoreas a 2 generalistas nuevos
```

---

## ✅ CHECKLIST: ERES GENERALISTA HSCSG SI...

- [ ] Navegas `BRIEFS_INDEX.md` sin perderte (sabes qué es BI vs BF vs SM)
- [ ] Usas `orchestrator next` para decidir qué hacer hoy
- [ ] Preguntas a CoachFAB: "Explícame X como si fuera generalista"
- [ ] Tus issues empiezan con `generalista/` y conectan dominios
- [ ] Documentas lo que aprendes para el siguiente generalista
- [ ] No necesitas ser experto para contribuir — tu aporte es **navegación y conexión**

---

## 🚫 TRAMPAS QUE EVITAR

| Trampa | Antídoto |
|--------|----------|
| "Necesito dominar X antes de aportar" | Aporta **navegación, preguntas, ejemplos, tests de UX** |
| "Esto es muy técnico para mí" | Activa **Modo Lucidez** → ves datos crudos, no opiniones |
| "Me abruma la cantidad de briefs" | Usa **Orchestrator** → una tarea a la vez, priorizada |
| "No sé código" | Contribuyes: docs, tests manuales, mapeos, traducciones, UX |

---

## 📞 TU CANAL GENERALISTA

- **Issues:** `generalista/bridge`, `generalista/question`, `generalista/ux-feedback`
- **Discussions:** `generalista/learning-path`, `generalista/onboarding`
- **neko-room:** "Generalista Hub" en navteka (pregunta por invitación)
- **CoachFAB:** Chip "Generalista" → respuestas con analogías + enlaces a briefs

---

> **"El generalista en HSCSG no es 'el que no se especializó' — es el que mantiene la visión de conjunto mientras los especialistas profundizan. Sin generalistas, la federación se fragmenta."**  
> — *HSCSG v15 OS: Donde la amplitud es una especialidad en sí misma*