# INTEGRACIÓN — Jacque Fresco / RBE (Yates 2014 + Leiva 2012) en HSCSG v15 OS

**Metodología:** `hscsg-unified-assimilation-science` (vía Ciencia + Vasos Comunicantes — fuentes teóricas, no repos de código).
**Fecha:** 2026-08-18 · **Backup:** `docs/fresco_rbe_backup.md`

---

## Perspectiva 1 — Usuario (nodo Cosateca)
El usuario quiere entender **por qué** el horizonte RBE es coherente con HSCSG y cómo citarlo como evidencia académica rigurosa en papers/postmonetarios. Quiere que Fresco deje de ser "referencia de meme" y pase a ser **fuente primaria trazable** con DOI-equivalente (tesis universitaria).

## Perspectiva 2 — LLM (qué asimilar)
- **Asimilar (lógica pura):** definición operacional de RBE (acceso por disponibilidad física), crítica a economía monetaria (escacez artificial), automatización para necesidades humanas.
- **Extirpar (infra ajena):** nada de código (es teoría); solo redactar como evidencia, no implementar módulo nuevo (ya existe `CivilizacionesState` con RBE).
- **No duplicar:** no crear pantalla nueva; RBE ya está en `civilizaciones`.

## Perspectiva 3 — HSCSG + CaaS (isomorfismo con Leyes MJ)
| Concepto RBE (Fresco/Leiva) | Ley MJ | Mapeo HSCSG |
|---|---|---|
| Recursos por disponibilidad física (no precio) | **Ley I** (base material) | `BaseMaterial` + `CivilizacionesState` (RBE) |
| Acceso por contribución a la base | **Ley II** (AUT×CDS) | CaaS (stake ZNU, no pago) · `solarpunk` exchange |
| Métricas físicas verificables, no opacas | **Ley III** (Lucidez) | Modo Lucidez · `CAC` · `proofOfResponse` |
| Automatización para necesidades humanas | Ley II (ganarse la vida soberanizando) | Autómata Soberano (`automaton`) |
| Crimen como síntoma de entorno | Ley I (no dañar) | `evaluateMJGate` bloquea acciones degradantes |

---

## Vasos Comunicantes (obligatorios)
- `[EBD-D1]` → `docs/research_output/04_Documento_Diseno_Basado_Evidencia_EBD.md` (decisiones D1-D8)
- `[DV-01]` → `docs/research_output/06_Memorandum_Validacion_Estrategica.md` (ADSOA nativo)
- `CivilizacionesState` → `src/core/state/civilizaciones.ts` (horizonte RBE ya presente)
- BRIEF §1.1, §2.1, §15 → cita estos papers como evidencia de horizonte RBE
- Próximo paper: *"Horizontes Postmonetarios: RBE vs Materialismo Jerárquico"* citando Yates 2014 (DOI-equivalente: tesis UCLan) + Leiva 2012 (U. Valparaíso)

**Estado:** evidencia trazada, sin código nuevo (principio de no-duplicación de la skill). Listo para cita en los 8 documentos base y en papers futuros.
