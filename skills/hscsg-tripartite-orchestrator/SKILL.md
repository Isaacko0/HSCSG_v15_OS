---
name: hscsg-tripartite-orchestrator
description: Use when coordinating collaboration across HSCSG v15 OS, Gaia Meta-Plataforma, and Ecoaldea Raíces del Monte. Triggers on "tripartite", "vasos comunicantes", "three-party collaboration", "HSCSG+Gaia+Ecoaldea", "federation protocol", "multi-protocol coordination". Manages 10 Vasos Comunicantes, isomorphisms, and the TRIPARTITE_INTEGRATION workstream.
---

# Skill: hscsg-tripartite-orchestrator

**Versión:** 1.0.0  
**Fecha:** 2026-09-04  
**Autor:** Isaac Ko (Isaacko0) / HSCSG v15 OS  
**Documento de referencia:** `docs/COLABORACION_TRIPARTITA_HSCSG_GAIA_ECALDEA.md`

---

## Cuándo usar esta skill

Esta skill se activa cuando:

1. **Coordinación entre 3+ sistemas/protocolos**: HSCSG + Gaia + Ecoaldea Raíces + potencialmente otros (OpenHaven, Project Weave, etc.)
2. **Mapeo de isomorfismos entre 3 sistemas**: Identificar conceptos compartidos, divergentes, y complementarios
3. **Gestión de Vasos Comunicantes**: Los 10 protocolos de conexión entre capas
4. **Diseño de federación**: Cómo nodos soberanos se conectan sin fusionarse ni capturarse
5. **Orquestación de workstream `TRIPARTITE_INTEGRATION`**: 10 tareas en `scripts/orchestrator-next-steps.cjs`
6. **PriceParity oracle**: Configurar el puente TQ↔ZNU↔CoRe↔USD
7. **Carta Tripartita**: Constitución que comparten HSCSG, Gaia, y Ecoaldea
8. **Roadmap colaborativo**: Plan de 24 meses en 4 fases
9. **Métricas de éxito compartidas**: KPIs tripartitos

## Cuándo NO usar

- Si es solo entre 2 sistemas: usar `hscsg-repo-guard` o comparar directamente
- Si es solo HSCSG: usar `hscsg-next-steps-orchestrator`
- Si es solo asimilación de un repo: usar `hscsg-repo-guard`

---

## 1. CONCEPTOS CENTRALES

### 1.1 Las 3 Capas de la Arquitectura Tripartita

| Capa | Sistema | Rol | Dominio |
|------|---------|-----|---------|
| **META-SISTÉMICA** | HSCSG v15 OS | Protocolo generalizable, ontología, motor de valor, infraestructura digital | Constitución + Motor + Herramientas |
| **ECOSISTÉMICA** | Gaia Meta-Plataforma | Orquestación de capital, red glocal, certificación, educación, mercado | Financiamiento + Red + Credenciales |
| **TERRITORIAL-ENCARNADA** | Ecoaldea Raíces del Monte | Tierra, agua, energía, alimento, comunidad, trueque físico, feria | Territorio + Cuerpo + Materia |

### 1.2 Los 10 Vasos Comunicantes

Cada "vaso" es un protocolo de conexión que permite a las 3 capas interoperar sin fusionarse:

| # | Vaso | Función |
|---|------|---------|
| 1 | **Gobernanza: Sync** | Sincronizar modelos de gobernanza (Cuaternidad ↔ Confederación ↔ Asamblea) |
| 2 | **Confianza: Bridge** | Validación de identidades y membresías (RAO ↔ Pasaporte Gaia ↔ Ed25519 nodo) |
| 3 | **Infra: Connect** | Conectividad técnica (AG-UI ↔ Gaia OS ↔ mTLS+Gossip) |
| 4 | **Intel: Match** | Matching de recursos/necesidades (Autómata E²R ↔ Wiki Charities ↔ Perfiles culturales) |
| 5 | **App: Federate** | Federación de apps (Skills Hermes ↔ Mercado Gaia ↔ Drivers .nfcpkg) |
| 6 | **Eco: Sync** | Sincronización económica (ValueDual+priceParity ↔ Commonomics ↔ Pool Global) |
| 7 | **Impact: Bridge** | Métricas de impacto (CAC v12 ↔ 7 Sistemas ↔ FRNE+Fideicomiso) |
| 8 | **Ritual: Sync** | Sincronización cultural/ritual (Encuentros Tribales ↔ Programa Regeneración ↔ Feria Conuquera) |
| 9 | **Capital: Flow** | Flujos de capital (Fondo Solarpunk ↔ Fondo Madre Gaia ↔ FRNE) |
| 10 | **Sabiduría: Synthesis** | Síntesis epistemológica (MATEMAS ↔ UniDiversidad ↔ Sabiduría ancestral) |

