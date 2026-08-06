# Sinergias IDETRA ↔ HSCSG v15 OS (Cosateca OS)

> Doc de mapeo fundamentado en el contenido real de https://idetra.org/ y https://idetra.org/about/
> (leído vía navegador el 2026-08-05). No especulativo: cada sinergia cita una iniciativa real de IDETRA.

---

## 0. Qué es IDETRA (real)

**IDETRA** = *Initiative to Develop a Transition to a Circular Resource System*.
Misión: *"Develop a better world… by improving yourself and your own environment"*.

Tres ejes (página about):
- **Knowledge** — crear redes organizadas de insight.
- **Sustainability** — blueprint para cambio duradero.
- **Transparency** — construir confianza en la era de la información.

Iniciativas (home): Mundus, Sci-Hive, Terra Formus, Plann.us, Temet.app, Good Food,
Delta Center, EduBox, Sumus, ClimaCell, OpenBot.

**Insight clave:** Mundus declara abiertamente *"elimination of monetary dependency"* y un
*Circular Exchange System*. IDETRA y HSCSG llegan al **postmonetario** desde ángulos distintos
(IDETRA desde recursos circulares; HSCSG desde el Materialismo Jerárquico / CaaS). Son gemelos teóricos.

---

## 1. Perspectiva del Usuario (qué gana un nodo)

- Quiere dejar de depender del dinero para acceder a recursos → Mundus + CaaS/ZNU lo hacen real.
- Quiere saber qué info es vetted → Sci-Hive (marcador SCI) + Verificación/Lucidez.
- Quiere planes sostenibles que funcionen → Terra Formus + Soberanía (OAD eco-certificado).
- Quiere gestionar sus proyectos sin pagar upgrade → Plann.us + Tekitl.
- Quiere privacidad local → Temet.app + Colaberry/Modo Lucidez.
- Quiere soberanía alimentaria/energética/material → Good Food/ClimaCell/Delta Center + pilares de Soberanía.

---

## 2. Perspectiva del LLM (qué asimilar / qué extirpar)

### Asimilar (como filosofía + datos de mapeo)
| Iniciativa IDETRA | Vector HSCSG | Rol |
|---|---|---|
| Mundus (Circular Exchange) | CaaS + ZNU + Integral/ITC | Postmonetario: acceso por contribución, no por dinero |
| Sci-Hive (SCI, ramificable) | Verificación + Lucidez + FRS | Knowledge/Transparency: validación de claims |
| Terra Formus (soluciones evaluadas) | Soberanía (OAD) + Autómata | Sustainability: "feasible plans withstand burden of proof" |
| Plann.us | Tekitl | Gestión de proyectos postmonetaria |
| Temet.app (local LLM/RAG) | Colaberry + Modo Lucidez | Privacidad local-first |
| Delta Center / EduBox | Base Material + Soberanía | Civic hubs, FabLab, Library of Things |
| Sumus (boicot consciente) | Verificación + Priorizar | Alineación por principios (Ley III) |
| Good Food / ClimaCell / OpenBot | Soberanía (Agua/Comida/Energía) | Pilares 1-3 del diagnóstico |

### Extirpar (infra de IDETRA)
- Sitios web silo por iniciativa (HSCSG los une en un nodo local portable).
- Modelo "free para pequeñas iniciativas, upgradeable" de Plann.us → en HSCSG no hay paywall.
- Dependencia de Google Analytics (HSCSG es local, sin tracking).

---

## 3. Perspectiva HSCSG v15 OS + CaaS (monetario → postmonetario)

### Isomorfismo con Materialismo Jerárquico (Leyes I/II/III)
- **Ley I** (no dañar base material): Terra Formus evalúa escala/costo/ciclo de vida/residuos; Soberanía mide los 13 pilares. Mismo instinto.
- **Ley II** (ganarse la vida soberanizando): Mundus "eliminate monetary dependency" + CaaS acceso por AUT. El Circular Exchange System = CaaS.
- **Ley III** (lucidez, nunca engañar): Sci-Hive (SCI) + Verificación + FRS + Modo Lucidez. Transparency es eje de IDETRA.

### Tres sinergias estratégicas (las grandes)
1. **Postmonetario compartido** — Fusionar *Circular Exchange System* (Mundus) con *CaaS* (HSCSG)
   en un solo marco: acceso por contribución a la base material, no por dinero. ZNU (demurrage)
   e ITC (decay, no-transferible) son la implementación técnica de "eliminate monetary dependency".
2. **HSCSG como el "OS" de las iniciativas IDETRA** — hoy cada iniciativa IDETRA es un silo web;
   HSCSG las une en un nodo soberano local, portable, sin backend (ya desplegado en Vercel).
3. **Transparencia / Knowledge** — Sci-Hive + Verificación + FRS dan a IDETRA un *nervous system*
   de retroalimentación para su misión de Transparency.

### Matriz de mapeo directo
| Iniciativa IDETRA | Módulo HSCSG | Sinergia concreta |
|---|---|---|
| Mundus | CaaS + ZNU + Integral/ITC | Circular Exchange = CaaS; ZNU/ITC = anti-monetario técnico |
| Sci-Hive | Verificación + Lucidez + FRS | SCI vetted = Ley III; FRS consume signals |
| Terra Formus | Soberanía (OAD) + Autómata | Diseños certificados ecoScore = "burden of proof" |
| Plann.us | Tekitl | Proyectos + coins sociales, sin paywall |
| Temet.app | Colaberry + Modo Lucidez | Local LLM/RAG, privacidad, transparencia radical |
| Delta Center / EduBox | Base Material + Soberanía | Library of Things / FabLab = pilares Material/Herramientas |
| Sumus | Verificación + Priorizar | Filtro de alineación = Ley III + deliberación |
| Good Food / ClimaCell / OpenBot | Soberanía (Agua/Comida/Energía) | Pilares 1-3 del diagnóstico |

---

## 4. Entregable sugerido (no implementado aún)

Si se decide avanzar, se puede crear un módulo `/idetra` en HSCSG que enlace las iniciativas
como "vectores de transición circular" mapeados a los módulos existentes, con la misma
arquitectura de los otros módulos asimilados (tipos + lib + store + pantalla + nav/ruta).

Por ahora este doc documenta la sinergia para la Fase 3 (GitHub) del flujo de asimilación.

---

## 5. Fuentes
- https://idetra.org/ (home: iniciativas Mundus, Sci-Hive, Terra Formus, Plann.us, Temet.app, Good Food, Delta Center, EduBox, Sumus, ClimaCell, OpenBot)
- https://idetra.org/about/ (ejes Knowledge / Sustainability / Transparency)
