import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Task extends Component {

  static propTypes = {
    task: PropTypes.object.isRequired,
    deleteTask: PropTypes.func.isRequired,
    changeTaskStatus: PropTypes.func.isRequired
  }

  remove = () => {
    const { task, deleteTask } = this.props
    deleteTask(task)
  }

  changeStatus = () => {
    const { task, changeTaskStatus } = this.props
    changeTaskStatus(task)
  }


  render() {
    const task = this.props.task
    // const taskClassName = this.props.task.checked ? 'checked' : '';

    return (
      <li>
        <div className="center">
          <label className="label">
            <input className="label__checkbox" type="checkbox" defaultChecked={task.completed} onChange={this.changeStatus} />
              <span className="label__text">
                <span className="label__check">
                {task.completed && <FontAwesomeIcon icon="check" />}
                </span>
              </span>
          </label>
        </div>
        {task.name}
        <div className="remove">
          <button className="button_delete" onClick={this.remove}>
            <FontAwesomeIcon icon="trash"/>
          </button>
        </div>
      </li>
    )
  }
}

export default Task