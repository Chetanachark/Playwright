import { createBdd } from 'playwright-bdd';
import { test } from 'playwright-bdd';
import { expect } from '@playwright/test';


const {When, Then} = createBdd(test);


// for single product
When('I add {string} to cart', async ({ page },productName: string) => {
  console.log(`Adding product:${productName}`);
  const product =  page.locator('.card').filter({hasText:productName});
  await product.locator('.btn-info').click();
});

// for multiple products
When('I add multiple items to cart and check cart count', async ({ page },table) => {
  const products = table.raw().flat();
  const productCount = products.length;
  for(const productName of products){
     const product =  page.locator('.card').filter({hasText:productName});
     await product.locator('.btn-info').click();
  }
});

Then('Cart badge should show {string}', async ({ page },cartCount:string) => {
  const checkoutButtonCount  = (
  await page.locator('.btn-primary').textContent()
)?.replace(/\D/g, '');
 expect(checkoutButtonCount).toEqual(cartCount);

});

