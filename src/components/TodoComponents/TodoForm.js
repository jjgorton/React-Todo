import React from 'react';

class TodoForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			todoInput : ''
		};
	}

	handleChanges = (event) => {
		console.log('tying');
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	render() {
		return (
			<div className="form-container">
				<form onSubmit={(event) => this.props.updateList(event, this.state.todoInput)}>
					<input
						type="text"
						placeholder="Enter Task here"
						name="todoInput"
						value={this.state.todoInput}
						onChange={this.handleChanges}
					/>

					<button>Add Todo</button>
				</form>

				<button>Clear Completed</button>
			</div>
		);
	}
}

export default TodoForm;
