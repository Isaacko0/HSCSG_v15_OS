# MARCO LEGAL DE PROTECCIÓN PARA RETORNO FINANCIERO
## Assimilación de Repos Externos en HSCSG v15 OS — Análisis Loophole + Mike

**Fecha:** 2026-09-10  
**Versión:** 1.0  
**Clasificación:** CONFIDENCIAL — Marco legal obligatorio para todo uso comercial  
**Basado en:** Análisis `brendanhogan/loophole` + `open-legal-products/mike`  
**Complementa:** `LEGAL_NOTICE.md` + `HOMOLOGACION_TERMINOS_PEPE_SEVILLA_HSCSG.md`

---

## 1. ANÁLISIS DE LICENCIAS DE REPOS ASIMILADOS

### 1.1 Matriz de Licencias Identificadas

| Repo | Licencia | Tipo | Implicación Comercial | Riesgo |
|------|----------|------|----------------------|--------|
| `brendanhogan/loophole` | **MIT** (implícita, no declarada explícitamente) | Permisiva | Uso comercial libre, atribución requerida | **BAJO** |
| `open-legal-products/mike` | **AGPL-3.0** | Copyleft fuerte | **Código derivado debe ser AGPL-3.0**; SaaS = distribución | **ALTO** |

### 1.2 Análisis Detallado AGPL-3.0 (Mike)

> **AGPL-3.0 §13:** "Si modificas el Programa, y lo ejecutas en un servidor para que otros lo usen a través de una red, debes ofrecerles la oportunidad de recibir el código fuente completo."

**Implicaciones para HSCSG:**
| Escenario | ¿Trigger AGPL? | Acción Requerida |
|-----------|----------------|------------------|
| Usar Mike como librería en backend HSCSG | **SÍ** (si se modifica o enlaza dinámicamente) | Liberar código fuente completo HSCSG bajo AGPL-3.0 |
| Ejecutar Mike como microservicio separado (API) | **DEBATE** (AGPL §13: "interactúa con usuarios a través de una red") | Riesgo alto: mejor asumir SÍ |
| Usar Mike solo como CLI local (sin red) | NO | Seguro |
| Forkear Mike y modificar + SaaS | **SÍ** | Liberar todo bajo AGPL-3.0 |
| Usar solo ideas/patrones de Mike (sin código) | NO | Seguro (ideas no protegibles) |

---

## 2. ESTRATEGIA DE PROTECCIÓN LEGAL (CAPAS)

### Capa 1: ARQUITECTURA DE AISLAMIENTO (Técnica)

```
┌─────────────────────────────────────────────────────────────┐
│                    HSCSG v15 OS CORE                         │
│  (Licencia propia / Propietaria / MIT / Apache-2.0)         │
│                                                              │
│  ┌─────────────────┐  ┌─────────────────┐                   │
│  │  MIKE WRAPPER   │  │ LOOPHOLE WRAPPER│                   │
│  │  (Microservicio) │  │  (CLI Local)    │                   │
│  │  AGPL-3.0       │  │  MIT            │                   │
│  └────────┬────────┘  └────────┬────────┘                   │
│           │                    │                             │
│           ▼                    ▼                             │
│  ┌─────────────────────────────────────────┐                │
│  │       HSCSG ADAPTER LAYER               │                │
│  │  (Interfaz abstracta, no código Mike)   │                │
│  └─────────────────────────────────────────┘                │
└─────────────────────────────────────────────────────────────┘
```

**Regla de Oro:** **NUNCA** importar código Mike directamente en el core HSCSG. Siempre vía **microservicio aislado + API definida**.

### Capa 2: ESTRATEGIA DE LICENCIAMIENTO DUAL (Legal)

| Componente | Licencia HSCSG | Licencia Upstream | Estrategia |
|------------|----------------|-------------------|------------|
| **Core HSCSG** (autómata, MMA, MTP, etc.) | **MIT / Apache-2.0** | Propia | Licencia permisiva propia |
| **Mike Wrapper** | **AGPL-3.0** | AGPL-3.0 (Mike) | Cumplimiento estricto |
| **Loophole Wrapper** | **MIT** | MIT (Loophole) | Compatible |
| **Adapters/Interfaces** | **MIT** | Propia | Propia, no derivada |
| **Documentación** | **CC-BY-4.0** | Propia | Atribución |

