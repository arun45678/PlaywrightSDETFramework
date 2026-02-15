import { test, except } from "../../fixtures/auth.fixtures.js"

test("Verify Asite Login Scenario with Hard Code Data", async function ({ page, loginPage }) {

    await page.waitForTimeout(10000)

})

test("Verify Asite Login Scenario with JSON", async ({ loginPageUsingJson, page }) => {
    await page.waitForTimeout(10000)

})