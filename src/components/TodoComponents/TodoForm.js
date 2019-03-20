import React from 'react';

const TodoForm = (props) => {
	return (
		<form>
			<input type="text" placeholder="Enter Task here" value={props.task} onChange={props.handleChanges} />

			<button>Add Todo</button>
			<button>Clear Completed</button>
		</form>
	);
};

export default TodoForm;
