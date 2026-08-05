# BACKUP ORIGINAL — Isaacko0 / Plataforma-solarpunk_utopia_project
# Copia de seguridad del repositorio analizado (2026-08-05) antes de asimilarlo a HSCSG v15 OS.
# Fuente: https://github.com/Isaacko0/Plataforma-solarpunk_utopia_project (CLAUDE.md, specs)

---

## Qué es

Proyecto de **especificación** (FASE DE DISEÑO, NO implementado) para construir comunidades
post-escasez basadas en ayuda mutua, economía del don e intercambio de recursos. Infraestructura
liberadora, offline-first, no-monetaria.

## Filosofía central

- **No-monetario**: sin dinero, crypto ni tokens. Economía del don pura.
- **Tecnología de liberación**: aumenta autonomía comunitaria, no dependencias.
- **Offline-first**: funciona sin internet, en desastres, para comunidades marginadas.
- **Privacidad**: local-first, federado, soberanía de datos del usuario.
- **Accesible**: corre en teléfonos viejos vía Termux.
- **Prueba de Emma Goldman**: "¿esto aumenta autonomía comunitaria o crea nuevas dependencias?"

## OpenSpec (spec-driven)

Specs en `OpenSpec/specs/platform/`:
- `core-platform.md` — principios, valores, capacidades.
- `resource-sharing.md` — ítems físicos, herramientas, espacios, energía, robots.
- `time-bank.md` — intercambio de habilidades, coordinación voluntaria.
- `ai-agents.md` / `ai-agent-integration.md` — 10 agentes IA coordinando vida comunitaria.
- `community-governance.md` — gobernanza, educación, cooperativas.
- `deployment-integration.md` — Termux, offline, mesh, protocolos, federación.
- `community-care.md` — check-ins, sensing distribuido, seguridad alimentaria, emergencias.
- Extendidos: food-agriculture, energy-infrastructure, water-ecology, housing, culture-tech-health,
  economic-solidarity, future-experimental.

## Stack planeado (NO implementado)

- Datos: local-first con CRDTs, sync P2P.
- Frontend: PWA + Termux en Android.
- Protocolos: ActivityPub, Meshtastic, DTN.
- IA: modelos open source, privados, control comunitario.
- Identidad: DIDs, reputación user-controlled.

## Qué NO hacer (explícito en CLAUDE.md)

- Sin crypto/blockchain/tokens.
- Sin tracking/analytics/vigilancia.
- Sin optimizar por "scale"/"growth" — optimizar por cuidado comunitario.
- Sin dependencias de infraestructura corporativa/cloud.
- Sin monetización ni marketplace.

## Relevancia para HSCSG v15 OS

Es el **manifest de economía del don no-monetaria** alineado 100% con las 3 Leyes MJ (especialmente
Ley III: lucidez, sin estética flotante financiera). Sus specs (resource-sharing, time-bank,
community-care) son el blueprint del módulo Solarpunk de HSCSG. La restricción "sin crypto" encaja
con ZNU (unidad de cuenta no-especulativa de HSCSG).
