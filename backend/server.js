const expres = require("express");
// const path = require("path");

// App Variables

const app = express();
const port = process.env.PORT || 8000;

// App Configuration / Middleware

app.use(express.json());
// app.use(express.static(path.join(_dirname, "public")));

// Routes Definitions

app.get("/", (req, res) => {
	res.status(200).send("TO DO APP");
});

app.get("/api/todos", (req, res, next) => {
	// Todos
});

app.post("/api/todos", (req, res, next) => {
	// Todos
});

app.delete("/api/todos/:id", (req, res, next) => {
	// Todos
});

// Server Activation

app.listen(port, () => {
	console.log(`Listening to requests on https://localhost:${port}`);
});
