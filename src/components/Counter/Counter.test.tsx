import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/preact';
import { Counter } from './Counter';

describe('Counter', () => {
    it('should render initial count', () => {
        render(<Counter />);
        expect(screen.getByText(/count is \d+/)).toBeTruthy();
    });

    it('should increment count when button is clicked', () => {
        render(<Counter />);
        const button = screen.getByRole('button');
        const initialText = button.textContent;

        fireEvent.click(button);

        expect(button.textContent).not.toBe(initialText);
    });

    it('should display HMR instruction text', () => {
        render(<Counter />);
        expect(screen.getByText(/Edit.*src\/app\.tsx.*and save to test HMR/)).toBeTruthy();
    });
});
