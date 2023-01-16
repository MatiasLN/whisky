const puppeteer = require("puppeteer");
const dotenv = require('dotenv');
dotenv.config();

const searchScraper = async (url) => {
  const browser = await puppeteer.connect({ browserWSEndpoint: `wss://chrome.browserless.io?token=${process.env.TOKEN}` })
  const page = await browser.newPage();
  await page.goto(url, { timeout: 60000 });
  await page.waitForSelector("#page");
  await page.waitFor(3000);

  // extracting information from code
  let productDetails = await page.evaluate(() => {
    let productDetailsElement = document.body.querySelectorAll(
      ".info-container"
    );

    let productDetails = "";
    productDetails = Object.values(productDetailsElement).map((x) => {
      let url = x.getElementsByTagName("a")[0].getAttribute("href");
      let name = x.querySelector(".product__name").textContent ?? null;

      return {
        url,
        name,
      };
    });
    return productDetails;
  });

  await browser.close();
  return productDetails;
};

module.exports = searchScraper;
