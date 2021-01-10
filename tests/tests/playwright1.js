const playwright = require("playwright");
const { HomePage } = require("../pages/HomePage")

// using IIFE to do a basic flow
(async () => {
  const browser = await playwright.chromium.launch({
    headless: false,
    slowMo: 100,
  });
  const page = await browser.newPage();
  const homePage = new HomePage(page)

  const modal_button_selector = ".modal-footer > button";
  const search_selector = "input[placeholder=Search]";
  const location_selector = "li.active > a";
  const results_selector = ".results-tab";

  with (page) {
    homePage.navigateTo();
    await waitForSelector(modal_button_selector);
    await click(modal_button_selector);

    await click(search_selector);
    await keyboard.type("Philadelphia");
    await waitForSelector(location_selector);

    await click(location_selector);
    await waitForSelector(`${results_selector} > p`);

    const results = await $(results_selector);
    const text = await results.evaluate((element) => element.innerText);
    console.log(text);

    await screenshot({ path: "example.png" });
  }

  await browser.close();
})();
