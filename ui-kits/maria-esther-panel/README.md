# Maria Esther Match Desk — UI kit

High-fidelity recreation of the **operator panel** (`apps/maria-esther-panel` in the
`ligas-de-tenis` codebase). Internal tool where an operator reviews eligible players
and sends WhatsApp match suggestions manually (MVP "manual pilot").

## Screens / flow (`index.html`)
1. **Login** — navy screen, diagonal hatch, LAT badge, email + password.
2. **Match Desk** — navy gradient header with the live queue summary, left **queue panel**
   (search + category filter + player rows), right **player detail**.
3. **Player detail** — navy hatch header, two columns: WhatsApp message composer (left)
   and the top-3 **recommendation cards** with reasons + score (right). Select an option
   to highlight it.

## Files
- `data.js` — fake queue / suggestions (window.MED_DATA), mirrors `PanelQueueRow`.
- `app.jsx` — all screens; exports `window.MatchDeskApp`.
- `index.html` — loads React + the DS bundle, mounts the app.

## Composition
Uses DS primitives: `Button`, `Badge`, `Input`, `Select`. Desk surface (court-grid),
navy hatch and header gradient are taken verbatim from the app's `index.css`.

> Source of truth: `apps/maria-esther-panel/src/modules/match-desk/{MatchDeskPage,MatchQueueTable,MatchDeskDetailDrawer}.tsx`, `src/modules/players/PlayerProfilePanel.tsx`, and `src/components/{PlayerDetailPanel,RecommendationCard,LoginScreen}.tsx`.

**Search field behavior** (queue + all admin list filters): [guidelines/admin-search-fields.md](../../guidelines/admin-search-fields.md) — placeholder `Nome, e-mail ou WhatsApp`, partial match on name, email, and phone.
