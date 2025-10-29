export type LogLevel = "debug" | "info" | "success" | "warn" | "error";
export interface Logger {
    setLevel: (level: LogLevel) => void;
    toFile: (filePath: string) => void;
    info: (msg: string) => void;
    success: (msg: string) => void;
    warn: (msg: string) => void;
    error: (msg: string) => void;
    debug: (msg: string) => void;
}
export declare const log: Logger;
