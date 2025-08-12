/**
 * @fileoverview Header component with navigation links.
 */

/**
 * Header component with project title and navigation links.
 * @returns {JSX.Element} Header navigation component
 */
export function Header() {
    return (
        <header class="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm border-b border-[#e0e7ff] dark:border-[#312e81] p-4">
            <nav class="max-w-6xl mx-auto flex justify-between items-center">
                <h2 class="text-xl font-bold text-[#6366f1]">llm-app-vite-lab</h2>
                <div class="flex gap-4">
                    <a href="/docs/api/index.html" target="_blank" class="px-3 py-2 rounded-lg bg-[#6366f1] text-white hover:bg-[#7c3aed] transition-colors">📚 Docs</a>
                    <a href="/storybook/index.html" target="_blank" class="px-3 py-2 rounded-lg bg-[#a78bfa] text-white hover:bg-[#7c3aed] transition-colors">📖 Storybook</a>
                </div>
            </nav>
        </header>
    );
}
