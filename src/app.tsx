import { Header } from './components/Header/Header';
import { LogoSection } from './components/LogoSection/LogoSection';
import { Counter } from './components/Counter/Counter';

export function App() {
  return (
    <div class="min-h-screen bg-gradient-to-br from-[#f8fafc] via-[#e0e7ff] to-[#f0fdfa] dark:from-[#18181b] dark:via-[#312e81] dark:to-[#0f172a] flex flex-col">
      <Header />

      {/* Main content */}
      <div class="flex-1 flex items-center justify-center px-4">
        <div class="max-w-2xl w-full mx-auto p-8 rounded-3xl shadow-2xl bg-white/90 dark:bg-neutral-900/90 text-center border border-[#e0e7ff] dark:border-[#312e81]">
          <LogoSection />

          <h1 class="text-6xl font-extrabold mb-6 bg-gradient-to-r from-[#6366f1] via-[#7c3aed] to-[#a78bfa] bg-clip-text text-transparent drop-shadow-lg">Vite + Preact</h1>

          <Counter />

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
