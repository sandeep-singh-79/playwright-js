const browser = require('playwright')

(await () => {
        const chrome = await browser.chromium.launch()
        await chrome.close()
    }
);