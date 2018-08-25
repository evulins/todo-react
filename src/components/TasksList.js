import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class TasksList extends Component {

  static propTypes = {
    tasks: PropTypes.array.isRequired,
    // onDeleteTask: PropTypes.func.isRequired
  }

  render() {
    let tasks = this.props.tasks.map((task, index) => {
      return (
        <li key={index}>
          <div className="center">
            <label className="label">
              <input className="label__checkbox" type="checkbox" />
              <span className="label__text">
                <span className="label__check">
                  <FontAwesomeIcon icon="check" />
                </span>
              </span>
            </label>
          </div>
          {task}
          <div className="remove">
            <button className="button_delete">
              <FontAwesomeIcon icon="trash"/>
            </button>
          </div>
        </li>

      )
    })
    return (
      <div className="listForm">
        <ul className="tasks">{tasks}</ul>
      </div>
    )
  }
}

export default TasksList
