// @ts-check
const { defineConfig, devices } = require('@playwright/test');

/**
 * Simple Playwright Configuration for Login Tests
 */
module.exports = defineConfig({
  testDir: './tests',
  
  // Test timeout
  timeout: 30 * 1000,
  expect: {
    timeout: 10 * 1000,
  },

  // Fail the build on CI if you accidentally left test.only
  forbidOnly: !!process.env.CI,
  
  // Retry on CI only
  retries: process.env.CI ? 2 : 0,
  
  // Run tests in sequence (no parallel)
  workers: 1,
  
  // Reporter to use
  reporter: [
    ['html', { open: 'never' }],
    ['json', { outputFile: 'test-results/results.json' }],
    ['line']
  ],

  // Shared settings for all the projects below
  use: {
    // Base URL
    baseURL: 'https://practicetestautomation.com',

    // Browser settings
    headless: process.env.CI ? true : false,
    
    // Collect trace when retrying the failed test
    trace: 'on-first-retry',
    
    // Record video only on failure
    video: 'retain-on-failure',
    
    // Screenshots on failure
    screenshot: 'only-on-failure',
    
    // Viewport size
    viewport: { width: 1280, height: 720 },
  },

  // Configure projects for major browsers
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],

  // Output folder for test results
  outputDir: 'test-results/',
});