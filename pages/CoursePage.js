class CoursePage {

    constructor(page) {
        this.page = page;
        //add locators with xpath //iframe[@id='iFrameAsite'] and  name it as createForm_Framework
        this.createForm_Framework = page.frameLocator("//iframe[@id='iFrameAsite']");
        //add locator with xpath //input[@id='_58_login'] and name it as user_Email inside above createForm_Framework
        this.user_Email = this.createForm_Framework.locator("//input[@id='_58_login']");




        
    }

}

export { CoursePage };