# llm-app-vite-lab

A modern Preact + Vite + TypeScript starter for building fast, modular web applications.

## Features
- ⚡️ Vite for instant dev server and optimized builds
- ⚛️ Preact for lightweight, fast UI
- 🟦 TypeScript for type safety
- 🪝 Signals and custom hooks for state management
- 🧪 Vitest for unit and integration testing
- 🧹 ESLint + Prettier for code quality and formatting

## Project Structure
```
public/           # Static assets (served at root)
src/
  assets/         # Local images/icons
  hooks/          # Custom hooks (signals, business logic)
  components/     # UI components (if added)
  app.tsx         # Main app component
  main.tsx        # Entry point
  ...
.vscode/tasks.json # VS Code tasks for build, lint, test
```

## Scripts
- `npm run dev` — Start dev server (hot reload)
- `npm run build` — Build for production
- `npm run preview` — Preview production build
- `npm run lint` — Lint code (ESLint + Prettier)
- `npm run lint:fix` — Auto-fix lint issues
- `npm run test` — Run tests (watch mode)
- `npm run test:run` — Run tests (single run)

## Quickstart
1. Install dependencies: `npm install`
2. Start dev server: `npm run dev`
3. Build: `npm run build`
4. Run tests: `npm run test:run`

## Example: Counter Signal
- See `src/hooks/useCounterSignal.ts` and usage in `src/app.tsx`

## License
MIT
