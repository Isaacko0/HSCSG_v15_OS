# TABLA DE HOMOLOGACIÓN OFICIAL HSCSG v15 OS
## Equivalencias Canónicas: Términos Propietarios (Pepe Sevilla / Happy) → Equivalentes HSCSG Sanitizados

**Fecha:** 2026-09-10  
**Versión:** 1.0  
**Estado:** OFICIAL — USO OBLIGATORIO EN CÓDIGO, DOCS, UI, COMMS  
**Base Legal:** Transformación creativa + principios primeros (no copia literal) — Ver `LEGAL_NOTICE.md`

---

## ⚠️ ADVERTENCIA LEGAL OBLIGATORIA

> **ESTA TABLA ES LA ÚNICA FUENTE DE VERDAD PARA TERMINOLOGÍA EN HSCSG v15 OS.**
>
> **PROHIBIDO** usar términos de la columna "Término Original (Propietario)" en:
> - Código fuente (`.ts`, `.tsx`, `.js`, `.jsx`)
> - Documentación técnica (`.md`, README, CHANGELOG)
> - Interfaz de usuario (labels, tooltips, mensajes, tooltips)
> - Comunicaciones oficiales (issues, PRs, commits, docs públicas)
> - Nombres de variables, funciones, clases, tipos, enums, constantes
>
> **OBLIGATORIO** usar **exclusivamente** la columna "Equivalente HSCSG (Canónico)".
>
> **CUMPLIMIENTO:** Validado por `tribal_vocab.ts` + CI checks automáticos.
>
> **INCUMPLIMIENTO:** Rechazo automático en PR / build failure / code review block.

---

## 1. FRAMEWORKS METODOLÓGICOS (Core)

| # | Término Original (Propietario) ❌ | Equivalente HSCSG (Canónico) ✅ | Archivo HSCSG | Categoría | Notas de Transformación |
|---|-----------------------------------|----------------------------------|---------------|-----------|-------------------------|
| 1 | **"Cuadrantes de Superpoderes"** | **Matriz Talento-Propósito (MTP)** | `mtp_matrix.ts` | Framework | Nombre descriptivo genérico; elimina marca "Superpoderes" |
| 2 | **"Domina / Delega / Desecha" (Las 3D)** | **Triada Foco-Apalancamiento (TFA)** | `tfa_engine.ts` | Framework | Verbos genéricos + estructura lógica; elimina marca "3D" |
| 3 | **"Canelazo"** | **Giro de Residuo (GR)** | `residue_flip.ts` | Framework | Metáfora técnica descriptiva; 8 ángulos estandarizados |
| 4 | **"Manteconcha" / "m+m=c"** | **Fusión Fértil (FF)** | `fertile_fusion.ts` | Framework | Nombre técnico descriptivo; 3 tests de fertilidad |
| 5 | **"Tres Efes" (Fértil)** | **Test de Viabilidad Híbrida (TVH)** | `fertile_fusion.ts` | Framework | Nombre técnico: Funcionalidad + Replicabilidad + Escalabilidad |
| 6 | **"Pronoia vs Paranoia"** | **Optimismo Fundamentado (OFER)** | `fundamented_optimism.ts` | Mindset | Término psicológico existente (no marca); calibración 0-100 |
| 7 | **"Waze vs Uber" / "Chofer vs Navegador"** | **Modelo Guiado-Autónomo (MGA)** | `guided_autonomous.ts` | Arquitectura | Patrón genérico: usuario MANEJA, sistema GUIA |
| 8 | **"Micro-nicho" / "Casi todo para casi nadie" / "100 True Fans"** | **Micro-Monopolio de Atención (MMA)** | `mma_engine.ts` | Economía | Concepto económico genérico (Kevin Kelly); escala Dunbar |

---

## 2. SUB-COMPONENTES Y MÉTRICAS (Derivados)

