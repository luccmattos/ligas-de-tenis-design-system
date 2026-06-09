# Color system

All colors are official LAT brand palette confirmed by the brand owner. Use CSS variables from `tokens/colors.css` — never hardcode hex.

## Brand colors

| Token | Hex | Role |
|-------|-----|------|
| `--color-navy` | `#1f2e60` | Structure, headers, footers, H1/H2 on light |
| `--color-navy-dark` | `#142244` | Hover, active, footer depth |
| `--color-blue` | `#29aae1` | CTAs, links, focus, progress |
| `--color-green` | `#62b14f` | Success, join/submit, category C |
| `--color-yellow` | `#f7c949` | Highlights, trophies, ranking points |

## Neutrals

| Token | Hex | Role |
|-------|-----|------|
| `--color-white` | `#ffffff` | Cards, inputs |
| `--color-off-white` | `#f3f5f8` | Page background |
| `--color-gray-1` | `#e8edf5` | Subtle borders, desk surface |
| `--color-gray-2` | `#cbcccd` | Borders, dividers |
| `--color-gray-3` | `#94a3b8` | Placeholder, subtle text |
| `--color-gray-4` | `#475569` | Descriptions, captions |
| `--color-text` | `#0d1527` | Body text |

## Semantic aliases

- `--color-primary` → blue
- `--color-success` → green
- `--color-warning` → yellow
- `--color-error` → `#ef4444`
- `--surface-page`, `--surface-card`, `--surface-dark`
- `--text-body`, `--text-muted`, `--text-heading`, `--text-link`

## Category accents (ATP-style)

- `--color-cat-a` → navy (advanced)
- `--color-cat-b` → blue (intermediate)
- `--color-cat-c` → green (beginner)

## Gradients

- `--gradient-primary` — blue → navy (primary CTAs)
- `--gradient-success` — green → green-dark (conversion)
- `--gradient-progress` — blue → green (stepper fill)

## Usage proportion

50% white/off-white · 25% navy · 12% blue · 8% green · 5% yellow

## Never use

| Color | Rule |
|-------|------|
| Yellow | As text on white (fails WCAG) |
| Sky Blue | As body text (interactive only) |
| Navy | As text on dark backgrounds |
| Green | As warning or neutral indicator |

## Accessibility

| Pair | Ratio | Rule |
|------|-------|------|
| Navy on white | ~12:1 | AAA — headings, body |
| Blue on white | ~3.5:1 | 18px+ or bold only |
| Yellow on white | ~1.9:1 | Never text; navy on yellow for badges |
| Green on white | ~3.2:1 | Large text / UI; navy on green for critical info |

HTML specimens: `previews/reference/colors-*.html`
