import { test } from "../../fixtures/auth.fixtures.js";
import { expect } from "@playwright/test";
import * as allure from "allure-js-commons";

import { DashboardPage } from "../../pages/DashboardPage.js";
import { CreatefromPage } from "../../pages/CreateformPage.js";
import { readJson } from "../../utils/readjson.js";

test("Create Client Master Form - Happy Path", async ({ page, loginPageUsingJson }) => {

  // ===== ALLURE METADATA =====
  await allure.owner("Arun Khatri");
  await allure.severity("critical");
  await allure.feature("Client Master");
  await allure.story("Create Client Master Form");

  await allure.description(
    "User creates Client Master form, fills mandatory fields, submits and verifies success."
  );

  
  const data = readJson("./testdata/ClientMaster.json");

  await allure.parameter("Client Name", data.clientName);
  await allure.parameter("Department", data.department);
  await allure.parameter("Town", data.town);

  const dashboardPage = new DashboardPage(page);
  const createFormPage = new CreatefromPage(page);

  let createdClientName;

  await allure.step("STEP 1: Navigate to Project", async () => {
    await dashboardPage.navigateProjectRootFolder();
  });


  await allure.step("STEP 2: Fill Client Master Form", async () => {

    createdClientName = await createFormPage.enterClientName(data.clientName);

    await createFormPage.selectDepartment(data.department);
    await createFormPage.enterBusinessArea(data.businessArea);
    await createFormPage.enterBuildingName(data.buildingName);
    await createFormPage.enterContactName(data.contactName);

    await createFormPage.enterAddress(
      data.streetAddress,
      data.town,
      data.postCode
    );

    await createFormPage.enterContactDetails(
      data.email,
      data.telephone
    );

    await createFormPage.selectIssueToUser(data.issueToUser);
    await createFormPage.submitForm();

  });
  await allure.step("STEP 3: Submit Form", async () => {
    console.log("Created Client Name:", createdClientName);
  });

  await allure.step("STEP 4: Verify success", async () => {
    await expect(createdClientName).toContain("MGT QA TEST Build");
  });



});
