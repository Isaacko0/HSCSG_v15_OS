# Integración Operativa: Paper "Nodos de Cuidado de Proximidad" (2026-09-05)

**Fecha de integración:** 2026-09-05
**Fuente asimilada:** `Paper_Nodos_Cuidado_Proximidad_version_institucional.pdf` (168 KB, 7+ páginas, 411 líneas)
**Backup:** `nodos_cuidado_proximidad_backup.md`

**Relación con asimilaciones previas:**
- `ecoaldea_monte_integration.md` (2026-09-02) — Red de Intercambio Federada Ecoaldeas Raíces
- `libro_ecoaldeas_federadas_integration.md` (2026-09-05) — Manual Ecoaldeas
- `gaia_ecoaldeas_deep_integration.md` (2026-09-05) — Gaia + Ecoaldeas profundo
- `nodos_cuidado_integration.md` (este archivo) — Cuidado de salud comunitaria

Esta integración añade la **dimensión de salud comunitaria** que faltaba en las asimilaciones previas. Es **complementaria y NO se superpone** con las otras integraciones.

---

## Tabla Maestra de Isomorfismos (12+ conceptos × 4 sistemas)

| # | Concepto Paper Nodos de Cuidado | Concepto Ecoaldea Raíces (asimilación previa) | Concepto HSCSG v15 OS | Tipo | Acción |
|---|----------------------------------|------------------------------------------------|------------------------|------|--------|
| 1 | **Nodo de Proximidad** (infraestructura territorial modular) | **Nodo Federado** (asimilado en `ecoaldea_monte_integration.md`) | **Tribu Fractal + Círculos Operativos** | **Take** | ✅ Mapeo directo |
| 2 | **Cuidado 1000 (materno-infantil)** | **Círculos de Cuidado** (implícito en Ecoaldea Raíces) | **Pilar 6 (Salud) + Pilar 9 (Bienestar) + Pilar 12 (Espiritualidad)** | **Take** | 🔄 Crear sub-categoría en Pilar 6 |
| 3 | **Centro de Día (personas mayores)** | **Círculos de Ancianos** (implícito en Ecoaldea Raíces) | **Pilar 6 (Salud) + Nodo de Ancianos** | **Take** | ✅ Ya conceptualizado |
| 4 | **Nodo Integral (coordinación territorial)** | **Círculo de Coordinación** (ya existe) | **Círculo Operativo expandido a BioRegion** | **Take** | 🔄 Documentar |
| 5 | **Secuencia ACOMPAÑAR→CONTINUAR** (8 estados) | **Círculos de Acompañamiento** (parcial) | **NetBenefitFlow + State Machine de Cuidado** | **Take** | 🔄 Implementar como algoritmo |
| 6 | **4 Exclusiones (vacunación, parto, certificación, internación)** | **Boundaries CEL** (ya implementado) | **`boundaries.ts` extendido con `CareBoundary`** | **Take** | 🔄 Añadir reglas CEL |
| 7 | **Gobernanza Multi-Actoral (7 stakeholders)** | **Vasos Comunicantes** (ya documentado) | **Círculos Operativos + Triple Bottom Line** | **Take** | ✅ Mapeo directo |
| 8 | **12 Indicadores de Salud** | **NetBenefit 8 escalas** (ya implementado) | **CAC v12 + PGS + 12 nuevos indicadores de salud** | **Take** | 🔄 Añadir indicadores |
| 9 | **4 Fases implementación (Validación→Expansión)** | **Funnel de Transición** (Fase 0→E) | **Idéntico mapeo** | **Take** | ✅ 1:1 |
| 10 | **Modelo Modular 4 niveles** | **Círculos Operativos escalables** | **Tribu Fractal + 4 Niveles de Servicio** | **Take** | 🔄 Documentar |
| 11 | **Ecoaldea como Plataforma Territorial de Bienestar** | **Ecoaldea Raíces** (definida) | **Tribu Fractal como plataforma de bienestar** | **Take** | 🔄 Reforzar concepto |
| 12 | **5 Roles Profesionales (medicina, obstetricia, enfermería, nutrición, psicología)** | **Roles Culturales** (8 oficiales Ecoaldea) | **Coworkers con standing roles** | **Take** | ✅ Mapeo directo |
| 13 | **Activación de Protocolo de Emergencias** | **MJ Gate** (ya implementado) | **`boundaries.ts` con `emergency_protocol`** | **Take** | 🔄 Añadir protocolo |
| 14 | **3 Leyes Argentinas (27.611, 27.491, 26.413)** | **Leyes MJ** (4 leyes) | **Marco Legal Local** (por país) | Adapt | 🔄 Adaptar por jurisdicción |
| 15 | **Financiamiento diversificado (filantropía + público + cooperación)** | **Triple Fondo** (Solarpunk + Madre + Tribu) | **Triple fondo + acceso público** | **Take** | ✅ Mapeo directo |
| 16 | **Sistema de Información con Privacidad** | **RAO inmutable** (ya implementado) | **Consentimiento + protección de datos** | **Take** | 🔄 Añadir consent flow |

