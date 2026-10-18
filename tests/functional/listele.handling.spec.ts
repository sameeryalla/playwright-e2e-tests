import { test , expect } from "@playwright/test";
test.beforeEach("launch application and check title", async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
    await expect(page).toHaveTitle("Swag Labs");
    await page.getByPlaceholder("Username").fill("standard_user");
    await page.getByPlaceholder("Password").fill("secret_sauce");
    await page.getByRole("button", { name: "Login" }).click();
  });

test.describe("List element handling", () => {
    test("Check the list elements with price non zero", async ({ page }) => {
        const listElements = page.locator(".inventory_item_name"); 
        await expect(listElements).toHaveCount(6);
        let totalProducts = await listElements.count();
        for (let i=0; i < totalProducts; i++) {
          let eleNode= listElements.nth(i);
          let productName =  await eleNode.locator("inventory_item_name").innerText();
          let productPrice = await eleNode.locator("inventory_item_price").innerText();
          console.log(`Product Name: ${productName} and Price: ${productPrice}`);
          expect(parseFloat(productPrice.replace("$", ""))).toBeGreaterThan(0);
           }
    });
  });