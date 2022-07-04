// import expressJS in its entirity.
const express = require("express");
// Create app object, which houses server instructions.
const app = express();

// Set _PORT equal to EITHER a port defined by an environment variable file OR set to 5001
// This is done to allow for a server host to provide a port that we will host on, or default to 5001 if not provided.
const _PORT = process.env.PORT || 5001;

// Tell app to use the public folder when a request is made to /static.
app.use("/static", express.static("public"));

// Listening on localhost:5001 for requests to webserver
app.listen(_PORT, () => {
	console.log(`Listening on port ${_PORT}`);
});
