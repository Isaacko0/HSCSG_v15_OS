# Red de Intercambio Federada Ecoaldea Raices del Monte inicio de Federación de Ecoaldeas / Feria Conuquera → HSCSG v15 OS — Integración Operativa

**Fecha:** 2026-09-02  
**Fuente:** `docs/ecoaldea_monte_backup.md` (43 docs técnicos + página pública)  
**Objetivo:** Mapear isomorfismos, decidir Take/Adapt/Discard, crear módulos vivos, definir plan de implementación

---

## 🔄 Tabla Maestra de Isomorfismos (28 conceptos × 2 sistemas)

| # | Concepto Red de Intercambio Federada Ecoaldea Raices del Monte inicio de Federación de Ecoaldeas | Concepto HSCSG v15 OS | Tipo | Acción | Notas |
|---|----------------------------|----------------------|------|--------|-------|
| 1 | Nodo federado autónomo | Tribu fractal / Nodo HSCSG | **Take** | ✅ Directo | Misma arquitectura: soberanía local + federación voluntaria |
| 2 | Piscina global multilateral (node_bridge_global) | Vasos Comunicantes / Red seguridad distribuida | **Take** | ✅ Directo | Pool compartido real vs verificación bilateral |
| 3 | Piscinas bilaterales (node_bridge_bilateral) | Acuerdos bilaterales entre tribus | **Take** | ✅ Directo | Para límites mayores entre pares específicos |
| 4 | Sponsor + Propagación en cadena | Suscripción = equipo / Desafío subsistencia | **Adapt** | 🔄 Parcial | Sponsor → "equipo que apadrina"; propagación → red de apoyo distribuida |
| 5 | Sistema de padrino (límite retenido, deuda transferible) | Gobernanza sorteada incentivada + subsistencia decreciente | **Adapt** | 🔄 Parcial | Padrino → "nodo mentor"; límite retenido → "reserva de subsistencia" |
| 6 | Canasta básica federada (500 TQ, misma en todos) | Cuaternidad Soberana Ampliada / Base material común | **Take** | ✅ Directo | Ancla energética universal: 1 TQ = 1 kWh ≡ base física HSCSG |
| 7 | 1 TQ = 1 kWh energía real | Dinero off-grid / Libertad financiera reinvertida | **Take** | ✅ Directo | Métrica física inmutable vs fiat especulativo |
| 8 | Firma dual (Ed25519 ambos nodos) | Verificación triaxial (RAO + MJ Gate + Triaxial) | **Adapt** | 🔄 Parcial | Firma dual → verificación criptográfica; triaxial añade capas semánticas |
| 9 | Hash encadenado (cross_node_tx_chain) | Prueba de respuesta / Loop Engineering Canvas | **Adapt** | 🔄 Parcial | Hash chain → cadena de evidencia verificable en loop |
| 10 | Reconciliación al reconectar | Sincronización loop / Proof of Response | **Take** | ✅ Directo | Mismo patrón: comparar estados, resolver divergencias |
| 11 | 3 niveles gobernanza (Fed/Aldea/Org) | 5 planos HSCSG + Cuaternidad Soberana | **Adapt** | 🔄 Expandido | Fed→Planetario, Aldea→Comunitario, Org→Operativo + 2 planos extra |
| 12 | Asamblea General (órgano máximo) | Asamblea de la Tribu / Sorteo incentivado | **Adapt** | 🔄 Evolucionado | Asamblea + sorteo + incentivo subsistencia |
| 13 | Junta Directiva Nodo (decisiones operativas) | Círculo Operativo / Coordinación día a día | **Adapt** | 🔄 Directo | Separación estratégico/operativo idéntica |
| 14 | Organizaciones de la Asamblea (is_assembly_owned) | Módulos transversales / Servicios base | **Take** | ✅ Directo | Auto-suscripción universal = servicios base tribu |
| 15 | FRNE (Restitución No Especulativa) | Modelo cooperativo + salida digna | **Take** | ✅ Directo | Fórmula matemática para salida sin especulación |
| 16 | Tenencia tierra fideicomiso (inalienable) | Soberanía recíproca / Tierra no se vende | **Take** | ✅ Directo | Mismo principio: tierra como bien común inalienable |
| 17 | Perfiles nodo dinámicos (8 oficiales + custom) | Cultura anidada / Tribu fractal | **Take** | ✅ Directo | Perfiles = expresiones culturales; sharing federado = cultura anidada |
| 18 | Prohibiciones por producto (sharing gossip) | Normas culturales compartidas / Vasos comunicantes | **Take** | ✅ Directo | Gossip 60s = flujo descentralizado de normas |
| 19 | Auto-aprobación opcional + independencia nodo | Autonomía local / Soberanía recíproca | **Take** | ✅ Directo | Cada nodo/tribu decide qué adopta |
| 20 | Drivers NFC auto-instalables (.nfcpkg) | Skills Hermes anfibios / Módulos vivos | **Take** | ✅ Directo | .nfcpkg ≡ SKILL.md + CLI + sandbox + sharing federado |
| 21 | Sandbox Goja (ES5.1, timeout 5s, sin I/O) | Skill execution sandbox / WASM runtime | **Adapt** | 🔄 Evolucionado | Goja → WASM/QuickJS para skills seguros |
| 22 | Motor declarativo Android (reader.json) | Configuración declarativa skills / JSON Schema | **Take** | ✅ Directo | Declarativo = sin ejecutar código, solo interpretar |
| 23 | Nodo satélite (cache offline + cola eventos) | Modo off-grid / Autonomía local completa | **Take** | ✅ Directo | Satélite = nodo HSCSG en modo desconectado |
| 24 | Setup Wizard auto-configuración | Onboarding 4 fases (BRIEF_ONBOARDING_CONSTRUCTOR) | **Take** | ✅ Directo | Wizard ≡ fase Desempaquetado→Limpieza→GitHub→Evolución |
| 25 | Verificación 4 opciones (anti-MITM) | Autenticación soberana / Pairing seguro | **Take** | ✅ Directo | 4 opciones = desafío subsistencia (verificación real) |
| 26 | Crédito mutuo saldo cero (5 pilares) | Desafío subsistencia decreciente → abundancia | **Take** | ✅ Directo | Saldo cero = equilibrio; límites = escalones confianza |
| 27 | Comercio exterior separado del trueque | Modo anfibio: postmonetario vs conectado (priceParity) | **Take** | ✅ Directo | **Idéntico**: trueque interno ≠ comercio externo |
| 28 | Feria Conuquera (encuentro físico mensual) | Encuentros tribales / Rituales de sincronización | **Adapt** | 🔄 Nuevo | Feria = ritual de sincronización física + intercambio |

