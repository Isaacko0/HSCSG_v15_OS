# Integración GuiFV/life → HSCSG v15 OS (Cosateca OS)
# Asimilación de un repo Django (Python/PostgreSQL/Docker) como módulo React/Zustand local.
# Triple perspectiva: Usuario · LLM · HSCSG+CaaS.

> Backup en `docs/guifv_life_backup.md`. Fuente: https://github.com/GuiFV/life

---

## 0. Síntesis
"Life" organiza la vida personal: metas en 4 tipos (Viaje / Proyecto / Comprar / Hacer), con
esfuerzo, área (personal/profesional), matriz Important×Urgent, costo, fechas, y flags next/completed.
HSCSG lo asimila como **módulo Life**: el organizador de vida del nodo, reinterpretando "costo"
en ZNU (postmonetario) en vez de dinero fiduciario.

---

## 1. Perspectiva del Usuario
- Quiere un lugar para lo que quiere hacer en la vida (viajar, proyectos, comprar, hacer).
- Quiere priorizar con la matriz Important×Urgent.
- Quiere saber qué es NEXT y qué ya COMPLETÓ.

## 2. Perspectiva del LLM (qué asimilar / qué extirpar)
### Asimilo (lógica pura)
- Modelo `Goal` → tipos TS: type (trip/project/buy/do), effort (high/low), area (personal/professional),
  important/urgent (1-9), matrix = important*urgent, znu (costo en ZNU), start/end, next, completed.
- Cálculo de matriz Important×Urgent (fórmula directa del modelo Django).
- Filtros: por tipo, por área, por next, por completed.
- Notas (CKEditor5 → textarea local simple).

### Extirpo (infra Django)
- Django/Python/PostgreSQL, Docker, allauth (cuentas), migrations, CKEditor5, Materialize CSS.
- GoogleAgenda (cierre de OAuth Google) → en HSCSG es local, sin Google.
- Servicios de extracción de agenda (services.extract_src_ctz) → no se replica (requiere backend).

## 3. Perspectiva HSCSG v15 OS + CaaS
### Isomorfismo con Materialismo Jerárquico
- **Ley I** (no dañar base material): las metas con costo se miden en ZNU, no dinero → no extrae
  valor del nodo, lo regenera.
- **Ley II** (ganarse la vida soberanizando): "cost" de una meta = contribución ZNU proyectada
  (AUT), visible en el dashboard de CaaS.
- **Ley III** (lucidez): la matriz Important×Urgent es transparente; el Modo Lucidez puede revelar
  el cálculo de `matrix = important * urgent`.

### Módulo resultante: `/life`
Tipos:
```ts
type GoalType = 'trip' | 'project' | 'buy' | 'do'
type Effort = 'hi' | 'lo'
type Area = 'pe' | 'pr'
interface Goal {
  id: string; name: string; description?: string; type: GoalType; effort: Effort; area: Area;
  important: number; urgent: number; znu?: number; start?: string; end?: string;
  next: boolean; completed: boolean; createdAt: string
}
```
Helpers: `matrixCalculation(g)` = important*urgent; `addGoal`, `toggleNext`, `toggleCompleted`, `removeGoal`.
Estado en store: `life: { goals: Goal[], notes: string }`.

---

## 4. Entregable: Módulo `/life` en HSCSG v15 OS
Pantalla `src/app/screens/Life.tsx`:
- Formulario para añadir meta (tipo, esfuerzo, área, important, urgent, znu, fechas, next).
- Grid de metas con badge de matriz (Important×Urgent), filtros por tipo/área.
- Sección Notas (textarea local).
- Stats: total, next, completed, ZNU proyectado.

---

## 5. Próximos pasos
1. Crear tipos + lib + store + pantalla + nav/ruta (módulo `/life`).
2. Typecheck + build + preview (verificar /life → 200).
3. Commitear y pushear a GitHub.
