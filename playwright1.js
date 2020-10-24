const playwright = require('playwright');

(async () => {
  const browser = await playwright.chromium.launch();
  const page = await browser.newPage();

  const modal_button_selector = '.modal-footer > button'
  const search_selector = 'input[placeholder=Search]'
  const location_selector = 'li.active > a'

  with(page) {
    await goto("https://native-land.ca/");
    await waitForSelector(modal_button_selector);
    await click(modal_button_selector);

    await click(search_selector)
    await keyboard.type('Philadelphia')
    await waitForSelector(location_selector)

    await screenshot({ path: "example.png" });
  }

  await browser.close();
})();