---

## ✅ DECISIONES: TAKE (13 conceptos — adopción directa)

| # | Concepto | Implementación HSCSG |
|---|----------|---------------------|
| 1 | Nodo federado autónomo | Ya existe: `src/core/lib/federation.ts` + pantalla `/federation` |
| 2 | Piscina global multilateral | **NUEVO**: `src/core/lib/global_pool.ts` — pool compartido real |
| 3 | Piscinas bilaterales | **NUEVO**: `src/core/lib/bilateral_pool.ts` — acuerdos pares |
| 6 | Canasta básica federada | **NUEVO**: `src/core/lib/basket.ts` — 500 TQ base, consenso 100% |
| 7 | 1 TQ = 1 kWh | **NUEVO**: `src/core/lib/energy_metric.ts` — métrica física inmutable |
| 10 | Reconciliación al reconectar | **NUEVO**: `src/core/lib/reconciliation.ts` — sync off-grid |
| 14 | Org. de la Asamblea | Mapear a `AssemblyOwnedModule` en `src/core/lib/modules.ts` |
| 15 | FRNE | **NUEVO**: `src/core/lib/frne.ts` — fórmula restitución no especulativa |
| 16 | Tenencia tierra fideicomiso | **NUEVO**: `src/core/lib/land_trust.ts` — fideicomiso comunitario |
| 17 | Perfiles nodo dinámicos | **NUEVO**: `src/core/lib/cultural_profiles.ts` — cultura anidada |
| 18 | Prohibiciones sharing gossip | **NUEVO**: `src/core/lib/norm_gossip.ts` — flujo normas descentralizado |
| 19 | Auto-aprobación + independencia | Ya en boundaries: `governAction` con `dryRun` + override local |
| 27 | Modo anfibio trueque/comercio | **YA EXISTE**: `lib/valueDual.ts` + `nodeMode` + `priceParity` |

