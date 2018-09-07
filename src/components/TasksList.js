import React from 'react'
import PropTypes from 'prop-types'
import Task from './Task'


const TasksList = (props) => {
  return (
      <div className="listForm">
        <ul className="tasks">
          {props.filteredTasks.map((task) => (
            <Task 
              task={task}
              key={task.id}
              deleteTask={props.deleteTask}
              changeTaskStatus={props.changeTaskStatus}
            />
          ))}
        </ul>
      </div>
    )
}

  TasksList.propTypes = {
    filteredTasks: PropTypes.array.isRequired,
    deleteTask: PropTypes.func.isRequired,
    changeTaskStatus: PropTypes.func.isRequired
  }

export default TasksList
