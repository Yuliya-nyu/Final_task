const {Given, When, Then} = require('@wdio/cucumber-framework');
const {expect, $} = require('@wdio/globals')
const LoginPage = require('../../../po/pages/login.page');
const logger = require('../../../utils/logger');

const loginPage = new LoginPage();

// Open the login page
Given(/^user is on login page$/, async () => {
    await loginPage.open();
    const browserName = browser.capabilities.browserName || 'unknown';
    logger.info(`Login page opened in browser: ${browserName}`);
});

// Enter username and password
When(/^user enters (.*) and (.*)$/, async (username, password) => {
    logger.info(`Entering credentials`);
    await loginPage.usernameInput.setValue(username);
    await loginPage.passwordInput.setValue(password);
});

// Clear both input fields (username and password)
When(/^user clears both fields$/, async () => {
    await loginPage.clearInputField(loginPage.usernameInput);
    await loginPage.clearInputField(loginPage.passwordInput);
    logger.info('Username and password fields cleared.');
});

// Clear only the password field
When(/^user clears the password$/, async () => {
    await loginPage.clearInputField(loginPage.passwordInput);
    logger.info('Password field cleared.');
});

// Click the login button
When(/^user clicks the login button$/, async () => {
    await loginPage.loginBtn.click()
    logger.info('Login button clicked.');
});

// Validate that the expected error message is displayed
Then(/^this (.*) is displayed$/, async (errorMsg) => {
    const msg = await loginPage.errorMessage.getText();
    expect(msg).toContain(errorMsg);
    logger.info('Error message validated.');
});

// Validate that the expected page title is displayed
Then(/^this (.*) should be displayed$/, async (expectedTitle) => {
    await browser.waitUntil(
        async () => (await browser.getTitle()) === expectedTitle,
        {
            timeout: 5000,
            timeoutMsg: `Expected title "${expectedTitle}" was not displayed`,
        }
    );
    const title = await browser.getTitle();
    expect(title).toEqual(expectedTitle);
    logger.info(`Page title matched expected.`);
});
