# Noam Mazouz — portfolio

Personal site for [noam-mazouz.netlify.app](https://noam-mazouz.netlify.app/). A React + Vite SPA that presents degree work, the path that led here, and what I am looking for next.

## Run locally

Needs Node 22+.

```bash
npm install
npm run dev
```

## Quality gates

```bash
npm run check
```

Runs typecheck, ESLint, Prettier, Vitest, production build, `npm audit --audit-level=high`, and `scripts/guard.mjs` (blocks tracked documents and secret-like strings).

## Deploy

Pushes to `main` on GitHub build on Netlify (`netlify.toml`: Node 22, publish `dist`, SPA fallback, security headers).

## Content

Edit typed data in `src/data/` — never hard-code bio, links, or project facts in components.

The public CV is an external Google Docs link. Local resume files belong in `private/` (gitignored). PDF and Word files are never committed.
