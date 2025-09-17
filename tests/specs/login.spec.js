import {test,expect} from '@playwright/test';
import Login from '../pages/login';

test.describe('Login Functionality', () => {
    let login;
    test.beforeEach(async ({page}) => {
        login = new Login(page);
        await page.goto('https://www.saucedemo.com/');
    });
    test('User should be able to see login error massage when using locked_out_user', async ({page}) => {
        await login.clickUsernameField();
        await login.clickPasswordField();
        await login.clickLoginButton();

        const errorMessage = page.locator('[data-test="error"]');

  // Step 5: Assert expected vs actual text
      await expect(errorMessage).toContainText('Sorry, this user has been locked out.');
      console.log('Error message is visible as expected.');


    });

});