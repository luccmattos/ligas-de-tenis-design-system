# Changelog

All notable changes to the Ligas de Tênis Design System are documented here.

Format based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).
Versioning follows [Semantic Versioning](https://semver.org/).

## [Unreleased]

### Added

- `SYNC.md` — asset and consumer sync strategy
- `scripts/sync-from-master.sh` — refresh curated assets from monorepo master library
- `scripts/promote-to-app.sh` — push approved logos to app `public/brands/`
- `LICENSE` and this changelog
- `.gitignore` excluding `quarantine/`

### Changed

- Documentation updated for standalone-repo preparation and sync workflow

## [2.0.0] — 2026-06-09

### Added

- Consolidated design system package (Claude DS + Open Design + project assets)
- CSS tokens (`tokens/`) with textures and single `index.css` entry
- Seven React reference components with `.d.ts` and agent prompts
- Seven markdown guidelines (brand, colors, typography, layout, components, assets, voice)
- Curated `assets/` (108 web-ready files) with `manifest.csv`
- Browsable preview at `previews/index.html` with sidebar navigation
- UI kit references: Maria Esther Panel, Onboarding
- `styles.css` and `ds-bundle.js` at package root

### Changed

- Canonical asset naming (`logo-official-{league}-{variant}-ligas-de-tenis.*`)
- Legacy spec `documents/design-system-ligas-de-tenis.md` marked v1.0; v2.0 lives here
