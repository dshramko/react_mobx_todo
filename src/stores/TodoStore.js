import { action, observable, computed } from 'mobx'

class Todo {
  @observable id
  @observable task
  @observable completed

  constructor(value) {
    this.task = value
    this.id = Date.now()
    this.completed = false
  }
}

class TodoStore {
  @observable todos = []
  @observable filter = '';

  @computed get completed () {
    return this.todos.filter(todo => todo.completed).length;
  }

  @computed get filteredTodos () {
    let matchedFilter = new RegExp(this.filter, 'i')
    return this.todos.filter(todo => !this.filter || matchedFilter.test(todo.task))
  }

  @action createTodo(value) {
    this.todos.push(new Todo(value))
  }

  @action clearTodos = () => {
    const incompleteTodos = this.todos.filter(todo => !todo.completed)
    this.todos.replace(incompleteTodos)
  }

}

// window.todostore - for debugging in browser console
const todostore = window.todostore = new TodoStore
export default todostore
