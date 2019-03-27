import React, { Component } from 'react'

export class ConfirmCounter extends Component {
  render() {
    return (
      <label>
        <input type="checkbox" onChange={this.props.toggleFilter} checked={this.props.isFiltered}/> Hide those who haven't responded
      </label>
    )
  }
}

export default ConfirmCounter
