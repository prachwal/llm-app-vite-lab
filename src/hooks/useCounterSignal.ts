/**
 * @fileoverview Counter signal hook for Preact apps.
 * Provides a reactive counter and increment function with logging.
 */
import { signal } from '@preact/signals';
import { logInfo, logDebug } from '../utils/logger';

/**
 * Custom hook for counter state using Preact signals.
 * @returns {{ count: import('@preact/signals').Signal<number>, increment: () => void }}
 * @remarks
 * If the counter does not update in the frontend, check signal usage in the component and ensure reactivity is preserved.
 * @example
 * const { count, increment } = useCounterSignal();
 * increment(); // count.value is now 1
 */
export function useCounterSignal() {
    /**
     * Reactive counter value (signal).
     */
    const count = signal(0);

    /**
     * Increments the counter and logs the change.
     * Logs previous and next value for debugging.
     */
    const increment = () => {
        const prev = count.value;
        count.value++;
        logInfo('Counter incremented', { prev, next: count.value });
        logDebug('Counter signal state', count);
    };

    // Log initialization for debugging signal lifecycle
    logInfo('Counter initialized', { value: count.value });

    return { count, increment };
}
