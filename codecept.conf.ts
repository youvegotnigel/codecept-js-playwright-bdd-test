import { setHeadlessWhen, setCommonPlugins } from '@codeceptjs/configure';
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

const isCI = process.env.CI === 'true';


export const config: CodeceptJS.MainConfig = {
  tests: './*_test.ts',
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'https://www.saucedemo.com',
      show: !isCI
    }
  },
  include: {
    I: './steps_file'
  },
  plugins: {
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