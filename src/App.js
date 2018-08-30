import React, { Component } from 'react';
import TaskContainer from './components/TaskContainer'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash, faCheck } from '@fortawesome/free-solid-svg-icons'

library.add(
  faTrash,
  faCheck
)

class App extends Component {
  

  render() {
    return (
      <div className="todo-app">
        <header className="main-header">
          <h1 className="App-title">todos</h1>
        </header>
        <TaskContainer />
        
      </div>
    )
  }
}

export default App;
