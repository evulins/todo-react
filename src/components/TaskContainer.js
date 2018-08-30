import React, { Component } from 'react'
import NavButtons from './NavButtons'
import TaskForm from './TaskForm'
import TasksList from './TasksList'


const FILTERS = {
  'active': task => !task.completed,
  'completed': task => task.completed,
  'all': task => task
}

class TaskContainer extends Component {

  state = {
    tasks: [],
    filterKey: 'all'
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

  clearCompleted = () => {
    this.setState({
      tasks: this.state.tasks.filter(task => !task.completed)
    })
  }

  changeCategory = (key) => {
    this.setState({
      filterKey: key
    })
  }

  render() {

    return (
      <div className="task-container">
        <TaskForm
          tasks={this.state.tasks}
          onCreateTask={this.createTask}
        />
        <TasksList
          onCreateTask={this.createTask}
          deleteTask={this.removeTask}
          changeTaskStatus={this.changeTaskStatus}
          filteredTasks={this.state.tasks.filter(FILTERS[this.state.filterKey])}
        />

        <NavButtons 
          count={this.state.tasks.filter(task => !task.completed).length}
          clearCompleted={this.clearCompleted}
          changeCategory={this.changeCategory}
        />
          
      </div>
    )
  }
}

export default TaskContainer