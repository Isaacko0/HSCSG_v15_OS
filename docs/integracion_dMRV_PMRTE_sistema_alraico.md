# INTEGRACIÓN: dMRV · PMRTE · Sistema Alráico · Materialismo Jerárquico · monedas · Dinero · Sistema de Incentivos · CAC + CAC

> Documento de síntesis HSCSG v15 OS. Texto base extraído fielmente del `BRIEF_EXHAUSTIVO_HSCSG_COSATECA_OS.md` (secciones 2.1–2.3, 6.1, 11.3, 17) y `docs/CaaS_integration.md`.
> Propósito: articular cómo estos 9 conceptos forman UN solo motor operativo en el nodo local offline-first.

## 1. Arquitectura Epistemológica (el sustrato)

Los 9 términos no son módulos aislados: cuelgan de dos pilares que definen QUÉ es válido y CÓMO se decide en HSCSG.

### 1.1 Materialismo Jerárquico (MJ) — las 3 Leyes (Constitución del Autómata)
| Ley | Enunciado | Operacionalización en HSCSG |
|-----|-----------|-------------------------------------|
| **I** | No dañar la base material ni a las personas | Base Material, Soberanía (13 pilares), Autómata Soberano. Gate `evaluateMJGate` bloquea cualquier acción que degrade AUT vectorial. |
| **II** | Ganarse la vida soberanizando (AUT × CDS) | CaaS, Tekitl, Trustlines, Vesting. ROI = ΔAUT/costo ≥ 1. Suscripción CaaS = stake ZNU (no pago ciego). |
| **III** | Lucidez: nunca engañar | Verificación, Lucidez, Pattern Theory. Modo Lucidez (toggle real), CAC auditoría triaxial, RAO inmutable. |

> **Isomorfismo Conway Automaton:** las 3 leyes del Autómata (Never harm / Earn existence / Never deceive) son **idénticas** a Leyes I–III MJ. El Autómata HSCSG *es* un Conway Agent re-encajado en sustrato biofísico.

### 1.2 Sistema Alráico — G1-CARMIS (Loop Engineering Canvas)
```
G1: Generación (Pensar/Imaginar)     ← CDS + Priorizar + Colaberry
C:  Captura (Medir/Registrar)        ← SVD v2 + ValueFlows + RAO
A:  Análisis (Diagnosticar)          ← CAC Calculator v11 + Lucidez + FRS
R:  Recomendación (Proponer)         ← Integral Loop (CDS→OAD→COS→ITC→FRS)
M:  Métricas (Evaluar)               ← η, ξ, σᵤ, PGS, ICS, IVC, 12 vectores CAC
I:  Iteración (Ejecutar)             ← Autómata Soberano + Tekitl + FABSHIP
S:  Síntesis (Integrar)              ← RAO + Federación DTN + Memética
```
**Principio:** Todo ciclo G1-CARMIS produce un **Decision Record (DR) append-only** en RAO. No hay "estado" sin provenance.

## 2. Coeficientes de Autonomía (la métrica que todo lo gobierna)

### 2.1 CAC — Coeficiente de Autonomía Civilizatoria
- **Definición (BRIEF §6.1):** media geométrica de **12 vectores AUT**.
- **Los 12 vectores AUT** (mapeados desde Copiosis 8 escalas + 2 nuevos):
  - `AUT_ALIM` (alimentación), `AUT_ENER` (energía), `AUT_HABI` (habitación), `AUT_AGUA` (agua), `AUT_SALU` (salud), `AUT_CONO` (conocimiento)
  - `AUT_PROD` (producción), `AUT_SOCI` (social), `AUT_GOBE` (gobernanza), `AUT_FINA` (financiera)
  - **`AUT_PSIC` (NUEVO)** autonomía psicológica/comunitaria
  - **`AUT_ESTE` (NUEVO)** autonomía estética/cultural
