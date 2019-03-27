import React, { Component } from 'react'
import ConfirmCounter from './ConfirmCounter.js'
import Counter from './Counter.js'

export class Main extends Component {
  render() {
    return (
        <div className="main">
            <div>
            <h2>Invitees</h2>
            <ConfirmCounter isFiltered={this.props.isFiltered} toggleFilter={this.props.toggleFilter}/>
            </div>
            <Counter total={this.props.total} attending={this.props.attending} unconfirmed={this.props.unconfirmed}/>
        </div>
    )
  }
}

export default Main
