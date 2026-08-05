# CHANGELOG — HSCSG v15 OS

Todas las entradas siguen el formato: versión, fecha, repos asimilados en ese paso, y estado de verificación.

---

## v15.11 — 2026-08-05 · Soberanía (sovereignty-hub + ui)
- **Asimilados:** `overkillkulture/sovereignty-hub` + `tairea/sovereignty-hub-ui` → módulo **Soberanía · 13 Pilares** (`/soberania`).
- **Backup previo:** `HSCSG_v15_OS_BACKUP_20260805_133739/`.
- **Documentos:** `docs/sovereignty_hub_backup.md`, `docs/sovereignty_hub_ui_backup.md`, `docs/sovereignty_integration.md`.
- **Lógica:** `src/core/lib/sovereignty.ts` (13 pilares × 7 capas × 3 fases = 273 puntos; `sovereigntyIndex`, `pillarPhase`, `weakestPillar`, `strongestPillar`, `patternTheoryScore`/Lucidez).
- **Tipos:** `src/core/state/sovereignty.ts`. **Store:** estado `sovereignty` + acciones `setSovereigntyAnswer`, `computePatternScore`. **Pantalla:** `src/app/screens/Soberania.tsx` (matriz 13×7 clicable, índice, pilar débil/fuerte, Leyes I/II/III, Pattern Theory).
- **Verificado:** tsc OK · build OK (1652 módulos) · 16 rutas → 200.
- **Isomorfismo:** pilares = base material (Ley I), 7 capas = escalera AUT (Ley II), Pattern Theory = Lucidez (Ley III).

## v15.10 — 2026-08-05 · Tekitl (Baruch4413/tekitl)
- **Asimilado:** `Baruch4413/tekitl` → módulo **Tekitl · Proyectos** (`/tekitl`).
- **Backup previo:** `HSCSG_v15_OS_BACKUP_20260805_123427/`.
- **Documentos:** `docs/tekitl_backup.md`, `docs/tekitl_integration.md`.
- **Lógica:** `src/core/lib/tekitl.ts` (FSM de etapas, roles/voluntarios, coins por endoso, timeline append-only, talentos/portafolio, `getPortfolio`).
- **Tipos:** `src/core/state/tekitl.ts`. **Store:** estado `tekitl` + 11 acciones. **Pantalla:** `src/app/screens/Tekitl.tsx`.
- **Verificado:** tsc OK · build OK (1640 módulos) · 15 rutas → 200.
- **Isomorfismo:** proyecto = unidad de AUT; coins = endoso post-facto; timeline inmutable = Ley III.

## v15.9 — 2026-08-05 · Trustlines (trustlines-protocol/contracts)
- **Asimilado:** `trustlines-protocol/contracts` → módulo **Trustlines · Crédito** (`/trustlines`).
- **Backup previo:** `HSCSG_v15_OS_BACKUP_20260805_122034/`.
- **Documentos:** `docs/trustlines_backup.md`, `docs/trustlines_integration.md`.
- **Lógica:** `src/core/lib/trustlines.ts` (réplica de `DebtTracking` + `debitTransfer`, deuda bilateral simétrica, apertura de líneas).
- **Tipos:** `src/core/state/trustlines.ts`. **Store:** estado `trust` + 3 acciones. **Pantalla:** `src/app/screens/Trustlines.tsx`.
- **Verificado:** tsc OK · build OK (1622 módulos) · 14 rutas → 200.
- **Isomorfismo:** crédito mutuo sin emisor central = soberanía (Ley II); sin usura = Ley I.

## v15.8 — 2026-08-05 · Vesting (sepu85/collabberry-berry-vesting)
- **Asimilado:** `sepu85/collabberry-berry-vesting` → módulo **Vesting · ZNU** (`/vesting`).
- **Backup previo:** `HSCSG_v15_OS_BACKUP_20260805_120241/`.
- **Documentos:** `docs/berryvesting_backup.md`, `docs/berryvesting_integration.md`.
- **Lógica:** `src/core/lib/vesting.ts` (réplica fiel del contrato: `totalUnlocked`, `releasable`, `release`, `setBeneficiary` una vez, `canRenounce`, `buildBerrySchedule`).
- **Tipos:** `src/core/state/vesting.ts`. **Store:** estado `vesting` + 3 acciones. **Pantalla:** `src/app/screens/Vesting.tsx`.
- **Verificado:** tsc OK · build OK (1620 módulos) · 13 rutas → 200.
- **Isomorfismo:** vesting inmutable/no-drain ≈ Ley I; unlock por hitos ≈ Ley II; beneficiario auditable + renuncia ≈ Ley III.

## v15.1–v15.7 — 2026-08-05 · Asimilaciones base (paperclip, CaaS, Conway, Solarpunk×2, Eliza, prioritize)
- **Asimilados:** Paperclip→Orquestación · CaaS→CaaS · Conway→Autómata Soberano · liz+isaac Solarpunk→Solarpunk·Don · Eliza→Colaberry · ZiadJ/prioritize→Priorizar·Colectivo.
- **Documentos:** `docs/*_backup.md` + `docs/*_integration.md` para cada uno.
- **Módulos:** `/orquestacion`, `/caas`, `/automat`, `/solarpunk`, `/colaberry`, `/priorizar` (+ los del fork DeseOS: Home, Base, Lucidez, Colectivo, ZNU, Verificación, Automat).
- **Detalle:** ver `docs/automaton_backup_original.md`, `docs/CaaS_backup_original.md`, `docs/automaton_integration.md`, `docs/CaaS_integration.md`, `docs/colaberry_backup.md`, `docs/colaberry_integration.md`, `docs/prioritize_backup.md`, `docs/prioritize_integration.md`, `docs/solarpunk_integration.md`, `docs/solarpunk_liz_backup.md`, `docs/solarpunk_isaac_backup.md`.

## v15.0 — Fork inicial (DeseOS / Contento.pro)
- Base del proyecto: marketing agency OS con 7 pantallas base (Home, Base Material, Lucidez, Colectivo, ZNU, Verificación, Automat).
- Stack: React 18 + TS + Vite + Zustand + Tailwind + lucide-react.
- `vite.config.ts` con aliases `@core`, `@app`, `@components`, `@shared`.

---

## Convenciones de verificación
- `tsc --noEmit` → 0 errores.
- `npm run build` → build de producción exitoso (conteo de módulos reportado).
- Rutas → todas responden HTTP 200 en preview (http://localhost:4173).
- Cada módulo asimilado deja: tipos en `src/core/state/`, lógica en `src/core/lib/`, acciones + estado en `store.ts`, pantalla en `src/app/screens/`, nav en `Aside.tsx`, ruta en `App.tsx`, y 2 docs en `docs/`.