- **Uso:** Ley II MJ (ganarse la vida soberanizando) se mide como ΔAUT. Cualquier recompensa requiere ROI = ΔAUT/costo ≥ 1.

### 2.2 CA — Coeficiente de Autonomía (individual, "Coeficiente de Autonomía")
- Dimensión individual de los vectores AUT: capacidad de un miembro de sostener su base material sin coerción externa.
- **CA colectiva:** agregación de CA individuales por dominio (barrio, célula, federación) → alimenta el CAC civilizatorio.
- Relación: **CA individual → CA colectiva → CAC civilizatorio** (jerarquía de escala, no de poder).

## 3. dMRV — Medición, Reporte y Verificación Descentralizada Soberana

**Contexto en el BRIEF (§11.3, tablas de stakeholders/clima):**
- *"Activistas climáticos → Revenue Demo, dMRV, ReFi"*
- *"Gobiernos/ONGs → MRV costoso → dMRV soberano, ESRS-ready"*
- **Nivel 3 ReFi (§17):** *"ESRS/CSRD/TCFD/TNFD/SBTi auto-generados vía dMRV"*

**Definición operativa en HSCSG:**
- dMRV = pipeline de **captura → registro inmutable → reporte verificable** que no depende de auditor externo.
- Stack (BRIEF §11.3): **SVD v2 + RAO + dMRV integrado** = sensores (magnetómetros + QRNG + biosensores ξ) + registro inmutable 4D + pipeline MRV automático.
- Conecta con **Sistema Alráico**: el paso **C (Captura)** de G1-CARMIS ES el dMRV. Todo lo capturado va a RAO (append-only).
- **Salida:** reportes ESRS/CSRD/TCFD/TNFD/SBTi auto-generados (cumplimiento serio integrado en núcleo, estilo Didacta Fundae/RGPD).

## 4. PMRTE — Potencial de Reparto / Mérito / Retribución / Transparencia de Ecosistema

**Origen:** `docs/CaaS_integration.md` (2 apariciones):
- *"Colectivo facilita; reparto según CDS y PMRTE (no según volumen ciego)"*
- *"AUT biofísico + CDS + PMRTE, no ingresos USDC"*

**Definición operativa:**
- PMRTE es el criterio de **reparto de valor** en CaaS y ValueFlows: no por volumen transado, sino por **Potencial de Reparto × Mérito × Retribución × Transparencia de Ecosistema**.
- Se ancla en: CDS (Credibilidad por Convicción de Symbiosky) + AUT (Ley II MJ).
- Sustituye la lógica "más volume = más pago" por "más soberanía generada = más retribución".

## 5. Dinero y monedas (capa monetaria anfibia)

### 5.1 ZNU — la moneda interna del nodo (README §6)
- Moneda interna del nodo: **demurrage, paridad, no-inflable**.
- Es la unidad de la capa **postmonetaria** (default offline). En Vercel/deploy conectado, se vuelve anfibia vía oráculo priceParity.

### 5.2 Monedas complementarias
- El ecosistema opera con **monedas complementarias** (estilo Gaia Confederation passport contextual de confianza), no una sola divisa.
- Cada dominio (barrio, célula, federación) puede tener su moneda con paridad local a ZNU.
- **Principio anfibio (corrección HSCSG):** la lógica de cálculo es agnóstica a la unidad. Misma función opera en modo `postmonetario` (ZNU/tiempo-crédito) o `conectado` (EUR/USDC vía priceParity, Nivel 3 ReFi). El render decide la etiqueta; la lógica no cambia.

### 5.3 Postmonetario vs Conectado
- **Postmonetario (default):** valor en ZNU + acceso CaaS-BM. Sin USD, sin Stripe. (BRIEF §301)
- **Conectado:** Nivel 3 ReFi — 1 tCO₂e = 500 ZNU; ESRS/CSRD auto-generados vía dMRV; oráculo Paridad Local + ZCS/ZNU + ReFi Bridge (Toucan, Regen, Plan Vivo).