### Capa 3: CONTRATOS Y ACUERDOS (Contractual)

---

## 3. FRAMEWORK DE CUMPLIMIENTO AGPL-3.0 (MIKE)

### 3.1 Reglas Obligatorias

```typescript
// ARCHIVO: docs/AGPL_COMPLIANCE_RULES.md
// REGLA OBLIGATORIA: LEER ANTES DE TOCAR CÓDIGO MIKE

export const AGPL_RULES = {
  // REGLA 1: AISLAMIENTO OBLIGATORIO
  isolation: {
    rule: "Mike DEBE ejecutarse en proceso/container separado",
    implementation: "Docker container + REST/gRPC API only",
    forbidden: ["import { Mike } from 'mike'", "require('mike') en core HSCSG"]
  },

  // REGLA 2: INTERFAZ ABSTRACTA
  abstraction: {
    rule: "Core HSCSG NUNCA importa tipos/clases de Mike directamente",
    implementation: "Interface HSCSGLegalAdapter (propia) → MikeWrapper implementa",
    example: `
      // ✅ CORRECTO
      interface LegalProcessor {
        analyzeDocument(doc: Document): Promise<Analysis>;
      }
      class MikeWrapper implements LegalProcessor { ... }
      
      // ❌ PROHIBIDO
      import { analyze } from 'mike'; // en core HSCSG
    `
  },

  // REGLA 3: DISTRIBUCIÓN CÓDIGO FUENTE
  sourceDistribution: {
    rule: "Si Mike Wrapper se modifica + SaaS → liberar código completo",
    implementation: "Repo público separado: hscsg-mike-wrapper (AGPL-3.0)",
    trigger: "Cualquier modificación a Mike + exposición via red"
  },

  // REGLA 4: DATOS vs CÓDIGO
  dataVsCode: {
    rule: "Datos procesados por Mike NO son código derivado",
    implementation: "Resultados JSON → propiedad HSCSG, licencia propia",
    clarification: "AGPL cubre código, no outputs de datos"
  }
};
```

### 3.2 Checklist de Cumplimiento (Pre-Deploy)

```markdown
# PRE-DEPLOY AGPL CHECKLIST

## Mike Wrapper Service
- [ ] Código en repo separado: `hscsg-mike-wrapper` (público, AGPL-3.0)
- [ ] LICENSE file = AGPL-3.0 exacto
- [ ] No código Mike en `hscsg-core` repo
- [ ] API contract documentado (OpenAPI/Swagger)
- [ ] Tests de integración (no unitarios de Mike)

## Core HSCSG
- [ ] Zero imports de `mike` package en `src/core/`
- [ ] Adapter interface en `src/core/lib/legal/adapter.ts`
- [ ] MikeWrapper implementa adapter en `services/mike-wrapper/`
- [ ] Configuración vía env vars (endpoint Mike Wrapper)

## Deploy
- [ ] Mike Wrapper en container separado (Docker/K8s)
- [ ] Network policy: solo HSCSG Core → Mike Wrapper
- [ ] Logs de acceso a Mike Wrapper (auditoría)
- [ ] Rate limiting en Mike Wrapper

## Documentación
- [ ] README Mike Wrapper con instrucciones AGPL
- [ ] CHANGELOG Mike Wrapper público
- [ ] Instrucciones "Cómo obtener código fuente" en UI Happpy
```

---

## 4. ESTRATEGIA DE RETORNO FINANCIERO SEGURO

### 4.1 Modelos de Ingreso Compatibles AGPL

| Modelo | Compatible AGPL | Descripción | Riesgo |
|--------|-----------------|-------------|--------|
| **SaaS Fees** (Happy paga fee HSCSG) | ✅ | Fee por uso infraestructura HSCSG | **NINGUNO** |
| **Revenue Share** (Happy revenue) | ✅ | % ingresos Happy atribuible a HSCSG | **NINGUNO** |
| **License Fees** (Otros nodos) | ✅ | Licencia comercial HSCSG Core (MIT) | **NINGUNO** |
| **Skill Marketplace Fees** | ✅ | % transacciones marketplace | **NINGUNO** |
| **Mike Wrapper SaaS** (Directo) | ⚠️ **CONDICIONAL** | Solo si wrapper AGPL liberado | **ALTO** si no se libera |
| **Mike como Feature** (Incluido en fee HSCSG) | ✅ | Bundle en fee HSCSG | **NINGUNO** |

