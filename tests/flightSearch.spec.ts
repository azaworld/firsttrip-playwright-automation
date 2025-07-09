import { test, expect } from '@playwright/test';
import { FlightSearchPage } from '../pages/FlightSearchPage';
import { SearchResultsPage } from '../pages/SearchResultsPage';
import { SignInModal } from '../pages/SignInModal';
import { flightSearchData } from '../config/testData';
import { captureScreenshotOnFailure } from '../utils/helpers';

// Main UI test scenario

test.describe('Flight Search UI Automation', () => {
  test('should search, filter, select, and compare flight prices', async ({ page }, testInfo) => {
    const flightSearch = new FlightSearchPage(page);
    const results = new SearchResultsPage(page);
    const signIn = new SignInModal(page);

    // 1. Go to flight search page
    await flightSearch.goto();

    // 2. Fill search form
    await flightSearch.performFlightSearch(
      flightSearchData.from,
      flightSearchData.to,
      flightSearchData.departureDate,
      '2', // or flightSearchData.travelers.adults as string
      flightSearchData.class
    );

    // 3. Filter US-Bangla Airlines
    await results.filterByAirline('US-Bangla Airlines');

    // 4. Scroll and select last flight
    await results.selectLastFlight();

    // 5. Verify Sign In modal
    await signIn.expectVisible();

    // 6. Close Sign In modal
    await signIn.close();

    // 7. Capture US-Bangla Airlines prices
    const usBanglaPrices = await results.getFlightPrices();

    // 8. Deselect US-Bangla Airlines, select Novo Air
    await results.deselectAirline('US-Bangla Airlines');
    await results.filterByAirline('Novo Air');

    // 9. Capture Novo Air prices and compare
    const novoAirPrices = await results.getFlightPrices();
    expect(novoAirPrices.length).toBeGreaterThan(0);
    expect(usBanglaPrices.length).toBeGreaterThan(0);
    expect(
      novoAirPrices.some((price, i) => price !== usBanglaPrices[i])
    ).toBeTruthy();
  });

  test.afterEach(async ({ page }, testInfo) => {
    await captureScreenshotOnFailure(page, testInfo);
  });
}); 