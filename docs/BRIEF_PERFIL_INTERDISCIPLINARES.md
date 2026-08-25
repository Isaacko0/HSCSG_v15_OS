# BRIEF_PERFIL_INTERDISCIPLINARES.md

**Guía de Integración para Perfiles Interdisciplinares en HSCSG v15 OS**  
**Versión:** 1.0 | **Fecha:** 2026-08-22 | **Audiencia:** Quienes trabajan EN LA FRONTERA entre 2-3 disciplinas establecidas, creando metodologías híbridas

---

## 🎯 ¿POR QUÉ ESTE BRIEF?

Eres interdisciplinar: **unes dos o tres campos consolidados** (ej: bio-economía, neuro-derecho, eco-informática, socio-física) creando puentes metodológicos. HSCSG v15 OS **ya es interdisciplinar por arquitectura** — sus 4 capas, 6 vasos y 21 módulos exigen tu perfil.

> **"La interdisciplinariedad no es mezclar — es crear un lenguaje común donde antes había dialectos incompatibles."**

---

## 🧭 TU PUNTO DE ENTRADA: **LOS VASOS COMUNICANTES**

Los 6 vasos **SON** interdisciplinariedad operativa:

| Vaso | Disciplinas que Une | Tu Aporte Natural |
|------|---------------------|-------------------|
| **governance:sync** | Ciencia política + Informática + Derecho | CDS (gobernanza) ↔ Gaia DAO (blockchain/social) ↔ MJ Gate (filosofía/ética) |
| **trust:bridge** | Criptografía + Sociología + Derecho digital | ERC-8004 (tech) ↔ FPP/Weave (social) ↔ DIDComm (estándares) ↔ RAO (ontología) |
| **infra:connect** | Redes P2P + Ingeniería de sistemas + UX | neko (WebRTC) ↔ SynchroLabs (discovery) ↔ Project Weave TSP (comms) |
| **intel:match** | IA/ML + Ciencias cognitivas + Economía | Autómata E²R (búsqueda) ↔ Gaia Matching (recomendación) ↔ CoachFAB (HCI) |
| **app:federate** | Economía + Diseño de mercados + Gobernanza | CaaS-BM (ofertas) ↔ Gaia Market (UX) ↔ ZNU (monetario) ↔ Canal Funds (financiero) |
| **eco:sync** | Ecología + Métricas + Ciencia de datos | CAC/PGS (cuantitativo) ↔ Gaia Score (social) ↔ OpenHaven Matrix (descubrimiento) |
| **meta-crisis** | Ciencias cognitivas + Filosofía + Sistemas complejos | Vervaeke (wisdom) ↔ Schmachtenberger (governance) ↔ Wilber (integral) ↔ Rowson (metamodernity) |

---

## 🔄 TU FLUJO INTERDISCIPLINAR (Puente → Método → Estándar)

```
┌─────────────────────────────────────────────────────────────────┐
│                    INTERDISCIPLINARY LOOP                       │
│                                                                 │
│  1. IDENTIFICA FRONTERA (15 min)                                │
│     node scripts/orchestrator-next-steps.js status              │
│     → Elige workstream en FRONTERA (ej: GAIA_INTEGRATION       │
│        = gobernanza + confianza + infra + inteligencia)         │
│                                                                 │
│  2. MAPEA LENGUAJES (30 min)                                    │
│     Abre BRIEFS_INDEX.md tabla intersecciones                   │
│     → Traduce: "W_i en Copiosis" = "Peso en CDS Jurados"        │
│        = "Parámetro en Autómata SOUL" = "Señal en Gaia Score"   │
│                                                                 │
│  3. CREA PROTOCOLO PUENTE (2-4 hrs)                             │
│     Documenta en: BI-XXX_YYYY_bridge_integration.md             │
│     → Entradas: outputs del dominio A                           │
│     → Transformación: regla de traducción verificable           │
│     → Salidas: inputs válidos para dominio B                    │
│     → Tests: casos frontera + invariantes                       │
│                                                                 │
│  4. IMPLEMENTA EN VASO (paralelo)                               │
│     Workstream A: governance:sync (CDS ↔ Gaia DAO)              │
│     Workstream B: trust:bridge (ERC-8004 ↔ FPP)                 │
│     → Tu protocolo puente = código en lib/bridge_XX.ts          │
│                                                                 │
│  5. VALIDA CRUZADA (continuo)                                   │
│     eco:sync: ¿Tus métricas CAC predicen Gaia Score?            │
│     intel:match: ¿Autómata E²R usa Gaia Matching como heurística?│
│     app:federate: ¿CaaS-BM ofertas aparecen en Gaia Market?     │
└─────────────────────────────────────────────────────────────────┘
```

