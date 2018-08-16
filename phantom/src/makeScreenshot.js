const phantom = require('phantom');

/**
 * @param {string} url
 * @returns {Buffer}
 */
async function makeScreenshot(url) {
  const instance = await phantom.create();
  const page = await instance.createPage();

  const status = await page.open(url);
  const content = await page.property('content');

  var base64 = await page.renderBase64('PNG');
  var buffer = Buffer.from(base64, 'base64');

  // async func
  instance.exit();

  return buffer;
}

module.exports = {
  makeScreenshot
};
