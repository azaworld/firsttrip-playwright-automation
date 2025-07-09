import { Page, Locator, expect } from '@playwright/test';

export class SignInModal {
  readonly page: Page;
  readonly modal: Locator;
  readonly closeButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.modal = page.locator('.modal-content:has-text("Sign In")');
    this.closeButton = page.locator('.modal-content button[aria-label="Close"], .modal-content button:has-text("Close")');
  }

  async expectVisible() {
    await expect(this.modal).toBeVisible();
  }

  async close() {
    await this.closeButton.click();
  }
} 