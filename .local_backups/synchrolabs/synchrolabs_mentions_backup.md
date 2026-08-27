# SynchroLabs - Backup Local de Menciones (Solo para uso interno)

**Fecha:** 2026-08-26  
**Propósito:** Backup de referencias a SynchroLabs antes de remover menciones públicas  
**Nota:** Este archivo es SOLO LOCAL - no debe subirse a GitHub

---

## Archivos con menciones a SynchroLabs

### 1. docs/ANALISIS_EXHAUSTIVO_OPENHAVEN_WEAVE_HSCSG_GAIA.md
- Línea: `| **Infra/Comms** (neko + Boundaries CEL) | Layer 3 Infra (TSP + SynchroLabs) | ...`
- Línea: `| 3. Infraestructura | SynchroLabs + Project Weave + APIs | Diseño |`
- Línea: `| **SynchroLabs API/Specs** | Gaia-Mycelium §4, Integración §4.1 | Discovery API para neko-rooms | Brandon → compartir specs |`
- Línea: `| Repo HSCSG_v15_OS (público) | SynchroLabs API specs |`
- Línea: `| Demo: /boundaries, /automata, /coach, /vasos, /simulador | SynchroLabs demo + Project Weave demo |`
- Línea: `| Compartir SynchroLabs API specs | Brandon | Mié 27/08 | Email/Telegram |`

### 2. docs/brief-extrapolation.md
- Línea: `3. **Infra/Comms** (20%): neko, SynchroLabs, Project Weave`

### 3. docs/BRIEF_PERFIL_AUTODIDACTAS.md
- Línea: `| **Infra P2P** | neko-client, synchrolabs_adapter.ts, vasos page.tsx | neko-room + vaso nuevo |`

### 4. docs/BRIEF_PERFIL_INTERDISCIPLINARES.md
- Línea: `| **infra:connect** | Redes P2P + Ingeniería de sistemas + UX | neko (WebRTC) ↔ SynchroLabs (discovery) ↔ Project Weave TSP (comms) |`

### 5. docs/BRIEF_PERFIL_POLIMATAS.md
- Línea: `| **infra:connect** | neko ↔ SynchroLabs ↔ Project Weave TSP ↔ DTG = comms soberanas |`

### 6. docs/gaia_mycelium_backup.md
- Línea: `**Fuente:** Documento de trabajo "Alianza Gaia-Mycelium / Gran Alianza (IA & Tecnologías para la Vida)" — reunión exploratoria con Brandon (OpenHaven, SynchroLabs, Project Weave) + Felipe (Mycelium) + Gaia Platform.`
- Línea: `### 4.1 SynchroLabs (Sección 4)`
- Línea: `| **3. Infraestructura** | APIs + SynchroLabs + Project Weave + compatibles |`
- Línea: `| **Brandon** | Enviar overview técnico: SynchroLabs, Project Weave, DIDs, VCs, Trust Registries, Ecosystem Mapping, Impact Measurement |`
- Línea: `| Capa Infraestructura (SynchroLabs, Project Weave) | neko-rooms + Boundaries (CEL) + Vasos neko:* | 🟡 Parcial |`

### 7. docs/gaia_mycelium_integration.md
- Línea: `| 5 | **Capa Infraestructura: SynchroLabs + Project Weave** | 4, 5, 17 | neko-rooms + Boundaries (CEL) + Vasos neko:* | packages/neko-client, lib/boundaries.ts | GAIA-infra-connect task |`
- Línea: `2. **SynchroLabs (discovery centralizado)** → Adaptar a neko-rooms discovery descentralizado + Boundaries CEL allowlist`
- Línea: `| GAIA-infra-connect | Implementar infra:connect neko↔SynchroLabs | MIG-P10-Publica, DEPLOY-link | 4 | 90 | GAIA_INTEGRATION | pending |`
- Línea: `| lib/synchrolabs_adapter.ts | Adapter: neko discovery ↔ SynchroLabs, Boundaries CEL ↔ Project Weave | GAIA-infra-connect |`
- Línea: `| infra:connect | neko rooms discoverable via SynchroLabs, Boundaries CEL allows Project Weave protocols |`

