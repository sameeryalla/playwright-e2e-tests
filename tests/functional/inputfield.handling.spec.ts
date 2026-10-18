import{test,expect} from "@playwright/test";
test.beforeEach("Launch application and check title", async ({ page }) => {
    await page.goto("https://practice.expandtesting.com/login");
    await expect(page).toHaveTitle("Test Login Page for Automation Testing Practice");
});

test.describe("elementhandling", () => {
    test("validate input field handling", async ({ page }) => {
        await page.getByRole("textbox", { name: "Username" }).clear();
        await page.getByRole("textbox", { name: "Username" }).fill("practice");
        await page.getByRole("textbox", { name: "Password" }).clear();
        await page.getByRole("textbox", { name: "Password" }).pressSequentially("SuperSecretPassword!",{delay:1000});
        await page.getByRole("button", { name: "Login" }).click();
        await expect(page.getByText("Secure Area page for Automation Testing Practice")).toBeVisible({ timeout: 5000 });
        await expect(page).toHaveTitle(
            "Secure Page page for Automation Testing Practice",
          );
          await page.getByRole("link", { name: "Logout" }).click();
          await expect(page.getByText("Test Login page for Automation Testing Practice")).toBeVisible({ timeout: 5000 });

          
    });
});