### 4.2 Estructura de Ingresos Protegida

```
┌────────────────────────────────────────────────────────────────┐
│                    FLUJO FINANCIERO SEGURO                      │
├────────────────────────────────────────────────────────────────┤
│                                                                 │
│  HAPPY USERS                                                    │
│      │                                                          │
│      ▼ $75K Pilot + Revenue Share                               │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │              HSCSG CORE (MIT/Apache-2.0)                   │  │
│  │  • MMA Engine • MTP Matrix • TFA Engine • MGA Engine      │  │
│  │  • OFER • Residue Flip • Fertile Fusion • Tribal Vocab    │  │
│  │  • Autómata Core (SOUL, E²R, MJ Gate, Spawn)              │  │
│  │  • Licencias: MIT / Apache-2.0 / Propietaria              │  │
│  └────────────────────────┬──────────────────────────────────┘  │
│                           │                                      │
│                           ▼ API (Adapter Interface)             │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │              MIKE WRAPPER (AGPL-3.0 - REPO SEPARADO)      │  │
│  │  • Document Processing • CourtListener Integration        │  │
│  │  • Legal Analysis • Document Generation                   │  │
│  │  • Repo: github.com/Isaacko0/hscsg-mike-wrapper (AGPL)    │  │
│  └──────────────────────────────────────────────────────────┘  │
│                           │                                      │
│                           ▼                                      │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │              LOOPHOLE WRAPPER (MIT - CLI LOCAL)           │  │
│  │  • Moral-Legal Analysis • Adversarial Testing             │  │
│  │  • No red exposure → Safe                                 │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                 │
└────────────────────────────────────────────────────────────────┘
```

### 4.3 Flujo de Dinero Protegido

| Flujo | Origen | Destino | Protección Legal |
|-------|--------|---------|------------------|
| **Pilot Fee** | Happy → HSCSG | HSCSG Treasury | Contrato servicios (no licencia) |
| **Revenue Share** | Happy Revenue → HSCSG | HSCSG Treasury | Contrato servicios (% incremental) |
| **License Fees** | Terceros → HSCSG | HSCSG Treasury | Licencia comercial HSCSG Core (MIT) |
| **Skill Marketplace** | Creadores → Compradores | HSCSG Treasury (fee %) | Marketplace terms (propios) |
| **Mike Wrapper** | **NO DIRECTO** | — | **NUNCA cobrar directo por Mike Wrapper** |

---

## 5. PROTECCIÓN DE PROPIEDAD INTELECTUAL

### 5.1 Registro de IP HSCSG

| Activo IP | Tipo Protección | Estado | Responsable |
|-----------|-----------------|--------|-------------|
| **HSCSG Core Architecture** | Trade Secret + Copyright | Documentado | Isaac Ko |
| **8 Módulos Core** | Copyright + MIT License | Registrado GitHub | Isaac Ko |
| **Tribal Vocab (80+ términos)** | Copyright + CC-BY-4.0 | Documentado | Isaac Ko |
| **Autómata Architecture** | Trade Secret + Patent Pending* | En proceso | Isaac Ko |
| **MMA Engine Logic** | Copyright + MIT | Registrado | Isaac Ko |
| **MGA Architecture** | Copyright + MIT | Registrado | Isaac Ko |
| **MTP Matrix Methodology** | Copyright + Trade Secret | Documentado | Isaac Ko |

*Patent Pending: Evaluar patente para "Modelo Guiado-Autónomo (MGA)" + "Micro-Monopolio de Atención (MMA)"

### 5.2 Defensa Contra Reclamaciones Mike/Loophole

| Amenaza | Defensa HSCSG | Evidencia |
|---------|---------------|-----------|
| **Mike reclama código derivado** | Arquitectura aislamiento + Adapter pattern | Git history: zero imports Mike en core |
| **Mike reclama SaaS = distribución** | Mike Wrapper = microservicio separado, repo AGPL público | Repo público `hscsg-mike-wrapper` |
| **Loophole reclama uso comercial** | Licencia MIT compatible, solo CLI local | MIT License + zero network exposure |
| **Cliente reclama IP** | Contratos claros: HSCSG Core = MIT, Mike Wrapper = AGPL | Contratos firmados |

