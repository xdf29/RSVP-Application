import React, { Component } from 'react'

export class PendingGuest extends Component {

  render() {
    if(this.props.name){
        return (
            <li className="pending">
                <span>{this.props.name}</span>
            </li>
        )
    }
    return null
  }
}

export default PendingGuest
