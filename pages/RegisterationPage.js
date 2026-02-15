class RegisterationPage {

    #firstName
    #lastName
    #email
    #password
    #confirmPassword
    #registerButton

    constructor(page) {
        this.page = page;
        // adjust selectors according to actual application
        this.#firstName = page.locator("//input[@id='firstName']");
        this.#lastName = page.locator("//input[@id='lastName']");
        this.#email = page.locator("//input[@id='email']");
        this.#password = page.locator("//input[@id='password']");
        this.#confirmPassword = page.locator("//input[@id='confirmPassword']");
        this.#registerButton = page.locator("//button[text()='Register']");
    }

    async goToRegistrationURL() {
        await this.page.goto("https://systemqa.asite.com/register");
        await this.page.waitForLoadState('networkidle');
        await this.page.waitForLoadState('domcontentloaded');
    }

    async fillFirstName(name) {
        await this.#firstName.fill(name);
    }

    async fillLastName(name) {
        await this.#lastName.fill(name);
    }

    async fillEmail(email) {
        await this.#email.fill(email);
    }

    async fillPassword(password) {
        await this.#password.fill(password);
    }

    async fillConfirmPassword(password) {
        await this.#confirmPassword.fill(password);
    }

    async clickOnRegisterBtn() {
        await this.#registerButton.click();
    }
}

export { RegisterationPage };
