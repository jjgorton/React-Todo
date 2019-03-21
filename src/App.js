import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

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
			[event.target.name]: event.target.value
		});
		console.log(event.target.value);
	};

	updateList = (event) => {
		event.preventDefault();
		const newTask = {
			task      : this.state.task,
			id        : this.state.id,
			completed : this.state.completed
		};
		// console.log(newTask.task);

		this.setState({
			todoListData : [ ...this.state.todoListData, newTask ]
		});
	};

	render() {
		return (
			<div>
				<h2>Welcome to your Todo App!</h2>
				<TodoList array={this.state.todoListData} />

				<TodoForm task={this.state.task} handleChanges={this.handleChanges} updateList={this.updateList} />
			</div>
		);
	}
}

export default App;
