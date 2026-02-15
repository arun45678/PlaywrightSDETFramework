import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  reporter: [
    ['html'],
    ['allure-playwright']
  ],

  timeout: 110000,

  use: {
    permissions: ['geolocation'],
    ignoreHTTPSErrors: true,
    headless: false,

    viewport: null, // maximize window

    launchOptions: {
      slowMo: 200,
      args: ['--start-maximized'],
    },

    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});
