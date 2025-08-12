/**
 * @fileoverview Logo section with Vite and Preact logos.
 */
import preactLogo from '../../assets/preact.svg';

/**
 * Logo section displaying Vite and Preact logos with hover effects.
 * @returns {JSX.Element} Logo section component
 */
export function LogoSection() {
    const viteLogo = '/vite.svg';

    return (
        <div class="flex justify-center gap-8 mb-8">
            <a href="https://vite.dev" target="_blank" rel="noreferrer">
                <img
                    src={viteLogo}
                    class="h-20 w-20 p-3 rounded-full bg-gradient-to-tr from-[#facc15] via-[#6366f1] to-[#a78bfa] shadow-lg hover:scale-110 transition-transform duration-300"
                    alt="Vite logo"
                />
            </a>
            <a href="https://preactjs.com" target="_blank" rel="noreferrer">
                <img
                    src={preactLogo}
                    class="h-20 w-20 p-3 rounded-full bg-gradient-to-tr from-[#7c3aed] via-[#a78bfa] to-[#f8fafc] shadow-lg hover:scale-110 transition-transform duration-300"
                    alt="Preact logo"
                />
            </a>
        </div>
    );
}
