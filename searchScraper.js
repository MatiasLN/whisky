const puppeteer = require("puppeteer");
// "https://www.vinmonopolet.no/vmp/search/?q=Deanston:relevance:visibleInSearch:true&searchType=product"

const searchScraper = async (url) => {
  const browser = await puppeteer.launch({
    headless: true,
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-dev-shm-usage",
      "--single-process",
    ],
  });
  const page = await browser.newPage();
  await page.goto(url, { timeout: 60000 });
  await page.waitForSelector(".product-item");
  await page.waitFor(3000);

  // extracting information from code
  let productDetails = await page.evaluate(() => {
    let productDetailsElement = document.body.querySelectorAll(
      ".product-item__info-container"
    );

    let productDetails = Object.values(productDetailsElement).map((x) => {
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
