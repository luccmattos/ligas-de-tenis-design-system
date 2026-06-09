Branded button; use for every clickable action — `primary` for the main CTA, `success` for conversion (join/submit), `outline`/`ghost`/`secondary` for secondary actions, `highlight` (yellow) for rare promo accents.

```jsx
<Button variant="success" size="lg" onClick={join}>Quero me inscrever</Button>
<Button variant="outline">Voltar</Button>
```

- `variant`: primary (blue→navy) · success (green) · secondary · ghost · outline · highlight (yellow)
- `size`: sm · md (default) · lg — all keep a ≥44px touch target except sm (38px)
- `fullWidth`, `disabled`, and any native button attrs are supported.
