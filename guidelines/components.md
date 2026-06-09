# Components

Reference implementations in `components/` (React JSX + inline styles + CSS variables). Use `.d.ts` for TypeScript contracts and `.prompt.md` for agent usage.

**Production note:** `apps/maria-esther-panel` uses Tailwind. Port components to TSX when integrating — keep the same prop APIs.

## Button

**Path:** `components/buttons/Button.jsx`

| Prop | Values | Default |
|------|--------|---------|
| `variant` | primary, success, secondary, ghost, outline, highlight | primary |
| `size` | sm, md, lg | md |
| `fullWidth` | boolean | false |

- Primary: `--gradient-primary` + `--shadow-blue`
- Success: `--gradient-success` + `--shadow-green` (join/submit)
- Highlight: yellow bg, navy text (promotional, sparingly)
- Min height: 44px (md)

## Input

**Path:** `components/forms/Input.jsx`

- Label always above field
- Rest: off-white bg; focus: white bg + blue border + ring
- Error: red border + `--color-error-bg`

## Select

**Path:** `components/forms/Select.jsx`

Styled native select matching Input visual language.

## OptionCard

**Path:** `components/forms/OptionCard.jsx`

Radio-style card: icon + label. Selected: blue border + `--color-blue-muted` bg.

## Badge

**Path:** `components/display/Badge.jsx`

6 tones: info (blue), success (green), energy (yellow), neutral, dark, error. Pill radius, uppercase label.

## Card

**Path:** `components/display/Card.jsx`

Content card (white, subtle border, shadow) and form card (larger radius, optional navy header strip).

## Stepper

**Path:** `components/display/Stepper.jsx`

- Active: blue circle + label
- Completed: green + ✓
- Inactive: gray border
- Progress bar: `--gradient-progress`

## Agent prompts

Component-specific generation rules: `prompts/component-prompts/*.prompt.md`

HTML previews: `previews/reference/*.card.html`
