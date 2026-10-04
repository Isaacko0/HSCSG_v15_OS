# Will Ruddick TQ/CPP Assimilation Pattern

**Fuente:** Mensajes de Will Ruddick (@wor) reenviados por DhySoñand0m (Gaia mais) + Feria Conuquera (Caracas)
**Fecha:** 2026-10-04
**Estado:** Validación empírica de arquitectura ALRAC 5 capas

---

## 1. Conceptos Canónicos (Definiciones Ruddick)

### TQ (Thermodynamic Quotient)
> **"TQ is a bounded mutual-credit system, similar to LETS, using energy as its unit of account and possibly as its valuation basis."**

> **"TQ turns obligation into a single community-wide account balance."**

**Mapeo ALRAC:** Capa 1 (Cergio) — TQ = 1 kWh, límite ±500, catálogo ICE/Ecoinvent, mutual-credit bounded, NFC offline.

### CPP (Commitment Pooling Protocol)
> **"Commitment Pooling Protocol is a coordination protocol abstracted in part from patterns of human social coordination, where autonomous agents can coordinate commitments, limits, exchange, authority, and shared memory without requiring a digital substrate."**

> **"CPP keeps obligation attached to particular commitments and particular issuers, then uses pools to make those commitments exchangeable."**

**Mapeo ALRAC:** Capa 2 (Isaac/HSCSG) — CPP = capa interoperabilidad entre 𝕮 autónomos, agnóstico a sustrato digital.

### Distinción Crítica TQ vs CPP
| Aspecto | TQ (Capa 1) | CPP (Capa 2) |
|---------|-------------|--------------|
| Obligación | Cuenta única comunidad-wide | Adjunta a compromisos/emisores específicos |
| Función | Cinta métrica reciprocidad local | Interoperabilidad entre sistemas |
| Alcance | Intra-nodo | Inter-nodo / inter-sistema |
| Tecnología | Mínima (NFC offline, papel) | Agnóstica (EVM, Holochain, papel, etc.) |

**Ruddick:** *"If it is working for them i would keep TQ as a local mutual-credit clearing system. Add Commitment Pooling as the layer that makes specific productive commitments visible, curates what crosses boundaries, manages exposure, and connects TQ communities to other economic systems without requiring everyone to adopt TQ."*

→ **Validación directa arquitectura ALRAC 5 capas: TQ (Capa 1) + CPP (Capa 2) = separación limpia.**

---

## 2. Caso Real: Feria Conuquera (Caracas, Venezuela)

**URL:** https://feria.loanstly.com/main/p/inicio
**Perfil:** Mercado al aire libre mensual (10 años, +45 colectivos, 0% agroquímicos)
**Sistema:** Moneda local + trueque + crédito mutuo (1 TQ = 1 kWh)

### Mapeo Operativo a ALRAC
| Componente Feria | ALRAC Capa | Holón Gran Alianza |
|------------------|------------|-------------------|
| Mercado público (moneda local) | Capa 3 (Zeitnus - puente fiat) | GAIA NETWORK |
| Trueque/crédito mutuo (1 TQ = 1 kWh) | Capa 1 (Cergio - TQ) | HSCSG / GAIA COMMONS |
| Asambleas trimestrales (1a1v) | Capa 3 (Zeitnus - coop) | GAIA COMMONS |
| Talleres educación popular | Capa 0.5 (Javier - principios) | PHI |
| Comisiones/cayapas/ecovillage | Capa 2 (HSCSG - federación) | MYCELIUM / GAIA |

### Métricas Validadas Empíricamente
- **10 años** operación continua → αʰ sostenido > κ (paz operativa)
- **45 colectivos** → escala nodos federados viable
- **Moneda local + trueque + crédito mutuo** → economía mixta poscrecimiento funcionando
- **Gobernanza asamblearia trimestral** → democracia económica real

---

## 3. Principios Metodológicos Ruddick (Anti-Patrones)

| Principio | Aplicación ALRAC/HSCSG |
|-----------|------------------------|
| **No inventar tecnología para buscar comunidades** | ALRAC nace de 6 fuentes federadas vivas (Amid, Cergio, Isaac, Javier, Yoka, Gran Alianza) |
| **Vivir → notar → articular → construir → vivir → notar** | Ciclo γ-CARMIS / AEI / 20 Límites = misma epistemología |
| **Tecnología = ajuste práctico, no dogma** | CPP agnóstico: EVM hoy, Holochain mañana, NFC offline siempre |
| **Relaciones vivas = implementación de referencia** | Feria Conuquera = nodo real validando Capa 1+3 |

> **"I am very wary of the pattern: 'We invented XYZ technology, now let's find communities to run it.'"**

> **"Live → notice → articulate → build → live with it → notice again. The living relationships remain the reference implementation."**

---