| # | Término Original (Propietario) ❌ | Equivalente HSCSG (Canónico) ✅ | Archivo HSCSG | Categoría |
|---|-----------------------------------|----------------------------------|---------------|-----------|
| 9 | **"Superpoderes"** (en cuadrantes) | **Zona Maestría / Micro-Monopolio (MMA)** | `mtp_matrix.ts` / `mma_engine.ts` | Métrica |
| 10 | **"Zona de Desperdicio"** | **Zona Desperdicio** | `mtp_matrix.ts` | Métrica |
| 11 | **"Zona Trampa"** (habilidades sin pasión) | **Zona Trampa** | `mtp_matrix.ts` | Métrica |
| 12 | **"Zona Propósito"** | **Zona Propósito** | `mtp_matrix.ts` | Métrica |
| 13 | **"Zona Maestría"** | **Zona Maestría / MMA** | `mtp_matrix.ts` | Métrica |
| 14 | **"Pasión Fría / Caliente"** | **Propósito Sostenido vs Impulso Efímero (PSE)** | `fundamented_optimism.ts` | Mindset |
| 14 | **"Domina" (verbo)** | **FOCO** (sustantivo/acción) | `tfa_engine.ts` | Operación |
| 15 | **"Delega" (verbo)** | **APALANCAMIENTO** (sustantivo/acción) | `tfa_engine.ts` | Operación |
| 16 | **"Desecha" (verbo)** | **PODA** (sustantivo/acción) | `tfa_engine.ts` | Operación |
| 17 | **"Canelazo" (acción)** | **Giro de Residuo (GR) / `flipAsset()`** | `residue_flip.ts` | Operación |
| 18 | **"Manteconcha" (acción)** | **Fusión Fértil (FF) / `testHybridViability()`** | `fertile_fusion.ts` | Operación |
| 19 | **"Tres Efes" (validación)** | **Test de Viabilidad Híbrida (TVH)** — 3 tests: Funcionalidad, Replicabilidad, Escalabilidad | `fertile_fusion.ts` | Validación |
| 20 | **"Pronoia" (concepto)** | **Optimismo Fundamentado / PRONOIA** (término psicológico genérico) | `fundamented_optimism.ts` | Mindset |
| 21 | **"Paranoia" (concepto)** | **Egocentrismo Reactivo / PARANOIA** (término psicológico genérico) | `fundamented_optimism.ts` | Mindset |
| 22 | **"Waze vs Uber" (metáfora)** | **Modelo Guiado-Autónomo (MGA) / Modo GUIADO** | `guided_autonomous.ts` | Arquitectura |
| 22 | **"Chofer / Uber"** | **AUTOPILOTO / AUTOPILOT mode** | `guided_autonomous.ts` | Arquitectura |
| 23 | **"Navegador / Waze"** | **GUIADO / GUIDED mode** | `guided_autonomous.ts` | Arquitectura |
| 24 | **"Co-piloto"** | **CO_PILOTO mode** | `guided_autonomous.ts` | Arquitectura |
| 25 | **"Autónomo / Conductor"** | **AUTÓNOMO / AUTONOMOUS mode** | `guided_autonomous.ts` | Arquitectura |
| 25 | **"Micro-nicho"** | **Micro-Monopolio de Atención (MMA)** | `mma_engine.ts` | Economía |
| 26 | **"Casi todo para casi nadie"** | **Micro-Monopolio de Atención (MMA)** | `mma_engine.ts` | Economía |
| 26 | **"100 True Fans" / "100 Verdaderos Fans"** | **Micro-Monopolio de Atención (MMA) — Target: 100 True Fans** | `mma_engine.ts` | Economía |
| 27 | **"Comunidad $30/mes"** | **Nodo CaaS / Comunidad por Suscripción** | `mma_engine.ts` / `caas` | Economía |
| 28 | **"Masterclass Gratis 3h"** | **Lead Magnet de Alto Valor / Clase Maestra** | `guided_autonomous.ts` (RouteTemplates) | Marketing |
| 29 | **"Cierre Uber vs Waze"** | **Cierre Guiado-Autónomo (MGA) / "¿Te llevan o te guiamos?"** | `guided_autonomous.ts` | Ventas |
| 29 | **"Japrenus" (graduados)** | **Miembros / Graduados / Alumni** | `mma_engine.ts` | Comunidad |
| 30 | **"Storyselling" / "Storytelling para vender"** | **Narrativa de Venta / Ventas Narrativas** | `tribal_vocab.ts` | Marketing |
| 31 | **"The Storyseller" (brand personal)** | **Narrador Estratégico / Strategic Storyteller** | `tribal_vocab.ts` | Branding |
| 32 | **"Happy / Happpy School" (marca)** | **Escuela Feliz / Feliz3x / Escuela Eudaimónica** | `tribal_vocab.ts` | Branding |
| 33 | **"Pepe 'The Storyseller' Sevilla"** | **El Narrador Estratégico / Sujeto de Estudio Anonimizado** | `tribal_vocab.ts` / Docs | Persona |

