import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  timeout: 45000,
  workers: 2,
  use: {
    baseURL: process.env.TEST_BASE_URL || "http://127.0.0.1:3000",
    channel: process.env.PLAYWRIGHT_CHANNEL || "msedge",
    screenshot: "only-on-failure",
    trace: "retain-on-failure",
  },
  reporter: [["list"], ["html", { open: "never" }]],
});
