/**
 * Simple Login Test for practicetestautomation.com
 * Basic login functionality test case
 */

const { test, expect } = require('@playwright/test');

test.describe('Practice Test Automation - Login Tests', () => {
  
  test.beforeEach(async ({ page }) => {
    // Navigate to the login page
    await page.goto('https://practicetestautomation.com/practice-test-login/');
  });

  test('Successful Login with Valid Credentials @smoke @login', async ({ page }) => {
    console.log('🔐 Testing successful login...');
    
    // Step 1: Fill username
    await page.getByRole('textbox', { name: 'Username' }).fill('student');
    console.log('✅ Username entered: student');
    
    // Step 2: Fill password
    await page.getByRole('textbox', { name: 'Password' }).fill('Password123');
    console.log('✅ Password entered');
    
    // Step 3: Click Submit button
    await page.getByRole('button', { name: 'Submit' }).click();
    console.log('✅ Submit button clicked');
    
    // Step 4: Verify successful login
    // Wait for success page to load and verify heading
    await expect(page.getByRole('heading', { name: 'Logged In Successfully' })).toBeVisible({ timeout: 10000 });
    
    // Verify success message
    await expect(page.locator('text=Congratulations')).toBeVisible();
    
    // Verify logout button is present
    await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();
    
    console.log('✅ Login successful - user is on success page');
  });

});