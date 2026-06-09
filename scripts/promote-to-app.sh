#!/usr/bin/env bash
# Copy approved logos from assets/logos/ to maria-esther-panel public/brands/.
# Extend FILES when new leagues are promoted to production.

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
DS_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
MONOREPO_ROOT="${LIGAS_MONOREPO_ROOT:-$(cd "$DS_ROOT/../ligas-de-tenis" 2>/dev/null && pwd || true)}"
SRC="$DS_ROOT/assets/logos"
DEST="${LIGAS_APP_ROOT:-$MONOREPO_ROOT/apps/maria-esther-panel}/public/brands"

FILES=(
  logo-official-lat-default-ligas-de-tenis.svg
  logo-official-lat-default-ligas-de-tenis.png
  logo-official-lat-default-ligas-de-tenis@2x.png
  favicon-lat-32.png
)

if [[ ! -d "$SRC" ]]; then
  echo "error: $SRC not found" >&2
  exit 1
fi

if [[ -z "${LIGAS_APP_ROOT:-}" && ( -z "$MONOREPO_ROOT" || ! -d "$MONOREPO_ROOT/apps/maria-esther-panel" ) ]]; then
  echo "error: app path not found." >&2
  echo "Set LIGAS_APP_ROOT to maria-esther-panel root, or LIGAS_MONOREPO_ROOT to ligas-de-tenis." >&2
  exit 1
fi

mkdir -p "$DEST"

for f in "${FILES[@]}"; do
  if [[ ! -f "$SRC/$f" ]]; then
    echo "error: missing $SRC/$f" >&2
    exit 1
  fi
  cp "$SRC/$f" "$DEST/$f"
  echo "promoted: $f"
done

echo "Done → $DEST"
