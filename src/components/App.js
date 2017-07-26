import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import DevTools from 'mobx-react-devtools'
import TodoItem from './TodoItem'
import './todo.css'

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
			<div className='container'>
				<div className='form-group'>
					New task:
					<input type="text"  onKeyPress={this.createNew} className='form-control' />
				</div>
				<div className='form-group'>
					Filter:
					<input type="text" value={filter} onChange={this.filter} className='form-control' />
				</div>
				<div className='form-group'>
					{filteredTodos.map(todo =>
						<TodoItem key={todo.id} item={todo} />
					)}
				</div>
				<p className='task-completed'>
					Task completed: {this.props.todostore.completed}
				</p>
				<br/>
				<a className='btn-clear' href='#' onClick={clearTodos}>Clear todos</a>
				<DevTools />
			</div>
		);
	}
}
