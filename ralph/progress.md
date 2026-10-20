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

## 2026-10-20 - Tokens + content

- `@theme` tokens: ink / surface / line / paper / mute / signal (#C6FF3D), Space Grotesk + JetBrains Mono via `@fontsource-variable` (self-hosted, CSP-safe).
- Blueprint grid body background, global reduced-motion override, `label` and `container-page` utilities.
- `src/data`: profile (from CV, no phone), 6 projects (from GitHub READMEs), git-log style timeline. Email stored split and assembled at runtime.
- Facts not in CV/README were removed rather than guessed (e.g. course names -> "Degree project"; No One Left team size taken from GitHub contributors).
- Tests: data integrity (unique slugs, https-only links, timeline refs). Gates green.

## 2026-10-20 - App shell

- Router: Layout (skip link, Nav, main, Footer, ScrollManager) with `/`, lazy `/projects/:slug`, `*` 404.
- PaletteProvider + Ctrl/Cmd+K shortcut (UI comes later). ExternalLink enforces https + `noopener noreferrer`.
- `motion` dependency was removed externally; all animation will be CSS + IntersectionObserver.
- Tests: landmarks, lazy route, 404s, hardened external links. Gates green.


## 2026-10-20 - Hero

- ScrambleText (sr-only real text, aria-hidden visual; no setState-in-effect), DotGrid canvas (rAF, pauses off-screen / hidden tab, static under reduced motion, DPR capped at 2).
- Outlined surname, terminal-style facts, CTAs to #work / #next, stack marquee (aria-hidden).
- Gates green.

