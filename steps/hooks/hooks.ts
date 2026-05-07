import { createBdd, test } from 'playwright-bdd';

const { Before, After, BeforeAll, AfterAll } = createBdd(test);

BeforeAll(async () => {
  console.log('🚀 Test suite started');
});

Before(async ({ page }) => {
  console.log('🟢 Scenario started');
});

After(async () => {
  console.log('🏁 Scenario finished');
});

AfterAll(async () => {
  console.log('🏁 Test suite finished');
});