const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "client/build")));

const productScraper = require("./productScraper");
const searchScraper = require("./searchScraper");

// Catches requests made for singleProduct
app.post("/singleProduct", (request, response) => {
  if (request != null) {
    let url = request.body.url;
    const getData = async () => {
      const result = await productScraper(url);
      response.status(200);
      response.json(result);
    };
    getData();
  } else {
    response.end();
  }
});

// Catches requests made for global search
app.post("/search", (request, response) => {
  if (request != null) {
    let url = request.body.url;
    const getData = async () => {
      const result = await searchScraper(url);
      response.status(200);
      response.json(result);
    };
    getData();
  } else {
    response.end();
  }
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log("App is listening on port " + port);
