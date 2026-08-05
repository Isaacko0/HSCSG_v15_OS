# BACKUP ORIGINAL — overkillkulture / sovereignty-hub
# Copia de seguridad del repositorio analizado (2026-08-05) antes de asimilarlo a HSCSG v15 OS.
# Fuente: https://github.com/overkillkulture/sovereignty-hub
# Stack: Documentación + blueprints (Markdown). No es código ejecutable (el live ARAYA es privado).
# Licencia: MIT

Estructura clave:
pillars/           # 13 pilares de civilización, cada uno con blueprint, BOM, instrucciones
  01-water ... 13-culture
web/               # (espejo de la UI, con supabase, vite)
ACTION_MATRIX.md, ARCHETYPE_PATHS.md, BLUEPRINT_STANDARD.md, CHEAT_CODES.md,
CROSS_PILLAR_PATTERNS.md, INTERSECTION_MATRIX_13x13.md, SYSTEM_ARCHITECTURE.md,
MASTER_SUMMARY.md, DEVELOPMENT_ROADMAP.md

Concepto central: Patrón 3 × 7 × 13 = ∞
- 13 pilares = QUÉ construir (Agua, Comida, Shelter, Energía, Medicina, Comunicación,
  Manufactura, Seguridad, Transporte, Comercio, Gobernanza, Conocimiento, Cultura)
- 7 capas = CÓMO expresar (Survival, Preparedness, Stockpile, Production, Commerce, Teaching, Innovation)
- 3 fases = CUÁNDO activar (Survive, Build, Scale)
- 13 × 7 × 3 = 273 puntos de acción
- Pattern Theory: algoritmo para detectar verdad vs manipulación (isomorfo a Lucidez/Ley III)

Offline AI Stack (~$150): Whisper + Ollama (Phi-3/Mistral) + Kokoro TTS + Meshtastic + Cyclotron (SQLite, 174K knowledge atoms).