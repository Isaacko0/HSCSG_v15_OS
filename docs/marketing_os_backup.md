# Marketing OS (Yuzzyuk) — Backup Quirúrgico Completo

**Fuente original:** `https://github.com/Yuzzyuk/marketing-os` (453★, 1 commit v1.1, MIT)  
**Fecha de asimilación:** 2026-09-02  
**Tipo:** Skill de marketing (Claude Code / Codex / Cursor compatible)

---

## 📋 Resumen Ejecutivo

**Marketing OS** es una skill completa de marketing que funciona como "un departamento de marketing entero en una skill de Claude". 14 módulos que cubren toda la superficie que toca un marketer: auditorías puntuadas 0-100, motor de hooks de 18 tácticas, copy gradado antes de verlo, diagnóstico de ads, GEO, email, lanzamientos, pricing.

**Filosofía:** "Construida desmantelando los repos de skills de marketing más estrellados en GitHub — desde colecciones de 44K estrellas hasta piezas de artesanía de 100 estrellas — manteniendo las estructuras que funcionaron, y añadiendo las tres cosas que a todas les faltaban: scores en todo, artefactos en vez de consejos, y un 'qué no pude determinar' explícito en cada reporte."

---

## 🎯 14 Módulos de Marketing

| Módulo | Qué Cubre | Output Principal |
|--------|-----------|------------------|
| **audit** | Website/funnel audit → weighted 0-100 + prioritized fixes | Score 0-100 + lista fixes priorizada |
| **geo** | AI-search citability (ChatGPT, Perplexity, AI Overviews) | Diagnóstico GEO + plan de acción |
| **copy** | Generate 15-20 variants → expert-panel score → de-slop | 15-20 variantes copy + score panel experto |
| **hooks** | 18-tactic hook engine → hook matrix → diagnostic funnel | Matriz de hooks + funnel diagnóstico |
| **paid-ads** | Concept-level fatigue diagnosis → ranked production brief | Brief de producción rankeado |
| **email** | Welcome/nurture/launch sequences, written in full | Secuencias email completas |
| **social** | LinkedIn/X posts that survive the feed | Posts optimizados para feed |
| **launch** | Launch playbook incl. Product Hunt | Playbook de lanzamiento completo |
| **positioning** | Positioning, offer design, pricing strategy | Estrategia posicionamiento + oferta + pricing |
| **competitive** | Competitor teardowns from public sources | Análisis competidores fuentes públicas |
| **app-store** | ASO diagnosis + metadata + screenshot sequences | Diagnóstico ASO + metadatos + screenshots |
| **analytics** | Honest data reads, proper test design | Lecturas datos honestas + diseño tests |
| **slop-patterns** | The AI-tell catalogue, run on all prose | Catálogo patrones IA aplicado a toda prosa |
| **rubrics/specs** | Scoring bands, engine playbooks, store field rules | Bandas scoring, playbooks, reglas tienda |

---

## 🏗️ Arquitectura de la Skill

### Progressive Disclosure (Despliegue Progresivo)
- **Router** carga primero (~2k tokens)
- **Cada tarea** carga solo su módulo
- **14 módulos** cuestan nada hasta que se usan
- Optimizado para context window limitado

### Subagent-Native
- Trabajo multi-dimensional (auditorías, teardowns, generación variantes) se distribuye en paralelo
- Diseñado para hosts que soportan subagentes (Claude Code, Codex, Cursor)

### No Executable Code
- **Puro markdown** — nada que revisar antes de confiar
- Cero dependencias de runtime, cero builds

### Honesty Spine (Columna Vertebral de Honestidad)
- No pruebas inventadas
- No precisión falsa
- No ganadores declarados con 10 conversiones
- **Todo score etiquetado como la heurística que es**

---

## 📦 Instalación

### Claude Code (Un comando)
```bash
/plugin marketplace add Yuzzyuk/marketing-os
/plugin install marketing-os@marketing-os
```

### Claude (Web/Desktop)
Settings → Skills → + → upload `marketing-os.zip` desde [latest release](https://github.com/Yuzzyuk/marketing-os/releases/latest). Requiere code execution enabled.

### Manual / Codex / Cursor / Otros Agentes
```bash
# Copiar skills/marketing-os/ al directorio de skills del agente
cp -r skills/marketing-os/ ~/.claude/skills/marketing-os/
# o
cp -r skills/marketing-os/ ~/.codex/skills/marketing-os/
# o
cp -r skills/marketing-os/ ~/.cursor/skills/marketing-os/
```

---

## 🚀 Primeros 5 Minutos

1. Copiar `brand-context.template.md` → `brand-context.md`
2. Rellenarlo con el contexto de tu marca
3. Dejarlo en la raíz del proyecto o en `.claude/`
4. **Cada módulo lo lee** — saltarlo produce output competente pero intercambiable (lo que el marketing no puede ser)

---

## 📁 Estructura del Repo

```
marketing-os/
├── .claude-plugin/              # Plugin metadata para Claude Code
├── skills/marketing-os/         # La skill principal (14 módulos)
│   ├── audit.md
│   ├── geo.md
│   ├── copy.md
│   ├── hooks.md
│   ├── paid-ads.md
│   ├── email.md
│   ├── social.md
│   ├── launch.md
│   ├── positioning.md
│   ├── competitive.md
│   ├── app-store.md
│   ├── analytics.md
│   ├── slop-patterns.md
│   └── rubrics-specs.md
├── brand-context.template.md    # Template contexto marca
├── AGENTS.md                    # Instrucciones para agentes
├── CONTRIBUTING.md              # Guía contribución
├── LICENSE                      # MIT
└── README.md                    # Documentación principal
```

---

## 🔌 Integración MCP (Ad Generation)

**Ads briefs no se quedan en papel:** Si un MCP de generación de ads está conectado (ej. Arcads), la skill genera los assets briefados directamente — **diagnose → brief → produce, en una sesión**.

---

## 🎯 Principios de Diseño (Para Asimilación HSCSG)

| Principio | Aplicación HSCSG |
|-----------|------------------|
| **Progressive Disclosure** | Router ligero → módulos a demanda (ya en orchestrator) |
| **Subagent-Native** | Paralelización multi-dimensional (delegate_task) |
| **No Executable Code** | Skills como markdown puro (hermes-agent-skill-authoring) |
| **Honesty Spine** | Scores etiquetados como heurísticas, gaps explícitos |
| **Brand Context Required** | Contexto tribu/perfil requerido para output relevante |
| **Artifacts > Advice** | Outputs son artefactos usables, no consejos genéricos |

---

## 📄 Licencia

**MIT** — Libre uso comercial, requiere atribución.

---

## 🔗 Archivos Fuente Referenciados

- GitHub: `https://github.com/Yuzzyuk/marketing-os`
- Skill path: `skills/marketing-os/`
- Template: `brand-context.template.md`

---

**Nota:** Este backup captura la estructura y filosofía del README público. Los 14 módulos markdown reales están en `skills/marketing-os/`. Para integración operativa con HSCSG v15 OS, ver `docs/marketing_os_integration.md`.