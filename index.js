const express = require("express");
const path = require("path");

const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, "client/build")));

//Import puppeteer function
const productScraper = require("./productScraper");

//Catches requests made to localhost:3000/search
app.get("/singleProduct", (request, response) => {
  if (request != null) {
    const getData = async () => {
      const result = await productScraper();
      response.status(200);
      response.json(result);
    };
    getData();
  } else {
    response.end();
  }
});

// An api endpoint that returns a short list of items
// app.get("/api/getList", (req, res) => {
//   var list = ["item1", "item2", "item3"];
//   res.json(list);
//   console.log("Sent list of items");
// });

// Handles any requests that don't match the ones above
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname + "/client/build/index.html"));
// });

const port = process.env.PORT || 5000;
app.listen(port);

console.log("App is listening on port " + port);
