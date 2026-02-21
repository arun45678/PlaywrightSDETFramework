class FormViewPage {

    constructor(page) {
        this.page = page;

        this.projectFormTab = page.locator('span:has-text("Project Forms")');
        this.projectExpand = page.locator("div[title='CIMS-WOPS-QA-Angular'] span");
        this.projectExpand1 = page.locator("div[title='CIMS'] span");
        this.projectExpand2 = page.locator("div[title='Client Master'] span");

        this.formlinkclick = page.locator("//a[starts-with(normalize-space(),'CMF')]").first();

        this.formStatus = page.locator("#status-change-btn");

        this.moreOption = page.locator(".fa-ellipsis-v");

        this.formPrintDetails = page.locator("//span[normalize-space()='Print Form Details']");


        // iframe
        this.formPrintDetailsiFrame= page.frameLocator("//iframe[@id='custFormIframe']");

        this.PrintMessagetext =
            this.formPrintDetailsiFrame.locator("h3:has-text('Form Print View Is Not Available For Client Master')");
    }

    async navigateToFormViewlink() {

        await this.page.waitForLoadState('domcontentloaded');

        await this.projectFormTab.click();

        await this.projectExpand.click();
        await this.projectExpand1.click();
        await this.projectExpand2.click();
    }

    async clickOnFormLink() {
        await this.formlinkclick.click();
    }

    async verifyFormStatus() {
        await this.formStatus.waitFor();
        const statusText = await this.formStatus.textContent();
        return statusText.replace(/Status\s*:\s*/i, '').trim();
    }

    async clickOnMoreOption() {
        await this.moreOption.click();
    }

    async formPrintDetailsClick() {
        await this.formPrintDetails.click();
    }

    async printMessage() {
        await this.PrintMessagetext.waitFor();
        return (await this.PrintMessagetext.textContent()).trim();
    }
}

export { FormViewPage };