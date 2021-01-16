const playwright = require("playwright");
const { HomePage } = require("../pages/HomePage");

// using IIFE to do a basic flow
(async () => {
  const browser = await playwright.chromium.launch();
  const page = await browser.newPage();
  const homePage = new HomePage(page);
  
  with (homePage) {
    await navigateTo();
    await dismissModalBox();
    await searchForCityPhiladelphia();
    await captureNativeNationText();
    await captureScreenshot();
  }

  await browser.close();
})();
