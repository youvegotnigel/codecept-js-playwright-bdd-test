import { setHeadlessWhen, setWindowSize, setCommonPlugins } from '@codeceptjs/configure';
import { devices } from 'playwright-core';

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run

setHeadlessWhen(process.env.HEADLESS);
setWindowSize(1536, 722);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

export const config: CodeceptJS.MainConfig = {
  tests: 'tests/*_test.ts',
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      //emulate: devices["iPhone 12"],

      customLocatorStrategies: {
        byTestId: (selector, root) => {
          return root.querySelector(`[data-testid="${selector}"]`);
        }
      },
      url: 'https://www.saucedemo.com',
      show: true
    }
  },
  multiple: {
    allBrowsers: {
      browsers: ['chromium', 'firefox', 'webkit']
    }
  },
  include: {
    I: './steps_file'
  },
  plugins: {

    allure: {
      enabled: true,
      require: "allure-codeceptjs",
    },

    htmlReporter: {
      enabled: true,
      output: './output',              // Directory for the report
      reportFileName: 'report.html',   // Name of the HTML file
      includeArtifacts: true,          // Include screenshots/artifacts
      showSteps: true,                 // Show individual test steps
      showSkipped: true                // Show skipped tests
    }
  },

  "mocha": {
    "reporterOptions": {
      "codeceptjs-cli-reporter": {
        "stdout": "-",
        "options": {
          "verbose": true,
          "steps": true,
        }
      },
      "mochawesome": {
        "stdout": "./output/console.log",
        "options": {
          "reportDir": "./output",
          "reportFilename": "report"
        }
      },
      "mocha-junit-reporter": {
        "stdout": "./output/console.log",
        "options": {
          "mochaFile": "./output/result.xml",
          "attachments": true                   //add screenshot for a failed test
        }
      }
    }
  },
  name: 'codecept-js-playwright-bdd-test'
}