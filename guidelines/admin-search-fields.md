# Admin search fields

Canonical behavior for **person lookup** search inputs in operator admin list pages (Maria Esther Panel and future admin surfaces).

**Applies to:** Leads, Players, Match Desk queue, and any future admin list that filters people by identity.

**Production reference:** `apps/maria-esther-panel/src/modules/{leads,players,match-desk}/`

---

## UI convention

| Element | Rule |
|---------|------|
| Label | `Buscar` (uppercase section label via `section-label`) |
| Input `type` | `search` |
| Placeholder (PT-BR) | **`Nome, e-mail ou WhatsApp`** — must list all three searchable fields. Do **not** use name-only copy such as `Nome do jogador`. |
| Layout | First field in the filters bar; span 2 columns on `md+` grids (`md:col-span-2`) |
| Debounce | **300ms** before triggering server/API queries (client-side filter may run on debounced value too) |

Placeholder examples (all valid):

- `Nome, e-mail ou WhatsApp` ← canonical in Leads / Players
- `Nome, telefone ou e-mail` ← equivalent; prefer WhatsApp wording in LAT operator copy

---

## Fields searched

Every admin person search must match against these three fields:

| Field | Source column / property | Notes |
|-------|--------------------------|-------|
| Name | `full_name` | Partial match |
| Email | `email` | Partial match, case-insensitive |
| Phone | `whatsapp_phone` | Partial match on **digits** (see normalization) |

Do not limit search to name only on pages that display contact info.

---

## Match behavior

### Partial match

- A row matches when the query is a **substring** of any searchable field (after normalization).
- **Multi-word queries:** split on whitespace; **every** token must match at least one field (AND across tokens).
  - Example: `bruno var` matches `Bruno Butturi Varone` because both tokens hit the name.

### Name

- Case-insensitive.
- Accent-insensitive (`José` matches `jose`).
- A token may match the full normalized name or any name part (first/last fragment).
- Use `matchesPlayerNameSearch` from `@/lib/name-search` until consolidated (see shared helper below).

### Email

- Case-insensitive substring match.

### Phone

- Strip **all non-digit characters** from both the query and stored phone before comparing.
- Enables partial digit search: `11999` matches `+55 11 99999-0000`.
- Reuse `normalizePhoneE164Digits` from `@/lib/whatsapp` for digit extraction.

---

## Implementation patterns

### Client-side filter (in-memory rows)

Used by Match Desk queue (`src/lib/filters.ts`) and local fallbacks.

```ts
// Target: apps/maria-esther-panel/src/lib/person-search.ts (consolidate here)
import { matchesPlayerNameSearch } from '@/lib/name-search';
import { normalizePhoneE164Digits } from '@/lib/whatsapp';

function matchesPersonSearch(
  person: { full_name: string; email: string | null; whatsapp_phone: string | null },
  rawQuery: string,
): boolean {
  const query = rawQuery.trim();
  if (!query) return true;

  const tokens = query.split(/\s+/).filter(Boolean);
  const emailHaystack = (person.email ?? '').toLowerCase();
  const phoneDigits = normalizePhoneE164Digits(person.whatsapp_phone) ?? '';

  return tokens.every((token) => {
    const lower = token.toLowerCase();
    const tokenDigits = token.replace(/\D/g, '');

    if (matchesPlayerNameSearch(person.full_name, token)) return true;
    if (emailHaystack.includes(lower)) return true;
    if (tokenDigits.length > 0 && phoneDigits.includes(tokenDigits)) return true;

    return false;
  });
}
```

### Server-side filter (Supabase)

Used by Leads and Players paginated lists.

- Escape PostgREST wildcards in user input: `token.replace(/[%_]/g, '')`.
- Single-token query: OR across columns with `ilike`:

```ts
query.or(
  `full_name.ilike.%${token}%,email.ilike.%${token}%,whatsapp_phone.ilike.%${token}%`,
);
```

- Multi-token query: chain one `.or(...)` per token (AND between chains). See `players-api.ts`.
- Phone digit-only matching on the server is best-effort via `ilike` on formatted `whatsapp_phone`; prefer client-side digit normalization when the full dataset is already loaded.

---

## Shared helper (recommended)

Consolidate client-side logic in one module:

| Module | Status |
|--------|--------|
| `src/lib/name-search.ts` | **Exists** — name-only matching |
| `src/lib/whatsapp.ts` | **Exists** — `normalizePhoneE164Digits` |
| `src/lib/person-search.ts` | **Recommended** — export `matchesPersonSearch` + `PERSON_SEARCH_PLACEHOLDER` |

Until `person-search.ts` exists, Match Desk must at minimum search name **and** email **and** phone using the rules above (not `matchesPlayerNameSearch` alone).

Export a constant for placeholders:

```ts
export const PERSON_SEARCH_PLACEHOLDER = 'Nome, e-mail ou WhatsApp';
```

---

## Page checklist

| Page | Search scope | Placeholder | Implementation |
|------|--------------|-------------|----------------|
| Leads | name, email, phone | `Nome, e-mail ou WhatsApp` | Supabase `ilike` + client fallback in `leads-api.ts` |
| Players | name, email, phone | `Nome, e-mail ou WhatsApp` | Supabase `ilike` in `players-api.ts` |
| Match Desk | name, email, phone | `Nome, e-mail ou WhatsApp` | Client `filterQueue` — migrate to `matchesPersonSearch` |
| Future admin lists | same three fields | same placeholder pattern | Reuse `person-search.ts` or Supabase pattern |

---

## Agent / Cursor enforcement

Monorepo rule (when working on Maria Esther Panel): `.cursor/rules/admin-search-fields.mdc` in the `ligas-de-tenis` repo — points here as the canonical spec.