---

## 🔄 DECISIONES: ADAPT (10 conceptos — evolución/expansión)

| # | Concepto Ecoaldea | Adaptación HSCSG | Detalle |
|---|------------------|------------------|---------|
| 4 | Sponsor + Propagación | **Red de Apoyo Distribuida** | Sponsor → "Nodo Mentor"; propagación → Vasos Comunicantes; no cadena lineal sino malla |
| 5 | Sistema de padrino | **Desafío Subsistencia Decreciente** | Padrino retiene límite → tribu aporta "reserva subsistencia"; ahijado sube nivel → reserva se libera como "abundancia gestionada" |
| 8 | Firma dual | **Verificación Triaxial** | Dual (2 partes) → Triaxial (RAO inmutable + MJ Gate + Verificación Triaxial); añade capa semántica/ética |
| 9 | Hash encadenado | **Loop Engineering Canvas** | Hash chain → cadena de evidencia en loop; cada iteración = hash; proofOfResponse = tx_hash |
| 11 | 3 niveles gobernanza | **5 Planos + Cuaternidad** | Expandir: Planetario, Comunitario, Operativo, Personal, Meta-sistémico; Cuaternidad = 4 pilares soberanos |
| 12 | Asamblea General | **Asamblea Sorteada Incentivada** | Asamblea + sorteo (gobernanza aleatoria) + incentivo subsistencia (quien participa gestiona reserva) |
| 20 | Drivers .nfcpkg | **Skills Hermes Anfibios** | .nfcpkg → SKILL.md + CLI + sandbox WASM + sharing via git/registry; auto-instalable = `hermes skill install` |
| 21 | Sandbox Goja | **WASM/QuickJS Runtime** | Goja (JS ES5.1) → QuickJS/WASM para skills multi-lenguaje; timeout configurable; capacidades (db, crypto, net) |
| 23 | Nodo satélite | **Modo Off-Grid Completo** | Satélite (cache temporal) → Nodo HSCSG full off-grid con sync diferido; mismo código, distinta configuración |
| 28 | Feria Conuquera | **Encuentros Tribales / Rituales** | Feria mensual → Encuentros estacionales (solsticios/equinoccios) + sincronización pools + rituales |

---

## ❌ DECISIONES: DISCARD (5 conceptos — no aplicar o ya resuelto distinto)

| # | Concepto | Por qué no / Alternativa HSCSG |
|---|----------|--------------------------------|
| - | YugabyteDB / PostgreSQL distribuido | HSCSG es **offline-first SPA** (IndexedDB + sync manual); no BD distribuida |
| - | Docker / docker-compose deployment | HSCSG: **Vercel/Netlify static + local preview**; no contenedores |
| - | mTLS certificados mutuos | HSCSG: **AG-UI protocol + policy-cel-gateway** para gobernanza local; no transporte federado |
| - | WireGuard / OpenWrt / IPv6 ULA | HSCSG: **Off-grid por diseño**; sincronización manual/USB/mesh local; no VPN |
| - | 152 migraciones SQL | HSCSG: **Event sourcing + IndexedDB** schema-less; migraciones = versionado estado local |

---

