import { Page, Locator } from '@playwright/test';

export class SearchResultsPage {
  readonly page: Page;
  readonly airlineFilter: Locator;

  constructor(page: Page) {
    this.page = page;
    this.airlineFilter = page.locator('div:has-text("Airlines")');
  }

  async filterByAirline(airline: string) {
    await this.airlineFilter.click();
    await this.page.locator(`label:has-text("${airline}") input[type="checkbox"]`).check();
  }

  async deselectAirline(airline: string) {
    await this.airlineFilter.click();
    await this.page.locator(`label:has-text("${airline}") input[type="checkbox"]`).uncheck();
  }

  async getFlightPrices(): Promise<number[]> {
    const priceLocators = this.page.locator('.flight-card:visible .price');
    const count = await priceLocators.count();
    const prices: number[] = [];
    for (let i = 0; i < count; i++) {
      const priceText = await priceLocators.nth(i).innerText();
      const price = parseInt(priceText.replace(/[^0-9]/g, ''), 10);
      prices.push(price);
    }
    return prices;
  }

  async selectLastFlight() {
    const flights = this.page.locator('.flight-card:visible');
    const count = await flights.count();
    if (count > 0) {
      await flights.nth(count - 1).click();
    }
  }
} 