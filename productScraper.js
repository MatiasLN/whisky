const puppeteer = require("puppeteer");
const dotenv = require('dotenv');
dotenv.config();

const productScraper = async (url) => {
  const browser = await puppeteer.connect({ browserWSEndpoint: `wss://chrome.browserless.io?token=${process.env.TOKEN}` })
  const page = await browser.newPage();
  await page.goto(url, { timeout: 60000 });

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

    const contentItem = document.body.querySelector(".product__properties-list__content-item");

    if (contentItem) {
      const textContent = contentItem.children[1].textContent;
      if (textContent.includes('%')) {
        percentage = textContent;
      }
    }

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
