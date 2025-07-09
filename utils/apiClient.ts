import { request, APIRequestContext } from '@playwright/test';

export async function createApiClient(): Promise<APIRequestContext> {
  return await request.newContext({
    baseURL: 'https://firsttrip.com',
    extraHTTPHeaders: {
      'Content-Type': 'application/json',
    },
  });
} 