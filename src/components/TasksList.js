import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Task from './Task'

class TasksList extends Component {

  static propTypes = {
    filteredTasks: PropTypes.array.isRequired,
    deleteTask: PropTypes.func.isRequired,
    changeTaskStatus: PropTypes.func.isRequired
  }

  render() {

    return (
      <div className="listForm">
        <ul className="tasks">
          {this.props.filteredTasks.map((task, index) => (
            <Task 
              task={task}
              key={index}
              deleteTask={this.props.deleteTask}
              changeTaskStatus={this.props.changeTaskStatus}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default TasksList
