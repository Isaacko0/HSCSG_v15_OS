# Libro Ecoaldeas Federadas — Backup Quirúrgico (2026-09-05)

**Fecha de asimilación:** 2026-09-05
**Fuente original:** `Libro Ecoaldeas Federadas - Completo.md` (103K, 862 líneas) — depositado en `~/Downloads/Desktop/HSCSG dinero flores/nuevas integraciones/`
**Versión digital:** Manual para la Soberanía Integral y la Transición Civilizatoria
**Relación con asimilación previa:** Este es el **volumen expandido** del manifiesto que ya teníamos en `ecoaldea_monte_backup.md` (41 docs técnicos + página pública de la Red de Intercambio Federada Ecoaldea Raíces del Monte). El Libro es la versión **libro/manual** completa de la filosofía y arquitectura del sistema de trueque termodinámico (TQ = 1 kWh), los 5 pilares del saldo cero, el catálogo energético ICE/Ecoinvent, y la prohibición cambiaria. Aporta profundidad conceptual y pedagógica que el backup técnico previo no cubría.

---

## Índice General

- **Prólogo** — Colapso del sistema fiduciario + transición civilizatoria
- **PARTE I — Filosofía Conuquera y el Modelo de Vida**
  - Cap. 1: El Horizonte del Conuco y la Agroecología
  - Cap. 2: Rescate de los Saberes Ancestrales (bahareque, ollas de barro, botica conuquera, "de campesino a campesino")
  - Cap. 3: El Sueño del "Campo Soberano" (4 pilares + ciclo cerrado + 5 sistemas de infraestructura)
  - Cap. 4: Diversidad e Inclusión Universal (conucos aislados + cooperativas urbanas + personas naturales; filtro de comercio)
- **PARTE II — La Única Regla Inquebrantable**
  - Cap. 5: El Cambio de Paradigma Monetario (TQ como "cinta métrica" de reciprocidad, no riqueza)
  - Cap. 6: La Termodinámica del Valor (1 TQ = 1 kWh = 3.6 MJ; emergía; tarifa base 1 TQ/hora; multiplicadores 1.0/1.15/1.3)
  - Cap. 7: La Prohibición Cambiaria (TQ ≠ fiat/cripto; pasarelas de bienes tangibles)
- **PARTE III — Economía de Saldo Cero y Protección contra la Desigualdad**
  - Cap. 8: Los 5 Pilares (punto cero, crédito mutuo, límites simétricos, techo contra acumulación, respaldo energético)
  - Cap. 9: El Límite Simétrico (±500 TQ = 1 mes de canasta básica; circulación como vacuna)
  - Cap. 10: Confianza Progresiva y Organizaciones (escalones: 500/1000/sin tope; organizaciones unipersonales permitidas; multi-firma)
  - Cap. 11: El Catálogo Energético (E. Directa + E. Insumos + E. Trabajo + E. Transporte; bases ICE/Ecoinvent/Agribalyse; caso pan artesanal = 12 TQ)
- **PARTE IV — Gobernanza Soberana**
  - Cap. 12: Autonomía Total de las Ecoaldeas (soberanía local)
  - Cap. 13: La Ley de la Aldea y la Asamblea (deberes, permitido, prohibido, faltas; 3 niveles de gobernanza)
  - Cap. 14: Tenencia de la Tierra (fideicomiso, usufructo, cooperativa)
  - Cap. 15: Impuestos y el Fondo Comunitario (tasas progresivas, regla de oro: nunca a individuos)
- **PARTE V — Infraestructura y Soberanía Tecnológica**
  - Cap. 16: Arquitectura de la Red Federada (mTLS, gossip, YugabyteDB, OpenWrt, WireGuard, IPv6 ULA, hash chain ledger)
  - Cap. 17: Hardware Soberano y POS Android (ESP32 + NFC, modos Keypad/Web/Touch/Community; QR con polling; multi-firma; ed25519 + AES-256-GCM + ephemeral ECDH)
  - Cap. 18: Seguridad y Soberanía Digital (Forward Secrecy, Matrix, PeerTube, Gitea, BigBlueButton, VoIP)
- **PARTE VI — El Ecosistema Global y la Transición Civilizatoria**
  - Cap. 19: El Comercio Intercomunitario (cross-node: bilateral limits, isolated pools, BIN-style cards)
  - Cap. 20: Soberanía del Territorio y Federación de Productos (ProductProposal, veto de productos por asamblea)
  - Cap. 21: El Puente de Comercio Externo (DEX, FC basado en canasta básica)
  - Cap. 22: El Futuro: Autonomía Progresiva (sellado de la "escotilla" de dependencia)
- **Conclusión** — El Alba de una Nueva Civilización

---

## Conceptos Clave para HSCSG v15 OS

### 1. Anclaje termodinámico del valor
> **1 TQ = 1 kWh = 3.6 MJ** (constante física inmutable)

