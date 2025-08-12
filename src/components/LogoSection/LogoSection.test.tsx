import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/preact';
import { LogoSection } from './LogoSection';

describe('LogoSection', () => {
    it('should render Vite logo with correct link', () => {
        render(<LogoSection />);
        const viteLink = screen.getByRole('link', { name: /vite logo/i });
        expect(viteLink).toBeTruthy();
        expect(viteLink.getAttribute('href')).toBe('https://vite.dev');
    });

    it('should render Preact logo with correct link', () => {
        render(<LogoSection />);
        const preactLink = screen.getByRole('link', { name: /preact logo/i });
        expect(preactLink).toBeTruthy();
        expect(preactLink.getAttribute('href')).toBe('https://preactjs.com');
    });

    it('should render both logo images', () => {
        render(<LogoSection />);
        const viteImg = screen.getByAltText('Vite logo');
        const preactImg = screen.getByAltText('Preact logo');

        expect(viteImg).toBeTruthy();
        expect(preactImg).toBeTruthy();
    });
});
