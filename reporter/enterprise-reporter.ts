import { Reporter, TestCase, TestResult, TestStatus } from '@playwright/test/reporter';

interface ScenarioResult {
  title: string;
  status: TestStatus;
  duration: number;
  retries: number;
}

class EnterpriseReporter implements Reporter {
  private results: Record<string, ScenarioResult[]> = {};

  onTestEnd(test: TestCase, result: TestResult) {
    const feature = this.extractFeatureName(test);
    const scenario = this.extractScenarioTitle(test);

    if (!this.results[feature]) {
      this.results[feature] = [];
    }

    this.results[feature].push({
      title: scenario,
      status: result.status,
      duration: result.duration,
      retries: result.retry,
    });
  }

  onEnd() {
    console.log('\n======================================');
    console.log('📊 ENTERPRISE EXECUTION SUMMARY');
    console.log('======================================\n');

    let total = 0;
    let passed = 0;
    let failed = 0;
    let flaky = 0;

    for (const feature in this.results) {
      console.log(`📂 Feature: ${feature}\n`);

      for (const scenario of this.results[feature]) {
        total++;

        const isFlaky = scenario.retries > 0 && scenario.status === 'passed';
        const isSlow = scenario.duration > 5000;

        if (scenario.status === 'passed') passed++;
        else failed++;

        if (isFlaky) flaky++;

        const icon =
          scenario.status === 'passed'
            ? isFlaky
              ? '⚠️'
              : '✅'
            : '❌';

        const slowTag = isSlow ? ' 🐢 slow' : '';
        const retryTag = isFlaky ? ` (retry #${scenario.retries})` : '';

        console.log(
          `   ${icon} ${scenario.title}${retryTag}  (${(scenario.duration / 1000).toFixed(2)}s)${slowTag}`
        );
      }

      console.log('');
    }

    const passRate = total === 0 ? 0 : (passed / total) * 100;

    console.log('--------------------------------------');
    console.log(`Total Scenarios : ${total}`);
    console.log(`Passed          : ${passed}`);
    console.log(`Failed          : ${failed}`);
    console.log(`Flaky           : ${flaky}`);
    console.log(`Pass Rate       : ${passRate.toFixed(2)}%`);
    console.log('======================================\n');
  }

  private extractFeatureName(test: TestCase): string {
    const filePath = test.location?.file || '';
    const match = filePath.match(/([^\\/]+)\.feature/);
    return match ? match[1] : 'Unknown Feature';
  }

  private extractScenarioTitle(test: TestCase): string {
    const titlePath = test.titlePath();

    // Remove project name (chromium etc.)
    const cleaned = titlePath.filter(t => !t.includes('chromium'));

    if (cleaned.length === 0) return test.title;

    const last = cleaned[cleaned.length - 1];

    // Scenario Outline
    if (last.includes('Example')) {
      const scenario = cleaned[cleaned.length - 2];
      return `${scenario} (${last})`;
    }

    return last;
  }
}

export default EnterpriseReporter;