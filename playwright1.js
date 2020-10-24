const playwright = require('playwright');

(async () => {
  const browser = await playwright.chromium.launch();
  const page = await browser.newPage();

  const modal_button_selector = '.modal-footer > button'
  const search_selector = 'input[placeholder=Search]'
  const location_selector = 'li.active > a'
  const results_selector = '.results-tab'

  with(page) {
    await goto("https://native-land.ca/");
    await waitForSelector(modal_button_selector);
    await click(modal_button_selector);

    await click(search_selector)
    await keyboard.type('Philadelphia')
    await waitForSelector(location_selector)

    await click(location_selector)
    await waitForSelector(`${results_selector} > p`)

    const results = await $(results_selector)
    const text = await results.evaluate(element => element.innerText)
    console.log(text)

    await screenshot({ path: "example.png" });
  }

  await browser.close();
})();