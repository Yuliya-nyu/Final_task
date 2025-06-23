class LoginPage {
    get usernameInput() {
        return $('//input[@id ="user-name"]');
    }

    get passwordInput() {
        return $('//input[@id ="password"]');
    }

    get loginBtn() {
        return $('//input[@id ="login-button"]');
    }

    get errorMessage() {
        return $('//h3[@data-test="error"]');
    }

    open() {
        browser.url('https://www.saucedemo.com/');
    }

    async clearInputField(element) {
        await element.click();
        const value = await element.getValue();
        const backspaces = Array(value.length).fill('Backspace');
        await browser.keys(backspaces);
    }

}

module.exports = LoginPage;

