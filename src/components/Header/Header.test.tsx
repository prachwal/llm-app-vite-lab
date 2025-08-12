import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/preact';
import { Header } from './Header';

describe('Header', () => {
    it('should render project title', () => {
        render(<Header />);
        expect(screen.getByText('llm-app-vite-lab')).toBeTruthy();
    });

    it('should render docs link', () => {
        render(<Header />);
        const docsLink = screen.getByText('📚 Docs');
        expect(docsLink).toBeTruthy();
        expect(docsLink.getAttribute('href')).toBe('/docs/api/index.html');
    });

    it('should render storybook link', () => {
        render(<Header />);
        const storybookLink = screen.getByText('📖 Storybook');
        expect(storybookLink).toBeTruthy();
        expect(storybookLink.getAttribute('href')).toBe('/storybook/index.html');
    });
});
