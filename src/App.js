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
			todoListData : todoArray
		};
	}

	// handleChanges = (event) => {
	// 	this.setState({
	// 		[event.target.name]: event.target.value
	// 	});
	// 	console.log(event.target.value);
	// };

	updateList = (event) => {
		// event.preventDefault();

		const copy = this.state.todoListData.slice();
		const newTask = {
			task      : event,
			id        : Date.now(),
			completed : false
		};

		copy.push(newTask);

		this.setState({ todoListData: copy });
	};

	toggleItem = (id) => {
		this.setState({
			todoListData : this.state.todoListData.map((item) => {
				if (item.id === id) {
					return {
						...item,
						// task: item.task,
						// id: item.id,
						// completed: item.completed
						completed : !item.completed
					};
				}
				return item;
			})
		});
		// loop over groceries
		// find grocery by given id
		// change flag to true
		// return updated list to state.
	};

	clearCompleted = (event) => {
		// use filter
		// looping over all the items inside of `this.state.groceries`
		// filter out any items, who's item.purchased === true
		// set your state with your new filtered list.
		event.preventDefault();
		const filteredList = this.state.todoListData.filter((item) => item.completed !== true);

		this.setState({ todoListData: filteredList });
	};

	render() {
		return (
			<div className="app-container">
				<h2>Welcome to your Todo App!</h2>
				<div className="list-container">
					<TodoList array={this.state.todoListData} toggleItem={this.toggleItem} />
					<button className="clear-btn" onClick={this.clearCompleted}>
						Erase Completed
					</button>
				</div>

				<TodoForm
					// task={this.state.task}
					// handleChanges={this.handleChanges}
					updateList={this.updateList}
					clearCompleted={this.clearCompleted}
				/>
			</div>
		);
	}
}

export default App;
