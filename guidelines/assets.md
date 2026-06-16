# Assets

Curated web-ready assets in `assets/`. Full inventory: `assets/manifest.csv`.

## Sources of truth

| Layer | Location | Role |
|-------|----------|------|
| Brand masters | Monorepo `assets/` (gitignored) | PDF kits, print, `catalog.csv` |
| **Design system** | `assets/` in this repo | Web SVG/PNG, badges, products |
| Apps | `public/brands/` in each app | Runtime copies for deploy |

**Flow:** masters → design system → apps (one way). See [SYNC.md](../SYNC.md).

## Naming convention

```
[type]-[subject]-[league]-[legacy-variant]-ligas-de-tenis.[ext]
```

Filenames keep **legacy variant slugs** (`dark`, `light`, `blue`) for backward compatibility.
Semantic labels live in `manifest.csv` and master `catalog.csv`:

| Column | Meaning |
|--------|---------|
| `legacy_variant` | Slug in filename (`dark`, `light`, …) |
| `canonical_variant` | Preferred label (`mark-on-light`, `badge-on-navy`, …) |
| `logo_form` | `badge` (closed card) or `mark` (transparent lockup) |
| `usage_surface` | `on-light` · `on-navy` · `on-branded` · `on-dark` · `any` |

## Logo taxonomy (surface-first)

| usage_surface | logo_form | canonical_variant | LAT legacy file | When to use |
|---------------|-----------|-------------------|-----------------|-------------|
| `any` | `badge` | `default` | `logo-official-lat-default-…` | Official navy badge |
| `on-light` | `mark` | `mark-on-light` | `logo-official-lat-dark-…` | Transparent mark on light/off-white |
| `on-navy` | `badge` | `badge-on-navy` | `logo-official-lat-light-…` | Contrast on `#1f2e60` |
| `on-branded` | `badge` | `branded` | `logo-official-lat-blue-…` | Hero / branded (SVG only until re-export) |
| `on-branded` | `badge` | `finals` | `logo-official-lat-blue-finals-…` | Events / finals |

**Important:** LAT `legacy: dark` ≠ LIRJ `legacy: dark`. LAT dark = transparent mark for light surfaces. LIRJ dark = badge for dark surfaces.

Cross-league `legacy: light` always maps to `badge-on-navy` / `usage_surface: on-navy`.

## Folder layout

```
assets/
├── logos/          ← official league logos (SVG + PNG + @2x + favicons)
├── tournaments/    ← tier badges per league (SVG)
│   ├── lat/
│   ├── lisp/
│   └── lirj/
└── products/       ← cups, feminino, kids
```

## Format rules

- **Web UI:** SVG preferred; PNG @2x fallback
- **Print / Canva:** PDF master from monorepo `assets/vectors/source/`
- **Favicons:** `favicon-{league}-32.png`
- **Do not** embed PDFs in `<img>` tags

## Sync workflows

```bash
./scripts/sync-from-master.sh   # refresh assets + manifest.csv
./scripts/promote-to-app.sh     # copy approved set to app public/brands/
```

## Open items

- LAT `blue` logo — SVG only; raster export removed (bad quality)
- LARB logos — raster only
- Tier names 125/250/500/1000 — pending brand confirmation
- File renames to canonical slugs — deferred; aliases documented in catalog
