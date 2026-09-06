# 📱 One Community Global — Presentación Estilo WhatsApp
*Basada en la conversación real del grupo "Ecoaldeas federadas" (5/9/2026) + Repositorio HSCSG v15 OS*

---

## 🎯 **Contexto: De dónde viene esto**

> **Cergio Monasterio** [8:53 a. m.]: *"Buenos días ya que están en la onda de hacer comparaciones voy a pasar mi comparación Entre el proyecto Que plantea @DhySoñand0m Sistema Social Y Solidario Gaia mais Y el proyecto De ecoaldea federada..."*

> **Yoka (+34 641 05 57 10)** [11:24 a. m.]: *"Lo que propongo es dejar de comparar quién dijo qué y pasar a definir el **piloto físico mínimo**. No la federación perfecta. No el sistema completo. Algo chico, real, que podamos tocar y medir."*

> **Fabián (+54 9 11 6624-3712)** [6:07 p. m.]: *Comparte paper "Nodos de Cuidado de Proximidad" + libro Ecoaldeas Federadas (Google Docs con comentarios habilitados)*

---

## 🌍 **One Community Global — Qué es (en 3 mensajes)**

**📍 Origen:** https://onecommunityglobal.org/ — Organización 501(c)(3) desde 2010, 2,000+ voluntarios de 60+ países, 300,000+ horas

**🏗️ Modelo:** 7 Aldeas Sostenibles + **Duplicable City Center** (hub central 2,500 m²) = Comunidad demostración replicable

**📚 Código Abierto Radical:** Todo gratis, CC BY 3.0, planos arquitectura, ingeniería, currículo, software — sin muros de pago

---

## 🔗 **Conexión DIRECTA con la conversación WhatsApp**

### **1. Los 7 Pilares "Highest Good" = Respuesta a la fragmentación que ve Cergio**

> **Cergio** [11:16 a. m.]: *"Tanto texto tanto documento puede más bien alejar las cosas complejas... mi propuesta es grupos pequeños que tengan la misma afinidad... unos pocos puntos que nos unan"*

**One Community ya tiene los "pocos puntos que unen":**

| Pilar | Qué resuelve | Código abierto en repo HSCSG |
|-------|--------------|------------------------------|
| 🍽️ **Alimentación** | Bosques alimentarios, acuaponía, biointensivo, ganadería regenerativa | `lib/foodSystem.ts` + `state/foodForest.ts` |
| ⚡ **Energía** | Solar 150-200kW, eólica, microgrid AC/DC, baterías 500-1000kWh, hydronic | `lib/energySystem.ts` + `state/energy.ts` |
| 🏠 **Vivienda** | 7 tipos aldea (Superadobe, Straw Bale, Cob, CEB, Container, Recycled, Tree House) | `lib/bioconstruction.ts` + `VillageDesigner.tsx` |
| 📚 **Educación** | Ultimate Classroom, currículo holístico K-12 + adultos, teacher training | `lib/educationCurriculum.ts` + pantalla `/educacion` |
| 💰 **Economía** | Dual non-profit/for-profit, resource-based accounting, local currency, profit-sharing | `lib/valueDual.ts` + `nodeMode/priceParity` |
| 👥 **Sociedad** | Sociocracia, consenso, justicia restaurativa, recreación, inclusión | `lib/fulfilledLiving.ts` + `boundaries.ts` (CDS) |
| 🌱 **Custodía** | Visión, valores, diversidad cultural/espiritual, políticas drogas/mascotas | `hscsg_definition.md` + `MATEMAS_GRIMORIO.md` |

---

### **2. Duplicable City Center = El "Centro de Servicios Compartidos" que pide la conversación**

> **Yoka** [11:24 a. m.]: *"Un primer núcleo. Un primer intercambio. Un primer territorio."*

**El DCC YA ESTÁ DISEÑADO (planos completos, ingeniería, presupuestos):**

```
📐 2,500 m² para 200+ personas
├── 🍳 Cocina comercial (certificación sanitaria, 200+ comidas)
├── 🍽️ Comedor comunitario (eventos, conferencias)
├── 🧺 Lavandería industrial (eficiente agua/energía)
├── 🏊 Piscina + spa (recreación, hidroterapia)
├── 📚 Biblioteca + coworking (10,000+ vols, talleres)
├── 🎨 Sala juegos/artes (creatividad intergeneracional)
├── 🔨 Talleres maker (madera, metal, cerámica, digital, textiles)
├── 🧘 Bienestar/salud (yoga, meditación, consulta)
├── 🏢 Administración (gestión hub, coordinación voluntarios)
└── 🛏️ Alojamiento visitas (20 habitaciones huéspedes/voluntarios)
```