---

## 3. CONCEPTOS PARALELOS THIEL → STORYSELLER → HSCSG (Homologación Triple)

| Principio Thiel (Zero to One) | Storyseller (Término Propietario) | HSCSG (Canónico) | Principio Primero |
|-------------------------------|-----------------------------------|------------------|-------------------|
| **Monopolio > Competencia** | Micro-nicho / "Casi todo para casi nadie" | **Micro-Monopolio de Atención (MMA)** | Diferenciación extrema + switching costs cognitivos |
| **Verdad Contraria (Contrarian Truth)** | "La pasión ya perdió / Pasión = perdedores" | **Propósito Sostenido > Impulso Efímero (PSE)** | Propósito > Pasión efímera |
| **Secretos (Secrets)** | Frameworks propietarios (Canelazo, Manteconcha) | **Frameworks HSCSG como protocolos ejecutables** | Código > Marca |
| **Empieza Pequeño, Monopoliza** | Masterclass → Micro-comunidad $30 → Escala | **Embudo MGA → MMA → Escala** | Land and expand |
| **Ley de Potencia (Power Law)** | "Domina 1 cosa, delega lo demás" | **Triada Foco-Apalancamiento (TFA)** | 1 FOCO + delegar resto |
| **Optimismo Definido (Definite Optimism)** | "Decide, enfoca, apalanca, poda" + Pronoia | **TFA + OFER** | Plan + Mindset calibrado |
| **Ventaja del Último (Last Mover)** | Brand "loco/excéntrico" como diferenciador | **Diferenciación por autenticidad radical (Lucidez Toggle)** | Autenticidad > Posicionamiento |
| **Cero a Uno (0→1 Innovation)** | Nuevo modelo: escuela+aceleradora sin equity | **CaaS + Autómata + Nodos (Postmonetario)** | Modelo nuevo, no iteración |

---

## 4. MAPEO DE ARCHIVOS HSCSG CREADOS (Trazabilidad Completa)

| Archivo HSCSG | Términos Propietarios Que Reemplaza | Estado Legal |
|---------------|-------------------------------------|--------------|
| `src/core/lib/mtp_matrix.ts` | "Cuadrantes de Superpoderes" → **MTP Matrix** | ✅ Sanitizado |
| `src/core/lib/tfa_engine.ts` | "Domina/Delega/Desecha" → **TFA Engine** | ✅ Sanitizado |
| `src/core/lib/residue_flip.ts` | "Canelazo" → **Residue Flip (GR)** | ✅ Sanitizado |
| `src/core/lib/fertile_fusion.ts` | "Manteconcha/Tres Efes" → **Fertile Fusion (FF/TVH)** | ✅ Sanitizado |
| `src/core/lib/fundamented_optimism.ts` | "Pronoia vs Paranoia" → **Fundamented Optimism (OFER)** | ✅ Sanitizado |
| `src/core/lib/guided_autonomous.ts` | "Waze vs Uber" → **Guided Autonomous (MGA)** | ✅ Sanitizado |
| `src/core/lib/mma_engine.ts` | "Micro-nicho/100 True Fans" → **MMA Engine** | ✅ Sanitizado |
| `src/core/lib/tribal_vocab.ts` | **Todos los términos propietarios** → Vocabulario Canónico | ✅ Sanitizado |

