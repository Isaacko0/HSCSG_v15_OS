# Integración DeseOS / Contento.pro — Perspectiva Triple (Usuario · LLM · HSCSG)

**Fuente:** `DeseOS_project1.zip` (Soul.MBA / Pepe Sevilla). SOA de agencia de marketing. Stack idéntico a HSCSG v15 OS.

**Mapeo canónico HSCSG:** DeseOS = **capa de método de agencia + catálogo de valor del nodo**. Se asimila como módulo `/agencia` (BranDNA + escalera 5M + ICP + Strategic Brain + Pagos/Pauta **anfibios**) y se hibrida con CaaS-BM/ZNU (postmonetario) y Nivel 3 ReFi (USD conectado).

---

## 1. Perspectiva USUARIO (qué quiere en su Nodo Cosateca)

El usuario del nodo quiere:
- **Identidad clara** (BranDNA): para qué existe el nodo, a quién sirve, con qué voz.
- **Catálogo de valor**: qué bienes/servicios produce el nodo (escalera 5M), con su ecuación de valor.
- **Conectar con aliados/miembros** (CRM/ICP) sin depender de plataformas externas.
- **Planificar y producir** contenido/materia regenerativa (VITCH, Strategic Brain).
- **Recibir valor POR SU TRABAJO** — en ZNU si el intercambio es interno (CaaS), o en USD si vende afuera (ReFi).
- **No estar atado al USD** pero **poder usarlo** cuando el mundo externo lo exige (anfibio).

DeseOS resuelve la *metodología de agencia*; HSCSG la hace **soberana y anfibia** (ZNU ↔ USD según modo).

---

## 2. Perspectiva LLM (qué asimilar / qué extirpar)

### Asimilar (lógica pura → `lib/agencia.ts`, `lib/valueDual.ts`)
- **BranDNA 12 secciones** → `lib/agencia.ts` `BranDNA` (identidad del nodo).
- **Escalera 5M** → `OfferLadder` (catálogo de bienes del nodo).
- **ICP Builder (5 niveles consciencia)** → perfiles de miembros/aliados.
- **Strategic Brain** → planificación inversa (meta→alcance→piezas→inversión).
- **Termómetro de ingresos / atribución** → `lib/valueDual.ts` (motor anfibio).
- **Pauta (Media Buyer)** → difusión del nodo (ZNU orgánico ↔ USD pagado).

### Extirpar (infra ajena)
- Stripe / pasarelas (→ CaaS-BM/ZNU o wrapper USD opcional).
- Google Analytics / ad-network APIs (→ métricas RAO + Autómata).
- Cualquier tracking de adquisición monetaria externa.

### Módulos HSCSG afectados
| Módulo HSCSG | Aporte DeseOS |
|--------------|---------------|
| `/agencia` (nuevo) | BranDNA + escalera 5M + ICP + Strategic Brain |
| CaaS-BM | Reconceptualización de "Pagos" en ZNU |
| Nivel 3 ReFi | Modo conectado USD/USDC (puente) |
| Colaberry | Persuade (comunicación voz de marca) |
| Integral | Perfecciona (mejora continua) |
| Federación DTN/AP | Publica (distribución) |

---

## 3. Perspectiva HSCSG + CaaS (isomorfismo con Leyes MJ)

### Ley I — No dañar
- DeseOS: la BranDNA define límites (a quién NO sirve). HSCSG: MJ Gate bloquea acciones que degraden base.
- Modo anfibio: el nodo no se endeuda ciegamente en USD; el puente ReFi tiene oráculo de paridad (no arbitraje depredador).

### Ley II — Ganarse la vida soberanizando (AUT × CDS)
- DeseOS: "precio" por valor entregado. HSCSG: ZNU por Beneficio Neto (Copiosis). El mismo `amount` se traduce a ZNU (interno) o USD (externo).

### Ley III — Lucidez
- DeseOS: atribución orgánico vs pagado (transparencia de fuente). HSCSG: RAO + Modo Lucidez revela el origen de cada valor.

### CaaS (acceso por contribución, no dinero)
- DeseOS: "Pagos" como barrera monetaria. HSCSG: CaaS-BM da acceso por AUT×CDS. El módulo `/agencia` muestra el catálogo en ZNU (acceso por contribución) y, opcionalmente, en USD (venta externa).

---

