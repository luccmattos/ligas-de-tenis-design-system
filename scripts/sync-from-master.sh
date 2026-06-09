#!/usr/bin/env bash
# Refresh assets/ from the ligas-de-tenis monorepo master library.
# Run from anywhere inside this repo (standalone or submodule).

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
DS_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
DS_ASSETS="$DS_ROOT/assets"

resolve_monorepo_root() {
  if [[ -n "${LIGAS_MONOREPO_ROOT:-}" && -d "${LIGAS_MONOREPO_ROOT}/assets/vectors/web" ]]; then
    echo "$LIGAS_MONOREPO_ROOT"
    return
  fi
  local parent
  parent="$(cd "$DS_ROOT/.." && pwd)"
  if [[ -d "$parent/assets/vectors/web" ]]; then
    echo "$parent"
    return
  fi
  if [[ -d "$parent/ligas-de-tenis/assets/vectors/web" ]]; then
    echo "$(cd "$parent/ligas-de-tenis" && pwd)"
    return
  fi
  if [[ -d "$parent/../ligas-de-tenis/assets/vectors/web" ]]; then
    echo "$(cd "$parent/../ligas-de-tenis" && pwd)"
    return
  fi
  echo ""
}

MONOREPO_ROOT="$(resolve_monorepo_root)"
MASTER="${MONOREPO_ROOT}/assets"

if [[ -z "$MONOREPO_ROOT" || ! -d "$MASTER/vectors/web" ]]; then
  echo "error: monorepo master library not found." >&2
  echo "Set LIGAS_MONOREPO_ROOT to the ligas-de-tenis project root." >&2
  echo "Expected: \$LIGAS_MONOREPO_ROOT/assets/vectors/web/" >&2
  exit 1
fi

echo "Syncing from $MASTER → $DS_ASSETS"

mkdir -p "$DS_ASSETS/logos" "$DS_ASSETS/tournaments" "$DS_ASSETS/products"

cp "$MASTER/vectors/web/"* "$DS_ASSETS/logos/"
cp -r "$MASTER/tournaments/"* "$DS_ASSETS/tournaments/"

for dir in lat-cup lisp-cup lat-feminino lt-feminino lisp-feminino lirj-feminino lat-kids; do
  if [[ -d "$MASTER/products/$dir" ]]; then
    mkdir -p "$DS_ASSETS/products/$dir"
    cp "$MASTER/products/$dir/"*.png "$DS_ASSETS/products/$dir/" 2>/dev/null || true
    cp "$MASTER/products/$dir/"*.jpeg "$DS_ASSETS/products/$dir/" 2>/dev/null || true
  fi
done

cp "$MASTER/leagues/las/"*.png "$DS_ASSETS/logos/" 2>/dev/null || true
cp "$MASTER/leagues/larb/"*.png "$DS_ASSETS/logos/" 2>/dev/null || true

find "$DS_ASSETS" -name '.DS_Store' -delete

export DS_ROOT MONOREPO_ROOT
python3 << 'PYEOF'
import csv, hashlib, os
from pathlib import Path

root = Path(os.environ["DS_ROOT"])
ds_assets = root / "assets"
master = Path(os.environ["MONOREPO_ROOT"]) / "assets"
rows = []

for f in sorted(ds_assets.rglob("*")):
    if not f.is_file() or f.name in ("manifest.csv", ".DS_Store"):
        continue
    rel = f.relative_to(ds_assets)
    name = f.name
    src = "unknown"
    if (master / "vectors/web" / name).exists():
        src = f"assets/vectors/web/{name}"
    else:
        for league in ("lat", "lisp", "lirj"):
            p = master / "tournaments" / league / name
            if p.exists():
                src = f"assets/tournaments/{league}/{name}"
                break
        else:
            if (master / "leagues/las" / name).exists():
                src = f"assets/leagues/las/{name}"
            elif (master / "leagues/larb" / name).exists():
                src = f"assets/leagues/larb/{name}"
            else:
                for prod in (master / "products").rglob(name):
                    src = str(prod.relative_to(master.parent))
                    break
    league = ""
    for code in ("lat", "lisp", "lirj", "lt", "las", "larb"):
        if f"-{code}-" in name or name.endswith(f"-{code}"):
            league = code
            break
    rows.append({
        "destination": f"assets/{rel}",
        "source": src,
        "type": name.split("-")[0],
        "league": league,
        "variant": "default",
        "format": f.suffix.lstrip("."),
        "md5": hashlib.md5(f.read_bytes()).hexdigest(),
        "usage": "Brand asset",
        "format_rule": "SVG preferred for web" if f.suffix == ".svg" else "Raster",
        "status": "curated",
    })

out = ds_assets / "manifest.csv"
with out.open("w", newline="") as fh:
    w = csv.DictWriter(fh, fieldnames=[
        "destination", "source", "type", "league", "variant",
        "format", "md5", "usage", "format_rule", "status",
    ])
    w.writeheader()
    w.writerows(rows)
print(f"manifest.csv: {len(rows)} rows")
PYEOF

echo "Done. Review git diff before committing."
