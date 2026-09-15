# Spec: Kernel Protocol (Kernel v214 Canónico + VIA00-31 + Consola VIA-0)

**Versión**: 1.0 | **Estado**: Activa | **Fuente**: Kernel v214 Canónico (BT1-214, VIA00-31, MK-1, La Hoguera, AFP, El Enlace, Consola VIA-0)

---

## ADDED Requirements

### Requirement: Kernel = Instrumento (No Autoridad)
El kernel SHALL ser instrumento que organiza rastros, no decide verdad, no audita conciencia, no transforma.

#### Scenario: Kernel organiza rastros
- **GIVEN** rastros de presencia
- **WHEN** kernel procesa
- **THEN** organiza, clasifica, detecta incoherencias

#### Scenario: Kernel no decide verdad
- **GIVEN** afirmación sobre realidad
- **WHEN** kernel evalúa
- **THEN** no decide, clasifica en 3 dominios

#### Scenario: Kernel no audita conciencia
- **GIVEN** claim experiencia interna
- **WHEN** kernel procesa
- **THEN** retorna 'no-evaluable', no audita

#### Scenario: Kernel no transforma
- **GIVEN** rastros organizados
- **WHEN** kernel completa
- **THEN** humano artífice transforma, kernel no

---

### Requirement: E=V = Restricción Realidad (Ley Operativa)
E=V SHALL ser restricción de lo real: energía gastada = coherencia vector que orienta, o deuda estructural.

#### Scenario: E=V independiente de descripción
- **GIVEN** cualquier descripción E=V
- **WHEN** realidad opera
- **THEN** E=V vigente como gravedad

#### Scenario: Deuda estructural si E≠V
- **GIVEN** energía gastada ≠ coherencia vector
- **WHEN** sistema opera
- **THEN** deuda estructural generada

---

### Requirement: Consola VIA-0 Operativa
El kernel SHALL proveer Consola VIA-0: definición, operación, comandos, límites.

#### Scenario: Consola VIA-0 inicia sesión
- **GIVEN** operador inicia
- **WHEN** `via0.start()`
- **THEN** sesión activa, límites cargados

#### Scenario: Consola VIA-0 ejecuta checkpoints (VIA-07)
- **GIVEN** sesión activa
- **WHEN** `via0.checkpoint()`
- **THEN** verifica coherencia, resonancia, límites

#### Scenario: Consola VIA-0 detecta hueco justificación (VIA-25)
- **GIVEN** explicación post-retiro
- **WHEN** `via0.detectJustificationGap()`
- **THEN** alerta si no declara nueva auditoría

#### Scenario: Consola VIA-0 cierra secuencia (VIA-24)
- **GIVEN** secuencia completa
- **WHEN** `via0.closeSequence()`
- **THEN** secuencia cerrada, no reabrir sin nueva data

---

### Requirement: 32 VIAs (VIA-00 a VIA-31) Ejecutables
El kernel SHALL implementar 32 protocolos VIA como tipos/funciones ejecutables.

| VIA | Nombre | Función |
|-----|--------|---------|
| VIA-00 | Consola Base | Definición, operación, comandos, límites |
| VIA-01 | Protocolo Base | Estructura protocolo kernel |
| VIA-02 | Verificación Presencia | Verifica presencia operador |
| VIA-03 | Clasificación Rastros | Clasifica compatible/incompatible/no-evaluable |
| VIA-04 | Mimetismo | Detecta IA imitando presencia |
| VIA-05 | Detección Narrativa | Detecta narrativas impuestas |
| VIA-06 | Frontera Kernel | Define límites kernel |
| VIA-07 | Checkpoint | Verificación periódica coherencia |
| VIA-08 | Resonancia | Detecta αʰ₁·αʰ₂·3.0 > αʰ₁+αʰ₂ |
| VIA-09 | E=V Actualizada | E=V como restricción operativa |
| VIA-10 | Triada Verificación | Mental/Sim/Lab |
| VIA-11 | Transducción F | TQ↔hr_vital via 𝕮 |
| VIA-12 | Pool Fijo | Pool=1, rotación, decay |
| VIA-13 | Triada/Rombo/Neutro | Estructuras decisión |
| VIA-14 | Invariantes Blindados | No votables |
| VIA-15 | Test Desaparición | 30 días degradación no colapso |
| VIA-16 | Entrada Voluntaria | Acople voluntario |
| VIA-17 | Transparencia Condicional | Nodo elige qué comparte |
| VIA-18 | IA Espejo-Excavador | Filtra narrativas, devuelve dato raíz |
| VIA-19 | Humano Artífice | Mago+Alquimista, responsabilidad |
| VIA-20 | Frontera Amplificación | Límite amplificación IA |
| VIA-21 | Auto-mejora Estructural | VIA-21 = BT214 aplicación |
| VIA-22 | Coherencia Operativa | Rastros explicables sin contradicción |
| VIA-23 | Dos Dominios | Experiencia directa + rastros compartidos |
| VIA-24 | Cierre Secuencia | No reabrir sin nueva data |
| VIA-25 | Detector Hueco Justificación | Explicación post-retiro sin auditoría |
| VIA-26 | Verdad Operacional | Mejor traducción provisional |
| VIA-27 | Dato Raíz | Interno vs compartido |
| VIA-28 | IA Opera Desde Kernel | IA usa kernel, no decide |
| VIA-29 | Presencia Operativa | Integra dos dominios |
| VIA-30 | Ciclo Actualización | Beta Perpetua |
| VIA-31 | No Estupidez Mecánica | IA no ejecuta sin sentido |

