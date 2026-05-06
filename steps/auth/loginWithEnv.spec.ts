import { createBdd } from 'playwright-bdd';
import { test } from 'playwright-bdd';
import { expect } from '@playwright/test'; // ✅ CORRECT
import { envConfig } from '../../config/env';

const { Given, When, Then, Before, After } = createBdd(test);

Before(async () => {
  console.log("🚀 Scenario started");
});


Given('I open login page', async ({ page }) => {
  await page.goto('/loginpagePractise/');
});

When('I login with valid credentials', async ({ page }) => {
  await page.fill('#username', envConfig.username);
  await page.fill('#password', envConfig.password);

  await page.locator("label:has-text('Admin') input[type='radio']").check();
  await page.locator("input[type='checkbox']").check();

  await page.click('#signInBtn');
});

Then('I see shop page', async ({ page }) => {
  await expect(page).toHaveURL(/shop/);
});
After(async () => {
  console.log("✅ Scenario finished");
});