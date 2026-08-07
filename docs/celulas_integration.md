# Células de Libertad (Freedom Cells) — Integración a Cosateca OS

Análisis triple perspectiva de la asimilación del *Manual de Células de Libertad* como módulo `/celulas`.

## Perspectiva Usuario
- Ve en la barra lateral **"Células · Tejido"** (icono Network).
- Pantalla con: estado editable de su red (células internas, miembros, grupos), principios, escala
  fractal 8→64→512→4096, 12 recomendaciones y 4 métodos de organización.
- Puede registrar cuántas células tiene y ver el "nivel de red" alcanzable (isomorfo a crecer el Colectivo).

## Perspectiva LLM
- Fuente: PDFs (texto extraído con `pdftotext`). Tres variantes (es + 2 en) coinciden en estructura.
- Lógica pura TS en `lib/celulas.ts`: `redSize(celdas)` = celdas × 8; `nivelRed(miembros)` mapa a
  escala fractal. Datos estáticos (principios/recomendaciones/métodos/niveles) en constantes.
- Estado en store (`celulas`), editable vía `setCelulas`, persistido en localStorage (partialize).
- Sin infra externa: no se conecta a FreedomCells.org; solo documenta el modelo.

## Perspectiva HSCSG + CaaS (isomorfismo)
- **Colectivo** de Cosateca es isomorfo a la célula interna (grupo pequeño de ayuda mutua). La célula de 8
  ≈ el núcleo de confianza del Colectivo.
- **Soberanía** (13 pilares / base material) ↔ principios de localización, descentralización, no violencia.
- **Postmonetario**: las células operan en contraeconomía (trueque, ingresos no gravables) = misma dirección
  que CaaS (acceso por contribución, no dinero).
- **Modo Lucidez** (Ley III) ↔ "apolítico / no violento / transparencia" de las células.
- **Diferencia**: Freedom Cells es expresamente anti-Estado; Cosateca es postmonetario pero no necesariamente
  antigubernamental. Se asimila como *tejido social fractal*, no como programa político.

## Fase skill aplicada
0. Backup `HSCSG_v15_OS_BACKUP_20260807_044350`. 1. Fuente PDF (texto). 2. Docs backup + integration.
3. Tipos/lib/store/pantalla/nav/ruta. 4. tsc + build + curl `/celulas`.