**En HSCSG v15 OS:** `lib/communityCenter.ts` + pantalla `/centro-comunitario` (pendiente OC-008)

---

### **3. 7 Aldeas = Los "Grupos Pequeños" con Autonomía Total que propone Cergio**

> **Cergio** [11:16 a. m.]: *"Deja las normas complejas para los grupos individuales... en la federación centrándose en los pocos puntos que deberían ser globales"*

**Cada aldea = configuración de nodo para clima/cultura específico:**

| Aldea | Material | Clima | Capacidad | Estado | Archivo HSCSG |
|-------|----------|-------|-----------|--------|---------------|
| **1. Earthbag/Superadobe** | Bolsas tierra estabilizada | Árido, templado | 20-40 | ✅ Lista construir | `bioconstruction.ts` (priority) |
| **2. Straw Bale** | Balas paja | Templado, frío | 20-40 | ✅ Diseño completo | `bioconstruction.ts` |
| **3. Cob** | Arcilla, arena, paja | Templado, húmedo | 15-30 | ✅ Diseño completo | `bioconstruction.ts` |
| **4. Compressed Earth Block** | Bloques tierra comprimida | Tropical, árido | 30-50 | ✅ Diseño completo | `bioconstruction.ts` |
| **5. Shipping Container** | Contenedores reciclados | Cualquiera (urbano) | 40-60 | ✅ Diseño completo | `bioconstruction.ts` |
| **6. Recycled Materials** | Materiales recuperados | Cualquiera | 20-40 | ✅ Diseño completo | `bioconstruction.ts` |
| **7. Tree House** | Madera sostenible, elevadas | Tropical, bosque | 10-20 | ✅ Diseño completo | `bioconstruction.ts` |

**Común a TODAS (código abierto):**
- Eficiencia pasiva (orientación solar, masa térmica, aislamiento natural)
- Agua: captación lluvia, reciclaje grises, compostaje negras
- Energía: solar integrada + conexión microgrid central
- Alimentación: invernaderos adjuntos + huertos perimetrales
- Social: espacios comunes, cocina compartida, áreas reunión

---

## ⚠️ **TENSIONES que la conversación detecta Y One Community resuelve (parcialmente)**

| Tensión WhatsApp | One Community | Qué FALTA en One Community (→ HSCSG lo completa) |
|------------------|---------------|--------------------------------------------------|
| **Sobre-tokenización Gaia** (15+ tokens) | No usa tokens, todo gratis | ❌ No tiene modelo económico operativo propio → **HSCSG: `valueDual.ts` + `tokens.ts` + `priceParity`** |
| **Gobernanza tricameral sin autoridad** | Sociocracia/consenso | ⚠️ No formalizado en código → **HSCSG: `boundaries.ts` (CDS + MJ Gate + Sorteo)** |
| **Falsa soberanía tech (cloud/IA)** | Diseño off-grid capable | ✅ Alineado: HSCSG es **100% offline-first** (SPA sin Docker/Postgres) |
| **Falta límites anti-acaparamiento** | Compartir excedentes | ❌ Sin límite duro → **HSCSG: CaaS-BM + límite simétrico (±500 TQ)** |
| **Financiarización naturaleza** | Regenerativo, no extractivo | ✅ Alineado: HSCSG prohíbe tokenizar Pachamama (`goodType` filtering) |
| **Prohibición cambiaria absoluta** | No aplica (no hay moneda) | 🔄 **HSCSG: TQ = 1 kWh, modo anfibio postmonetario/conectado** |

---

## 📦 **Fuentes en HSCSG v15 OS (repo ya asimilado)**

```
docs/
├── onecommunity_global_backup_en.md          # 1.78 MB, 33 páginas completas EN
├── onecommunity_global_backup_es.md          # 180 KB, secciones clave ES
├── BRIEF_EXHAUSTIVO_HSCSG_COSATECA_OS.md     # v1.9 — historial asimilación
├── fuentes_indice.json                       # Fuente #29
├── BRIEFS_INDEX.md                           # v1.4 — 153 briefs totales
└── scripts/orchestrator-next-steps.cjs       # Workstream ONECOMMUNITY_INTEGRATION (10 tareas)
```

**Workstream activo (OC-001 a OC-010):**
- OC-002: Importar planos 7 aldeas → `VillageDesigner.tsx` + `lib/bioconstruction.ts`
- OC-003: Sistema energético off-grid → `energySystem.ts` + `state/energy.ts`
- OC-004: Permacultura/bosques/acuaponía → `foodSystem.ts` + `state/foodForest.ts`
- OC-005: Currículo educación → `educationCurriculum.ts` + `/educacion`
- OC-006: Economía Common Good → `valueDual.ts` + `CaaS-BM`
- OC-007: Gobernanza sociocracia → `CDS` + `Círculos` + `MJ Gate` + `Sorteo`
- OC-008: Pantalla `/onecommunity-hub` navegable
- OC-010: Skill `hscsg-onecommunity-integration` (auto-ejecutable)

