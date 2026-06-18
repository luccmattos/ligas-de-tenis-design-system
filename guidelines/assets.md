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
[type]-[subject]-[league]-[variant]-ligas-de-tenis.[ext]
```

Examples:

- `logo-official-lat-default-ligas-de-tenis.svg`
- `badge-tournament-challenger-80pts-lat-default-ligas-de-tenis.svg`
- `banner-cup-lat-horizontal-white-ligas-de-tenis.png`

## Folder layout

```
assets/
├── logos/          ← official league logos (SVG + PNG + @2x + favicons)
├── tournaments/    ← tier badges per league (SVG)
│   ├── lat/
│   ├── lisp/
│   └── lirj/
└── products/       ← cups, feminino, kids
    ├── lat-cup/
    ├── lisp-cup/
    └── ...
```

## Logo variants by background

| Background | Variant | LAT example |
|------------|---------|-------------|
| White / light | `default` | `logo-official-lat-default-ligas-de-tenis.svg` |
| Navy `#1f2e60` | `light` | `logo-official-lat-light-ligas-de-tenis.svg` |
| Branded hero / finals | `blue` or `blue-finals` | `logo-official-lat-blue-finals-ligas-de-tenis.svg` |
| Dark (LIRJ) | `dark` | `logo-official-lirj-dark-ligas-de-tenis.svg` |

`light` = contrast on navy (light blue silhouette + readable wordmark). Not limited to white backgrounds.

## Format rules

- **Web UI:** SVG preferred; PNG @2x fallback
- **Print / Canva:** PDF master from monorepo `assets/vectors/source/`
- **Favicons:** `favicon-{league}-32.png`
- **Do not** embed PDFs in `<img>` tags

## League-specific rules

- **LT** umbrella mark for cross-league / generic contexts
- **LAT** for flagship league surfaces
- **LAS** for squash — never tennis logos
- **LARB** for beach tennis — never tennis logos

## Tournament badges

Tier badges live under `assets/tournaments/{league}/`:

| Points | Name | Filename segment |
|--------|------|------------------|
| 80 | Challenger | `challenger-80pts` |
| 125 | — | `125pts` |
| 250 | — | `250pts` |
| 500 | — | `500pts` |
| 1000 | — | `1000pts` |

Only Challenger (80) tier name is confirmed by brand owner.

## Products

| Product | Path | Notes |
|---------|------|-------|
| LAT CUP | `products/lat-cup/` | horizontal transparent + white wordmark |
| LISP CUP | `products/lisp-cup/` | beach tennis cup banner |
| LAT Feminino | `products/lat-feminino/` | women's program logo |
| LAT Kids | `products/lat-kids/` | JPEG only (no vector yet) |

## Sync workflows

### Refresh curated assets from master library

```bash
./scripts/sync-from-master.sh
```

Copies web exports from monorepo `assets/` into `design-system/assets/` and regenerates `manifest.csv`.

### Promote logos to a production app

```bash
./scripts/promote-to-app.sh
```

Copies the approved LAT default set to `apps/maria-esther-panel/public/brands/`. Extend the `FILES` list in the script when more leagues go to production.

### Release to consumers (separate repo)

1. Commit changes in design-system repo
2. Tag semver (`v2.0.1`)
3. Consumers update git submodule: `git submodule update --remote design-system`

## Open items

- LAT `blue` logo — SVG only; raster export removed (bad quality); re-export pending
- LARB logos — raster only (`larb-option-a/b`)
- Tier names 125/250/500/1000 — pending brand confirmation
