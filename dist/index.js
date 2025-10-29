import chalk from "chalk";
import fs from "fs";
import path from "path";
let currentLevel = "debug";
const levels = ["debug", "info", "success", "warn", "error"];
let logFilePath = null;
function writeToFile(level, msg) {
    if (!logFilePath)
        return;
    const line = `[${level.toUpperCase()}] ${new Date().toISOString()} - ${msg}\n`;
    fs.appendFileSync(logFilePath, line, "utf8");
}
export const log = {
    setLevel: (level) => {
        if (levels.includes(level))
            currentLevel = level;
    },
    toFile: (filePath) => {
        const dir = path.dirname(filePath);
        if (!fs.existsSync(dir))
            fs.mkdirSync(dir, { recursive: true });
        logFilePath = filePath;
        log.info(`Logging to file: ${filePath}`);
    },
    info: (msg) => {
        if (levels.indexOf("info") >= levels.indexOf(currentLevel)) {
            console.log(chalk.blue(`[INFO] ${new Date().toISOString()} - ${msg}`));
            writeToFile("info", msg);
        }
    },
    success: (msg) => {
        if (levels.indexOf("success") >= levels.indexOf(currentLevel)) {
            console.log(chalk.green(`[SUCCESS] ${new Date().toISOString()} - ${msg}`));
            writeToFile("success", msg);
        }
    },
    warn: (msg) => {
        if (levels.indexOf("warn") >= levels.indexOf(currentLevel)) {
            console.log(chalk.yellow(`[WARN] ${new Date().toISOString()} - ${msg}`));
            writeToFile("warn", msg);
        }
    },
    error: (msg) => {
        if (levels.indexOf("error") >= levels.indexOf(currentLevel)) {
            console.log(chalk.red(`[ERROR] ${new Date().toISOString()} - ${msg}`));
            writeToFile("error", msg);
        }
    },
    debug: (msg) => {
        if (levels.indexOf("debug") >= levels.indexOf(currentLevel)) {
            console.log(chalk.gray(`[DEBUG] ${new Date().toISOString()} - ${msg}`));
            writeToFile("debug", msg);
        }
    },
};