### 1.3 PriceParity Oracle (Nivel 3 ReFi)

El puente que conecta las 4 unidades de valor:

```
TQ (1 TQ = 1 kWh físico) ↔ ZNU (demurrage) ↔ CoRe (5 niveles) ↔ USD (oracle)
```

Implementación: `src/core/lib/priceParity.ts` (referencia) + multi-oracle (Chainlink + Pyth + custom HSCSG) con consenso 2/3.

---

## 2. WORKSTREAM `TRIPARTITE_INTEGRATION` (10 TAREAS)

Este es el workstream que orquesta la implementación. Las tareas se añaden a `scripts/orchestrator-next-steps.cjs`.

### Tareas

| ID | Tarea | Esfuerzo | Dependencias |
|----|-------|----------|--------------|
| **TRI-001** | Firmar memorando tripartito + constituir equipo núcleo (3 personas, 1 por proyecto) | 1 semana | — |
| **TRI-002** | Crear monorepo `tripartite-core` + configurar pnpm workspaces + CI/CD | 1 semana | TRI-001 |
| **TRI-003** | Implementar `identity_tripartite.ts` (DID:hsccsg + Pasaporte Gaia + Ed25519 puente) | 2 semanas | TRI-002 |
| **TRI-004** | Implementar `priceParity` oracle v0.1 (multi-oracle 2/3 consenso) | 3 semanas | TRI-002 |
| **TRI-005** | Implementar `sync_protocol.ts` + 3 adaptadores (HSCSG, Gaia, Ecoaldea) | 2 semanas | TRI-003 |
| **TRI-006** | Desplegar piloto nodo único (1 Ecoaldea + 1 Tribu HSCSG + 1 Hub Gaia sincronizados) | 4 semanas | TRI-003, TRI-004, TRI-005 |
| **TRI-007** | Implementar `governance_tripartite.ts` (CEL tripartito 3 scopes) | 2 semanas | TRI-006 |
| **TRI-008** | Implementar `value_tripartite.ts` (TQ↔ZNU↔CoRe↔USD + reglas flujo) | 2 semanas | TRI-004 |
| **TRI-009** | Implementar `certification_tripartite.ts` (4 niveles unificados) | 1 semana | TRI-007, TRI-008 |
| **TRI-010** | Documentar `TRIPARTITE_CONSTITUTION.md` v0.1 | 1 semana | TRI-001, TRI-009 |

**Total esfuerzo:** ~18-20 semanas (4-5 meses)  
**Critical path:** TRI-001 → TRI-002 → TRI-003/TRI-004 → TRI-006 → TRI-009

### Criterios de éxito del workstream

- ✅ TRI-006: 1 nodo tripartito funcionando end-to-end (trueque TQ ↔ ZNU ↔ CoRe, identidad DID, sync Vasos, gobernanza CEL)
- ✅ TRI-010: Constitución tripartita firmada por 3 proyectos
- ✅ Métricas baseline: $10k valor circular, 20 miembros activos, 1 BioRegión

---

## 3. COMANDOS ORQUESTADOR

```bash
# Estado del workstream
node scripts/orchestrator-next-steps.cjs status --workstream TRIPARTITE_INTEGRATION

# Grafo de dependencias
node scripts/orchestrator-next-steps.cjs graph --workstream TRIPARTITE_INTEGRATION

# Siguiente tarea recomendada
node scripts/orchestrator-next-steps.cjs next --workstream TRIPARTITE_INTEGRATION

# Ejecutar tarea específica
node scripts/orchestrator-next-steps.cjs run TRI-001

# Repriorizar
node scripts/orchestrator-next-steps.cjs reprioritize TRI-006 --score 90
```