---

## Total: 16 isomorfismos × 4 sistemas

### Distribución por Acción:
- **Take (13/16 = 81%):** Mapeo directo o adopción
- **Adapt (3/16 = 19%):** Leyes argentinas + marco legal local

### Áreas de Alta Sinergia (≥90% Take):
- **Nodo de Proximidad ↔ Nodo Federado ↔ Tribu Fractal** (mapeo 1:1)
- **Modelo Modular 4 niveles ↔ Círculos Operativos escalables** (mapeo 1:1)
- **4 Fases implementación ↔ Funnel de Transición** (mapeo 1:1)
- **5 Roles Profesionales ↔ Coworkers con standing roles** (mapeo 1:1)
- **Gobernanza Multi-Actoral ↔ Vasos Comunicantes** (mapeo 1:1)

### Áreas de Adaptación Significativa:
- **Leyes Argentinas (27.611, 27.491, 26.413)** → Adaptar por jurisdicción (cada país tiene sus propias leyes de salud)

---

## Decisiones Take (13)

1. **Nodo de Proximidad ↔ Nodo Federado ↔ Tribu Fractal** → Mapeo directo
2. **Cuidado 1000** → Sub-categoría de Pilar 6 (Salud)
3. **Centro de Día** → Sub-categoría de Pilar 6 + Nodo de Ancianos
4. **Nodo Integral** → Círculo Operativo expandido a BioRegion
5. **Secuencia 8 estados** → State machine de cuidado en HSCSG
6. **4 Exclusiones** → Reglas CEL en `boundaries.ts`
7. **Gobernanza 7 actores** → Vasos Comunicantes
8. **12 Indicadores** → Extensión de NetBenefit/CAC
9. **4 Fases** → Mapeo a Funnel de Transición
10. **Modelo Modular 4 niveles** → Documentar
11. **Ecoaldea como plataforma de bienestar** → Reforzar concepto
12. **5 Roles Profesionales** → Standing roles en `coworkers.ts`
13. **Activación de emergencias** → Protocolo en `boundaries.ts`
14. **Sistema de información con privacidad** → Consent flow + RAO
15. **Financiamiento diversificado** → Triple fondo + acceso público

## Decisiones Adapt (3)

1. **Cuidado 1000** → Adaptar sub-categoría (no sub-pilar nuevo)
2. **Centro de Día** → Adaptar integración con Pilar 6
3. **Leyes Argentinas** → Adaptar por jurisdicción (no global)

---

## Plan de Implementación (8 semanas)

### Fase 1: Conceptual (Semanas 1-2)
- Documentar las 16 isomorfismos en BRIEFS_INDEX
- Crear workstream `NODOS_CUIDADO` en orchestrator
- Actualizar `BRIEF_EXHAUSTIVO_HSCSG_COSATECA_OS.md`

