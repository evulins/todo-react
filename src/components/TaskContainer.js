import React, { Component } from 'react'
import NavButtons from './NavButtons'
import TaskForm from './TaskForm'
import TasksList from './TasksList'

class TaskContainer extends Component {

  state = {
    tasks: []
  }
  
  taskId = () => this.state.tasks.length + 1

  createTask = (task) => {
    this.setState({
      tasks: this.state.tasks.concat([
        {
          id: this.taskId(),
          name: task,
          completed: false
        }
      ])
    })
  }

  changeTaskStatus = (task) => {
    const newState = this.state.tasks
    const taskIndex = newState.indexOf(task)
    if (taskIndex > -1) {
      newState[taskIndex].completed = !newState[taskIndex].completed
      this.setState({tasks: newState})
    }
  }

  removeTask = (task) => { 
    const newState = this.state.tasks
    if (newState.indexOf(task) > -1) {
      newState.splice(newState.indexOf(task), 1)
      this.setState({tasks: newState})
    }
  }

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
          deleteTask={this.removeTask}
          changeTaskStatus={this.changeTaskStatus}
        />

        <NavButtons 
          count={this.state.tasks.length}
        />
          
      </div>
    )
  }
}

export default TaskContainer