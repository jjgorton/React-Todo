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
				<li>
					<input
						type="text"
						placeholder="Write your task here"
						value={this.state.task}
						name="task"
						onChange={this.handleChanges}
					/>
				</li>

				<button className="add-btn">Add it!</button>
			</form>
		);
	}
}

export default TodoForm;