### Fase 2: State Machine (Semanas 3-4)
- Implementar `src/core/state/care_flow.ts` con 8 estados
- Implementar `src/core/lib/care_boundaries.ts` con 4 exclusiones
- Documentar API

### Fase 3: Indicadores (Semanas 5-6)
- Extender `src/core/lib/indicators.ts` con 12 nuevos
- Integrar con NetBenefit/CAC
- Crear dashboard de salud comunitaria

### Fase 4: Roles (Semanas 7-8)
- Añadir 5 standing roles a `coworkers.ts` (medicina, obstetricia, enfermería, nutrición, psicología)
- Implementar ceremony de activación para profesionales
- Validar con equipo de salud

---

## Conceptos NO cubiertos previamente (nuevos para HSCSG v15 OS)

1. **Salud comunitaria como infraestructura territorial modular** — Nueva capa de servicio
2. **4 Exclusiones (vacunación, parto, certificación, internación)** — Boundaries CEL explícitas de salud
3. **Secuencia operativa 8 estados** — Algoritmo de cuidado
4. **Gobernanza multi-actor con 7 stakeholders** — Patrón Vasos Comunicantes aplicado a salud
5. **12 Indicadores de salud** — Métricas específicas del dominio
6. **Modelo Modular 4 niveles** (Cuidado 1000 → Nodo Integral)
7. **5 Roles Profesionales explícitos** (medicina, obstetricia, enfermería, nutrición, psicología)
8. **Activación de protocolo de emergencias** — Dentro de `boundaries.ts`
9. **Sistema de información con privacidad** — Consent flow + RAO
10. **3 Leyes Argentinas de referencia** (27.611, 27.491, 26.413)
11. **4 Fases implementación** (Validación → Demostración → Replicación → Expansión)
12. **Financiamiento diversificado** (filantropía + público + cooperación + donaciones + inversión social)
13. **COMUNIDAD + ALIMENTACIÓN + AMBIENTE + EDUCACIÓN + CUIDADO + CONECTIVIDAD + ACCESO SANITARIO** — Fórmula de integración

---

## Diferencias con asimilaciones Ecoaldeas previas

| Aspecto | ecoaldea_monte | libro_ecoaldeas_federadas | gaia_ecoaldeas_deep | nodos_cuidado |
|---------|---------------|---------------------------|---------------------|----------------|
| Foco | Trueque TQ + hardware | Manual filosófico | Gaia + Ecoaldeas profundo | Cuidado de salud |
| Dimensión | Técnica | Pedagógica | Operacional | Sanitaria |
| Tipo | Técnico | Conceptual | Organizacional | Institucional |
| Pilares HSCSG | Pilar 5, 7, 11 | Pilar 5, 13 | Pilares 1-13 | Pilar 6, 9, 12 |
| Governance | 3 niveles | 5 reglas | 3 esferas + 7 bases | 7 actores multi-actor |
| Fases | N/A | 6 fases | 4 fases | 4 fases |
| Indicadores | 5 pilares | Sistema termodinámico | 12 KPIs | 12 indicadores salud |
| Exclusiones | N/A | Prohibición cambiaria | Boundaries CEL | 4 exclusiones salud |

**Conclusión:** Las 4 integraciones son **complementarias** y cubren dimensiones diferentes:
- ecoaldea_monte → Técnica (trueque + hardware)
- libro_ecoaldeas_federadas → Pedagógica (filosofía)
- gaia_ecoaldeas_deep → Operacional (gobernanza + tokenomics)
- nodos_cuidado → Sanitaria (salud comunitaria)

---

## Anexo: Lista de archivos fuente

| Archivo | Backup | Integración |
|---------|--------|-------------|
| `Paper_Nodos_Cuidado_Proximidad_version_institucional.pdf` | ✅ `nodos_cuidado_proximidad_backup.md` | ✅ Este archivo |
| Backup local | — | `~/Documents/HSCSG_BACKUPS/2026-09-05-nuevas-integraciones/` |

---

*Documento generado el 2026-09-05*