---

## 4. FRAMEWORK DE COLABORACIÓN: 4 PASOS

### Paso 1: Identificar Capa y Rol

Pregunta clave: **¿Qué capa representa este sistema/protocolo/repo?**

- Si es **constitución, ontología, motor de valor, infraestructura digital** → Capa HSCSG
- Si es **capital, red glocal, certificación, educación, mercado** → Capa Gaia
- Si es **tierra, agua, energía, alimento, trueque físico, feria** → Capa Ecoaldea
- Si es **otra cosa** → Identificar si es candidato a nueva capa o queda fuera de la federación

### Paso 2: Mapear Vasos Comunicantes Relevantes

Para cada integración, identificar **qué Vasos están activos** y cuáles faltan:

```
¿Hay gobernanza sincronizada?        → Vaso 1
¿Hay confianza bridge?                → Vaso 2
¿Hay infra connect?                   → Vaso 3
¿Hay intel match?                     → Vaso 4
¿Hay app federate?                    → Vaso 5
¿Hay eco sync (económico)?            → Vaso 6
¿Hay impact bridge?                   → Vaso 7
¿Hay ritual sync?                     → Vaso 8
¿Hay capital flow?                    → Vaso 9
¿Hay sabiduría synthesis?             → Vaso 10
```

### Paso 3: Documentar Isomorfismos

Tabla estándar con 8+ columnas:

| # | Concepto Sistema A | Concepto Sistema B | Concepto Sistema C | Tipo (Take/Adapt/Discard) | Acción | Notas |

### Paso 4: Añadir a Workstream

Si requiere implementación, añadir a `TRIPARTITE_INTEGRATION` con:
- ID único (TRI-NNN)
- Esfuerzo estimado
- Dependencias
- Criterio de éxito

---

## 5. MÉTRICAS DE ÉXITO (KPIs TRIPARTITOS)

| KPI | Target Fase 0 (M3) | Target Fase 1 (M9) | Target Fase 2 (M18) | Target Fase 3 (M24) |
|-----|---------------------|---------------------|---------------------|---------------------|
| Nodos tripartitos | 1 | 5 | 15 | 50+ |
| Valor circular | $10k | $500k | $2M | $10M+ |
| Miembros activos | 20 | 200 | 1,000 | 5,000+ |
| Hectáreas fideicomiso | 1 | 50 | 500 | 5,000+ |
| kWh producidos (TQ) | 1,000 | 100,000 | 1M | 10M+ |
| % autosuficiencia alimentaria | 10% | 40% | 70% | 90%+ |
| Decisiones CDS resueltas | 1 | 20 | 100 | 500+ |
| Días off-grid continuos | 7 | 30 | 90 | 365 |
| NetBenefit promedio | 0.5 | 0.7 | 0.8 | 0.9+ |

---

## 6. RIESGOS Y MITIGACIONES

| # | Riesgo | Probabilidad | Impacto | Mitigación |
|---|--------|--------------|---------|------------|
| 1 | Fragmentación protocolo (3 forks incompatibles) | Alta | Crítico | Constitución tripartita + CEL compartido + tests interoperabilidad |
| 2 | Captura capital (Fondo Gaia → especulación) | Media | Alto | FRNE + Fideicomiso + ZNU demurrage + Commonomics hardcoded |
| 3 | Dependencia Gaia centralizada | Media | Alto | Gaia OS = directorio federado, no central |
| 4 | Aislamiento Ecoaldea (nodos no federan) | Alta | Medio | Vasos obligatorios + incentivos subsistencia + Feria ritual |
| 5 | Colapso oracle PriceParity | Baja | Crítico | Múltiples oracles (Chainlink + Pyth + custom) + modo postmonetario fallback |
| 6 | Fatiga ritual/participación | Media | Medio | Gamificación + incentivos + rotación roles + formatos híbridos |
| 7 | Conflicto gobernanza tripartita (vetos cruzados) | Media | Alto | MJ Gate + Commonomics + FRNE = triple veto; CDS tripartito |
| 8 | Deuda técnica triple (3 codebases divergentes) | Alta | Medio | Monorepo compartido + CI/CD unificado + RFC process |

