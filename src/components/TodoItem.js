import React from 'react'
import { inject, observer } from 'mobx-react'

@inject('todostore')
@observer
class TodoItem extends React.Component {

  toggleCompleted (todo) {
    todo.completed = !todo.completed
  }

  render () {
    const { item } = this.props
    return (
      <li>
        {item.task}
        <input type="checkbox" checked={item.completed} onChange={this.toggleCompleted.bind(this, item)}/>
      </li>
    );
  }
}

export default TodoItem