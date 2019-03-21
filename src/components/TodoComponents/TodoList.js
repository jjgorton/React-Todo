// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from './Todo';
// import TodoForm from './TodoForm';

const TodoList = (props) => {
	return (
		<div className="wrapper">
			<div className="array-container">
				{props.array.map((arrayItem, index) => <Todo key={index} item={arrayItem} />)}
			</div>
		</div>
	);
};

export default TodoList;
