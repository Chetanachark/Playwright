import { defineConfig } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';
import dotenv from 'dotenv';
import path from 'path';

// ===============================
// ENV LOADER (SAFE + SINGLE LOAD)
// ===============================
dotenv.config({
  path: path.resolve(__dirname, 'env/.env.dev'),
  override: true,
});

console.log("🔥 ENV LOADED:", process.env.BASE_URL);

// ===============================
// BDD CONFIG
// ===============================
const testDir = defineBddConfig({
  features: 'features/**/*.feature',
  steps: 'steps/**/*.ts',
});

// ===============================
// PLAYWRIGHT CONFIG
// ===============================
export default defineConfig({
  testDir,

  // ✅ IMPORTANT FOR CI + GITHUB ACTIONS
  fullyParallel: true,
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 1 : undefined,

  use: {
    baseURL: process.env.BASE_URL,

    // ✅ ALWAYS SAFE IN CI + LOCAL
    headless: true,

    // ❌ REMOVE launchOptions (NOT NEEDED, CAUSES CONFUSION IN BDD)
    // launchOptions: { headless: true },

    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: process.env.CI ? 'retain-on-failure' : 'off',
  },

  reporter: [
    ['list'],
    ['html', { open: 'never' }]
  ],
});