## 4. ARQUITECTURA ANFIBIA (núcleo de esta asimilación)

### Tipo dual de valor
```ts
type ValueUnit = 'ZNU' | 'USD'
interface Value { amount: number; unit: ValueUnit }
```

### Selector de render según modo del nodo
```ts
// lib/valueDual.ts
export function displayValue(v: Value, mode: 'postmonetario' | 'conectado', parity: number): string {
  if (mode === 'postmonetario') {
    // Siempre ZNU internamente; el "precio" se lee como ZNU
    return `${v.amount} ZNU`
  }
  // Modo conectado: traduce a USD vía oráculo de paridad (ZNU→USDC)
  const usd = v.amount * parity
  return `$${usd.toFixed(2)}`
}
```

### Modo del nodo (en store, persistido)
```ts
nodeMode: 'postmonetario' | 'conectado'   // anfibio
priceParity: number                        // ZNU → USDC (oráculo ReFi)
```

### Cómo queda DeseOS sin tocar su lógica
Los módulos P8-Pagos / P7-Pauta de DeseOS operan sobre `amount` (agnóstico). El render llama `displayValue(amount, nodeMode, priceParity)`. Así:
- **Modo postmonetario:** la pantalla Pagos muestra "Cohorte 04 · 8000 ZNU · 62% orgánico (CaaS)".
- **Modo conectado:** la misma pantalla muestra "Cohorte 04 · $X USD · 62% orgánico · 38% ReFi".

**No se duplica lógica, no se extirpa el dinero: se hace anfibio.**

---

## 5. Mejoras Mutuas

**DeseOS → HSCSG:** método de agencia completo (BranDNA, 5M, ICP, Strategic Brain) que HSCSG no tenía; catálogo de valor del nodo; terminómetro de ingresos reutilizable como medidor de Beneficio Neto.

**HSCSG → DeseOS:** soberanía (offline-first), anti-especulación (ZNU demurrage), gobernanza (Colony/CDS), justicia (Kleros/PoH), y la **capa anfibia** que libera a DeseOS de depender de Stripe/USD.

---

## 6. Inferencias Extrapoladas

1. **BranDNA como "constitución del nodo"**: las 12 secciones = carta de intenciones del nodo, versionada en RAO.
2. **Escalera 5M como "ofertas CaaS"**: cada peldaño es un bien del nodo accesible por AUT×CDS.
3. **ICP 5 niveles = perfiles de miembros**: alimentan el CDS (quién decide qué).
4. **Termómetro anfibio = medidor de Beneficio Neto**: el `revenue` en ZNU es el NBR de Copiosis.
5. **Pauta anfibia**: difusión orgánica (ZNU/CaaS) vs pagada (USD/ReFi) — el nodo elige según soberanía.

---

## 7. Entregables Accionables (P0/P1)

| Entregable | Descripción | Módulo HSCSG | Prioridad |
|------------|-------------|--------------|-----------|
| `lib/agencia.ts` | BranDNA + OfferLadder + ICP + Strategic Brain | `/agencia` | **P0** |
| `lib/valueDual.ts` | Tipo `Value` + `displayValue` anfibio | CaaS/ReFi | **P0** |
| `nodeMode` + `priceParity` en store | Modo anfibio persistido | store | **P0** |
| Pantalla `/agencia` | BranDNA + escalera 5M + ICP + Pagos anfibios | `/agencia` | **P0** |
| `docs/deseos_backup.md` | Backup quirúrgico | Docs | **P0** |
| `docs/deseos_integration.md` | Este doc | Docs | **P0** |
| BRIEF §2.20, §3.0, §14, §16 | Inyección DeseOS + anfibio | Brief | **P0** |

---

## 8. Notas de implementación (sin romper HSCSG)

- **Catálogos fijos** (12 secciones BranDNA, 5 peldaños 5M) → `const` en `lib/agencia.ts`, la pantalla itera la constante.
- **Estado editable** (datos del nodo, ofertas, ICP) → `store.ts` con `partialize`.
- **Sin backend**: todo local; el modo conectado solo cambia el render (paridad), no requiere red.
- **MJ Gate**: cualquier "venta externa USD" pasa `evaluateMJGate` (no endeudarse ciegamente).
- **Anfibio real**: `displayValue` decide etiqueta; la lógica de cálculo es agnóstica a la unidad.
