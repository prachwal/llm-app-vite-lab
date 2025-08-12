/**
 * Logger utility controlled by VITE_LOG_LEVEL from .env
 */
const LOG_LEVEL = import.meta.env.VITE_LOG_LEVEL || 'info';

function shouldLog(level: string) {
    const levels = ['debug', 'info', 'warn', 'error'];
    return levels.indexOf(level) >= levels.indexOf(LOG_LEVEL);
}

export function logDebug(...args: unknown[]) {
    if (shouldLog('debug')) console.debug('[DEBUG]', ...args);
}
export function logInfo(...args: unknown[]) {
    if (shouldLog('info')) console.info('[INFO]', ...args);
}
export function logWarn(...args: unknown[]) {
    if (shouldLog('warn')) console.warn('[WARN]', ...args);
}
export function logError(...args: unknown[]) {
    if (shouldLog('error')) console.error('[ERROR]', ...args);
}
