# Obsidian Vault — Integración Operativa con HSCSG v15 OS

**Objetivo:** Integrar la síntesis teórica del vault personal del usuario (Isaac Ko) — incluyendo HSCSG_MJ_SYNTHESIS, Autovividasis, URBION, y la teoría de Karatani — como **módulos vivos de HSCSG v15 OS**, enriqueciendo: Autómata (v2 MJ), ZNU (v2), CAC (v12), Talents (v2), y la hoja de ruta (Fases 0→E).

---

## Resumen Ejecutivo

El vault de Obsidian del usuario contiene **2458 archivos** que documentan la evolución intelectual y operativa de HSCSG. Los documentos clave son:

1. **HSCSG_MJ_SYNTHESIS_v15.md** (38KB) — Síntesis operativa desde Materialismo Jerárquico + Sistema Alráico
2. **HSCSG Autovividasis.md** (3KB) — Definición de Autovividasis como proceso auto-referencial
3. **holo urban HSCSG.md** (24KB) — URBION: Ontogénesis Urbana
4. **teoria HSCSG.md** (2KB) — Modos de intercambio de Karatani aplicados a HSCSG

**Valor para HSCSG:** El vault es la **fuente primaria de verdad** del proyecto — aquí está la teoría que el código implementa. Esta integración conecta el código con su fundamento filosófico-operativo.

---

## Isomorfismos Vault ↔ Código HSCSG

| Concepto Vault | Módulo Código | Isomorfismo |
|----------------|---------------|-------------|
| **Pirámide Lucidez Material (4 niveles)** | `lib/lucidez_material.ts` | Nivel 0-3 como estado del Autómata |
| **CAC v12 (solo vectores con sensor)** | `lib/cac.ts` | Métricas con sensores reales |
| **ZNU v2 (soberanía material)** | `lib/znu.ts` | Emisión condicionada a base material |
| **Autómata v2 (Leyes MJ)** | `lib/automaton.ts` | Ley I/II/III como reglas fail-closed |
| **Talents v2 (90/10 base material)** | `lib/talents.ts` | Solo Talents con función física real |
| **PMRTE (métrica transición real)** | `lib/metrics.ts` | μ·ε·ρ·τ·δ medidos en territorio |
| **Autovividasis (eje verificación)** | `lib/autovividasis.ts` | Chequeo: ¿vivido o solo calculado? |
| **URBION (ontogénesis urbana)** | `lib/urbion.ts` | Ciudad como organismo sociotécnico |
| **Karatani (modos A/B/C/D)** | `lib/karatani.ts` | Modo D = HSCSG post-monetary |
| **Plan 90 días (3 ciclos)** | `lib/plan_90_dias.ts` | Ciclo 1/2/3 con PVSO targets |
| **Fases 0→E (hoja de ruta)** | `lib/fases.ts` | Hard gates entre fases |

---

## Decisiones Take / Adapt / Discard

### ✅ TAKE (Integrar Directamente)

| # | Concepto Vault | Destino HSCSG |
|---|----------------|---------------|
| 1 | **Pirámide Lucidez Material** | `lib/lucidez_material.ts` |
| 2 | **CAC v12 (vectores con sensor)** | `lib/cac.ts` (extender) |
| 3 | **ZNU v2 (soberanía material)** | `lib/znu.ts` (extender) |
| 4 | **Autómata v2 (Leyes MJ)** | `lib/automaton.ts` (extender) |
| 5 | **Talents v2 (90/10)** | `lib/talents.ts` (nuevo) |
| 6 | **PMRTE (transición real)** | `lib/metrics.ts` (extender) |
| 7 | **Autovividasis** | `lib/autovividasis.ts` (nuevo) |
| 8 | **URBION** | `lib/urbion.ts` (nuevo) |
| 9 | **Karatani** | `lib/karatani.ts` (nuevo) |
| 10 | **Plan 90 días** | `lib/plan_90_dias.ts` (nuevo) |
| 11 | **Fases 0→E** | `lib/fases.ts` (nuevo) |

### 🔄 ADAPT (Transformar)

