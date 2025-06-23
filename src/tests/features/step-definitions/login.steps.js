const {Given, When, Then} = require('@wdio/cucumber-framework');
const {expect, $} = require('@wdio/globals')
const LoginPage = require('../../../po/pages/login.page');

const loginPage = new LoginPage();

Given(/^user is on login page$/, async () => {
    await loginPage.open();
});

When(/^user enter (.*) and (.*)$/, async (username, password) => {
    await loginPage.usernameInput.setValue(username);
    await loginPage.passwordInput.setValue(password);
});

When(/^user clear both fields$/, async () => {
    await loginPage.clearInputField(loginPage.usernameInput);
    await loginPage.clearInputField(loginPage.passwordInput);
});

When(/^user clears only the password$/, async () => {
    await loginPage.clearInputField(loginPage.passwordInput);
});

When(/^user clicks the login button$/, async () => {
    await loginPage.loginBtn.click()
});

Then(/^this (.*) is displayed$/, async (errorMsg) => {
    const msg = await loginPage.errorMessage.getText();
    expect(msg).toContain(errorMsg);
});

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
});
