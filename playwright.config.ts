import { defineConfig } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';
import dotenv from 'dotenv';
import path from 'path';

// ✅ LOAD ENV ONLY ONCE
dotenv.config({
  path: path.resolve('env/.env.dev'),
  override: true,
});

console.log("🔥 ENV LOADED:", process.env.BASE_URL);

const testDir = defineBddConfig({
  features: 'features/**/*.feature',
  steps: 'steps/**/*.ts',
});

export default defineConfig({
  testDir,

  use: {
    baseURL: process.env.BASE_URL,
    headless: true,
    trace: 'on',
  },
});