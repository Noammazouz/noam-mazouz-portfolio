# Ralph loop - per-iteration prompt

You are working on Noam Mazouz's portfolio (React + Vite + TypeScript SPA, deployed to Netlify).
Each iteration starts with a fresh context. Follow these steps exactly.

## 1. Orient

1. Read `ralph/fix_plan.md` (the task list) and the last ~40 lines of `ralph/progress.md`.
2. Read `.cursor/rules/best-practices.mdc` and `.cursor/rules/security.mdc`.
3. Personal facts come only from `src/data/*.ts` and `private/cv.txt`. Never invent employers, grades, metrics or links.

## 2. Pick ONE task

- Take the first unchecked `- [ ]` item in `ralph/fix_plan.md`.
- If the task is too large for one iteration, split it into smaller items in `fix_plan.md`, then do only the first one.
- If there are no unchecked items, go to step 6.

## 3. Implement

- Search the codebase before writing - reuse existing components, tokens and utilities.
- Keep changes scoped to the task. No placeholder code, no TODO stubs left behind.
- Add or update tests in `src/**/*.test.tsx` for any new component or behavior.

## 4. Gates (must all pass - never skip, disable or weaken one)

Run `npm run check`. It runs: typecheck, lint, format check, tests, production build,
`npm audit --audit-level=high`, and `scripts/guard.mjs` (secret scan + no tracked documents).

If a gate fails, fix the root cause and re-run. Do not add `eslint-disable`, `@ts-ignore`,
`any`, `.skip`, or loosen config to get green.

## 5. Review, record, commit

1. Self-review the diff against both rule files (best practices + security checklist).
2. Tick the task (`- [x]`) in `fix_plan.md`. Append any newly discovered work as new unchecked items.
3. Append an entry to `ralph/progress.md`:
   `## <ISO date> - <task>` then bullets: what changed, decisions, gate result.
4. `git add -A` and `git commit -m "<type>: <task summary>"` (conventional commits). Do NOT push.

## 6. Stop conditions

- All items checked: write a final summary entry in `progress.md`, then stop the loop and report to Noam.
- Blocked (missing info, failing gate you cannot fix in good conscience, needs a decision):
  append `BLOCKED: <reason>` to `progress.md`, stop the loop and ask Noam.
- Pushing to GitHub (deploys to Netlify) only happens when Noam explicitly approves.
