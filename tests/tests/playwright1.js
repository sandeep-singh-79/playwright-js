const playwright = require("playwright");
const { HomePage } = require("../pages/HomePage");

// using IIFE to do a basic flow
(async () => {
  const browser = await playwright.chromium.launch({
    headless: false,
    slowMo: 100,
  });
  const page = await browser.newPage();
  const homePage = new HomePage(page);
  
  const results_selector = ".results-tab";

  homePage.navigateTo();
  homePage.dismissModalBox();
  homePage.searchForCityPhiladelphia(); 


  with (page) {
    await waitForSelector(`${results_selector} > p`);

    const results = await $(results_selector);
    const text = await results.evaluate((element) => element.innerText);
    console.log(text);

    await screenshot({ path: "example.png" });
  }

  await browser.close();
})();
