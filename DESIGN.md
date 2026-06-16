# Ligas de Tênis Design System — Canonical Spec

> Category: Sports league / tournament operations  
> Surface: Responsive web, operator dashboards, registration flows, rankings, marketing pages

This document is the implementation-oriented spec for agents and creators. For usage instructions, see [README.md](./README.md). For asset sync between monorepo, this package, and apps, see [SYNC.md](./SYNC.md).

## 1. Product context

Ligas de Tênis sells the experience of competing in an organized amateur circuit with the seriousness of ATP/WTA-inspired competition and the social value of a local league.

**Audience:** amateur tennis players ~28–55, São Paulo metro + expanding cities.

**Leagues:**

| Code | Name | Modality |
|------|------|----------|
| `lt` | Ligas de Tênis (umbrella) | multi-league |
| `lat` | Liga Alphaville de Tênis | tennis (flagship) |
| `lisp` | LISP | tennis |
| `lirj` | LIRJ | tennis |
| `las` | Liga Alphaville de Squash | squash |
| `larb` | Ravenna Beach Tennis | beach-tennis |

**Products:** Ranking de desafios (≤24 matches/semester), Tournament (6-stage ATP-style), Maria Esther Match Desk (operator panel).

## 2. Visual theme

Athletic and professional — not playful local-club flyer.

- **Navy** `#1f2e60` — institution, structure
- **Sky Blue** `#29aae1` — action, interaction
- **Green** `#62b14f` — success, conversion
- **Yellow** `#f7c949` — energy accent (never body text on white)

Proportion: 50% white/off-white, 25% navy, 12% blue, 8% green, 5% yellow.

**Rule:** disciplined like a professional tennis circuit, human like a local champion's feed.

## 3. Tokens

**Entry point:** `tokens/index.css`

| File | Contents |
|------|----------|
| `fonts.css` | Bebas Neue + Outfit (Google Fonts CDN) |
| `colors.css` | Brand, neutral, semantic, category, gradients |
| `typography.css` | Families, fluid sizes, weights, tracking |
| `spacing.css` | 4px scale, layout, breakpoints |
| `effects.css` | Radius, navy shadows, motion, focus ring |
| `textures.css` | Court-grid, diagonal hatch |

Never hardcode hex in components — use `var(--color-*)` only.

## 4. Typography

- **Display:** Bebas Neue — H1 `clamp(52–88px)`, H2 `clamp(36–56px)`, uppercase, tracking `0.02em`
- **Body/UI:** Outfit — 16px body, 1.7 line-height, weights 400–800
- **Labels:** 11–12px uppercase, tracking `0.06–0.10em`
- **Mono:** timestamps, IDs, ranking metadata only

## 5. Spacing and layout

4px base unit. Section padding: 80px desktop / 64px mobile. Max content: 1200px. Forms: 480px max.

Breakpoints: mobile `<600px`, tablet `600–900px`, desktop `>900px`.

Card grids: 4 → 2 → 1 columns.

## 6. Components

Reference JSX in `components/`. Production apps should port to TypeScript + Tailwind using the same API contracts.

| Component | Variants / notes |
|-----------|------------------|
| `Button` | primary, success, secondary, ghost, outline, highlight; sm/md/lg |
| `Input` | label-above, focus ring, error state |
| `Select` | styled native select |
| `OptionCard` | radio-style selection card |
| `Badge` | 6 tones (info, success, energy, etc.) |
| `Card` | content + form variants |
| `Stepper` | multi-step progress |

Min touch target: 44×44px.

## 7. Backgrounds and textures

1. **Court-grid desk** — `--texture-court-grid` at 24px on off-white (`#e8edf5` base)
2. **Diagonal hatch** — `--texture-diagonal-hatch` over navy heroes
3. **Blue radial orbs** — depth on dark surfaces (blur, not opacity on content)

## 8. Logos and assets

Canonical naming: `[type]-[subject]-[league]-[variant]-ligas-de-tenis.[ext]`

| Background | Variant |
|------------|---------|
| White / light | `default` |
| Navy `#1f2e60` | `light` or `blue` |
| Branded hero / finals | `blue-finals` |

- SVG preferred for web; PNG @2x fallback
- Never use tennis logos for beach tennis (LARB) or squash (LAS)
- Tournament badges: `assets/tournaments/{league}/`

Full curated set: `assets/manifest.csv`. Refresh from monorepo masters with `./scripts/sync-from-master.sh` (see [SYNC.md](./SYNC.md)).

## 9. Voice and tone

See [guidelines/voice-and-tone.md](./guidelines/voice-and-tone.md).

Brazilian Portuguese, "você", warm and organized. Maria Esther speaks first person. CTAs are intentful: `Quero me inscrever`, `Confirmar inscrição`.

## 10. Accessibility

- Navy on white ≈ 12:1 (AAA)
- Sky Blue on white ≈ 3.5:1 — 18px+ or bold only
- Yellow on white ≈ 1.9:1 — never text on white; navy text on yellow
- Green on white ≈ 3.2:1 — large text / UI only
- Color never the only signal; errors carry text

## 11. Product modules (domain-specific)

League interfaces should include:

- Ranking rows (category, points, movement)
- Player profile panels (availability, court access)
- Match recommendation cards (rank, reasons, score)
- Registration steppers with option cards
- Tournament cards (location, date, vacancies, CTA)

Reference: `ui-kits/maria-esther-panel/`, `ui-kits/onboarding/`.

## 12. Consistency checklist

- [ ] Colors follow 50/25/12/8/5 proportion?
- [ ] Body text `#0d1527` on white, or white on navy?
- [ ] Yellow accent only — never body text on light BG?
- [ ] 80px section padding desktop, 64px mobile?
- [ ] Interactive elements use Sky Blue?
- [ ] Conversion CTAs use Green?
- [ ] Headings Bebas Neue, body Outfit?
- [ ] No hardcoded hex — only CSS variables?
- [ ] Feels like a real sports circuit — not a gym flyer?
