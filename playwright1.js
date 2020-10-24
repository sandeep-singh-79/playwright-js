const playwright = require('playwright');

(async () => {
  const browser = await playwright.chromium.launch();
  const page = await browser.newPage();

  const modal_button_selector = '.modal-footer > button'
  await page.goto('https://native-land.ca/');
  await page.waitForSelector(modal_button_selector)
  await page.click(modal_button_selector)

  await page.screenshot({ path: 'example.png' });

  await browser.close();
})();