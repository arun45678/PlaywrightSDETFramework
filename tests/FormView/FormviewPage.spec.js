import { test, expect } from "../../fixtures/auth.fixtures";
import { FormViewPage } from "../../pages/FormViewPage";

test("Form View Page Load", async ({ page, context, loginPageUsingJson }) => {

  const formViewPage = new FormViewPage(page);

  await formViewPage.navigateToFormViewlink();

  const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    formViewPage.clickOnFormLink()
  ]);

  await newPage.waitForLoadState('networkidle');

  const formViewNewTab = new FormViewPage(newPage);

  const formStatusText = await formViewNewTab.verifyFormStatus();
  console.log("Form Status Text:", formStatusText);

  expect(formStatusText).toBe("Submitted");

  // open more option
  await formViewNewTab.clickOnMoreOption();

  // open print page in new tab
  const [PageQA] = await Promise.all([
    context.waitForEvent('page'),
    formViewNewTab.formPrintDetailsClick()
  ]);

  await PageQA.waitForLoadState('networkidle');

  // ⭐ IMPORTANT → create new page object again
  const printPage = new FormViewPage(PageQA);

  const printMessage = await printPage.printMessage();
  console.log("Print Message:", printMessage);

  expect(printMessage).toBe("Form Print View Is Not Available For Client Master Form");

});