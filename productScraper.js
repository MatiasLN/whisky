const puppeteer = require("puppeteer");
// "https://www.vinmonopolet.no/Land/Skottland/Deanston-12-YO-Single-Malt/p/10733101"
const IS_PRODUCTION = process.env.NODE_ENV === 'production';

const productScraper = async (url) => {
  const browser = IS_PRODUCTION ? await puppeteer.connect({ browserWSEndpoint: 'wss://chrome.browserless.io?token=' + process.env.REACT_APP_BROWSERLESS_TOKEN }) :
    await puppeteer.launch({
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

  await page.waitForSelector(".product__tab-list");
  await page.waitForSelector(".product__contents-list__content-percentage");
  await page.waitForSelector(".product__price");
  await page.waitForSelector(".product__name");
  await page.waitForSelector(".product__region");
  await page.waitFor(3000);

  // extracting information from code
  let productDetails = await page.evaluate(() => {
    let percentage = "";
    let price = "";
    let name = "";
    let country = "";
    let region = "";

    document.body.querySelector(".product__contents-list__content-percentage")
      ? (percentage = document.body.querySelector(
        ".product__contents-list__content-percentage"
      ).textContent)
      : (percentage = "");

    document.body.querySelector(".product__price")
      ? (price = document.body.querySelector(".product__price").textContent)
      : (price = "");

    document.body.querySelector(".product__name")
      ? (name = document.body.querySelector(".product__name").textContent)
      : (percentage = "");

    document.body.querySelector(".product__region").children[0]
      ? (country =
        document.body.querySelector(".product__region").children[0]
          .textContent)
      : (country = "");

    document.body.querySelector(".product__region").children[1]
      ? (region =
        document.body.querySelector(".product__region").children[1]
          .textContent)
      : (region = "Øvrige");

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
      productID: "",
      destilery: "",
      colour: "",
      taste: "",
      odour: "",
      details: productDetails,
    };

    return data;
  });

  await browser.close();
  return productDetails;
};

module.exports = productScraper;
