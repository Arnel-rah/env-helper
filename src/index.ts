import chalk from "chalk";

export interface Logger {
  info: (msg: string) => void;
  success: (msg: string) => void;
  warn: (msg: string) => void;
  error: (msg: string) => void;
  debug: (msg: string) => void;
}


export const log: Logger = {
  info: (msg) => console.log(chalk.blue(`[INFO] ${new Date().toISOString()} - ${msg}`)),
  success: (msg) => console.log(chalk.green(`[SUCCESS] ${new Date().toISOString()} - ${msg}`)),
  warn: (msg) => console.log(chalk.yellow(`[WARN] ${new Date().toISOString()} - ${msg}`)),
  error: (msg) => console.log(chalk.red(`[ERROR] ${new Date().toISOString()} - ${msg}`)),
  debug: (msg) => console.log(chalk.gray(`[DEBUG] ${new Date().toISOString()} - ${msg}`)),
};
