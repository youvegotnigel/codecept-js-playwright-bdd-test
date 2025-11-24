# CodeceptJS + Playwright + BDD (Gherkin) Test Automation Framework

[![Build](https://github.com/youvegotnigel/codecept-js-playwright-bdd-test/actions/workflows/codecept-js-playwright.yml/badge.svg)](https://github.com/youvegotnigel/codecept-js-playwright-bdd-test/actions/workflows/codecept-js-playwright.yml) 

This repository contains an end-to-end UI test automation framework using:

- **CodeceptJS** as the test runner  
- **Playwright** as the browser automation engine  
- **Gherkin (BDD)** using `.feature` files  
- **TypeScript / JavaScript** support  
- **GitHub Actions CI** for running tests in headless mode  

This project is built to be **simple for beginners**, scalable for teams, and easy to run locally or in CI.

---

## Prerequisites

* Node.js 16+ (recommended: 18 or 20 LTS)
* VS Code (IDE)
* Run Playwright browser install once:
```bash
npx playwright install
```


## Project Structure

```bash
codecept-js-playwright-bdd-test/
│
├── features/                   # <---- TODO
│     └── login.feature
│
├── step_definitions/           # <---- TODO
│     └── login.steps.ts
│
├── pages/                      # <---- TODO
│     └── login.page.ts
│
├── codecept.conf.ts
├── steps.d.ts
├── steps_file.ts
├── tsconfig.json
├── package.json
└── .github/workflows/codecept-js-playwright.yml

```
---


## Getting Started

### 1. Install dependencies

```bash
npm ci
```


### 2. Install Playwright browsers

```bash
npx playwright install
```


### 3. Run Tests

```bash
npx codeceptjs run

or
npx codeceptjs run --steps

or
npx codeceptjs run tests/hook_test.ts --steps

or
npx codeceptjs run --steps --verbose

or
npx codeceptjs run --steps --grep "@login"

or
npx codeceptjs run --reporter mocha-multi

or
npx codeceptjs run --grep "custom locator strategy"
```

---

## Playwright Helpers

https://github.com/codeceptjs/CodeceptJS/blob/master/docs/helpers/Playwright.md


### Configuration Options

| Option                  |                             Type / Values | Description                                                                 |
| ----------------------- | ----------------------------------------: | --------------------------------------------------------------------------- |
| `url`                   |                                  `string` | Base URL for tests.                                                         |
| `browser`               |           `chromium \| firefox \| webkit` | Browser to use. Default: `chromium`.                                        |
| `show`                  |                                 `boolean` | Show browser window (headful).                                              |
| `restart`               |                                 `boolean` | Restart browser between tests.                                              |
| `disableScreenshots`    |                                 `boolean` | Don't save screenshots on failure.                                          |
| `emulate`               |                                  `object` | Launch browser in device emulation mode (Playwright device descriptor).     |
| `fullPageScreenshots`   |                                 `boolean` | Capture full-page screenshots on failure.                                   |
| `uniqueScreenshotNames` |                                 `boolean` | Prevent screenshot name collisions when scenarios share names.              |
| `keepBrowserState`      |                                 `boolean` | Keep browser state when `restart` is `false`.                               |
| `keepCookies`           |                                 `boolean` | Keep cookies when `restart` is `false`.                                     |
| `waitForAction`         |                             `number (ms)` | Wait after click/dblclick/pressKey. Default 100.                            |
| `waitForNavigation`     | `load \| domcontentloaded \| networkidle` | Playwright navigation success condition.                                    |
| `pressKeyDelay`         |                             `number (ms)` | Delay between key presses used by `fillField` / `appendField`.              |
| `getPageTimeout`        |                             `number (ms)` | Max navigation time in ms.                                                  |
| `waitForTimeout`        |                             `number (ms)` | Default wait-time for wait* helpers. Default 1000.                          |
| `basicAuth`             |                    `{username, password}` | Basic auth credentials for base URL.                                        |
| `windowSize`            |                `string` (e.g. `1280x900`) | Default window size (viewport).                                             |
| `userAgent`             |                                  `string` | Custom user-agent string.                                                   |
| `manualStart`           |                                 `boolean` | Do not start browser automatically; start manually via helper method.       |
| `chromium`              |                                  `object` | Extra options passed to Chromium launch (e.g. `browserWSEndpoint`, `args`). |


### Navigation & URL

| Method                                                                                    | Description                                 | Parameters                  |
| ----------------------------------------------------------------------------------------- | ------------------------------------------- | --------------------------- |
| `amOnPage(url)`                                                                           | Open page (relative or absolute)            | `url`                       |
| `refreshPage()`                                                                           | Reload current page                         | —                           |
| `goBack()` / `goForward()`                                                                | Browser navigation                          | —                           |
| `seeInCurrentUrl(fragment)` / `seeCurrentUrlEquals(url)` / `dontSeeCurrentUrlEquals(url)` | URL assertions                              | `fragment` / `url`          |
| `grabCurrentUrl()`                                                                        | Return current URL (Promise)                | —                           |
| `waitForNavigation(opts?)`                                                                | Wait for navigation to finish (uses config) | `opts` — Playwright options |


### Click / Element interactions

| Method                                      | Description                                          | Parameters            |
| ------------------------------------------- | ---------------------------------------------------- | --------------------- |
| `click(locator, context?)`                  | Click link/button/element (fuzzy locators supported) | `locator`, `context?` |
| `doubleClick(locator, context?)`            | Double click element                                 | `locator`, `context?` |
| `rightClick(locator, context?)`             | Right click element                                  | `locator`, `context?` |
| `forceClick(locator, context?)`             | Force click, ignores visibility/animation            | `locator`, `context?` |
| `moveCursorTo(locator, offsetX?, offsetY?)` | Move mouse to element                                | `locator`, `x?`, `y?` |
| `hover(locator)`                            | Hover over element                                   | `locator`             |
| `scrollTo(locator, x?, y?)`                 | Scroll to element with offsets                       | `locator`, `x?`, `y?` |


### Forms / Inputs

| Method                                                            | Description                            | Parameters                    |
| ----------------------------------------------------------------- | -------------------------------------- | ----------------------------- |
| `fillField(field, value)`                                         | Clear and type into field              | `field`, `value`              |
| `appendField(field, value)`                                       | Append text to field                   | `field`, `value`              |
| `clearField(field)`                                               | Clear input/textarea                   | `field`                       |
| `selectOption(select, option)`                                    | Select option (text or value)          | `select`, `option` or `array` |
| `checkOption(field, context?)` / `uncheckOption(field, context?)` | Check/uncheck checkbox or radio        | `field`, `context?`           |
| `attachFile(locator, pathToFile)`                                 | Upload file (relative to project root) | `locator`, `pathToFile`       |
| `type(keys, delay?)`                                              | Low-level typing (optionally slowed)   | `keys`, `delay?`              |
| `pressKey(keyOrArray)` / `pressKeyDown(key)` / `pressKeyUp(key)`  | Press keyboard keys / modifiers        | `key` or `['Control','Z']`    |


### Dialogs / Popups

| Method                                         | Description                                      |
| ---------------------------------------------- | ------------------------------------------------ |
| `acceptPopup()` / `cancelPopup()`              | Accept/dismiss current JS dialog                 |
| `amAcceptingPopups()` / `amCancellingPopups()` | Set automatic popup response mode (before popup) |
| `grabPopupText()`                              | Get text from active popup (Promise)             |
| `seeInPopup(text)`                             | Assert popup text contains `text`                |


### Tabs / Frames / Windows

| Method                                                | Description                                                      |
| ----------------------------------------------------- | ---------------------------------------------------------------- |
| `openNewTab(options?)`                                | Open new tab and switch to it (page options supported)           |
| `closeCurrentTab()`                                   | Close current tab and switch back                                |
| `closeOtherTabs()`                                    | Close all other tabs except current                              |
| `switchTo(num?)`                                      | Switch to frame (or `switchTo()` with no arg to go back to main) |
| `switchToNextTab(num?)` / `switchToPreviousTab(num?)` | Switch tab by index                                              |
| `grabNumberOfOpenTabs()`                              | Return number of open tabs (Promise)                             |


### Cookies / Storage

| Method                                    | Description                                                             |
| ----------------------------------------- | ----------------------------------------------------------------------- |
| `setCookie(cookieObj or array)`           | Set one or multiple cookies                                             |
| `clearCookie(name?)`                      | Clear cookie by name or all cookies                                     |
| `grabCookie(name?)`                       | Get cookie JSON by name or all cookies (Promise)                        |
| `seeCookie(name)` / `dontSeeCookie(name)` | Assertions about cookie presence                                        |
| `haveRequestHeaders(headers)`             | Set request headers for next requests                                   |
| `runOnBrowser` / `executeScript`          | Use `page.evaluate` or helper to manipulate localStorage/sessionStorage |


### Grabbers (reading values)

| Method                                    | Description                         |    Returns (Promise) |
| ----------------------------------------- | ----------------------------------- | -------------------: |
| `grabTextFrom(locator)`                   | Get visible text (single or array)  | `string \| string[]` |
| `grabHTMLFrom(locator)`                   | Get `innerHTML` of element(s)       | `string \| string[]` |
| `grabValueFrom(locator)`                  | Get `value` attribute from input    |             `string` |
| `grabAttributeFrom(locator, attr)`        | Read attribute value                | `string \| string[]` |
| `grabCssPropertyFrom(locator, prop)`      | Read computed CSS property          |             `string` |
| `grabCurrentUrl()`                        | Current URL                         |             `string` |
| `grabTitle()`                             | Page title                          |             `string` |
| `grabSource()`                            | Page HTML source                    |             `string` |
| `grabBrowserLogs()`                       | Retrieve browser JS logs            |         `Array<any>` |
| `grabPageScrollPosition()`                | `{ x, y }`                          |             `Object` |
| `grabElementBoundingRect(locator, prop?)` | `{x,y,width,height}` or single prop |     `object\|number` |
| `grabDataFromPerformanceTiming()`         | Navigation Timing metrics (ms)      |             `object` |
| `grabPopupText()`                         | Text of popup or `null`             |     `string \| null` |
| `grabNumberOfVisibleElements(locator)`    | Count of visible elements           |             `number` |


### Screenshots & Downloads & Files

| Method                                     | Description                                            |
| ------------------------------------------ | ------------------------------------------------------ |
| `saveScreenshot(fileName, fullPage?)`      | Save screenshot to `output/` (fullPage if `true`)      |
| `saveElementScreenshot(locator, fileName)` | Save element screenshot to `output/`                   |
| `handleDownloads(fileName?)`               | Start handling downloads and save to `output/`         |
| `waitForFile(path, sec?)`                  | (Used with FileSystem helper) wait for downloaded file |


### Assertions & existence checks

| Method                                                                           | Description                               |
| -------------------------------------------------------------------------------- | ----------------------------------------- |
| `see(text, context?)` / `dontSee(text, context?)`                                | Text visibility assertions                |
| `seeElement(locator)` / `dontSeeElement(locator)`                                | Element visibility assertions             |
| `seeElementInDOM(locator)` / `dontSeeElementInDOM(locator)`                      | Element present in DOM (visible or not)   |
| `seeInField(field, value)` / `dontSeeInField(field, value)`                      | Input value assertions                    |
| `seeInSource(text)` / `dontSeeInSource(text)`                                    | Source contains / does not contain text   |
| `seeInTitle(text)` / `dontSeeInTitle(text)`                                      | Title contains / not contain text         |
| `seeNumberOfElements(locator, num)` / `seeNumberOfVisibleElements(locator, num)` | Count assertions                          |
| `seeTextEquals(text, context?)` / `seeTitleEquals(title)`                        | Equality assertions                       |
| `seeAttributesOnElements(locator, attributes)`                                   | Check attributes for all matched elements |
| `seeCssPropertiesOnElements(locator, cssProperties)`                             | Check CSS props for matched elements      |


### Waiting & synchronization

| Method                                                  | Description                                           |
| ------------------------------------------------------- | ----------------------------------------------------- |
| `wait(sec)`                                             | Pause for `sec` seconds                               |
| `waitForElement(locator, sec?)`                         | Wait for element present                              |
| `waitForVisible(locator, sec?)`                         | Wait element to be visible (supports React selectors) |
| `waitForInvisible(locator, sec?)`                       | Wait for element removal/invisible                    |
| `waitForDetached(locator, sec?)`                        | Wait element detached from DOM                        |
| `waitForClickable(locator, sec?)`                       | Wait element to be clickable                          |
| `waitForText(text, sec?, context?)`                     | Wait for text to appear                               |
| `waitForValue(field, value, sec?)`                      | Wait field `value` attribute                          |
| `waitForFunction(fn, argsOrSec?, sec?)`                 | Run function in browser and wait true                 |
| `waitUntil(fn, sec?, timeoutMsg?, interval?)`           | Similar to waitForFunction                            |
| `waitForRequest(urlOrPredicate, sec?)`                  | Wait for a network request                            |
| `waitForResponse(urlOrPredicate, sec?)`                 | Wait for a network response                           |
| `waitInUrl(urlPart, sec?)` / `waitUrlEquals(url, sec?)` | URL-based waits                                       |
| `waitNumberOfVisibleElements(locator, num, sec?)`       | Wait for specific count                               |
| `waitToHide(locator, sec?)`                             | Wait for element hide                                 |


<br>

[More on Playwright Helpers](https://github.com/codeceptjs/CodeceptJS/blob/master/docs/helpers/Playwright.md)


---

## Latest Test Report

[Open Latest Test Report ↗](https://youvegotnigel.github.io/codecept-js-playwright-bdd-test/)
