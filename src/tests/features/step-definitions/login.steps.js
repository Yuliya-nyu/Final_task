const {Given, When, Then} = require('@wdio/cucumber-framework');
// const {expect, $} = require('@wdio/globals')
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

When(/^user clicks the login button$/, async () => {
    await loginPage.loginBtn.click()
});

Then(/^this (.*) is displayed$/, async (errorMsg) => {
    const msg = await loginPage.errorMessage.getText();
    expect(msg).toContain(errorMsg);
});