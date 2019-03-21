import React from 'react';

const Todo = (props) => {
	return (
		<div className="todo-item">
			<ul
				className={`item${props.item.completed ? ' completed' : ''}`}
				onClick={() => props.toggleItem(props.item.id)}
			>
				<li>{props.item.task}</li>
			</ul>
		</div>
	);
};

export default Todo;
