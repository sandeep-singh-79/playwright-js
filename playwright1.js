const browser = require('playwright')

(await () => {
        const chrome = await browser.chromium.launch()
        const page = await chrome.newPage()
        await page.goto('https://github.com')
        await page.screenshot({path: `github_home.png`})
        await chrome.close()
    }
);