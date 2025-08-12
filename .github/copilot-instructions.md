# Copilot Instructions for llm-app-vite-lab

## Project Architecture

- **Frontend:** Built with Preact + Vite, using TypeScript for type safety.
- **Component Structure:** UI components in `src/components/` organized in folders with dedicated test and story files, logic separated into `src/hooks/` (custom hooks, signals) and `src/utils/` (utilities, logging).
- **State Management:** Uses Preact signals (`@preact/signals`) for reactive state, see `src/hooks/useCounterSignal.ts`.
- **Assets:** Images and static files are in `public/` (for Vite public assets) and `src/assets/` (for local imports).

## Component Architecture

**Component Organization:** Each component has its own folder in `src/components/` with three files:

- `ComponentName.tsx` - The component implementation with TSDoc comments
- `ComponentName.test.tsx` - Comprehensive unit tests using @testing-library/preact
- `ComponentName.stories.tsx` - Storybook stories for all variants and states

**Component Patterns:**

- Components are pure UI presentation layer - no business logic
- Import hooks/utilities for functionality (separation of concerns)
- Use TSDoc comments with `@param`, `@returns`, `@example` tags
- Include accessibility attributes (ARIA labels, semantic HTML)
- Follow Tailwind CSS patterns for styling consistency

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

**Components:** UI components in `src/components/ComponentName/` folders, each with `.tsx`, `.test.tsx`, and `.stories.tsx` files. Components are pure UI - import hooks/services for logic.
**Hooks:** Business logic and state are in `src/hooks/`, e.g. `useCounterSignal.ts`. UI components import hooks, do not contain business logic.
**Signals:** Prefer signals over useState for local state. Module-scoped signals prevent reinitialization.
**TypeScript:** Strict typing enforced via `tsconfig.app.json`.
**Tests:** All components and hooks must have corresponding `.test.ts/.test.tsx` files with comprehensive coverage.
**Storybook:** Every component must have a `.stories.tsx` file documenting all variants and props.
**Lint/Format:** ESLint config uses `eslint.config.js` (FlatConfig, Prettier integrated). No `.eslintrc.*`.
**Imports:** For public assets, use `/assetname.ext` (Vite convention). For local assets, use relative imports from `src/assets/`.
**Documentation:** All new functions, hooks, components, and exported symbols must have TSDoc comments (`/** ... */`) describing purpose, parameters, return values, and usage examples. Comments should support automatic documentation generation and help trace/debug logic (especially for signals and state changes).

## Integration Points

- **Preact:** All UI is Preact-based, no React imports.
- **Testing:** Uses Vitest and @testing-library/preact for unit/integration tests.
- **Signals:** All stateful logic should use `@preact/signals`.

## Examples

- **Counter logic:** See `src/hooks/useCounterSignal.ts` and usage in `src/components/Counter/Counter.tsx`.
- **Test example:** See `src/hooks/useCounterSignal.test.ts` and `src/components/Counter/Counter.test.tsx`.
- **Component structure:** See `src/components/Header/` folder for complete component pattern with tsx/test/stories files.
- **Storybook stories:** See `src/components/Header/Header.stories.tsx` for comprehensive component documentation.

## Quickstart

1. Install dependencies: `npm install`
2. Start dev server: `npm run dev`
3. Run tests: `npm run test:run`
4. Build: `npm run build`

---

If any conventions or workflows are unclear, please provide feedback for improvement.
