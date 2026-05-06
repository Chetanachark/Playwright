// Generated from: features\auth\loginWithEnv.feature
import { test } from "playwright-bdd";

test.describe('Login functionality', () => {

  test('Login with valid credentials', async ({ Given, When, Then, page }) => { 
    await Given('I open login page', null, { page }); 
    await When('I login with valid credentials', null, { page }); 
    await Then('I see shop page', null, { page }); 
  });

});

// == technical section ==

test.beforeEach('BeforeEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('before', { page }));
test.afterEach('AfterEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('after', { page }));

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\auth\\loginWithEnv.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given I open login page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When I login with valid credentials","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then I see shop page","stepMatchArguments":[]}]},
]; // bdd-data-end