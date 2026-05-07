// Generated from: features\login\loginMulUser.feature
import { test } from "playwright-bdd";

test.describe('Login functionality', () => {

  test.describe('Login with multiple users', () => {

    test('Example #1', async ({ Given, When, Then, page }) => { 
      await Given('I open the login page', null, { page }); 
      await When('I login with username "rahulshettyacademy" and password "Learning@830$3mK2"', null, { page }); 
      await Then('I should see "shop"', null, { page }); 
    });

    test('Example #2', async ({ Given, When, Then, page }) => { 
      await Given('I open the login page', null, { page }); 
      await When('I login with username "chetanachar" and password "chetan"', null, { page }); 
      await Then('I should see "practise"', null, { page }); 
    });

  });

});

// == technical section ==

test.beforeEach('BeforeEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('before', { page }));
test.afterEach('AfterEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('after', { page }));

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\login\\loginMulUser.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":8,"pickleLine":10,"tags":[],"steps":[{"pwStepLine":9,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I open the login page","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When I login with username \"rahulshettyacademy\" and password \"Learning@830$3mK2\"","stepMatchArguments":[{"group":{"start":22,"value":"\"rahulshettyacademy\"","children":[{"start":23,"value":"rahulshettyacademy","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":56,"value":"\"Learning@830$3mK2\"","children":[{"start":57,"value":"Learning@830$3mK2","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":11,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then I should see \"shop\"","stepMatchArguments":[{"group":{"start":13,"value":"\"shop\"","children":[{"start":14,"value":"shop","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":14,"pickleLine":11,"tags":[],"steps":[{"pwStepLine":15,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I open the login page","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When I login with username \"chetanachar\" and password \"chetan\"","stepMatchArguments":[{"group":{"start":22,"value":"\"chetanachar\"","children":[{"start":23,"value":"chetanachar","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":49,"value":"\"chetan\"","children":[{"start":50,"value":"chetan","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":17,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then I should see \"practise\"","stepMatchArguments":[{"group":{"start":13,"value":"\"practise\"","children":[{"start":14,"value":"practise","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end