| # | Original | Adaptación |
|---|----------|------------|
| 1 | Diagnóstico MJ (571 líneas) | → Módulo `lucidez_material.ts` con funciones de evaluación |
| 2 | Autovividasis definición | → Función `checkAutovividasis()` que verifica práctica vs cálculo |
| 3 | URBION marco teórico | → Tipos `CiudadViva`, `OntogenesisUrbana` |
| 4 | Karatani modos A/B/C/D | → Enum `ModoIntercambio` con transiciones |
| 5 | Plan 90 días cronograma | → `plan_90_dias.ts` con hitos y validaciones |
| 6 | Fases 0→E hoja de ruta | → `fases.ts` con hard gates |

### ❌ DISCARD

| Componente | Razón |
|------------|-------|
| Archivos de WhatsApp | Datos personales, no contenido HSCSG |
| Imágenes (jpg, png) | Solo visuales, no operativo |
| Memes / chistes | Contenido humorístico |
| Archivos de terceros (TVP, Fresco) | Derechos de autor; solo referencias |

---

## Archivos a Crear en HSCSG (Nuevos Módulos)

| Archivo | Descripción | Basado en Vault |
|---------|-------------|-----------------|
| `src/core/lib/lucidez_material.ts` | Pirámide 4 niveles + evaluación de posición jerárquica | HSCSG_MJ_SYNTHESIS §1-2 |
| `src/core/lib/autovividasis.ts` | Función chequeo: ¿vivido o calculado? | HSCSG Autovividasis.md |
| `src/core/lib/urbion.ts` | Tipos CiudadViva + OntogenesisUrbana | holo urban HSCSG.md |
| `src/core/lib/karatani.ts` | Enum ModoIntercambio (A/B/C/D) | teoria HSCSG.md |
| `src/core/lib/plan_90_dias.ts` | Cronograma 3 ciclos + PVSO targets | HSCSG_MJ_SYNTHESIS §3 |
| `src/core/lib/fases.ts` | Hoja de ruta Fases 0→E + hard gates | HSCSG_MJ_SYNTHESIS §7 |
| `src/core/lib/talents_v2.ts` | Lista Talents v2 (90/10 base material) | HSCSG_MJ_SYNTHESIS §5.2 |

---

## Archivos a Extender/Modificar (Existentes)

| Archivo | Extensión | Referencia Vault |
|---------|-----------|-----------------|
| `src/core/lib/cac.ts` | + CAC v12 (solo vectores con sensor) | HSCSG_MJ_SYNTHESIS §4.1 |
| `src/core/lib/znu.ts` | + ZNU v2 (emisión condicionada, demurrage) | HSCSG_MJ_SYNTHESIS §6.2 |
| `src/core/lib/automaton.ts` | + Leyes MJ (I/II/II) como reglas fail-closed | HSCSG_MJ_SYNTHESIS §5.1 |
| `src/core/lib/metrics.ts` | + PMRTE (μ·ε·ρ·τ·δ) | HSCSG_MJ_SYNTHESIS §4.3 |
| `src/core/state/automaton.ts` | + Slice `lucidezMaterial` + `autovividasis` | HSCSG_MJ_SYNTHESIS §2.1 |
| `src/core/state/store.ts` | + Integrar nuevos slices | Store integration |
| `packages/ui/src/CoachFAB.tsx` | + Chips "Autovividasis", "URBION", "Fases" | CoachFAB enhancements |
| `src/app/(os)/meta-crisis/page.tsx` | + Sección "Vault del Usuario" | Meta-crisis page enrichment |

---

## Vasos Comunicantes Afectados

| Vaso | Impacto | Acción |
|------|---------|--------|
| **intel:match** | **Principal** — Autovividasis como verificación de sentido | `checkAutovividasis()` en Autómata |
| **governance:sync** | Leyes MJ como reglas de gobernanza | `LeyI/II/III` en CDS |
| **eco:sync** | CAC v12 + PMRTE como métricas reales | `CAC_VECTORS_LM` en métricas |
| **app:federate** | Fases 0→E como hoja de ruta federada | `Fases` en CaaS-BM |
| **infra:connect** | URBION como modelo de infraestructura viva | `CiudadViva` en neko federation |
| **trust:bridge** | Karatani Modo D como trust post-monetary | `ModoIntercambio.D` en trust layer |

---

## Plan de Implementación (Orden Sugerido)

