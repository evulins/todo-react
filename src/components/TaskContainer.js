import React, { Component } from 'react'
import Buttons from './Buttons'
import TaskForm from './TaskForm'
import TasksList from './TasksList'

class TaskContainer extends Component {

  state = {
    tasks: []
  }

  createTask = (task) => {
    this.setState(state => ({
      tasks: state.tasks.concat([ task ])
    }))
  }
  // removeTask = (task) => {
  //   this.setState(state => ({
  //     tasks: state.tasks.remove(task)
  //   }))
  // }

  render() {
    
    return (
      <div className="task-container">
        <TaskForm
          tasks={this.state.tasks}
          onCreateTask={this.createTask}
        />
        <TasksList
          tasks={this.state.tasks}
          onCreateTask={this.createTask}
          onDeleteTask={this.removeTask}
        />

        <Buttons 
          count={this.state.tasks.length}
        />
          
      </div>
    )
  }
}

export default TaskContainer