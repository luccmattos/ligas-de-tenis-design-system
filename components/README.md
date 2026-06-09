# Components — reference library

React JSX primitives that consume CSS variables from `tokens/index.css`. These are **reference implementations** for prototypes, agent generation, and API contracts — not production Tailwind components.

## Stack

| Layer | Technology |
|-------|------------|
| This folder | React JSX + inline styles + CSS variables |
| Production app | TypeScript + Tailwind (`apps/maria-esther-panel`) |

When integrating into production, port each component to TSX/Tailwind while preserving the prop API defined in `.d.ts` files.

## Available components

| Component | Path | Key props |
|-----------|------|-----------|
| Button | `buttons/Button.jsx` | variant, size, fullWidth |
| Input | `forms/Input.jsx` | label, error, disabled |
| Select | `forms/Select.jsx` | label, options |
| OptionCard | `forms/OptionCard.jsx` | selected, icon, label |
| Badge | `display/Badge.jsx` | tone |
| Card | `display/Card.jsx` | variant (content/form) |
| Stepper | `display/Stepper.jsx` | steps, currentStep |

## Usage in prototypes

```html
<link rel="stylesheet" href="../styles.css" />
<script src="../ds-bundle.js"></script>
<!-- Components available via window.LigasDeTNisDesignSystem_* namespace -->
```

For fresh bundles after editing `.jsx` sources, copy `previews/reference/_ds_bundle.js` to `ds-bundle.js`.

## Agent prompts

Each component has a `.prompt.md` sibling with generation rules. Collected copies: `../prompts/component-prompts/`.

## HTML previews

Grouped specimen cards: `../previews/reference/buttons.card.html`, `forms.card.html`, `display.card.html`.

## Limitations

- No TypeScript source (only `.d.ts` contracts)
- No test suite
- No tree-shaking / npm exports
- Inline styles — not compatible with Tailwind purge
- UI kits use CDN React + Babel (dev only)
