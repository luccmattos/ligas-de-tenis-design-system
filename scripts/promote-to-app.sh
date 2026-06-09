#!/usr/bin/env bash
# Copy approved logos from assets/logos/ to maria-esther-panel public/brands/.
# Extend FILES when new leagues are promoted to production.

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
DS_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
SRC="$DS_ROOT/assets/logos"

resolve_monorepo_root() {
  if [[ -n "${LIGAS_MONOREPO_ROOT:-}" && -d "${LIGAS_MONOREPO_ROOT}/apps/maria-esther-panel" ]]; then
    echo "$LIGAS_MONOREPO_ROOT"
    return
  fi
  local parent
  parent="$(cd "$DS_ROOT/.." && pwd)"
  if [[ -d "$parent/apps/maria-esther-panel" ]]; then
    echo "$parent"
    return
  fi
  if [[ -d "$parent/ligas-de-tenis/apps/maria-esther-panel" ]]; then
    echo "$(cd "$parent/ligas-de-tenis" && pwd)"
    return
  fi
  if [[ -d "$parent/../ligas-de-tenis/apps/maria-esther-panel" ]]; then
    echo "$(cd "$parent/../ligas-de-tenis" && pwd)"
    return
  fi
  echo ""
}

MONOREPO_ROOT="$(resolve_monorepo_root)"

if [[ -n "${LIGAS_APP_ROOT:-}" ]]; then
  DEST="$LIGAS_APP_ROOT/public/brands"
elif [[ -n "$MONOREPO_ROOT" && -d "$MONOREPO_ROOT/apps/maria-esther-panel" ]]; then
  DEST="$MONOREPO_ROOT/apps/maria-esther-panel/public/brands"
else
  DEST=""
fi

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

if [[ -z "$DEST" ]]; then
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
