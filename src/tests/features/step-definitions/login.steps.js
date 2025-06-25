const {Given, When, Then} = require('@wdio/cucumber-framework');
const {expect, $} = require('@wdio/globals')
const LoginPage = require('../../../po/pages/login.page');

const loginPage = new LoginPage();

Given(/^user is on login page$/, async () => {
    await loginPage.open();
    console.log('Login page opened.');
});

When(/^user enters (.*) and (.*)$/, async (username, password) => {
    console.log(`Entering credentials`);
    await loginPage.usernameInput.setValue(username);
    await loginPage.passwordInput.setValue(password);
});

When(/^user clears both fields$/, async () => {
    await loginPage.clearInputField(loginPage.usernameInput);
    await loginPage.clearInputField(loginPage.passwordInput);
    console.log('Username and password fields cleared.');
});

When(/^user clears the password$/, async () => {
    await loginPage.clearInputField(loginPage.passwordInput);
    console.log('Password field cleared.');
});

When(/^user clicks the login button$/, async () => {
    await loginPage.loginBtn.click()
    console.log('Login button clicked.');
});

Then(/^this (.*) is displayed$/, async (errorMsg) => {
    const msg = await loginPage.errorMessage.getText();
    expect(msg).toContain(errorMsg);
    console.log('Error message validated.');
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
    console.log(`Page title matched expected.`);
});
