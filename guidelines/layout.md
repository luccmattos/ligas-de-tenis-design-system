# Layout and spacing

## Spacing scale (4px base)

`4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128`

| Token | Value | Usage |
|-------|-------|-------|
| `--space-4` | 16px | Default element padding |
| `--space-6` | 24px | Card padding, grid gap |
| `--space-16` | 64px | Section padding (mobile) |
| `--space-20` | 80px | Section padding (desktop) |

## Layout tokens

- `--container-max`: 1200px
- `--form-max`: 480px
- `--section-pad-x-desktop`: 8%
- `--section-pad-x-mobile`: 5%
- `--section-pad-y-desktop`: 80px
- `--section-pad-y-mobile`: 64px

## Breakpoints

| Name | Range |
|------|-------|
| Mobile | `< 600px` |
| Tablet | `600px – 900px` |
| Desktop | `> 900px` |

## Grid patterns

- Hero: 2-column → 1-column at 900px
- Card grids: 4 → 2 (900px) → 1 (600px)
- Forms: max 480px, centered

## Cards and surfaces

| Type | Radius | Shadow |
|------|--------|--------|
| Content card | 16px (`--radius-lg`) | `--shadow-md` |
| Form card | 20px (`--radius-xl`) | `--shadow-xl` |
| Buttons / inputs | 12px (`--radius-md`) | colored glow on CTAs |

Hover: buttons lift `-1px`, cards lift `-4px`. Motion: `--ease-out`, 0.18–0.45s. Respect `prefers-reduced-motion`.

## Borders

- Hairline dividers: `--color-gray-1` / `--color-gray-2`
- Inputs: 1.5px border; focus ring `--ring-blue`
- Active rows: 4px blue left-accent bar

HTML specimens: `previews/reference/spacing-scale.html`, `radius.html`, `shadows.html`
