import React from 'react';

const Todo = (props) => {
	return (
		<div className="todo-item">
			<ul>
				<li>{props.item.task}</li>
			</ul>
		</div>
	);
};

export default Todo;