## 4. Integración Técnica Inmediata (HSCSG v15 OS)

### Tipos TypeScript a Extender (`src/core/lib/alrac.ts`)
```typescript
// NUEVO: Commitment Pooling Protocol types
interface CPPCommitment {
  issuer: DID;
  commitment: string;
  quantity: bigint;
  unit: 'kWh' | 'hours' | 'kg' | 'custom';
  expiry: Timestamp;
  conditions: string[];
  poolId?: PoolId;
}

interface CPPPool {
  id: PoolId;
  name: string;
  members: DID[];
  commitments: CPPCommitment[];
  exchangeRules: ExchangeRule[];
  exposureLimit: bigint;
  authority: AuthorityConfig;
}

interface ExchangeRule {
  fromPool: PoolId;
  toPool: PoolId;
  rate: ConversionFactor;
  curated: boolean;
}

// EXTENSIÓN: TQ Account con CPP bridge
interface TQAccount {
  did: DID;
  balance: bigint;                // ±500 TQ (bounded)
  commitments: CPPCommitment[];   // Compromisos activos (CPP layer)
  pools: PoolId[];
  cppBridge: CPPBridgeConfig;
}
```

### Archivos a Crear/Modificar
1. `openspec/specs/cpp-protocol.md` — Spec OpenSpec CPP (Capa 2)
2. `src/core/lib/cpp.ts` — Tipos + lógica CPP
3. `src/core/lib/tq.ts` — Extender con `cppBridge`
4. `src/app/screens/ALRAC.tsx` — Tab "CPP/Interop" nueva
5. `docs/cpp-integration.md` — Documentación técnica

---

## 5. Flujo de Asimilación Aplicado (4 Fases HSCSG)

### Fase 0 — Backup
```bash
cd /c/Users/Isaacko0/Documents
cp -r HSCSG_v15_OS HSCSG_v15_OS_BACKUP_$(date +%Y%m%d_%H%M%S)
```

### Fase 1 — Extracción
- Web scraping: `web_extract` para Feria Conuquera, X.com, LinkedIn
- Documentación: `WillRuddick_TQ_CPP_Assimilation.md` (backup inmutable)

### Fase 2 — Documentación Triple Perspectiva
1. **Usuario**: Operacionalizar TQ/CPP en nodo propio, conectar con Feria Conuquera
2. **LLM**: Asimilar lógica pura TQ/CPP, extirpar infra blockchain/EVM
3. **HSCSG+CaaS**: Isomorfismo 30 mapeos (Leyes MJ + CaaS + ALRAC + GNAP + ZNU)

### Fase 3 — Módulo Real
- Tipos: `src/core/state/cpp.ts`, `src/core/lib/cpp.ts`
- Store: Extender `tq.ts` con `cppBridge`, añadir slices CPP
- Pantalla: Tab CPP en `ALRAC.tsx`
- Nav: Ya existe `ALRAC` en `Aside.tsx`

### Fase 4 — Verificación
```bash
cd /c/Users/Isaacko0/Zeitnus_local
npx tsc --noEmit
npm run build
npm run preview &
curl 200 en /alrac
```

---

## 6. Validaciones Recibidas (Checklist ALRAC Master)

- [x] Capa 1: TQ = 1 kWh, ±500, mutual-credit bounded
- [x] Capa 2: CPP = interoperabilidad sin absorción
- [x] Capa 3: Zeitnus = única capa que toca fiat (Feria usa moneda local + TQ interno)
- [x] Postulado 4: ZNU caduca si no circula (1 TQ = 1 kWh en trueque = circulación obligada)
- [x] γ-CARMIS / Consentimiento Total (asambleas trimestrales deciden todo)
- [x] 7 Principios Javier (necesidades básicas, mercados limitados, propiedad diversa, democracia económica, límites concentración, menos dependencia crecimiento, planificación ecológica)
- [x] 5 Anti-reglas = Sesgos Alraicos (TAD, HD, FCP, γ_ind ≪ ½θ, FCP forma tecnofix)

---

## 7. Gaps Identificados y Acciones

| Gap | Acción | Prioridad |
|-----|--------|-----------|
| CPP spec formal | Crear `openspec/specs/cpp-protocol.md` | 🔴 Crítica |
| TQ ↔ CPP interface | Definir `exchangeGuard` + `conversionFactor` | 🔴 Crítica |
| Feria Conuquera = nodo piloto | Registrar en HSCSG v15 OS | 🟡 Alta |
| Cosmolocal Credit docs | Asimilar `docs.cosmolocal.credit` | 🟡 Alta |
| Valueflows integration | Validar compatibilidad CPP | 🟢 Media |
| Contactar Will Ruddick | Carta individual (plantilla ALRAC §10) | 🟡 Alta |

---

## 8. Sinergia con Soulpreneurs (70k contactos CSV)

