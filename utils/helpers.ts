import { Page, test } from '@playwright/test';

export async function captureScreenshotOnFailure(page: Page, testInfo: any) {
  if (testInfo.status !== testInfo.expectedStatus) {
    await page.screenshot({ path: `reports/${testInfo.title.replace(/\s+/g, '_')}.png`, fullPage: true });
  }
}

export function log(message: string) {
  // Simple logger, can be extended
  console.log(`[LOG] ${message}`);
} 