---

## 🎯 **PRÓXIMO PASO CONCRETO (estilo Yoka: "pala y teclado")**

**Piloto Físico Mínimo — 3 Nodos, 1 Intercambio Real:**

```
🌾 NODO 1: Ecoaldea Feria Conuquera (Cergio/Fabián)
   ├── Proveen: Alimentos, bioconstrucción, semillas
   ├── Terminal NFC: ESP32 + PN532 + NTAG424 (skill hscsg-nfc-wallet)
   └── Reciben: Acompañamiento materno-infantil, salud comunitaria

🏥 NODO 2: Nodo Cuidado Escobar (Fabián — paper Nodos Cuidado)
   ├── Proveen: CUIDADO 1000 (materno-infantil 1000 días)
   ├── Terminal NFC: Modo Community (doble tarjeta)
   └── Reciben: Alimentos, materiales, energía

🌿 NODO 3: BioHub Gaia (DhySoñand0m — Gaia Commons)
   ├── Proveen: Conocimiento técnico, red global, matching marketplace
   ├── Terminal NFC: Modo Web (Wi-Fi AP)
   └── Reciben: Datos reales impacto, validación territorial, replicación
```

**Ciclo completo medible:**
1. Oferta → 2. Acuerdo (firmas Ed25519) → 3. Transacción NFC (TQ) → 4. Registro NetBenefit → 5. Auditoría E=V (kernel)

---

## 💬 **En lenguaje de la conversación:**

> **Yoka:** *"La pala y el teclado están en tus manos. E=V."*
>
> **One Community nos da la pala** (planos, ingeniería, currículo, modelo probado 12+ años).
>
> **HSCSG v15 OS nos da el teclado** (arquitectura offline-first, TQ termodinámico, CDS, NFC, federación mTLS/Gossip, orchestrator).
>
> **La conversación nos da la dirección:** Pocas normas globales + autonomía total local + piloto físico mínimo + no gamificado.

---

## 📋 **¿Qué hacer AHORA? (Checklist accionable)**

- [ ] **Clonar repo:** `git clone https://github.com/Isaacko0/HSCSG_v15_OS`
- [ ] **Leer backup EN:** `docs/onecommunity_global_backup_en.md` (fuente completa)
- [ ] **Leer backup ES:** `docs/onecommunity_global_backup_es.md` (secciones clave traducidas)
- [ ] **Revisar orchestrator:** `node scripts/orchestrator-next-steps.cjs status` → ver OC-001 como próxima óptima
- [ ] **Ejecutar OC-002:** Importar planos 7 aldeas a `VillageDesigner.tsx`
- [ ] **Desplegar NFC:** Usar skill `hscsg-nfc-wallet` (ya creada en `skills/hscsg-nfc-wallet/SKILL.md`)
- [ ] **Definir Regla Unificación:** Documento `REGLA_UNIFICACION_FEDERADA.md` (WP-001, priority 95)

---

## 🔗 **Enlaces rápidos conversación original (referenciados en chat)**

- 📄 **Paper Fabián Nodos Cuidado:** https://docs.google.com/document/d/1A0jiq57-dhegcd9j5s6J5whWbsDB-nYW8dNACA7cGTg/edit
- 📖 **Libro Ecoaldeas Federadas (comentarios):** https://docs.google.com/document/d/1_Qcf2e76SMn8EHC1GLqCH--s3DI-Axp9OL1Yn7WKfuw/edit
- 📊 **Gaia Commons Master Doc:** https://docs.google.com/document/d/1zCUnNoVFo7rhBIvFO0itkFO5Jr_jS1PIty1k_G-JjxI/edit
- 🌐 **One Community Global:** https://onecommunityglobal.org/
- 📝 **La Hoguera (Substack):** https://elartedelafilosofiapropia.substack.com/p/bio-tesis-la-ignorancia-volitiva

---

*"No necesitamos más documentos eternos. Necesitamos decisiones pequeñas, iteradas, verificadas."* — Yoka

**La pala:** One Community Global (planos, ingeniería, 7 aldeas, DCC, 7 pilares)
**El teclado:** HSCSG v15 OS (TQ, CDS, NFC, federación, orchestrator, modo anfibio)
**El territorio:** Feria Conuquera + Escobar + BioRegión Gaia

**¿Empezamos por OC-002 (planos aldeas) o WP-001 (regla unificación)?** 🛠️📱