# CoRe Tokenomics (Commons Regenerative Economy) — Backup Quirúrgico (2026-09-05)

**Fecha de asimilación:** 2026-09-05
**Fuente original:** `Gaia Economy Layer - Commonomics & Tokenomics Explained In-Depth.md` (6.4 KB, 314 líneas) — `~/Downloads/Desktop/HSCSG dinero flores/nuevas integraciones/`
**Documento:** CoRe Tokenomics — Commons Regenerative Economy Engine — Part of the Gaia Ecosystem Architecture
**Relación con asimilación previa:** Este es el **módulo técnico profundo** del sistema de tokens CoRe, mientras que `gaia_metaplatform_integration.md` solo lo describe a nivel estratégico. Aporta detalle técnico sobre las 3 capas económicas (Contribution Ledger, Reputation/Gaia Score, Regenerative Value Circulation) y los 4 tipos de tokens (Contribution, Impact, Utility, Governance).

---

## Filosofía de Diseño (5 principios)

1. **Contribution before extraction** — Valor entra al sistema vía contribución, no especulación
2. **Reputation as coordination** — Reputación funciona como capa de confianza para interacción económica
3. **Multi-capital valuation** — Diferentes formas de valor coexisten e interactúan
4. **Bioregional adaptability** — Comunidades locales crean sus propias capas económicas
5. **Regenerative circulation** — Flujos de valor refuerzan regeneración ecológica y social

**Mapeo a HSCSG v15 OS:**
1. ≈ `cuaternidad` (pilar 1: Soberanía — no extraer, sino producir)
2. ≈ `RAO` (Registro de Auto-Ownership) + `MJ Gate` (veto ético)
3. ≈ `NetBenefit` (8 escalas) — más granular que multi-capital
4. ≈ **Tribus Fractales** (cada tribu tiene su propia moneda/capa)
5. ≈ `Fondo Solarpunk` (25% excedentes → Commons)

---

## 3 Capas Económicas (Layered Architecture)

### Layer 1: Contribution Ledger (Registro de Contribuciones)

**Tipos de contribuciones registradas:**
- Time (tiempo)
- Knowledge (conocimiento)
- Mentorship (mentoría)
- Infrastructure (infraestructura)
- Ecological restoration (restauración ecológica)
- Innovation (innovación)
- Financial investment (inversión financiera)
- Governance participation (participación en gobernanza)

**Cada contribución alimenta el sistema de reputación.**

**Mapeo a HSCSG v15 OS:**
- Ledger de contribuciones ≈ **`NetBenefitFlow`** (eventos económicos extendidos)
- Implementación actual: `src/core/state/valueflows.ts` (parcial)
- **Mejora:** Añadir tipos `mentorship`, `governance_participation`, `ecological_restoration`

### Layer 2: Reputation Layer (Gaia Score)

**Componentes del Gaia Score:**
- Contribuciones verificadas
- Historial de colaboración
- Validación de pares
- Certificaciones
- Participación en gobernanza

**Reputación desbloquea acceso a:**
- Oportunidades de financiamiento
- Roles de gobernanza
- Redes de colaboración
- Participación económica

**Regla fundamental:** Reputación **NO SE COMPRA**, solo se gana.

**Mapeo a HSCSG v15 OS:**
- Gaia Score ≈ **`RAO` (Registro de Auto-Ownership)** + **CDS Jurados**
- Implementación: `src/core/state/boundaries.ts` + `coworkers.ts`
- **Diferencia:** HSCSG usa sistema de **jurados sorteados** (CDS), Gaia usa **validación de pares + certificaciones**. HSCSG es **más verificable matemáticamente**.

### Layer 3: Regenerative Value Circulation

**Instrumentos de circulación:**
- **Mutual Credit** — Crédito extendido entre participantes basado en reputación
- **Regenerative Tokens** — Representan tiempo, impacto ecológico, infraestructura, capital financiero
- **Bioregional Currencies** — Monedas locales vinculadas a: sistemas alimentarios, energía, stewardship de tierra, servicios comunitarios

**Mapeo a HSCSG v15 OS:**
- Mutual Credit ≈ **`ZNU` (dinero off-grid con demurrage)**
- Regenerative Tokens ≈ **`NetBenefit` + `NetBenefitFlow`**
- Bioregional Currencies ≈ **`Tribu Fractal` con su propia moneda local**

