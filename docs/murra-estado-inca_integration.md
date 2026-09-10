# ASIMILACIÓN: Murra - La Organización Económica del Estado Inca
## Análisis e Isomorfismos con HSCSG v15 OS

**Fuente:** John V. Murra, *La organización económica del Estado Inca* (1955/1978/1987), Siglo XXI Editores  
**OCR:** 2 volúmenes, 361 páginas totales (~1.2M chars)  
**Fecha asimilación:** 2026-09-10  
**Skill:** `hscsg-repo-assimilation` → `references/murra-estado-inca.md`

---

## 1. RESUMEN EJECUTIVO

La obra fundacional de Murra establece el **"control vertical de pisos ecológicos"** (archipiélago vertical) como principio organizador de la economía inca. El Tawantinsuyu no era un estado centralizado tipo europeo, sino una **confederación de etnias** que mantenían acceso a múltiples pisos ecológicos mediante **colonias verticales** (archipiélagos). La **mita** (prestación rotativa) y la **redistribución estatal** reemplazaban al mercado. No había moneda ni comercio de larga distancia; la economía operaba via **reciprocidad asimétrica** (dopkwe/mit'a) y **redistribución centralizada** de excedentes.

---

## 2. CONCEPTOS CLAVE MURRA → HSCSG v15 OS

| Concepto Murra | Descripción | Isomorfismo HSCSG v15 OS | Módulo | Ley MJ |
|---|---|---|---|---|
| **Control Vertical / Archipiélago Vertical** | Acceso simultáneo a múltiples pisos ecológicos via colonias | **Vasos Comunicantes** (protocolos flujo valor entre nodos en diferentes "alturas") | `vasos_comunicantes.ts` | Ley III |
| **Mita / Prestación Rotativa** | Trabajo obligatorio rotativo para el Estado | **CaaS Tiers** (Visitante→Custodio) + **AUT** (autonomía via trabajo) | `caas.ts`, `metrics.ts` | Ley II |
| **Reciprocidad Asimétrica (dopkwe/mit'a)** | El Estado da protección/recursos; el súbdito da trabajo | **Trustlines** (crédito mutuo bilateral) + **Proof of Response** | `trustlines.ts`, `proofOfResponse.ts` | Ley I/II |
| **Redistribución Estatal** | Excedentes → almacenes estatales (qolqa) → redistribución | **Global Pool** + **Fondo Solarpunk** + **ZNU emission** | `lib/global_pool.ts`, `valueDual.ts` | Ley III |
| **Multi-etnicidad / Señoríos Étnicos** | Estado multi-étnico, no nación homogénea | **Federación de Nodos Soberanos** (Células 8→64→512→4096) | `celulas.ts`, `federation.ts` | Ley III |
| **Tenencia de Tierra Comunitaria** | Tierra de la comunidad (ayllu), usufructo rotativo | **Identidad Soberana** + **BaseMaterial** (tierra como materia prima) | `packages/identity/`, `store.ts` | Ley I |
| **Ganadería Estatal (rebanos)** | Capital móvil del Estado (llamas/alpacas) | **AgentMesh** (compute pool móvil) + **CaaS** | `agentMesh.ts`, `caas.ts` | Ley II |
| **Trueque / Intercambio Ritual** | No mercado, intercambio ceremonial/ritual | **Skill Marketplace** (intercambio capacidades) + **Vasos Comunicantes** | `skill_marketplace.ts` | Ley II |
| **Almacenes Estatales (qolqa)** | Infraestructura de almacenamiento/redistribución | **MemoryStore** (RAO Verification) + **IPFS/OrbitDB** | `lib/memoryStore.ts` | Ley I |
| **Cronistas / Relaciones Geográficas** | Fuentes primarias locales vs visión central | **Fuentes Índice** + **RAO Verification** (evidencia local) | `fuentes_indice.json`, `rao_verification.ts` | Ley I |

---

## 3. ANÁLISIS PROFUNDO POR LEYES MJ

### Ley I: Materia Prima Soberana
**Murra:** "La tierra pertenece a la comunidad... el usufructo es rotativo." El Estado inca no poseía la tierra; administraba el acceso. Los **señoríos étnicos** eran fuertes, cada uno con su gente, en su región.
**HSCSG:** `BaseMaterial` = tierra/agua/energía/comida/herramientas/cuerpos/semillas. `DID:hsccsg` = soberanía identitaria nativa (no concedida). `Boundaries fail-closed` protege materia prima de captura externa. **Nodos Soberanos** = ayllus modernos con tenencia comunitaria.

### Ley II: Trabajo como Fuente de Valor
**Murra:** La **mita** era la base económica — trabajo rotativo obligatorio. No había moneda; el trabajo *era* la moneda. **Rebaños estatales** = capital móvil gestionado via trabajo pastoral.
**HSCSG:** `CACVectors` → `autFromCAC` (AUT = autonomía via trabajo real). `CaaS` tiers por trabajo computacional medible. `Matchmaker` = coordinación meritocrática (35% AUT). `AgentMesh` = pool de compute móvil (como rebaños).

### Ley III: Float Soberano
**Murra:** **Redistribución** = excedentes fluyen al centro (qolqa) y vuelven como seguridad social (hambruna, guerra, rituales). **Trueque** = intercambio sin acumulación de capital. **Control vertical** = float de recursos entre pisos ecológicos.
**HSCSG:** `ZNU` + `demurrage` (5%/28d) = float que **no se acumula**. `Vasos Comunicantes` = float entre nodos en diferentes "alturas" (pisos ecológicos digitales). `Trustlines` = crédito bilateral sin intermediario. `Global Pool` = redistribución algorítmica.

---

## 4. INTEGRACIÓN TÉCNICA PROPUESTA

### 4.1 Nuevo Módulo: `murra-archipielago-vertical.ts`
```typescript
// src/core/lib/murra-archipielago-vertical.ts

interface VerticalTier {
  level: number           // 0=base (valle), 1=quechua, 2=suni, 3=puna, 4=janca
  resources: Resource[]   // recursos específicos del piso
  colonies: ColonyNode[]  // colonias verticales (archipiélago)
  autonomyIndex: number   // AUT local
}

interface ArchipelagoProtocol {
  // Flujo de recursos entre pisos (Vasos Comunicantes verticales)
  verticalFlow: VerticalFlow[]
  
  // Mita digital: contribución rotativa por tier
  mitaRotation: MitaSchedule
  
  // Redistribución algorítmica (qolqa digital)
  redistribution: RedistributionEngine
  
  // Multi-etnicidad: cada etnia = nodo soberano
  ethnicNodes: SovereignNode[]
}

class MurraArchipelago {
  // Calcula viabilidad de archipiélago vertical
  calculateViability(tiers: VerticalTier[]): ViabilityScore
  
  // Optimiza colocación de colonias (archipiélago)
  optimizeColonies(population: number, resources: Resource[]): ColonyPlan
  
  // Simula mita rotativa (prestación laboral)
  simulateMita(workforce: AgentNode[], tiers: VerticalTier[]): MitaResult
  
  // Redistribución excedentes (qolqa digital)
  redistributeSurplus(surplus: Resource[], needs: Need[]): RedistributionPlan
}
```

### 4.2 Extensiones a Módulos Existentes

| Módulo | Extensión Murra → HSCSG |
|---|---|
| `vasos_comunicantes.ts` | `VerticalFlowProtocol` — flujo entre pisos ecológicos (no solo peer-to-peer horizontal) |
| `caas.ts` | `MitaTier` — tier basado en contribución rotativa (no solo AUT) |
| `trustlines.ts` | `AsymmetricReciprocity` — dopkwe/mit'a: crédito asimétrico Estado↔Ciudadano |
| `celulas.ts` | `EthnicNodeProtocol` — célula = ayllu/etnia, multi-escala 8→64→512→4096 |
| `valueDual.ts` | `QolqaRedistribution` — almacén digital con demurrage + redistribución algorítmica |
| `skill_marketplace.ts` | `RitualExchange` — trueque ceremonial como intercambio de capacidades |

---

## 5. ÉTICA Y ALINEACIÓN HSCSG

**Resonancia profunda:** El modelo inca **ya implementaba** principios HSCSG:
- **Offline-first** = economía sin moneda, basada en memoria oral + khipu (registro local)
- **Soberanía distribuida** = señoríos étnicos autónomos dentro de confederación
- **Reciprocidad > Mercado** = Trustlines + Vasos Comunicantes
- **Redistribución algorítmica** = qolqa = Global Pool + ZNU emission
- **Trabajo como moneda** = mita = AUT/CaaS

**Diferencia clave:** Inca = **Estado centralizado** (Sapa Inca como nodo central). HSCSG = **Federación descentralizada** (no nodo central, solo protocolos Vasos Comunicantes).

**Resolución:** HSCSG toma la **geometría del archipiélago vertical** y la **reciprocidad asimétrica**, pero **elimina el centro extractivo**. Los nodos (ayllus) federan via Vasos Comunicantes sin Sapa Inca digital.

---

## 6. ARCHIVOS GENERADOS

| Archivo | Ubicación | Tipo |
|---|---|---|
| `murra-estado-inca_backup.md` | `docs/` | Backup OCR (solo local) |
| `murra-estado-inca_integration.md` | `docs/` | **Este archivo** |
| `murra-estado-inca.md` | `skills/hscsg/hscsg-repo-assimilation/references/` | Referencia skill |
| `murra-archipielago-vertical.ts` | `src/core/lib/` | **Nuevo módulo** (pendiente) |

---

## 7. PRÓXIMOS PASOS

1. **Implementar `murra-archipielago-vertical.ts`** con `VerticalTier`, `ArchipelagoProtocol`, `MurraArchipelago`
2. **Extender `vasos_comunicantes.ts`** con `VerticalFlowProtocol`
3. **Extender `caas.ts`** con `MitaTier`
4. **Extender `trustlines.ts`** con `AsymmetricReciprocity`
5. **Registrar en `fuentes_indice.json`** (fuente #123)

---

## 8. TESTING POINTS

```typescript
// Test Archipiélago Vertical
const tiers = [
  { level: 0, resources: ['maize', 'cotton'], colonies: [] },
  { level: 2, resources: ['potato', 'quinoa'], colonies: ['colony_1'] },
  { level: 4, resources: ['llama', 'alpaca'], colonies: ['colony_2'] }
]
murraArchipelago.calculateViability(tiers) // ViabilityScore > 0.8

// Test Mita Rotation
simulateMita(workforce, tiers) // cada agente rota 1/año por tier

// Test Vertical Flow
verticalFlowProtocol.transfer('maize', fromTier: 0, toTier: 2) // Via Vasos Comunicantes

// Test Redistribución
qolqaRedistribution.redistribute(surplus, needs) // algorítmica, sin centro
```

---

## 9. REFERENCIAS CLAVE MURRA

- **Cap 1-4:** Agricultura, Tenencia Tierra, Rebaños, Tejidos (base material)
- **Cap 5:** Prestación Rotativa (mita) → CaaS/MitaTier
- **Cap 6:** Reparto Excedente / Estado Redistributivo → Global Pool/ZNU
- **Cap 7:** Intercambio/Trueque → Skill Marketplace/Vasos Comunicantes
- **Cap 8:** De Mita a Servidumbre → Boundaries (protección contra captura)
- **Epílogo:** Comparación Barotse/Inca → Vasos Comunicantes cross-cultural

---

**Fin de asimilación** — `hscsg-repo-assimilation` v15.0