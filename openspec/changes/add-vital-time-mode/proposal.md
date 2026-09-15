# Proposal: FASE 1 — Integración Core Moneda Tiempo Vital (hr_vital)

**Change ID**: add-vital-time-mode  
**Fecha**: 2026-09-15  
**Autor**: ISAAC (HSCSG v15 OS)  
**Estado**: En implementación  
**Specs afectadas**: vital-time-currency, nexo-architecture, kernel-protocol, triaxial-verification

---

## Por Qué

La FASE 1 integra la arquitectura core de la moneda tiempo vital (hr_vital) en el stack existente de HSCSG v15 OS, incorporando:

1. **Kernel v214 Canónico completo** (BT1-214, VIA00-31, MK-1, La Hoguera, AFP, El Enlace, Consola VIA-0)
2. **BT213 Límite Kernel**: Kernel organiza rastros, no decide verdad, no audita conciencia, 3 dominios clasificación
3. **BT214 Humano Artífice**: Mago+Alquimista, responsabilidad indelegable, incertidumbre estructural, beta perpetua
4. **AFP Pilar 3**: Tiempo vital = energía consciente encarnada
5. **BT180**: Poder = tiempo vital, control propio tiempo, consentimiento gradientes
6. **BT165**: E=V = verdad asumida/evadida, evasión = deuda, presencia densifica
7. **BT164**: Margen real = espacio trayectorias, evasión reduce, presencia amplía
8. **Arquitectura Anfibia**: valueDual extendido a 3 modos (postmonetario/conectado/vital_time)
9. **Loop 7 VitalTimeMint**: Mint hr_vital por presencia verificada
10. **Métricas VitalTimeFlow + VitalTimeActivationCost**: 30+ campos integrados en IST

---

## Qué Cambia

### Archivos Modificados (Existentes)

| Archivo | Cambio Principal |
|---------|------------------|
| `src/core/lib/valueDual.ts` | + VitalTimeMode, vitalTimeRotate/Decay, displayValueUnified |
| `src/core/lib/loopEngine.ts` | + Loop 7 vitalTimeMintLoop, sobrecargas vitalTime, resonancia vitalTime |
| `src/core/lib/metrics.ts` | + VitalTimeFlow, VitalTimeActivationCost, calculateVitalTimeFlow/ActivationCost, IST actualizado |
| `docs/VITAL_TIME_CURRENCY_SPEC.md` | v0.1 → v0.2 con fundamento epistemológico completo |

### Archivos Nuevos (Kernel + BT213 + BT214)

| Archivo | Descripción |
|---------|-------------|
| `src/core/lib/kernelProtocol.ts` | Kernel unificado + Consola VIA-0 + VIA00-31 |
| `src/core/lib/bt213KernelLimits.ts` | Límite epistemológico kernel (BT213 completo) |
| `src/core/lib/humanArtificer.ts` | Humano artífice Mago+Alquimista (BT214 completo) |
| `src/core/lib/mk1Ontology.ts` | Ontología MK-1 fractal (Bloque 1.5) |
| `src/core/lib/hogueraAFPEnlace.ts` | La Hoguera, AFP, El Enlace (capas experienciales) |
| `src/core/lib/viaProtocols.ts` | 32 VIAs como tipos ejecutables |

### Archivos Vital Time Existentes (Actualizados con BT213+BT214)

| Archivo | Integración |
|---------|-------------|
| `src/core/lib/vitalTime.ts` | kernelLimits, humanArtificer, presenceIntegration, afpVitalTime, powerAsVitalTime, ballastEquation, realMargin |
| `src/core/lib/vitalTimeTriaxial.ts` | Validaciones BT213 (límites kernel, 2 dominios) + BT214 (responsabilidad artífice) + VIA-27,29,07,25,21 |
| `src/core/lib/vitalTimeTransduction.ts` | Validaciones kernel limits + responsabilidad artífice + 2 dominios |
| `src/governance/vitalTimeInvariants.ts` | 100+ invariantes blindados organizados por fuente |

---

## Diseño Técnico (design.md)

Ver `openspec/changes/add-vital-time-mode/design.md`

---

## Tasks (tasks.md)

Ver `openspec/changes/add-vital-time-mode/tasks.md`

---

## Validación

- [ ] `openspec validate --strict` pasa
- [ ] Tests triaxiales pasando (verifyTriaxial 3 nodos)
- [ ] LoopEngine runAlraicoTick() ejecuta Loop 7 sin errores
- [ ] TerritorialSovereigntyIndex calcula con nuevos componentes
- [ ] Pre-commit legal-safe pasa
- [ ] Transducción F TQ↔hr_vital válida con αʰ≥0.6 + triaxial + kernel limits + responsabilidad