# Fix plan

Ordered task list for the Ralph loop. One task per iteration, top to bottom.

## Foundation

- [x] Scaffold React 19 + Vite + TS (strict), Tailwind v4, ESLint (ts, react-hooks, jsx-a11y), Prettier, Vitest + Testing Library
- [x] `npm run check` gate script + `scripts/guard.mjs` (secret scan, no tracked .pdf/.doc/.docx)
- [x] `netlify.toml`: build, Node 22, SPA fallback, security headers (CSP, nosniff, referrer, permissions, frame-ancestors)
- [x] Design tokens in `src/styles/index.css` (`@theme`), self-hosted fonts, base styles, reduced-motion handling
- [x] Typed content: `src/data/profile.ts`, `src/data/projects.ts`, `src/data/timeline.ts`

## Shell

- [x] App shell: router (`/`, `/projects/:slug`, `*`), Nav, Footer, skip link, scroll restoration, per-route title/meta
- [x] Hero: scramble-text name, positioning line, CTA buttons, cursor-reactive DotGrid canvas

## Sections

- [ ] About section (`01 / ABOUT`)
- [ ] Selected Work list with cursor-follow preview (`02 / WORK`)
- [ ] Case-study page `/projects/:slug` (lazy-loaded) + NotFound page
- [ ] Journey timeline in `git log` style (`03 / JOURNEY`)
- [ ] Stack and Skills section (`04 / STACK`)
- [ ] What I'm Looking For section (`05 / NEXT`)
- [ ] Contact section + obfuscated email + copy-to-clipboard (`06 / CONTACT`)
- [ ] Command palette (Ctrl/Cmd+K) - navigate, open CV, copy email, socials

## Polish

- [ ] Scroll-reveal motion + magnetic buttons (respect reduced motion)
- [ ] SEO: meta, Open Graph image, favicon, robots.txt, sitemap.xml, JSON-LD Person
- [ ] Responsive + accessibility pass (keyboard, focus, contrast, landmarks)
- [ ] Security review subagent + Lighthouse pass; fix findings
- [ ] README with run/build/deploy instructions