---

## 7. WORKFLOW CON OTROS DOCUMENTOS

Esta skill referencia y se apoya en:

- **`docs/COLABORACION_TRIPARTITA_HSCSG_GAIA_ECALDEA.md`** (documento principal, 592 líneas)
- **`docs/COLABORACION_RECIPROCA_HSCSG_ECALDEA_RAICES.md`** (HSCSG↔Ecoaldea, 751 líneas)
- **`docs/gaia_metaplatform_integration.md`** (HSCSG↔Gaia, 480 líneas)
- **`docs/ecoaldea_monte_integration.md`** (HSCSG↔Ecoaldea, 364 líneas)
- **`docs/hscsg_definition.md`** (Cuaternidad + 5 Planos + Leyes MJ, 434 líneas)
- **`docs/MATEMAS_GRIMORIO.md`** (20 Matemas Tractatus, 682 líneas)
- **`docs/SISTEMA_ALRAICO_BACKUP.md`** (Sistema Alráico, 396 líneas)
- **`docs/BRIEFS_INDEX.md`** (146 briefs operativos)
- **`scripts/orchestrator-next-steps.cjs`** (CLI orchestrator)
- **`skills/hscsg-repo-guard/SKILL.md`** (skill hermana para guardar repos)

---

## 8. INVOCACIÓN

```bash
# Cargar la skill
hermes skill load hscsg-tripartite-orchestrator

# O invocarla directamente
hermes skill run hscsg-tripartite-orchestrator \
  --action map-isomorphisms \
  --system-a hscsg \
  --system-b gaia \
  --system-c ecoaldea
```

---

## 9. EJEMPLOS DE USO

### Ejemplo 1: Mapear un nuevo sistema al tripartito

```bash
# Acabas de asimilar un nuevo repo (ej: "Project Weave")
# ¿Dónde encaja en la arquitectura tripartita?

hermes skill run hscsg-tripartite-orchestrator \
  --action classify \
  --new-system "project-weave" \
  --files "weave_technical_depth.html"

# Output:
# Capa identificada: ECOSISTÉMICA (capital, red, credenciales)
# Vasos activos: 1 (gobernanza), 3 (infra), 4 (intel), 6 (eco), 9 (capital)
# Vasos faltantes: 2, 5, 7, 8, 10
# Recomendación: TRIPARTITE_INTEGRATION tarea TRI-011 propuesta
```

### Ejemplo 2: Sincronizar 3 calendarios rituales

```bash
hermes skill run hscsg-tripartite-orchestrator \
  --action sync-rituals \
  --hscsg-calendar "encuentros_tribales.json" \
  --gaia-calendar "programa_regeneracion.json" \
  --ecoldea-calendar "feria_conuquera.json" \
  --output "calendario_unificado_2026.json"
```

### Ejemplo 3: Verificar interoperabilidad

```bash
hermes skill run hscsg-tripartite-orchestrator \
  --action test-interoperability \
  --nodo-a "ecoldea_raices" \
  --nodo-b "hscsg_tribu_demo" \
  --nodo-c "gaia_hub_pilot"
```

---

## 10. NOTAS DE IMPLEMENTACIÓN

- **Multi-idioma**: Documentos en español por defecto (user requirement). Glosario técnico bilingüe opcional.
- **Versionado**: Esta skill sigue semver. Cambios incompatibles → bump major.
- **Auditoría**: Cada invocación genera log en RAO para trazabilidad.
- **Federalismo**: La skill no reemplaza decisiones humanas; las hace más visibles.
- **Respaldo**: Documentación en `docs/COLABORACION_TRIPARTITA_HSCSG_GAIA_ECALDEA.md` siempre.

---

**Fin de la skill.**

*Esta skill es parte del ecosistema de skills Hermes anfibias de HSCSG v15 OS. Es invocable desde el orchestrator (`scripts/orchestrator-next-steps.cjs`) o manualmente.*
