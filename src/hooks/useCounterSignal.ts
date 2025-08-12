import { signal } from '@preact/signals';

/**
 * Custom hook for counter state using Preact signals.
 * @returns {object} signal and increment function
 */
export function useCounterSignal() {
    const count = signal(0);
    const increment = () => {
        count.value++;
    };
    return { count, increment };
}