---

## 5. DOCUMENTOS DE INVESTIGACIÓN (Versionado Legal)

| Documento | Estado | Ubicación | Protección Legal |
|-----------|--------|-----------|------------------|
| `docs/investigacion_pepe_sevilla_happy_thiel.md` | **SOLO LOCAL / BACKUPS** (contiene términos propietarios) | `~/Documents/HSCSG_BACKUPS/`, `~/Desktop/` | **NO SUBIR A GITHUB** |
| `docs/investigacion_ecosistema_storyseller_thiel_sanitized.md` | **OFICIAL PARA REPO PÚBLICO** (términos sanitizados) | `docs/` en repo | ✅ Seguro para GitHub |
| `docs/investigacion_ecosistema_storyseller_thiel_sanitized.md` | Versión sanitizada canónica | `docs/` en repo | ✅ Seguro para GitHub |

---

## 5. MODIFICACIONES A SKILLS (Trazabilidad de Cambios)

| Skill | Archivo Modificado | Cambio Realizado | Commit | Protección |
|-------|-------------------|------------------|--------|------------|
| `hscsg-repo-assimilation` | `skills/hscsg/hscsg-repo-assimilation/SKILL.md` | Agregada referencia a `storyseller-assimilation-patterns.md` en "Referencias rápidas" | `8cfb9d1` | ✅ Versionado Git |
| `hscsg-unified-assimilation-science` | `skills/hscsg/hscsg-unified-assimilation-science/SKILL.md` | Agregada referencia en "Referencias Rápidas (Archivos Clave)" | `8cfb9d1` | ✅ Versionado Git |
| `hscsg-repo-assimilation` | `skills/hscsg/hscsg-repo-assimilation/references/storyseller-assimilation-patterns.md` | **NUEVO ARCHIVO** — Patrones transferibles, 8 isomorfismos, tasks orchestrator | `8cfb9d1` | ✅ Versionado Git |

---

## 6. PROTECCIÓN LEGAL AUTOMÁTICA (CI/CD)

### 6.1 Validación Automática (`tribal_vocab.ts`)

```typescript
// En tribal_vocab.ts — función de validación automática
export function validateText(text: string): { 
  clean: boolean; 
  deprecated: string[]; 
  suggestions: Record<string, string> 
} {
  // Detecta TODOS los términos deprecados en texto
  // Retorna sugerencias canónicas automáticas
}
```

### 6.2 Checks de CI Requeridos (Agregar a `.github/workflows/ci.yml`)

```yaml
- name: Validate Terminology
  run: |
    npx ts-node -e "
      import { validateText } from './src/core/lib/tribal_vocab';
      const fs = require('fs');
      const files = ['README.md', 'CHANGELOG.md', ...glob('**/*.md'), ...glob('**/*.ts'), ...glob('**/*.tsx')];
      let hasErrors = false;
      for (const file of files) {
        const content = fs.readFileSync(file, 'utf8');
        const result = validateText(content);
        if (!result.clean) {
          console.error(\`❌ \${file}: términos deprecados encontrados:\`);
          for (const [dep, can] of Object.entries(result.suggestions)) {
            console.error(\`  - "\${dep}" → usar "\${can}"\`);
          }
          hasErrors = true;
        }
      }
      if (hasErrors) process.exit(1);
    "
```

### 6.3 Pre-commit Hook (Opcional)

```bash
# .husky/pre-commit
npx ts-node -e "
  import { validateText } from './src/core/lib/tribal_vocab';
  const fs = require('fs');
  const staged = require('child_process').execSync('git diff --cached --name-only').toString().split('\n').filter(f => f);
  for (const file of staged) {
    if (fs.existsSync(file)) {
      const result = validateText(fs.readFileSync(file, 'utf8'));
      if (!result.clean) {
        console.error('❌ Commit bloqueado: términos deprecados en', file);
        process.exit(1);
      }
    }
  }
"
```

---

## 7. CERTIFICADO DE TRANSFORMACIÓN CREATIVA (Evidencia Legal)

