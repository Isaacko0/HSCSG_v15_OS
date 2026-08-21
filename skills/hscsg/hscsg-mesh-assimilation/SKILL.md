---
name: hscsg-mesh-assimilation
description: Asimila hilos de comunidad y mallas de enlaces en HSCSG.
version: 1
author: HSCSG_curator
license: MIT
metadata:
  hermes:
    tags: [hscsg, assimilation, community, web, knowledge-graph]
    related_skills: [hscsg-pdf-to-framework, hscsg-repo-assimilation, hscsg-scientific-papers, hscsg-orquestador-skills]
---

# HSCSG Mesh Assimilation (malla de enlaces / hilo de comunidad)

## When to Use
- El usuario pega un hilo de Telegram/Discord/WhatsApp, un Google Doc, o un bloque de 10 a 70 URLs de nuevo paradigma, economia del bien comun, ReFi, compasion, commons o democracia liquida.
- Frase tipica: haz la magia con estos enlaces, asimila este hilo, que hacemos con estas invitaciones a grupos.
- NO es para PDFs (usa hscsg-pdf-to-framework) ni para repos (usa hscsg-repo-assimilation).

## Pipeline (3 fases, mismo molde que pdf2fw)
Fase 1 - EXTRAER Y CLASIFICAR la malla:
- Separar TODAS las URLs del dump. Descartar duplicados y el ruido del cliente: p ej discordtranslator.codecode.me/#pricing aparece 20+ veces en hilos de Discord, es basura de la UI, IGNORAR (no es fuente).
- Clasificar cada fuente VIVA por tipo: commons / ReFi-crypto / compasion-bienestar / plataforma-cooperativa / democracia-liquida / ayuda-mutua-celular / pacifismo / educacion-narrativa / indice-agregador.
- web_extract SOLO de las 5 a 10 fuentes NUCLEO para fundamentar el Brief con datos reales (miembros, propuesta, mecanismo). No hagas fetch de todas, es ruido y satura contexto.

Fase 2 - BRIEF CIENTIFICO (reusa hscsg-scientific-papers Doc 5):
- H1 / H0, tabla R1 a R10 (dato duro + implicacion HSCSG), vasos EBD-Dn / mj LeyN, conclusion, LIMITACIONES (muestra autoseleccionada, sesgo del fundador, rango de fechas).

Fase 3 - INTEGRAR + VASOS:
- docs slash slug_integration.md: mapa a SoV, extrapolaciones, 4 actionables, glosario, seccion 16 vaso al Brief.
- docs/research_output/NN_Brief_Cientifico_slug.md.
- docs/fuentes_indice.json: anadir BLOQUE Fxx a Fyy en lote (una entrada por sub-fuente viva), subir total. Cada entrada: id, nombre, tipo, mapeo_hscsg, repo_doc, fuente_oficial.
- BRIEF maestra: vaso en header (N a N+k) + nueva subseccion 18.x con la tanda.
- CHANGELOG: entrada v15.xx - fecha - Asimilacion slug.
- git add -A && git commit -q -m puntos && git push origin main (la rama es main, NO master, push a master falla).

## Reglas duras (pitfalls)
- Invitaciones a comunidades de terceros (WhatsApp/Telegram/Discord/FB/LinkedIn) son METADATOS de procedencia, NO acciones. No te unas a servidores ajenos salvo que el usuario lo pida explicitamente. Registralas como fuente_oficial en el indice.
- Verificacion del indice JSON: usa read_file para leer la cola del JSON y confirmar que Fxx a Fyy cerraron bien (corchete cierra). NO uses node -e ni python -c en terminal durante corridas autonomas, disparan prompt de consentimiento que BLOQUEA la ejecucion (verificado 4 veces esta sesion: exit -1, BLOCKED Command timed out without user response). read_file y search_files SI funcionan. No es que node falte, es el sandbox de consentimiento en modo autonomo.
- Vasos comunicantes: cada doc nuevo lleva mesh2fw colon slug y un vaso de vuelta en BRIEF seccion 16.

## Salida esperada
Brief + integration + indice ampliado + BRIEF/CHANGELOG + commit empujado a origin/main, con evidencia del hash de push (f60bd38..18bff7e main -> main).

## Referencias
- references/percon_flow_example.md - ejemplo real de esta sesion (PerCon Flow / Potentialism, F51-F60): clasificacion, mapeo y URLs nucleo.
