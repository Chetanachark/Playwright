import { test } from 'playwright-bdd';
import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';

const { Given, When, Then, Before, After } = createBdd(test);
Before(async ({ page }) => {
  console.log("🚀 Starting Multi user test");
});
After(async ({ page }) => {
  console.log("🧹 Multi user test finished");
});


Given("I open the login page", async ({ page }) => {

  await page.goto("/loginpagePractise/");

  
});

When(
  "I login with username {string} and password {string}",
  async ({ page }, username: string, password: string) => {
    await page.fill('#username', username);
    await page.fill('#password', password);
    await page.locator("label:has-text('Admin') input[type='radio']").check();
    await page.locator("input[type='checkbox']").check();
    await page.click('#signInBtn');
  }
);

Then("I should see {string}", async ({ page }, result: string) => {
  if (result === 'shop') {
    await expect(page).toHaveURL(/shop/);
  } else {
    await expect(page.locator('.alert-danger')).toBeVisible();
  }
});