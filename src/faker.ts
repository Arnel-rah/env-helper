import {log} from "./index.js";

log.setLevel("debug");
log.toFile("./logs/app.log");

log.info("Server started on port 3000");
log.success("Database connected successfully");
log.warn("Cache size is nearing limit");
log.error("Failed to fetch user data");
log.debug("Request payload: { id: 42 }");

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

type LogType = keyof typeof fakeMessages;

function getRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomLog(): void {
  const types: LogType[] = ["info", "warn", "error", "debug"];
  const type = getRandom(types);
  const message = getRandom(fakeMessages[type]);
  log[type](message);
}

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