---

## 🛠️ TUS HERRAMIENTAS DE TRADUCCIÓN

| Herramienta | Uso Interdisciplinar |
|-------------|---------------------|
| **Tabla Intersecciones** | 13 términos × 8 proyectos = tu diccionario multilingüe |
| **Modo Lucidez** | Ves provenance crudo: "este dato viene de Copiosis, este de Conway" |
| **Boundaries CEL** | Escribes políticas que entienden AMBOS dominios |
| **ValueFlows Types** | Modelo económico común: `Resource`, `Process`, `Agent`, `EconomicEvent` |
| **Vasos Comunicantes** | 6 APIs estandarizadas = tus puntos de acoplamiento |

---

## 📚 TUS DOCUMENTOS BASE (Enfoque Puente)

| Prioridad | Documento | Qué Extraes |
|-----------|-----------|-------------|
| **1** | `docs/gaia_mycelium_integration.md` | 20 mapeos concepto a concepto = 20 puentes listos |
| **2** | `docs/BRIEFS_INDEX.md` § Intersecciones | 13 términos canónicos × 8 proyectos = matriz traducción |
| **3** | `docs/ANALISIS_EXHAUSTIVO_OPENHAVEN_WEAVE_HSCSG_GAIA.md` | 4 proyectos × 14 conceptos = meta-puentes |
| **4** | `src/core/lib/valueflows.ts` | Tipos económicos comunes (Resource, Process, Agent, Event) |
| **5** | `skills/hscsg-gaia-mycelium-integration/SKILL.md` | 6 vasos comunicantes = arquitectura de puentes |
| **6** | `lib/boundaries.ts` + `lib/automaton.ts` | Policy engine + Autómata = donde se ejecutan puentes |

---

## ⚡ TU PRIMERA SEMANA: **CREA 3 PUENTES**

```bash
# 1. Diagnóstico: workstreams en frontera
node scripts/orchestrator-next-steps.js status
node scripts/orchestrator-next-steps.js graph

# 2. Elige 3 fronteras activas (ejemplos):
# FRONTERA 1: Economía + Gobernanza → GAIA_INTEGRATION governance:sync
# FRONTERA 2: Identidad + Confianza → GAIA_INTEGRATION trust:bridge
# FRONTERA 3: IA + Gobernanza → COACH + P0_SPECS intel:match

# 3. Para cada frontera:
# A) Lee los 2 integration.md correspondientes
# B) Crea bridge_integration.md (siguiendo ONBOARDING Fase 3)
# C) Implementa lib/bridge_fronteraX.ts con tests
# D) Ejecuta orchestrator run en AMBOS workstreams

# 4. Valida cruzada:
node scripts/orchestrator-next-steps.js run GAIA-gov-sync
node scripts/orchestrator-next-steps.js run GAIA-trust-bridge
# → Verifica que outputs de A son inputs válidos de B
```

### Ejemplo Puente Real: **Copiosis Jurados ↔ Conway MJ Gate**

