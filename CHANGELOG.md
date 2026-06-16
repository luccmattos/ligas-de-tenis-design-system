# Changelog

All notable changes to the Ligas de Tênis Design System are documented here.

Format based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).
Versioning follows [Semantic Versioning](https://semver.org/).

## [Unreleased]

### Added

- Logo taxonomy columns in `catalog.csv` and `manifest.csv`: `logo_form`, `usage_surface`, `canonical_variant`, `legacy_variant`
- LAT `mark-on-light` (`legacy: dark`) — transparent PNG promoted to web exports
- `scripts/assets/logo_taxonomy.py` — shared surface-first mapping

### Changed

- Logo variant docs: surface-first naming (`on-light`, `on-navy`, `on-branded`) with legacy aliases
- LAT brand preview: 4-panel layout including transparent mark demo
- `sync-from-master.sh` manifest includes taxonomy columns

### Removed

- `manifest.csv` column `variant` (replaced by `legacy_variant` + `canonical_variant`)

## [2.0.3] — 2026-06-09

### Changed

- Docs: single local checkout via monorepo submodule (`design-system/`); remove redundant sibling clone

## [2.0.2] — 2026-06-09

### Changed

- Docs: parent workspace folder renamed from `ligas/` to `ligas-de-tenis/` (`ligas-de-tenis/ligas-de-tenis` monorepo layout)

## [2.0.1] — 2026-06-09

### Fixed

- Sync scripts auto-detect monorepo when DS runs as submodule or sibling clone

## [2.0.0] — 2026-06-09

### Added

- Published as standalone repo: `github.com/luccmattos/ligas-de-tenis-design-system`
- Consolidated design system package (Claude DS + Open Design + project assets)
- CSS tokens (`tokens/`) with textures and single `index.css` entry
- Seven React reference components with `.d.ts` and agent prompts
- Seven markdown guidelines (brand, colors, typography, layout, components, assets, voice)
- Curated `assets/` (108 web-ready files) with `manifest.csv`
- Browsable preview at `previews/index.html` with sidebar navigation
- UI kit references: Maria Esther Panel, Onboarding
- `styles.css`, `ds-bundle.js`, `SYNC.md`, `LICENSE`, sync scripts
- Git submodule consumption in `ligas-de-tenis` and `maria-esther-panel`
- `.gitignore` excluding `quarantine/`

### Changed

- Canonical asset naming (`logo-official-{league}-{variant}-ligas-de-tenis.*`)
- Legacy spec `documents/design-system-ligas-de-tenis.md` marked v1.0; v2.0 lives here
