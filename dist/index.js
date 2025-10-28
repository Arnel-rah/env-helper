import chalk from "chalk";
/**
 * Logger coloré pour Node.js
 */
export const log = {
    info: (msg) => console.log(chalk.blue(`[INFO] ${new Date().toISOString()} - ${msg}`)),
    success: (msg) => console.log(chalk.green(`[SUCCESS] ${new Date().toISOString()} - ${msg}`)),
    warn: (msg) => console.log(chalk.yellow(`[WARN] ${new Date().toISOString()} - ${msg}`)),
    error: (msg) => console.log(chalk.red(`[ERROR] ${new Date().toISOString()} - ${msg}`)),
    debug: (msg) => console.log(chalk.gray(`[DEBUG] ${new Date().toISOString()} - ${msg}`)),
};
