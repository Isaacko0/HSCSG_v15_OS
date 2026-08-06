# Integración Sci-Hive "Mundus Live" → HSCSG v15 OS (Cosateca OS)
# Asimilación de un data point de conocimiento (no de código) vía skill hscsg-repo-assimilation.
# Triple perspectiva: Usuario · LLM · HSCSG+CaaS.

> Backup en `docs/scihive_mundus_backup.md`. Fuente: https://sci-hive.com/datapoint/fcaf69a3-2b03-4fd9-90e2-96e49379ba79/mundus-live

---

## 0. Síntesis
"Mundus Live" es el manifiesto vivo del símbolo de unidad global de IDETRA: un círculo azul sin bordes
(inspirado en *Pale Blue Dot* de Carl Sagan) que dice "estamos juntos, así que construyamos el futuro que merecemos".
Sus principios del *Circular Exchange System* incluyen explícitamente la **eliminación de la dependencia monetaria**.

Esto es isomorfo a la raíz de HSCSG: el **CaaS** (acceso por contribución a la base material, no por dinero) y el
espíritu de **Mundus** ya presente en el módulo Integral (ITC ≈ anti-monetario). Asimilarlo = sembrar la "semilla
cultural" del postmonetario que HSCSG ya implementa técnicamente.

---

## 1. Perspectiva del Usuario
- Quiere un símbolo compartido de unidad sin fronteras ("we are in this together").
- Quiere saber qué hacer ahora: acción política, social y comunitaria (el datapoint lo guía).
- Quiere menos dependencia del dinero para acceder a lo básico.

## 2. Perspectiva del LLM (qué asimilar / qué extirpar)
### Asimilo (como módulo de conocimiento + manifiesto)
- El **manifiesto** ("Draw a blue circle…") como texto fundacional del nodo.
- Los **pilares/plataformas** de Mundus (sci-hive, terra formus, plannus, temet) ya mapeados en `docs/idetra_sinergia.md`.
- El **Circular Exchange System** como nombre alternativo de CaaS en la UI (sin duplicar lógica).

### Extirpo (infra de Sci-Hive)
- Plataforma web centralizada (Sci-Hive.com) con login/registro, Google Analytics, búsqueda. En HSCSG el
  conocimiento vive local, sin tracking, sin cuenta.
- Modelo de "datapoints con SCI" → lo reemplazo por el motor de Verificación/Lucidez (Ley III) ya existente.

## 3. Perspectiva HSCSG v15 OS + CaaS
### Isomorfismo con Materialismo Jerárquico
- **Ley I** (no dañar base material): el "pale blue dot" = la base material compartida que protegemos.
- **Ley II** (ganarse la vida soberanizando): Circular Exchange = CaaS; acceso por contribución.
- **Ley III** (lucidez): Mundus aboga por "highest form of intellect" / diálogo basado en evidencia = Sci-Hive (SCI) = Verificación.

### Módulo resultante: `/mundus` (o sección en Home)
Una pantalla que muestre:
1. El manifiesto "Draw a blue circle" como bienvenida del nodo.
2. El círculo azul (símbolo) renderizado en SVG/local (sin dependencias).
3. Los 4 pilares (sci-hive/terra formus/plannus/temet) enlazados a sus módulos HSCSG equivalentes.
4. Una línea que declare: "Circular Exchange System = CaaS de Cosateca OS".

---

## 4. Entregable: Módulo `/mundus` en HSCSG v15 OS
Tipos mínimos (estático, es conocimiento):
```ts
interface MundusPillar { key: string; name: string; hscsgLink: string; desc: string }
interface MundusState { manifesto: string; symbol: 'blue-circle'; pillars: MundusPillar[] }
```
Pantalla `src/app/screens/Mundus.tsx`: manifiesto + SVG círculo azul + grid de pilares (links internos).
Nav: Aside item `Mundus · Unidad` (icono `Globe` o `Circle`), ruta `/mundus`.

No requiere lógica de store compleja (es declarativo); se puede hacer un estado mínimo o directo en la pantalla.
Para coherencia con la skill, se añade `mundus` al store con `manifesto` + `pillars` seed.

---

## 5. Próximos pasos
1. Crear tipos + pantalla + nav/ruta (módulo `/mundus`).
2. Typecheck + build + preview (verificar /mundus → 200).
3. Commitear y pushear a GitHub.
