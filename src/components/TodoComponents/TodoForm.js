import React from 'react';

class TodoForm extends React.Component {
	constructor() {
		super();
		this.state = {
			task : ''
		};
	}

	handleChanges = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	submitItem = (e) => {
		e.preventDefault();
		// take the item off of state
		// send that item to a function defined on App.js
		this.props.updateList(this.state.task);
		// reset the state
		this.setState({ task: '' });
	};

	render() {
		return (
			<form onSubmit={this.submitItem}>
				<input
					type="text"
					placeholder="Enter Task here"
					value={this.state.task}
					name="task"
					onChange={this.handleChanges}
				/>

				<button>Add Todo</button>
			</form>
		);
	}
}

export default TodoForm;
