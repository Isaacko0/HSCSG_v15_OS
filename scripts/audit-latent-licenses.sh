#!/bin/bash
# Auditoría automática de licencias en repos GitHub sin licencia detectada

set -euo pipefail

LATENT_REPOS=(
  "Isaacko0/berryvesting"
  "Isaacko0/colaberry"
  "Isaacko0/solarpunk_utopia"
  "lizTheDeveloper/solarpunk_utopia"
  "disco-coop/disco-coop"
  "fabship/fabship"
  "prosocial/prosocial"
  "GuiFV/life"
  "ZiadJ/prioritize"
  "JoinColony/colony-gql"
  "JoinColony/colonyJS"
  "JoinColony/colonyNetwork"
  "JoinColony/colonySDK"
  "kleros/kleros"
  "kleros/kleros-ecosystem"
  "nextcloud/server"
  "Baruch4413/tekitl"
  "opencivics/opencivics.co"
  "auravana/auravana"
  "8forms.capital"
  "projectweave.tech"
  "openhaven.net"
  "gaia-mycelium.org"
  "copiosis.net"
)

echo "🔍 Auditando licencias en ${#LATENT_REPOS[@]} repos..."
echo ""

for repo in "${LATENT_REPOS[@]}"; do
  echo -n "  $repo: "
  license=$(gh api "repos/$repo/license" --jq '.license.spdx_id' 2>/dev/null || echo "SIN LICENCIA / NO ACCESIBLE")
  echo "$license"
done

echo ""
echo "✅ Auditoría latente completada"
echo "📝 Revisar resultados y añadir LICENSE MIT a repos propios sin licencia"