## 6. Sistema de Incentivos (la síntesis que une todo)

El sistema de incentivos de HSCSG NO usa precio de mercado ciego. Se compone de:

| Mecanismo | Fuente | Efecto incentivo |
|-----------|--------|------------------|
| **Ley II MJ (AUT×CDS)** | Materialismo Jerárquico | Incentiva acciones que elevan AUT (soberanía), no las que extraen valor |
| **NBR / ZNU-Vesting** | Copiosis (§2.17) | Recompensa intransferible creada por Beneficio Neto, quemada al uso — rompe suma cero, especulación, herencia |
| **Conviction Voting** | Symbiosky | Credibilidad por convicción: lock ∝ confianza, reward = mean_score × mult, decay 5%/año |
| **CDS_Jurados** | Copiosis | Pesa las 8 escalas BN (→ 12 vectores AUT) — poder acotado, sorteado, anónimo |
| **PMRTE** | CaaS | Reparto por mérito/soberanía, no por volumen |
| **Penalización por desacuerdo** | Kleros (BRIEF §239) | Quien vota con minoría pierde staking (PNK) → incentivo honestidad |
| **dMRV + RAO** | Sistema Alráico (paso C) | Todo queda registrado → reputación verificable, no promesas |

**Bucle cerrado (G1-CARMIS aplicado a incentivos):**
1. **G1** CDS prioriza qué facilitar.
2. **C** dMRV captura el Beneficio Neto real (SVD v2 → RAO).
3. **A** CAC Calculator mide ΔAUT.
4. **R** Integral propone retribución según PMRTE.
5. **M** Métricas: η, ξ, σᵤ, PGS, ICS, IVC, 12 vectores.
6. **I** Autómata ejecuta el vesting ZNU.
7. **S** RAO + Federación sintetiza la nueva moneda de dominio.

## 7. Mapa de relaciones (un solo motor)

```
Materialismo Jerárquico (3 Leyes)
        │ define QUÉ es válido
        ▼
Sistema Alráico (G1-CARMIS)  ──▶  paso C = dMRV  ──▶  RAO (append-only)
        │ decide CÓMO
        ▼
12 vectores AUT  ──▶  CA individual ──▶ CA colectiva ──▶ CAC civilizatorio
        │ miden el resultado
        ▼
Ley II (AUT×CDS) + PMRTE  ──▶  Sistema de Incentivos
        │ retribuye
        ▼
ZNU (moneda interna) + monedas complementarias  ──▶  anfibio: postmonetario ↔ conectado (ReFi Nivel 3, dMRV → ESRS)
```

## 8. Estado en el código HSCSG v15 OS

| Concepto | Dónde vive | Estado |
|----------|-----------|--------|
| Materialismo Jerárquico | `evaluateMJGate` (gate Ley I) | ✓ implementado |
| Sistema Alráico | loop documentado en BRIEF §2.2; RAO en `lib/` | ✓ parcial |
| 12 vectores AUT / CAC | `lib/metrics.ts` | ✓ |
| CA / CA colectiva | agregación de AUT por dominio | ◐ parcial |
| dMRV | SVD v2 + RAO (BRIEF §11.3) | ◐ diseño, no hay hardware |
| PMRTE | `docs/CaaS_integration.md` (criterio CaaS) | ✓ documentado |
| ZNU / monedas | `lib/caas.ts`, `lib/valueDual.ts` (anfibio) | ✓ |
| Sistema de incentivos | Symbiosky + vesting + CDS_Jurados | ✓ parcial |
| CAC (Coef. Autonomía Civilizatoria) | `lib/metrics.ts` media geométrica 12 AUT | ✓ |

---
*Síntesis de texto REAL del BRIEF_EXHAUSTIVO (§2.1–2.3, 6.1, 11.3, 17) + CaaS_integration.md. PMRTE y monedas se integran según su uso documentado (CaaS / monedas complementarias). Sin contenido inventado.*