El TQ NO es dinero ni criptomoneda: es una **cinta métrica de reciprocidad**, anclada a la termodinámica (Odum, emergía). Esto resuelve el problema de la inflación porque la energía no se devalúa. **Implicación para HSCSG:** Es el mismo principio del `priceParity oracle` (anclar valor a constante física) pero con una constante más profunda (kWh en lugar de USD). Mapeo directo a Pilar 11 (Producción) y Pilar 5 (Economía) de Cuaternidad Soberana.

### 2. Los 5 Pilares del Saldo Cero
1. **Punto de partida sin capital previo** — Saldo inicial = 0 TQ
2. **Crédito mutuo dinámico** — Suma algebraica de todos los saldos = 0
3. **Límite inferior (piso negativo)** = -500 TQ (red de seguridad)
4. **Límite superior (techo positivo)** = +500 TQ (anticuerpo contra acaparamiento)
5. **Respaldo en energía física real** (1 TQ = 1 kWh)

**HSCSG Mapeo:** Esta es la versión termodinámica del **Fondo Solarpunk** (25% excedentes) + **Fideicomiso tierra inalienable** + **Bounded Wealth** (convergencia entre commons/capital). Los 5 Pilares son un algoritmo de nivel 1 (cuantitativo) de lo que HSCSG implementa como un protocolo de nivel 2 (constitucional).

### 3. Multiplicadores de esfuerzo físico
- Factor 1.0 (1 TQ/hora): administrativo, educación, cuidados
- Factor 1.15: técnico especializado
- Factor 1.3: esfuerzo físico extremo (labor agrícola pesada, bioconstrucción)

**HSCSG Mapeo:** **NetBenefit** de HSCSG v15 OS mide el valor en **8 escalas** (Material, Energía, Humano, Social, Cultural, Intelectual, Ético, Espiritual). La equivalencia:
- TQ × 1.0 (admin) ≈ NetBenefit escala Social + Intelectual + Ético
- TQ × 1.15 (técnico) ≈ NetBenefit escala Intelectual + Cultural
- TQ × 1.3 (físico) ≈ NetBenefit escala Material + Energía

El TQ colapsa las 8 escalas de NetBenefit en **3 categorías operativas**. HSCSG es **más granular pero más complejo**; Ecoaldeas es **más simple pero termodinámicamente ancla-do**.

### 4. Prohibición cambiaria + Pasarelas de bienes tangibles
> **TQ ≠ Fiat/Cripto** (intercambio directo prohibido)
> **Única vía:** Conversión fiat→bienes físicos→TQ (entrada) / TQ→bienes físicos→fiat (salida)

**HSCSG Mapeo:** Es exactamente la implementación **estricta** del principio anfibio de HSCSG v15 OS:
- Modo `postmonetario` (default offline): solo TQ/ZNU/CoRe
- Modo `conectado` (opcional): USD via `priceParity oracle`

La diferencia: HSCSG permite **puente directo** entre ZNU y USD vía oracle (Nivel 3 ReFi), mientras que Ecoaldeas **prohíbe** el puente directo y obliga a la conversión a través de **bienes tangibles reales**. **Decisión de HSCSG:** Adoptar la prohibición cambiaria directa como **modo seguro por defecto**, manteniendo el oracle solo como nivel 3 opcional para evitar acaparamiento especulativo.

### 5. Límite simétrico ±500 TQ
> Si piso = -500, techo = +500. La simetría es absoluta.

**Cálculo subyacente:** 444 TQ = costo energético (kWh) para alimentar una familia de 4 personas durante 1 mes. Se redondea a 500 TQ como margen de seguridad.

**HSCSG Mapeo:** El **Fideicomiso tierra inalienable** + **Círculos Operativos** de Ecoaldeas Raíces son la versión **estructural** de este límite simétrico. En HSCSG v15 OS, el equivalente es el **Bounded Wealth** de la CaaS-BM (límite de acumulación por tribu fractal).

### 6. Catálogo Energético (ICE/Ecoinvent)
Fórmula: `E. Total = E. Directa + E. Insumos + E. Trabajo + E. Transporte`
- E. Directa: electricidad/gas/leña local
- E. Insumos: energía embebida en materias primas
- E. Trabajo: horas humanas × tarifa (con multiplicadores)
- E. Transporte: km × energía por km

**HSCSG Mapeo:** Esto es **exactamente el algoritmo de cálculo** del **NetBenefitFlow** en HSCSG v15 OS. La diferencia es que HSCSG incluye **capital cultural, ético y espiritual** como inputs adicionales, mientras Ecoaldeas se limita a lo termodinámicamente medible.

### 7. Catálogo Federado + Filtro de Productos
> Si Ecoaldea A prohíbe carne, el sistema bloquea la venta a miembros de A aunque venga de otra ecoaldea. **Soberanía cultural digitalmente enforced.**

**HSCSG Mapeo:** Es el `Boundaries CEL` con `deny>allow` + `RepeatDetector` aplicado a nivel de productos, no solo de acciones. **Implementación nueva en HSCSG v15 OS:** Añadir al CEL `deny_product` que tome lista de productos vetados por nodo y los bloquee en transacciones cross-node.

