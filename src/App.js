import React from 'react';
import TodoList from './components/TodoComponents/TodoList';

const todoArray = [
	{
		task      : 'Organize Garage',
		id        : 1528817077286,
		completed : false
	},
	{
		task      : 'Bake Cookies',
		id        : 1528817084358,
		completed : false
	}
];

class App extends React.Component {
	// you will need a place to store your state in this component.
	// design `App` to be the parent component of your application.
	// this component is going to take care of state, and any change handlers you need to work with your state
	constructor(props) {
		super(props);
		this.state = {
			todoListData : todoArray,
			task         : '',
			id           : Date.now(),
			completed    : false
		};
	}

	handleChanges = (event) => {
		this.setState({
			[event.target.task]: event.target.value
		});
	};

	updateList = (event) => {
		event.preventDefault();
		const newTask = {
			task      : this.state.task,
			id        : this.state.id,
			completed : this.state.completed
		};

		this.setState({
			todoListData : [ ...this.state.todoListData, newTask ]
		});
	};

	render() {
		return (
			<div>
				<h2>Welcome to your Todo App!</h2>
				<TodoList array={this.state.todoListData} task={this.state.task} handleChanges={this.handleChanges} />
			</div>
		);
	}
}

export default App;
