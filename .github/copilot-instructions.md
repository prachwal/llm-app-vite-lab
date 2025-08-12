# Copilot Instructions for llm-app-vite-lab

## Project Architecture

- **Frontend:** Built with Preact + Vite, using TypeScript for type safety.
- **Component Structure:** UI components are in `src/`, logic is separated into `src/hooks/` (custom hooks, signals).
- **State Management:** Uses Preact signals (`@preact/signals`) for reactive state, see `src/hooks/useCounterSignal.ts`.
- **Assets:** Images and static files are in `public/` (for Vite public assets) and `src/assets/` (for local imports).

## Developer Workflows

- **Build:** `npm run build` (TypeScript + Vite)
- **Dev Server:** `npm run dev` (hot reload)
- **Lint:** `npm run lint` (ESLint + Prettier integration)
- **Format:** Prettier config in `.prettierrc`, autoformat on save recommended
- **Test:**
  - `npm run test` (Vitest in watch mode)
  - `npm run test:run` (single run, for CI)
- **Tasks:** All major scripts are available as VS Code tasks in `.vscode/tasks.json`

## Patterns & Conventions

**Hooks:** Business logic and state are in `src/hooks/`, e.g. `useCounterSignal.ts`. UI components import hooks, do not contain business logic.
**Signals:** Prefer signals over useState for local state.
**TypeScript:** Strict typing enforced via `tsconfig.app.json`.
**Tests:** All hooks must have corresponding `.test.ts` files in the same folder.
**Lint/Format:** ESLint config uses `eslint.config.js` (FlatConfig, Prettier integrated). No `.eslintrc.*`.
**Imports:** For public assets, use `/assetname.ext` (Vite convention). For local assets, use relative imports from `src/assets/`.
**Documentation:** All new functions, hooks, and exported symbols must have TSDoc comments (`/** ... */`) describing purpose, parameters, return values, and usage examples. Comments should support automatic documentation generation and help trace/debug logic (especially for signals and state changes).

## Integration Points

- **Preact:** All UI is Preact-based, no React imports.
- **Testing:** Uses Vitest and @testing-library/preact for unit/integration tests.
- **Signals:** All stateful logic should use `@preact/signals`.

## Examples

- **Counter logic:** See `src/hooks/useCounterSignal.ts` and usage in `src/app.tsx`.
- **Test example:** See `src/hooks/useCounterSignal.test.ts`.

## Quickstart

1. Install dependencies: `npm install`
2. Start dev server: `npm run dev`
3. Run tests: `npm run test:run`
4. Build: `npm run build`

---

If any conventions or workflows are unclear, please provide feedback for improvement.
