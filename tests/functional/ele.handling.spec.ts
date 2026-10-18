import { test, expect } from "@playwright/test";
test.beforeEach("launch application and check title", async ({ page }) => {
    await page.goto("https://practicetestautomation.com/practice-test-login/");
    await expect(page).toHaveTitle("Test Login | Practice Test Automation");
  });
test.describe("Validate login scenarios", () => {
  test("validatde Login and Logout", async ({ page }) => {
    await page.getByRole("textbox", { name: "Username" }).clear();
    await page.getByRole("textbox", { name: "Username" }).fill("student");
    await page.getByRole("textbox", { name: "Password" }).clear();
    //press sequence of keys
    await page.getByRole("textbox", { name: "Password" }).pressSequentially("Password123",{ delay: 1000 });
    //hover option
    await page.getByRole("button", { name: "Submit" }).hover();
    //click option
    await page.getByRole("button", { name: "Submit" }).click();
    //press option
    //await page.getByRole("button", { name: "Submit" }).press("Enter");
    //double click option   
    //await page.getByRole("button", { name: "Submit" }).press("Enter");
    //right click option
    //await page.getByRole("button", { name: "Submit" }).click({ button: "right" });
    //double click option
    //await page.getByRole("button", { name: "Submit" }).dblclick();
    //wait timeout
    await expect(page.getByText("Logged In Successfully")).toBeVisible({ timeout: 5000 });
    await expect(page).toHaveTitle(
      "Logged In Successfully | Practice Test Automation",
    );
    //await page.getByRole("link", { name: "Log out" }).click();
    await page.getByRole("link", { name: "Log out" }).press("Enter");
  });
});