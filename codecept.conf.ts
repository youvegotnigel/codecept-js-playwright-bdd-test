import { setHeadlessWhen, setWindowSize, setCommonPlugins } from '@codeceptjs/configure';
import { devices } from 'playwright-core';

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run

setHeadlessWhen(process.env.HEADLESS);
setWindowSize(1536, 722);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

export const config: CodeceptJS.MainConfig = {
  require: ['ts-node/register'],

  tests: 'tests/*_test.ts',
  output: './output',
  helpers: {
    Playwright: {
      timeout: 30 * 1000,  // limit all tests in all suites to 30 secs
      browser: 'chromium',
      //emulate: devices["iPhone 12"],

      customLocatorStrategies: {
        byTestId: (selector, root) => {
          return root.querySelector(`[data-test="${selector}"]`);
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
    I: './steps_file.ts'
  },

  mocha: {
    reporterOptions: {
      'codeceptjs-cli-reporter': {
        stdout: '-',
        options: {
          verbose: true,
          steps: true
        }
      },
      mochawesome: {
        stdout: './output/console.log',
        options: {
          reportDir: './output',
          reportFilename: 'report'
        }
      },
      'mocha-junit-reporter': {
        stdout: './output/console.log',
        options: {
          mochaFile: './output/result.xml',
          attachments: true
        }
      }
    }
  },
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: './step_definitions/*.steps.ts'
  },

  // https://github.com/codeceptjs/CodeceptJS/tree/3.x/lib/plugin
  plugins: {

    customListener: {
      enabled: true,
      require: './listeners/customListener.ts'
    },

    screenshotOnFail: {
      enabled: true,                    // Enable or disable the screenshot on failure
      fullPageScreenshots: true,        // Capture the full page in the screenshot
      uniqueScreenshotNames: false,     // Generate unique names for each screenshot
      disableScreenshots: false         // Disable screenshots if needed
    },

    allure: {
      enabled: true,
      require: 'allure-codeceptjs'
    },

    htmlReporter: {
      enabled: true,
      output: './output',              // Directory for the report
      reportFileName: 'report.html',   // Name of the HTML file
      includeArtifacts: true,          // Include screenshots/artifacts
      showSteps: true,                 // Show individual test steps
      showSkipped: true                // Show skipped tests
    },

    retryFailedStep: {
      enabled: true
    },

    eachElement: {
      enabled: true
    },

    pauseOnFail: {}
  },
  stepTimeout: 0,
  stepTimeoutOverride: [{
      pattern: 'wait.*',
      timeout: 0
    },
    {
      pattern: 'amOnPage',
      timeout: 0
    }
  ],
  name: 'codecept-js-playwright-bdd-test'
}