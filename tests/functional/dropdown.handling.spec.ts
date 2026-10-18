import { test, expect } from "@playwright/test";
test.beforeEach("launch application and check title", async ({ page }) => {
    await page.goto("https://practice.expandtesting.com/dropdown");
    await expect(page).toHaveTitle("Dropdown menus page for Automation Testing Practice");
  });
test.describe("Validate dropdown handling", () => {
  test("Select option from dropdown", async ({ page }) => {
      
    page.locator('#country').locator('option').all().then((options) => {
        console.log("Total options in dropdown: " + options.length);
    });
      
    //await expect(page.locator('#country')).toHaveText("Select country");
    await page.locator('#country').selectOption("India");
    await expect(page.locator('#country')).toHaveValue("IN");
    await page.locator('#country').selectOption({label:"Japan"});
    await expect(page.locator('#country')).toHaveValue("JP");
    await page.locator('#country').selectOption({index:1});
    await expect(page.locator('#country')).toHaveValue("AF");
    
    let dropdownOptions = await page.locator('#country').locator('option').allTextContents();
    console.log("Dropdown options: " + dropdownOptions.join(", "));
   //for loop
    for (let i = 0; i < dropdownOptions.length; i++) {
        console.log("Option " + i + ": " + dropdownOptions[i]);
        while(i<251){
          page.locator('#country').selectOption({index:(i+2)});
          //await page.locator('#country').selectOption("Angola");
        }
         
    }
    //for of loop
    for(let element of dropdownOptions){
        console.log("Option: " + element);
        if(element!="Afghanistan" && element!="Select country"){
        //await page.locator('#country').selectOption(element);
        console.log("Element selected: " + element);
    }
  }
  });
});