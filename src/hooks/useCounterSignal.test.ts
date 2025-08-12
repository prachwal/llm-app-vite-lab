import { describe, it, expect } from 'vitest';
import { useCounterSignal } from './useCounterSignal';

describe('useCounterSignal', () => {
    it('should initialize count to 0', () => {
        const { count } = useCounterSignal();
        expect(count.value).toBe(0);
    });

    it('should increment count', () => {
        const { count, increment } = useCounterSignal();
        increment();
        expect(count.value).toBe(1);
        increment();
        expect(count.value).toBe(2);
    });
});
