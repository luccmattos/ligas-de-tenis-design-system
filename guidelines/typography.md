# Typography

High contrast between condensed sporty display and clean geometric body.

## Fonts

| Role | Family | Source |
|------|--------|--------|
| Display | Bebas Neue | Google Fonts |
| Body / UI | Outfit (300–800) | Google Fonts |
| Mono | system mono stack | IDs, timestamps only |

Acceptable display fallbacks: Anton, Barlow Condensed, Oswald.  
Acceptable body fallbacks: DM Sans, Inter (last resort).

## Scale

| Level | Font | Size | Weight | Color |
|-------|------|------|--------|-------|
| H1 | Bebas Neue | `clamp(52px, 6vw, 88px)` | 400 | white on dark / navy on light |
| H2 | Bebas Neue | `clamp(36px, 4vw, 56px)` | 400 | navy |
| H3 | Outfit | 18–22px | 700 | navy |
| Body | Outfit | 15–17px | 400 | `#0d1527`, line-height 1.7 |
| Label | Outfit | 11–13px | 600–700 | blue or gray-4, uppercase |
| Caption | Outfit | 12–13px | 400 | gray-4 |

## Tracking

- Display headlines: `0.02em`
- Labels / overlines: `0.06–0.10em`
- Never negative letter-spacing on display

## CSS variables

```css
--font-display, --font-body, --font-mono
--text-h1, --text-h2, --text-h3, --text-base, --text-sm, --text-xs
--weight-regular through --weight-extrabold
--leading-display, --leading-body
--tracking-display, --tracking-label
```

HTML specimens: `previews/reference/type-*.html`
