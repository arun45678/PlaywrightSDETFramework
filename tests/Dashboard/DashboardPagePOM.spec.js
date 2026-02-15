import { test, except } from "../../fixtures/auth.fixtures.js"
import { DashboardPage } from "../../pages/DashboardPage";


test("Navigation To Project Folder", async ({ loginPageUsingJson, page }) => {



    const dashboardPage = new DashboardPage(page);
    await dashboardPage.navigateProjectRootFolder();

    await page.waitForTimeout(3000);
});

