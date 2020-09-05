import React from "react";

const TodoList = () => {
	return (
		<>
			<form>
				<input type="text" className="todo__list" />
			</form>
			<h3>My List of Todos</h3>
			<ul></ul>
		</>
	);
};

export default TodoList;
