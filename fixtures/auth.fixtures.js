import { test as base } from "@playwright/test"
import {Loginpage} from "../pages/LoginPage.js"
import { readJson } from "../utils/readjson.js"

export { expect } from "@playwright/test";
export const test = base.extend(
    {
        loginPage: async ({ page }, use) => {

            console.log("Running Login Page Fixtures")

            const loginPage = new Loginpage(page)
            await loginPage.goToLoginURL()

            await loginPage.loginFillEmail("akhatri@asite.com")
            await loginPage.loginFillPassword("Asite@1234567890")
            await loginPage.clickOnLoginButn()
            await page.waitForTimeout(10000)

            await use(loginPage)
            console.log("Running After Test")

        },

        loginPageUsingJson: async ({ page }, use) => {

            console.log("Running Login Page Fixtures Before Test Using Json File")
            const data = readJson("./testdata/User.json");
        

            const loginPage = new Loginpage(page)
            await loginPage.goToLoginURL()

            await loginPage.loginFillEmail(data.Username)
            await loginPage.loginFillPassword(data.Pass)
            await loginPage.clickOnLoginButn()
            await page.waitForTimeout(10000)

            await use(loginPage)
            console.log("Running After Test For JSON File")

        },

        page: async ({ page }, use, testInfo) => {
            // Run the test
            await use(page);

            // Take screenshot only if test failed (status !== expectedStatus)
            if (testInfo.status !== testInfo.expectedStatus) 
            {
                const path=await page.screenshot({ path: `screenshots/${testInfo.title}_${Date.now()}.png` })
                await testInfo.attach('screenshot', {body:path,contentType: 'image/png'})
            }
        }
    }
)