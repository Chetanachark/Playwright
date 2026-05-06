const {test, expect} = require('@playwright/test');

test("Webpage with new context", async function({browser}){
    const context = await browser.newContext();
    const page = await context.newPage(); 
    await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/")
    
    

})
test("default web page",async({page})=>{
   await page.goto("https://playwright.dev/")
   await expect(page).toHaveTitle("Fast and reliable end-to-end testing for modern web apps | Playwright")
    
})