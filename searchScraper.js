const puppeteer = require("puppeteer");

(async function scrape() {
  const browser = await puppeteer.launch({ headless: true });

  const page = await browser.newPage();
  await page.goto(
    "https://www.vinmonopolet.no/vmp/search/?q=Deanston:relevance:visibleInSearch:true&searchType=product"
  );

  await page.waitForSelector(".product-item");

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

  // logging results
  console.log(productDetails);

  await browser.close();
})();
