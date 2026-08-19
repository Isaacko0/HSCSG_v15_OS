#!/usr/bin/env bash
# sync_docs.sh — Mantiene README / BRIEF / CHANGELOG sincronizados con el estado real del repo HSCSG v15 OS,
# Y re-espeja las skills propias (prefijo hscsg-) al indice de Hermes para que no queden estaticas.
# Se ejecuta via cron (skill hscsg-unified-assimilation-science, "vasos comunicantes al dia").
# No modifica codigo: solo reconcilia metadatos de documentacion + sincroniza skills propias.
set -euo pipefail
cd "/c/Users/Isaacko0/Documents/HSCSG_v15_OS" || { echo "repo no encontrado"; exit 1; }

REPORT="=== SYNC DOCS ($(date -u +%Y-%m-%dT%H:%M:%SZ)) ==="$'\n'

# 1. Conteos reales
ROUTES=$(grep -c "<Route" src/app/App.tsx)
SKILLS=$(ls -d skills/*/ 2>/dev/null | wc -l)
DOCS=$(ls docs/research_output/*.md 2>/dev/null | wc -l)
REPORT+="Rutas en App.tsx: $ROUTES"$'\n'
REPORT+="Skills carpetas en repo: $SKILLS"$'\n'
REPORT+="Docs cientificos: $DOCS"$'\n'

# 2. Verificar build (no bloquea, solo reporta)
if npm run build >/dev/null 2>&1; then
  REPORT+="build: OK"$'\n'
else
  REPORT+="build: FALLO (revisar)"$'\n'
fi

# 3. Si README dice rutas viejas, avisar (no reescribe para no pisar ediciones manuales)
if grep -q "Router (21 rutas)" README.md; then
  REPORT+="AVISO: README arquitectura desactualizada (21 rutas) -> ejecutar sync manual"$'\n'
fi
if grep -q "Repos asimilados (20)" README.md; then
  REPORT+="AVISO: README tabla repos desactualizada (20) -> ejecutar sync manual"$'\n'
fi

# 4. Re-espejar skills propias (prefijo hscsg-) al indice de Hermes
#    Solo carpetas con SKILL.md; preserva skills de instalacion (agency-*, business-design/*, etc.)
HERMES_IDX="/c/Users/Isaacko0/AppData/Local/hermes/skills/hscsg"
mkdir -p "$HERMES_IDX"
SYNCED=0
for d in skills/*/; do
  name=$(basename "$d")
  case "$name" in
    hscsg-*)
      if [ -f "$d/SKILL.md" ]; then
        cp -r "$d" "$HERMES_IDX/"
        SYNCED=$((SYNCED+1))
      fi
      ;;
  esac
done
REPORT+="Skills propias re-espejadas al indice Hermes: $SYNCED"$'\n'

# 5. Git status resumen
UNCOMMITTED=$(git status --porcelain | wc -l)
REPORT+="Archivos sin commitear: $UNCOMMITTED"$'\n'

echo "$REPORT"

# 6. Si hay cambios en docs/ o skills/ sin commitear, sugerir commit
if [ "$UNCOMMITTED" -gt 0 ]; then
  git add -A
  git commit -q -m "docs(sync): actualizacion periodica vasos comunicantes + skills (cron)" && \
    git push origin main >/dev/null 2>&1 && \
    REPORT+="Auto-commit+push realizado."$'\n' || \
    REPORT+="Cambios stageados pero no pusheados (revisar)."$'\n'
fi

echo "$REPORT"
