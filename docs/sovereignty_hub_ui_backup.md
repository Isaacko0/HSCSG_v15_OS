# BACKUP ORIGINAL — tairea / sovereignty-hub-ui
# Copia de seguridad del repositorio analizado (2026-08-05) antes de asimilarlo a HSCSG v15 OS.
# Fuente: https://github.com/tairea/sovereignty-hub-ui
# Stack: Vite + Three.js (visualización 13 pilares) + @supabase/supabase-js (magic-link auth + per-user state sync) + Font Awesome
# Licencia: MIT (hereda del hub)

Estructura clave:
index.html        # entry (Font Awesome vía CDN)
src/main.js       # bootstrap: Three.js globe/orbit, auth, db, survey
src/style.css
src/lib/
  supabase.js     # cliente Supabase
  auth.js         # magic-link auth state
  db.js           # profile + survey_state sync
  network-view.js # grafo/orbit view
  survey-content/ # copia por pilar (01-water ... 13-culture) + index.js
supabase/schema.sql  # tablas, RLS, trigger, storage bucket
vite.config.js

Modelo de datos (de main.js):
PILLARS = 13 (n, name, metaphor, color, faClass)  # p.ej. Water=Bloodstream, Energy=Heart, Governance=Brain
LAYERS  = 7 (Survival, Preparedness, Stockpile, Production, Commerce, Teaching, Innovation)
PHASES  = 4 (none, survive, build, scale)  # usa 'none' como no iniciado
TOTAL_Q = 13 × 7 = 91 preguntas (pillar-layer -> phase key)
answers = { "pillar-layer": phaseKey }

La UI es una ENCUESTA DE DIAGNÓSTICO de soberanía: el usuario marca en qué fase está
cada pilar en cada capa. El estado se sincroniza a Supabase por usuario.
El grafo 3D (Three.js) visualiza los 13 pilares como nodos conectados.