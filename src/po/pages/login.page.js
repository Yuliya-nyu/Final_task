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

    async open() {
        await browser.url('/');
    }

    async clearInputField(element) {
        await element.click();
        const value = await element.getValue();
        const backspaces = Array(value.length).fill('Backspace');
        await browser.keys(backspaces);
    }

}

module.exports = LoginPage;