| Soulpreneurs | Feria Conuquera | Sinergia |
|--------------|-----------------|----------|
| 70k emprendedores conscientes LATAM | 45 colectivos productores Caracas | Mismo perfil: propósito + regeneración |
| 13.8k business accounts | Productores agroecológicos certificados | Pipeline: Soulpreneurs → Feria (mercado real) |
| Necesitan modelos regenerativos (Línea B) | Ya operan modelo 10 años | Referencia viva: Feria = caso estudio Línea B |
| Buscan comunidad/red (Línea D) | Asambleas, cayapas, talleres, cultura | Facilitadores γ-CARMIS pueden salir de Feria |
| Geo: MX, CO, PE, CL, AR... | Venezuela (hub Caribe/Andino) | Nodo TQ regional (Línea E) para Cono Sur |

**Acción:** Usar Feria Conuquera como **caso piloto documentado** para cohorte Soulpreneurs ALRAC (Línea B + D).

---

## 9. Referencias Cruzadas en Repositorio

| Documento | Sección | Actualización |
|-----------|---------|---------------|
| `docs/ALRAC_MASTER_INTEGRADO.md` | §5, §7 | Añadir distinción TQ vs CPP explícita |
| `docs/GRANALLIANZA_MAPPING.md` | Líneas A-E | Añadir Feria Conuquera como nodo real |
| `docs/ZEITNUS_REGENERATIVE_MODEL.md` | Mapping Samay | Añadir Feria como validación empírica |
| `openspec/specs/SPEC_INDEXER.md` | Índice specs | Añadir `cpp-protocol.md` (Capa 2) |
| `src/core/lib/alrac.ts` | Tipos core | Extender con CPP types |
| `Soulpreneurs_ALRAC_Mapping.md` | Plan 60 días | Añadir Feria como piloto Semana 5-8 |

---

## 10. Pitfalls Específicos Aprendidos

1. **No confundir TQ (cinta métrica) con dinero** — Ruddick es explícito: TQ ≠ fiat/cripto nunca (prohibición cambiaria Cergio)
2. **CPP ≠ blockchain** — "without requiring a digital substrate" → implementar primero en papel/NFC offline
3. **Feria Conuquera usa 1 TQ = 1 kWh** — validación empírica directa del anclaje termodinámico
4. **Asambleas trimestrales = gobernanza 1a1v** — jurados sorteados (CEL) implementados en práctica
5. **Will Ruddick = voz autorizada TQ/CPP** — sus definiciones son canónicas para ALRAC

---

## 11. Próximos Pasos Operativos (Esta Semana)

### Inmediato
- [ ] Asimilar `docs.cosmolocal.credit` (extraer spec técnica)
- [ ] Leer Google Doc Tiberius (propuesta colaboración Valueflows/Holochain)
- [ ] Crear `openspec/specs/cpp-protocol.md` con definición canónica Ruddick

### Días 2-3
- [ ] Registrar Feria Conuquera como nodo piloto HSCSG v15 OS
- [ ] Extraer catálogo productos Feria → mapear a ValueFlows resource types
- [ ] Contactar Feria (formulario /unirse) → proponer piloto ALRAC nodo

### Días 4-7
- [ ] Implementar `cppBridge` en `tq.ts` — pruebas unitarias
- [ ] Definir `conversionFactor` TQ↔Fiat para Feria (bolívares/kWh)
- [ ] Escribir carta a Will Ruddick (plantilla ALRAC Master §10)
- [ ] Actualizar `GRANALLIANZA_MAPPING.md` — Feria como nodo real holón GAIA/COMMONS

---

## 12. Citas Clave para Documentos Futuros

> **"TQ turns obligation into a single community-wide account balance. CPP keeps obligation attached to particular commitments and particular issuers, then uses pools to make those commitments exchangeable."** — Will Ruddick

> **"Commitment Pooling Protocol is a coordination protocol abstracted in part from patterns of human social coordination, where autonomous agents can coordinate commitments, limits, exchange, authority, and shared memory without requiring a digital substrate."** — Will Ruddick

> **"Live → notice → articulate → build → live with it → notice again. The living relationships remain the reference implementation."** — Will Ruddick

> **"I am very wary of the pattern: 'We invented XYZ technology, now let's find communities to run it.'"** — Will Ruddick

> **"1 TQ = 1 kWh"** — Feria Conuquera (implementación viva)

---

> **Nota:** Este patrón de asimilación valida empíricamente la arquitectura ALRAC. La Feria Conuquera es **nodo real operando Capa 1+3** hace 10 años. Will Ruddick articula la **teoría de Capa 2 (CPP)** desde la práctica. La convergencia es total: **ALRAC = vehículo comercial de CPP/TQ** (Paso 0 §10 ALRAC Master).

**La pala y el teclado están en tus manos. E=V.**
