// Require extrnal Modules
const express = require("express");
const path = require("path");

// App Variables
const app = express();
const port = process.env.PORT || 8000;

// App Configuration / Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// Store the todos
let todos = [];
let id = 0;

// Routes Definitions
app.get("/", (req, res) => {
	res.status(200).send("TO DO APP");
});

app.get("/api/todos", (req, res, next) => {
	// Return all the todos
	res.json(todos);
});

// Update the todos -> Get the req body and
// add the todo to the JS object to our todo array
app.post("/api/todos", (req, res, next) => {
	res.body;
	if (req.body.item) {
		const newTodo = {
			id: id,
			item: req.body.item,
			completed: false,
		};
		todos.push(newTodo);
		res.json(newTodo);
	} else {
		res.status(400).json({ err: "Todo needs a description" });
	}
});

// Coerce param into number -> todoID = Number(req.params.id)
// Iterate through the array, check if each object for that ID
app.delete("/api/todos/:id", (req, res, next) => {
	// Locate the request, which will give us the ID
	const todoId = Number(req.params.id);
	// Coerce param into number -> todoID = Number(req.params.id)
	// Iterate through the array, check if each object for that ID
	const todoToDelete = todos.find((todo) => {
		return todo.id === todoId;
	});
	// If has the ID, use splice method to delete it
	if (todoToDelete) {
		const todoIndex = todos.indexOf(todoToDelete);
		todos.splice(todoIndex, 1);
		res.json(todoToDelete);
	} else {
		res.status(404).json({ err: "ID not found" });
	}
});

app.put("/api/todos/:id", (req, res, next) => {
	// Update Todo List by ID
	const todoId = Number(req.params.id);
	const todoToComplete = todos.find((todo) => {
		return todo.id === todoId;
	});
	if (todoToComplete) {
		// Toggle the value
		todoToComplete.completed = !todoToComplete.completed;

		const todoIndex = todos.indexOf(todoToDelete);
		todos.splice(todoIndex, 1, todoToComplete);
		res.json(todoToComplete);
	} else {
		res.status(404).json({ err: "ID not found" });
	}
});

// Server Activation
app.listen(port, () => {
	console.log(`Listening to requests on https://localhost:${port}`);
});
