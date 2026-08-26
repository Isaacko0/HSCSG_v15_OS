# HSCSG v15 OS

> 🌟 **Con todo el corazón: este proyecto no existiría sin [Pepe Sevilla](https://www.instagram.com/sevillamx/?hl=es).** Su visión, acompañamiento y empuje son la chispa de la que nace Cosateca OS. Gracias, Pepe. 🌟

**Nodo Cosateca v0.1** — Sistema operativo comunitario postmonetario construido sobre el *Materialismo Jerárquico* (Leyes I/II/III) y el *CaaS* (Comunidad como Servicio). Fork de Cosateca OS, ampliado por asimilación de **31+ repositorios/datos externos** como módulos vivos, más una **capa científica** (8 documentos EBD) y un **orquestador nativo del Sistema Alráico** (`loopEngine` + `/simulador`).

> Repositorio: https://github.com/Isaacko0/HSCSG_v15_OS
> Preview local: http://localhost:4173/
> Deploy (Vercel): https://hscsg-v15-os.vercel.app/
> Skills del proyecto en `skills/` (asimilación + ciencia + vasos comunicantes): `hscsg-repo-assimilation`, `hscsg-scientific-papers`, `hscsg-unified-assimilation-science`, `hscsg-next-steps-orchestrator`, `hscsg-gaia-mycelium-integration`, `brief-detector-recommender`

---

## Herramienta de Desarrollo: Hermes Agent

> **Este repositorio se está construyendo y manteniendo colaborativamente con [Hermes Agent](https://hermes-agent.nousresearch.com/)** — la interfaz de agente autónoma de [Nous Research](https://nousresearch.com/).

Hermes Agent permite:
- Ejecución autónoma de código, git, terminal, web search
- Skills modulares (ver `skills/`) para workflows repetibles
- Orquestación de tareas complejas con continuity protocol
- Integración nativa con GitHub, Vercel, y herramientas CLI

[![Hermes Agent](https://img.shields.io/badge/Built%20with-Hermes%20Agent-6E40C9?style=flat-square&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTEyIDJMMiA3bDEwIDUgMTAtNXoiIGZpbGw9IiM2RTQwQzkiLz48cGF0aCBkPSJNMTIgMjJMMTQgMTdsLTEwLTUgLTEwIDV6IiBmaWxsPSIjNkU0MEM5Ii8+PC9zdmc+)]()

---

## Qué es

**Holosociocibersimbiogénesis (HSCSG)** es una arquitectura de transición hacia un ecosistema **post-mercado, post-dependencia y post-centralización**. No es una utopía literaria; es un marco informacional, técnico y territorial ejecutable.

> *"No estamos diseñando software para optimizar el mercado actual. Estamos programando el sistema operativo de la próxima transición civilizatoria."*

**Objetivo civilizatorio último:** Que cualquier colectivo humano, en cualquier territorio, pueda desplegar **autosuficiencia operativa** en sus dominios críticos (alimentación, energía, salud, gobernanza, conocimiento, producción, comunicación, hábitat y finanzas) en un plazo máximo de **7 generaciones**, sin depender de actores externos a su propio ecosistema.

HSCSG v15 OS es una aplicación web local (sin servidor central) que funciona como el "sistema operativo" de un nodo comunitario soberano. No es una app de productividad: es un **marco de construcción de realidad** donde cada módulo asimilado aporta una capacidad concreta (base material, crédito mutuo, proyectos, vesting, soberanía civilizatoria…) y todas se gobiernan por las mismas 3 leyes:

| Ley | Enunciado | Dónde se manifiesta |
|-----|-----------|---------------------|
| **I** | No dañar la base material ni a las personas | Base Material, Soberanía (13 pilares), Autómata Soberano |
| **II** | Ganarse la vida soberanizando (AUT × CDS) | CaaS, Tekitl, Trustlines, Vesting |
| **III** | Lucidez: nunca engañar | Verificación, Lucidez, Pattern Theory (Soberanía) |

**Postmonetario** significa: el acceso a recursos del nodo se gana por *contribución a la base material* (AUT), no por tener dinero. ZNU, los coins de Tekitl, el crédito mutuo de Trustlines y el vesting son unidades de cuenta internas, no especulativas.

---

## 🗺️ Guía de Orientación / Start Here

**¿Primera vez en el repo? Identifica tu perfil y ve directo a lo que necesitas:**

| Tu Perfil | Qué Buscas | Brief Clave | Primer Comando |
|-----------|------------|-------------|----------------|
| **🎯 Especialista** (ingeniería, economía, derecho, medicina, CS, arquitectura, psicología) | Aportar tu dominio experto y ver cómo se integra | [`BRIEF_PERFIL_PROFESIONALES.md`](docs/BRIEF_PERFIL_PROFESIONALES.md) | `node scripts/orchestrator-next-steps.js status` |
| **🧠 Polimata** (3+ dominios expertos, ves patrones cruzados) | Sintetizar, conectar dominios, arquitectar vasos | [`BRIEF_PERFIL_POLIMATAS.md`](docs/BRIEF_PERFIL_POLIMATAS.md) | `node scripts/orchestrator-next-steps.js graph` |
| **🌐 Generalista** (navegas ancho, conectas puntos, aprendes rápido) | Mapa navegable, contribución inmediata sin ser experto | [`BRIEF_PERFIL_GENERALISTAS.md`](docs/BRIEF_PERFIL_GENERALISTAS.md) | `node scripts/orchestrator-next-steps.js next` |
| **📚 Autodidacta** (aprendes por tu cuenta, sin currículo formal) | Cero permisos, aprendizaje autodirigido, verificación real | [`BRIEF_PERFIL_AUTODIDACTAS.md`](docs/BRIEF_PERFIL_AUTODIDACTAS.md) | `git clone ... && npm install && npm run dev` |
| **🔗 Interdisciplinar** (unes 2-3 disciplinas, creas puentes metodológicos) | Vasos comunicantes como puentes, protocolos de traducción | [`BRIEF_PERFIL_INTERDISCIPLINARES.md`](docs/BRIEF_PERFIL_INTERDISCIPLINARES.md) | `node scripts/orchestrator-next-steps.js status` |
| **🌱 Transdisciplinar** (trasciendes disciplinas, incluyes stakeholders no académicos) | Base Material + Autómata Soberano, regeneración, briefs como semillas | [`BRIEF_PERFIL_TRANSDISCIPLINARES.md`](docs/BRIEF_PERFIL_TRANSDISCIPLINARES.md) | Activa Modo Lucidez (botón luna/sol) |

---

### 🚀 Inicio Rápido Universal (30 segundos)

```bash
# 1. Clona y levanta
git clone https://github.com/Isaacko0/HSCSG_v15_OS.git
cd HSCSG_v15_OS && npm install && npm run dev
# → http://localhost:3000 (explora 47 rutas: /boundaries, /automata, /coach, /vasos, /simulador, /meta-crisis)

# 2. Diagnóstico automático
node scripts/orchestrator-next-steps.js status
# → Ves 6 workstreams, próxima tarea óptima, grafo dependencias

# 3. Elige tu primera tarea
node scripts/orchestrator-next-steps.js next
# → Te dice exactamente qué hacer ahora y por qué
```

---

### 📚 Mapa de Documentación Clave (Enlaces Directos)

| Necesidad | Documento | Qué Encuentras |
|-----------|-----------|----------------|
| **Visión completa + arquitectura + métricas + hoja ruta** | [`BRIEF_EXHAUSTIVO_HSCSG_COSATECA_OS.md`](docs/BRIEF_EXHAUSTIVO_HSCSG_COSATECA_OS.md) | Fundacional: 3 Leyes MJ, 21 módulos, 12 CAC, 7 métricas, 4 bucles, economía híbrida |
| **Índice navegable de TODOS los briefs (125)** | [`BRIEFS_INDEX.md`](docs/BRIEFS_INDEX.md) | 39 proyectos, 78 backups/integrations, 4 skills, 44 operativos, 4 auto-generados |
| **Cómo contribuir paso a paso (4 fases)** | [`BRIEF_ONBOARDING_CONSTRUCTOR.md`](docs/BRIEF_ONBOARDING_CONSTRUCTOR.md) | Desempaquetado → Limpieza → GitHub → Evolución + templates obligatorios |
| **Integración Gaia-Mycelium + OpenHaven + Weave** | [`gaia_mycelium_integration.md`](docs/gaia_mycelium_integration.md) | 20 mapeos, 6 vasos, 8 workstreams, plan 4 semanas |
| **Análisis exhaustivo 4 proyectos (17 URLs)** | [`ANALISIS_EXHAUSTIVO_OPENHAVEN_WEAVE_HSCSG_GAIA.md`](docs/ANALISIS_EXHAUSTIVO_OPENHAVEN_WEAVE_HSCSG_GAIA.md) | Tabla maestra 14 conceptos, 11 gaps, arquitectura pila unificada |
| **Detector automático de gaps + recomendaciones** | [`scripts/brief-detector-recommender.cjs`](scripts/brief-detector-recommender.cjs) | `detect`/`recommend`/`project`/`extrapolate`/`full-cycle` |
| **Síntesis MJ + Sistema Alráico (33KB)** | [`hscsg_mj_synthesis.md`](docs/hscsg_mj_synthesis.md) | Diagnóstico Lucidez Material, Pirámide 4 niveles, Plan 90 días, CAC v12 |
| **Autovividasis (proceso vivido)** | [`autovividasis.md`](docs/autovividasis.md) | Chequeo: ¿el avance está siendo vivido o solo calculado? |
| **URBION: Ontogénesis Urbana** | [`urbion_urban_ontogenesis.md`](docs/urbion_urban_ontogenesis.md) | Ciudad como organismo sociotécnico en devenir |
| **Karatani: Modos de Intercambio** | [`karatani_modes.md`](docs/karatani_modes.md) | Modos A/B/C/D aplicados a HSCSG |

---

### 🎮 Pantallas Clave para Explorar en Vivo

| Ruta | Qué Ves | Brief Relacionado |
|------|---------|-------------------|
| `/boundaries` | Policy engine CEL (deny>allow, fail-closed, dry-run) | `BF-040` / `boundaries_spec.md` |
| `/automata` | Autómata Soberano (Leyes MJ, SOUL, E²R, Heartbeat) | `BF-001` §2.1 / `automaton_integration.md` |
| `/coach` | CoachFAB (Happpy CMO style, FAB persistente, Modo Lucidez) | `BF-042` / `coach_fab_spec.md` |
| `/vasos` | 6 Vasos Comunicantes (governance:sync, trust:bridge, infra:connect, intel:match, app:federate, eco:sync) | `BF-043` / `vasos_comunicantes_spec.md` |
| `/simulador` | Sistema Alráico (6 loops, γ-CARMIS, resonancia, sliders Ω/s/κ) | `BF-001` §9 / `loopEngine.ts` |
| `/soberania` | Base Material 13 Pilares × 7 Capas × 4 Fases = 364 celdas | `BF-001` §3 / `celulas_integration.md` |
| `/meta-crisis` | Mapa del ecosistema meta-crisis (50+ proyectos, 100+ personas, 75+ libros, 18 isomorfismos) | `BF-089/090/091` / `metacrisis_integration.md` |

---

### 🤖 Skills del Proyecto (Ejecutables)

| Skill | Ubicación | Para Qué Sirve |
|-------|-----------|----------------|
| `hscsg-next-steps-orchestrator` | `skills/hscsg-next-steps-orchestrator/` | Orquesta tareas: P0 specs, migración, Coach-Autómata, roles, deploy |
| `hscsg-gaia-mycelium-integration` | `skills/hscsg-gaia-mycelium-integration/` | Integra HSCSG con Gaia-Mycelium: mapeo capas, vasos, IPD/Trust-first |
| `brief-detector-recommender` | `skills/brief-detector-recommender/` | **Detecta gaps, recomienda briefs, proyecta 30/60/90d, extrapola patrones** |
| `hscsg-repo-assimilation` | `skills/hscsg-repo-assimilation/` | Metodología 4 fases para asimilar repos como módulos vivos |
| `policy-cel-gateway` | `skills/web/policy-cel-gateway/` | Policy gateway fail-closed (Boundaries CEL) |
| `openbot-governed-computer-use` | `skills/web/openbot-governed-computer-use/` | Computer use gobernado por policy CEL |
| `ag-ui-protocol` | `skills/web/ag-ui-protocol/` | Protocolo AG-UI agent-to-user (CopilotKit) |

> **Todas las skills son anfibias**: se ejecutan en `~/.hermes/skills/web/` (runtime) y versionan en `skills/` (repo).

---

### 🔄 Flujo de Trabajo Estándar (Cualquier Perfil)

```
1. DIAGNÓSTICO     → node scripts/orchestrator-next-steps.js status
2. EXPLORACIÓN     → Lee tu BRIEF_PERFIL_*.md + BRIEFS_INDEX.md
3. ACCIÓN          → node scripts/orchestrator-next-steps.js run <TASK_ID>
4. DOCUMENTACIÓN   → Crea *_backup.md + *_integration.md (siguiendo ONBOARDING)
5. VERIFICACIÓN    → npm run typecheck && npm run build && npm run test
6. PR              → git add -A && git commit -m "feat: ..." && git push origin main
7. FEDERACIÓN      → Tu módulo expone API en vaso comunicante correspondiente
```

---

### ❓ Preguntas Frecuentes de Orientación

| Pregunta | Respuesta Rápida |
|----------|------------------|
| "¿Esto es una app, un framework, un protocolo?" | **Nodo soberano offline-first** — app web local (33 rutas) + librerías puras + skills ejecutables + economía anfibia |
| "¿Necesito saber blockchain/cripto?" | **No** — HSCSG es postmonetario (ZNU/CaaS). Blockchain/EVM se *extirpa* en asimilación (regla: conserva lógica, desecha infra ajena) |
| "¿Dónde está el backend / la base de datos?" | **No hay** — 100% estático, persistencia en `localStorage`/`IndexedDB`. Federas via vasos (neko-rooms WebRTC, Boundaries CEL) |
| "¿Cómo gano acceso a recursos?" | **Por contribución (AUT × CDS)** — Ley II MJ: "ganarse la vida soberanizando". No por dinero. Ver `/caas` + `BRIEF_PERFIL_PROFESIONALES.md` |
| "¿Puedo usar solo un módulo?" | **Sí** — Cada `src/core/lib/*.ts` es lógica pura TypeScript sin dependencias del resto. Copia y adapta. |
| "¿Esto está en producción?" | **Sí** — Deploy verificado: https://hscsg-v15-os.vercel.app/ (33 rutas 200 OK). Ver `BF-070` |

---

*¿No encajas en ningún perfil? Empieza por [`BRIEF_ONBOARDING_CONSTRUCTOR.md`](docs/BRIEF_ONBOARDING_CONSTRUCTOR.md) — es el syllabus universal. O pregunta al **CoachFAB** (botón luna/sol en la UI) en lenguaje natural: "¿Por dónde empiezo si soy X?"*

---

Cada repo externo se integra con este flujo:

1. **Desempaquetado** — `cp -r` backup de HSCSG + clon del repo fuente.
2. **Limpieza** — separación de dependencias, extracción de la lógica pura, borrado de infra ajena (Laravel, Supabase, Solidity, EVM, Three.js…).
3. **GitHub** — commit inicial versionado (este repo).
4. **Evolución** — el módulo queda vivo, persistido y conectado a los demás vectores.

Cada repo asimilado deja dos documentos en `docs/`:
- `*_backup.md` — backup del repo original (qué es, stack, estructura).
- `*_integration.md` — análisis triple-perspectiva (Usuario · LLM · HSCSG+CaaS).

---

## Módulos (29 pantallas)

| # | Ruta | Módulo | Origen | Qué hace |
|---|------|--------|--------|----------|
| 1 | `/` | Home | Cosateca OS | Panel de entrada / estado del nodo |
| 2 | `/base` | Base Material | Cosateca OS | Tierra, agua, energía, comida, herramientas (núcleo Ley I) |
| 3 | `/lucidez` | Lucidez | Cosateca OS | Claridad y transparencia (Ley III) |
| 4 | `/colectivo` | Colectivo | Cosateca OS | Tejido social del nodo |
| 5 | `/automata` | Autómata Soberano | **Conway Automaton** | Entidad que sobrevive si regenera su base material |
| 6 | `/znu` | ZNU | Cosateca OS + extendido | Moneda interna del nodo (demurrage, paridad, no-inflable) |
| 7 | `/verificacion` | Verificación | Cosateca OS | Comprobación de verdad / manipulación |
| 8 | `/automat` | Automat | Cosateca OS | Operador/agente del nodo |
| 9 | `/orquestacion` | Orquestación | **Paperclip (resolveskills)** | Control plane de agentes + gates del Materialismo Jerárquico |
| 10 | `/caas` | CaaS · Comunidad | **CaaS (C2C)** | Acceso por contribución (AUT × CDS), no por pago |
| 11 | `/solarpunk` | Solarpunk · Don | **Solarpunk (x2)** | Ofertas/necesidades/mesh de regalo |
| 12 | `/colaberry` | Colaberry · Agente | **Eliza (HR_AI_Agent)** | Agente soberano acompañante del colectivo |
| 13 | `/priorizar` | Priorizar · Colectivo | **ZiadJ/prioritize** | Priorización de propuestas por beneficio/riesgo |
| 14 | `/vesting` | Vesting · ZNU | **berry-vesting** | Vesting inmutable de ZNU (beneficiario auditable, renuncia de owner) |
| 15 | `/trustlines` | Trustlines · Crédito | **trustlines-protocol** | Crédito mutuo ZNU entre pares (deuda bilateral simétrica) |
| 16 | `/tekitl` | Tekitl · Proyectos | **Baruch4413/tekitl** | Proyectos colaborativos + coins sociales + portafolio |
| 17 | `/soberania` | Soberanía · 13 Pilares | **sovereignty-hub + ui** | Diagnóstico de base material (3×7×13) + Pattern Theory |
| 18 | `/integral` | Integral · Loop | **Integral Collective (9 repos)** | Loop cerrado postmonetario CDS→OAD→COS→ITC→FRS |
| 19 | `/mundus` | Mundus · Unidad | **Sci-Hive datapoint "Mundus Live" (IDETRA)** | Manifiesto editable + Circular Exchange = CaaS + pilares→módulos |
| 20 | `/life` | Life · Organizador | **GuiFV/life (Django)** | Metas personales con matriz Important×Urgent; costo en ZNU |
| 21 | `/civilizaciones` | Civilizaciones | **Auravana · One Community · TVP · RBE** | Horizontes postmonetarios enlazados (economía basada en recursos) |
| 22 | `/circulos` | Círculos Biomiméticos | **Gaia Confederation** | Círculos Dunbar + 6 capitales + bounty + wisdom council |
| 23 | `/credibilidad` | Credibilidad por Convicción | **Symbiosky (GitLab)** | Conviction voting + reward por score + decay + anti-whale |
| 24 | `/democracia` | Democracia por Expertise | **iambrainstorming (Amiya Tulu)** | DPoS por expertise = CDS |
| 25 | `/aprender` | Aprender haciendo | **iambrainstorming (interactive-five/coding_blog)** | Retos de aprendizaje + knowledge base |
| 26 | `/oraculo` | Oráculo de Hechos | **Kleros / Realitio** | Resuelve disputas de hecho por consenso de jurados |
| 27 | `/pipeline` | Pipeline Anidado (Orquestador Vivo) | **Integral · alook · automaton · ponytail** | Matchmaker + salud del loop + routing FRS (actuator: despacha/issues) |
| 28 | `/gaiaunion` | Gaia Union (Organismo Vivo) | **Gaia Union (Plan Maestro)** | Niveles + sistemas vitales + ADN + epigenética |
| 29 | `/flujo` | Entramado Cibernético (Conector) | **DeseOS (stage/next/seed)** | Auto-llenado entre pantallas + mapa del flujo |
| 30 | `/verificacion` | Verificación (Laboratorio) | **NEAR (proofOfResponse)** | Respuesta firmada O fallo verificable (Proof of Response) |
| 31 | `/nostr` | Nostr Relay (Transporte) | **block/buzz** | Puente transporte Nostr (eventos firmados, RAO local, modo anfibio) |
| 32 | `/agentes` | Agent Mesh (Malla) | **block/buzz Mesh** | Malla de agentes: compute por membresía + cuerpo desechable/portable |
| 33 | `/simulador` | Simulador (Eje Simulación) | **Sistema Alráico (loopEngine)** | Verificación Triaxial: sliders Ω/s/κ, αʰ(t), sobrecargas γ-CARMIS, resonancias |

> Rutas navegables: 33 (del `/` al `/simulador`).

### Modo Lucidez (Ley III)
El botón de luna en el Header es un **toggle real de transparencia radical** (Ley III: *lucidez, nunca engañar*). Al activarlo: invierte el tema a **diurno** (sol), muestra un banner de Ley III, y revela bloques `.lucidez-raw` con **datos crudos y provenance** (ej. en `/integral` se ve la fórmula del System Health y el origen de cada señal FRS). Persiste en `localStorage`.

---

## Repos asimilados (30+)

| Repo origen | Mapeado a | Backup + Integración |
|------------|-----------|----------------------|
| **Vault Obsidian del usuario (Isaac Ko)** | Holosociocibersimbiogénesis (definición oficial) | `docs/hscsg_definition.md` · `docs/obsidian_vault_backup.md` · `docs/obsidian_vault_integration.md` |
| **HSCSG_MJ_SYNTHESIS_v15** (38KB) | Materialismo Jerárquico + Sistema Alráico | `docs/hscsg_mj_synthesis.md` |
| **Autovividasis** | Proceso auto-referencial (vivido vs calculado) | `docs/autovividasis.md` |
| **URBION Ontogénesis Urbana** | Ciudad viva simbiótica | `docs/urbion_urban_ontogenesis.md` |
| **Karatani Modos de Intercambio** | Modos A/B/C/D → HSCSG Modo D | `docs/karatani_modes.md` |
| **Plan 90 Días** | 3 ciclos lunares + PVSO targets | `docs/plan_90_dias.md` |
| **Fases 0→E** | Hoja de ruta MJ (hard gates) | `docs/fases_hoja_ruta.md` |
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
| [Integral Collective (9 repos)](https://github.com/Integral-Collective) | Integral · Loop | `docs/integral_backup.md` · `docs/integral_integration.md` |
| [Sci-Hive datapoint "Mundus Live"](https://sci-hive.com/) | Mundus · Unidad | `docs/scihive_mundus_backup.md` · `docs/scihive_mundus_integration.md` |
| [GuiFV/life](https://github.com/GuiFV/life) | Life · Organizador | `docs/guifv_life_backup.md` · `docs/guifv_life_integration.md` |
| [Auravana · One Community · TVP · RBE](https://auravana.org/) | Civilizaciones | `docs/civilizaciones_sinergia.md` |
| [Gaia Confederation](https://gaiaconfederation.org/) | Círculos Biomimétricos | `docs/gaia_backup.md` · `docs/gaia_integration.md` |
| [Symbiosky (GitLab)](https://gitlab.com/blockchain-projects-ecosymra/symbiosky-whitpaper) | Credibilidad por Convicción | `docs/symbiosky_backup.md` · `docs/symbiosky_integration.md` |
| [iambrainstorming (Amiya Tulu)](https://iambrainstorming.github.io/) | Democracia / Aprender | `docs/iambrainstorming_backup.md` · `docs/iambrainstorming_integration.md` |
| [Kleros / Proof-of-Humanity / Realitio](https://kleros.io/) | Oráculo de Hechos | `docs/kleros_backup.md` · `docs/kleros_integration.md` |
| [Conway-Research/automaton + alook + ponytail](https://github.com/Conway-Research/automaton) | Pipeline anidado | `docs/automaton_alook_ponytail_backup.md` · `docs/automaton_alook_ponytail_integration.md` |
| **Didacta Community** (Postgres/Stripe/S3) | Educación Postmonetaria + Educaas | `docs/didacta_backup.md` · `docs/didacta_integration.md` (extirpado infra, conservado lógica) |
| **Urbanika (12 repos)** | SovereignCredit · Regen · Vecinal | `docs/urbanika_*/_backup.md` · `_integration.md` (3 módulos reales) |
| **block/buzz** (Nostr Relay + Agent Mesh) | Nostr Relay + Agent Mesh | `docs/buzz/buzz_backup.md` · `buzz_integration.md` (transporte Nostr + malla agentes) |
| **NEAR** (4 PDFs + core-contracts) | Proof of Response (Verificación) | `docs/near/near_backup.md` · `near_integration.md` (respuesta firmada O fallo) |
| **ADSOA** (Pérez-Leguizamo & Godínez-Borja, IEEE 2017 + IEICE 2016) | Capa nativa misión crítica | `docs/research_output/01..08_*` (8 docs EBD) — Banco de México UV-PKI |
| **Jacque Fresco / RBE** (Yates 2014 + Leiva 2012) | Horizonte civilizatorio RBE | `docs/fresco_rbe_backup.md` · `fresco_rbe_integration.md` (vía skill, no-duplicación) |

¹ Los backups originales se guardan también fuera del repo en `../HSCSG_v15_OS_BACKUP_YYYYMMDD_HHMMSS/`.

---

## Arquitectura

```
src/
├── app/
│   ├── App.tsx              # Router (33 rutas)
│   ├── layout/              # Aside (nav), Header, Layout, Coach…
│   └── screens/             # 33 pantallas (una por módulo + verificación)
├── components/
│   └── ui.tsx               # Card, Stat, Btn, Badge, EmptyState, Field, Bar
├── core/
│   ├── lib/                 # Lógica pura de cada repo asimilado
│   │   ├── automaton.ts  caas.ts  colaberry.ts  metrics.ts
│   │   ├── orchestration.ts  prioritize.ts  solarpunk.ts
│   │   ├── vesting.ts  trustlines.ts  tekitl.ts  sovereignty.ts  integral.ts
│   │   ├── mundus.ts  life.ts  civilizaciones.ts
│   │   ├── gaia.ts  symbiosky.ts  democracia.ts  learning.ts  oracle.ts  kleros.ts  valueDual.ts
│   │   ├── nostrRelay.ts  agentMesh.ts  proofOfResponse.ts   # block/buzz + NEAR
│   │   ├── loopEngine.ts   # orquestador nativo Sistema Alráico (γ-CARMIS + resonancia)
│   │   └── loopEngine.test.ts  # 7/7 tests
│   └── state/               # Tipos + store (Zustand persistido)
│       ├── store.ts         # Estado global + acciones + partialize
│       ├── seed.ts  types.ts
│       ├── automaton.ts  caas.ts  colaberry.ts  orchestration.ts
│       ├── prioritize.ts  solarpunk.ts  vesting.ts  trustlines.ts
│       ├── tekitl.ts  sovereignty.ts  integral.ts  mundus.ts  life.ts  civilizaciones.ts
│       ├── nostrRelay.ts  agentMesh.ts  proofOfResponse.ts
├── shared/                  # assets, estilos, tipos
└── skills/                  # metodología del proyecto (3 skills)
    ├── hscsg-repo-assimilation/         # asimilación de repos como módulos vivos (4 fases)
    ├── hscsg-scientific-papers/          # protocolo de papers (EBD + vasos comunicantes)
    └── hscsg-unified-assimilation-science/  # skill maestra fusionada
```

**Stack:** React 18 + TypeScript + Vite 5 + React Router 6 + Zustand 4 + Tailwind 3 + lucide-react.

**Persistencia:** el store se guarda en `localStorage` (sin backend). `node_modules` y `dist` están en `.gitignore`.

---

## Capa Científica & Vasos Comunicantes

HSCSG v15 OS no solo asimila código: cada fuente externa (repo O paper) se documenta con **vasos comunicantes totales** — evidencia → decisión EBD → módulo → test KPI → documento, trazables entre sí.

- **8 Documentos Científico-Estratégicos** en `docs/research_output/` (metodología EBD): Propuesta de Investigación, Brief Estratégico, White Paper, Documento de Diseño Basado en Evidencia (D1-D8), Brief Científico, Memorándum de Validación (**DV-01 a DV-04 APROBADAS**), Informe de Factibilidad, Protocolo de Comunicación Científica.
- **Orquestador Alráico nativo:** `src/core/lib/loopEngine.ts` ejecuta 6 loops + γ-CARMIS (reconfig ante sobrecarga) + resonancia (αʰ₁·αʰ₂·3.0 > αʰ₁+αʰ₂). `/simulador` lo expone en vivo (sliders Ω/s/κ, proyección αʰ(t), sobrecargas y resonancias).
- **Skills de orquestación** en `skills/` (ver arriba) — aplicables a cualquier nueva fuente que pases.

> **Automatización sugerida:** la skill `hscsg-unified-assimilation-science` puede ejecutarse periódicamente (cron) para re-sincronizar README/BRIEF/CHANGELOG con el estado real del repo y mantener los vasos comunicantes al día.

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

## Sinergias con IDETRA

HSCSG v15 OS es isomorfo a [**IDETRA**](https://idetra.org/) (*Initiative to Develop a Transition to a Circular Resource System*): ambos llegan al **postmonetario** desde ángulos distintos (IDETRA desde recursos circulares; HSCSG desde el Materialismo Jerárquico / CaaS). Mapeo completo en [`docs/idetra_sinergia.md`](docs/idetra_sinergia.md):
- **Mundus** (Circular Exchange, anti-monetario) ↔ **CaaS + ZNU + Integral/ITC**
- **Sci-Hive** (conocimiento vetted, SCI) ↔ **Verificación + Lucidez + FRS**
- **Terra Formus** (soluciones evaluadas) ↔ **Soberanía (OAD) + Autómata**
- **Plann.us** ↔ **Tekitl** · **Temet.app** ↔ **Colaberry + Modo Lucidez** · **Delta Center/EduBox** ↔ **Base Material + Soberanía**

---

## Civilizaciones (horizontes postmonetarios)

La barra lateral incluye [**Civilizaciones**](https://hscsg-v15-os.vercel.app/civilizaciones) (`/civilizaciones`), un módulo que enlaza proyectos hermanos de civilización postmonetaria y economía basada en recursos, coherentes con el CaaS de Cosateca:

- [**Auravana**](https://auravana.org/) — diseños modulares gratuitos de comunidades + análisis sociológico territorial.
- [**One Community**](https://onecommunityglobal.org/) — diseños bioconstructivos y paisajismo en código libre.
- [**The Venus Project**](https://www.thevenusproject.com/) — economía basada en recursos, sin dejar a nadie atrás.
- [**Resource Based Economy**](https://www.resourcebasedeconomy.org/) — las únicas limitaciones son las que nos imponemos a nosotros mismos.
- [**Copiosis**](https://copiosis.net/) — diseño socioeconómico post-dinero (NBR, Beneficio Neto 8 escalas, Jurados Ciudadanos, 3 tipos de bienes, Estigmergia) — asimilado en HSCSG v15 OS.

---

## Deploy (Vercel)

La app es 100% estática (sin backend). `vercel.json` ya configura el build (`npm run build` → `dist/`) y el rewrite SPA (`/* → /index.html`, requerido por `BrowserRouter`).

- **Producción:** https://hscsg-v15-os.vercel.app/
- Despliega conectando el repo `Isaacko0/HSCSG_v15_OS` en vercel.com (auto-detecta Vite) o vía CLI: `vercel --prod`.
- Cada push a `master` re-despliega automáticamente.

---

## Documentación para DeepWiki

DeepWiki (https://deepwiki.com) genera documentación automática a partir del repositorio. Para asegurar que indexe toda la información:

### Índice de Documentación Principal

| Archivo | Descripción |
|---------|-------------|
| `docs/INDICE_COMPLETO_BACKUPS.md` | **Índice maestro: 78 documentos** (39 backup + 39 integration) organizados por categoría |
| `docs/BRIEFS_INDEX.md` | Índice de 127 briefs |
| `docs/hscsg_definition.md` | Definición oficial Holosociocibersimbiogénesis |
| `docs/BRIEF_EXHAUSTIVO_HSCSG_COSATECA_OS.md` | Brief exhaustivo quirúrgico |

### Categorías de Backups (39 documentos)

| Categoría | Cantidad | Ejemplos |
|-----------|----------|----------|
| Gobernanza y Organización | 18 | OpenBot, Kleros, Colony, Gaia, Symbiosky |
| Economía y Monetario | 7 | Copiosis, Trustlines, USDGLO, CaaS |
| Inteligencia Artificial | 5 | NOOA, ContentCreation, Colaberry |
| Civilizaciones y Horizontes | 7 | Fresco/RBE, Integral, DeseOS |
| Comunidades y Redes | 5 | AI Alliance, Meta-Crisis, Gaia Mycelium |
| Infraestructura y Nube | 3 | Nextcloud, OneManCompany |
| One-Person Company | 3 | awesome-opc, cyfyifanchen, opc-source |

### Cómo forzar actualización de DeepWiki

DeepWiki se actualiza automáticamente, pero puedes forzarlo:

1. **Visita:** https://deepwiki.com/Isaacko0/HSCSG_v15_OS
2. **Click en "Refresh"** (si está disponible)
3. **Espera 24-48 horas** para indexación completa
4. **Verifica:** Que aparezcan las secciones de backups/integrations

### ¿Por qué DeepWiki no se actualiza inmediatamente?

DeepWiki tiene un proceso de indexación asíncrona:
- **Cache:** Periódico (24-48h)
- **Rate limits:** API de GitHub limita frecuencia
- **Procesamiento:** Análisis de IA toma tiempo
- **Disparador:** Algunos cambios no disparan re-indexación automática

### Solución: Indexación manual

Para asegurar que DeepWiki indexe los nuevos documentos:

1. **Añade enlaces en README.md** a los documentos clave
2. **Mantén un índice maestro** (`docs/INDICE_COMPLETO_BACKUPS.md`)
3. **Usa headers descriptivos** en cada documento
4. **Agrega metadata YAML** en los .md para mejor indexación

### Documentos Pendientes de Indexación

| Documento | Estado | Prioridad |
|-----------|--------|-----------|
| `docs/nextcloud_backup.md` | ✅ Creado | Alta |
| `docs/nextcloud_integration.md` | ✅ Creado | Alta |
| `docs/INDICE_COMPLETO_BACKUPS.md` | ✅ Creado | Crítica |
| `docs/hscsg_definition.md` | ✅ Actualizado v2.0 | Alta |
| `docs/hscsg_mj_synthesis.md` | ✅ Creado | Alta |
| `docs/autovividasis.md` | ✅ Creado | Media |
| `docs/urbion_urban_ontogenesis.md` | ✅ Creado | Media |
| `docs/karatani_modes.md` | ✅ Creado | Media |
| `docs/plan_90_dias.md` | ✅ Creado | Media |
| `docs/fases_hoja_ruta.md` | ✅ Creado | Media |

Cada asimilación primero hace `cp -r HSCSG_v15_OS HSCSG_v15_OS_BACKUP_<ts>` (sin node_modules/dist):

- `HSCSG_v15_OS_BACKUP_20260805_120241/` — antes de berry-vesting
- `HSCSG_v15_OS_BACKUP_20260805_122034/` — antes de trustlines
- `HSCSG_v15_OS_BACKUP_20260805_123427/` — antes de tekitl
- `HSCSG_v15_OS_BACKUP_20260805_133739/` — antes de sovereignty-hub (+ui)
- `HSCSG_v15_OS_BACKUP_20260805_140212/` — antes de Integral Collective (9 repos)
- `HSCSG_v15_OS_BACKUP_20260810_120141/` — antes de Gaia Confederation
- `HSCSG_v15_OS_BACKUP_20260810_125936/` — antes de iambrainstorming
- `HSCSG_v15_OS_BACKUP_20260810_134655/` — antes de Symbiosky
- `HSCSG_v15_OS_BACKUP_20260810_145000/` — antes de P2 (democracia/aprender/oraculo + ZNU no-inflable + jurados price discoverers)

---

## Licencia

El fork Cosateca OS/Cosateca conserva su licencia original. Los repos asimilados mantienen la suya (MIT en la mayoría: sovereignty-hub, tekitl es GPL-3.0, trustlines es GPL). El código de integración de HSCSG v15 OS se publica bajo la misma licencia del fork salvo donde se indique.
