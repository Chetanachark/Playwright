import { createBdd } from 'playwright-bdd';
import { test } from 'playwright-bdd';
import { expect } from '@playwright/test';


const { Given, When, Then, Before, After } = createBdd(test);


//open shop page
Given('I open shop page', async ({ page }) => {
  // user is already authenticated via auth.json
  await page.goto('/angularpractice/shop');
});

//showing all products
Then("products should be visible",async({page})=>{
  const product =  page.locator('.card');
  const count = await product.count();
  expect(count).toBeGreaterThan(0);
})
