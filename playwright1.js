const playwright = require('playwright');

(async () => {
  const browser = await playwright.chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://www.github.com');
  await page.screenshot({ path: 'github-home.png' });

  await browser.close();
})();