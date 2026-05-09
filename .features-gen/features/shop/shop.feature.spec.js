// Generated from: features\shop\shop.feature
import { test } from "playwright-bdd";

test.describe('Shop page functionality', () => {

  test.beforeEach('Background', async ({ Given, page }, testInfo) => { if (testInfo.error) return;
    await Given('I open shop page', null, { page }); 
  });
  
  test('Logged in user can access shop page and view products', { tag: ['@smoke'] }, async ({ Then, page }) => { 
    await Then('products should be visible', null, { page }); 
  });

  test('User can add product to cart', { tag: ['@smoke'] }, async ({ When, Then, page }) => { 
    await When('I add "iphone X" to cart', null, { page }); 
    await Then('Cart badge should show "1"', null, { page }); 
  });

  test('User can add multiple product to cart', { tag: ['@regression'] }, async ({ When, Then, page }) => { 
    await When('I add multiple items to cart and check cart count', {"dataTable":{"rows":[{"cells":[{"value":"iphone X"}]},{"cells":[{"value":"Samsung Note 8"}]},{"cells":[{"value":"Nokia Edge"}]}]}}, { page }); 
    await Then('Cart badge should show "3"', null, { page }); 
  });

  test('User can tow  product to cart', { tag: ['@smoke'] }, async ({ When, Then, page }) => { 
    await When('I add multiple items to cart and check cart count', {"dataTable":{"rows":[{"cells":[{"value":"iphone X"}]},{"cells":[{"value":"Samsung Note 8"}]}]}}, { page }); 
    await Then('Cart badge should show "2"', null, { page }); 
  });

});

// == technical section ==

test.beforeAll('BeforeAll Hooks', ({ $runBeforeAllHooks }) => $runBeforeAllHooks(test, {  }, bddFileData));
test.afterAll('AfterAll Hooks', ({ $registerAfterAllHooks }) => $registerAfterAllHooks(test, {  }, bddFileData));
test.beforeEach('BeforeEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('before', { page }));
test.afterEach('AfterEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('after', { page }));

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\shop\\shop.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":7,"tags":["@smoke"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I open shop page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then products should be visible","stepMatchArguments":[]}]},
  {"pwTestLine":14,"pickleLine":11,"tags":["@smoke"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I open shop page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When I add \"iphone X\" to cart","stepMatchArguments":[{"group":{"start":6,"value":"\"iphone X\"","children":[{"start":7,"value":"iphone X","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":16,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then Cart badge should show \"1\"","stepMatchArguments":[{"group":{"start":23,"value":"\"1\"","children":[{"start":24,"value":"1","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":19,"pickleLine":16,"tags":["@regression"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I open shop page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"When I add multiple items to cart and check cart count","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":21,"keywordType":"Outcome","textWithKeyword":"Then Cart badge should show \"3\"","stepMatchArguments":[{"group":{"start":23,"value":"\"3\"","children":[{"start":24,"value":"3","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":24,"pickleLine":24,"tags":["@smoke"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I open shop page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":25,"keywordType":"Action","textWithKeyword":"When I add multiple items to cart and check cart count","stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":28,"keywordType":"Outcome","textWithKeyword":"Then Cart badge should show \"2\"","stepMatchArguments":[{"group":{"start":23,"value":"\"2\"","children":[{"start":24,"value":"2","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end