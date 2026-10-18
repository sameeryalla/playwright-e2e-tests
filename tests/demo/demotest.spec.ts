import { test, expect } from "@playwright/test";

test("Validate home page loaded expected title", async ({ page }) => {
  // got to home page
  await page.goto("https://www.digilocker.gov.in/");
  // Asssert if the title is correct
  await expect(page).toHaveTitle("DigiLocker | Access, Share & Verify Digital Documents");
  // Assert header text
  await expect(page.locator("//*[@id='NewInDigiLocker']")).toHaveText("New in DigiLocker");
});