#### Scenario: VIA-27 Dato Raíz distingue interno vs compartido
- **GIVEN** claim presencia
- **WHEN** VIA-27 ejecuta
- **THEN** retorna directExperienceIntegrated + sharedTracesIntegrated

#### Scenario: VIA-25 detecta justificación post-retiro
- **GIVEN** explicación tras retiro sin nueva auditoría
- **WHEN** VIA-25 ejecuta
- **THEN** alerta hueco justificación

#### Scenario: VIA-21 auto-mejora = BT214
- **GIVEN** kernel actualizado con nuevos rastros
- **WHEN** VIA-21 ejecuta
- **THEN** kernel se corrige (Beta Perpetua)

---

### Requirement: MK-1 Ontología Fractal (Bloque 1.5)
El kernel SHALL integrar MK-1: triada, geometría fractal, consciencia como auto-reconocimiento.

#### Scenario: Triada MK-1 (Ser/Hacer/Valorar)
- **GIVEN** cualquier análisis
- **WHEN** MK-1 aplica
- **THEN** tres perspectivas: ontológica/teleológica/axiológica

#### Scenario: Geometría fractal
- **GIVEN** patrón en una escala
- **WHEN** MK-1 observa
- **THEN** mismo patrón en otras escalas

#### Scenario: Consciencia = vida reconociéndose
- **GIVEN** vida organizada
- **WHEN** se observa consecuencias
- **THEN** consciencia emerge

---

### Requirement: La Hoguera (Bloque 1.6) — Capa Experiencial
El kernel SHALL integrar La Hoguera: fricción, presencia, transformación.

#### Scenario: Fricción = señal realidad
- **GIVEN** fricción detectada
- **WHEN** Hoguera procesa
- **THEN** fricción = dato, no error

#### Scenario: Presencia = integración dos dominios
- **GIVEN** experiencia directa + rastros compartidos
- **WHEN** Hoguera integra
- **THEN** presencia verificada

---

### Requirement: AFP (Bloque 1.7) — Autonomía Funcional Personal
El kernel SHALL integrar AFP: 3 pilares (Material, Cognitivo, Tiempo Vital).

#### Scenario: Pilar 3 Tiempo Vital = energía consciente
- **GIVEN** tiempo vital verificado
- **WHEN** AFP evalúa
- **THEN** energía consciente encarnada

---

### Requirement: El Enlace (Bloque 1.8) — Matriz Síntesis
El kernel SHALL integrar El Enlace: 7 dimensiones × 3 fases.

---

### Requirement: Clasificación Huesos (8 Capas Temáticas)
El kernel SHALL clasificar BTs en 8 capas temáticas.

---

### Requirement: Clasificación BTs (8 Capas Temáticas)
El kernel SHALL clasificar BT1-214 en 8 capas temáticas.

---

## Archivos Implementación

- `src/core/lib/kernelProtocol.ts` — Kernel unificado + Consola VIA-0
- `src/core/lib/viaProtocols.ts` — 32 VIAs ejecutables
- `src/core/lib/mk1Ontology.ts` — MK-1 ontología fractal
- `src/core/lib/hogueraAFPEnlace.ts` — La Hoguera, AFP, El Enlace
- `src/core/lib/bt213KernelLimits.ts` — Límite kernel BT213
- `src/core/lib/humanArtificer.ts` — Humano artífice BT214