## 🏗️ MÓDULOS NUEVOS A CREAR EN HSCSG v15 OS

### 1. `src/core/lib/global_pool.ts` — Piscina Global Multilateral
```typescript
// Pool compartido real entre todos los nodos/tribus
// pool_type: 'global' | 'bilateral'
// No filtra por counterpart_node
// Límite = f(nivel_tribu) + reserva_subsistencia
interface GlobalPoolEntry {
  tribeId: string;
  amount: bigint; // TQ * 1000 (miliTQ)
  poolType: 'global' | 'bilateral';
  counterpartTribe?: string; // solo si bilateral
  prevHash: string;
  txHash: string;
  dualSignature: { tribeA: string; tribeB: string };
}
```

### 2. `src/core/lib/bilateral_pool.ts` — Piscinas Bilaterales
```typescript
// Acuerdos específicos entre 2 tribus
// No afecta pool global
// Límite negociado bilateralmente
```

### 3. `src/core/lib/basket.ts` — Canasta Básica Federada
```typescript
// 500 TQ base (configurable por consenso 100%)
// Misma en todas las tribus
// Cálculo energético: kWh por canasta familiar
interface BasketConfig {
  baseCostTQ: number; // 500
  items: BasketItem[]; // {name, qtyMonth, priceTQperUnit, energyKWh}
  approvalThreshold: number; // 100 = consenso total
  lastApprovedProposalId?: string;
}
```

### 4. `src/core/lib/energy_metric.ts` — Métrica Energética Inmutable
```typescript
// 1 TQ = 1 kWh = 3.6 MJ (constante física)
// Conversión a moneda local vía priceParity (modo anfibio)
// ICE Database para valores energéticos materiales
const ENERGY_CONSTANTS = {
  TQ_PER_KWH: 1,
  MJ_PER_KWH: 3.6,
  ICE_DATABASE_VERSION: '3.0',
} as const;
```

### 5. `src/core/lib/reconciliation.ts` — Reconexión Off-Grid
```typescript
// Comparar last_hash por par tribu-tribu
// Intercambiar cadena divergente
// Verificar firmas duales + hashes
// Incorporar válidas, auditar inválidas
async function reconcile(tribeA: string, tribeB: string): Promise<ReconciliationResult>
```

### 6. `src/core/lib/modules.ts` — Módulos Transversales (AssemblyOwned)
```typescript
// is_assembly_owned = true
// Auto-suscripción universal al unirse a tribu
// Servicios obligatorios: energía, agua, comunicaciones, gobernanza
// Junta directiva propia para decisiones operativas
```

### 7. `src/core/lib/frne.ts` — Fórmula Restitución No Especulativa
```typescript
// R_neto = I_ini - D_desgaste - C_restauracion +/- B_TQ - T_salida
// I_ini: inversión materiales (adobes, madera, solar)
// D_desgaste: 3-4% anual sobre valor construcción
// C_restauracion: costo reparar daños territorio
// B_TQ: balance contable (negativo resta, positivo suma)
// T_salida: 15% retención solidaria Fondo Comunitario
// Pago diferido 12-24 meses
```

### 8. `src/core/lib/land_trust.ts` — Fideicomiso Comunitario
```typescript
// Tierra: colectiva, indivisible, inalienable
// Usufructo: mientras membresía activa
// Prohibición venta: no mercado abierto
// Herencia: usufructo transferible a descendientes/miembros
```

### 9. `src/core/lib/cultural_profiles.ts` — Cultura Anidada / Perfiles Dinámicos
```typescript
// 8 perfiles base: Adventista, ISKCON, Plum Village, Halal, Kosher, Jain, Vegano, Ital Rastafari
// Crear perfiles custom (ej: "Adventista Reforma") → compartir via Vasos Comunicantes
// Prohibiciones por producto individual (no solo categoría)
// Sharing federado: tribus mismo perfil comparten normas cada 60s (gossip)
// Auto-aprobación opcional por tribu
// Independencia: desaprobar localmente (falso positivo)
```