---

## 6. CONTRATOS TIPO (TEMPLATES)

### 6.1 Founding Pilot Agreement (Happy-HSCSG)

```markdown
# FOUNDING PILOT AGREEMENT — HAPPPY × HSCSG
## Cláusulas Críticas IP/Licencia

### 3.1 Licencias
- **HSCSG Core**: Licencia MIT perpetua, irrevocable, mundial, royalty-free para Happy
- **Mike Wrapper**: Licencia AGPL-3.0 (cumplimiento upstream), repo público separado
- **Loophole Wrapper**: Licencia MIT, uso libre

### 3.2 Propiedad IP
- **Background IP**: Cada parte retiene 100% su IP previa
- **Foreground IP (conjunto)**: 50/50 Joint Venture IP Pool
- **Mejoras Happy a HSCSG Core**: Licencia MIT a HSCSG
- **Mejoras HSCSG a Happy Platform**: Licencia MIT a Happy

### 3.3 Revenue Share
- **Pilot Fee**: $75,000 USD (servicios, no licencia)
- **Revenue Share**: 20% incremental revenue atribuible a HSCSG
- **Mike Wrapper**: NO revenue share directo (AGPL compliance)

### 3.4 AGPL Compliance Clause
> "HSCSG mantendrá Mike Wrapper en repositorio público separado bajo AGPL-3.0.
> Happy no tendrá obligación de liberar su código propietario.
> HSCSG indemniza a Happy contra reclamaciones AGPL por uso de Mike Wrapper."

### 3.5 Indemnización
- HSCSG indemniza a Happy vs reclamaciones IP terceros (incl. Mike/Loophole)
- Happy indemniza a HSCSG vs reclamaciones por contenido Happy
```

### 6.2 Mike Wrapper Service Agreement

```markdown
# MIKE WRAPPER SERVICE AGREEMENT — HSCSG Internal

## 1. Servicio
- Microservicio Mike Wrapper: Document Processing + Legal Analysis
- API: REST/gRPC definido en `docs/mike-wrapper-api.yaml`
- SLA: 99.5% uptime, <500ms p95 latency

## 2. Licencia
- Código: AGPL-3.0 (repo: github.com/Isaacko0/hscsg-mike-wrapper)
- Modificaciones: Liberadas bajo AGPL-3.0 mismo repo
- Upstream: Sync periódico con open-legal-products/mike

## 3. Operación
- Deploy: Container dedicado (Docker/K8s)
- Network: Solo HSCSG Core → Mike Wrapper (network policy)
- Logs: Auditoría completa accesos
- Rate Limit: 100 req/min default

## 3. Compliance
- Código fuente disponible en `/source` endpoint
- LICENSE file en root repo
- Cambios upstream tracked en `UPSTREAM_SYNC.md`
```

---

## 7. PLAN DE ACCIÓN INMEDIATO (COMPLIANCE)

### Semana 1-2: Setup Legal/Tech
- [ ] Crear repo `hscsg-mike-wrapper` (público, AGPL-3.0)
- [ ] Migrar código Mike a wrapper service
- [ ] Definir Adapter Interface en HSCSG Core
- [ ] Implementar Mike Wrapper service
- [ ] Configurar CI/CD con checks AGPL

### Semana 3-4: Integración Happy
- [ ] Happy SDK integra HSCSG Adapter (no Mike directo)
- [ ] Pilot config: Happy → HSCSG Core → Mike Wrapper
- [ ] Tests integración E2E
- [ ] Documentación API pública Mike Wrapper

### Semana 5-6: Compliance Hardening
- [ ] Auditoría código: `grep -r "from 'mike'" src/core/` → 0 results
- [ ] Auditoría: `grep -r "import.*mike" src/core/` → 0 results
- [ ] Verificar repo Mike Wrapper público + LICENSE AGPL-3.0
- [ ] Documentar "Cómo obtener código fuente" en UI Happpy

