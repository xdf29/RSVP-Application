import React, { Component } from 'react'

export class Counter extends Component {
  render() {
    return (
      <table className="counter">
        <tbody>
          <tr>
            <td>Attending:</td>
            <td>{this.props.attending}</td>
          </tr>
          <tr>
            <td>Unconfirmed:</td>
            <td>{this.props.unconfirmed}</td>
          </tr>
          <tr>
            <td>Total:</td>
            <td>{this.props.total}</td>
          </tr>
        </tbody>
      </table>
    )
  }
}

export default Counter