### 10. `src/core/lib/norm_gossip.ts` — Flujo Normas Descentralizado
```typescript
// Gossip protocol para normas culturales
// Cada 60s: intercambiar prohibiciones/aprobaciones con peers
// Validación local antes de aplicar
// CRDT para convergencia eventual
```

### 11. `src/core/lib/skill_runtime.ts` — Runtime Skills Anfibios (evolución .nfcpkg)
```typescript
// .nfcpkg → SKILL.md + manifest.json + handler.ts + sandbox
// Sandbox: QuickJS/WASM, timeout configurable, capacidades declarativas
// Firmado por tribu (Ed25519), no clave central
// Sharing via git + registry (no gossip)
// CLI: `hermes skill install <url>`, `hermes skill publish`
```

### 12. `src/core/lib/tribal_gatherings.ts` — Encuentros Tribales / Rituales
```typescript
// Feria Conuquera → Encuentros estacionales (4/año: solsticios/equinoccios)
// Actividades: sincronización pools, intercambio semillas, rituales, asambleas
// Nodo satélite temporal para feria → modo off-grid con sync posterior
// Calendario compartido via Vasos Comunicantes
```

---

## 📦 PANTALLAS NUEVAS EN HSCSG v15 OS

| Pantalla | Ruta | Descripción | Componentes Clave |
|----------|------|-------------|-------------------|
| **GlobalPool** | `/global-pool` | Visualizar pool global multilateral, saldos por tribu, flujos | Gráfico red, tabla saldos, alertas umbrales |
| **BilateralPools** | `/bilateral-pools` | Gestionar acuerdos bilaterales, negociar límites | Lista acuerdos, formulario negociación, historial |
| **BasketGovernance** | `/basket-governance` | Canasta básica federada, propuestas cambio, votación consenso | Canasta actual, calculadora energética, propuestas federadas |
| **EnergyMetric** | `/energy-metric` | Métrica TQ=1kWh, ICE Database, calculadora precios | Tabla materiales, conversor TQ↔kWh↔moneda local |
| **Reconciliation** | `/reconciliation` | Estado sync off-grid, cadenas divergentes, resolver conflictos | Dashboard pares, comparador hashes, botón reconciliar |
| **CulturalProfiles** | `/cultural-profiles` | Perfiles tribu, prohibiciones, crear custom, sharing | Selector perfil, lista prohibiciones, botón crear/share |
| **NormGossip** | `/norm-gossip` | Monitor gossip normas, peers, cola aprobación | Log gossip, estado peers, cola revisión |
| **FRNECalculator** | `/frne-calculator` | Calcular restitución salida miembro | Formulario inputs, resultado desglosado, plan pagos |
| **LandTrust** | `/land-trust` | Registro tierras fideicomiso, usufructos, transferencias | Mapa parcelas, tabla usufructos, historial |
| **TribalGatherings** | `/tribal-gatherings` | Calendario encuentros, sincronización, rituales | Calendario anual, registro asistencias, actas |
| **SkillMarketplace** | `/skill-marketplace` | Skills anfibios disponibles, instalar, publicar | Catálogo skills, sandbox preview, CLI install |

---

## 🔗 INTEGRACIÓN CON MÓDULOS EXISTENTES HSCSG

### Ya Existentes (Reutilizar/Extender)
| Módulo HSCSG | Integración Ecoaldea |
|--------------|---------------------|
| `boundaries.ts` + `governAction` | Añadir `poolType` check, `dualSignature` validation |
| `coworkers.ts` | Añadir `TribalMentor` coworker (equivalente a padrino/sponsor) |
| `valueDual.ts` + `nodeMode` + `priceParity` | **Ya implementa modo anfibio** trueque/comercio — extender con energy_metric |
| `meta_crisis_*.ts` | Añadir `EcoaldeaMonte` como proyecto amigo + isomorfismos |
| `orchestrator-next-steps.js` | Añadir workstream `ECOALDEA_INTEGRATION` (12 tareas) |
| `brief-detector-recommender` | Detectar gaps: global_pool, bilateral_pool, basket, frne, land_trust, cultural_profiles, norm_gossip, skill_runtime, tribal_gatherings |

