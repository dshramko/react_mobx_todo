import { observable } from 'mobx'

class TodoStore {
  @observable todos = 'test'
}

const todostore = window.todostore = new TodoStore
export default todostore