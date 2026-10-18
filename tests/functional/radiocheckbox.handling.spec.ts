import{test,expect} from "@playwright/test";
test.beforeEach("launch application and check title", async ({ page }) => {
    await page.goto("https://practice.expandtesting.com/radio-buttons");
    await expect(page).toHaveTitle("Radio Buttons page for Automation Testing Practice");
  });

test.describe("Radio buttons and checkboxes handling", () => {
    test("Check the radio button and checkbox", async ({ page }) => {
        const radioColor = page.locator("#red");
        const radioSport = page.locator("#football");
        await radioColor.check();
        await radioSport.check();
        await expect(radioColor).toBeChecked();
        await expect(radioSport).toBeChecked();
        await expect(page.getByText("Blue")).not.toBeChecked
    });
});