### 8. docs/RESPUESTA_COLABORACION_GAIA_MYCELIUM.md
- Línea: `| **SynchroLabs discovery API** | Specs para discovery descentralizado neko-rooms | Gaia §4 | GAIA-infra-connect / lib/synchrolabs_adapter.ts |`
- Línea: `| Repo HSCSG_v15_OS (público) | SynchroLabs API specs (discovery) |`
- Línea: `| Demo: /boundaries, /automata, /coach, /vasos, /simulador | SynchroLabs demo + Project Weave demo |`
- Línea: `# Paralelo A: Infra (neko + SynchroLabs + Weave TSP/DTG)`
- Línea: `**Próximo Paso Sugerido:** Llamada técnica 30 min Jue 28/08 (Isaac + Brandon + Felipe) → alinear specs SynchroLabs/Project Weave/FPP y arrancar GAIA-gov-sync via orchestrator.`

### 9. docs/RESPUESTA_COLABORACION_GAIA_MYCELIUM_EN.md
- Línea: `| **SynchroLabs discovery API** | Specs for decentralized neko-rooms discovery | Gaia §4 | GAIA-infra-connect / lib/synchrolabs_adapter.ts |`
- Línea: `| HSCSG_v15_OS Repo (public) | SynchroLabs API specs (discovery) |`
- Línea: `| Demo: /boundaries, /automata, /coach, /vasos, /simulador | SynchroLabs demo + Project Weave demo |`
- Línea: `# Parallel A: Infra (neko + SynchroLabs + Weave TSP/DTG)`
- Línea: `**Suggested Next Step:** 30-min technical call Thu 28/08 (Isaac + Brandon + Felipe) → align SynchroLabs/Project Weave/FPP specs and kick off GAIA-gov-sync via orchestrator.`

### 10. docs/BRIEF_PERFIL_AUTODIDACTAS.md (mención de adapter)
- `synchrolabs_adapter.ts` - adapter para discovery

### 11. docs/BRIEF_PERFIL_POLIMATAS.md
- Mención en infra:connect

---

## Resumen de cambios necesarios para versión pública

### Reemplazos sugeridos:
- `SynchroLabs` → `Discovery Descentralizado` / `Discovery Layer`
- `SynchroLabs API` → `Discovery API` / `Discovery Layer API`
- `SynchroLabs demo` → `Discovery demo`
- `synchrolabs_adapter.ts` → `discovery_adapter.ts` / `neko_discovery_adapter.ts`
- `neko ↔ SynchroLabs ↔ Project Weave` → `neko ↔ Discovery Layer ↔ Project Weave`
- `SynchroLabs (discovery centralizado)` → `Discovery Layer (descentralizado)`

### Archivos a modificar:
1. docs/ANALISIS_EXHAUSTIVO_OPENHAVEN_WEAVE_HSCSG_GAIA.md
2. docs/brief-extrapolation.md
3. docs/BRIEF_PERFIL_AUTODIDACTAS.md
4. docs/BRIEF_PERFIL_INTERDISCIPLINARES.md
5. docs/BRIEF_PERFIL_POLIMATAS.md
6. docs/gaia_mycelium_backup.md
7. docs/gaia_mycelium_integration.md
8. docs/RESPUESTA_COLABORACION_GAIA_MYCELIUM.md
9. docs/RESPUESTA_COLABORACION_GAIA_MYCELIUM_EN.md
10. docs/BRIEF_PERFIL_AUTODIDACTAS.md
11. docs/BRIEF_PERFIL_POLIMATAS.md

---

*Este backup es SOLO LOCAL. No subir a GitHub.*