### Estado Store (Extender `src/core/state/`)
```typescript
// En store.ts añadir:
interface EcoaldeaState {
  globalPool: GlobalPoolEntry[];
  bilateralPools: BilateralPool[];
  basketConfig: BasketConfig;
  energyMetrics: EnergyMetric[];
  culturalProfiles: CulturalProfile[];
  normGossipQueue: NormGossipItem[];
  frneCalculations: FRNEResult[];
  landTrustRecords: LandTrustRecord[];
  tribalGatherings: TribalGathering[];
  skillMarketplace: SkillMarketplaceItem[];
}
```

---

## 📋 PLAN DE IMPLEMENTACIÓN (Critical Path: 6 semanas)

### Semana 1-2: Core Económico (Fundación)
- [ ] `global_pool.ts` + `bilateral_pool.ts` + types + tests
- [ ] `basket.ts` + consenso 100% + calculadora energética
- [ ] `energy_metric.ts` + ICE Database subset + TQ↔kWh↔local
- [ ] Store extensions + persistence IndexedDB
- **Entregable:** Pool global funcional, canasta 500 TQ, métrica energética

### Semana 3: Gobernanza Avanzada
- [ ] `reconciliation.ts` + off-grid sync + hash chain verification
- [ ] `frne.ts` + calculator UI + payment plan generator
- [ ] `land_trust.ts` + registry + usufruct tracking
- [ ] Extender `boundaries.ts` con `poolType` + `dualSignature`
- **Entregable:** Reconciliación off-grid, FRNE calculator, registro tierras

### Semana 4: Cultura Anidada + Normas
- [ ] `cultural_profiles.ts` + 8 perfiles base + custom profiles
- [ ] `norm_gossip.ts` + gossip protocol + CRDT convergence
- [ ] Auto-aprobación opcional + independencia local (desaprobar)
- [ ] UI: `/cultural-profiles`, `/norm-gossip`
- **Entregable:** Perfiles dinámicos, sharing normas federado, UI completa

### Semana 5: Skills Anfibios + Runtime
- [ ] `skill_runtime.ts` + QuickJS/WASM sandbox + capacidades
- [ ] Manifest schema (equivalente .nfcpkg manifest.json)
- [ ] CLI `hermes skill install/publish` + registry local
- [ ] Sharing via git (no gossip) + versionado semver
- **Entregable:** Runtime skills seguro, marketplace local, CLI

### Semana 6: Encuentros Tribales + Integración Final
- [ ] `tribal_gatherings.ts` + calendario estacional + rituales
- [ ] Modo nodo satélite (off-grid full + sync diferido)
- [ ] Integrar todo en `/meta-crisis` screen + nuevo `/ecoaldea` hub
- [ ] Tests E2E: pool global → bilateral → canasta → reconciliación → FRNE → perfiles → skills → gatherings
- [ ] Documentación: `ecoaldea_monte_integration.md` actualizada + briefs
- **Entregable:** Sistema completo integrado, deploy Vercel, docs actualizadas

---

## 🎯 BRIEFS OPERATIVOS A CREAR (para brief-detector-recommender)

