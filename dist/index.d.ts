/**
 * Interface des méthodes de log
 */
export interface Logger {
    info: (msg: string) => void;
    success: (msg: string) => void;
    warn: (msg: string) => void;
    error: (msg: string) => void;
    debug: (msg: string) => void;
}
/**
 * Logger coloré pour Node.js
 */
export declare const log: Logger;
