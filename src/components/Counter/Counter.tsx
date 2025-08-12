/**
 * @fileoverview Counter component with increment functionality.
 */
import { useCounterSignal } from '../../hooks/useCounterSignal';

/**
 * Counter component with increment button.
 * @returns {JSX.Element} Interactive counter component
 */
export function Counter() {
    const { count, increment } = useCounterSignal();

    return (
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
    );
}
