// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
	return (
		<div className="array-container">
			{props.array.map((arrayItem) => <Todo key={arrayItem.id} item={arrayItem} toggleItem={props.toggleItem} />)}
		</div>
	);
};

export default TodoList;