| Brief ID | Título | Perfil Objetivo |
|----------|--------|-----------------|
| BF-094 | `BRIEF_GLOBAL_POOL_IMPLEMENTATION` | Backend/Protocol |
| BF-095 | `BRIEF_BILATERAL_POOLS_NEGOTIATION` | Backend/Governance |
| BF-096 | `BRIEF_BASKET_GOVERNANCE_CONSENSUS` | Governance/All |
| BF-097 | `BRIEF_ENERGY_METRIC_ICE_DATABASE` | Data/Engineering |
| BF-098 | `BRIEF_OFFGRID_RECONCILIATION` | Off-grid/Protocol |
| BF-099 | `BRIEF_FRNE_CALCULATOR` | Legal/Economics |
| BF-100 | `BRIEF_LAND_TRUST_REGISTRY` | Legal/Operations |
| BF-101 | `BRIEF_CULTURAL_PROFILES_NESTED` | Anthropology/UX |
| BF-102 | `BRIEF_NORM_GOSSIP_PROTOCOL` | Protocol/Distributed |
| BF-103 | `BRIEF_SKILL_RUNTIME_WASM` | Platform/Engineering |
| BF-104 | `BRIEF_TRIBAL_GATHERINGS_RITUALS` | Community/Design |
| BF-105 | `BRIEF_ECOALDEA_ONBOARDING_WIZARD` | Onboarding/All |

---

## 🔗 VASOS COMUNICANTES ACTUALIZADOS (Ecoaldea → HSCSG)

| Vaso | Red de Intercambio Federada Ecoaldea Raices del Monte inicio de Federación de Ecoaldeas | HSCSG v15 OS | Estado |
|------|-------------------|--------------|--------|
| 1 | **Gobernanza: Sync** | Federación + Consenso 100% | 🟡 Adaptar (triaxial) |
| 2 | **Confianza: Bridge** | Sponsor → Nodo Mentor + Reserva Subsistencia | 🟡 Adaptar |
| 3 | **Infra: Connect** | Off-grid sync + Reconciliación | ✅ Take |
| 4 | **Intel: Match** | Perfiles culturales + Prohibiciones sharing | ✅ Take |
| 5 | **App: Federate** | Skills anfibios + Marketplace | 🟡 Adaptar (WASM) |
| 6 | **Eco: Sync** | Pool global + Bilaterales + Canasta | ✅ Take |
| 7 | **Impact: Bridge** | FRNE + Fideicomiso tierra | ✅ Take |
| 8 | **Funding: Proposal** | Encuentros tribales + Rituales | 🆕 Nuevo |

---

## 📊 MÉTRICAS DE ÉXITO

| Métrica | Target | Medición |
|---------|--------|----------|
| Pool global operativo | 3+ tribus conectadas | Saldos cross-tribe fluyen sin bilateral |
| Canasta consenso | 100% aprobación | Propuesta canasta → todos aprueban |
| Reconciliación off-grid | < 5 min sync | Nodo offline 7 días → reconecta + resuelve |
| FRNE calculator | 100% casos cubiertos | Salida miembro → plan pagos 12-24 meses generado |
| Perfiles culturales | 8 base + 3 custom/mes | Creación + sharing gossip verificado |
| Skills anfibios | 10+ publicadas | `hermes skill install` funciona end-to-end |
| Encuentros tribales | 4/año (estacionales) | Calendario + asistencias + actas sincronizadas |

---

## 🚀 PRÓXIMOS PASOS INMEDIATOS

1. **Crear briefs operativos** (BF-094 a BF-105) via `brief-detector-recommender`
2. **Añadir workstream `ECOALDEA_INTEGRATION`** al orchestrator (12 tareas)
3. **Implementar Semana 1-2**: `global_pool`, `bilateral_pool`, `basket`, `energy_metric`
4. **Actualizar `BRIEFS_INDEX.md`** con 12 nuevos briefs
5. **Crear pantalla `/ecoaldea`** como hub de integración (icon: `Leaf` o `Users`)
6. **Push a GitHub** + deploy Vercel + verificar `/ecoaldea` live

---

**Nota:** Esta integración respeta el principio **anfibio** de HSCSG: misma lógica opera en modo postmonetario (ZNU/CaaS, default offline) o conectado (USD/USDC vía priceParity). La métrica energética (1 TQ = 1 kWh) es el ancla universal que hace posible la interoperabilidad entre mundos.