### 8. Federación Técnica: mTLS + Gossip + Hash Chain + Reconciliación off-grid
**Arquitectura detallada:**
- **mTLS** para conexiones servidor-servidor (certificados mutuos)
- **Gossip protocol** para propagación eficiente (nuevas ecoaldeas, productos federados)
- **YugabyteDB** (PostgreSQL distribuido) para nodos soberanos
- **Hash chain** para ledger inmutable (cada tx incluye hash de la anterior)
- **OpenWrt + WireGuard + IPv6 ULA** para intranet soberana
- **Reconciliación al reconectar** (comparar last_hash, intercambiar divergencias)
- **Nodo satélite** (cache offline + cola eventos para nodos sin internet)

**HSCSG Mapeo:** `src/core/lib/federation.ts` ya implementa parte de esto. **Mejoras pendientes:**
- mTLS específico (hoy usa HTTPS genérico)
- Gossip protocol para BioRegions
- Reconciliación off-grid explícita

### 9. Hardware Soberano
**ESP32 + PN532 (NFC) + OLED + Encoder rotatorio** como terminal fijo. **Modos:**
- Keypad (encoder + PIN)
- Web (monto vía browser)
- Touch (TTGO T-Display táctil)
- Community (doble tarjeta: vendedor y comprador)

**Tarjetas NTAG424 DNA / DESFire EV3** (anti-clonación, criptografía asimétrica).

**HSCSG Mapeo:** Es la **implementación física** de los skills Hermes. La **Tarjeta NFC** es análoga al `DID:hsccsg` + credenciales verificables. **Implementación sugerida:** Crear skill `hscsg-nfc-wallet` que replique este patrón usando smartphones Android/iOS como lectores NFC.

### 10. Soberanía del Territorio + Federación de Productos
- `ProductProposal` se envía por Gossip entre nodos
- Asamblea local del nodo receptor **debe aprobar** el producto antes de federarlo
- **Regla estricta:** si un solo ingrediente está prohibido, el producto compuesto se bloquea

**HSCSG Mapeo:** `boundaries.ts` puede extenderse con `ProductBoundary` que tome:
```typescript
type ProductBoundary = {
  productId: string;
  ingredients: string[];
  deniedIngredients: string[];
  culturalContext: string;
};
```

---

## Conceptos NO cubiertos previamente (nuevos para HSCSG v15 OS)

1. **Filtro de catálogo federado con veto por ingrediente individual** — Sistema más granular que el `deny_product` actual
2. **Hardware NFC soberano con ESP32** — Implementación física no contemplada antes
3. **Catálogo Energético ICE/Ecoinvent/Agribalyse** — Bases de datos científicas específicas
4. **Prohibición cambiaria estricta** — Modo anfibio con regla más conservadora
5. **Multiplicadores de esfuerzo físico en tarifa** — Codificación cuantitativa del reconocimiento del trabajo físico
6. **Bahareque + Cayapa** como tecnología de construcción soberana + metodología de trabajo colectivo
7. **Padrino/Mentor** en `ecoaldea_monte_backup` pero más detallado en este Libro (ver Cap. 10)
8. **Sistema de Padrino/Mentor como implementación del principio "de campesino a campesino"** — Pedagogía horizontal

---

## Diferencias con ecoaldea_monte_backup (asimilación previa del 2026-09-02)

| Aspecto | ecoaldea_monte_backup | Libro Ecoaldeas Federadas |
|---------|------------------------|----------------------------|
| Formato | Documentación técnica fragmentada (43 docs + HTML) | Manual pedagógico continuo (22 capítulos) |
| Audiencia | Implementadores/desarrolladores | Educadores/comunidades |
| Foco técnico | mTLS, NFC, sandbox Goja, hash chain | Pedagogía + termodinámica + gobernanza |
| Profundidad TQ | ±500 TQ (definido brevemente) | Anclaje termodinámico completo (1 kWh, 3.6 MJ, emergía) |
| Multiplicadores | Mencionados (1.0/1.15/1.3) | Detallados con justificación biofísica |
| Hardware | ESP32 + NFC mencionado | 4 modos (Keypad/Web/Touch/Community) + tarjeta NTAG424 DNA |
| Pedagogía | No | "De campesino a campesino" + Cayapa + Bahareque |

**Conclusión:** El Libro es **complementario** (no contradictorio). Aporta:
- Profundidad conceptual (termodinámica, emergía)
- Pedagogía (transmisión de saberes ancestrales)
- Implementación detallada (4 modos NFC, 4 ingredientes del catálogo)

---

## Anexo: Lista de archivos fuente

| Archivo | Tamaño | Líneas | Estado |
|---------|--------|--------|--------|
| `Libro Ecoaldeas Federadas - Completo.md` | 103 KB | 862 | ✅ Asimilado |
| Backup local | — | — | `~/Documents/HSCSG_BACKUPS/2026-09-05-nuevas-integraciones/` |

---

*Documento generado el 2026-09-05 por el sistema de asimilación HSCSG v15 OS — hscsg-repo-guard skill v0.1.0*