### Fase 1: Data Constants + Tipos (Día 1)
```bash
# Nuevos módulos de datos
src/core/lib/lucidez_material.ts    # Pirámide 4 niveles
src/core/lib/autovividasis.ts       # Chequeo vivido vs calculado
src/core/lib/urbion.ts              # CiudadViva + OntogenesisUrbana
src/core/lib/karatani.ts            # ModoIntercambio A/B/C/D
src/core/lib/plan_90_dias.ts        # 3 ciclos + PVSO targets
src/core/lib/fases.ts               # Fases 0→E + hard gates
src/core/lib/talents_v2.ts          # Talents 90/10
```

### Fase 2: Integración en Módulos Core (Día 1-2)
```bash
# Extender módulos existentes
src/core/lib/cac.ts                 # + CAC v12
src/core/lib/znu.ts                 # + ZNU v2
src/core/lib/automaton.ts           # + Leyes MJ
src/core/lib/metrics.ts             # + PMRTE
src/core/state/automaton.ts         # + lucidezMaterial slice
src/core/state/store.ts             # + nuevos slices
```

### Fase 3: UI + Pantallas (Día 2)
```bash
# CoachFAB enhancements
packages/ui/src/CoachFAB.tsx        # + chips "Autovividasis", "URBION", "Fases"

# Meta-crisis page enrichment
src/app/(os)/meta-crisis/page.tsx   # + sección "Vault del Usuario"
```

### Fase 4: Docs + Verificación (Día 2)
```bash
# Documentos del vault
docs/hscsg_mj_synthesis.md          # Síntesis MJ-Alráica completa
docs/autovividasis.md               # Definición Autovividasis
docs/urbion_urban_ontogenesis.md    # URBION marco teórico
docs/karatani_modes.md              # Modos de intercambio Karatani
docs/plan_90_dias.md                # Plan 90 días (3 ciclos)

# Tests + Verificación
npm run typecheck
npm run build
npm run test
npm run preview
```

---

## Verification Checklist

- [ ] `npm run typecheck` pasa (TypeScript strict en todos los nuevos módulos)
- [ ] `npm run build` pasa (Vite + tsc)
- [ ] `npm run test` pasa (tests para cada módulo + integraciones)
- [ ] `npm run preview` → `/meta-crisis` pantalla con vault integrado
- [ ] CoachFAB chips "Autovividasis", "URBION", "Fases" funcionando
- [ ] Vasos: `intel:match` funcionando con Autovividasis
- [ ] `docs/obsidian_vault_integration.md` creado (este documento)
- [ ] `docs/obsidian_vault_backup.md` creado (backup quirúrgico)
- [ ] `BRIEFS_INDEX.md` actualizado (BF-092, BF-093 → ✅)
- [ ] `fuentes_indice.json` actualizado (fuente #19 estado ✅)

---

## Próximos Pasos (Post-Integración)

1. **Implementar los 7 módulos TypeScript** del vault (`lucidez_material.ts`, `autovividasis.ts`, `urbion.ts`, `karatani.ts`, `plan_90_dias.ts`, `fases.ts`, `talents_v2.ts`)
2. **Extender módulos core** (cac.ts, znu.ts, automaton.ts, metrics.ts) con las versiones v2/v12
3. **Crear documentos** (hscsg_mj_synthesis.md, autovividasis.md, urbion_urban_ontogenesis.md, karatani_modes.md, plan_90_dias.md)
4. **Enriquecer CoachFAB** con chips del vault
5. **Conectar con Meta-Crisis** — El vault es la respuesta HSCSG a la meta-crisis externa

---

## Referencias

- **Backup Quirúrgico:** `docs/obsidian_vault_backup.md`
- **Vault Fuente:** `H:\Mi unidad\HSCSG Empresa mas memoria\HSCSG Empresa mas memoria\`
- **Fuentes Índice:** `docs/fuentes_indice.json` (fuente #19)
- **BRIEFS_INDEX:** BF-092 (`obsidian_vault_backup.md`), BF-093 (`obsidian_vault_integration.md`)
- **Skills:** `hscsg-repo-assimilation` (metodología 4 fases), `brief-detector-recommender`

---

*Integración generada: 2026-08-22 | Metodología HSCSG 4 fases | Vault: Obsidian del usuario (Isaac Ko / Isaacko0)*