# Progress log

Append-only. Newest entries at the bottom.

## 2026-10-20 - Loop initialized

- Created `.gitignore` (documents, env, build output ignored), `ralph/` loop files and `.cursor/rules`.
- CV text stored locally in `private/cv.txt` (gitignored). Public CV link points to Google Docs.
- Phone number intentionally excluded from the site.

## 2026-10-20 - Scaffold

- React 19, Vite 8, TS 6 strict (`noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`), Tailwind v4, Vitest 5.
- ESLint pinned to v9 because `eslint-plugin-jsx-a11y` does not support v10 yet (no `--legacy-peer-deps`).
- ESLint: `strictTypeChecked` + jsx-a11y strict + custom bans on `dangerouslySetInnerHTML` / `innerHTML`.
- Gates: typecheck, lint, test, build green. `npm audit`: 0 vulnerabilities.

## 2026-10-20 - Guard + Netlify

- `scripts/guard.mjs`: fails on tracked documents, `private/`, `.env*`, secret patterns and Israeli phone numbers. Negative-tested (staged fake PDF + fake key -> exit 1).
- `netlify.toml`: Node 22, SPA fallback, strict CSP (`'self'` only, no inline scripts), HSTS, nosniff, DENY framing, Permissions-Policy, COOP/CORP, immutable cache for `/assets/*`.
