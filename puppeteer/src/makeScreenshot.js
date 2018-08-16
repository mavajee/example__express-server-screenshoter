const puppeteer = require('puppeteer');

/**
 * @param {string} url
 * @returns {Buffer}
 */
async function makeScreenshot(url) {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
  });

  const page = await browser.newPage();
  await page.goto(url);
  const buffer = await page.screenshot();

  // async func
  browser.close();

  return buffer;
}

module.exports = {
  makeScreenshot
};
