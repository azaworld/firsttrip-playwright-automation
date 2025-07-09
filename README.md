# FirstTrip Playwright Automation Framework

## Overview
This repository contains a scalable Playwright-based automation framework for UI and API testing of https://firsttrip.com/flight. It uses TypeScript, Page Object Model, and is designed for easy extension and CI/CD integration.

## Features
- UI automation using Playwright and TypeScript
- Page Object Model for maintainability
- Configurable test data
- API testing support
- HTML and list reporting
- Screenshots on failure
- Easy to extend for new tests

## Project Structure
```
firsttrip-playwright-automation/
├── config/           # Test data and config
├── pages/            # Page Objects
├── reports/          # Test reports and screenshots
├── tests/            # Test specs
├── utils/            # Helpers and API client
├── playwright.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Setup
1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Install Playwright browsers:**
   ```bash
   npx playwright install
   ```

## Running Tests
- **Run all tests:**
  ```bash
  npx playwright test
  ```
- **View HTML report:**
  ```bash
  npx playwright show-report
  ```

## Test Reports
- HTML reports are generated in the `playwright-report/` directory.
- Screenshots for failed tests are saved in the `reports/` directory.

## Design Choices
- **TypeScript:** For type safety and maintainability.
- **Page Object Model:** Encapsulates UI logic for each page/modal, making tests readable and maintainable.
- **Config Files:** Centralized test data for easy updates.
- **Helpers:** Utility functions for logging and screenshots.
- **API Client:** Ready for API testing using Playwright's request API.
- **Reporting:** Uses Playwright's built-in HTML and list reporters.

## Extending the Framework
- Add new Page Objects in `pages/`.
- Add new test specs in `tests/`.
- Add or update test data in `config/testData.ts`.
- Add API tests using `utils/apiClient.ts`.

## CI/CD Integration (Optional)
- The framework is compatible with any CI/CD system that supports Node.js.
- Add the following to your pipeline:
  ```bash
  npm ci
  npx playwright install --with-deps
  npx playwright test
  npx playwright show-report
  ```

## Contact
For questions or issues, please open an issue in this repository.