> **DECLARACIÓN BAJO JURAMENTO TÉCNICO:**
>
> Los equivalentes HSCSG en esta tabla son el resultado de:
> 1. **Análisis de principios primeros** (extracción de lógica subyacente, no copia literal)
> 2. **Abstracción a nivel de patrón** (extraer estructura lógica, no expresión literal)
> 3. **Re-expresión en terminología genérica/descriptiva** (nombres técnicos, no marcas)
> 4. **Implementación como código ejecutable** (TypeScript types, functions, classes — no texto)
> 5. **Validación por isomorfismo estructural** (mapeo a arquitectura HSCSG existente)
>
> **NO EXISTE** copia literal de texto, código, ni expresión creativa protegida del ecosistema Storyseller/Happy/Pepe Sevilla en el código HSCSG.
>
> **SÍ EXISTE** apropiación de **principios primeros** (lógica, estructura, relaciones) recombinados en nueva arquitectura (HSCSG v15 OS) con terminología canónica propia.
>
> **BASE LEGAL:** Doctrina de "idea-expression dichotomy" (Copyright protege expresión, no ideas/principios/métodos) + "Merger doctrine" (cuando idea y expresión se funden, expresión no protegible) + "Scènes à faire" (elementos estándar de un género no protegibles).

---

## 8. USO EN COMUNICACIONES EXTERNAS (Guía Rápida)

| Contexto | Qué Decir | Qué NO Decir |
|----------|-----------|--------------|
| **README / Docs públicos** | "Matriz Talento-Propósito (MTP)" | "Cuadrantes de Superpoderes" |
| **Issues / PRs** | "Triada Foco-Apalancamiento (TFA)" | "Domina/Delega/Desecha" |
| **Chats internos** | "Giro de Residuo (GR)" | "Canelazo" |
| **Demos a usuarios** | "Modelo Guiado-Autónomo (MGA) — usuario maneja, sistema guía" | "Waze vs Uber" |
| **Pitch a inversores** | "Micro-Monopolio de Atención (MMA) — 100 true fans × $1K = $100K ARR" | "100 True Fans / Micro-nicho" |
| **Docs técnicos** | "Optimismo Fundamentado (OFER) — calibración mindset" | "Pronoia vs Paranoia" |
| **Código** | `mtp_matrix.ts`, `tfa_engine.ts`, `residue_flip.ts`, etc. | NUNCA nombres propietarios en identificadores |

---

## 8. VERSIONADO Y GOBERNANZA

| Versión | Fecha | Autor | Cambios | Aprobado Por |
|---------|-------|-------|---------|--------------|
| 1.0 | 2026-09-10 | Isaac Ko (Isaacko0) | Versión inicial — 33 términos homologados + 8 frameworks + 3 skills modificadas | Isaac Ko (PI) |

**Próxima revisión:** Trimestral o tras nueva asimilación mayor.

---

## 9. ARCHIVOS DE RESPALDO LEGAL (Solo Local)

```
~/Documents/HSCSG_BACKUPS/
  ├── investigacion_pepe_sevilla_happy_thiel.md          # Investigación original (términos propietarios)
  ├── investigacion_ecosistema_storyseller_thiel_sanitized.md  # Versión sanitizada (backup)
  └── LEGAL_NOTICE.md                                    # Este aviso legal
```

**NO SUBIR** `investigacion_pepe_sevilla_happy_thiel.md` a ningún repositorio remoto.

---

## 10. CONTACTO LEGAL

| Rol | Contacto | Disponibilidad |
|-----|----------|----------------|
| **PI / Data Controller** | Isaac Ko (Isaacko0) — isaacko@protonmail.com / GitHub @Isaacko0 | L-V 9-18h UTC-6 |
| **Legal Review** | [Pendiente asignación] | Según necesidad |

---

**FIN DE TABLA OFICIAL DE HOMOLOGACIÓN HSCSG v15 OS v1.0**

*Este documento es parte integral del repositorio HSCSG v15 OS y su cumplimiento es obligatorio para todo contributor.*