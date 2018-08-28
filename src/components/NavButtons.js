import React, { Component } from 'react'
import PropTypes from 'prop-types'

class NavButtons extends Component {

  static propTypes = {
    count: PropTypes.number.isRequired
  }

  render() {
    
    return (
      <ul className="buttons">
        <li><div className="count"><span>{this.props.count}</span> items left</div></li>
        <li><input type="button" className="all" name="All" value="All" /></li>
        <li><input type="button" className="active" name="Active" value="Active" /></li>
        <li><input type="button" className="completed" name="Completed" value="Completed" /></li>
        <li><input type="button" className="clearCompleted" name="clearCompleted" value="Clear completed" /></li>
      </ul>
    )
  }
}

export default NavButtons