import { test } from "../../fixtures/auth.fixtures.js"

// simple demonstration of using the registrationPageUsingJson fixture

test("Verify Registration Flow Using JSON Data", async ({ registrationPageUsingJson, page }) => {
    // the fixture handles navigation and form filling
    // here you can add additional assertions if the app provides feedback
    await page.waitForTimeout(5000);
});
