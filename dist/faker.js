import { log } from "./index.js";
const fakeMessages = {
    info: [
        "Connected to database",
        "User logged in successfully",
        "Server started on port 3000",
        "Cache cleared",
        "Fetching API data...",
    ],
    warn: [
        "Memory usage is high",
        "Retrying failed request...",
        "Cache nearing capacity",
    ],
    error: [
        "Error: Invalid token",
        "Database connection failed",
        "Request timeout",
    ],
    debug: [
        "Debug mode enabled",
        "Cache cleared internally",
        "Session token refreshed",
    ],
};
function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
function randomLog() {
    const types = ["info", "warn", "error", "debug"];
    const type = getRandom(types);
    const message = getRandom(fakeMessages[type]);
    log[type](message);
}
// Simule des logs toutes les 800ms pendant 10 logs
let count = 0;
const maxLogs = 10;
const interval = setInterval(() => {
    randomLog();
    count++;
    if (count >= maxLogs) {
        clearInterval(interval);
        log.info("Log simulation finished");
    }
}, 800);
