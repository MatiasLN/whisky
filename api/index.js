const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "build")));

const productScraper = require("./productScraper");
const searchScraper = require("./searchScraper");

// Catches requests made for singleProduct
app.post("/api/singleProduct", (request, response) => {
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
app.post("/api/search", (request, response) => {
	console.log("send");
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

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
// app.get("*", (req, res) => {
// 	res.sendFile(path.join(__dirname + "/client/build/index.html"));
// });

const port = process.env.PORT || 5000;
app.listen(port);

console.log("App is listening on port " + port);
