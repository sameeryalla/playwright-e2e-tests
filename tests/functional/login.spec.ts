import { test, expect } from "@playwright/test";
test.beforeEach("launch application and check title", async ({ page }) => {
    await page.goto("https://practicetestautomation.com/practice-test-login/");
    await expect(page).toHaveTitle("Test Login | Practice Test Automation");
  });
test.describe("Validate login scenarios", () => {
  test("validatde Login and Logout", async ({ page }) => {
    await page.getByRole("textbox", { name: "Username" }).fill("student");
    await page.getByRole("textbox", { name: "Password" }).fill("Password123");
    await page.getByRole("button", { name: "Submit" }).click();
    await expect(page).toHaveTitle(
      "Logged In Successfully | Practice Test Automation",
    );
    await page.getByRole("link", { name: "Log out" }).click();
  });

  test("validatde login failure with invalid username", async ({ page }) => {
    await page.getByRole("textbox", { name: "Username" }).fill("student1");
    await page.getByRole("textbox", { name: "Password" }).fill("Password123");
    await page.getByRole("button", { name: "Submit" }).click();
    //await expect(page.getByText("Your username is invalid!")).toBeVisible();
    await expect(page.locator("//*[@id='error']")).toHaveText(
      "Your username is invalid!",
    );
    await expect(page.locator("#error")).toContainText("invalid");
  });

  test("validatde login failure with invalid password", async ({ page }) => {
    await page.getByRole("textbox", { name: "Username" }).fill("student");
    await page.getByRole("textbox", { name: "Password" }).fill("Password124");
    await page.getByRole("button", { name: "Submit" }).click();
    //await expect(page.getByText("Your password is invalid!")).toBeVisible();
    await expect(page.locator("//*[@id='error']")).toHaveText(
      "Your password is invalid!",
    );
    await expect(page.locator("#error")).toContainText("invalid");
  });
});
test.only("to demonstrate locators",async ({ page }) => {

    let userName=page.getByRole("textbox", { name: "Username" });
    console.log(`type of a userName is ${typeof userName}, the value of locator is ${JSON.stringify(userName)}`);
    await userName.fill("student");
    let password=page.getByRole("textbox", { name: "Password" });
    await password.fill("Password123");
    let submitBtn=page.getByRole("button", { name: "Submit" });
    await submitBtn.click();
    await expect(page).toHaveTitle(
      "Logged In Successfully | Practice Test Automation",
    );
    await page.getByRole("link", { name: "Log out" }).click();
});
