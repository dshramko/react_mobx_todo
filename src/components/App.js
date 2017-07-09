import React from 'react'
import { inject, observer } from 'mobx-react'

@inject('todostore')
@observer
class App extends React.Component {
  render () {
    return (
      <div>
        {this.props.todostore.todos}
      </div>
    )
  }
}

export default App