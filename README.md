# Ligas de Tênis — Design System

**Version:** 2.0.0  
**Last updated:** 2026-06-09

The single source of truth for visual and verbal identity across all Ligas de Tênis products. Every component, screen, and marketing asset must reference these tokens — no hardcoded values.

> **Core thesis:** the product should make an amateur player feel the same weight and legitimacy as opening the ATP app — disciplined Navy structure, energetic Blue interactions, the warmth of community Yellow, and Green that celebrates every win.

## Quick start

```html
<link rel="stylesheet" href="tokens/index.css" />
<!-- or, when consumed as submodule: design-system/tokens/index.css -->
```

For agent-assisted generation, also load `prompts/SKILL.md`.

## Folder structure

```
design-system/               ← git submodule in ligas-de-tenis monorepo (this repo)
├── README.md              ← you are here
├── DESIGN.md              ← canonical spec for agents and creators
├── SYNC.md                ← asset sync strategy (masters → DS → apps)
├── CHANGELOG.md           ← release history
├── LICENSE                ← code/docs + brand asset terms
├── tokens/                ← CSS custom properties (entry: index.css)
├── components/            ← React reference primitives (JSX)
├── guidelines/            ← human-readable markdown guides
├── previews/              ← browsable preview (index.html)
├── ui-kits/               ← full-screen reference flows
├── assets/                ← curated logos, badges, products + manifest.csv
├── scripts/               ← sync-from-master.sh, promote-to-app.sh
└── prompts/               ← agent skill + component prompts
```

`quarantine/` is a local-only cleanup folder (gitignored). Do not publish it.

## How to use

### Tokens

Import `tokens/index.css` in any HTML page, prototype, or app shell. All colors, typography, spacing, effects, and textures are exposed as CSS custom properties.

### Components

Reference implementations live in `components/`. They use inline styles + CSS variables (not Tailwind). Use them for prototypes, agent generation, and as API contracts when porting to production TypeScript.

**Available:** `Button`, `Input`, `Select`, `OptionCard`, `Badge`, `Card`, `Stepper`

### Assets

Curated web-ready assets with canonical naming:

- `assets/logos/` — official league logos (SVG + PNG + @2x + favicons)
- `assets/tournaments/` — tier badges per league (SVG)
- `assets/products/` — cups, feminino, kids

Full inventory: `assets/manifest.csv`. Master library (PDFs, full catalog): `ligas-de-tenis/ligas-de-tenis/assets/` in the monorepo (gitignored).

**Sync:** see [SYNC.md](./SYNC.md). Flow is masters → design system → apps (one way). Refresh assets with `./scripts/sync-from-master.sh`; promote to apps with `./scripts/promote-to-app.sh`.

### Guidelines

Read `guidelines/` for focused topics: brand, colors, typography, layout, components, assets, voice and tone, [admin search fields](./guidelines/admin-search-fields.md) (operator panel person lookup).

### Preview (browsable)

Open `previews/index.html` in a browser for a sidebar-navigated preview (Brand, Colors, Spacing, Type, Buttons, Forms, Display, UI kits). Serve locally if needed:

```bash
python3 -m http.server 8787
# open http://127.0.0.1:8787/previews/
```

### UI kits

- `ui-kits/maria-esther-panel/` — operator Match Desk reference
- `ui-kits/onboarding/` — player registration flow reference

These are standalone React demos (CDN + Babel). Not production code.

## Sources merged

| Source | Role in v2.0 |
|--------|----------------|
| Claude DS (Downloads) | **Primary** — tokens, components, voice/tone, guidelines |
| `documents/design-system-ligas-de-tenis.md` (monorepo) | v1.0 spec — merged here; file is now a redirect |
| Open Design (`ds-ligas-de-tenis`) | Textures, `DESIGN.md` structure, product modules |
| `assets/` (project) | **Canonical** logos, badges, products |

## Conflict resolution

When sources disagree, **Claude DS wins** for narrative, components, and guidelines. **Project `assets/` wins** for file naming and visual masters. Open Design fills gaps (textures, layout modules).

## Repository

**GitHub:** `github.com/luccmattos/ligas-de-tenis-design-system`

Consumers pin this repo as a **git submodule** at semver tags (e.g. `design-system/` inside `ligas-de-tenis` or `maria-esther-panel`). See [SYNC.md](./SYNC.md).

## Not in scope (yet)

- npm package publishing (submodule is sufficient for now)
- Deleting master assets from monorepo `assets/`

## Open brand items

- LAT `light` logo — no vector master yet
- LARB/Ravenna pages — 11 extracted PDFs pending identification
- Tier names for 125/250/500/1000 pts (only Challenger = 80 confirmed)

## Related docs

- Sync strategy: [SYNC.md](./SYNC.md)
- Changelog: [CHANGELOG.md](./CHANGELOG.md)
- License: [LICENSE](./LICENSE)
- Business vision (monorepo): `documents/business-vision-ligas-de-tenis.md`
- Monorepo index (redirect): `documents/design-system-ligas-de-tenis.md`
- Asset master library (monorepo): `assets/README.md`
- Admin search fields (operator panel): [guidelines/admin-search-fields.md](./guidelines/admin-search-fields.md)
- Cursor rule (monorepo): `.cursor/rules/admin-search-fields.mdc`
