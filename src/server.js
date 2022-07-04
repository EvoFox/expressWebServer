// import expressJS in its entirity.
const express = require("express");
// Create app object, which houses server instructions.
const app = express();

// Tell app to use the public folder when a request is made to /static.
app.use("/static", express.static("public"));

// Listening on localhost:5001 for requests to webserver
app.listen(5001, () => {
	console.log("Listening on port 5001");
});
