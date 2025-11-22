# CodeceptJS + Playwright + BDD (Gherkin) Test Automation Framework

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
│     └── LoginPage.ts
│
├── codecept.conf.ts
├── steps.d.ts
├── steps_file.ts
├── tsconfig.json
├── package.json
└── .github/workflows/ci.yml

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
npx codeceptjs run --steps --verbose

or
npx codeceptjs run --steps --grep "@login"

or
npx codeceptjs run --reporter mocha-multi

or
npx codeceptjs run --grep "custom locator strategy"
```


## Latest Test Report

The latest automated test report is available here:

👉 **https://youvegotnigel.github.io/codecept-js-playwright-bdd-test/**
