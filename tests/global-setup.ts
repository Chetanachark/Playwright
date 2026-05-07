import { chromium, FullConfig } from '@playwright/test';
import { envConfig } from '../config/env';

async function globalSetup(config: FullConfig) {
  const browser = await chromium.launch();

  const context = await browser.newContext();

  const page = await context.newPage();

  console.log("🚀 Running global setup - login once");

  await page.goto(`${envConfig.baseURL}/loginpagePractise/`);

  await page.fill('#username', envConfig.username);

  await page.fill('#password', envConfig.password);

  await page.click('#signInBtn');

  await page.waitForURL('**/shop');

  // 🔐 Save authentication state
  await context.storageState({ path: './auth.json' });

  console.log("✔ auth.json created");

  await browser.close();
}

export default globalSetup;