// Required External Modules
import express from "express";
// const path = require("path");

// App Variables
const app = express();
const port = process.env.PORT || 8000;

// App Configuration / Middleware

// Allows you to pass json into request body
app.use(express.json());
// app.use(express.static(path.join(_dirname, "public")));

// Routes Definitions

app.get("/", (req, res) => {
	res.status(200).send("TO DO APP");
});

// Server Activation

app.listen(port, () => {
	console.log(`Listening to requests on https://localhost:${port}`);
});
