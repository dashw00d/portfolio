# Repository Guidelines

## Project Structure & Module Organization
Source lives in `pages/` for route entries and `components/` for reusable, typed React building blocks (PascalCase). Global styling is in `styles/globals.css`, composed with Tailwind utilities configured via `tailwind.config.js` and `postcss.config.js`. Keep shared constants or helpers inside `components/` alongside the consumers until a dedicated `lib/` directory is introduced. The `out/` folder holds static export artefacts—never edit or commit manual changes there.

## Build, Test, and Development Commands
Run `npm run dev` for the local Next.js dev server with fast refresh. Use `npm run build` to validate production compilation and static optimisations. `npm run start` serves the optimised build for smoke testing. `npm run lint` executes the Next/ESLint ruleset; fix warnings before pushing.

## Coding Style & Naming Conventions
TypeScript is required for all new modules. Favour 2-space indentation (default in the repo), and keep imports sorted by path depth. Components and hooks use PascalCase and camelCase names respectively (e.g. `components/Hero.tsx`, `useViewport`). Tailwind utility classes should be grouped semantically (layout → spacing → typography). When shared styling becomes verbose, promote it to reusable class names inside `globals.css`.

## Testing Guidelines
No automated test suite ships today; align on adding React Testing Library or Playwright tests when introducing complex behaviour. Until then, rely on `npm run lint` plus manual verification across mobile and desktop breakpoints. Document expected screenshots or acceptance criteria in your PR description so reviewers can reproduce.

## Commit & Pull Request Guidelines
Follow the existing imperative, concise commit style (`initial commit`); keep messages under ~72 characters and expand details in the body when needed. Each pull request should describe the change, list manual checks (commands run, browsers tested), and link related issues. Attach before/after screenshots or videos when UI changes are involved, and request review from another contributor before merging.
