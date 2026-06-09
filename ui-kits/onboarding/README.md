# Onboarding & Registration — UI kit

Player-facing **marketing + registration** surface. The live site is WordPress
(`ligaalphavilledetenis.com.br`); this kit recreates the intended pro-sport experience
from the design-system spec (hero + multi-step "quero me inscrever" form).

## Screens / flow (`index.html`)
1. **Hero** — navy section, diagonal hatch, LAT badge, condensed Bebas headline, stat row
   (10+ anos / 1.000+ jogadores / 6 etapas), green conversion CTA.
2. **Registration form** — 4-step flow driven by the `Stepper`:
   - **Dados** — name, email, WhatsApp, location (`Input` / `Select`).
   - **Interesse** — Ranking / Torneio / Ambos via `OptionCard`s, plus category.
   - **Disponibilidade** — day-of-week `OptionCard` multi-select + court nudge.
   - **Confirmar** — green success state with status `Badge`s.

## Files
- `app.jsx` — hero + flow; exports `window.OnboardingApp`.
- `index.html` — loads React + the DS bundle, mounts the app.

## Composition
Uses DS primitives: `Button`, `Input`, `Select`, `OptionCard`, `Stepper`, `Badge`, `Card`.

> This is a faithful interpretation of the spec, not a copy of existing code — the
> WordPress source was not available. Flag any real-site patterns to refine it.