```markdown
# bridge_copiosis_conway_jurados_mjgate_integration.md

## Entrada (Copiosis)
- Jurados Ciudadanos: sorteados, anónimos, rotativos
- Asignan pesos W_i ∈ [min, max] a 8 escalas BN
- Actas registradas en RAO

## Traducción (Tu Protocolo)
- Jurado = Agente CDS con rol "Juror" (standing role)
- W_i = Parámetros SOUL.TierWeights en Autómata
- Actas RAO = MJ Gate veto logs (Ley III: Lucidez)

## Salida (Conway/Autómata)
- SOUL.TierWeights actualizados vía CDS proposal
- MJ Gate veto si pesos fuera de rango [min,max]
- Trazabilidad: Jurado ID → CDS Decision → SOUL Update → RAO Entry

## Tests
- Caso: Jurado propone W_3=0.9 (fuera rango [0.1,0.5]) → MJ Gate veto
- Caso: 3 jurados coludidos → CDS detecta patrón → Rotación forzada
```

---

## 🎓 PATRÓN DE ÉXITO INTERDISCIPLINAR

```
Semana 1:  3 bridge_integration.md creados (6 dominios conectados)
           3 lib/bridge_XX.ts con tests pasando
Semana 2:  2 workstreams ejecutados en paralelo usando tus puentes
           Validación cruzada: outputs A = inputs B verificados
Semana 3:  1 skill nueva: `hscsg-bridge-XX` (codifica tu protocolo)
           Otros usan TU skill para conectar sus dominios
Mes 2:    Eres "Bridge Maintainer" oficial para esa frontera
           Documentas patrones en CoachFAB chips especializados
Mes 3:    Diseñas NUEVA frontera que nadie vio: ej. "Eco-Informática Cuántica"
           HSCSG crece en TU dirección
```

---

## ✅ CHECKLIST: ERES INTERDISCIPLINAR HSCSG SI...

- [ ] Ves `BRIEFS_INDEX.md` tabla intersecciones y detectas traducciones faltantes
- [ ] Tu trabajo SIEMPRE conecta 2+ dominios (nunca solo uno)
- [ ] Creas `bridge_integration.md` como output principal
- [ ] Tus tests incluyen: casos frontera, invariantes cruzados, traducción inversa
- [ ] Puedes explicar el mismo concepto en lenguaje de 3 disciplinas distintas
- [ ] Tu métrica de éxito: **"Dominio A ahora entiende output de Dominio B sin fricción"**

---

## 🚫 TRAMPAS INTERDISCIPLINARES

| Trampa | Antídoto |
|--------|----------|
| "Mezclo sin traducir" | **Protocolo puente obligatorio**: entrada → transformación verificada → salida |
| "Un dominio domina al otro" | **Boundaries CEL** en ambos sentidos: deny>allow simétrico |
| "Creo jerga nueva" | **Usa términos canónicos** (tabla intersecciones) + glosario §17 |
| "Ignoro asimetrías de poder" | **MJ Gate veto + CDS rotación** = contrapesos estructurales |

---

## 📞 TU CANAL INTERDISCIPLINAR

- **Issues:** `interdisciplinar/bridge`, `interdisciplinar/translation`, `interdisciplinar/protocol`
- **Discussions:** `interdisciplinar/methodology`, `interdisciplinar/case-studies`
- **neko-room:** "Interdisciplinary Bridges" en navteka
- **CoachFAB:** Chips personalizados por frontera (ej: "Eco-Económico", "Gobernanza-IA", "Identidad-Confianza")

---

## 🎁 TU APORTE ÚNICO A HSCSG

| Sin Ti | Contigo |
|--------|---------|
| 6 vasos = 6 tuberías aisladas | 6 vasos = sistema circulatorio integrado |
| Especialistas hablan pasado | Traductor activo en cada acoplamiento |
| Gaps en fronteras = bloqueos | Fronteras = oportunidades de innovación |
| Métricas por silo | Métricas cruzadas (eco:sync bidireccional) |

---

> **"La interdisciplinariedad en HSCSG no es un extra — es la arquitectura. Los vasos comunicantes EXIGEN traductores. Tú eres ese traductor."**  
> — *HSCSG v15 OS: Donde las fronteras entre disciplinas se vuelven puentes verificables*