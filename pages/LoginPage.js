class Loginpage {


    #loginFrame
    #email
    #password
    #loginButton

    constructor(page) {

        this.page = page
        this.#loginFrame = page.frameLocator("//iframe[@id='iFrameAsite']");
        this.#email = this.#loginFrame.locator("//input[@id='_58_login']");
        this.#password = this.#loginFrame.locator("//input[@id='_58_password']");
        this.#loginButton = this.#loginFrame.locator("//input[@id='login-cloud']");



    }

    async goToLoginURL() {

        await this.page.goto("https://systemqa.asite.com/login");
        await this.page.waitForLoadState('networkidle');
        await this.page.waitForLoadState('domcontentloaded');

    }


    async loginFillEmail(email) {

        await this.#email.fill(email);

    }

    async loginFillPassword(password) {
        await this.#password.fill(password);
    }

    async clickOnLoginButn() {
        await this.#loginButton.click();
    }




}

export { Loginpage }