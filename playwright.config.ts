import dotenv from 'dotenv';
import path from 'path';
import { defineConfig } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

// 🔥 read environment type (dev/qa/prod)
const env = process.env.ENV || 'dev';

// 🔥 dynamically pick env file
const envFile = path.resolve(`env/.env.${env}`);

dotenv.config({ path: envFile });

console.log(`🔥 Running tests on ENV: ${env}`);
console.log(`🌍 BASE_URL: ${process.env.BASE_URL}`);

const testDir = defineBddConfig({
  features: 'features/**/*.feature',
  steps: 'steps/**/*.ts',
});

export default defineConfig({
  testDir,

  use: {
    baseURL: process.env.BASE_URL,
    headless: false,
  },
});