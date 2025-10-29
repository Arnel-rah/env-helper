import chalk from "chalk";

export type LogLevel = "debug" | "info" | "success" | "warn" | "error";

export interface Logger {
  setLevel: (level: LogLevel) => void;
  info: (msg: string) => void;
  success: (msg: string) => void;
  warn: (msg: string) => void;
  error: (msg: string) => void;
  debug: (msg: string) => void;
}

let currentLevel: LogLevel = "debug";
const levels: LogLevel[] = ["debug", "info", "success", "warn", "error"];

export const log: Logger = {
  setLevel: (level) => {
    if (levels.includes(level)) currentLevel = level;
  },

  info: (msg) => levels.indexOf("info") >= levels.indexOf(currentLevel)
    && console.log(chalk.blue(`[INFO] ${new Date().toISOString()} - ${msg}`)),

  success: (msg) => levels.indexOf("success") >= levels.indexOf(currentLevel)
    && console.log(chalk.green(`[SUCCESS] ${new Date().toISOString()} - ${msg}`)),

  warn: (msg) => levels.indexOf("warn") >= levels.indexOf(currentLevel)
    && console.log(chalk.yellow(`[WARN] ${new Date().toISOString()} - ${msg}`)),

  error: (msg) => levels.indexOf("error") >= levels.indexOf(currentLevel)
    && console.log(chalk.red(`[ERROR] ${new Date().toISOString()} - ${msg}`)),

  debug: (msg) => levels.indexOf("debug") >= levels.indexOf(currentLevel)
    && console.log(chalk.gray(`[DEBUG] ${new Date().toISOString()} - ${msg}`)),
};
