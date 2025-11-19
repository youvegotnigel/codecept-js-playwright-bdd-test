# CodeceptJS + Playwright + BDD (Gherkin) Test Automation Framework

This repository contains an end-to-end UI test automation framework using:

- **CodeceptJS** as the test runner  
- **Playwright** as the browser automation engine  
- **Gherkin (BDD)** using `.feature` files  
- **TypeScript / JavaScript** support  
- **GitHub Actions CI** for running tests in headless mode  

This project is built to be **simple for beginners**, scalable for teams, and easy to run locally or in CI.

---

## Project Structure

```bash
project-root/
│
├── features/ # Gherkin feature files
│ └── login.feature
│
├── step_definitions/ # Step definitions mapped to Gherkin steps
│ └── steps.ts
│
├── pages/ # Page Object files (optional but recommended)
│ └── LoginPage.ts
│
├── codecept.conf.js # Main CodeceptJS configuration
├── playwright.config.js # Optional Playwright config (if needed)
├── package.json
├── package-lock.json
└── README.md
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


### 3. Run tests

```bash
npx codeceptjs run --steps

or
npx codeceptjs run --steps --grep "@login"
```