---

## 4 Tipos de Tokens

### 1. Contribution Tokens
Representan contribuciones **no materiales** al ecosistema.

**Ejemplos:**
- Trabajo de colaboración y operaciones
- Conocimiento producido y mentoría brindada
- Infraestructura digital compartida

**Función:** Medir participación.

**Mapeo:** `NetBenefit` escala Social + Intelectual + Cultural

### 2. Impact Tokens
Representan **impacto regenerativo medible**.

**Ejemplos:**
- Hectáreas restauradas
- Carbono secuestrado
- Biodiversidad restaurada
- Sistemas de agua regenerados
- Horas de contribución a actividades sociales y ecológicas

**Función:** Atraer inversión de impacto.

**Mapeo:** `NetBenefit` escala Material + Energía + Ético

### 3. Utility Tokens
Representan **producción o contribución verificada** al ecosistema.

**Usos:** Transacciones de bienes y servicios dentro del ecosistema.

**Ejemplos:**
- Productos
- Servicios
- Encuentros y eventos (presenciales y online)
- Herramientas
- Tierra e infraestructura

**Mapeo:** `ZNU` (modo postmonetario) — representa trabajo verificado

### 4. Governance Tokens
Usados para participar en gobernanza del ecosistema.

**Derechos de gobernanza pueden depender de:**
- Reputación y confianza de expertise
- Historial de contribuciones
- Rol en el ecosistema

**Mapeo:** `Círculos Operativos` (en `coworkers.ts`) — voto por capacidad, no por token

---

## Flujos Económicos (Economic Flows)

```
Contribución
       ↓
Reputación
       ↓
Acceso
       ↓
Oportunidad económica
       ↓
Impacto regenerativo
```

**Participantes que contribuyen más reciben mayor acceso a oportunidades dentro del ecosistema.**

**Mapeo:** Círculos Operativos de HSCSG — pero sin "oportunidad económica" explícita como output. **Mejora:** Añadir a `CaaS-BM` un sistema de "Círculos de Contribución" donde mayor contribución en un área = mayor acceso a oportunidades cross-circulo.

---

## Integración con Gaia Market y Passports

### Gaia Market
CoRe se integra directamente con el Gaia Market. Los participantes pueden usar tokens CoRe para:
- Comprar bienes
- Acceder a servicios
- Participar en proyectos colaborativos
- Financiar iniciativas regenerativas

**Transacciones de marketplace pueden generar contribuciones al commons:**
- Pequeños porcentajes de transacciones
- Contribuciones voluntarias
- Reinversión del ecosistema

**Mapeo:** `CaaS-BM` (Contribution as Service Business Model)

### Gaia Passports
Cada Gaia Passport de un participante incluye:
- Historial de contribuciones
- Reputation Score
- Certificaciones
- Roles de gobernanza
- Balances de tokens

**Mapeo:** `DID:hsccsg` + `cultural_profiles` + `NetBenefit`

---

## Fases de Implementación (Implementation Path)

1. **Phase 1** — Contribution ledger + sistema de reputación
2. **Phase 2** — Utility tokens + Mutual credit system para transacciones del ecosistema
3. **Phase 3** — Impact tokens para regeneración ecológica
4. **Phase 4** — Bioregional regenerative currencies
5. **Phase 5** — Full multi-capital planetary economy layer

**Mapeo a HSCSG v15 OS:** Las fases 1-3 ya están **implementadas o en desarrollo**. Las fases 4-5 (Bioregional currencies + Full multi-capital) son el **alcance futuro**.

---

## Anti-Speculation Design (Diseño Anti-Especulación)

**Mecanismos:**
- Participación ponderada por reputación
- Emisión basada en contribución
- Incentivos alineados con el ecosistema
- Desbloqueo gradual de privilegios económicos

**Mapeo a HSCSG v15 OS:**
- `ZNU con demurrage` (5%/año) — evita acaparamiento
- `Frontera de Riqueza` (Bounded Wealth) — limita acumulación por tribu
- `priceParity oracle` (Nivel 3) — desvincula tokens locales de especulación fiat
- **Alineación 1:1 con principios CoRe**

