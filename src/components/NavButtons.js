import React, { Component } from 'react'
import PropTypes from 'prop-types'

class NavButtons extends Component {

  static propTypes = {
    count: PropTypes.number.isRequired,
    changeCategory: PropTypes.func.isRequired
  }

  clearAll = () => {
    this.props.clearCompleted()
  }

  render() {
    
    return (
      <ul className="buttons">
        <li><div className="count"><span>{this.props.count}</span> items left</div></li>
        <li><input type="button" className="all" onClick={() => this.props.changeCategory('all')} name="All" value="All" /></li>
        <li><input type="button" className="active" onClick={() => this.props.changeCategory('active')} name="Active" value="Active" /></li>
        <li><input type="button" className="completed" onClick={() => this.props.changeCategory('completed')} name="Completed" value="Completed" /></li>
        <li><input type="button" className="clearCompleted" onClick={this.clearAll} name="clearCompleted" value="Clear completed" /></li>
      </ul>
    )
  }
}


export default NavButtons