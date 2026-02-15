class DashboardPage {

  constructor(page) {
    this.page = page;

    // Tabs / Navigation
    this.projectFormTab = page.locator('span:has-text("Project Forms")');

    this.projectExpand = page.locator("div[title='CIMS-WOPS-QA-Angular'] span");
    this.projectExpand1 = page.locator("div[title='CIMS'] span");
    this.projectExpand2 = page.locator("div[title='Client Master'] span");

    this.createFormBtn = page.locator("button[title='Create Form']");

    
    
     }

  async navigateProjectRootFolder() {
    
    await this.page.waitForLoadState('networkidle');
    await this.page.waitForLoadState('domcontentloaded');

    await this.projectFormTab.click();

    // safer: wait for tree to be visible
    await this.projectExpand.waitFor({ state: 'visible' });
    await this.projectExpand.click();

    await this.projectExpand1.waitFor({ state: 'visible' });
    await this.projectExpand1.click();

    await this.projectExpand2.waitFor({ state: 'visible' });
    await this.projectExpand2.click();

    await this.createFormBtn.waitFor({ state: 'visible' });
    await this.createFormBtn.click();

    
  }
}

export { DashboardPage };