---

## Implementación Técnica en HSCSG v15 OS

### Token System Architecture

```typescript
// En src/core/lib/tokens.ts
type GaiaTokenType = 'CONTRIBUTION' | 'IMPACT' | 'UTILITY' | 'GOVERNANCE';

type Token = {
  id: string;
  type: GaiaTokenType;
  symbol: string; // e.g., "GAIAUSD", "TERRA", "GAIAWTS"
  backing: 'fiat' | 'land' | 'ecological' | 'production' | 'time' | 'social' | 'commons';
  decimals: number;
  totalSupply: bigint;
  circulatingSupply: bigint;
  metadata: {
    description: string;
    // ...
  };
};

type Contribution = {
  id: string;
  contributorId: string;
  type: 'TIME' | 'KNOWLEDGE' | 'MENTORSHIP' | 'INFRASTRUCTURE' | 'ECOLOGICAL' | 'INNOVATION' | 'FINANCIAL' | 'GOVERNANCE';
  quantity: number; // hours, hectares, etc.
  unit: string;
  verified: boolean;
  verifiedBy?: string; // juror ID
  timestamp: number;
  // ...
};

type GaiaScore = {
  userId: string;
  contributions: number;
  collaborations: number;
  validations: number;
  certifications: number;
  governanceParticipations: number;
  totalScore: number;
  tier: 'NOVICE' | 'CONTRIBUTOR' | 'GUARDIAN' | 'STEWARD' | 'VISIONARY';
};
```

### Mutual Credit System

```typescript
// En src/core/lib/mutual_credit.ts
type MutualCreditAccount = {
  memberId: string;
  balance: bigint; // Puede ser positivo (recibir más de lo que diste) o negativo
  creditLimit: bigint; // Basado en reputación
  transactions: MutualCreditTx[];
};

type MutualCreditTx = {
  id: string;
  from: string;
  to: string;
  amount: bigint;
  timestamp: number;
  description: string;
  // ...
};
```

---

## Conceptos NO cubiertos previamente (nuevos para HSCSG v15 OS)

1. **3 capas económicas explícitamente definidas** — Contribution Ledger, Reputation Layer, Value Circulation (HSCSG tenía las 2 últimas pero no la primera como separada)
2. **4 tipos de tokens clasificados** — Contribution, Impact, Utility, Governance (HSCSG tiene ZNU, priceParity, NetBenefit pero no clasificados así)
3. **Anti-speculation design como principio explícito** — HSCSG tiene demurrage en ZNU pero no como "principio de diseño"
4. **Multi-capital valuation** — HSCSG tiene 8 escalas de NetBenefit pero no articuladas como "multi-capital"
5. **Bioregional currencies como capa separada** — HSCSG tiene Tribus Fractales con su propia moneda pero no formalizado como "Bioregional Currencies"
6. **Reputación NO se compra** — Principio explícito que HSCSG asume en RAO pero no documenta
7. **5 fases de implementación** — Roadmap claro (HSCSG tiene Funnel de Transición pero menos granular)

---

## Diferencias con gaia_metaplatform_integration.md (asimilación previa)

| Aspecto | gaia_metaplatform_integration.md | CoRe Tokenomics |
|---------|-----------------------------------|-----------------|
| Profundidad | Estratégico | Técnico |
| Tokens | CoRe multi-activo (5 niveles) | 4 tipos + Gaia Tokens multi-tipo |
| Capas económicas | Implícitas | 3 capas explícitas |
| Anti-speculation | Mencionado | Principio de diseño |
| Implementación | Roadmap macro | 5 fases detalladas |

**Conclusión:** CoRe Tokenomics es **la especificación técnica** de lo que gaia_metaplatform describe a nivel estratégico. Ambos son **complementarios** y necesarios.

---

## Anexo: Lista de archivos fuente

| Archivo | Tamaño | Líneas | Estado |
|---------|--------|--------|--------|
| `Gaia Economy Layer - Commonomics & Tokenomics Explained In-Depth.md` | 6.4 KB | 314 | ✅ Asimilado |
| Backup local | — | — | `~/Documents/HSCSG_BACKUPS/2026-09-05-nuevas-integraciones/` |

---

*Documento generado el 2026-09-05*
