import { log } from "./index.js";

const fakeMessages = [
  "Connected to database",
  "User logged in successfully",
  "Fetching API data...",
  "Error: Invalid token",
  "Server started on port 3000",
  "Cache cleared",
  "New order received",
  "Debug mode enabled",
];

function randomMessage(): string {
  return fakeMessages[Math.floor(Math.random() * fakeMessages.length)];
}

function randomLog(): void {
  const types = ["info", "success", "warn", "error", "debug"] as const;
  const type = types[Math.floor(Math.random() * types.length)];
  log[type](randomMessage());
}

for (let i = 0; i < 5; i++) {
  randomLog();
}
