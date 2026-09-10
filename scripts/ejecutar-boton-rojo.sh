#!/bin/bash
# ORQUESTADOR BOTÓN ROJO MONUMENTAL
# Ejecuta todas las fases secuencialmente

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

echo "🔴 EJECUTANDO BOTÓN ROJO MONUMENTAL — AUDITORÍA LICENCIAS HSCSG v15 OS"
echo "====================================================================="
echo ""

# Fase 1: Microservicios GPL/AGPL
echo "▶ FASE 1: Microservicios GPL/AGPL..."
bash "$ROOT_DIR/scripts/ejecutar-boton-rojo-fase1.sh"

# Fase 2: NC-ND (verificar)
echo "▶ FASE 2: Verificar NC-ND..."
bash "$ROOT_DIR/scripts/ejecutar-boton-rojo-fase2.sh"

# Fase 3: Auditoría latente
echo "▶ FASE 3: Auditoría fuentes latentes..."
bash "$ROOT_DIR/scripts/audit-latent-licenses.sh"

# Fase 4: CI/CD
echo "▶ FASE 4: CI/CD license-checker..."
bash "$ROOT_DIR/scripts/ejecutar-boton-rojo-fase4.sh"

# Fase 5: Documentación
echo "▶ FASE 5: Documentación legal..."
bash "$ROOT_DIR/scripts/ejecutar-boton-rojo-fase5.sh"

# Fase 6: Verificación final
echo "▶ FASE 6: Verificación final..."
bash "$ROOT_DIR/scripts/verify-license-compliance.sh"

echo ""
echo "🎉 BOTÓN ROJO MONUMENTAL COMPLETADO"
