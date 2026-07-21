#!/usr/bin/env bash
# Build the GBRF microsite as an encrypted static bundle for GitHub Pages.
#
#   STATICRYPT_PASSWORD='your-password' ./build-static.sh
#
# Produces ./site — a flat, deployable, StatiCrypt-encrypted static site
# (with .nojekyll so GitHub Pages serves the _next/ folder).
#
# BASE_PATH must equal your GitHub Pages sub-path, i.e. "/<repo-name>".
# For a user/org root repo (<user>.github.io) or a custom domain, set BASE_PATH="".
set -euo pipefail

BASE_PATH="${BASE_PATH:-/gbrf-microsite}"

if [ -z "${STATICRYPT_PASSWORD:-}" ]; then
  echo "ERROR: set STATICRYPT_PASSWORD before running." >&2
  echo "  STATICRYPT_PASSWORD='GBRF-Reef-2031' ./build-static.sh" >&2
  exit 1
fi

echo "▸ Cleaning…"
rm -rf .next out out_enc site

echo "▸ Building static export (BASE_PATH=$BASE_PATH)…"
BASE_PATH="$BASE_PATH" npx next build

echo "▸ Encrypting with StatiCrypt…"
# Reads the committed salt from .staticrypt.json so re-encryption is reproducible.
npx staticrypt out -r -d out_enc \
  --password "$STATICRYPT_PASSWORD" \
  --remember 30 --short \
  --template staticrypt-template.html \
  --template-title "Great Barrier Reef Foundation × Salesforce" \
  --template-instructions "This executive briefing is confidential and prepared exclusively for the Great Barrier Reef Foundation. Enter the access password to continue." \
  --template-button "Enter briefing" \
  --template-placeholder "Access password" \
  --template-error "Incorrect password — please try again." \
  --template-color-primary "#00A1E0" \
  --template-color-secondary "#04263B"

echo "▸ Flattening to ./site …"
rm -rf site
mv out_enc/out site
rm -rf out_enc out
touch site/.nojekyll   # tell GitHub Pages not to run Jekyll (keeps _next/)

echo "✓ Done. Encrypted site is in ./site — deploy that folder to GitHub Pages."
