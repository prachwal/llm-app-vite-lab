import { useCounterSignal } from './hooks/useCounterSignal'
import preactLogo from './assets/preact.svg'
const viteLogo = '/vite.svg';

export function App() {
  const { count, increment } = useCounterSignal()

  return (
    <div class="min-h-screen bg-gradient-to-br from-[#f8fafc] via-[#e0e7ff] to-[#f0fdfa] dark:from-[#18181b] dark:via-[#312e81] dark:to-[#0f172a] flex flex-col">
      {/* Header with navigation */}
      <header class="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm border-b border-[#e0e7ff] dark:border-[#312e81] p-4">
        <nav class="max-w-6xl mx-auto flex justify-between items-center">
          <h2 class="text-xl font-bold text-[#6366f1]">llm-app-vite-lab</h2>
          <div class="flex gap-4">
            <a href="/docs/api/index.html" target="_blank" class="px-3 py-2 rounded-lg bg-[#6366f1] text-white hover:bg-[#7c3aed] transition-colors">📚 Docs</a>
            <a href="/storybook/index.html" target="_blank" class="px-3 py-2 rounded-lg bg-[#a78bfa] text-white hover:bg-[#7c3aed] transition-colors">📖 Storybook</a>
          </div>
        </nav>
      </header>

      {/* Main content */}
      <div class="flex-1 flex items-center justify-center px-4">
        <div class="max-w-2xl w-full mx-auto p-8 rounded-3xl shadow-2xl bg-white/90 dark:bg-neutral-900/90 text-center border border-[#e0e7ff] dark:border-[#312e81]">
          <div class="flex justify-center gap-8 mb-8">
            <a href="https://vite.dev" target="_blank" rel="noreferrer">
              <img src={viteLogo} class="h-20 w-20 p-3 rounded-full bg-gradient-to-tr from-[#facc15] via-[#6366f1] to-[#a78bfa] shadow-lg hover:scale-110 transition-transform duration-300" alt="Vite logo" />
            </a>
            <a href="https://preactjs.com" target="_blank" rel="noreferrer">
              <img src={preactLogo} class="h-20 w-20 p-3 rounded-full bg-gradient-to-tr from-[#7c3aed] via-[#a78bfa] to-[#f8fafc] shadow-lg hover:scale-110 transition-transform duration-300" alt="Preact logo" />
            </a>
          </div>
          <h1 class="text-6xl font-extrabold mb-6 bg-gradient-to-r from-[#6366f1] via-[#7c3aed] to-[#a78bfa] bg-clip-text text-transparent drop-shadow-lg">Vite + Preact</h1>
          <div class="bg-gradient-to-br from-[#e0e7ff] to-[#f8fafc] dark:from-[#312e81] dark:to-[#18181b] rounded-xl shadow-lg p-8 mb-8 border border-[#a78bfa] dark:border-[#6366f1]">
            <button
              onClick={() => increment()}
              class="rounded-lg border-2 border-[#6366f1] px-6 py-3 text-xl font-semibold bg-[#6366f1] text-white dark:bg-[#a78bfa] dark:text-white shadow-md hover:bg-[#7c3aed] hover:border-[#7c3aed] focus:outline-none focus:ring-4 focus:ring-[#a78bfa] transition-all duration-200"
            >
              <span class="inline-block align-middle">count is <span class="font-mono text-2xl">{count.value}</span></span>
            </button>
            <p class="mt-6 text-gray-700 dark:text-gray-200 text-lg">
              Edit <code class="bg-gray-100 dark:bg-neutral-800 px-2 py-1 rounded text-gray-800 dark:text-gray-100">src/app.tsx</code> and save to test HMR
            </p>
          </div>
          <p class="mb-2 text-lg text-gray-700 dark:text-gray-200">
            Check out{' '}
            <a
              href="https://preactjs.com/guide/v10/getting-started#create-a-vite-powered-preact-app"
              target="_blank" rel="noreferrer"
              class="font-bold text-[#6366f1] hover:text-[#7c3aed] underline underline-offset-2"
            >
              create-preact
            </a>{' '}
            , the official Preact + Vite starter
          </p>
          <p class="text-gray-400 mt-2 text-base italic">
            Click on the Vite and Preact logos to learn more
          </p>
        </div>
      </div>
    </div>
  )
}
