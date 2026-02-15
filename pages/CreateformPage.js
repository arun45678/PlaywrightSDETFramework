import * as allure from "allure-js-commons";

class CreatefromPage {

    constructor(page) {

        this.page = page;

        this.createFormFrame = page.frameLocator("iframe[name='createFormIframe']");
        this.innerCreateFormFrame =
            this.createFormFrame.frameLocator("iframe[title='Create Form']");

        this.clientNameInput = this.innerCreateFormFrame.locator("//input[@placeholder='Enter Client’s Name']");
        this.clientDepartmentName = this.innerCreateFormFrame.locator("//span[normalize-space()='Select Client Department Name...']");
        this.clientBusinessArea = this.innerCreateFormFrame.locator("//input[@placeholder='Enter Client Business Area']");
        this.clientAddressBuildingName = this.innerCreateFormFrame.locator("//input[@placeholder='Enter Client Address - Building Name']");
        this.clientContactName = this.innerCreateFormFrame.locator("//input[@placeholder='Enter Client Contact Name']");
        this.clientAddressNumberStreet = this.innerCreateFormFrame.locator("//input[@placeholder='Enter Client’s address-number and street']");
        this.clientEmail = this.innerCreateFormFrame.locator("//input[@placeholder='Enter Client email address']");
        this.clientAddressTown = this.innerCreateFormFrame.locator("//input[@placeholder='Enter Client Address - Town']");
        this.clientTelephoneNumber = this.innerCreateFormFrame.locator("//input[@placeholder='Enter Client Telephone Number']");
        this.clientAddressPostCode = this.innerCreateFormFrame.locator("//input[@placeholder='Enter Client Address - Postcode']");
        this.issueTo = this.innerCreateFormFrame.locator("//span[@class='placeholder' and normalize-space()='Select...']");
        this.sendBtn = page.locator('iframe[name="createFormIframe"]').contentFrame().getByRole('button', { name: 'Send' });
    }

    async enterClientName(baseName) {

        const dateTime = new Date().toISOString().replace(/[:.]/g, '-');
        const finalName = `${baseName}_${dateTime}`;

        await allure.step("Enter Client Name", async () => {
            await this.clientNameInput.waitFor({ state: "visible" });
            await this.clientNameInput.fill(finalName);
        });

        return finalName;
    }

    async selectDepartment(department) {
        await allure.step("Select Department", async () => {
            await this.clientDepartmentName.click();
            await this.innerCreateFormFrame.getByRole('option', { name: department }).click();
        });
    }

    async enterBusinessArea(value) {
        await allure.step("Enter Business Area", async () => {
            await this.clientBusinessArea.fill(value);
        });
    }

    async enterBuildingName(value) {
        await allure.step("Enter Building Name", async () => {
            await this.clientAddressBuildingName.fill(value);
        });
    }

    async enterContactName(value) {
        await allure.step("Enter Contact Name", async () => {
            await this.clientContactName.fill(value);
        });
    }

    async enterAddress(street, town, postcode) {
        await allure.step("Enter Address", async () => {
            await this.clientAddressNumberStreet.fill(street);
            await this.clientAddressTown.fill(town);
            await this.clientAddressPostCode.fill(postcode);
        });
    }

    async enterContactDetails(email, phone) {
        await allure.step("Enter Contact Details", async () => {
            await this.clientEmail.fill(email);
            await this.clientTelephoneNumber.fill(phone);
        });
    }

    async selectIssueToUser(user) {
        await allure.step("Select Issue To User", async () => {
            await this.issueTo.click();
            await this.innerCreateFormFrame.getByText(user).click();
        });
    }

    async submitForm() {

        await allure.step("Submit Client Master Form", async () => {

            await this.sendBtn.waitFor({ state: "visible" });
            await this.sendBtn.scrollIntoViewIfNeeded();

            
            try {
                await this.sendBtn.click({ timeout: 5000 });
            } catch {
               
                await this.sendBtn.evaluate(btn => btn.click());
            }

        });
    }

}

export { CreatefromPage };
