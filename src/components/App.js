import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import DevTools from 'mobx-react-devtools'
import TodoItem from './TodoItem'

@inject("todostore")
@observer
export default class App extends Component {
	constructor(props) {
		super(props)
		// this.store = this.props.store;
		this.createNew = this.createNew.bind(this)
		this.filter = this.filter.bind(this)
	}

	filter(e) {
		this.props.todostore.filter = e.target.value
	}

	createNew (e) {
		if (e.which === 13) {
			this.props.todostore.createTodo(e.target.value)
			e.target.value = ''
		}
	}

	render() {
		const {filter, todos, filteredTodos, clearTodos} = this.props.todostore
		return (
			<div>
				<div>
					New task:
					<input type="text"  onKeyPress={this.createNew} />
				</div>
				<div>
					Filter:
					<input type="text" value={filter} onChange={this.filter}/>
				</div>
				<ul>
					{filteredTodos.map(todo =>
						<TodoItem key={todo.id} item={todo} />
					)}
				</ul>

				Task completed: {this.props.todostore.completed}
				<br/>
				<a href='#' onClick={clearTodos}>Clear todos</a>
				<DevTools />
			</div>
		);
	}
}