### Continuo (Cada Sprint)
- [ ] Sync upstream Mike (mensual)
- [ ] Revisar cambios AGPL en Mike Wrapper
- [ ] Actualizar `HOMOLOGACION_TERMINOS` si nuevos términos
- [ ] Reporte compliance a Board (trimestral)

---

## 8. DOCUMENTOS DE REFERENCIA VINCULANTES

| Documento | Ubicación | Estado | Vinculante |
|-----------|-----------|--------|------------|
| `LEGAL_NOTICE.md` | `docs/` | **OFICIAL** | ✅ SÍ |
| `HOMOLOGACION_TERMINOS_*.md` | `docs/` | **OFICIAL** | ✅ SÍ |
| `AGPL_COMPLIANCE_RULES.md` | `docs/` | **OFICIAL** | ✅ SÍ |
| `FOUNDING_PILOT_AGREEMENT.md` | `legal/` | **BORRADOR** | 🔄 En negociación |
| `MIKE_WRAPPER_SERVICE_AGREEMENT.md` | `legal/` | **OFICIAL INTERNO** | ✅ SÍ |
| `AGPL_COMPLIANCE_CHECKLIST.md` | `docs/` | **OFICIAL** | ✅ SÍ |

---

## 8. CONTACTOS Y ESCALACIÓN

| Situación | Contacto | SLA | Acción |
|-----------|----------|-----|--------|
| **Duda AGPL** | Tech Lead + Legal Review | 24h | Bloquear merge hasta resolución |
| **Posible violación AGPL** | PI (Isaac Ko) + Legal | 4h | Freeze deploy, auditoría inmediata |
| **Carta reclamación Mike/AGPL** | PI + Legal Review | 24h | Respuesta formal + auditoría |
| **Nuevo repo a asimilar** | Tech Lead + Legal | Pre-merge | Análisis licencia obligatorio |

---

## 9. CHECKLIST FINAL DE PROTECCIÓN (AUDITORÍA)

```
□ AGPL Compliance Rules documentado en `docs/AGPL_COMPLIANCE_RULES.md`
□ Mike Wrapper en repo público separado AGPL-3.0
□ Zero imports Mike en HSCSG Core (verificado CI)
□ Adapter Interface definida y usada
□ Mike Wrapper Service Agreement firmado
□ Founding Pilot Agreement con cláusulas AGPL
□ CI/CD incluye `validate:agpl` check
□ Pre-commit hook valida zero imports Mike
□ Documentación "Source Code Available" en UI Happpy
□ Legal Review trimestral calendarizado
□ Seguro E&O (Errors & Omissions) vigente
□ Patent Pending evaluado para MGA + MMA
```

---

## 10. DECLARACIÓN FINAL

> **Este marco legal establece que HSCSG v15 OS puede generar retorno financiero legítimo mediante:**
>
> 1. **Arquitectura de aislamiento** que evita contaminación AGPL en core propietario
> 2. **Licenciamiento dual** (MIT core + AGPL wrapper) compatible y defensible
> 3. **Contratos claros** que separan IP background/foreground y revenue streams
> 4. **Compliance automático** via CI/CD + tribal_vocab.ts validation
> 5. **Estrategia de retorno** basada en servicios + revenue share (no licencias AGPL)
>
> **El retorno financiero proviene de:**
> - Fees por servicios HSCSG Core (MIT)
> - Revenue share incremental (contrato servicios)
> - Skill Marketplace fees (propio)
> - **NUNCA** de licenciamiento directo Mike Wrapper (AGPL compliance)
>
> **Riesgo legal residual: BAJO** (arquitectura + contratos + compliance automático)

---

**PI / Data Controller:** Isaac Ko (Isaacko0) — isaacko@protonmail.com  
**Legal Review:** [Pendiente asignación]  
**Próxima revisión:** 2026-12-10 (Trimestral)  
**Jurisdicción:** México / UE (GDPR) / Internacional (TRIPS/Berne)

---

**APROBADO PARA USO INTERNO HSCSG v15 OS**  
**CLASIFICACIÓN:** CONFIDENCIAL — NO DISTRIBUIR SIN AUTORIZACIÓN ESCRITA  
**PRÓXIMA REVISIÓN LEGAL:** 2026-12-10