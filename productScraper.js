const puppeteer = require("puppeteer");

const productScraper = async (callback) => {
  const browser = await puppeteer.launch({ headless: true });

  const page = await browser.newPage();
  await page.goto(
    "https://www.vinmonopolet.no/Land/Skottland/Deanston-12-YO-Single-Malt/p/10733101"
  );

  await page.waitForSelector(".product__tab-list");
  await page.waitForSelector(".product__contents-list__content-percentage");
  await page.waitForSelector(".product__price");
  await page.waitForSelector(".product__name");
  await page.waitForSelector(".product__region");

  // extracting information from code
  let productDetails = await page.evaluate(() => {
    let percentage =
      document.body.querySelector(".product__contents-list__content-percentage")
        .textContent ?? null;
    let price =
      document.body.querySelector(".product__price").textContent ?? null;
    let name =
      document.body.querySelector(".product__name").textContent ?? null;
    let origins = document.body.querySelector(".product__region");
    let country = origins.children[0].textContent ?? null;
    let region = origins.children[1].textContent ?? null;
    let productDetailsElement = document.body.querySelectorAll(
      ".product__tab-list > li"
    );

    let productDetails = Object.values(productDetailsElement).map((x) => {
      let type = x.getElementsByTagName("span")[0].textContent ?? null;
      let value = x.getElementsByTagName("span")[1].textContent ?? null;

      return {
        type,
        value,
      };
    });

    let data = {};
    data = {
      country: country,
      region: region,
      name: name,
      price: price,
      percentage: percentage,
      details: productDetails,
    };

    return data;
  });

  // logging results
  await browser.close();
  return productDetails;
};

module.exports = productScraper;