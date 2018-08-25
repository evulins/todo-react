import React, { Component } from 'react'


class TaskForm extends Component {

  constructor(props) {
    super(props)
    this.state = {value: ''}

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = (event) => {
    this.setState({value: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const value = this.state.value
    if (this.props.onCreateTask) {
      this.props.onCreateTask (value)
    }
    this.setState({
     value: ''
    })
  }

  render() {
    
    return (
      <form className="newTaskForm" onSubmit={this.handleSubmit}>
        <div className="form">
            <input type="text" className="newTask" name="newTask"  value={this.state.value} onChange={this.handleChange} placeholder="What needs to be done" />
        </div>
      </form>
    )
  }
}

export default TaskForm









